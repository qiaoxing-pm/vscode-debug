import {
	lv_border_side_t,
	lv_dir_t, lv_grad_dir_t,
	lv_text_align_t,
	lv_text_decor_t,
} from "../lvglEnums.js";

export interface LvglStyleModule {

	//如果您知道更改的属性可以通过简单的重绘（例如颜色或不透明度更改）应用，
	// 只需调用 lv_obj_invalidate(lv_screen_active())
	lv_obj_invalidate(obj: LvObjT): void

	//如果更改或添加了更复杂的样式属性，并且您知道哪些对象受该样式影响，则调用
	// 要刷新所有部件和属性，请使用
	// lv_obj_refresh_style(obj, LV_PART_ANY, LV_STYLE_PROP_ANY)。
	lv_obj_refresh_style(obj: LvObjT, part: number, property: number): void

	//要让 LVGL 检查所有对象是否使用该样式并在需要时刷新它们，请调用
	lv_obj_report_style_change(style: LvStyleT): void
	//如果 style 为 NULL，所有对象都会收到有关样式更改的通知。
	lv_style_init(style: LvStyleT): void
	lv_obj_remove_style(obj: LvObjT, style: LvStyleT, part: number): void
	lv_obj_add_style(widget: LvObjT, style: LvStyleT, part: number): void
	lv_color_make(r: number, g: number, b: number): LvColorT
	lv_color_to_string(color: LvColorT): string
	lv_palette_main(color: LvColorT): LvColorT

	lv_style_set_shadow_color(style: LvStyleT, color: LvColorT): void
	lv_style_set_shadow_width(style: LvStyleT, width: number): void
	lv_style_set_shadow_spread(style: LvStyleT, spread: number): void
	lv_style_set_shadow_offset_x(style: LvStyleT, offset_x: number): void
	lv_style_set_shadow_offset_y(style: LvStyleT, offset_y: number): void
	lv_style_set_shadow_color_filtered(style: LvStyleT, color: LvColorT): void

	lv_style_set_border_color(style: LvStyleT, color: LvColorT): void
	lv_style_set_border_opa(style: LvStyleT, opa: number): void
	lv_style_set_border_width(style: LvStyleT, width: number): void
	lv_style_set_border_side(style: LvStyleT, side: lv_border_side_t): void
	lv_style_set_border_color_filtered(style: LvStyleT, color: LvColorT): void

	lv_style_set_bg_color(style: LvStyleT, color: LvColorT): void
	lv_style_set_bg_opa(style: LvStyleT, opa: number): void
	lv_style_set_radius(style: LvStyleT, radius: number): void
	lv_style_set_bg_grad_color(style: LvStyleT, color: LvColorT): void
	lv_style_set_bg_grad_stop(style: LvStyleT, stop: number): void
	lv_style_set_bg_main_stop(style: LvStyleT, stop: number): void
	lv_style_set_bg_grad_dir(style: LvStyleT, dir: number): void
	lv_style_set_bg_color_filtered(style: LvStyleT, color: LvColorT): void

	lv_style_set_outline_color(style: LvStyleT, color: LvColorT): void
	lv_style_set_outline_opa(style: LvStyleT, opa: number): void
	lv_style_set_outline_width(style: LvStyleT, width: number): void
	lv_style_set_outline_pad(style: LvStyleT, pad: number): void
	lv_style_set_outline_color_filtered(style: LvStyleT, color: LvColorT): void

	lv_style_set_pad_all(style: LvStyleT, pad: number): void
	lv_style_set_pad_top(style: LvStyleT, pad: number): void
	lv_style_set_pad_bottom(style: LvStyleT, pad: number): void
	lv_style_set_pad_left(style: LvStyleT, pad: number): void
	lv_style_set_pad_right(style: LvStyleT, pad: number): void

