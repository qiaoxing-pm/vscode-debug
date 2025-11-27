import {
	lv_linescale_text_direction_t, lv_linescale_text_position_t,
	lv_qrdisplay_type_t, lv_wordbutton_action_t,
	data_type_t,
	addr_type_t,
	lv_sliderswitch_dir_t,
	lv_multibutton_action_t,
	trendchart_direction_t,
	ring_type_t,
	lv_roller_mode_t,
	lv_dir_t,
	lv_text_align_t,
	lv_textmonitor_style_t,
	lv_text_decor_t,
	lv_timemonitor_date_style_t,
	lv_timemonitor_time_style_t,
	lv_asciimonitor_type_t,
	lv_nummonitor_type_t,
	lv_gauge_pointer_type_t,
	lv_gauge_display_direction_t,
	lv_gauge_shape_t,
	lv_custombar_direction_t,
	lv_imagemonitor_type_t,
	compare_type_t,
	lv_bitbutton_action_t,
	sampling_mode_t,
	lv_screenbutton_action_t,
	range_type_t,
	lv_flowblock_shape_t,
	lv_flowblock_port_t,
} from "./enums.js";
/*
LV_BIT_BUTTION_SET_BIT = 0x0,
LV_BIT_BUTTION_CLEAR_BIT = 0x1,
LV_BIT_BUTTION_PULSE_BIT = 0x2,
LV_BIT_BUTTION_TOGGLE_BIT = 0x3,
*/
export const BitButtionActionOptions = [
	{ value: lv_bitbutton_action_t.LV_BIT_BUTTION_SET_BIT, name: "置位" },
	{ value: lv_bitbutton_action_t.LV_BIT_BUTTION_CLEAR_BIT, name: "复位" },
	{ value: lv_bitbutton_action_t.LV_BIT_BUTTION_PULSE_BIT, name: "点动" },
	{ value: lv_bitbutton_action_t.LV_BIT_BUTTION_TOGGLE_BIT, name: "交替" },
];

export const flowblockShapeOptions = [
	{ name: "Line", value: lv_flowblock_shape_t.LV_FLOWBLOCK_SHAPE_LINE },
	{ name: "Round", value: lv_flowblock_shape_t.LV_FLOWBLOCK_SHAPE_ROUND },
	{ name: "T Shape", value: lv_flowblock_shape_t.LV_FLOWBLOCK_SHAPE_T_SHAPE },
	{ name: "Cross", value: lv_flowblock_shape_t.LV_FLOWBLOCK_SHAPE_CROSS },
];

export const flowBlockPortOptions = [
	{ name: "无", value: lv_flowblock_port_t.LV_FLOWBLOCK_PORT_NONE },
	{ name: "左口", value: lv_flowblock_port_t.LV_FLOWBLOCK_PORT_LEFT },
	{ name: "右口", value: lv_flowblock_port_t.LV_FLOWBLOCK_PORT_RIGHT },
	{ name: "上口", value: lv_flowblock_port_t.LV_FLOWBLOCK_PORT_DOWN },
	{ name: "下口", value: lv_flowblock_port_t.LV_FLOWBLOCK_PORT_UP },
]

export const rangeTypeOptions = [
	{ value: range_type_t.LV_DATAGROUP_VALUE_RANGE, name: "常量" },
	{ value: range_type_t.LV_DATAGROUP_ADDR_RANGE, name: "地址" },
];
export const addrTypeOptions = [
	{ value: addr_type_t.ADDR_TYPE_NONE, name: "NONE" },
	{ value: addr_type_t.ADDR_TYPE_LOCAL_BIT, name: "本地位" },
	{ value: addr_type_t.ADDR_TYPE_LOCAL_WORD, name: "本地字" },
	{ value: addr_type_t.ADDR_TYPE_MODBUS_BIT, name: "Modbus位" },
	{ value: addr_type_t.ADDR_TYPE_MODBUS_WORD, name: "Modbus字" },
]

