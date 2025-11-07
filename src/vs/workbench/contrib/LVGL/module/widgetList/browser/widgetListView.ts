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
import { CollapsedNodeDelegate, CollapsibleListRenderer, widgetListGroup, widgetListNode } from '../class/index.js';
// import basics from "../../../images/basics/container.png"



export class WidgetListView extends ViewPane {
	private list?: WorkbenchList<widgetListGroup>;

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
			label: 'basics', type: 'folder', children: [
				{ label: 'basics1', imgUrl: "http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/images/basics/container.png" }
			]
		},
		{ label: 'controller', type: 'folder' },
		{ label: 'lvgl', type: 'folder' },
		{ label: 'visualiser', type: 'folder' },
		{ label: 'graphics', type: 'folder' }
	];


	protected override renderBody(container: HTMLElement): void {
		container.classList.add('widgetList-view');

		const treeContainer = document.createElement('div');
		treeContainer.style.flex = '1';
		treeContainer.style.display = 'flex';
		container.appendChild(treeContainer);

		const delegate = new CollapsedNodeDelegate();
		const render = new CollapsibleListRenderer();

		this.list = this.instantiationService.createInstance(WorkbenchList<widgetListGroup>,
			'widgetListViewCollapse',
			treeContainer,
			delegate,
			[render],
			{
				multipleSelectionSupport: false,
				setRowLineHeight: false,
				horizontalScrolling: false,
				alwaysConsumeMouseWheel: false,
				openOnSingleClick: true,
				accessibilityProvider: {
					getAriaLabel: (element) => {
						console.log('element', element);
						return 'element';
					},
					getWidgetAriaLabel: () => 'Collapsible Chat List',
				},
			}
		);

		render.onToggle = () => {
			const flatList = this.buildFlattenedList(this.items);
			if (this.list) {
				this.list.splice(0, this.list.length, flatList)
			}
		}
		this.list.splice(0, this.items.length, this.buildFlattenedList(this.items))
	}

	override layoutBody(height: number, width: number): void {
		super.layoutBody(height, width);
		if (this.list) {
			this.list.layout(height, width);
		}
	}

	private buildFlattenedList(nodes: widgetListGroup[]): Array<widgetListGroup | widgetListNode> {
		const result: Array<widgetListGroup | widgetListNode> = [];

		for (const node of nodes) {
			result.push(node);

			if (node.expanded && node.children?.length) {
				result.push(...node.children); // 子节点直接放入
			}
		}

		return result;
	}



}
