import type { EmscriptenModule } from "../../../type.js"

type CreateObjFun<T = LvObjT> = (parent: LvObjT) => T;
export interface HMIModule extends EmscriptenModule {
	// permission

	is_permission_show(permission: PermissionT): boolean;
	is_permission_control(permission: PermissionT): boolean;
	permission_notify(permission: PermissionT): void;

	permission_set_show(permission: PermissionT, show: boolean): void;
	permission_set_control(permission: PermissionT, control: boolean): void;
	permission_set_notify(permission: PermissionT, notify: boolean): void;

	permission_set_show_bit(permission: PermissionT, show_bit: boolean): void;
	permission_set_control_bit(permission: PermissionT, control_bit: boolean): void;
	permission_set_bit(permission: PermissionT, bit: boolean, is_show: boolean): void;
	permission_set_notify_bit(permission: PermissionT, notify_bit: boolean): void;

	permission_set_show_user(permission: PermissionT, show_user: boolean): void;
	permission_set_control_user(permission: PermissionT, control_user: boolean): void;
	permission_set_user(permission: PermissionT, user: boolean, is_show: boolean): void;

	permission_set_show_word(permission: PermissionT, show_word: boolean): void;
	permission_set_control_word(permission: PermissionT, control_word: boolean): void;
	permission_set_word(permission: PermissionT, word: boolean, is_show: boolean): void;
	permission_set_notify_word(permission: PermissionT, notify_word: boolean): void;

	permission_set_press(permission: PermissionT, press: boolean): void;

	permission_set_show_bit_control_addr(permission: PermissionT, addr: number, addr_type: number): void;
	permission_set_show_bit_control_status(permission: PermissionT, status: number): void;

	permission_set_control_bit_control_addr(permission: PermissionT, addr: number, addr_type: number): void;
	permission_set_control_bit_control_status(permission: PermissionT, status: number): void;

	permission_set_bit_control_addr(permission: PermissionT, addr: number, addr_type: number, is_show: boolean): void;
	permission_set_bit_control_status(permission: PermissionT, status: number, is_show: boolean): void;

	permission_set_notify_bit_control_addr(permission: PermissionT, addr: number, addr_type: number): void;
	permission_set_notify_bit_control_status(permission: PermissionT, status: number): void;

	permission_set_show_user_level(permission: PermissionT, show_user_level: number): void;
	permission_set_control_user_level(permission: PermissionT, control_user_level: number): void;
	permission_set_user_level(permission: PermissionT, user_level: number, is_show: boolean): void;

	permission_set_show_word_control_addr(permission: PermissionT, addr: number, addr_type: number): void;
	permission_set_show_word_control_data_type(permission: PermissionT, data_type: number): void;
	permission_set_show_word_control_compare_type(permission: PermissionT, compare_type: number): void;
	permission_set_show_word_control_value(permission: PermissionT, value: number): void;
	permission_set_show_word_control_eps(permission: PermissionT, eps: number): void;

	permission_set_control_word_control_addr(permission: PermissionT, addr: number, addr_type: number): void;
	permission_set_control_word_control_data_type(permission: PermissionT, data_type: number): void;
	permission_set_control_word_control_compare_type(permission: PermissionT, compare_type: number): void;
	permission_set_control_word_control_value(permission: PermissionT, value: number): void;
	permission_set_control_word_control_eps(permission: PermissionT, eps: number): void;

	permission_set_word_control_addr(permission: PermissionT, addr: number, addr_type: number, is_show: boolean): void;
	permission_set_word_control_data_type(permission: PermissionT, data_type: number, is_show: boolean): void;
	permission_set_word_control_compare_type(permission: PermissionT, compare_type: number, is_show: boolean): void;
	permission_set_word_control_value(permission: PermissionT, value: number, is_show: boolean): void;
	permission_set_word_control_eps(permission: PermissionT, eps: number, is_show: boolean): void;

	permission_set_notify_word_control_addr(permission: PermissionT, addr: number, addr_type: number): void;
	permission_set_notify_word_control_data_type(permission: PermissionT, data_type: number): void;
	permission_set_notify_word_control_value(permission: PermissionT, value: number): void;

	permission_set_press_time(permission: PermissionT, press_time: number): void;

	permission_get_show(permission: PermissionT): boolean;
	permission_get_control(permission: PermissionT): boolean;
	permission_get_notify(permission: PermissionT): boolean;
	permission_get_show_bit(permission: PermissionT): boolean;
	permission_get_control_bit(permission: PermissionT): boolean;
	permission_get_bit(permission: PermissionT, is_show: boolean): boolean;
	permission_get_notify_bit(permission: PermissionT): boolean;

	permission_get_show_user(permission: PermissionT): boolean;
	permission_get_control_user(permission: PermissionT): boolean;
	permission_get_user(permission: PermissionT, is_show: boolean): boolean;

	permission_get_show_word(permission: PermissionT): boolean;
	permission_get_control_word(permission: PermissionT): boolean;
	permission_get_word(permission: PermissionT, is_show: boolean): boolean;

	permission_get_notify_word(permission: PermissionT): boolean;

	permission_get_press(permission: PermissionT): boolean;

	permission_get_show_bit_control_addr(permission: PermissionT): number;
	permission_get_show_bit_control_addr_type(permission: PermissionT): number;
	permission_get_show_bit_control_status(permission: PermissionT): number;

	permission_get_control_bit_control_addr(permission: PermissionT): number;
	permission_get_control_bit_control_addr_type(permission: PermissionT): number;
	permission_get_control_bit_control_status(permission: PermissionT): number;

	permission_get_bit_control_addr(permission: PermissionT, is_show: boolean): number;
	permission_get_bit_control_addr_type(permission: PermissionT, is_show: boolean): number;
	permission_get_bit_control_status(permission: PermissionT, is_show: boolean): number;

	permission_get_notify_bit_control_addr(permission: PermissionT): number;
	permission_get_notify_bit_control_addr_type(permission: PermissionT): number;
	permission_get_notify_bit_control_status(permission: PermissionT): number;

	permission_get_show_user_level(permission: PermissionT): number;
	permission_get_control_user_level(permission: PermissionT): number;
	permission_get_user_level(permission: PermissionT, is_show: boolean): number;

	permission_get_show_word_control_addr(permission: PermissionT): number;
	permission_get_show_word_control_addr_type(permission: PermissionT): number;
	permission_get_show_word_control_data_type(permission: PermissionT): number;
	permission_get_show_word_control_compare_type(permission: PermissionT): number;
	permission_get_show_word_control_value(permission: PermissionT): number;
	permission_get_show_word_control_eps(permission: PermissionT): number;

	permission_get_control_word_control_addr(permission: PermissionT): number;
	permission_get_control_word_control_addr_type(permission: PermissionT): number;
	permission_get_control_word_control_data_type(permission: PermissionT): number;
	permission_get_control_word_control_compare_type(permission: PermissionT): number;
	permission_get_control_word_control_value(permission: PermissionT): number;
	permission_get_control_word_control_eps(permission: PermissionT): number;

	permission_get_word_control_addr(permission: PermissionT, is_show: boolean): number;
	permission_get_word_control_addr_type(permission: PermissionT, is_show: boolean): number;
	permission_get_word_control_data_type(permission: PermissionT, is_show: boolean): number;
	permission_get_word_control_compare_type(permission: PermissionT, is_show: boolean): number;
	permission_get_word_control_value(permission: PermissionT, is_show: boolean): number;
	permission_get_word_control_eps(permission: PermissionT, is_show: boolean): number;

	permission_get_notify_word_control_addr(permission: PermissionT): number;
	permission_get_notify_word_control_addr_type(permission: PermissionT): number;
	permission_get_notify_word_control_data_type(permission: PermissionT): number;
	permission_get_notify_word_control_value(permission: PermissionT): number;

	permission_get_press_time(permission: PermissionT): number;


