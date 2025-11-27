import { Module } from "../../LvglModule.js";
import { LvglBase, LV_Obj } from "../lvglBase.js"


export class LV_MsgBox extends LV_Obj {

	constructor(name: string, lvObj: LvObjT) {
		super(name, lvObj);
	}

}

export class LVGL_ShapeMsgBox extends LvglBase {
	override Type = "MsgBox";

	override lvglCreate(parent: LvObjT): void {
		this._lvglObj = Module.lv_msgbox_create(parent);
		this._widget = new LV_MsgBox("MsgBox", this._lvglObj);
	}


}
