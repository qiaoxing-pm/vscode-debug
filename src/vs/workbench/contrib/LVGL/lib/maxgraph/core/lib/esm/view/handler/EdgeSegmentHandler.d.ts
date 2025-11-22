import Point from '../geometry/Point.js';
import ElbowEdgeHandler from './ElbowEdgeHandler.js';
import CellState from '../cell/CellState.js';
import Cell from '../cell/Cell.js';
import InternalMouseEvent from '../event/InternalMouseEvent.js';
declare class EdgeSegmentHandler extends ElbowEdgeHandler {
    constructor(state: CellState);
    points: Point[];
    /**
     * Returns the current absolute points.
     */
    getCurrentPoints(): (Point | null)[];
    /**
     * Updates the given preview state taking into account the state of the constraint handler.
     */
    getPreviewPoints(point: Point): Point[] | null;
    /**
     * Overridden to perform optimization of the edge style result.
     */
    updatePreviewState(edge: CellState, point: Point, terminalState: CellState, me: InternalMouseEvent): void;
    /**
     * Overriden to merge edge segments.
     */
    connect(edge: Cell, terminal: Cell, isSource: boolean, isClone: boolean, me: InternalMouseEvent): Cell;
    /**
     * Returns no tooltips.
     */
    getTooltipForNode(node: Element): string | null;
    /**
     * Adds custom bends for the center of each segment.
     */
    start(x: number, y: number, index: number): void;
    /**
     * Adds custom bends for the center of each segment.
     */
    createBends(): import("../shape/Shape.js").default[];
    /**
     * Overridden to invoke <refresh> before the redraw.
     */
    redraw(): void;
    /**
     * Updates the position of the custom bends.
     */
    redrawInnerBends(p0: Point, pe: Point): void;
}
export default EdgeSegmentHandler;
