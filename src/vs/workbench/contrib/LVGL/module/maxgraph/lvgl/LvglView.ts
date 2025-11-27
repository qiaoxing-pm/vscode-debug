import {
	Cell,
	Graph,
	Point,
	CellState,
	GraphView
} from "../packages/core/src/index.js";

class LvglView extends GraphView {
	screen: LvObjT;

	constructor(graph: Graph, screen: LvObjT) {
		super(graph);
		this.screen = screen;
	}

	updateCellState(state: CellState) {
		const absoluteOffset = state.absoluteOffset;
		const origin = state.origin;

		absoluteOffset.x = 0;
		absoluteOffset.y = 0;
		origin.x = 0;
		origin.y = 0;
		state.length = 0;

		if (state.cell !== this.currentRoot) {
			const parent = state.cell.getParent();
			const pState = parent ? this.getState(parent) : null;

			if (pState && pState.cell !== this.currentRoot) {
				origin.x += pState.origin.x;
				origin.y += pState.origin.y;
			}

			let offset = this.graph.getChildOffsetForCell(state.cell);

			if (offset) {
				origin.x += offset.x;
				origin.y += offset.y;
			}

			const geo = state.cell.getGeometry();

			if (geo) {
				if (!state.cell.isEdge()) {
					offset = geo.offset ? geo.offset : this.EMPTY_POINT;

					if (geo.relative && pState) {
						if (pState.cell.isEdge()) {
							const point = this.getPoint(pState, geo);

							if (point) {
								origin.x += point.x / this.scale - pState.origin.x - this.translate.x;
								origin.y += point.y / this.scale - pState.origin.y - this.translate.y;
							}
						} else {
							origin.x += geo.x * pState.unscaledWidth + offset.x;
							origin.y += geo.y * pState.unscaledHeight + offset.y;
						}
					} else {
						absoluteOffset.x = this.scale * offset.x;
						absoluteOffset.y = this.scale * offset.y;
						origin.x += geo.x;
						origin.y += geo.y;
					}
				}

				state.x = this.scale * (this.translate.x + origin.x);
				state.y = this.scale * (this.translate.y + origin.y);
				state.width = this.scale * geo.width;
				state.unscaledWidth = geo.width;
				state.height = this.scale * geo.height;
				state.unscaledHeight = geo.height;

				if (state.cell.isVertex()) {
					this.updateVertexState(state, geo);
				}

				if (state.cell.isEdge()) {
					this.updateEdgeState(state, geo);
				}
			}
		}

		state.updateCachedBounds();
	}
}

export default LvglView;
