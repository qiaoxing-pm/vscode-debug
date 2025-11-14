import type { ApiInterface, ApiModuleImpl } from "../index.js";

import type {
	StructAndVarRelationTreeNodeBase,
	optionType,
	TreeNodeType,
} from "../../type/type.js";

import constant from "../ConstantModule/ConstantModule.js";
import TypeOptionModule from "../OptionModule/typeOptionModule.js";
import TreeEntry from "../../classes/TreeEntry.js";
import {
	getGroupOption,
	getOptionByDataType,
} from "../../util/util.js";
import api from "../index.js"



const variableManagement: StructAndVarRelationTreeNodeBase = {
	id: "variableManagement",
	name: "Variable Management",
	comment: "",
	dataType: constant.structAndVarRelations.VARIABLE_MANAGEMENT,
	length: "",
	formatAdjustment: "",
	connection: "",
	group: "",
	reg: "",
	address: "",
	linearCalibration: "",
	asRangeFrom: "",
	asRangeTo: "",
	osRangeFrom: "",
	osRangeTo: "",
	lowerLimit: "",
	upperLimit: "",
	type: "folder",
	parent: null,
	iconType: "icon-bianliangguanli",
	connectionParameters: "",
	optionType: constant.structAndVarRelationConstants.RIGHT_CLICK_STRUCT_VAR_RELATION_VARIABLE,
	children: [
	],
}

const internalVariable: StructAndVarRelationTreeNodeBase = {
	id: "internalVariable",
	name: "内部变量",
	comment: "",
	dataType: constant.structAndVarRelations.INTERNAL_VARIABLE,
	length: "",
	parent: variableManagement,
	formatAdjustment: "",
	connection: "",
	group: "",
	reg: "",
	address: "",
	linearCalibration: "",
	asRangeFrom: "",
	asRangeTo: "",
	osRangeFrom: "",
	osRangeTo: "",
	lowerLimit: "",
	upperLimit: "",
	type: "folder",
	iconType: "icon-neibubianliang",
	optionType:
		constant.structAndVarRelationConstants.RIGHT_CLICK_STRUCT_VAR_RELATION_INTERNAL_VARIABLE,
	connectionParameters: "",
};

const structManagement: StructAndVarRelationTreeNodeBase = {
	id: "structManagement",
	name: "Structural Management",
	comment: "",
	// dataType: 'structManagement',
	dataType: constant.structAndVarRelations.STRUCT_MANAGEMENT,
	length: "",
	formatAdjustment: "",
	connection: "",
	group: "",
	reg: "",
	address: "",
	linearCalibration: "",
	asRangeFrom: "",
	asRangeTo: "",
	osRangeFrom: "",
	osRangeTo: "",
	lowerLimit: "",
	upperLimit: "",
	type: "folder",
	iconType: "icon-structure",
	optionType: constant.structAndVarRelationConstants.RIGHT_CLICK_STRUCT_VAR_RELATION_STRUCT,
	connectionParameters: "",
	parent: null,
}

variableManagement.children!.push(internalVariable);

const staticData: Array<StructAndVarRelationTreeNodeBase> = [
	variableManagement, structManagement
]




const cantRenameDataType: Set<string> = new Set();
cantRenameDataType.add(constant.structAndVarRelations.VARIABLE_MANAGEMENT);
cantRenameDataType.add(constant.structAndVarRelations.INTERNAL_VARIABLE);
cantRenameDataType.add(constant.structAndVarRelations.STRUCT_MANAGEMENT);
// cantRenameDataType.add(constant.structAndVarRelations.MODBUS_TCPIP_GROUP);
cantRenameDataType.add(constant.structAndVarRelations.MODBUS_TCPIP)


class StructAndVarRelationIntegrateModule implements ApiModuleImpl {
	private structAndVarRelationIntegrateLocalStoreKey = "structAndVarRelationIntegrateLocalStoreKey";
	private structAndVarRelationIntegrateLocalStoreHeadKey = "structAndVarRelationIntegrateLocalStoreHeadKey"

	private cantRename: Set<string> = cantRenameDataType;

	private api: ApiInterface | null = null;

	private data: Array<StructAndVarRelationTreeNodeBase> = [];

	private treeFlattener = new TreeEntry<StructAndVarRelationTreeNodeBase>();

	private headData: Array<optionType> = [];

	private variableManagementRightClickData: Set<string> = new Set();

	private _api = {};

	private variableExcelDom: HTMLElement | null = null;
	private variableParentExcelDom: HTMLElement | null = null;

	private rule = {
		id: "id",
		label: "name",
		optionType: "optionType",
	}

	createTreeFlattener() {
		return new TreeEntry<StructAndVarRelationTreeNodeBase>();
	}

	init(apiInstance: ApiInterface) {
		this.api = apiInstance;
		// const oldData = localStorage.getItem(this.structAndVarRelationIntegrateLocalStoreKey);
		// if (oldData) {
		// 	this.setData(JSON.parse(oldData));
		// } else {
		this.setData(staticData);
		// }
		this.treeFlattener.build(this.data, {}, {});
		// console.log(this.treeFlattener)
		// const head = localStorage.getItem(this.structAndVarRelationIntegrateLocalStoreHeadKey);
		// if (head) {

		// 	const headObj = new Map(JSON.parse(head));
		// 	for (let i = 0; i < headData.length; i++) {
		// 		const current = headData[i];
		// 		if (headObj.get(current.label) && current.label && headObj.get(current.label) > 0) {
		// 			current['width'] = headObj.get(current.label)
		// 		}
		// 	}
		// }
		this.setHeadData(headData);
	}

	getData() {
		return this.data;
	}

	setData(newData: Array<StructAndVarRelationTreeNodeBase>) {
		this.data = newData;
	}

