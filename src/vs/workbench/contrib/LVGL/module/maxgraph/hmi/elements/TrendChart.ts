import type { Geometry } from "../../packages/core/src/index.js";
import { BaseProperty } from "./PureData.js";
import HMiBase from "./HMiBase.js";
import { XYCurveDisplay } from "./XYCurve.js";
import { Axis } from "./Axis.js";
import { Module } from "../../lvgl/package/LvglModule.js";
import { hexStrToLvColor, LvColorToHexStr } from "../../lvgl/tools/color.js";
import { addr_type_t, data_type_t } from "../static/enums.js";
export class TrendChartProperty extends BaseProperty {

	get addr() { return this._addr; }
	set addr(value: number) { this._addr = value }
	get addrType(): number { return this._addrType; }
	set addrType(value: number) { this._addrType = value; }

	_triggerAddress = 0;
	_triggerAddrType: addr_type_t = 0;
	_readAddress = 0;
	_readAddrType: addr_type_t = 0;
	_clearAddress = 0;
	_clearAddrType: addr_type_t = 0;

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
		this._triggerAddress = Module.lv_trendchart_get_trigger_addr(lvObj);
		this._triggerAddrType = Module.lv_trendchart_get_trigger_addr_type(lvObj);
		this._readAddress = Module.lv_trendchart_get_read_addr(lvObj);
		this._readAddrType = Module.lv_trendchart_get_read_addr_type(lvObj);
		this._clearAddress = Module.lv_trendchart_get_clear_addr(lvObj);
		this._clearAddrType = Module.lv_trendchart_get_clear_addr_type(lvObj);
		this._dataType = Module.lv_trendchart_get_data_type(lvObj);
		this._samplingCount = Module.lv_trendchart_get_sampling_count(lvObj);
		this._samplingPeriodS = Module.lv_trendchart_get_sampling_period_s(lvObj);
		const bgColor = Module.lv_trendchart_get_bg_color(lvObj);
		this._bgColor = LvColorToHexStr(bgColor);
		const borderColor = Module.lv_trendchart_get_border_color(lvObj);
		this._borderColor = LvColorToHexStr(borderColor);
		const baseColor = Module.lv_trendchart_get_base_color(lvObj);
		this._baseColor = LvColorToHexStr(baseColor);
		this.seriesCount = 1;
		this.addrValid = false;
	}

	get seriesCount() {
		return this._seriesCount;
	}
	set seriesCount(value: number) {
		const diff = value - this._seriesCount;
		if (diff > 0) {
			for (let i = 0; i < diff; i++) {
				this._seriesMin.push(Module.lv_trendchart_get_series_min(this.lvObj, this._seriesCount + i));
				this._seriesMax.push(Module.lv_trendchart_get_series_max(this.lvObj, this._seriesCount + i));
				const c = Module.lv_trendchart_get_series_color(this.lvObj, this._seriesCount + i);
				this._seriesColor.push(LvColorToHexStr(c));
			}
		} else {
			for (let i = 0; i < -diff; i++) {
				this._seriesMin.pop();
				this._seriesMax.pop();
				this._seriesColor.pop();
			}
		}
		this._seriesCount = value;
		Module.lv_trendchart_set_series_count(this.lvObj, value);
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
		Module.lv_trendchart_set_series_min(this.lvObj, this._curSeriesIdx, value);
	}
	get seriesMax() {
		return this._seriesMax[this._curSeriesIdx];
	}
	set seriesMax(value: number) {
		this._seriesMax[this._curSeriesIdx] = value;
		Module.lv_trendchart_set_series_max(this.lvObj, this._curSeriesIdx, value);
	}
	get seriesColor() {
		return this._seriesColor[this._curSeriesIdx];
	}
	set seriesColor(value: string) {
		this._seriesColor[this._curSeriesIdx] = value;
		Module.lv_trendchart_set_series_color(this.lvObj, this._curSeriesIdx, hexStrToLvColor(value));
	}


	override isArrayKeys(): string[] {
		return [
			"_seriesColor", "_seriesMin", "_seriesMax",
		];
	}

	override changeIdx(idx: number) {
		this._curSeriesIdx = idx;
	}

	get triggerAddress() {
		return this._triggerAddress;
	}
	set triggerAddress(value: number) {
		this._triggerAddress = value;
		Module.lv_trendchart_set_trigger_addr(this.lvObj, value, this._triggerAddrType);
	}
	get triggerAddrType(): addr_type_t {
		return this._triggerAddrType;
	}
	set triggerAddrType(value: addr_type_t) {
		this._triggerAddrType = value;
		Module.lv_trendchart_set_trigger_addr(this.lvObj, this._triggerAddress, value);
	}
	get readAddress() {
		return this._readAddress;
	}
	set readAddress(value: number) {
		this._readAddress = value;
		Module.lv_trendchart_set_read_addr(this.lvObj, value, this._readAddrType);
	}
	get readAddrType(): addr_type_t {
		return this._readAddrType;
	}
	set readAddrType(value: addr_type_t) {
		this._readAddrType = value;
		Module.lv_trendchart_set_read_addr(this.lvObj, this._readAddress, value);
	}
	get clearAddress() {
		return this._clearAddress;
	}
	set clearAddress(value: number) {
		this._clearAddress = value;
		Module.lv_trendchart_set_clear_addr(this.lvObj, value, this._clearAddrType);
	}
	get clearAddrType(): addr_type_t {
		return this._clearAddrType;
	}
	set clearAddrType(value: addr_type_t) {
		this._clearAddrType = value;
		Module.lv_trendchart_set_clear_addr(this.lvObj, this._clearAddress, value);
	}
	get dataType(): data_type_t {
		return this._dataType;
	}
	set dataType(value: data_type_t) {
		this._dataType = value;
		Module.lv_trendchart_set_data_type(this.lvObj, value);
	}


	get samplingCount(): number {
		return this._samplingCount;
	}
	set samplingCount(value: number) {
		this._samplingCount = value;
		Module.lv_trendchart_set_sampling_count(this.lvObj, value);
	}

	get samplingPeriodS(): number {
		return this._samplingPeriodS;
	}
	set samplingPeriodS(value: number) {
		this._samplingPeriodS = value;
		Module.lv_trendchart_set_sampling_period_s(this.lvObj, value);
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
		Module.lv_trendchart_set_base_color(this.lvObj, lvColor);
		lvColor.delete();
	}



}

