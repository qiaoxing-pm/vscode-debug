/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { SyncDescriptor } from '../../../../../platform/instantiation/common/descriptors.js';
import { Registry } from '../../../../../platform/registry/common/platform.js';
import { localize, localize2 } from '../../../../../nls.js';
import { registerIcon } from '../../../../../platform/theme/common/iconRegistry.js';
import { Codicon } from '../../../../../base/common/codicons.js';
import { VIEW_CONTAINER } from '../../../files/browser/explorerViewlet.js';
import { Extensions as ViewExtensions, IViewsRegistry } from '../../../../common/views.js';
import { ArchitectView } from './architectView.js';
import { Action2, MenuId, registerAction2 } from '../../../../../platform/actions/common/actions.js';
import { IViewsService } from '../../../../services/views/common/viewsService.js';
import { ContextKeyExpr } from '../../../../../platform/contextkey/common/contextkey.js';
import { EditorPaneDescriptor, IEditorPaneRegistry } from '../../../../browser/editor.js';
import { EditorExtensions } from '../../../../common/editor.js';
import { ArchitectEditor } from './architectEditor.js';
import { ArchitectEditorInput } from './architectEditorInput.js';




// 注册图标
const architectViewIcon = registerIcon(
	'architect-view-icon',
	Codicon.symbolStructure,
	localize('architectViewIcon', 'View icon of the Architect view.')
);

// 注册视图
Registry.as<IViewsRegistry>(ViewExtensions.ViewsRegistry).registerViews(
	[
		{
			id: 'workbench.view.architect',
			name: localize2('architectView.name', 'LVGL编辑器'),
			containerIcon: architectViewIcon,
			ctorDescriptor: new SyncDescriptor(ArchitectView),
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


Registry.as<IEditorPaneRegistry>(EditorExtensions.EditorPane).registerEditorPane(
	EditorPaneDescriptor.create(
		ArchitectEditor,
		ArchitectEditorInput.ID,
		'LVGL编辑器'
	),
	[
		new SyncDescriptor(ArchitectEditorInput)
	]
);



const ARCHITECT_VIEW_ID = "workbench.view.architect";

registerAction2(class OpenArchitectViewAction extends Action2 {
	constructor() {
		super({
			id: 'workbench.action.openArchitectView',
			title: {
				value: localize('openArchitectView', "打开架构图"),
				original: 'Open Architect View'
			},
			icon: Codicon.symbolStructure,
			category: localize('architectCategory', "架构图"),
			menu: [
				{
					id: MenuId.ViewTitle,
					when: ContextKeyExpr.equals('view', ARCHITECT_VIEW_ID),
					group: 'navigation',
					order: 1,
				},
				{
					id: MenuId.CommandPalette,
				}
			]
		});
	}

	run(accessor: any) {
		const viewsService = accessor.get(IViewsService);
		viewsService.openView(ARCHITECT_VIEW_ID);
	}
})
