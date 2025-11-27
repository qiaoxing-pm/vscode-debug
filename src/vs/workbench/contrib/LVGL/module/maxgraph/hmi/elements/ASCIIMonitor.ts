import type { Geometry } from "../../packages/core/src/index.js";
import { BaseDisplay, BaseProperty } from "./PureData.js";
import HMiBase from "./HMiBase.js";
import { Module, genLvObjImageDec } from "../../lvgl/package/LvglModule.js";
import { lv_asciimonitor_type_t, lv_text_align_t, addr_type_t } from "../static/enums.js";
import { hexStrToLvColor, LvColorToHexStr } from "../../lvgl/tools/color.js";


export class ASCIIMonitorProperty extends BaseProperty {

	_offset = false;
	_offsetAddr = 0;
	_offsetAddrType: addr_type_t = 0;
	_input = false;
	_inputAddr = 0;
	_inputAddrType: addr_type_t = addr_type_t.ADDR_TYPE_LOCAL_BIT;
	_type: lv_asciimonitor_type_t = lv_asciimonitor_type_t.LV_ASCIIMONITOR_TYPE_ASCII;
	_isSameAsAddr = false;
	_passwd = false;
	_showInput = false;
	_showWatch = false;
	_byteSwap = false;

	constructor(lvObj: LvObjT) {
		super(lvObj);
		this._addr = Module.lv_asciimonitor_get_addr(lvObj);
		this._addrType = Module.lv_asciimonitor_get_addr_type(lvObj);
		this._offset = Module.lv_asciimonitor_get_offset(lvObj);
		this._offsetAddr = Module.lv_asciimonitor_get_offset_addr(lvObj);
		this._offsetAddrType = Module.lv_asciimonitor_get_offset_addr_type(lvObj);
		this._input = Module.lv_asciimonitor_get_input(lvObj);
		this._inputAddr = Module.lv_asciimonitor_get_input_addr(lvObj);
		this._inputAddrType = Module.lv_asciimonitor_get_input_addr_type(lvObj);
		this._type = Module.lv_asciimonitor_get_type(lvObj);
		this._passwd = Module.lv_asciimonitor_get_passwd(lvObj);
		this._showInput = Module.lv_asciimonitor_get_show_input(lvObj);
		this._showWatch = Module.lv_asciimonitor_get_show_watch(lvObj);
		this._byteSwap = Module.lv_asciimonitor_get_byte_swap(lvObj);
	}

	get addr() {
		return this._addr;
	}
	set addr(value: number) {
		this._addr = value;
		Module.lv_asciimonitor_set_addr(this.lvObj, this._addr, this._addrType);
	}
	get addrType(): addr_type_t {
		return this._addrType;
	}
	set addrType(value: addr_type_t) {
		this._addrType = value;
		Module.lv_asciimonitor_set_addr(this.lvObj, this._addr, value);
	}

	get type() {
		return this._type;
	}
	set type(value: lv_asciimonitor_type_t) {
		this._type = value;
		Module.lv_asciimonitor_set_type(this.lvObj, value);
	}

	get input() {
		return this._input;
	}
	set input(value: boolean) {
		this._input = value;
		Module.lv_asciimonitor_set_input(this.lvObj, value);
	}
	get inputAddr() {
		return this._inputAddr;
	}
	set inputAddr(value: number) {
		this._inputAddr = value;
		Module.lv_asciimonitor_set_input_addr(this.lvObj, value, this._inputAddrType);
	}

	get inputAddrType(): addr_type_t {
		return this._inputAddrType;
	}
	set inputAddrType(value: addr_type_t) {
		this._inputAddrType = value;
		Module.lv_asciimonitor_set_input_addr(this.lvObj, this._inputAddr, value);
	}
	get isSameAsAddr() {
		return this._isSameAsAddr;
	}
	set isSameAsAddr(value: boolean) {
		this._isSameAsAddr = value;
		if (value) {
			Module.lv_asciimonitor_set_input_addr(this.lvObj, this._addr, this._addrType);
		} else {
			Module.lv_asciimonitor_set_input_addr(this.lvObj, this._inputAddr, this._inputAddrType);
		}
	}

