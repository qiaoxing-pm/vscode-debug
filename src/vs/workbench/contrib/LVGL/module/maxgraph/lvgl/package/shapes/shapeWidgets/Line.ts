import { Module } from "../../LvglModule.js";
import { LvglBase, LV_Obj } from "../lvglBase.js"

function genPoints(array: { x: number, y: number }[]): ArrayBuffer {
	const data = new ArrayBuffer(array.length * 2 * 4);
	const view = new Int32Array(data);
	for (let i = 0; i < array.length; i++) {
		view[i * 2] = array[i].x;
		view[i * 2 + 1] = array[i].y;
	}
	return data;
}

export class LV_Line extends LV_Obj {

	constructor(name: string, lvObj: LvObjT) {
		super(name, lvObj);
		// {5, 5}, {70, 70}, {120, 10}, {180, 60}, {240, 10}
		const points = genPoints([{ x: 5, y: 5 }, { x: 70, y: 70 }, { x: 120, y: 10 }, { x: 180, y: 60 }, { x: 240, y: 10 }]);
		Module.lv_line_set_points(this.lvObj, points, 5);
	}

}

export class LVGL_ShapeLine extends LvglBase {
	override Type = "Line";

	override lvglCreate(parent: LvObjT): void {
		this._lvglObj = Module.lv_line_create(parent);
		this._widget = new LV_Line("Line", this._lvglObj);
	}


}
