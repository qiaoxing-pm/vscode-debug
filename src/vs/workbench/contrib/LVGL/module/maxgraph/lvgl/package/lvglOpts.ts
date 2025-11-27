// 这个文件把所有的选项式数据抽离出来
import {
    lv_align_t,
    lv_border_side_t,
    lv_dir_t,
    lv_obj_flag_t,
    lv_scroll_snap_t,
    lv_scrollbar_mode_t,
    lv_text_align_t,
    lv_state_t,
    lv_grad_dir_t,
    lv_slider_mode_t,
    lv_arc_mode_t,
    lv_label_long_mode_t,
    lv_bar_mode_t,
    lv_chart_type_t,
    lv_text_decor_t,
    lv_event_code_t,
} from "./lvglEnums.js";

type OptsType = {
    label: string,
    value: number | string
}

function format(str: string, startIndex = 2, isToLower: boolean = false) {
    const arr = str.split('_').slice(startIndex)
    // debugger
    if (arr) {
        let s = ""
        arr.forEach(e => {
            s += e + " "
        });
        s = s.trimEnd()
        if (isToLower) {
            s = s.toLowerCase().replace('flag ', '')
        }
        return s
    }
    return " "
}

function enumToOpts(enumObj: any, startIndex = 2, isToLower = false): OptsType[] {
    const opts: OptsType[] = [];
    for (const key in enumObj) {
        if (Object.prototype.hasOwnProperty.call(enumObj, key)) {
            if (isNaN(Number(enumObj[key]))) continue
            const label = format(key, startIndex, isToLower);
            const element = enumObj[key];
            opts.push({
                label,
                value: element
            });
        }
    }
    return opts;
}

const _lvAlignOpts = enumToOpts(lv_align_t);
export const LvAlignOpts = _lvAlignOpts;

const _lvDirOpts = enumToOpts(lv_dir_t);
export const LvDirOpts = _lvDirOpts;

const _lvFlags = enumToOpts(lv_obj_flag_t, 3, true)
export const LvFlags = _lvFlags;

const _lvScrollbarMode = enumToOpts(lv_scrollbar_mode_t, 3);
export const LvScrollbarMode = _lvScrollbarMode;

const _lvScrollSnap = enumToOpts(lv_scroll_snap_t);
export const LvScrollSnapOpts = _lvScrollSnap;

const _lvBorderSide = enumToOpts(lv_border_side_t)
export const LvBorderSideOpts = _lvBorderSide

const _lvTextAlign = enumToOpts(lv_text_align_t, 3);
export const LvTextAlignOpts = _lvTextAlign;

const _lvState = enumToOpts(lv_state_t, 2, true)
export const LvStateOpts = _lvState

const _lvGradDir = enumToOpts(lv_grad_dir_t, 3, true)
export const LvGradDirOpts = _lvGradDir

export const StateOpts = [
    {
        label: "DEFAULT",
        value: 0x0000
    },
    {
        label: "CHECKED",
        value: lv_state_t.LV_STATE_CHECKED
    },
    {
        label: "FOCUSED",
        value: lv_state_t.LV_STATE_FOCUSED
    },
    {
        label: "FOCUS_KEY",
        value: lv_state_t.LV_STATE_FOCUS_KEY
    },
    {
        label: "PRESSED",
        value: lv_state_t.LV_STATE_PRESSED
    },
    {
        label: "DISABLE",
        value: lv_state_t.LV_STATE_DISABLED
    },
    {
        label: "SCROLLED",
        value: lv_state_t.LV_STATE_SCROLLED
    },
    {
        label: "CHECKED | FOCUSED",
        value: lv_state_t.LV_STATE_CHECKED | lv_state_t.LV_STATE_FOCUSED
    },
    {
        label: "CHECKED | PRESSED",
        value: lv_state_t.LV_STATE_CHECKED | lv_state_t.LV_STATE_PRESSED
    },
    {
        label: "CHECKED | FOCUS_KEY",
        value: lv_state_t.LV_STATE_CHECKED | lv_state_t.LV_STATE_FOCUS_KEY
    },
    {
        label: "USER_1",
        value: lv_state_t.LV_STATE_USER_1
    },
    {
        label: "USER_2",
        value: lv_state_t.LV_STATE_USER_2
    },
    {
        label: "USER_3",
        value: lv_state_t.LV_STATE_USER_3
    },
    {
        label: "USER_4",
        value: lv_state_t.LV_STATE_USER_4
    },
]

