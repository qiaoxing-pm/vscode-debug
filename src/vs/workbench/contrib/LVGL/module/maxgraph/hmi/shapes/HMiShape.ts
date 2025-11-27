import {
	AbstractCanvas2D,
	CellState,
	Shape,
} from "../../packages/core/src/index.js";
import HMiBase from "../elements/HMiBase.js";

class HMiShape extends Shape {
	constructor() {
		super(null);
	}
	apply(state: CellState): void {
		super.apply(state);
		this.State = state;
	}
	paintVertexShape(c: AbstractCanvas2D, x: number, y: number, w: number, h: number): void {
		c.begin();
		c.setFillColor("transparent");
		// c.setStrokeColor("transparent");
		c.rect(x, y, w, h);
		c.fillAndStroke();
		// 更新HMI元素位置
		const thisCell = this.State?.cell;
		if (thisCell && thisCell instanceof HMiBase) {
			const hmi = thisCell as HMiBase;
			const geo = thisCell.getGeometry();
			if (this.State && geo) {
				hmi.updateLayout(this.State, geo);
			}
		}
	}

}

export default HMiShape;
