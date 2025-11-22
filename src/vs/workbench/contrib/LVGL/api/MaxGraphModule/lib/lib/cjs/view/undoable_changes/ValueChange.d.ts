import Cell from '../cell/Cell.js';
import GraphDataModel from '../GraphDataModel.js';
import type { UndoableChange } from '../../types.js';
/**
 * Action to change a user object in a model.
 *
 * @category Change
 */
declare class ValueChange implements UndoableChange {
    model: GraphDataModel;
    cell: Cell;
    value: unknown;
    previous: unknown;
    constructor(model: GraphDataModel, cell: Cell, value: unknown);
    /**
     * Changes the value of {@link cell} to {@link previous} using {@link GraphDataModel.valueForCellChanged}.
     */
    execute(): void;
}
export default ValueChange;
