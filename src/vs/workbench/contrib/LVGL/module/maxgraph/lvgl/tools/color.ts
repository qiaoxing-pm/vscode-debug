import { Module } from "../../lvgl/package/LvglModule.js";

export function RgbaToArr(str: string) {
	const reg = /\d+/g
	const arr = str.match(reg)
	if (arr) {
		return arr.map(n => Number(n))
	}
	return null
}

export function hexToRgb(hex: string): [number, number, number] {
	// 去掉前缀 #
	hex = hex.replace(/^#/, '');

	// 如果是简写形式 "#fff"，扩展为 "#ffffff"
	if (hex.length === 3) {
		hex = hex.split('').map(char => char + char).join('');
	}

	if (hex.length !== 6) {
		throw new Error("Invalid hex color format");
	}

	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);

	return [r, g, b];
}

export function hexStrToLvColor(colorStr: string): LvColorT {
	// 假设 colorStr 是一个十六进制颜色字符串，例如 "#ff0000"
	if (colorStr.length < 7) {
		colorStr = "#" + colorStr[1] + colorStr[1] + colorStr[2] + colorStr[2]
			+ colorStr[3] + colorStr[3];
	}
	const rgb = hexToRgb(colorStr);
	// 将 RGB 转换为 LvColorT 对象
	return Module.lv_color_make(rgb[0], rgb[1], rgb[2]);
}

export function LvColorToHexStr(color: LvColorT): string {
	// 假设 color 是一个包含 r, g, b 属性的对象
	return Module.lv_color_to_string(color);
}

export function hexWithAlpha(hex: string, alpha: number): string {
	if (!hex) return "#000000ff"; // 默认返回透明色
	// 确保透明度在 0-255 范围
	alpha = Math.max(0, Math.min(255, alpha));

	// 去掉 #
	let cleanHex = hex.replace(/^#/, "");

	// 处理 #RGB 简写形式
	if (cleanHex.length === 3) {
		cleanHex = cleanHex
			.split("")
			.map((ch) => ch + ch)
			.join("");
	}

	if (cleanHex.length !== 6) {
		throw new Error("Invalid hex color format");
	}

	// 转换透明度
	const alphaHex = alpha.toString(16).padStart(2, "0");

	return `#${cleanHex}${alphaHex}`;
}

