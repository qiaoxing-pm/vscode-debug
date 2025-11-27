type RegisteredPointer<T extends string> = {
	// name 记录了 这个指针的原始类型（在C语言中）
	name: T
	destructorFunction: unknown
	isConst: boolean
	isReference: boolean
	isSmartPointer: boolean
	pointerType: unknown
	rawConstructor: unknown
	rawDestructor: unknown
	rawGetPointee: unknown
	rawShare: unknown
	registeredClass: unknown
	toWireType: Function
}
type Ctor = {
	constructor: Function,
	value: number
}
type LvglPointer<T extends string> = {
	$$: {
		count: {
			value: number
		}
		ptr: number
		ptrType: RegisteredPointer<T>
	}
	delete(): void
}

type Vector<T extends string, Type> = LvglPointer<`${T}Vector`> & {
	get: (index: number) => Type;
	set: (index: number, value: Type) => void;
	size: () => number;
	push_back: (value: Type) => void;
	pop_back: () => void;
	clear: () => void;
	resize: (newSize: number) => void;
}

type VoidT = LvglPointer<"void*">
type LvObjT = LvglPointer<"lv_obj_t*">
type LvColorT = LvglPointer<"lv_color_t*">
type LvStyleT = LvglPointer<"lv_style_t*">
type LvFontT = LvglPointer<"lv_font_t*">
type LvImgDscT = LvglPointer<"lv_img_dsc_t*">

// hmi
type PermissionT = LvglPointer<'permission_t*'>
type LvButtonStyleT = LvglPointer<'lv_button_style_t*'>


type LvChartAxisT = LvglPointer<'lv_chart_axis_t*'>
type lvChartSeriesT = LvglPointer<'lv_chart_series_t*'>
type LvChartCursorT = LvglPointer<'lv_chart_cursor_t*'>

type LvFunT = LvglPointer<"lv_fun_t*">
type LvAnimT = LvglPointer<"lv_anim_t*">
type LvEventT = LvglPointer<"lv_event_t*">
type LvAnimTimelineT = LvglPointer<"lv_anim_timeline_t*">
type LvCalendarDateT = LvglPointer<"lv_calendar_date_t*"> & {
	day: number,
	month: number,
	year: number,
}

type LvPointPreciseT = LvglPointer<"lv_point_precise_t*"> & {
	x: number
	y: number
}

type LvSpanT = LvglPointer<"lv_span_t*">
type LvSpanGroupT = LvglPointer<"lv_spangroup_t*">

type LvPointT = LvglPointer<"lv_point_t*"> & {
	x: number
	y: number
}
type LvScaleT = LvglPointer<"lv_scale_t*">;
type LvScaleSectionT = LvglPointer<"lv_scale_section_t*">;

// custom pointer types
type MouseT = LvglPointer<"lv_mouse_t*"> & {
	lv_set_mouse_pos(x: number, y: number): void
	lv_set_mouse_state(state: number): void
	lv_set_mouse_pos_state(x: number, y: number, state: number): void
}

type DisplayT = LvglPointer<"lv_display_t*"> & {
	mouse: MouseT
	get_screen(): LvObjT
}

type ImgDscVec = Vector<"LvImgDsc", LvImgDscT>;
type FloatVec = Vector<"Float", number>;
type StringVec = Vector<"String", string>;
type PointVec = Vector<"LvPoint", LvPointT>;
