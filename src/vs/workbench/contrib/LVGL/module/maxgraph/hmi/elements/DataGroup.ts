import type { Geometry } from "../../packages/core/src/index.js";
import HMiBase from "./HMiBase.js";
import { BaseDisplay, BaseProperty } from "./PureData.js";
import { XYCurveDisplay } from "./XYCurve.js";
import { Axis } from "./Axis.js";
import { Module } from "../../lvgl/package/LvglModule.js";
import { hexStrToLvColor, LvColorToHexStr } from "../../lvgl/tools/color.js";
import { addr_type_t, data_type_t, range_type_t, sampling_mode_t } from "../static/enums.js";
export class DataGroupProperty extends BaseProperty {

	_triggerAddr: number = 0;
	_triggerAddrType: addr_type_t = 0;
	_readAddr: number = 0;
	_readAddrType: addr_type_t = 0;

	get addr() { return 0; }
	set addr(value: number) { }
	get addrType(): addr_type_t { return addr_type_t.ADDR_TYPE_LOCAL_WORD; }
	set addrType(value: addr_type_t) { }

	override _dataType: data_type_t = data_type_t.DATA_TYPE_INT16;
	_samplingMode: sampling_mode_t = sampling_mode_t.LV_DATAGROUP_VALUE_SAMPLING;
	_samplingCount: number = 60;
	_samplingAddr: number = 0;
	_samplingAddrType: addr_type_t = addr_type_t.ADDR_TYPE_LOCAL_WORD;

	_baseColor: string = "#0000ff";
	_borderColor: string = "#000000";
	_bgColor: string = "#ffffff";

	_seriesColor: string;
	_seriesMin: number;
	_seriesMax: number;

	constructor(lvObj: LvObjT) {
		super(lvObj);
		this.addrValid = false;
		this._dataType = Module.lv_datagroup_get_data_type(lvObj);
		this._samplingCount = Module.lv_datagroup_get_sampling_count(lvObj);
		const bgColor = Module.lv_datagroup_get_bg_color(lvObj);
		this._bgColor = LvColorToHexStr(bgColor);
		const borderColor = Module.lv_datagroup_get_border_color(lvObj);
		this._borderColor = LvColorToHexStr(borderColor);
		const baseColor = Module.lv_datagroup_get_base_color(lvObj);
		this._baseColor = LvColorToHexStr(baseColor);

		this._seriesColor = LvColorToHexStr(Module.lv_datagroup_get_series_color(lvObj));
		this._seriesMin = Module.lv_datagroup_get_series_min(lvObj);
		this._seriesMax = Module.lv_datagroup_get_series_max(lvObj);
	}

	get seriesColor() {
		return this._seriesColor;
	}
	set seriesColor(value: string) {
		this._seriesColor = value;
		const c = hexStrToLvColor(value);
		Module.lv_datagroup_set_series_color(this.lvObj, c);
		c.delete();
	}

	get seriesMin() {
		return this._seriesMin;
	}
	set seriesMin(value: number) {
		this._seriesMin = value;
		Module.lv_datagroup_set_series_min(this.lvObj, value);
	}
	get seriesMax() {
		return this._seriesMax;
	}
	set seriesMax(value: number) {
		this._seriesMax = value;
		Module.lv_datagroup_set_series_max(this.lvObj, value);
	}

	get dataType() {
		return this._dataType;
	}
	set dataType(value: data_type_t) {
		this._dataType = value;
		Module.lv_datagroup_set_data_type(this.lvObj, value);
	}
	get samplingMode() {
		return this._samplingMode;
	}
	set samplingMode(value: sampling_mode_t) {
		this._samplingMode = value;
		Module.lv_datagroup_set_sampling_mode(this.lvObj, value);
	}
	get samplingCount() {
		return this._samplingCount;
	}
	set samplingCount(value: number) {
		this._samplingCount = value;
		Module.lv_datagroup_set_sampling_count(this.lvObj, value);
	}
	get samplingAddr() {
		return this._samplingAddr;
	}
	set samplingAddr(value: number) {
		this._samplingAddr = value;
		Module.lv_datagroup_set_sampling_addr(this.lvObj, value, this._samplingAddrType);
	}
	get samplingAddrType() {
		return this._samplingAddrType;
	}
	set samplingAddrType(value: addr_type_t) {
		this._samplingAddrType = value;
		Module.lv_datagroup_set_sampling_addr(this.lvObj, this._samplingAddr, value);
	}
	get baseColor() {
		return this._baseColor;
	}
	set baseColor(value: string) {
		this._baseColor = value;
		const c = hexStrToLvColor(value);
		Module.lv_datagroup_set_base_color(this.lvObj, c);
		c.delete();
	}
	get borderColor() {
		return this._borderColor;
	}
	set borderColor(value: string) {
		this._borderColor = value;
		const c = hexStrToLvColor(value);
		Module.lv_datagroup_set_border_color(this.lvObj, c);
		c.delete();
	}
	get bgColor() {
		return this._bgColor;
	}
	set bgColor(value: string) {
		this._bgColor = value;
		const c = hexStrToLvColor(value);
		Module.lv_datagroup_set_bg_color(this.lvObj, c);
		c.delete();
	}
	get triggerAddr() {
		return this._triggerAddr;
	}
	set triggerAddr(value: number) {
		this._triggerAddr = value;
		Module.lv_datagroup_set_trigger_addr(this.lvObj, this._triggerAddr, this._triggerAddrType);
	}
	get readAddr() {
		return this._readAddr;
	}
	set readAddr(value: number) {
		this._readAddr = value;
		Module.lv_datagroup_set_read_addr(this.lvObj, this._readAddr, this._readAddrType);
	}
	get triggerAddrType() {
		return this._triggerAddrType;
	}
	set triggerAddrType(value: addr_type_t) {
		this._triggerAddrType = value;
		Module.lv_datagroup_set_trigger_addr(this.lvObj, this._triggerAddr, this._triggerAddrType);
	}
	get readAddrType() {
		return this._readAddrType;
	}
	set readAddrType(value: addr_type_t) {
		this._readAddrType = value;
		Module.lv_datagroup_set_read_addr(this.lvObj, this._readAddr, this._readAddrType);
	}

}

