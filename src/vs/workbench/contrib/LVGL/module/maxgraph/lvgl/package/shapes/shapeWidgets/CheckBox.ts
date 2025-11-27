import { lv_part_t } from "../../lvglEnums.js";
import { Module } from "../../LvglModule.js";
import { LvglBase, LV_Obj } from "../lvglBase.js";
import { CreateBaseStyle, LV_Text, LV_Transform } from "../lvglStyle.js";

export class LV_CheckBox extends LV_Obj {
	_title = "checkbox";
	get title() {
		return this._title;
	}
	set title(value: string) {
		this._title = value;
		Module.lv_checkbox_set_text(this.lvObj, value);
	}

	constructor(name: string, lvObj: LvObjT) {
		super(name, lvObj);
		this._title = Module.lv_checkbox_get_text(lvObj);
	}
}

export class LVGL_ShapeCheckBox extends LvglBase {
	override Type = "CheckBox";

	override lvglCreate(parent: LvObjT) {
		this._lvglObj = Module.lv_checkbox_create(parent);
		this._widget = new LV_CheckBox(this.Type, this._lvglObj);
	}

	override createStyle(stateCount: number) {
		// 向 mainStyles 添加属性
		const mainStyles = this._styles.find((style) => style[0] === "Main")?.[1];
		if (mainStyles) {
			mainStyles.splice(0, mainStyles.length);
			mainStyles.push([
				"Text",
				new LV_Text(
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
		const secondStyles = CreateBaseStyle.createStyles(
			lv_part_t.LV_PART_KNOB,
			stateCount,
			this.lvglObj,
			this.State!
		);
		// this._Styles.push(["BULLET", secondStyles]);
	}
}
