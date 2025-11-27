import { Module } from "../../LvglModule.js";
import { LvglBase, LV_Obj } from "../lvglBase.js"

export class LV_Spinner extends LV_Obj {

	constructor(name: string, lvObj: LvObjT) {
		super(name, lvObj);
		Module.lv_spinner_set_anim_params(this.lvObj, 3000, 360);
	}

}

export class LVGL_ShapeSpinner extends LvglBase {
	override Type = "Spinner";

	override lvglCreate(parent: LvObjT): void {
		this._lvglObj = Module.lv_spinner_create(parent);
		this._widget = new LV_Spinner("Spinner", this._lvglObj);
	}


}
