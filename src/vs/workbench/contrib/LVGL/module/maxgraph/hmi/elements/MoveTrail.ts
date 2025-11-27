import type { Geometry } from "../../packages/core/src/index.js";
import { BaseDisplay, BaseProperty } from "./PureData.js";
import HMiBase from "./HMiBase.js";
import { lv_movetrack_dir_t } from "../static/enums.js";
import { Module, genLvObjImageDec } from "../../lvgl/package/LvglModule.js";

export class MoveTrackProperty extends BaseProperty {
	_direction: lv_movetrack_dir_t = lv_movetrack_dir_t.LV_MOVETRACK_DIR_RIGHT;
	_min = 0;
	_max = 100;
	_minAddr = 0;
	_maxAddr = 0;
	_minAddrType: number = 0;
	_maxAddrType: number = 0;
	_fixedRange = true;
	constructor(lvObj: any) {
		super(lvObj);
		this._direction = Module.lv_movetrack_get_dir(this.lvObj);
		this._min = Module.lv_movetrack_get_min_value(this.lvObj);
		this._max = Module.lv_movetrack_get_max_value(this.lvObj);
		this._minAddr = Module.lv_movetrack_get_min_addr(this.lvObj);
		this._minAddrType = Module.lv_movetrack_get_min_addr_type(this.lvObj);
		this._maxAddr = Module.lv_movetrack_get_max_addr(this.lvObj);
		this._maxAddrType = Module.lv_movetrack_get_max_addr_type(this.lvObj);
		this._fixedRange = Module.lv_movetrack_get_fixed_range(this.lvObj);
	}
	get fixedRange(): boolean {
		return this._fixedRange;
	}
	set fixedRange(value: boolean) {
		this._fixedRange = value;
		Module.lv_movetrack_set_fixed_range(this.lvObj, value);
	}
	get addr() {
		return this._addr;
	}
	set addr(value: number) {
		this._addr = value;
		Module.lv_movetrack_set_addr(this.lvObj, this._addr, this._addrType);
	}
	get addrType(): number {
		return this._addrType;
	}
	set addrType(value: number) {
		this._addrType = value;
		Module.lv_movetrack_set_addr(this.lvObj, this._addr, value);
	}
	get direction(): lv_movetrack_dir_t {
		return this._direction;
	}
	set direction(value: lv_movetrack_dir_t) {
		this._direction = value;
	}

	get min(): number {
		return this._min;
	}
	set min(value: number) {
		this._min = value;
		Module.lv_movetrack_set_min_value(this.lvObj, value);
	}
	get max(): number {
		return this._max;
	}
	set max(value: number) {
		this._max = value;
		Module.lv_movetrack_set_max_value(this.lvObj, value);
	}
	get minAddr(): number {
		return this._minAddr;
	}
	set minAddr(value: number) {
		this._minAddr = value;
		Module.lv_movetrack_set_min_addr(this.lvObj, value, this._minAddrType);
	}
	get minAddrType(): number {
		return this._minAddrType;
	}
	set minAddrType(value: number) {
		this._minAddrType = value;
		Module.lv_movetrack_set_min_addr(this.lvObj, this._minAddr, value);
	}
	get maxAddr(): number {
		return this._maxAddr;
	}
	set maxAddr(value: number) {
		this._maxAddr = value;
		Module.lv_movetrack_set_max_addr(this.lvObj, value, this._maxAddrType);
	}
	get maxAddrType(): number {
		return this._maxAddrType;
	}
	set maxAddrType(value: number) {
		this._maxAddrType = value;
		Module.lv_movetrack_set_max_addr(this.lvObj, this._maxAddr, value);
	}
}

export class MoveTrackDisplay extends BaseDisplay {
	_src = "";
	imageDsc: LvImgDscT | null = null;
	get src() {
		return this._src;
	}
	set src(value: string) {
		this._src = value;
		if (this.imageDsc || !value) {
			Module.lv_image_buf_free(this.imageDsc);
			this.imageDsc = null;
			if (!value) {
				Module.lv_movetrack_set_src(this.lvObj, null);
				return;
			}
		}
		genLvObjImageDec(value, this.lvObj, 3, true, (obj, image) => {
			Module.lv_movetrack_set_src(this.lvObj, image);
			this.imageDsc = image;
			this._src = value;
		});
	}
}
export default class MoveTrack extends HMiBase {
	constructor(geo: Geometry, screen?: LvObjT) {
		super("MoveTrack", geo, screen);
		this._property = new MoveTrackProperty(this._lvObj);
		this._display = new MoveTrackDisplay(this._lvObj);
		const t = Module.lv_movetrack_get_permission(this._lvObj);
		this._permission = this.createAuthority(t, false, true, false, false);
	}

	override updateImage(w: number, h: number): void {
		const display = this._display as MoveTrackDisplay;
		display.src = display._src;
	}
}
