import { LV_Obj, LvglBase } from "../lvglBase.js";
import { Module } from "../../LvglModule.js";
import { lv_blend_mode_t, lv_image_align_t } from "../../lvglEnums.js";
import { lv_fmt_img_data } from "../../../tools/image.js";

export class LV_MultiStateImage extends LV_Obj {
	images: string[] = [];
	_activeIndex = 0;
	_offsetX = 0;
	_offsetY = 0;
	_rotation = 0;
	_scaleX = 1;
	_scaleY = 1;
	_pivotX = 0;
	_pivotY = 0;
	_blendMode: lv_blend_mode_t = lv_blend_mode_t.LV_BLEND_MODE_NORMAL;
	_align: lv_image_align_t = lv_image_align_t.LV_IMAGE_ALIGN_CENTER;

	get activeIndex(): number {
		return this._activeIndex;
	}
	set activeIndex(value: number) {
		this._activeIndex = value;
		Module.lv_multistateimage_set_active_index(this.lvObj, value);
	}
	get offsetX(): number {
		return this._offsetX;
	}
	set offsetX(value: number) {
		this._offsetX = value;
		Module.lv_multistateimage_set_offset_x(this.lvObj, value);
	}
	get offsetY(): number {
		return this._offsetY;
	}
	set offsetY(value: number) {
		this._offsetY = value;
		Module.lv_multistateimage_set_offset_y(this.lvObj, value);
	}
	get rotation(): number {
		return this._rotation;
	}
	set rotation(value: number) {
		this._rotation = value;
		Module.lv_multistateimage_set_rotation(this.lvObj, value);
	}
	get scaleX(): number {
		return this._scaleX;
	}
	set scaleX(value: number) {
		this._scaleX = value;
		Module.lv_multistateimage_set_scale_x(this.lvObj, value);
	}
	get scaleY(): number {
		return this._scaleY;
	}
	set scaleY(value: number) {
		this._scaleY = value;
		Module.lv_multistateimage_set_scale_y(this.lvObj, value);
	}
	get pivotX(): number {
		return this._pivotX;
	}
	set pivotX(value: number) {
		this._pivotX = value;
		Module.lv_multistateimage_set_pivot(this.lvObj, value, this._pivotY);
	}
	get pivotY(): number {
		return this._pivotY;
	}
	set pivotY(value: number) {
		this._pivotY = value;
		Module.lv_multistateimage_set_pivot(this.lvObj, this._pivotX, value);
	}
	get blendMode(): lv_blend_mode_t {
		return this._blendMode;
	}
	set blendMode(value: lv_blend_mode_t) {
		this._blendMode = value;
		Module.lv_multistateimage_set_blend_mode(this.lvObj, value);
	}
	get align(): lv_image_align_t {
		return this._align;
	}
	set align(value: lv_image_align_t) {
		this._align = value;
		Module.lv_multistateimage_set_align(this.lvObj, value);
	}
	constructor(name: string, lvobj: LvObjT) {
		super(name, lvobj);
		this._offsetX = Module.lv_multistateimage_get_offset_x(lvobj);
		this._offsetY = Module.lv_multistateimage_get_offset_y(lvobj);
		// this._activeIndex = Module.lv_multistateimage_get_active_index(lvobj);
		this._rotation = Module.lv_multistateimage_get_rotation(lvobj);
		this._scaleX = Module.lv_multistateimage_get_scale_x(lvobj);
		this._scaleY = Module.lv_multistateimage_get_scale_y(lvobj);
		const p = Module.lv_multistateimage_get_pivot(lvobj);
		this._pivotX = p.x;
		this._pivotY = p.y;
		this._blendMode = Module.lv_multistateimage_get_blend_mode(lvobj);
		this._align = Module.lv_multistateimage_get_align(lvobj);
	}

	addImage(imageName: string) {
		const w = Module.lv_obj_get_width(this.lvObj);
		const h = Module.lv_obj_get_height(this.lvObj);
		const imgDsc = lv_fmt_img_data(imageName, w, h, 4);
		if (!imgDsc) {
			console.warn(`Failed to format image data for ${imageName}`);
			return;
		}
		Module.lv_multistateimage_add_src(this.lvObj, imgDsc);
		this.images.push(imageName);
	}

	setImage(idx: number, imageName: string) {
		if (idx < 0 || idx >= this.images.length) {
			return;
		}
		let imgSrc = Module.lv_multistateimage_get_src_index(this.lvObj, idx);
		Module.lv_image_buf_free(imgSrc);
		const w = Module.lv_obj_get_width(this.lvObj);
		const h = Module.lv_obj_get_height(this.lvObj);
		const imgDsc = lv_fmt_img_data(imageName, w, h, 4);
		if (!imgDsc) {
			console.warn(`Failed to format image data for ${imageName}`);
			return;
		}
		Module.lv_multistateimage_set_src_index(this.lvObj, imgDsc, idx);
	}

	override pickAttributes(): { [key: string]: any; } {
		const attrs = super.pickAttributes();
		attrs.images = this.images.slice();
		attrs.addImage = (image: string) => {
			this.addImage(image);
		};
		attrs.setImage = (idx: number, image: string) => {
			this.setImage(idx, image);
		};
		return attrs;
	}

	override toXML(doc: XMLDocument): Element | null {
		let ele = super.toXML(doc);
		if (!ele && this.images.length > 0) {
			ele = doc.createElement("MultiStateImage");
		}
		if (!ele) return null;
		let str = this.images.join(",");
		ele.setAttribute("images", str);
		return ele;
	}

	override fromXML(element: Element): void {
		if (element.tagName !== "MultiStateImage") {
			throw new Error("Invalid element for MultiStateImage");
		}
		super.fromXML(element);
		const images = element.getAttribute("images");
		if (images) {
			this.images = images.split(",").map((img) => img.trim());
			this.images.forEach((image, idx) => {
				this.setImage(idx, image);
			});
		}
	}
}

export class LVGL_ShapeMultiStateImage extends LvglBase {
	override Type = "MultiStateImage";


	override lvglCreate(parent: LvObjT): void {
		this._lvglObj = Module.lv_multistateimage_create(parent);
		this._widget = new LV_MultiStateImage("MultiStateImage", this._lvglObj);
	}
}
