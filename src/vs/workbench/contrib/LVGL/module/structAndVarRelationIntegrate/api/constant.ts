import { WorkbenchAsyncDataTree } from '../../../../../../platform/list/browser/listService.js';
import { structAndVarRelationIntegrateConstant } from '../../../api_demo/static.js';
import type { contextMenuType } from './type.js';
import type { StructAndVarRelationTreeNodeBase, vscodeApiType } from "../../../type/type.js"
import { contextMenuAction, createNewNode } from './util.js';
import api from "../../../api/index.js"
// import { INotification } from '../../../../../../base/browser/dom.js';
import { INotificationService } from '../../../../../../platform/notification/common/notification.js';


const oldData = api.structAndVarRelationIntegrate.getData();

// const oldData = [
// 	{
// 		"name": "Variable Management",
// 		"type": "folder",
// 		"optionType": structAndVarRelationIntegrateConstant.VARIABLE_MANAGEMENT,
// 		"children": [
// 			{
// 				"name": "内部变量",
// 				"type": "folder",
// 				"optionType": structAndVarRelationIntegrateConstant.INTERNAL_VARIABLE,
// 			},
// 		]
// 	},
// 	{
// 		"name": "Structural Management",
// 		"type": "folder",
// 		"optionType": structAndVarRelationIntegrateConstant.STRUCTURAL_MANAGEMENT,
// 	}
// ];


export const structAndVarRelationIntegrateTreeData: Array<StructAndVarRelationTreeNodeBase> = oldData;

