import type { Geometry } from "../../packages/core/src/index.js";
import { BaseDisplay, BaseProperty } from "./PureData.js";
import HMiBase from "./HMiBase.js";
import {
	lv_text_align_t,
	lv_textmonitor_style_t,
	lv_timemonitor_time_style_t,
} from "../static/enums.js";
import { Module, genLvObjImageDec } from "../../lvgl/package/LvglModule.js";
import { hexStrToLvColor, LvColorToHexStr } from "../../lvgl/tools/color.js";

export class TimeMonitorProperty extends BaseProperty {
	override addrValid = false;
	_date = false;
	_week = false;
	_time = false;
	_dataStyle: lv_textmonitor_style_t =
		lv_textmonitor_style_t.LV_TEXT_MONITOR_STYLE_NONE;
	_timeStyle: lv_timemonitor_time_style_t =
		lv_timemonitor_time_style_t.LV_TIME_MONITOR_TIME_STYLE0;

	// implement abstract addr and addrType timeMonitor do not use addr
	get addr() {
		return 0;
	}
	set addr(value: number) { }
	get addrType() {
		return this._addrType;
	}
	set addrType(value: number) { }

	constructor(lvObj: LvObjT) {
		super(lvObj);
		this.addrValid = false;
		this._date = Module.lv_timemonitor_get_date(lvObj);
		this._time = Module.lv_timemonitor_get_time(lvObj);
		this._week = Module.lv_timemonitor_get_week(lvObj);
		this._dataStyle = Module.lv_timemonitor_get_date_style(lvObj);
		this._timeStyle = Module.lv_timemonitor_get_time_style(lvObj);
	}

	get date() {
		return this._date;
	}
	set date(value: boolean) {
		this._date = value;
		Module.lv_timemonitor_set_date(this.lvObj, value);
	}

	get time() {
		return this._time;
	}
	set time(value: boolean) {
		this._time = value;
		Module.lv_timemonitor_set_time(this.lvObj, value);
	}

	get week() {
		return this._week;
	}
	set week(value: boolean) {
		this._week = value;
		Module.lv_timemonitor_set_week(this.lvObj, value);
	}

	get dataStyle(): lv_textmonitor_style_t {
		return this._dataStyle;
	}
	set dataStyle(value: lv_textmonitor_style_t) {
		this._dataStyle = value;
		Module.lv_timemonitor_set_date_style(this.lvObj, value);
	}

	get timeStyle(): lv_timemonitor_time_style_t {
		return this._timeStyle;
	}
	set timeStyle(value: lv_timemonitor_time_style_t) {
		this._timeStyle = value;
		Module.lv_timemonitor_set_time_style(this.lvObj, value);
	}
}

export class TimeMonitorDisplay extends BaseDisplay {
	_align: lv_text_align_t = lv_text_align_t.LV_TEXT_ALIGN_CENTER;
	_textColor = "#000000";
	_bgColor = "#ffffff";
	_opa = 255;
	_bgImage = "";
	bgImageDsc: LvImgDscT | null = null;

	constructor(lvObj: LvObjT) {
		super(lvObj);
		this._align = Module.lv_timemonitor_get_align(lvObj);
		let c = Module.lv_timemonitor_get_text_color(lvObj);
		this._textColor = LvColorToHexStr(c);
		c = Module.lv_timemonitor_get_bg_color(lvObj);
		this._bgColor = LvColorToHexStr(c);
		this._opa = Module.lv_timemonitor_get_opa(lvObj);
	}

	get align(): lv_text_align_t {
		return this._align;
	}
	set align(value: lv_text_align_t) {
		this._align = value;
		Module.lv_timemonitor_set_align(this.lvObj, value);
	}

	get textColor(): string {
		return this._textColor;
	}
	set textColor(value: string) {
		this._textColor = value;
		const c = hexStrToLvColor(value);
		Module.lv_timemonitor_set_text_color(this.lvObj, c);
		c.delete();
	}

	get bgColor(): string {
		return this._bgColor;
	}
	set bgColor(value: string) {
		this._bgColor = value;
		const c = hexStrToLvColor(value);
		Module.lv_timemonitor_set_bg_color(this.lvObj, c);
		c.delete();
	}

	get opa(): number {
		return this._opa;
	}
	set opa(value: number) {
		this._opa = value;
		Module.lv_timemonitor_set_opa(this.lvObj, value);
	}

	get bgImage(): string {
		return this._bgImage;
	}
	set bgImage(value: string) {
		this._bgImage = value;
		if (!value || this.bgImageDsc) {
			Module.lv_image_buf_free(this.bgImageDsc);
			this.bgImageDsc = null;
			if (!value) {
				Module.lv_asciimonitor_set_bg_image(this.lvObj, null);
				return;
			}
		}
		genLvObjImageDec(value, this.lvObj, 3, true, (obj, image) => {
			Module.lv_timemonitor_set_bg_image(this.lvObj, image);
			this.bgImageDsc = image;
			this._bgImage = value;
		});
	}
}

export default class TimeMonitor extends HMiBase {
	constructor(geo: Geometry, screen?: LvObjT) {
		super("TimeMonitor", geo, screen);
		this._property = new TimeMonitorProperty(this._lvObj);
		this._display = new TimeMonitorDisplay(this._lvObj);
		const t = Module.lv_timemonitor_get_permission(this._lvObj);
		this._permission = this.createAuthority(t, false, true, false, false);
	}

	override updateImage(w: number, h: number): void {
		(this._display as TimeMonitorDisplay).bgImage = (
			this._display as TimeMonitorDisplay
		)._bgImage;
	}
}
