import { Module } from "../../LvglModule.js";
import { LvglBase, LV_Obj } from "../lvglBase.js"
import {
	lv_menu_mode_header_t,
	lv_menu_mode_root_back_button_t,
	lv_label_long_mode_t
} from "../../lvglEnums.js";

export class LV_Menu extends LV_Obj {

	mainPage: LvObjT | null = null;
	_headerMode: lv_menu_mode_header_t = lv_menu_mode_header_t.LV_MENU_HEADER_TOP_FIXED;
	_rootBackMode: lv_menu_mode_root_back_button_t = lv_menu_mode_root_back_button_t.LV_MENU_ROOT_BACK_BUTTON_ENABLED;
	_pageMode: "sidebar" | "page" = "sidebar";

	get headerMode(): lv_menu_mode_header_t {
		return this._headerMode;
	}
	set headerMode(value: lv_menu_mode_header_t) {
		this._headerMode = value;
		Module.lv_menu_set_mode_header(this.lvObj, value);
	}
	get rootBackMode(): lv_menu_mode_root_back_button_t {
		return this._rootBackMode;
	}
	set rootBackMode(value: lv_menu_mode_root_back_button_t) {
		this._rootBackMode = value;
		Module.lv_menu_set_mode_root_back_button(this.lvObj, value);
	}
	get pageMode() {
		return this._pageMode;
	}
	set pageMode(value: "sidebar" | "page") {
		if (this.mainPage == null) {
			console.warn("Main page is not set, cannot change page mode.");
			return;
		}
		this._pageMode = value;
		if (value === "sidebar") {
			Module.lv_menu_set_page(this.lvObj, null);
			Module.lv_menu_set_sidebar_page(this.lvObj, this.mainPage);
		} else {
			Module.lv_menu_set_sidebar_page(this.lvObj, null);
			Module.lv_menu_clear_history(this.lvObj);
			Module.lv_menu_set_page(this.lvObj, this.mainPage);
		}
	}

	constructor(name: string, lvObj: LvObjT) {
		super(name, lvObj);
		this.addMainPage(name);
	}

	addMainPage(title?: string): LvObjT {
		const page = Module.lv_menu_page_create(this.lvObj, title ?? "");
		const section = Module.lv_menu_cont_create(page);
		const label = Module.lv_label_create(section);
		Module.lv_label_set_text(label, "Item Main Page");
		Module.lv_label_set_long_mode(label,
			lv_label_long_mode_t.LV_LABEL_LONG_SCROLL_CIRCULAR);
		Module.lv_menu_set_page(this.lvObj, page);
		this.mainPage = page;
		return section;
	}

	addPage(title: string): LvObjT | null {
		if (this.mainPage == null) {
			return null;
		}
		const subPage = Module.lv_menu_page_create(this.lvObj, "");
		let cont = Module.lv_menu_cont_create(subPage);
		let label = Module.lv_label_create(cont);
		Module.lv_label_set_text(label, `This is the ${title}`);

		cont = Module.lv_menu_cont_create(this.mainPage);
		label = Module.lv_label_create(cont);
		Module.lv_label_set_text(label, title);
		Module.lv_menu_set_load_page_event(this.lvObj, cont, subPage);
		return cont;
	}
}

export class LVGL_ShapeMenu extends LvglBase {
	override Type = "Menu";

	override lvglCreate(parent: LvObjT): void {
		this._lvglObj = Module.lv_menu_create(parent);
		this._widget = new LV_Menu("Menu", this._lvglObj);
	}


}
