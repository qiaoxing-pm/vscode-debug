// // import { IListVirtualDelegate } from "../../../../../../base/browser/ui/list/list.js";
// // import { ITreeRenderer, ITreeElement } from "../../../../../../base/browser/ui/tree/tree.js";
// // import { IAsyncDataSource } from "../../../../../../base/browser/ui/tree/tree.js";
// // import { projectTreeData } from './constant.js';
// // import type { Node, TreeNodeDom } from "./type.js";





// // export class NodeDelegate implements IListVirtualDelegate<Node> {
// // 	getHeight(): number {
// // 		return 22;
// // 	};

// // 	getTemplateId(): string {
// // 		return 'node';
// // 	};
// // }


// // export class NodeRenderer implements ITreeRenderer<Node, never, { label: HTMLSpanElement }> {
// // 	templateId = 'node';

// // 	renderTemplate(container: HTMLElement): TreeNodeDom {
// // 		const label = document.createElement('span');
// // 		const twistie = this.getTwistie(container) as HTMLDivElement;
// // 		container.appendChild(label);
// // 		return {
// // 			label,
// // 			twistie,
// // 		}
// // 	}

// // 	getTwistie(container: HTMLElement) {
// // 		const nodeElement = container.closest('.monaco-tl-row');
// // 		const twistieElement = nodeElement?.querySelector('.monaco-tl-twistie');
// // 		return twistieElement;
// // 	}

// // 	getTwistieClassTemplate(iconClass: string) {
// // 		return `monaco-tl-twistie codicon ${iconClass} collapsible`;
// // 	}

// // 	renderElement(element: ITreeElement<Node>, _index: number, data: TreeNodeDom) {
// // 		data.label.textContent = element.element.label;
// // 		this.renderTwistie(element.element, data.twistie);
// // 	}

// // 	renderTwistie(element: Node, twistieElement: HTMLElement): boolean {

// // 		return true;
// // 	}

// // 	disposeTemplate() { }
// // }


// // export class ProjectTreeDataSource implements IAsyncDataSource<null, Node> {
// // 	getChildren(element: Node | null): Iterable<Node> | Promise<Iterable<Node>> {
// // 		if (element === null) {
// // 			return projectTreeData;
// // 		}

// // 		return element.children ?? [];
// // 	}

// // 	hasChildren(element: Node | null): boolean {
// // 		if (element === null) {
// // 			return true;
// // 		}

// // 		return !!element.children?.length;
// // 	}
// // }

















// import { IListVirtualDelegate } from "../../../../../../base/browser/ui/list/list.js";
// import { ITreeRenderer, ITreeElement } from "../../../../../../base/browser/ui/tree/tree.js";
// import { IAsyncDataSource } from "../../../../../../base/browser/ui/tree/tree.js";
// import { projectTreeData } from './constant.js';
// import type { Node, TreeNodeDom } from "./type.js";





// export class NodeDelegate implements IListVirtualDelegate<Node> {
// 	getHeight(): number {
// 		return 22;
// 	};

// 	getTemplateId(): string {
// 		return 'node';
// 	};
// }


// export class NodeRenderer implements ITreeRenderer<Node, never, { label: HTMLSpanElement }> {
// 	templateId = 'node';

// 	renderTemplate(container: HTMLElement) {

// 		// 普通行内容
// 		const label = document.createElement('span');
// 		const parent = container.closest('.monaco-tl-row');
// 		label.className = "node-label";

// 		container.appendChild(label);

// 		// ⭐额外内容容器（默认折叠）
// 		const extra = document.createElement('div');
// 		extra.className = "node-extra-content";
// 		// extra.style.display = "none"; // 默认隐藏
// 		extra.style.paddingLeft = "20px";
// 		container.appendChild(extra);

// 		return { label, extra, container, parent };
// 	}

// 	getTwistie(container: HTMLElement) {
// 		const nodeElement = container.closest('.monaco-tl-row');
// 		const twistieElement = nodeElement?.querySelector('.monaco-tl-twistie');
// 		return twistieElement;
// 	}

