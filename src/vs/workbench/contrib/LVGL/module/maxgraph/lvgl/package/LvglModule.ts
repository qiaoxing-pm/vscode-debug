import { LvglModule } from "./wasm/lvgl.js";
import { type LvglEmscriptModule } from "./moduleTypes/lvglModule.js";
import { genRandomStr } from "../../util.js";
import { screenStore } from "../store/index.js";
import type { LvScreen } from "../../type.js";


type ImageDscCB = (obj: LvObjT, imgDsc: LvImgDscT | null) => void;
type LvImageDesCache = {
	flag: number;
	isAlign: boolean;
	obj: LvObjT;
	func: ImageDscCB;
};
const siteURL = new URL(window.location.href);
// const w = siteURL.searchParams.get("w") || "1024";
// const h = siteURL.searchParams.get("h") || "600";
const imageDscMap = new Map<string, LvImageDesCache[]>([]);

// @ts-ignore
export let Module: LvglEmscriptModule = {
	print: function (text: string) {
		console.log(text);
	},
	printErr: function (text: string) {
		console.error(text);
	},
	arguments: [
		siteURL.searchParams.get("w") || "1024",
		siteURL.searchParams.get("h") || "600",
	],
};

export function initLvglModule(canvas?: HTMLCanvasElement) {
	Module["OffScreenCanvas"] = new OffscreenCanvas(800, 600);
	Module.Images = {};
	LvglModule(Module);
	return Module;
}

function coordinateTrans(
	canvas: HTMLCanvasElement,
	x: number,
	y: number,
	scale = 1
) {
	var cRect = canvas.getBoundingClientRect();
	var canvasX = Math.round(x - cRect.left) / scale;
	var canvasY = Math.round(y - cRect.top) / scale;
	return { X: canvasX, Y: canvasY };
}

export function initLvglCanvas(canvas: HTMLCanvasElement, screen: LvScreen) {
	const w = screen.width;
	const h = screen.height;
	canvas.style.position = "absolute";
	canvas.width = w;
	canvas.height = h;
	canvas.style.top = "0px";
	canvas.style.left = "0px";
	canvas.style.zIndex = "0";
	canvas.style.border = "1px solid transparent";

	const mouse = screen.display.mouse;
	canvas.addEventListener(
		"mousemove",
		function (event) {
			var pos = coordinateTrans(
				canvas,
				event.clientX,
				event.clientY,
				screen.scale
			);
			pos.X = Math.min(pos.X, w - 1);
			pos.Y = Math.min(pos.Y, h - 1);
			mouse.lv_set_mouse_pos(pos.X < 0 ? 0 : pos.X, pos.Y < 0 ? 0 : pos.Y);
		},
		false
	);

	canvas.addEventListener(
		"mousedown",
		function (event) {
			var pos = coordinateTrans(
				canvas,
				event.clientX,
				event.clientY,
				screen.scale
			);
			mouse.lv_set_mouse_pos_state(pos.X, pos.Y, 1);
		},
		false
	);

	canvas.addEventListener(
		"mouseup",
		function (event) {
			mouse.lv_set_mouse_state(0);
		},
		false
	);
	Module.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
}

export function createNewScreen(name: string, w: number, h: number): LvScreen {
	const id = genRandomStr(8);
	const canvas = document.createElement("canvas");
	canvas.style.position = "absolute";
	canvas.width = w;
	canvas.height = h;
	canvas.style.top = "0px";
	canvas.style.left = "0px";
	canvas.style.zIndex = "0";
	canvas.style.border = "1px solid transparent";
	const disp = Module.createNewScreen("lxq", w, h);

	const screen = {
		id,
		name,
		screenObj: disp.get_screen(),
		canvas,
		scale: 1,
		width: w,
		height: h,
		display: disp,
	};
	screenStore.screens[id] = screen;
	screenStore.curScreen = screen;
	return screen;
}

export function switchScreen(oldScreen: LvScreen, newScreen: LvScreen) {
	Module.ctx = null;
	Module.changeScreen(oldScreen.screenObj, newScreen.screenObj);
	const ctx = newScreen.canvas.getContext("2d");
	if (ctx) {
		Module.ctx = ctx;
	} else {
		console.warn("Failed to get canvas context for new screen");
	}
}

export function makeLvPointT(
	x: number,
	y: number,
	fn?: (p: LvPointT) => void
): LvPointT {
	const p = new Module.lv_point_t();
	p.x = x;
	p.y = y;
	if (fn) {
		fn(p);
		p.delete();
	}
	return p;
}

