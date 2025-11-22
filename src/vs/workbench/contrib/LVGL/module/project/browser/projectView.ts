// /*---------------------------------------------------------------------------------------------
//  *  Copyright (c) Microsoft Corporation. All rights reserved.
//  *  Licensed under the MIT License. See License.txt in the project root for license information.
//  *--------------------------------------------------------------------------------------------*/

// import { IInstantiationService } from "../../../../../../platform/instantiation/common/instantiation.js";
// import { IKeybindingService } from "../../../../../../platform/keybinding/common/keybinding.js";
// import { IContextMenuService } from "../../../../../../platform/contextview/browser/contextView.js";
// import { IThemeService } from "../../../../../../platform/theme/common/themeService.js";
// import { IConfigurationService } from "../../../../../../platform/configuration/common/configuration.js";
// import { IViewDescriptorService } from "../../../../../common/views.js";
// import { IContextKeyService } from "../../../../../../platform/contextkey/common/contextkey.js";
// import {
// 	IViewPaneOptions,
// 	ViewPane,
// } from "../../../../../browser/parts/views/viewPane.js";
// import { IOpenerService } from "../../../../../../platform/opener/common/opener.js";
// import { IHoverService } from "../../../../../../platform/hover/browser/hover.js";

// import { WorkbenchAsyncDataTree } from '../../../../../../platform/list/browser/listService.js';
// import type { Node } from "../api/type.js";
// import { ProjectTreeDataSource, NodeRenderer, NodeDelegate } from '../api/class.js';
// import api from '../../../api/index.js';


// export class projectView extends ViewPane {
// 	constructor(
// 		options: IViewPaneOptions,
// 		@IKeybindingService keybindingService: IKeybindingService,
// 		@IContextMenuService contextMenuService: IContextMenuService,
// 		@IConfigurationService configurationService: IConfigurationService,
// 		@IContextKeyService contextKeyService: IContextKeyService,
// 		@IViewDescriptorService viewDescriptorService: IViewDescriptorService,
// 		@IInstantiationService instantiationService: IInstantiationService,
// 		@IOpenerService openerService: IOpenerService,
// 		@IThemeService themeService: IThemeService,
// 		@IHoverService hoverService: IHoverService,
// 	) {
// 		super(options, keybindingService, contextMenuService, configurationService, contextKeyService, viewDescriptorService, instantiationService, openerService, themeService, hoverService);
// 	}

// 	private tree!: WorkbenchAsyncDataTree<null, Node>;

// 	protected override async renderBody(container: HTMLElement): Promise<void> {
// 		container.classList.add('project-view');

// 		const treeContainer = document.createElement('div');
// 		treeContainer.style.flex = '1';
// 		treeContainer.style.display = 'flex';
// 		treeContainer.style.minHeight = '0';
// 		container.appendChild(treeContainer);

// 		const delegate = new NodeDelegate();
// 		const renderer = new NodeRenderer();
// 		const dataSource = new ProjectTreeDataSource();

// 		this.tree = this.instantiationService.createInstance(
// 			WorkbenchAsyncDataTree<null, Node>,
// 			'projectViewTree',
// 			treeContainer,
// 			delegate,
// 			[renderer],
// 			dataSource,
// 			{
// 				identityProvider: { getId: node => node.label },
// 				accessibilityProvider: {
// 					getAriaLabel: node => node.label,
// 					getWidgetAriaLabel: () => "project tree",
// 				}
// 			}
// 		);
// 		this.tree.setInput(null);
// 	}


// 	override layoutBody(height: number, width: number): void {
// 		super.layoutBody(height, width);
// 		this.tree.layout(height);
// 	}

// }











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

import { WorkbenchAsyncDataTree } from '../../../../../../platform/list/browser/listService.js';
import type { Node } from "../api/type.js";
import { ProjectTreeDataSource, NodeRenderer, NodeDelegate } from '../api/class.js';


export class projectView extends ViewPane {

	private tree!: WorkbenchAsyncDataTree<null, Node>;
	private modulePanel!: HTMLElement;

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
	) {
		super(options, keybindingService, contextMenuService, configurationService, contextKeyService, viewDescriptorService, instantiationService, openerService, themeService, hoverService);
	}

	protected override renderBody(container: HTMLElement): void {

		container.classList.add('project-view');
		container.style.display = "flex";
		container.style.flexDirection = "column";

		// -------------------------------
		// Tree 区域
		// -------------------------------
		const treeContainer = document.createElement('div');
		treeContainer.style.flex = '1';
		treeContainer.style.minHeight = "0";
		container.appendChild(treeContainer);

		// -------------------------------
		// Extra Panel（用于显示模块内容）
		// -------------------------------
		this.modulePanel = document.createElement("div");
		this.modulePanel.className = "project-module-panel";
		this.modulePanel.style.display = "none";
		this.modulePanel.style.padding = "10px";
		this.modulePanel.style.borderTop = "1px solid var(--vscode-panel-border)";
		container.appendChild(this.modulePanel);

		// -------------------------------
		// 创建 Tree
		// -------------------------------
		const delegate = new NodeDelegate();
		const renderer = new NodeRenderer();
		const dataSource = new ProjectTreeDataSource();

		this.tree = this.instantiationService.createInstance(
			WorkbenchAsyncDataTree,
			'projectViewTree',
			treeContainer,
			delegate,
			[renderer],
			dataSource,
			{
				identityProvider: { getId: node => node.label }
			}
		);

		this.tree.setInput(null);

		// -------------------------------
		// 点击节点显示 panel
		// -------------------------------
		this.tree.onDidOpen(event => {
			const node = event.element;

			if (!node) return;

			// 只有 module 类型显示扩展 UI
			if (node.type === "module") {
				this.showModulePanel(node);
			} else {
				this.hideModulePanel();
			}
		});
	}

	private showModulePanel(node: Node) {
		this.modulePanel.style.display = "block";
		this.modulePanel.innerHTML = `
            <h3>${node.label}</h3>
            <div class="card">项目 A 信息卡片</div>
            <div class="card">项目 B 信息卡片</div>
        `;
	}

	private hideModulePanel() {
		this.modulePanel.style.display = "none";
		this.modulePanel.innerHTML = "";
	}

	override layoutBody(height: number, width: number): void {
		super.layoutBody(height, width);
		this.tree.layout(height);
	}
}
