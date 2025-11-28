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
import createLvglGraph, { switchGraph } from "../../LVGL/module/maxgraph/lvgl/events/createLvglCanvas.js"
import RpcProvider from "../../LVGL/lib/worker-rpc/lib/RpcProvider.js";
import { createHMIWidget } from "../../LVGL/module/maxgraph/hmi/testHmi.js";
import { screenStore, widgetProps } from '../../LVGL/module/maxgraph/lvgl/store/index.js';
import { IEditorService } from '../../../services/editor/common/editorService.js';
import api from '../../LVGL/api/index.js';
import { isPointInRect } from '../../LVGL/util/util.js';


export class VirtualJSXEditorPane extends EditorPane<VirtualJSXEditorInput> {
	static readonly ID = 'workbench.pane.virtualJSXEditor';
	private container!: HTMLElement;
	private renderCache = new Map<string, { containerWrapper: HTMLElement; graph: any }>();
	private editorService!: IEditorService;

	constructor(
		group: IEditorGroup,
		@ITelemetryService telemetryService: ITelemetryService,
		@IThemeService themeService: IThemeService,
		@IStorageService storageService: IStorageService,
		@IEditorService editorService: IEditorService,
	) {

		super(VirtualJSXEditorPane.ID, group, telemetryService, themeService, storageService);
		this.editorService = editorService;
	}

	override createEditor(parent: HTMLElement): void {
		this.container = document.createElement('div');
		this.container.style.width = '100%';
		this.container.style.height = '100%';
		this.container.innerHTML = "<h1>无内容<h1>"
		this.container.style.background = "black";
		this.container.style.overflow = 'auto'
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
		this.init(resource.toString());

		if (this.renderCache.has(resource.toString())) {
			this.showCached(resource.toString());
		} else {
			this.renderUI(content, resource);
		}
	}

	private showCached(uri: string) {
		this.container.innerHTML = '';
		const curScreenAndDom = this.renderCache.get(uri);
		if (curScreenAndDom?.containerWrapper) {
			this.container.appendChild(curScreenAndDom.containerWrapper)
		}
	}

	private onFocusChange(graph) {
		console.log(screenStore, graph)
		this.container.focus();
		if (!screenStore.curScreen || screenStore.curScreen.id === graph.screen.id) {
			return;
		}
		const widget = switchGraph(screenStore.curGraph, graph);
		if (widget) {
			widgetProps.props = widget.getPropsData();
			widgetProps.curlvglShape = widget;

		}
		screenStore.curScreen = graph.screen;
		screenStore.curGraph = graph;
		// rpcProvider.rpc('updateHirerachyTree');
		widgetProps.update++;
	}


	private init(resourceString: string) {
		const curScreenAndDom = this.renderCache.get(resourceString);
		console.log(curScreenAndDom, this.renderCache)
		this.editorService.onDidActiveEditorChange(() => {
			const active = this.editorService.activeEditor;

			if (active?.resource?.toString() === resourceString && curScreenAndDom?.graph) {
				setTimeout(() => {
					this.onFocusChange(curScreenAndDom?.graph);
					console.log("asfdsfgsdgf", curScreenAndDom)
				}, 100)
			}

		});
	}

	private renderUI(content: string, resource: URI) {
		this.container.innerHTML = '';
		api.eventBus.on("widgetList_drag_end", (e) => {
			const rect = this.container.getBoundingClientRect();
			// console.log(e, rect);
			console.log(isPointInRect(rect, e))
		})

		const screen = createNewScreen(
			resource.toString(),
			800,
			600,
		)
		const containerWrapper = document.createElement('div');
		containerWrapper.style.height = "100%";
		containerWrapper.style.position = 'relative';

		const containerDiv = document.createElement('div');
		containerDiv.style.width = "800px";
		containerDiv.style.height = '600px';
		containerDiv.style.position = 'absolute';
		containerDiv.style.zIndex = '2';
		const canvas = document.createElement('canvas');
		canvas.style.position = 'absolute';
		canvas.height = 600;
		canvas.width = 800;
		containerWrapper.appendChild(containerDiv);
		containerWrapper.appendChild(canvas);
		this.container.appendChild(containerWrapper);
		const rpcProvider: any = new RpcProvider((m, t) =>
			window.postMessage(m, "*", t)
		);
		const graph = createLvglGraph(containerDiv, canvas, screen, rpcProvider)
		if (content) {
			graph.importXML(content);
		}

		graph.addMouseListener({
			mouseDown: () => {
				this.onFocusChange(graph);
			},
			mouseMove(sender, me) {

			},
			mouseUp: () => {

			},
		})
		this.renderCache.set(resource.toString(), {
			containerWrapper, graph
		})
		this.onFocusChange(graph);
		screenStore.curScreen = graph.screen;
		screenStore.curGraph = graph;

	}
}
