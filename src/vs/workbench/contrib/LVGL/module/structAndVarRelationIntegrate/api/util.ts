import { Action, SubmenuAction } from '../../../../../../base/common/actions.js';
import { data } from '../../../../../../base/test/common/filters.perf.data.js';
import { WorkbenchAsyncDataTree } from '../../../../../../platform/list/browser/listService.js';
import { structAndVarRelationIntegrateConstant } from '../../../api_demo/static.js';
import { StructAndVarRelationTreeNodeBase, TreeNodeType, vscodeApiType } from '../../../type/type.js';
import type { contextMenuType } from './type.js';
import api from '../../../api/index.js';
import { validateCVariableName } from '../../../util/util.js';
import { INotificationService } from '../../../../../../platform/notification/common/notification.js';


export const createContextMenu = (contextMenu: Array<contextMenuType>, node: StructAndVarRelationTreeNodeBase, tree: any, vscodeApi: vscodeApiType) => {
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
					item.action?.(node, tree, vscodeApi);
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

export const rename = (node: StructAndVarRelationTreeNodeBase, tree: WorkbenchAsyncDataTree<null, StructAndVarRelationTreeNodeBase, void>, vscodeApi: vscodeApiType) => {
	const canRename = api.structAndVarRelationIntegrate.canRename(node.dataType);
	if (node.name === "Modbus TCPIP Groups") {
		vscodeApi.notificationService.error("该属性无法重命名")
		return;
	}
	if (!canRename) {
		vscodeApi.notificationService.error("该属性无法重命名")
		return;
	}

	const domNode = node.domNode as HTMLElement;
	const input = document.createElement('input');
	input.value = node.name;
	input.style.color = "black"
	domNode.replaceWith(input);
	input.focus();
	input.addEventListener('blur', () => {
		renameEnd(node, input, domNode, tree, vscodeApi);
	});
	input.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			renameEnd(node, input, domNode, tree, vscodeApi);
		}
	});
};


export const deleteNode = async (node: StructAndVarRelationTreeNodeBase, tree: WorkbenchAsyncDataTree<null, StructAndVarRelationTreeNodeBase, void>, vscodeApi: vscodeApiType) => {
	const parentNode = node.parent;
	let index = parentNode?.children?.findIndex(item => {
		return item.id === node.id;
	});
	if (index !== undefined && index !== -1) {
		parentNode?.children?.splice(index, 1);
		await tree.updateChildren(parentNode, false, true);
	}
};


export const startRename = (node: StructAndVarRelationTreeNodeBase, tree: WorkbenchAsyncDataTree<null, StructAndVarRelationTreeNodeBase, void>, vscodeApi: vscodeApiType) => {
	const domNode = node.domNode as HTMLElement;
	const input = document.createElement('input');
	input.value = node.name;
	input.style.color = 'black';
	// input.style.background = "transparent"
	domNode.replaceWith(input);
	input.focus();
	input.addEventListener('blur', () => {
		renameEnd(node, input, domNode, tree, vscodeApi);
	});
	input.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			renameEnd(node, input, domNode, tree, vscodeApi);
		}
	});
};


const renameEnd = (node: StructAndVarRelationTreeNodeBase, input: HTMLInputElement, domNode: HTMLSpanElement, tree: WorkbenchAsyncDataTree<null, StructAndVarRelationTreeNodeBase, void>, vscodeApi: vscodeApiType) => {
	const inputValue = input.value;
	const validateData = validateCVariableName(inputValue);
	if (validateData.valid) {
		node.name = input.value;
		input.replaceWith(domNode);
		domNode.textContent = node.name;
	} else {
		vscodeApi.notificationService.error(validateData.message);
		const sourceValidateData = validateCVariableName(node.name);
		if (sourceValidateData.valid) {
			input.replaceWith(domNode);
			return;
		} else {
			input.replaceWith(domNode);
			// vscodeApi.notificationService.error(sourceValidateData.message);
			deleteNode(node, tree, vscodeApi);
		}
	}
};