	// lv button style
	lv_button_set_state(obj: LvObjT, state: number, style: LvButtonStyleT): void;
	button_watch_add(obj: LvButtonStyleT, style: LvButtonStyleT): number;
	button_watch_remove(id: number): void;
	lv_button_style_set_state_num(style: LvButtonStyleT, state_num: number): void;
	lv_button_style_set_watch(style: LvButtonStyleT, watch: boolean): void;
	lv_button_style_set_watch_double(style: LvButtonStyleT, watch_double: boolean): void;
	lv_button_style_set_watch_multi(style: LvButtonStyleT, watch_multi: boolean): void;
	lv_button_style_set_addr(style: LvButtonStyleT, addr: number, addr_type: number): void;
	lv_button_style_set_data_type(style: LvButtonStyleT, data_type: number): void;
	lv_button_style_set_text(style: LvButtonStyleT, state: number, text: string): void;
	lv_button_style_set_font(style: LvButtonStyleT, state: number, font: LvFontT): void;
	lv_button_style_set_text_align(style: LvButtonStyleT, state: number, align: number): void;
	lv_button_style_set_text_decor(style: LvButtonStyleT, state: number, decor: number): void;
	lv_button_style_set_text_color(style: LvButtonStyleT, state: number, color: LvColorT): void;
	lv_button_style_set_image(style: LvButtonStyleT, state: number, image: LvImgDscT | null): void;
	lv_button_style_set_bg_color(style: LvButtonStyleT, state: number, color: LvColorT): void;
	lv_button_style_set_bg_opa(style: LvButtonStyleT, state: number, opa: number): void;
	lv_button_style_get_state(style: LvButtonStyleT): number;
	lv_button_style_get_text(style: LvButtonStyleT, state: number): string;
	lv_button_style_get_font(style: LvButtonStyleT, state: number): LvFontT;
	lv_button_style_get_text_align(style: LvButtonStyleT, state: number): number;
	lv_button_style_get_text_decor(style: LvButtonStyleT, state: number): number;
	lv_button_style_get_text_color(style: LvButtonStyleT, state: number): LvColorT;
	lv_button_style_get_image_dsc(style: LvButtonStyleT, state: number): LvImgDscT;
	lv_button_style_get_bg_color(style: LvButtonStyleT, state: number): LvColorT;
	lv_button_style_get_bg_opa(style: LvButtonStyleT, state: number): number;
	lv_button_style_get_state_num(style: LvButtonStyleT): number;
	lv_button_style_get_watch(style: LvButtonStyleT): boolean;
	lv_button_style_get_watch_double(style: LvButtonStyleT): boolean;
	lv_button_style_get_watch_multi(style: LvButtonStyleT): boolean;
	lv_button_style_get_addr(style: LvButtonStyleT): number;
	lv_button_style_get_addr_type(style: LvButtonStyleT): number;
	lv_button_style_get_data_type(style: LvButtonStyleT): number;

	// bit button
	lv_bitbutton_create: CreateObjFun;
	lv_bitbutton_set_addr(obj: LvObjT, addr: number, addr_type: number): void;
	lv_bitbutton_set_operate_action(obj: LvObjT, action: number): void;
	lv_bitbutton_get_permission(obj: LvObjT): PermissionT;
	lv_bitbutton_get_addr(obj: LvObjT): number;
	lv_bitbutton_get_addr_type(obj: LvObjT): number;
	lv_bitbutton_get_operate_action(obj: LvObjT): number;
	lv_bitbutton_get_style(obj: LvObjT): LvButtonStyleT;

	// button
	lv_funcbutton_create: CreateObjFun;
	lv_funcbutton_set_operate_type(obj: LvObjT, type: number): void;
	lv_funcbutton_set_operate_action(obj: LvObjT, action: number): void;
	lv_funcbutton_set_press(obj: LvObjT, press: boolean): void;
	lv_funcbutton_get_permission(obj: LvObjT): PermissionT;
	lv_funcbutton_get_operate_type(obj: LvObjT): number;
	lv_funcbutton_get_operate_action(obj: LvObjT): number;
	lv_funcbutton_get_style(obj: LvObjT): LvButtonStyleT;
	lv_funcbutton_get_press(obj: LvObjT): boolean;

	// led button
	lv_ledbutton_create: CreateObjFun;
	lv_ledbutton_get_permission(obj: LvObjT): PermissionT;
	lv_ledbutton_get_style(obj: LvObjT): LvButtonStyleT;

	// word button
	lv_wordbutton_create: CreateObjFun;
	lv_wordbutton_set_addr(obj: LvObjT, addr: number, addr_type: number): void;
	lv_wordbutton_set_operate_action(obj: LvObjT, action: number): void;
	lv_wordbutton_set_data_type(obj: LvObjT, data_type: number): void;
	lv_wordbutton_set_value(obj: LvObjT, value: number): void;
	lv_wordbutton_set_min_value(obj: LvObjT, min_value: number): void;
	lv_wordbutton_set_max_value(obj: LvObjT, max_value: number): void;
	lv_wordbutton_set_total_digits(obj: LvObjT, total_digits: number): void;
	lv_wordbutton_set_decimal_digits(obj: LvObjT, decimal_digits: number): void;
	lv_wordbutton_set_press(obj: LvObjT, press: boolean): void;
	lv_wordbutton_get_permission(obj: LvObjT): PermissionT;
	lv_wordbutton_get_addr(obj: LvObjT): number;
	lv_wordbutton_get_addr_type(obj: LvObjT): number;
	lv_wordbutton_get_operate_action(obj: LvObjT): number;
	lv_wordbutton_get_style(obj: LvObjT): LvButtonStyleT;
	lv_wordbutton_get_data_type(obj: LvObjT): number;
	lv_wordbutton_get_value(obj: LvObjT): number;
	lv_wordbutton_get_min_value(obj: LvObjT): number;
	lv_wordbutton_get_max_value(obj: LvObjT): number;
	lv_wordbutton_get_total_digits(obj: LvObjT): number;
	lv_wordbutton_get_decimal_digits(obj: LvObjT): number;
	lv_wordbutton_get_press(obj: LvObjT): boolean;

	// screen button
	lv_screenbutton_create: CreateObjFun;
	lv_screenbutton_set_operate_action(obj: LvObjT, action: number): void;
	lv_screenbutton_set_press(obj: LvObjT, press: boolean): void;
	lv_screenbutton_set_login(obj: LvObjT, login: boolean): void;
	lv_screenbutton_set_change_user_level(obj: LvObjT, change: boolean): void;
	lv_screenbutton_set_user_level(obj: LvObjT, user_level: number): void;
	lv_screenbutton_set_screen(obj: LvObjT, screen: LvObjT[], init_screen: Function): void;
	lv_screenbutton_get_permission(obj: LvObjT): PermissionT;
	lv_screenbutton_get_operate_action(obj: LvObjT): number;
	lv_screenbutton_get_style(obj: LvObjT): LvButtonStyleT;
	lv_screenbutton_get_press(obj: LvObjT): boolean;
	lv_screenbutton_get_login(obj: LvObjT): boolean;
	lv_screenbutton_get_change_user_level(obj: LvObjT): boolean;
	lv_screenbutton_get_user_level(obj: LvObjT): number;

	// multi button
	lv_multibutton_create: CreateObjFun;
	lv_multibutton_set_addr(obj: LvObjT, addr: number, addr_type: number): void;
	lv_multibutton_set_data_type(obj: LvObjT, data_type: number): void;
	lv_multibutton_set_action(obj: LvObjT, action: number): void;
	lv_multibutton_get_permission(obj: LvObjT): PermissionT;
	lv_multibutton_get_style(obj: LvObjT): LvButtonStyleT;
	lv_multibutton_get_addr(obj: LvObjT): number;
	lv_multibutton_get_addr_type(obj: LvObjT): number;
	lv_multibutton_get_data_type(obj: LvObjT): number;
	lv_multibutton_get_action(obj: LvObjT): number;

	// line scale
	lv_linescale_create: CreateObjFun;
	lv_linescale_set_font_size(obj: LvObjT, font_size: number): void;
	lv_linescale_set_text_direction(obj: LvObjT, direction: number): void;
	lv_linescale_set_position(obj: LvObjT, position: number): void;
	lv_linescale_set_min_value(obj: LvObjT, min_value: number): void;
	lv_linescale_set_max_value(obj: LvObjT, max_value: number): void;
	lv_linescale_set_decimal_pos(obj: LvObjT, decimal_pos: number): void;
	lv_linescale_set_text_color(obj: LvObjT, color: LvColorT): void;
	lv_linescale_set_line_color(obj: LvObjT, color: LvColorT): void;
	lv_linescale_set_show_text(obj: LvObjT, show: boolean): void;
	lv_linescale_set_major_tick_count(obj: LvObjT, cnt: number): void;
	lv_linescale_set_minor_tick_count(obj: LvObjT, cnt: number): void;
	lv_linescale_get_font_size(obj: LvObjT): number;
	lv_linescale_get_text_direction(obj: LvObjT): number;
	lv_linescale_get_position(obj: LvObjT): number;
	lv_linescale_get_min_value(obj: LvObjT): number;
	lv_linescale_get_max_value(obj: LvObjT): number;
	lv_linescale_get_decimal_pos(obj: LvObjT): number;
	lv_linescale_get_text_color(obj: LvObjT): LvColorT;
	lv_linescale_get_line_color(obj: LvObjT): LvColorT;
	lv_linescale_get_show_text(obj: LvObjT): boolean;
	lv_linescale_get_major_tick_count(obj: LvObjT): number;
	lv_linescale_get_minor_tick_count(obj: LvObjT): number;