export const dataTypeOptions = [
	{ value: data_type_t.DATA_TYPE_NONE, name: "无数据类型" },
	{ value: data_type_t.DATA_TYPE_UINT16, name: "无符号16位整数" },
	{ value: data_type_t.DATA_TYPE_UINT32, name: "无符号32位整数" },
	{ value: data_type_t.DATA_TYPE_INT16, name: "有符号16位整数" },
	{ value: data_type_t.DATA_TYPE_INT32, name: "有符号32位整数" },
	{ value: data_type_t.DATA_TYPE_FLOAT, name: "32位浮点数" },
];
export const wordAddrTypeOpts = [
	{ name: "本地字地址", value: addr_type_t.ADDR_TYPE_LOCAL_WORD },
	{ name: "MODBUS字地址", value: addr_type_t.ADDR_TYPE_MODBUS_WORD },
];
export const bitAddrTypeOpts = [
	{ name: "本地位地址", value: addr_type_t.ADDR_TYPE_LOCAL_BIT },
	{ name: "MODBUS位地址", value: addr_type_t.ADDR_TYPE_MODBUS_BIT },
]
export const numMonitorRangeTypeOptions = [
	{ value: lv_nummonitor_type_t.LV_NUMMONITOR_TYPE_VALUE, name: "常量" },
	{ value: lv_nummonitor_type_t.LV_NUMMONITOR_TYPE_ADDR, name: "地址" },
]
/*
	COMPARE_TYPE_EQUAL = 0x0,
	COMPARE_TYPE_NOT_EQUAL=0x1,
	COMPARE_TYPE_GREATER=0x2,
	COMPARE_TYPE_LESS=0x3,
	COMPARE_TYPE_GREATER_EQUAL=0x4,
	COMPARE_TYPE_LESS_EQUAL=0x5,
*/
export const compareTypeOptions = [
	{ value: compare_type_t.COMPARE_TYPE_EQUAL, name: "等于" },
	{ value: compare_type_t.COMPARE_TYPE_NOT_EQUAL, name: "不等于" },
	{ value: compare_type_t.COMPARE_TYPE_GREATER, name: "大于" },
	{ value: compare_type_t.COMPARE_TYPE_LESS, name: "小于" },
	{ value: compare_type_t.COMPARE_TYPE_GREATER_EQUAL, name: "大于等于" },
	{ value: compare_type_t.COMPARE_TYPE_LESS_EQUAL, name: "小于等于" },
]

const optionDataTypePositiveInteger = [
	{ value: "16-bit-positive-integer", name: "16位正整数" },
	{ value: "32-bit-positive-integer", name: "32位正整数" },
]

const optionDataTypeByteType = [
	...optionDataTypePositiveInteger,
	{ value: "16-bit-integer", name: "16位整数" },
	{ value: "32-bit-integer", name: "32位整数" },
	{ value: "32-bit-floating-point", name: "32位浮点数" },
]

const optionDataTypeBCD = [
	{ value: 'bcd16', name: '16位BCD码' },
	{ value: 'bcd32', name: '32位BCD码' }
]

const optionDataType = [
	...optionDataTypeByteType,
	{ value: "16-bit-bcd-code", name: "16位BCD码" },
	{ value: "16-bit-octal-number", name: "16位8进制数" },
	{ value: "16-bit-hexadecimal-number", name: "16位16进制数" },
	{ value: "32-bit-bcd-code", name: "32位BCD码" },
	{ value: "32-bit-octal-number", name: "32位8进制数" },
	{ value: "32-bit-hexadecimal-number", name: "32位16进制数" },
	{ value: "16-bit-binary-number", name: "16位二进制数" },
	{ value: "vp-high-byte", name: "*VP高字节" },
	{ value: "vp-low-byte", name: "*VP低字节" },
]

const optionDataTypeTextButton = [
	...optionDataTypeByteType,
	...optionDataTypeBCD
]


const optionRangeType = [
	{
		value: lv_nummonitor_type_t.LV_NUMMONITOR_TYPE_VALUE,
		name: "常量",
	},
	{
		value: lv_nummonitor_type_t.LV_NUMMONITOR_TYPE_ADDR,
		name: "地址",
	},
]

const optionFontType = [
	{
		value: "general",
		name: "一般字体",
	},
	{
		value: "digital",
		name: "数码字体",
	},
	{
		value: "founder-medium",
		name: "方正中等线简体",
	}
]

const optionFontSize = [
	{
		value: '16',
		name: '16'
	},
	{
		value: '24',
		name: '24'
	},
	{
		value: '32',
		name: '32'
	},
	{
		value: '40',
		name: '40'
	},
	{
		value: '48',
		name: '48'
	},
	{
		value: '64',
		name: '64'
	},
	{
		value: '96',
		name: '96'
	},
	{
		value: '192',
		name: '192'
	},
]

