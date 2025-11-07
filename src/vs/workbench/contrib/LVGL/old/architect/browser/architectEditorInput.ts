/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


import { URI } from '../../../../../../base/common/uri.js';
import { EditorInput } from '../../../../../common/editor/editorInput.js';

export class ArchitectEditorInput extends EditorInput {
	static readonly ID = 'workbench.editor.architectInput';
	constructor(private protocolName: string) { // 接收协议名称
		super();
	}
	static readonly RESOURCE = URI.from({
		scheme: 'architect',
		path: '/main'
	});

	override get typeId(): string {
		return ArchitectEditorInput.ID;
	}
	readonly resource = ArchitectEditorInput.RESOURCE;

	override matches(otherInput: unknown): boolean {
		return otherInput instanceof ArchitectEditorInput;
	}
}


