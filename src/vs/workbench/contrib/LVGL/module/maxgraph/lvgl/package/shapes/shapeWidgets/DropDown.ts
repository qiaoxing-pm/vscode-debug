


import { Module } from "../../LvglModule.js";
import { LvglBase, LV_Obj } from "../lvglBase.js"
import { CreateBaseStyle, LV_Text, LV_Transform } from "../lvglStyle.js";
import { lv_dir_t, lv_part_t } from "../../lvglEnums.js";

export class LV_DropDown extends LV_Obj {
	_options = "";
	_dir = lv_dir_t.LV_DIR_NONE;
	_selectedHighlight = true;
	_baseText = "";

	get options() {
		return this._options;
	}
	set options(value: string) {
		this._options = value;
		Module.lv_dropdown_set_options(this.lvObj, value);
	}
	get dir() {
		return this._dir;
	}
	set dir(value: lv_dir_t) {
		this._dir = value;
		Module.lv_dropdown_set_dir(this.lvObj, value);
	}
	get selectedHighlight() {
		return this._selectedHighlight;
	}
	set selectedHighlight(value: boolean) {
		this._selectedHighlight = value;
		Module.lv_dropdown_set_selected_highlight(this.lvObj, value);
	}
	get baseText() {
		return this._baseText;
	}
	set baseText(value: string) {
		this._baseText = value;
		Module.lv_dropdown_set_text(this.lvObj, value);
	}
	constructor(name: string, lvObj: LvObjT) {
		super(name, lvObj);
		this._options = Module.lv_dropdown_get_options(lvObj);
		this._dir = Module.lv_dropdown_get_dir(lvObj);
		this._selectedHighlight = Module.lv_dropdown_get_selected_highlight(lvObj);
	}
}

export class LVGL_ShapeDropDown extends LvglBase {
	override Type = "DropDown";

	override lvglCreate(parent: LvObjT) {
		this._lvglObj = Module.lv_dropdown_create(parent);
		this._widget = new LV_DropDown(this.Type, this._lvglObj);
	}

	override createStyle(stateCount: number) {
		// 向 mainStyles 添加属性
		const mainStyles = this._styles.find(style => style[0] === "Main")?.[1];
		if (mainStyles) {
			mainStyles.push(["Text", new LV_Text(this.lvglObj, lv_part_t.LV_PART_MAIN, this.State!, stateCount)]);
			mainStyles.push(["Transform", new LV_Transform(this.lvglObj, lv_part_t.LV_PART_MAIN, this.State!, stateCount)]);
		}

		const secondStyles = CreateBaseStyle.createStyles(lv_part_t.LV_PART_INDICATOR, stateCount, this.lvglObj, this.State!);
		this._styles.push(["INDICATOR", secondStyles]);
		secondStyles.splice(0, secondStyles.length);
		secondStyles.push(["Text", new LV_Text(this.lvglObj, lv_part_t.LV_PART_INDICATOR, this.State!, stateCount)]);

		// const thirdStyles = new CreateBaseStyle(lv_part_t.LV_PART_ITEMS, this.state!, stateCount).createStyles(this.lvglObj);
		// this._Styles.push(["LIST_MAIN", thirdStyles]);
		// thirdStyles.push(["Text", new LV_Text(stylePart, this.state!, stateCount)]);

		// const forthStyles = new CreateBaseStyle(stylePart, this.state!, stateCount).createStyles();
		// this._Styles.push(["LIST_SCROLLBAR", forthStyles]);

		// const fifthStyles = new CreateBaseStyle(stylePart, this.state!, stateCount).createStyles();
		// this._Styles.push(["LIST_SELECTED", fifthStyles]);
		// const fifthStylesDel = fifthStyles.findIndex(style => style[0] === "Paddings");
		// if (fifthStylesDel !== -1) {
		//     fifthStyles.splice(fifthStylesDel, 1);
		// }
		// fifthStyles.push(["Text", new LV_Text(stylePart, this.state!, stateCount)]);
	}


}