export const contextMenuMapOld = new Map<string, Array<contextMenuType>>([
	[
		structAndVarRelationIntegrateConstant.VARIABLE_MANAGEMENT,
		[
			{
				label: "新建",
				id: 'create_new',
				children: [
					{
						label: "新建 Modbux TCPIP",
						id: "create_new_modbux_tcpip",
						action: (node: StructAndVarRelationTreeNodeBase, tree: WorkbenchAsyncDataTree<null, StructAndVarRelationTreeNodeBase, void>) => {
							// createNode(node, tree, 'folder', structAndVarRelationIntegrateConstant.MODBUS_TCPIP);
						}
					},
				]
			},
		]
	],
	[
		structAndVarRelationIntegrateConstant.INTERNAL_VARIABLE,
		[
			{
				label: "新建变量组",
				id: "create_new_group",
				action: (node: StructAndVarRelationTreeNodeBase, tree: WorkbenchAsyncDataTree<null, StructAndVarRelationTreeNodeBase, void>) => {
					// createNode(node, tree, 'folder', structAndVarRelationIntegrateConstant.VARIABLE_GROUP);
				}
			}
		]
	],
	[
		structAndVarRelationIntegrateConstant.VARIABLE_GROUP,
		[
			{
				label: "新建变量",
				id: "create new variable",
				action: (node: StructAndVarRelationTreeNodeBase, tree: WorkbenchAsyncDataTree<null, StructAndVarRelationTreeNodeBase, void>) => {
					// createNode(node, tree, 'file', structAndVarRelationIntegrateConstant.VARIABLE);
				}
			},
			{
				label: "重命名",
				id: "rename",
			},
			{
				label: "删除",
				id: "delete",
				action: (node: StructAndVarRelationTreeNodeBase, tree: WorkbenchAsyncDataTree<null, StructAndVarRelationTreeNodeBase, void>) => {
					// deleteNode(node, tree);
				}
			}
		]
	],
	[
		structAndVarRelationIntegrateConstant.VARIABLE,
		[
			{
				label: "重命名",
				id: "rename"
			},
			{
				label: "删除",
				id: "delete",
				action: (node: StructAndVarRelationTreeNodeBase, tree: WorkbenchAsyncDataTree<null, StructAndVarRelationTreeNodeBase, void>) => {
					// deleteNode(node, tree);
				}
			}
		]
	],
	[
		structAndVarRelationIntegrateConstant.MODBUS_TCPIP,
		[
			{
				label: "新建 TCPIP 组",
				id: "create tcpip group",
				action: (node: StructAndVarRelationTreeNodeBase, tree: WorkbenchAsyncDataTree<null, StructAndVarRelationTreeNodeBase, void>) => {
					// createNode(node, tree, 'folder', structAndVarRelationIntegrateConstant.MODBUS_TCPIP_GROUPS);
				}
			},
			{
				label: "删除",
				id: "delete",
				action: (node: StructAndVarRelationTreeNodeBase, tree: WorkbenchAsyncDataTree<null, StructAndVarRelationTreeNodeBase, void>) => {
					// deleteNode(node, tree);
				}
			}
		]
	],
	[
		structAndVarRelationIntegrateConstant.MODBUS_TCPIP_GROUPS,
		[
			{
				label: "新建连接",
				id: 'create connection',
				action: (node: StructAndVarRelationTreeNodeBase, tree: WorkbenchAsyncDataTree<null, StructAndVarRelationTreeNodeBase, void>) => {
					// createNode(node, tree, 'file', structAndVarRelationIntegrateConstant.MODBUS_TCPIP_CONNECT);
				}
			},
			{
				label: "删除",
				id: "delete",
				action: (node: StructAndVarRelationTreeNodeBase, tree: WorkbenchAsyncDataTree<null, StructAndVarRelationTreeNodeBase, void>) => {
					// deleteNode(node, tree);
				}
			}
		]
	],
	[
		structAndVarRelationIntegrateConstant.MODBUS_TCPIP_CONNECT,
		[
			{
				label: "重命名",
				id: "rename",
			},
			{
				label: "删除",
				id: "delete",
				action: (node: StructAndVarRelationTreeNodeBase, tree: WorkbenchAsyncDataTree<null, StructAndVarRelationTreeNodeBase, void>) => {
					// // deleteNode(node, tree);
				}
			}
		]
	],
	[
		structAndVarRelationIntegrateConstant.STRUCTURAL_MANAGEMENT,
		[
			{
				label: '新建结构群',
				id: 'create_new_structure_management',
				action: (node: StructAndVarRelationTreeNodeBase, tree: WorkbenchAsyncDataTree<null, StructAndVarRelationTreeNodeBase, void>) => {
					// createNode(node, tree, 'folder', structAndVarRelationIntegrateConstant.STRUCTURAL);
				}
			}
		]
	],
	[
		structAndVarRelationIntegrateConstant.STRUCTURAL,
		[
			{
				label: "新建结构体",
				id: 'create_new_structure_element',
				action: (node: StructAndVarRelationTreeNodeBase, tree: WorkbenchAsyncDataTree<null, StructAndVarRelationTreeNodeBase, void>) => {
					// createNode(node, tree, 'file', structAndVarRelationIntegrateConstant.STRUCTURAL_MEMBER);
				}
			},
			{
				label: "重命名",
				id: 'rename'
			},
			{
				label: "删除",
				id: "delete",
				action: (node: StructAndVarRelationTreeNodeBase, tree: WorkbenchAsyncDataTree<null, StructAndVarRelationTreeNodeBase, void>) => {
					// deleteNode(node, tree);
				}
			}
		]
	],
	[
		structAndVarRelationIntegrateConstant.STRUCTURAL_MEMBER,
		[
			{
				label: "重命名",
				id: "rename",
			},
			{
				label: "删除",
				id: "delete",
				action: (node: StructAndVarRelationTreeNodeBase, tree: WorkbenchAsyncDataTree<null, StructAndVarRelationTreeNodeBase, void>) => {
					console.log("node", node)
					// deleteNode(node, tree);
				}
			}
		]
	]
]);


export const contextMenuMap = new Map<string, Array<contextMenuType>>();


// 一级节点 变量管理的右键菜单栏
contextMenuMap.set(api.constant.structAndVarRelationConstants.RIGHT_CLICK_STRUCT_VAR_RELATION_VARIABLE, [
	{
		label: "新建",
		id: crypto.randomUUID(),
		children: [
			{
				label: "新建 Modbus TCPIP",
				id: api.constant.structAndVarRelationConstants.CREATE_STRUCT_VAR_RELATION_MODBUS_TCPIP,
				action: (...arg) => {
					contextMenuAction(...arg, api.constant.structAndVarRelationConstants.CREATE_STRUCT_VAR_RELATION_MODBUS_TCPIP);
				}
			},
		]
	},
]);

