import { URI } from '../../../../../../../../base/common/uri.js';
import { ITextModel } from '../../../../../../../../editor/common/model.js';
import { IModelService } from '../../../../../../../../editor/common/services/model.js';
import { ITextModelService, IResolvedTextEditorModel } from '../../../../../../../../editor/common/services/resolverService.js';
import { IUntypedEditorInput } from '../../../../../../../common/editor.js';
import { EditorInput } from '../../../../../../../common/editor/editorInput.js';
import { ITextFileService } from '../../../../../../../services/textfile/common/textfiles.js';

export class VirtualJSXEditorInput extends EditorInput {
	static readonly ID = 'workbench.editorinputs.virtualJsx';
	readonly typeId = 'virtualJSXEditorInput'; // 唯一标识符
	private pendingContent: string | null = null;
	private model!: ITextModel;
	private _modelRef: IResolvedTextEditorModel | null = null;
	private dirty = false;
	constructor(
		public readonly resource: URI | undefined,
		private readonly name: string,
		private readonly content: string,
		@ITextModelService private readonly textModelService: ITextModelService,
		@IModelService private readonly modelService: IModelService,
		@ITextFileService private readonly textFileService: ITextFileService,
	) {
		super();
		this.pendingContent = content;
		this.dirty = false;


	}

	/**
	 * 初始化模型的方法
	 * 如果当前模型不存在且资源存在，则创建一个新的模型引用
	 */
	async initModel() {
		// 检查模型是否不存在且资源是否存在
		if (!this.model && this.resource) {

			// 创建模型引用并等待其完成
			this._modelRef = await this.textModelService.createModelReference(this.resource);
			// 从模型引用中获取文本编辑器模型并赋值给当前模型
			this.model = this._modelRef.object.textEditorModel;
		}
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

		await this.initModel();


		return {
			content: this.content,
			resource: this.resource,
			model: this.model
		}
	}

	getModel() {
		return this.model;
	}

	override dispose(): void {
		if (this._modelRef) {
			this._modelRef.dispose();
			this._modelRef = undefined;
		}
		super.dispose();
	}


	async updateContent(newContent: string): void {
		this.model.pushEditOperations(
			null,
			[{
				range: this.model.getFullModelRange(),
				text: newContent
			}],
			() => null
		);

		await this.textFileService.save(this.resource);
		ref.dispose();
	}

	// Workbench 用来判断是否有修改
	override isDirty(): boolean {
		return this.dirty;
	}

	private setDirty(flag: boolean) {
		if (this.dirty !== flag) {
			this.dirty = flag;
			this._onDidChangeDirty.fire();
		}
	}



	async setPendingContent(newContent: string) {
		if (!this.resource) return;
		await this.initModel();
		try {
			this.model.pushEditOperations(
				null,
				[{
					range: this.model.getFullModelRange(),
					text: newContent
				}],
				() => null
			);
			this.pendingContent = newContent;
			this.setDirty(true);
		} catch (err) {
			console.error('VirtualJSXEditorInput setPendingContent failed:', err);
		}
	}



	override async revert(): Promise<void> {
		if (!this.resource) return;

		await this.textFileService.revert(this.resource);
		this.setDirty(false);
	}


	override async save(group?: any): Promise<EditorInput | IUntypedEditorInput | undefined> {
		if (!this.resource) {
			return;
		}
		const newContent = this.pendingContent ?? '';
		try {
			this.model.pushEditOperations(
				[],
				[{
					range: this.model.getFullModelRange(),
					text: newContent
				}],
				() => null
			);

			const saveResult = await this.textFileService.save(this.resource);
			this.setDirty(false);
		} catch (err) {
			console.error('VirtualJSXEditorInput save failed:', err);
			throw err;
		}
	}

}