	get offset() {
		return this._offset;
	}
	set offset(value: boolean) {
		this._offset = value;
		Module.lv_asciimonitor_set_offset(this.lvObj, value);
	}
	get offsetAddr() {
		return this._offsetAddr;
	}
	set offsetAddr(value: number) {
		this._offsetAddr = value;
		Module.lv_asciimonitor_set_offset_addr(this.lvObj, value, this._offsetAddrType);
	}
	get offsetAddrType(): addr_type_t {
		return this._offsetAddrType;
	}
	set offsetAddrType(value: addr_type_t) {
		this._offsetAddrType = value;
		Module.lv_asciimonitor_set_offset_addr(this.lvObj, this._offsetAddr, value);
	}


	get passwd() {
		return this._passwd;
	}
	set passwd(value: boolean) {
		this._passwd = value;
		Module.lv_asciimonitor_set_passwd(this.lvObj, value);
	}

	get showInput() {
		return this._showInput;
	}
	set showInput(value: boolean) {
		this._showInput = value;
		Module.lv_asciimonitor_set_show_input(this.lvObj, value);
	}

	get showWatch() {
		return this._showWatch;
	}
	set showWatch(value: boolean) {
		this._showWatch = value;
		Module.lv_asciimonitor_set_show_watch(this.lvObj, value);
	}

	get byteSwap() {
		return this._byteSwap;
	}
	set byteSwap(value: boolean) {
		this._byteSwap = value;
		Module.lv_asciimonitor_set_byte_swap(this.lvObj, value);
	}

}

export class ASCIIMonitorDisplay extends BaseDisplay {
	_type: lv_asciimonitor_type_t = lv_asciimonitor_type_t.LV_ASCIIMONITOR_TYPE_ASCII;
	_align: lv_text_align_t = lv_text_align_t.LV_TEXT_ALIGN_LEFT;
	_bgColor = "#ffffff";
	_textColor = "#000000";
	_bgImage = "";
	bgImageDsc: LvImgDscT | null = null;
	_opa = 255;
	_length = 25;

	constructor(lvObj: LvObjT) {
		super(lvObj);
		this._type = Module.lv_asciimonitor_get_type(lvObj);
		this._align = Module.lv_asciimonitor_get_align(lvObj);
		const bgc = Module.lv_asciimonitor_get_bg_color(lvObj);
		this._bgColor = LvColorToHexStr(bgc);
		const tc = Module.lv_asciimonitor_get_text_color(lvObj);
		this._textColor = LvColorToHexStr(tc);
		this._length = Module.lv_asciimonitor_get_length(lvObj);
		this._opa = Module.lv_asciimonitor_get_opa(lvObj);
	}

	get type() {
		return this._type;
	}
	set type(value: lv_asciimonitor_type_t) {
		this._type = value;
	}

	get align(): lv_text_align_t {
		return this._align;
	}
	set align(value: lv_text_align_t) {
		this._align = value;
		Module.lv_asciimonitor_set_align(this.lvObj, value);
	}

	get bgColor(): string {
		return this._bgColor;
	}
	set bgColor(value: string) {
		this._bgColor = value;
		const c = hexStrToLvColor(value);
		Module.lv_asciimonitor_set_bg_color(this.lvObj, c);
		c.delete();
	}

	get textColor(): string {
		return this._textColor;
	}
	set textColor(value: string) {
		this._textColor = value;
		const c = hexStrToLvColor(value);
		Module.lv_asciimonitor_set_text_color(this.lvObj, c);
		c.delete();
	}

	get opa(): number {
		return this._opa;
	}
	set opa(value: number) {
		this._opa = value;
		Module.lv_asciimonitor_set_opa(this.lvObj, value);
	}

	get length(): number {
		return this._length;
	}
	set length(value: number) {
		this._length = value;
		Module.lv_asciimonitor_set_length(this.lvObj, value);
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
			Module.lv_asciimonitor_set_bg_image(this.lvObj, image);
			this.bgImageDsc = image;
			this._bgImage = value;
		});
	}

	updateImage(w: number, h: number): void {
		if (this._bgImage) {
			this.bgImageDsc && Module.lv_image_buf_free(this.bgImageDsc);
			this.bgImageDsc = null;
		}
		this.bgImage = this._bgImage;
	}
}

export default class ASCIIMonitor extends HMiBase {
	constructor(geo: Geometry, screen?: LvObjT) {
		super("ASCIIMonitor", geo, screen);
		this._property = new ASCIIMonitorProperty(this._lvObj);
		this._display = new ASCIIMonitorDisplay(this._lvObj);
		const t = Module.lv_asciimonitor_get_permission(this._lvObj);
		this._permission = this.createAuthority(t, true, true, false, true);
	}
}
