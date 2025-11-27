import { Module } from "../../LvglModule.js";
import { LvglBase, LV_Obj } from "../lvglBase.js"
import { CreateBaseStyle } from "../lvglStyle.js";
import { lv_part_t, lv_scale_mode_t } from "../../lvglEnums.js";

export type LvListItem = {
	type: "text" | "button";
	text: string;
	icon?: string; // 仅在 type 为 "button" 时使用
	desc?: LvImgDscT; // 仅在 type 为 "button" 时使用
	obj: LvObjT; // 关联的 LVGL 对象
}

export class LV_List extends LV_Obj {
	items: LvListItem[] = []; // 存储列表项

	constructor(name: string, lvObj: LvObjT) {
		super(name, lvObj);
		// this.addText("List");
	}

	addButton(label: string, icon: string, isCustom: boolean = false) {
		const btn = Module.lv_list_add_button(this.lvObj, icon, label);
		this.items.push({
			type: "button",
			text: label,
			icon: !isCustom ? icon : "",
			obj: btn,
		})
		return btn;
	}

	addText(text: string) {
		const textObj = Module.lv_list_add_text(this.lvObj, text);
		this.items.push({
			type: "text",
			text: text,
			obj: textObj,
		})
		return textObj;
	}

	rename(idx: number) {
		const item = this.items[idx];
		if (!item) {
			console.warn("Index out of bounds");
			return;
		}
		const obj = item.obj;
		if (item.type === "button") {

		} else {
			Module.lv_label_set_text(obj, item.text);
		}
	}

	override toXML(doc: XMLDocument): Element | null {
		const listElement = doc.createElement("List");
		listElement.setAttribute("name", this.name);
		this.items.forEach(item => {
			const itemElement = doc.createElement("Item");
			itemElement.setAttribute("type", item.type);
			itemElement.setAttribute("text", item.text);
			if (item.icon) {
				itemElement.setAttribute("icon", item.icon);
			}
			listElement.appendChild(itemElement);
		});
		return listElement;
	}

	override fromXML(element: Element): void {
		super.fromXML(element);
		this.name = element.getAttribute("name") || "List";
		this.items = [];
		const itemElements = element.getElementsByTagName("Item");
		for (let i = 0; i < itemElements.length; i++) {
			const itemElement = itemElements[i];
			const type = itemElement.getAttribute("type") || "text";
			const text = itemElement.getAttribute("text") || "";
			const icon = itemElement.getAttribute("icon") || "";
			if (type === "button") {
				this.addButton(text, icon);
			} else {
				this.addText(text);
			}
		}
	}
}

export class LVGL_ShapeList extends LvglBase {
	override Type = "List";

	override lvglCreate(parent: LvObjT): void {
		this._lvglObj = Module.lv_list_create(parent);
		this._widget = new LV_List("List", this._lvglObj);
	}

	override createStyle(stateCnt: number): void {
		const itemsStyle = CreateBaseStyle.createStyles(lv_part_t.LV_PART_SCROLLBAR, stateCnt, this.lvglObj, this.State!);
		this._styles.push(["SCROLLBAR", itemsStyle]);
	}
}
