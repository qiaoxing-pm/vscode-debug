import {
	lv_blend_mode_t, lv_dir_t, lv_grad_dir_t,
	lv_label_long_mode_t, lv_align_t,
	lv_chart_update_mode_t, lv_chart_axis_t,
	lv_menu_mode_header_t, lv_menu_mode_root_back_button_t,
	lv_image_align_t
} from "./lvglEnums.js";
import { LvChartTypeOpts } from "./lvglOpts.js";


export const targetTypeList = [
	{ value: 0, name: "Basic" },
];

export const actionList = [
	{ value: 0, name: "SET PROPERTY" },
	{ value: 1, name: "CALL FUNCTION" },
	{ value: 2, name: "CHANGE VARIABLE" },
	{ value: 3, name: "CHANGE SCREEN" },
];

export const dirPositionList = [
	{ value: lv_dir_t.LV_DIR_TOP, name: "Top" },
	{ value: lv_dir_t.LV_DIR_BOTTOM, name: "Bottom" },
	{ value: lv_dir_t.LV_DIR_LEFT, name: "Left" },
	{ value: lv_dir_t.LV_DIR_RIGHT, name: "Right" },
	{ value: lv_dir_t.LV_DIR_NONE, name: "None" },
	{ value: lv_dir_t.LV_DIR_ALL, name: "All" }
]

export const textModeList = [
	{ value: lv_label_long_mode_t.LV_LABEL_LONG_WRAP, name: "wrap" },
	{ value: lv_label_long_mode_t.LV_LABEL_LONG_SCROLL, name: "scroll" },
	{ value: lv_label_long_mode_t.LV_LABEL_LONG_SCROLL_CIRCULAR, name: "scroll circular" },
	{ value: lv_label_long_mode_t.LV_LABEL_LONG_CLIP, name: "clip" },
]

export const lvDefaultFontList = [
	{ name: "lv_font_montserrat_8", value: "8" },
	{ name: "lv_font_montserrat_10", value: "10" },
	{ name: "lv_font_montserrat_12", value: "12" },
	{ name: "lv_font_montserrat_14", value: "14" },
	{ name: "lv_font_montserrat_16", value: "16" },
	{ name: "lv_font_montserrat_18", value: "18" },
	{ name: "lv_font_montserrat_20", value: "20" },
	{ name: "lv_font_montserrat_22", value: "22" },
	{ name: "lv_font_montserrat_24", value: "24" },
	{ name: "lv_font_montserrat_26", value: "26" },
	{ name: "lv_font_montserrat_28", value: "28" },
	{ name: "lv_font_montserrat_30", value: "30" },
	{ name: "lv_font_montserrat_32", value: "32" },
	{ name: "lv_font_montserrat_34", value: "34" },
	{ name: "lv_font_montserrat_36", value: "36" },
	{ name: "lv_font_montserrat_38", value: "38" },
	{ name: "lv_font_montserrat_40", value: "40" },
	{ name: "lv_font_montserrat_42", value: "42" },
	{ name: "lv_font_montserrat_44", value: "44" },
	{ name: "lv_font_montserrat_46", value: "46" },
	{ name: "lv_font_montserrat_48", value: "48" },
	{ name: "lv_font_montserrat_28_compressed", value: "28c" },
	{ name: "lv_font_dejavu_16_persian_hebrew", value: "dejavu16" },
	{ name: "lv_font_simsun_16_cjk", value: "simsun16" },
	{ name: "lv_font_unscii_8", value: "unscii8" },
	{ name: "lv_font_unscii_16", value: "unscii16" }
]