	lv_style_set_text_color(style: LvStyleT, color: LvColorT): void
	lv_style_set_text_opa(style: LvStyleT, opa: number): void
	lv_style_set_text_letter_space(style: LvStyleT, space: number): void
	lv_style_set_text_line_space(style: LvStyleT, space: number): void
	lv_style_set_text_font(style: LvStyleT, font: LvFontT): void
	lv_style_set_text_decor(style: LvStyleT, decor: lv_text_decor_t): void
	lv_style_set_text_align(style: LvStyleT, align: lv_text_align_t): void
}
export interface LvglStyleModule {
	// background
	lv_obj_set_style_bg_color(obj: LvObjT, color: LvColorT, part: number): void
	lv_obj_set_style_bg_grad_color(obj: LvObjT, color: LvColorT, part: number): void
	lv_obj_set_style_bg_grad_opa(obj: LvObjT, opa: number, part: number): void
	lv_obj_set_style_bg_color_filtered(obj: LvObjT, color: LvColorT, part: number): void
	lv_obj_set_style_bg_main_stop(obj: LvObjT, stop: number, part: number): void
	lv_obj_set_style_bg_grad_stop(obj: LvObjT, stop: number, part: number): void
	lv_obj_set_style_bg_grad_dir(obj: LvObjT, dir: lv_grad_dir_t, part: number): void
	lv_obj_set_style_bg_opa(obj: LvObjT, opa: number, part: number): void
	lv_obj_set_style_radius(obj: LvObjT, radius: number, part: number): void
	lv_obj_set_style_clip_corner(obj: LvObjT, en: number, part: number): void

	lv_obj_get_style_clip_corner(obj: LvObjT, part: number): number
	lv_obj_get_style_radius(obj: LvObjT, part: number): number
	lv_obj_get_style_bg_color(obj: LvObjT, part: number): LvColorT
	lv_obj_get_style_bg_opa(obj: LvObjT, part: number): number
	lv_obj_get_style_bg_grad_color(obj: LvObjT, part: number): LvColorT
	lv_obj_get_style_bg_grad_dir(obj: LvObjT, part: number): lv_grad_dir_t
	lv_obj_get_style_bg_main_stop(obj: LvObjT, part: number): number
	lv_obj_get_style_bg_grad_stop(obj: LvObjT, part: number): number
	lv_obj_get_style_blend_mode(obj: LvObjT, part: number): number

	// image
	lv_obj_set_style_bg_image_src(obj: LvObjT, src: LvImgDscT | null, part: number): void
	lv_obj_set_style_bg_image_opa(obj: LvObjT, opa: number, part: number): void
	lv_obj_set_style_bg_image_recolor(obj: LvObjT, color: LvColorT, part: number): void
	lv_obj_set_style_bg_image_recolor_opa(obj: LvObjT, opa: number, part: number): void
	lv_obj_set_style_bg_image_tiled(obj: LvObjT, en: boolean, part: number): void

	lv_obj_get_style_bg_image_src(obj: LvObjT, part: number): LvImgDscT
	lv_obj_get_style_bg_image_opa(obj: LvObjT, part: number): number
	lv_obj_get_style_bg_image_recolor(obj: LvObjT, part: number): LvColorT
	lv_obj_get_style_bg_image_recolor_opa(obj: LvObjT, part: number): number
	lv_obj_get_style_bg_image_tiled(obj: LvObjT, part: number): boolean
	lv_obj_get_style_bg_image_recolor_filtered(obj: LvObjT, part: number): LvColorT

	// padding
	lv_obj_set_style_pad_top(obj: LvObjT, pad: number, part: number): void
	lv_obj_set_style_pad_bottom(obj: LvObjT, pad: number, part: number): void
	lv_obj_set_style_pad_left(obj: LvObjT, pad: number, part: number): void
	lv_obj_set_style_pad_right(obj: LvObjT, pad: number, part: number): void
	lv_obj_set_style_pad_row(obj: LvObjT, pad: number, part: number): void
	lv_obj_set_style_pad_column(obj: LvObjT, pad: number, part: number): void
	lv_obj_set_style_base_dir(obj: LvObjT, dir: lv_dir_t, part: number): void
	lv_obj_set_style_pad_all(obj: LvObjT, pad: number, part: number): void

	lv_obj_get_style_pad_top(obj: LvObjT, part: number): number
	lv_obj_get_style_pad_bottom(obj: LvObjT, part: number): number
	lv_obj_get_style_pad_left(obj: LvObjT, part: number): number
	lv_obj_get_style_pad_right(obj: LvObjT, part: number): number
	lv_obj_get_style_pad_row(obj: LvObjT, part: number): number
	lv_obj_get_style_pad_column(obj: LvObjT, part: number): number
	lv_obj_get_style_base_dir(obj: LvObjT, part: number): lv_dir_t

