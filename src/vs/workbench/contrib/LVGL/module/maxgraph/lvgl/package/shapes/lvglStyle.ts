import type { CellState } from "../../../packages/core/src/index.js";
import {
	lv_border_side_t,
	lv_part_t,
	lv_text_align_t,
	lv_text_decor_t,
	lv_grad_dir_t,
	lv_blend_mode_t,
} from "../lvglEnums.js";
import { StateOpts } from "../lvglOpts.js";
import { Module } from "../LvglModule.js";

import { hexToRgb, LvColorToHexStr, hexStrToLvColor } from "../../tools/color.js";
import { lv_fmt_img_data } from "../../tools/image.js";
import { getDefaultWgtByName } from "./defaultWidgets.js";
import { projectStore } from "../../store/index.js";
import moveChildren, { moveMySelf } from "../../tools/moveChildren.js";
import type { LV_StyleCombine } from "../type.js";

export class StylePart {
	_state: number;
	constructor(state: number) {
		this._state = state;
	}
	get state() {
		return this._state;
	}
	set state(value: number) {
		this._state = value;
	}
}

export class LV_BaseStyle {
	static stateCnt = 7;
	static ignoreProps = ["lvglObj", "name", "_part"];
	// static defalutStyle: LvglBase[] = [];
	widget: LvObjT;
	name: string = "base";
	state: CellState;
	_part: lv_part_t;

	_curStateIdx = 0; // Default state index is "Default" state
	constructor(
		widget: LvObjT,
		part: lv_part_t,
		state: CellState,
		_: number = LV_BaseStyle.stateCnt
	) {
		this._part = part;
		this.widget = widget;
		this.state = state;
		// this._stateCnt = stateCount;
	}

	get curStateIdx() {
		return this._curStateIdx;
	}
	set curStateIdx(value: number) {
		if (value < 0 || value >= LV_BaseStyle.stateCnt) {
			throw new Error("Invalid state index");
		}
		this._curStateIdx = value;
		// todo
	}

	setState(stateIdx: number) {
		this.curStateIdx = stateIdx;
		this._part = this._part | StateOpts[stateIdx].value;
	}

	createDefault() {
		const name = Module.lv_obj_get_class_name(this.widget);
		const widget = getDefaultWgtByName(name);
		if (!widget) {
			return this;
		}
		const Constructor = this.constructor as typeof LV_BaseStyle;
		return new Constructor(widget, this._part, this.state);
	}

	pickAttributes() {
		// 挑选出所有需要修改的属性以及值，保存为一个对象，默认是下划线开头的
		const attrs: { [key: string]: any } = {};
		for (const key of Object.keys(this)) {
			if (
				key.startsWith("_") &&
				this[key as keyof LV_BaseStyle] instanceof Array
			) {
				const arr = this[
					key as keyof LV_BaseStyle
				] as unknown as Array<unknown>;
				attrs[key.slice(1)] = arr[this._curStateIdx];
			}
		}
		return attrs;
	}

	toXML(doc: XMLDocument): Element | null {
		let unequalCnt = 0;
		let hasValueAttriCnt = 0;
		const name = this.constructor.name.split("_")[1];
		const node = doc.createElement(name);
		const mydefault = this.createDefault()!;
		for (const _key of Object.keys(this)) {
			// 这边可以做成一个函数，子类重写，来判断是否是需要忽略的属性
			if (!_key.startsWith("_") || _key === "_part" || _key === "_curStateIdx")
				continue; // 哪些以_开头的属性需要忽略
			// const key = _key.split('_')[1];
			const value = this[_key as keyof LV_BaseStyle] as unknown;
			let str = "";
			const valueArr = value as Array<unknown>;
			valueArr.forEach((v, idx) => {
				const defaultValue = (
					mydefault[_key as keyof LV_BaseStyle] as unknown as Array<unknown>
				)[idx];
				if (v !== defaultValue) {
					// 如果是默认值，则不需要设置
					unequalCnt++;
					if (typeof v === "string") {
						str += v;
					} else if (typeof v === "number" || typeof v === "boolean") {
						str += v.toString();
					} else {
						console.warn(`Unsupported type for attribute ${_key}:`, v);
					}
				}
				str += ",";
			});
			if (unequalCnt !== 0) {
				hasValueAttriCnt++;
				const key = _key.substring(1); // 去掉前缀_
				node.setAttribute(key, str.substring(0, str.length - 1));
				unequalCnt = 0;
			}
		}
		Module.lv_obj_delete(mydefault.widget);
		if (hasValueAttriCnt === 0) {
			// 如果没有任何属性被设置，则不需要创建这个节点
			return null;
		}
		return node;
	}

	fromXML(node: Element) {
		const attrubutes = node.getAttributeNames();
		// 每一个属性目前都是字符串',,,,,,,,'
		for (const attr of attrubutes) {
			const valueStr = node.getAttribute(attr) as string;
			const valueArr = valueStr.split(",");
			// 子类重写，根据属性名来获取值（是否需要字符串转数字）获取默认值
			valueArr.forEach((v, idx) => {
				// 如果是空字符，说明此状态下是默认值
				if (v !== "") {
					this._curStateIdx = idx;
					const type = this.getAttributeType(attr);
					let value = v as any;
					if (type === "number") {
						value = parseInt(v);
					}
					(this as any)[attr] = value;
				}
			});
		}
	}

	getAttributeType(name: string): "string" | "number" {
		return "string";
	}

	setAttribute(name: string, value: string) { }
}