const optionAlignType = [
	{
		value: "center",
		name: "居中",
	},
	{
		value: "left",
		name: "左对齐",
	},
	{
		value: "right",
		name: "右对齐",
	}
]

const optionFormatAdjust = [
	{
		value: "remove-leading-zero",
		name: "前面去0"
	},
	{
		value: "leading-zero",
		name: "0领头"
	},
	{
		value: "leading-space",
		name: "空格领头"
	}
]


const optionManifestationState = [
	{
		value: 1,
		name: '1'
	},
	{
		value: 0,
		name: '0'
	}
]


const optionEffectiveMinimumLevel = [
	{
		value: 1,
		name: '1',
	},
	{
		value: 2,
		name: '2',
	},
	{
		value: 3,
		name: '3',
	},

	{
		value: 4,
		name: '4',
	},
	{
		value: 5,
		name: '5',
	},
	{
		value: 6,
		name: '6',
	},
	{
		value: 7,
		name: '7',
	},
	{
		value: 8,
		name: '8',
	},
]

const optionEncodingMethod = [
	{
		value: lv_qrdisplay_type_t.LV_QR_DISPLAY_TYPE_ASCII,
		name: "ASCII"
	},
	{
		value: lv_qrdisplay_type_t.LV_QR_DISPLAY_TYPE_GB2312,
		name: "GB2312"
	}
]







const optionLanguageType = [
	{
		value: 'Chinese',
		name: '中文'
	},
	{
		value: 'English',
		name: '英文'
	}
]






export const optionWordButtonAction = [
	{
		value: lv_wordbutton_action_t.LV_WORD_BUTTON_SET_VALUE,
		name: "set value"
	},
	{
		value: lv_wordbutton_action_t.LV_WORD_BUTTON_VALUE_INPUT,
		name: "value input"
	},
	{
		value: lv_wordbutton_action_t.LV_WORD_BUTTON_PASSWD_INPUT,
		name: "password input"
	},
	{
		value: lv_wordbutton_action_t.LV_WORD_BUTTON_VALUE_INCREASE,
		name: "value increase"
	},
	{
		value: lv_wordbutton_action_t.LV_WORD_BUTTON_VALUE_DECREASE,
		name: "value decrease"
	},
	{
		value: lv_wordbutton_action_t.LV_WORD_BUTTON_VALUE_INCREASE_CYCLE,
		name: "value increase cycle"
	},
	{
		value: lv_wordbutton_action_t.LV_WORD_BUTTON_VALUE_DECREASE_CYCLE,
		name: "value decrease cycle"
	}
]




const optionScreenName = [
	{
		value: 'screen_1',
		name: '画面1'
	}
]

const optionFunction = [
	{
		value: '',
		name: '背景灯开关'
	},
	{
		value: '',
		name: "系统设置"
	},
	{
		value: '',
		name: "系统重启"
	},
	{
		value: '',
		name: '设置屏保时间'
	},
	{
		value: '',
		name: '触摸校正'
	},
	{
		value: "",
		name: "设置系统时间"
	},
	{
		value: "",
		name: "面板保护解锁"
	},
	{
		value: "",
		name: "更改用户等级"
	},
	{
		value: "",
		name: "注销用户等级"
	},
	{
		value: "",
		name: "触摸声音开关"
	},
	{
		value: "",
		name: "历史数据操作"
	},
	{
		value: "",
		name: "配方操作",
	},
	{
		value: "",
		name: "报警操作",
	},
	{
		value: "",
		name: "语言切换"
	},
	{
		value: "",
		name: "键盘组件"
	},
	{
		value: "",
		name: "无线设置"
	},
	{
		value: "",
		name: "背光调节"
	},
	{
		value: "",
		name: "下载方式"
	}
]

const optionFunctionRadio = [
	{
		value: "",
		name: "键盘输入"
	},
	{
		value: "",
		name: "递增"
	},
	{
		value: "",
		name: "递减"
	},
	{
		value: "",
		name: "递增（绕回）"
	},
	{
		value: "",
		name: "递减（绕回）"
	},
	{
		value: "",
		name: "保持"
	}
];

