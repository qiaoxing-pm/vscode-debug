







import { Codicon } from '../../../../../../base/common/codicons.js';
import { localize, localize2 } from '../../../../../../nls.js';
import { SyncDescriptor } from '../../../../../../platform/instantiation/common/descriptors.js';
import { Registry } from '../../../../../../platform/registry/common/platform.js';
import { registerIcon } from '../../../../../../platform/theme/common/iconRegistry.js';
import { Extensions, IViewsRegistry } from '../../../../../common/views.js';
import { VIEW_CONTAINER } from '../../../../files/browser/explorerViewlet.js';
import { propWidgetView } from './propWidgetView.js';


const propWidgetViewIcon = registerIcon(
	"propWidget-view-icon",
	Codicon.propWidget,
	localize('propWidgetViewIcon', "view icon of the propWidget view.")
);


Registry.as<IViewsRegistry>(Extensions.ViewsRegistry).registerViews(
	[
		{
			id: 'workbench.view.propWidget',
			name: localize2('propWidgetView', "部件属性"),
			containerIcon: propWidgetViewIcon,
			ctorDescriptor: new SyncDescriptor(propWidgetView),
			canToggleVisibility: true,
			canMoveView: true,
			hideByDefault: false,
			collapsed: false,
			order: 3,
			weight: 3000,
		}
	],
	VIEW_CONTAINER
);



