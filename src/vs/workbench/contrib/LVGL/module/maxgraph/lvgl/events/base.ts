import {
	type Graph,
	type EventObject,
	type Cell,
	InternalEvent,
} from "../../packages/core/src/index.js";
import type { RpcProviderInterface } from "../../../../lib/worker-rpc/lib/index.js";
import { batchUpdateHirerachy } from "./hirerachyTree.js";
import HMiBase from "../../hmi/elements/HMiBase.js";

export function useBase(graph: Graph, rpc: RpcProviderInterface) {
	function add(sender: any, evt: EventObject) {
		console.log("CELLS_ADDED");
		batchUpdateHirerachy(rpc);
		return;
		/*
			const ppp = evt.getProperty("parent") as Cell;
			const root = isRoot(ppp);
			const cells = evt.getProperty("cells") as Cell[];
			for (const cell of widgets) {
				cell.selected = false;
			}
			for (const cell of cells) {
				// const widget = (cell.style.shape as string).split("_")[1];
				const id = cell.id!!;
				if (root) {
					const c = widgets.find((item) => item.id === id);
					if (c) continue;
				}
				const parent = cell.parent;
				let selectWidget = findWidget(widgets, id);
				if (!selectWidget) {
					selectWidget = addWidget(graph, cell, widgets);
				}
				const model = graph.getDataModel();
				if (parent && !isRoot(parent)) {
					const preWidget = findWidget(widgets, parent.id ?? "");
					if (preWidget && selectWidget) {
						addWidget2(model, widgets, selectWidget, preWidget);
					}
				} else if (selectWidget) {
					addWidget2(model, widgets, selectWidget, null);
				}
			}
	*/
		// graph.getSelectionModel().setCell(cells[cells.length - 1]);
	}

	// 当存在有父子关系的cell被移动时，也会触发此事件
	graph.addListener(
		InternalEvent.CELLS_ADDED,
		(sender: any, evt: EventObject) => {
			batchUpdateHirerachy(rpc);
			console.log("CELLS_ADDED");
		}
	);

	graph.addListener(
		InternalEvent.CELLS_REMOVED,
		(sender: Graph, evt: EventObject) => {
			const cells = evt.getProperty("cells") as Cell[];
			for (const cell of cells) {
				if (cell instanceof HMiBase) {
				}
			}
			batchUpdateHirerachy(rpc);
			return;
			/*
		const cells = evt.getProperty("cells") as Cell[];
		for (const cell of cells) {
			if (!cell.id) continue;
			const widget = findWidget(widgets, cell.id);
			const preWidget = findWidget(widgets, cell.id, (item)=>{
				return item.children.findIndex((child)=>child.id === cell.id) !== -1;
			});
			if (!widget) continue;
			deleteWidget2(graph.getDataModel(), widgets, widget, preWidget);
		}
		*/
		}
	);

	// 当位置和大小发生变化时，需要显示更新属性面板layout的值
	graph.addListener("CELL_MOVING", (sender: Graph, evt: EventObject) => {
		const cell = evt.getProperty("cell") as Cell;
		const dx = evt.getProperty("dx") as number;
		const dy = evt.getProperty("dy") as number;
		if (cell.geometry && (dx || dy)) {
			const { x, y } = cell.geometry;
			rpc.rpc("updatePosition", {
				x: x + dx,
				y: y + dy,
			});
		}
	});

	graph.addListener("CELL_RESIZING", (sender: Graph, evt: EventObject) => {
		// console.log("CELLS_RESIZED");
		const width = evt.getProperty("width") as number;
		const height = evt.getProperty("height") as number;
		rpc.rpc("updateSize", {
			width,
			height,
		});
	});
}
