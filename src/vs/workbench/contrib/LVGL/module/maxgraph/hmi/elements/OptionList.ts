import { Module } from "../../lvgl/package/LvglModule.js";
import { lv_dir_t, lv_text_align_t } from "../static/enums.js";
import { BaseDisplay, BaseProperty } from "./PureData.js";
import HMiBase from "./HMiBase.js";
import {
	type Geometry
} from "../../packages/core/src/index.js";
import { hexStrToLvColor, LvColorToHexStr } from "../../lvgl/tools/color.js";

export class OptionListProperty extends BaseProperty {
	get addr() {
		return this._addr;
	}
	set addr(value: number) {
		this._addr = value;
		Module.lv_optionlist_set_addr(this.lvObj, this._addr, this._addrType);
	}
	get addrType(): number {
		return this._addrType;
	}
	set addrType(value: number) {
		this._addrType = value;
		Module.lv_optionlist_set_addr(this.lvObj, this._addr, value);
	}
	constructor(lvObj: LvObjT) {
		super(lvObj);
		this._addr = Module.lv_optionlist_get_addr(lvObj);
		this._addrType = Module.lv_optionlist_get_addr_type(lvObj);
	}
}
export class OptionListDisplay extends BaseDisplay {
	_options = "";
	_textAlign: lv_text_align_t = lv_text_align_t.LV_TEXT_ALIGN_CENTER;
	_dir: lv_dir_t = lv_dir_t.LV_DIR_TOP;
	_textColor = "#000000";
	_bgColor = "#ffffff";
	_font = "";

	constructor(lvObj: LvObjT) {
		super(lvObj);
		this._textAlign = Module.lv_optionlist_get_text_align(lvObj);
		this._dir = Module.lv_optionlist_get_dir(lvObj);
		let lvcolor = Module.lv_optionlist_get_bg_color(lvObj);
		this._bgColor = LvColorToHexStr(lvcolor);
		lvcolor = Module.lv_optionlist_get_text_color(lvObj);
		this._textColor = LvColorToHexStr(lvcolor);
	}

	get dir(): lv_dir_t {
		return this._dir;
	}
	set dir(value: lv_dir_t) {
		this._dir = value;
		Module.lv_optionlist_set_dir(this.lvObj, value);
	}

	get options(): string {
		return this._options;
	}
	set options(value: string) {
		this._options = value;
		Module.lv_optionlist_set_options(this.lvObj, value);
	}

	get textAlign(): lv_text_align_t {
		return this._textAlign;
	}
	set textAlign(value: lv_text_align_t) {
		this._textAlign = value;
		Module.lv_optionlist_set_text_align(this.lvObj, value);
	}

	get bgColor(): string {
		return this._bgColor;
	}
	set bgColor(value: string) {
		this._bgColor = value;
		const c = hexStrToLvColor(value);
		Module.lv_optionlist_set_bg_color(this.lvObj, c);
		c.delete();
	}

	get textColor(): string {
		return this._textColor;
	}
	set textColor(value: string) {
		this._textColor = value;
		const c = hexStrToLvColor(value);
		Module.lv_optionlist_set_text_color(this.lvObj, c);
		c.delete();
	}


}

export default class OptionList extends HMiBase {

	constructor(geo: Geometry, screen?: LvObjT) {
		super("OptionList", geo, screen);
		this._property = new OptionListProperty(this._lvObj);
		this._display = new OptionListDisplay(this._lvObj);
		const t = Module.lv_optionlist_get_permission(this._lvObj);
		this._permission = this.createAuthority(t, false, true);
	}
}
