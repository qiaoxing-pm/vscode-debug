import { Graph, Codec, Cell, GraphView } from "../../packages/core/src/index.js";
import { saveAsXML, docToString, createXmlDoc } from "./xml.js";

import { getShapeByCell } from "../events/utils.js";

import isHMIWidget from "../../hmi/static/widgets.js";
import type HMiBase from "../../hmi/elements/HMiBase.js";
import createHMIWidget from "../../hmi/static/createHMIWidget.js";
import type { LvScreen, ImportConfig } from "../../type.js";

const enc = new Codec();

export function xmlToCells(
	graph: Graph,
	xmlNodes: Element[] = [],
	screen: LvObjT,
	parent: Cell | null,
	config: ImportConfig = {}
) {
	// 后续xmlNode应该是解析出来的
	// todo somethings
	if (!xmlNodes.length) return;
	for (let i = 0; i < xmlNodes.length; i++) {
		const xmlNode = xmlNodes[i];
		const id = !config.needId ? " " : xmlNode.getAttribute("id")!;
		const type = xmlNode.getAttribute("type");
		const childrenNode = xmlNode.querySelector("Children");
		const children = childrenNode ? childrenNode.children : [];
		// 获取布局信息
		const layoutNode = xmlNode.getElementsByTagName("Layout")[0];
		let x = 0,
			y = 0,
			dx = 0,
			dy = 0;
		if (config.position) {
			x = config.position.x;
			y = config.position.y;
		} else if (layoutNode) {
			x = parseInt(layoutNode.getAttribute("x") || "0");
			y = parseInt(layoutNode.getAttribute("y") || "0");
		}
		if (config?.offset) {
			x += config.offset.x;
			y += config.offset.y;
		}
		const width = parseInt(layoutNode.getAttribute("width") || "0");
		const height = parseInt(layoutNode.getAttribute("height") || "0");

		const p = parent ?? graph.getDefaultParent();
		const f = isHMIWidget(type || "");
		let cell: Cell | HMiBase;
		if (f) {
			const c = createHMIWidget(type!, x, y, width, height, screen);
			if (!c) {
				console.warn(`Cannot create HMI widget of type: ${type}`);
				continue;
			}
			c.fromXML(xmlNode);
			cell = c;
			graph.addCell(cell, p);
		} else {
			cell = graph.insertVertex(p, id, null, x + dx, y + dy, width, height, {
				// @ts-ignore
				screen,
				shape: `lvgl_${type!.toLowerCase()}`,
				// @ts-ignore
				node: xmlNode,
				foldable: false,
			});
		}
		if (children.length > 0) {
			// 递归插入子节点
			xmlToCells(graph, Array.from(children), screen, cell, config);
		}

		graph.getSelectionModel().setCell(cell);
	}
}

export function cellsToXML(
	node: Element,
	view: GraphView,
	cells: Cell[],
	dict?: Map<string, boolean>
) {
	// const view = graph.getView();
	for (const cell of cells) {
		const shape = getShapeByCell(view.graph, cell);
		if (!shape) continue;

		const xmlElement = shape.toXML(enc.document);
		const children = cell.getChildCells(true, false);
		if (children.length) {
			const element = enc.document.createElement("Children");
			cellsToXML(element, view, children);
			xmlElement.appendChild(element);
		}
		node.appendChild(xmlElement);
	}
}

export function exportXML(
	graph: Graph,
	screen: LvScreen,
	fileName?: string
): string {
	const cells = graph.getChildVertices(graph.getDefaultParent());
	const doc = createXmlDoc("Page");
	// 将全局的变量映射到当前map中
	const map = new Map<string, boolean>();
	// 导出屏幕信息
	if (screen.shape) {
		doc.documentElement.appendChild(screen.shape.toXML(doc));
	}
	cellsToXML(doc.documentElement, graph.getView(), cells, map);

	const xmlDoc = doc.documentElement;

	xmlDoc.setAttribute("name", screen.name);
	xmlDoc.setAttribute("id", screen.id);
	const str = docToString(doc);
	if (fileName) {
		saveAsXML(str, fileName);
	}
	return str;
}

export function importXML(
	graph: Graph,
	xmlString: string,
	screenObj: LvObjT,
	config?: ImportConfig
) {
	const parser = new DOMParser();
	const xmlDoc = parser.parseFromString(xmlString, "text/xml");
	const pageNode = xmlDoc.getElementsByTagName("Page")[0];
	const widgetNodes = Array.from(pageNode.querySelectorAll("Widget") ?? []);
	// 解析字体
	xmlToCells(graph, widgetNodes ?? [], screenObj, null, config);
	return;
}
