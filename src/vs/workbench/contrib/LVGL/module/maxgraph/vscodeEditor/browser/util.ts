import { Point } from '../../../../api/MaxGraphModule/lib/lib/esm/index.js';
import DragSource from '../../../../api/MaxGraphModule/lib/lib/esm/view/other/DragSource.js';
import { TOOLTIP_VERTICAL_OFFSET } from '../../../../api/MaxGraphModule/lib/lib/esm/util/Constants.js';
import type { Cell, Graph } from '../../../../lib/packages/core/src/index.js';
import { screenStore } from '../../lvgl/store/index.js';
import { DropHandler } from '../../packages/core/src/view/other/DragSource.js';
import type { preDropWidgetInfoType } from "../../type.js";



export const widgetListDragEnd = (graph: Graph, x: number, y: number, preDropWidgetInfo: preDropWidgetInfoType): Cell => {
	let cell = graph.getCellAt(x, y);
	const root = graph.getDefaultParent();
	if (!cell) {
		return root;
	}

	if (cell.visible === false) {
		return root;
	}

	let dropType = cell.style?.shape?.toLowerCase();
	const type = preDropWidgetInfo.type.toLowerCase();

	if (!dropType || (dropType && !dropType.startsWith("lvgl_"))) {
		return root;
	}

	dropType = dropType.replace("lvgl_", "");
	if (!isValidDropTarget(type, dropType)) {
		return root;
	}

	return cell;


}



export function isValidDropTarget(type: string, targetType: string) {
	const tempType = type.toLowerCase();
	targetType = targetType.toLowerCase();
	if (targetType === "screen") {
		return true;
	}

	if (targetType !== "obj" && targetType !== "button" && targetType !== "tabitem") {
		return false;
	}

	if (targetType === "button" && tempType !== "label") {
		return false;
	}

	return true;
}















// ===== 类型定义 =====

export interface WidgetInfo {
	defaultSize: { w: number; h: number };
	name: string;
}

export interface ScreenStore {
	curGraph: Graph;
	curScreen: {
		screenObj: any;
	} | null;
}

export interface PreDropInfo {
	width: number;
	height: number;
	type: string;
}

export interface DragManagerOptions {
	screenStore: ScreenStore;
	isHmi: boolean;
	graphF: (evt: MouseEvent) => Graph;
	createHMIWidget: (
		type: string,
		x: number,
		y: number,
		w: number,
		h: number,
		screenObj: any
	) => Cell | null;
	genRegularPolygonPoints: (n: number) => any[];
	isValidDropTarget: (child: string, parent: string) => boolean;
	isRoot: (cell: Cell) => boolean;
}

export interface DragActionDestroy {
	destroy(): void;
}






















// ===== 主类封装 =====

export class WidgetDragManager {
	private screenStore: ScreenStore;
	private isHmi: boolean;
	// private createHMIWidget: DragManagerOptions["createHMIWidget"];
	// private genRegularPolygonPoints: DragManagerOptions["genRegularPolygonPoints"];
	// private isValidDropTarget: DragManagerOptions["isValidDropTarget"];
	// private isRoot: DragManagerOptions["isRoot"];

	private preDropWidgetInfo: PreDropInfo = {
		width: 0,
		height: 0,
		type: "",
	};



	private curSelectedWidget: string | null = null;

	constructor(private options: DragManagerOptions) {
		this.screenStore = options.screenStore;
		this.isHmi = options.isHmi;
		// this.createHMIWidget = options.createHMIWidget;
		// this.genRegularPolygonPoints = options.genRegularPolygonPoints;
		// this.isValidDropTarget = options.isValidDropTarget;
		// this.isRoot = options.isRoot;
	}

	private isRoot(cell: Cell | null): boolean {
		return !!cell && (cell.id === "0" || cell.id === "1");
	}


	private isValidDropTarget(type: string, targetType: string) {
		type = type.toLowerCase();
		targetType = targetType.toLowerCase();
		if (targetType === "screen") {
			return true;
		}
		if (
			targetType !== "obj" &&
			targetType !== "button" &&
			targetType !== "tabitem"
		) {
			return false;
		}
		if (targetType === "button" && type !== "label") {
			return false;
		}
		return true; 一个人抢是抢劫
	}

	/** ======================== createDragAction ======================== */
	public createDragAction(node: HTMLElement, widget: WidgetInfo) {
		const preview = document.createElement("div");
		preview.style.width = `${widget.defaultSize.w}px`;
		preview.style.height = `${widget.defaultSize.h}px`;
		preview.style.border = "1px dashed #000";

		this.makeDraggable(
			node,
			this.graphF.bind(this),
			this.dropHandler.bind(this),
			preview,
			0,
			0,
			true,
			true,
			true,
			this.getDropTarget.bind(this)
		);

		node.addEventListener("mousedown", () => {
			this.preDropWidgetInfo.width = widget.defaultSize.w;
			this.preDropWidgetInfo.height = widget.defaultSize.h;
			this.preDropWidgetInfo.type = widget.name;
			this.curSelectedWidget = widget.name;
		});

		return { destroy() { } };
	}


