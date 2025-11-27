import { lv_part_t } from "./lvglEnums.js";
import type { LV_BaseStyle } from "./shapes/lvglStyle.js";
import type LvLayout from "../elements/lvLayout.js";
import type { LV_Obj } from "./shapes/lvglBase.js";

export type LV_StyleCombine = [string, LV_BaseStyle][];
export type LvStylePart = "Main" | "KNOB" | "INDICATOR" | "SELECTED" | "ITEMS" | "TICKS" |
	"CURSOR" | "CUSTOM_FIRST" | "ANY" | "SCROLLBAR";
export type LVStyleState = Array<[LvStylePart, LV_StyleCombine]>;
export const LvPartMap = new Map<LvStylePart, lv_part_t>([
	["Main", lv_part_t.LV_PART_MAIN],
	["KNOB", lv_part_t.LV_PART_KNOB],
	["INDICATOR", lv_part_t.LV_PART_INDICATOR],
	["SELECTED", lv_part_t.LV_PART_SELECTED],
	["ITEMS", lv_part_t.LV_PART_ITEMS],
	["TICKS", lv_part_t.LV_PART_TICKS],
	["CURSOR", lv_part_t.LV_PART_CURSOR],
	["CUSTOM_FIRST", lv_part_t.LV_PART_CUSTOM_FIRST],
	["ANY", lv_part_t.LV_PART_ANY]
]);

export type VarType = "string" | "number" | "boolean" | "float" | "unsigned";

export type Expression = {
	key: string; // 唯一标识
	condition: string; // 条件表达式
	value: Array<string | number>; // 条件满足时的值
	valueType: string; // 绑定的变量的具体类型，很细致
	result: string | number; //
}


export type PropVariableDes = {
	[key: string]: {
		isDynamic?: boolean, // 是否是动态变量
		type: VarType,
		bindVar?: string,
		expression?: Expression[];
	}
}

export type Props = [
	[
		"Widgets", [
			["Id", Object],
			["Layout", LvLayout],
			["Flags", Object],
			["States", Object],
			[string, Object]?
		]
	],
	["Styles", LVStyleState],
	["Events", any]
];
