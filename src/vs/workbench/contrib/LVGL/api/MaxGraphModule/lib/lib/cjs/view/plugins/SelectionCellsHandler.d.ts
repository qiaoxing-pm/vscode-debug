import EventSource from '../event/EventSource.js';
import EventObject from '../event/EventObject.js';
import type { AbstractGraph } from '../AbstractGraph.js';
import Cell from '../cell/Cell.js';
import CellState from '../cell/CellState.js';
import type { GraphPlugin, MouseListenerSet } from '../../types.js';
import type EdgeHandler from '../handler/EdgeHandler.js';
import type VertexHandler from '../handler/VertexHandler.js';
import InternalMouseEvent from '../event/InternalMouseEvent.js';
type Handler = EdgeHandler | VertexHandler;
/**
 * An event handler that manages cell handlers and invokes their mouse event processing functions.
 *
 * ### Events
 *
 * #### InternalEvent.ADD
 *
 * Fires if a cell has been added to the selection.
 * The `state` property contains the {@link CellState} that has been added.
 *
 * #### InternalEvent.REMOVE
 *
 * Fires if a cell has been remove from the selection.
 * The `state` property contains the {@link CellState} that has been removed.
 *
 * @category Plugin
 */
declare class SelectionCellsHandler extends EventSource implements GraphPlugin, MouseListenerSet {
    static readonly pluginId = "SelectionCellsHandler";
    constructor(graph: AbstractGraph);
    /**
     * Reference to the enclosing {@link AbstractGraph}.
     */
    graph: AbstractGraph;
    /**
     * Specifies if events are handled.
     * @default true
     */
    enabled: boolean;
    /**
     * Keeps a reference to an event listener for later removal.
     */
    refreshHandler: (sender: EventSource, evt: EventObject) => void;
    /**
     * Defines the maximum number of handlers to paint individually.
     * @default 100
     */
    maxHandlers: number;
    /**
     * Maps from cells to handlers.
     */
    handlers: Map<Cell, Handler>;
    /**
     * Returns {@link enabled}.
     */
    isEnabled(): boolean;
    /**
     * Sets {@link enabled}.
     */
    setEnabled(value: boolean): void;
    /**
     * Returns the handler for the given cell.
     */
    getHandler(cell: Cell): Handler | undefined;
    /**
     * Returns true if the given cell has a handler.
     */
    isHandled(cell: Cell): boolean;
    /**
     * Resets all handlers.
     */
    reset(): void;
    /**
     * Reloads or updates all handlers.
     */
    getHandledSelectionCells(): Cell[];
    /**
     * Reloads or updates all handlers.
     */
    refresh(): void;
    /**
     * Returns true if the given handler is active and should not be redrawn.
     */
    isHandlerActive(handler: Handler): boolean;
    /**
     * Updates the handler for the given shape if one exists.
     */
    updateHandler(state: CellState): void;
    /**
     * Redirects the given event to the handlers.
     */
    mouseDown(sender: EventSource, me: InternalMouseEvent): void;
    /**
     * Redirects the given event to the handlers.
     */
    mouseMove(sender: EventSource, me: InternalMouseEvent): void;
    /**
     * Redirects the given event to the handlers.
     */
    mouseUp(sender: EventSource, me: InternalMouseEvent): void;
    /**
     * Destroys the handler and all its resources and DOM nodes.
     */
    onDestroy(): void;
}
export default SelectionCellsHandler;
