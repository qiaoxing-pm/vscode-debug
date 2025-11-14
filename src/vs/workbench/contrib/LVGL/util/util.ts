import {
	type ruleType,
	type configType,
	type TreeNodeType,
	type TreeNode2Type,
	type rawType,
	type optionType,
	type StructAndVarRelationTreeNodeBase,
	type PrimitiveType,
} from "../type/type.js";
import TreeEntry from "../classes/TreeEntry.js";
import api from "../api/index.js";

export const treeNodeIdAndObj = <T extends Record<string, any>>(
	treeData: Array<T>,
	rule: ruleType,
	config: Partial<configType>
): {
	contentMap: Map<string | number, TreeNodeType<T>>;
	contentArray: Array<TreeNodeType<T>>;
} => {
	console.log(treeData)
	let tack: Array<TreeNodeType<T>> = [...treeData].reverse().map((item: T) => {
		let tempExpand = config.autoExpand ?? false;
		if (config.expandedKeys?.includes(item[rule.id])) {
			tempExpand = !tempExpand;
		}
		return {
			treeId: generateUniqueId(),
			treeLabel: item[rule.label],
			parentId: "root",
			expanded: tempExpand,
			level: 0,
			source: item,
		} as TreeNodeType<T>;
	});

	let content: Array<TreeNodeType<T>> = [];

	while (tack.length) {
		let temp = tack.pop()!;
		if (
			Array.isArray(temp.source[rule.children]) &&
			temp.source[rule.children].length !== 0
		) {
			const tempChild: Array<TreeNodeType<T>> = (
				temp.source[rule.children] as T[]
			).map((itemChild: T) => {
				let tempExpand = config.autoExpand ?? false;
				if (config.expandedKeys?.includes(itemChild[rule.id])) {
					tempExpand = !tempExpand;
				}
				return initTreeNode(itemChild, temp, rule, tempExpand);
			});
			tack.push(...tempChild.reverse());
		}
		content.push(temp);
	}

	return {
		contentMap: new Map(content.map((item) => [item.treeId, item])),
		contentArray: content,
	};
};

// 父节点对子节点的映射
export const childAndParentMap = <T>(
	mapState: Map<string | number, TreeNodeType<T>>
): Map<string | number, Array<string | number>> => {
	const tempMap = new Map<string | number, Array<string | number>>();
	for (const element of mapState.values()) {
		const parentId = element.parentId ?? "root";
		if (tempMap.has(parentId)) {
			tempMap.get(parentId)!.push(element.treeId);
		} else {
			tempMap.set(parentId, [element.treeId]);
		}
	}
	return tempMap;
};

export const initTreeNode = <T extends Record<string, any>>(
	currentTreeNode: T,
	parentTreeNode: TreeNodeType<T>,
	rule: ruleType,
	expanded: boolean
): TreeNodeType<T> => {
	return {
		treeId: generateUniqueId(),
		treeLabel: currentTreeNode[rule.label],
		parentId: parentTreeNode.treeId,
		expanded,
		level: parentTreeNode.level + 1,
		source: currentTreeNode,
	};
};

/**
 * 生成随机uuid
 */
