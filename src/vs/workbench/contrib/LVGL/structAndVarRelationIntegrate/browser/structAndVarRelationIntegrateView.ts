/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IInstantiationService } from '../../../../../platform/instantiation/common/instantiation.js';
import { IKeybindingService } from '../../../../../platform/keybinding/common/keybinding.js';
import { IContextMenuService } from '../../../../../platform/contextview/browser/contextView.js';
import { IThemeService } from '../../../../../platform/theme/common/themeService.js';
import { IConfigurationService } from '../../../../../platform/configuration/common/configuration.js';
import { IViewDescriptorService } from '../../../../common/views.js';
import { IContextKeyService } from '../../../../../platform/contextkey/common/contextkey.js';
import { IViewPaneOptions, ViewPane } from '../../../../browser/parts/views/viewPane.js';
import { IOpenerService } from '../../../../../platform/opener/common/opener.js';
import { IHoverService } from '../../../../../platform/hover/browser/hover.js';
import { IEditorService } from '../../../../services/editor/common/editorService.js';
// import { ArchitectEditorInput } from './architectEditorInput.js';
// import { IEditorResolverService } from '../../../services/editor/common/editorResolverService.js';


export class StructAndVarRelationIntegrateView extends ViewPane {
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
		const btn = document.createElement('button');
		btn.textContent = "打开StructAndVarRelationIntegrate编辑器";

		btn.addEventListener('click', async () => {
			// const editorService = this.instantiationService.invokeFunction(accessor => accessor.get(IEditorService));
			// const editorResolverService = this.instantiationService.invokeFunction(a => a.get(IEditorResolverService))
			// editorService.openEditor(this.instantiationService.createInstance(ArchitectEditorInput));
			// editorResolverService.registerEditor(ArchitectEditorInput)
			// editorResolverService.registerEditor('', {
			// 	id: 'architect.edi'
			// })

			// console.log("jaskdfhklasjfhkljasd")
			const btnTemp = document.createElement('button');
			btnTemp.textContent = `${Math.random()}`;
			container.appendChild(btnTemp);
		});
		container.appendChild(btn);
	}
}