export const moveTrackOpts = [
	{
		name: "上",
		value: 0,
	},
	{
		name: "右",
		value: 1,
	},
	{
		name: "下",
		value: 2,
	},
	{
		name: "左",
		value: 3,
	}
];

const optionVerticalDirection = [
	{
		value: "up",
		name: lv_dir_t.LV_DIR_TOP
	},
	{
		value: "down",
		name: lv_dir_t.LV_DIR_BOTTOM
	},
]

const optionHorizontalDirection = [
	{
		value: "left",
		name: lv_dir_t.LV_DIR_LEFT
	},
	{
		value: "right",
		name: lv_dir_t.LV_DIR_RIGHT
	}
]

export const optionTextDir = [
	...optionVerticalDirection,
	...optionHorizontalDirection
];

const optionDisplayType = [
	{
		value: "static",
		name: "静态图片"
	},
	{
		value: "switch",
		name: "多幅切换"
	}
]

const optionStateTransitionConditionByStaticImage = [
	{
		value: "time",
		name: '时间'
	},
	{
		value: "bit",
		name: "位"
	}
]

const optionStateTransitionConditionByMultipleSwitches = [
	...optionStateTransitionConditionByStaticImage,
	{
		value: "",
		name: "数值"
	}
]

const optionsGenerateFontSize = (() => {
	const options = [];
	for (let i = 5; i <= 256; i++) {
		options.push({
			value: i,
			name: i
		})
	}
	return options;
})();


// 渐变样式选项（包含透明、纯色及各类渐变类型）
const optionsGradientStyle = [
	{ value: 'transparent', name: '透明' },
	{ value: 'solid', name: '纯色' },
	{ value: 'linear-horizontal', name: '横向过渡' },
	{ value: 'linear-horizontal-symmetric', name: '横向对称过渡' },
	{ value: 'linear-vertical', name: '纵向过渡' },
	{ value: 'linear-vertical-symmetric', name: '纵向对称过渡' },
	{ value: 'linear-diagonal-up', name: '斜上过渡' },
	{ value: 'linear-diagonal-up-symmetric', name: '斜上对称过渡' },
	{ value: 'linear-diagonal-down', name: '斜下过渡' },
	{ value: 'linear-diagonal-down-symmetric', name: '斜下对称过渡' },
	{ value: 'radial-top-right', name: '右上角辐射' },
	{ value: 'radial-top-left', name: '左上角辐射' },
	{ value: 'radial-center', name: '中心辐射' }
];


const optionHistoricalDataOperation = [
	{
		value: "",
		name: "清除全部历史数据"
	},
	{
		value: "",
		name: "历史数据上移"
	},
	{
		value: "",
		name: "历史数据下移"
	},
	{
		value: "",
		name: "历史数据上翻页"
	},
	{
		value: "",
		name: "历史事件下翻页"
	},
	{
		value: "",
		name: "U盘历史事件导出"
	},
	{
		value: "",
		name: "SD卡历史数据导出"
	}
]

const optionRecipeOperation = [
	{
		value: "",
		name: "当前配方写入PLC"
	},
	{
		value: "",
		name: "从PLC读当前配方"
	},
	{
		value: "",
		name: "前一个配方"
	},
	{
		value: "",
		name: '后一个配方'
	},
	{
		value: "",
		name: "当前配方保存"
	},
	{
		value: "",
		name: "配方读取及保存"
	},
	{
		value: "",
		name: "重载配方"
	}, {
		value: "",
		name: "当前配方删除"
	},
	{
		value: "",
		name: "U盘配方导出"
	},
	{
		value: "",
		name: "U盘配方导入"
	},
	{
		value: "",
		name: "配方添加"
	},
	{
		value: "",
		name: "SD卡配方导出"
	},
	{
		value: "",
		name: "SD卡配方导入"
	}
]

const optionAlarmOperation = [
	{
		value: "",
		name: "确认报警"
	},
	{
		value: "",
		name: "清除报警"
	},
	{
		value: "",
		name: "报警声音开关"
	},
	{
		value: "",
		name: "清除历史报警数据"
	},
	{
		value: "",
		name: "报警控件报警上移"
	},
	{
		value: "",
		name: "报警控件报警下移"
	},
	{
		value: "",
		name: "报警控件报警上翻页"
	},
	{
		value: "",
		name: "报警控件报警下翻页"
	},
	{
		value: "",
		name: "历史报警控件报警下移"
	},
	{
		value: "",
		name: "历史报警控件报警上移"
	},
	{
		value: "",
		name: "历史报警控件报警上翻页"
	},
	{
		value: "",
		name: "历史报警控件报警下翻页"
	},
	{
		value: "",
		name: "U盘历史报警导出"
	},
	{
		value: "",
		name: "SD卡历史报警导出"
	}
]

