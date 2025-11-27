import { lv_part_t } from "../../lvglEnums.js";
import { Module } from "../../LvglModule.js";
import { LvglBase, LV_Obj } from "../lvglBase.js"
import { CreateBaseStyle, LV_Text, LV_Transform } from "../lvglStyle.js";

export class LV_Panel extends LV_Obj { }

export class LVGL_ShapePanel extends LvglBase {
	static id = 1
	constructor(type: string, id: number) {
		if (id != null) {
			LVGL_ShapePanel.id = id;
		} else {
			id = LVGL_ShapePanel.id + 1;
		}
		super("Panel", id.toString());
	}

	override lvglCreate(parent: LvObjT) {
		this._lvglObj = Module.lv_obj_create(parent);
		this._widget = new LV_Panel(this.Type, this._lvglObj);
	}

	override createStyle(stateCount: number) {


		// 向 mainStyles 添加属性
		const mainStyles = this._styles.find(style => style[0] === "Main")?.[1];
		if (mainStyles) {
			mainStyles.push(["Text", new LV_Text(this.lvglObj, lv_part_t.LV_PART_MAIN, this.State!, stateCount)]);
			mainStyles.push(["Transform", new LV_Transform(this.lvglObj, lv_part_t.LV_PART_MAIN, this.State!, stateCount)]);
		}
		const secondStyles = CreateBaseStyle.createStyles(lv_part_t.LV_PART_SCROLLBAR, stateCount, this.lvglObj, this.State!);
		this._styles.push(["SCROLLBAR", secondStyles]);
	}


}

