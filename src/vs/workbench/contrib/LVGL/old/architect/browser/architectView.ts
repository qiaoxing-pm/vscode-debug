/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IInstantiationService } from '../../../../../../platform/instantiation/common/instantiation.js';
import { IKeybindingService } from '../../../../../../platform/keybinding/common/keybinding.js';
import { IContextMenuService } from '../../../../../../platform/contextview/browser/contextView.js';
import { IThemeService } from '../../../../../../platform/theme/common/themeService.js';
import { IConfigurationService } from '../../../../../../platform/configuration/common/configuration.js';
import { IViewDescriptorService } from '../../../../../common/views.js';
import { IContextKeyService } from '../../../../../../platform/contextkey/common/contextkey.js';
import { IViewPaneOptions, ViewPane } from '../../../../../browser/parts/views/viewPane.js';
import { IOpenerService } from '../../../../../../platform/opener/common/opener.js';
import { IHoverService } from '../../../../../../platform/hover/browser/hover.js';
import { IEditorService } from '../../../../../services/editor/common/editorService.js';
import { ArchitectEditorInput } from './architectEditorInput.js';
// import { IEditorResolverService } from '../../../services/editor/common/editorResolverService.js';
import HttpClientModule from './HttpClientModule.js';
// import AppA from '../extension/browser/index_a.js';
// import AppB from '../extension/browser/index_b.js';
import './Lvgl/assets/index-CP_FPTxe.css'





export class ArchitectView extends ViewPane {
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

	createBtn(str: string): HTMLElement {
		const btn = document.createElement('button');
		btn.textContent = str;
		btn.addEventListener('click', async () => {
			const editorService = this.instantiationService.invokeFunction(accessor => accessor.get(IEditorService));
			const input = this.instantiationService.createInstance(ArchitectEditorInput, "ProtocolA");
			editorService.openEditor(input);
		});

		return btn;
	}

	createApp(str: string): HTMLElement {
		const div = document.createElement('div');
		div.id = str;
		div.style.width = "100%";
		div.style.height = "100%";
		// div.style.height = "1px";
		div.style.backgroundColor = '#818181ff';
		return div;
	}


	private loadScript(src: string, isModule = true): Promise<void> {
		return new Promise((resolve, reject) => {
			const script = document.createElement('script');
			script.src = src;
			if (isModule) {
				script.type = "module"; // 如果是 ES module
			}
			script.onload = () => resolve();
			script.onerror = (err) => reject(err);
			document.body.appendChild(script);
		});
	}

	// 0.136

	protected override async renderBody(container: HTMLElement): Promise<void> {
		container.appendChild(this.createApp('app'));
		// container.appendChild(this.createApp('appb'));
		// globalThis.onEvent
		console.log(globalThis.__EVENT_BUS__)
		// globalThis.emit("cart:add", { "from A": count });
		try {
			await this.loadScript("http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/architect/browser/Lvgl/assets/index-CAilvf9U.js");

			// await this.loadScript("http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/architect/browser/index_b.js");
			// await this.loadScript("http://localhost:8080/static/sources/out/vs/workbench/contrib/LVGL/architect/browser/index_a.js"); // 注意路径根据实际调整
			console.log("两个脚本加载完成 ✅");
		} catch (err) {
			console.error("加载脚本出错:", err);
		}
	}
}
