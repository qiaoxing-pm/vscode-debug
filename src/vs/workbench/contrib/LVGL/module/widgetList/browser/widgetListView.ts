/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IInstantiationService } from "../../../../../../platform/instantiation/common/instantiation.js";
import { IKeybindingService } from "../../../../../../platform/keybinding/common/keybinding.js";
import { IContextMenuService } from "../../../../../../platform/contextview/browser/contextView.js";
import { IThemeService } from "../../../../../../platform/theme/common/themeService.js";
import { IConfigurationService } from "../../../../../../platform/configuration/common/configuration.js";
import { IViewDescriptorService } from "../../../../../common/views.js";
import { IContextKeyService } from "../../../../../../platform/contextkey/common/contextkey.js";
import {
	IViewPaneOptions,
	ViewPane,
} from "../../../../../browser/parts/views/viewPane.js";
import { IOpenerService } from "../../../../../../platform/opener/common/opener.js";
import { IHoverService } from "../../../../../../platform/hover/browser/hover.js";

import { WorkbenchList } from '../../../../../../platform/list/browser/listService.js';
import { CollapsedNodeDelegate, CollapsibleListRenderer, widgetListGroup, widgetListNode } from '../api/class.js';



export class WidgetListView extends ViewPane {
	private list?: WorkbenchList<widgetListGroup | widgetListNode>;

	constructor(
		options: IViewPaneOptions,
		@IKeybindingService keybindingService: IKeybindingService,
		@IContextMenuService contextMenuService: IContextMenuService,
		@IConfigurationService configurationService: IConfigurationService,
		@IContextKeyService contextKeyService: IContextKeyService,
		@IViewDescriptorService viewDescriptorService: IViewDescriptorService,
		@IInstantiationService instantiationService: IInstantiationService,
		@IOpenerService openerService: IOpenerService,
		@IThemeService themeService: IThemeService,
		@IHoverService hoverService: IHoverService
	) {
		super(
			options,
			keybindingService,
			contextMenuService,
			configurationService,
			contextKeyService,
			viewDescriptorService,
			instantiationService,
			openerService,
			themeService,
			hoverService
		);
	}

