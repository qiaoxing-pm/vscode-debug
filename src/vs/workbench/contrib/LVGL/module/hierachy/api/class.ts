import { IListVirtualDelegate } from '../../../../../../base/browser/ui/list/list.js';
import { ITreeRenderer, ITreeElement } from '../../../../../../base/browser/ui/tree/tree.js';
import { IAsyncDataSource } from '../../../../../../base/browser/ui/tree/tree.js';
import { hierachyTreeData } from './constant.js';


interface Node {
	label: string;
	type: 'folder' | 'file' | 'tsx';
	children?: Node[];
}

class NodeDelegate implements IListVirtualDelegate<Node> {
	getHeight(): number { return 22; }
	getTemplateId(): string { return 'node'; }
}

class NodeRenderer implements ITreeRenderer<Node, never, { label: HTMLSpanElement }> {
	templateId = 'node';
	renderTemplate(container: HTMLElement) {
		const label = document.createElement('span');
		const twistie = this.getTwistie(container);
		container.appendChild(label);
		return { label, twistie };
	}

	getTwistie(container: HTMLElement) {
		const nodeElement = container.closest('.monaco-tl-row');
		const twistieElement = nodeElement?.querySelector('.monaco-tl-twistie');
		return twistieElement;
	}

	getTwistieClassTemplate(iconClass: string) {
		return `monaco-tl-twistie codicon ${iconClass} collapsible`;
	}

	renderElement(element: ITreeElement<Node>, _index: number, data: { label: HTMLSpanElement, twistie: HTMLDivElement }) {
		data.label.textContent = element.element.label;
		this.renderTwistie(element.element, data.twistie);
	}

	renderTwistie(element: Node, twistieElement: HTMLElement): boolean {
		// switch (element.type) {
		// 	case 'file':
		// 		// twistieElement.className = this.getTwistieClassTemplate('codicon codicon-file');
		// 		// twistieElement.style.paddingLeft = "22px";
		// 		break;
		// 	case 'tsx':
		// 		// twistieElement.className = this.getTwistieClassTemplate('codicon codicon-file');
		// 		// twistieElement.style.paddingLeft = "22px";
		// 		break;
		// }
		// twistieElement.style.paddingLeft = "22px";
		twistieElement.classList.add("twistieElementPadding")
		return true;
	}

	disposeTemplate() { }
}

class HierarchyTreeDataSource implements IAsyncDataSource<null, Node> {

	getChildren(element: Node | null): Iterable<Node> | Promise<Iterable<Node>> {
		if (element === null) {
			// 根节点
			return hierachyTreeData;
		}

		return element.children ?? [];
	}

	hasChildren(element: Node | null): boolean {
		if (element === null) {
			return true; // 根节点有子节点
		}

		return !!element.children?.length;
	}
}



export {
	HierarchyTreeDataSource,
	NodeDelegate,
	NodeRenderer,
	Node,
};
