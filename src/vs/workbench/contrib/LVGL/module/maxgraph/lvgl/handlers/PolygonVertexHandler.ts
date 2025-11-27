import { isMouseEvent, isShiftDown } from "../../packages/core/src/util/EventUtils.js";
import { intersects, toRadians } from "../../packages/core/src/util/mathUtils.js";
import { setOpacity } from "../../packages/core/src/util/styleUtils.js";
import {
	VertexHandler,
	Graph,
	CellState,
	InternalMouseEvent,
	InternalEvent,
	Point,
	type CellHandle,
	Shape,
	ImageBox,
	constants,
	EllipseShape,
	Rectangle,
	ImageShape,
	EventSource
} from "../../packages/core/src/index.js"
import { genRegularPolygonPoints } from "../tools/polygon.js";

const { CURSOR, HANDLE_SIZE } = constants;


export class PointHandle implements CellHandle {
	state: CellState;
	cursor: string;
	shape: Shape | null = null;
	image: ImageBox | null = null;
	active: boolean = false;
	isVirtual: boolean = false;
	graph: Graph;

	getPosition: (bounds: Rectangle) => Point | null;
	setPosition: (bounds: Rectangle, pt: Point, me: InternalMouseEvent) => void;
	executeFn: (me: InternalMouseEvent) => void;

	constructor(state: CellState, isVirtual: boolean = false) {
		this.isVirtual = isVirtual;
		this.state = state;
		this.graph = state.view.graph;
		this.cursor = CURSOR.TERMINAL_HANDLE;
		this.shape = this.createShape();
		this.initShape();

		this.getPosition = (bounds: Rectangle) => {
			return null;
		}
		this.setPosition = (bounds: Rectangle, pt: Point, me: InternalMouseEvent) => {

		}
		this.executeFn = (me: InternalMouseEvent) => {

		}
		if (isVirtual) {
			setOpacity(this.shape.node, 50);
		}
	}

	createShape(): Shape {
		return new EllipseShape(
			new Rectangle(0, 0, HANDLE_SIZE, HANDLE_SIZE),
			"##00a8ff",
			"#00a8ff",
			2
		);
	}

	initShape() {
		if (!this.shape) {
			return;
		}
		this.shape.dialect = constants.DIALECT.SVG;
		if (this.isVirtual) {
			this.shape.setCursor("crosshair");
		} else {
			this.shape.setCursor(this.cursor);
		}
		this.shape.init(this.state.view.getOverlayPane());
		InternalEvent.redirectMouseEvents(this.shape.node, this.graph, this.state);
	}

	setVisible(visible: boolean): void {
		this.shape != null && (this.shape.node.style.display = visible ? '' : 'none');
		this.shape != null && (this.shape.visible = visible);
	};

	// mouse move
	processEvent(me: InternalMouseEvent) {
		const scale = this.state.view.scale;
		const tr = this.graph.view.translate;
		const pt = new Point(me.getGraphX() / scale - tr.x, me.getGraphY() / scale - tr.y);
		// Center shape on mouse cursor
		if (this.shape != null && this.shape.bounds != null) {
			pt.x -= this.shape.bounds.width / 2;
			pt.y -= this.shape.bounds.height / 2;
			this.setPosition(this.state.getPaintBounds()!, pt, me);
		}
		// this.positionChanged();
	}

	// mouse up 中 在excute之后调用
	positionChanged() {
		if (this.state.shape != null) {
			this.graph.cellRenderer.configureShape(this.state);
		}

		this.graph.cellRenderer.redraw(this.state, true);
	};

	// mouse up
	execute(me: InternalMouseEvent) {
		this.executeFn(me);
	}

	reset() {
		this.positionChanged();
	}

	redraw() {
		if (!this.shape || !this.state.shape) {
			return;
		}
		const pt = this.getPosition(this.state.getPaintBounds()!);
		if (pt && this.shape.bounds) {
			const scale = this.graph.view.scale;
			const tr = this.graph.view.translate;
			this.shape.bounds.x = Math.floor((pt.x + tr.x) * scale - this.shape.bounds.width / 2);
			this.shape.bounds.y = Math.floor((pt.y + tr.y) * scale - this.shape.bounds.height / 2);
			// this.shape.bounds.x = (pt.x + tr.x) * scale - this.shape.bounds.width / 2;
			// this.shape.bounds.y = (pt.y + tr.y) * scale - this.shape.bounds.height / 2;
			this.shape.redraw();
		}
	}

	destroy() {
		if (this.shape != null) {
			this.shape.destroy();
			this.shape = null;
		}
	}

}