export class LV_Background extends LV_BaseStyle {
	_enableFlag = [] as number[];
	_bgRadius = [] as number[];
	_bgColor = [] as string[];
	_bgOpa = [] as number[];
	_bgThemeColor = [] as string[];
	_bgGradientColor = [] as string[];
	_bgGradientColorOpa = [] as number[];
	_bgGradientTheme = [] as string[];
	_bgMainStop = [] as number[];
	_bgGradientStop = [] as number[];
	_gradientDir = [] as lv_grad_dir_t[];
	_clipCorner = [] as number[];
	constructor(
		widget: LvObjT,
		part: lv_part_t,
		state: CellState,
		stateCnt: number = LV_BaseStyle.stateCnt
	) {
		super(widget, part, state);
		for (let i = 0; i < stateCnt; i++) {
			const partV = part | StateOpts[i].value;
			// console.log(`partV: ${partV}, part: ${part}, state: ${StateOpts[i].value}`);
			this._enableFlag.push(0);
			this._bgRadius.push(Module.lv_obj_get_style_radius(this.widget, partV));
			this._bgColor.push(
				LvColorToHexStr(Module.lv_obj_get_style_bg_color(this.widget, partV))
			);
			this._bgOpa.push(Module.lv_obj_get_style_bg_opa(this.widget, partV));
			// this._bgThemeColor.push(LvColorToStr(Module.lv_obj_get_style_bg_color(this.widget, partV)));
			this._bgGradientColor.push(
				LvColorToHexStr(
					Module.lv_obj_get_style_bg_grad_color(this.widget, partV)
				)
			);
			this._bgMainStop.push(
				Module.lv_obj_get_style_bg_main_stop(this.widget, partV)
			);
			this._bgGradientStop.push(
				Module.lv_obj_get_style_bg_grad_stop(this.widget, partV)
			);
			this._gradientDir.push(
				Module.lv_obj_get_style_bg_grad_dir(this.widget, partV)
			);
			this._clipCorner.push(
				Module.lv_obj_get_style_clip_corner(this.widget, partV)
			);
		}
		// this.bgOpa = 255;
	}
	get enableFlag() {
		return this._enableFlag[this._curStateIdx];
	}
	set enableFlag(value: number) {
		this._enableFlag[this._curStateIdx] = value;
	}

	get bgRadius() {
		return this._bgRadius[this._curStateIdx];
	}
	set bgRadius(value: number) {
		this._bgRadius[this._curStateIdx] = value;
		Module.lv_obj_set_style_radius(
			this.widget,
			value,
			this._part | StateOpts[this._curStateIdx].value
		);
	}
	get bgColor() {
		return this._bgColor[this._curStateIdx];
	}
	set bgColor(value: string) {
		this._bgColor[this._curStateIdx] = value;
		const color = hexStrToLvColor(value);
		Module.lv_obj_set_style_bg_color(
			this.widget,
			color,
			this._part | StateOpts[this._curStateIdx].value
		);
	}
	get bgOpa() {
		return this._bgOpa[this._curStateIdx];
	}
	set bgOpa(value: number) {
		// debugger
		this._bgOpa[this._curStateIdx] = value;
		Module.lv_obj_set_style_bg_opa(
			this.widget,
			value,
			this._part | StateOpts[this._curStateIdx].value
		);
	}
	get bgThemeColor() {
		return this._bgThemeColor[this._curStateIdx];
	}
	set bgThemeColor(value: string) {
		this._bgThemeColor[this._curStateIdx] = value;
		// Module.lv_obj_set_style_bg_color(this.widget, value, this._part | SliderStateOpts[this._curStateIdx].value);
	}

	get bgGradientColor() {
		return this._bgGradientColor[this._curStateIdx];
	}
	set bgGradientColor(value: string) {
		this._bgGradientColor[this._curStateIdx] = value;
		const colorArr = hexToRgb(value);
		const color = Module.lv_color_make(colorArr[0], colorArr[1], colorArr[2]);
		Module.lv_obj_set_style_bg_grad_color(
			this.widget,
			color,
			this._part | StateOpts[this._curStateIdx].value
		);
	}
	get bgGradientColorOpa() {
		return this._bgGradientColorOpa[this._curStateIdx];
	}
	set bgGradientColorOpa(value: number) {
		this._bgGradientColorOpa[this._curStateIdx] = value;
		Module.lv_obj_set_style_bg_grad_opa(
			this.widget,
			value,
			this._part | StateOpts[this._curStateIdx].value
		);
	}
	get bgGradientTheme() {
		return this._bgGradientTheme[this._curStateIdx];
	}
	set bgGradientTheme(value: string) {
		this._bgGradientTheme[this._curStateIdx] = value;
		// Module.lv_obj_set_style_bg_grad_color(this.widget, value, this._part | SliderStateOpts[this._curStateIdx].value);
	}
	get bgMainStop() {
		return this._bgMainStop[this._curStateIdx];
	}
	set bgMainStop(value: number) {
		this._bgMainStop[this._curStateIdx] = value;
		Module.lv_obj_set_style_bg_main_stop(
			this.widget,
			value,
			this._part | StateOpts[this._curStateIdx].value
		);
	}
	get bgGradientStop() {
		return this._bgGradientStop[this._curStateIdx];
	}
	set bgGradientStop(value: number) {
		this._bgGradientStop[this._curStateIdx] = value;
		Module.lv_obj_set_style_bg_grad_stop(
			this.widget,
			value,
			this._part | StateOpts[this._curStateIdx].value
		);
	}

	get gradientDir() {
		return this._gradientDir[this._curStateIdx];
	}
	set gradientDir(value: number) {
		this._gradientDir[this._curStateIdx] = value;
		Module.lv_obj_set_style_bg_grad_dir(
			this.widget,
			value,
			this._part | StateOpts[this._curStateIdx].value
		);
	}

	get clipCorner() {
		return this._clipCorner[this._curStateIdx];
	}
	set clipCorner(value: number) {
		this._clipCorner[this._curStateIdx] = value;
		Module.lv_obj_set_style_clip_corner(
			this.widget,
			value,
			this._part | StateOpts[this._curStateIdx].value
		);
	}

	// get bgColorAlpha() { return this._bgColorAlpha[this._curStateIdx] }
	// set bgColorAlpha(value: number) {
	//     this._bgColorAlpha[this._curStateIdx] = value
	//     Module.lv_obj_set_style_bg_opa(this.widget, value, this._part | SliderStateOpts[this._curStateIdx].value);
	// }
	override getAttributeType(name: string): "string" | "number" {
		if (
			name === "bgRadius" ||
			name === "bgOpa" ||
			name === "bgMainStop" ||
			name === "bgGradientStop" ||
			name === "gradientDir" ||
			name === "clipCorner"
		) {
			return "number";
		}
		return "string";
	}
}

