import { LvglBase, LV_Obj } from "../../lvglBase.js";
import { Module, makeLvPointT, hexStrToLvColor } from "../../../LvglModule.js";
import type { CellState, Geometry } from "../../../../../packages/core/src/index.js";
import type { LVStyleState } from "../../../type.js";
import changeRadius from "./changeRadius.js";
class LV_PartEllipse extends LV_Obj {
	_radiusX: number = 5;
	_radiusY: number = 5;
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
	}

	initRadius(radiusX: number, radiusY: number) {
		this._radiusX = radiusX;
		this._radiusY = radiusY;
		Module.lv_partellipse_set_radius(this.lvObj, radiusX, radiusY);
		makeLvPointT(radiusX, radiusY, (p) => {
			Module.lv_partellipse_set_center(this.lvObj, p);
		});
	}
	get radiusX() {
		return this._radiusX;
	}
	set radiusX(r: number) {
		this._radiusX = r;
		Module.lv_partellipse_set_radius(this.lvObj, r, this._radiusY);
		changeRadius(this.state, r, this._radiusY);
		makeLvPointT(r, this._radiusY, (p) => {
			Module.lv_partellipse_set_center(this.lvObj, p);
		});
	}

	get radiusY() {
		return this._radiusY;
	}
	set radiusY(r: number) {
		this._radiusY = r;
		Module.lv_partellipse_set_radius(this.lvObj, this._radiusX, r);
		changeRadius(this.state, this._radiusX, r);
		makeLvPointT(this._radiusX, r, (p) => {
			Module.lv_partellipse_set_center(this.lvObj, p);
		});
	}

	get centerX() {
		return this._centerX;
	}
	set centerX(x: number) {
		this._centerX = x;
		const p = makeLvPointT(this._centerX, this._centerY);
		Module.lv_partellipse_set_center(this.lvObj, p);
		p.delete();
	}

	get centerY() {
		return this._centerY;
	}
	set centerY(y: number) {
		this._centerY = y;
		const p = makeLvPointT(this._centerX, this._centerY);
		Module.lv_partellipse_set_center(this.lvObj, p);
		p.delete();
	}

	get startAngle() {
		return this._startAngle;
	}
	set startAngle(a: number) {
		this._startAngle = a;
		Module.lv_partellipse_set_range(this.lvObj, a, this._endAngle);
	}

	get endAngle() {
		return this._endAngle;
	}
	set endAngle(a: number) {
		this._endAngle = a;
		Module.lv_partellipse_set_range(this.lvObj, this._startAngle, a);
	}

	get fillColor() {
		return this._fillColor;
	}
	set fillColor(c: string) {
		this._fillColor = c;
		const color = hexStrToLvColor(this._fillColor);
		Module.lv_partellipse_set_fill_color(this.lvObj, color);
		color.delete();
	}

	get outlineColor() {
		return this._outlineColor;
	}
	set outlineColor(c: string) {
		this._outlineColor = c;
		const color = hexStrToLvColor(this._outlineColor);
		Module.lv_partellipse_set_outline_color(this.lvObj, color);
		color.delete();
	}

	override updateWidget(geo?: Geometry): void {
		if (!geo) return;
		const { width, height } = geo;
		const radiusX = width / 2;
		const radiusY = height / 2;
		if (this._radiusX !== radiusX || this._radiusY !== radiusY) {
			this.radiusX = radiusX;
			this.radiusY = radiusY;
			this._centerX = radiusX;
			this._centerY = radiusY;
			makeLvPointT(radiusX, radiusY, (p) => {
				Module.lv_partellipse_set_center(this.lvObj, p);
			});
		}
	}
}

class LVGL_PartEllipse extends LvglBase {
	override  Type = "PartEllipse";
	override  _styles: LVStyleState = [];

	override  lvglCreate(parent: LvObjT) {
		this._lvglObj = Module.lv_partellipse_create(parent);
		this._widget = new LV_PartEllipse("PartEllipse", this._lvglObj, this.State!);
		const { width, height } = this.State!.cell.getGeometry()!;
		const radiusX = width / 2;
		const radiusY = height / 2;
		(this._widget as LV_PartEllipse).initRadius(radiusX, radiusY);
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

export { LVGL_PartEllipse, LV_PartEllipse };
