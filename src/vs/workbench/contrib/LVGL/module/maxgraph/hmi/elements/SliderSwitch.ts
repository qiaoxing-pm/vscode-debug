import type { Geometry } from "../../packages/core/src/index.js";
import { BaseDisplay, BaseProperty } from "./PureData.js";
import HMiBase from "./HMiBase.js";
import { data_type_t, lv_sliderswitch_dir_t, addr_type_t } from "../static/enums.js";
import { Module } from "../../lvgl/package/LvglModule.js";
import { hexStrToLvColor, LvColorToHexStr } from "../../lvgl/tools/color.js";

export class SliderSwitchProperty extends BaseProperty {
	override _dataType: data_type_t = data_type_t.DATA_TYPE_NONE;
	get addr() {
		return this._addr;
	}
	set addr(value: number) {
		this._addr = value;
		Module.lv_sliderswitch_set_addr(this.lvObj, value, this._addrType);
	}
	get addrType(): number {
		return this._addrType;
	}
	set addrType(value: number) {
		this._addrType = value;
		Module.lv_sliderswitch_set_addr(this.lvObj, this._addr, value);
	}

	get dataType(): data_type_t {
		return this._dataType;
	}
	set dataType(value: data_type_t) {
		this._dataType = value;
		Module.lv_sliderswitch_set_data_type(this.lvObj, value);
	}

	constructor(lvObj: LvObjT) {
		super(lvObj);
		this._addr = Module.lv_sliderswitch_get_addr(lvObj);
		this._addrType = Module.lv_sliderswitch_get_addr_type(lvObj);
	}
}



export class SliderSwitchDisplay extends BaseDisplay {


	_dir: lv_sliderswitch_dir_t = lv_sliderswitch_dir_t.LV_SLIDERSWITCH_DIR_LEFT;
	_fixedRange = true;
	_minAddr = 0;
	_maxAddr = 0;
	_minAddrType: addr_type_t = 0;
	_maxAddrType: addr_type_t = 0;
	_bgBorderOpa = 255;
	_knobOpa = 255;
	_knobBorderOpa = 255;
	_indicatorBorderOpa = 255;

	// _bgColor;
	constructor(lvObj: any) {
		super(lvObj);
		this._dir = Module.lv_sliderswitch_get_dir(this.lvObj);
		this._fixedRange = Module.lv_sliderswitch_get_fixed_range(this.lvObj);
		this._minAddr = Module.lv_sliderswitch_get_min_addr(this.lvObj);
		this._minAddrType = Module.lv_sliderswitch_get_min_addr_type(this.lvObj);
		this._maxAddr = Module.lv_sliderswitch_get_max_addr(this.lvObj);
		this._maxAddrType = Module.lv_sliderswitch_get_max_addr_type(this.lvObj);
		this._bgBorderOpa = Module.lv_sliderswitch_get_bg_border_opa(this.lvObj);
		this._knobBorderOpa = Module.lv_sliderswitch_get_knob_border_opa(this.lvObj);
		this._indicatorBorderOpa = Module.lv_sliderswitch_get_indicator_border_opa(this.lvObj);
		// this._dataType = Module.lv_sliderswitch_get_data_type(this.lvObj);
	}

	get bgBorderOpa(): number {
		return this._bgBorderOpa;
	}
	set bgBorderOpa(value: number) {
		this._bgBorderOpa = value;
		Module.lv_sliderswitch_set_bg_border_opa(this.lvObj, value);
	}

	get indicatorBorderOpa(): number {
		return this._indicatorBorderOpa;
	}
	set indicatorBorderOpa(value: number) {
		this._indicatorBorderOpa = value;
		Module.lv_sliderswitch_set_indicator_border_opa(this.lvObj, value);
	}
	get knobBorderOpa(): number {
		return this._knobBorderOpa;
	}
	set knobBorderOpa(value: number) {
		this._knobBorderOpa = value;
		Module.lv_sliderswitch_set_knob_border_opa(this.lvObj, value);
	}

	get fixedRange() {
		return this._fixedRange;
	}
	set fixedRange(value: boolean) {
		this._fixedRange = value;
		Module.lv_sliderswitch_set_fixed_range(this.lvObj, value);
	}

	get minAddr() {
		return this._minAddr;
	}
	set minAddr(value: number) {
		this._minAddr = value;
		Module.lv_sliderswitch_set_min_addr(this.lvObj, value, this._minAddrType);
	}
	get minAddrType(): addr_type_t {
		return this._minAddrType;
	}
	set minAddrType(value: addr_type_t) {
		this._minAddrType = value;
		Module.lv_sliderswitch_set_min_addr(this.lvObj, this._minAddr, value);
	}
	get maxAddr() {
		return this._maxAddr;
	}
	set maxAddr(value: number) {
		this._maxAddr = value;
		Module.lv_sliderswitch_set_max_addr(this.lvObj, value, this._maxAddrType);
	}
	get maxAddrType(): addr_type_t {
		return this._maxAddrType;
	}
	set maxAddrType(value: addr_type_t) {
		this._maxAddrType = value;
		Module.lv_sliderswitch_set_max_addr(this.lvObj, this._maxAddr, value);
	}

