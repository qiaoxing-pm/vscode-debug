import type { Geometry } from "../../packages/core/src/index.js";
import { BaseDisplay, BaseProperty } from "./PureData.js";
import HMiBase from "./HMiBase.js";
import { Module } from "../../lvgl/package/LvglModule.js";
import { addr_type_t, lv_flowblock_shape_t } from "../static/enums.js";
import { hexStrToLvColor } from "../../lvgl/tools/color.js";
export class FlowBlockProperty extends BaseProperty {
	_blockWidth: number = 50;
	_blockHeight: number = 100;
	_radius: number = 50;
	_pipeShape: lv_flowblock_shape_t = lv_flowblock_shape_t.LV_FLOWBLOCK_SHAPE_LINE;
	_flowSpeed: number = 10; // 0~100
	_flowRate: number = 1; // 1~10
	_offset: number = 0;
	get addr() {
		return 0;
	}
	set addr(value: number) {
		this._addr = value;
		Module.lv_flowblock_set_addr(this.lvObj, this._addr, this._addrType);
	}
	get addrType(): addr_type_t {
		return this._addrType;
	}
	set addrType(value: addr_type_t) {
		this._addrType = value;
		Module.lv_flowblock_set_addr(this.lvObj, this._addr, value);
	}
	get blockWidth() {
		return this._blockWidth;
	}
	set blockWidth(w: number) {
		this._blockWidth = w;
		Module.lv_flowblock_set_width(this.lvObj, w);
	}

	get blockHeight() {
		return this._blockHeight;
	}
	set blockHeight(h: number) {
		this._blockHeight = h;
		Module.lv_flowblock_set_height(this.lvObj, h);
	}

	get radius() {
		return this._radius;
	}
	set radius(r: number) {
		this._radius = r;
		Module.lv_flowblock_set_radius(this.lvObj, r);
	}


	get flowSpeed() {
		return this._flowSpeed;
	}
	set flowSpeed(fs: number) {
		this._flowSpeed = fs;
		Module.lv_flowblock_set_flow_speed(this.lvObj, fs);
	}

	get flowRate() {
		return this._flowRate;
	}
	set flowRate(fr: number) {
		this._flowRate = fr;
		Module.lv_flowblock_set_flow_rate(this.lvObj, fr);
	}


	get offset() {
		return this._offset;
	}
	set offset(o: number) {
		this._offset = o;
		Module.lv_flowblock_set_flow_offset(this.lvObj, o);
	}

	get pipeShape() {
		return this._pipeShape;
	}
	set pipeShape(shape: lv_flowblock_shape_t) {
		this._pipeShape = shape;
		Module.lv_flowblock_set_shape_type(this.lvObj, shape);
	}
}
export class FlowBlockDisplay extends BaseDisplay {

	_startColor: string = "#000000";
	_endColor: string = "#ffffff";
	_flowColor: string = "#0000ff";

	get startColor() {
		return this._startColor;
	}
	set startColor(c: string) {
		this._startColor = c;
		const color = hexStrToLvColor(this._startColor);
		const endColor = hexStrToLvColor(this._endColor);
		Module.lv_flowblock_set_color(this.lvObj, color, endColor);
		color.delete();
		endColor.delete();
	}

	get endColor() {
		return this._endColor;
	}
	set endColor(c: string) {
		this._endColor = c;
		const color = hexStrToLvColor(this._startColor);
		const endColor = hexStrToLvColor(this._endColor);
		Module.lv_flowblock_set_color(this.lvObj, color, endColor);
		color.delete();
		endColor.delete();
	}

	get flowColor() {
		return this._flowColor;
	}
	set flowColor(c: string) {
		this._flowColor = c;
		const color = hexStrToLvColor(this._flowColor);
		Module.lv_flowblock_set_flow_color(this.lvObj, color);
		color.delete();
	}

}


export default class FlowBlock extends HMiBase {
	constructor(geo: Geometry, screen?: LvObjT) {
		super("FlowBlock", geo, screen);
		this._display = new FlowBlockDisplay(this._lvObj);
		this._property = new FlowBlockProperty(this._lvObj);
		const t = Module.lv_flowblock_get_permission(this._lvObj);
		this._permission = this.createAuthority(t, false, true);
	}
}