	// QRCode
	lv_qrdisplay_create: CreateObjFun;
	lv_qrdisplay_set_addr(obj: LvObjT, addr: number, addr_type: number): void;
	lv_qrdisplay_set_type(obj: LvObjT, type: number): void;
	lv_qrdisplay_set_length(obj: LvObjT, length: number): void;
	lv_qrdisplay_set_url(obj: LvObjT, url: string): void;
	lv_qrdisplay_set_is_byte_swapped(obj: LvObjT, is_byte_swapped: boolean): void;
	lv_qrdisplay_get_permission(obj: LvObjT): PermissionT;
	lv_qrdisplay_get_addr(obj: LvObjT): number;
	lv_qrdisplay_get_addr_type(obj: LvObjT): number;
	lv_qrdisplay_get_type(obj: LvObjT): number;
	lv_qrdisplay_get_length(obj: LvObjT): number;
	lv_qrdisplay_get_url(obj: LvObjT): string;
	lv_qrdisplay_get_is_byte_swapped(obj: LvObjT): boolean;

	// flow block
	lv_flowblock_create: CreateObjFun;
	lv_flowblock_set_color(obj: LvObjT, color_start: LvColorT, color_end: LvColorT): void;
	lv_flowblock_set_width(obj: LvObjT, width: number): void;
	lv_flowblock_set_height(obj: LvObjT, height: number): void;
	lv_flowblock_set_radius(obj: LvObjT, radius: number): void;
	lv_flowblock_set_shape_type(obj: LvObjT, shape_type: number): void;
	lv_flowblock_set_flow_speed(obj: LvObjT, flow_speed: number): void;
	lv_flowblock_set_flow_rate(obj: LvObjT, flow_rate: number): void;
	lv_flowblock_set_flow_offset(obj: LvObjT, flow_offset: number): void;
	lv_flowblock_set_flow_color(obj: LvObjT, flow_color: LvColorT): void;
	lv_flowblock_add_inlet(obj: LvObjT, inlet: number): void;
	lv_flowblock_reset_inlet(obj: LvObjT): void;
	lv_flowblock_set_addr(obj: LvObjT, addr: number, addr_type: number): void;
	lv_flowblock_get_addr(obj: LvObjT): number;
	lv_flowblock_get_addr_type(obj: LvObjT): number;
	lv_flowblock_get_permission(obj: LvObjT): PermissionT;

	// move trail
	lv_movetrack_create: CreateObjFun;
	lv_movetrack_set_src(obj: LvObjT, src: LvImgDscT | null): void;
	lv_movetrack_set_dir(obj: LvObjT, dir: number): void;
	lv_movetrack_set_addr(obj: LvObjT, addr: number, addr_type: number): void;
	lv_movetrack_set_min_value(obj: LvObjT, min_value: number): void;
	lv_movetrack_set_max_value(obj: LvObjT, max_value: number): void;
	lv_movetrack_set_min_addr(obj: LvObjT, min_addr: number, min_addr_type: number): void;
	lv_movetrack_set_max_addr(obj: LvObjT, max_addr: number, max_addr_type: number): void;
	lv_movetrack_set_fixed_range(obj: LvObjT, fixed_range: boolean): void;
	lv_movetrack_get_permission(obj: LvObjT): PermissionT;
	lv_movetrack_get_src(obj: LvObjT): string;
	lv_movetrack_get_dir(obj: LvObjT): number;
	lv_movetrack_get_addr(obj: LvObjT): number;
	lv_movetrack_get_addr_type(obj: LvObjT): number;
	lv_movetrack_get_min_value(obj: LvObjT): number;
	lv_movetrack_get_max_value(obj: LvObjT): number;
	lv_movetrack_get_min_addr(obj: LvObjT): number;
	lv_movetrack_get_max_addr(obj: LvObjT): number;
	lv_movetrack_get_min_addr_type(obj: LvObjT): number;
	lv_movetrack_get_max_addr_type(obj: LvObjT): number;
	lv_movetrack_get_fixed_range(obj: LvObjT): boolean;

	// slider switch
	lv_sliderswitch_create: CreateObjFun;
	lv_sliderswitch_set_dir(obj: LvObjT, dir: number): void;
	lv_sliderswitch_set_addr(obj: LvObjT, addr: number, addr_type: number): void;
	lv_sliderswitch_set_data_type(obj: LvObjT, data_type: number): void;
	lv_sliderswitch_set_min_value(obj: LvObjT, min_value: number): void;
	lv_sliderswitch_set_max_value(obj: LvObjT, max_value: number): void;
	lv_sliderswitch_set_min_addr(obj: LvObjT, min_addr: number, min_addr_type: number): void;
	lv_sliderswitch_set_max_addr(obj: LvObjT, max_addr: number, max_addr_type: number): void;
	lv_sliderswitch_set_fixed_range(obj: LvObjT, fixed_range: boolean): void;
	lv_sliderswitch_set_bg_color(obj: LvObjT, color: LvColorT): void;
	lv_sliderswitch_set_bg_border_color(obj: LvObjT, color: LvColorT): void;
	lv_sliderswitch_set_bg_border_opa(obj: LvObjT, opa: number): void;
	lv_sliderswitch_set_indicator_color(obj: LvObjT, color: LvColorT): void;
	lv_sliderswitch_set_knob_color(obj: LvObjT, color: LvColorT): void;
	lv_sliderswitch_set_bg_opa(obj: LvObjT, opa: number): void;
	lv_sliderswitch_set_indicator_opa(obj: LvObjT, opa: number): void;
	lv_sliderswitch_set_knob_opa(obj: LvObjT, opa: number): void;
	lv_sliderswitch_set_indicator_border_color(obj: LvObjT, color: LvColorT): void;
	lv_sliderswitch_set_indicator_border_opa(obj: LvObjT, opa: number): void;
	lv_sliderswitch_set_knob_border_color(obj: LvObjT, color: LvColorT): void;
	lv_sliderswitch_set_knob_border_opa(obj: LvObjT, opa: number): void;
	lv_sliderswitch_get_permission(obj: LvObjT): PermissionT;
	lv_sliderswitch_get_dir(obj: LvObjT): number;
	lv_sliderswitch_get_addr(obj: LvObjT): number;
	lv_sliderswitch_get_addr_type(obj: LvObjT): number;
	lv_sliderswitch_get_min_value(obj: LvObjT): number;
	lv_sliderswitch_get_max_value(obj: LvObjT): number;
	lv_sliderswitch_get_min_addr(obj: LvObjT): number;
	lv_sliderswitch_get_max_addr(obj: LvObjT): number;
	lv_sliderswitch_get_min_addr_type(obj: LvObjT): number;
	lv_sliderswitch_get_max_addr_type(obj: LvObjT): number;
	lv_sliderswitch_get_fixed_range(obj: LvObjT): boolean;
	lv_sliderswitch_get_bg_color(obj: LvObjT): LvColorT;
	lv_sliderswitch_get_bg_opa(obj: LvObjT): number;
	lv_sliderswitch_get_indicator_color(obj: LvObjT): LvColorT;
	lv_sliderswitch_get_indicator_opa(obj: LvObjT): number;
	lv_sliderswitch_get_knob_color(obj: LvObjT): LvColorT;
	lv_sliderswitch_get_knob_opa(obj: LvObjT): number;
	lv_sliderswitch_get_bg_border_color(obj: LvObjT): LvColorT;
	lv_sliderswitch_get_bg_border_opa(obj: LvObjT): number;
	lv_sliderswitch_get_indicator_border_color(obj: LvObjT): LvColorT;
	lv_sliderswitch_get_indicator_border_opa(obj: LvObjT): number;
	lv_sliderswitch_get_knob_border_color(obj: LvObjT): LvColorT;
	lv_sliderswitch_get_knob_border_opa(obj: LvObjT): number;