export const lvSymbolList = [
	{ name: "LV_SYMBOL_AUDIO", value: "LV_SYMBOL_AUDIO" },
	{ name: "LV_SYMBOL_VIDEO", value: "LV_SYMBOL_VIDEO" },
	{ name: "LV_SYMBOL_LIST", value: "LV_SYMBOL_LIST" },
	{ name: "LV_SYMBOL_OK", value: "LV_SYMBOL_OK" },
	{ name: "LV_SYMBOL_CLOSE", value: "LV_SYMBOL_CLOSE" },
	{ name: "LV_SYMBOL_POWER", value: "LV_SYMBOL_POWER" },
	{ name: "LV_SYMBOL_SETTINGS", value: "LV_SYMBOL_SETTINGS" },
	{ name: "LV_SYMBOL_HOME", value: "LV_SYMBOL_HOME" },
	{ name: "LV_SYMBOL_DOWNLOAD", value: "LV_SYMBOL_DOWNLOAD" },
	{ name: "LV_SYMBOL_DRIVE", value: "LV_SYMBOL_DRIVE" },
	{ name: "LV_SYMBOL_REFRESH", value: "LV_SYMBOL_REFRESH" },
	{ name: "LV_SYMBOL_MUTE", value: "LV_SYMBOL_MUTE" },
	{ name: "LV_SYMBOL_VOLUME_MID", value: "LV_SYMBOL_VOLUME_MID" },
	{ name: "LV_SYMBOL_VOLUME_MAX", value: "LV_SYMBOL_VOLUME_MAX" },
	{ name: "LV_SYMBOL_IMAGE", value: "LV_SYMBOL_IMAGE" },
	{ name: "LV_SYMBOL_TINT", value: "LV_SYMBOL_TINT" },
	{ name: "LV_SYMBOL_PREV", value: "LV_SYMBOL_PREV" },
	{ name: "LV_SYMBOL_PLAY", value: "LV_SYMBOL_PLAY" },
	{ name: "LV_SYMBOL_PAUSE", value: "LV_SYMBOL_PAUSE" },
	{ name: "LV_SYMBOL_STOP", value: "LV_SYMBOL_STOP" },
	{ name: "LV_SYMBOL_NEXT", value: "LV_SYMBOL_NEXT" },
	{ name: "LV_SYMBOL_EJECT", value: "LV_SYMBOL_EJECT" },
	{ name: "LV_SYMBOL_LEFT", value: "LV_SYMBOL_LEFT" },
	{ name: "LV_SYMBOL_RIGHT", value: "LV_SYMBOL_RIGHT" },
	{ name: "LV_SYMBOL_PLUS", value: "LV_SYMBOL_PLUS" },
	{ name: "LV_SYMBOL_MINUS", value: "LV_SYMBOL_MINUS" },
	{ name: "LV_SYMBOL_EYE_OPEN", value: "LV_SYMBOL_EYE_OPEN" },
	{ name: "LV_SYMBOL_EYE_CLOSE", value: "LV_SYMBOL_EYE_CLOSE" },
	{ name: "LV_SYMBOL_WARNING", value: "LV_SYMBOL_WARNING" },
	{ name: "LV_SYMBOL_SHUFFLE", value: "LV_SYMBOL_SHUFFLE" },
	{ name: "LV_SYMBOL_UP", value: "LV_SYMBOL_UP" },
	{ name: "LV_SYMBOL_DOWN", value: "LV_SYMBOL_DOWN" },
	{ name: "LV_SYMBOL_LOOP", value: "LV_SYMBOL_LOOP" },
	{ name: "LV_SYMBOL_DIRECTORY", value: "LV_SYMBOL_DIRECTORY" },
	{ name: "LV_SYMBOL_UPLOAD", value: "LV_SYMBOL_UPLOAD" },
	{ name: "LV_SYMBOL_CALL", value: "LV_SYMBOL_CALL" },
	{ name: "LV_SYMBOL_CUT", value: "LV_SYMBOL_CUT" },
	{ name: "LV_SYMBOL_COPY", value: "LV_SYMBOL_COPY" },
	{ name: "LV_SYMBOL_SAVE", value: "LV_SYMBOL_SAVE" },
	{ name: "LV_SYMBOL_BARS", value: "LV_SYMBOL_BARS" },
	{ name: "LV_SYMBOL_ENVELOPE", value: "LV_SYMBOL_ENVELOPE" },
	{ name: "LV_SYMBOL_CHARGE", value: "LV_SYMBOL_CHARGE" },
	{ name: "LV_SYMBOL_PASTE", value: "LV_SYMBOL_PASTE" },
	{ name: "LV_SYMBOL_BELL", value: "LV_SYMBOL_BELL" },
	{ name: "LV_SYMBOL_KEYBOARD", value: "LV_SYMBOL_KEYBOARD" },
	{ name: "LV_SYMBOL_GPS", value: "LV_SYMBOL_GPS" },
	{ name: "LV_SYMBOL_FILE", value: "LV_SYMBOL_FILE" },
	{ name: "LV_SYMBOL_WIFI", value: "LV_SYMBOL_WIFI" },
	{ name: "LV_SYMBOL_BATTERY_FULL", value: "LV_SYMBOL_BATTERY_FULL" },
	{ name: "LV_SYMBOL_BATTERY_3", value: "LV_SYMBOL_BATTERY_3" },
	{ name: "LV_SYMBOL_BATTERY_2", value: "LV_SYMBOL_BATTERY_2" },
	{ name: "LV_SYMBOL_BATTERY_1", value: "LV_SYMBOL_BATTERY_1" },
	{ name: "LV_SYMBOL_BATTERY_EMPTY", value: "LV_SYMBOL_BATTERY_EMPTY" },
	{ name: "LV_SYMBOL_USB", value: "LV_SYMBOL_USB" },
	{ name: "LV_SYMBOL_BLUETOOTH", value: "LV_SYMBOL_BLUETOOTH" },
	{ name: "LV_SYMBOL_TRASH", value: "LV_SYMBOL_TRASH" },
	{ name: "LV_SYMBOL_EDIT", value: "LV_SYMBOL_EDIT" },
	{ name: "LV_SYMBOL_BACKSPACE", value: "LV_SYMBOL_BACKSPACE" },
	{ name: "LV_SYMBOL_SD_CARD", value: "LV_SYMBOL_SD_CARD" },
	{ name: "LV_SYMBOL_NEW_LINE", value: "LV_SYMBOL_NEW_LINE" },
	{ name: "LV_SYMBOL_DUMMY", value: "LV_SYMBOL_DUMMY" },
];

