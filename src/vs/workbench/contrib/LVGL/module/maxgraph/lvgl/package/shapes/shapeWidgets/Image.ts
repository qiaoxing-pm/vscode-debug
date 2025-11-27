import { lv_part_t } from "../../lvglEnums.js";
import { Module, lv_fmt_img_data } from "../../LvglModule.js";
import { LvglBase, LV_Obj } from "../lvglBase.js";
import { LV_IMG_Background, LV_Transform } from "../lvglStyle.js";

export class LV_Image extends LV_Obj {
	imgDsc: LvImgDscT | null = null;
	_assert: string = "";
	_pivotX: number = 0;
	_pivotY: number = 0;
	_rotation: number = 0;
	_scale: number = 256;
	_flag = 4;
	_isAlign = true;
	get assert() {
		return this._assert;
	}
	set assert(name: string) {
		if (this.imgDsc) {
			Module.lv_image_buf_free(this.imgDsc);
			this.imgDsc = null;
		}
		if (!name) {
			Module.lv_image_set_src(this.lvObj, null);
			return;
		}
		Module.lv_obj_update_layout(this.lvObj);
		let w = Module.lv_obj_get_width(this.lvObj);
		let h = Module.lv_obj_get_height(this.lvObj);
		this.imgDsc = lv_fmt_img_data(name, w, h, this._flag, this._isAlign);
		Module.lv_image_set_src(this.lvObj, this.imgDsc);
		this._assert = name;
	}
	get pivotX() {
		return this._pivotX;
	}
	set pivotX(value: number) {
		this._pivotX = value;
		Module.lv_image_set_pivot(this.lvObj, this._pivotX, this._pivotY);
	}
	get pivotY() {
		return this._pivotY;
	}
	set pivotY(value: number) {
		this._pivotY = value;
		Module.lv_image_set_pivot(this.lvObj, this._pivotX, this._pivotY);
	}

	get rotation() {
		this._rotation = Module.lv_image_get_rotation(this.lvObj);
		return this._rotation;
	}
	set rotation(value: number) {
		if (value < 0 || value > 360) {
			console.log("Rotation value must be between 0 and 360 degrees.");
		}
		this._rotation = value;
		Module.lv_image_set_rotation(this.lvObj, value);
	}
	get scale() {
		return this._scale;
	}
	set scale(value: number) {
		this._scale = value;
		if (value < 0 || value > 256) {
			console.log("Scale value must be between 0 and 256.");
		}
		Module.lv_image_set_scale(this.lvObj, value);
	}
	get flag() {
		return this._flag;
	}
	set flag(value: number) {
		if (this._assert === "") return;
		if (this.imgDsc) {
			Module.lv_image_buf_free(this.imgDsc);
		}
		const w = Module.lv_obj_get_width(this.lvObj);
		const h = Module.lv_obj_get_height(this.lvObj);
		this._flag = value;
		this.imgDsc = lv_fmt_img_data(
			this._assert,
			w,
			h,
			this._flag,
			this._isAlign
		);
		Module.lv_image_set_src(this.lvObj, this.imgDsc!);
	}
	get isAlign() {
		return this._isAlign;
	}
	set isAlign(value: boolean) {
		if (this._assert === "") return;
		if (this.imgDsc) {
			Module.lv_image_buf_free(this.imgDsc);
		}
		this._isAlign = value;
		const w = Module.lv_obj_get_width(this.lvObj);
		const h = Module.lv_obj_get_height(this.lvObj);
		this.imgDsc = lv_fmt_img_data(
			this._assert,
			w,
			h,
			this._flag,
			this._isAlign
		);
		Module.lv_image_set_src(this.lvObj, this.imgDsc!);
	}

	override updateWidget(): void {
		this.assert = this._assert; // 重新设置图片数据
	}
}

export class LVGL_ShapeImage extends LvglBase {
	override Type = "Image";

	override lvglCreate(parent: LvObjT) {
		this._lvglObj = Module.lv_image_create(parent);
		this.updateLayout();
		this._widget = new LV_Image(this.Type, this._lvglObj);
	}

	updateLayout() {
		if (!this.State || !this._lvglObj) return;
		const w = this.State.unscaledWidth;
		const h = this.State.unscaledHeight;
		Module.lv_obj_set_size(this._lvglObj, w, h);
	}

	override createStyle(stateCount: number) {
		// 向 mainStyles 添加属性
		const mainStyles = this._styles.find((style) => style[0] === "Main")?.[1];
		if (mainStyles) {
			mainStyles.push([
				"Image",
				new LV_IMG_Background(
					this.lvglObj,
					lv_part_t.LV_PART_MAIN,
					this.State!,
					stateCount
				),
			]);
			mainStyles.push([
				"Transform",
				new LV_Transform(
					this.lvglObj,
					lv_part_t.LV_PART_MAIN,
					this.State!,
					stateCount
				),
			]);
		}
	}
}
