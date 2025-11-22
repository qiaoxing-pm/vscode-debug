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
import type { StructAndVarRelationTreeNodeBase, vscodeApiType } from "../../../type/type.js"

import { INotificationService } from '../../../../../../platform/notification/common/notification.js';
import api from '../../../api/index.js';


export class AsserView extends ViewPane {

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

	}


	protected override renderBody(container: HTMLElement): void {

	}

	override layoutBody(height: number, width: number): void {
		super.layoutBody(height, width);
	}
}
