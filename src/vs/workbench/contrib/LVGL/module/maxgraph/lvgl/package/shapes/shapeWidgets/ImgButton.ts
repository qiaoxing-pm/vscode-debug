import { lv_part_t } from "../../lvglEnums.js";
import { Module } from "../../LvglModule.js";
import { LvglBase, LV_Obj } from "../lvglBase.js"
import { LV_Text, LV_Transform } from "../lvglStyle.js";

export class LV_ImgButton extends LV_Obj {

}


export class LVGL_ShapeImgButton extends LvglBase {
	override Type = "ImgButton";

	override lvglCreate(parent: LvObjT) {
		this._lvglObj = Module.lv_imagebutton_create(parent);
		this._widget = new LV_ImgButton(this.Type, this._lvglObj);
	}


	override createStyle(stateCount: number) {
		// 向 mainStyles 添加属性
		const mainStyles = this._styles.find(style => style[0] === "Main")?.[1];
		if (mainStyles) {
			mainStyles.push(["Text", new LV_Text(this.lvglObj, lv_part_t.LV_PART_MAIN, this.State!, stateCount)]);
			mainStyles.push(["Transform", new LV_Transform(this.lvglObj, lv_part_t.LV_PART_MAIN, this.State!, stateCount)]);
		}
	}


}

