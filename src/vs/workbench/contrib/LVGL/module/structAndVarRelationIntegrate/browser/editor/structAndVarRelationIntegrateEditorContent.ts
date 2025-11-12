/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


import { URI } from '../../../../../../../base/common/uri.js';
import { EditorInput } from '../../../../../../common/editor/editorInput.js';

export class StructAndVarRelationIntegrateContent extends EditorInput {

	static readonly ID = "workbench.editor.structAndVarRelationIntegrateContent";
	constructor(private protocolName: string) {
		super();
	}

	static readonly RESOURCE = URI.from({
		scheme: 'structAndVarRelationIntegrateContent',
		path: '/main'
	});

	override get typeId(): string {
		return StructAndVarRelationIntegrateContent.ID;
	}

	readonly resource = StructAndVarRelationIntegrateContent.RESOURCE;

	override matches(otherInput: unknown): boolean {
		return otherInput instanceof StructAndVarRelationIntegrateContent;
	}


}
