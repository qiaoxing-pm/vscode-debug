import { ExplorerItem } from '../../common/explorerModel.js';
import { VirtualJSXNode, VIRTUAL_NODE_TEMPLATE_ID, VirtualNode } from "./VirtualJSXNode.js"



export function parseJSX(element: ExplorerItem): VirtualNode[] {

	// 示例：真实情况下你解析文件内容返回结构
	return [
		new VirtualJSXNode("Classes", "container", element, undefined),

		new VirtualJSXNode("Functions", "container", element, undefined)
	];
}


export function isCustomFile(element: ExplorerItem | ExplorerItem[]): boolean {
	if (!Array.isArray(element) && !element?.isDirectory && !element.isDirectory) {
		const elementPath = element.resource.path.split('.').pop()?.toLowerCase();
		switch (elementPath) {
			case 'jsx': {
				return true;
			}
		}
	}

	return false;
}