	// margin
	lv_obj_set_style_margin_top(obj: LvObjT, margin: number, part: number): void
	lv_obj_set_style_margin_bottom(obj: LvObjT, margin: number, part: number): void
	lv_obj_set_style_margin_left(obj: LvObjT, margin: number, part: number): void
	lv_obj_set_style_margin_right(obj: LvObjT, margin: number, part: number): void

	lv_obj_get_style_margin_top(obj: LvObjT, part: number): number
	lv_obj_get_style_margin_bottom(obj: LvObjT, part: number): number
	lv_obj_get_style_margin_left(obj: LvObjT, part: number): number
	lv_obj_get_style_margin_right(obj: LvObjT, part: number): number

	// border
	lv_obj_set_style_border_width(obj: LvObjT, width: number, part: number): void
	lv_obj_set_style_border_opa(obj: LvObjT, opa: number, part: number): void
	lv_obj_set_style_border_side(obj: LvObjT, side: lv_border_side_t, part: number): void
	lv_obj_set_style_border_color(obj: LvObjT, color: LvColorT, part: number): void
	lv_obj_set_style_border_color_filtered(obj: LvObjT, color: LvColorT, part: number): void
	lv_obj_set_style_border_post(obj: LvObjT, en: boolean, part: number): void

	lv_obj_get_style_border_width(obj: LvObjT, part: number): number
	lv_obj_get_style_border_opa(obj: LvObjT, part: number): number
	lv_obj_get_style_border_side(obj: LvObjT, part: number): lv_border_side_t
	lv_obj_get_style_border_color(obj: LvObjT, part: number): LvColorT
	lv_obj_get_style_border_color_filtered(obj: LvObjT, part: number): LvColorT
	lv_obj_get_style_border_post(obj: LvObjT, part: number): boolean

	// outline
	lv_obj_set_style_outline_width(obj: LvObjT, width: number, part: number): void
	lv_obj_set_style_outline_color(obj: LvObjT, color: LvColorT, part: number): void
	lv_obj_set_style_outline_color_filtered(obj: LvObjT, color: LvColorT, part: number): void
	lv_obj_set_style_outline_opa(obj: LvObjT, opa: number, part: number): void
	lv_obj_set_style_outline_pad(obj: LvObjT, pad: number, part: number): void

	lv_obj_get_style_outline_width(obj: LvObjT, part: number): number
	lv_obj_get_style_outline_color(obj: LvObjT, part: number): LvColorT
	lv_obj_get_style_outline_color_filtered(obj: LvObjT, part: number): LvColorT
	lv_obj_get_style_outline_opa(obj: LvObjT, part: number): number
	lv_obj_get_style_outline_pad(obj: LvObjT, part: number): number

	// blend
	lv_obj_set_style_blend_mode(obj: LvObjT, mode: number, part: number): void
	// lv_obj_set_style_blend_opa(obj: LvObjT, opa: number, part: number): void

	// text
	lv_obj_set_style_text_color(obj: LvObjT, color: LvColorT, part: number): void
	lv_obj_set_style_text_color_filtered(obj: LvObjT, color: LvColorT, part: number): void
	lv_obj_set_style_text_opa(obj: LvObjT, opacity: number, part: number): void
	lv_obj_set_style_text_font(obj: LvObjT, font: LvFontT, part: number): void
	lv_obj_set_style_text_decor(obj: LvObjT, decor: lv_text_decor_t, part: number): void
	lv_obj_set_style_text_align(obj: LvObjT, align: lv_text_align_t, part: number): void
	lv_obj_set_style_text_letter_space(obj: LvObjT, space: number, part: number): void
	lv_obj_set_style_text_line_space(obj: LvObjT, space: number, part: number): void

	lv_obj_get_style_text_color(obj: LvObjT, part: number): LvColorT
	lv_obj_get_style_text_color_filtered(obj: LvObjT, part: number): LvColorT
	lv_obj_get_style_text_opa(obj: LvObjT, part: number): number
	lv_obj_get_style_text_font(obj: LvObjT, part: number): LvFontT
	lv_obj_get_style_text_decor(obj: LvObjT, part: number): lv_text_decor_t
	lv_obj_get_style_text_align(obj: LvObjT, part: number): lv_text_align_t
	lv_obj_get_style_text_letter_space(obj: LvObjT, part: number): number
	lv_obj_get_style_text_line_space(obj: LvObjT, part: number): number

