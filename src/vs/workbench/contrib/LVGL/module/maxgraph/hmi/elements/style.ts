import { Module } from "../../lvgl/package/LvglModule.js";

export function getButtonStyleT(type: string, obj: LvObjT): LvButtonStyleT {
	let style: LvButtonStyleT;
	switch (type) {
		case "BitButton":
			style = Module.lv_bitbutton_get_style(obj);
			break;
		case "WordButton":
			style = Module.lv_wordbutton_get_style(obj);
			break;
		case "FunctionButton":
		case "FuncButton":
			style = Module.lv_funcbutton_get_style(obj);
			break;
		case "ScreenButton":
			style = Module.lv_screenbutton_get_style(obj);
			break;
		case "MultiButton":
			style = Module.lv_multibutton_get_style(obj);
			break;
		case "MultiFuncButton":
			style = Module.lv_multifuncbutton_get_style(obj);
			break;
		default: // LEDButton
			style = Module.lv_ledbutton_get_style(obj);
			break;
	}
	return style;
}
