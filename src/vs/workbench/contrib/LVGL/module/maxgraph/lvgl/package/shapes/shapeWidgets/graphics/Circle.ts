import { LvglBase, LV_Obj } from "../../lvglBase.js";
import { Module, makeLvPointT, hexStrToLvColor } from "../../../LvglModule.js";
import type { CellState, Geometry } from "../../../../../packages/core/src/index.js";
import type { LVStyleState } from "../../../type.js";
import changeRadius from "./changeRadius.js";





class LV_Circle extends LV_Obj {
	_radius: number = 5;
	_centerX: number = 0;
	_centerY: number = 0;
	_fillColor: string = "#000000";
	_outlineColor: string = "#000000";
	state: CellState;
	constructor(name: string, lvobj: LvObjT, state: CellState) {
		super(name, lvobj);
		this.state = state;
	}
	initRadius(radius: number) {
		const circle = this;
		circle._radius = radius;
		Module.lv_circle_set_radius(this.lvObj, radius);
		circle._centerX = radius;
		circle._centerY = radius;
		makeLvPointT(radius, radius, (p) => {
			Module.lv_circle_set_center(this.lvObj, p);
		})
	}
	get radius() {
		return this._radius;
	}
	set radius(r: number) {
		if (this._radius === r) return;
		this._radius = r;
		Module.lv_circle_set_radius(this.lvObj, r);
		changeRadius(this.state, r, r);
		makeLvPointT(r, r, (p) => {
			Module.lv_circle_set_center(this.lvObj, p);
		})
	}

	get centerX() {
		return this._centerX;
	}
	set centerX(x: number) {
		this._centerX = x;
		const p = makeLvPointT(this._centerX, this._centerY);
		Module.lv_circle_set_center(this.lvObj, p);
		p.delete();
	}

	get centerY() {
		return this._centerY;
	}
	set centerY(y: number) {
		this._centerY = y;
		const p = makeLvPointT(this._centerX, this._centerY);
		Module.lv_circle_set_center(this.lvObj, p);
		p.delete();
	}

	get fillColor() {
		return this._fillColor;
	}
	set fillColor(c: string) {
		this._fillColor = c;
		const color = hexStrToLvColor(this._fillColor);
		Module.lv_circle_set_fill_color(this.lvObj, color);
		color.delete();
	}

	get outlineColor() {
		return this._outlineColor;
	}
	set outlineColor(c: string) {
		this._outlineColor = c;
		const color = hexStrToLvColor(this._outlineColor);
		Module.lv_circle_set_outline_color(this.lvObj, color);
		color.delete();
	}

	override updateWidget(geo?: Geometry): void {
		if (!geo) return;
		const { x, y, width, height } = geo;
		const l = Math.min(width, height);
		const radius = l / 2;
		if (this._radius !== radius) {
			this.radius = radius;
			this._centerX = radius;
			this._centerY = radius;
			makeLvPointT(radius, radius, (p) => {
				Module.lv_circle_set_center(this.lvObj, p);
			});
		}
	}
}

class LVGL_ShapeCircle extends LvglBase {
	override  Type = "Circle";
	override  _styles: LVStyleState = [];

	override  lvglCreate(parent: LvObjT) {
		this._lvglObj = Module.lv_circle_create(parent);
		this._widget = new LV_Circle("Circle", this._lvglObj, this.State!);
		const radius = Math.min(this.State!.cell.getGeometry()!.width, this.State!.cell.getGeometry()!.height) / 2;
		(this._widget as LV_Circle).initRadius(radius);
	}

	override  createBaseStyle(stateCount: number): void {
		this._styles = [];
	}

	override  setLvglGeo(geo: Geometry) {
		if (!this._lvglObj || !this.State) return;
		this._layout?.update(this.State, geo.x, geo.y, geo.width, geo.height);
		this._widget?.updateWidget(geo);
	}
}

export { LVGL_ShapeCircle, LV_Circle };
