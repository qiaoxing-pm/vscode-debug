import { LV_Obj, LvglBase } from "../lvglBase.js";
import { Module } from "../../LvglModule.js";

export class LV_MultiStateNum extends LV_Obj {
	values: number[] = [];
	_activeIndex = 0;
	_radix: 2 | 8 | 10 | 16 = 10;
	_padZero = false;
	_digitCount = 5;
	_digitPos = 0;
	_step = 1;
	_min = 0;
	_max = 9999.0;
	_showSign = false;

	get activeIndex() {
		return this._activeIndex;
	}
	set activeIndex(value: number) {
		this._activeIndex = value;
		Module.lv_multistatenum_set_active_index(this.lvObj, value);
	}
	get radix() {
		return this._radix;
	}
	set radix(value: 2 | 8 | 10 | 16) {
		this._radix = value;
		Module.lv_multistatenum_set_radix(this.lvObj, value);
	}
	get padZero() {
		return this._padZero;
	}
	set padZero(value: boolean) {
		this._padZero = value;
		Module.lv_multistatenum_set_pad_zero(this.lvObj, value);
	}
	get digitCount() {
		return this._digitCount;
	}
	set digitCount(value: number) {
		this._digitCount = value;
		Module.lv_multistatenum_set_digit_format(this.lvObj, value, this._digitPos);
	}
	get digitPos() {
		return this._digitPos;
	}
	set digitPos(value: number) {
		this._digitPos = value;
		Module.lv_multistatenum_set_digit_format(this.lvObj, this._digitCount, value);
	}
	get step() {
		return this._step;
	}
	set step(value: number) {
		this._step = value;
		Module.lv_multistatenum_set_step(this.lvObj, value);
	}
	get min() {
		return this._min;
	}
	set min(value: number) {
		this._min = value;
		Module.lv_multistatenum_set_range(this.lvObj, value, this._max);
	}
	get max() {
		return this._max;
	}
	set max(value: number) {
		this._max = value;
		Module.lv_multistatenum_set_range(this.lvObj, this._min, value);
	}
	get showSign() {
		return this._showSign;
	}
	set showSign(value: boolean) {
		this._showSign = value;
		Module.lv_multistatenum_set_show_sign(this.lvObj, value);
	}

	increment() {
		Module.lv_multistatenum_increment(this.lvObj);
	}
	decrement() {
		Module.lv_multistatenum_decrement(this.lvObj);
	}

	addValue(value: number) {
		if (!this.lvObj) {
			console.warn("LV_MultiStateNum: lvObj is not initialized.");
			return;
		}
		this.values.push(value);
		Module.lv_multistatenum_add_value(this.lvObj, value);
	}

	setValue(idx: number, value: number) {
		if (!this.lvObj) {
			console.warn("LV_MultiStateNum: lvObj is not initialized.");
			return;
		}
		if (idx < 0 || idx >= this.values.length) {
			console.warn(`LV_MultiStateNum: Index ${idx} out of bounds.`);
			return;
		}
		this.values[idx] = value;
		Module.lv_multistatenum_set_value_index(this.lvObj, value, idx);
	}

	override pickAttributes(): { [key: string]: any; } {
		const attrs = super.pickAttributes();
		attrs.values = this.values.slice();
		attrs.addValue = (value: number) => {
			this.addValue(value);
		}
		attrs.setValue = (idx: number, value: number) => {
			this.setValue(idx, value);
		}
		return attrs;
	}

	override toXML(doc: XMLDocument): Element | null {
		let ele = super.toXML(doc);
		if (!ele && this.values.length > 0) {
			ele = doc.createElement("MultiStateNum");
		} else if (!ele) {
			return null;
		}
		ele.setAttribute("values", this.values.join(","));
		return ele;
	}

	override fromXML(element: Element): void {
		if (element.tagName !== "MultiStateNum") {
			throw new Error("Invalid element for MultiStateNum");
		}
		super.fromXML(element);
		const values = element.getAttribute("values");
		if (values) {
			this.values = values.split(",").map(Number);
			this.values.forEach((value, idx) => {
				Module.lv_multistatenum_set_value_index(this.lvObj, idx, value);
			});
		}
	}
}

export class LVGL_ShapeMultiStateNum extends LvglBase {
	override Type = "MultiStateNum";

	override lvglCreate(parent: LvObjT): void {
		this._lvglObj = Module.lv_multistatenum_create(parent);
		this._widget = new LV_MultiStateNum("MultiStateNum", this._lvglObj);
	}
}