class PolygonVertexHandler extends VertexHandler {
	virtualHandles: PointHandle[] = [];
	isInit = true;

	constructor(state: CellState) {
		super(state);
		this.virtualHandles = this.createVirtualBends();
		this.redraw();
	}

	isAddPointEvent(me: InternalMouseEvent): boolean {
		return isShiftDown(me.getEvent());
	}

	changePoint(me: InternalMouseEvent): void {
		const event = me.getEvent();
		let pts = this.state.style.polyCoords ?? [];
		const length = pts.length;
		if (event.button === 0 && length <= 12) {
			pts = genRegularPolygonPoints(pts.length + 1);
		} else if (event.button === 2 && length > 4) {
			pts = genRegularPolygonPoints(pts.length - 1);
		}
		this.state.style.polyCoords = pts;
		this.reset();
		this.graph.cellRenderer.redraw(this.state, true);
	}

	// mouseDown(sender: EventSource, me: InternalMouseEvent): void {
	//   if (!me.isConsumed() && this.graph.isEnabled()) {
	//     const handle = this.getHandleForEvent(me);

	//     if (handle) {
	//       this.start(me.getGraphX(), me.getGraphY(), handle);
	//     } else if (handle === null && this.isAddPointEvent(me)) {
	//       this.changePoint(me);
	//     }
	//     me.consume();
	//   }
	// }

	getHandleForEvent(me: InternalMouseEvent): number | null {
		// Connection highlight may consume events before they reach sizer handle
		const tol = !isMouseEvent(me.getEvent()) ? this.tolerance : 1;
		const hit =
			this.allowHandleBoundsCheck && tol > 0
				? new Rectangle(me.getGraphX() - tol, me.getGraphY() - tol, 2 * tol, 2 * tol)
				: null;

		const checkShape = (shape: Shape | null) => {
			const st =
				shape && shape.constructor !== ImageShape && this.allowHandleBoundsCheck
					? shape.strokeWidth + shape.svgStrokeTolerance
					: null;
			const real = st
				? new Rectangle(
					me.getGraphX() - Math.floor(st / 2),
					me.getGraphY() - Math.floor(st / 2),
					st,
					st
				)
				: hit;

			return (
				shape &&
				shape.bounds &&
				(me.isSource(shape) ||
					(real &&
						intersects(shape.bounds, real) &&
						shape.node.style.display !== 'none' &&
						shape.node.style.visibility !== 'hidden'))
			);
		};

		if (checkShape(this.rotationShape)) {
			return InternalEvent.ROTATION_HANDLE;
		}
		if (checkShape(this.labelShape)) {
			return InternalEvent.LABEL_HANDLE;
		}

		for (let i = 0; i < this.sizers.length; i += 1) {
			if (checkShape(this.sizers[i])) {
				return i;
			}
		}

		for (let i = this.customHandles.length - 1; i >= 0; i--) {
			if (checkShape(this.customHandles[i].shape)) {
				// LATER: Return reference to active shape
				return InternalEvent.CUSTOM_HANDLE - i;
			}
		}

		for (let i = this.virtualHandles.length - 1; i >= 0; i--) {
			if (checkShape(this.virtualHandles[i].shape)) {
				return InternalEvent.VIRTUAL_HANDLE - i;
			}
		}

		return null;
	}

	mouseMove(sender: EventSource, me: InternalMouseEvent): void {
		if (me.isConsumed() || this.index == null) {
			if (!this.graph.isMouseDown && this.getHandleForEvent(me)) {
				me.consume(false);
			}
			return;
		}
		// Checks tolerance for ignoring single clicks
		this.checkTolerance(me);
		if (this.inTolerance) {
			me.consume();
			return;
		}
		if (this.index <= InternalEvent.CUSTOM_HANDLE && this.index > InternalEvent.VIRTUAL_HANDLE) {
			if (this.customHandles != null) {
				// 自定义的handle位置也会影响Virtual的位置
				const handle = this.customHandles[InternalEvent.CUSTOM_HANDLE - this.index];
				handle.processEvent(me);
				handle.redraw();
				handle.active = true;
				let idx = InternalEvent.CUSTOM_HANDLE - this.index;
				let next = (idx - 1 + this.virtualHandles.length) % this.virtualHandles.length;
				this.virtualHandles[idx].active = false;
				this.virtualHandles[next].active = false;
				this.virtualHandles[idx].redraw();
				this.virtualHandles[next].redraw();

				if (this.ghostPreview != null) {
					this.ghostPreview.apply(this.state);
					this.ghostPreview.strokeWidth =
						this.getSelectionStrokeWidth() /
						this.ghostPreview.scale /
						this.ghostPreview.scale;
					this.ghostPreview.isDashed = this.isSelectionDashed();
					this.ghostPreview.stroke = this.getSelectionColor();
					this.ghostPreview.redraw();

					if (this.selectionBounds != null) {
						this.selectionBorder.node.style.display = 'none';
					}
				} else {
					if (this.movePreviewToFront) {
						this.moveToFront();
					}

					this.customHandles[
						InternalEvent.CUSTOM_HANDLE - this.index
					].positionChanged();
				}
			}
		} else if (this.index <= InternalEvent.VIRTUAL_HANDLE) {
			const handle = this.virtualHandles[InternalEvent.VIRTUAL_HANDLE - this.index];
			handle.processEvent(me);
			handle.active = true;
			handle.redraw();
			handle.positionChanged();
		} else if (this.index === InternalEvent.LABEL_HANDLE) {
			this.moveLabel(me);
		} else {
			if (this.index === InternalEvent.ROTATION_HANDLE) {
				this.rotateVertex(me);
			} else {
				this.resizeVertex(me);
			}
			this.updateHint(me);
		}
		me.consume();
	}

