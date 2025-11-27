import type { Geometry } from "../../packages/core/src/index.js";
import { BaseDisplay, BaseProperty } from "./PureData.js";
import HMiBase from "./HMiBase.js";
import { Module, genLvObjImageDec } from "../../lvgl/package/LvglModule.js";
import {
	lv_text_align_t,
	addr_type_t,
	data_type_t,
	lv_nummonitor_type_t,
} from "../static/enums.js";
import { hexStrToLvColor, LvColorToHexStr } from "../../lvgl/tools/color.js";

export class NumMonitorProperty extends BaseProperty {
	isConst = true;
	override _dataType: data_type_t = data_type_t.DATA_TYPE_INT16;
	_inputType: lv_nummonitor_type_t =
		lv_nummonitor_type_t.LV_NUMMONITOR_TYPE_VALUE;
	_inputAddr = 0;
	_inputAddrType: addr_type_t = 0;
	_offset = false;
	_offsetAddr = 0;
	_offsetAddrType: addr_type_t = 0;
	_input = false;
	_showInput = false;
	_showWatch = false;
	_passwd = false;
	_scale = false;
	_scaleGain = 1;
	_scaleOffset = 0;
	_inputMin;
	_inputMax;
	_inputMinAddr = 0;
	_inputMinAddrType: addr_type_t = 0;
	_inputMaxAddr = 0;
	_inputMaxAddrType: addr_type_t = 0;
	_isSameAsAddr = false;

	constructor(lvObj: LvObjT) {
		super(lvObj);
		this._addr = Module.lv_nummonitor_get_addr(lvObj);
		this._addrType = Module.lv_nummonitor_get_addr_type(lvObj);
		this._dataType = Module.lv_nummonitor_get_data_type(lvObj);
		this._inputType = Module.lv_nummonitor_get_input_type(lvObj);
		this._inputAddr = Module.lv_nummonitor_get_input_addr(lvObj);
		this._inputAddrType = Module.lv_nummonitor_get_input_addr_type(lvObj);

		this._offset = Module.lv_nummonitor_get_offset(lvObj);
		this._offsetAddr = Module.lv_nummonitor_get_offset_addr(lvObj);
		this._offsetAddrType = Module.lv_nummonitor_get_offset_addr_type(lvObj);

		this._input = Module.lv_nummonitor_get_input(lvObj);
		this._showInput = Module.lv_nummonitor_get_show_input(lvObj);
		this._showWatch = Module.lv_nummonitor_get_show_watch(lvObj);
		this._passwd = Module.lv_nummonitor_get_passwd(lvObj);
		this._scale = Module.lv_nummonitor_get_scale(lvObj);
		this._scaleGain = Module.lv_nummonitor_get_scale_gain(lvObj);
		this._scaleOffset = Module.lv_nummonitor_get_scale_offset(lvObj);

		this._inputMin = Module.lv_nummonitor_get_input_min(lvObj);
		this._inputMax = Module.lv_nummonitor_get_input_max(lvObj);
		this._inputMinAddr = Module.lv_nummonitor_get_input_min_addr(lvObj);
		this._inputMinAddrType =
			Module.lv_nummonitor_get_input_min_addr_type(lvObj);
		this._inputMaxAddr = Module.lv_nummonitor_get_input_max_addr(lvObj);
		this._inputMaxAddrType =
			Module.lv_nummonitor_get_input_max_addr_type(lvObj);
	}
	get inputType() {
		return this._inputType;
	}
	set inputType(value: lv_nummonitor_type_t) {
		this._inputType = value;
		Module.lv_nummonitor_set_input_type(this.lvObj, value);
	}
	get isSameAsAddr() {
		return this._isSameAsAddr;
	}
	set isSameAsAddr(value: boolean) {
		this._isSameAsAddr = value;
		if (value) {
			Module.lv_nummonitor_set_input_addr(
				this.lvObj,
				this._addr,
				this._addrType
			);
		} else {
			Module.lv_nummonitor_set_input_addr(
				this.lvObj,
				this._inputAddr,
				this._inputAddrType
			);
		}
	}

	get inputMin() {
		return this._inputMin;
	}
	set inputMin(value: number) {
		this._inputMin = value;
		Module.lv_nummonitor_set_input_min(this.lvObj, value);
	}
	get inputMax() {
		return this._inputMax;
	}
	set inputMax(value: number) {
		this._inputMax = value;
		Module.lv_nummonitor_set_input_max(this.lvObj, value);
	}
	get inputMinAddr() {
		return this._inputMinAddr;
	}
	set inputMinAddr(value: number) {
		this._inputMinAddr = value;
		Module.lv_nummonitor_set_input_min_addr(
			this.lvObj,
			value,
			this._inputMinAddrType
		);
	}
	get inputMinAddrType() {
		return this._inputMinAddrType;
	}
	set inputMinAddrType(value: addr_type_t) {
		this._inputMinAddrType = value;
		Module.lv_nummonitor_set_input_min_addr(
			this.lvObj,
			this._inputMinAddr,
			value
		);
	}
	get inputMaxAddr() {
		return this._inputMaxAddr;
	}
	set inputMaxAddr(value: number) {
		this._inputMaxAddr = value;
		Module.lv_nummonitor_set_input_max_addr(
			this.lvObj,
			value,
			this._inputMaxAddrType
		);
	}
	get inputMaxAddrType() {
		return this._inputMaxAddrType;
	}
	set inputMaxAddrType(value: addr_type_t) {
		this._inputMaxAddrType = value;
		Module.lv_nummonitor_set_input_max_addr(
			this.lvObj,
			this._inputMaxAddr,
			value
		);
	}

