import type { Geometry } from "../../packages/core/src/index.js";
import { BaseProperty } from "./PureData.js";
import HMiBase from "./HMiBase.js";
import { ButtonDisplay } from "./Button.js";
import { Module } from "../../lvgl/package/LvglModule.js";
import { lv_wordbutton_action_t, data_type_t, addr_type_t } from "../static/enums.js";

export class WordButtonProperty extends BaseProperty {

	override _dataType: data_type_t = data_type_t.DATA_TYPE_INT16;
	_operationAction: lv_wordbutton_action_t = lv_wordbutton_action_t.LV_WORD_BUTTON_SET_VALUE;
	_min: number;
	_max: number;
	_value: number;
	_totalDigits: number;
	_decimalDigits: number;
	_press = true;
	constructor(lvObj: LvObjT) {
		super(lvObj);
		this._addr = Module.lv_wordbutton_get_addr(this.lvObj);
		this._addrType = Module.lv_wordbutton_get_addr_type(this.lvObj);
		this._dataType = Module.lv_wordbutton_get_data_type(this.lvObj);
		this._operationAction = Module.lv_wordbutton_get_operate_action(this.lvObj);
		this._min = Module.lv_wordbutton_get_min_value(this.lvObj);
		this._max = Module.lv_wordbutton_get_max_value(this.lvObj);
		this._totalDigits = Module.lv_wordbutton_get_total_digits(this.lvObj);
		this._decimalDigits = Module.lv_wordbutton_get_decimal_digits(this.lvObj);
		this._press = Module.lv_wordbutton_get_press(this.lvObj);
		this._value = Module.lv_wordbutton_get_value(this.lvObj);
	}

	get value(): number {
		return this._value;
	}
	set value(val: number) {
		this._value = val;
		Module.lv_wordbutton_set_value(this.lvObj, val);
	}

	get press(): boolean {
		return this._press;
	}
	set press(val: boolean) {
		this._press = val;
		Module.lv_wordbutton_set_press(this.lvObj, val);
	}

	get addr(): number {
		return this._addr;
	}
	set addr(val: number) {
		this._addr = val;
		Module.lv_wordbutton_set_addr(this.lvObj, this._addr, this._addrType);
	}
	get addrType(): addr_type_t {
		return this._addrType;
	}
	set addrType(val: addr_type_t) {
		this._addrType = val;
		Module.lv_wordbutton_set_addr(this.lvObj, this._addr, val);
	}

	get dataType(): data_type_t {
		this._dataType = Module.lv_wordbutton_get_data_type(this.lvObj);
		return this._dataType;
	}
	set dataType(val: data_type_t) {
		Module.lv_wordbutton_set_data_type(this.lvObj, val);
	}

	get operation(): lv_wordbutton_action_t {
		this._operationAction = Module.lv_wordbutton_get_operate_action(this.lvObj);
		return this._operationAction;
	}
	set operation(val: lv_wordbutton_action_t) {
		Module.lv_wordbutton_set_operate_action(this.lvObj, val);
	}


	get min() {
		return Module.lv_wordbutton_get_min_value(this.lvObj);
	}
	set min(val: number) {
		Module.lv_wordbutton_set_min_value(this.lvObj, val);
	}

	get max() {
		return Module.lv_wordbutton_get_max_value(this.lvObj);
	}
	set max(val: number) {
		Module.lv_wordbutton_set_max_value(this.lvObj, val);
	}

	get totalDigits() {
		return Module.lv_wordbutton_get_total_digits(this.lvObj);
	}
	set totalDigits(val: number) {
		Module.lv_wordbutton_set_total_digits(this.lvObj, val);
	}

	get decimalDigits() {
		return Module.lv_wordbutton_get_decimal_digits(this.lvObj);
	}
	set decimalDigits(val: number) {
		Module.lv_wordbutton_set_decimal_digits(this.lvObj, val);
	}

}

export default class WordButton extends HMiBase {
	constructor(geo: Geometry, screen?: LvObjT) {
		super("WordButton", geo, screen);
		this._property = new WordButtonProperty(this._lvObj);
		const style = Module.lv_wordbutton_get_style(this._lvObj);
		this._display = new ButtonDisplay(this._lvObj, style);
		const t = Module.lv_wordbutton_get_permission(this._lvObj);
		this._permission = this.createAuthority(t, true, true, true, true);
	}

	override updateImage(w: number, h: number): void {
		(this._display as ButtonDisplay)?.updateImage(w, h);
	}
}
