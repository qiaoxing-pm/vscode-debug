import type { EmscriptenModule } from "../../../type.js"

import {
	lv_anim_enable_t,
	lv_bar_mode_t,
	lv_dir_t,
	lv_slider_mode_t,
	lv_roller_mode_t,
	lv_chart_type_t,
	lv_label_long_mode_t,
	lv_chart_update_mode_t,
	lv_chart_axis_t,
	lv_keyboard_mode_t,
	lv_buttonmatrix_ctrl_t,
	lv_table_cell_ctrl_t,
	lv_menu_mode_header_t,
	lv_menu_mode_root_back_button_t,
	lv_span_overflow_t,
	lv_span_mode_t,
	lv_text_align_t,
	lv_imagebutton_state_t,
	lv_scale_mode_t,
	lv_blend_mode_t,
	lv_image_align_t
} from "../lvglEnums.js";

type CreateObjFun<T = LvObjT> = (parent: LvObjT) => T


export interface LvglWidgetsModule extends EmscriptenModule {
	// bar
	lv_bar_create: CreateObjFun
	lv_bar_set_value(obj: LvObjT, value: number, animState: lv_anim_enable_t): void
	lv_bar_set_start_value(bar: LvObjT, value: number, on: boolean): void
	lv_bar_set_range(bar: LvObjT, start: number, end: number): void
	lv_bar_set_mode(bar: LvObjT, mode: lv_bar_mode_t): void

	lv_bar_get_value(bar: LvObjT): number
	lv_bar_get_start_value(bar: LvObjT): number
	lv_bar_get_min_value(bar: LvObjT): number
	lv_bar_get_max_value(bar: LvObjT): number
	lv_bar_get_mode(bar: LvObjT): lv_bar_mode_t
	lv_bar_is_symmetrical(bar: LvObjT): boolean

	lv_imagebutton_create: CreateObjFun
	lv_btnmatrix_create: CreateObjFun

	// dropdown
	lv_dropdown_create: CreateObjFun
	lv_dropdown_set_options_static(obj: LvObjT, options: string): void
	lv_dropdown_set_options(obj: LvObjT, options: string): void
	lv_dropdown_clear_options: (obj: LvObjT) => void
	lv_dropdown_add_option(obj: LvObjT, option: string, pos: number): void
	lv_dropdown_set_text(obj: LvObjT, text: string): void
	lv_dropdown_set_selected_highlight(obj: LvObjT, en: boolean): void
	lv_dropdown_set_dir(obj: LvObjT, dir: lv_dir_t): void
	lv_dropdown_set_selected(obj: LvObjT, sel: number): void

	lv_dropdown_get_options(obj: LvObjT): string
	lv_dropdown_get_option_index(obj: LvObjT, option: string): number
	lv_dropdown_get_selected(obj: LvObjT): number
	lv_dropdown_get_selected_str(obj: LvObjT): string
	lv_dropdown_get_option_count(obj: LvObjT): string
	lv_dropdown_get_selected_highlight(obj: LvObjT): boolean
	lv_dropdown_get_dir(obj: LvObjT): lv_dir_t

	// calendar
	lv_calendar_create: CreateObjFun
	lv_calendar_set_today_date(obj: LvObjT, year: number, month: number, day: number): void
	lv_calendar_set_showed_date(obj: LvObjT, year: number, num: number): void
	lv_calendar_set_highlighted_dates(obj: LvObjT, dates: LvCalendarDateT[], num: number): void
	lv_calendar_set_day_names(obj: LvObjT, names: string[]): void

	lv_calendar_get_btnmatrix(obj: LvObjT): LvObjT
	lv_calendar_get_today_date(obj: LvObjT): LvCalendarDateT
	lv_calendar_get_showed_date(obj: LvObjT): LvCalendarDateT
	lv_calendar_get_highlighted_dates(obj: LvObjT): LvCalendarDateT
	lv_calendar_get_highlighted_dates_num(obj: LvObjT): number
	lv_calendar_get_pressed_date(obj: LvObjT, date: LvCalendarDateT): LvCalendarDateT

	// label
	lv_label_create: CreateObjFun
	lv_label_set_text(obj: LvObjT, text: string): void
	lv_label_set_text_static(obj: LvObjT, text: string): void
	lv_label_set_long_mode(label: LvObjT, mode: lv_label_long_mode_t): void
	lv_label_set_text_selection_start(label: LvObjT, index: number): void
	lv_label_set_text_selection_end(label: LvObjT, index: number): void
	lv_label_set_recolor(label: LvObjT, en: boolean): void

