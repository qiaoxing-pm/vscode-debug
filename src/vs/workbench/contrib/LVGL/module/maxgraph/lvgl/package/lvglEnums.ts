// import {Module} from "@lvgl/LvglModule.ts";
// const LvAlignT = Module.lv_align_t


export enum lv_align_t {
    LV_ALIGN_DEFAULT = 0,
    LV_ALIGN_TOP_LEFT,
    LV_ALIGN_TOP_MID,
    LV_ALIGN_TOP_RIGHT,
    LV_ALIGN_BOTTOM_LEFT,
    LV_ALIGN_BOTTOM_MID,
    LV_ALIGN_BOTTOM_RIGHT,
    LV_ALIGN_LEFT_MID,
    LV_ALIGN_RIGHT_MID,
    LV_ALIGN_CENTER = 9,

    LV_ALIGN_OUT_TOP_LEFT,
    LV_ALIGN_OUT_TOP_MID,
    LV_ALIGN_OUT_TOP_RIGHT,
    LV_ALIGN_OUT_BOTTOM_LEFT,
    LV_ALIGN_OUT_BOTTOM_MID,
    LV_ALIGN_OUT_BOTTOM_RIGHT,
    LV_ALIGN_OUT_LEFT_TOP,
    LV_ALIGN_OUT_LEFT_MID,
    LV_ALIGN_OUT_LEFT_BOTTOM,
    LV_ALIGN_OUT_RIGHT_TOP,
    LV_ALIGN_OUT_RIGHT_MID,
    LV_ALIGN_OUT_RIGHT_BOTTOM,
}


export enum lv_opa_t {
    LV_OPA_TRANSP = 0,
    LV_OPA_0 = 0,
    LV_OPA_10 = 25,
    LV_OPA_20 = 51,
    LV_OPA_30 = 76,
    LV_OPA_40 = 102,
    LV_OPA_50 = 127,
    LV_OPA_60 = 153,
    LV_OPA_70 = 178,
    LV_OPA_80 = 204,
    LV_OPA_90 = 229,
    LV_OPA_100 = 255,
    LV_OPA_COVER = 255,
};
export enum lv_part_t {
    LV_PART_MAIN = 0x000000, /**< A background like rectangle*/
    LV_PART_SCROLLBAR = 0x010000, /**< The scrollbar(s)*/
    LV_PART_INDICATOR = 0x020000, /**< Indicator, e.g. for slider, bar, switch, or the tick box
     of the checkbox*/
    LV_PART_KNOB = 0x030000, /**< Like handle to grab to adjust the value*/
    LV_PART_SELECTED = 0x040000, /**< Indicate the currently selected option or section*/
    LV_PART_ITEMS =
    0x050000, /**< Used if the widget has multiple similar elements (e.g. tabel cells)*/
    LV_PART_TICKS = 0x060000, /**< Ticks on scale e.g. for a chart or meter*/
    LV_PART_CURSOR =
    0x070000, /**< Mark a specific place e.g. for text area's cursor or on a chart*/

    LV_PART_CUSTOM_FIRST = 0x080000, /**< Extension point for custom widgets*/

