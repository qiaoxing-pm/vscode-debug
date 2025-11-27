import type { Geometry } from "../../packages/core/src/index.js";
import { BaseDisplay, BaseProperty } from "./PureData.js";
import HMiBase from "./HMiBase.js";
import { Module } from "../../lvgl/package/LvglModule.js";
import { lv_gauge_display_direction_t, lv_gauge_pointer_type_t, lv_gauge_shape_t, addr_type_t } from "../static/enums.js";
import { hexStrToLvColor, LvColorToHexStr } from "../../lvgl/tools/color.js";

export class GaugeProperty extends BaseProperty {
	override _dataType = 0;
	get addr() {
		return this._addr;
	}
	set addr(value: number) {
		this._addr = value;
		Module.lv_gauge_set_addr(this.lvObj, this._addr, this._addrType);
	}
	get addrType(): addr_type_t {
		return this._addrType;
	}
	set addrType(value: addr_type_t) {
		this._addrType = value;
		Module.lv_gauge_set_addr(this.lvObj, this._addr, value);
	}
	get dataType() {
		return this._dataType;
	}
	set dataType(value: number) {
		this._dataType = value;
		Module.lv_gauge_set_data_type(this.lvObj, value);
	}

	constructor(lvObj: LvObjT) {
		super(lvObj);
		this._addr = Module.lv_gauge_get_addr(lvObj);
		this._addrType = Module.lv_gauge_get_addr_type(lvObj);
		this._dataType = Module.lv_gauge_get_data_type(lvObj);
	}
}
export class GaugeDisplay extends BaseDisplay {

	_min = 0;
	_max = 100;
	_displayDirection: lv_gauge_display_direction_t;
	_showColor = "#000000";
	_bgColor = "#ffffff";
	_bgOpa = 255;
	_scaleColor = "#000000";
	_majorTick;
	_minorTick;
	_showScaleValue;
	_showScaleAxis;
	_showMinorScale;
	_shape: lv_gauge_shape_t;
	_pointerType: lv_gauge_pointer_type_t;

	constructor(lvObj: LvObjT) {
		super(lvObj);
		this._min = Module.lv_gauge_get_min_value(lvObj);
		this._max = Module.lv_gauge_get_max_value(lvObj);
		this._displayDirection = Module.lv_gauge_get_display_direction(lvObj);
		let color = Module.lv_gauge_get_show_color(lvObj);
		this._showColor = LvColorToHexStr(color);
		color = Module.lv_gauge_get_bg_color(lvObj);
		this._bgColor = LvColorToHexStr(color);
		color = Module.lv_gauge_get_scale_color(lvObj);
		this._scaleColor = LvColorToHexStr(color);
		this._bgOpa = Module.lv_gauge_get_bg_opa(lvObj);
		this._majorTick = Module.lv_gauge_get_major_tick(lvObj);
		this._minorTick = Module.lv_gauge_get_minor_tick(lvObj);
		this._showScaleValue = Module.lv_gauge_get_show_scale_value(lvObj);
		this._showScaleAxis = Module.lv_gauge_get_show_scale_axis(lvObj);
		this._showMinorScale = Module.lv_gauge_get_show_minor_scale(lvObj);
		this._shape = Module.lv_gauge_get_shape(lvObj);
		this._pointerType = Module.lv_gauge_get_pointer_type(lvObj);
	}

	get displayDirection() {
		return this._displayDirection;
	}
	set displayDirection(value: lv_gauge_display_direction_t) {
		this._displayDirection = value;
		Module.lv_gauge_set_display_direction(this.lvObj, value);
	}

	get showColor() {
		return this._showColor;
	}
	set showColor(value: string) {
		this._showColor = value;
		const c = hexStrToLvColor(value);
		Module.lv_gauge_set_show_color(this.lvObj, c);
		c.delete();
	}

	get bgColor() {
		return this._bgColor;
	}
	set bgColor(value: string) {
		this._bgColor = value;
		const c = hexStrToLvColor(value);
		Module.lv_gauge_set_bg_color(this.lvObj, c);
		c.delete();
	}

	get bgOpa() {
		return this._bgOpa;
	}
	set bgOpa(value: number) {
		this._bgOpa = value;
		Module.lv_gauge_set_bg_opa(this.lvObj, value);
	}

	get scaleColor() {
		return this._scaleColor;
	}
	set scaleColor(value: string) {
		this._scaleColor = value;
		const c = hexStrToLvColor(value);
		Module.lv_gauge_set_scale_color(this.lvObj, c);
		c.delete();
	}

	get majorTick() {
		return this._majorTick;
	}
	set majorTick(value: number) {
		this._majorTick = value;
		Module.lv_gauge_set_major_tick(this.lvObj, value);
	}

	get minorTick() {
		return this._minorTick;
	}
	set minorTick(value: number) {
		this._minorTick = value;
		Module.lv_gauge_set_minor_tick(this.lvObj, value);
	}

	get min() {
		return this._min;
	}
	set min(value: number) {
		this._min = value;
		Module.lv_gauge_set_min_value(this.lvObj, value);
	}

	get max() {
		return this._max;
	}
	set max(value: number) {
		this._max = value;
		Module.lv_gauge_set_max_value(this.lvObj, value);
	}

	get showScaleValue() {
		return this._showScaleValue;
	}
	set showScaleValue(value: boolean) {
		this._showScaleValue = value;
		Module.lv_gauge_set_show_scale_value(this.lvObj, value);
	}
	get showScaleAxis() {
		return this._showScaleAxis;
	}
	set showScaleAxis(value: boolean) {
		this._showScaleAxis = value;
		Module.lv_gauge_set_show_scale_axis(this.lvObj, value);
	}
	get showMinorScale() {
		return this._showMinorScale;
	}
	set showMinorScale(value: boolean) {
		this._showMinorScale = value;
		Module.lv_gauge_set_show_minor_scale(this.lvObj, value);
	}

	get shape() {
		return this._shape;
	}
	set shape(value: lv_gauge_shape_t) {
		this._shape = value;
		Module.lv_gauge_set_shape(this.lvObj, value);
	}

	get pointerType() {
		return this._pointerType;
	}
	set pointerType(value: lv_gauge_pointer_type_t) {
		this._pointerType = value;
		Module.lv_gauge_set_pointer_type(this.lvObj, value);
	}

}

export default class Gauge extends HMiBase {
	constructor(geo: Geometry, screen?: LvObjT) {
		super("Gauge", geo, screen);
		this._display = new GaugeDisplay(this._lvObj);
		this._property = new GaugeProperty(this._lvObj);
		const t = Module.lv_gauge_get_permission(this._lvObj);
		this._permission = this.createAuthority(t, true);
	}
}
