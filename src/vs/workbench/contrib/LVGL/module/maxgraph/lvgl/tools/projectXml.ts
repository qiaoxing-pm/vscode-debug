import { createXmlDoc, saveAsXML, formatXml, docToString } from "./xml.js"
import type { FontData } from "../../type.js"
// import StructAndVarRelationIntegrateModule from '../../../../api/StructAndVarRelationIntegrateModule/StructAndVarRelationIntegrateModule.js';
import api from '../../../../api/index.js';

import { screenStore, projectStore } from "../store/index.js";
// 保存字体 变量

export function fontDataToXML(doc: XMLDocument): Element {
	const fontsElement = doc.createElement("Fonts");
	projectStore.fontData.forEach((fontData) => {
		const fontElement = doc.createElement("Font");
		fontElement.setAttribute("name", fontData.fontName);
		fontElement.setAttribute("fontAssert", fontData.fontAssert);
		fontElement.setAttribute("size", fontData.fontSize.toString());
		fontElement.setAttribute("letters", fontData.letters.join(","));
		fontElement.setAttribute("range", fontData.range);
		fontElement.setAttribute("symbols", fontData.symbols);
		fontElement.setAttribute("custom", fontData.custom);
		fontsElement.appendChild(fontElement);
	});
	return fontsElement;
}

function xmlToFontData(fontsElement: Element) {
	const fontsData = projectStore.fontData;
	fontsData.splice(0, fontsData.length);
	const fontElements = fontsElement.querySelectorAll("Font");
	fontElements.forEach((fontElement) => {
		const fontData: FontData = {
			fontName: fontElement.getAttribute("name")!,
			fontAssert: fontElement.getAttribute("fontAssert")!,
			fontSize: parseInt(fontElement.getAttribute("fontSize") || "12"),
			bpp: parseInt(fontElement.getAttribute("bpp") || "2"),
			letters: fontElement.getAttribute("letters")?.split(",") || [],
			range: fontElement.getAttribute("range") || "",
			symbols: fontElement.getAttribute("symbols") || "",
			custom: fontElement.getAttribute("custom") || "",
		};
		fontsData.push(fontData);
	});
}


function interfaceToNode(doc: XMLDocument): Element {
	const interfaceEle = doc.createElement("Interface");
	const tree = api.structAndVarRelationIntegrate.getTreeFlattener().buildSourceTree();
	const str = JSON.stringify(tree);
	const content = doc.createElement("Content");
	content.innerHTML = str;
	interfaceEle.appendChild(content);
	return interfaceEle;
}


export function exportProjectXML(fileName?: string, exportVarInterface = true): string {
	const doc = createXmlDoc("Project");
	const root = doc.documentElement;
	const config = {
		width: screenStore.curScreen?.width || 800,
		height: screenStore.curScreen?.height || 600,
		name: screenStore.curScreen?.name || "lvgl_project" + Math.floor(Math.random() * 100),
	};
	for (const key in config) {
		root.setAttribute(key, (config as any)[key].toString());
	}
	const keys = Object.keys(screenStore.screens);
	const infoNode = doc.createElement("Info");
	if (keys.length > 0) {
		const canvasList = doc.createElement("CanvasList");
		keys.forEach(key => {
			const screen = screenStore.screens[key];
			const screenNode = doc.createElement("Canvas");
			screenNode.setAttribute("id", screen.id);
			screenNode.setAttribute("name", screen.name);
			canvasList.appendChild(screenNode);
		});
		canvasList.setAttribute("activeId", screenStore.curScreen?.id ?? "");
		infoNode.appendChild(canvasList);
	}
	root.appendChild(infoNode);
	const fontNode = fontDataToXML(doc);
	root.appendChild(fontNode);
	if (exportVarInterface) {
		const interfaceEle = interfaceToNode(doc);
		root.appendChild(interfaceEle);
	}
	const docStr = formatXml(docToString(doc));
	if (fileName) {
		saveAsXML(docStr, fileName);
	}
	return docStr;
}

export function importProjectXML(xml: string) {
	const parser = new DOMParser();
	const xmlDoc = parser.parseFromString(xml, "application/xml");
	const root = xmlDoc.documentElement;
	if (root.tagName !== "Project") {
		throw new Error("Invalid project XML");
	}
	const fontNode = root.querySelector("Fonts");
	if (fontNode) {
		xmlToFontData(fontNode);
	}
	// const interfaceNode = root.querySelector("Interface");
	// if (interfaceNode) {
	//   const treeContent = interfaceNode.querySelector("Content")?.innerHTML;
	// }
}
