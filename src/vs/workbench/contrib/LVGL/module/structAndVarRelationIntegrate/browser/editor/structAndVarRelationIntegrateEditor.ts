import { EditorPane } from '../../../../../../browser/parts/editor/editorPane.js';
import { IEditorGroup } from '../../../../../../services/editor/common/editorGroupsService.js';
import { ITelemetryService } from '../../../../../../../platform/telemetry/common/telemetry.js';
import { IThemeService } from '../../../../../../../platform/theme/common/themeService.js';
import { IStorageService } from '../../../../../../../platform/storage/common/storage.js';
import { Dimension } from '../../../../../../../base/browser/dom.js';

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
		super('workbench.editor.structAndVarRelationIntegrateasd', group, telemetryService, themeService, storageService);
	}

	protected override async createEditor(parent: HTMLElement): Promise<void> {

		// Drop(parent);


		try {
			const container = document.createElement('div');
			parent.appendChild(container);
			container.className = 'strucAndVarRelationIntegrate-editor-wrapper';
			container.style.width = "100%"
			container.style.height = "100%"
			// container.style.background = "red";
			const commonModalLogic = this.variableExcelDom();
			container.appendChild(commonModalLogic);
		} catch (error) {
			console.error("加载协议失败", error);
		}
	}

	variableExcelDom() {

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
		// variableExcel.util = util;
		api.eventBus.on('upload', (e) => {
			variableExcel.mockTreeData = [e.data];
		});

		return variableExcel;
	}
	// commonModalLogicDom() {
	// 	const commonModalLogic = document.createElement("common-modal-logic");
	// 	commonModalLogic.isOpenState = true;
	// 	const asdf = this.ControlVariablesDom();
	// 	commonModalLogic.appendChild(asdf);

	// 	return asdf;
	// }

	// ControlVariablesDom() {
	// 	const ControlVariables = document.createElement("control-variables");
	// 	ControlVariables.label = "X";
	// 	ControlVariables.value = 123
	// 	ControlVariables.type = "number";
	// 	ControlVariables.api = api;
	// 	ControlVariables.variable = {
	// 		isDynamic: true,
	// 		bindVar: "",
	// 		type: "string",
	// 	};
	// 	ControlVariables.onChange = (e) => { console.log(e) };

	// 	return ControlVariables;
	// }

	override layout(dimension: Dimension): void {
		if (this._container) {
			this._container.style.width = `${dimension.width}px`;
			this._container.style.height = `${dimension.height}px`;
		}
	}

	// PropertyInput() {
	// 	let count = 1;
	// 	const dom = document.createElement('property-input');
	// 	dom.label = "";
	// 	dom.type = "option";
	// 	dom.value = count++;
	// 	dom.options = [
	// 		{
	// 			name: "1",
	// 			value: 1
	// 		},
	// 		{
	// 			name: "2",
	// 			value: 2
	// 		},
	// 		{
	// 			name: "3",
	// 			value: 3
	// 		},
	// 		{
	// 			name: "4",
	// 			value: 4
	// 		},
	// 	]
	// 	dom.onChange = (e) => {
	// 		console.log("asdfasdfd", e);
	// 	}

	// 	return dom;
	// }

	getInput() {

	}
}