export class TrendChartAxis extends Axis {
	constructor(lvObj: LvObjT, isX: boolean) {
		super(lvObj, isX);
		if (isX) {
			this._showScale = Module.lv_trendchart_get_show_x_scale(lvObj);
			this._showCurve = Module.lv_trendchart_get_show_x_curve(lvObj);
			this._showLabel = Module.lv_trendchart_get_show_x_label(lvObj);
			this._min = Module.lv_trendchart_get_x_min(lvObj);
			this._max = Module.lv_trendchart_get_x_max(lvObj);
			this._majorTick = Module.lv_trendchart_get_x_major_tick(lvObj);
			this._minorTick = Module.lv_trendchart_get_x_minor_tick(lvObj);
			const sc = Module.lv_trendchart_get_x_scale_color(lvObj);
			this._scaleColor = LvColorToHexStr(sc);
			const gc = Module.lv_trendchart_get_x_gridline_color(lvObj);
			this._gridlineColor = LvColorToHexStr(gc);
			this._totalDigits = Module.lv_trendchart_get_x_total_digits(lvObj);
			this._decimalDigits = Module.lv_trendchart_get_x_decimal_digits(lvObj);
		} else {
			this._showScale = Module.lv_trendchart_get_show_y_scale(lvObj);
			this._showCurve = Module.lv_trendchart_get_show_y_curve(lvObj);
			this._showLabel = Module.lv_trendchart_get_show_y_label(lvObj);
			this._min = Module.lv_trendchart_get_y_min(lvObj);
			this._max = Module.lv_trendchart_get_y_max(lvObj);
			this._majorTick = Module.lv_trendchart_get_y_major_tick(lvObj);
			this._minorTick = Module.lv_trendchart_get_y_minor_tick(lvObj);
			const sc = Module.lv_trendchart_get_y_scale_color(lvObj);
			this._scaleColor = LvColorToHexStr(sc);
			const gc = Module.lv_trendchart_get_y_gridline_color(lvObj);
			this._gridlineColor = LvColorToHexStr(gc);
			this._totalDigits = Module.lv_trendchart_get_y_total_digits(lvObj);
			this._decimalDigits = Module.lv_trendchart_get_y_decimal_digits(lvObj);
		}
	}
	override get showScale(): boolean {
		return this._showScale;
	}
	override set showScale(value: boolean) {
		this._showScale = value;
		if (this.isX) {
			Module.lv_trendchart_set_show_x_scale(this.lvObj, value);
		} else {
			Module.lv_trendchart_set_show_y_scale(this.lvObj, value);
		}
	}

