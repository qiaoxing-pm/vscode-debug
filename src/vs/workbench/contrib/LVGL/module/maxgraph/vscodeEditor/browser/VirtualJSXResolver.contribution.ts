import { URI } from '../../../../../../../base/common/uri.js';
import { SyncDescriptor } from '../../../../../../../platform/instantiation/common/descriptors.js';
import { IInstantiationService } from '../../../../../../../platform/instantiation/common/instantiation.js';
import { Registry } from '../../../../../../../platform/registry/common/platform.js';
import { EditorPaneDescriptor, IEditorPaneRegistry } from '../../../../../../browser/editor.js';
import { IWorkbenchContribution } from '../../../../../../common/contributions.js';
import { EditorExtensions } from '../../../../../../common/editor.js';
import { IEditorResolverService, RegisteredEditorPriority } from '../../../../../../services/editor/common/editorResolverService.js';
import { VirtualJSXEditorInput } from './CustomEditor/VirtualJSXEditorInput.js';
import { VirtualJSXEditorPane } from './VirtualJSXEditorPane.js';
import { initLvglModule } from "../../lvgl/package/LvglModule.js";
import { ITextModelService } from '../../../../../../../editor/common/services/resolverService.js';
import { IModelService } from '../../../../../../../editor/common/services/model.js';



export class VirtualJSXEditorContribution implements IWorkbenchContribution {

	static readonly ID = 'workbench.contribution.virtualJSXEditor';

	constructor(
		@IEditorResolverService editorResolverService: IEditorResolverService,
		@IInstantiationService private readonly instantiationService: IInstantiationService,
		@ITextModelService private readonly textModelService: ITextModelService,
		@IModelService private readonly modelService: IModelService
	) {
		initLvglModule();

		editorResolverService.registerEditor(
			"*.hmi",

			{
				id: 'virtualJSX.editor',
				label: 'Virtual JSX Editor',
				priority: RegisteredEditorPriority.exclusive
			},
			{
				canSupportResource: (resource: URI) => {
					return resource.path.endsWith('.hmi');
				},
			},
			{
				createEditorInput: async ({ resource, options }) => {
					const fileData = await this.resolve(resource);
					const editorInput = this.instantiationService.createInstance(
						VirtualJSXEditorInput,
						fileData.resource,
						fileData.title,
						fileData.content,
					);

					return {
						editor: editorInput,
						options
					};
				}
			},
		);
	}



	/**
 * 获取文件原始内容
 */
	async resolve(resource: URI): Promise<{ content: string; resource: URI; title: string }> {
		let model = this.modelService.getModel(resource);


		if (!model) {
			// 如果 model 不存在，创建一个
			const reference = await this.textModelService.createModelReference(resource);
			model = reference.object.textEditorModel;
		}

		return {
			content: model.getValue(), // 文件原始文本
			title: resource.path.split('/').pop() as string,
			resource: resource
		};
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
