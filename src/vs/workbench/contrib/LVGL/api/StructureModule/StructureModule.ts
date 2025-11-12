// import type {
//     VariableDataType
// } from "../VariableModule/VariableModule";
import type { VariableDataType } from "../../type/type.js"

import type { ApiInterface } from "../index.js";


export type StructureDataType = {
	id: string,
	name: string,
	selected: boolean,
	deletionProhibited: boolean,
	description?: string,
	children?: Omit<VariableDataType, "children">[]
}

export type StructRootType = Omit<StructureDataType, "children"> & {
	children: StructureDataType[];
};


class StructureModule {
	private structureData: StructRootType = {
		id: 'structure_root',
		name: 'structure',
		selected: false,
		deletionProhibited: true,
		description: '',
		children: []
	};

	private structureDataMapByNameAndId: Map<string, StructRootType> = new Map();
	private api: ApiInterface | null = null;

	constructor() {
		this.structureDataMapByNameAndId.set(this.structureData.name, this.structureData)
	}

	init(apiInstance: ApiInterface) {
		this.api = apiInstance;
	}

	getStructure() {
		return this.structureData;
	}

	setStructure(data: StructRootType) {
		this.structureData = data;
		this.structureDataMapByNameAndId = this.buildStructureMapByNameAndId(data);
	}

	findStructureDataMapByName(nameId: string) {
		const strucutre = this.structureDataMapByNameAndId.get(nameId);
		return strucutre;
	}

	/**
	* 以"name+parentId"为key构建结构数据的Map
	* @param root 根节点数据
	* @returns 以"name+parentId"为key的Map
	*/
	private buildStructureMapByNameAndId(root: StructRootType): Map<string, StructRootType> {
		const map = new Map<string, StructRootType>();
		// 栈中存储的是节点及其父节点ID的元组
		const stack: [StructureDataType | StructRootType, string | undefined][] = [];

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
			map.set(key, node as StructRootType);

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

export default new StructureModule();
