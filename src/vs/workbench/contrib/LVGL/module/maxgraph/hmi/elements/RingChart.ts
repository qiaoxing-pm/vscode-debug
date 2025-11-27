import type { Geometry } from "../../packages/core/src/index.js";
import { BaseDisplay, BaseProperty } from "./PureData.js";
import HMiBase from "./HMiBase.js";
import { ring_type_t } from "../static/enums.js";
import { Module } from "../../lvgl/package/LvglModule.js";
import { hexStrToLvColor, LvColorToHexStr } from "../../lvgl/tools/color.js";

export class RingProperty extends BaseProperty {
	override _dataType = 0;
	_min = 0;
	_max = 100;

	constructor(lvObj: LvObjT) {
		super(lvObj);
		this._addr = Module.lv_ring_get_addr(lvObj);
		this._addrType = Module.lv_ring_get_addr_type(lvObj);
		this._dataType = Module.lv_ring_get_data_type(lvObj);
		this._min = Module.lv_ring_get_min_value(lvObj);
		this._max = Module.lv_ring_get_max_value(lvObj);
	}

	get dataType() {
		return this._dataType;
	}
	set dataType(value: number) {
		this._dataType = value;
		Module.lv_ring_set_data_type(this.lvObj, value);
	}

	get addr() {
		return this._addr;
	}
	set addr(value: number) {
		this._addr = value;
		Module.lv_ring_set_addr(this.lvObj, this._addr, this._addrType);
	}

	get addrType(): number {
		return this._addrType;
	}
	set addrType(value: number) {
		this._addrType = value;
		Module.lv_ring_set_addr(this.lvObj, this._addr, value);
	}

	get min() {
		return this._min;
	}
	set min(value: number) {
		this._min = value;
		Module.lv_ring_set_min_value(this.lvObj, this._min);
	}
	get max() {
		return this._max;
	}
	set max(value: number) {
		this._max = value;
		Module.lv_ring_set_max_value(this.lvObj, this._max);
	}


}

export class RingDisplay extends BaseDisplay {

	_type: ring_type_t = ring_type_t.LV_RING_TYPE_RING;
	_opa = 255;
	_startAngle = 0;
	_angleSpan = 360;
	_lineWidth = 1;
	_fillLineWidth = 1;
	_fillColor = "#ff0000";

	constructor(lvObj: LvObjT) {
		super(lvObj);
		this._type = Module.lv_ring_get_type(lvObj);
		this._opa = Module.lv_ring_get_opa(lvObj);
		this._startAngle = Module.lv_ring_get_start_angle(lvObj);
		this._angleSpan = Module.lv_ring_get_angle_span(lvObj);
		this._lineWidth = Module.lv_ring_get_line_width(lvObj);
		this._fillLineWidth = Module.lv_ring_get_fill_line_width(lvObj);
		const c = Module.lv_ring_get_fill_color(lvObj);
		this._fillColor = LvColorToHexStr(c);
		c.delete();
	}

	get type(): ring_type_t {
		return this._type;
	}
	set type(value: ring_type_t) {
		this._type = value;
		Module.lv_ring_set_type(this.lvObj, value);
	}

	get opa(): number {
		return this._opa;
	}
	set opa(value: number) {
		this._opa = value;
		Module.lv_ring_set_opa(this.lvObj, value);
	}

	get startAngle(): number {
		return this._startAngle;
	}
	set startAngle(value: number) {
		this._startAngle = value;
		Module.lv_ring_set_start_angle(this.lvObj, value);
	}

	get angleSpan(): number {
		return this._angleSpan;
	}
	set angleSpan(value: number) {
		this._angleSpan = value;
		Module.lv_ring_set_angle_span(this.lvObj, value);
	}

	get lineWidth(): number {
		return this._lineWidth;
	}
	set lineWidth(value: number) {
		this._lineWidth = value;
		Module.lv_ring_set_line_width(this.lvObj, value);
	}

	get fillLineWidth(): number {
		return this._fillLineWidth;
	}
	set fillLineWidth(value: number) {
		this._fillLineWidth = value;
		Module.lv_ring_set_fill_line_width(this.lvObj, value);
	}

	get fillColor(): string {
		return this._fillColor;
	}
	set fillColor(value: string) {
		this._fillColor = value;
		const c = hexStrToLvColor(value);
		Module.lv_ring_set_fill_color(this.lvObj, c);
		c.delete();
	}


}


export default class Ring extends HMiBase {
	constructor(geo: Geometry, screen?: LvObjT) {
		super("Ring", geo, screen);
		this._property = new RingProperty(this._lvObj);
		this._display = new RingDisplay(this._lvObj);
		const t = Module.lv_ring_get_permission(this._lvObj);
		this._permission = this.createAuthority(t, false, true, false, false);
	}
}
