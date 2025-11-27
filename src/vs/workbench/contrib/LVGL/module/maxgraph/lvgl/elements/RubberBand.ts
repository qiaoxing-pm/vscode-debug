import {
	EventObject,
	Rectangle,
	RubberBandHandler,
} from "../../packages/core/src/index.js"

class LvglRubberBand extends RubberBandHandler {

	execute(evt: MouseEvent): void {
		const rect = new Rectangle(this.x, this.y, this.width, this.height);
		const cells = this.graph.selectRegion(rect, evt);
		if (cells.length === 0) {
			this.graph.fireEvent(new EventObject("createCellInRegion", {
				rectangle: rect,
			}));
		}
	}

}
export default LvglRubberBand;