	// xycurve
	lv_xycurve_create: CreateObjFun;
	lv_xycurve_set_series_count(obj: LvObjT, count: number): void;
	lv_xycurve_set_data_type(obj: LvObjT, type: number): void;
	lv_xycurve_set_trigger_addr(obj: LvObjT, addr: number, addr_type: number): void;
	lv_xycurve_set_read_addr(obj: LvObjT, addr: number, addr_type: number): void;
	lv_xycurve_set_clear_addr(obj: LvObjT, addr: number, addr_type: number): void;
	lv_xycurve_set_sampling_period_s(obj: LvObjT, period_s: number): void;
	lv_xycurve_set_sampling_count(obj: LvObjT, count: number): void;
	lv_xycurve_set_series_color(obj: LvObjT, index: number, color: LvColorT): void;
	lv_xycurve_set_series_min(obj: LvObjT, index: number, min: number): void;
	lv_xycurve_set_series_max(obj: LvObjT, index: number, max: number): void;
	lv_xycurve_set_bg_color(obj: LvObjT, color: LvColorT): void;
	lv_xycurve_set_border_color(obj: LvObjT, color: LvColorT): void;
	lv_xycurve_set_base_color(obj: LvObjT, color: LvColorT): void;
	lv_xycurve_set_show_x_scale(obj: LvObjT, show: boolean): void;
	lv_xycurve_set_show_y_scale(obj: LvObjT, show: boolean): void;
	lv_xycurve_set_show_x_curve(obj: LvObjT, show: boolean): void;
	lv_xycurve_set_show_y_curve(obj: LvObjT, show: boolean): void;
	lv_xycurve_set_show_x_label(obj: LvObjT, show: boolean): void;
	lv_xycurve_set_show_y_label(obj: LvObjT, show: boolean): void;
	lv_xycurve_set_x_major_tick(obj: LvObjT, tick: number): void;
	lv_xycurve_set_y_major_tick(obj: LvObjT, tick: number): void;
	lv_xycurve_set_x_minor_tick(obj: LvObjT, tick: number): void;
	lv_xycurve_set_y_minor_tick(obj: LvObjT, tick: number): void;
	lv_xycurve_set_x_scale_color(obj: LvObjT, color: LvColorT): void;
	lv_xycurve_set_y_scale_color(obj: LvObjT, color: LvColorT): void;
	lv_xycurve_set_x_gridline_color(obj: LvObjT, color: LvColorT): void;
	lv_xycurve_set_y_gridline_color(obj: LvObjT, color: LvColorT): void;
	lv_xycurve_set_x_min(obj: LvObjT, min: number): void;
	lv_xycurve_set_x_max(obj: LvObjT, max: number): void;
	lv_xycurve_set_x_total_digits(obj: LvObjT, digits: number): void;
	lv_xycurve_set_x_decimal_digits(obj: LvObjT, digits: number): void;
	lv_xycurve_set_y_min(obj: LvObjT, min: number): void;
	lv_xycurve_set_y_max(obj: LvObjT, max: number): void;
	lv_xycurve_set_y_total_digits(obj: LvObjT, digits: number): void;
	lv_xycurve_set_y_decimal_digits(obj: LvObjT, digits: number): void;
	lv_xycurve_get_permission(obj: LvObjT): PermissionT;
	lv_xycurve_get_seriers_count(obj: LvObjT): number;
	lv_xycurve_get_data_type(obj: LvObjT): number;
	lv_xycurve_get_trigger_addr(obj: LvObjT): number;
	lv_xycurve_get_trigger_addr_type(obj: LvObjT): number;
	lv_xycurve_get_read_addr(obj: LvObjT): number;
	lv_xycurve_get_read_addr_type(obj: LvObjT): number;
	lv_xycurve_get_clear_addr(obj: LvObjT): number;
	lv_xycurve_get_clear_addr_type(obj: LvObjT): number;
	lv_xycurve_get_sampling_count(obj: LvObjT): number;
	lv_xycurve_get_sampling_period_s(obj: LvObjT): number;
	lv_xycurve_get_series_color(obj: LvObjT, index: number): LvColorT;
	lv_xycurve_get_series_min(obj: LvObjT, index: number): number;
	lv_xycurve_get_series_max(obj: LvObjT, index: number): number;
	lv_xycurve_get_bg_color(obj: LvObjT): LvColorT;
	lv_xycurve_get_border_color(obj: LvObjT): LvColorT;
	lv_xycurve_get_base_color(obj: LvObjT): LvColorT;
	lv_xycurve_get_show_x_scale(obj: LvObjT): boolean;
	lv_xycurve_get_show_y_scale(obj: LvObjT): boolean;
	lv_xycurve_get_show_x_curve(obj: LvObjT): boolean;
	lv_xycurve_get_show_y_curve(obj: LvObjT): boolean;
	lv_xycurve_get_show_x_label(obj: LvObjT): boolean;
	lv_xycurve_get_show_y_label(obj: LvObjT): boolean;
	lv_xycurve_get_x_major_tick(obj: LvObjT): number;
	lv_xycurve_get_y_major_tick(obj: LvObjT): number;
	lv_xycurve_get_x_minor_tick(obj: LvObjT): number;
	lv_xycurve_get_y_minor_tick(obj: LvObjT): number;
	lv_xycurve_get_x_scale_color(obj: LvObjT): LvColorT;
	lv_xycurve_get_y_scale_color(obj: LvObjT): LvColorT;
	lv_xycurve_get_x_gridline_color(obj: LvObjT): LvColorT;
	lv_xycurve_get_y_gridline_color(obj: LvObjT): LvColorT;
	lv_xycurve_get_x_min(obj: LvObjT): number;
	lv_xycurve_get_x_max(obj: LvObjT): number;
	lv_xycurve_get_x_total_digits(obj: LvObjT): number;
	lv_xycurve_get_x_decimal_digits(obj: LvObjT): number;
	lv_xycurve_get_y_min(obj: LvObjT): number;
	lv_xycurve_get_y_max(obj: LvObjT): number;
	lv_xycurve_get_y_total_digits(obj: LvObjT): number;
	lv_xycurve_get_y_decimal_digits(obj: LvObjT): number;

	// trend chart
	lv_trendchart_create: CreateObjFun;
	lv_trendchart_set_series_count(obj: LvObjT, count: number): void;
	lv_trendchart_set_data_type(obj: LvObjT, type: number): void;
	lv_trendchart_set_trigger_addr(obj: LvObjT, addr: number, addr_type: number): void;
	lv_trendchart_set_read_addr(obj: LvObjT, addr: number, addr_type: number): void;
	lv_trendchart_set_clear_addr(obj: LvObjT, addr: number, addr_type: number): void;
	lv_trendchart_set_sampling_period_s(obj: LvObjT, period_s: number): void;
	lv_trendchart_set_sampling_count(obj: LvObjT, count: number): void;
	lv_trendchart_set_series_color(obj: LvObjT, index: number, color: LvColorT): void;
	lv_trendchart_set_series_min(obj: LvObjT, index: number, min: number): void;
	lv_trendchart_set_series_max(obj: LvObjT, index: number, max: number): void;
	lv_trendchart_set_bg_color(obj: LvObjT, color: LvColorT): void;
	lv_trendchart_set_border_color(obj: LvObjT, color: LvColorT): void;
	lv_trendchart_set_base_color(obj: LvObjT, color: LvColorT): void;
	lv_trendchart_set_show_x_scale(obj: LvObjT, show: boolean): void;
	lv_trendchart_set_show_y_scale(obj: LvObjT, show: boolean): void;
	lv_trendchart_set_show_x_curve(obj: LvObjT, show: boolean): void;
	lv_trendchart_set_show_y_curve(obj: LvObjT, show: boolean): void;
	lv_trendchart_set_show_x_label(obj: LvObjT, show: boolean): void;
	lv_trendchart_set_show_y_label(obj: LvObjT, show: boolean): void;
	lv_trendchart_set_x_major_tick(obj: LvObjT, tick: number): void;
	lv_trendchart_set_y_major_tick(obj: LvObjT, tick: number): void;
	lv_trendchart_set_x_minor_tick(obj: LvObjT, tick: number): void;
	lv_trendchart_set_y_minor_tick(obj: LvObjT, tick: number): void;
	lv_trendchart_set_x_scale_color(obj: LvObjT, color: LvColorT): void;
	lv_trendchart_set_y_scale_color(obj: LvObjT, color: LvColorT): void;
	lv_trendchart_set_x_gridline_color(obj: LvObjT, color: LvColorT): void;
	lv_trendchart_set_y_gridline_color(obj: LvObjT, color: LvColorT): void;
	lv_trendchart_set_x_min(obj: LvObjT, min: number): void;
	lv_trendchart_set_x_max(obj: LvObjT, max: number): void;
	lv_trendchart_set_x_total_digits(obj: LvObjT, digits: number): void;
	lv_trendchart_set_x_decimal_digits(obj: LvObjT, digits: number): void;
	lv_trendchart_set_y_min(obj: LvObjT, min: number): void;
	lv_trendchart_set_y_max(obj: LvObjT, max: number): void;
	lv_trendchart_set_y_total_digits(obj: LvObjT, digits: number): void;
	lv_trendchart_set_y_decimal_digits(obj: LvObjT, digits: number): void;
	lv_trendchart_set_direction(obj: LvObjT, direction: number): void;
	lv_trendchart_get_permission(obj: LvObjT): PermissionT;
	lv_trendchart_get_seriers_count(obj: LvObjT): number;
	lv_trendchart_get_data_type(obj: LvObjT): number;
	lv_trendchart_get_trigger_addr(obj: LvObjT): number;
	lv_trendchart_get_trigger_addr_type(obj: LvObjT): number;
	lv_trendchart_get_read_addr(obj: LvObjT): number;
	lv_trendchart_get_read_addr_type(obj: LvObjT): number;
	lv_trendchart_get_clear_addr(obj: LvObjT): number;
	lv_trendchart_get_clear_addr_type(obj: LvObjT): number;
	lv_trendchart_get_sampling_count(obj: LvObjT): number;
	lv_trendchart_get_sampling_period_s(obj: LvObjT): number;
	lv_trendchart_get_series_color(obj: LvObjT, index: number): LvColorT;
	lv_trendchart_get_series_min(obj: LvObjT, index: number): number;
	lv_trendchart_get_series_max(obj: LvObjT, index: number): number;
	lv_trendchart_get_bg_color(obj: LvObjT): LvColorT;
	lv_trendchart_get_border_color(obj: LvObjT): LvColorT;
	lv_trendchart_get_base_color(obj: LvObjT): LvColorT;
	lv_trendchart_get_show_x_scale(obj: LvObjT): boolean;
	lv_trendchart_get_show_y_scale(obj: LvObjT): boolean;
	lv_trendchart_get_show_x_curve(obj: LvObjT): boolean;
	lv_trendchart_get_show_y_curve(obj: LvObjT): boolean;
	lv_trendchart_get_show_x_label(obj: LvObjT): boolean;
	lv_trendchart_get_show_y_label(obj: LvObjT): boolean;
	lv_trendchart_get_x_major_tick(obj: LvObjT): number;
	lv_trendchart_get_y_major_tick(obj: LvObjT): number;
	lv_trendchart_get_x_minor_tick(obj: LvObjT): number;
	lv_trendchart_get_y_minor_tick(obj: LvObjT): number;
	lv_trendchart_get_x_scale_color(obj: LvObjT): LvColorT;
	lv_trendchart_get_y_scale_color(obj: LvObjT): LvColorT;
	lv_trendchart_get_x_gridline_color(obj: LvObjT): LvColorT;
	lv_trendchart_get_y_gridline_color(obj: LvObjT): LvColorT;
	lv_trendchart_get_x_min(obj: LvObjT): number;
	lv_trendchart_get_x_max(obj: LvObjT): number;
	lv_trendchart_get_x_total_digits(obj: LvObjT): number;
	lv_trendchart_get_x_decimal_digits(obj: LvObjT): number;
	lv_trendchart_get_y_min(obj: LvObjT): number;
	lv_trendchart_get_y_max(obj: LvObjT): number;
	lv_trendchart_get_y_total_digits(obj: LvObjT): number;
	lv_trendchart_get_y_decimal_digits(obj: LvObjT): number;
	lv_trendchart_get_direction(obj: LvObjT): number;

