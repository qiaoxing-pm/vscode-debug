import { IListVirtualDelegate } from '../../../../../../base/browser/ui/list/list.js';
import { ITreeRenderer, ITreeElement } from '../../../../../../base/browser/ui/tree/tree.js';
import { IAsyncDataSource } from '../../../../../../base/browser/ui/tree/tree.js';
import { structAndVarRelationIntegrateTreeData } from './constant.js';
// import { type Node } from './type.js';
import type { StructAndVarRelationTreeNodeBase } from "../../../type/type.js"
import api from '../../../api/index.js';

class NodeDelegate implements IListVirtualDelegate<StructAndVarRelationTreeNodeBase> {
	getHeight(): number { return 22; }
	getTemplateId(): string { return 'node'; }
}

class NodeRenderer implements ITreeRenderer<StructAndVarRelationTreeNodeBase, never, { label: HTMLSpanElement }> {
	templateId = 'node';
	renderTemplate(container: HTMLElement) {
		const parent = container.closest(".monaco-tl-row");
		const label = document.createElement('span');
		const twistie = this.getTwistie(container);
		container.appendChild(label);
		return { label, twistie, parent };
	}

	getTwistie(container: HTMLElement) {
		const nodeElement = container.closest('.monaco-tl-row');
		const twistieElement = nodeElement?.querySelector('.monaco-tl-twistie');
		return twistieElement;
	}

	getTwistieClassTemplate(iconClass: string) {
		return `monaco-tl-twistie codicon ${iconClass} collapsible`;
	}

	renderElement(element: ITreeElement<StructAndVarRelationTreeNodeBase>, _index: number, data: { label: HTMLSpanElement, twistie: HTMLDivElement, parent: HTMLDivElement }) {
		data.label.textContent = element.element.name;

		data.parent.onclick = null;
		data.parent.onclick = (e) => {
			api.eventBus.emit("upload", {
				data: element.element,
			})
		}


		element.element.domNode = data.label;
		this.renderTwistie(element.element, data.twistie);
	}

	onclickTreeNode = (dom: HTMLDivElement, target: HTMLElement, treeElement: StructAndVarRelationTreeNodeBase) => {
		console.log(dom, treeElement.name)
		api.eventBus.emit("upload", {
			data: treeElement,
		});
	}


	renderTwistie(element: StructAndVarRelationTreeNodeBase, twistieElement: HTMLElement): boolean {
		switch (element.type) {
			case 'file':
				twistieElement.className = this.getTwistieClassTemplate('codicon-file');
				break;
			case 'tsx':
				twistieElement.className = this.getTwistieClassTemplate('codicon-file');
				break;
		}
		return true;
	}

	disposeTemplate() { }
}

interface rootType {
	name: string;
	id: string;
	parent: StructAndVarRelationTreeNodeBase | null;
	type: string;
	children?: Array<StructAndVarRelationTreeNodeBase>;
}

class StructAndVarRelationIntegrateSource implements IAsyncDataSource<null, StructAndVarRelationTreeNodeBase> {
	private root: rootType = { name: 'root', id: 'root', parent: null, type: 'folder', children: structAndVarRelationIntegrateTreeData };

	hasChildren(element: StructAndVarRelationTreeNodeBase | null): boolean {
		if (element === null) {
			return true;
		}
		if (element.type === 'folder') {
			return true;
		}

		return !!element.children?.length;
	}

	getChildren(node: StructAndVarRelationTreeNodeBase | null): Array<StructAndVarRelationTreeNodeBase> | Promise<Array<StructAndVarRelationTreeNodeBase>> {
		return node ? node.children ?? [] : this.root.children as Array<StructAndVarRelationTreeNodeBase>;
	}

	getParent(node: StructAndVarRelationTreeNodeBase): StructAndVarRelationTreeNodeBase | null {
		return node.parent ?? null;
	}

	getRoot(): rootType {
		return this.root;
	}
}

export {
	StructAndVarRelationIntegrateSource,
	NodeDelegate,
	NodeRenderer,
};
