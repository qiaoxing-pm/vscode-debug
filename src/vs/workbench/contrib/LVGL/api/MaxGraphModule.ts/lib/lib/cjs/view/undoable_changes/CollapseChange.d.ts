import Cell from '../cell/Cell.js';
import GraphDataModel from '../GraphDataModel.js';
import type { UndoableChange } from '../../types.js';
/**
 * Action to change a cell's collapsed state in a model.
 *
 * @category Change
 */
declare class CollapseChange implements UndoableChange {
    model: GraphDataModel;
    cell: Cell;
    collapsed: boolean;
    previous: boolean;
    constructor(model: GraphDataModel, cell: Cell, collapsed: boolean);
    /**
     * Changes the collapsed state of {@link cell} to {@link previous} using {@link GraphDataModel.collapsedStateForCellChanged}.
     */
    execute(): void;
}
export default CollapseChange;
