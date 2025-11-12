import { type editableOptionType } from "../../../type/type.js";


/**
 * 编辑控件的类型选择选项数组
 *
 * 包含一系列比较操作符和状态判断选项，用于编辑控件中的类型选择下拉列表
 * 每个选项均符合editableOptionType接口规范
 * @type {Array<editableOptionType>}
 */


const editableTypeOption: Array<editableOptionType> = [
	{
		label: "==", // == 等于：判断两个值是否相等
		value: "eq",
	},
	{
		label: "!=", // != 不等于：判断两个值是否不相等
		value: "neq",
	},
	{
		label: "<", // < 小于：判断左侧值是否小于右侧值
		value: "lt",
	},
	{
		label: "<=", // <= 小于等于：判断左侧值是否小于或等于右侧值
		value: "lte",
	},
	{
		label: ">", // > 大于：判断左侧值是否大于右侧值
		value: "gt",
	},
	{
		label: ">=", // >= 大于等于：判断左侧值是否大于或等于右侧值
		value: "gte",
	},
	{
		label: "Between", // 在...之间：判断值是否在指定的两个值之间（包含边界）
		value: "btwn",
	},
	{
		label: "Is True", // 为真：判断值是否为true
		value: "true",
	},
	{
		label: "Is False", // 为假：判断值是否为false
		value: "false",
	},
	{
		label: "Is Empty", // 为空：判断值是否为空（null/undefined/空字符串等）
		value: "empty",
	},
	{
		label: "Is Not Empty", // 非空：判断值是否不为空
		value: "nempty",
	},
];


export {
	editableTypeOption,
}
