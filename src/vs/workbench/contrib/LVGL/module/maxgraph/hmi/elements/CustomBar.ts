import type { Geometry } from "../../packages/core/src/index.js";
import { BaseDisplay, BaseProperty } from "./PureData.js";
import HMiBase from "./HMiBase.js";
import { Module } from "../../lvgl/package/LvglModule.js";
import { lv_custombar_direction_t, addr_type_t, data_type_t } from "../static/enums.js";
import { hexStrToLvColor, LvColorToHexStr } from "../../lvgl/tools/color.js";

export class CustomBarProperty extends BaseProperty {

	override _dataType: data_type_t = 0;

	get addr() {
		return this._addr;
	}
	set addr(value: number) {
		this._addr = value;
		Module.lv_custombar_set_addr(this.lvObj, this._addr, this._addrType);
	}
	get addrType(): addr_type_t {
		return this._addrType;
	}
	set addrType(value: addr_type_t) {
		this._addrType = value;
		Module.lv_custombar_set_addr(this.lvObj, this._addr, value);
	}

	get dataType(): data_type_t {
		return this._dataType;
	}

	set dataType(value: data_type_t) {
		this._dataType = value;
		Module.lv_custombar_set_data_type(this.lvObj, value);
	}
	constructor(lvObj: LvObjT) {
		super(lvObj);
		this._addr = Module.lv_custombar_get_addr(lvObj);
		this._addrType = Module.lv_custombar_get_addr_type(lvObj);
		this._dataType = Module.lv_custombar_get_data_type(lvObj);
	}
}

export class CustomBarDisplay extends BaseDisplay {
	_dataType: data_type_t = data_type_t.DATA_TYPE_INT16;
	_min;
	_max;
	_direction: lv_custombar_direction_t = lv_custombar_direction_t.LV_CUSTOMBAR_FORWARD;
	_bgColor;
	_barColor;
	_isBipolarBar;
	_midValue;

	constructor(lvObj: LvObjT) {
		super(lvObj);
		this._min = Module.lv_custombar_get_min_value(lvObj);
		this._max = Module.lv_custombar_get_max_value(lvObj);
		this._dataType = Module.lv_custombar_get_data_type(lvObj);
		const bgColor = Module.lv_custombar_get_bg_color(lvObj);
		this._bgColor = LvColorToHexStr(bgColor);
		this._isBipolarBar = Module.lv_custombar_get_is_bipolar_bar(lvObj);
		this._midValue = Module.lv_custombar_get_mid_value(lvObj);
		const barColor = Module.lv_custombar_get_bar_color(lvObj);
		this._barColor = LvColorToHexStr(barColor);
	}
	get direction() {
		return this._direction;
	}
	set direction(value: lv_custombar_direction_t) {
		this._direction = value;
		Module.lv_custombar_set_direction(this.lvObj, value);
	}

	get dataType(): data_type_t {
		return this._dataType;
	}
	set dataType(value: data_type_t) {
		this._dataType = value;
		Module.lv_custombar_set_data_type(this.lvObj, value);
	}

	get bgColor() {
		return this._bgColor;
	}
	set bgColor(value: string) {
		this._bgColor = value;
		const c = hexStrToLvColor(value);
		Module.lv_custombar_set_bg_color(this.lvObj, c);
		c.delete();
	}

	get barColor() {
		return this._barColor;
	}
	set barColor(value: string) {
		this._barColor = value;
		const c = hexStrToLvColor(value);
		Module.lv_custombar_set_bar_color(this.lvObj, c);
		c.delete();
	}

	get isBipolarBar() {
		return this._isBipolarBar;
	}
	set isBipolarBar(value: boolean) {
		this._isBipolarBar = value;
		Module.lv_custombar_set_is_bipolar_bar(this.lvObj, value);
	}
	get midValue() {
		return this._midValue;
	}
	set midValue(value: number) {
		this._midValue = value;
		Module.lv_custombar_set_mid_value(this.lvObj, value);
	}

	get min() {
		return this._min;
	}
	set min(value: number) {
		this._min = value;
		Module.lv_custombar_set_min_value(this.lvObj, value);
	}

	get max() {
		return this._max;
	}
	set max(value: number) {
		this._max = value;
		Module.lv_custombar_set_max_value(this.lvObj, value);
	}

}

export default class CustomBar extends HMiBase {
	constructor(geo: Geometry, screen?: LvObjT) {
		super("CustomBar", geo, screen);
		this._property = new CustomBarProperty(this._lvObj);
		this._display = new CustomBarDisplay(this._lvObj);
		const p = Module.lv_custombar_get_permission(this._lvObj);
		this._permission = this.createAuthority(p, false, true);
	}
}
