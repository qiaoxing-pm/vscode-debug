import { Module } from "../../LvglModule.js";
import { LvglBase, LV_Obj } from "../lvglBase.js"

export class LV_Span extends LV_Obj {
	span: LvSpanT;
	_text: string = "";
	get text() {
		return this._text;
	}
	set text(value: string) {
		this._text = value;
		Module.lv_span_set_text(this.span, value);
	}
	constructor(name: string, lvObj: LvObjT) {
		super(name, lvObj);
		this.span = Module.lv_spangroup_new_span(lvObj);
		this.text = "Span";
	}

}

export class LVGL_ShapeSpan extends LvglBase {
	override Type = "Span";

	override lvglCreate(parent: LvObjT): void {
		this._lvglObj = Module.lv_spangroup_create(parent);
		this._widget = new LV_Span("Span", this._lvglObj);
	}


}