    LV_PART_ANY = 0x0F0000, /**< Special value can be used in some functions to target all parts*/
};
export enum lv_obj_flag_t {
    LV_OBJ_FLAG_HIDDEN          = (1 << 0),  /**< Make the object hidden. (Like it wasn't there at all)*/
    LV_OBJ_FLAG_CLICKABLE       = (1 << 1),  /**< Make the object clickable by the input devices*/
    LV_OBJ_FLAG_CLICK_FOCUSABLE = (1 << 2),  /**< Add focused state to the object when clicked*/
    LV_OBJ_FLAG_CHECKABLE       = (1 << 3),  /**< Toggle checked state when the object is clicked*/
    LV_OBJ_FLAG_SCROLLABLE      = (1 << 4),  /**< Make the object scrollable*/
    LV_OBJ_FLAG_SCROLL_ELASTIC  = (1 << 5),  /**< Allow scrolling inside but with slower speed*/
    LV_OBJ_FLAG_SCROLL_MOMENTUM = (1 << 6),  /**< Make the object scroll further when "thrown"*/
    LV_OBJ_FLAG_SCROLL_ONE      = (1 << 7),  /**< Allow scrolling only one snappable children*/
    LV_OBJ_FLAG_SCROLL_CHAIN_HOR = (1 << 8), /**< Allow propagating the horizontal scroll to a parent*/
    LV_OBJ_FLAG_SCROLL_CHAIN_VER = (1 << 9), /**< Allow propagating the vertical scroll to a parent*/
    LV_OBJ_FLAG_SCROLL_CHAIN     = (LV_OBJ_FLAG_SCROLL_CHAIN_HOR | LV_OBJ_FLAG_SCROLL_CHAIN_VER),
    LV_OBJ_FLAG_SCROLL_ON_FOCUS = (1 << 10),  /**< Automatically scroll object to make it visible when focused*/
    LV_OBJ_FLAG_SCROLL_WITH_ARROW  = (1 << 11), /**< Allow scrolling the focused object with arrow keys*/
    LV_OBJ_FLAG_SNAPPABLE       = (1 << 12), /**< If scroll snap is enabled on the parent it can snap to this object*/
    LV_OBJ_FLAG_PRESS_LOCK      = (1 << 13), /**< Keep the object pressed even if the press slid from the object*/
    LV_OBJ_FLAG_EVENT_BUBBLE    = (1 << 14), /**< Propagate the events to the parent too*/
    LV_OBJ_FLAG_GESTURE_BUBBLE  = (1 << 15), /**< Propagate the gestures to the parent*/
    LV_OBJ_FLAG_ADV_HITTEST     = (1 << 16), /**< Allow performing more accurate hit (click) test. E.g. consider rounded corners.*/
    LV_OBJ_FLAG_IGNORE_LAYOUT   = (1 << 17), /**< Make the object position-able by the layouts*/
    LV_OBJ_FLAG_FLOATING        = (1 << 18), /**< Do not scroll the object when the parent scrolls and ignore layout*/
    LV_OBJ_FLAG_SEND_DRAW_TASK_EVENTS = (1 << 19), /**< Send `LV_EVENT_DRAW_TASK_ADDED` events*/
    LV_OBJ_FLAG_OVERFLOW_VISIBLE = (1 << 20),/**< Do not clip the children to the parent's ext draw size*/

    LV_OBJ_FLAG_LAYOUT_1        = (1 << 23), /**< Custom flag, free to use by layouts*/
    LV_OBJ_FLAG_LAYOUT_2        = (1 << 24), /**< Custom flag, free to use by layouts*/

    LV_OBJ_FLAG_WIDGET_1        = (1 << 25), /**< Custom flag, free to use by widget*/
    LV_OBJ_FLAG_WIDGET_2        = (1 << 26), /**< Custom flag, free to use by widget*/
    LV_OBJ_FLAG_USER_1          = (1 << 27), /**< Custom flag, free to use by user*/
    LV_OBJ_FLAG_USER_2          = (1 << 28), /**< Custom flag, free to use by user*/
    LV_OBJ_FLAG_USER_3          = (1 << 29), /**< Custom flag, free to use by user*/
    LV_OBJ_FLAG_USER_4          = (1 << 30), /**< Custom flag, free to use by user*/
};

export enum lv_scrollbar_mode_t {
    LV_SCROLLBAR_MODE_OFF, /**< Never show scrollbars*/
    LV_SCROLLBAR_MODE_ON, /**< Always show scrollbars*/
    LV_SCROLLBAR_MODE_ACTIVE, /**< Show scroll bars when object is being scrolled*/
    LV_SCROLLBAR_MODE_AUTO, /**< Show scroll bars when the content is large enough to be
     scrolled*/
};

export enum lv_scroll_snap_t {
    LV_SCROLL_SNAP_NONE, /**< Do not align, leave where it is*/
    LV_SCROLL_SNAP_START, /**< Align to to the left/top*/
    LV_SCROLL_SNAP_END, /**< Align to to the right/bottom*/
    LV_SCROLL_SNAP_CENTER /**< Align to to the center*/
};

export enum lv_border_side_t {
    LV_BORDER_SIDE_NONE = 0x00,
    LV_BORDER_SIDE_BOTTOM = 0x01,
    LV_BORDER_SIDE_TOP = 0x02,
    LV_BORDER_SIDE_LEFT = 0x04,
    LV_BORDER_SIDE_RIGHT = 0x08,
    LV_BORDER_SIDE_FULL = 0x0F,
    LV_BORDER_SIDE_INTERNAL = 0x10, /**< FOR matrix-like objects (e.g. Button matrix)*/
};

export enum lv_text_align_t {
    LV_TEXT_ALIGN_AUTO, /**< Align text auto*/
    LV_TEXT_ALIGN_LEFT, /**< Align text to left*/
    LV_TEXT_ALIGN_CENTER, /**< Align text to center*/
    LV_TEXT_ALIGN_RIGHT, /**< Align text to right*/
};