	private genRegularPolygonPoints(sides: number): Point[] {
		if (sides < 3) {
			throw new Error("Polygon must have at least 3 sides");
		}

		const points: Point[] = [];
		const angleStep = (2 * Math.PI) / sides;

		// 生成单位圆坐标
		for (let i = 0; i < sides; i++) {
			const angle = -Math.PI / 2 + i * angleStep; // 顶点朝上
			const x = Math.cos(angle);
			const y = Math.sin(angle);
			points.push(new Point(x, y));
		}

		// 找出边界
		const minX = Math.min(...points.map(p => p.x));
		const maxX = Math.max(...points.map(p => p.x));
		const minY = Math.min(...points.map(p => p.y));
		const maxY = Math.max(...points.map(p => p.y));

		const width = maxX - minX;
		const height = maxY - minY;

		// 归一化到[0,1]
		const normalized = points.map(p => new Point(
			+((p.x - minX) / width).toFixed(2),
			+((p.y - minY) / height).toFixed(2)
		));

		return normalized;
	}

	/** ======================== graphF ======================== */
	private graphF(evt: MouseEvent): Graph {
		return this.screenStore.curGraph;
	}

	/** ======================== dropHandler ======================== */
	private dropHandler(
		graph: Graph,
		evt: MouseEvent,
		parentCell: Cell | null,
		_x?: number,
		_y?: number
	) {
		if (_x == null || _y == null || !this.screenStore.curScreen) return;

		let x = _x;
		let y = _y;
		const { width, height, type } = this.preDropWidgetInfo;
		const dataModel = graph.getDataModel();

		if (!parentCell) parentCell = graph.getDefaultParent();

		if (!this.isRoot(parentCell)) {
			const geo = parentCell.geometry!;
			x -= geo.x;
			y -= geo.y;
		}

		const style = {
			shape: this.isHmi ? "hmi" : `lvgl_${type}`,
			screen: this.screenStore.curScreen.screenObj,
			foldable: false,
			polyCoords: this.genRegularPolygonPoints(5),
		};

		dataModel.batchUpdate(() => {
			let cell: Cell | null = null;

			if (this.isHmi) {
				// cell = this.createHMIWidget(
				// 	type,
				// 	x,
				// 	y,
				// 	width,
				// 	height,
				// 	this.screenStore.curScreen!.screenObj
				// );
				// if (cell) graph.addCell(cell, parentCell!);
			} else {
				cell = graph.insertVertex(
					parentCell!,
					null,
					null,
					x,
					y,
					width,
					height,
					style
				);
			}

			if (cell) graph.setSelectionCell(cell);
		});
	}

	/** ======================== getDropTarget ======================== */
	private getDropTarget(
		graph: Graph,
		x: number,
		y: number,
		evt: MouseEvent
	): Cell {
		const cell = graph.getCellAt(x, y);
		const root = graph.getDefaultParent();
		if (!cell || cell.visible === false) return root;

		let shape = cell.style?.shape?.toLowerCase();
		const childType = this.preDropWidgetInfo.type.toLowerCase();

		if (!shape || !shape.startsWith("lvgl_")) return root;

		const parentType = shape.replace("lvgl_", "");
		return this.isValidDropTarget(childType, parentType) ? cell : root;
	}

	/** ======================== makeDraggable（内部版本） ======================== */
	private makeDraggable(
		element: Element,
		graphF: Graph | ((evt: MouseEvent) => Graph),
		funct: DropHandler,
		dragElement: Element | null = null,
		dx: number | null = null,
		dy: number | null = TOOLTIP_VERTICAL_OFFSET,
		autoscroll: boolean | null = null,
		scalePreview = false,
		highlightDropTargets = true,
		getDropTarget:
			| ((graph: Graph, x: number, y: number, evt: MouseEvent) => Cell)
			| null = null
	) {
		const dragSource = new DragSource(element, funct);

		dragSource.dragOffset = new Point(dx ?? 0, dy ?? TOOLTIP_VERTICAL_OFFSET);

		if (autoscroll != null) dragSource.autoscroll = autoscroll;

		dragSource.setGuidesEnabled(false);

		dragSource.highlightDropTargets = highlightDropTargets;

		if (getDropTarget) dragSource.getDropTarget = getDropTarget;

		dragSource.getGraphForEvent = (evt: MouseEvent) =>
			typeof graphF === "function" ? graphF(evt) : graphF;

		if (dragElement) {
			dragSource.createDragElement = () => dragElement.cloneNode(true) as HTMLElement;

			if (scalePreview) {
				dragSource.createPreviewElement = (graph: Graph) => {
					const el = dragElement.cloneNode(true) as HTMLElement;
					const w = parseInt(el.style.width);
					const h = parseInt(el.style.height);

					el.style.width = `${Math.round(w * graph.view.scale)}px`;
					el.style.height = `${Math.round(h * graph.view.scale)}px`;

					return el;
				};
			}
		}

		return dragSource;
	}
}
