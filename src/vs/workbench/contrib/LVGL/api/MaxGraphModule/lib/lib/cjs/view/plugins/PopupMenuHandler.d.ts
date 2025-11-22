import MaxPopupMenu from '../../gui/MaxPopupMenu.js';
import type { AbstractGraph } from '../AbstractGraph.js';
import InternalMouseEvent from '../event/InternalMouseEvent.js';
import type { GraphPlugin, MouseListenerSet } from '../../types.js';
import EventSource from '../event/EventSource.js';
import EventObject from '../event/EventObject.js';
/**
 * Event handler that creates popupmenus.
 *
 * Relates to {@link MaxPopupMenu}.
 *
 * @category Plugin
 */
declare class PopupMenuHandler extends MaxPopupMenu implements GraphPlugin, MouseListenerSet {
    static pluginId: string;
    constructor(graph: AbstractGraph);
    gestureHandler: (sender: EventSource, eo: EventObject) => void;
    inTolerance: boolean;
    popupTrigger: boolean;
    /**
     * Reference to the enclosing {@link AbstractGraph}.
     */
    graph: AbstractGraph;
    /**
     * Specifies if cells should be selected if a popupmenu is displayed for
     * them. Default is true.
     */
    selectOnPopup: boolean;
    /**
     * Specifies if cells should be deselected if a popupmenu is displayed for
     * the diagram background. Default is true.
     */
    clearSelectionOnBackground: boolean;
    /**
     * X-coordinate of the mouse down event.
     */
    triggerX: number | null;
    /**
     * Y-coordinate of the mouse down event.
     */
    triggerY: number | null;
    /**
     * Screen X-coordinate of the mouse down event.
     */
    screenX: number | null;
    /**
     * Screen Y-coordinate of the mouse down event.
     */
    screenY: number | null;
    /**
     * Initializes the shapes required for this vertex handler.
     */
    init(): void;
    /**
     * Hook for returning if a cell should be selected for a given {@link MouseEvent}.
     * This implementation returns <selectOnPopup>.
     */
    isSelectOnPopup(me: InternalMouseEvent): boolean;
    /**
     * Handles the event by initiating the panning. By consuming the event all
     * subsequent events of the gesture are redirected to this handler.
     */
    mouseDown(_sender: EventSource, me: InternalMouseEvent): void;
    /**
     * Handles the event by updating the panning on the graph.
     */
    mouseMove(_sender: EventSource, me: InternalMouseEvent): void;
    /**
     * Handles the event by setting the translation on the view or showing the popupmenu.
     */
    mouseUp(_sender: EventSource, me: InternalMouseEvent): void;
    /**
     * Hook to return the cell for the mouse up popup trigger handling.
     */
    getCellForPopupEvent(me: InternalMouseEvent): import("../cell/Cell.js").Cell | null;
    /**
     * Destroys the handler and all its resources and DOM nodes.
     */
    onDestroy(): void;
}
export default PopupMenuHandler;
