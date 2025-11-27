import { Module } from "../../LvglModule.js";
import { LvglBase, LV_Obj } from "../lvglBase.js"
import { CreateBaseStyle } from "../lvglStyle.js";
import { lv_part_t, lv_scale_mode_t } from "../../lvglEnums.js";

export class LV_Scale extends LV_Obj {
	_mode = lv_scale_mode_t.LV_SCALE_MODE_ROUND_INNER;
	_totalTickCnt = 0;
	_majorTickEvery = 0;
	_angleRange = 270; // Default angle range
	_min = 0;
	_max = 100;
	_rotation = 0;
	_labelShow = true;
	_lineNeedleValue = 0;
	_imageNeedleValue = 0;
	get mode() {
		return this._mode;
	}
	set mode(value: lv_scale_mode_t) {
		this._mode = value;
		Module.lv_scale_set_mode(this.lvObj, value);
	}
	get totalTickCnt() {
		return this._totalTickCnt;
	}
	set totalTickCnt(value: number) {
		this._totalTickCnt = value;
		Module.lv_scale_set_total_tick_count(this.lvObj, value);
	}
	get majorTickEvery() {
		return this._majorTickEvery;
	}
	set majorTickEvery(value: number) {
		this._majorTickEvery = value;
		Module.lv_scale_set_major_tick_every(this.lvObj, value);
	}
	get angleRange() {
		return this._angleRange;
	}
	set angleRange(value: number) {
		this._angleRange = value;
		Module.lv_scale_set_angle_range(this.lvObj, value);
	}
	get min() {
		return this._min;
	}
	set min(value: number) {
		this._min = value;
		Module.lv_scale_set_range(this.lvObj, value, this._max);
	}
	get max() {
		return this._max;
	}
	set max(value: number) {
		this._max = value;
		Module.lv_scale_set_range(this.lvObj, this._min, value);
	}
	get rotation() {
		return this._rotation;
	}
	set rotation(value: number) {
		this._rotation = value;
		Module.lv_scale_set_rotation(this.lvObj, value);
	}
	get labelShow() {
		return this._labelShow;
	}
	set labelShow(value: boolean) {
		this._labelShow = value;
		Module.lv_scale_set_label_show(this.lvObj, value);
	}
	get lineNeedleValue() {
		return this._lineNeedleValue;
	}
	set lineNeedleValue(value: number) {
		this._lineNeedleValue = value;
		Module.lv_scale_set_line_needle_value(this.lvObj, value);
	}
	get imageNeedleValue() {
		return this._imageNeedleValue;
	}
	set imageNeedleValue(value: number) {
		this._imageNeedleValue = value;
		Module.lv_scale_set_image_needle_value(this.lvObj, value);
	}
	get needleValue() {
		return this._lineNeedleValue;
	}
	set needleValue(value: number) {
		this._lineNeedleValue = value;
		Module.lv_scale_set_line_needle_value(this.lvObj, value);
	}

	constructor(name: string, lvObj: LvObjT) {
		super(name, lvObj);
		Module.lv_scale_set_mode(this.lvObj, lv_scale_mode_t.LV_SCALE_MODE_ROUND_INNER);
		this._totalTickCnt = Module.lv_scale_get_total_tick_count(lvObj);
		this._majorTickEvery = Module.lv_scale_get_major_tick_every(lvObj);
		this._min = Module.lv_scale_get_range_min_value(lvObj);
		this._max = Module.lv_scale_get_range_max_value(lvObj);
		this.rotation = 135;
		this._labelShow = Module.lv_scale_get_label_show(lvObj);
		this.totalTickCnt = 100;
		this.majorTickEvery = 10;
		Module.lv_scale_set_angle_range(this.lvObj, 270);
		// this._lineNeedleValue = Module.lv_scale_get_line_needle_value(lvObj);
		// this._imageNeedleValue = Module.lv_scale_get_image_needle_value(lvObj);

	}
}

export class LVGL_ShapeScale extends LvglBase {
	override Type = "Scale";

	override lvglCreate(parent: LvObjT): void {
		this._lvglObj = Module.lv_scale_create(parent);
		this._widget = new LV_Scale("Scale", this._lvglObj);
	}

	override createStyle(stateCnt: number): void {

		const itemsStyle = CreateBaseStyle.createStyles(lv_part_t.LV_PART_ITEMS, stateCnt, this.lvglObj, this.State!);
		this._styles.push(["ITEMS", itemsStyle]);
		const indicatorStyle = CreateBaseStyle.createStyles(lv_part_t.LV_PART_INDICATOR, stateCnt, this.lvglObj, this.State!);
		this._styles.push(["INDICATOR", indicatorStyle]);
	}
}