	get dir(): lv_sliderswitch_dir_t {
		return this._dir;
	}
	set dir(value: lv_sliderswitch_dir_t) {
		this._dir = value;
		Module.lv_sliderswitch_set_dir(this.lvObj, this._dir);
	}

	get bgColor(): string {
		const c = Module.lv_sliderswitch_get_bg_color(this.lvObj);
		return LvColorToHexStr(c);
	}
	set bgColor(value: string) {
		const c = hexStrToLvColor(value);
		Module.lv_sliderswitch_set_bg_color(this.lvObj, c);
		c.delete();
	}

	get bgOpa(): number {
		return Module.lv_sliderswitch_get_bg_opa(this.lvObj);
	}
	set bgOpa(value: number) {
		Module.lv_sliderswitch_set_bg_opa(this.lvObj, value);
	}

	get bgBorderColor(): string {
		const c = Module.lv_sliderswitch_get_bg_border_color(this.lvObj);
		return LvColorToHexStr(c);
	}
	set bgBorderColor(value: string) {
		const c = hexStrToLvColor(value);
		Module.lv_sliderswitch_set_bg_border_color(this.lvObj, c);
		c.delete();
	}

	get indicatorColor(): string {
		const c = Module.lv_sliderswitch_get_indicator_color(this.lvObj);
		return LvColorToHexStr(c);
	}
	set indicatorColor(value: string) {
		const c = hexStrToLvColor(value);
		Module.lv_sliderswitch_set_indicator_color(this.lvObj, c);
		c.delete();
	}

	get indicatorOpa(): number {
		return Module.lv_sliderswitch_get_indicator_opa(this.lvObj);
	}
	set indicatorOpa(value: number) {
		Module.lv_sliderswitch_set_indicator_opa(this.lvObj, value);
	}

	get indicatorBorderColor(): string {
		const c = Module.lv_sliderswitch_get_indicator_border_color(this.lvObj);
		return LvColorToHexStr(c);
	}
	set indicatorBorderColor(value: string) {
		const c = hexStrToLvColor(value);
		Module.lv_sliderswitch_set_indicator_border_color(this.lvObj, c);
		c.delete();
	}

	get knobColor(): string {
		const c = Module.lv_sliderswitch_get_knob_color(this.lvObj);
		return LvColorToHexStr(c);
	}
	set knobColor(value: string) {
		const c = hexStrToLvColor(value);
		Module.lv_sliderswitch_set_knob_color(this.lvObj, c);
		c.delete();
	}

	get knobOpa(): number {
		return Module.lv_sliderswitch_get_knob_opa(this.lvObj);
	}
	set knobOpa(value: number) {
		Module.lv_sliderswitch_set_knob_opa(this.lvObj, value);
	}

	get knobBorderColor(): string {
		const c = Module.lv_sliderswitch_get_knob_border_color(this.lvObj);
		return LvColorToHexStr(c);
	}
	set knobBorderColor(value: string) {
		const c = hexStrToLvColor(value);
		Module.lv_sliderswitch_set_knob_border_color(this.lvObj, c);
		c.delete();
	}

	get min(): number {
		return Module.lv_sliderswitch_get_min_value(this.lvObj);
	}
	set min(value: number) {
		Module.lv_sliderswitch_set_min_value(this.lvObj, value);
	}

	get max(): number {
		return Module.lv_sliderswitch_get_max_value(this.lvObj);
	}
	set max(value: number) {
		Module.lv_sliderswitch_set_max_value(this.lvObj, value);
	}

	override pickAttributes(): Object {
		return {
			...super.pickAttributes(),
			dir: this.dir,
			bgColor: this.bgColor,
			bgOpa: this.bgOpa,
			bgBorderColor: this.bgBorderColor,
			indicatorColor: this.indicatorColor,
			indicatorOpa: this.indicatorOpa,
			indicatorBorderColor: this.indicatorBorderColor,
			knobColor: this.knobColor,
			knobOpa: this.knobOpa,
			knobBorderColor: this.knobBorderColor,
			min: this.min,
			max: this.max,
			fixedRange: this.fixedRange,
			minAddr: this.minAddr,
			minAddrType: this.minAddrType,
			maxAddr: this.maxAddr,
			maxAddrType: this.maxAddrType,
		}
	}
}


export default class SliderSwitch extends HMiBase {
	constructor(geo: Geometry, screen?: LvObjT) {
		super("SliderSwitch", geo, screen);
		this._display = new SliderSwitchDisplay(this._lvObj);
		this._property = new SliderSwitchProperty(this._lvObj);
		const t = Module.lv_sliderswitch_get_permission(this._lvObj);
		this._permission = this.createAuthority(t, true, true, true);
	}
}
