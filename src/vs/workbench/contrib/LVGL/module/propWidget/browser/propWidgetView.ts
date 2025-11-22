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

import api from '../../../api/index.js';


export class propWidgetView extends ViewPane {

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



	protected override renderBody(container: HTMLElement): void {
		const controlVariablesDom = this.propWidget();
		// const sideBar = this.sideBar();
		// controlVariablesDom
		container.appendChild(controlVariablesDom);

	}



	sideBar() {
		const div = document.createElement('div');
		div.style.flex = '1';
		div.style.display = 'flex';
		div.style.background = "green";
		div.style.height = "100%";

		const controlVariablesDom = this.ControlVariablesDom();
		// const controlVariablesDom1 = this.ControlVariablesDom();
		div.appendChild(controlVariablesDom);
		// div.appendChild(controlVariablesDom1);
		return div;
	}

	propWidget() {
		const propWidget = document.createElement('prop-widget');
		propWidget.style.width = "100%"
		propWidget.style.height = "100%";
		propWidget.style.background = "red";
		propWidget.api = api;
		return propWidget;
	}



	ControlVariablesDom() {
		const ControlVariables = document.createElement("control-variables");
		ControlVariables.label = "X";
		ControlVariables.value = 123
		ControlVariables.type = "number";
		ControlVariables.api = api;
		ControlVariables.variable = {
			isDynamic: true,
			bindVar: "",
			type: "string",
		};
		ControlVariables.onChange = (e) => { console.log(e) };

		return ControlVariables;
	}


	override layoutBody(height: number, width: number): void {
		super.layoutBody(height, width);

	}

}
