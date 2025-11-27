import { lv_anim_enable_t, lv_arc_mode_t, lv_part_t, lv_roller_mode_t } from "../../lvglEnums.js";
import { Module } from "../../LvglModule.js";
import { LvglBase, LV_Obj } from "../lvglBase.js"
import {
	CreateBaseStyle, LV_Background,
	LV_Shadow, LV_Text, LV_Transform,
} from "../lvglStyle.js";

export class LV_Roller extends LV_Obj {
	_mode: lv_roller_mode_t = lv_roller_mode_t.LV_ROLLER_MODE_NORMAL;
	_visibleRowCount: number = 3; // 默认可见行数为3
	_options: string = "";
	_selected: number = 0;
	get mode() {
		return this._mode;
	}
	set mode(value: lv_roller_mode_t) {
		this._mode = value;
		Module.lv_roller_set_options(this.lvObj, this._options, value);
	}

	get options() {
		return this._options;
	}
	set options(value: string) {
		this._options = value;
		Module.lv_roller_set_options(this.lvObj, value, this._mode);
	}

	get selected() {
		return this._selected;
	}
	set selected(value: number) {
		this._selected = value;
		Module.lv_roller_set_selected(this.lvObj, value, lv_anim_enable_t.LV_ANIM_ON);
	}
	get visibleRowCount() {
		return this._visibleRowCount;
	}
	set visibleRowCount(value: number) {
		this._visibleRowCount = value;
		Module.lv_roller_set_visible_row_count(this.lvObj, value);
	}

	constructor(name: string, lvObj: LvObjT) {
		super(name, lvObj);
		// this._mode = Module.lv_roller_get_mode(lvObj);
		this._options = Module.lv_roller_get_options(lvObj);
		this._selected = Module.lv_roller_get_selected(lvObj);
		this.visibleRowCount = 3;
	}
}

export class LVGL_ShapeRoller extends LvglBase {
	override Type = "Roller";

	override lvglCreate(parent: LvObjT) {
		this._lvglObj = Module.lv_roller_create(parent);
		this._widget = new LV_Roller("Roller", this._lvglObj);
	}

	override createStyle(stateCount: number) {

		// 向 mainStyles 添加属性
		const mainStyles = this._styles.find(style => style[0] === "Main")?.[1];
		if (mainStyles) {
			const mainStylesDel = mainStyles.findIndex(style => style[0] === "Paddings");
			if (mainStylesDel !== -1) {
				mainStyles.splice(mainStylesDel, 1);
			}
			mainStyles.push(["Text", new LV_Text(this.lvglObj, lv_part_t.LV_PART_MAIN, this.State!, stateCount)]);
			mainStyles.push(["Transform", new LV_Transform(this.lvglObj, lv_part_t.LV_PART_MAIN, this.State!, stateCount)]);
		}

		const secondStyles = CreateBaseStyle.createStyles(lv_part_t.LV_PART_SELECTED, stateCount, this.lvglObj, this.State!);
		this._styles.push(["SELECTED", secondStyles]);
		const secondStylesDel = secondStyles.findIndex(style => style[0] === "Paddings");
		if (secondStylesDel !== -1) {
			secondStyles.splice(secondStylesDel, 1);
		}
		secondStyles.push(["Text", new LV_Background(this.lvglObj, lv_part_t.LV_PART_MAIN, this.State!, stateCount)]);
	}

}

