import { URI } from '../../../../../base/common/uri.js';
import { ITextModel } from '../../../../../editor/common/model.js';
import { IModelService } from '../../../../../editor/common/services/model.js';
import { ITextModelService } from '../../../../../editor/common/services/resolverService.js';
import { EditorInput } from '../../../../common/editor/editorInput.js';

export class VirtualJSXEditorInput extends EditorInput {
	static readonly ID = 'workbench.editorinputs.virtualJsx';
	readonly typeId = 'virtualJSXEditorInput'; // 唯一标识符

	private model: ITextModel | undefined;

	constructor(
		public readonly resource: URI | undefined,
		private readonly name: string,
		private readonly content: string,
		@ITextModelService private readonly textModelService: ITextModelService,
		@IModelService private readonly modelService: IModelService,
	) {
		super();
	}

	getTypeId(): string {
		return VirtualJSXEditorInput.ID;
	}

	override getName(): string {
		return this.name;
	}

	override matches(other: EditorInput): boolean {
		return other instanceof VirtualJSXEditorInput && other.name === this.name;
	}

	override async resolve(): Promise<any> {
		return {
			content: this.content,
			resource: this.resource
		}
	}

	override dispose(): void {
		if (this.model) {
			this.model.dispose();
			this.model = undefined;
		}
		super.dispose();
	}
}
