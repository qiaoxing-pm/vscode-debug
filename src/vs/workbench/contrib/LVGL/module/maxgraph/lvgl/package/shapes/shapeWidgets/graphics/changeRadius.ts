import { type Graph, Cell, type CellState, SelectionCellsHandler } from "../../../../../packages/core/src/index.js";

export default function changeRadius(state: CellState, radiusX: number, radiusY: number) {
	const cell = state.cell;
	const geo = cell.getGeometry();
	if (!geo) {
		return;
	}
	let { x, y, width, height } = geo;
	const centerX = x + width / 2;
	const centerY = y + height / 2;
	// 重新计算宽高和左上角位置
	geo.width = radiusX * 2;
	geo.height = radiusY * 2;
	// 重新计算左上角位置
	geo.x = centerX - radiusX;
	geo.y = centerY - radiusY;
	// 更新state重新绘制
	const view = state.view;
	const graph = view.graph;
	view.updateCellState(state);
	const cellRenderer = graph.getCellRenderer();
	cellRenderer.redraw(state, true);
	const handler = graph.getPlugin(SelectionCellsHandler.pluginId) as SelectionCellsHandler;
	handler.handlers.visit((key, h) => {
		h.redraw();
	});
}
