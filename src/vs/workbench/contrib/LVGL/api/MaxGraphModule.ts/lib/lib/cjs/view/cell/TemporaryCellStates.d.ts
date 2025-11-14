import Rectangle from '../geometry/Rectangle.js';
import type GraphView from '../GraphView.js';
import type Cell from './Cell.js';
import type CellState from './CellState.js';
/**
 * Creates a temporary set of cell states.
 */
declare class TemporaryCellStates {
    oldValidateCellState: (cell: Cell | null, recurse?: boolean) => CellState | null;
    oldDoRedrawShape: (state: CellState) => void;
    view: GraphView;
    /**
     * Holds the states of the rectangle.
     */
    oldStates: Map<Cell, CellState>;
    /**
     * Holds the bounds of the rectangle.
     */
    oldBounds: Rectangle;
    /**
     * Holds the scale of the rectangle.
     */
    oldScale: number;
    constructor(view: GraphView, scale: number | undefined, cells: Cell[], isCellVisibleFn?: Function | null, getLinkForCellState?: Function | null);
    destroy(): void;
}
export default TemporaryCellStates;
