import {
	Graph,
	Cell,
	GraphDataModel,
	SelectionHandler,
	EventObject,
	InternalEvent,
} from "../../packages/core/src/index.js";
import {
	widgetProps
} from "../store/index.js";
import { LvglBase } from "../package/shapes/lvglBase.js";
import { getShapeByCell, getShapeById } from "../events/utils.js";
import HierarchyChange from "../events/changes/HirerachyChange.js";
import { isValidDropTarget } from "./drop.js";
import type { LvglWidget } from "../../type.js"
import api from "../../../../api/index.js"

let nameIdx = 0;

export function selectWidget(widgets: LvglWidget[], id: string) {
	widgets.forEach(item => {
		item.selected = item.id === id;
		if (item.id === id) {
			api.eventBus.emit(api.constant.componentConstants.CANVAS_WIDGET_SELECT, { ids: [id] })
		}
		if (item.children.length > 0) {
			selectWidget(item.children, id);
		}
	})
}

export function findWidget(widgets: LvglWidget[], id: string, fun?: (item: LvglWidget) => boolean): LvglWidget | null {
	for (let i = 0; i < widgets.length; i++) {
		const item = widgets[i];
		if (fun && fun(item)) {
			return item;
		} else if (!fun && item.id === id) {
			return item;
		}
		if (item.children.length > 0) {
			const child = findWidget(item.children, id);
			if (child) {
				return child;
			}
		}
	}
	return null;
}

export function addWidget(graph: Graph | null, cell: Cell, widgets: LvglWidget[]) {
	if (!graph) return null;
	const widgetType = (cell.style.shape)?.split("_")[1] || "screen";
	const id = cell.id ?? "";
	let selectWidget = findWidget(widgets, id);
	let name = widgetType.toLowerCase() + nameIdx++;
	const cellStyle = cell.getStyle();
	cellStyle.name = name;
	cell.setStyle(cellStyle);

	if (!selectWidget) {
		selectWidget = {
			id,
			widgetType,
			name,
			selected: false,
			children: []
		};
		for (const child of graph.getChildCells(cell, true)) {
			const res = addWidget(graph, child, selectWidget.children);
			if (res) {
				selectWidget.children.push(res);
			}
		}
	}
	return selectWidget;
}

export function getAllWidgets(graph: Graph, root: Cell): LvglWidget {
	const type = (root.style.shape)?.split("_")[1] || "screen";
	const id = root.id || "";
	const shape = getShapeByCell(graph, root);
	let name = "";
	if (shape && shape.name) {
		name = shape.name;
	} else {
		name = type + (type === "screen" ? "" : id);
	}
	const selected = graph.getSelectionModel().isSelected(root);
	let widget: LvglWidget = {
		id,
		widgetType: type,
		name,
		selected,
		children: []
	}
	const cellStyle = root.getStyle();
	cellStyle.name = name;
	root.setStyle(cellStyle);
	const children = graph.getChildCells(root, true);
	const needRemoveIds = [];
	for (const child of children) {
		if (child.parent?.id !== id) {
			needRemoveIds.push(child.id);
			continue; // 确保只获取当前节点的直接子节点
		}
		const res = getAllWidgets(graph, child);
		widget.children.push(res);
	}
	// 删除不属于当前节点的子节点
	for (const childId of needRemoveIds) {
		const idx = children.findIndex(item => item.id === childId);
		if (idx !== -1) {
			children.splice(idx, 1);
		}
	}
	if (needRemoveIds.length > 0) {
		root.children = children; // 更新根节点的子节点
	}
	return widget;
}

export function deleteWidget(widgets: LvglWidget[], id: string) {
	// 先判断第一层有没有
	const index = widgets.findIndex((item) => item.id === id);
	if (index !== -1) {
		widgets.splice(index, 1);
		return;
	}
	const widget = findWidget(widgets, id, (item) => {
		let idx = item.children.findIndex((child) => child.id === id);
		return idx !== -1;
	});
	if (widget) {
		widget.children.slice(widget.children.findIndex((child) => child.id === id), 1);
	}
}

