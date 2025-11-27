import type LvglCell from "../../../../elements/lvglCell.js";
import LvLayout from "../../../../elements/lvLayout.js";
import {
	CellState,
	Rectangle,
	Cell
} from "../../../../../packages/core/src/index.js";

class GraphicLayout extends LvLayout {

	constructor(cell: LvglCell, lvglObj: LvObjT, state: CellState) {
		super(cell, lvglObj);
		this.state = state;
	}
	override get x() {
		const geo = this.cell.getGeometry()!;
		return geo.x;
	}
	override set x(value: number) {
		const geo = this.cell.getGeometry()!;
		let dx = value - geo.x;
		if (!this.state) return;
		this.state.view.graph.translateCell(this.state.cell, dx, 0);
	}
	override get y() {
		const geo = this.cell.getGeometry()!;
		return parseInt(geo.y.toString());
	}
	override set y(value: number) {
		const geo = this.cell.getGeometry()!;
		let dy = value - geo.y;
		if (!this.state) return;
		this.state.view?.graph.translateCell(this.state.cell, 0, dy);
	}
	override get width() {
		return parseInt((this.cell.getGeometry()!.width.toString()));
	}

	// 当重新设置大小之后，因为有align的存在，会使得x和y的值需要重新计算
	// eg: top midle时，宽度增加2，为了对齐，x需要减去1，width需要加2,保证处于中心区域
	override set width(value: number) {
		const geo = this.cell.getGeometry()!;
		this._width = value;
		const rect = new Rectangle(geo.x, geo.y, value, geo.height);
		this.state?.view?.graph.resizeCell(this.cell, rect, true);
	}
	override get height() {
		return parseInt((this.cell.getGeometry()!.height.toString()));
	}
	override set height(value: number) {
		const geo = this.cell.getGeometry()!;
		this._height = value;
		const rect = new Rectangle(geo.x, geo.y, geo.width, value);
		this.state?.view?.graph.resizeCell(this.cell, rect, true);
	}

	override pickAttributes(): Record<string, any> {
		const attrs = {
			isValid: this.isValid,
			x: this.x,
			y: this.y,
			width: this.width,
			height: this.height,
		}
		return attrs;
	}
}

export default GraphicLayout;