	get dataType() {
		return this._dataType;
	}
	set dataType(value: data_type_t) {
		this._dataType = value;
		Module.lv_nummonitor_set_data_type(this.lvObj, value);
	}

	get inputAddr() {
		return this._inputAddr;
	}
	set inputAddr(value: number) {
		this._inputAddr = value;
		Module.lv_nummonitor_set_input_addr(this.lvObj, value, this._inputAddrType);
	}

	get inputAddrType() {
		return this._inputAddrType;
	}
	set inputAddrType(value: addr_type_t) {
		this._inputAddrType = value;
		Module.lv_nummonitor_set_input_addr(this.lvObj, this._inputAddr, value);
	}

	get addr() {
		return this._addr;
	}
	set addr(value: number) {
		this._addr = value;
		Module.lv_nummonitor_set_addr(this.lvObj, value, this._addrType);
	}

	get addrType() {
		return this._addrType;
	}
	set addrType(value: addr_type_t) {
		this._addrType = value;
		Module.lv_nummonitor_set_addr(this.lvObj, this._addr, value);
	}

	get offset() {
		return this._offset;
	}
	set offset(value: boolean) {
		this._offset = value;
		Module.lv_nummonitor_set_offset(this.lvObj, value);
	}
	get offsetAddr() {
		return this._offsetAddr;
	}
	set offsetAddr(value: number) {
		this._offsetAddr = value;
		Module.lv_nummonitor_set_offset_addr(
			this.lvObj,
			value,
			this._offsetAddrType
		);
	}
	get offsetAddrType() {
		return this._offsetAddrType;
	}
	set offsetAddrType(value: addr_type_t) {
		this._offsetAddrType = value;
		Module.lv_nummonitor_set_offset_addr(this.lvObj, this._offsetAddr, value);
	}

	get input() {
		return this._input;
	}
	set input(value: boolean) {
		this._input = value;
		Module.lv_nummonitor_set_input(this.lvObj, value);
	}

	get showInput() {
		return this._showInput;
	}
	set showInput(value: boolean) {
		this._showInput = value;
		Module.lv_nummonitor_set_show_input(this.lvObj, value);
	}

	get showWatch() {
		return this._showWatch;
	}
	set showWatch(value: boolean) {
		this._showWatch = value;
		Module.lv_nummonitor_set_show_watch(this.lvObj, value);
	}

	get passwd() {
		return this._passwd;
	}
	set passwd(value: boolean) {
		this._passwd = value;
		Module.lv_nummonitor_set_passwd(this.lvObj, value);
	}

	get scale() {
		return this._scale;
	}
	set scale(value: boolean) {
		this._scale = value;
		Module.lv_nummonitor_set_scale(this.lvObj, value);
	}

	get scaleGain() {
		return this._scaleGain;
	}
	set scaleGain(value: number) {
		this._scaleGain = value;
		Module.lv_nummonitor_set_scale_gain(this.lvObj, value);
	}

	get scaleOffset() {
		return this._scaleOffset;
	}
	set scaleOffset(value: number) {
		this._scaleOffset = value;
		Module.lv_nummonitor_set_scale_offset(this.lvObj, value);
	}

	override pickAttributes(): { [key: string]: any } {
		return {
			...super.pickAttributes(),
			isConst: this.isConst,
		};
	}
}

export class NumMonitorDisplay extends BaseDisplay {
	_align: lv_text_align_t = lv_text_align_t.LV_TEXT_ALIGN_CENTER;
	_showType: lv_nummonitor_type_t =
		lv_nummonitor_type_t.LV_NUMMONITOR_TYPE_VALUE;
	_textColor = "#000000";
	_bgColor = "#ffffff";
	_opa = 255;
	_totalDigits: number = 5;
	_decimals = 0;
	_bgImage = "";
	bgImageDsc: LvImgDscT | null = null;
	_showRange = false;
	_showMin = -32768;
	_showMax = 32767;
	_showMinAddr = 0;
	_showMinAddrType: addr_type_t = 0;
	_showMaxAddr = 0;
	_showMaxAddrType: addr_type_t = 0;

