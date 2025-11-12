import { type optionType } from "../../../type/type.js";


/**
 * 编辑控件的类型选择选项数组
 *
 * 包含一系列比较操作符和状态判断选项，用于编辑控件中的类型选择下拉列表
 * 每个选项均符合editableOptionType接口规范
 * @type {Array<optionType>}
 */
const optionLength: Array<optionType> = [
	{
		label: 1,
		value: 1,
	},
	{
		label: 2,
		value: 2,
	},
	{
		label: 8,
		value: 8,
	},
	{
		label: 16,
		value: 16,
	},
	{
		label: 32,
		value: 32,
	},
	{
		label: 64,
		value: 64,
	},
	{
		label: 128,
		value: 128,
	},
	{
		label: 255,
		value: 255,
	},
];


export {
	optionLength,
}
