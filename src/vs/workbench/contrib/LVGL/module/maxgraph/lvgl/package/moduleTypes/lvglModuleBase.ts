import {
	lv_anim_enable_t,
	lv_dir_t, lv_grad_dir_t,
	lv_scrollbar_mode_t,
	lv_align_t,
} from "../lvglEnums.js";
export type CreateObjFun<T = LvObjT> = (parent: LvObjT) => T

export interface LvglBaseModule {
	canvas?: HTMLCanvasElement
	OffScreenCanvas: OffscreenCanvas
	pixbuf: {
		imageData: ImageData,
		update: boolean,
		x1: number,
		x2: number,
		y1: number,
		y2: number,
	}
	Images: { [key: string]: HTMLImageElement };
	lv_fmt_img_data(imgName: string, imageW: number, imageH: number,
		ObjW: number, ObjH: number, flag: number, isAlign: boolean
	): LvImgDscT
	get_svg_image_dsc(buff: Uint8Array | ArrayBuffer, w: number, h: number): LvImgDscT
	lv_img_data_free(img_buf: LvImgDscT): void

	lv_obj_create: CreateObjFun
	lv_obj_move_to_index(obj: LvObjT, idx: number): void
	lv_obj_clean(obj: LvObjT): void
	lv_obj_delete(obj: LvObjT): void
	lv_obj_get_state(obj: LvObjT): number
	lv_obj_get_string_id(obj: LvObjT): string
	lv_obj_get_child_cnt(parent: LvObjT): number
	lv_obj_get_child(parent: LvObjT, index: number): LvObjT
	lv_screen_active(): LvObjT
	lv_obj_set_parent(obj: LvObjT, parent: LvObjT | null): void
	remove_from_parent(obj: LvObjT): void
	lv_obj_set_x(obj: LvObjT, x: number): void
	lv_obj_set_y(obj: LvObjT, y: number): void
	lv_obj_set_width(obj: LvObjT, width: number): void
	lv_obj_set_height(obj: LvObjT, height: number): void
	lv_obj_set_layout(obj: LvObjT, layout: number): void
	lv_obj_set_scrollbar_mode(obj: LvObjT, mode: lv_scrollbar_mode_t): void
	lv_obj_set_scroll_dir(obj: LvObjT, dir: lv_dir_t): void

	lv_obj_update_layout(obj: LvObjT): void
	lv_obj_get_parent(widget: LvObjT): LvObjT
	lv_obj_get_coords(widget: LvObjT): void
	// 相对于父元素的坐标
	lv_obj_get_x(widget: LvObjT): number
	// x + width
	lv_obj_get_x2(widget: LvObjT): number
	lv_obj_get_y(widget: LvObjT): number
	lv_obj_get_y2(widget: LvObjT): number
	lv_obj_get_width(widget: LvObjT): number
	lv_obj_get_height(widget: LvObjT): number
	lv_obj_get_x_aligned(widget: LvObjT): number
	lv_obj_get_y_aligned(widget: LvObjT): number

	lv_obj_center(widget: LvObjT): void
	lv_obj_align_to(widget: LvObjT, base: LvObjT, align: lv_align_t, dx: number, dy: number): void
	lv_obj_set_align(widget: LvObjT, align: lv_align_t): void
	lv_obj_set_size(widget: LvObjT, w: number, h: number): void
	lv_obj_set_pos(widget: LvObjT, x: number, y: number): void

	lv_obj_add_flag(widget: LvObjT, flag: number): void
	lv_obj_remove_flag(widget: LvObjT, flag: number): void
	lv_obj_add_state(widget: LvObjT, flag: number): void
	lv_obj_remove_state(widget: LvObjT, flag: number): void

	lv_obj_get_class_name(obj: LvObjT): string

	lv_style_t: new () => LvStyleT;
	createNewScreen(name: string, w: number, h: number): DisplayT;
	changeScreen(oldScreen: LvObjT, newScreen: LvObjT): void;

	Display: new (w: number, h: number) => DisplayT;
}
export interface LvglBaseModule {
	lv_obj_align(obj: LvObjT, mode: lv_align_t, dx: number, dy: number): void
	lv_obj_scroll_to_view_recursive(obj: LvObjT, anim: lv_anim_enable_t): void

	lv_align_t: {
		LV_ALIGN_DEFAULT: {
			value: number
		}
	}
}
export interface LvglBaseModule {
	lv_set_mouse_pos(x: number, y: number): void
	lv_set_mouse_state(state: number): void
	lv_set_mouse_pos_state(x: number, y: number, state: number): void

	HEAPU32: Uint32Array
	HEAPU8: Uint8Array
}

export interface LvglBaseModule {
	Get_lv_font_montserrat_12(): LvFontT
	Get_lv_font_montserrat_14(): LvFontT
	Get_lv_font_montserrat_16(): LvFontT
	Get_lv_font_montserrat_18(): LvFontT
	Get_lv_font_montserrat_20(): LvFontT // 20
	Get_lv_font_montserrat_22(): LvFontT
	Get_lv_font_montserrat_24(): LvFontT // 24
	Get_lv_font_montserrat_26(): LvFontT
	Get_lv_font_montserrat_28(): LvFontT
	Get_lv_font_montserrat_30(): LvFontT
	Get_lv_font_montserrat_32(): LvFontT
	Get_lv_font_montserrat_34(): LvFontT
	Get_lv_font_montserrat_36(): LvFontT
	Get_lv_font_montserrat_38(): LvFontT
	Get_lv_font_montserrat_40(): LvFontT
	Get_lv_font_montserrat_42(): LvFontT // 42
	Get_lv_font_montserrat_44(): LvFontT

	lv_binfont_create_from_buffer(arr: Uint8Array | ArrayBuffer, len: number): LvStyleT;
	getDefaultFontByName(name: string): LvStyleT;
}
