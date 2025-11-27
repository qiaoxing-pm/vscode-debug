import { Module } from "../LvglModule.js";

export function getDefaultWgtByName(
	name: string,
	screen?: LvObjT | null
): LvObjT | null {
	name = name.toLowerCase();
	screen = screen || Module.lv_screen_active();
	if (name === "arc") {
		return Module.lv_arc_create(screen);
	} else if (name === "obj") {
		return Module.lv_obj_create(screen);
	} else if (name === "bar") {
		return Module.lv_bar_create(screen);
	} else if (name === "chart") {
		return Module.lv_chart_create(screen);
	} else if (name === "image") {
		return Module.lv_image_create(screen);
	} else if (name === "line") {
		return Module.lv_line_create(screen);
	} else if (name === "label") {
		return Module.lv_label_create(screen);
	} else if (name === "button" || name === "btn") {
		return Module.lv_button_create(screen);
	} else if (name === "textarea") {
		return Module.lv_textarea_create(screen);
	} else if (name === "tabview") {
		return Module.lv_tabview_create(screen);
	} else if (name === "panel") {
		//return Module.lv_panel_create(screen);
		return null; // Panel is not supported in LVGL 8.3
	} else if (name === "container") {
		return null; // Container is not supported in LVGL 8.3
		//return Module.lv_container_create(screen);
	} else if (name === "calendar") {
		return Module.lv_calendar_create(screen);
	} else if (name === "checkbox") {
		return Module.lv_checkbox_create(screen);
	} else if (name === "colorwheel") {
		//return Module.lv_colorwheel_create(screen);
		return null; // Colorwheel is not supported in LVGL 8.3
	} else if (name === "dropdown") {
		return Module.lv_dropdown_create(screen);
	} else if (name === "imagebutton") {
		//return Module.lv_imagebutton_create(screen);
		return null; // ImageButton is not supported in LVGL 8.3
	} else if (name === "keyboard") {
		return Module.lv_keyboard_create(screen);
	} else if (name === "roller") {
		return Module.lv_roller_create(screen);
	} else if (name === "slider") {
		return Module.lv_slider_create(screen);
	} else if (name === "spinbox") {
		return Module.lv_spinbox_create(screen);
	} else if (name === "switch") {
		return Module.lv_switch_create(screen);
	} else if (name === "led") {
		return Module.lv_led_create(screen);
	} else if (name === "scale") {
		return Module.lv_scale_create(screen);
	} else if (name === "list") {
		return Module.lv_list_create(screen);
	} else if (name === "table") {
		return Module.lv_table_create(screen);
	} else if (name === "win") {
		return Module.lv_win_create(screen);
	} else if (name === "spinner") {
		return Module.lv_spinner_create(screen);
	} else if (name === "msgbox") {
		return Module.lv_msgbox_create(screen);
	} else if (name === "span") {
		//return Module.lv_span_create(screen);
		return null; // Span is not supported in LVGL 8.3
	} else if (name === "spangroup") {
		return Module.lv_spangroup_create(screen);
	} else if (name === "multistatenum") {
		return Module.lv_multistatenum_create(screen);
	} else if (name === "multistatetext") {
		return Module.lv_multistatetext_create(screen);
	} else if (name === "multistateimage") {
		return Module.lv_multistateimage_create(screen);
	} else if (name === "circle") {
		return Module.lv_circle_create(screen);
	} else if (name === "ellipse") {
		return Module.lv_ellipse_create(screen);
	} else if (name === "partellipse") {
		return Module.lv_partellipse_create(screen);
	} else if (name === "partcircle") {
		return Module.lv_partcircle_create(screen);
	} else if (name === "polygon") {
		return Module.lv_polygon_create(screen);
	} else if (name === "pipe") {
		return Module.lv_pipe_create(screen);
	} else if (name === "bitbutton") {
		return Module.lv_bitbutton_create(screen);
	} else if (name === "wordbutton") {
		return Module.lv_wordbutton_create(screen);
	} else if (name === "screenbutton") {
		return Module.lv_screenbutton_create(screen);
	} else if (name === "multibutton") {
		return Module.lv_multibutton_create(screen);
	} else if (name === "functionbutton") {
		return Module.lv_funcbutton_create(screen);
	} else if (name === "linescale") {
		return Module.lv_linescale_create(screen);
	} else if (name === "qrdisplay") {
		return Module.lv_qrdisplay_create(screen);
	} else if (name === "flowblock") {
		return Module.lv_flowblock_create(screen);
	} else if (name === "movetrack") {
		return Module.lv_movetrack_create(screen);
	} else if (name === "sliderswitch") {
		return Module.lv_sliderswitch_create(screen);
	} else if (name === "ring") {
		return Module.lv_ring_create(screen);
	} else if (name === "datagroup") {
		return Module.lv_datagroup_create(screen);
	} else if (name === "trendchart") {
		return Module.lv_trendchart_create(screen);
	} else if (name === "xycurve") {
		return Module.lv_xycurve_create(screen);
	} else if (name === "rollermonitor") {
		return Module.lv_rollermonitor_create(screen);
	} else if (name === "optionlist") {
		return Module.lv_optionlist_create(screen);
	}

	switch (name) {
		case "textmonitor":
			return Module.lv_textmonitor_create(screen);
		case "timemonitor":
			return Module.lv_timemonitor_create(screen);
		case "asciimonitor":
			return Module.lv_asciimonitor_create(screen);
		case "nummonitor":
			return Module.lv_nummonitor_create(screen);
		case "gauge":
			return Module.lv_gauge_create(screen);
		case "messagemonitor":
			return Module.lv_msgmonitor_create(screen);
		case "multifuncbutton":
			return Module.lv_multifuncbutton_create(screen);
		case "imagemonitor":
			return Module.lv_imagemonitor_create(screen);
		case "gifmonitor":
			return Module.lv_gifmonitor_create(screen);
		case "custombar":
			return Module.lv_custombar_create(screen);
		case "ledbutton":
			return Module.lv_ledbutton_create(screen);
	}
	// If the name does not match any known widget, return null
	// console.warn(`Widget with name "${name}" not found.`);
	return null;
}
