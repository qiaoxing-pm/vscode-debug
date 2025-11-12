// import type {
//     ContainerType,
//     MapKeyType,
//     ValueType,
//     VariableDes
// } from "../index";

import type { VariableDataType } from "../../type/type.js"

import type { ApiInterface, ApiModuleImpl } from "../index.js"




class VariableModule implements ApiModuleImpl {
	private variableData: VariableDataType = {
		id: 'variable_root',
		name: 'variable',
		selected: false,
		deletionProhibited: true,
		children: []
	};
	private api: ApiInterface | null = null;

	private variableDataMapByNameAndId: Map<string, VariableDataType> = new Map();


	constructor() {
		this.variableDataMapByNameAndId.set(this.variableData.name, this.variableData)
	}


	init(apiInstance: ApiInterface) {
		this.api = apiInstance;
	}

	getVariable() {
		return this.variableData;
	}

	setVariable(data: any) {
		this.variableData = data;
		this.variableDataMapByNameAndId = this.buildMapByNameAndId(data)
		if (this.api) {
			this.api.eventBus.emit('variableUpdate', this.variableData);
		}
	}

	findVariableDataMapByNameAndId(nameId: string) {
		const variable = this.variableDataMapByNameAndId.get(nameId);
		return variable;
	}


	/**
* 以"name+parentId"为key构建结构数据的Map
* @param root 根节点数据
* @returns 以"name+parentId"为key的Map
*/
	private buildMapByNameAndId(root: VariableDataType): Map<string, VariableDataType> {
		const map = new Map<string, VariableDataType>();
		// 栈中存储的是节点及其父节点ID的元组
		const stack: [VariableDataType, string | undefined][] = [];

		// 将根节点入栈，根节点没有父节点，parentId为undefined
		stack.push([root, undefined]);

		while (stack.length > 0) {
			// 弹出栈顶节点及其父ID
			const [node, parentId] = stack.pop()!;
			if (!node) continue;

			// 构建复合键：name + (parentId || 'root')
			// 使用特殊标记表示根节点的父ID
			const key = parentId
				? `${node.name}_${parentId}`
				: `${node.name}_root`;

			// 将当前节点添加到Map中
			map.set(key, node as VariableDataType);

			// 如果有子节点，将子节点入栈，同时记录它们的父ID（当前节点的ID）
			if ('children' in node && node.children && node.children.length > 0) {
				// 遍历子节点，将每个子节点与其父ID（当前节点ID）一起入栈
				node.children.forEach(child => {
					stack.unshift([child, node.id]);
				});
			}
		}
		return map;
	}

}



export default new VariableModule();
