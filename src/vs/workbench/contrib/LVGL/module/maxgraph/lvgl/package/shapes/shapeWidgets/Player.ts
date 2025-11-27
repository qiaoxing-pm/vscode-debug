import {
	LVGL_ShapeImage, LV_Image
} from "./Image.js"
import { Module } from "../../LvglModule.js";

export class LV_Player extends LV_Image {

	_src = "rtsp://192.168.1.1:554";
	get src(): string {
		return this._src;
	}
	set src(value: string) {
		this._src = value;
	}
	constructor(type: string, lvobj: LvObjT) {
		super(type, lvobj);
		this._flag = 3;
		this.assert = "player.png";
	}
}

export class LVGL_ShapePlayer extends LVGL_ShapeImage {

	override Type: string = "Player";

	override lvglCreate(parent: LvObjT): void {
		this._lvglObj = Module.lv_image_create(parent);
		this.updateLayout();
		this._widget = new LV_Player(this.Type, this._lvglObj);
	}
}