	// data group
	lv_datagroup_create(parent: LvObjT): LvObjT;
	lv_datagroup_set_data_type(obj: LvObjT, type: number): void;
	lv_datagroup_set_trigger_addr(obj: LvObjT, addr: number, addr_type: number): void;
	lv_datagroup_set_read_addr(obj: LvObjT, addr: number, addr_type: number): void;
	lv_datagroup_set_sampling_addr(obj: LvObjT, addr: number, addr_type: number): void;
	lv_datagroup_set_sampling_count(obj: LvObjT, count: number): void;
	lv_datagroup_set_series_color(obj: LvObjT, color: LvColorT): void;
	lv_datagroup_set_series_min(obj: LvObjT, min: number): void;
	lv_datagroup_set_series_max(obj: LvObjT, max: number): void;
	lv_datagroup_set_bg_color(obj: LvObjT, color: LvColorT): void;
	lv_datagroup_set_border_color(obj: LvObjT, color: LvColorT): void;
	lv_datagroup_set_base_color(obj: LvObjT, color: LvColorT): void;
	lv_datagroup_set_show_x_scale(obj: LvObjT, show: boolean): void;
	lv_datagroup_set_show_y_scale(obj: LvObjT, show: boolean): void;
	lv_datagroup_set_show_x_curve(obj: LvObjT, show: boolean): void;
	lv_datagroup_set_show_y_curve(obj: LvObjT, show: boolean): void;
	lv_datagroup_set_show_x_label(obj: LvObjT, show: boolean): void;
	lv_datagroup_set_show_y_label(obj: LvObjT, show: boolean): void;
	lv_datagroup_set_x_major_tick(obj: LvObjT, tick: number): void;
	lv_datagroup_set_y_major_tick(obj: LvObjT, tick: number): void;
	lv_datagroup_set_x_minor_tick(obj: LvObjT, tick: number): void;
	lv_datagroup_set_y_minor_tick(obj: LvObjT, tick: number): void;
	lv_datagroup_set_x_scale_color(obj: LvObjT, color: LvColorT): void;
	lv_datagroup_set_y_scale_color(obj: LvObjT, color: LvColorT): void;
	lv_datagroup_set_x_gridline_color(obj: LvObjT, color: LvColorT): void;
	lv_datagroup_set_y_gridline_color(obj: LvObjT, color: LvColorT): void;
	lv_datagroup_set_x_min(obj: LvObjT, min: number): void;
	lv_datagroup_set_x_max(obj: LvObjT, max: number): void;
	lv_datagroup_set_x_total_digits(obj: LvObjT, digits: number): void;
	lv_datagroup_set_x_decimal_digits(obj: LvObjT, digits: number): void;
	lv_datagroup_set_y_min(obj: LvObjT, min: number): void;
	lv_datagroup_set_y_max(obj: LvObjT, max: number): void;
	lv_datagroup_set_y_total_digits(obj: LvObjT, digits: number): void;
	lv_datagroup_set_y_decimal_digits(obj: LvObjT, digits: number): void;
	lv_datagroup_set_sampling_mode(obj: LvObjT, mode: number): void;
	lv_datagroup_set_range_type(obj: LvObjT, type: number): void;
	lv_datagroup_set_y_min_addr(obj: LvObjT, addr: number, addr_type: number): void;
	lv_datagroup_set_y_max_addr(obj: LvObjT, addr: number, addr_type: number): void;
	lv_datagroup_get_permission(obj: LvObjT): PermissionT;
	lv_datagroup_get_data_type(obj: LvObjT): number;
	lv_datagroup_get_trigger_addr(obj: LvObjT): number;
	lv_datagroup_get_trigger_addr_type(obj: LvObjT): number;
	lv_datagroup_get_read_addr(obj: LvObjT): number;
	lv_datagroup_get_read_addr_type(obj: LvObjT): number;
	lv_datagroup_get_sampling_addr(obj: LvObjT): number;
	lv_datagroup_get_sampling_addr_type(obj: LvObjT): number;
	lv_datagroup_get_sampling_count(obj: LvObjT): number;
	lv_datagroup_get_series_color(obj: LvObjT): LvColorT;
	lv_datagroup_get_series_min(obj: LvObjT): number;
	lv_datagroup_get_series_max(obj: LvObjT): number;
	lv_datagroup_get_bg_color(obj: LvObjT): LvColorT;
	lv_datagroup_get_border_color(obj: LvObjT): LvColorT;
	lv_datagroup_get_base_color(obj: LvObjT): LvColorT;
	lv_datagroup_get_show_x_scale(obj: LvObjT): boolean;
	lv_datagroup_get_show_y_scale(obj: LvObjT): boolean;
	lv_datagroup_get_show_x_curve(obj: LvObjT): boolean;
	lv_datagroup_get_show_y_curve(obj: LvObjT): boolean;
	lv_datagroup_get_show_x_label(obj: LvObjT): boolean;
	lv_datagroup_get_show_y_label(obj: LvObjT): boolean;
	lv_datagroup_get_x_major_tick(obj: LvObjT): number;
	lv_datagroup_get_y_major_tick(obj: LvObjT): number;
	lv_datagroup_get_x_minor_tick(obj: LvObjT): number;
	lv_datagroup_get_y_minor_tick(obj: LvObjT): number;
	lv_datagroup_get_x_scale_color(obj: LvObjT): LvColorT;
	lv_datagroup_get_y_scale_color(obj: LvObjT): LvColorT;
	lv_datagroup_get_x_gridline_color(obj: LvObjT): LvColorT;
	lv_datagroup_get_y_gridline_color(obj: LvObjT): LvColorT;
	lv_datagroup_get_x_min(obj: LvObjT): number;
	lv_datagroup_get_x_max(obj: LvObjT): number;
	lv_datagroup_get_x_total_digits(obj: LvObjT): number;
	lv_datagroup_get_x_decimal_digits(obj: LvObjT): number;
	lv_datagroup_get_y_min(obj: LvObjT): number;
	lv_datagroup_get_y_max(obj: LvObjT): number;
	lv_datagroup_get_y_total_digits(obj: LvObjT): number;
	lv_datagroup_get_y_decimal_digits(obj: LvObjT): number;
	lv_datagroup_get_sampling_mode(obj: LvObjT): number;
	lv_datagroup_get_range_type(obj: LvObjT): number;
	lv_datagroup_get_y_min_addr(obj: LvObjT): number;
	lv_datagroup_get_y_min_addr_type(obj: LvObjT): number;
	lv_datagroup_get_y_max_addr(obj: LvObjT): number;
	lv_datagroup_get_y_max_addr_type(obj: LvObjT): number;

