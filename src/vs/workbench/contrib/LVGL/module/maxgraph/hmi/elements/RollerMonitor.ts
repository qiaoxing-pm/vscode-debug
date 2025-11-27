import type { Geometry } from "../../packages/core/src/index.js";
import { BaseDisplay, BaseProperty } from "./PureData.js";
import HMiBase from "./HMiBase.js";
import { lv_roller_mode_t } from "../static/enums.js";
import { Module, genLvObjImageDec } from "../../lvgl/package/LvglModule.js";
import { hexStrToLvColor, LvColorToHexStr } from "../../lvgl/tools/color.js";

export class RollerProperty extends BaseProperty {
	get addr() {
		return this._addr;
	}
	set addr(value: number) {
		this._addr = value;
		Module.lv_rollermonitor_set_addr(this.lvObj, this._addr, this._addrType);
	}
	get addrType(): number {
		return this._addrType;
	}
	set addrType(value: number) {
		this._addrType = value;
		Module.lv_rollermonitor_set_addr(this.lvObj, this._addr, value);
	}

	constructor(lvObj: LvObjT) {
		super(lvObj);
		this._addr = Module.lv_rollermonitor_get_addr(lvObj);
		this._addrType = Module.lv_rollermonitor_get_addr_type(lvObj);
	}
}
export class RollerDisplay extends BaseDisplay {
	_mode: lv_roller_mode_t = lv_roller_mode_t.LV_ROLLER_MODE_NORMAL;
	_min = 0;
	_max = 100;
	_step = 1;

	_visibleRowCount: number = 3;
	_bgColor = "#ffffff";
	_bgOpa = 255;
	_lowColor = "#0000ff";
	_highColor = "#ff0000";
	_image: string = "";
	imageDsc: LvImgDscT | null = null;

	constructor(lvObj: LvObjT) {
		super(lvObj);
		this._min = Module.lv_rollermonitor_get_min_value(lvObj);
		this._max = Module.lv_rollermonitor_get_max_value(lvObj);
		this._step = Module.lv_rollermonitor_get_step(lvObj);
		this._mode = Module.lv_rollermonitor_get_mode(lvObj);
		this._visibleRowCount =
			Module.lv_rollermonitor_get_visible_row_count(lvObj);
		let c = Module.lv_rollermonitor_get_bg_color(lvObj);
		this._bgColor = LvColorToHexStr(c);
		this._bgOpa = Module.lv_rollermonitor_get_bg_opa(lvObj);
		c = Module.lv_rollermonitor_get_low_color(lvObj);
		this._lowColor = LvColorToHexStr(c);
		c = Module.lv_rollermonitor_get_high_color(lvObj);
		this._highColor = LvColorToHexStr(c);
	}

	updateImage(w: number, h: number): void {
		if (!this._image || !this.imageDsc) {
			return;
		}
		Module.lv_image_buf_free(this.imageDsc);
		this.imageDsc = null;
		this.image = this._image;
	}

	get image(): string {
		return this._image;
	}
	set image(value: string) {
		this._image = value;
		if (!value || this.imageDsc) {
			Module.lv_image_buf_free(this.imageDsc);
			this.imageDsc = null;
			if (!value) {
				Module.lv_rollermonitor_set_image(this.lvObj, null);
				return;
			}
		}
		genLvObjImageDec(value, this.lvObj, 3, true, (obj, image) => {
			Module.lv_rollermonitor_set_image(this.lvObj, image);
			this.imageDsc = image;
			this._image = value;
		});
	}

	get min(): number {
		return this._min;
	}
	set min(value: number) {
		this._min = value;
		Module.lv_rollermonitor_set_min_value(this.lvObj, value);
	}

	get max(): number {
		return this._max;
	}
	set max(value: number) {
		this._max = value;
		Module.lv_rollermonitor_set_max_value(this.lvObj, value);
	}

	get step(): number {
		return this._step;
	}
	set step(value: number) {
		this._step = value;
		Module.lv_rollermonitor_set_step(this.lvObj, value);
	}

	get mode(): lv_roller_mode_t {
		return this._mode;
	}
	set mode(value: lv_roller_mode_t) {
		this._mode = value;
		Module.lv_rollermonitor_set_mode(this.lvObj, value);
	}

	get visibleRowCount(): number {
		return this._visibleRowCount;
	}
	set visibleRowCount(value: number) {
		this._visibleRowCount = value;
		Module.lv_rollermonitor_set_visible_row_count(this.lvObj, value);
	}

	get bgColor(): string {
		return this._bgColor;
	}
	set bgColor(value: string) {
		this._bgColor = value;
		const c = hexStrToLvColor(value);
		Module.lv_rollermonitor_set_bg_color(this.lvObj, c);
		c.delete();
	}

	get bgOpa(): number {
		return this._bgOpa;
	}
	set bgOpa(value: number) {
		this._bgOpa = value;
		Module.lv_rollermonitor_set_bg_opa(this.lvObj, value);
	}

	get lowColor(): string {
		return this._lowColor;
	}
	set lowColor(value: string) {
		this._lowColor = value;
		const c = hexStrToLvColor(value);
		Module.lv_rollermonitor_set_low_color(this.lvObj, c);
		c.delete();
	}

	get highColor(): string {
		return this._highColor;
	}
	set highColor(value: string) {
		this._highColor = value;
		const c = hexStrToLvColor(value);
		Module.lv_rollermonitor_set_high_color(this.lvObj, c);
		c.delete();
	}
}

export default class Roller extends HMiBase {
	constructor(geo: Geometry, screen?: LvObjT) {
		super("RollerMonitor", geo, screen);
		this._display = new RollerDisplay(this._lvObj);
		this._property = new RollerProperty(this._lvObj);
		const t = Module.lv_rollermonitor_get_permission(this._lvObj);
		this._permission = this.createAuthority(t, true, true);
	}

	override updateImage(w: number, h: number): void {
		(this._display as RollerDisplay)?.updateImage(w, h);
	}
}