const optionDownloadMethod = [
	{
		value: "",
		name: "USB下载"
	},
	{
		value: "",
		name: "U盘下载"
	}
]

const optionScreenOperationType = [
	{
		value: "",
		name: "跳转到指定画面"
	},
	{
		value: "",
		name: "返回上一个画面"
	},
	{
		value: "",
		name: "打开窗口",
	},
	{
		value: "",
		name: "关闭窗口",
	}
]


const optionWordAddressDataValue = [
	{
		value: "",
		name: "用户输入"
	},
	{
		value: "",
		name: "设置数据"
	}
]

const optionRevolvingLantern = [
	{
		value: "",
		name: "不移动",
	},
	{
		value: "",
		name: "向左移动"
	},
	{
		value: "",
		name: "向右移动"
	}
]

const optionLineType = [
	{
		value: "",
		name: "透明线"
	},
	{
		value: "",
		name: "实线"
	},
	{
		value: "",
		name: "虚线"
	},
	{
		value: "",
		name: "短划线"
	},
	{
		value: "",
		name: "点划线"
	},
	{
		value: "",
		name: "两点划线"
	}
]

const optionLineWidth = (() => {
	const options = [];
	for (let i = 1; i <= 32; i++) {
		options.push({
			value: i,
			name: i
		})
	}
	return options;
})();

const optionDrawConnectionLineDirection = [
	{
		value: "",
		name: "从左到右"
	},
	{
		value: "",
		name: "从右到左"
	}
]

const optionDisplayOrientation = [
	{
		value: "",
		name: "顺时针"
	},
	{
		value: "",
		name: "逆时针"
	}
]

const optionRingAttribute = [
	{
		value: "",
		name: "画圆环",
	},
	{
		value: "",
		name: "画圆弧",
	}
]



const optionShapeEndArrow = [
	{
		value: "",
		name: "无形状"
	},
	{
		value: "",
		name: "实心三角形"
	},
	{
		value: "",
		name: "向右箭头"
	},
	{
		value: "",
		name: "折三角形"
	},
	{
		value: "",
		name: "菱形"
	},
	{
		value: "",
		name: "圆形"
	}
]

const optionTipShape = [
	{
		value: "",
		name: "矩形"
	},
	{
		value: "",
		name: "半圆"
	}
]


export const screenButtonActionOpts = [
	{ name: "无操作", value: lv_screenbutton_action_t.LV_SCREENBUTTON_ACTION_NONE },
	{ name: "打开画面", value: lv_screenbutton_action_t.LV_SCREENBUTTON_ACTION_OPEN_SCREEN },
	{ name: "返回上一个画面", value: lv_screenbutton_action_t.LV_SCREENBUTTON_ACTION_LAST_SCREEN },
]

export const lineScalePositionOptions = [
	{
		name: "top",
		value: lv_linescale_text_position_t.LV_LINE_SCALE_TEXT_POSITION_TOP
	},
	{
		name: "bottom",
		value: lv_linescale_text_position_t.LV_LINE_SCALE_TEXT_POSITION_BOTTOM
	},
	{
		name: "left",
		value: lv_linescale_text_position_t.LV_LINE_SCALE_TEXT_POSITION_LEFT
	},
	{
		name: "right",
		value: lv_linescale_text_position_t.LV_LINE_SCALE_TEXT_POSITION_RIGHT
	}
]

export const LineScaleTextDirOpts = [
	{
		name: "top",
		value: lv_linescale_text_direction_t.LV_LINE_SCALE_TEXT_DIRECTION_TOP
	},
	{
		name: "bottom",
		value: lv_linescale_text_direction_t.LV_LINE_SCALE_TEXT_DIRECTION_BOTTOM
	},
	{
		name: "left",
		value: lv_linescale_text_direction_t.LV_LINE_SCALE_TEXT_DIRECTION_LEFT,
	},
	{
		name: "right",
		value: lv_linescale_text_direction_t.LV_LINE_SCALE_TEXT_DIRECTION_RIGHT,
	}
];

