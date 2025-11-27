import { lv_part_t } from "../../lvglEnums.js";
import { Module } from "../../LvglModule.js";
import { LvglBase, LV_Obj } from "../lvglBase.js";
import { CreateBaseStyle, LV_Text, LV_Transform } from "../lvglStyle.js";

export class LV_TextArea extends LV_Obj {
	_text: string = "";
	_placeholder: string = "placeholder";
	_acceptedCharacters: string = "";
	_align: number = 0;
	_maxLength: number = 99878878;
	_passwordMode: boolean = false;
	_onelineMode: boolean = false;
	get text() {
		return this._text;
	}

	set text(value: string) {
		this._text = value;
		Module.lv_textarea_set_text(this.lvObj, value);
	}
	get placeholder() {
		return this._placeholder;
	}
	set placeholder(value: string) {
		this._placeholder = value;
		Module.lv_textarea_set_placeholder_text(this.lvObj, value);
	}
	get acceptedCharacters() {
		return this._acceptedCharacters;
	}
	set acceptedCharacters(value: string) {
		this._acceptedCharacters = value;
		Module.lv_textarea_set_accepted_chars(this.lvObj, value);
	}
	get align() {
		return this._align;
	}
	set align(value: number) {
		this._align = value;
	}
	get maxLength() {
		return this._maxLength;
	}
	set maxLength(value: number) {
		this._maxLength = value;
		Module.lv_textarea_set_max_length(this.lvObj, value);
	}
	get passwordMode() {
		return this._passwordMode;
	}
	set passwordMode(value: boolean) {
		this._passwordMode = value;
		Module.lv_textarea_set_password_mode(this.lvObj, value);
	}
	get onelineMode() {
		return this._onelineMode;
	}
	set onelineMode(value: boolean) {
		this._onelineMode = value;
		Module.lv_textarea_set_one_line(this.lvObj, value);
	}
}

export class LVGL_ShapeTextArea extends LvglBase {
	override Type = "TextArea";

	override lvglCreate(parent: LvObjT) {
		this._lvglObj = Module.lv_textarea_create(parent);
		this._widget = new LV_TextArea(this.Type, this._lvglObj);
	}

	override createStyle(stateCount: number) {
		// 向 mainStyles 添加属性
		const mainStyles = this._styles.find((style) => style[0] === "Main")?.[1];
		if (mainStyles) {
			mainStyles.push([
				"Text",
				new LV_Text(
					this.lvglObj,
					lv_part_t.LV_PART_MAIN,
					this.State!,
					stateCount
				),
			]);
			mainStyles.push([
				"Transform",
				new LV_Transform(
					this.lvglObj,
					lv_part_t.LV_PART_MAIN,
					this.State!,
					stateCount
				),
			]);
		}

		const secondStyles = CreateBaseStyle.createStyles(
			lv_part_t.LV_PART_SELECTED,
			stateCount,
			this.lvglObj,
			this.State!
		);
		this._styles.push(["SELECTED", secondStyles]);
		const secondStylesDel = secondStyles.findIndex(
			(style) => style[0] === "Paddings"
		);
		if (secondStylesDel !== -1) {
			secondStyles.splice(secondStylesDel, 1);
		}
		secondStyles.push([
			"Text",
			new LV_Text(
				this.lvglObj,
				lv_part_t.LV_PART_SELECTED,
				this.State!,
				stateCount
			),
		]);

		const thirdStyles = CreateBaseStyle.createStyles(
			lv_part_t.LV_PART_CURSOR,
			stateCount,
			this.lvglObj,
			this.State!
		);
		this._styles.push(["CURSOR", thirdStyles]);
		const thirdStylesDel = thirdStyles.findIndex(
			(style) => style[0] === "Paddings"
		);
		if (thirdStylesDel !== -1) {
			thirdStyles.splice(thirdStylesDel, 1);
		}
		thirdStyles.push([
			"Text",
			new LV_Text(
				this.lvglObj,
				lv_part_t.LV_PART_CURSOR,
				this.State!,
				stateCount
			),
		]);

		// const forthStyles = new CreateBaseStyle(lv_part_t., this.state!, stateCount).createStyles();
		// this._Styles.push(["PLACEHOLDER", forthStyles]);
		// forthStyles.splice(0, forthStyles.length);
		// forthStyles.push(["Text", new LV_Text(stylePart, this.state!, stateCount)]);
	}
}
