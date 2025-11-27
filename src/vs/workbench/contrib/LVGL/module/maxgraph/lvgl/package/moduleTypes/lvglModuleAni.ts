import {
	lv_anim_enable_t,
	lv_bar_mode_t,
	lv_border_side_t,
	lv_dir_t, lv_grad_dir_t,
	lv_scrollbar_mode_t,
	lv_slider_mode_t,
	lv_text_align_t,
	lv_text_decor_t,
	lv_align_t,
	lv_label_long_mode_t,
	lv_chart_axis_t,
	lv_roller_mode_t,
	lv_chart_type_t,
	lv_keyboard_mode_t,
	lv_buttonmatrix_ctrl_t,
	lv_table_cell_ctrl_t,
	lv_menu_mode_header_t,
	lv_menu_mode_root_back_button_t
} from "../lvglEnums.js";

export interface LvglAniModule {
	lv_int_to_obj(obj: number): LvObjT
	lv_anim_t: new () => LvAnimT
	lv_anim_init(anim: LvAnimT): void
	lv_anim_delete(obj: LvAnimT, func: LvFunT): void
	lv_anim_start(anim: LvAnimT): void
	// 设置动画的目标对象
	lv_anim_set_var(anim: LvAnimT, var_: LvObjT): void
	lv_anim_set_exec_cb(anim: LvAnimT, exec_cb: LvFunT): void
	// 设置动画的起始值和结束值
	lv_anim_set_values(anim: LvAnimT, start: number, end: number): void
	// 设置动画的时间
	lv_anim_set_duration(anim: LvAnimT, time: number): void
	// 设置动画是立即执行，还是延迟一段时间后执行
	lv_anim_set_early_apply(anim: LvAnimT, en: boolean): void
	// 设置动画的延迟时间
	lv_anim_set_delay(anim: LvAnimT, delay: number): void
	// 设置动画的重复次数
	lv_anim_set_repeat_count(anim: LvAnimT, repeat_count: number): void
	// 每次重复的延迟时间
	lv_anim_set_repeat_delay(anim: LvAnimT, repeat_delay: number): void

	lv_anim_set_ready_cb(anim: LvAnimT, ready_cb: LvFunT): void

	lv_anim_set_path_cb(anim: LvAnimT, path_cb: LvFunT): void
	lv_anim_set_playback_delay(anim: LvAnimT, delay: number): void
	lv_anim_set_playback_time(anim: LvAnimT, time: number): void
	lv_anim_set_repeat(anim: LvAnimT, repeat: number): void

	lv_anim_path_linear(anim: LvAnimT): void
	lv_anim_path_ease_in(anim: LvAnimT): void
	lv_anim_path_ease_out(anim: LvAnimT): void
	lv_anim_path_ease_in_out(anim: LvAnimT): void
	lv_anim_path_overshoot(anim: LvAnimT): void
	lv_anim_path_bounce(anim: LvAnimT): void
	lv_anim_path_step(anim: LvAnimT): void

	// lv_timeline_t: new () => LvAnimTimelineT
	lv_anim_timeline_create(): LvAnimTimelineT;
	lv_anim_timeline_delete(LvAnimTimelineT: LvAnimTimelineT): void;
	lv_anim_timeline_add(LvAnimTimelineT: LvAnimTimelineT, startTime: number, a: LvAnimT): void;
	lv_anim_timeline_start(LvAnimTimelineT: LvAnimTimelineT): void;
	lv_anim_timeline_pause(LvAnimTimelineT: LvAnimTimelineT): void;
	lv_anim_timeline_set_reverse(LvAnimTimelineT: LvAnimTimelineT, en: boolean): void;
	lv_anim_timeline_get_reverse(LvAnimTimelineT: LvAnimTimelineT): boolean;
	lv_anim_timeline_set_repeat_count(LvAnimTimelineT: LvAnimTimelineT, repeatCount: number): void;
	lv_anim_timeline_get_repeat_count(LvAnimTimelineT: LvAnimTimelineT): number;
	lv_anim_timeline_set_repeat_delay(LvAnimTimelineT: LvAnimTimelineT, repeatDelay: number): void;
	lv_anim_timeline_get_repeat_delay(LvAnimTimelineT: LvAnimTimelineT): number;
	lv_anim_timeline_set_progress(LvAnimTimelineT: LvAnimTimelineT, progress: number): void;
	lv_anim_timeline_get_progress(LvAnimTimelineT: LvAnimTimelineT): number;
	lv_anim_timelline_get_playtime(LvAnimTimelineT: LvAnimTimelineT): number;

	LV_ANIM_REPEAT_INFINITE: 65535
}
