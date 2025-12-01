import { ICompressedTreeNode } from '../../../../../base/browser/ui/tree/compressedObjectTreeModel.js';
import { ITreeNode, ITreeRenderer } from '../../../../../base/browser/ui/tree/tree.js';
import { FuzzyScore } from '../../../../../base/common/filters.js';
import { URI } from '../../../../../base/common/uri.js';
import { IInstantiationService } from '../../../../../platform/instantiation/common/instantiation.js';
import { IEditorGroupsService } from '../../../../services/editor/common/editorGroupsService.js';
import { IEditorService } from '../../../../services/editor/common/editorService.js';
import { VirtualJSXEditorInput } from '../../../LVGL/module/maxgraph/vscodeEditor/browser/CustomEditor/VirtualJSXEditorInput.js';
import { ExplorerItem } from '../../common/explorerModel.js';

interface IUntypedEditorInput {
	resource?: URI;      // 资源 URI
	editorId?: string;   // 注册时的编辑器 ID
	pinned?: boolean;    // 是否固定
	inactive?: boolean;  // 是否非激活
}



export const VIRTUAL_NODE_TEMPLATE_ID = 'virtualJsxNodeTemplate';
export const VIRTUAL_TEMPLATE_ID = "virtualTemplateId";

export interface IVirtualNode {
	resource: {
		toString(): string;
	};
	getId(): string;
	isVirtual: boolean;
	children?: Array<IVirtualNode>;
}

export class VirtualNode implements IVirtualNode {
	constructor(
		public readonly name: string,
		public readonly children: VirtualNode[] | undefined
	) { }

	public isVirtual = false;
	public resource = {
	}

	getId() {
		return this.name;
	}

	toString(): string {
		return this.name;
	}

}



export class VirtualJSXNode extends VirtualNode {


	constructor(
		public override readonly name: string,
		public readonly type: 'class' | 'function' | 'container',
		public readonly parent: ExplorerItem,
		public override readonly children: VirtualJSXNode[] | undefined

	) {

		super(name, children);
		this.resource = parent.resource;

	}

	public override isVirtual = false;
	public override resource = {
		toString() {
			return "";
		}
	}

	get isDirectory(): boolean {
		return !!this.children;
	}

}


export class VirtualJSXNodeRenderer implements ITreeRenderer<VirtualJSXNode, FuzzyScore, IVirtualNodeTemplate> {

	templateId = VIRTUAL_NODE_TEMPLATE_ID;
	constructor(
		@IInstantiationService private readonly instantiationService: IInstantiationService,
		@IEditorService private readonly editorService: IEditorService,
		@IEditorGroupsService private readonly editorGroupsService: IEditorGroupsService,
	) { }
	renderTemplate(container: HTMLElement): IVirtualNodeTemplate {
		const label = document.createElement('div');
		label.className = 'label';
		container.appendChild(label);
		label.addEventListener('click', (e) => { console.log(e) })

		return { label };
	}
	renderCompressedElements(
		node: ITreeNode<ICompressedTreeNode<ExplorerItem | VirtualJSXNode>, FuzzyScore>,
		index: number,
		templateData: IVirtualNodeTemplate,
	) {
		// 你可以显示 "A/B/C"，也可以只显示第一个
		const names = node.element.elements.map(e => e.name).join('/');
		templateData.label.textContent = names;
	}
	renderElement(node: ITreeNode<VirtualJSXNode, FuzzyScore>, _index: number, template: IVirtualNodeTemplate): void {
		template.label.textContent = node.element.name;

		template.label.addEventListener('click', (e) => {
			const stat = node.element;
			console.log("点击了虚拟属性", stat)
			// 	const stat = node.element;
			// 	if ((stat.resource as unknown as URI).path.endsWith('.jsx')) {
			// 		this.editorService.openEditor({ resource: stat.resource })
			// 	}
		});
	}

	disposeTemplate(_templateData: IVirtualNodeTemplate): void { }
}

interface IVirtualNodeTemplate {
	label: HTMLElement;
}



export enum VirtualNodeType {
	jsx,
}



