import GraphDataModel from '../GraphDataModel.js';
import Cell from '../cell/Cell.js';
import type { UndoableChange } from '../../types.js';
/**
 * Action to add or remove a child in a model.
 *
 * @category Change
 */
export declare class ChildChange implements UndoableChange {
    model: GraphDataModel;
    parent: Cell | null;
    child: Cell;
    previous: Cell | null;
    index: number;
    previousIndex: number;
    constructor(model: GraphDataModel, parent: Cell | null, child: Cell, index?: number);
    /**
     * Changes the parent of {@link child} using {@link GraphDataModel.parentForCellChanged} and removes or restores the cell's connections.
     */
    execute(): void;
    /**
     * Connects the source and the target of the given cell.
     *
     * If {@link isConnect} is true, the source and target terminals are referenced  as such in the model. Otherwise, they are removed.
     */
    connect(cell: Cell, isConnect?: boolean): void;
}
export default ChildChange;
