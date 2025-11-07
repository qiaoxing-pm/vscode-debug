import { IListRenderer } from '../../../../../../base/browser/ui/list/list.js';


export interface widgetListNode {
	label: string;
	imgUrl: string;
}


export interface widgetListGroup {
	label: string;
	type: string;
	children?: Array<widgetListNode>;
	expanded?: boolean;
}


export class CollapsedNodeDelegate {
	getHeight(element: widgetListGroup) { return 24; }
	getTemplateId(element: widgetListGroup) { return 'FlatCollapsibleListRenderer'; }
}

const SPAN_CLASS = "";
const IMG_CLASS = "";
const ICON_CLASS = "";

export class CollapsibleListRenderer implements IListRenderer<widgetListGroup, any> {
	templateId = 'FlatCollapsibleListRenderer';
	onToggle?: (node: widgetListGroup) => void;

	renderTemplate(container: HTMLElement) {
		const label = document.createElement('span');
		const img = document.createElement('img');
		const icon = document.createElement('span');
		icon.className = ICON_CLASS;
		icon.style.display = 'none';
		icon.style.width = '0px';
		icon.style.height = '0px';
		label.className = SPAN_CLASS;
		label.style.display = 'none';
		label.style.width = '0px';
		label.style.height = '0px';
		img.className = IMG_CLASS;
		img.style.display = 'none'; // 默认隐藏
		img.style.width = '0px';
		img.style.height = '0px';
		container.appendChild(icon);
		container.appendChild(label);
		container.appendChild(img);
		return { icon, label, img };
	}
	renderElement(element: widgetListGroup | widgetListNode, index: number, templateData: any) {
		// console.log(element instanceof widgetListGroup)


		if ("imgUrl" in element) {
			this.initImg(element as widgetListNode, templateData);
		} else {
			this.initLabel(element as widgetListGroup, templateData);
		}



		// if ('imgUrl' in element) {
		// 	templateData.label.style.display = 'none';
		// 	templateData.img.src = element.imgUrl;
		// 	templateData.img.style.display = 'inline-block';
		// } else {
		// 	// 一级节点
		// 	templateData.label.style.display = 'inline-block';
		// 	templateData.label.textContent = element.children?.length
		// 		? (element.expanded ? '▼ ' : '▶ ') + element.label
		// 		: element.label;
		// 	templateData.label.onclick = () => {
		// 		if (element.children?.length) {
		// 			element.expanded = !element.expanded;
		// 			this.onToggle?.(element);
		// 		}
		// 	};
		// 	templateData.img.style.display = 'none';
		// }
	}

	disposeTemplate(templateData: any): void {
		console.log(templateData);
	}

	canRender(element: widgetListGroup): boolean {
		return true; // 或根据 element.type 判断
	}

	private initLabel(element: widgetListGroup, templateData: HTMLElement) {

	}

	private initImg(element: widgetListNode, templateData: HTMLElement) {

	}

}