	lv_label_get_text(label: LvObjT): string
	lv_label_get_long_mode(label: LvObjT): lv_label_long_mode_t;
	lv_label_get_letter_pos(label: LvObjT, index: number): void;
	lv_label_get_text_selection_start(label: LvObjT): number;
	lv_label_get_text_selection_end(label: LvObjT): number;

	// checkbox
	lv_checkbox_create: CreateObjFun
	lv_checkbox_set_text(obj: LvObjT, text: string): void
	lv_checkbox_set_text_static(obj: LvObjT, text: string): void
	lv_checkbox_get_text(obj: LvObjT): string

	/*colorwheel*/
	lv_colorwheel_create(obj: LvObjT, isTrue: boolean): void
	lv_colorwheel_set_hsv(obj: LvObjT, h: number, s: number, v: number): void
	lv_colorwheel_set_rgb(obj: LvObjT, r: number, g: number, b: number): void
	lv_colorwheel_set_mode(obj: LvObjT, mode: number): void
	lv_colorwheel_set_mode_fixed(obj: LvObjT, mode: number): void
	lv_colorwheel_get_hsv(obj: LvObjT): void
	lv_colorwheel_get_rgb(obj: LvObjT): void
	lv_colorwheel_get_color_mode(obj: LvObjT): void
	// lv_colorwheel_get_color_mode_fixed

	// table
	lv_table_create: CreateObjFun
	lv_table_set_cell_value(table: LvObjT, row: number, column: number, text: string): void
	lv_table_set_row_count(table: LvObjT, row: number): void
	lv_table_set_column_count(table: LvObjT, col: number): void
	lv_table_set_column_width(table: LvObjT, col: number, width: number): void
	lv_table_add_cell_ctrl(table: LvObjT, row: number, col: number, ctrl: lv_table_cell_ctrl_t): void
	lv_table_clear_cell_ctrl(table: LvObjT, row: number, col: number, ctrl: lv_table_cell_ctrl_t): void
	lv_table_get_cell_user_data(table: LvObjT, row: number, col: number, data: any): string

	lv_table_get_cell_value(table: LvObjT, row: number, col: number): string
	lv_table_get_row_count(table: LvObjT): number
	lv_table_get_column_count(table: LvObjT): number
	lv_table_get_column_width(table: LvObjT, col: number): number
	lv_table_has_cell_ctrl(table: LvObjT, row: number, col: number, ctrl: lv_table_cell_ctrl_t): boolean
	lv_table_get_selected_cell(table: LvObjT): { row: number, col: number }
	lv_table_get_cell_user_data(table: LvObjT, row: number, col: number): any;

	// menu
	lv_menu_create: CreateObjFun
	lv_menu_page_create(parent: LvObjT, title: string): LvObjT
	lv_menu_cont_create: CreateObjFun;
	lv_menu_section_create: CreateObjFun;
	lv_menu_separator_create: CreateObjFun;
	lv_menu_set_page(menu: LvObjT, page: LvObjT | null): void
	lv_menu_set_page_title(page: LvObjT, title: string): void
	lv_menu_set_page_title_static(page: LvObjT, title: string): void
	lv_menu_set_sidebar_page(menu: LvObjT, page: LvObjT | null): void
	lv_menu_set_mode_header(menu: LvObjT, mode: lv_menu_mode_header_t): void
	lv_menu_set_mode_root_back_button(menu: LvObjT, mode: lv_menu_mode_root_back_button_t): void
	lv_menu_set_load_page_event(menu: LvObjT, obj: LvObjT, page: LvObjT): void

	lv_menu_get_cur_main_page(menu: LvObjT): LvObjT
	lv_menu_get_cur_sidebar_page(menu: LvObjT): LvObjT
	lv_menu_get_main_header(menu: LvObjT): LvObjT
	lv_menu_get_main_header_back_button(menu: LvObjT): LvObjT
	lv_menu_get_sidebar_header(menu: LvObjT): LvObjT
	lv_menu_get_sidebar_header_back_button(menu: LvObjT): LvObjT
	lv_menu_back_button_is_root(menu: LvObjT): boolean
	lv_menu_clear_history(page: LvObjT): string

	// line
	lv_point_precise_t: new () => LvPointPreciseT;
	lv_line_create: CreateObjFun
	lv_line_set_points(obj: LvObjT, points: ArrayBuffer, num: number): void
	lv_line_set_y_invert(obj: LvObjT, en: boolean): void
	lv_line_get_y_invert(obj: LvObjT): boolean

	// imagebutton
	lv_imgbtn_create: CreateObjFun
	lv_imgbtn_set_src(img: LvObjT, state: lv_imagebutton_state_t, leftDsc: LvImgDscT, midDsc: LvImgDscT, right: LvImgDscT): void
	lv_imgbtn_get_src_left(img: LvObjT, state: lv_imagebutton_state_t): LvImgDscT
	lv_imgbtn_get_src_middle(img: LvObjT, state: lv_imagebutton_state_t): LvImgDscT
	lv_imgbtn_get_src_right(img: LvObjT, state: lv_imagebutton_state_t): LvImgDscT

