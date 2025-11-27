import { BaseDisplay, PureData } from "./PureData.js";
import { Module, genLvObjImageDec } from "../../lvgl/package/LvglModule.js";
import { lv_text_align_t, lv_text_decor_t } from "../static/enums.js";
import { LvColorToHexStr, hexStrToLvColor } from "../../lvgl/tools/color.js";

export class ButtonDisplay extends BaseDisplay {
	_curState = 0; // 0: OFF, 1: ON, 2: disabled
	stateNum;
	style: LvButtonStyleT;
	_text: string[] = [];
	_textAlign: lv_text_align_t[] = [];
	_textDecor: lv_text_decor_t[] = [];
	_textColor: string[] = [];
	_image: string[] = [];
	imageDec: (LvImgDscT | null)[] = [];
	_bgColor: string[] = [];
	_bgOpa: number[] = [];

	constructor(lvObj: LvObjT, style: LvButtonStyleT) {
		super(lvObj);
		this.stateNum = Module.lv_button_style_get_state_num(style);
		this.style = style;
		for (let i = 0; i < this.stateNum; i++) {
			this._text.push(Module.lv_button_style_get_text(style, i));
			const lvColor = Module.lv_button_style_get_text_color(style, i);
			let c = LvColorToHexStr(lvColor);
			this._textColor.push(c);
			this._textAlign.push(Module.lv_button_style_get_text_align(style, i));
			this._textDecor.push(Module.lv_button_style_get_text_decor(style, i));
			this._bgOpa.push(Module.lv_button_style_get_bg_opa(style, i));
			this._image.push("");
			this._bgColor.push(LvColorToHexStr(Module.lv_button_style_get_bg_color(style, i)));
			this.imageDec.push(null);
		}
	}

	updateImage(w: number, h: number): void {
		const dsc = this.imageDec[this._curState];
		Module.lv_image_buf_free(dsc);
		this.imageDec[this._curState] = null;
		genLvObjImageDec(this._image[this._curState], this.lvObj, 4, true, (obj, image) => {
			this.imageDec[this._curState] = image;
			Module.lv_button_style_set_image(this.style, this._curState, image);
			Module.lv_button_set_state(this.lvObj, this._curState, this.style);
		});
	}

	get curState() {
		return this._curState;
	}
	set curState(val: number) {
		this._curState = val;
		Module.lv_button_set_state(this.lvObj, val, this.style);
	}

	get text() {
		return this._text[this._curState];
	}
	set text(val: string) {
		this._text[this._curState] = val;
		Module.lv_button_style_set_text(this.style, this._curState, val);
		Module.lv_button_set_state(this.lvObj, this._curState, this.style);
	}

	get bgColor() {
		return this._bgColor[this._curState];
	}
	set bgColor(val: string) {
		this._bgColor[this._curState] = val;
		const color = hexStrToLvColor(val);
		Module.lv_button_style_set_bg_color(this.style, this._curState, color);
		color.delete();
		Module.lv_button_set_state(this.lvObj, this._curState, this.style);
	}

	get bgOpa() {
		return this._bgOpa[this._curState];
	}
	set bgOpa(val: number) {
		this._bgOpa[this._curState] = val;
		Module.lv_button_style_set_bg_opa(this.style, this._curState, val);
		Module.lv_button_set_state(this.lvObj, this._curState, this.style);
	}

	get textAlign() {
		return this._textAlign[this._curState];
	}
	set textAlign(val: lv_text_align_t) {
		this._textAlign[this._curState] = val;
		Module.lv_button_style_set_text_align(this.style, this._curState, val);
		Module.lv_button_set_state(this.lvObj, this._curState, this.style);
	}
	get textDecor() {
		return this._textDecor[this._curState];
	}
	set textDecor(val: lv_text_decor_t) {
		this._textDecor[this._curState] = val;
		Module.lv_button_style_set_text_decor(this.style, this._curState, val);
		Module.lv_button_set_state(this.lvObj, this._curState, this.style);
	}
	get textColor() {
		return this._textColor[this._curState];
	}
	set textColor(val: string) {
		this._textColor[this._curState] = val;
		const color = hexStrToLvColor(val);
		Module.lv_button_style_set_text_color(this.style, this._curState, color);
		color.delete();
		Module.lv_button_set_state(this.lvObj, this._curState, this.style);
	}

	get image() {
		return this._image[this._curState];
	}
	set image(val: string) {
		if (val === this._image[this._curState]) return;
		const imgDsc = this.imageDec[this._curState];
		if (!val || imgDsc) {
			Module.lv_image_buf_free(imgDsc);
			this.imageDec[this._curState] = null;
			if (!val) {
				this._image[this._curState] = val;
				return
			};
		}
		genLvObjImageDec(val, this.lvObj, 4, true, (obj, image) => {
			Module.lv_button_style_set_image(this.style, this._curState, image);
			this._image[this._curState] = val;
			this.imageDec[this._curState] = image;
			Module.lv_button_set_state(this.lvObj, this._curState, this.style);
		});
	}

	override pickAttributes(): { [key: string]: any; } {
		return {
			...super.pickAttributes(),
			stateNum: this.stateNum
		}
	}

	override toXML(doc: Document, name: string, _defaultObj: PureData): Element | null {
		// const el = doc.createElement("Display");
		const dotStr = ",".repeat(this.stateNum - 1);
		const el = doc.createElement(name);
		const defaultObj = _defaultObj as ButtonDisplay;
		let hasDiff = false;
		for (const _key in this) {
			if (!_key.startsWith("_") || _key === "_curState") {
				continue;
			}
			// const key = _key.substring(1) as keyof this;
			// 带下划线的才是数组，不带的是当前状态的值
			const key = _key as keyof this;
			const value = this[key];
			const value2 = defaultObj[key as keyof ButtonDisplay];
			let valueStr = "";
			if (value instanceof Array && value2 instanceof Array) {
				for (let i = 0; i < this.stateNum; i++) {
					if (value[i] !== value2[i]) {
						valueStr += `${value[i]}`;
					}
					if (i !== this.stateNum - 1) {
						valueStr += ",";
					}
				}
			} else if (value !== value2) {
				valueStr = (value as any).toString();
			}
			if (valueStr && valueStr !== dotStr) {
				hasDiff = true;
				// 去掉下划线
				el.setAttribute((key as string).substring(1), valueStr);
			}
		}
		return hasDiff ? el : null;
	}
	override fromXML(node: Element): void {
		const attrs = node.attributes;
		const kvToObj = (obj: any, key: string, value: string) => {
			if (!value) return;
			const k = key as keyof this;
			if (typeof this[k] === "number") {
				obj[k] = Number(value);
			} else {
				obj[k] = value;
			}
		}
		for (let i = 0; i < attrs.length; i++) {
			const attr = attrs[i];
			const _key = "_" + attr.name;
			if (_key in this) {
				const v = (this as any)[_key];
				if (v instanceof Array) {
					const arr = attr.value.split(",");
					for (let j = 0; j < this.stateNum; j++) {
						this._curState = j;
						kvToObj(this, _key.substring(1), arr[j]);
					}
				} else {
					kvToObj(this, _key.substring(1), attr.value);
				}
			}
		}
		this._curState = 0;
	}
}
