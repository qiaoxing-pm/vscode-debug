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
import { NodeDelegate, NodeRenderer, StructAndVarRelationIntegrateSource } from "../api/class.js";
import type { StructAndVarRelationTreeNodeBase, vscodeApiType } from "../../../type/type.js"
import { contextMenuMap } from '../api/constant.js';
import { createContextMenu, rename } from '../api/util.js';
import { IEditorService } from '../../../../../services/editor/common/editorService.js';
import { StructAndVarRelationIntegrateContent } from './editor/structAndVarRelationIntegrateEditorContent.js';
import { INotificationService } from '../../../../../../platform/notification/common/notification.js';
import api from '../../../api/index.js';

export class StructAndVarRelationIntegrateView extends ViewPane {

	private readonly notificationService: INotificationService;
	private readonly vscodeApi: vscodeApiType;


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
		@IHoverService hoverService: IHoverService,
		@INotificationService notificationService: INotificationService,
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
			hoverService,
		);

		this.notificationService = notificationService;
		this.vscodeApi = {
			notificationService,
		};
	}

	createBtn(str: string): HTMLElement {
		const btn = document.createElement('button');
		btn.textContent = str;
		btn.addEventListener('click', async () => {
			this.openEditor();
		});

		return btn;
	}
	openEditor() {
		const editorService = this.instantiationService.invokeFunction(accessor => accessor.get(IEditorService));
		const input = this.instantiationService.createInstance(StructAndVarRelationIntegrateContent, "ProtocolB");
		editorService.openEditor(input);
	}

	private tree!: WorkbenchAsyncDataTree<null, StructAndVarRelationTreeNodeBase>; // 根节点是 null，节点类型是 StructAndVarRelationTreeNodeBase

	protected override renderBody(container: HTMLElement): void {


		container.classList.add('structAndVarRelationIntegrate-view');

		const treeContainer = document.createElement('div');
		treeContainer.style.flex = '1';
		treeContainer.style.display = 'flex';
		treeContainer.style.minHeight = '0';
		container.appendChild(treeContainer);
		const openExcel = this.createBtn("打开 excel");
		container.appendChild(openExcel);

		const delegate = new NodeDelegate();
		const renderer = new NodeRenderer();
		const dataSource = new StructAndVarRelationIntegrateSource();

		this.tree = this.instantiationService.createInstance(
			WorkbenchAsyncDataTree<null, StructAndVarRelationTreeNodeBase>,
			'StructAndVarRelationIntegrateViewTree',
			treeContainer,
			delegate,
			[renderer],
			dataSource,
			{
				identityProvider: { getId: node => node.id },
				accessibilityProvider: {
					getAriaLabel: node => node.name,
					getWidgetAriaLabel: () => "StructAndVarRelationIntegrate Tree",
				},
			}
		);

		this.tree.setInput(null);

		this.tree.onContextMenu(({ element, anchor }) => {
			if (!element || !element?.optionType) { return; }
			if (element.optionType) {
				const contextMenuData = contextMenuMap.get(element.optionType);
				if (contextMenuData) {
					this.contextMenuService.showContextMenu({
						getAnchor: () => anchor,
						getActions: () => {
							return createContextMenu(contextMenuData, element, this.tree, this.vscodeApi);
						}
					});
				}
			}
		});


		this.tree.onKeyDown(e => {
			if (e.key === "F2") {
				rename(this.tree.getFocus()[0], this.tree, this.vscodeApi);
			}
		});
	}

	override layoutBody(height: number, width: number): void {
		super.layoutBody(height, width);
		this.tree.layout(height);
	}
}
