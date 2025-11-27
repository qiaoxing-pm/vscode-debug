import type { Geometry } from "../../packages/core/src/index.js";
import { BaseDisplay, BaseProperty } from "./PureData.js";
import HMiBase from "./HMiBase.js";
import { Module, genLvObjImageDec } from "../../lvgl/package/LvglModule.js";
import { addr_type_t } from "../static/enums.js";

export class GIFMonitorProperty extends BaseProperty {
	_status = false;
	_control = 1;

	get addr() {
		return this._addr;
	}
	set addr(value: number) {
		this._addr = value;
		Module.lv_gifmonitor_set_addr(this.lvObj, this._addr, this._addrType);
	}
	get addrType(): addr_type_t {
		return this._addrType;
	}
	set addrType(value: addr_type_t) {
		this._addrType = value;
		Module.lv_gifmonitor_set_addr(this.lvObj, this._addr, value);
	}

	get control() {
		return this._control;
	}
	set control(value: number) {
		this._control = value;
		Module.lv_gifmonitor_set_control(this.lvObj, value === 1);
	}

	get status() {
		return this._status;
	}
	set status(value: boolean) {
		this._status = value;
		Module.lv_gifmonitor_set_status(this.lvObj, value);
	}

	constructor(lvObj: LvObjT) {
		super(lvObj);
		this.addrValid = false;
		this._status = Module.lv_gifmonitor_get_status(lvObj);
		this._control = Module.lv_gifmonitor_get_control(lvObj) ? 1 : 0;
	}
}

export class GIFMonitorDisplay extends BaseDisplay {
	_src = "";
	imageDec: LvImgDscT | null = null;
	get src() {
		return this._src;
	}
	set src(value: string) {
		if (value === this._src) return;
		this._src = value;
		if (!value || this.imageDec) {
			Module.lv_image_buf_free(this.imageDec);
			this.imageDec = null;
			if (!value) {
				Module.lv_gifmonitor_set_bg_image(this.lvObj, null);
				return;
			}
		}
		genLvObjImageDec(value, this.lvObj, 3, true, (obj, image) => {
			Module.lv_gifmonitor_set_bg_image(this.lvObj, image);
			this.imageDec = image;
			this._src = value;
		});
	}
}

export default class GIFMonitor extends HMiBase {
	constructor(geo: Geometry, screen?: LvObjT) {
		super("GIFMonitor", geo, screen);
		this._property = new GIFMonitorProperty(this._lvObj);
		this._display = new GIFMonitorDisplay(this._lvObj);
		const t = Module.lv_gifmonitor_get_permission(this._lvObj);
		this._permission = this.createAuthority(t, false, true);
	}
}
