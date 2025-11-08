import { WorkbenchAsyncDataTree } from '../../../../../../platform/list/browser/listService.js';
import { structAndVarRelationIntegrateConstant } from '../../../api/static.js';
import type { Node, contextMenuType } from './type.js';
import { createNode, enhanceTreeData, deleteNode } from './util.js';


const oldData = [
	{
		"label": "Variable Management",
		"type": "folder",
		"contextMenu": structAndVarRelationIntegrateConstant.VARIABLE_MANAGEMENT,
		"children": [
			{
				"label": "内部变量",
				"type": "folder",
				"contextMenu": structAndVarRelationIntegrateConstant.INTERNAL_VARIABLE,
				// "children": [
				// 	{
				// 		"label": "变量组",
				// 		"type": "folder",
				// 		"contextMenu": structAndVarRelationIntegrateConstant.VARIABLE_GROUP,
				// 		"children": [
				// 			{
				// 				"label": "变量",
				// 				"type": "file",
				// 				"contextMenu": structAndVarRelationIntegrateConstant.VARIABLE,
				// 			}
				// 		]
				// 	}
				// ]
			},
			// {
			// 	"label": "Modbus TCPIP",
			// 	"type": "folder",
			// 	"contextMenu": structAndVarRelationIntegrateConstant.MODBUS_TCPIP,
			// 	"children": [
			// 		{
			// 			"label": "Modbus TCPIP Groups",
			// 			"type": 'folder',
			// 			"contextMenu": structAndVarRelationIntegrateConstant.MODBUS_TCPIP_GROUPS,
			// 			"children": [
			// 				{
			// 					"label": "Modbus TCPIP Connect",
			// 					"type": "file",
			// 					"contextMenu": structAndVarRelationIntegrateConstant.MODBUS_TCPIP_CONNECT,
			// 				}
			// 			]
			// 		}
			// 	]
			// }
		]
	},
	{
		"label": "Structural Management",
		"type": "folder",
		"contextMenu": structAndVarRelationIntegrateConstant.STRUCTURAL_MANAGEMENT,
		// "children": [
		// 	{
		// 		"label": "structural",
		// 		"type": "folder",
		// 		"contextMenu": structAndVarRelationIntegrateConstant.STRUCTURAL,
		// 		"children": [
		// 			{
		// 				"label": "structural member",
		// 				"type": 'file',
		// 				"contextMenu": structAndVarRelationIntegrateConstant.STRUCTURAL_MEMBER,
		// 			}
		// 		]
		// 	}
		// ]
	}
];


export const structAndVarRelationIntegrateTreeData: Array<Node> = enhanceTreeData(oldData as Array<Omit<Node, 'id' | 'parent'>>)

export const contextMenuMap = new Map<structAndVarRelationIntegrateConstant, Array<contextMenuType>>([
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
						action: (node: Node, tree: WorkbenchAsyncDataTree<null, Node, void>) => {
							createNode(node, tree, 'folder', structAndVarRelationIntegrateConstant.MODBUS_TCPIP);
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
				action: (node: Node, tree: WorkbenchAsyncDataTree<null, Node, void>) => {
					createNode(node, tree, 'folder', structAndVarRelationIntegrateConstant.VARIABLE_GROUP);
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
				action: (node: Node, tree: WorkbenchAsyncDataTree<null, Node, void>) => {
					createNode(node, tree, 'file', structAndVarRelationIntegrateConstant.VARIABLE);
				}
			},
			{
				label: "重命名",
				id: "rename",
			},
			{
				label: "删除",
				id: "delete",
				action: (node: Node, tree: WorkbenchAsyncDataTree<null, Node, void>) => {
					deleteNode(node, tree);
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
				action: (node: Node, tree: WorkbenchAsyncDataTree<null, Node, void>) => {
					deleteNode(node, tree);
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
				action: (node: Node, tree: WorkbenchAsyncDataTree<null, Node, void>) => {
					createNode(node, tree, 'folder', structAndVarRelationIntegrateConstant.MODBUS_TCPIP_GROUPS);
				}
			},
			{
				label: "删除",
				id: "delete",
				action: (node: Node, tree: WorkbenchAsyncDataTree<null, Node, void>) => {
					deleteNode(node, tree);
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
				action: (node: Node, tree: WorkbenchAsyncDataTree<null, Node, void>) => {
					createNode(node, tree, 'file', structAndVarRelationIntegrateConstant.MODBUS_TCPIP_CONNECT);
				}
			},
			{
				label: "删除",
				id: "delete",
				action: (node: Node, tree: WorkbenchAsyncDataTree<null, Node, void>) => {
					deleteNode(node, tree);
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
				action: (node: Node, tree: WorkbenchAsyncDataTree<null, Node, void>) => {
					deleteNode(node, tree);
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
				action: (node: Node, tree: WorkbenchAsyncDataTree<null, Node, void>) => {
					createNode(node, tree, 'folder', structAndVarRelationIntegrateConstant.STRUCTURAL);
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
				action: (node: Node, tree: WorkbenchAsyncDataTree<null, Node, void>) => {
					createNode(node, tree, 'file', structAndVarRelationIntegrateConstant.STRUCTURAL_MEMBER);
				}
			},
			{
				label: "重命名",
				id: 'rename'
			},
			{
				label: "删除",
				id: "delete",
				action: (node: Node, tree: WorkbenchAsyncDataTree<null, Node, void>) => {
					deleteNode(node, tree);
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
				action: (node: Node, tree: WorkbenchAsyncDataTree<null, Node, void>) => {
					console.log("node", node)
					deleteNode(node, tree);
				}
			}
		]
	]
]);
