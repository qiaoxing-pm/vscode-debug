import type GraphView from '../GraphView.js';
import type Cell from '../cell/Cell.js';
import type { UndoableChange } from '../../types.js';
/**
 * Action to change the current root in a view.
 *
 * @category Change
 */
declare class CurrentRootChange implements UndoableChange {
    view: GraphView;
    root: Cell | null;
    previous: Cell | null;
    isUp: boolean;
    constructor(view: GraphView, root: Cell | null);
    /**
     * Changes the current root of the view.
     */
    execute(): void;
}
export default CurrentRootChange;
