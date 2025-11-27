import type { Geometry } from "../../packages/core/src/index.js";
import { BaseDisplay, BaseProperty } from "./PureData.js";
import HMiBase from "./HMiBase.js";
import { Module } from "../../lvgl/package/LvglModule.js";
import { hexStrToLvColor, LvColorToHexStr } from "../../lvgl/tools/color.js";

export class LineScaleProperty extends BaseProperty {
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

}
export class LineScaleDisplay extends BaseDisplay {

	get fontSize(): number {
		return Module.lv_linescale_get_font_size(this.lvObj);
	}
	set fontSize(val: number) {
		Module.lv_linescale_set_font_size(this.lvObj, val);
	}

	get textDirection(): number {
		return Module.lv_linescale_get_text_direction(this.lvObj);
	}
	set textDirection(val: number) {
		Module.lv_linescale_set_text_direction(this.lvObj, val);
	}

	get position(): number {
		return Module.lv_linescale_get_position(this.lvObj);
	}
	set position(val: number) {
		Module.lv_linescale_set_position(this.lvObj, val);
	}

	get min(): number {
		return Module.lv_linescale_get_min_value(this.lvObj);
	}
	set min(val: number) {
		Module.lv_linescale_set_min_value(this.lvObj, val);
	}

	get max(): number {
		return Module.lv_linescale_get_max_value(this.lvObj);
	}
	set max(val: number) {
		Module.lv_linescale_set_max_value(this.lvObj, val);
	}

	get decimalPos(): number {
		return Module.lv_linescale_get_decimal_pos(this.lvObj);
	}
	set decimalPos(val: number) {
		Module.lv_linescale_set_decimal_pos(this.lvObj, val);
	}

	get textColor(): string {
		const c = Module.lv_linescale_get_text_color(this.lvObj);
		return LvColorToHexStr(c);
	}
	set textColor(val: string) {
		const c = hexStrToLvColor(val);
		Module.lv_linescale_set_text_color(this.lvObj, c);
		c.delete();
	}

	get lineColor(): string {
		const c = Module.lv_linescale_get_line_color(this.lvObj);
		return LvColorToHexStr(c);
	}
	set lineColor(val: string) {
		const c = hexStrToLvColor(val);
		Module.lv_linescale_set_line_color(this.lvObj, c);
		c.delete();
	}

	get showText(): boolean {
		return Module.lv_linescale_get_show_text(this.lvObj);
	}
	set showText(val: boolean) {
		Module.lv_linescale_set_show_text(this.lvObj, val);
	}

	get majorTickCount(): number {
		return Module.lv_linescale_get_major_tick_count(this.lvObj);
	}
	set majorTickCount(val: number) {
		Module.lv_linescale_set_major_tick_count(this.lvObj, val);
	}

	get minorTickCount(): number {
		return Module.lv_linescale_get_minor_tick_count(this.lvObj);
	}
	set minorTickCount(val: number) {
		Module.lv_linescale_set_minor_tick_count(this.lvObj, val);
	}

	override pickAttributes(): Object {
		return {
			fontSize: this.fontSize,
			textDirection: this.textDirection,
			position: this.position,
			min: this.min,
			max: this.max,
			decimalPos: this.decimalPos,
			textColor: this.textColor,
			lineColor: this.lineColor,
			showText: this.showText,
			majorTickCount: this.majorTickCount,
			minorTickCount: this.minorTickCount,
		}
	}
}


export default class LineScale extends HMiBase {
	constructor(geo: Geometry, screen?: LvObjT) {
		super("LineScale", geo, screen);
		this._display = new LineScaleDisplay(this._lvObj);
	}
}