export function widgetTreeToArray(widgets: LvglWidget[]): LvglWidget[] {
	const arr: LvglWidget[] = [];
	for (const item of widgets) {
		arr.push(item);
		if (item.children.length > 0) {
			arr.push(...widgetTreeToArray(item.children));
		}
	}
	return arr;
}

export function moveWidgetToParent(graph: Graph | null, id: string, parentId: string) {
	if (!graph) return;

	const model = graph.getDataModel();
	const cell = model.getCell(id);
	model.beginUpdate();

	if (!cell) {
		return;
	}
	let geo = cell.getGeometry()!;
	const shape = getShapeByCell(graph, cell)!;
	let parent = model.getCell(parentId) ?? graph.getDefaultParent();
	if (parentId === "1") {
		parent = graph.getDefaultParent();
		shape.setParent2(model, null);
		graph.moveCells([cell], geo.x, geo.y, false, parent);
		model.parentForCellChanged(cell, parent, parent.children.length - 1);
	} else {
		const pShape = getShapeByCell(graph, parent)!;
		if (isValidDropTarget(shape.Type, pShape.Type)) {
			const pGeo = parent.getGeometry()!;
			graph.moveCells([cell], geo.x, geo.y, false, parent);
			geo.x = (pGeo.width - geo.width) >> 1;
			geo.y = (pGeo.height - geo.height) >> 1;
			model.setGeometry(cell, geo);
			model.setGeometry(parent, pGeo);
			shape.setParent2(model, pShape);
			model.parentForCellChanged(cell, parent, parent.children.length - 1);
		}
	}
	console.log("moveWidgetToParent", id, parentId);
	graph.fireEvent(new EventObject(InternalEvent.CELLS_ADDED, {}));
	model.endUpdate();

}

export function selectedWidget(graph: Graph | null, id: string) {
	if (!graph) return;
	const selectModel = graph.getSelectionModel();
	if (!id) selectModel.clear();
	const cell = graph.getDataModel().getCell(id);
	const shape = getShapeByCell(graph, cell);
	if (cell && shape) {
		widgetProps.curlvglShape = shape;
		widgetProps.props = shape.Props;
		if (shape instanceof LvglBase && shape.isVisible) {
			selectModel.setCell(cell);
		}
	} else {
		selectModel.clear();
	}
}

export function changeWidgetChildIdx(graph: Graph | null, id: string, preIdx: number, newIdx: number) {
	if (!graph) return;
	console.log(`Changing widget child index from ${preIdx} to ${newIdx} for widget ${id}`);
	const parent = graph.getDataModel().getCell(id);
	if (!parent) return;
	const children = parent.getChildren();
	const len = parent.getChildCount();
	if (newIdx < 0 || newIdx >= len) return;
	const curCell = children[preIdx];
	const tarCell = children[newIdx];
	children[preIdx] = tarCell;
	children[newIdx] = curCell;
	const shape = getShapeByCell(graph, curCell)! as LvglBase;
	if (shape) {
		shape.moveToIdx(newIdx);
	}
	const view = graph.getView();
	view.invalidate(curCell);
	view.validate(tarCell);
	const handler = graph.getPlugin(SelectionHandler.pluginId) as SelectionHandler;
	handler.reset();
}

export function addWidget2(dataModel: GraphDataModel, widgets: LvglWidget[], widget: LvglWidget, parent: LvglWidget | null) {

	dataModel.execute(new HierarchyChange(widgets, widget, parent, true));

}


export function deleteWidget2(dataModel: GraphDataModel, widgets: LvglWidget[], widget: LvglWidget, parent: LvglWidget | null) {

	dataModel.execute(new HierarchyChange(widgets, widget, parent, false));

}
