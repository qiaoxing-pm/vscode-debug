import EventSource from '../view/event/EventSource.js';
import type { AbstractGraph } from './AbstractGraph.js';
import type Cell from './cell/Cell.js';
/**
 * Implements the selection model for a graph.
 *
 * Here is a listener that handles all removed selection cells.
 *
 * ```javascript
 * graph.getSelectionModel().addListener(mxEvent.CHANGE, function(sender, evt) {
 *   const cells = evt.getProperty('added');
 *   for (const cell of cells) {
 *     // Handle cell...
 *   }
 * });
 * ```
 *
 *
 * Event: mxEvent.UNDO
 *
 * Fires after the selection was changed in <changeSelection>. The
 * <code>edit</code> property contains the {@link UndoableEdit} which contains the
 * {@link SelectionChange}.
 *
 * Event: mxEvent.CHANGE
 *
 * Fires after the selection changes by executing an {@link SelectionChange}. The
 * <code>added</code> and <code>removed</code> properties contain arrays of
 * cells that have been added to or removed from the selection, respectively.
 * The names are inverted due to historic reasons. This cannot be changed.
 *
 */
declare class GraphSelectionModel extends EventSource {
    /**
     * Constructs a new graph selection model for the given {@link AbstractGraph}.
     * @param graph Reference to the enclosing {@link AbstractGraph}.
     */
    constructor(graph: AbstractGraph);
    graph: AbstractGraph;
    cells: Cell[];
    /**
     * Specifies the resource key for the status message after a long operation.
     * If the resource for this key does not exist then the value is used as
     * the status message.
     * @default 'done'
     */
    doneResource: string;
    /**
     * Specifies the resource key for the status message while the selection is
     * being updated. If the resource for this key does not exist then the
     * value is used as the status message.
     * @default 'updatingSelection'
     */
    updatingSelectionResource: string;
    /**
     * Specifies if only one selected item at a time is allowed.
     * @default false.
     */
    singleSelection: boolean;
    /**
     * Returns {@link singleSelection} as a boolean.
     */
    isSingleSelection(): boolean;
    /**
     * Sets the {@link singleSelection} flag.
     *
     * @param {boolean} singleSelection Boolean that specifies the new value for
     * {@link singleSelection}.
     */
    setSingleSelection(singleSelection: boolean): void;
    /**
     * Returns true if the given {@link Cell} is selected.
     */
    isSelected(cell: Cell): boolean;
    /**
     * Returns true if no cells are currently selected.
     */
    isEmpty(): boolean;
    /**
     * Clears the selection and fires a {@link change} event if the selection was not
     * empty.
     */
    clear(): void;
    /**
     * Selects the specified {@link Cell} using {@link setCells}.
     *
     * @param cell {@link Cell} to be selected.
     */
    setCell(cell: Cell): void;
    /**
     * Selects the given array of {@link Cell} and fires a {@link change} event.
     *
     * @param cells Array of {@link Cell} to be selected.
     */
    setCells(cells: Cell[]): void;
    /**
     * Returns the first selectable cell in the given array of cells.
     */
    getFirstSelectableCell(cells: Cell[]): Cell | null;
    /**
     * Adds the given {@link Cell} to the selection and fires a {@link select} event.
     *
     * @param cell {@link Cell} to add to the selection.
     */
    addCell(cell: Cell): void;
    /**
     * Adds the given array of {@link Cell} to the selection and fires a {@link select}
     * event.
     *
     * @param cells Array of {@link Cell} to add to the selection.
     */
    addCells(cells: Cell[]): void;
    /**
     * Removes the specified {@link Cell} from the selection and fires a {@link select}
     * event for the remaining cells.
     *
     * @param cell {@link Cell} to remove from the selection.
     */
    removeCell(cell: Cell): void;
    /**
     * Removes the specified {@link Cell} from the selection and fires a {@link select}
     * event for the remaining cells.
     *
     * @param cells {@link Cell}s to remove from the selection.
     */
    removeCells(cells: Cell[]): void;
    /**
     * Adds/removes the specified arrays of {@link Cell} to/from the selection.
     *
     * @param added Array of {@link Cell} to add to the selection.
     * @param remove Array of {@link Cell} to remove from the selection.
     */
    changeSelection(added?: Cell[] | null, removed?: Cell[] | null): void;
    /**
     * Inner callback to add the specified {@link Cell} to the selection. No event
     * is fired in this implementation.
     *
     * Paramters:
     *
     * @param cell {@link Cell} to add to the selection.
     */
    cellAdded(cell: Cell): void;
    /**
     * Inner callback to remove the specified {@link Cell} from the selection. No
     * event is fired in this implementation.
     *
     * @param cell {@link Cell} to remove from the selection.
     */
    cellRemoved(cell: Cell): void;
}
export default GraphSelectionModel;