	//image
	lv_image_create: CreateObjFun
	lv_image_set_src_dsc(img: LvObjT, src: ArrayBuffer | Uint8Array): void
	lv_image_set_src(img: LvObjT, src: LvImgDscT | null): void
	lv_image_buf_free(img_buf: LvImgDscT | null): void
	lv_image_set_offset_x(img: LvObjT, x: number): void
	lv_image_set_offset_y(img: LvObjT, y: number): void
	lv_image_set_scale_x(img: LvObjT, scale: number): void
	lv_image_set_scale_y(img: LvObjT, scale: number): void
	lv_image_set_scale(img: LvObjT, scale: number): void
	lv_image_set_pivot(img: LvObjT, x: number, y: number): void
	lv_image_set_rotation(img: LvObjT, rotation: number): void

	lv_image_get_offset_x(img: LvObjT): number
	lv_image_get_offset_y(img: LvObjT): number
	lv_image_get_scale_x(img: LvObjT): number
	lv_image_get_scale_y(img: LvObjT): number
	lv_image_get_scale(img: LvObjT): number
	lv_image_get_rotation(img: LvObjT): number

	// switch
	lv_switch_create: CreateObjFun

	// spinbox
	lv_spinbox_create: CreateObjFun
	lv_spinbox_set_value(obj: LvObjT, value: number): void
	lv_spinbox_set_digit_format(obj: LvObjT, count: number, position: number): void
	lv_spinbox_set_range(obj: LvObjT, min: number, max: number): void
	lv_spinbox_set_step(obj: LvObjT, step: number): void
	lv_spinbox_set_digit_step_direction(obj: LvObjT, dir: lv_dir_t): void
	lv_spinbox_set_rollover(obj: LvObjT, en: boolean): void

	lv_spinbox_get_rollover(obj: LvObjT): boolean
	lv_spinbox_get_value(obj: LvObjT): number
	lv_spinbox_get_step(obj: LvObjT): number
	lv_spinbox_step_next(obj: LvObjT): void
	lv_spinbox_step_prev(obj: LvObjT): void
	lv_spinbox_increment(obj: LvObjT): void
	lv_spinbox_decrement(obj: LvObjT): void

	// slider
	lv_slider_create: CreateObjFun
	lv_slider_set_value(obj: LvObjT, value: number, animate: number): void
	lv_slider_set_left_value(obj: LvObjT, value: number, animate: number): void
	lv_slider_set_range(obj: LvObjT, start: number, end: number): void
	lv_slider_set_mode(slider: LvObjT, mode: lv_slider_mode_t): void
	lv_slider_get_value(slider: LvObjT): number
	lv_slider_get_left_value(slider: LvObjT): number
	lv_slider_get_min_value(slider: LvObjT): number
	lv_slider_get_max_value(slider: LvObjT): number
	lv_slider_is_dragged(slider: LvObjT): boolean
	lv_slider_get_mode(slider: LvObjT): lv_slider_mode_t

	// led
	lv_led_create: CreateObjFun
	lv_led_set_color(led: LvObjT, color: LvColorT): void
	lv_led_set_brightness(led: LvObjT, bright: number): void
	lv_led_on(led: LvObjT): void
	lv_led_off(led: LvObjT): void
	lv_led_toggle(led: LvObjT): void
	lv_led_get_brightness(led: LvObjT): number

	// roller
	lv_roller_create: CreateObjFun
	lv_roller_set_options(roller: LvObjT, options: string, mode: lv_roller_mode_t): void
	lv_roller_set_selected(roller: LvObjT, index: number, anim: lv_anim_enable_t): void
	lv_roller_set_visible_row_count(roller: LvObjT, rowCnt: number): void

	lv_roller_get_selected(roller: LvObjT): number
	lv_roller_get_selected_str(roller: LvObjT): string
	lv_roller_get_options(roller: LvObjT): string
	lv_roller_get_options_count(roller: LvObjT): lv_roller_mode_t
	lv_roller_get_visible_row_count(roller: LvObjT): number

	// spinner
	lv_spinner_create: CreateObjFun
	lv_spinner_set_anim_params(spinner: LvObjT, t: number, angle: number): void

	// keyboard
	lv_keyboard_create: CreateObjFun
	lv_keyboard_set_textarea(obj: LvObjT, kb: LvObjT): void
	lv_keyboard_set_mode(kb: LvObjT, mode: lv_keyboard_mode_t): void
	lv_keyboard_set_popovers(kb: LvObjT, en: boolean): void
	lv_keyboard_set_map(kb: LvObjT, mode: lv_keyboard_mode_t, map: string[], ctrls: lv_buttonmatrix_ctrl_t[]): void

