import Cell from '../cell/Cell.js';
import GraphDataModel from '../GraphDataModel.js';
import type { UndoableChange } from '../../types.js';
/**
 * Action to change a terminal in a model.
 *
 * @category Change
 */
export declare class TerminalChange implements UndoableChange {
    model: GraphDataModel;
    cell: Cell;
    terminal: Cell | null;
    previous: Cell | null;
    source: boolean;
    constructor(model: GraphDataModel, cell: Cell, terminal: Cell | null, source: boolean);
    /**
     * Changes the terminal of {@link cell} to {@link previous} using {@link GraphDataModel.terminalForCellChanged}.
     */
    execute(): void;
}
export default TerminalChange;
