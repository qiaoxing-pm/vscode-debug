import {
	CellState,
	Geometry,
	AbstractCanvas2D,
	Point
} from "../../../../../packages/core/src/index.js"
import { LV_Obj, LvglBase } from "../../lvglBase.js";
import { Module, makeLvPointT, hexStrToLvColor } from "../../../LvglModule.js";

function parsePoints(str: string | null): Point[] {
	if (!str || typeof str !== "string") return [];

	// 匹配 "{数字,数字}"
	const regex = /\{(\d+)\s*,\s*(\d+)\}/g;
	const result: Point[] = [];

	let match;
	while ((match = regex.exec(str)) !== null) {
		const x = Number(match[1]);
		const y = Number(match[2]);
		result.push(new Point(x, y));
	}

	return result;
}
export class LV_Polygon extends LV_Obj {
	points: Point[] = [];
	_fillColor: string = "#000000";
	_outlineColor: string = "#000000";
	state: CellState;

	constructor(name: string, lvobj: LvObjT, state: CellState) {
		super(name, lvobj);
		this.state = state;
		this.fillColor = "#00ffff";
	}

	get fillColor() {
		return this._fillColor;
	}
	set fillColor(c: string) {
		this._fillColor = c;
		const color = hexStrToLvColor(this._fillColor);
		Module.lv_polygon_set_fill_color(this.lvObj, color);
		color.delete();
	}

	get outlineColor() {
		return this._outlineColor;
	}
	set outlineColor(c: string) {
		this._outlineColor = c;
		const color = hexStrToLvColor(this._outlineColor);
		Module.lv_polygon_set_outline_color(this.lvObj, color);
		color.delete();
	}

	override updateWidget(geo?: Geometry): void {
		if (!geo) return;
		const { x, y, width, height } = geo;
		const polyCoords = this.state.style.polyCoords;
		if (!polyCoords || polyCoords.length <= 0) return;
		const vec = Module.makeLvPointVector(polyCoords.length);
		this.points = [];
		polyCoords.forEach((p) => {
			const x = p.x * width;
			const y = p.y * height;
			const lp = makeLvPointT(x, y);
			this.points.push(new Point(x, y));
			vec.push_back(lp);
			lp.delete();
		});
		Module.lv_polygon_set_points(this.lvObj, vec);
	}

	override toXML(doc: XMLDocument): Element | null {
		let node = super.toXML(doc);
		if (!node && this.points.length <= 0) {
			return null
		} else if (this.points.length > 0) {
			node = doc.createElement("Polygon");
			node.setAttribute("points", this.points.map(p => `{${p.x.toFixed(0)},${p.y.toFixed(0)}}`).join(", "));
		}
		return node;
	}
	override fromXML(element: Element): void {
		super.fromXML(element);
		const pointsStr = element.getAttribute("points");
		if (pointsStr) {
			this.points = parsePoints(pointsStr);
		}
	}
}

class PolygonShape extends LvglBase {

	override Type = "Polygon";

	override paintVertexShape(c: AbstractCanvas2D, x: number, y: number, w: number, h: number): void {
		// this.paintBackground(c, x, y, w, h);
		const style = this.State!.style;
		const polyCoords = style.polyCoords ?? [];
		if (polyCoords.length <= 0) {
			return;
		}
		if (this.isVisible) {
			c.begin();
			c.translate(x, y);
			c.moveTo(polyCoords[0].x * w, polyCoords[0].y * h);
			for (let i = 1; i < polyCoords.length; i++) {
				c.lineTo(polyCoords[i].x * w, polyCoords[i].y * h);
			}
			c.lineTo(polyCoords[0].x * w, polyCoords[0].y * h);
			c.end();
			c.setStrokeColor("transparent");
			c.setFillColor("transparent");
			c.fillAndStroke();
			if (!this.outline || !this.style || !(this.style.backgroundOutline ?? false)) {
				c.setShadow(false);
				this.paintForeground(c, x, y, w, h);
			}
		}
		// 上述x,y是全局坐标 而cell的几何坐标是相对于父cell的坐标
		const geo = this.State?.cell.getGeometry()?.clone();
		if (!geo) {
			return;
		}
		geo.width += 1;
		geo.height += 1;
		this.setLvglGeo(geo);
	}

	override lvglCreate(parent: LvObjT): void {
		this._lvglObj = Module.lv_polygon_create(parent);
		this._widget = new LV_Polygon("Polygon", this._lvglObj, this.State!);
	}

}

export default PolygonShape;
