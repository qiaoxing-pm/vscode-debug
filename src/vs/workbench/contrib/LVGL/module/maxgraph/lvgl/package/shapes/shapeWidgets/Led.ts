import { LvglBase, LV_Obj } from "../lvglBase.js";
import { Module } from "../../LvglModule.js";
import { hexStrToLvColor } from "../../../tools/color.js"


export class LV_Led extends LV_Obj {

	_value = true; // LED的值，0表示关闭，1表示开启
	_color: string = "#2196f3"; // LED的颜色，默认为蓝色
	_brightness: number = 255; // LED的亮度，范围0-255
	get color(): string {
		return this._color;
	}
	set color(val: string) {
		this._color = val;
		Module.lv_led_set_color(this.lvObj, hexStrToLvColor(val));
	}

	get value(): boolean {
		return this._value;
	}
	set value(val: boolean) {
		this._value = val;
		if (!val) {
			Module.lv_led_off(this.lvObj);
		} else {
			Module.lv_led_on(this.lvObj);
		}
	}

	get brightness(): number {
		return this._brightness;
	}
	set brightness(val: number) {
		this._brightness = val;
		Module.lv_led_set_brightness(this.lvObj, val);
	}

	constructor(name: string, lvObj: LvObjT) {
		super("Led", lvObj);
		this.color = this._color; // 设置初始颜色
		this.value = this._value; // 设置初始值
		// this._brightness = Module.lv_led_get_brightness(this.lvObj);
	}

}

export class LvGL_LedShape extends LvglBase {
	override Type = "Led";

	override lvglCreate(parent: LvObjT) {
		this._lvglObj = Module.lv_led_create(parent);
		this._widget = new LV_Led(this.name, this._lvglObj);
	}
}
