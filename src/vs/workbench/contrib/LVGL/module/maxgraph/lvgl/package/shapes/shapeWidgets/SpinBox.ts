import { lv_part_t } from "../../lvglEnums.js";
import { Module } from "../../LvglModule.js";
import { LvglBase, LV_Obj } from "../lvglBase.js"
import { CreateBaseStyle, LV_Text, LV_Transform } from "../lvglStyle.js";

export class LV_SpinBox extends LV_Obj {
	_digitCnt = 4;
	_digitPosition = 0; // 0: left, 1: right

	_step = 2;
	_min = 0;
	_max = 9999;
	incrementPos = 1;
	_value = 0;
	// _step = 1;

	get digitCnt() {
		return this._digitCnt;
	}
	set digitCnt(value: number) {
		this._digitCnt = value;
		Module.lv_spinbox_set_digit_format(this.lvObj, this._digitCnt, this._digitPosition);
	}
	get digitPosition() {
		return this._digitPosition;
	}
	set digitPosition(value: number) {
		this._digitPosition = value;
		Module.lv_spinbox_set_digit_format(this.lvObj, this._digitCnt, this._digitPosition);
	}

	get step() {
		return this._step;
	}
	set step(value: number) {
		this._step = value;
		Module.lv_spinbox_set_step(this.lvObj, value);
	}
	get min() {
		return this._min;
	}
	set min(value: number) {
		this._min = value;
		Module.lv_spinbox_set_range(this.lvObj, value, this._max);
	}
	get max() {
		return this._max;
	}
	set max(value: number) {
		this._max = value;
		Module.lv_spinbox_set_range(this.lvObj, this._min, value);
	}
	get value() {
		return this._value;
	}
	set value(value: number) {
		this._value = value;
		Module.lv_spinbox_set_value(this.lvObj, value);
	}

	constructor(name: string, lvObj: LvObjT) {
		super(name, lvObj);
		this._value = Module.lv_spinbox_get_value(lvObj);
		this._step = Module.lv_spinbox_get_step(lvObj);
		this.digitCnt = 5;
		this.digitPosition = 0;
	}
}

export class LVGL_ShapeSpinBox extends LvglBase {
	override Type = "SpinBox";

	override lvglCreate(parent: LvObjT) {
		this._lvglObj = Module.lv_spinbox_create(parent);
		this._widget = new LV_SpinBox(this.Type, this._lvglObj);
	}

	override createStyle(stateCount: number) {


		// 向 mainStyles 添加属性
		const mainStyles = this._styles.find(style => style[0] === "Main")?.[1];
		if (mainStyles) {
			mainStyles.push(["Text", new LV_Text(this.lvglObj, lv_part_t.LV_PART_MAIN, this.State!, stateCount)]);
			mainStyles.push(["Transform", new LV_Transform(this.lvglObj, lv_part_t.LV_PART_MAIN, this.State!, stateCount)]);
		}

		const secondStyles = CreateBaseStyle.createStyles(lv_part_t.LV_PART_CURSOR, stateCount, this.lvglObj, this.State!);
		this._styles.push(["CURSOR", secondStyles]);
		const secondStylesDel = secondStyles.findIndex(style => style[0] === "Paddings");
		if (secondStylesDel !== -1) {
			secondStyles.splice(secondStylesDel, 1);
		}
		secondStyles.push(["Text", new LV_Text(this.lvglObj, lv_part_t.LV_PART_CURSOR, this.State!, stateCount)]);
	}


}

