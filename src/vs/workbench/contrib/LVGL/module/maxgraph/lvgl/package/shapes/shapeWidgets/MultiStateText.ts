import { LV_Obj, LvglBase } from "../lvglBase.js";
import { Module } from "../../LvglModule.js";
import { lv_label_long_mode_t } from "../../lvglEnums.js";

export class LV_MultiStateText extends LV_Obj {
	texts: string[] = [];
	_activeIndex: number = 0;
	_longMode: lv_label_long_mode_t = lv_label_long_mode_t.LV_LABEL_LONG_WRAP;
	_selectionStart: number = 0;
	_selectionEnd: number = 0;

	get activeIndex(): number {
		return this._activeIndex;
	}
	set activeIndex(index: number) {
		this._activeIndex = index;
		Module.lv_multistatetext_set_text_active(this.lvObj, index);
	}

	get longMode(): lv_label_long_mode_t {
		return this._longMode;
	}
	set longMode(mode: lv_label_long_mode_t) {
		this._longMode = mode;
		Module.lv_multistatetext_set_long_mode(this.lvObj, mode);
	}

	get selectionStart(): number {
		return this._selectionStart;
	}
	set selectionStart(start: number) {
		this._selectionStart = start;
		Module.lv_multistatetext_set_text_selection_start(this.lvObj, start);
	}

	get selectionEnd(): number {
		return this._selectionEnd;
	}
	set selectionEnd(end: number) {
		this._selectionEnd = end;
		Module.lv_multistatetext_set_text_selection_end(this.lvObj, end);
	}

	addText(text: string) {
		if (!this.lvObj) {
			console.warn("LV_MultiStateText: lvObj is not initialized.");
			return;
		}
		this.texts.push(text);
		Module.lv_multistatetext_add_text(this.lvObj, text);
	}

	setText(idx: number, text: string) {
		if (!this.lvObj) {
			console.warn("LV_MultiStateText: lvObj is not initialized.");
			return;
		}
		this.texts[idx] = text;
		Module.lv_multistatetext_set_text_index(this.lvObj, text, idx);
	}

	override pickAttributes(): { [key: string]: any; } {
		const baseAttrs = super.pickAttributes();
		return {
			...baseAttrs,
			texts: this.texts,
			setText: this.setText.bind(this),
			addText: this.addText.bind(this)
		};
	}

	override toXML(doc: XMLDocument): Element | null {
		let ele = super.toXML(doc);
		if (!ele && this.texts.length > 0) {
			ele = doc.createElement("MultiStateText");
		} else if (!ele) {
			return null; // No texts to serialize
		}
		let str = this.texts.join(",");
		ele.setAttribute("texts", str);
		return ele;
	}

	override fromXML(element: Element): void {
		if (element.tagName !== "MultiStateText") {
			throw new Error("Invalid element for MultiStateText");
		}
		super.fromXML(element);
		const texts = element.getAttribute("texts");
		if (texts) {
			this.texts = texts.split(",").map(text => text.trim());
			this.texts.forEach((text, idx) => {
				Module.lv_multistatetext_set_text_index(this.lvObj, text, idx);
			});
		}
	}
}

export class LVGL_ShapeMultiStateText extends LvglBase {
	override Type = "MultiStateText";

	override lvglCreate(parent: LvObjT): void {
		this._lvglObj = Module.lv_multistatetext_create(parent);
		this._widget = new LV_MultiStateText("MultiStateText", this._lvglObj);
	}
}
