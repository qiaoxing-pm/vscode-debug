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
import { ExplorerView } from '../../../../files/browser/views/explorerView.js';
import { IViewsService } from '../../../../../services/views/common/viewsService.js';

export class projectView extends ViewPane {

	private tree!: WorkbenchAsyncDataTree<null, Node>;
	private modulePanel!: HTMLElement;
	private viewSService: IViewsService;

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
		@IViewsService viewSService: IViewsService,
	) {
		super(options, keybindingService, contextMenuService, configurationService, contextKeyService, viewDescriptorService, instantiationService, openerService, themeService, hoverService);
		this.viewSService = viewSService;

	}

	protected override renderBody(container: HTMLElement): void {
		container.appendChild(this.createBtn("asd"));

	}
	async getExplorerData() {
		// // 获取内部 View 实例
		// const container = this.viewSService.openViewContainer('workbench.view.explorer', true).then((e) => {
		// 	const explore = e?.viewPaneContainer?.getExplorerView();
		// 	if (explore) {
		// 		const asdf = explore.tree.root.children[0].children[0]
		// 		explore.tree.root.children[0].children.push({
		// 			...asdf,
		// 			id: "file:///agents::file:///agents/demonstrate2.md",
		// 		})
		// 	}
		// });

		this.viewSService.openViewContainer('workbench.view.explorer', true).then(e => {
			const explore = e?.viewPaneContainer?.getExplorerView();
			if (!explore) return;

			// const firstNode = explore.tree.root.children[0].children[0];
			console.log(this.deepClone(explore.tree.root))

			// const newNode = {
			// 	...firstNode,
			// 	id: "file:///agents/demonstrate2.md",  // 使用标准 URI
			// 	children: [], // 新节点不拷贝原有子节点
			// };

			// explore.tree.root.children[0].children.push(newNode);

			// // 如果树有 refresh 方法，调用刷新
			// if (typeof explore.tree.refresh === 'function') {
			// 	explore.tree.refresh();
			// }
		});


		// console.log(container);
	}
	deepClone<T>(value: T): T {
		const cache = new WeakMap();
		const stack: { source: any; target: any }[] = [];

		// 原始类型直接返回
		if (value === null || typeof value !== "object") return value;

		let root: any;

		// 创建根节点
		if (Array.isArray(value)) {
			root = [];
		} else if (value instanceof Map) {
			root = new Map();
		} else if (value instanceof Set) {
			root = new Set();
		} else if (value instanceof Date) {
			return new Date(value.getTime()) as T;
		} else if (value instanceof RegExp) {
			return new RegExp(value.source, value.flags) as T;
		} else {
			root = Object.create(Object.getPrototypeOf(value));
		}

		cache.set(value, root);
		stack.push({ source: value, target: root });

		while (stack.length > 0) {
			const { source, target } = stack.pop()!;

			if (Array.isArray(source)) {
				for (let i = 0; i < source.length; i++) {
					const item = source[i];
					if (item !== null && typeof item === "object") {
						if (cache.has(item)) {
							target[i] = cache.get(item);
						} else {
							let clone: any;
							if (Array.isArray(item)) clone = [];
							else if (item instanceof Map) clone = new Map();
							else if (item instanceof Set) clone = new Set();
							else if (item instanceof Date) clone = new Date(item.getTime());
							else if (item instanceof RegExp) clone = new RegExp(item.source, item.flags);
							else clone = Object.create(Object.getPrototypeOf(item));

							cache.set(item, clone);
							target[i] = clone;
							stack.push({ source: item, target: clone });
						}
					} else {
						target[i] = item;
					}
				}
			} else if (source instanceof Map) {
				source.forEach((v, k) => {
					const newKey = (k !== null && typeof k === "object") ? cache.get(k) ?? k : k;
					const newValue = (v !== null && typeof v === "object") ? cache.get(v) ?? v : v;

					if (v !== null && typeof v === "object" && !cache.has(v)) stack.push({ source: v, target: newValue });
					if (k !== null && typeof k === "object" && !cache.has(k)) stack.push({ source: k, target: newKey });

					target.set(newKey, newValue);
				});
			} else if (source instanceof Set) {
				source.forEach((v) => {
					const newValue = (v !== null && typeof v === "object") ? cache.get(v) ?? v : v;
					if (v !== null && typeof v === "object" && !cache.has(v)) stack.push({ source: v, target: newValue });
					target.add(newValue);
				});
			} else {
				const keys = [
					...Object.getOwnPropertyNames(source),
					...Object.getOwnPropertySymbols(source),
				];

				for (const key of keys) {
					const desc = Object.getOwnPropertyDescriptor(source, key);
					if (!desc || desc.writable || desc.set) {
						const val = source[key];
						if (val !== null && typeof val === "object") {
							if (cache.has(val)) {
								target[key] = cache.get(val);
							} else {
								let clone: any;
								if (Array.isArray(val)) clone = [];
								else if (val instanceof Map) clone = new Map();
								else if (val instanceof Set) clone = new Set();
								else if (val instanceof Date) clone = new Date(val.getTime());
								else if (val instanceof RegExp) clone = new RegExp(val.source, val.flags);
								else clone = Object.create(Object.getPrototypeOf(val));

								cache.set(val, clone);
								target[key] = clone;
								stack.push({ source: val, target: clone });
							}
						} else {
							target[key] = val;
						}
					}
				}
			}
		}

		return root as T;
	}


	createBtn(str: string): HTMLElement {
		const btn = document.createElement('button');
		btn.textContent = str;
		btn.addEventListener('click', async () => {
			// this.openEditor();
			this.getExplorerData();

		});

		return btn;
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
		// this.tree.layout(height);
	}
}
