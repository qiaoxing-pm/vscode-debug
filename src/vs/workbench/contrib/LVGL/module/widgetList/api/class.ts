import { IListRenderer } from '../../../../../../base/browser/ui/list/list.js';

export interface widgetHtmlElement {
	icon: HTMLElement;
	label: HTMLElement;
	img: HTMLElement;
	parent: HTMLElement;
}


export interface widgetListNodeImg {
	label: string;
	imgUrl: string;
}

export interface widgetListNode {
	imgData: Array<widgetListNodeImg>;
}


export interface widgetListGroup {
	label: string;
	type: string;
	imgElement?: widgetListNode;
	expanded?: boolean;
}

export class CollapsedNodeDelegate {
	imgWidth = 80;
	imgHeight = 92;
	gap = 8;

	containerWidth = 0;

	getHeight(element: widgetListGroup | widgetListNode) {
		if ("imgData" in element && element.imgData?.length && this.containerWidth) {
			const itemsPerRow = Math.floor((this.containerWidth + this.gap) / (this.imgWidth + this.gap));
			const rowCount = Math.ceil(element.imgData.length / itemsPerRow);
			return rowCount * (this.imgHeight + this.gap) + this.gap;
		}
		return 22;
	}

	getTemplateId(element: widgetListGroup) {
		return 'FlatCollapsibleListRenderer';
	}
}





const IMG_CLASS = "img_class";

export class CollapsibleListRenderer implements IListRenderer<widgetListGroup, any> {
	templateId = 'FlatCollapsibleListRenderer';
	onToggle?: (node: widgetListGroup, nodeHTMLElement: widgetHtmlElement) => void;
	renderTemplate(container: HTMLElement): widgetHtmlElement {
		const label = document.createElement('span');
		const img = document.createElement('div');
		const icon = document.createElement('span');
		icon.className = "codicon codicon-tree-item-expanded collapsible widget-icon";
		icon.style.display = 'none';
		label.className = "widget-label";
		label.style.display = 'none';
		img.className = IMG_CLASS;
		img.style.display = 'none';
		container.appendChild(icon);
		container.appendChild(label);
		container.appendChild(img);
		return { icon, label, img, parent: container };
	}
	renderElement(element: widgetListGroup | widgetListNode, index: number, templateData: widgetHtmlElement) {
		if ("imgData" in element) {
			this.initImg(element as unknown as widgetListNode, templateData);
		} else {
			this.initLabel(element as widgetListGroup, templateData);
		}
	}

	disposeTemplate(templateData: any): void {
	}

	private initLabel(element: widgetListGroup, templateData: widgetHtmlElement) {
		const { icon, label, img, parent } = templateData;
		parent.style.display = 'flex';
		parent.style.alignItems = "center";
		icon.style.display = 'inline-block';
		icon.style.transform = element.expanded ? "rotate(0deg)" : "rotate(-90deg)";
		label.style.display = 'inline-block';
		label.textContent = element.label;
		img.style.display = "none";
		parent.onclick = () => {
			element.expanded = !element.expanded;
			icon.style.transform = element.expanded ? "rotate(0deg)" : "rotate(-90deg)";
			this.onToggle?.(element, templateData);
		};
	}

	private initImg(element: widgetListNode, templateData: widgetHtmlElement) {
		const { icon, label, img, parent } = templateData;
		parent.style.display = 'block';
		icon.style.display = 'none';
		label.style.display = 'none';
		parent.onclick = null;
		img.style.display = 'flex';
		img.innerHTML = '';
		img.className = "img-wrapper";
		const imgRef = [];
		element.imgData.forEach((item) => {
			const imgWrapper = document.createElement('div');
			const imgWrapperContent = document.createElement('img');
			const imgWrapperTitle = document.createElement('div');
			imgWrapper.className = "img-item-wrapper";
			imgWrapperTitle.className = 'img-item-title';
			imgWrapperContent.className = 'img-item-content';
			imgWrapperTitle.textContent = item.label;
			imgWrapperContent.src = item.imgUrl;
			imgWrapper.appendChild(imgWrapperContent);
			imgWrapper.appendChild(imgWrapperTitle);
			img.appendChild(imgWrapper);
			imgRef.push(imgWrapper);
		});
	}
}
