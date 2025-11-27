import {
	CellState,
	Geometry,
} from "../../../../../packages/core/src/index.js"
import { LV_Obj, LvglBase } from "../../lvglBase.js";
import { Module, hexStrToLvColor } from "../../../LvglModule.js";
import { lv_pipe_shape_t } from "../../../../package/lvglEnums.js";

export class LV_Pipe extends LV_Obj {

	_width: number = 50;
	_height: number = 100;
	_radius: number = 50;
	_startColor: string = "#000000";
	_endColor: string = "#ffffff";
	_pipeShape: lv_pipe_shape_t = lv_pipe_shape_t.LV_PIPE_SHAPE_LINE;
	_start: boolean = false;
	_stop: boolean = true;
	_flowSpeed: number = 10; // 0~100
	_flowRate: number = 1; // 1~10
	_offset: number = 0;

	state: CellState;

	constructor(name: string, lvobj: LvObjT, state: CellState) {
		super(name, lvobj);
		this.state = state;
		Module.lv_pipe_add_inlet(this.lvObj, 1);

		this.flowRate = 10;
	}

	get width() {
		return this._width;
	}
	set width(w: number) {
		this._width = w;
		Module.lv_pipe_set_width(this.lvObj, w);
	}

	get height() {
		return this._height;
	}
	set height(h: number) {
		this._height = h;
		Module.lv_pipe_set_height(this.lvObj, h);
	}

	get radius() {
		return this._radius;
	}
	set radius(r: number) {
		this._radius = r;
		Module.lv_pipe_set_radius(this.lvObj, r);
	}

	get start() {
		return this._start;
	}
	set start(s: boolean) {
		this._start = s;
		this._stop = !s;
		if (s) {
			Module.lv_pipe_start_flow(this.lvObj);
		} else {
			Module.lv_pipe_stop_flow(this.lvObj);
		}
	}

	get stop() {
		return this._stop;
	}
	set stop(s: boolean) {
		this._stop = s;
		this._start = !s;
		Module.lv_pipe_stop_flow(this.lvObj);
	}

	get flowSpeed() {
		return this._flowSpeed;
	}
	set flowSpeed(fs: number) {
		this._flowSpeed = fs;
		Module.lv_pipe_set_flow_speed(this.lvObj, fs);
	}

	get flowRate() {
		return this._flowRate;
	}
	set flowRate(fr: number) {
		this._flowRate = fr;
		Module.lv_pipe_set_flow_rate(this.lvObj, fr);
	}
	get startColor() {
		return this._startColor;
	}
	set startColor(c: string) {
		this._startColor = c;
		const color = hexStrToLvColor(this._startColor);
		const endColor = hexStrToLvColor(this._endColor);
		Module.lv_pipe_set_color(this.lvObj, color, endColor);
		color.delete();
		endColor.delete();
	}

	get endColor() {
		return this._endColor;
	}
	set endColor(c: string) {
		this._endColor = c;
		const color = hexStrToLvColor(this._startColor);
		const endColor = hexStrToLvColor(this._endColor);
		Module.lv_pipe_set_color(this.lvObj, color, endColor);
		color.delete();
		endColor.delete();
	}

	get offset() {
		return this._offset;
	}
	set offset(o: number) {
		this._offset = o;
		Module.lv_pipe_set_flow_offset(this.lvObj, o);
	}

	get pipeShape() {
		return this._pipeShape;
	}
	set pipeShape(shape: lv_pipe_shape_t) {
		this._pipeShape = shape;
		Module.lv_pipe_set_shape_type(this.lvObj, shape);
	}

	override updateWidget(geo?: Geometry): void {
		if (!geo) return;
		const { x, y, width, height } = geo;

	}

}

export class LVGL_Pipe extends LvglBase {

	override Type = "Pipe";


	override lvglCreate(parent: LvObjT): void {
		this._lvglObj = Module.lv_pipe_create(parent);
		this._widget = new LV_Pipe("Pipe", this._lvglObj, this.State!);
	}

	override setLvglGeo(geo: Geometry) {
		if (!this._lvglObj || !this.State) return;
		this._layout?.update(this.State, geo.x, geo.y, geo.width, geo.height);
		this._widget?.updateWidget(geo);
	}
}