export const lvGradDirList = [
	{ name: "LV_GRAD_DIR_NONE", value: lv_grad_dir_t.LV_GRAD_DIR_NONE },
	{ name: "LV_GRAD_DIR_VER", value: lv_grad_dir_t.LV_GRAD_DIR_VER },
	{ name: "LV_GRAD_DIR_HOR", value: lv_grad_dir_t.LV_GRAD_DIR_HOR },
]

// LV_BLEND_MODE_SUBTRACTIVE LV_BLEND_MODE_MULTIPLY
export const lvBlendModeList = [
	{ name: "LV_BLEND_MODE_NORMAL", value: lv_blend_mode_t.LV_BLEND_MODE_NORMAL },
	{ name: "LV_BLEND_MODE_ADDITIVE", value: lv_blend_mode_t.LV_BLEND_MODE_ADDITIVE },
	{ name: "LV_BLEND_MODE_SUBTRACTIVE", value: lv_blend_mode_t.LV_BLEND_MODE_SUBTRACTIVE },
	{ name: "LV_BLEND_MODE_MULTIPLY", value: lv_blend_mode_t.LV_BLEND_MODE_MULTIPLY },

]

export const lvImageAlignList = [
	{ name: "LV_IMAGE_ALIGN_DEFAULT", value: lv_image_align_t.LV_IMAGE_ALIGN_DEFAULT },
	{ name: "LV_IMAGE_ALIGN_TOP_LEFT", value: lv_image_align_t.LV_IMAGE_ALIGN_TOP_LEFT },
	{ name: "LV_IMAGE_ALIGN_TOP_MID", value: lv_image_align_t.LV_IMAGE_ALIGN_TOP_MID },
	{ name: "LV_IMAGE_ALIGN_TOP_RIGHT", value: lv_image_align_t.LV_IMAGE_ALIGN_TOP_RIGHT },
	{ name: "LV_IMAGE_ALIGN_BOTTOM_LEFT", value: lv_image_align_t.LV_IMAGE_ALIGN_BOTTOM_LEFT },
	{ name: "LV_IMAGE_ALIGN_BOTTOM_MID", value: lv_image_align_t.LV_IMAGE_ALIGN_BOTTOM_MID },
	{ name: "LV_IMAGE_ALIGN_BOTTOM_RIGHT", value: lv_image_align_t.LV_IMAGE_ALIGN_BOTTOM_RIGHT },
	{ name: "LV_IMAGE_ALIGN_LEFT_MID", value: lv_image_align_t.LV_IMAGE_ALIGN_LEFT_MID },
	{ name: "LV_IMAGE_ALIGN_RIGHT_MID", value: lv_image_align_t.LV_IMAGE_ALIGN_RIGHT_MID },
	{ name: "LV_IMAGE_ALIGN_CENTER", value: lv_image_align_t.LV_IMAGE_ALIGN_CENTER },
	{ name: "LV_IMAGE_ALIGN_TILE", value: lv_image_align_t.LV_IMAGE_ALIGN_TILE },
	{ name: "LV_IMAGE_ALIGN_STRETCH", value: lv_image_align_t.LV_IMAGE_ALIGN_STRETCH },
]