	lv_keyboard_get_textarea(kb: LvObjT): LvObjT;
	lv_keyboard_get_mode(kb: LvObjT): lv_keyboard_mode_t;
	lv_keyboard_get_map_array(kb: LvObjT): string[];
	lv_keyboard_get_selected_button(kb: LvObjT): number;
	lv_keyboard_get_button_text(kb: LvObjT): string;
	lv_keyboard_def_event_cb(event: LvEventT): void;

	// tabview
	lv_tabview_create(widget: LvObjT): LvObjT
	lv_tabview_add_tab(tabview: LvObjT, title: string): LvObjT
	lv_tabview_rename_tab(tabview: LvObjT, idx: number, title: string): void
	lv_tabview_set_active(obj: LvObjT, id: number, animation: boolean): void
	lv_tabview_set_tab_bar_position(obj: LvObjT, pos: lv_dir_t): void
	lv_tabview_set_tab_bar_size(obj: LvObjT, size: number): void

	lv_tabview_get_tab_active(tabview: LvObjT): number
	lv_tabview_get_tab_count(tabview: LvObjT): number
	lv_tabview_get_content(obj: LvObjT): LvObjT
	lv_tabview_get_tab_bar(obj: LvObjT): LvObjT

}

export interface LvglWidgetsModule {
	lv_button_create: CreateObjFun
}

/*arc*/
export interface LvglWidgetsModule {
	lv_arc_create: CreateObjFun
	lv_arc_set_angles(): void
	lv_arc_set_range(obj: LvObjT, min: number, max: number): void
	lv_arc_set_start_angle(obj: LvObjT, angle: number): void
	lv_arc_set_end_angle(obj: LvObjT, angle: number): void
	lv_arc_set_bg_start_angle(obj: LvObjT, angle: number): void
	lv_arc_set_bg_end_angle(obj: LvObjT, angle: number): void
	lv_arc_set_bg_angles(): void
	lv_arc_set_value(obj: LvObjT, value: number): void
	lv_arc_set_rotation(obj: LvObjT, rotation: number): void
	lv_arc_set_mode(obj: LvObjT, mode: number): void
	lv_arc_set_change_rate(obj: LvObjT, rate: number): void
	lv_arc_set_knon_offset(obj: LvObjT, offset: number): void

	lv_arc_get_angle_start(obj: LvObjT): number
	lv_arc_get_angle_end(obj: LvObjT): number
	lv_arc_get_bg_angle_start(obj: LvObjT): number
	lv_arc_get_bg_angle_end(obj: LvObjT): number
	lv_arc_get_min_value(obj: LvObjT): number
	lv_arc_get_max_value(obj: LvObjT): number
	lv_arc_get_value(obj: LvObjT): number
	lv_arc_get_rotation(obj: LvObjT): number
	lv_arc_get_mode(obj: LvObjT): number
	lv_arc_get_change_rate(obj: LvObjT): number


}

// lv_chart
export interface LvglWidgetsModule {
	lv_series_t: new () => lvChartSeriesT;
	lv_chart_cursor_t: new () => LvChartCursorT;
	lv_chart_create: CreateObjFun
	lv_chart_set_type(chart: LvObjT, type: lv_chart_type_t): void
	lv_chart_set_point_count(chart: LvObjT, count: number): void
	lv_chart_set_range(chart: LvObjT, axis: lv_chart_axis_t, min: number, max: number): void
	lv_chart_set_update_mode(chart: LvObjT, mode: lv_chart_update_mode_t): void
	lv_chart_set_div_line_count(chart: LvObjT, hdiv: number, vdiv: number): void

	lv_chart_get_type(chart: LvObjT): lv_chart_type_t
	lv_chart_get_point_count(chart: LvObjT): number
	lv_chart_get_x_start_point(chart: LvObjT, series: lvChartSeriesT): number
	lv_chart_get_point_pos_by_id(chart: LvObjT, series: lvChartSeriesT, id: number, pOut: LvPointT): void
	lv_chart_refresh(chart: LvObjT): void
	// series
	lv_chart_add_series(chart: LvObjT, color: LvColorT, axis: lv_chart_axis_t): lvChartSeriesT
	lv_chart_remove_series(chart: LvObjT, series: lvChartSeriesT): void
	lv_chart_hide_series(chart: LvObjT, series: lvChartSeriesT, hide: boolean): void
	lv_chart_set_series_color(chart: LvObjT, series: lvChartSeriesT, color: LvColorT): void
	lv_chart_set_x_start_point(chart: LvObjT, series: lvChartSeriesT, id: number): void
	lv_chart_get_series_next(chart: LvObjT, series: lvChartSeriesT | null): LvObjT | null
	// cursor
	lv_chart_add_cursor(chart: LvObjT, color: LvColorT, dir: lv_dir_t): LvChartCursorT
	lv_chart_set_cursor_pos(chart: LvObjT, cursor: LvChartCursorT, pos: LvPointT): void
	lv_chart_set_cursor_point(chart: LvObjT, cursor: LvChartCursorT, series: lvChartSeriesT, pointId: number): void
	lv_chart_get_cursor_point(chart: LvObjT, cursor: LvChartCursorT): LvPointT

