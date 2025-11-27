import { lv_anim_enable_t, lv_part_t, lv_slider_mode_t } from "../../lvglEnums.js";
import { Module } from "../../LvglModule.js";
import { LvglBase, LV_Obj } from "../lvglBase.js"
import { CreateBaseStyle, LV_Transform } from "../lvglStyle.js";

export class LV_Slider extends LV_Obj {
	_min = 0;
	_max = 100;
	_mode: lv_slider_mode_t = lv_slider_mode_t.LV_SLIDER_MODE_NORMAL;
	_value = 0;
	_valueLeft = 0;
	get value() {
		return this._value;
	}
	set value(value: number) {
		this._value = value;
		Module.lv_slider_set_value(this.lvObj, value, lv_anim_enable_t.LV_ANIM_ON);
	}

	get min() {
		return this._min;
	}
	set min(value: number) {
		this._min = value;
		Module.lv_slider_set_range(this.lvObj, value, this._max);
	}
	get max() {
		return this._max;
	}
	set max(value: number) {
		this._max = value;
		Module.lv_slider_set_range(this.lvObj, this._min, value);
	}
	get mode() {
		return this._mode;
	}
	set mode(value: lv_slider_mode_t) {
		this._mode = value;
		Module.lv_slider_set_mode(this.lvObj, value);
	}
	get valueLeft() {
		return this._valueLeft;
	}
	set valueLeft(value: number) {
		this._valueLeft = value;
		Module.lv_slider_set_left_value(this.lvObj, value, lv_anim_enable_t.LV_ANIM_ON);
	}
	constructor(name: string, lvObj: LvObjT) {
		super(name, lvObj);
		this._value = Module.lv_slider_get_value(lvObj);
		this._min = Module.lv_slider_get_min_value(lvObj);
		this._max = Module.lv_slider_get_max_value(lvObj);
		this._mode = Module.lv_slider_get_mode(lvObj);
		this._valueLeft = Module.lv_slider_get_left_value(lvObj);
	}
}


export class LVGL_ShapeSlider extends LvglBase {
	override Type = "Slider";

	override lvglCreate(parent: LvObjT) {
		this._lvglObj = Module.lv_slider_create(parent);
		this._widget = new LV_Slider(this.Type, this._lvglObj);
	}

	override createStyle(stateCount: number) {
		// 向 mainStyles 添加属性
		const mainStyles = this._styles.find(style => style[0] === "Main")?.[1];
		if (mainStyles) {
			mainStyles.push(["Transform", new LV_Transform(this.lvglObj, lv_part_t.LV_PART_MAIN, this.State!, stateCount)]);
		}
		const secondStyles = CreateBaseStyle.createStyles(lv_part_t.LV_PART_INDICATOR, stateCount, this.lvglObj, this.State!);
		this._styles.push(["INDICATOR", secondStyles]);
		const secondStylesDel = secondStyles.findIndex(style => style[0] === "Paddings");
		if (secondStylesDel !== -1) {
			secondStyles.splice(secondStylesDel, 1);
		}

		const thirdStyles = CreateBaseStyle.createStyles(lv_part_t.LV_PART_KNOB, stateCount, this.lvglObj, this.State!);
		this._styles.push(["KNOB", thirdStyles]);
	}

}

