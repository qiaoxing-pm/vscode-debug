import { lv_arc_mode_t, lv_part_t } from "../../lvglEnums.js";
import { Module } from "../../LvglModule.js";
import { LvglBase, LV_Obj } from "../lvglBase.js"
import { CreateBaseStyle, LV_Text, LV_Transform } from "../lvglStyle.js";

export class LV_KeyBoard extends LV_Obj {
	_mode: lv_arc_mode_t = lv_arc_mode_t.LV_ARC_MODE_NORMAL; // 默认模式
	_textArea: LV_Obj | undefined;
	_map: string[] = []; // 键盘映射
	_ctrls: number[] = []; // 控件状态
}


export class LVGL_ShapeKeyBoard extends LvglBase {
	override Type = "KeyBoard";

	override lvglCreate(parent: LvObjT) {
		this._lvglObj = Module.lv_keyboard_create(parent);
		this._widget = new LV_KeyBoard(this.Type, this._lvglObj);
	}


	override createStyle(stateCount: number) {
		// 向 mainStyles 添加属性
		const mainStyles = this._styles.find(style => style[0] === "Main")?.[1];
		if (mainStyles) {
			mainStyles.push(["Transform", new LV_Transform(this.lvglObj, lv_part_t.LV_PART_MAIN, this.State!, stateCount)]);
		}
		const secondStyles = CreateBaseStyle.createStyles(lv_part_t.LV_PART_ITEMS, stateCount, this.lvglObj, this.State!);
		this._styles.push(["ITEMS", secondStyles]);
		secondStyles.push(["Text", new LV_Text(this.lvglObj, lv_part_t.LV_PART_ITEMS, this.State!, stateCount)]);
	}

}

