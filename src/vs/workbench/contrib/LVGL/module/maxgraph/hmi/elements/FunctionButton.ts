import type { Geometry } from "../../packages/core/src/index.js";
import { BaseProperty } from "./PureData.js";
import HMiBase from "./HMiBase.js";
import { ButtonDisplay } from "./Button.js";
import { Module } from "../../lvgl/package/LvglModule.js";

export class FunctionButtonProperty extends BaseProperty {
	get addr() {
		return this._addr;
	}
	set addr(value: number) {
		this._addr = value;
	}
	get addrType(): number {
		return this._addrType;
	}
	set addrType(value: number) {
		this._addrType = value;
	}

	_operateType = 0;
	_operateAction = 0;
	_press = false;

	constructor(lvObj: LvObjT) {
		super(lvObj);
		this._operateType = Module.lv_funcbutton_get_operate_type(lvObj);
		this._operateAction = Module.lv_funcbutton_get_operate_action(lvObj);
		this._press = Module.lv_funcbutton_get_press(lvObj);
		this.addrValid = false;
	}
	get operateType(): number {
		return this._operateType;
	}
	set operateType(value: number) {
		this._operateType = value;
		Module.lv_funcbutton_set_operate_type(this.lvObj, value);
	}
	get operateAction(): number {
		return this._operateAction;
	}
	set operateAction(value: number) {
		this._operateAction = value;
		Module.lv_funcbutton_set_operate_action(this.lvObj, value);
	}
	get press(): boolean {
		return this._press;
	}
	set press(value: boolean) {
		this._press = value;
		Module.lv_funcbutton_set_press(this.lvObj, value);
	}
}

export default class FunctionButton extends HMiBase {
	constructor(geo: Geometry, screen?: LvObjT) {
		super("FunctionButton", geo, screen);
		this._property = new FunctionButtonProperty(this._lvObj);
		const style = Module.lv_funcbutton_get_style(this._lvObj);
		this._display = new ButtonDisplay(this._lvObj, style);
		const t = Module.lv_funcbutton_get_permission(this._lvObj);
		this._permission = this.createAuthority(t, true, true, true, true);
	}
}