export enum lv_state_t {
    // LV_STATE_DEFAULT = 0x0000,
    LV_STATE_CHECKED = 0x0001,
    LV_STATE_FOCUSED = 0x0002,
    LV_STATE_FOCUS_KEY = 0x0004,
    LV_STATE_EDITED = 0x0008,
    LV_STATE_HOVERED = 0x0010,
    LV_STATE_PRESSED = 0x0020,
    LV_STATE_SCROLLED = 0x0040,
    LV_STATE_DISABLED = 0x0080,

    LV_STATE_USER_1 = 0x1000,
    LV_STATE_USER_2 = 0x2000,
    LV_STATE_USER_3 = 0x4000,
    LV_STATE_USER_4 = 0x8000,

    LV_STATE_ANY = 0xFFFF, /**< Special value can be used in some functions to target all states*/
};

export enum lv_grad_dir_t {
    LV_GRAD_DIR_NONE, /**< No gradient (the `grad_color` property is ignored)*/
    LV_GRAD_DIR_VER, /**< Vertical (top to bottom) gradient*/
    LV_GRAD_DIR_HOR, /**< Horizontal (left to right) gradient*/
};



export enum lv_anim_enable_t {
    LV_ANIM_OFF,
    LV_ANIM_ON
}

export enum lv_roller_mode_t {
    LV_ROLLER_MODE_NORMAL, /**< Normal mode (roller ends at the end of the options).*/
    LV_ROLLER_MODE_INFINITE, /**< Infinite mode (roller can be scrolled forever).*/
};

export enum lv_chart_type_t {
    LV_CHART_TYPE_NONE, /**< Don't draw the series*/
    LV_CHART_TYPE_LINE, /**< Connect the points with lines*/
    LV_CHART_TYPE_BAR, /**< Draw columns*/
    LV_CHART_TYPE_SCATTER, /**< Draw points and lines in 2D (x,y coordinates)*/
}

export enum lv_chart_update_mode_t {
    LV_CHART_UPDATE_MODE_SHIFT, /**< Shift old data to the left and add the new one the right*/
    LV_CHART_UPDATE_MODE_CIRCULAR, /**< Add the new data in a circular way*/
}

export enum lv_chart_axis_t {
    LV_CHART_AXIS_PRIMARY_Y = 0x00,
    LV_CHART_AXIS_SECONDARY_Y = 0x01,
    LV_CHART_AXIS_PRIMARY_X = 0x02,
    LV_CHART_AXIS_SECONDARY_X = 0x04,
    _LV_CHART_AXIS_LAST
};
export enum lv_key_t {
    LV_KEY_UP = 17, /*0x11*/
    LV_KEY_DOWN = 18, /*0x12*/
    LV_KEY_RIGHT = 19, /*0x13*/
    LV_KEY_LEFT = 20, /*0x14*/
    LV_KEY_ESC = 27, /*0x1B*/
    LV_KEY_DEL = 127, /*0x7F*/
    LV_KEY_BACKSPACE = 8, /*0x08*/
    LV_KEY_ENTER = 10, /*0x0A, '\n'*/
    LV_KEY_NEXT = 9, /*0x09, '\t'*/
    LV_KEY_PREV = 11, /*0x0B, '*/
    LV_KEY_HOME = 2, /*0x02, STX*/
    LV_KEY_END = 3, /*0x03, ETX*/
};
export enum lv_keyboard_mode_t {
    LV_KEYBOARD_MODE_TEXT_LOWER,
    LV_KEYBOARD_MODE_TEXT_UPPER,
    LV_KEYBOARD_MODE_SPECIAL,
    LV_KEYBOARD_MODE_NUMBER,
};
export enum lv_bar_mode_t {
    LV_BAR_MODE_NORMAL,
    LV_BAR_MODE_SYMMETRICAL,
    LV_BAR_MODE_RANGE
};
export enum lv_slider_mode_t {
    LV_SLIDER_MODE_NORMAL = 0,
    LV_SLIDER_MODE_SYMMETRICAL,
    LV_SLIDER_MODE_RANGE
};

