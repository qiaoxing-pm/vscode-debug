
import {
	InternalEvent,
	SelectionHandler,
	Point,
} from "../../packages/core/src/index.js";
import { switchScreen, initLvglCanvas, Module } from "../package/LvglModule.js";
import {
	registerLvglShape,
} from "../package/shapes/registerLvglShape.js";
import { useGraphDrop } from "./dropToCell.js";
import { getShapeByCell } from "./utils.js";
import { useSelectChange } from "./selectChange.js";
import { useBase } from "./base.js";
import { type RpcProviderInterface } from "../../../../lib/worker-rpc/lib/index.js";
import { useKeyboard } from "./keyboard.js";
import { LvglBase } from "../package/shapes/lvglBase.js";
import { usePopupMenu } from "./popupMenu.js";
import { useUndo } from "./undo.js";
import LvglGraph from "../../lvgl/elements/lvglGraph.js";
import LvglRubberBand from "../elements/RubberBand.js";
import type { LvScreen } from "../../type.js"

export type MaskRectangle = {
	x: number;
	y: number;
	width: number;
	height: number;
	points: { x: number; y: number }[];
};

// let


export default function createLvglGraph(container: HTMLDivElement, canvas: HTMLCanvasElement, screen: LvScreen, rpcProvider: RpcProviderInterface): LvglGraph {
	let screenObj = new LvglBase("screen", "123");
	const w = screen.width;
	const h = screen.height;
	container.style.width = w + "px";
	container.style.height = h + "px";

	initLvglCanvas(canvas, screen);
	canvas.style.transformOrigin = "top left";
	screen.canvas = canvas;

	const graph = new LvglGraph(container, screen);
	new LvglRubberBand(graph);
	graph.setEnabled(true);

	const handler = document.getElementById("handler")!;
	useKeyboard(graph, handler, screen, graph.undoManager, rpcProvider);
	const defaultParent = graph.getDefaultParent();
	const view = graph.getView();
	const state = view.getState(defaultParent);
	if (state) {
		const stateStyle = graph.getCellStyle(defaultParent);
		stateStyle.lvglObjT = screen.screenObj;
		stateStyle.type = "screen";
		stateStyle.name = "Screen";
		graph.setCellStyle(stateStyle, [defaultParent]);
		screenObj.apply(state);
	}
	graph.gridSize = 5;
	// const rubberBandHandler = new RubberBandHandler(graph);
	graph.setAllowNegativeCoordinates(true); // 允许将元素移动到负坐标区域
	graph.setPanning(false);
	graph.setEventsEnabled(true);

	const selectionHandler = graph.getPlugin(
		"SelectionHandler",
	) as SelectionHandler;
	selectionHandler.scrollOnMove = false; // 禁止在拖动时滚动
	selectionHandler.setCloneEnabled(false); // 禁止克隆

	useBase(graph, rpcProvider);
	useGraphDrop(graph, rpcProvider);
	useSelectChange(graph, screenObj, screen, rpcProvider);
	// useHirerachyTree(graph, widgets, rpcProvider);
	useUndo(graph, graph.undoManager);
	// useClipboard(graph, textInput!, screen);
	usePopupMenu(graph, screen, graph.undoManager, rpcProvider);
	InternalEvent.disableContextMenu(container);
	registerLvglShape();

	// graph.setEventsEnabled
	return graph;
}

export function switchGraph(curGraph: LvglGraph, newGraph: LvglGraph) {
	if (curGraph === newGraph) {
		return null;
	}
	switchScreen(curGraph.screen, newGraph.screen);
	Module.ctx = newGraph.screen.canvas.getContext("2d") as CanvasRenderingContext2D;
	const selectionModel = curGraph.getSelectionModel();
	const cells = selectionModel.cells;
	const screenObj = curGraph.screen.shape;
	if (cells.length <= 0 && screenObj) {
		return screenObj;
	}
	return cells.length > 0 ? getShapeByCell(curGraph, cells[0]) : null;
}

function release(graph: LvglGraph, curSelectedWidget: string, rect: MaskRectangle) {
	console.log("release rect", rect);
	if (rect.width <= 0 || rect.height <= 0) {
		return;
	}
	graph.insertVertex(
		graph.getDefaultParent(),
		null,
		null,
		rect.x,
		rect.y,
		rect.width,
		rect.height,
		{
			shape: "lvgl_" + curSelectedWidget,
			screen: graph.screen.screenObj,
			polyCoords: rect.points.map((p) => new Point(p.x, p.y)),
			foldable: false,
		},
	);
}
