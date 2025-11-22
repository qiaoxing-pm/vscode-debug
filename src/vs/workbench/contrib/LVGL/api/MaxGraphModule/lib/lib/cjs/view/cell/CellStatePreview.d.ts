import Point from '../geometry/Point.js';
import type CellState from './CellState.js';
import type Cell from './Cell.js';
import type { AbstractGraph } from '../AbstractGraph.js';
interface CellDelta {
    point: Point;
    state: CellState;
}
/**
 * Implements a live preview for moving cells.
 */
declare class CellStatePreview {
    constructor(graph: AbstractGraph);
    /**
     * Reference to the enclosing {@link AbstractGraph}.
     */
    graph: AbstractGraph;
    deltas: Map<Cell, CellDelta>;
    /**
     * Contains the number of entries in the map.
     */
    count: number;
    /**
     * Returns true if this contains no entries.
     */
    isEmpty(): boolean;
    moveState(state: CellState, dx: number, dy: number, add?: boolean, includeEdges?: boolean): Point;
    /**
     *
     * @param {Function} visitor
     */
    show(visitor?: Function | null): void;
    translateState(state: CellState, dx: number, dy: number): void;
    revalidateState(state: CellState, dx: number, dy: number, visitor?: Function | null): void;
    addEdges(state: CellState): void;
}
export default CellStatePreview;
