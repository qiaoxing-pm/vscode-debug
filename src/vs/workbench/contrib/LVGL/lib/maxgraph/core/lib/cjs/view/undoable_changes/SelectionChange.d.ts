import type { UndoableChange } from '../../types.js';
import { AbstractGraph } from '../AbstractGraph.js';
import Cell from '../cell/Cell.js';
/**
 * Action to change the current root in a view.
 *
 * @category Change
 */
declare class SelectionChange implements UndoableChange {
    constructor(graph: AbstractGraph, added?: Cell[], removed?: Cell[]);
    graph: AbstractGraph;
    added: Cell[];
    removed: Cell[];
    /**
     * Changes the current root of the view.
     */
    execute(): void;
}
export default SelectionChange;