	// ring
	lv_ring_create: CreateObjFun;
	lv_ring_set_addr(obj: LvObjT, addr: number, addr_type: number): void;
	lv_ring_set_data_type(obj: LvObjT, data_type: number): void;
	lv_ring_set_min_value(obj: LvObjT, min_value: number): void;
	lv_ring_set_max_value(obj: LvObjT, max_value: number): void;
	lv_ring_set_opa(obj: LvObjT, opa: number): void;
	lv_ring_set_start_angle(obj: LvObjT, start_angle: number): void;
	lv_ring_set_angle_span(obj: LvObjT, angle_span: number): void;
	lv_ring_set_line_width(obj: LvObjT, line_width: number): void;
	lv_ring_set_fill_line_width(obj: LvObjT, fill_line_width: number): void;
	lv_ring_set_fill_color(obj: LvObjT, fill_color: LvColorT): void;
	lv_ring_set_type(obj: LvObjT, type: number): void;

	lv_ring_get_permission(obj: LvObjT): PermissionT;
	lv_ring_get_addr(obj: LvObjT): number;
	lv_ring_get_addr_type(obj: LvObjT): number;
	lv_ring_get_data_type(obj: LvObjT): number;
	lv_ring_get_min_value(obj: LvObjT): number;
	lv_ring_get_max_value(obj: LvObjT): number;
	lv_ring_get_opa(obj: LvObjT): number;
	lv_ring_get_start_angle(obj: LvObjT): number;
	lv_ring_get_angle_span(obj: LvObjT): number;
	lv_ring_get_line_width(obj: LvObjT): number;
	lv_ring_get_fill_line_width(obj: LvObjT): number;
	lv_ring_get_fill_color(obj: LvObjT): LvColorT;
	lv_ring_get_type(obj: LvObjT): number;

	// option list
	lv_optionlist_create: CreateObjFun;
	lv_optionlist_set_addr(obj: LvObjT, addr: number, addr_type: number): void;
	lv_optionlist_set_options(obj: LvObjT, options: string): void;
	lv_optionlist_set_font(obj: LvObjT, font: LvFontT): void;
	lv_optionlist_set_text_align(obj: LvObjT, align: number): void;
	lv_optionlist_set_text_color(obj: LvObjT, color: LvColorT): void;
	lv_optionlist_set_bg_color(obj: LvObjT, color: LvColorT): void;
	lv_optionlist_set_dir(obj: LvObjT, dir: number): void;
	lv_optionlist_set_data_type(obj: LvObjT, data_type: number): void;

	lv_optionlist_get_permission(obj: LvObjT): PermissionT;
	lv_optionlist_get_options(obj: LvObjT): string;
	lv_optionlist_get_font(obj: LvObjT): number;
	lv_optionlist_get_text_align(obj: LvObjT): number;
	lv_optionlist_get_text_color(obj: LvObjT): LvColorT;
	lv_optionlist_get_bg_color(obj: LvObjT): LvColorT;
	lv_optionlist_get_dir(obj: LvObjT): number;
	lv_optionlist_get_addr(obj: LvObjT): number;
	lv_optionlist_get_addr_type(obj: LvObjT): number;
	lv_optionlist_get_data_type(obj: LvObjT): number;

	// rollor monitor
	lv_rollermonitor_create: CreateObjFun;
	lv_rollermonitor_set_addr(obj: LvObjT, addr: number, addr_type: number): void;
	lv_rollermonitor_set_mode(obj: LvObjT, mode: number): void;
	lv_rollermonitor_set_min_value(obj: LvObjT, min_value: number): void;
	lv_rollermonitor_set_max_value(obj: LvObjT, max_value: number): void;
	lv_rollermonitor_set_step(obj: LvObjT, step: number): void;
	lv_rollermonitor_set_visible_row_count(obj: LvObjT, visible_row_count: number): void;
	lv_rollermonitor_set_bg_color(obj: LvObjT, color: LvColorT): void;
	lv_rollermonitor_set_bg_opa(obj: LvObjT, opa: number): void;
	lv_rollermonitor_set_low_color(obj: LvObjT, color: LvColorT): void;
	lv_rollermonitor_set_high_color(obj: LvObjT, color: LvColorT): void;
	lv_rollermonitor_set_image(obj: LvObjT, image: LvImgDscT | null): void;
	lv_rollermonitor_get_permission(obj: LvObjT): PermissionT;
	lv_rollermonitor_get_addr(obj: LvObjT): number;
	lv_rollermonitor_get_addr_type(obj: LvObjT): number;
	lv_rollermonitor_get_mode(obj: LvObjT): number;
	lv_rollermonitor_get_min_value(obj: LvObjT): number;
	lv_rollermonitor_get_max_value(obj: LvObjT): number;
	lv_rollermonitor_get_step(obj: LvObjT): number;
	lv_rollermonitor_get_visible_row_count(obj: LvObjT): number;
	lv_rollermonitor_get_bg_color(obj: LvObjT): LvColorT;
	lv_rollermonitor_get_bg_opa(obj: LvObjT): number;
	lv_rollermonitor_get_low_color(obj: LvObjT): LvColorT;
	lv_rollermonitor_get_high_color(obj: LvObjT): LvColorT;
	lv_rollermonitor_get_image(obj: LvObjT): number;

	lv_textmonitor_create: CreateObjFun;
	lv_textmonitor_set_text(obj: LvObjT, text: string): void;
	lv_textmonitor_set_font(obj: LvObjT, font: LvFontT): void;
	lv_textmonitor_set_text_align(obj: LvObjT, align: number): void;
	lv_textmonitor_set_bg_color(obj: LvObjT, color: LvColorT): void;
	lv_textmonitor_set_text_color(obj: LvObjT, color: LvColorT): void;
	lv_textmonitor_set_grad_color(obj: LvObjT, color: LvColorT): void;
	lv_textmonitor_set_opa(obj: LvObjT, opa: number): void;
	lv_textmonitor_set_style(obj: LvObjT, style: number): void;
	lv_textmonitor_set_decor(obj: LvObjT, decor: number): void;
	lv_textmonitor_set_letter_space(obj: LvObjT, letter_space: number): void;
	lv_textmonitor_get_permission(obj: LvObjT): PermissionT;
	lv_textmonitor_get_text(obj: LvObjT): number;
	lv_textmonitor_get_font(obj: LvObjT): number;
	lv_textmonitor_get_text_align(obj: LvObjT): number;
	lv_textmonitor_get_bg_color(obj: LvObjT): LvColorT;
	lv_textmonitor_get_text_color(obj: LvObjT): LvColorT;
	lv_textmonitor_get_grad_color(obj: LvObjT): LvColorT;
	lv_textmonitor_get_opa(obj: LvObjT): number;
	lv_textmonitor_get_style(obj: LvObjT): number;
	lv_textmonitor_get_decor(obj: LvObjT): number;
	lv_textmonitor_get_letter_space(obj: LvObjT): number;

	// time monitor
	lv_timemonitor_create: CreateObjFun;
	lv_timemonitor_set_date(obj: LvObjT, date: boolean): void;
	lv_timemonitor_set_time(obj: LvObjT, time: boolean): void;
	lv_timemonitor_set_week(obj: LvObjT, week: boolean): void;
	lv_timemonitor_set_font(obj: LvObjT, font: number): void;
	lv_timemonitor_set_align(obj: LvObjT, align: number): void;
	lv_timemonitor_set_text_color(obj: LvObjT, color: LvColorT): void;
	lv_timemonitor_set_bg_color(obj: LvObjT, color: LvColorT): void;
	lv_timemonitor_set_opa(obj: LvObjT, opa: number): void;
	lv_timemonitor_set_bg_image(obj: LvObjT, image: LvImgDscT | null): void;
	lv_timemonitor_set_date_style(obj: LvObjT, style: number): void;
	lv_timemonitor_set_time_style(obj: LvObjT, style: number): void;
	lv_timemonitor_get_permission(obj: LvObjT): PermissionT;
	lv_timemonitor_get_date(obj: LvObjT): boolean;
	lv_timemonitor_get_time(obj: LvObjT): boolean;
	lv_timemonitor_get_week(obj: LvObjT): boolean;
	lv_timemonitor_get_font(obj: LvObjT): number;
	lv_timemonitor_get_align(obj: LvObjT): number;
	lv_timemonitor_get_text_color(obj: LvObjT): LvColorT;
	lv_timemonitor_get_bg_color(obj: LvObjT): LvColorT;
	lv_timemonitor_get_opa(obj: LvObjT): number;
	lv_timemonitor_get_bg_image(obj: LvObjT): number;
	lv_timemonitor_get_date_style(obj: LvObjT): number;
	lv_timemonitor_get_time_style(obj: LvObjT): number;

