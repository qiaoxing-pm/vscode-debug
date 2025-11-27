// import { saveAs } from "file-saver";

export function formatXml(xml: string) {
	const PADDING = "  "; // 缩进用的空格
	const reg = /(>)(<)(\/*)/g;
	let formatted = "";
	let pad = 0;

	xml = xml.replace(reg, "$1\r\n$2$3");
	xml.split("\r\n").forEach((node) => {
		let indent = 0;
		if (node.match(/.+<\/\w[^>]*>$/)) {
			indent = 0;
		} else if (node.match(/^<\/\w/)) {
			if (pad !== 0) {
				pad -= 1;
			}
		} else if (node.match(/^<\w[^>]*[^\/]>.*$/)) {
			indent = 1;
		} else {
			indent = 0;
		}

		formatted += PADDING.repeat(pad) + node + "\r\n";
		pad += indent;
	});

	return formatted;
}

export function createXmlDoc(
	rootTag: string = "Page"
): Document {
	const parser = new DOMParser();
	const xmlDoc = parser.parseFromString(`<${rootTag}></${rootTag}>`, "application/xml");
	// 如果Tag 是 Page 需要载入屏幕信息
	return xmlDoc;
}

export function docToString(doc: Document): string {
	const serializer = new XMLSerializer();
	return serializer.serializeToString(doc);
}




export function saveAsXML(xmlString: string, fileName = "lvgl_object.xml") {
	const formattedXml = formatXml(xmlString);
	const blob = new Blob([formattedXml], { type: "application/xml" });
	// saveAs(blob, fileName);
}



