import type { Geometry } from "../../packages/core/src/index.js";
import { BaseProperty } from "./PureData.js";
import HMiBase from "./HMiBase.js";
import { ButtonDisplay } from "./Button.js";
import { Module } from "../../lvgl/package/LvglModule.js";
import { data_type_t } from "../static/enums.js";

export class LedButtonProperty extends BaseProperty {
	style: LvButtonStyleT;
	_watchDouble = true;
	_watchMulti = false;
	override _dataType: data_type_t = data_type_t.DATA_TYPE_INT16;
	_stateNum;
	_isSameAsAddr = false;

	get addr() {
		return this._addr;
	}
	set addr(value: number) {
		this._addr = value;
		Module.lv_button_style_set_addr(this.style, this._addr, this._addrType);
	}
	get addrType(): number {
		return this._addrType;
	}
	set addrType(value: number) {
		this._addrType = value;
		Module.lv_button_style_set_addr(this.style, this._addr, this._addrType);
	}
	constructor(lvObj: LvObjT) {
		super(lvObj);
		this.style = Module.lv_ledbutton_get_style(lvObj);
		Module.lv_button_style_set_watch(this.style, true);
		this._addr = Module.lv_button_style_get_addr(this.style);
		this._addrType = Module.lv_button_style_get_addr_type(this.style);
		this._dataType = Module.lv_button_style_get_data_type(this.style);
		this._stateNum = Module.lv_button_style_get_state_num(this.style);
		this._dataType = Module.lv_button_style_get_data_type(this.style);
		this._watchDouble = Module.lv_button_style_get_watch_double(this.style);
		this._watchMulti = Module.lv_button_style_get_watch_multi(this.style);
	}

	get stateNum() {
		return this._stateNum;
	}
	set stateNum(value: number) {
		this._stateNum = value;
		Module.lv_button_style_set_state_num(this.style, value);
	}

	get dataType(): data_type_t {
		return this._dataType;
	}
	set dataType(value: data_type_t) {
		this._dataType = value;
		Module.lv_button_style_set_data_type(this.style, value);
	}

	get watchDouble() {
		return this._watchDouble;
	}
	set watchDouble(value: boolean) {
		this._watchDouble = value;
		this._watchMulti = !value;
		Module.lv_button_style_set_watch_double(this.style, value);
	}
	get watchMulti() {
		return this._watchMulti;
	}
	set watchMulti(value: boolean) {
		this._watchMulti = value;
		this._watchDouble = !value;
		Module.lv_button_style_set_watch_multi(this.style, value);
	}
}

export default class LedButton extends HMiBase {
	constructor(geo: Geometry, screen?: LvObjT) {
		super("LedButton", geo, screen);
		this._property = new LedButtonProperty(this._lvObj);
		const t = Module.lv_ledbutton_get_permission(this._lvObj);
		const style = Module.lv_ledbutton_get_style(this._lvObj);
		this._display = new ButtonDisplay(this._lvObj, style);
		this._permission = this.createAuthority(t, true);
	}

	override updateImage(w: number, h: number): void {
		(this._display as ButtonDisplay)?.updateImage(w, h);
	}
}
