import { lv_part_t } from "../../lvglEnums.js";
import { Module } from "../../LvglModule.js";
import { LvglBase, LV_Obj } from "../lvglBase.js"
import { CreateBaseStyle, LV_ARC_Background, LV_Transform } from "../lvglStyle.js";

export class LV_ColorWheel extends LV_Obj {
	_mode: number = 0;
	get mode() {
		return this._mode;
	}
	set mode(value: number) {
		this._mode = value;
		Module.lv_colorwheel_set_mode(this.lvObj, value);
	}
}


export class LVGL_ShapeColorWheel extends LvglBase {
	override Type = "ColorWheel";

	override lvglCreate(parent: LvObjT) {
		this._lvglObj = Module.lv_arc_create(parent);
		this._widget = new LV_ColorWheel(this.Type, this._lvglObj);
	}
	override createStyle(stateCount: number) {


		// 向 mainStyles 添加属性
		const mainStyles = this._styles.find(style => style[0] === "Main")?.[1];
		if (mainStyles) {
			mainStyles.push(["Arc", new LV_ARC_Background(this.lvglObj, lv_part_t.LV_PART_MAIN, this.State!, stateCount)]);
			mainStyles.push(["Transform", new LV_Transform(this.lvglObj, lv_part_t.LV_PART_MAIN, this.State!, stateCount)]);
		}


		const secondStyles = CreateBaseStyle.createStyles(lv_part_t.LV_PART_KNOB, stateCount, this.lvglObj, this.State!);
		this._styles.push(["KNOB", secondStyles]);
	}

}