const __StateOpts = StateOpts.map(opt => {
    return {
        label: opt.label,
        value: opt.label
    }
})
export const stateOpts = __StateOpts

const _sliderState: Map<string, number> = (() => {
        return new Map(StateOpts.map(e => [e.label, e.value]))
    })()
export const SliderState = _sliderState

const _sliderMode = enumToOpts(lv_slider_mode_t, 3, true)
export const SliderModeOpts = _sliderMode

const _arcMode = enumToOpts(lv_arc_mode_t, 3, true)
export const ArcModeOpts = _arcMode

enum lv_common_flags {
    LV_OBJ_FLAG_HIDDEN = (1 << 0), /**< Make the object hidden. (Like it wasn't there at all)*/
    LV_OBJ_FLAG_CLICKABLE = (1 << 1), /**< Make the object clickable by the input devices*/
    LV_OBJ_FLAG_CLICK_FOCUSABLE = (1 << 2), /**< Add focused state to the object when clicked*/
    LV_OBJ_FLAG_CHECKABLE = (1 << 3), /**< Toggle checked state when the object is clicked*/

    LV_OBJ_FLAG_PRESS_LOCK =
        (1 << 11), /**< Keep the object pressed even if the press slid from the object*/

    LV_OBJ_FLAG_EVENT_BUBBLE = (1 << 12), /**< Propagate the events to the parent too*/
    LV_OBJ_FLAG_GESTURE_BUBBLE = (1 << 13), /**< Propagate the gestures to the parent*/
    LV_OBJ_FLAG_ADV_HITTEST = (1 << 14), /**< Allow performing more accurate hit (click) iconfont.
     E.g. consider rounded corners.*/
    LV_OBJ_FLAG_IGNORE_LAYOUT = (1 << 15), /**< Make the object position-able by the layouts*/
    LV_OBJ_FLAG_FLOATING =
        (1 << 16), /**< Do not scroll the object when the parent scrolls and ignore layout*/
    LV_OBJ_FLAG_SNAPABLE =
        (1 << 10), /**< If scroll snap is enabled on the parent it can snap to this object*/

    LV_OBJ_FLAG_SCROLLABLE = (1 << 4), /**< Make the object scrollable*/
    LV_OBJ_FLAG_SCROLL_ELASTIC = (1 << 5), /**< Allow scrolling inside but with slower speed*/
    LV_OBJ_FLAG_SCROLL_MOMENTUM = (1 << 6), /**< Make the object scroll further when "thrown"*/
    LV_OBJ_FLAG_SCROLL_ONE = (1 << 7), /**< Allow scrolling only one snapable children*/
    LV_OBJ_FLAG_SCROLL_CHAIN = (1 << 8), /**< Allow propagating the scroll to a parent*/
    LV_OBJ_FLAG_SCROLL_ON_FOCUS =
        (1 << 9), /**< Automatically scroll object to make it visible when focused*/
}
const _commonFlag = enumToOpts(lv_common_flags, 3, true)
export const CommonFlagOpts = _commonFlag
const _labelLongMode = enumToOpts(lv_label_long_mode_t)
export const LabelLongModeOpts = _labelLongMode

const _barMode = enumToOpts(lv_bar_mode_t, 3, true)
export const LvBarModeOpts = _barMode

export const LvDropdownDirOpts = [
    {
        label: "LEFT",
        value: 1 << 0
    },{
        label: "RIGHT",
        value: 1 << 1
    },{
        label: "TOP",
        value: 1 << 2
    },{
        label: "BOTTOM",
        value: 1 << 4
    }
]
const _lvChartType = enumToOpts(lv_chart_type_t, 3, true)
export const LvChartTypeOpts = _lvChartType

const _lvTextDecor = enumToOpts(lv_text_decor_t, 3, true)
export const LvTextDecorOpts = _lvTextDecor

const _lvEventCode = enumToOpts(lv_event_code_t, 2, true);
export const LvEventCodeOpts = _lvEventCode

const _inputEventCode = enumToOpts(lv_event_code_t, 0, true);
export const LvInputEventCodeOpts = _inputEventCode;
