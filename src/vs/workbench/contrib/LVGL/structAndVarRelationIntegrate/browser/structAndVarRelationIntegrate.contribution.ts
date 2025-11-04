/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


import { Codicon } from '../../../../../base/common/codicons.js';
import { localize, localize2 } from '../../../../../nls.js';
import { SyncDescriptor } from '../../../../../platform/instantiation/common/descriptors.js';
import { Registry } from '../../../../../platform/registry/common/platform.js';
import { registerIcon } from '../../../../../platform/theme/common/iconRegistry.js';
import { EditorPaneDescriptor, IEditorPaneRegistry } from '../../../../browser/editor.js';
import { EditorExtensions } from '../../../../common/editor.js';
import { Extensions, IViewsRegistry } from '../../../../common/views.js';
import { VIEW_CONTAINER } from '../../../files/browser/explorerViewlet.js';
import { StructAndVarRelationIntegrateView } from './structAndVarRelationIntegrateView.js';
import { Action2, MenuId, registerAction2 } from '../../../../../platform/actions/common/actions.js';
import { ContextKeyExpr } from '../../../../../platform/contextkey/common/contextkey.js';
import { IViewsService } from '../../../../services/views/common/viewsService.js';
// import iconAssert from '../../../../../platform/theme/common/icons/icon-assert.svg';
// D:\XLH-workspase\workspace\vscode_main_9\vscode-main\vscode-main\src\vs\platform\theme\common\icons\icon-assert.svg

const structAndVarRelationIntegrateViewIcon = registerIcon(
	'structAndVarRelationIntegrate-view-icon',
	Codicon.structAndVarRelationIntegrate,
	localize('structAndVarRelationIntegrateViewIcon', 'View icon of the structAndVarRelationIntegrate view.')
);

Registry.as<IViewsRegistry>(Extensions.ViewsRegistry).registerViews(
	[
		{
			id: 'workbench.view.structAndVarRelationIntegrate',
			name: localize2('structAndVarRelationIntegrateView.name', "结构体与变量关系整合"),
			containerIcon: structAndVarRelationIntegrateViewIcon,
			ctorDescriptor: new SyncDescriptor(StructAndVarRelationIntegrateView),
			canToggleVisibility: true,
			canMoveView: true,
			hideByDefault: false,
			collapsed: false,
			order: 2,
			weight: 30
		}
	],
	VIEW_CONTAINER
);

// Registry.as<IEditorPaneRegistry>(EditorExtensions.EditorPane).registerEditorPane(
// 	EditorPaneDescriptor.create(

// 	)
// )

// const ASSERT_VIEW_ID = "workbench.view.assert";



// registerAction2(class OpenArchitectViewAction extends Action2 {
// 	constructor() {
// 		super({
// 			id: 'workbench.action.openAssertView',
// 			title: {
// 				value: localize('openAssertView', "打开架构图"),
// 				original: 'Open Architect View'
// 			},
// 			icon: Codicon.symbolStructure,
// 			category: localize('Assert', "架构图"),
// 			menu: [
// 				{
// 					id: MenuId.ViewTitle,
// 					when: ContextKeyExpr.equals('view', ASSERT_VIEW_ID),
// 					group: 'navigation',
// 					order: 1,
// 				},
// 				{
// 					id: MenuId.CommandPalette,
// 				}
// 			]
// 		});
// 	}

// 	run(accessor: any) {
// 		const viewsService = accessor.get(IViewsService);
// 		viewsService.openView(ASSERT_VIEW_ID);
// 	}
// })
