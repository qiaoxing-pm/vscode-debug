

import { Codicon } from '../../../../../../base/common/codicons.js';
import { localize, localize2 } from '../../../../../../nls.js';
import { SyncDescriptor } from '../../../../../../platform/instantiation/common/descriptors.js';
import { Registry } from '../../../../../../platform/registry/common/platform.js';
import { registerIcon } from '../../../../../../platform/theme/common/iconRegistry.js';
import { Extensions, IViewsRegistry } from '../../../../../common/views.js';
import { VIEW_CONTAINER } from '../../../../files/browser/explorerViewlet.js';
import { projectView } from './projectView.js';


const projectViewIcon = registerIcon(
	'project-view-icon',
	Codicon.propWidget,
	localize("projectViewicon", "view icon of the project view.")
);

Registry.as<IViewsRegistry>(Extensions.ViewsRegistry).registerViews(
	[
		{
			id: "workbench.view.project",
			name: localize2('projectView', "项目列表"),
			containerIcon: projectViewIcon,
			ctorDescriptor: new SyncDescriptor(projectView),
			canToggleVisibility: true,
			canMoveView: true,
			hideByDefault: false,
			collapsed: false,
			order: 3,
			weight: 3000,
		}
	],
	VIEW_CONTAINER
)

