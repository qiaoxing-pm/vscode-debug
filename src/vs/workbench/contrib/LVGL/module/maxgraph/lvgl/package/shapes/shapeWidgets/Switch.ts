import { lv_part_t } from "../../lvglEnums.js";
import { Module } from "../../LvglModule.js";
import { LvglBase, LV_Obj } from "../lvglBase.js"
import { CreateBaseStyle, LV_Animation, LV_Transform } from "../lvglStyle.js";

export class LV_Switch extends LV_Obj {

}

export class LVGL_ShapeSwitch extends LvglBase {
	override Type = "Switch";

	override lvglCreate(parent: LvObjT) {
		this._lvglObj = Module.lv_switch_create(parent);
		this._widget = new LV_Switch(this.Type, this._lvglObj);
	}


	override createStyle(stateCount: number) {
		// 向 mainStyles 添加属性
		const mainStyles = this._styles.find(style => style[0] === "Main")?.[1];
		if (mainStyles) {
			const mainStylesDel = mainStyles.findIndex(style => style[0] === "Paddings");
			if (mainStylesDel !== -1) {
				mainStyles.splice(mainStylesDel, 1);
			}
			mainStyles.push(["Animation", new LV_Animation(this.lvglObj, lv_part_t.LV_PART_MAIN, this.State!, stateCount)]);
			mainStyles.push(["Transform", new LV_Transform(this.lvglObj, lv_part_t.LV_PART_MAIN, this.State!, stateCount)]);
		}

		const secondStyles = CreateBaseStyle.createStyles(lv_part_t.LV_PART_INDICATOR, stateCount, this.lvglObj, this.State!);
		this._styles.push(["INDICATOR", secondStyles]);
		const secondStylesDel = secondStyles.findIndex(style => style[0] === "Paddings");
		if (secondStylesDel !== -1) {
			secondStyles.splice(secondStylesDel, 1);
		}

		const thirdStyles = CreateBaseStyle.createStyles(lv_part_t.LV_PART_KNOB, stateCount, this.lvglObj, this.State!);
		this._styles.push(["KNOB", thirdStyles]);
	}

}
