import { LvglBase, LV_Obj } from "../../lvglBase.js";
import { Module, makeLvPointT, hexStrToLvColor } from "../../../LvglModule.js";
import type { CellState, Geometry } from "../../../../../packages/core/src/index.js";
import type { LVStyleState } from "../../../type.js";
import changeRadius from "./changeRadius.js";

class LV_PartCircle extends LV_Obj {
	_radius: number = 5;
	_centerX: number = 0;
	_centerY: number = 0;
	_fillColor: string = "#000000";
	_outlineColor: string = "#000000";
	_startAngle: number = 0;
	_endAngle: number = 90;
	state: CellState;
	constructor(name: string, lvobj: LvObjT, state: CellState) {
		super(name, lvobj);
		this.state = state;
		this.startAngle = 270;
	}

	initRadius(radius: number) {
		this._radius = radius;
		Module.lv_partcircle_set_radius(this.lvObj, radius);
		this._centerX = radius;
		this._centerY = radius;
		makeLvPointT(radius, radius, (p) => {
			Module.lv_partcircle_set_center(this.lvObj, p);
		});
	}

	get radius() {
		return this._radius;
	}
	set radius(r: number) {
		if (this._radius === r) return;
		this._radius = r;
		Module.lv_partcircle_set_radius(this.lvObj, r);
		changeRadius(this.state, r, r);
		makeLvPointT(r, r, (p) => {
			Module.lv_partcircle_set_center(this.lvObj, p);
		});
	}

	get centerX() {
		return this._centerX;
	}
	set centerX(x: number) {
		this._centerX = x;
		const p = makeLvPointT(this._centerX, this._centerY);
		Module.lv_partcircle_set_center(this.lvObj, p);
		p.delete();
	}

	get centerY() {
		return this._centerY;
	}
	set centerY(y: number) {
		this._centerY = y;
		const p = makeLvPointT(this._centerX, this._centerY);
		Module.lv_partcircle_set_center(this.lvObj, p);
		p.delete();
	}

	get startAngle() {
		return this._startAngle;
	}
	set startAngle(a: number) {
		this._startAngle = a;
		Module.lv_partcircle_set_range(this.lvObj, a, this._endAngle);
	}

	get endAngle() {
		return this._endAngle;
	}
	set endAngle(a: number) {
		this._endAngle = a;
		Module.lv_partcircle_set_range(this.lvObj, this._startAngle, a);
	}

	get fillColor() {
		return this._fillColor;
	}
	set fillColor(c: string) {
		this._fillColor = c;
		const color = hexStrToLvColor(this._fillColor);
		Module.lv_partcircle_set_fill_color(this.lvObj, color);
		color.delete();
	}

	get outlineColor() {
		return this._outlineColor;
	}
	set outlineColor(c: string) {
		this._outlineColor = c;
		const color = hexStrToLvColor(this._outlineColor);
		Module.lv_partcircle_set_outline_color(this.lvObj, color);
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
				Module.lv_partcircle_set_center(this.lvObj, p);
			});
		}
	}
}

class LVGL_ShapePartCircle extends LvglBase {
	override  Type = "PartCircle";
	override  _styles: LVStyleState = [];

	override 	lvglCreate(parent: LvObjT) {
		this._lvglObj = Module.lv_partcircle_create(parent);
		this._widget = new LV_PartCircle("PartCircle", this._lvglObj, this.State!);
		const radius = Math.min(this.State!.cell.getGeometry()!.width, this.State!.cell.getGeometry()!.height) / 2;
		(this._widget as LV_PartCircle).initRadius(radius);
	}

	override createBaseStyle(stateCount: number): void {
		this._styles = [];
	}

	override setLvglGeo(geo: Geometry) {
		if (!this._lvglObj || !this.State) return;
		this._layout?.update(this.State, geo.x, geo.y, geo.width, geo.height);
		this._widget?.updateWidget(geo);
	}
}

export { LVGL_ShapePartCircle, LV_PartCircle };
