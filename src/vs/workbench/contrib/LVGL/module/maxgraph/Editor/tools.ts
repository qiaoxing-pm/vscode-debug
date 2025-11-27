import {
	Graph,
	CellState,
	Cell,
	Geometry,
	Clipboard,
	cellArrayUtils,
	SelectionHandler,
} from "../packages/core/src/index.js";
import { docToString, createXmlDoc } from "../lvgl/tools/xml.js";
import { cellsToXML } from "../lvgl/tools/serialize.js"
import { ChildIdxChange } from "./ChildChange.js";
import type { LvScreen } from "../type.js"


let scale = 1;

const { getTopmostCells } = cellArrayUtils;
function copyCells(cells: Cell[]): Cell[] {
	const result = getTopmostCells(cells);
	Clipboard.insertCount = 1;
	Clipboard.setCells(result);
	return result;
}
function genXML(graph: Graph, cells: Cell[]): string {
	if (cells.length === 0) {
		return "<Transactions></Transactions>";
	}
	const doc = createXmlDoc("Transactions");
	cellsToXML(doc.documentElement, graph.getView(), cells);
	return docToString(doc);
}

function zoom(graph: Graph, screen: LvScreen, add = true) {
	if (add) {
		if (scale >= 0.5 && scale < 2) {
			scale += 0.25;
		} else if (scale >= 2 && scale < 5) {
			scale += 0.5;
		}
	} else {
		if (scale >= 0.5 && scale < 2) {
			scale -= 0.25;
		} else if (scale >= 2 && scale < 5) {
			scale -= 0.5;
		}
	}

	if (scale < 0.5) {
		scale = 0.5;
	}

	if (scale > 5) {
		scale = 5;
	}
	graph.zoomTo(scale);
	screen.scale = scale;

}

export function resetZoom(graph: Graph, screen: LvScreen) {
	scale = 1;
	graph.zoomTo(scale);
	screen.scale = 1;
}

export function groupCells(graph: Graph) {
	const cells = graph.getSelectionModel().cells;
	if (cells.length <= 1) {
		return;
	}
	const p = cells[0].getParent();
	if (!p) {
		return;
	}
	const dataModel = graph.getDataModel();
	dataModel.beginUpdate();
	const group = graph.createGroupCell(cells);
	const style = group.getStyle();
	style.fillColor = "white";
	style.dashed = true;
	style.group = true;
	graph.groupCells(group, 5, cells);
	dataModel.endUpdate();
}

export function ungroupCells(graph: Graph) {
	const cells = graph.getSelectionModel().cells;
	if (cells.length < 1) {
		return;
	}
	const p = cells[0].getParent();
	if (!p) {
		return;
	}
	const dataModel = graph.getDataModel();
	dataModel.beginUpdate();
	const isSameParent = cells.slice(1).every((cell) => {
		const parent = cell.getParent();
		if (!parent) return false;
		return cell.getParent() === p;
	});
	let ss: Cell[] | null = null;
	if (isSameParent && p.style.group) {
		ss = [p];
	}
	graph.ungroupCells(ss);
	dataModel.endUpdate();
}

export {
	copyCells,
	genXML,
	zoom
}

type HorizontalAlign = 'top' | 'middle' | 'bottom';
type VerticalAlign = 'left' | 'center' | 'right';
export function verticalAlign(graph: Graph, mode: VerticalAlign = "center") {
	const cells = graph.getSelectionModel().cells;
	// 以第一个选中的Cell为参照物，移动其它Cell
	if (cells.length <= 0) {
		return;
	}
	const refCell = cells[0];
	const refGeo = refCell.geometry;
	if (!refGeo) {
		return;
	}
	function getAlignOffset(mode: VerticalAlign, refGeo: Geometry): number {
		let alignOffset = 0;
		if (mode === 'left') {
			alignOffset = 0;
		} else if (mode === "center") {
			alignOffset = refGeo.width / 2;
		} else {
			alignOffset = refGeo.width;
		}
		return alignOffset;
	}
	let alignOffset = getAlignOffset(mode, refGeo);
	const refX = refGeo.x + alignOffset;
	const space = 30; // 水平间距
	const dataModel = graph.getDataModel();
	dataModel.beginUpdate();
	let offsetY = refGeo.height;
	cells.slice(1).forEach((cell: Cell, index) => {
		const geo = cell.geometry;
		if (geo) {
			const newX = refX - getAlignOffset(mode, geo);
			const newY = refGeo.y + (index + 1) * space + offsetY;
			const dx = newX - geo.x;
			const dy = newY - geo.y;
			graph.translateCell(cell, dx, dy);
			offsetY += geo.height;
		}
	})
	dataModel.endUpdate();
}

export function horizontalAlign(graph: Graph, mode: HorizontalAlign = "middle") {
	const cells = graph.getSelectionModel().cells;
	// 以第一个选中的Cell为参照物，移动其它Cell
	if (cells.length <= 0) {
		return;
	}
	const refCell = cells[0];
	const refGeo = refCell.geometry;
	if (!refGeo) {
		return;
	}
	function getAlignOffset(mode: HorizontalAlign, refGeo: Geometry): number {
		let alignOffset = 0;
		if (mode === 'top') {
			alignOffset = 0;
		} else if (mode === "middle") {
			alignOffset = refGeo.height / 2;
		} else {
			alignOffset = refGeo.height;
		}
		return alignOffset;
	}
	const refMidY = refGeo.y + getAlignOffset(mode, refGeo);
	const space = 30;
	const dataModel = graph.getDataModel();
	dataModel.beginUpdate();
	let offsetX = refGeo.width;
	cells.slice(1).forEach((cell: Cell, index) => {
		const geo = cell.geometry;
		if (geo) {
			const newY = refMidY - getAlignOffset(mode, geo);
			const newX = refGeo.x + (index + 1) * space + offsetX;
			const dx = newX - geo.x;
			const dy = newY - geo.y;
			graph.translateCell(cell, dx, dy);
			offsetX += geo.width;
		}
	});
	dataModel.endUpdate();
}

export function moveWidgetToTop(graph: Graph,) {
	const cells = getTopmostCells(graph.getSelectionCells());
	const model = graph.getDataModel();
	graph.batchUpdate(() => {
		cells.forEach(cell => {
			const parent = cell.getParent();
			model.execute(new ChildIdxChange(model, parent, cell, 0));
		});
	});
}

export function moveWidgetToBottom(graph: Graph,) {
	const cells = getTopmostCells(graph.getSelectionCells());
	const model = graph.getDataModel();
	graph.batchUpdate(() => {
		cells.forEach(cell => {
			const parent = cell.getParent();
			model.execute(new ChildIdxChange(model, parent, cell, parent ? parent.getChildCount() - 1 : 0));
		});
	});
}

export function changeWidgetChildIdx(graph: Graph, step: number) {

	const cells = getTopmostCells(graph.getSelectionCells());
	graph.batchUpdate(() => {
		cells.forEach(cell => {
			const parent = cell.getParent();
			const preIdx = parent ? parent.getIndex(cell) : -1;
			const newIdx = preIdx + step;
			if (newIdx < 0 || newIdx >= (parent ? parent.getChildCount() : 0) || preIdx === -1 || preIdx === newIdx) {
				return;
			}
			const model = graph.getDataModel();
			model.execute(new ChildIdxChange(model, parent, cell, newIdx));
		})
	});
}
