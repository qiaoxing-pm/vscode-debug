/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import './architect.css';
import { Dimension } from '../../../../../base/browser/dom.js';
import { IStorageService } from '../../../../../platform/storage/common/storage.js';
import { ITelemetryService } from '../../../../../platform/telemetry/common/telemetry.js';
import { IThemeService } from '../../../../../platform/theme/common/themeService.js';
import { EditorPane } from '../../../../browser/parts/editor/editorPane.js';
import { IEditorGroup } from '../../../../services/editor/common/editorGroupsService.js';
import PolygonDrawerClick from './PolygonDrawerClick.js';
import { ArchitectEditorInput } from './architectEditorInput.js';

export class ArchitectEditor extends EditorPane {

	private _container?: HTMLElement;

	constructor(
		group: IEditorGroup,
		@ITelemetryService telemetryService: ITelemetryService,
		@IThemeService themeService: IThemeService,
		@IStorageService storageService: IStorageService
	) {
		super('workbench.editor.architect', group, telemetryService, themeService, storageService);
	}

	protected override createEditor(parent: HTMLElement): void {
		const container = document.createElement('div');
		container.className = 'architect-editor';
		container.style.width = '100%';
		container.style.height = '100%';
		container.style.overflow = 'auto';

		container.innerHTML = `
		<div class="lvgl-wrapper">
		    <div class='wrapper-canvas'>
		    	<div class='wrapper-canvas-wapper'>
		        	<canvas id='wrapper-canvas-content'></canvas>
		    	</div>
			</div>
		</div>

		`;


		parent.appendChild(container);
		this._container = container;



		const canvasContent = container.querySelector('#wrapper-canvas-content');
		if (canvasContent) {
			new PolygonDrawerClick(canvasContent as HTMLCanvasElement);
		}

	}


	override layout(dimension: Dimension): void {
		if (this._container) {
			this._container.style.width = `${dimension.width}px`;
			this._container.style.height = `${dimension.height}px`;
		}
	}




	getInput(): ArchitectEditorInput | undefined {
		return this._input as ArchitectEditorInput;
	}

}