	// shadow
	lv_obj_set_style_shadow_width(obj: LvObjT, width: number, part: number): void
	lv_obj_set_style_shadow_offset_x(obj: LvObjT, width: number, part: number): void
	lv_obj_set_style_shadow_offset_y(obj: LvObjT, width: number, part: number): void
	lv_obj_set_style_shadow_spread(obj: LvObjT, spread: number, part: number): void
	lv_obj_set_style_shadow_color(obj: LvObjT, color: LvColorT, part: number): void
	lv_obj_set_style_shadow_color_filtered(obj: LvObjT, color: LvColorT, part: number): void
	lv_obj_set_style_shadow_opa(obj: LvObjT, opa: number, part: number): void

	lv_obj_get_style_shadow_width(obj: LvObjT, part: number): number
	lv_obj_get_style_shadow_offset_x(obj: LvObjT, part: number): number
	lv_obj_get_style_shadow_offset_y(obj: LvObjT, part: number): number
	lv_obj_get_style_shadow_spread(obj: LvObjT, part: number): number
	lv_obj_get_style_shadow_color(obj: LvObjT, part: number): LvColorT
	lv_obj_get_style_shadow_color_filtered(obj: LvObjT, part: number): LvColorT
	lv_obj_get_style_shadow_opa(obj: LvObjT, part: number): number

	// transform
	lv_obj_set_style_transform_width(obj: LvObjT, width: number, part: number): void
	lv_obj_set_style_transform_height(obj: LvObjT, height: number, part: number): void
	lv_obj_set_style_min_height(obj: LvObjT, height: number, part: number): void
	lv_obj_set_style_min_width(obj: LvObjT, width: number, part: number): void
	lv_obj_set_style_max_height(obj: LvObjT, height: number, part: number): void
	lv_obj_set_style_max_width(obj: LvObjT, width: number, part: number): void
	lv_obj_set_style_transform_scale_x(obj: LvObjT, x: number, part: number): void
	lv_obj_set_style_transform_scale_y(obj: LvObjT, y: number, part: number): void
	lv_obj_set_style_transform_scale(obj: LvObjT, zoom: number, part: number): void
	lv_obj_set_style_transform_rotation(obj: LvObjT, angle: number, part: number): void
	lv_obj_set_style_translate_x(obj: LvObjT, x: number, part: number): void
	lv_obj_set_style_translate_y(obj: LvObjT, y: number, part: number): void

	lv_obj_get_style_transform_width(obj: LvObjT, part: number): number
	lv_obj_get_style_transform_height(obj: LvObjT, part: number): number
	lv_obj_get_style_min_height(obj: LvObjT, part: number): number
	lv_obj_get_style_min_width(obj: LvObjT, part: number): number
	lv_obj_get_style_max_height(obj: LvObjT, part: number): number
	lv_obj_get_style_max_width(obj: LvObjT, part: number): number
	lv_obj_get_style_transform_scale_x(obj: LvObjT, part: number): number
	lv_obj_get_style_transform_scale_y(obj: LvObjT, part: number): number
	lv_obj_get_style_transform_scale(obj: LvObjT, part: number): number
	lv_obj_get_style_transform_rotation(obj: LvObjT, part: number): number
	lv_obj_get_style_translate_x(obj: LvObjT, part: number): number
	lv_obj_get_style_translate_y(obj: LvObjT, part: number): number

	lv_obj_remove_style_all(obj: LvObjT): void
}

export interface LvglStyleModule {
	lv_obj_set_style_arc_width(arc: LvObjT, width: number, part: number): void
	lv_obj_set_style_arc_color(arc: LvObjT, color: LvColorT, part: number): void
	lv_obj_set_style_arc_opa(arc: LvObjT, opa: number, part: number): void
	lv_obj_set_style_arc_rounded(arc: LvObjT, en: boolean, part: number): void
	lv_obj_set_style_arc_image_src(arc: LvObjT, src: LvImgDscT, part: number): void

	lv_obj_get_style_arc_width(arc: LvObjT, part: number): number
	lv_obj_get_style_arc_color(arc: LvObjT, part: number): LvColorT
	lv_obj_get_style_arc_opa(arc: LvObjT, part: number): number
	lv_obj_get_style_arc_rounded(arc: LvObjT, part: number): boolean

}