// 二级节点 内部管理的右键菜单栏
contextMenuMap.set(api.constant.structAndVarRelationConstants.RIGHT_CLICK_STRUCT_VAR_RELATION_INTERNAL_VARIABLE,
	[
		{
			label: "新建内部变量组",
			id: api.constant.structAndVarRelationConstants.CREATE_STRUCT_VAR_RELATION_INTERNAL_VARIABLE_GROUP,
			action: (...arg) => {
				contextMenuAction(...arg, api.constant.structAndVarRelationConstants.CREATE_STRUCT_VAR_RELATION_INTERNAL_VARIABLE_GROUP);
			}
		}
	]
);

// 三级节点 内部变量组的右键菜单栏
contextMenuMap.set(api.constant.structAndVarRelationConstants.RIGHT_CLICK_STRUCT_VAR_RELATION_INTERNAL_VARIABLE_GROUP,
	[
		{
			label: "新建内部变量元素",
			id: api.constant.structAndVarRelationConstants.CREATE_STRUCT_VAR_RELATION_INTERNAL_VARIABLE_ITEM,
			action: (...arg) => {
				contextMenuAction(...arg, api.constant.structAndVarRelationConstants.CREATE_STRUCT_VAR_RELATION_INTERNAL_VARIABLE_ITEM);
			}
		}
	]
)

// 二级节点 Modbus TCPIP
contextMenuMap.set(api.constant.structAndVarRelationConstants.RIGHT_CLICK_STRUCT_VAR_RELATION_MODBUS_TCPIP, [
	{
		label: "新建 Modbus TCPIP 组",
		id: api.constant.structAndVarRelationConstants.CREATE_STRUCT_VAR_RELATION_MODBUS_TCPIP_GROUP,
		action: (...arg) => {
			contextMenuAction(...arg, api.constant.structAndVarRelationConstants.CREATE_STRUCT_VAR_RELATION_MODBUS_TCPIP_GROUP);
		}
	}
])

// RIGHT_CLICK_STRUCT_VAR_RELATION_MODBUS_TCPIP_GROUP
// 三级节点 Modbus TCPIP 组
contextMenuMap.set(api.constant.structAndVarRelationConstants.RIGHT_CLICK_STRUCT_VAR_RELATION_MODBUS_TCPIP_GROUP, [
	{
		label: "新建 Modbus TCPIP 连接",
		id: api.constant.structAndVarRelationConstants.CREATE_STRUCT_VAR_RELATION_MODBUS_TCPIP_ITEM,
		action: (...arg) => {
			contextMenuAction(...arg, api.constant.structAndVarRelationConstants.CREATE_STRUCT_VAR_RELATION_MODBUS_TCPIP_ITEM);
		}
	}
])


// 一级节点 结构管理的右键菜单栏
contextMenuMap.set(api.constant.structAndVarRelationConstants.RIGHT_CLICK_STRUCT_VAR_RELATION_STRUCT,
	[
		{
			label: '新建结构群',
			id: api.constant.structAndVarRelationConstants.CREATE_STRUCT_VAR_RELATION_STRUCT_GROUP,
			// action: contextMenuAction
			action: (...arg) => {
				contextMenuAction(...arg, api.constant.structAndVarRelationConstants.CREATE_STRUCT_VAR_RELATION_STRUCT_GROUP);
			}
		}
	]
);

// 二级节点 结构组的右键菜单栏
contextMenuMap.set(api.constant.structAndVarRelationConstants.RIGHT_CLICK_STRUCT_VAR_RELATION_STRUCT_GROUP,
	[
		{
			label: "新建结构元素",
			id: api.constant.structAndVarRelationConstants.CREATE_STRUCT_VAR_RELATION_STRUCT_ITEM,
			action: (...arg) => {
				contextMenuAction(...arg, api.constant.structAndVarRelationConstants.CREATE_STRUCT_VAR_RELATION_STRUCT_ITEM);
			}
		}
	]
)

//


