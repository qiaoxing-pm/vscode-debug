import Cell from '../cell/Cell.js';
import GraphDataModel from '../GraphDataModel.js';
import type { UndoableChange } from '../../types.js';
/**
 * Action to change a cell's visible state in a model.
 *
 * @category Change
 */
declare class VisibleChange implements UndoableChange {
    model: GraphDataModel;
    cell: Cell;
    visible: boolean;
    previous: boolean;
    constructor(model: GraphDataModel, cell: Cell, visible: boolean);
    /**
     * Changes the visible state of {@link cell} to {@link previous} using {@link GraphDataModel.visibleStateForCellChanged}.
     */
    execute(): void;
}
export default VisibleChange;