export class DataGroupAxis extends Axis {
	_minAddr = 0;
	_maxAddr = 0;
	_minAddrType = 0;
	_maxAddrType = 0;
	_rangeType: range_type_t = range_type_t.LV_DATAGROUP_VALUE_RANGE;
	constructor(lvObj: LvObjT, isX: boolean) {
		super(lvObj, isX);
		if (isX) {
			this._showScale = Module.lv_datagroup_get_show_x_scale(lvObj);
			this._showCurve = Module.lv_datagroup_get_show_x_curve(lvObj);
			this._showLabel = Module.lv_datagroup_get_show_x_label(lvObj);
			this._min = Module.lv_datagroup_get_x_min(lvObj);
			this._max = Module.lv_datagroup_get_x_max(lvObj);
			this._majorTick = Module.lv_datagroup_get_x_major_tick(lvObj);
			this._minorTick = Module.lv_datagroup_get_x_minor_tick(lvObj);
			const sc = Module.lv_datagroup_get_x_scale_color(lvObj);
			this._scaleColor = LvColorToHexStr(sc);
			const gc = Module.lv_datagroup_get_x_gridline_color(lvObj);
			this._gridlineColor = LvColorToHexStr(gc);
			this._totalDigits = Module.lv_datagroup_get_x_total_digits(lvObj);
			this._decimalDigits = Module.lv_datagroup_get_x_decimal_digits(lvObj);
		} else {
			this._showScale = Module.lv_datagroup_get_show_y_scale(lvObj);
			this._showCurve = Module.lv_datagroup_get_show_y_curve(lvObj);
			this._showLabel = Module.lv_datagroup_get_show_y_label(lvObj);
			this._min = Module.lv_datagroup_get_y_min(lvObj);
			this._max = Module.lv_datagroup_get_y_max(lvObj);
			this._majorTick = Module.lv_datagroup_get_y_major_tick(lvObj);
			this._minorTick = Module.lv_datagroup_get_y_minor_tick(lvObj);
			const sc = Module.lv_datagroup_get_y_scale_color(lvObj);
			this._scaleColor = LvColorToHexStr(sc);
			const gc = Module.lv_datagroup_get_y_gridline_color(lvObj);
			this._gridlineColor = LvColorToHexStr(gc);
			this._totalDigits = Module.lv_datagroup_get_y_total_digits(lvObj);
			this._decimalDigits = Module.lv_datagroup_get_y_decimal_digits(lvObj);
			this._minAddr = Module.lv_datagroup_get_y_min_addr(lvObj);
			this._minAddrType = Module.lv_datagroup_get_y_min_addr_type(lvObj);
			this._maxAddr = Module.lv_datagroup_get_y_max_addr(lvObj);
			this._maxAddrType = Module.lv_datagroup_get_y_max_addr_type(lvObj);
			this._rangeType = Module.lv_datagroup_get_range_type(lvObj);
		}
	}

	get minAddr() {
		return this._minAddr;
	}
	set minAddr(value: number) {
		this._minAddr = value;
		Module.lv_datagroup_set_y_min_addr(this.lvObj, value, this._minAddrType);
	}
	get minAddrType(): addr_type_t {
		return this._minAddrType;
	}
	set minAddrType(value: addr_type_t) {
		this._minAddrType = value;
		Module.lv_datagroup_set_y_min_addr(this.lvObj, this._minAddr, value);
	}
	get maxAddr() {
		return this._maxAddr;
	}
	set maxAddr(value: number) {
		this._maxAddr = value;
		Module.lv_datagroup_set_y_max_addr(this.lvObj, value, this._maxAddrType);
	}
	get maxAddrType(): addr_type_t {
		return this._maxAddrType;
	}
	set maxAddrType(value: addr_type_t) {
		this._maxAddrType = value;
		Module.lv_datagroup_set_y_max_addr(this.lvObj, this._maxAddr, value);
	}