export class LV_BackgroundImage extends LV_BaseStyle {
	_imageDecT: (LvImgDscT | null)[] = [];
	_enableFlag = [] as number[];
	_bgImage = [] as string[];
	_bgImageOpa = [] as number[];
	_bgImageRecolor = [] as string[];
	_bgImageRecolorAlpha = [] as number[];
	_bgImageRecolorTheme = [] as string[];
	_bgImageTiled = [] as boolean[];
	constructor(
		widget: LvObjT,
		part: lv_part_t,
		state: CellState,
		stateCnt: number = LV_BaseStyle.stateCnt
	) {
		super(widget, part, state);
		for (let i = 0; i < stateCnt; i++) {
			this._enableFlag.push(0);
			this._bgImage.push("");
			const partV = part | StateOpts[i].value;
			this._bgImageOpa.push(
				Module.lv_obj_get_style_bg_image_opa(this.widget, partV)
			);
			this._bgImageRecolor.push(
				LvColorToHexStr(
					Module.lv_obj_get_style_bg_image_recolor(this.widget, partV)
				)
			);
			this._bgImageRecolorAlpha.push(
				Module.lv_obj_get_style_bg_image_recolor_opa(this.widget, partV)
			);
			this._bgImageTiled.push(
				Module.lv_obj_get_style_bg_image_tiled(this.widget, partV)
			);
			this._bgImageRecolorTheme.push("#000");
		}
	}
	get imageDecT() {
		return this._imageDecT[this._curStateIdx];
	}
	set imageDecT(value: LvImgDscT | null) {
		this._imageDecT[this._curStateIdx] = value;
	}

	get enableFlag() {
		return this._enableFlag[this._curStateIdx];
	}
	set enableFlag(value: number) {
		this._enableFlag[this._curStateIdx] = value;
	}
	get bgImage() {
		return this._bgImage[this._curStateIdx];
	}
	set bgImage(src: string) {
		if (this.imageDecT) {
			Module.lv_image_buf_free(this.imageDecT);
			this.imageDecT = null;
		}
		if (!src) {
			Module.lv_obj_set_style_bg_image_src(
				this.widget,
				null,
				this._part | StateOpts[this._curStateIdx].value
			);
			return;
		}
		Module.lv_obj_update_layout(this.widget);
		const w = Module.lv_obj_get_width(this.widget);
		const h = Module.lv_obj_get_height(this.widget);
		if (!w || !h) {
			return;
		}
		const dsc = lv_fmt_img_data(src, w, h, 3, true);
		if (!dsc) {
			console.warn(`Image "${src}" not found or invalid.`);
			return;
		}
		this.imageDecT = dsc;
		this._bgImage[this._curStateIdx] = src;
		Module.lv_obj_set_style_bg_image_src(
			this.widget,
			dsc,
			this._part | StateOpts[this._curStateIdx].value
		);
	}
	get bgImageOpa() {
		return this._bgImageOpa[this._curStateIdx];
	}
	set bgImageOpa(value: number) {
		this._bgImageOpa[this._curStateIdx] = value;
		Module.lv_obj_set_style_bg_image_opa(
			this.widget,
			value,
			this._part | StateOpts[this._curStateIdx].value
		);
	}

	get bgImageRecolor() {
		return this._bgImageRecolor[this._curStateIdx];
	}
	set bgImageRecolor(value: string) {
		this._bgImageRecolor[this._curStateIdx] = value;
		const color = hexStrToLvColor(value);
		Module.lv_obj_set_style_bg_image_recolor(
			this.widget,
			color,
			this._part | StateOpts[this._curStateIdx].value
		);
	}

	get bgImageRecolorAlpha() {
		return this._bgImageRecolorAlpha[this._curStateIdx];
	}
	set bgImageRecolorAlpha(value: number) {
		this._bgImageRecolorAlpha[this._curStateIdx] = value;
		Module.lv_obj_set_style_bg_image_recolor_opa(
			this.widget,
			value,
			this._part | StateOpts[this._curStateIdx].value
		);
	}

	get bgImageRecolorTheme() {
		return this._bgImageRecolorTheme[this._curStateIdx];
	}
	set bgImageRecolorTheme(value: string) {
		this._bgImageRecolorTheme[this._curStateIdx] = value;
	}

	get bgImageTiled() {
		return this._bgImageTiled[this._curStateIdx];
	}
	set bgImageTiled(value: boolean) {
		this._bgImageTiled[this._curStateIdx] = value;
		Module.lv_obj_set_style_bg_image_tiled(
			this.widget,
			value,
			this._part | StateOpts[this._curStateIdx].value
		);
	}

	override getAttributeType(name: string): "string" | "number" {
		if (
			name === "bgImageOpa" ||
			name === "bgImageRecolorAlpha" ||
			name === "bgImageTiled"
		) {
			return "number";
		}
		return "string";
	}
}

export class LV_Border extends LV_BaseStyle {
	_enableFlag = [] as number[];
	_borderColor = [] as string[];
	_borderColorOpa = [] as number[];
	_borderTheme = [] as string[];
	_borderWidth = [] as number[];
	_borderSide = [] as number[];
	_post = [] as boolean[];
	constructor(
		widget: LvObjT,
		part: lv_part_t,
		state: CellState,
		stateCnt: number = LV_BaseStyle.stateCnt
	) {
		super(widget, part, state);
		for (let i = 0; i < stateCnt; i++) {
			this._enableFlag.push(0);
			const partV = part | StateOpts[i].value;
			this._borderColor.push(
				LvColorToHexStr(
					Module.lv_obj_get_style_border_color(this.widget, partV)
				)
			);
			this._borderColorOpa.push(
				Module.lv_obj_get_style_border_opa(this.widget, partV)
			);
			// this._borderTheme.push(LvColorToStr(Module.lv_obj_get_style_border_color(this.widget, partV)));
			this._borderTheme.push("#000");
			this._borderWidth.push(
				Module.lv_obj_get_style_border_width(this.widget, partV)
			);
			this._borderSide.push(
				Module.lv_obj_get_style_border_side(this.widget, partV)
			);
			this._post.push(Module.lv_obj_get_style_border_post(this.widget, partV));
		}
	}
	get enableFlag() {
		return this._enableFlag[this._curStateIdx];
	}
	set enableFlag(value: number) {
		this._enableFlag[this._curStateIdx] = value;
	}
	get borderColor() {
		return this._borderColor[this._curStateIdx];
	}
	set borderColor(value: string) {
		this._borderColor[this._curStateIdx] = value;
		const colorArr = hexToRgb(value);
		const color = Module.lv_color_make(colorArr[0], colorArr[1], colorArr[2]);
		Module.lv_obj_set_style_border_color(this.widget, color, this._part);
	}
	get borderColorOpa() {
		return this._borderColorOpa[this._curStateIdx];
	}
	set borderColorOpa(value: number) {
		this._borderColorOpa[this._curStateIdx] = value;
		Module.lv_obj_set_style_border_opa(this.widget, value, this._part);
	}
	get borderTheme() {
		return this._borderTheme[this._curStateIdx];
	}
	set borderTheme(value: string) {
		this._borderTheme[this._curStateIdx] = value;
	}
	get borderWidth() {
		return this._borderWidth[this._curStateIdx];
	}
	set borderWidth(value: number) {
		let dx = 0;
		let dy = 0;
		const side = this._borderSide[this.curStateIdx];
		if (
			side === lv_border_side_t.LV_BORDER_SIDE_LEFT ||
			side === lv_border_side_t.LV_BORDER_SIDE_FULL
		) {
			dx = value - this._borderWidth[this.curStateIdx];
		}
		if (
			dy === lv_border_side_t.LV_BORDER_SIDE_TOP ||
			side === lv_border_side_t.LV_BORDER_SIDE_FULL
		) {
			dy = value - this._borderWidth[this.curStateIdx];
		}
		if (dx != 0 || dy != 0) {
			moveChildren(this.state.view.graph, this.state.cell, dx, dy);
		}
		this._borderWidth[this._curStateIdx] = value;
		Module.lv_obj_set_style_border_width(this.widget, value, this._part);
	}
	get borderSide() {
		return this._borderSide[this._curStateIdx];
	}
	set borderSide(dir: number) {
		this._borderSide[this._curStateIdx] = dir;
		Module.lv_obj_set_style_border_side(this.widget, dir, this._part);
	}
	get post() {
		return this._post[this._curStateIdx];
	}
	set post(value: boolean) {
		this._post[this._curStateIdx] = value;
		Module.lv_obj_set_style_border_post(
			this.widget,
			value,
			this._part | StateOpts[this._curStateIdx].value
		);
	}

