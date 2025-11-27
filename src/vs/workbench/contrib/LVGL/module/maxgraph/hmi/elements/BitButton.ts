import type { Geometry } from "../../packages/core/src/index.js";
import { BaseDisplay, BaseProperty } from "./PureData.js";
import HMiBase from "./HMiBase.js";
import { ButtonDisplay } from "./Button.js";
import { Module } from "../../lvgl/package/LvglModule.js";
import { addr_type_t, lv_bitbutton_action_t } from "../static/enums.js";

export class BitButtonProperty extends BaseProperty {
	style: LvButtonStyleT;
	_isSameAddr = false;
	_watch = false;
	_watchDouble = true;
	_watchAddr = 0;
	_watchAddrType: addr_type_t = 0;
	_operation: lv_bitbutton_action_t = lv_bitbutton_action_t.LV_BIT_BUTTION_SET_BIT;

	constructor(lvObj: LvObjT) {
		super(lvObj);
		const op = Module.lv_bitbutton_get_operate_action(lvObj);
		this._operation = op;
		this.style = Module.lv_bitbutton_get_style(lvObj);
		this._watchDouble = Module.lv_button_style_get_watch_double(this.style);
		this._watch = Module.lv_button_style_get_watch(this.style);
		this._addr = Module.lv_bitbutton_get_addr(lvObj);
		this._addrType = Module.lv_bitbutton_get_addr_type(lvObj);
	}
	get isSameAddr() {
		return this._isSameAddr;
	}
	set isSameAddr(value: boolean) {
		this._isSameAddr = value;
		Module.lv_button_style_set_addr(this.style, this._addr, this._addrType);
	}
	get watchAddr() {
		return this._watchAddr;
	}
	set watchAddr(value: number) {
		this._watchAddr = value;
		Module.lv_button_style_set_addr(this.style, this._watchAddr, this._watchAddrType);
	}
	get watchAddrType(): addr_type_t {
		return this._watchAddrType;
	}
	set watchAddrType(value: addr_type_t) {
		this._watchAddrType = value;
		Module.lv_button_style_set_addr(this.style, this._watchAddr, this._watchAddrType);
	}
	get watch() {
		return this._watch;
	}
	set watch(value: boolean) {
		this._watch = value;
		Module.lv_button_style_set_watch(this.style, value);
	}
	get watchDouble() {
		return this._watchDouble;
	}
	set watchDouble(value: boolean) {
		this._watchDouble = value;
		Module.lv_button_style_set_watch_double(this.style, value);
	}
	get addr() {
		return this._addr;
	}
	set addr(val: number) {
		this._addr = val;
		Module.lv_bitbutton_set_addr(this.lvObj, this._addr, this._addrType);
	}

	get addrType(): addr_type_t {
		return this._addrType;
	}
	set addrType(val: addr_type_t) {
		this._addrType = val;
		Module.lv_bitbutton_set_addr(this.lvObj, this._addr, val);
	}

	get operation(): lv_bitbutton_action_t {
		return this._operation;
	}
	set operation(val: lv_bitbutton_action_t) {
		this._operation = val;
		Module.lv_bitbutton_set_operate_action(this.lvObj, val);
	}

}

export default class BitButton extends HMiBase {
	constructor(geo: Geometry, screen?: LvObjT) {
		super("BitButton", geo, screen);
		const style = Module.lv_bitbutton_get_style(this._lvObj);
		this._property = new BitButtonProperty(this._lvObj);
		this._display = new ButtonDisplay(this._lvObj, style);
		const p = Module.lv_bitbutton_get_permission(this._lvObj);
		this._permission = this.createAuthority(p, true, true, true, true);
	}

	override updateImage(w: number, h: number): void {
		(this._display as ButtonDisplay)?.updateImage(w, h);
	}
}
