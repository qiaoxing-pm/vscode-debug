import Cell from '../cell/Cell.js';
import GraphDataModel from '../GraphDataModel.js';
import type { CellStyle, UndoableChange } from '../../types.js';
/**
 * Action to change a cell's style in a model.
 *
 * @category Change
 */
declare class StyleChange implements UndoableChange {
    model: GraphDataModel;
    cell: Cell;
    style: CellStyle;
    previous: CellStyle;
    constructor(model: GraphDataModel, cell: Cell, style: CellStyle);
    /**
     * Changes the style of {@link cell} to {@link previous} using {@link GraphDataModel.styleForCellChanged}.
     */
    execute(): void;
}
export default StyleChange;