	lv_asciimonitor_create: CreateObjFun;
	lv_asciimonitor_set_addr(obj: LvObjT, addr: number, addr_type: number): void;
	lv_asciimonitor_set_offset(obj: LvObjT, offset: boolean): void;
	lv_asciimonitor_set_offset_addr(obj: LvObjT, offset_addr: number, offset_addr_type: number): void;
	lv_asciimonitor_set_input(obj: LvObjT, input: boolean): void;
	lv_asciimonitor_set_input_addr(obj: LvObjT, input_addr: number, input_addr_type: number): void;
	lv_asciimonitor_set_passwd(obj: LvObjT, passwd: boolean): void;
	lv_asciimonitor_set_show_input(obj: LvObjT, show_input: boolean): void;
	lv_asciimonitor_set_show_watch(obj: LvObjT, show_watch: boolean): void;
	lv_asciimonitor_set_byte_swap(obj: LvObjT, byte_swap: boolean): void;
	lv_asciimonitor_set_type(obj: LvObjT, type: number): void;
	lv_asciimonitor_set_font(obj: LvObjT, font: number): void;
	lv_asciimonitor_set_align(obj: LvObjT, align: number): void;
	lv_asciimonitor_set_text_color(obj: LvObjT, color: LvColorT): void;
	lv_asciimonitor_set_bg_color(obj: LvObjT, color: LvColorT): void;
	lv_asciimonitor_set_opa(obj: LvObjT, opa: number): void;
	lv_asciimonitor_set_bg_image(obj: LvObjT, image: LvImgDscT | null): void;
	lv_asciimonitor_set_length(obj: LvObjT, length: number): void;

	lv_asciimonitor_get_permission(obj: LvObjT): PermissionT;
	lv_asciimonitor_get_addr(obj: LvObjT): number;
	lv_asciimonitor_get_addr_type(obj: LvObjT): number;
	lv_asciimonitor_get_offset(obj: LvObjT): boolean;
	lv_asciimonitor_get_offset_addr(obj: LvObjT): number;
	lv_asciimonitor_get_offset_addr_type(obj: LvObjT): number;
	lv_asciimonitor_get_input(obj: LvObjT): boolean;
	lv_asciimonitor_get_input_addr(obj: LvObjT): number;
	lv_asciimonitor_get_input_addr_type(obj: LvObjT): number;
	lv_asciimonitor_get_passwd(obj: LvObjT): boolean;
	lv_asciimonitor_get_show_input(obj: LvObjT): boolean;
	lv_asciimonitor_get_show_watch(obj: LvObjT): boolean;
	lv_asciimonitor_get_byte_swap(obj: LvObjT): boolean;
	lv_asciimonitor_get_type(obj: LvObjT): number;
	lv_asciimonitor_get_font(obj: LvObjT): number;
	lv_asciimonitor_get_align(obj: LvObjT): number;
	lv_asciimonitor_get_text_color(obj: LvObjT): LvColorT;
	lv_asciimonitor_get_bg_color(obj: LvObjT): LvColorT;
	lv_asciimonitor_get_opa(obj: LvObjT): number;
	lv_asciimonitor_get_bg_image(obj: LvObjT): number;
	lv_asciimonitor_get_length(obj: LvObjT): number;

	// number monitor
	lv_nummonitor_create(parent: LvObjT): LvObjT;
	lv_nummonitor_set_addr(obj: LvObjT, addr: number, addr_type: number): void;
	lv_nummonitor_set_data_type(obj: LvObjT, data_type: number): void;
	lv_nummonitor_set_offset(obj: LvObjT, offset: boolean): void;
	lv_nummonitor_set_offset_addr(obj: LvObjT, offset_addr: number, offset_addr_type: number): void;
	lv_nummonitor_set_input(obj: LvObjT, input: boolean): void;
	lv_nummonitor_set_input_addr(obj: LvObjT, input_addr: number, input_addr_type: number): void;
	lv_nummonitor_set_passwd(obj: LvObjT, passwd: boolean): void;
	lv_nummonitor_set_show_input(obj: LvObjT, show_input: boolean): void;
	lv_nummonitor_set_show_watch(obj: LvObjT, show_watch: boolean): void;
	lv_nummonitor_set_scale(obj: LvObjT, scale: boolean): void;
	lv_nummonitor_set_scale_gain(obj: LvObjT, scale_gain: number): void;
	lv_nummonitor_set_scale_offset(obj: LvObjT, scale_offset: number): void;

	lv_nummonitor_set_font(obj: LvObjT, font: number): void;
	lv_nummonitor_set_align(obj: LvObjT, align: number): void;
	lv_nummonitor_set_text_color(obj: LvObjT, color: LvColorT): void;
	lv_nummonitor_set_bg_color(obj: LvObjT, color: LvColorT): void;
	lv_nummonitor_set_opa(obj: LvObjT, opa: number): void;
	lv_nummonitor_set_total_digits(obj: LvObjT, total_digits: number): void;
	lv_nummonitor_set_decimal_digits(obj: LvObjT, decimal_digits: number): void;
	lv_nummonitor_set_bg_image(obj: LvObjT, image: LvImgDscT | null): void;
	lv_nummonitor_set_show_range(obj: LvObjT, show_range: boolean): void;
	lv_nummonitor_set_show_type(obj: LvObjT, show_type: number): void;
	lv_nummonitor_set_show_min(obj: LvObjT, show_min: number): void;
	lv_nummonitor_set_show_max(obj: LvObjT, show_max: number): void;
	lv_nummonitor_set_show_min_addr(obj: LvObjT, show_min_addr: number, show_min_addr_type: number): void;
	lv_nummonitor_set_show_max_addr(obj: LvObjT, show_max_addr: number, show_max_addr_type: number): void;
	lv_nummonitor_set_input_type(obj: LvObjT, input_type: number): void;
	lv_nummonitor_set_input_min(obj: LvObjT, input_min: number): void;
	lv_nummonitor_set_input_max(obj: LvObjT, input_max: number): void;
	lv_nummonitor_set_input_min_addr(obj: LvObjT, input_min_addr: number, input_min_addr_type: number): void;
	lv_nummonitor_set_input_max_addr(obj: LvObjT, input_max_addr: number, input_max_addr_type: number): void;

	lv_nummonitor_get_permission(obj: LvObjT): PermissionT;
	lv_nummonitor_get_addr(obj: LvObjT): number;
	lv_nummonitor_get_data_type(obj: LvObjT): number;
	lv_nummonitor_get_addr_type(obj: LvObjT): number;
	lv_nummonitor_get_offset(obj: LvObjT): boolean;
	lv_nummonitor_get_offset_addr(obj: LvObjT): number;
	lv_nummonitor_get_offset_addr_type(obj: LvObjT): number;
	lv_nummonitor_get_input(obj: LvObjT): boolean;
	lv_nummonitor_get_input_addr(obj: LvObjT): number;
	lv_nummonitor_get_input_addr_type(obj: LvObjT): number;
	lv_nummonitor_get_passwd(obj: LvObjT): boolean;
	lv_nummonitor_get_show_input(obj: LvObjT): boolean;
	lv_nummonitor_get_show_watch(obj: LvObjT): boolean;
	lv_nummonitor_get_font(obj: LvObjT): number;
	lv_nummonitor_get_align(obj: LvObjT): number;
	lv_nummonitor_get_text_color(obj: LvObjT): LvColorT;
	lv_nummonitor_get_bg_color(obj: LvObjT): LvColorT;
	lv_nummonitor_get_opa(obj: LvObjT): number;
	lv_nummonitor_get_total_digits(obj: LvObjT): number;
	lv_nummonitor_get_decimal_digits(obj: LvObjT): number;
	lv_nummonitor_get_bg_image(obj: LvObjT): number;
	lv_nummonitor_get_show_range(obj: LvObjT): boolean;
	lv_nummonitor_get_show_type(obj: LvObjT): number;
	lv_nummonitor_get_show_min(obj: LvObjT): number;
	lv_nummonitor_get_show_max(obj: LvObjT): number;
	lv_nummonitor_get_show_min_addr(obj: LvObjT): number;
	lv_nummonitor_get_show_min_addr_type(obj: LvObjT): number;
	lv_nummonitor_get_show_max_addr(obj: LvObjT): number;
	lv_nummonitor_get_show_max_addr_type(obj: LvObjT): number;
	lv_nummonitor_get_input_type(obj: LvObjT): number;
	lv_nummonitor_get_input_min(obj: LvObjT): number;
	lv_nummonitor_get_input_max(obj: LvObjT): number;
	lv_nummonitor_get_input_min_addr(obj: LvObjT): number;
	lv_nummonitor_get_input_min_addr_type(obj: LvObjT): number;
	lv_nummonitor_get_input_max_addr(obj: LvObjT): number;
	lv_nummonitor_get_input_max_addr_type(obj: LvObjT): number;
	lv_nummonitor_get_scale(obj: LvObjT): boolean;
	lv_nummonitor_get_scale_gain(obj: LvObjT): number;
	lv_nummonitor_get_scale_offset(obj: LvObjT): number;