	mouseUp(sender: EventSource, me: InternalMouseEvent): void {
		if (this.index == null || this.state == null) {
			return;
		}
		const point = new Point(me.getGraphX(), me.getGraphY());
		const { index } = this;
		this.index = null;
		if (this.ghostPreview == null) {
			// Required to restore order in case of no change
			this.state.view.invalidate(this.state.cell, false, false);
			this.state.view.validate();
		}
		this.graph.batchUpdate(() => {
			if (this.customHandles != null && index <= InternalEvent.CUSTOM_HANDLE && index > InternalEvent.VIRTUAL_HANDLE) {
				const style = this.state.view.graph.getCellStyle(this.state.cell);

				this.customHandles[InternalEvent.CUSTOM_HANDLE - index].active = false;
				this.customHandles[InternalEvent.CUSTOM_HANDLE - index].execute(me);

				// Sets style and apply on shape to force repaint and
				// check if execute has removed custom handles
				if (
					this.customHandles != null &&
					this.customHandles[InternalEvent.CUSTOM_HANDLE - index] != null
				) {
					this.state.style = style;
					this.customHandles[InternalEvent.CUSTOM_HANDLE - index].positionChanged();
				}
			} else if (this.virtualHandles != null && index <= InternalEvent.VIRTUAL_HANDLE) {
				this.virtualHandles[InternalEvent.VIRTUAL_HANDLE - index].execute(me);
				this.virtualHandles[InternalEvent.VIRTUAL_HANDLE - index].active = false;
				this.virtualHandles[InternalEvent.VIRTUAL_HANDLE - index].positionChanged();
			} else if (index === InternalEvent.ROTATION_HANDLE) {
				if (this.currentAlpha != null) {
					const delta = this.currentAlpha - (this.state.style.rotation ?? 0);

					if (delta !== 0) {
						this.rotateCell(this.state.cell, delta);
					}
				} else {
					this.rotateClick();
				}
			} else {
				const gridEnabled = this.graph.isGridEnabledEvent(me.getEvent());
				const alpha = toRadians(this.state.style.rotation ?? 0);
				const cos = Math.cos(-alpha);
				const sin = Math.sin(-alpha);

				let dx = point.x - this.startX;
				let dy = point.y - this.startY;

				// Rotates vector for mouse gesture
				const tx = cos * dx - sin * dy;
				const ty = sin * dx + cos * dy;

				dx = tx;
				dy = ty;

				const s = this.graph.view.scale;
				const recurse = this.isRecursiveResize(this.state, me);

				this.resizeCell(
					this.state.cell,
					this.roundLength(dx / s),
					this.roundLength(dy / s),
					index,
					gridEnabled,
					this.isConstrainedEvent(me),
					recurse
				);
			}

		});

		me.consume();
		this.reset();
	}

	getSelectionBounds(state: CellState) {
		return new Rectangle(
			Math.round(state.x - 8),
			Math.round(state.y - 8),
			Math.round(state.width + 16),
			Math.round(state.height + 16)
		);
	}

	getSelectionBorderBounds(): Rectangle {
		const state = this.state;
		return new Rectangle(
			Math.round(state.x),
			Math.round(state.y),
			Math.round(state.width),
			Math.round(state.height)
		);
	}