	items: Array<widgetListGroup> = [
		{
			label: 'basics',
			type: 'folder',
			imgElement: {
				imgData: [
					{ label: 'container', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/basics/container.png" },
					{ label: 'arc', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/basics/arc.png" },
					{ label: 'button', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/basics/button.png" },
					{ label: 'image', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/basics/image.png" },
					{ label: 'image', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/basics/image.png" },
					{ label: 'label', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/basics/label.png" },
					{ label: 'tabpage', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/basics/tabpage.png" },
					{ label: 'tabpage', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/basics/tabpage.png" },
					{ label: 'tabview', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/basics/tabview.png" },
					{ label: 'textarea', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/basics/textarea.png" },
				]
			}
		},
		{
			label: 'controller',
			type: 'folder',
			imgElement: {
				imgData: [
					{ label: 'calendar', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/controller/calendar.png" },
					{ label: 'checkbox', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/controller/checkbox.png" },
					{ label: 'dropdown', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/controller/dropdown.png" },
					{ label: 'imgbutton', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/controller/imgbutton.png" },
					{ label: 'roller', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/controller/roller.png" },
					{ label: 'slider', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/controller/slider.png" },
					{ label: 'spinbox', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/controller/spinbox.png" },
					{ label: 'spinbox', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/controller/spinbox.png" },
					{ label: 'switch', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/controller/switch.png" },
				]
			}
		},
		{
			label: 'lvgl',
			type: 'folder',
			imgElement: {
				imgData: [
					{ label: 'gauge', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/lvgl/gauge.png" },
					{ label: 'led', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/lvgl/led.png" },
				]
			}
		},
		{
			label: 'visualiser',
			type: 'folder',
			imgElement: {
				imgData: [
					{ label: 'bar', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/visualiser/bar.png" },
				]
			}
		},
		{
			label: 'graphics',
			type: 'folder',
			imgElement: {
				imgData: [
					{ label: 'triangle', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/graphics/triangle.svg" },
					{ label: 'rectangle', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/graphics/rectangle.svg" },
					{ label: 'diamond', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/graphics/diamond.svg" },
					{ label: 'parallelogram', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/graphics/parallelogram.svg" },
					{ label: 'polygon', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/graphics/polygon.svg" },
					{ label: 'circle', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/graphics/circle.svg" },
					{ label: 'ellipse', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/graphics/ellipse.svg" },
					{ label: 'partEllipse', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/graphics/part_ellipse.svg" },
					{ label: 'partCircle', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/graphics/part_circle.svg" },
				]
			}
		}
	];

	delegate: CollapsedNodeDelegate = new CollapsedNodeDelegate();

	protected override renderBody(container: HTMLElement): void {
		container.classList.add('widgetList-view');

		const treeContainer = document.createElement('div');
		treeContainer.style.flex = '1';
		treeContainer.style.display = 'flex';
		container.appendChild(treeContainer);

		const render = new CollapsibleListRenderer();

		this.list = this.instantiationService.createInstance(WorkbenchList<widgetListGroup | widgetListNode>,
			'widgetListViewCollapse',
			treeContainer,
			this.delegate,
			[render],
			{
				multipleSelectionSupport: false,
				setRowLineHeight: false,
				horizontalScrolling: false,
				alwaysConsumeMouseWheel: false,
				openOnSingleClick: true,
				accessibilityProvider: {
					getAriaLabel: (element) => {
						return 'element';
					},
					getWidgetAriaLabel: () => 'Collapsible Chat List',
				},
			}
		);

		render.onToggle = () => {
			const flatList = this.buildFlattenedList(this.items);
			if (this.list) {
				this.list.splice(0, this.list.length, flatList);
			}
		};
		this.list.splice(0, this.items.length, this.items);
	}

	// override layoutBody(height: number, width: number): void {
	// 	super.layoutBody(height, width);
	// 	if (this.list && this.delegate) {
	// 		this.delegate.containerWidth = width; // 更新容器宽度
	// 		this.list.layout(height, width);       // 重新布局
	// 	}
	// }












	// 	override layoutBody(height: number, width: number): void {
	//     super.layoutBody(height, width);

	//     if (this.list && this.delegate) {
	//         // 1. 更新容器宽度
	//         this.delegate.containerWidth = width;

	//         // 2. 遍历节点，重新计算高度
	//         const input = this.list.getInput();
	//         if (input) {
	//             const rootNode = this.list.getNode(input);
	//             const nodesToUpdate = rootNode.children;

	//             for (const node of nodesToUpdate) {
	//                 const newHeight = this.delegate.getHeight(node.element);
	//                 this.list.updateElementHeight(node.element, newHeight);
	//             }
	//         }

	//         // 3. 重新布局列表
	//         this.list.layout(height, width);
	//     }
	// }
















	override layoutBody(height: number, width: number): void {
		super.layoutBody(height, width);

		if (this.list && this.delegate) {
			// 1. 更新容器宽度
			this.delegate.containerWidth = width;

			// // 2. 遍历节点，重新计算高度
			// const input = this.list.getInput();
			// if (input) {
			// 	const rootNode = this.list.getNode(input);
			// 	const nodesToUpdate = rootNode.children;

			// 	for (const node of nodesToUpdate) {
			// 		const newHeight = this.delegate.getHeight(node.element);
			// 	}
			// }

			console.log(height, width)
			// 3. 重新布局列表
			this.list.layout(height, width);
		}
	}


	private buildFlattenedList(nodes: widgetListGroup[]): Array<widgetListGroup | widgetListNode> {
		const result: Array<widgetListGroup | widgetListNode> = [];

		for (const node of nodes) {
			result.push(node);

			if (node.expanded && node.imgElement) {
				result.push(node.imgElement); // 子节点直接放入
			}
		}

		return result;
	}



}
