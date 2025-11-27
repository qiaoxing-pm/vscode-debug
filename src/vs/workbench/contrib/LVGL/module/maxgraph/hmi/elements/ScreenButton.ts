import type { Geometry } from "../../packages/core/src/index.js";
import HMiBase from "./HMiBase.js";
import { BaseProperty } from "./PureData.js";
import { ButtonDisplay } from "./Button.js";
import { Module } from "../../lvgl/package/LvglModule.js";
import { addr_type_t, lv_screenbutton_action_t } from "../static/enums.js";

export class ScreenButtonProperty extends BaseProperty {
	get addr() {
		return this._addr;
	}
	set addr(val: number) {
		this._addr = val;
	}
	get addrType(): addr_type_t {
		return this._addrType;
	}
	set addrType(val: addr_type_t) {
		this._addrType = val;
	}
	style: LvButtonStyleT;
	_isSameAddr = false;
	_watch = false;
	_watchDouble = true;
	_watchAddr = 0;
	_watchAddrType: addr_type_t = 0;

	screen = "";
	_press = false;
	_operation: lv_screenbutton_action_t =
		lv_screenbutton_action_t.LV_SCREENBUTTON_ACTION_NONE;
	_login = false;
	_changeUserLevel = false;
	_userLevel = 0;

	constructor(lvObj: LvObjT) {
		super(lvObj);
		this._operation = Module.lv_screenbutton_get_operate_action(lvObj);
		this.style = Module.lv_screenbutton_get_style(lvObj);
		this.addrValid = false;
		this._watch = Module.lv_button_style_get_watch(this.style);
		this._watchDouble = Module.lv_button_style_get_watch_double(this.style);
		this._watchAddr = Module.lv_button_style_get_addr(this.style);
		this._watchAddrType = Module.lv_button_style_get_addr_type(this.style);
		this._press = Module.lv_screenbutton_get_press(this.lvObj);
		this._operation = Module.lv_screenbutton_get_operate_action(this.lvObj);
		this._login = Module.lv_screenbutton_get_login(this.lvObj);
		this._changeUserLevel = Module.lv_screenbutton_get_change_user_level(
			this.lvObj
		);
		this._userLevel = Module.lv_screenbutton_get_user_level(this.lvObj);
	}

	get press() {
		return this._press;
	}
	set press(value: boolean) {
		this._press = value;
		Module.lv_screenbutton_get_press(this.lvObj);
	}
	get operation() {
		return this._operation;
	}
	set operation(value: lv_screenbutton_action_t) {
		this._operation = value;
		Module.lv_screenbutton_set_operate_action(this.lvObj, value);
	}
	get login() {
		return this._login;
	}
	set login(value: boolean) {
		this._login = value;
		Module.lv_screenbutton_set_login(this.lvObj, value);
	}
	get changeUserLevel() {
		return this._changeUserLevel;
	}
	set changeUserLevel(value: boolean) {
		this._changeUserLevel = value;
		Module.lv_screenbutton_set_change_user_level(this.lvObj, value);
	}
	get userLevel() {
		return this._userLevel;
	}
	set userLevel(value: number) {
		this._userLevel = value;
		Module.lv_screenbutton_set_user_level(this.lvObj, value);
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
		Module.lv_button_style_set_addr(
			this.style,
			this._watchAddr,
			this._watchAddrType
		);
	}
	get watchAddrType(): addr_type_t {
		return this._watchAddrType;
	}
	set watchAddrType(value: addr_type_t) {
		this._watchAddrType = value;
		Module.lv_button_style_set_addr(
			this.style,
			this._watchAddr,
			this._watchAddrType
		);
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

	override pickAttributes(): { [key: string]: any } {
		return {
			...super.pickAttributes(),
			screen: this.screen,
		};
	}
}

export default class ScreenButton extends HMiBase {
	constructor(geo: Geometry, screen?: LvObjT) {
		super("ScreenButton", geo, screen);
		this._property = new ScreenButtonProperty(this._lvObj);
		const style = Module.lv_screenbutton_get_style(this._lvObj);
		this._display = new ButtonDisplay(this._lvObj, style);
		const t = Module.lv_screenbutton_get_permission(this._lvObj);
		this._permission = this.createAuthority(t, true, true, true, true);
	}

	override updateImage(w: number, h: number): void {
		(this._display as ButtonDisplay)?.updateImage(w, h);
	}
}
