import type { Geometry } from "../../packages/core/src/index.js";
import { BaseDisplay } from "./PureData.js";
import HMiBase from "./HMiBase.js";
import { Module } from "../../lvgl/package/LvglModule.js";
import type { lv_textmonitor_style_t, lv_text_decor_t } from "../static/enums.js";
import { hexStrToLvColor, LvColorToHexStr } from "../../lvgl/tools/color.js";

export class TextMonitorDisplay extends BaseDisplay {
	_text = "";
	_bgColor = "#ffffff";
	_opa = 255;
	_textColor = "#000000";
	_gradColor = "#ffffff";
	_style: lv_textmonitor_style_t = 0;
	_decor: lv_text_decor_t = 0;
	_letterSpace: number = 0;

	constructor(lvObj: LvObjT) {
		super(lvObj);
		let c = Module.lv_textmonitor_get_text_color(lvObj);
		this._textColor = LvColorToHexStr(c);
		c = Module.lv_textmonitor_get_grad_color(lvObj);
		this._gradColor = LvColorToHexStr(c);
		this._opa = Module.lv_textmonitor_get_opa(lvObj);
		this._style = Module.lv_textmonitor_get_style(lvObj);
		this._decor = Module.lv_textmonitor_get_decor(lvObj);
		this._letterSpace = Module.lv_textmonitor_get_letter_space(lvObj);
		c = Module.lv_textmonitor_get_bg_color(lvObj);
		this._bgColor = LvColorToHexStr(c);
	}

	get text(): string {
		return this._text;
	}
	set text(value: string) {
		this._text = value;
		Module.lv_textmonitor_set_text(this.lvObj, value);
	}

	get bgColor(): string {
		return this._bgColor;
	}
	set bgColor(value: string) {
		this._bgColor = value;
		const c = hexStrToLvColor(value);
		Module.lv_textmonitor_set_bg_color(this.lvObj, c);
		c.delete();
	}

	get opa(): number {
		return this._opa;
	}
	set opa(value: number) {
		this._opa = value;
		Module.lv_textmonitor_set_opa(this.lvObj, value);
	}

	get textColor(): string {
		return this._textColor;
	}
	set textColor(value: string) {
		this._textColor = value;
		const c = hexStrToLvColor(value);
		Module.lv_textmonitor_set_text_color(this.lvObj, c);
		c.delete();
	}

	get gradColor(): string {
		return this._gradColor;
	}
	set gradColor(value: string) {
		this._gradColor = value;
		const c = hexStrToLvColor(value);
		Module.lv_textmonitor_set_grad_color(this.lvObj, c);
		c.delete();
	}

	get style(): lv_textmonitor_style_t {
		return this._style;
	}
	set style(value: lv_textmonitor_style_t) {
		this._style = value;
		Module.lv_textmonitor_set_style(this.lvObj, value);
	}

	get decor(): lv_text_decor_t {
		return this._decor;
	}
	set decor(value: lv_text_decor_t) {
		this._decor = value;
		Module.lv_textmonitor_set_decor(this.lvObj, value);
	}

	get letterSpace(): number {
		return this._letterSpace;
	}
	set letterSpace(value: number) {
		this._letterSpace = value;
		Module.lv_textmonitor_set_letter_space(this.lvObj, value);
	}
}
export default class TextMonitor extends HMiBase {
	constructor(geo: Geometry, screen?: LvObjT) {
		super("TextMonitor", geo, screen);
		this._display = new TextMonitorDisplay(this._lvObj);
		const t = Module.lv_textmonitor_get_permission(this._lvObj);
		this._permission = this.createAuthority(t, true);
	}
}
