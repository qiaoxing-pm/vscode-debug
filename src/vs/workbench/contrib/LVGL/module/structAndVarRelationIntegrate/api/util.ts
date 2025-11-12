import { Action, SubmenuAction } from '../../../../../../base/common/actions.js';
import { data } from '../../../../../../base/test/common/filters.perf.data.js';
import { WorkbenchAsyncDataTree } from '../../../../../../platform/list/browser/listService.js';
import { structAndVarRelationIntegrateConstant } from '../../../api_demo/static.js';
import { StructAndVarRelationTreeNodeBase, TreeNodeType } from '../../../type/type.js';
import type { contextMenuType } from './type.js';
import TreeEntry from "../../../classes/TreeEntry.js";
import api from '../../../api/index.js';


export const createContextMenu = (contextMenu: Array<contextMenuType>, node: StructAndVarRelationTreeNodeBase, tree: any) => {
	const createActions = (items: Array<contextMenuType>): Array<Action | SubmenuAction> => {

		return items.map(item => {
			// 有 children => 子菜单
			if (item.children?.length) {
				return new SubmenuAction(
					item.id,
					item.label,
					createActions(item.children)
				);
			}

			// 无 children => 普通菜单
			return new Action(
				item.id,
				item.label,
				undefined,
				true,
				async () => {
					item.action?.(node, tree);
					// item.action?.(node);

					// const newNode: Node = {
					// 	label: "newVariable",
					// 	id: crypto.randomUUID(),
					// 	children: [],
					// 	type: "file",
					// 	parent: node,
					// }
					// node.children = node.children ?? [];
					// node.children.push(newNode);
					// console.log(tree, newNode)
					// await tree.updateChildren(node, false, true);
				}
			);
		});
	};

	return createActions(contextMenu);
};









export const enhanceTreeData = (nodes: StructAndVarRelationTreeNodeBase[], parent: StructAndVarRelationTreeNodeBase | null = null): StructAndVarRelationTreeNodeBase[] => {
	return nodes.map((node) => {
		const enhancedNode: StructAndVarRelationTreeNodeBase = {
			...node,
			// id: crypto.randomUUID(), // 生成唯一 id
			parent,
			children: node.children ? enhanceTreeData(node.children, null) : undefined
		};

		if (enhancedNode.children) {
			enhancedNode.children = enhancedNode.children.map((child) => ({
				...child,
				parent: enhancedNode
			}));
		}

		return enhancedNode;
	});
}



// export const createNode = async (node: StructAndVarRelationTreeNodeBase, tree: WorkbenchAsyncDataTree<null, StructAndVarRelationTreeNodeBase, void>, type: string, contextMenu: structAndVarRelationIntegrateConstant) => {
// 	// crypto.randomUUID()
// 	const newNode: Node = {
// 		name: "",
// 		id: crypto.randomUUID(),
// 		contextMenu: contextMenu,
// 		type,
// 		parent: node,
// 	};
// 	node.children = node.children ?? [];
// 	node.children.push(newNode);
// 	await tree.updateChildren(node, false, true);
// 	await tree.expand(node);

// 	// 聚焦并编辑
// 	tree.setFocus([newNode]);
// 	tree.reveal(newNode);

// 	requestAnimationFrame(() => {
// 		startRename(newNode);
// 	})
// 	// rename()
// }


export const deleteNode = async (node: StructAndVarRelationTreeNodeBase, tree: WorkbenchAsyncDataTree<null, StructAndVarRelationTreeNodeBase, void>) => {
	if (!node.parent) {
		console.warn("根节点不能删除");
		return;
	}

	// 1. 从父节点 children 中移除当前节点
	const parent = node.parent;
	parent.children = parent.children?.filter(child => child.id !== node.id);

	// 2. 刷新父节点
	await tree.updateChildren(parent, false, true);
};

export const rename = (node: StructAndVarRelationTreeNodeBase) => {
	console.log(node)
	const domNode = node.domNode as HTMLElement;
	const input = document.createElement('input');
	input.value = node.name;
	domNode.replaceWith(input);
	input.focus();
	input.addEventListener('blur', () => {
		renameEnd(node, input, domNode);
	});
	input.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			renameEnd(node, input, domNode);
		};
	});
};


export const startRename = (node: StructAndVarRelationTreeNodeBase) => {
	console.log(node)
	const domNode = node.domNode as HTMLElement;
	const input = document.createElement('input');
	input.value = node.name;
	domNode.replaceWith(input);
	input.focus();
	input.addEventListener('blur', () => {
		renameEnd(node, input, domNode);
	});
	input.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			renameEnd(node, input, domNode);
		};
	});
};


const renameEnd = (node: StructAndVarRelationTreeNodeBase, input: HTMLInputElement, domNode: HTMLSpanElement) => {
	node.name = input.value;
	input.replaceWith(domNode);
	domNode.textContent = node.name;
};





export const createNewNode = async (type: string, treeNode: StructAndVarRelationTreeNodeBase, tree: WorkbenchAsyncDataTree<null, StructAndVarRelationTreeNodeBase, void>,) => {
	switch (type) {
		case api.constant.structAndVarRelationConstants.CREATE_STRUCT_VAR_RELATION_INTERNAL_VARIABLE_GROUP: {
			if (!treeNode["children"]) {
				treeNode["children"] = [];
			}

			const newNode: StructAndVarRelationTreeNodeBase = {
				id: crypto.randomUUID() as string,
				name: '',
				comment: '',
				dataType: api.option.getOptions(api.constant.optionModulePublicOptions.STRUCT_AND_VAR_RELATION_INTEGRATE)![5].value as string,
				length: '',
				formatAdjustment: '',
				connection: '',
				group: treeNode.id,
				reg: '',
				address: '',
				parent: treeNode,
				linearCalibration: '',
				asRangeFrom: '',
				asRangeTo: '',
				osRangeFrom: '',
				osRangeTo: '',
				lowerLimit: '',
				upperLimit: '',
				type: `folder`,
				iconType: 'icon-bianliangjihe',
				connectionParameters: '',
				optionType: api.constant.structAndVarRelationConstants.RIGHT_CLICK_STRUCT_VAR_RELATION_INTERNAL_VARIABLE_GROUP
			}
			console.log(newNode)
			treeNode.children = treeNode.children ?? [];
			console.log(treeNode)
			treeNode.children.push(newNode);
			await tree.updateChildren(treeNode, false, true);
			await tree.expand(treeNode);
			tree.setFocus([newNode]);
			tree.reveal(newNode)
		}
	}
}