	override getAttributeType(name: string): "string" | "number" {
		if (name === "borderWidth" || name === "borderColorAlpha") {
			return "number";
		}
		return "string";
	}
}

export class LV_Outline extends LV_BaseStyle {
	_enableFlag = [] as number[];
	_outlineColor = [] as string[];
	_outlineColorAlpha = [] as number[];
	_outlineTheme = [] as string[];
	_outlineWidth = [] as number[];
	_outlinePad = [] as number[];
	constructor(
		widget: LvObjT,
		part: lv_part_t,
		state: CellState,
		stateCnt: number = LV_BaseStyle.stateCnt
	) {
		super(widget, part, state);
		for (let i = 0; i < stateCnt; i++) {
			this._enableFlag.push(0);
			const partV = part | StateOpts[i].value;
			this._outlineColor.push(
				LvColorToHexStr(
					Module.lv_obj_get_style_outline_color(this.widget, partV)
				)
			);
			this._outlineColorAlpha.push(
				Module.lv_obj_get_style_outline_opa(this.widget, partV)
			);
			// this._outlineTheme.push(LvColorToStr(Module.lv_obj_get_style_outline_color(this.widget, partV)));
			this._outlineTheme.push("#000");
			this._outlineWidth.push(
				Module.lv_obj_get_style_outline_width(this.widget, partV)
			);
			this._outlinePad.push(
				Module.lv_obj_get_style_outline_pad(this.widget, partV)
			);
		}
	}
	get enableFlag() {
		return this._enableFlag[this._curStateIdx];
	}
	set enableFlag(value: number) {
		this._enableFlag[this._curStateIdx] = value;
	}

	get outlineColor() {
		return this._outlineColor[this._curStateIdx];
	}
	set outlineColor(value: string) {
		this._outlineColor[this._curStateIdx] = value;
		const part = this._part | StateOpts[this._curStateIdx].value;
		const arr = hexToRgb(value);
		const color = Module.lv_color_make(arr[0], arr[1], arr[2]);
		Module.lv_obj_set_style_outline_color(this.widget, color, part);
	}

	get outlineColorAlpha() {
		return this._outlineColorAlpha[this._curStateIdx];
	}
	set outlineColorAlpha(value: number) {
		this._outlineColorAlpha[this._curStateIdx] = value;
		const part = this._part | StateOpts[this._curStateIdx].value;
		Module.lv_obj_set_style_outline_opa(this.widget, value, part);
	}

	get outlineTheme() {
		return this._outlineTheme[this._curStateIdx];
	}
	set outlineTheme(value: string) {
		this._outlineTheme[this._curStateIdx] = value;
		const part = this._part | StateOpts[this._curStateIdx].value;
		// Module.lv_obj_set_style_th_color(this.widget, value, part);
	}

	get outlineWidth() {
		return this._outlineWidth[this._curStateIdx];
	}
	set outlineWidth(value: number) {
		this._outlineWidth[this._curStateIdx] = value;
		const part = this._part | StateOpts[this._curStateIdx].value;
		Module.lv_obj_set_style_outline_width(this.widget, value, part);
	}
	get outlinePad() {
		return this._outlinePad[this._curStateIdx];
	}
	set outlinePad(v: number) {
		this._outlinePad[this._curStateIdx] = v;
		const part = this._part | StateOpts[this._curStateIdx].value;
		Module.lv_obj_set_style_outline_pad(this.widget, v, part);
	}

	override getAttributeType(name: string): "string" | "number" {
		if (
			name === "outlineWidth" ||
			name === "outlinePad" ||
			name === "outlineColorAlpha"
		) {
			return "number";
		}
		return "string";
	}
}

export class LV_Shadow extends LV_BaseStyle {
	_enableFlag = [] as number[];
	_shadowColor = [] as string[];
	_shadowColorAlpha = [] as number[];
	_shadowTheme = [] as string[];
	_shadowWidth = [] as number[];
	_shadowSpread = [] as number[];
	_shadowOX = [] as number[];
	_shadowOY = [] as number[];
	constructor(
		widget: LvObjT,
		part: lv_part_t,
		state: CellState,
		stateCnt: number = LV_BaseStyle.stateCnt
	) {
		super(widget, part, state);
		for (let i = 0; i < stateCnt; i++) {
			this._enableFlag.push(0);
			const partV = part | StateOpts[i].value;
			this._shadowColor.push(
				LvColorToHexStr(
					Module.lv_obj_get_style_shadow_color(this.widget, partV)
				)
			);
			this._shadowColorAlpha.push(
				Module.lv_obj_get_style_shadow_opa(this.widget, partV)
			);
			// this._shadowTheme.push(LvColorToStr(Module.lv_obj_get_style_shadow_color(this.widget, partV)));
			this._shadowTheme.push("#000");
			this._shadowWidth.push(
				Module.lv_obj_get_style_shadow_width(this.widget, partV)
			);
			this._shadowSpread.push(
				Module.lv_obj_get_style_shadow_spread(this.widget, partV)
			);
			this._shadowOX.push(
				Module.lv_obj_get_style_shadow_offset_x(this.widget, partV)
			);
			this._shadowOY.push(
				Module.lv_obj_get_style_shadow_offset_y(this.widget, partV)
			);
		}
	}