export const generateUniqueId = () => {
	return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (c) {
		const r = (Math.random() * 16) | 0;
		const v = c === "x" ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
};

/**
 * 将一个数组插入到另一个数组的指定下标后面
 * @param targetArray 目标数组
 * @param insertArray 要插入的数组
 * @param index 要插入到其后的索引位置
 * @returns 插入后的新数组
 */
export function insertArrayAfterIndex<T, U>(
	targetArray: T[],
	insertArray: T[],
	index: number
): (T | U)[] {
	// 检查目标数组是否有效
	if (!Array.isArray(targetArray)) {
		throw new Error("第一个参数必须是数组");
	}

	// 检查要插入的数组是否有效
	if (!Array.isArray(insertArray)) {
		throw new Error("第二个参数必须是数组");
	}

	// 检查索引是否有效 (-1表示插入到开头)
	if (
		typeof index !== "number" ||
		!Number.isInteger(index) ||
		index < -1 ||
		index >= targetArray.length
	) {
		throw new Error(
			`索引值无效，必须是介于-1和${targetArray.length - 1}之间的整数`
		);
	}

	// 创建原数组的副本，避免修改原数组
	const result = [...targetArray];

	// 使用splice方法在指定索引后插入数组
	result.splice(index + 1, 0, ...insertArray);

	return result;
}

export function deleteElements(A: Array<any>, length: number, index: number) {
	// 检查参数有效性
	if (!Array.isArray(A)) {
		throw new Error("第一个参数必须是数组");
	}

	if (typeof length !== "number" || length < 0 || !Number.isInteger(length)) {
		throw new Error("长度必须是非负整数");
	}

	if (
		typeof index !== "number" ||
		index < -1 ||
		!Number.isInteger(index) ||
		index >= A.length
	) {
		throw new Error("下标超出数组有效范围");
	}

	// 计算实际开始删除的位置（指定下标+1）
	const startIndex = index + 1;

	// 如果开始删除的位置超出数组范围，直接返回原数组副本
	if (startIndex >= A.length) {
		return [...A];
	}

	// 创建数组副本，避免修改原数组
	const newArray = [...A];

	// 从startIndex位置开始删除length个元素
	// 确保不会删除超出数组范围的元素
	const actualLength = Math.min(length, newArray.length - startIndex);
	newArray.splice(startIndex, actualLength);

	return newArray;
}

export const camelToCss = (styleObj: any) => {
	// 用于将驼峰命名转换为短横线命名的辅助函数
	const camelToKebab = (camelCase: any) => {
		return camelCase.replace(
			/[A-Z]/g,
			(match: any) => `-${match.toLowerCase()}`
		);
	};

	// 转换样式对象并拼接成CSS字符串
	return (
		Object.entries(styleObj)
			.map(([key, value]) => `${camelToKebab(key)}:${value}`)
			.join(";") + ";"
	);
};

export const haveSelect = (
	treeNode: TreeNodeType<StructAndVarRelationTreeNodeBase>,
	label: string
) => {
	// if (label === "dataType") {
	const dataType = treeNode.source.dataType;
	const findNode = api.option
		.getOptions(
			api.constant.optionModulePublicOptions.STRUCT_AND_VAR_RELATION_INTEGRATE
		)
		?.find((item) => {
			return item.value === dataType;
		});
	if (findNode) {
		return false;
	}

	if (label === "group") {
		return false;
	}
	return true;
};

export const haveConnect = (
	treeNode: TreeNodeType<StructAndVarRelationTreeNodeBase>,
	label: string
) => {
	if (label === "connection") {
		const dataType = treeNode.source.dataType;
		const findNode = api.option
			.getOptions(
				api.constant.optionModulePublicOptions.STRUCT_AND_VAR_RELATION_INTEGRATE
			)
			?.find((item) => {
				return item.value === dataType;
			});
		if (findNode) {
			return false;
		}
	}

	return true;
};

export const clamp = (min: number, value: number, max: number) => {
	return Math.max(min, Math.min(value, max));
};

export const getGroupOption = (
	treeNode: TreeNodeType<StructAndVarRelationTreeNodeBase>,
	treeFlattener: TreeEntry<StructAndVarRelationTreeNodeBase>,
	rootNodes: Array<StructAndVarRelationTreeNodeBase>
) => {
	switch (treeNode.source.dataType) {
		case api.constant.structAndVarRelations.CONNECT_ITEM:
			{
				const structManagement = treeFlattener.getNodeBySourceId(
					rootNodes[0].id
				);
				if (structManagement) {
					const structGroup = treeFlattener.getChildren(
						structManagement?.treeId
					);
					if (structGroup) {
						let tempOption = [];
						for (const element of structGroup) {
							if (
								element.source.dataType ===
								api.constant.structAndVarRelations.CONNECT_GROUP
							) {
								tempOption.push({
									label: element.source.name,
									value: element.source.id,
								});
							}
						}
						return tempOption;
					}
				}
			}
			break;
	}
	const currentTreeNode = treeFlattener.getNodeBySourceId(treeNode.source.id);
	if (currentTreeNode) {
		const parentTreeNode = treeFlattener.getNodeByTreeId(
			currentTreeNode?.parentId
		);
		if (parentTreeNode) {
			const parentBrothers = treeFlattener.getChildren(
				parentTreeNode?.parentId
			);
			return parentBrothers
				?.filter((item: TreeNodeType<StructAndVarRelationTreeNodeBase>) => {
					return item.source.dataType === parentTreeNode?.source.dataType;
				})
				.map((item) => {
					return {
						label: item.source.name,
						value: item.source.id,
					};
				});
		}
	}
	return [];
};

export const getOptionByDataType = (
	dataType: string,
	treeFlattener: TreeEntry<StructAndVarRelationTreeNodeBase>
) => {
	const nodes = treeFlattener.getFlatNodes();
	return nodes
		.filter((item) => {
			return item.source.dataType === dataType;
		})
		.map((item) => {
			return {
				label: item.source.name,
				value: item.source.id,
			};
		});
};

export const getConnectionOption = (
	treeNode: TreeNodeType<StructAndVarRelationTreeNodeBase>,
	treeFlattener: TreeEntry<StructAndVarRelationTreeNodeBase>,
	rootNodes: Array<StructAndVarRelationTreeNodeBase>
) => {
	const rootNode = treeFlattener.getNodeBySourceId(rootNodes[0].id);

	if (rootNode) {
		const parentAll = treeFlattener.getChildren(rootNode?.treeId);

		if (parentAll) {
			const connectGroups = parentAll?.filter(
				(item: TreeNodeType<StructAndVarRelationTreeNodeBase>) => {
					return (
						item.source.dataType ===
						api.constant.structAndVarRelations.MODBUS_TCPIP
					);
				}
			);

			const cascaderData = getConnectionOptionCascader(
				connectGroups.map((item: any) => item.source),
				treeFlattener
			);

			return cascaderData.filter((item) => item.children);
		}
	}
};

export const getConnectionOptionCascader = (
	tempTreeNodes: Array<StructAndVarRelationTreeNodeBase>,
	treeFlattener: TreeEntry<StructAndVarRelationTreeNodeBase>
) => {
	let result = [];

	for (let i = 0; i < tempTreeNodes.length; i++) {
		const element: StructAndVarRelationTreeNodeBase = tempTreeNodes[i];

		let current: optionType = {
			label: element.name,
			value: element.id,
		};

		const treeNode = treeFlattener.getNodeBySourceId(element.id);

		if (treeNode) {
			const children = treeFlattener.getChildren(treeNode?.treeId);

			if (children && children.length > 0) {
				current.children = getConnectionOptionCascader(
					children.map((item) => item.source),
					treeFlattener
				);
			}

			result.push(current);
		}
	}

	return result;
};

export const getHexCodesFrom0To127 = () => {
	const hexCodes = [];
	// 循环从0到127的所有整数
	for (let i = 0; i <= 127; i++) {
		// 将十进制转换为十六进制，toUpperCase()确保字母为大写
		// padStart(2, '0')确保结果始终是两位，不足的前面补0
		const hex = i.toString(16).padStart(2, "0").toUpperCase();
		// 添加0x前缀，符合16进制表示规范
		hexCodes.push(`0x${hex}`);
	}
	return hexCodes.map((item) => {
		return {
			label: item,
			value: item,
		};
	});
};

export const getOppositeInteger = (num: number) => {
	if (num > 0) {
		return Math.ceil(num);
	} else if (num < 0) {
		return Math.floor(num);
	} else {
		return 0;
	}
};

/**
 * 检测变量名是否符合C语言命名规则
 * @param name 待检测的变量名
 * @returns 检测结果对象，包含是否合法及错误信息
 */
export const validateCVariableName = (
	name: string
): { valid: boolean; message: string } => {
	// C语言关键字列表
	const cKeywords = [
		"auto",
		"break",
		"case",
		"char",
		"const",
		"continue",
		"default",
		"do",
		"double",
		"else",
		"enum",
		"extern",
		"float",
		"for",
		"goto",
		"if",
		"int",
		"long",
		"register",
		"return",
		"short",
		"signed",
		"sizeof",
		"static",
		"struct",
		"switch",
		"typedef",
		"union",
		"unsigned",
		"void",
		"volatile",
		"while",
		// C99新增关键字
		"_Bool",
		"_Complex",
		"_Imaginary",
		// C11新增关键字
		"alignas",
		"alignof",
		"atomic_bool",
		"atomic_char",
		"atomic_schar",
		"atomic_uchar",
		"atomic_short",
		"atomic_ushort",
		"atomic_int",
		"atomic_uint",
		"atomic_long",
		"atomic_ulong",
		"atomic_llong",
		"atomic_ullong",
		"atomic_wchar_t",
		"atomic_int_least8_t",
		"atomic_uint_least8_t",
		"atomic_int_least16_t",
		"atomic_uint_least16_t",
		"atomic_int_least32_t",
		"atomic_uint_least32_t",
		"atomic_int_least64_t",
		"atomic_uint_least64_t",
		"atomic_int_fast8_t",
		"atomic_uint_fast8_t",
		"atomic_int_fast16_t",
		"atomic_uint_fast16_t",
		"atomic_int_fast32_t",
		"atomic_uint_fast32_t",
		"atomic_int_fast64_t",
		"atomic_uint_fast64_t",
		"atomic_intmax_t",
		"atomic_uintmax_t",
		"atomic_ptrdiff_t",
		"atomic_size_t",
		"bool",
		"complex",
		"imaginary",
		"noreturn",
		"static_assert",
		"thread_local",
	];

	// 检查是否为空
	if (!name || name.trim() === "") {
		return { valid: false, message: "The input value cannot be empty." };
	}

	// 检查是否为关键字
	if (cKeywords.includes(name)) {
		return {
			valid: false,
			message: `The input value "${name}" is a C language keyword.`,
		};
	}

	// 检查首字符是否合法（必须是字母或下划线）
	if (!/^[a-zA-Z_]/.test(name)) {
		return {
			valid: false,
			message: `The input value "${name}" must start with a letter or an underscore.`,
		};
	}

	// 检查所有字符是否合法（只能包含字母、数字和下划线）
	if (!/^[a-zA-Z0-9_]*$/.test(name)) {
		return {
			valid: false,
			message: `The input value "${name}" contains invalid characters. It can only contain letters, numbers, and underscores.`,
		};
	}

	// 检查长度（C标准建议至少支持31个字符）
	if (name.length > 31) {
		return {
			valid: false,
			message: `The input value "${name}" is too long; it is recommended to be no more than 31 characters.`,
		};
	}

	// 所有检查通过
	return {
		valid: true,
		message: `The variable name "${name}" is a valid C language variable name.`,
	};
};











export const parseInt2 = (a: number, p = 0) => {
	return Number(a.toFixed(p));
};
export const deepClone = <T>(data: T): T => {
	// 用于存储已拷贝的对象，解决循环引用问题
	const visited = new Map();

	// 创建一个处理函数，使用循环代替递归
	const clone = (source: any): any => {
		// 非对象类型直接返回
		if (typeof source !== "object" || source === null) {
			return source;
		}

		// 如果已经拷贝过，直接返回缓存的结果（处理循环引用）
		if (visited.has(source)) {
			return visited.get(source);
		}

		let result: any;

		// 处理数组
		if (source instanceof Array) {
			result = [];
			visited.set(source, result); // 先缓存空数组，处理循环引用

			// 使用循环遍历数组元素
			for (let i = 0; i < source.length; i++) {
				result.push(clone(source[i]));
			}
		}
		// 处理对象
		else {
			result = {};
			visited.set(source, result); // 先缓存空对象，处理循环引用

			// 使用循环遍历对象属性
			const keys = Object.keys(source);
			for (let i = 0; i < keys.length; i++) {
				const key = keys[i];
				result[key] = clone(source[key]);
			}
		}

		return result;
	};

	return clone(data) as T;
};