export {
	optionTipShape,
	optionFunction,
	optionDataType,
	optionLineType,
	optionFontType,
	optionFontSize,
	optionLineWidth,
	optionRangeType,
	optionAlignType,
	optionScreenName,
	optionDataTypeBCD,
	optionDisplayType,
	optionFormatAdjust,
	optionLanguageType,
	optionShapeEndArrow,
	optionRingAttribute,
	optionFunctionRadio,
	optionDownloadMethod,
	optionAlarmOperation,
	optionsGradientStyle,
	optionEncodingMethod,
	optionRecipeOperation,
	optionRevolvingLantern,
	optionDataTypeByteType,
	optionVerticalDirection,
	optionsGenerateFontSize,
	optionDisplayOrientation,
	optionDataTypeTextButton,
	optionManifestationState,
	optionHorizontalDirection,
	optionScreenOperationType,
	optionWordAddressDataValue,
	optionEffectiveMinimumLevel,
	optionHistoricalDataOperation,
	optionDataTypePositiveInteger,
	optionDrawConnectionLineDirection,
	optionStateTransitionConditionByStaticImage,
	optionStateTransitionConditionByMultipleSwitches,
}


export const lvSliderSwitchDirOpts = [
	{
		name: "左",
		value: lv_sliderswitch_dir_t.LV_SLIDERSWITCH_DIR_LEFT
	},
	{
		name: "右",
		value: lv_sliderswitch_dir_t.LV_SLIDERSWITCH_DIR_RIGHT
	},
	{
		name: "上",
		value: lv_sliderswitch_dir_t.LV_SLIDERSWITCH_DIR_UP
	},
	{
		name: "下",
		value: lv_sliderswitch_dir_t.LV_SLIDERSWITCH_DIR_DOWN
	}
]

export const lvMultiButtonActionOpts = [
	{ name: "value input", value: lv_multibutton_action_t.LV_MULTI_BUTTON_VALUE_INPUT },
	{ name: "value increase", value: lv_multibutton_action_t.LV_MULTI_BUTTON_VALUE_INCREASE },
	{ name: "value decrease", value: lv_multibutton_action_t.LV_MULTI_BUTTON_VALUE_DECREASE },
	{ name: "value increase cycle", value: lv_multibutton_action_t.LV_MULTI_BUTTON_VALUE_INCREASE_CYCLE },
	{ name: "value decrease cycle", value: lv_multibutton_action_t.LV_MULTI_BUTTON_VALUE_DECREASE_CYCLE },
	{ name: "retain", value: lv_multibutton_action_t.LV_MULTI_BUTTON_VALUE_RETAIN },
];

/*
	LV_TRENDCHART_LEFT_TO_RIGHT=0x01,
	LV_TRENDCHART_RIGHT_TO_LEFT=0x02,
*/
export const trendChartDirectionOpts = [
	{ name: "left to right", value: trendchart_direction_t.LV_TRENDCHART_LEFT_TO_RIGHT },
	{ name: "right to left", value: trendchart_direction_t.LV_TRENDCHART_RIGHT_TO_LEFT },
];

/*
LV_RING_TYPE_RING=0x0,
LV_RING_TYPE_ARC=0x1,
*/

export const ringTypeOpts = [
	{ name: "ring", value: ring_type_t.LV_RING_TYPE_RING },
	{ name: "arc", value: ring_type_t.LV_RING_TYPE_ARC },
];
/*
	LV_ROLLER_MODE_NORMAL,
	LV_ROLLER_MODE_INFINITE,
*/

export const rollerModeOpts = [
	{ name: "normal", value: lv_roller_mode_t.LV_ROLLER_MODE_NORMAL },
	{ name: "infinite", value: lv_roller_mode_t.LV_ROLLER_MODE_INFINITE },
];

export const optionListOpts = [
	{ value: lv_dir_t.LV_DIR_LEFT, name: "左" },
	{ value: lv_dir_t.LV_DIR_RIGHT, name: "右" },
	{ value: lv_dir_t.LV_DIR_TOP, name: "上" },
	{ value: lv_dir_t.LV_DIR_BOTTOM, name: "下" },
]

