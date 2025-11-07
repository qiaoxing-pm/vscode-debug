import Cell from '../cell/Cell.js';
import GraphDataModel from '../GraphDataModel.js';
import type { UndoableChange } from '../../types.js';
/**
 * Action to change the root in a model.
 *
 * @category Change
 */
export declare class RootChange implements UndoableChange {
    model: GraphDataModel;
    root: Cell | null;
    previous: Cell | null;
    constructor(model: GraphDataModel, root: Cell | null);
    /**
     * Carries out a change of the root using {@link GraphDataModel.rootChanged}.
     */
    execute(): void;
}
export default RootChange;
