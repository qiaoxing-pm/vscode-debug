import { Module } from "../../lvgl/package/LvglModule.js";
import { hexStrToLvColor, LvColorToHexStr } from "../../lvgl/tools/color.js";

export class Axis {
	lvObj: LvObjT;
	isX: boolean;
	_showScale = true;
	_showCurve = true;
	_showLabel = true;

	_majorTick = 10;
	_minorTick = 5;

	_scaleColor = "#000000";
	_gridlineColor = "#eeeeee";

	_min = 0;
	_max = 1000;

	_totalDigits = 4;
	_decimalDigits = 0;

	constructor(lvObj: LvObjT, isX: boolean) {
		this.lvObj = lvObj;
		this.isX = isX;
		if (isX) {
			this._showScale = Module.lv_xycurve_get_show_x_scale(lvObj);
			this._showCurve = Module.lv_xycurve_get_show_x_curve(lvObj);
			this._showLabel = Module.lv_xycurve_get_show_x_label(lvObj);
			this._min = Module.lv_xycurve_get_x_min(lvObj);
			this._max = Module.lv_xycurve_get_x_max(lvObj);
			this._majorTick = Module.lv_xycurve_get_x_major_tick(lvObj);
			this._minorTick = Module.lv_xycurve_get_x_minor_tick(lvObj);
			const sc = Module.lv_xycurve_get_x_scale_color(lvObj);
			this._scaleColor = LvColorToHexStr(sc);
			const gc = Module.lv_xycurve_get_x_gridline_color(lvObj);
			this._gridlineColor = LvColorToHexStr(gc);
			this._totalDigits = Module.lv_xycurve_get_x_total_digits(lvObj);
			this._decimalDigits = Module.lv_xycurve_get_x_decimal_digits(lvObj);
		} else {
			this._showScale = Module.lv_xycurve_get_show_y_scale(lvObj);
			this._showCurve = Module.lv_xycurve_get_show_y_curve(lvObj);
			this._showLabel = Module.lv_xycurve_get_show_y_label(lvObj);
			this._min = Module.lv_xycurve_get_y_min(lvObj);
			this._max = Module.lv_xycurve_get_y_max(lvObj);
			this._majorTick = Module.lv_xycurve_get_y_major_tick(lvObj);
			this._minorTick = Module.lv_xycurve_get_y_minor_tick(lvObj);
			const sc = Module.lv_xycurve_get_y_scale_color(lvObj);
			this._scaleColor = LvColorToHexStr(sc);
			const gc = Module.lv_xycurve_get_y_gridline_color(lvObj);
			this._gridlineColor = LvColorToHexStr(gc);
			this._totalDigits = Module.lv_xycurve_get_y_total_digits(lvObj);
			this._decimalDigits = Module.lv_xycurve_get_y_decimal_digits(lvObj);
		}
	}

	get showScale(): boolean {
		return this._showScale;
	}
	set showScale(value: boolean) {
		this._showScale = value;
		if (this.isX) {
			Module.lv_xycurve_set_show_x_scale(this.lvObj, value);
		} else {
			Module.lv_xycurve_set_show_y_scale(this.lvObj, value);
		}
	}

	get showCurve(): boolean {
		return this._showCurve;
	}
	set showCurve(value: boolean) {
		this._showCurve = value;
		if (!this.isX) {
			Module.lv_xycurve_set_show_x_curve(this.lvObj, value);
		} else {
			Module.lv_xycurve_set_show_y_curve(this.lvObj, value);
		}
	}

	get showLabel(): boolean {
		return this._showLabel;
	}
	set showLabel(value: boolean) {
		this._showLabel = value;
		if (this.isX) {
			Module.lv_xycurve_set_show_x_label(this.lvObj, value);
		} else {
			Module.lv_xycurve_set_show_y_label(this.lvObj, value);
		}
	}

	get majorTick(): number {
		return this._majorTick;
	}
	set majorTick(value: number) {
		this._majorTick = value;
		if (this.isX) {
			Module.lv_xycurve_set_x_major_tick(this.lvObj, value);
		} else {
			Module.lv_xycurve_set_y_major_tick(this.lvObj, value);
		}
	}

	get minorTick(): number {
		return this._minorTick;
	}
	set minorTick(value: number) {
		this._minorTick = value;
		if (this.isX) {
			Module.lv_xycurve_set_x_minor_tick(this.lvObj, value);
		} else {
			Module.lv_xycurve_set_y_minor_tick(this.lvObj, value);
		}
	}

	get scaleColor(): string {
		return this._scaleColor;
	}
	set scaleColor(value: string) {
		this._scaleColor = value;
		const x = hexStrToLvColor(value);
		if (this.isX) {
			Module.lv_xycurve_set_x_scale_color(this.lvObj, x);
		} else {
			Module.lv_xycurve_set_y_scale_color(this.lvObj, x);
		}
		x.delete();
	}

	get gridlineColor(): string {
		return this._gridlineColor;
	}
	set gridlineColor(value: string) {
		this._gridlineColor = value;
		const c = hexStrToLvColor(value);
		if (this.isX) {
			Module.lv_xycurve_set_x_gridline_color(this.lvObj, c);
		} else {
			Module.lv_xycurve_set_y_gridline_color(this.lvObj, c);
		}
		c.delete();

	}

	get min(): number {
		return this._min;
	}
	set min(value: number) {
		this._min = value;
		if (this.isX) {
			Module.lv_xycurve_set_x_min(this.lvObj, value);
		} else {
			Module.lv_xycurve_set_y_min(this.lvObj, value);
		}
	}

	get max() {
		return this._max;
	}
	set max(value: number) {
		this._max = value;
		if (this.isX) {
			Module.lv_xycurve_set_x_max(this.lvObj, value);
		} else {
			Module.lv_xycurve_set_y_max(this.lvObj, value);
		}
	}

	get totalDigits(): number {
		return this._totalDigits;
	}
	set totalDigits(value: number) {
		this._totalDigits = value;
		if (this.isX) {
			Module.lv_xycurve_set_x_total_digits(this.lvObj, value);
		} else {
			Module.lv_xycurve_set_y_total_digits(this.lvObj, value);
		}
	}

	get decimalDigits(): number {
		return this._decimalDigits;
	}
	set decimalDigits(value: number) {
		this._decimalDigits = value;
		if (this.isX) {
			Module.lv_xycurve_set_x_decimal_digits(this.lvObj, value);
		} else {
			Module.lv_xycurve_set_y_decimal_digits(this.lvObj, value);
		}
	}

	pickAttributes(): Object {
		return {
			isX: this.isX,
			showScale: this.showScale,
			showCurve: this.showCurve,
			showLabel: this.showLabel,
			majorTick: this.majorTick,
			minorTick: this.minorTick,
			scaleColor: this.scaleColor,
			gridlineColor: this.gridlineColor,
			min: this.min,
			max: this.max,
			totalDigits: this.totalDigits,
			decimalDigits: this.decimalDigits,
		}
	}
}
