import LvglCell, { LV_Obj } from "../lvglCell.js";
import { Module } from "../../package/LvglModule.js";
import { CreateBaseStyle, LV_Transform, LV_ARC_Background } from "../../package/shapes/lvglStyle.js";
import { lv_arc_mode_t, lv_part_t } from "../../package/lvglEnums.js";

export class LV_ARC extends LV_Obj {
	// _bg_angle = [0, 100]
	_rotation = 0
	_bgAngleStart = 0;
	_bgAngleEnd = 0;
	_angleStart = 0;
	_angleEnd = 360;
	_minValue = 0;
	_maxValue = 100;
	_mode = lv_arc_mode_t.LV_ARC_MODE_NORMAL;

	constructor(name: string, lvobj: LvObjT) {
		super("ARC", lvobj);
		this._value = Module.lv_arc_get_value(this.lvObj);
		this.value = 50;
		this._minValue = Module.lv_arc_get_min_value(this.lvObj);
		this._maxValue = Module.lv_arc_get_max_value(this.lvObj);
		this._rotation = Module.lv_arc_get_rotation(this.lvObj);
		this._mode = Module.lv_arc_get_mode(this.lvObj);
		this._angleStart = Module.lv_arc_get_angle_start(this.lvObj);
		this._angleEnd = Module.lv_arc_get_angle_start(this.lvObj);
		this._bgAngleStart = Module.lv_arc_get_bg_angle_start(this.lvObj);
		this._bgAngleEnd = Module.lv_arc_get_bg_angle_end(this.lvObj);
	}

	get minValue() {
		return this._minValue;
	}
	set minValue(min: number) {
		this._minValue = min;
		Module.lv_arc_set_range(this.lvObj, this._minValue, this._maxValue);
	}
	get maxValue() {
		return this._maxValue;
	}
	set maxValue(max: number) {
		this._maxValue = max;
		Module.lv_arc_set_range(this.lvObj, this._minValue, this._maxValue);
	}

	_value = 50;
	get value() {
		return this._value;
	}
	set value(v: number) {
		if (v < this._minValue) v = this._minValue;
		if (v > this._maxValue) v = this._maxValue;
		this._value = v;
		Module.lv_arc_set_value(this.lvObj, v);
	}
	get bgAngleStart() {
		return this._bgAngleStart;
	}
	set bgAngleStart(angle: number) {
		this._bgAngleStart = angle
		Module.lv_arc_set_bg_start_angle(this.lvObj, angle);
	}
	get bgAngleEnd() {
		return this._bgAngleEnd;
	}
	set bgAngleEnd(angle: number) {
		this._bgAngleEnd = angle
		Module.lv_arc_set_bg_end_angle(this.lvObj, angle);
	}

	get mode() {
		// return 0
		return Module.lv_arc_get_mode(this.lvObj);
	}
	set mode(mode: lv_arc_mode_t) {
		Module.lv_arc_set_mode(this.lvObj, mode);
	}

	get rotation() {
		return this._rotation;
	}
	set rotation(rotation: number) {
		this._rotation = rotation
		Module.lv_arc_set_rotation(this.lvObj, rotation);
	}

}
class LvArc extends LvglCell {
	override Type = "ARC";

	override lvglCreate(parent: LvObjT) {
		this._lvglObj = Module.lv_arc_create(parent);
		this._widget = new LV_ARC("Arc", this._lvglObj);
	}


	override createStyle(stateCount: number) {
		// 向 mainStyles 添加属性
		const mainStyles = this._styles.find(style => style[0] === "Main")?.[1];
		if (mainStyles) {
			mainStyles.push(["Arc", new LV_ARC_Background(this.lvglObj, lv_part_t.LV_PART_MAIN, this.State!, stateCount)]);
			mainStyles.push(["Transform", new LV_Transform(this.lvglObj, lv_part_t.LV_PART_MAIN, this.State!, stateCount)]);
		}
		const secondStyles = CreateBaseStyle.createStyles(lv_part_t.LV_PART_INDICATOR, stateCount, this.lvglObj, this.State!);
		secondStyles.push(["Arc", new LV_ARC_Background(this.lvglObj, lv_part_t.LV_PART_INDICATOR, this.State!, stateCount)]);
		this._styles.push(["INDICATOR", secondStyles]);

		const thirdStyles = CreateBaseStyle.createStyles(lv_part_t.LV_PART_KNOB, stateCount, this.lvglObj, this.State!);
		this._styles.push(["KNOB", thirdStyles]);
	}

	setValue(value: any): void {
		const v = parseInt(value);
		if (!isNaN(v)) {
			(this._widget as LV_ARC).value = v;
		}
	}
}
