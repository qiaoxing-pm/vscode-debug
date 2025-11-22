import EdgeHandler from './EdgeHandler.js';
import Point from '../geometry/Point.js';
import CellState from '../cell/CellState.js';
/**
 * Graph event handler that reconnects edges and modifies control points and
 * the edge label location. Uses {@link CellMarker} for finding and
 * highlighting new source and target vertices. This handler is automatically
 * created in {@link AbstractGraph.createHandler}. It extends {@link EdgeHandler}.
 *
 * Constructor: mxEdgeHandler
 *
 * Constructs an edge handler for the specified {@link CellState}.
 *
 * @param state {@link CellState} of the cell to be modified.
 */
declare class ElbowEdgeHandler extends EdgeHandler {
    constructor(state: CellState);
    /**
     * Specifies if a double click on the middle handle should call {@link AbstractGraph.flipEdge}.
     * @default true
     */
    flipEnabled: boolean;
    /**
     * Specifies the resource key for the tooltip to be displayed on the single
     * control point for routed edges. If the resource for this key does not
     * exist then the value is used as the error message.
     * @default 'doubleClickOrientation'.
     */
    doubleClickOrientationResource: string;
    /**
     * Overrides {@link EdgeHandler.createBends} to create custom bends.
     */
    createBends(): import("../shape/Shape.js").default[];
    /**
     * Creates a virtual bend that supports double-clicking and calls {@link AbstractGraph.flipEdge}.
     */
    createVirtualBend(dblClickHandler?: (evt: MouseEvent) => void): import("../shape/Shape.js").default;
    /**
     * Returns the cursor to be used for the bend.
     */
    getCursorForBend(): "row-resize" | "col-resize";
    /**
     * Returns the tooltip for the given node.
     */
    getTooltipForNode(node: Element): string | null;
    /**
     * Converts the given point in-place from screen to unscaled, untranslated
     * graph coordinates and applies the grid.
     *
     * @param point {@link Point} to be converted.
     * @param gridEnabled Boolean that specifies if the grid should be applied.
     */
    convertPoint(point: Point, gridEnabled: boolean): Point;
    /**
     * Updates and redraws the inner bends.
     *
     * @param p0 {@link Point} that represents the location of the first point.
     * @param pe {@link Point} that represents the location of the last point.
     */
    redrawInnerBends(p0: Point, pe: Point): void;
}
export default ElbowEdgeHandler;