export enum lv_arc_mode_t {
    LV_ARC_MODE_NORMAL,
    LV_ARC_MODE_SYMMETRICAL,
    LV_ARC_MODE_REVERSE
};
export enum lv_label_long_mode_t {
    LV_LABEL_LONG_WRAP, /**< Keep the object width, wrap the too long lines and expand the
    LV_LABEL_LONG_DOT, /**< Keep the size and write dots at the end if the text is too long*/
    LV_LABEL_LONG_SCROLL, /**< Keep the size and roll the text back and forth*/
    LV_LABEL_LONG_SCROLL_CIRCULAR, /**< Keep the size and roll the text circularly*/
    LV_LABEL_LONG_CLIP, /**< Keep the size and clip the text out of it*/
};
export enum lv_dir_t {
    LV_DIR_NONE = 0x00,
    LV_DIR_LEFT = (1 << 0),
    LV_DIR_RIGHT = (1 << 1),
    LV_DIR_TOP = (1 << 2),
    LV_DIR_BOTTOM = (1 << 3),
    LV_DIR_HOR = LV_DIR_LEFT | LV_DIR_RIGHT,
    LV_DIR_VER = LV_DIR_TOP | LV_DIR_BOTTOM,
    LV_DIR_ALL = LV_DIR_HOR | LV_DIR_VER,
}

export enum lv_text_decor_t {
    LV_TEXT_DECOR_NONE = 0x00,
    LV_TEXT_DECOR_UNDERLINE = 0x01,
    LV_TEXT_DECOR_STRIKETHROUGH = 0x02,
};




export enum lv_event_code_t {
    LV_EVENT_ALL = 0,
    /** Input device events*/
    LV_EVENT_PRESSED,             /**< The object has been pressed*/
    LV_EVENT_PRESSING,            /**< The object is being pressed (called continuously while pressing)*/
    LV_EVENT_PRESS_LOST,          /**< The object is still being pressed but slid cursor/finger off of the object */
    LV_EVENT_SHORT_CLICKED,       /**< The object was pressed for a short period of time, then released it. Not called if scrolled.*/
    LV_EVENT_LONG_PRESSED,        /**< Object has been pressed for at least `long_press_time`.  Not called if scrolled.*/
    LV_EVENT_LONG_PRESSED_REPEAT, /**< Called after `long_press_time` in every `long_press_repeat_time` ms.  Not called if scrolled.*/
    LV_EVENT_CLICKED,             /**< Called on release if not scrolled (regardless to long press)*/
    LV_EVENT_RELEASED,            /**< Called in every cases when the object has been released*/
    LV_EVENT_SCROLL_BEGIN,        /**< Scrolling begins. The event parameter is a pointer to the animation of the scroll. Can be modified*/
    LV_EVENT_SCROLL_THROW_BEGIN,
    LV_EVENT_SCROLL_END,          /**< Scrolling ends*/
    LV_EVENT_SCROLL,              /**< Scrolling*/
    LV_EVENT_GESTURE,             /**< A gesture is detected. Get the gesture with `lv_indev_get_gesture_dir(lv_indev_active());` */
    LV_EVENT_KEY,                 /**< A key is sent to the object. Get the key with `lv_indev_get_key(lv_indev_active());`*/
    LV_EVENT_FOCUSED,             /**< The object is focused*/
    LV_EVENT_DEFOCUSED,           /**< The object is defocused*/
    LV_EVENT_LEAVE,               /**< The object is defocused but still selected*/
    LV_EVENT_HIT_TEST,            /**< Perform advanced hit-testing*/
    LV_EVENT_INDEV_RESET,         /**< Indev has been reset*/

    /** Drawing events*/
    LV_EVENT_COVER_CHECK,        /**< Check if the object fully covers an area. The event parameter is `lv_cover_check_info_t *`.*/
    LV_EVENT_REFR_EXT_DRAW_SIZE, /**< Get the required extra draw area around the object (e.g. for shadow). The event parameter is `int32_t *` to store the size.*/
    LV_EVENT_DRAW_MAIN_BEGIN,    /**< Starting the main drawing phase*/
    LV_EVENT_DRAW_MAIN,          /**< Perform the main drawing*/
    LV_EVENT_DRAW_MAIN_END,      /**< Finishing the main drawing phase*/
    LV_EVENT_DRAW_POST_BEGIN,    /**< Starting the post draw phase (when all children are drawn)*/
    LV_EVENT_DRAW_POST,          /**< Perform the post draw phase (when all children are drawn)*/
    LV_EVENT_DRAW_POST_END,      /**< Finishing the post draw phase (when all children are drawn)*/
    LV_EVENT_DRAW_TASK_ADDED,      /**< Adding a draw task */