	// 数据设置
	lv_chart_set_all_value(chart: LvObjT, series: lvChartSeriesT, value: number): void
	lv_chart_set_next_value(chart: LvObjT, series: lvChartSeriesT, value: number): void
	lv_chart_set_next_value2(chart: LvObjT, series: lvChartSeriesT, x_value: number, y_value: number): void
	lv_chart_set_value_by_id(chart: LvObjT, series: lvChartSeriesT, id: number, value: number): void
	lv_chart_set_value_by_id2(chart: LvObjT, series: lvChartSeriesT, id: number, x_value: number, y_value: number): void

	// 外部数组
	lv_chart_set_ext_y_array(chart: LvObjT, series: lvChartSeriesT, array: Uint8Array | Int32Array): void
	lv_chart_set_ext_x_array(chart: LvObjT, series: lvChartSeriesT, array: Uint8Array | Int32Array): void
	lv_chart_get_y_array(chart: LvObjT, series: lvChartSeriesT): Uint8Array | Int32Array
	lv_chart_get_x_array(chart: LvObjT, series: lvChartSeriesT): Uint8Array | Int32Array

	// 交互状态
	lv_chart_get_pressed_point(chart: LvObjT): number
	lv_chart_get_first_point_center_offset(chart: LvObjT): number
}

export interface LvglWidgetsModule {
	// 创建
	lv_textarea_create: CreateObjFun
	// 添加/删除字符
	lv_textarea_add_char(obj: LvObjT, c: number): void
	lv_textarea_add_text(obj: LvObjT, txt: string): void
	lv_textarea_delete_char(obj: LvObjT): void
	lv_textarea_delete_char_forward(obj: LvObjT): void
	// 设置文本和光标
	lv_textarea_set_text(obj: LvObjT, txt: string): void
	lv_textarea_set_placeholder_text(obj: LvObjT, txt: string): void
	lv_textarea_set_cursor_pos(obj: LvObjT, pos: number): void
	lv_textarea_set_cursor_click_pos(obj: LvObjT, en: boolean): void
	// 密码模式
	lv_textarea_set_password_mode(obj: LvObjT, en: boolean): void
	lv_textarea_set_password_bullet(obj: LvObjT, bullet: number): void
	lv_textarea_set_password_show_time(obj: LvObjT, time: number): void
	// 单行
	lv_textarea_set_one_line(obj: LvObjT, en: boolean): void
	// 允许字符
	lv_textarea_set_accepted_chars(obj: LvObjT, chars: string): void
	// 最大长度
	lv_textarea_set_max_length(obj: LvObjT, length: number): void
	// 插入替换
	lv_textarea_set_insert_replace(obj: LvObjT, en: boolean): void
	// 文本选中
	lv_textarea_set_text_selection(obj: LvObjT, en: boolean): void
	lv_textarea_set_align(obj: LvObjT, align: number): void
	// 获取
	lv_textarea_get_text(obj: LvObjT): string
	lv_textarea_get_placeholder_text(obj: LvObjT): string
	lv_textarea_get_label(obj: LvObjT): LvObjT
	lv_textarea_get_cursor_pos(obj: LvObjT): number
	lv_textarea_get_cursor_click_pos(obj: LvObjT): boolean
	lv_textarea_get_password_mode(obj: LvObjT): boolean
	lv_textarea_get_password_bullet(obj: LvObjT): number
	lv_textarea_get_password_show_time(obj: LvObjT): number
	lv_textarea_get_one_line(obj: LvObjT): boolean
	lv_textarea_get_accepted_chars(obj: LvObjT): string
	lv_textarea_get_max_length(obj: LvObjT): number

	// 文本选择
	lv_textarea_text_is_selected(obj: LvObjT): boolean
	lv_textarea_get_text_selection(obj: LvObjT): string
	lv_textarea_get_current_char(obj: LvObjT): number
	lv_textarea_clear_selection(obj: LvObjT): void

	// 光标移动
	lv_textarea_cursor_right(obj: LvObjT): void
	lv_textarea_cursor_left(obj: LvObjT): void
	lv_textarea_cursor_down(obj: LvObjT): void
	lv_textarea_cursor_up(obj: LvObjT): void
}

