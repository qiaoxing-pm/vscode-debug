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
import api from '../../../api/index.js';
import { imgData } from "../api/constant.js";




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


	delegate: CollapsedNodeDelegate = new CollapsedNodeDelegate();

	protected override renderBody(container: HTMLElement): void {
		container.classList.add('widgetList-view');

		const treeContainer = document.createElement('div');
		treeContainer.style.flex = '1';
		treeContainer.style.display = 'flex';
		container.appendChild(treeContainer);

		treeContainer.addEventListener('dragstart', (e: DragEvent) => {
			const emptyImg = document.createElement('div');
			emptyImg.style.width = '0px';
			emptyImg.style.height = '0px';
			e.dataTransfer?.setDragImage(emptyImg, 0, 0);
		});

		treeContainer.addEventListener('drag', (e: DragEvent) => {
			api.eventBus.emit("widgetList_draging", { e });
		});

		treeContainer.addEventListener('dragend', (e: DragEvent) => {
			api.eventBus.emit('widgetList_drag_end', {
				x: e.clientX,
				y: e.clientY
			})
		});
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
				dnd: {
					getDragURI: () => null, // 返回 null 表示不允许拖拽
					onDragOver: () => false, // 不允许拖拽悬停
					drop: () => { }, // 不执行 drop
					dispose: () => { }, // 可选，但接口要求实现 IDisposable
				},
				accessibilityProvider: {
					getAriaLabel: (element) => {
						return 'element';
					},
					getWidgetAriaLabel: () => 'Collapsible Chat List',
				},
			}
		);

		render.onToggle = () => {
			const flatList = this.buildFlattenedList(imgData);
			if (this.list) {
				this.list.splice(0, this.list.length, flatList);
			}
		};
		this.list.splice(0, imgData.length, imgData);
	}


	override layoutBody(height: number, width: number): void {
		super.layoutBody(height, width);

		if (this.list && this.delegate) {
			this.delegate.containerWidth = width;
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