    /** Special events*/
    LV_EVENT_VALUE_CHANGED,       /**< The object's value has changed (i.e. slider moved)*/
    LV_EVENT_INSERT,              /**< A text is inserted to the object. The event data is `char *` being inserted.*/
    LV_EVENT_REFRESH,             /**< Notify the object to refresh something on it (for the user)*/
    LV_EVENT_READY,               /**< A process has finished*/
    LV_EVENT_CANCEL,              /**< A process has been cancelled */

    /** Other events*/
    LV_EVENT_CREATE,              /**< Object is being created*/
    LV_EVENT_DELETE,              /**< Object is being deleted*/
    LV_EVENT_CHILD_CHANGED,       /**< Child was removed, added, or its size, position were changed */
    LV_EVENT_CHILD_CREATED,       /**< Child was created, always bubbles up to all parents*/
    LV_EVENT_CHILD_DELETED,       /**< Child was deleted, always bubbles up to all parents*/
    LV_EVENT_SCREEN_UNLOAD_START, /**< A screen unload started, fired immediately when scr_load is called*/
    LV_EVENT_SCREEN_LOAD_START,   /**< A screen load started, fired when the screen change delay is expired*/
    LV_EVENT_SCREEN_LOADED,       /**< A screen was loaded*/
    LV_EVENT_SCREEN_UNLOADED,     /**< A screen was unloaded*/
    LV_EVENT_SIZE_CHANGED,        /**< Object coordinates/size have changed*/
    LV_EVENT_STYLE_CHANGED,       /**< Object's style has changed*/
    LV_EVENT_LAYOUT_CHANGED,      /**< The children position has changed due to a layout recalculation*/
    LV_EVENT_GET_SELF_SIZE,       /**< Get the internal size of a widget*/

    /** Events of optional LVGL components*/
    LV_EVENT_INVALIDATE_AREA,
    LV_EVENT_RESOLUTION_CHANGED,
    LV_EVENT_COLOR_FORMAT_CHANGED,
    LV_EVENT_REFR_REQUEST,
    LV_EVENT_REFR_START,
    LV_EVENT_REFR_READY,
    LV_EVENT_RENDER_START,
    LV_EVENT_RENDER_READY,
    LV_EVENT_FLUSH_START,
    LV_EVENT_FLUSH_FINISH,

    LV_EVENT_VSYNC,

    _LV_EVENT_LAST,                 /** Number of default events*/

    LV_EVENT_PREPROCESS = 0x8000,   /** This is a flag that can be set with an event so it's processed
                                      before the class default event processing */
}


export enum lv_buttonmatrix_ctrl_t {
    _LV_BUTTONMATRIX_WIDTH = 0x000F, /**< Reserved to store the size units*/
    LV_BUTTONMATRIX_CTRL_HIDDEN = 0x0010, /**< Button hidden*/
    LV_BUTTONMATRIX_CTRL_NO_REPEAT = 0x0020, /**< Do not repeat press this button.*/
    LV_BUTTONMATRIX_CTRL_DISABLED = 0x0040, /**< Disable this button.*/
    LV_BUTTONMATRIX_CTRL_CHECKABLE = 0x0080, /**< The button can be toggled.*/
    LV_BUTTONMATRIX_CTRL_CHECKED = 0x0100, /**< Button is currently toggled (e.g. checked).*/
    LV_BUTTONMATRIX_CTRL_CLICK_TRIG = 0x0200, /**< 1: Send LV_EVENT_VALUE_CHANGE on CLICK, 0: Send LV_EVENT_VALUE_CHANGE on PRESS*/
    LV_BUTTONMATRIX_CTRL_POPOVER = 0x0400, /**< Show a popover when pressing this key*/
    _LV_BUTTONMATRIX_CTRL_RESERVED_1 = 0x0800, /**< Reserved for later use*/
    _LV_BUTTONMATRIX_CTRL_RESERVED_2 = 0x1000, /**< Reserved for later use*/
    _LV_BUTTONMATRIX_CTRL_RESERVED_3 = 0x2000, /**< Reserved for later use*/
    LV_BUTTONMATRIX_CTRL_CUSTOM_1 = 0x4000, /**< Custom free to use flag*/
    LV_BUTTONMATRIX_CTRL_CUSTOM_2 = 0x8000, /**< Custom free to use flag*/
};
export enum lv_table_cell_ctrl_t {
    LV_TABLE_CELL_CTRL_MERGE_RIGHT = 1 << 0,
    LV_TABLE_CELL_CTRL_TEXT_CROP = 1 << 1,
    LV_TABLE_CELL_CTRL_CUSTOM_1 = 1 << 4,
    LV_TABLE_CELL_CTRL_CUSTOM_2 = 1 << 5,
    LV_TABLE_CELL_CTRL_CUSTOM_3 = 1 << 6,
    LV_TABLE_CELL_CTRL_CUSTOM_4 = 1 << 7,
}