export function hexToRgb(hex: string): [number, number, number] {
	// 去掉前缀 #
	hex = hex.replace(/^#/, "");

	// 如果是简写形式 "#fff"，扩展为 "#ffffff"
	if (hex.length === 3) {
		hex = hex
			.split("")
			.map((char) => char + char)
			.join("");
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
		colorStr =
			"#" +
			colorStr[1] +
			colorStr[1] +
			colorStr[2] +
			colorStr[2] +
			colorStr[3] +
			colorStr[3];
	}
	const rgb = hexToRgb(colorStr);
	// 将 RGB 转换为 LvColorT 对象
	return Module.lv_color_make(rgb[0], rgb[1], rgb[2]);
}

export function lv_fmt_img_data(
	name: string,
	w: number,
	h: number,
	flag: number,
	isAlign: boolean = true
): LvImgDscT | null {
	if (!name || !Module.Images[name]) {
		console.error(`Image "${name}" not found in Module.Images`);
		return null;
	}
	const sw = Module.Images[name].width;
	const sh = Module.Images[name].height;
	const imgDsc = Module.lv_fmt_img_data(name, sw, sh, w, h, flag, isAlign);
	return imgDsc;
}

function processSvg(name: string, w: number, h: number): LvImgDscT {
	const svg = Module.Images[name];
	if (!svg) throw new Error(`SVG image ${name} not found`);
	const canvas2 = Module["OffScreenCanvas"];
	const ctx = canvas2.getContext("2d")!;
	const imgW = svg.width,
		imgH = svg.height;
	if (imgW === imgH) {
		let dx = 0,
			dy = 0;
		// svg图片的实际大小取决于画布的大小,画布大小由实际控件的大小决定
		// 暂时姑且认为，svg被绘制到了0,0位置，大小为image.width, image.height，以此为基础进行裁剪缩放
		// 当image.width,image.height相等时，实际绘制的出来的大小由画布的宽高对的最小值决定
		// 画布必须有一个显式的宽高，否则导致其宽高不可知，无法计算居中。
		canvas2.width = w;
		canvas2.height = h;
		const size = Math.min(w, h);
		if (w > size) {
			dx = Math.floor((w - size) / 2);
		}
		if (h > size) {
			dy = Math.floor((h - size) / 2);
		}
		ctx.drawImage(svg, 0, 0, w, h, dx, dy, w, h);
	} else {
		let dx = 0,
			dy = 0;
		// ctx.drawImage(image, 50, 0, 150, 50);
		// 在画布(50,0)位置，绘制150x50大小的区域(对于svg则是，不会被裁剪，而是被缩放到了150x50大小的区域)
		if (imgW > imgH && h > imgH) {
			dy = Math.abs(Math.floor((h - imgH) / 2));
		} else if (imgH > imgW && w > imgW) {
			dx = Math.abs(Math.floor((w - imgW) / 2));
		}
		ctx.drawImage(svg, dx, dy, Math.min(imgW, w), Math.min(imgH, h)); // 居中
		// ctx.drawImage(image, 0, 0, w, h);
	}
	const imageData = ctx.getImageData(0, 0, w, h);
	const arrBuff = imageData.data.buffer;
	const dsc = Module.get_svg_image_dsc(arrBuff, w, h);
	ctx.clearRect(0, 0, w, h);
	return dsc;
}

function processImage(
	name: string,
	lvObj: LvObjT,
	flag: number,
	isAlign: boolean,
	func: ImageDscCB
) {
	Module.lv_obj_update_layout(lvObj);
	let w = Module.lv_obj_get_width(lvObj);
	let h = Module.lv_obj_get_height(lvObj);
	let sw: number, sh: number;
	let imgDsc: LvImgDscT;
	if (name.endsWith(".svg")) {
		imgDsc = processSvg(name, w, h);
	} else {
		const image = Module.Images[name];
		if (!image) return;
		sw = image.width;
		sh = image.height;
		imgDsc = Module.lv_fmt_img_data(name, sw, sh, w, h, flag, isAlign);
	}
	func(lvObj, imgDsc);
}

export function genLvObjImageDec(
	name: string,
	lvObj: LvObjT,
	flag: number,
	isAlign = true,
	func: ImageDscCB
) {
	if (!name || name === "") {
		func(lvObj, null);
	}
	Module.lv_obj_update_layout(lvObj);

	const image = Module.Images[name];
	if (!Module.Images[name]) {
		if (!image) {
			if (!imageDscMap.has(name)) {
				imageDscMap.set(name, []);
			}
			imageDscMap.get(name)!.push({
				flag,
				isAlign,
				obj: lvObj,
				func,
			});
		}
		return null;
	}

	processImage(name, lvObj, flag, isAlign, func);
}