// span
export interface LvglWidgetsModule {
	// spangroup
	lv_spangroup_create(parent: LvObjT): LvObjT
	lv_spangroup_new_span(spangroup: LvObjT): LvSpanT
	lv_spangroup_delete_span(spangroup: LvObjT, span: LvSpanT): void

	// span
	lv_span_set_text(span: LvSpanT, txt: string): void
	lv_span_set_text_static(span: LvSpanT, txt: string): void

	// spangroup 设置
	lv_spangroup_set_align(spangroup: LvObjT, align: lv_text_align_t): void
	lv_spangroup_set_overflow(spangroup: LvObjT, overflow: lv_span_overflow_t): void
	lv_spangroup_set_indent(spangroup: LvObjT, indent: number): void
	lv_spangroup_set_mode(spangroup: LvObjT, mode: lv_span_mode_t): void
	lv_spangroup_set_max_lines(spangroup: LvObjT, lines: number): void

	// spangroup 获取
	lv_spangroup_get_child(spangroup: LvObjT): LvObjT
	lv_spangroup_get_span_count(spangroup: LvObjT): number
	lv_spangroup_get_align(spangroup: LvObjT): lv_text_align_t
	lv_spangroup_get_overflow(spangroup: LvObjT): lv_span_overflow_t
	lv_spangroup_get_indent(spangroup: LvObjT): number
	lv_spangroup_get_mode(spangroup: LvObjT): lv_span_mode_t
	lv_spangroup_get_max_lines(spangroup: LvObjT): number
	lv_spangroup_get_max_line_height(spangroup: LvObjT): number
	lv_spangroup_get_expand_width(spangroup: LvObjT): number
	lv_spangroup_get_expand_height(spangroup: LvObjT): number

	// 刷新
	lv_spangroup_refr_mode(spangroup: LvObjT): void
}
// list
export interface LvglWidgetsModule {
	lv_list_create: CreateObjFun
	lv_list_add_text(obj: LvObjT, text: string): LvObjT
	lv_list_add_button(obj: LvObjT, icon: string, txt: string): LvObjT
	lv_list_add_button_dsc(obj: LvObjT, dsc: LvImgDscT, txt: string): LvObjT

	lv_list_get_button_text(obj: LvObjT, btn: LvObjT): string
	lv_list_set_button_text(obj: LvObjT, btn: LvObjT, text: string): void
}

// titleview
export interface LvglWidgetsModule {
	lv_titleview_create: CreateObjFun
	lv_titleview_add_title(obj: LvObjT, col_id: number, row_id: number, dir: lv_dir_t): LvObjT
	lv_titleview_set_title(obj: LvObjT, title: LvObjT, animEn: boolean): void
	lv_titleview_set_title_by_index(tv: LvObjT, col_id: number, row_id: number, animEn: boolean): number
	lv_titleview_get_title_active(obj: LvObjT): LvObjT
}

// message box
export interface LvglWidgetsModule {
	// 创建
	lv_msgbox_create(parent: LvObjT): LvObjT
	// 添加内容
	lv_msgbox_add_title(msgbox: LvObjT, title: string): void
	lv_msgbox_add_header_button(msgbox: LvObjT, symbol: string): LvObjT
	lv_msgbox_add_text(msgbox: LvObjT, text: string): void
	lv_msgbox_add_footer_button(msgbox: LvObjT, text: string, close: boolean): LvObjT
	lv_msgbox_add_close_button(msgbox: LvObjT): LvObjT
	// 获取内部对象
	lv_msgbox_get_header(msgbox: LvObjT): LvObjT
	lv_msgbox_get_footer(msgbox: LvObjT): LvObjT
	lv_msgbox_get_content(msgbox: LvObjT): LvObjT
	lv_msgbox_get_title(msgbox: LvObjT): LvObjT
	// 关闭
	lv_msgbox_close(msgbox: LvObjT): void
	lv_msgbox_close_async(msgbox: LvObjT): void
}

