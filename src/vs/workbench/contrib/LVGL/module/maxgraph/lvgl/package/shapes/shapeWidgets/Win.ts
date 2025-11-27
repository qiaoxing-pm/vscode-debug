import { Module } from "../../LvglModule.js";
import { LvglBase, LV_Obj } from "../lvglBase.js"


export class LV_Win extends LV_Obj {
	constructor(name: string, lvObj: LvObjT) {
		super(name, lvObj);

	}

}

export class LVGL_ShapeWin extends LvglBase {
	static id = 1
	constructor(type: string, id: number) {
		if (id != null) {
			LVGL_ShapeWin.id = id
		}
		else {
			id = LVGL_ShapeWin.id + 1
		}
		super("Win", id.toString());
	}

	override lvglCreate(parent: LvObjT): void {
		this._lvglObj = Module.lv_win_create(parent);
		this._widget = new LV_Win("Win", this._lvglObj);
	}


}
