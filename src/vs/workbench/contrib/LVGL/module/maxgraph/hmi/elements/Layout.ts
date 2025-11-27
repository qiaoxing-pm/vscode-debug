import { Module } from "../../lvgl/package/LvglModule.js";
import { Rectangle, Geometry } from "../../packages/core/src/index.js";
import type { Cell, CellState } from "../../packages/core/src/index.js";
class Layout {
	lvObj: LvObjT
	state: CellState | null = null;
	cell: Cell;
	align: number = 0;
	_x: number = 0;
	_y: number = 0;
	_width: number = 0;
	_height: number = 0;

	get x() {
		const geo = this.cell.getGeometry();
		if (!geo) {
			return 0;
		}
		this._x = parseInt(geo.x.toString());
		return this._x;
	}
	set x(value: number) {
		const geo = this.cell.getGeometry();
		if (!geo || geo.x === value || !this.state) {
			return;
		}
		const dx = value - geo.x;
		this.state.view.graph.translateCell(this.state.cell, dx, 0);
	}

	get y() {
		const geo = this.cell.getGeometry();
		if (!geo) {
			return 0;
		}
		this._y = parseInt(geo.y.toString());
		return this._y;
	}
	set y(value: number) {
		const geo = this.cell.getGeometry();
		if (!geo || geo.y === value || !this.state) {
			return;
		}
		const dy = value - geo.y;
		this.state.view.graph.translateCell(this.state.cell, 0, dy);
	}
	get width() {
		const geo = this.cell.getGeometry();
		if (!geo) {
			return 0;
		}
		this._width = parseInt(geo.width.toString());
		return this._width;
	}

	set width(value: number) {
		if (this._width === value) return;
		const geo = this.cell.getGeometry() as Geometry;
		this._width = value;
		const rect = new Rectangle(geo.x, geo.y, value, geo.height);
		this.state?.view?.graph.resizeCell(this.cell, rect, true);
	}
	get height() {
		const geo = this.cell.getGeometry();
		if (!geo) {
			return 0;
		}
		this._height = parseInt(geo.height.toString());
		return this._height;
	}
	set height(value: number) {
		if (this._height === value) return;
		const geo = this.cell.getGeometry() as Geometry;
		this._height = value;
		const rect = new Rectangle(geo.x, geo.y, geo.width, value);
		this.state?.view?.graph.resizeCell(this.cell, rect, true);
	}

	constructor(cell: Cell, lvglObj: LvObjT) {
		this.lvObj = lvglObj;
		this.cell = cell;
		const geo = cell.getGeometry();
		if (geo) {
			this._x = geo.x;
			this._y = geo.y;
			this._width = geo.width;
			this._height = geo.height;
		}
	}

	update(State: CellState, x: number, y: number, w: number, h: number): void {
		this.state = State;
		Module.lv_obj_set_pos(this.lvObj, x, y);
		Module.lv_obj_set_size(this.lvObj, w, h);
	}

	pickAttributes(): Object {
		return {
			x: this.x,
			y: this.y,
			width: this.width,
			height: this.height,
		}
	}

	toXML(doc: XMLDocument): Element {
		const element = doc.createElement("Layout");
		element.setAttribute("x", String(this.x));
		element.setAttribute("y", String(this.y));
		element.setAttribute("width", String(this.width));
		element.setAttribute("height", String(this.height));
		return element;
	}

	fromXML(xml: Element): void {
		this._x = parseInt(xml.getAttribute("x") || "0", 10);
		this._y = parseInt(xml.getAttribute("y") || "0", 10);
		this._width = parseInt(xml.getAttribute("width") || "0", 10);
		this._height = parseInt(xml.getAttribute("height") || "0", 10);
	}

}

export default Layout;
