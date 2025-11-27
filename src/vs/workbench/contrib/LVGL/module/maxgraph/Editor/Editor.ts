import {
	Graph,
	Cell,
} from "../packages/core/src/index.js";
import { docToString, createXmlDoc } from "../lvgl/tools/xml.js";
import { cellsToXML, exportXML, xmlToCells } from "../lvgl/tools/serialize.js"
import {
	genXML,
	copyCells,
	zoom,
	resetZoom,
	groupCells,
	ungroupCells,
	horizontalAlign,
	verticalAlign,
	moveWidgetToBottom,
	moveWidgetToTop,
	changeWidgetChildIdx
} from "./tools.js"
import type LvglGraph from "../lvgl/elements/lvglGraph.js";
import { exportProjectXML } from "../lvgl/tools/projectXml.js";
import { compileProject, downloadCompiledFile } from "../lvgl/bottomtab/func.js";
import type { LvScreen, ImportConfig } from "../type.js"

class Editor {
	private static first = true;
	private static instance: Editor;
	private handlers: Map<string, Function> = new Map();
	public static CreateEditorInstance() {
		if (this.first) {
			this.first = false;
			this.instance = new Editor();
		}
		return this.instance;
	}

	private constructor() {

	}

	resgisterHandler(name: string, handler: Function) {
		if (!this.handlers.has(name)) {
			this.handlers.set(name, handler);
		}
	}

	getHandler(name: string): Function | null {
		return this.handlers.get(name) || null;
	}

	exportProject() {
		const name = "hmi_project.xml";
		return exportProjectXML(name);
	}

	exportCanvas(graph: Graph, screen: LvScreen) {
		exportXML(graph, screen, "hmi_canvas.xml");
	}

	copy(graph: Graph) {
		const cells = copyCells(graph.getSelectionCells());
		const str = genXML(graph, cells);
		navigator.clipboard.writeText(str);
	}

	cut(graph: Graph) {
		const cells = copyCells(graph.getSelectionCells());
		graph.removeCells(cells, true);
		const str = genXML(graph, cells);
		navigator.clipboard.writeText(str);
	}

	paste(graph: Graph, xmlString: string, screenObj: LvObjT, config: ImportConfig) {
		if (xmlString.substring(0, 14) !== "<Transactions>") {
			return;
		}
		const parser = new DOMParser();
		const xmlDoc = parser.parseFromString(xmlString, "application/xml");
		// 不能使用querySelectorAll，会返回所有的widget节点，包括那些在Children节点下的
		const widgetNodes = [] as Element[];
		xmlDoc.documentElement.childNodes.forEach((node) => {
			if (node.nodeName === "Widget") {
				widgetNodes.push(node as Element);
			}
		});
		if (widgetNodes.length === 0) {
			return;
		}
		const newConfig: ImportConfig = {
			...config,
			needId: false, // 不需要id 由graph自动生成
		};
		graph.batchUpdate(() => {
			xmlToCells(graph, Array.from(widgetNodes), screenObj, null, newConfig)
		});
	}

	delete(graph: Graph) {
		const cells = graph.getSelectionCells();
		graph.removeCells(cells, true);
	}

	lock(graph: Graph) {
		graph.batchUpdate(() => {
			const cells = graph.getSelectionCells();
			cells.forEach((cell) => {
				const style = graph.getCellStyle(cell);
				style.movable = false;
				style.resizable = false;
				graph.model.setStyle(cell, style);
			});
		})
	}

	unlock(graph: Graph) {
		graph.batchUpdate(() => {
			const cells = graph.getSelectionCells();
			cells.forEach((cell) => {
				const style = graph.getCellStyle(cell);
				style.movable = true;
				style.resizable = true;
				graph.model.setStyle(cell, style);
			});
		})
	}

	undo(graph: LvglGraph) {
		graph.undoManager.undo();
	}
	redo(graph: LvglGraph) {
		graph.undoManager.redo();
	}

	zoomIn(graph: Graph, screen: LvScreen) {
		zoom(graph, screen, true);
	}
	zoomOut(graph: Graph, screen: LvScreen) {
		zoom(graph, screen, false);
	}

	resetZoom(graph: Graph, screen: LvScreen) {
		resetZoom(graph, screen);
	}

	group(graph: Graph) {
		groupCells(graph);
	}

	ungroup(graph: Graph) {
		ungroupCells(graph);
	}

	topAlign(graph: Graph) {
		horizontalAlign(graph, "top");
	}
	midHAlign(graph: Graph) {
		horizontalAlign(graph, "middle");
	}
	bottomAlign(graph: Graph) {
		horizontalAlign(graph, "bottom");
	}

	leftAlign(graph: Graph) {
		verticalAlign(graph, "left");
	}
	centerVAlign(graph: Graph) {
		verticalAlign(graph, "center");
	}
	rightAlign(graph: Graph) {
		verticalAlign(graph, "right");
	}

	moveIndexUp(graph: Graph) {
		changeWidgetChildIdx(graph, -1);
	}

	moveIndexDown(graph: Graph) {
		changeWidgetChildIdx(graph, 1);
	}

	moveToTop(graph: Graph) {
		moveWidgetToTop(graph);
	}
	moveToBottom(graph: Graph) {
		moveWidgetToBottom(graph);
	}

	compile() {
		compileProject();
	}

	download() {
		downloadCompiledFile();
	}
}

export default Editor.CreateEditorInstance();