export const createNewNode = async (type: string, treeNode: StructAndVarRelationTreeNodeBase, tree: WorkbenchAsyncDataTree<null, StructAndVarRelationTreeNodeBase, void>, vscodeApi: vscodeApiType) => {
	if (!treeNode["children"]) {
		treeNode["children"] = [];
	}
	let newNode: StructAndVarRelationTreeNodeBase | null = null;
	let shouldRename: boolean = true;

	// 内部变量管理
	switch (type) {
		// 新建内部变量组
		case api.constant.structAndVarRelationConstants.CREATE_STRUCT_VAR_RELATION_INTERNAL_VARIABLE_GROUP: {
			newNode = {
				id: crypto.randomUUID() as string,
				name: '',
				comment: '',
				dataType: api.constant.structAndVarRelations.INTERNAL_VARIABLE_GROUP,
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
			};
		} break;
		// 新建内部变量元素
		case api.constant.structAndVarRelationConstants.CREATE_STRUCT_VAR_RELATION_INTERNAL_VARIABLE_ITEM: {
			newNode = {
				id: crypto.randomUUID() as string,
				name: '',
				comment: '',
				dataType: api.typeOption.getTypeOptions()[0].value,
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
				type: `file`,
				iconType: 'icon-bianliangjihe',
				connectionParameters: '',
				optionType: api.constant.structAndVarRelationConstants.RIGHT_CLICK_STRUCT_VAR_RELATION_INTERNAL_VARIABLE_ITEM
			};
		} break;
	}

	// Modbus TCPIP 相关操作
	switch (type) {
		// 新建Modbus TCPIP
		case api.constant.structAndVarRelationConstants.CREATE_STRUCT_VAR_RELATION_MODBUS_TCPIP: {
			newNode = {
				id: crypto.randomUUID() as string,
				name: 'Modbus TCPIP',
				comment: '',
				dataType: api.constant.structAndVarRelations.MODBUS_TCPIP,
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
				optionType: api.constant.structAndVarRelationConstants.RIGHT_CLICK_STRUCT_VAR_RELATION_MODBUS_TCPIP,
				children: [
				]
			};

			const tempNewNode = {
				id: crypto.randomUUID() as string,
				name: 'Modbus TCPIP Groups',
				comment: '',
				dataType: api.constant.structAndVarRelations.MODBUS_TCPIP_GROUP,
				length: '',
				formatAdjustment: '',
				connection: '',
				group: newNode.id,
				parent: newNode,
				reg: '',
				address: '',
				linearCalibration: '',
				asRangeFrom: '',
				asRangeTo: '',
				osRangeFrom: '',
				osRangeTo: '',
				lowerLimit: '',
				upperLimit: '',
				type: "folder",
				iconType: 'icon-Modbus',
				connectionParameters: '',
				optionType: api.constant.structAndVarRelationConstants.RIGHT_CLICK_STRUCT_VAR_RELATION_MODBUS_TCPIP_GROUP,
			}
			newNode.children?.push(tempNewNode);
			shouldRename = false;
		} break;
		case api.constant.structAndVarRelationConstants.CREATE_STRUCT_VAR_RELATION_MODBUS_TCPIP_GROUP: {
			newNode = {
				id: crypto.randomUUID() as string,
				name: '',
				comment: '',
				dataType: api.constant.structAndVarRelations.MODBUS_TCPIP_GROUP,
				length: '',
				formatAdjustment: '',
				connection: '',
				group: treeNode.id,
				parent: treeNode,
				reg: '',
				address: '',
				linearCalibration: '',
				asRangeFrom: '',
				asRangeTo: '',
				osRangeFrom: '',
				osRangeTo: '',
				lowerLimit: '',
				upperLimit: '',
				type: "folder",
				iconType: 'icon-Modbus',
				connectionParameters: '',
				optionType: api.constant.structAndVarRelationConstants.RIGHT_CLICK_STRUCT_VAR_RELATION_MODBUS_TCPIP_GROUP,
			}
		} break;
		case api.constant.structAndVarRelationConstants.CREATE_STRUCT_VAR_RELATION_MODBUS_TCPIP_ITEM: {
			newNode = {
				id: crypto.randomUUID() as string,
				name: '',
				comment: '',
				dataType: api.constant.structAndVarRelations.MODBUS_TCPIP_CONNECTION,
				length: '',
				formatAdjustment: '',
				connection: '',
				group: treeNode.id,
				parent: treeNode,
				reg: '',
				address: '',
				linearCalibration: '',
				asRangeFrom: '',
				asRangeTo: '',
				osRangeFrom: '',
				osRangeTo: '',
				lowerLimit: '',
				upperLimit: '',
				type: "file",
				iconType: 'icon-Modbus',
				connectionParameters: '',
				optionType: api.constant.structAndVarRelationConstants.RIGHT_CLICK_STRUCT_VAR_RELATION_MODBUS_TCPIP_ITEM,
			};
		} break;
	}

	// 结构管理
	switch (type) {
		case api.constant.structAndVarRelationConstants.CREATE_STRUCT_VAR_RELATION_STRUCT_GROUP: {
			newNode = {
				id: crypto.randomUUID() as string,
				name: '',
				comment: '',
				dataType: api.constant.structAndVarRelations.STRUCT_GROUP,
				length: '',
				formatAdjustment: '',
				connection: '',
				group: treeNode.id,
				parent: treeNode,
				reg: '',
				address: '',
				linearCalibration: '',
				asRangeFrom: '',
				asRangeTo: '',
				osRangeFrom: '',
				osRangeTo: '',
				lowerLimit: '',
				upperLimit: '',
				type: "folder",
				iconType: 'icon-Modbus',
				connectionParameters: '',
				optionType: api.constant.structAndVarRelationConstants.RIGHT_CLICK_STRUCT_VAR_RELATION_STRUCT_GROUP,
			}
		} break;

		case api.constant.structAndVarRelationConstants.CREATE_STRUCT_VAR_RELATION_STRUCT_ITEM: {
			newNode = {
				id: crypto.randomUUID() as string,
				name: '',
				comment: '',
				dataType: api.typeOption.getTypeOptions()[0].value,
				length: '',
				formatAdjustment: '',
				connection: '',
				group: treeNode.id,
				parent: treeNode,
				reg: '',
				address: '',
				linearCalibration: '',
				asRangeFrom: '',
				asRangeTo: '',
				osRangeFrom: '',
				osRangeTo: '',
				lowerLimit: '',
				upperLimit: '',
				type: "file",
				iconType: 'icon-Modbus',
				connectionParameters: '',
				optionType: api.constant.structAndVarRelationConstants.RIGHT_CLICK_STRUCT_VAR_RELATION_STRUCT_ITEM,
			}
		}
	}

	if (!newNode) {
		return;
	}

	treeNode.children = treeNode.children ?? [];
	treeNode.children.push(newNode);
	await tree.updateChildren(treeNode, false, true);
	await tree.expand(treeNode);
	tree.setFocus([newNode]);
	tree.reveal(newNode);

	if (shouldRename) {
		requestAnimationFrame(() => {
			startRename(newNode, tree, vscodeApi);
		});
	}

	return "none"
}


export const contextMenuAction = (node: StructAndVarRelationTreeNodeBase, tree: WorkbenchAsyncDataTree<null, StructAndVarRelationTreeNodeBase, void>, vscodeApi: vscodeApiType, actionType: string) => {
	createNewNode(actionType, node, tree, vscodeApi);
}