// cnavas
export interface LvglWidgetsModule {
	lv_canvas_create: CreateObjFun

}
// scale
export interface LvglWidgetsModule {
	// 创建
	lv_scale_create(parent: LvObjT): LvObjT
	// 设置
	lv_scale_set_mode(scale: LvObjT, mode: lv_scale_mode_t): void
	lv_scale_set_total_tick_count(scale: LvObjT, count: number): void
	lv_scale_set_major_tick_every(scale: LvObjT, n: number): void
	lv_scale_set_label_show(scale: LvObjT, show: boolean): void
	lv_scale_set_range(scale: LvObjT, min: number, max: number): void
	lv_scale_set_angle_range(scale: LvObjT, range: number): void
	lv_scale_set_rotation(scale: LvObjT, angle: number): void
	lv_scale_set_line_needle_value(scale: LvObjT, value: number): void
	lv_scale_set_image_needle_value(scale: LvObjT, value: number): void
	lv_scale_set_text_src(scale: LvObjT, txt: string): void
	lv_scale_set_post_draw(scale: LvObjT, cb: unknown): void // 回调函数，用 unknown
	// 分段
	lv_scale_add_section(scale: LvObjT): LvScaleSectionT
	lv_scale_section_set_range(section: LvScaleSectionT, min: number, max: number): void
	lv_scale_section_set_style(section: LvScaleSectionT, style: LvStyleT): void
	// 获取
	lv_scale_get_mode(scale: LvObjT): lv_scale_mode_t
	lv_scale_get_total_tick_count(scale: LvObjT): number
	lv_scale_get_major_tick_every(scale: LvObjT): number
	lv_scale_get_label_show(scale: LvObjT): boolean
	lv_scale_get_angle_range(scale: LvObjT): number
	lv_scale_get_range_min_value(scale: LvObjT): number
	lv_scale_get_range_max_value(scale: LvObjT): number

}

// window
export interface LvglWidgetsModule {
	lv_win_create(parent: LvObjT): LvObjT
	lv_win_add_title(win: LvObjT, title: string): void
	lv_win_add_button(win: LvObjT, icon: string): LvObjT
	lv_win_get_header(win: LvObjT): LvObjT
	lv_win_get_content(win: LvObjT): LvObjT
}

// multi
export interface LvglWidgetsModule {
	makeLvImgDscVector(size: number): ImgDscVec;
	makeStringVector(size: number): StringVec;
	makeFloatVector(size: number): FloatVec;

	lv_multistateimage_create: CreateObjFun
	lv_multistateimage_set_src(obj: LvObjT, src: ImgDscVec): void
	lv_multistateimage_set_src_index(obj: LvObjT, src: LvImgDscT, index: number): void
	lv_multistateimage_set_active_index(obj: LvObjT, index: number): void
	lv_multistateimage_add_src(obj: LvObjT, src: LvImgDscT): void
	lv_multistateimage_set_offset_x(obj: LvObjT, offset: number): void
	lv_multistateimage_set_offset_y(obj: LvObjT, offset: number): void
	lv_multistateimage_set_rotation(obj: LvObjT, rotation: number): void
	lv_multistateimage_set_scale(obj: LvObjT, scale: number): void
	lv_multistateimage_set_pivot(obj: LvObjT, x: number, y: number): void
	lv_multistateimage_set_scale_x(obj: LvObjT, scale: number): void
	lv_multistateimage_set_scale_y(obj: LvObjT, scale: number): void
	lv_multistateimage_set_blend_mode(obj: LvObjT, mode: lv_blend_mode_t): void
	lv_multistateimage_set_antialias(obj: LvObjT, en: boolean): void
	lv_multistateimage_set_align(obj: LvObjT, align: lv_image_align_t): void

	lv_multistateimage_get_src_index(obj: LvObjT, idx: number): LvImgDscT;
	lv_multistateimage_get_offset_x(obj: LvObjT): number
	lv_multistateimage_get_offset_y(obj: LvObjT): number
	lv_multistateimage_get_rotation(obj: LvObjT): number
	lv_multistateimage_get_scale(obj: LvObjT): number
	lv_multistateimage_get_pivot(obj: LvObjT): LvPointT;
	lv_multistateimage_get_scale_x(obj: LvObjT): number
	lv_multistateimage_get_scale_y(obj: LvObjT): number
	lv_multistateimage_get_blend_mode(obj: LvObjT): lv_blend_mode_t
	lv_multistateimage_get_antialias(obj: LvObjT): boolean
	lv_multistateimage_get_align(obj: LvObjT): lv_image_align_t

	// multistatetext
	lv_multistatetext_create(parent: LvObjT): LvObjT
	lv_multistatetext_set_texts(obj: LvObjT, text: StringVec): void
	lv_multistatetext_add_text(obj: LvObjT, text: string): void
	lv_multistatetext_set_text_index(obj: LvObjT, text: string, index: number): void
	lv_multistatetext_set_text_active(obj: LvObjT, index: number): void
	lv_multistatetext_set_long_mode(obj: LvObjT, mode: lv_label_long_mode_t): void
	lv_multistatetext_set_text_selection_start(obj: LvObjT, index: number): void
	lv_multistatetext_set_text_selection_end(obj: LvObjT, index: number): void