	override get showCurve(): boolean {
		return this._showCurve;
	}
	override set showCurve(value: boolean) {
		this._showCurve = value;
		if (!this.isX) {
			Module.lv_trendchart_set_show_x_curve(this.lvObj, value);
		} else {
			Module.lv_trendchart_set_show_y_curve(this.lvObj, value);
		}
	}

	override get showLabel(): boolean {
		return this._showLabel;
	}
	override set showLabel(value: boolean) {
		this._showLabel = value;
		if (this.isX) {
			Module.lv_trendchart_set_show_x_label(this.lvObj, value);
		} else {
			Module.lv_trendchart_set_show_y_label(this.lvObj, value);
		}
	}

	override get majorTick(): number {
		return this._majorTick;
	}
	override set majorTick(value: number) {
		this._majorTick = value;
		if (this.isX) {
			Module.lv_trendchart_set_x_major_tick(this.lvObj, value);
		} else {
			Module.lv_trendchart_set_y_major_tick(this.lvObj, value);
		}
	}

	override get minorTick(): number {
		return this._minorTick;
	}
	override set minorTick(value: number) {
		this._minorTick = value;
		if (this.isX) {
			Module.lv_trendchart_set_x_minor_tick(this.lvObj, value);
		} else {
			Module.lv_trendchart_set_y_minor_tick(this.lvObj, value);
		}
	}

	override get scaleColor(): string {
		return this._scaleColor;
	}
	override set scaleColor(value: string) {
		this._scaleColor = value;
		const x = hexStrToLvColor(value);
		if (this.isX) {
			Module.lv_trendchart_set_x_scale_color(this.lvObj, x);
		} else {
			Module.lv_trendchart_set_y_scale_color(this.lvObj, x);
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
			Module.lv_trendchart_set_x_gridline_color(this.lvObj, c);
		} else {
			Module.lv_trendchart_set_y_gridline_color(this.lvObj, c);
		}
		c.delete();

	}

	override get min(): number {
		return this._min;
	}
	override set min(value: number) {
		this._min = value;
		if (this.isX) {
			Module.lv_trendchart_set_x_min(this.lvObj, value);
		} else {
			Module.lv_trendchart_set_y_min(this.lvObj, value);
		}
	}

	override get max() {
		return this._max;
	}
	override set max(value: number) {
		this._max = value;
		if (this.isX) {
			Module.lv_trendchart_set_x_max(this.lvObj, value);
		} else {
			Module.lv_trendchart_set_y_max(this.lvObj, value);
		}
	}

	override get totalDigits(): number {
		return this._totalDigits;
	}
	override set totalDigits(value: number) {
		this._totalDigits = value;
		if (this.isX) {
			Module.lv_trendchart_set_x_total_digits(this.lvObj, value);
		} else {
			Module.lv_trendchart_set_y_total_digits(this.lvObj, value);
		}
	}

	override get decimalDigits(): number {
		return this._decimalDigits;
	}
	override set decimalDigits(value: number) {
		this._decimalDigits = value;
		if (this.isX) {
			Module.lv_trendchart_set_x_decimal_digits(this.lvObj, value);
		} else {
			Module.lv_trendchart_set_y_decimal_digits(this.lvObj, value);
		}
	}
}

export class TrendChartDisplay extends XYCurveDisplay {
	constructor(lvObj: LvObjT) {
		super(lvObj);
		this.xAxis = new TrendChartAxis(lvObj, true);
		this.yAxis = new TrendChartAxis(lvObj, false);
	}
}

export default class TrendChart extends HMiBase {
	constructor(geo: Geometry, screen?: LvObjT) {
		super("TrendChart", geo, screen);
		this._property = new TrendChartProperty(this._lvObj);
		this._display = new XYCurveDisplay(this._lvObj);
		const p = Module.lv_trendchart_get_permission(this._lvObj);
		this._permission = this.createAuthority(p, true);
	}
}