export const textAlignOptions = [
	{ value: lv_text_align_t.LV_TEXT_ALIGN_CENTER, name: "居中" },
	{ value: lv_text_align_t.LV_TEXT_ALIGN_LEFT, name: "左对齐" },
	{ value: lv_text_align_t.LV_TEXT_ALIGN_RIGHT, name: "右对齐" },
	{ value: lv_text_align_t.LV_TEXT_ALIGN_AUTO, name: "自动" }
]

export const textDecorOpts = [
	{ name: "无装饰", value: lv_text_decor_t.LV_TEXT_DECOR_NONE },
	{ name: "下划线", value: lv_text_decor_t.LV_TEXT_DECOR_UNDERLINE },
	{ name: "删除线", value: lv_text_decor_t.LV_TEXT_DECOR_STRIKETHROUGH },
]
/*
	LV_TEXT_MONITOR_STYLE_NONE=0x00,
	LV_TEXT_MONITOR_STYLE_BG=0x01,
	LV_TEXT_MONITOR_STYLE_HORZ_GRAD=0x02,
	LV_TEXT_MONITOR_STYLE_VERT_GRAD=0x03,
 */

export const textMonitorStyleOptions = [
	{ name: "无样式", value: lv_textmonitor_style_t.LV_TEXT_MONITOR_STYLE_NONE },
	{ name: "背景色", value: lv_textmonitor_style_t.LV_TEXT_MONITOR_STYLE_BG },
	{ name: "横向渐变", value: lv_textmonitor_style_t.LV_TEXT_MONITOR_STYLE_HORZ_GRAD },
	{ name: "纵向渐变", value: lv_textmonitor_style_t.LV_TEXT_MONITOR_STYLE_VERT_GRAD },
];

export const textMonitorDecorOpts = [
	{ name: "无装饰", value: lv_text_decor_t.LV_TEXT_DECOR_NONE },
	{ name: "下划线", value: lv_text_decor_t.LV_TEXT_DECOR_UNDERLINE },
	{ name: "删除线", value: lv_text_decor_t.LV_TEXT_DECOR_STRIKETHROUGH },
]

/**
export enum lv_timemonitor_date_style_t {
	LV_TIME_MONITOR_DATE_STYLE0=0x00,
	LV_TIME_MONITOR_DATE_STYLE1=0x01,
	LV_TIME_MONITOR_DATE_STYLE2=0x02,
	LV_TIME_MONITOR_DATE_STYLE3=0x03,
	LV_TIME_MONITOR_DATE_STYLE4=0x04,
	LV_TIME_MONITOR_DATE_STYLE5=0x05,
	LV_TIME_MONITOR_DATE_STYLE6=0x06,
	LV_TIME_MONITOR_DATE_STYLE7=0x07,
	LV_TIME_MONITOR_DATE_STYLE8=0x08,
};

export enum lv_timemonitor_time_style_t {
	LV_TIME_MONITOR_TIME_STYLE0=0x00,
	LV_TIME_MONITOR_TIME_STYLE1=0x01,
	LV_TIME_MONITOR_TIME_STYLE2=0x02,
	LV_TIME_MONITOR_TIME_STYLE3=0x03,
};
*/

export const timeMonitorDateStyleOpts = [
	{ name: "YYYY/MM/DD", value: lv_timemonitor_date_style_t.LV_TIME_MONITOR_DATE_STYLE0 },
	{ name: "YYYY.MM.DD", value: lv_timemonitor_date_style_t.LV_TIME_MONITOR_DATE_STYLE1 },
	{ name: "YYYY-MM-DD", value: lv_timemonitor_date_style_t.LV_TIME_MONITOR_DATE_STYLE2 },
	{ name: "MM/DD/YYYY", value: lv_timemonitor_date_style_t.LV_TIME_MONITOR_DATE_STYLE3 },
	{ name: "MM.DD.YYYY", value: lv_timemonitor_date_style_t.LV_TIME_MONITOR_DATE_STYLE4 },
	{ name: "MM-DD-YYYY", value: lv_timemonitor_date_style_t.LV_TIME_MONITOR_DATE_STYLE5 },
	{ name: "DD/MM/YYYY", value: lv_timemonitor_date_style_t.LV_TIME_MONITOR_DATE_STYLE6 },
	{ name: "DD.MM.YYYY", value: lv_timemonitor_date_style_t.LV_TIME_MONITOR_DATE_STYLE7 },
	{ name: "DD-MM-YYYY", value: lv_timemonitor_date_style_t.LV_TIME_MONITOR_DATE_STYLE8 },
];