	getHeadData() {
		return this.headData;
	}

	setHeadData(newData: Array<optionType>) {
		this.headData = newData;
		const labelWidth = newData.map(item => {
			return [item.label, item.width ?? -1]
		});
		localStorage.setItem(this.structAndVarRelationIntegrateLocalStoreHeadKey, JSON.stringify(labelWidth))
	}

	getRule() {
		return this.rule;
	}

	setRule(newRule: any) {
		this.rule = newRule;
	}

	register(newApi: any) {
		this._api = newApi;
	}

	getApi() {
		return this._api;
	}

	changeData(id: string, newData: any) {
	}

	findNodeById(
		nodes: StructAndVarRelationTreeNodeBase[],
		targetId: string
	): StructAndVarRelationTreeNodeBase | null {
		// 遍历当前层级的节点
		for (const node of nodes) {
			// 如果找到匹配id的节点，直接返回
			if (node.id === targetId) {
				return node;
			}

			// 如果当前节点是文件夹且有子节点，递归查找
			if (node.type === 'folder' && node.children && node.children.length > 0) {
				const foundNode = this.findNodeById(node.children, targetId);
				if (foundNode) {
					return foundNode;
				}
			}
		}

		// 未找到匹配的节点
		return null;
	}

	store(willStoreData: Array<StructAndVarRelationTreeNodeBase>) {
		localStorage.setItem(this.structAndVarRelationIntegrateLocalStoreKey, JSON.stringify(willStoreData))
	}

	registerTreeFlattener(newTreeFlattener: TreeEntry<StructAndVarRelationTreeNodeBase>) {
		this.treeFlattener = newTreeFlattener;
	}

	getTreeFlattener() {
		this.treeFlattener.build(this.data, {}, {});
		return this.treeFlattener;
	}

	canRename(dataType: string) {
		return !this.cantRename.has(dataType);
	}

	getVariableExcelDom() {
		return [this.variableParentExcelDom, this.variableExcelDom];
	}

	setVariableExcelDom(newParentDom: HTMLElement, newDom: HTMLElement) {
		this.variableParentExcelDom = newParentDom;
		this.variableExcelDom = newDom;
	}
}



const structAndVarRelationIntegrateModuleObj = new StructAndVarRelationIntegrateModule();



const headData: Array<optionType> = [
	{
		label: "name",
		value: "name", // 名称（保持原样，通常作为字段标识）
		width: 100,
	},
	{
		label: "comment",
		value: "comment", // 注释
		width: 100,
	},
	{
		label: "dataType",
		value: "dataType", // 数据类型
		width: 50,
		type: "select",
		getOption: () => TypeOptionModule.getTypeOptions(),
	},
	{
		label: "length",
		value: "length", // 长度
		// type: "select",
		// getOption: () => PublicOptionModule.getOptions('OPTION_LENGTH'),
	},
	{
		label: "formatAdjustment",
		value: "formatAdjustment", // 格式调整
	},

	{
		label: "connection",
		value: "connection", // 连接
		type: 'select',
		getOption: (e: TreeNodeType<StructAndVarRelationTreeNodeBase>) => {
			return getOptionByDataType(api.constant.structAndVarRelations.MODBUS_TCPIP_CONNECTION, structAndVarRelationIntegrateModuleObj.getTreeFlattener())
			// const data = getConnectionOption(e, structAndVarRelationIntegrateModuleObj.getTreeFlattener(), staticData);
			// return [data];
		}
	},
	{
		label: "group",
		value: "group", // 组
		type: "select",
		getOption: (e: TreeNodeType<StructAndVarRelationTreeNodeBase>) => {
			return getGroupOption(e, structAndVarRelationIntegrateModuleObj.getTreeFlattener(), staticData)
		}
	},
	{
		label: "reg",
		value: 'reg',
		type: "select",
		getOption: (e: TreeNodeType<StructAndVarRelationTreeNodeBase>) => {
			if (e.source.connection) {
				const tempAgreement = structAndVarRelationIntegrateModuleObj.getTreeFlattener().getNodeBySourceId(e.source.connection);
				if (tempAgreement && tempAgreement.source && tempAgreement?.source?.agreement?.Regs?.Reg) {

					const reg = tempAgreement.source.agreement.Regs.Reg;
					const regsOption = reg.map(item => {
						return {
							label: item._attributes.Name,
							value: item._attributes.ID
						}
					})

					return regsOption;
				}
			}
			return [];
		}
	},
	{
		label: "attribute",
		value: (e: TreeNodeType<StructAndVarRelationTreeNodeBase>) => {
			let attribute = '';
			if (e.source.connection.length > 0 && e.source.reg.length > 0) {
				try {
					attribute = structAndVarRelationIntegrateModuleObj.getTreeFlattener().getNodeBySourceId(e.source.connection).source.agreement.Regs.Reg.filter(item => {
						return item._attributes.ID === e.source.reg;
					})[0]._attributes.Attribute;
				} catch (error) {
					attribute = '';
				}
			}
			return attribute
		},
	},
	{
		label: "address",
		value: "address", // 地址
	},
	{
		label: "linearCalibration",
		value: "linearCalibration", // 线性标定
	},
	{
		label: "asRangeFrom",
		value: "asRangeFrom", // AS值范围起始
	},
	{
		label: "asRangeTo",
		value: "asRangeTo", // AS值范围结束
	},
	{
		label: "osRangeFrom",
		value: "osRangeFrom", // OS值范围起始
	},
	{
		label: "osRangeTo",
		value: "osRangeTo", // OS值范围结束
	},

	{
		label: "lowerLimit",
		value: "lowerLimit", // 下限
	},
	{
		label: "upperLimit",
		value: "upperLimit", // 上限
	},
]


export default structAndVarRelationIntegrateModuleObj;