	get rangeType(): range_type_t {
		return this._rangeType;
	}
	set rangeType(value: range_type_t) {
		this._rangeType = value;
		Module.lv_datagroup_set_range_type(this.lvObj, value);
	}

	override get showCurve() {
		return this._showCurve;
	}
	override set showCurve(value: boolean) {
		this._showCurve = value;
		if (!this.isX) {
			Module.lv_datagroup_set_show_x_curve(this.lvObj, value);
		} else {
			Module.lv_datagroup_set_show_y_curve(this.lvObj, value);
		}
	}
	override get showLabel(): boolean {
		return this._showLabel;
	}
	override set showLabel(value: boolean) {
		this._showLabel = value;
		if (this.isX) {
			Module.lv_datagroup_set_show_x_label(this.lvObj, value);
		} else {
			Module.lv_datagroup_set_show_y_label(this.lvObj, value);
		}
	}

	override get majorTick(): number {
		return this._majorTick;
	}
	override set majorTick(value: number) {
		this._majorTick = value;
		if (this.isX) {
			Module.lv_datagroup_set_x_major_tick(this.lvObj, value);
		} else {
			Module.lv_datagroup_set_y_major_tick(this.lvObj, value);
		}
	}

	override get minorTick(): number {
		return this._minorTick;
	}
	override set minorTick(value: number) {
		this._minorTick = value;
		if (this.isX) {
			Module.lv_datagroup_set_x_minor_tick(this.lvObj, value);
		} else {
			Module.lv_datagroup_set_y_minor_tick(this.lvObj, value);
		}
	}

	override get scaleColor(): string {
		return this._scaleColor;
	}
	override set scaleColor(value: string) {
		this._scaleColor = value;
		const x = hexStrToLvColor(value);
		if (this.isX) {
			Module.lv_datagroup_set_x_scale_color(this.lvObj, x);
		} else {
			Module.lv_datagroup_set_y_scale_color(this.lvObj, x);
		}
		x.delete();
	}

	override get gridlineColor(): string {
		return this._gridlineColor;
	}
	override set gridlineColor(value: string) {
		this._gridlineColor = value;
		const c = hexStrToLvColor(value);
		if (this.isX) {
			Module.lv_datagroup_set_x_gridline_color(this.lvObj, c);
		} else {
			Module.lv_datagroup_set_y_gridline_color(this.lvObj, c);
		}
		c.delete();

	}

	override get min(): number {
		return this._min;
	}
	override set min(value: number) {
		this._min = value;
		if (this.isX) {
			Module.lv_datagroup_set_x_min(this.lvObj, value);
		} else {
			Module.lv_datagroup_set_y_min(this.lvObj, value);
		}
	}

	override get max() {
		return this._max;
	}
	override set max(value: number) {
		this._max = value;
		if (this.isX) {
			Module.lv_datagroup_set_x_max(this.lvObj, value);
		} else {
			Module.lv_datagroup_set_y_max(this.lvObj, value);
		}
	}

	override get totalDigits(): number {
		return this._totalDigits;
	}
	override set totalDigits(value: number) {
		this._totalDigits = value;
		if (this.isX) {
			Module.lv_datagroup_set_x_total_digits(this.lvObj, value);
		} else {
			Module.lv_datagroup_set_y_total_digits(this.lvObj, value);
		}
	}

	override get decimalDigits(): number {
		return this._decimalDigits;
	}
	override set decimalDigits(value: number) {
		this._decimalDigits = value;
		if (this.isX) {
			Module.lv_datagroup_set_x_decimal_digits(this.lvObj, value);
		} else {
			Module.lv_datagroup_set_y_decimal_digits(this.lvObj, value);
		}
	}

	override pickAttributes(): Object {
		return {
			...super.pickAttributes(),
			minAddr: this.minAddr,
			maxAddr: this.maxAddr,
			minAddrType: this.minAddrType,
			maxAddrType: this.maxAddrType,
			rangeType: this.rangeType,
		}
	}
}

export class DataGroupDisplay extends XYCurveDisplay {
	constructor(lvObj: LvObjT) {
		super(lvObj);
		this.xAxis = new DataGroupAxis(lvObj, true);
		this.yAxis = new DataGroupAxis(lvObj, false);
	}


}

export default class DataGroup extends HMiBase {
	constructor(geo: Geometry, screen?: LvObjT) {
		super("DataGroup", geo, screen);
		this._property = new DataGroupProperty(this._lvObj);
		this._display = new DataGroupDisplay(this._lvObj);
		const t = Module.lv_datagroup_get_permission(this._lvObj);
		this._permission = this.createAuthority(t, false, true, false, false);
	}
}