	get enableFlag() {
		return this._enableFlag[this._curStateIdx];
	}
	set enableFlag(v: number) {
		this._enableFlag[this._curStateIdx] = v;
		// Module.lv_obj_set_style_sha
	}

	get shadowColor() {
		return this._shadowColor[this._curStateIdx];
	}
	set shadowColor(value: string) {
		this._shadowColor[this._curStateIdx] = value;
		const colorArr = hexToRgb(value);
		const color = Module.lv_color_make(colorArr[0], colorArr[1], colorArr[2]);
		Module.lv_obj_set_style_shadow_color(
			this.widget,
			color,
			this._part | StateOpts[this._curStateIdx].value
		);
	}

	get shadowColorAlpha() {
		return this._shadowColorAlpha[this._curStateIdx];
	}
	set shadowColorAlpha(value: number) {
		this._shadowColorAlpha[this._curStateIdx] = value;
		Module.lv_obj_set_style_shadow_opa(
			this.widget,
			value,
			this._part | StateOpts[this._curStateIdx].value
		);
	}

	get shadowTheme() {
		return this._shadowTheme[this._curStateIdx];
	}
	set shadowTheme(value: string) {
		this._shadowTheme[this._curStateIdx] = value;
		// Module.lv_obj_set_style_shadow_color(this.widget, value, this._part | SliderStateOpts[this._curStateIdx].value);
	}

	get shadowWidth() {
		return this._shadowWidth[this._curStateIdx];
	}
	set shadowWidth(value: number) {
		this._shadowWidth[this._curStateIdx] = value;
		Module.lv_obj_set_style_shadow_width(
			this.widget,
			value,
			this._part | StateOpts[this._curStateIdx].value
		);
	}

	get shadowSpread() {
		return this._shadowSpread[this._curStateIdx];
	}
	set shadowSpread(value: number) {
		this._shadowSpread[this._curStateIdx] = value;
		Module.lv_obj_set_style_shadow_spread(
			this.widget,
			value,
			this._part | StateOpts[this._curStateIdx].value
		);
	}

	get shadowOX() {
		return this._shadowOX[this._curStateIdx];
	}
	set shadowOX(value: number) {
		this._shadowOX[this._curStateIdx] = value;
		Module.lv_obj_set_style_shadow_offset_x(
			this.widget,
			value,
			this._part | StateOpts[this._curStateIdx].value
		);
	}

	get shadowOY() {
		return this._shadowOY[this._curStateIdx];
	}
	set shadowOY(value: number) {
		this._shadowOY[this._curStateIdx] = value;
		Module.lv_obj_set_style_shadow_offset_y(
			this.widget,
			value,
			this._part | StateOpts[this._curStateIdx].value
		);
	}

	override getAttributeType(name: string): "string" | "number" {
		if (
			name === "shadowWidth" ||
			name === "shadowSpread" ||
			name === "shadowOX" ||
			name === "shadowOY" ||
			name === "shadowColorAlpha"
		) {
			return "number";
		}
		return "string";
	}
}

export class LV_Blend extends LV_BaseStyle {
	_enableFlag = [] as number[];
	_blendMode = [] as lv_blend_mode_t[];
	constructor(
		widget: LvObjT,
		part: lv_part_t,
		state: CellState,
		stateCnt: number = LV_BaseStyle.stateCnt
	) {
		super(widget, part, state);
		for (let i = 0; i < stateCnt; i++) {
			this._enableFlag.push(0);
			const partV = part | StateOpts[i].value;
			this._blendMode.push(
				Module.lv_obj_get_style_blend_mode(this.widget, partV)
			);
		}
	}
	get enableFlag() {
		return this._enableFlag[this._curStateIdx];
	}
	set enableFlag(value: number) {
		this._enableFlag[this._curStateIdx] = value;
	}

	get blendMode() {
		return this._blendMode[this._curStateIdx];
	}
	set blendMode(value: number) {
		this._blendMode[this._curStateIdx] = value;
		Module.lv_obj_set_style_blend_mode(
			this.widget,
			value,
			this._part | StateOpts[this._curStateIdx].value
		);
	}

	override getAttributeType(name: string): "string" | "number" {
		if (name === "blendMode") {
			return "number";
		}
		return "string";
	}
}

export class LV_Paddings extends LV_BaseStyle {
	_enableFlag = [] as number[];
	_padLeft = [] as number[];
	_padRight = [] as number[];
	_padTop = [] as number[];
	_padBottom = [] as number[];
	_padRow = [] as number[];
	_padColumn = [] as number[];
	constructor(
		widget: LvObjT,
		part: lv_part_t,
		state: CellState,
		stateCnt: number = LV_BaseStyle.stateCnt
	) {
		super(widget, part, state);
		for (let i = 0; i < stateCnt; i++) {
			this._enableFlag.push(0);
			const partV = part | StateOpts[i].value;
			this._padLeft.push(Module.lv_obj_get_style_pad_left(this.widget, partV));
			this._padRight.push(
				Module.lv_obj_get_style_pad_right(this.widget, partV)
			);
			this._padTop.push(Module.lv_obj_get_style_pad_top(this.widget, partV));
			this._padBottom.push(
				Module.lv_obj_get_style_pad_bottom(this.widget, partV)
			);
			this._padRow.push(Module.lv_obj_get_style_pad_row(this.widget, partV));
			this._padColumn.push(
				Module.lv_obj_get_style_pad_column(this.widget, partV)
			);
		}
	}
	get enableFlag() {
		return this._enableFlag[this._curStateIdx];
	}
	set enableFlag(value: number) {
		this._enableFlag[this._curStateIdx] = value;
	}

