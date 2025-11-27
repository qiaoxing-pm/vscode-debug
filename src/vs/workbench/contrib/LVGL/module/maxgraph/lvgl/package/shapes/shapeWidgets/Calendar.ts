import { lv_part_t } from "../../lvglEnums.js";
import { Module } from "../../LvglModule.js";
import { LvglBase, LV_Obj } from "../lvglBase.js";
import { CreateBaseStyle, LV_Transform } from "../lvglStyle.js";

export class LV_Calendar extends LV_Obj {
	_showedMonth = 0;
	_showedYear = 0;
	_todayYear = 0;
	_todayMonth = 0;
	_todayDay = 0;
	get showedMonth() {
		return this._showedMonth;
	}
	set showedMonth(value: number) {
		this._showedMonth = value;
		Module.lv_calendar_set_showed_date(
			this.lvObj,
			this._showedYear,
			this._showedMonth
		);
	}
	get showedYear() {
		return this._showedYear;
	}
	set showedYear(value: number) {
		this._showedYear = value;
		Module.lv_calendar_set_showed_date(
			this.lvObj,
			this._showedYear,
			this._showedMonth
		);
	}
	get todayYear() {
		return this._todayYear;
	}
	set todayYear(value: number) {
		this._todayYear = value;
		this.showedYear = value; // 同时更新显示的年份
		Module.lv_calendar_set_today_date(
			this.lvObj,
			this._todayYear,
			this._todayMonth,
			this._todayDay
		);
	}
	get todayMonth() {
		return this._todayMonth;
	}
	set todayMonth(value: number) {
		this._todayMonth = value;
		this.showedMonth = value; // 同时更新显示的月份
		Module.lv_calendar_set_today_date(
			this.lvObj,
			this._todayYear,
			this._todayMonth,
			this._todayDay
		);
	}
	get todayDay() {
		return this._todayDay;
	}
	set todayDay(value: number) {
		this._todayDay = value;
		Module.lv_calendar_set_today_date(
			this.lvObj,
			this._todayYear,
			this._todayMonth,
			this._todayDay
		);
	}
	constructor(name: string, lvObj: LvObjT) {
		super(name, lvObj);
		const date = new Date();
		this.todayYear = date.getFullYear();
		this.todayMonth = date.getMonth() + 1; // 月份从0开始，所以需要加1
		this.todayDay = date.getDate();

		this.showedYear = this.todayYear;
		this.showedMonth = this.todayMonth;
	}
}

export class LVGL_ShapeCalendar extends LvglBase {
	override Type = "Calendar";

	override lvglCreate(parent: LvObjT) {
		this._lvglObj = Module.lv_calendar_create(parent);
		this._widget = new LV_Calendar(this.Type, this._lvglObj);
	}

	override createStyle(stateCount: number) {
		// 向 mainStyles 添加属性
		const mainStyles = this._styles.find((style) => style[0] === "Main")?.[1];
		if (mainStyles) {
			mainStyles.push([
				"Transform",
				new LV_Transform(this.lvglObj, lv_part_t.LV_PART_MAIN, this.State!),
			]);
		}
		const secondStyles = CreateBaseStyle.createStyles(
			lv_part_t.LV_PART_ITEMS,
			stateCount,
			this.lvglObj,
			this.State!
		);
		this._styles.push(["ITEMS", secondStyles]);
	}
}