export const timeMonitorTimeStyleOpts = [
	{ name: "HH:MM", value: lv_timemonitor_time_style_t.LV_TIME_MONITOR_TIME_STYLE0 },
	{ name: "HH:MM:SS", value: lv_timemonitor_time_style_t.LV_TIME_MONITOR_TIME_STYLE1 },
	{ name: "HH-MM", value: lv_timemonitor_time_style_t.LV_TIME_MONITOR_TIME_STYLE2 },
	{ name: "HH-MM-SS", value: lv_timemonitor_time_style_t.LV_TIME_MONITOR_TIME_STYLE3 },
];
/*
	LV_ASCIIMONITOR_TYPE_ASCII=0x00,
	LV_ASCIIMONITOR_TYPE_GB2312=0x01,
*/

export const asciiMonitorTypeOpts = [
	{ name: "ASCII", value: lv_asciimonitor_type_t.LV_ASCIIMONITOR_TYPE_ASCII },
	{ name: "GB2312", value: lv_asciimonitor_type_t.LV_ASCIIMONITOR_TYPE_GB2312 },
];


export const numMonitorTypeOpts = [
	{ name: "无类型", value: lv_nummonitor_type_t.LV_NUMMONITOR_TYPE_NONE },
	{ name: "数值类型", value: lv_nummonitor_type_t.LV_NUMMONITOR_TYPE_VALUE },
	{ name: "地址类型", value: lv_nummonitor_type_t.LV_NUMMONITOR_TYPE_ADDR },
];

// gaugePointerTypeOpts, gaugeDisplayDirectionOpts, gaugeShapeOpts
export const gaugeDisplayDirectionOpts = [
	{ name: "顺时针", value: lv_gauge_display_direction_t.LV_GAUGE_DISPLAY_DIR_CLOCKWISE },
	{ name: "逆时针", value: lv_gauge_display_direction_t.LV_GAUGE_DISPLAY_DIR_COUNTERCLOCKWISE },
];
export const gaugeShapeOpts = [
	{ name: "半圆指针左", value: lv_gauge_shape_t.LV_GAUGE_SHAPE1 },
	{ name: "全圆指针上", value: lv_gauge_shape_t.LV_GAUGE_SHAPE2 },
	{ name: "全圆指针右", value: lv_gauge_shape_t.LV_GAUGE_SHAPE3 },
	{ name: "四分之三圆指针左下", value: lv_gauge_shape_t.LV_GAUGE_SHAPE4 },
];
export const gaugePointerTypeOpts = [
	{ name: "细线", value: lv_gauge_pointer_type_t.LV_GAUGE_THIN_LINE },
	{ name: "粗线", value: lv_gauge_pointer_type_t.LV_GAUGE_THICK_LINE },
	{ name: "指针", value: lv_gauge_pointer_type_t.LV_GAUGE_POINTER },
];


export const customBarDirectionOpts = [
	{ name: "正向", value: lv_custombar_direction_t.LV_CUSTOMBAR_FORWARD },
	{ name: "反向", value: lv_custombar_direction_t.LV_CUSTOMBAR_REVERSE },
];
/*
LV_IMAGE_MONITOR_NONE=0x00,
LV_IMAGE_MONITOR_TIME=0x01,
LV_IMAGE_MONITOR_WORD=0x02,
LV_IMAGE_MONITOR_BIT=0x03,
*/
export const imageMonitorTypeOpts = [
	{ name: "NONE", value: lv_imagemonitor_type_t.LV_IMAGE_MONITOR_NONE },
	{ name: "TIME", value: lv_imagemonitor_type_t.LV_IMAGE_MONITOR_TIME },
	{ name: "WORD", value: lv_imagemonitor_type_t.LV_IMAGE_MONITOR_WORD },
	{ name: "BIT", value: lv_imagemonitor_type_t.LV_IMAGE_MONITOR_BIT },
];

export const samplingModeOpts = [
	{ name: "Value", value: sampling_mode_t.LV_DATAGROUP_VALUE_SAMPLING },
	{ name: "Address", value: sampling_mode_t.LV_DATAGROUP_ADDR_SAMPLING },
]
