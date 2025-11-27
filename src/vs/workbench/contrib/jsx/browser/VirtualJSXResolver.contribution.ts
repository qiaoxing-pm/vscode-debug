import { URI } from '../../../../base/common/uri.js';
import { SyncDescriptor } from '../../../../platform/instantiation/common/descriptors.js';
import { IInstantiationService } from '../../../../platform/instantiation/common/instantiation.js';
import { Registry } from '../../../../platform/registry/common/platform.js';
import { EditorPaneDescriptor, IEditorPaneRegistry } from '../../../browser/editor.js';
import { IWorkbenchContribution } from '../../../common/contributions.js';
import { EditorExtensions } from '../../../common/editor.js';
import { IEditorResolverService, RegisteredEditorPriority } from '../../../services/editor/common/editorResolverService.js';
import { VirtualJSXEditorInput } from './CustomEditor/VirtualJSXEditorInput.js';
import { VirtualJSXEditorPane } from './VirtualJSXEditorPane.js';



export class VirtualJSXEditorContribution implements IWorkbenchContribution {

	static readonly ID = 'workbench.contribution.virtualJSXEditor';

	constructor(
		@IEditorResolverService editorResolverService: IEditorResolverService,
		@IInstantiationService private readonly instantiationService: IInstantiationService,
	) {
		editorResolverService.registerEditor(
			"*.jsx",

			{
				id: 'virtualJSX.editor',
				label: 'Virtual JSX Editor',
				priority: RegisteredEditorPriority.exclusive
			},
			{
				canSupportResource: (resource: URI) => {
					return resource.path.endsWith('.jsx');
				},
			},
			{
				createEditorInput: async ({ resource, options }) => {
					const editorInput = this.instantiationService.createInstance(
						VirtualJSXEditorInput,
						resource,
						resource.toString(),
						'sdfsdfgsdfg'
					);

					return {
						editor: editorInput,
						options
					};
				}
			},
		);
	}
}


Registry.as<IEditorPaneRegistry>(EditorExtensions.EditorPane).registerEditorPane(
	EditorPaneDescriptor.create(
		VirtualJSXEditorPane,
		VirtualJSXEditorPane.ID,
		VirtualJSXEditorInput.ID,
	),
	[
		new SyncDescriptor(VirtualJSXEditorInput)
	]
)
