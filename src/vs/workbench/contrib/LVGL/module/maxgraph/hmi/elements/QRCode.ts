import type { Geometry } from "../../packages/core/src/index.js";
import { BaseDisplay, BaseProperty } from "./PureData.js";
import HMiBase from "./HMiBase.js";
import { Module } from "../../lvgl/package/LvglModule.js";
import { lv_qrdisplay_type_t } from "../static/enums.js";

export class QRCodeProperty extends BaseProperty {
	get addr(): number {
		return this._addr;
	}
	set addr(value: number) {
		this._addr = value;
		Module.lv_qrdisplay_set_addr(this.lvObj, this._addr, this._addrType);
	}

	get addrType(): number {
		return this._addrType;
	}
	set addrType(value: number) {
		this._addrType = value;
		Module.lv_qrdisplay_set_addr(this.lvObj, this._addr, value);
	}
}

export class QRCodeDisplay extends BaseDisplay {

	_url = "";
	_isByteSwapped = false;
	_stringLength = 25;
	_type: lv_qrdisplay_type_t = lv_qrdisplay_type_t.LV_QR_DISPLAY_TYPE_ASCII;

	constructor(lvObj: LvObjT) {
		super(lvObj);
		// this._url = Module.lv_qrdisplay_get_url(lvObj);
		this._type = Module.lv_qrdisplay_get_type(lvObj);
		this._isByteSwapped = Module.lv_qrdisplay_get_is_byte_swapped(lvObj);
		this._stringLength = Module.lv_qrdisplay_get_length(lvObj);
	}
	get url(): string {
		return this._url;
	}
	set url(val: string) {
		this._url = val;
		Module.lv_qrdisplay_set_url(this.lvObj, val);
	}

	get type() {
		return this._type;
	}
	set type(val: lv_qrdisplay_type_t) {
		this._type = val;
		Module.lv_qrdisplay_set_type(this.lvObj, val);
	}

	get isByteSwapped(): boolean {
		return this._isByteSwapped;
	}
	set isByteSwapped(val: boolean) {
		this._isByteSwapped = val;
		Module.lv_qrdisplay_set_is_byte_swapped(this.lvObj, val);
	}

	get stringLength(): number {
		return this._stringLength;
	}
	set stringLength(val: number) {
		this._stringLength = val;
		Module.lv_qrdisplay_set_length(this.lvObj, val);
	}

}


export default class QRCode extends HMiBase {
	constructor(geo: Geometry, screen?: LvObjT) {
		super("QRDisplay", geo, screen);
		this._property = new QRCodeProperty(this._lvObj);
		this._display = new QRCodeDisplay(this._lvObj);
		const t = Module.lv_qrdisplay_get_permission(this._lvObj);
		this._permission = this.createAuthority(t, true, false);
	}
}