export enum lv_menu_mode_header_t {
    LV_MENU_HEADER_TOP_FIXED, /* Header is positioned at the top */
    LV_MENU_HEADER_TOP_UNFIXED, /* Header is positioned at the top and can be scrolled out of view*/
    LV_MENU_HEADER_BOTTOM_FIXED /* Header is positioned at the bottom */
};

export enum lv_menu_mode_root_back_button_t {
    LV_MENU_ROOT_BACK_BUTTON_DISABLED,
    LV_MENU_ROOT_BACK_BUTTON_ENABLED
};

export enum lv_span_overflow_t {
    LV_SPAN_OVERFLOW_CLIP,
    LV_SPAN_OVERFLOW_ELLIPSIS,
};

export enum lv_span_mode_t {
    LV_SPAN_MODE_FIXED, /**< fixed the obj size*/
    LV_SPAN_MODE_EXPAND, /**< Expand the object size to the text size*/
    LV_SPAN_MODE_BREAK, /**< Keep width, break the too long lines and expand height*/
};

export enum lv_imagebutton_state_t{
    LV_IMAGEBUTTON_STATE_RELEASED,
    LV_IMAGEBUTTON_STATE_PRESSED,
    LV_IMAGEBUTTON_STATE_DISABLED,
    LV_IMAGEBUTTON_STATE_CHECKED_RELEASED,
    LV_IMAGEBUTTON_STATE_CHECKED_PRESSED,
    LV_IMAGEBUTTON_STATE_CHECKED_DISABLED,
    _LV_IMAGEBUTTON_STATE_NUM,
};
export enum lv_scale_mode_t {
    LV_SCALE_MODE_HORIZONTAL_TOP    = 0x00,
    LV_SCALE_MODE_HORIZONTAL_BOTTOM = 0x01,
    LV_SCALE_MODE_VERTICAL_LEFT     = 0x02,
    LV_SCALE_MODE_VERTICAL_RIGHT    = 0x04,
    LV_SCALE_MODE_ROUND_INNER       = 0x08,
    LV_SCALE_MODE_ROUND_OUTER      = 0x10,
    _LV_SCALE_MODE_LAST
}

export enum lv_blend_mode_t {
    LV_BLEND_MODE_NORMAL,     /**< Simply mix according to the opacity value*/
    LV_BLEND_MODE_ADDITIVE,   /**< Add the respective color channels*/
    LV_BLEND_MODE_SUBTRACTIVE,/**< Subtract the foreground from the background*/
    LV_BLEND_MODE_MULTIPLY,   /**< Multiply the foreground and background*/
};

export enum lv_image_align_t {
    LV_IMAGE_ALIGN_DEFAULT = 0,
    LV_IMAGE_ALIGN_TOP_LEFT,
    LV_IMAGE_ALIGN_TOP_MID,
    LV_IMAGE_ALIGN_TOP_RIGHT,
    LV_IMAGE_ALIGN_BOTTOM_LEFT,
    LV_IMAGE_ALIGN_BOTTOM_MID,
    LV_IMAGE_ALIGN_BOTTOM_RIGHT,
    LV_IMAGE_ALIGN_LEFT_MID,
    LV_IMAGE_ALIGN_RIGHT_MID,
    LV_IMAGE_ALIGN_CENTER,
    _LV_IMAGE_ALIGN_AUTO_TRANSFORM,
    LV_IMAGE_ALIGN_STRETCH,
    LV_IMAGE_ALIGN_TILE,
};

/* 管道形状枚举 */
export enum lv_pipe_shape_t{
    LV_PIPE_SHAPE_LINE,
    LV_PIPE_SHAPE_ROUND,
    LV_PIPE_SHAPE_T_SHAPE,
    LV_PIPE_SHAPE_CROSS
};

export enum lv_pipe_port_t {
    LV_PIPE_PORT_NONE  = 0x00,   // 无
    LV_PIPE_PORT_LEFT  = 0x01,   // 左口
    LV_PIPE_PORT_RIGHT = 0x02,   // 右口
    LV_PIPE_PORT_DOWN   = 0x04,   // 上口
    LV_PIPE_PORT_UP= 0x08,   // 下口
};