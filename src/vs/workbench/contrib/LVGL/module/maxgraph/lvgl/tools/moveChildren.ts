import {
	Graph,
	Cell,
	CellState
} from "../../packages/core/src/index.js";
import { getShapeByCell } from "../events/utils.js";
import { LvglBase } from "../package/shapes/lvglBase.js";

function moveChildren(graph: Graph, cell: Cell, dx: number, dy: number) {
	const children = graph.getChildCells(cell, true, false);
	for (const child of children) {
		const shape = getShapeByCell(graph, child);
		if (!shape || !(shape instanceof LvglBase)) continue;
		const state = shape.State!;
		moveMySelf(graph, state, dx, dy);
		const children = graph.getChildCells(child, true, false);
		if (children.length > 0) {
			moveChildren(graph, child, dx, dy);
		}
	}
}

export function moveMySelf(graph: Graph, state: CellState, dx: number, dy: number) {
	const shape = state.shape;
	if (!shape || !(shape instanceof LvglBase)) return;
	state.x += dx * graph.view.scale;
	state.y += dy * graph.view.scale;

	// const cellRenderer = graph.cellRenderer;
	//cellRenderer.redraw(state, true);
}

export default moveChildren;
