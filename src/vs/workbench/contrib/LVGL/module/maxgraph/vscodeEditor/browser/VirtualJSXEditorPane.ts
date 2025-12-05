import { IEditorOptions } from '../../../../../../../platform/editor/common/editor.js';
import { EditorPane } from '../../../../../../browser/parts/editor/editorPane.js';
import { VirtualJSXEditorInput } from './CustomEditor/VirtualJSXEditorInput.js';
import { IEditorGroup } from '../../../../../../services/editor/common/editorGroupsService.js';
import { IStorageService } from '../../../../../../../platform/storage/common/storage.js';
import { IThemeService } from '../../../../../../../platform/theme/common/themeService.js';
import { ITelemetryService } from '../../../../../../../platform/telemetry/common/telemetry.js';
import { IEditorOpenContext } from '../../../../../../common/editor.js';
import { CancellationToken } from 'vscode';
import { URI } from '../../../../../../../base/common/uri.js';
import { DomScrollableElement } from '../../../../../../../base/browser/ui/scrollbar/scrollableElement.js';
import { createNewScreen } from "../../lvgl/package/LvglModule.js";
import createLvglGraph, { switchGraph } from "../../lvgl/events/createLvglCanvas.js"
import RpcProvider from "../../../../lib/worker-rpc/lib/RpcProvider.js";
import { ScrollbarVisibility } from '../../../../../../../base/common/scrollable.js';
import { createHMIWidget } from "../../hmi/testHmi.js";
import { screenStore, widgetProps } from '../../lvgl/store/index.js';
import { IEditorService } from '../../../../../../services/editor/common/editorService.js';
import api from '../../../../api/index.js';
import { isPointInRect } from '../../../../util/util.js';
import { WidgetDragManager, widgetListDragEnd } from './util.js';
import SelectionChange from '../../packages/core/src/view/undoable_changes/SelectionChange.js';
import Editor from '../../Editor/Editor.js';
import { ITextModel } from '../../../../../../../editor/common/model.js';
import { ICommandService } from '../../../../../../../platform/commands/common/commands.js';



export class VirtualJSXEditorPane extends EditorPane<VirtualJSXEditorInput> {
	static readonly ID = 'workbench.pane.virtualJSXEditor';
	private container!: HTMLElement;
	private renderCache = new Map<string, { containerWrapper: HTMLElement; graph: any }>();
	private editorService!: IEditorService;
	private _scrollElement: DomScrollableElement | undefined;
	private isActiveEditor: string = '';

	constructor(
		group: IEditorGroup,
		@ITelemetryService telemetryService: ITelemetryService,
		@IThemeService themeService: IThemeService,
		@IStorageService storageService: IStorageService,
		@IEditorService editorService: IEditorService,
		@ICommandService private readonly commandService: ICommandService
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
		const { content, resource, model } = await input.resolve();
		this.init(resource.toString());
		// this.input.getModel().onDidChangeContent

		if (this.renderCache.has(resource.toString())) {
			this.showCached(resource.toString());
		} else {
			this.renderUI(content, resource, model);
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
		widgetProps.update++;
	}


	private init(resourceString: string) {
		const curScreenAndDom = this.renderCache.get(resourceString);
		this.editorService.onDidActiveEditorChange(() => {
			const active = this.editorService.activeEditor;

			if (active?.resource?.toString() === resourceString && curScreenAndDom?.graph) {
				setTimeout(() => {
					this.onFocusChange(curScreenAndDom?.graph);
				}, 100)
			}

		});
	}

	private renderUI(content: string, resource: URI, model: ITextModel) {
		this.container.innerHTML = '';

		this.isActiveEditor = resource.toString();

		const screen = createNewScreen(
			this.isActiveEditor,
			800,
			600,
		)
		const containerWrapper = document.createElement('div');
		containerWrapper.style.height = "100%";
		containerWrapper.style.width = "100%";
		containerWrapper.style.position = 'relative';
		containerWrapper.style.overflow = 'hidden';


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


		this._scrollElement = new DomScrollableElement(containerWrapper, {
			alwaysConsumeMouseWheel: true,
			horizontal: ScrollbarVisibility.Auto,
			vertical: ScrollbarVisibility.Auto
		});
		const domNode = this._scrollElement.getDomNode();
		domNode.style.height = "100%";
		domNode.style.width = "100%";

		this.container.appendChild(domNode);
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


		this.renderCache.set(this.isActiveEditor, {
			containerWrapper, graph
		});

		this.onFocusChange(graph);
		screenStore.curScreen = graph.screen;
		screenStore.curGraph = graph;


		// 监听graph被修改后，将修改后的数据写入 pane后，
		graph.addListener("graphChange", (sender, e) => {
			if (e.properties.evt.properties.edit.changes.length === 1) {
				const updateEvent = e.properties.evt.properties.edit.changes[0];
				// 避免选择变化引起的大量保存
				if (updateEvent instanceof SelectionChange) {
					return;
				}
			}
			this.input?.setPendingContent(graph.exportXML());
		});

		// 劫持vscode的撤销和恢复。
		this.commandService.onWillExecuteCommand(e => {
			if (!this.input) return;

			if (!this.isActiveEditor === resource.toString()) return;

			if (e.commandId === 'undo') {
				Editor.undo(graph);
				e.preventDefault?.();  // 阻止 VSCode 默认行为（可选）
			}

			if (e.commandId === 'redo') {
				Editor.redo(graph);
				e.preventDefault?.();
			}
		});




	}




























}