	lv_multistatetext_get_active_text(obj: LvObjT): string;
	lv_multistatetext_get_long_mode(obj: LvObjT): lv_label_long_mode_t;
	lv_multistatetext_get_text_selection_start(obj: LvObjT): number;
	lv_multistatetext_get_text_selection_end(obj: LvObjT): number;
	lv_multistatetext_cut_text(obj: LvObjT, pos: number, cnt: number): void;

	// multistatenum
	lv_multistatenum_create(parent: LvObjT): LvObjT
	lv_multistatenum_set_values(obj: LvObjT, values: FloatVec): void
	lv_multistatenum_add_value(obj: LvObjT, value: number): void
	lv_multistatenum_set_value_index(obj: LvObjT, value: number, idx: number): void
	lv_multistatenum_set_active_index(obj: LvObjT, index: number): void
	lv_multistatenum_set_radix(obj: LvObjT, radix: number): void
	lv_multistatenum_set_pad_zero(obj: LvObjT, en: boolean): void
	lv_multistatenum_set_show_sign(obj: LvObjT, en: boolean): void
	lv_multistatenum_set_digit_format(obj: LvObjT, digitCnt: number, sepPos: number): void
	lv_multistatenum_set_step(obj: LvObjT, step: number): void
	lv_multistatenum_set_range(obj: LvObjT, min: number, max: number): void
	lv_multistatenum_increment(obj: LvObjT): void
	lv_multistatenum_decrement(obj: LvObjT): void
}

// graphics
export interface LvglWidgetsModule {
	// polygon
	lv_point_t: new () => LvPointT;
	makeLvPointVector(size: number): PointVec;
	lv_polygon_create(parent: LvObjT): LvObjT
	lv_polygon_set_points(obj: LvObjT, points: PointVec): void
	lv_polygon_set_fill_color(obj: LvObjT, color: LvColorT): void
	lv_polygon_set_outline_color(obj: LvObjT, color: LvColorT): void

	// ellipse
	lv_ellipse_create(parent: LvObjT): LvObjT
	lv_ellipse_set_radius(obj: LvObjT, radius_x: number, radius_y: number): void
	lv_ellipse_set_center(obj: LvObjT, p: LvPointT): void
	lv_ellipse_set_fill_color(obj: LvObjT, color: LvColorT): void
	lv_ellipse_set_outline_color(obj: LvObjT, color: LvColorT): void

	// circle
	lv_circle_create(parent: LvObjT): LvObjT
	lv_circle_set_radius(obj: LvObjT, radius: number): void
	lv_circle_set_center(obj: LvObjT, p: LvPointT): void
	lv_circle_set_fill_color(obj: LvObjT, color: LvColorT): void
	lv_circle_set_outline_color(obj: LvObjT, color: LvColorT): void

	// partcircle
	lv_partcircle_create(parent: LvObjT): LvObjT
	lv_partcircle_set_radius(obj: LvObjT, radius: number): void
	lv_partcircle_set_center(obj: LvObjT, p: LvPointT): void
	lv_partcircle_set_fill_color(obj: LvObjT, color: LvColorT): void
	lv_partcircle_set_outline_color(obj: LvObjT, color: LvColorT): void
	lv_partcircle_set_range(obj: LvObjT, start_angle: number, end_angle: number): void

	// partellipse
	lv_partellipse_create(parent: LvObjT): LvObjT
	lv_partellipse_set_radius(obj: LvObjT, radius_x: number, radius_y: number): void
	lv_partellipse_set_center(obj: LvObjT, p: LvPointT): void
	lv_partellipse_set_fill_color(obj: LvObjT, color: LvColorT): void
	lv_partellipse_set_outline_color(obj: LvObjT, color: LvColorT): void
	lv_partellipse_set_range(obj: LvObjT, start_angle: number, end_angle: number): void

	// pipe
	lv_pipe_create(parent: LvObjT): LvObjT
	lv_pipe_set_color(obj: LvObjT, color: LvColorT, end: LvColorT): void
	lv_pipe_set_width(obj: LvObjT, width: number): void
	lv_pipe_set_height(obj: LvObjT, height: number): void
	lv_pipe_set_radius(obj: LvObjT, radius: number): void
	lv_pipe_set_shape_type(obj: LvObjT, type: number): void
	lv_pipe_start_flow(obj: LvObjT): void
	lv_pipe_stop_flow(obj: LvObjT): void
	lv_pipe_set_flow_speed(obj: LvObjT, speed: number): void
	lv_pipe_set_flow_rate(obj: LvObjT, rate: number): void
	lv_pipe_set_flow_offset(obj: LvObjT, offset: number): void
	lv_pipe_set_flow_color(obj: LvObjT, color: LvColorT): void
	lv_pipe_add_inlet(obj: LvObjT, inlet: number): void
	lv_pipe_reset_inlet(obj: LvObjT): void
}
