import type { Geometry } from "../../packages/core/src/index.js";
import { BaseDisplay, BaseProperty, PureData } from "./PureData.js";
import HMiBase from "./HMiBase.js";
import { Module } from "../../lvgl/package/LvglModule.js";
import { hexStrToLvColor, LvColorToHexStr } from "../../lvgl/tools/color.js";
import { Axis } from "./Axis.js";
import { addr_type_t, data_type_t } from "../static/enums.js";

export class XYCurveProperty extends BaseProperty {

	get addr() { return this._addr; }
	set addr(value: number) { this._addr = value }
	get addrType(): number { return this._addrType; }
	set addrType(value: number) { this._addrType = value; }

	_triggerAddress = 0;
	_triggerAddrType: addr_type_t = addr_type_t.ADDR_TYPE_LOCAL_BIT;
	_readAddress = 0;
	_readAddrType: addr_type_t = addr_type_t.ADDR_TYPE_LOCAL_WORD;
	_clearAddress = 0;
	_clearAddrType: addr_type_t = addr_type_t.ADDR_TYPE_LOCAL_BIT;

	override _dataType: data_type_t = data_type_t.DATA_TYPE_INT16;
	_samplingCount: number = 60;
	_samplingPeriodS: number = 100;

	_bgColor = "#ffffff";
	_borderColor = "#000000";
	_baseColor = "#cccccc";

	_seriesCount = 0;
	_curSeriesIdx = 0;
	_seriesMin: number[] = [];
	_seriesMax: number[] = [];
	_seriesColor: string[] = [];

	constructor(lvObj: LvObjT) {
		super(lvObj);
		this.seriesCount = 1;
		this._triggerAddress = Module.lv_xycurve_get_trigger_addr(this.lvObj);
		this._triggerAddrType = Module.lv_xycurve_get_trigger_addr_type(this.lvObj);
		this._readAddress = Module.lv_xycurve_get_read_addr(this.lvObj);
		this._readAddrType = Module.lv_xycurve_get_read_addr_type(this.lvObj);
		this._clearAddress = Module.lv_xycurve_get_clear_addr(this.lvObj);
		this._clearAddrType = Module.lv_xycurve_get_clear_addr_type(this.lvObj);

		this._dataType = Module.lv_xycurve_get_data_type(this.lvObj);
		this._samplingCount = Module.lv_xycurve_get_sampling_count(lvObj);
		this._samplingPeriodS = Module.lv_xycurve_get_sampling_period_s(lvObj);

		const bgColor = Module.lv_xycurve_get_bg_color(lvObj);
		this._bgColor = LvColorToHexStr(bgColor);
		const borderColor = Module.lv_xycurve_get_border_color(lvObj);
		this._borderColor = LvColorToHexStr(borderColor);
		const baseColor = Module.lv_xycurve_get_base_color(lvObj);
		this._baseColor = LvColorToHexStr(baseColor);
		this.addrValid = false;
	}

	get seriesCount() {
		return this._seriesCount;
	}
	set seriesCount(value: number) {
		const diff = value - this._seriesCount;
		if (diff > 0) {
			for (let i = 0; i < diff; i++) {
				this._seriesMin.push(Module.lv_xycurve_get_series_min(this.lvObj, this._seriesCount + i));
				this._seriesMax.push(Module.lv_xycurve_get_series_max(this.lvObj, this._seriesCount + i));
				this._seriesColor.push(LvColorToHexStr(Module.lv_xycurve_get_series_color(this.lvObj, this._seriesCount + i)));
			}
		} else {
			for (let i = 0; i < -diff; i++) {
				this._seriesMin.pop();
				this._seriesMax.pop();
				this._seriesColor.pop();
			}
		}
		this._seriesCount = value;

		Module.lv_xycurve_set_series_count(this.lvObj, value);
	}
	get curSeriesIdx() {
		return this._curSeriesIdx;
	}
	set curSeriesIdx(value: number) {
		if (value < 0 || value >= this._seriesCount) {
			return;
		}
		this._curSeriesIdx = value;

	}
	get seriesMin() {
		return this._seriesMin[this._curSeriesIdx];
	}
	set seriesMin(value: number) {
		this._seriesMin[this._curSeriesIdx] = value;
		Module.lv_xycurve_set_series_min(this.lvObj, this._curSeriesIdx, value);
	}
	get seriesMax() {
		return this._seriesMax[this._curSeriesIdx];
	}
	set seriesMax(value: number) {
		this._seriesMax[this._curSeriesIdx] = value;
		Module.lv_xycurve_set_series_max(this.lvObj, this._curSeriesIdx, value);
	}
	get seriesColor() {
		return this._seriesColor[this._curSeriesIdx];
	}
	set seriesColor(value: string) {
		this._seriesColor[this._curSeriesIdx] = value;
		Module.lv_xycurve_set_series_color(this.lvObj, this._curSeriesIdx, hexStrToLvColor(value));
	}

