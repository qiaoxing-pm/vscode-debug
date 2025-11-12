/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import './architect.css';
import { Dimension } from '../../../../../../base/browser/dom.js';
import { IStorageService } from '../../../../../../platform/storage/common/storage.js';
import { ITelemetryService } from '../../../../../../platform/telemetry/common/telemetry.js';
import { IThemeService } from '../../../../../../platform/theme/common/themeService.js';
import { EditorPane } from '../../../../../browser/parts/editor/editorPane.js';
import { IEditorGroup } from '../../../../../services/editor/common/editorGroupsService.js';
import { ArchitectEditorInput } from './architectEditorInput.js';
import { type CellStyle, Graph, InternalEvent } from '@maxgraph/core';
// import api from './api/index.js';
import HttpClientModule from './HttpClientModule.js';


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

	protected override async createEditor(parent: HTMLElement): Promise<void> {
		try {
			const res = await HttpClientModule.getProtocolList();
			const protocolList = await res.json();

			if (protocolList && protocolList[0]) {
				const protocolRes = await HttpClientModule.getProtocol(protocolList[0]);
				const protocolText = await protocolRes.text();
				const container2 = document.createElement('div');
				container2.className = 'architect-editor-plc-xml';
				container2.style.width = '100%';
				container2.style.height = '100%';
				container2.style.overflow = 'auto';
				container2.contentEditable = 'true';
				container2.innerText = protocolText;
				parent.appendChild(container2);
			}
		} catch (error) {
			console.error('加载协议失败:', error);
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
