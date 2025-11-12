export interface ruleType {
	id: string;
	label: string;
	type: string;
	children: string;
	optionType: string;
	active: string;
	iconType: string;
}

// 树节点结构
// export interface TreeNodeType<T> {
//   treeId: string;
//   treeLabel: string;
//   expanded: boolean;
//   parentId: string | number;
//   level: number;
//   source: T;
//   children?: TreeNodeType<T>[]; // 在 buildTree 之后才会赋值
//   shouldRename?: boolean;
// }

// 树配置
export interface configType {
	autoExpand: boolean;
	expandedKeys: Array<string | number>;
}

// 约束 T 的属性可以转成 string
type StringProperty<T> = {
	[K in keyof T]: T[K] extends string ? T[K] : never;
};

/**
 * 数据原始类型
 */
export interface rawType {
	id: string;
	name: string;
	widgetType?: string;
	children?: rawType[];
	treeType?: string;
	selected: boolean;

	[key: string]: any;
}
// 树节点结构
export interface TreeNodeType<T> {
	treeId: string;
	treeLabel: string;
	expanded: boolean;
	parentId: string | number;
	level: number;
	source: T;
	children?: TreeNodeType<T>[]; // 在 buildTree 之后才会赋值
	shouldRename?: boolean;
}

/**
 * 封装后，用于树空间节点的类型，
 * 它会携带原始类型的数据
 */
export interface TreeNode2Type {
	id: string;
	name: string;
	widgetType?: string;
	children?: rawType[];
	selected: boolean;

	// id
	treeId: string;
	treeLabel: string;
	treeType: string;
	treeDragAction: boolean;
	parentId: string;
	expanded: boolean;
	level: number;

	treeIconType?: string;
	treeChildIconType?: string;
	treeChildren?: Array<TreeNode2Type>;
	deletionProhibited?: boolean;
	[key: string]: any;
}

/**
 * 右键菜单栏类型
 */
export interface menuItemType {
	label: string;
	key: string;
	action?: Function;
	permission?: string;
	children?: menuItemType[];
}

export interface treeSimpleType {
	treeId: string;
	treeType: string;
}

export interface treeDataType {
	[key: string]: treeDataType[] | any;
}

export interface ruleType {
	id: string;
	label: string;
	type: string;
	children: string;
	optionType: string;
	active: string;
	iconType: string;
}

export interface propsType {
	treeData: treeDataType;
	treeNodeRule: Partial<ruleType>;
	onSelectMenuBar: Function;
	expandedKeys: Array<string>;
	autoExpandParent: boolean;
}

export interface StructAndVarRelationTreeNodeBase {
	id: string;
	name: string;
	comment: string;
	dataType: string;
	length: string;
	formatAdjustment: string;
	connection: string;
	group: string;
	address: string;
	linearCalibration: string;
	asRangeFrom: string;
	asRangeTo: string;
	osRangeFrom: string;
	osRangeTo: string;
	lowerLimit: string;
	upperLimit: string;
	iconType?: string;
	domNode?: HTMLElement;
	parent: StructAndVarRelationTreeNodeBase | null;
	type: "folder" | "file" | "tsx"; // 限制类型为文件夹或文件
	connectionParameters: string;
	children?: StructAndVarRelationTreeNodeBase[]; // 子节点（仅文件夹有）
	agreementId?: string;
	agreement?: Object;
}

export type EditableTypeOptionLabel =
	| "=="
	| "!="
	| "<"
	| "<="
	| ">"
	| ">="
	| "Between"
	| "Is True"
	| "Is False"
	| "Is Empty"
	| "Is Not Empty";
export type EditableTypeOptionValue =
	| "eq"
	| "neq"
	| "lt"
	| "lte"
	| "gt"
	| "gte"
	| "btwn"
	| "true"
	| "false"
	| "empty"
	| "nempty";