	constructor(lvObj: LvObjT) {
		super(lvObj);
		this._align = Module.lv_nummonitor_get_align(lvObj);
		this._showType = Module.lv_nummonitor_get_input_type(lvObj);
		let color = Module.lv_nummonitor_get_text_color(lvObj);
		this._textColor = LvColorToHexStr(color);
		color = Module.lv_nummonitor_get_bg_color(lvObj);
		this._bgColor = LvColorToHexStr(color);
		this._opa = Module.lv_nummonitor_get_opa(lvObj);
		this._totalDigits = Module.lv_nummonitor_get_total_digits(lvObj);
		this._decimals = Module.lv_nummonitor_get_decimal_digits(lvObj);
		this._showMin = Module.lv_nummonitor_get_show_min(lvObj);
		this._showMax = Module.lv_nummonitor_get_show_max(lvObj);
		this._showRange = Module.lv_nummonitor_get_show_range(lvObj);
		this._showMinAddr = Module.lv_nummonitor_get_input_min_addr(lvObj);
		this._showMinAddrType = Module.lv_nummonitor_get_input_min_addr_type(lvObj);
		this._showMaxAddr = Module.lv_nummonitor_get_input_max_addr(lvObj);
		this._showMaxAddrType = Module.lv_nummonitor_get_input_max_addr_type(lvObj);
	}

	get showRange(): boolean {
		return this._showRange;
	}
	set showRange(value: boolean) {
		this._showRange = value;
		Module.lv_nummonitor_set_show_range(this.lvObj, value);
	}
	get showType() {
		return this._showType;
	}
	set showType(value: lv_nummonitor_type_t) {
		this._showType = value;
	}
	get align(): lv_text_align_t {
		return this._align;
	}
	set align(value: lv_text_align_t) {
		this._align = value;
		Module.lv_nummonitor_set_align(this.lvObj, value);
	}
	get textColor(): string {
		return this._textColor;
	}
	set textColor(value: string) {
		this._textColor = value;
		const c = hexStrToLvColor(value);
		Module.lv_nummonitor_set_text_color(this.lvObj, c);
		c.delete();
	}
	get bgColor(): string {
		return this._bgColor;
	}
	set bgColor(value: string) {
		this._bgColor = value;
		const c = hexStrToLvColor(value);
		Module.lv_nummonitor_set_bg_color(this.lvObj, c);
		c.delete();
	}

	get opa(): number {
		return this._opa;
	}
	set opa(value: number) {
		this._opa = value;
		Module.lv_nummonitor_set_opa(this.lvObj, value);
	}

	get totalDigits(): number {
		return this._totalDigits;
	}
	set totalDigits(value: number) {
		this._totalDigits = value;
		Module.lv_nummonitor_set_total_digits(this.lvObj, value);
	}
	get decimals(): number {
		return this._decimals;
	}
	set decimals(value: number) {
		this._decimals = value;
		Module.lv_nummonitor_set_decimal_digits(this.lvObj, value);
	}
	get bgImage(): string {
		return this._bgImage;
	}
	set bgImage(value: string) {
		this._bgImage = value;
		if (this.bgImageDsc) {
			Module.lv_image_buf_free(this.bgImageDsc);
			this.bgImageDsc = null;
		}
		genLvObjImageDec(value, this.lvObj, 3, true, (obj, image) => {
			this.bgImageDsc = image;
			this._bgImage = value;
			Module.lv_nummonitor_set_bg_image(obj, image);
		});
	}

	get showMin(): number {
		return Module.lv_nummonitor_get_show_min(this.lvObj);
	}
	set showMin(value: number) {
		this._showMin = value;
		Module.lv_nummonitor_set_show_min(this.lvObj, value);
	}
	get showMax(): number {
		return Module.lv_nummonitor_get_show_max(this.lvObj);
	}
	set showMax(value: number) {
		this._showMax = value;
		Module.lv_nummonitor_set_show_max(this.lvObj, value);
	}
	get showMinAddr() {
		return this._showMinAddr;
	}
	set showMinAddr(value: number) {
		this._showMinAddr = value;
		Module.lv_nummonitor_set_input_min_addr(
			this.lvObj,
			value,
			this._showMinAddrType
		);
	}
	get showMinAddrType() {
		return this._showMinAddrType;
	}
	set showMinAddrType(value: addr_type_t) {
		this._showMinAddrType = value;
	}
	get showMaxAddr() {
		return this._showMaxAddr;
	}
	set showMaxAddr(value: number) {
		this._showMaxAddr = value;
		Module.lv_nummonitor_set_input_max_addr(
			this.lvObj,
			value,
			this._showMaxAddrType
		);
	}
	get showMaxAddrType() {
		return this._showMaxAddrType;
	}
	set showMaxAddrType(value: addr_type_t) {
		this._showMaxAddrType = value;
	}
}

export default class NumMonitor extends HMiBase {
	constructor(geo: Geometry, screen?: LvObjT) {
		super("NumMonitor", geo, screen);
		this._property = new NumMonitorProperty(this._lvObj);
		this._display = new NumMonitorDisplay(this._lvObj);
		const t = Module.lv_nummonitor_get_permission(this._lvObj);
		this._permission = this.createAuthority(t, true, true, true, true);
	}

	override updateImage(w: number, h: number): void {
		const display = this._display as NumMonitorDisplay;
		display.bgImage = display._bgImage;
	}
}
