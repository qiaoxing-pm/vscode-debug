/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


import { Codicon } from '../../../../../../base/common/codicons.js';
import { localize, localize2 } from '../../../../../../nls.js';
import { SyncDescriptor } from '../../../../../../platform/instantiation/common/descriptors.js';
import { Registry } from '../../../../../../platform/registry/common/platform.js';
import { registerIcon } from '../../../../../../platform/theme/common/iconRegistry.js';
import { Extensions, IViewsRegistry } from '../../../../../common/views.js';
import { VIEW_CONTAINER } from '../../../../files/browser/explorerViewlet.js';
import { HierachyView } from './hierachyView.js';


const hierachyViewIcon = registerIcon(
	'hierachy-view-icon',
	Codicon.hierachy,
	localize('hierachyViewIcon', 'View icon of the hierachy view.')
);

Registry.as<IViewsRegistry>(Extensions.ViewsRegistry).registerViews(
	[
		{
			id: 'workbench.view.hierachy',
			name: localize2('hierachyView.name', "层级结构"),
			containerIcon: hierachyViewIcon,
			ctorDescriptor: new SyncDescriptor(HierachyView),
			canToggleVisibility: true,
			canMoveView: true,
			hideByDefault: false,
			collapsed: false,
			order: 3,
			weight: 3000
		}
	],
	VIEW_CONTAINER
);
