import { type Graph, Cell, type CellState, SelectionCellsHandler } from "../../packages/core/src/index.js";
import { Module } from "../package/LvglModule.js";

function createLvglCell(graph: Graph, parent: Cell | null, x: number, y: number, w: number, h: number, config?: Object, id?: string): Cell {
	let cell: Cell | null = null
	graph.model.batchUpdate(() => {
		cell = graph.insertVertex(
			parent,
			id,
			null,
			x,
			y,
			w,
			h,
			config
		);
		graph.getSelectionModel().setCell(cell);
	})
	return cell!;
}



export function moveAndRedraw(state: CellState, lvObj: LvObjT, redrawHandler = false) {
	const geo = state.cell.getGeometry()!;
	const { x, y } = geo;
	Module.lv_obj_update_layout(lvObj);
	let x1 = Module.lv_obj_get_x(lvObj);
	let y1 = Module.lv_obj_get_y(lvObj);
	if (x1 !== x || y1 !== y) {
		geo.x = x1;
		geo.y = y1;
		const scale = state.view.scale;
		state.x = x1 * scale;
		state.y = y1 * scale;
		const graph = state.view.graph;
		const cellRenderer = graph.getCellRenderer();
		cellRenderer.redraw(state, true);
		const handler = graph.getPlugin(SelectionCellsHandler.pluginId) as SelectionCellsHandler;
		handler.handlers.visit((key, h) => {
			h.redraw();
		});
	}

}

export { createLvglCell };