	get padLeft() {
		return this._padLeft[this._curStateIdx];
	}
	set padLeft(v: number) {
		const dx = v - this._padLeft[this._curStateIdx];
		moveChildren(this.state.view.graph, this.state.cell, dx, 0);
		this._padLeft[this._curStateIdx] = v;
		Module.lv_obj_set_style_pad_left(
			this.widget,
			v,
			this._part | StateOpts[this._curStateIdx].value
		);
	}
	get padRight() {
		return this._padRight[this._curStateIdx];
	}
	set padRight(v: number) {
		const dy = v - this._padRight[this._curStateIdx];
		moveChildren(this.state.view.graph, this.state.cell, 0, dy);
		this._padRight[this._curStateIdx] = v;
		Module.lv_obj_set_style_pad_right(
			this.widget,
			v,
			this._part | StateOpts[this._curStateIdx].value
		);
	}
	get padTop() {
		return this._padTop[this._curStateIdx];
	}
	set padTop(v: number) {
		this._padTop[this._curStateIdx] = v;
		Module.lv_obj_set_style_pad_top(
			this.widget,
			v,
			this._part | StateOpts[this._curStateIdx].value
		);
	}
	get padBottom() {
		return this._padBottom[this._curStateIdx];
	}
	set padBottom(v: number) {
		this._padBottom[this._curStateIdx] = v;
		Module.lv_obj_set_style_pad_bottom(
			this.widget,
			v,
			this._part | StateOpts[this._curStateIdx].value
		);
	}
	get padRow() {
		return this._padRow[this._curStateIdx];
	}
	set padRow(v: number) {
		this._padRow[this._curStateIdx] = v;
		this.padLeft = v;
		this.padRight = v;
	}
	get padColumn() {
		return this._padColumn[this._curStateIdx];
	}
	set padColumn(v: number) {
		this._padColumn[this._curStateIdx] = v;
		this.padTop = v;
		this.padBottom = v;
	}

	override getAttributeType(name: string): "string" | "number" {
		if (
			name === "padLeft" ||
			name === "padRight" ||
			name === "padTop" ||
			name === "padBottom" ||
			name === "padRow" ||
			name === "padColumn"
		) {
			return "number";
		}
		return "string";
	}
}

export class LV_Margin extends LV_BaseStyle {
	_left = [] as number[];
	_right = [] as number[];
	_top = [] as number[];
	_bottom = [] as number[];

	get left() {
		return this._left[this._curStateIdx];
	}
	set left(v: number) {
		const dx = v - this._left[this._curStateIdx];
		moveMySelf(this.state.view.graph, this.state, dx, 0);
		this._left[this._curStateIdx] = v;
		Module.lv_obj_set_style_margin_left(
			this.widget,
			v,
			this._part | StateOpts[this._curStateIdx].value
		);
	}
	get right() {
		return this._right[this._curStateIdx];
	}
	set right(v: number) {
		this._right[this._curStateIdx] = v;
		Module.lv_obj_set_style_margin_right(
			this.widget,
			v,
			this._part | StateOpts[this._curStateIdx].value
		);
	}
	get top() {
		return this._top[this._curStateIdx];
	}
	set top(v: number) {
		const dy = v - this._top[this._curStateIdx];
		moveMySelf(this.state.view.graph, this.state, 0, dy);
		this._top[this._curStateIdx] = v;
		Module.lv_obj_set_style_margin_top(
			this.widget,
			v,
			this._part | StateOpts[this._curStateIdx].value
		);
	}
	get bottom() {
		return this._bottom[this._curStateIdx];
	}
	set bottom(v: number) {
		this._bottom[this._curStateIdx] = v;
		Module.lv_obj_set_style_margin_bottom(
			this.widget,
			v,
			this._part | StateOpts[this._curStateIdx].value
		);
	}

	constructor(
		widget: LvObjT,
		part: lv_part_t,
		state: CellState,
		stateCnt: number = LV_BaseStyle.stateCnt
	) {
		super(widget, part, state);
		for (let i = 0; i < stateCnt; i++) {
			const partV = part | StateOpts[i].value;
			this._left.push(Module.lv_obj_get_style_margin_left(this.widget, partV));
			this._right.push(
				Module.lv_obj_get_style_margin_right(this.widget, partV)
			);
			this._top.push(Module.lv_obj_get_style_margin_top(this.widget, partV));
			this._bottom.push(
				Module.lv_obj_get_style_margin_bottom(this.widget, partV)
			);
		}
	}

	override getAttributeType(name: string): "string" | "number" {
		return "number";
	}
}

export class LV_Transform extends LV_BaseStyle {
	_minWidth = [] as number[];
	_maxWidth = [] as number[];
	_minHeight = [] as number[];
	_maxHeight = [] as number[];
	_rotation = [] as number[];
	_scaleX = [] as number[];
	_scaleY = [] as number[];
	_translateX = [] as number[];
	_translateY = [] as number[];

	constructor(
		widget: LvObjT,
		part: lv_part_t,
		state: CellState,
		stateCnt: number = LV_BaseStyle.stateCnt
	) {
		super(widget, part, state);
		for (let i = 0; i < stateCnt; i++) {
			const partV = part | StateOpts[i].value;
			this._maxWidth.push(
				Module.lv_obj_get_style_max_width(this.widget, partV)
			);
			this._minHeight.push(
				Module.lv_obj_get_style_min_height(this.widget, partV)
			);
			this._maxHeight.push(
				Module.lv_obj_get_style_max_height(this.widget, partV)
			);
			this._minWidth.push(
				Module.lv_obj_get_style_min_width(this.widget, partV)
			);
			this._rotation.push(
				Module.lv_obj_get_style_transform_rotation(this.widget, partV)
			);
			this._scaleX.push(
				Module.lv_obj_get_style_transform_scale_x(this.widget, partV)
			);
			this._scaleY.push(
				Module.lv_obj_get_style_transform_scale_y(this.widget, partV)
			);
			this._translateX.push(
				Module.lv_obj_get_style_translate_x(this.widget, partV)
			);
			this._translateY.push(
				Module.lv_obj_get_style_translate_y(this.widget, partV)
			);
		}
	}
	get minWidth() {
		return this._minWidth[this._curStateIdx];
	}
	set minWidth(v: number) {
		this._minWidth[this._curStateIdx] = v;
		Module.lv_obj_set_style_transform_width(
			this.widget,
			v,
			this._part | StateOpts[this._curStateIdx].value
		);
	}

	get maxWidth() {
		return this._maxWidth[this._curStateIdx];
	}
	set maxWidth(v: number) {
		this._maxWidth[this._curStateIdx] = v;
		Module.lv_obj_set_style_transform_width(
			this.widget,
			v,
			this._part | StateOpts[this._curStateIdx].value
		);
	}