	createCustomHandles(): CellHandle[] {
		const handles: CellHandle[] = [];
		const polyCoords: Point[] = this.state.style.polyCoords ?? [];
		for (let i = 0; i < polyCoords.length; i++) {
			((index: number) => {
				const handle = new PointHandle(this.state);
				handle.getPosition = (bounds: Rectangle) => {
					const point = polyCoords[index];
					if (!point) {
						return null;
					}
					return new Point(
						bounds.x + point.x * bounds.width,
						bounds.y + point.y * bounds.height
					)
					// return new Point(
					//   this.graph.snap(bounds.x + point.x * bounds.width),
					//   this.graph.snap(bounds.y + point.y * bounds.height)
					// );
				};
				handle.setPosition = (bounds: Rectangle, pt: Point, me: InternalMouseEvent) => {
					polyCoords[index] = new Point(
						Math.round(100 * Math.max(0, Math.min(1, (pt.x - bounds.x) / bounds.width))) / 100,
						Math.round(100 * Math.max(0, Math.min(1, (pt.y - bounds.y) / bounds.height))) / 100
					);
					this.state.style.polyCoords = polyCoords;
				};
				handles.push(handle);
			})(i);
		}
		return handles;
	}

	createVirtualBends(): PointHandle[] {
		// return [];
		const handles: PointHandle[] = [];
		const polyCoords: Point[] = this.state.style.polyCoords ?? [];
		for (let i = 0; i < polyCoords.length; i++) {
			const handle = new PointHandle(this.state, true);
			handle.getPosition = (bounds: Rectangle) => {
				if (handle.active) {
					// debugger
					const point = polyCoords[i + 1];
					return new Point(
						(bounds.x + point.x * bounds.width),
						(bounds.y + point.y * bounds.height)
					);
				}
				const point = polyCoords[i];
				const nextPoint = polyCoords[(i + 1) % polyCoords.length];
				if (!point || !nextPoint) {
					return null;
				}
				// return new Point(
				//   this.graph.snap(bounds.x + (point.x + nextPoint.x) * 0.5 * bounds.width),
				//   this.graph.snap(bounds.y + (point.y + nextPoint.y) * 0.5 * bounds.height)
				// );
				return new Point(
					(bounds.x + (point.x + nextPoint.x) * 0.5 * bounds.width),
					(bounds.y + (point.y + nextPoint.y) * 0.5 * bounds.height)
				);
			};
			handle.setPosition = function (bounds: Rectangle, pt: Point, me: InternalMouseEvent) {
				// mouse move 会触发此函数
				const p = new Point(
					Math.round(100 * Math.max(0, Math.min(1, (pt.x - bounds.x) / bounds.width))) / 100,
					Math.round(100 * Math.max(0, Math.min(1, (pt.y - bounds.y) / bounds.height))) / 100
				);
				if (!handle.active) {
					polyCoords.splice(i + 1, 0, p);
				} else {
					polyCoords[i + 1] = p;
				}
				this.state.style.polyCoords = polyCoords;
			}
			handles.push(handle);
		}
		return handles;
	}


	setHandlesVisible(visible: boolean): void {
		this.virtualHandles?.forEach(h => {
			h.setVisible(visible);
		});

		super.setHandlesVisible(visible);
	}

	refresh() {
		// const index = this.index;
		// this.isVirtualHandle(index) &&
		if (this.virtualHandles.length > 0) {
			this.destroyBends(this.virtualHandles);
			this.virtualHandles = this.createVirtualBends();
		}
		// (this.isCustomHandle(index) || this.isVirtualHandle(index)) &&
		if (this.customHandles.length > 0) {
			this.destroyBends(this.customHandles);
			this.customHandles = this.createCustomHandles();
			// (this.state.shape as LvglBase)._widget?.updateWidget();
		}
	}

	reset(): void {
		this.refresh();
		super.reset();
	}

	redraw(ignoreHandles?: boolean): void {
		// if (!this.virtualHandles) {
		//   return;
		// }
		super.redraw(ignoreHandles);
	}

	redrawHandles(): void {
		this.virtualHandles?.forEach(h => {
			h.redraw();
		});
		super.redrawHandles();
	}

	destroyBends(bends: Shape[] | CellHandle[]) {
		if (bends != null) {
			for (let i = 0; i < bends.length; i += 1) {
				if (bends[i] != null) {
					bends[i].destroy();
				}
			}
		}
	}

	isVirtualHandle(index: number | null): boolean {
		return index != null && index <= InternalEvent.VIRTUAL_HANDLE;
	}

	isCustomHandle(index: number | null): boolean {
		return index != null && index <= InternalEvent.CUSTOM_HANDLE && index > InternalEvent.VIRTUAL_HANDLE;
	}

	onDestroy(): void {
		super.onDestroy();
		this.destroyBends(this.virtualHandles);
		this.virtualHandles = [];
	}
}

export default PolygonVertexHandler;
