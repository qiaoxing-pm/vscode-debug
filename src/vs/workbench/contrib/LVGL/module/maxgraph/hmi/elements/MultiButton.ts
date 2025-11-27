import type { Geometry } from "../../packages/core/src/index.js";
import { BaseDisplay, BaseProperty } from "./PureData.js";
import HMiBase from "./HMiBase.js";
import { ButtonDisplay } from "./Button.js";
import { Module } from "../../lvgl/package/LvglModule.js";
import { data_type_t, addr_type_t, lv_multibutton_action_t } from "../static/enums.js";

export class MultiButtonProperty extends BaseProperty {

	style: LvButtonStyleT;
	_action: lv_multibutton_action_t = lv_multibutton_action_t.LV_MULTI_BUTTON_VALUE_INPUT;
	override _dataType: data_type_t = data_type_t.DATA_TYPE_INT16;
	_isSameAsAddr = false;
	_inputAddr = 0;
	_inputAddrType: addr_type_t = 0;
	_stateNum;
	constructor(lvObj: LvObjT) {
		super(lvObj);
		this.style = Module.lv_multibutton_get_style(lvObj);
		this._action = Module.lv_multibutton_get_action(lvObj);
		this._inputAddr = Module.lv_multibutton_get_addr(lvObj);
		this._inputAddrType = Module.lv_multibutton_get_addr_type(lvObj);
		this._stateNum = Module.lv_button_style_get_state_num(this.style);
		this._dataType = Module.lv_multibutton_get_data_type(lvObj);
	}

	get stateNum() {
		return this._stateNum;
	}
	set stateNum(value: number) {
		this._stateNum = value;
		Module.lv_button_style_set_state_num(this.style, value);
	}

	get addr() {
		return this._addr;
	}
	set addr(value: number) {
		this._addr = value;
		Module.lv_button_style_set_addr(this.style, this._addr, this._addrType);
	}
	get addrType(): addr_type_t {
		return this._addrType;
	}
	set addrType(value: addr_type_t) {
		this._addrType = value;
		Module.lv_button_style_set_addr(this.style, this._addr, value);
	}
	get isSameAsAddr() {
		return this._isSameAsAddr;
	}
	set isSameAsAddr(value: boolean) {
		this._isSameAsAddr = value;
		Module.lv_multibutton_set_addr(this.lvObj, this._inputAddr, this._inputAddrType);
	}
	get inputAddr() {
		return this._inputAddr;
	}
	set inputAddr(value: number) {
		this._inputAddr = value;
		Module.lv_multibutton_set_addr(this.lvObj, this._inputAddr, this._inputAddrType);
	}
	get inputAddrType(): addr_type_t {
		return this._inputAddrType;
	}
	set inputAddrType(value: addr_type_t) {
		this._inputAddrType = value;
		Module.lv_multibutton_set_addr(this.lvObj, this._inputAddr, value);
	}

	get action(): lv_multibutton_action_t {
		return this._action;
	}
	set action(value: lv_multibutton_action_t) {
		this._action = value;
		Module.lv_multibutton_set_action(this.lvObj, value);
	}

	get dataType(): data_type_t {
		return this._dataType;
	}
	set dataType(value: data_type_t) {
		this._dataType = value;
		Module.lv_multibutton_set_data_type(this.lvObj, value);
	}
}



export default class MultiButton extends HMiBase {
	constructor(geo: Geometry, screen?: LvObjT) {
		super("MultiButton", geo, screen);
		this._property = new MultiButtonProperty(this._lvObj);
		const style = Module.lv_multibutton_get_style(this._lvObj);
		this._display = new ButtonDisplay(this._lvObj, style);
		const t = Module.lv_multibutton_get_permission(this._lvObj);
		this._permission = this.createAuthority(t, true, true, true, true);
	}

	override updateImage(w: number, h: number): void {
		(this._display as ButtonDisplay)?.updateImage(w, h);
	}
}