	get minHeight() {
		return this._minHeight[this._curStateIdx];
	}
	set minHeight(v: number) {
		this._minHeight[this._curStateIdx] = v;
		Module.lv_obj_set_style_transform_height(
			this.widget,
			v,
			this._part | StateOpts[this._curStateIdx].value
		);
	}

	get maxHeight() {
		return this._maxHeight[this._curStateIdx];
	}
	set maxHeight(v: number) {
		this._maxHeight[this._curStateIdx] = v;
		Module.lv_obj_set_style_transform_height(
			this.widget,
			v,
			this._part | StateOpts[this._curStateIdx].value
		);
	}

	get rotation() {
		return this._rotation[this._curStateIdx];
	}
	set rotation(v: number) {
		this._rotation[this._curStateIdx] = v;
		Module.lv_obj_set_style_transform_rotation(
			this.widget,
			v,
			this._part | StateOpts[this._curStateIdx].value
		);
	}
	get scaleX() {
		return this._scaleX[this._curStateIdx];
	}
	set scaleX(v: number) {
		this._scaleX[this._curStateIdx] = v;
		Module.lv_obj_set_style_transform_scale_x(
			this.widget,
			v,
			this._part | StateOpts[this._curStateIdx].value
		);
	}
	get scaleY() {
		return this._scaleY[this._curStateIdx];
	}
	set scaleY(v: number) {
		this._scaleY[this._curStateIdx] = v;
		Module.lv_obj_set_style_transform_scale_y(
			this.widget,
			v,
			this._part | StateOpts[this._curStateIdx].value
		);
	}

	get translateX() {
		return this._translateX[this._curStateIdx];
	}
	set translateX(v: number) {
		this._translateX[this._curStateIdx] = v;
		Module.lv_obj_set_style_translate_x(
			this.widget,
			v,
			this._part | StateOpts[this._curStateIdx].value
		);
	}
	get translateY() {
		return this._translateY[this._curStateIdx];
	}
	set translateY(v: number) {
		this._translateY[this._curStateIdx] = v;
		Module.lv_obj_set_style_translate_y(
			this.widget,
			v,
			this._part | StateOpts[this._curStateIdx].value
		);
	}

	override getAttributeType(name: string): "string" | "number" {
		if (
			name === "minWidth" ||
			name === "maxWidth" ||
			name === "minHeight" ||
			name === "maxHeight" ||
			name === "transformRotation" ||
			name === "transformScale" ||
			name === "pivotX"
		) {
			return "number";
		}
		return "string";
	}
}

export class LV_Text extends LV_BaseStyle {
	lvFontStyle_: (LvStyleT | null)[] = [];
	_textColor = [] as string[];
	_opa = [] as number[];
	_themeColor = [] as string[];
	_letterSpace = [] as number[];
	_lineSpace = [] as number[];
	_textAlign = [] as lv_text_align_t[];
	_textDector = [] as lv_text_decor_t[];
	_textFont = [] as string[];

	constructor(
		widget: LvObjT,
		part: lv_part_t,
		state: CellState,
		stateCnt: number = LV_BaseStyle.stateCnt
	) {
		super(widget, part, state);
		for (let i = 0; i < stateCnt; i++) {
			const partV = part | StateOpts[i].value;
			this._textColor.push(
				LvColorToHexStr(Module.lv_obj_get_style_text_color(this.widget, partV))
			);
			this._opa.push(Module.lv_obj_get_style_text_opa(this.widget, partV));
			this._themeColor.push("#000");
			this._letterSpace.push(
				Module.lv_obj_get_style_text_letter_space(this.widget, partV)
			);
			this._lineSpace.push(
				Module.lv_obj_get_style_text_line_space(this.widget, partV)
			);
			this._textAlign.push(
				Module.lv_obj_get_style_text_align(this.widget, partV)
			);
			this._textDector.push(
				Module.lv_obj_get_style_text_decor(this.widget, partV)
			);
			this._textFont.push("");
		}
	}
	get lvFontStyle() {
		return this.lvFontStyle_[this._curStateIdx];
	}
	set lvFontStyle(value: LvStyleT | null) {
		this.lvFontStyle_[this._curStateIdx] = value;
	}

	get textColor() {
		return this._textColor[this._curStateIdx];
	}
	set textColor(value: string) {
		this._textColor[this._curStateIdx] = value;
		const colorArr = hexToRgb(value);
		const color = Module.lv_color_make(colorArr[0], colorArr[1], colorArr[2]);
		Module.lv_obj_set_style_text_color(this.widget, color, this._part);
	}

	get opa() {
		return this._opa[this._curStateIdx];
	}
	set opa(value: number) {
		this._opa[this._curStateIdx] = value;
		Module.lv_obj_set_style_text_opa(this.widget, value, this._part);
	}

	get themeColor() {
		return this._themeColor[this._curStateIdx];
	}
	set themeColor(value: string) {
		this._themeColor[this._curStateIdx] = value;
	}

	get letterSpace() {
		return this._letterSpace[this._curStateIdx];
	}
	set letterSpace(value: number) {
		this._letterSpace[this._curStateIdx] = value;
		Module.lv_obj_set_style_text_letter_space(this.widget, value, this._part);
	}

	get lineSpace() {
		return this._lineSpace[this._curStateIdx];
	}
	set lineSpace(value: number) {
		this._lineSpace[this._curStateIdx] = value;
		Module.lv_obj_set_style_text_line_space(this.widget, value, this._part);
	}

	get textAlign() {
		return this._textAlign[this._curStateIdx];
	}
	set textAlign(value: lv_text_align_t) {
		this._textAlign[this._curStateIdx] = value;
		Module.lv_obj_set_style_text_align(this.widget, value, this._part);
	}

	get textDector() {
		return this._textDector[this._curStateIdx];
	}
	set textDector(value: lv_text_decor_t) {
		this._textDector[this._curStateIdx] = value;
		Module.lv_obj_set_style_text_decor(this.widget, value, this._part);
	}

	get textFont() {
		return this._textFont[this._curStateIdx];
	}
	set textFont(value: string) {
		if (this._textFont[this._curStateIdx] === value) return;
		const partV = this._part | StateOpts[this._curStateIdx].value;
		if (this.lvFontStyle) {
			Module.lv_obj_remove_style(this.widget, this.lvFontStyle, partV);
			this.lvFontStyle = null;
		}
		this.lvFontStyle = projectStore.lvFonts[value];
		if (!this.lvFontStyle) {
			// 再去默认字体找一次
			this.lvFontStyle = Module.getDefaultFontByName(value);
			if (!this.lvFontStyle) {
				console.warn(`Font "${value}" not found.`);
				this.lvFontStyle = null;
				return;
			}
		}
		Module.lv_obj_add_style(this.widget, this.lvFontStyle, partV);
		this._textFont[this._curStateIdx] = value;
	}