// 	getTwistieClassTemplate(iconClass: string) {
// 		return `monaco-tl-twistie codicon ${iconClass} collapsible`;
// 	}

// 	renderElement(element: ITreeElement<Node>, _index: number, data: TreeNodeDom) {
// 		data.label.textContent = element.element.label;

// 		const treeNode = this.getTreeNode(data.container).treeNode;

// 		const node = element.element;
// 		console.log(node, element);
// 		data.parent.onclick = (e) => {
// 			if (element.collapsed) {
// 				// data.parent.innerHTML = this.renderCards();
// 			}
// 			console.log(e.target, element.collapsed)
// 		}
// 		// if (node.type === 'module') {
// 		// 	// 获取是否展开
// 		// 	const expanded = element.collapsed === false;

// 		// 	if (expanded) {
// 		// 		data.extra.style.display = "block";
// 		// 		data.extra.innerHTML = this.renderCards();
// 		// 	} else {
// 		// 		data.extra.style.display = "none";
// 		// 		data.extra.innerHTML = "";
// 		// 	}
// 		// } else {
// 		// 	data.extra.style.display = "none";
// 		// 	data.extra.innerHTML = "";
// 		// }
// 	}
// 	onclickTreeNode = (dom: HTMLDivElement, target: HTMLElement, treeElement: any) => {
// 		console.log(dom, treeElement.name)
// 	}
// 	renderTwistie(element: Node, twistieElement: HTMLElement): boolean {

// 		return true;
// 	}
// 	renderCards() {
// 		return `
//             <div class="card">
//                 <h3>项目 A</h3>
//                 <p>描述信息...</p>
//             </div>
//             <div class="card">
//                 <h3>项目 B</h3>
//                 <p>描述信息...</p>
//             </div>
//         `;
// 	}

// 	getTreeNode(container: HTMLElement) {
// 		const nodeElement = container.closest('.monaco-tl-row');
// 		const twistieElement = nodeElement?.querySelector('.monaco-tl-twistie');

// 		return {
// 			treeNode: nodeElement,
// 			treeTwistie: twistieElement
// 		}

// 	}
// 	disposeTemplate() { }
// }


// export class ProjectTreeDataSource implements IAsyncDataSource<null, Node> {
// 	getChildren(element: Node | null): Iterable<Node> | Promise<Iterable<Node>> {
// 		if (element === null) {
// 			return projectTreeData;
// 		}

// 		return element.children ?? [];
// 	}

// 	hasChildren(element: Node | null): boolean {
// 		if (element === null) {
// 			return true;
// 		}

// 		return !!element.children?.length;
// 	}
// }


















import { IListVirtualDelegate } from "../../../../../../base/browser/ui/list/list.js";
import { ITreeRenderer, ITreeElement } from "../../../../../../base/browser/ui/tree/tree.js";
import { IAsyncDataSource } from "../../../../../../base/browser/ui/tree/tree.js";
import { projectTreeData } from './constant.js';
import type { Node } from "./type.js";

export class NodeDelegate implements IListVirtualDelegate<Node> {
	getHeight(): number {
		return 22;
	}

	getTemplateId(): string {
		return "node";
	}
}

export class NodeRenderer implements ITreeRenderer<Node, never, { label: HTMLSpanElement }> {
	templateId = "node";

	renderTemplate(container: HTMLElement) {
		const label = document.createElement("span");
		label.className = "node-label";
		container.appendChild(label);
		return { label };
	}

	renderElement(element: ITreeElement<Node>, _index: number, data: any) {
		data.label.textContent = element.element.label;
	}

	disposeTemplate() { }
}

export class ProjectTreeDataSource implements IAsyncDataSource<null, Node> {
	getChildren(element: Node | null): Iterable<Node> | Promise<Iterable<Node>> {
		if (element === null) return projectTreeData;
		return element.children ?? [];
	}

	hasChildren(element: Node | null): boolean {
		if (element === null) return true;
		return !!element.children?.length;
	}
}
