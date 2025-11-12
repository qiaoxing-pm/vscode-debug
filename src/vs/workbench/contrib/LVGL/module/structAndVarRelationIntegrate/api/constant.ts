import { WorkbenchAsyncDataTree } from '../../../../../../platform/list/browser/listService.js';
import { structAndVarRelationIntegrateConstant } from '../../../api_demo/static.js';
import type { contextMenuType } from './type.js';
import type { StructAndVarRelationTreeNodeBase } from "../../../type/type.js"
import { createNewNode } from './util.js';
import api from "../../../api/index.js"

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


// 一级节点 变量管理
contextMenuMap.set(api.constant.structAndVarRelationConstants.STRUCT_VAR_RELATION_VARIABLE, [
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
])

// 二级节点 内部管理
contextMenuMap.set(api.constant.structAndVarRelationConstants.RIGHT_CLICK_STRUCT_VAR_RELATION_INTERNAL_VARIABLE,
	[
		{
			label: "新建变量组",
			id: "create_new_group",
			action: (node: StructAndVarRelationTreeNodeBase, tree: WorkbenchAsyncDataTree<null, StructAndVarRelationTreeNodeBase, void>) => {
				// // createNode(node, tree, 'folder', structAndVarRelationIntegrateConstant.VARIABLE_GROUP);
				createNewNode(api.constant.structAndVarRelationConstants.CREATE_STRUCT_VAR_RELATION_INTERNAL_VARIABLE_GROUP, node, tree)
			}
		}
	]
)

// 一级节点 结构管理
contextMenuMap.set(api.constant.structAndVarRelationConstants.STRUCT_VAR_RELATION_STRUCT,
	[
		{
			label: '新建结构群',
			id: 'create_new_structure_management',
			action: (node: StructAndVarRelationTreeNodeBase, tree: WorkbenchAsyncDataTree<null, StructAndVarRelationTreeNodeBase, void>) => {
				// createNode(node, tree, 'folder', structAndVarRelationIntegrateConstant.STRUCTURAL);
			}
		}
	]
)


