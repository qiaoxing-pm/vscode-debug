/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


import { Codicon } from '../../../../../../base/common/codicons.js';
import { localize, localize2 } from '../../../../../../nls.js';
import { SyncDescriptor } from '../../../../../../platform/instantiation/common/descriptors.js';
import { Registry } from '../../../../../../platform/registry/common/platform.js';
import { registerIcon } from '../../../../../../platform/theme/common/iconRegistry.js';
import { EditorPaneDescriptor, IEditorPaneRegistry } from '../../../../../browser/editor.js';
import { EditorExtensions } from '../../../../../common/editor.js';
import { Extensions, IViewsRegistry } from '../../../../../common/views.js';
import { VIEW_CONTAINER } from '../../../../files/browser/explorerViewlet.js';
import { StructAndVarRelationIntegrateView } from './structAndVarRelationIntegrateView.js';
import { StructAndVarRelationIntegrateEditor } from './editor/structAndVarRelationIntegrateEditor.js'
import { StructAndVarRelationIntegrateContent } from './editor/structAndVarRelationIntegrateEditorContent.js';


const structAndVarRelationIntegrateViewIcon = registerIcon(
	'structAndVarRelationIntegrate-view-icon',
	Codicon.structAndVarRelationIntegrate,
	localize('structAndVarRelationIntegrateViewIcon', 'View icon of the structAndVarRelationIntegrate view.')
);

Registry.as<IViewsRegistry>(Extensions.ViewsRegistry).registerViews(
	[
		{
			id: 'workbench.view.structAndVarRelationIntegrate',
			name: localize2('structAndVarRelationIntegrateViewView.name', "结构与变量关系整合"),
			containerIcon: structAndVarRelationIntegrateViewIcon,
			ctorDescriptor: new SyncDescriptor(StructAndVarRelationIntegrateView),
			canToggleVisibility: true,
			canMoveView: true,
			hideByDefault: false,
			collapsed: false,
			order: 2,
			weight: 3000
		}
	],
	VIEW_CONTAINER
);

Registry.as<IEditorPaneRegistry>(EditorExtensions.EditorPane).registerEditorPane(
	EditorPaneDescriptor.create(
		StructAndVarRelationIntegrateEditor,
		'1123333',
		'打开视图',
	),
	[
		new SyncDescriptor(StructAndVarRelationIntegrateContent)
	]
)
