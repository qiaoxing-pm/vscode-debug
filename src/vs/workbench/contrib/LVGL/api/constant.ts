import { structAndVarRelationIntegrateConstant } from './static.js'

export const hierachyTreeData = [
	{
		"label": "Folder 1",
		"type": "folder",
		"children": [
			{
				"label": "Item 1-1",
				"type": "file"
			},
			{
				"label": "Item 1-2",
				"type": "tsx"
			}
		]
	},
	{
		"label": "Folder 2",
		"type": "folder",
		"children": [
			{
				"label": "Sub 2-1",
				"type": "folder",
				"children": [
					{
						"label": "Deep 2-1-1",
						"type": "tsx"
					}
				]
			}
		]
	}
]

export const structAndVarRelationIntegrateTreeData = [
	{
		"label": "Variable Management",
		"type": "folder",
		"contextMenu": structAndVarRelationIntegrateConstant.VARIABLE_MANAGEMENT,
		"children": [
			{
				"label": "内部变量",
				"type": "folder",
				"contextMenu": structAndVarRelationIntegrateConstant.INTERNAL_VARIABLE,
			},
			{
				"label": "Modbus TCPIP",
				"type": "folder",
				"contextMenu": structAndVarRelationIntegrateConstant.MODBUS_TCPIP,
				"children": [
					{
						"label": "Modbus TCPIP Groups",
						"type": 'folder',
						"contextMenu": structAndVarRelationIntegrateConstant.MODBUS_TCPIP_GROUPS
					}
				]
			}
		]
	},
	{
		"label": "Structural Management",
		"type": "folder",
		"contextMenu": structAndVarRelationIntegrateConstant.STRUCTURAL_MANAGEMENT
	}
]