	override getAttributeType(name: string): "string" | "number" {
		if (
			name === "letterSpace" ||
			name === "lineSpace" ||
			name === "textAlign"
		) {
			return "number";
		}
		if (name === "textDector") {
			return "number";
		}
		return "string";
	}
}

export class LV_Animation extends LV_BaseStyle {
	_time = [] as number[];

	constructor(
		widget: LvObjT,
		part: lv_part_t,
		state: CellState,
		stateCnt: number = LV_BaseStyle.stateCnt
	) {
		super(widget, part, state);
		for (let i = 0; i < stateCnt; i++) {
			this._time.push(0);
		}
	}

	get time() {
		return this._time[this._curStateIdx];
	}
	set time(value: number) {
		this._time[this._curStateIdx] = value;
	}

	override getAttributeType(name: string): "string" | "number" {
		return "string";
	}
}

export class LV_ARC_Background extends LV_BaseStyle {
	_arcWidth = [] as number[];
	_arcColor = [] as string[];
	_opa = [] as number[];
	_themeColor = [] as string[];
	_arcRounded = [] as boolean[];
	_arcImage = [] as string[];
	imageDecT: LvImgDscT | null = null;
	constructor(
		widget: LvObjT,
		part: lv_part_t,
		state: CellState,
		stateCnt: number = LV_BaseStyle.stateCnt
	) {
		super(widget, part, state);
		for (let i = 0; i < stateCnt; i++) {
			const partV = part | StateOpts[i].value;
			const c = LvColorToHexStr(
				Module.lv_obj_get_style_arc_color(this.widget, partV)
			);
			this._arcColor.push(c);
			this._opa.push(Module.lv_obj_get_style_arc_opa(this.widget, partV));
			this._themeColor.push("");
			this._arcWidth.push(
				Module.lv_obj_get_style_arc_width(this.widget, partV)
			);
			this._arcRounded.push(
				Module.lv_obj_get_style_arc_rounded(this.widget, partV)
			);
			this._arcImage.push("");
		}
	}
	get arcColor() {
		return this._arcColor[this._curStateIdx];
	}
	set arcColor(color: string) {
		this._arcColor[this._curStateIdx] = color;
		const colorT = hexStrToLvColor(color);
		Module.lv_obj_set_style_arc_color(
			this.widget,
			colorT,
			this._part | StateOpts[this._curStateIdx].value
		);
	}
	get opa() {
		return this._opa[this._curStateIdx];
	}
	set opa(opa: number) {
		this._opa[this._curStateIdx] = opa;
		Module.lv_obj_set_style_arc_opa(
			this.widget,
			opa,
			this._part | StateOpts[this._curStateIdx].value
		);
	}
	get themeColor() {
		return this._themeColor[this._curStateIdx];
	}
	set themeColor(color: string) {
		this._themeColor[this._curStateIdx] = color;
	}
	get arcWidth() {
		return this._arcWidth[this._curStateIdx];
	}
	set arcWidth(width: number) {
		this._arcWidth[this._curStateIdx] = width;
		Module.lv_obj_set_style_arc_width(
			this.widget,
			width,
			this._part | StateOpts[this._curStateIdx].value
		);
	}
	get arcRounded() {
		return this._arcRounded[this._curStateIdx];
	}
	set arcRounded(rounded: boolean) {
		this._arcRounded[this._curStateIdx] = rounded;
		Module.lv_obj_set_style_arc_rounded(
			this.widget,
			rounded,
			this._part | StateOpts[this._curStateIdx].value
		);
	}
	get arcImage() {
		return this._arcImage[this._curStateIdx];
	}
	set arcImage(src: string) {
		if (this.imageDecT) {
			Module.lv_image_buf_free(this.imageDecT);
			this.imageDecT = null;
		}
		const w = Module.lv_obj_get_width(this.widget);
		const h = Module.lv_obj_get_height(this.widget);
		const dsc = lv_fmt_img_data(src, w, h, 3, true);
		if (!dsc) {
			console.warn(`Image "${src}" not found or invalid.`);
			return;
		}
		this.imageDecT = dsc;
		Module.lv_obj_set_style_arc_image_src(
			this.widget,
			dsc,
			this._part | StateOpts[this._curStateIdx].value
		);
		this._arcImage[this._curStateIdx] = src;
	}

	override getAttributeType(name: string): "string" | "number" {
		if (name === "arcWidth") {
			return "number";
		}
		return "string";
	}
}

export class LV_IMG_Background extends LV_BaseStyle {
	_color = [] as string[];
	_themeColor = [] as string[];

	constructor(
		widget: LvObjT,
		part: lv_part_t,
		state: CellState,
		stateCnt: number = LV_BaseStyle.stateCnt
	) {
		super(widget, part, state);
		for (let i = 0; i < stateCnt; i++) {
			this._color.push("#fff");
			this._themeColor.push("");
		}
	}

	get color() {
		return this._color[this._curStateIdx];
	}
	set color(color: string) {
		this._color[this._curStateIdx] = color;
	}

	get themeColor() {
		return this._themeColor[this._curStateIdx];
	}
	set themeColor(color: string) {
		this._themeColor[this._curStateIdx] = color;
	}

	override getAttributeType(name: string): "string" | "number" {
		if (name === "color") {
			return "string";
		}
		return "string";
	}
}

export class CreateBaseStyle {
	static createStyles(
		stylePart: lv_part_t,
		stateCount: number,
		widget: LvObjT,
		state: CellState
	): LV_StyleCombine {
		return [
			["Background", new LV_Background(widget, stylePart, state, stateCount)],
			[
				"BackgroundImage",
				new LV_BackgroundImage(widget, stylePart, state, stateCount),
			],
			["Border", new LV_Border(widget, stylePart, state, stateCount)],
			["Outline", new LV_Outline(widget, stylePart, state, stateCount)],
			["Shadow", new LV_Shadow(widget, stylePart, state, stateCount)],
			["Blend", new LV_Blend(widget, stylePart, state, stateCount)],
			["Paddings", new LV_Paddings(widget, stylePart, state, stateCount)],
			["Margin", new LV_Margin(widget, stylePart, state, stateCount)],
		];
	}
}