	get triggerAddress() {
		return this._triggerAddress;
	}
	set triggerAddress(value: number) {
		this._triggerAddress = value;
		Module.lv_xycurve_set_trigger_addr(this.lvObj, value, this._triggerAddrType);
	}
	get triggerAddrType(): addr_type_t {
		return this._triggerAddrType;
	}
	set triggerAddrType(value: addr_type_t) {
		this._triggerAddrType = value;
		Module.lv_xycurve_set_trigger_addr(this.lvObj, this._triggerAddress, value);
	}
	get readAddress() {
		return this._readAddress;
	}
	set readAddress(value: number) {
		this._readAddress = value;
		Module.lv_xycurve_set_read_addr(this.lvObj, value, this._readAddrType);
	}
	get readAddrType(): addr_type_t {
		return this._readAddrType;
	}
	set readAddrType(value: addr_type_t) {
		this._readAddrType = value;
		Module.lv_xycurve_set_read_addr(this.lvObj, this._readAddress, value);
	}
	get clearAddress() {
		return this._clearAddress;
	}
	set clearAddress(value: number) {
		this._clearAddress = value;
		Module.lv_xycurve_set_clear_addr(this.lvObj, value, this._clearAddrType);
	}
	get clearAddrType(): addr_type_t {
		return this._clearAddrType;
	}
	set clearAddrType(value: addr_type_t) {
		this._clearAddrType = value;
		Module.lv_xycurve_set_clear_addr(this.lvObj, this._clearAddress, value);
	}
	get dataType(): data_type_t {
		return this._dataType;
	}
	set dataType(value: data_type_t) {
		this._dataType = value;
		Module.lv_xycurve_set_data_type(this.lvObj, value);
	}


	get samplingCount(): number {
		return this._samplingCount;
	}
	set samplingCount(value: number) {
		this._samplingCount = value;
		Module.lv_xycurve_set_sampling_count(this.lvObj, value);
	}

	get samplingPeriodS(): number {
		return this._samplingPeriodS;
	}
	set samplingPeriodS(value: number) {
		this._samplingPeriodS = value;
		Module.lv_xycurve_set_sampling_period_s(this.lvObj, value);
	}


	get bgColor() {
		return this._bgColor;
	}
	set bgColor(value: string) {
		this._bgColor = value;
		const lvColor = hexStrToLvColor(value);
		Module.lv_obj_set_style_bg_color(this.lvObj, lvColor, 0);
	}

	get borderColor() {
		return this._borderColor;
	}
	set borderColor(value: string) {
		this._borderColor = value;
		const lvColor = hexStrToLvColor(value);
		Module.lv_obj_set_style_border_color(this.lvObj, lvColor, 0);
	}

	get baseColor() {
		return this._baseColor;
	}
	set baseColor(value: string) {
		this._baseColor = value;
		const lvColor = hexStrToLvColor(value);
		Module.lv_xycurve_set_base_color(this.lvObj, lvColor);
		lvColor.delete();
	}

	override isArrayKeys(): string[] {
		return [
			"_seriesColor", "_seriesMin", "_seriesMax",
		];
	}

	override changeIdx(idx: number) {
		this._curSeriesIdx = idx;
	}

}



export class XYCurveDisplay extends BaseDisplay {
	xAxis: Axis;
	yAxis: Axis;

	constructor(lvObj: LvObjT) {
		super(lvObj);
		this.xAxis = new Axis(lvObj, true);
		this.yAxis = new Axis(lvObj, false);
	}

	override pickAttributes(): Object {
		return {
			xAxis: this.xAxis.pickAttributes(),
			yAxis: this.yAxis.pickAttributes(),
		}
	}
}

export default class XYCurve extends HMiBase {
	constructor(geo: Geometry, screen?: LvObjT) {
		super("XYCurve", geo, screen);
		this._property = new XYCurveProperty(this._lvObj);
		this._display = new XYCurveDisplay(this._lvObj);
		const t = Module.lv_xycurve_get_permission(this._lvObj);
		this._permission = this.createAuthority(t, true, true, true, true);
	}
}
