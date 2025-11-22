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
import { WorkbenchAsyncDataTree } from "../../../../../../platform/list/browser/listService.js";
import { NodeDelegate, NodeRenderer, HierarchyTreeDataSource, type Node } from "../api/class.js";
import { Action } from '../../../../../../base/common/actions.js';

export class HierachyView extends ViewPane {
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

	private tree!: WorkbenchAsyncDataTree<null, Node>; // 根节点是 null，节点类型是 Node

	protected override renderBody(container: HTMLElement): void {
		// container.classList.add('hierarchy-view');

		const treeContainer = document.createElement('div');
		// treeContainer.style.flex = '1';
		// treeContainer.style.display = 'flex';
		// treeContainer.style.minHeight = '0';
		container.appendChild(treeContainer);

		const delegate = new NodeDelegate();
		const renderer = new NodeRenderer();
		const dataSource = new HierarchyTreeDataSource();

		this.tree = this.instantiationService.createInstance(
			WorkbenchAsyncDataTree<null, Node>,
			'hierarchyViewTree',
			treeContainer,
			delegate,
			[renderer],
			dataSource,
			{
				identityProvider: { getId: node => node.label },
				accessibilityProvider: {
					getAriaLabel: node => node.label,
					getWidgetAriaLabel: () => "Hierarchy Tree",
				},
			}
		);


		this.tree.setInput(null);

		// 事件逻辑
		this.tree.onContextMenu(({ element, anchor }) => {
			if (!element) return;
			const node = element;

			this.contextMenuService.showContextMenu({
				getAnchor: () => anchor,
				getActions: () => [
					new Action('renameNode', `重命名`, undefined, true, () => {
						console.log('重命名', node);
						return Promise.resolve();
					}),
					new Action('deleteNode', `删除`, undefined, true, () => {
						console.log('删除', node);
						return Promise.resolve();
					})
				]
			});
		});
	}

	override layoutBody(height: number, width: number): void {
		super.layoutBody(height, width);
		this.tree.layout(height);
	}
}
