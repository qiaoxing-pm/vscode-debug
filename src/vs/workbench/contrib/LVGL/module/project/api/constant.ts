import type { Node } from "./type.js";



export const projectTreeData: Array<Node> = [
	{
		"label": "Folder 1",
		"type": "folder",
		"children": [
			{
				"label": "Item 1-1",
				"type": "module",
				module: true
			},
			{
				"label": "Item 1-2",
				"type": "module",
				children: [
					{
						"label": "Item 1-2-1",
						"type": "module",
					},
					{
						"label": "Item 1-2-2",
						"type": "module",
					}
				]
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
						"type": "other"
					}
				]
			}
		]
	}
]
