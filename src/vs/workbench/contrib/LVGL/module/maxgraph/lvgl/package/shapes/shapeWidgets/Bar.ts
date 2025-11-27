
import { Module } from "../../LvglModule.js";
import { LvglBase, LV_Obj } from "../lvglBase.js"
import { CreateBaseStyle, LV_Transform } from "../lvglStyle.js";
import { lv_anim_enable_t, lv_bar_mode_t, lv_part_t } from "../../lvglEnums.js";

export class LV_Bar extends LV_Obj {
	_min = 0;
	_max = 100;
	_value = 25;
	_mode: lv_bar_mode_t = lv_bar_mode_t.LV_BAR_MODE_NORMAL;
	_startValue = 0;

	get min() {
		return this._min;
	}
	set min(value: number) {
		this._min = value;
		Module.lv_bar_set_range(this.lvObj, this._min, this._max);
	}

	get max() {
		return this._max;
	}
	set max(value: number) {
		this._max = value;
		Module.lv_bar_set_range(this.lvObj, this._min, this._max);
	}

	get value() {
		return this._value;
	}
	set value(value: number) {
		this._value = value;
		Module.lv_bar_set_value(this.lvObj, this._value, lv_anim_enable_t.LV_ANIM_ON);
	}

	get mode() {
		return this._mode;
	}

	set mode(value: lv_bar_mode_t) {
		this._mode = value;
		Module.lv_bar_set_mode(this.lvObj, this._mode);
	}

	get startValue() {
		return this._startValue;
	}
	set startValue(value: number) {
		this._startValue = value;
		Module.lv_bar_set_start_value(this.lvObj, this._startValue, true);
	}
	constructor(name: string, lvObj: LvObjT) {
		super(name, lvObj);
		this._min = Module.lv_bar_get_min_value(lvObj);
		this._max = Module.lv_bar_get_max_value(lvObj);
		this._value = Module.lv_bar_get_value(lvObj);
		this._mode = Module.lv_bar_get_mode(lvObj);
		this._startValue = Module.lv_bar_get_start_value(lvObj);

	}

}

export class LVGL_ShapeBar extends LvglBase {
	override Type = "Bar";

	override lvglCreate(parent: LvObjT) {
		this._lvglObj = Module.lv_bar_create(parent);
		this._widget = new LV_Bar("Bar", this._lvglObj);
	}

	override  createStyle(stateCount: number) {
		// 向 mainStyles 添加属性
		const mainStyles = this._styles.find(style => style[0] === "Main")?.[1];
		if (mainStyles) {
			// mainStyles.push(["Animation", new LV_Background(stylePart, this.state!, stateCount)]);
			mainStyles.push(["Transform", new LV_Transform(this.lvglObj, lv_part_t.LV_PART_MAIN, this.State!)]);
		}

		const secondStyles = CreateBaseStyle.createStyles(lv_part_t.LV_PART_INDICATOR, stateCount, this.lvglObj, this.State!);
		this._styles.push(["INDICATOR", secondStyles]);
		const secondStylesDel = secondStyles.findIndex(style => style[0] === "Paddings");
		if (secondStylesDel !== -1) {
			secondStyles.splice(secondStylesDel, 1);
		}
	}

	override setValue(value: any): void {
		const v = parseInt(value);
		if (!isNaN(v)) {
			(this._widget as LV_Bar).value = v;
		}
	}

}