/**
 * 可编辑选项类型接口
 *
 * 用于描述具有特定可编辑操作类型的选项，通常用于筛选、条件判断等场景
 * 其中label和value字段限定为预定义的可编辑操作类型值
 *
 * @interface editableOptionType
 * @property {editableTypeOptionValue} label - 选项显示文本，与操作类型对应
 * @property {editableTypeOptionValue} value - 选项实际值，与操作类型对应
 * @property {any} [key: string] - 允许添加任意额外属性，增强灵活性
 */
export interface editableOptionType {
	label: EditableTypeOptionLabel;
	value: EditableTypeOptionValue;
	[key: string]: any;
}

/**
 * 通用选项类型接口
 *
 * 用于描述一般意义上的键值对选项，适用于下拉菜单、单选框组等通用场景
 * label和value均为字符串类型，可根据业务需求自由定义
 *
 * @interface optionType
 * @property {string} label - 选项的显示文本，用于UI展示
 * @property {string} value - 选项的实际值，用于逻辑判断和数据处理
 * @property {any} [key: string] - 允许添加任意额外属性，如禁用状态(disabled)、图标(icon)等
 */
export interface optionType {
	label: string | number | Function;
	value: string | number | Function;
	[key: string]: any;
}

type MapKeyType =
	| "string"
	| "number"
	| "bigint"
	| "boolean"
	| "symbol"
	| "undefined"
	| "object"
	| "function";
type ValueType = MapKeyType;

export interface StructAndVarRelationTreeNodeBase {
	id: string;
	name: string;
	comment: string;
	dataType: string;
	length: string;
	formatAdjustment: string;
	connection: string;
	group: string;
	address: string;
	linearCalibration: string;
	asRangeFrom: string;
	asRangeTo: string;
	osRangeFrom: string;
	osRangeTo: string;
	lowerLimit: string;
	upperLimit: string;
	iconType?: string;
	type: "folder" | "file" | "tsx"; // 限制类型为文件夹或文件
	connectionParameters: string;
	children?: StructAndVarRelationTreeNodeBase[]; // 子节点（仅文件夹有）
	agreementId?: string;
	agreement?: Object;
	[key: string]: any;
}

export interface headType {
	label: string;
	value: string;
	width?: number;
	type?: string;
	option?: Array<TypeOption>;
}

// 定义类型选项接口（如字符串、数字等基础类型）
export type PrimitiveType =
	| "char"
	| "string"
	| "short"
	| "int"
	| "long long"
	| "float"
	| "double"
	| "unsigned char"
	| "unsigned short"
	| "unsigned int"
	| "unsigned long long"
	| "long double"
	| "bool";
export type PrimitiveValueType = MapKeyType;

export interface TypeOption {
	label: string; // 显示名称
	key: MapKeyType | PrimitiveType; // 唯一标识
	value: string; // 对应的值
	color: string; // 显示颜色
	varType: ContainerType; // 容器类型（单个、数组等）
}

// 定义容器类型接口（单个、数组、集合等）
export interface ContainerTypeOption {
	varType: ContainerType; // 容器类型标识
	value: string;
	label: string; // 显示名称
}

// 容器类型枚举
export type ContainerType =
	| "Single"
	| "Array"
	| "Set"
	| "Map"
	| "Struct"
	| "Union"
	| "Pointer"
	| "Enum";

export type VariableDes = {
	id: string;
	name: string;
	valueType: ValueType;
	keyType: MapKeyType;
	containerType: ContainerType;
	description?: string;
};

export type StructDes = {
	id: string;
	name: string;
	children?: VariableDes[];
	description?: string;
};

export interface VariableDataType {
	id: string;
	name: string;
	valueType?: PrimitiveType;
	keyType?: PrimitiveType;
	varType?: ContainerType;
	description?: string;
	selected: boolean;
	deletionProhibited: boolean;
	children: Omit<VariableDataType, "children">[];
}

// export interface VariableDataType {
//   id: string;
//   name: string;
//   valueType?: PrimitiveValueType;
//   keyType?: PrimitiveType;
//   varType?: ContainerType;
//   description?: string;
//   selected: boolean;
//   deletionProhibited: boolean;
//   children: Omit<VariableDataType, "children">[];
// }