	lv_gauge_create(parent: LvObjT): LvObjT;
	lv_gauge_set_addr(obj: LvObjT, addr: number, addr_type: number): void;
	lv_gauge_set_data_type(obj: LvObjT, data_type: number): void;
	lv_gauge_set_min_value(obj: LvObjT, min_value: number): void;
	lv_gauge_set_max_value(obj: LvObjT, max_value: number): void;
	lv_gauge_set_display_direction(obj: LvObjT, display_direction: number): void;
	lv_gauge_set_show_color(obj: LvObjT, color: LvColorT): void;
	lv_gauge_set_bg_color(obj: LvObjT, color: LvColorT): void;
	lv_gauge_set_scale_color(obj: LvObjT, color: LvColorT): void;
	lv_gauge_set_bg_opa(obj: LvObjT, opa: number): void;
	lv_gauge_set_major_tick(obj: LvObjT, major_tick: number): void;
	lv_gauge_set_minor_tick(obj: LvObjT, minor_tick: number): void;
	lv_gauge_set_show_scale_value(obj: LvObjT, show: boolean): void;
	lv_gauge_set_show_scale_axis(obj: LvObjT, show: boolean): void;
	lv_gauge_set_show_minor_scale(obj: LvObjT, show: boolean): void;
	lv_gauge_set_shape(obj: LvObjT, shape: number): void;
	lv_gauge_set_pointer_type(obj: LvObjT, type: number): void;

	lv_gauge_get_permission(obj: LvObjT): PermissionT;
	lv_gauge_get_addr(obj: LvObjT): number;
	lv_gauge_get_addr_type(obj: LvObjT): number;
	lv_gauge_get_data_type(obj: LvObjT): number;
	lv_gauge_get_min_value(obj: LvObjT): number;
	lv_gauge_get_max_value(obj: LvObjT): number;
	lv_gauge_get_display_direction(obj: LvObjT): number;
	lv_gauge_get_show_color(obj: LvObjT): LvColorT;
	lv_gauge_get_bg_color(obj: LvObjT): LvColorT;
	lv_gauge_get_scale_color(obj: LvObjT): LvColorT;
	lv_gauge_get_bg_opa(obj: LvObjT): number;
	lv_gauge_get_major_tick(obj: LvObjT): number;
	lv_gauge_get_minor_tick(obj: LvObjT): number;
	lv_gauge_get_show_scale_value(obj: LvObjT): boolean;
	lv_gauge_get_show_scale_axis(obj: LvObjT): boolean;
	lv_gauge_get_show_minor_scale(obj: LvObjT): boolean;
	lv_gauge_get_shape(obj: LvObjT): number;
	lv_gauge_get_pointer_type(obj: LvObjT): number;

	// custom bar
	lv_custombar_create(parent: LvObjT): LvObjT;
	lv_custombar_set_addr(obj: LvObjT, addr: number, addr_type: number): void;
	lv_custombar_set_data_type(obj: LvObjT, data_type: number): void;
	lv_custombar_set_min_value(obj: LvObjT, min_value: number): void;
	lv_custombar_set_max_value(obj: LvObjT, max_value: number): void;
	lv_custombar_set_direction(obj: LvObjT, direction: number): void;
	lv_custombar_set_bg_color(obj: LvObjT, color: LvColorT): void;
	lv_custombar_set_bar_color(obj: LvObjT, color: LvColorT): void;
	lv_custombar_set_is_bipolar_bar(obj: LvObjT, is_bipolar: boolean): void;
	lv_custombar_set_mid_value(obj: LvObjT, mid_value: number): void;

	lv_custombar_get_permission(obj: LvObjT): PermissionT;
	lv_custombar_get_addr(obj: LvObjT): number;
	lv_custombar_get_addr_type(obj: LvObjT): number;
	lv_custombar_get_data_type(obj: LvObjT): number;
	lv_custombar_get_min_value(obj: LvObjT): number;
	lv_custombar_get_max_value(obj: LvObjT): number;
	lv_custombar_get_bg_color(obj: LvObjT): LvColorT;
	lv_custombar_get_bar_color(obj: LvObjT): LvColorT;
	lv_custombar_get_is_bipolar_bar(obj: LvObjT): boolean;
	lv_custombar_get_mid_value(obj: LvObjT): number;

	// multifunc button
	lv_multifuncbutton_create(parent: LvObjT): LvObjT;
	lv_multifuncbutton_set_press(obj: LvObjT, press: boolean): void;
	lv_multifuncbutton_set_action(obj: LvObjT, action: number, index: number): void;
	lv_multifuncbutton_set_addr(obj: LvObjT, addr: number, addr_type: number, index: number): void;
	lv_multifuncbutton_set_data_type(obj: LvObjT, data_type: number, index: number): void;
	lv_multifuncbutton_set_value(obj: LvObjT, value: number, index: number): void;
	lv_multifuncbutton_set_screen(obj: LvObjT, screen: number, init_screen: number, index: number): void;
	lv_multifuncbutton_remove(obj: LvObjT, index: number): void;

	lv_multifuncbutton_get_permission(obj: LvObjT): PermissionT;
	lv_multifuncbutton_get_style(obj: LvObjT): LvButtonStyleT;
	lv_multifuncbutton_get_press(obj: LvObjT): boolean;
	lv_multifuncbutton_get_action(obj: LvObjT, index: number): number;
	lv_multifuncbutton_get_addr(obj: LvObjT, index: number): number;
	lv_multifuncbutton_get_addr_type(obj: LvObjT, index: number): number;
	lv_multifuncbutton_get_data_type(obj: LvObjT, index: number): number;
	lv_multifuncbutton_get_value(obj: LvObjT, index: number): number;
	lv_multifuncbutton_get_count(obj: LvObjT): number;

	// message monitor
	lv_msgmonitor_create(parent: LvObjT): LvObjT;
	lv_msgmonitor_set_texts(obj: LvObjT, texts: number, cnt: number): void;
	lv_msgmonitor_set_text_index(obj: LvObjT, text: number, index: number): void;
	lv_msgmonitor_add_text(obj: LvObjT, text: number): void;
	lv_msgmonitor_set_addr(obj: LvObjT, addr: number, addr_type: number): void;
	lv_msgmonitor_set_data_type(obj: LvObjT, data_type: number): void;
	lv_msgmonitor_set_font(obj: LvObjT, font: number): void;
	lv_msgmonitor_set_text_color(obj: LvObjT, color: LvColorT): void;
	lv_msgmonitor_set_bg_color(obj: LvObjT, color: LvColorT): void;
	lv_msgmonitor_set_grad_color(obj: LvObjT, color: LvColorT): void;
	lv_msgmonitor_set_style(obj: LvObjT, style: number): void;
	lv_msgmonitor_get_permission(obj: LvObjT): PermissionT;
	lv_msgmonitor_get_active_text(obj: LvObjT): number;
	lv_msgmonitor_get_addr(obj: LvObjT): number;
	lv_msgmonitor_get_addr_type(obj: LvObjT): number;
	lv_msgmonitor_get_data_type(obj: LvObjT): number;
	lv_msgmonitor_get_font(obj: LvObjT): number;
	lv_msgmonitor_get_text_color(obj: LvObjT): LvColorT;
	lv_msgmonitor_get_bg_color(obj: LvObjT): LvColorT;
	lv_msgmonitor_get_grad_color(obj: LvObjT): LvColorT;
	lv_msgmonitor_get_style(obj: LvObjT): number;

	// image monitor
	lv_imagemonitor_create(parent: LvObjT): LvObjT;
	lv_imagemonitor_set_src(obj: LvObjT, src: (LvImgDscT | null)[]): void;
	lv_imagemonitor_add_src(obj: LvObjT, src: LvImgDscT | null): void;
	lv_imagemonitor_set_type(obj: LvObjT, type: number): void;
	lv_imagemonitor_set_addr(obj: LvObjT, addr: number, addr_type: number): void;
	lv_imagemonitor_set_timer_period(obj: LvObjT, period: number): void;

	lv_imagemonitor_get_permission(obj: LvObjT): PermissionT;
	lv_imagemonitor_get_type(obj: LvObjT): number;
	lv_imagemonitor_get_addr(obj: LvObjT): number;
	lv_imagemonitor_get_addr_type(obj: LvObjT): number;
	lv_imagemonitor_get_timer_period(obj: LvObjT): number;

	// gif monitor
	lv_gifmonitor_create(parent: LvObjT): LvObjT;
	lv_gifmonitor_set_addr(obj: LvObjT, addr: number, addr_type: number): void;
	// lv_gifmonitor_set_src(obj: LvObjT, src: any): void;
	lv_gifmonitor_set_bg_image(obj: LvObjT, src: LvImgDscT | null): void;
	lv_gifmonitor_set_control(obj: LvObjT, control: boolean): void;
	lv_gifmonitor_set_status(obj: LvObjT, status: boolean): void;

	lv_gifmonitor_get_permission(obj: LvObjT): PermissionT;
	lv_gifmonitor_get_addr(obj: LvObjT): number;
	lv_gifmonitor_get_addr_type(obj: LvObjT): number;
	lv_gifmonitor_get_src(obj: LvObjT): any;
	lv_gifmonitor_get_control(obj: LvObjT): boolean;
	lv_gifmonitor_get_status(obj: LvObjT): boolean;

}

