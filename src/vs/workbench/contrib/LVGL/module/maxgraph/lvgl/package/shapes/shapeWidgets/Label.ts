

import { lv_part_t } from "../../lvglEnums.js";
import { Module } from "../../LvglModule.js";
import { LvglBase, LV_Obj } from "../lvglBase.js"
import { LV_Text, LV_Transform, } from "../lvglStyle.js";


export class LV_Label extends LV_Obj {
	_longMode = 0;
	_text = "";
	_recolor = false;

	get text(): string {
		return this._text;
	}
	set text(value: string) {
		this._text = value;
		Module.lv_label_set_text(this.lvObj, value);
	}
	get longMode(): number {
		return this._longMode;
	}
	set longMode(value: number) {
		this._longMode = value;
		Module.lv_label_set_long_mode(this.lvObj, value);
	}
	set recolor(value: boolean) {
		this._recolor = value;
		Module.lv_label_set_recolor(this.lvObj, value);
	}
	get recolor(): boolean {
		return this._recolor;
	}
	constructor(name: string, lvObj: LvObjT) {
		super(name, lvObj);
		this._text = Module.lv_label_get_text(lvObj);
		this._longMode = Module.lv_label_get_long_mode(lvObj);
	}
}

export class LVGL_ShapeLabel extends LvglBase {
	override Type = "Label";

	override lvglCreate(parent: LvObjT) {
		this._lvglObj = Module.lv_label_create(parent);
		this._widget = new LV_Label(this.Type, this._lvglObj);
	}

	override createStyle(stateCount: number) {
		// 向 mainStyles 添加属性
		const mainStyles = this._styles.find(style => style[0] === "Main")?.[1];
		if (mainStyles) {
			mainStyles.push(["Text", new LV_Text(this.lvglObj, lv_part_t.LV_PART_MAIN, this.State!, stateCount)]);
			mainStyles.push(["Transform", new LV_Transform(this.lvglObj, lv_part_t.LV_PART_MAIN, this.State!, stateCount)]);
		}
	}

	override setValue(value: any): void {
		if (typeof value === "string") {
			(this._widget as LV_Label).text = value;
		} else if (typeof value === "number") {
			(this._widget as LV_Label).text = value.toString();
		} else {
			console.warn("Label value must be a string or number");
		}
	}
}
