import Cell from '../cell/Cell.js';
import type { UndoableChange } from '../../types.js';
/**
 * Action to change the attribute of a cell's user object.
 * There is no method on the graph model that uses this action.
 *
 * To use the action, you can use the code shown in the example below.
 *
 * ### Example
 *
 * To change the attributeName in the cell's user object to attributeValue, use the following code:
 *
 * ```javascript
 * model.beginUpdate();
 * try {
 *   const edit = new CellAttributeChange(cell, attributeName, attributeValue);
 *   model.execute(edit);
 * } finally {
 *   model.endUpdate();
 * }
 * ```
 *
 * @category Change
 */
declare class CellAttributeChange implements UndoableChange {
    cell: Cell;
    attribute: string;
    value: any;
    previous: any;
    /**
     * Constructs a change of an attribute of the DOM node stored as the value of the given {@link Cell}`.
     */
    constructor(cell: Cell, attribute: string, value: any);
    /**
     * Changes the attribute of the cell's user object by
     * using {@link Cell#setAttribute}.
     */
    execute(): void;
}
export default CellAttributeChange;
