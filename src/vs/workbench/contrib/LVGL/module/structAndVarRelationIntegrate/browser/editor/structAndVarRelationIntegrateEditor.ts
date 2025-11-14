import { EditorPane } from '../../../../../../browser/parts/editor/editorPane.js';
import { IEditorGroup } from '../../../../../../services/editor/common/editorGroupsService.js';
import { ITelemetryService } from '../../../../../../../platform/telemetry/common/telemetry.js';
import { IThemeService } from '../../../../../../../platform/theme/common/themeService.js';
import { IStorageService } from '../../../../../../../platform/storage/common/storage.js';
import { Dimension } from '../../../../../../../base/browser/dom.js';
// import "../../../../lib/my-svelte-lib.iife.js"
import "../../../../lib/my-svelte-lib.iife.js";
import api from "../../../../api/index.js";
import {
	validateCVariableName,
	camelToCss,
	haveSelect,
	haveConnect,
	clamp,
	getOppositeInteger,
} from "../../../../util/util.js";

export class StructAndVarRelationIntegrateEditor extends EditorPane {
	private _container?: HTMLElement;


	constructor(
		group: IEditorGroup,
		@ITelemetryService telemetryService: ITelemetryService,
		@IThemeService themeService: IThemeService,
		@IStorageService storageService: IStorageService
	) {
		super('workbench.editor.structAndVarRelationIntegrate', group, telemetryService, themeService, storageService);
	}

	protected override async createEditor(parent: HTMLElement): Promise<void> {
		try {
			const container = document.createElement('div');
			parent.appendChild(container);
			container.className = 'strucAndVarRelationIntegrate-editor-wrapper';
			container.style.width = "100%"
			container.style.height = "100%"
			container.style.background = "red";

			const treeFlattener = api.structAndVarRelationIntegrate.getTreeFlattener();
			const mockTreeData =
				treeFlattener.buildSourceTree(
					treeFlattener.getNodeBySourceId("root")?.treeId
				) ?? [];
			const util = {
				validateCVariableName,
				camelToCss,
				haveSelect,
				haveConnect,
				clamp,
				getOppositeInteger,
				createTreeObj: api.structAndVarRelationIntegrate.createTreeFlattener,
			}

			const variableExcel = document.createElement('variable-excel');
			variableExcel.style.width = "100%"
			variableExcel.style.height = "100%"
			variableExcel.headData = api.structAndVarRelationIntegrate.getHeadData();
			variableExcel.mockTreeData = mockTreeData;
			variableExcel.api = api;
			variableExcel.util = util;

			api.eventBus.on('upload', (e) => {
				console.log(e)
				console.log("treeFlattener\n", treeFlattener)
				variableExcel.mockTreeData = treeFlattener.buildSourceTree(treeFlattener.getNodeBySourceId(e.data.id)?.treeId);
			});

			container.appendChild(variableExcel);
		} catch (error) {
			console.error("加载协议失败", error);
		}
	}

	override layout(dimension: Dimension): void {
		if (this._container) {
			this._container.style.width = `${dimension.width}px`;
			this._container.style.height = `${dimension.height}px`;
		}
	}

	getInput() {

	}
}