export const lvAlignList = [
	{ name: "LV_ALIGN_DEFAULT", value: lv_align_t.LV_ALIGN_DEFAULT },
	{ name: "LV_ALIGN_TOP_LEFT", value: lv_align_t.LV_ALIGN_TOP_LEFT },
	{ name: "LV_ALIGN_TOP_MID", value: lv_align_t.LV_ALIGN_TOP_MID },
	{ name: "LV_ALIGN_TOP_RIGHT", value: lv_align_t.LV_ALIGN_TOP_RIGHT },
	{ name: "LV_ALIGN_BOTTOM_LEFT", value: lv_align_t.LV_ALIGN_BOTTOM_LEFT },
	{ name: "LV_ALIGN_BOTTOM_MID", value: lv_align_t.LV_ALIGN_BOTTOM_MID },
	{ name: "LV_ALIGN_BOTTOM_RIGHT", value: lv_align_t.LV_ALIGN_BOTTOM_RIGHT },
	{ name: "LV_ALIGN_LEFT_MID", value: lv_align_t.LV_ALIGN_LEFT_MID },
	{ name: "LV_ALIGN_RIGHT_MID", value: lv_align_t.LV_ALIGN_RIGHT_MID },
	{ name: "LV_ALIGN_CENTER", value: lv_align_t.LV_ALIGN_CENTER },

	{ name: "LV_ALIGN_OUT_TOP_LEFT", value: lv_align_t.LV_ALIGN_OUT_TOP_LEFT },
	{ name: "LV_ALIGN_OUT_TOP_MID", value: lv_align_t.LV_ALIGN_OUT_TOP_MID },
	{ name: "LV_ALIGN_OUT_TOP_RIGHT", value: lv_align_t.LV_ALIGN_OUT_TOP_RIGHT },
	{ name: "LV_ALIGN_OUT_BOTTOM_LEFT", value: lv_align_t.LV_ALIGN_OUT_BOTTOM_LEFT },
	{ name: "LV_ALIGN_OUT_BOTTOM_MID", value: lv_align_t.LV_ALIGN_OUT_BOTTOM_MID },
	{ name: "LV_ALIGN_OUT_BOTTOM_RIGHT", value: lv_align_t.LV_ALIGN_OUT_BOTTOM_RIGHT },
	{ name: "LV_ALIGN_OUT_LEFT_TOP", value: lv_align_t.LV_ALIGN_OUT_LEFT_TOP },
	{ name: "LV_ALIGN_OUT_LEFT_MID", value: lv_align_t.LV_ALIGN_OUT_LEFT_MID },
	{ name: "LV_ALIGN_OUT_LEFT_BOTTOM", value: lv_align_t.LV_ALIGN_OUT_LEFT_BOTTOM },
	{ name: "LV_ALIGN_OUT_RIGHT_TOP", value: lv_align_t.LV_ALIGN_OUT_RIGHT_TOP },
	{ name: "LV_ALIGN_OUT_RIGHT_MID", value: lv_align_t.LV_ALIGN_OUT_RIGHT_MID },
	{ name: "LV_ALIGN_OUT_RIGHT_BOTTOM", value: lv_align_t.LV_ALIGN_OUT_RIGHT_BOTTOM },

]

export const lvChartTypeList = LvChartTypeOpts.map(item => {
	return {
		name: item.label,
		value: item.value
	}
});

export const lvChartUpdateModeList = [
	{
		name: "LV_CHART_UPDATE_MODE_SHIFT",
		value: lv_chart_update_mode_t.LV_CHART_UPDATE_MODE_SHIFT
	}, {
		name: "LV_CHART_UPDATE_MODE_CIRCULAR",
		value: lv_chart_update_mode_t.LV_CHART_UPDATE_MODE_CIRCULAR
	}
]

export const lvChartSeriesTypeList = [
	{ name: "LV_CHART_AXIS_PRIMARY_Y", value: lv_chart_axis_t.LV_CHART_AXIS_PRIMARY_Y },
	{ name: "LV_CHART_AXIS_SECONDARY_Y", value: lv_chart_axis_t.LV_CHART_AXIS_SECONDARY_Y },
	{ name: "LV_CHART_AXIS_PRIMARY_X", value: lv_chart_axis_t.LV_CHART_AXIS_PRIMARY_X },
	{ name: "LV_CHART_AXIS_SECONDARY_X", value: lv_chart_axis_t.LV_CHART_AXIS_SECONDARY_X }
]

export const lvMenuHeaderModeList = [
	{ name: "LV_MENU_HEADER_TOP_FIXED", value: lv_menu_mode_header_t.LV_MENU_HEADER_TOP_FIXED },
	{ name: "LV_MENU_HEADER_BOTTOM_FIXED", value: lv_menu_mode_header_t.LV_MENU_HEADER_BOTTOM_FIXED },
	{ name: "LV_MENU_HEADER_BOTTOM_FIXED", value: lv_menu_mode_header_t.LV_MENU_HEADER_BOTTOM_FIXED },
]

export const lvMenuRootBackButtonModeList =
	[
		{
			name: "LV_MENU_ROOT_BACK_BUTTON_DISABLED",
			value: lv_menu_mode_root_back_button_t.LV_MENU_ROOT_BACK_BUTTON_DISABLED
		},
		{
			name: "LV_MENU_ROOT_BACK_BUTTON_ENABLED",
			value: lv_menu_mode_root_back_button_t.LV_MENU_ROOT_BACK_BUTTON_ENABLED
		},
	]
