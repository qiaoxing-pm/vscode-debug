import { IEditorOptions } from '../../../../platform/editor/common/editor.js';
import { EditorPane } from '../../../browser/parts/editor/editorPane.js';
import { VirtualJSXEditorInput } from './CustomEditor/VirtualJSXEditorInput.js';
import { IEditorGroup } from '../../../services/editor/common/editorGroupsService.js';
import { IStorageService } from '../../../../platform/storage/common/storage.js';
import { IThemeService } from '../../../../platform/theme/common/themeService.js';
import { ITelemetryService } from '../../../../platform/telemetry/common/telemetry.js';
import { IEditorOpenContext } from '../../../common/editor.js';
import { CancellationToken } from 'vscode';
import { URI } from '../../../../base/common/uri.js';
import { createNewScreen, initLvglModule } from "../../LVGL/module/maxgraph/lvgl/package/LvglModule.js";
import createLvglGraph from "../../LVGL/module/maxgraph/lvgl/events/createLvglCanvas.js"
import RpcProvider from "../../LVGL/lib/worker-rpc/lib/RpcProvider.js";

export class VirtualJSXEditorPane extends EditorPane<VirtualJSXEditorInput> {
	static readonly ID = 'workbench.pane.virtualJSXEditor';
	private container!: HTMLElement;

	private textarea: HTMLElement | undefined;

	constructor(
		group: IEditorGroup,
		@ITelemetryService telemetryService: ITelemetryService,
		@IThemeService themeService: IThemeService,
		@IStorageService storageService: IStorageService
	) {
		super(VirtualJSXEditorPane.ID, group, telemetryService, themeService, storageService);
	}

	override createEditor(parent: HTMLElement): void {
		this.container = document.createElement('div');
		this.container.style.width = '100%';
		this.container.style.height = '100%';
		this.container.innerHTML = "<h1>无内容<h1>"
		parent.appendChild(this.container);
	}

	override layout(dimension: { width: number; height: number }): void {
		if (this.container) {
			this.container.style.width = `${dimension.width}px`;
			this.container.style.height = `${dimension.height}px`;
		}
	}

	override async setInput(
		input: VirtualJSXEditorInput,
		options: IEditorOptions | undefined,
		context: IEditorOpenContext,
		token: CancellationToken
	): Promise<void> {


		await super.setInput(input, options, context, token);

		const { content, resource } = await input.resolve();

		this.renderUI(content, resource);
	}

	private renderUI(content: string, resource: URI) {
		this.container.innerHTML = '';
		const screen = createNewScreen(
			"asd",
			1000,
			1000,
		)
		console.log(screen)
		const containerWrapper = document.createElement('div');
		containerWrapper.style.height = "100%";
		containerWrapper.style.position = 'relative';
		const containerDiv = document.createElement('div');
		containerDiv.style.width = "100%"
		containerDiv.style.height = '100%'
		containerDiv.style.position = 'absolute'
		containerDiv.style.zIndex = '2';
		const canvas = document.createElement('canvas');
		canvas.style.background = "red"
		canvas.style.height = "600px";
		canvas.style.width = "800px";
		containerWrapper.appendChild(containerDiv);
		containerWrapper.appendChild(canvas);
		this.container.appendChild(containerWrapper);
		const rpcProvider: any = new RpcProvider((m, t) =>
			window.postMessage(m, "*", t)
		);
		const graph = createLvglGraph(containerDiv, canvas, screen, rpcProvider)
	}
}
