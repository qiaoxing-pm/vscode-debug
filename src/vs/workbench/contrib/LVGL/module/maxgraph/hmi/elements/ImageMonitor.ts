import type { Geometry } from "../../packages/core/src/index.js";
import { BaseDisplay, BaseProperty, PureData } from "./PureData.js";
import HMiBase from "./HMiBase.js";
import { Module, genLvObjImageDec } from "../../lvgl/package/LvglModule.js";
import { lv_imagemonitor_type_t } from "../static/enums.js";

export class ImageMonitorProperty extends BaseProperty {
	override addrValid = false;

	constructor(lvObj: LvObjT) {
		super(lvObj);
		this._addr = Module.lv_imagemonitor_get_addr(lvObj);
		this._addrType = Module.lv_imagemonitor_get_addr_type(lvObj);
	}
	get addr() {
		return this._addr;
	}
	set addr(value: number) {
		this._addr = value;
		Module.lv_imagemonitor_set_addr(this.lvObj, this._addr, this._addrType);
	}
	get addrType(): number {
		return this._addrType;
	}
	set addrType(value: number) {
		this._addrType = value;
		Module.lv_imagemonitor_set_addr(this.lvObj, this._addr, value);
	}
}

export class ImageMonitorDisplay extends BaseDisplay {
	_addr = 0;
	_addrType = 0;
	_type: lv_imagemonitor_type_t = 0;
	_timerPeriod = 1000;

	_staticImage = "";
	staticImageDsc: LvImgDscT | null = null;
	images: string[] = [];
	imageDscs: (LvImgDscT | null)[] = [];

	constructor(lvObj: LvObjT) {
		super(lvObj);
		this._type = Module.lv_imagemonitor_get_type(lvObj);
		this._timerPeriod = Module.lv_imagemonitor_get_timer_period(lvObj);
	}
	get addr() {
		return this._addr;
	}
	set addr(value: number) {
		this._addr = value;
		Module.lv_imagemonitor_set_addr(this.lvObj, this._addr, this._addrType);
	}
	get addrType(): number {
		return this._addrType;
	}
	set addrType(value: number) {
		this._addrType = value;
		Module.lv_imagemonitor_set_addr(this.lvObj, this._addr, value);
	}
	get staticImage() {
		return this._staticImage;
	}
	set staticImage(value: string) {
		this._staticImage = value;
		if (this.staticImageDsc || !value) {
			Module.lv_image_buf_free(this.staticImageDsc);
			this.staticImageDsc = null;
			if (!value) {
				return;
			}
		}
		genLvObjImageDec(value, this.lvObj, 3, true, (obj, image) => {
			this.staticImageDsc = image;
			Module.lv_imagemonitor_set_src(this.lvObj, [image]);
		});
	}

	addImage(name: string) {
		genLvObjImageDec(name, this.lvObj, 3, true, (obj, image) => {
			if (!image) {
				return;
			}
			this.images.push(name);
			this.imageDscs.push(image);
			Module.lv_imagemonitor_add_src(this.lvObj, image);
		});
	}

	removeImage(index: number) {
		if (index < 0 || index >= this.images.length) {
			return;
		}
		this.images.splice(index, 1);
		const dsc = this.imageDscs.splice(index, 1)[0];
		if (dsc) {
			Module.lv_image_buf_free(dsc);
		}
		Module.lv_imagemonitor_set_src(this.lvObj, this.imageDscs);
	}

	get type(): lv_imagemonitor_type_t {
		return this._type;
	}
	set type(value: lv_imagemonitor_type_t) {
		if (
			this._staticImage &&
			this._type === lv_imagemonitor_type_t.LV_IMAGE_MONITOR_NONE &&
			this._type !== value
		) {
			Module.lv_imagemonitor_set_src(this.lvObj, []);
			Module.lv_image_buf_free(this.staticImageDsc);
			this._staticImage = "";
			this.staticImageDsc = null;
		}
		this._type = value;
		Module.lv_imagemonitor_set_type(this.lvObj, value);
	}

	get timerPeriod(): number {
		return this._timerPeriod;
	}
	set timerPeriod(value: number) {
		this._timerPeriod = value;
		Module.lv_imagemonitor_set_timer_period(this.lvObj, value);
	}
	override pickAttributes(): { [key: string]: any } {
		return {
			...super.pickAttributes(),
			images: this.images,
			addImage: this.addImage.bind(this),
			removeImage: this.removeImage.bind(this),
		};
	}

	override toXML(doc: Document, name: string, defaultObj: PureData): Element | null {
		let ele = super.toXML(doc, name, defaultObj);
		if (!ele && this.images.length === 0) {
			return null;
		}
		if (!ele) {
			ele = doc.createElement(name);
		}
		ele.setAttribute("srcSize", this.images.length.toString());
		ele.setAttribute("images", this.images.join(","));
		return ele;
	}

	formXML(node: Element): void {
		super.fromXML(node);
		const attrs = node.attributes;
		for (let i = 0; i < attrs.length; i++) {
			const attr = attrs[i];
			if (attr.name === "images") {
				const images = attr.value.split(",");
				images.forEach((img) => {
					this.addImage(img);
				});
			}
		}
	}
}
export default class ImageMonitor extends HMiBase {
	constructor(geo: Geometry, screen?: LvObjT) {
		super("ImageMonitor", geo, screen);
		this._property = new ImageMonitorProperty(this._lvObj);
		this._display = new ImageMonitorDisplay(this._lvObj);
		const t = Module.lv_imagemonitor_get_permission(this._lvObj);
		this._permission = this.createAuthority(t, true);
	}
}
