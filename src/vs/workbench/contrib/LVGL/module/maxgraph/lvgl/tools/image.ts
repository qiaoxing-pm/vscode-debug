
import { Module } from "../package/LvglModule.js";

export function lv_fmt_img_data(name: string, w: number, h: number, flag: number, isAlign: boolean = true): LvImgDscT | null {
	if (!name || !Module.Images[name]) {
		console.error(`Image "${name}" not found in Module.Images`);
		return null;
	}
	const sw = Module.Images[name].width;
	const sh = Module.Images[name].height;
	const imgDsc = Module.lv_fmt_img_data(name, sw, sh, w, h, flag, isAlign);
	return imgDsc;
}
