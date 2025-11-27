import { Graph, type Cell } from "../../packages/core/src/index.js";
import { LvglBase } from "../package/shapes/lvglBase.js";
import HMiBase from "../../hmi/elements/HMiBase.js";

export function isRoot(cell: Cell | null): boolean {
	return !!cell && (cell.id === "0" || cell.id === "1");
}

export function getShapeById(graph: Graph, id: string): LvglBase | HMiBase | null {
	const cell = graph.getDataModel().getCell(id);
	if (cell instanceof HMiBase) {
		return cell;
	}
	return getShapeByCell(graph, cell);

}

export function getShapeByCell(graph: Graph, cell: Cell | null): LvglBase | HMiBase | null {
	if (!cell) return null;
	if (cell instanceof HMiBase) {
		return cell;
	}
	const state = graph.getView().getState(cell, true);
	if (!state) return null;
	const shape = state.shape;
	if (!(shape instanceof LvglBase)) return null;
	return shape;
}
