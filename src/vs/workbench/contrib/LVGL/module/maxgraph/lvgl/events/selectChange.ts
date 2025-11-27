import {
	Graph,
	InternalEvent,
	Cell,
	EventObject,
} from "../../packages/core/src/index.js";
import { widgetProps, screenStore } from "../store/index.js";
import { getShapeByCell, getShapeById } from "./utils.js";
import { LvglBase } from "../package/shapes/lvglBase.js";
import type { RpcProviderInterface } from "../../../../lib/worker-rpc/lib/index.js";
import extractCommonProps from "../tools/extractCommonProps.js";
import { setDeepValue } from "../../util.js";
import isHMIWidget from "../../hmi/static/widgets.js";
import type { ChangeInfo, LvScreen } from "../../type.js";
import api from "../../../../api/index.js"

function mutilSelect(graph: Graph, selectedCells: Cell[], screenObj: LvglBase) {
	if (selectedCells.length === 0) {
		widgetProps.props = screenObj.getPropsData();
		return;
	}
	let isHmi = false;
	const types = new Set<string>();
	const props = [] as Array<[string, any, ...any[]]>[];
	for (let i = 0; i < selectedCells.length; i++) {
		const cell = selectedCells[i];
		const shape = getShapeById(graph, cell.getId() ?? "");
		if (shape) {
			types.add(shape.type);
			isHmi = isHMIWidget(shape.type);
			props.push(shape.getPropsData());
		}
	}
	const keys = Array.from(types.keys());
	console.log("mutilSelect types", keys);
	const commonData = extractCommonProps(
		props,
		types.size === 1,
		types.size === 1 ? keys[0] : "",
		isHmi
	);
	widgetProps.props = commonData;
}

export function useSelectChange(
	graph: Graph,
	screenObj: LvglBase,
	screen: LvScreen,
	rpc: RpcProviderInterface
) {
	let selectedCells = [] as Cell[];

	function onchange(sender: any, evt: EventObject) {
		console.log(InternalEvent.CHANGE);
		// const addCells = evt.getProperty("removed") as Cell[];  // 消息是add与remove是反的
		// const removeCells = evt.getProperty("added") as Cell[];
		const cells = graph.getSelectionCells() as Cell[];
		selectedCells = cells;
		if (cells.length === 0) {
			widgetProps.curlvglShape = screenObj;
			widgetProps.props = screenObj.getPropsData();
		} else if (cells.length === 1) {
			const id = cells[0].getId() ?? "";
			const shape = getShapeById(graph, id);
			if (shape) {
				widgetProps.curlvglShape = shape;
				widgetProps.props = shape.getPropsData();
			} else {
				widgetProps.curlvglShape = screenObj;
				widgetProps.props = [];
			}
		} else {
			// 多选
			mutilSelect(graph, selectedCells, screenObj);
		}
		api.eventBus.emit(api.constant.maxgraph.CANVAS_WIDGET_SELECT, {
			ids: selectedCells.map((item) => {
				return item.id;
			}),
		});

		widgetProps.selectedCellsLen = cells.length;
		rpc.rpc("selectedChange", {});
		widgetProps.update++; // 强制刷新
	}

	rpc.registerRpcHandler("onPropsChange", (changeInfo: ChangeInfo) => {
		const needUpdateKeys = ["curState", "curSeriesIdx"];
		if (screen.id !== screenStore.curScreen?.id) return;
		if (selectedCells.length === 0) {
			setDeepValue(screenObj.Props, changeInfo.path, changeInfo.newValue);
		} else {
			selectedCells.forEach((c) => {
				const shape = getShapeByCell(graph, c);
				if (!shape) return null;
				setDeepValue(shape.Props, changeInfo.path, changeInfo.newValue);
			});
		}
		if (needUpdateKeys.some((key) => changeInfo.path.includes(key))) {
			const c = selectedCells[0];
			const shape = getShapeByCell(graph, c);
			if (shape) {
				const data = shape.getPropsData();
				widgetProps.props = data;
				widgetProps.update++; // 强制刷新
			}
		}
		if (changeInfo.path.includes("curStyleState")) {
			mutilSelect(graph, selectedCells, screenObj);
		}
		return null;
	});

	graph.getSelectionModel().addListener(InternalEvent.CHANGE, onchange);
}

// let isVisiable = Cell.prototype.isVisible;
// Cell.prototype.isVisible = function (this: Cell): boolean {
//   const style = graph.getCellStyle(this);
//   if (this.visible == false && style.shape?.startsWith("lvgl")) {
//     // @ts-ignore
//     return !this.hiden;
//   }
//   return this.visible;
// }
