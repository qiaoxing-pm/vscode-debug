import EventSource from '../event/EventSource.js';
import EventObject from '../event/EventObject.js';
import PanningManager from '../other/PanningManager.js';
import InternalMouseEvent from '../event/InternalMouseEvent.js';
import type { GraphPlugin, MouseEventListener, MouseListenerSet } from '../../types.js';
import type { AbstractGraph } from '../AbstractGraph.js';
/**
 * Event handler that pans and creates popupmenus.
 *
 * To use the left mouse button for panning without interfering with cell moving and resizing, use {@link useLeftButtonForPanning} and {@link ignoreCell}.
 *
 * For grid size steps while panning, use {@link useGrid}.
 *
 * When registered in the {@link AbstractGraph.constructor} plugins list, it can be enabled using {@link AbstractGraph.setPanning}.
 *
 * ### Events
 *
 * **{@link InternalEvent.PAN_START}**
 *
 * Fires when the panning handler changes its {@link active} state to `true`.
 *
 * In the {@link EventObject} parameter of the listener function, the `event` property contains the corresponding {@link MouseEvent}.
 *
 * **{@link InternalEvent.PAN}**
 *
 * Fires while handle is processing events.
 *
 * In the {@link EventObject} parameter of the listener function, the `event` property contains the corresponding {@link MouseEvent}.
 *
 * **{@link InternalEvent.PAN_END}**
 *
 * Fires when the panning handler changes its {@link active} state to `false`.
 *
 * In the {@link EventObject} parameter of the listener function, the `event` property contains the corresponding {@link MouseEvent}.
 *
 * @category Plugin
 * @category Navigation
 */
declare class PanningHandler extends EventSource implements GraphPlugin, MouseListenerSet {
    static pluginId: string;
    constructor(graph: AbstractGraph);
    /**
     * Reference to the enclosing {@link AbstractGraph}.
     */
    graph: AbstractGraph;
    panningManager: PanningManager;
    getPanningManager: () => PanningManager;
    /**
     * Specifies if panning should be active for the left mouse button.
     * Setting this to true may conflict with {@link RubberBandHandler}.
     *
     * @default false
     */
    useLeftButtonForPanning: boolean;
    /**
     * Specifies if {@link Event.isPopupTrigger} should also be used for panning.
     * @default true
     */
    usePopupTrigger: boolean;
    /**
     * Specifies if panning should be active even if there is a cell under the mouse pointer.
     * @default false
     */
    ignoreCell: boolean;
    /**
     * Specifies if the panning should be previewed.
     * @default true
     */
    previewEnabled: boolean;
    /**
     * Specifies if the panning steps should be aligned to the grid size.
     * @default false
     */
    useGrid: boolean;
    /**
     * Specifies if panning should be enabled.
     * @default false
     */
    panningEnabled: boolean;
    /**
     * Specifies if pinch gestures should be handled as zoom.
     * @default true
     */
    pinchEnabled: boolean;
    initialScale: number;
    /**
     * Specifies the maximum scale.
     * @default 8
     */
    maxScale: number;
    /**
     * Specifies the minimum scale.
     * @default 0.01
     */
    minScale: number;
    /**
     * Holds the current horizontal offset.
     */
    dx: number;
    /**
     * Holds the current vertical offset.
     */
    dy: number;
    /**
     * Holds the x-coordinate of the start point.
     */
    startX: number;
    /**
     * Holds the y-coordinate of the start point.
     */
    startY: number;
    dx0: number;
    dy0: number;
    panningTrigger: boolean;
    active: boolean;
    forcePanningHandler: (sender: EventSource, evt: EventObject) => void;
    gestureHandler: (sender: EventSource, evt: EventObject) => void;
    mouseUpListener: MouseEventListener;
    mouseDownEvent: InternalMouseEvent | null;
    /**
     * Returns true if the handler is currently active.
     */
    isActive(): boolean;
    /**
     * Returns <panningEnabled>.
     */
    isPanningEnabled(): boolean;
    /**
     * Sets <panningEnabled>.
     */
    setPanningEnabled(value: boolean): void;
    /**
     * Returns <pinchEnabled>.
     */
    isPinchEnabled(): boolean;
    /**
     * Sets <pinchEnabled>.
     */
    setPinchEnabled(value: boolean): void;
    /**
     * Returns true if the given event is a panning trigger for the optional
     * given cell. This returns true if control-shift is pressed or if
     * <usePopupTrigger> is true and the event is a popup trigger.
     */
    isPanningTrigger(me: InternalMouseEvent): boolean;
    /**
     * Returns true if the given {@link MouseEvent} should start panning.
     *
     * This implementation always returns `true` if {@link ignoreCell} is `true` or for multi touch events.
     */
    isForcePanningEvent(me: InternalMouseEvent): any;
    /**
     * Handles the event by initiating the panning. By consuming the event all
     * subsequent events of the gesture are redirected to this handler.
     */
    mouseDown(_sender: EventSource, me: InternalMouseEvent): void;
    /**
     * Starts panning at the given event.
     */
    start(me: InternalMouseEvent): void;
    /**
     * Consumes the given {@link MouseEvent} if it was a panning trigger in
     * {@link ouseDown}. The default is to invoke {@link MouseEvent#consume}. Note that this
     * will block any further event processing. If you haven't disabled built-in
     * context menus and require immediate selection of the cell on mouseDown in
     * Safari and/or on the Mac, then use the following code:
     *
     * ```javascript
     * consumePanningTrigger(me)
     * {
     *   if (me.evt.preventDefault)
     *   {
     *     me.evt.preventDefault();
     *   }
     *
     *   // Stops event processing in IE
     *   me.evt.returnValue = false;
     *
     *   // Sets local consumed state
     *   if (!Client.IS_SF && !Client.IS_MAC)
     *   {
     *     me.consumed = true;
     *   }
     * };
     * ```
     */
    consumePanningTrigger(me: InternalMouseEvent): void;
    /**
     * Handles the event by updating the panning on the graph.
     */
    mouseMove(_sender: EventSource, me: InternalMouseEvent): void;
    /**
     * Handles the event by setting the translation on the view or showing the
     * popupmenu.
     */
    mouseUp(_sender: EventSource, me: InternalMouseEvent): void;
    /**
     * Zooms the graph to the given value and consumed the event if needed.
     */
    zoomGraph(evt: Event): void;
    /**
     * Handles the event by setting the translation on the view or showing the
     * popupmenu.
     */
    reset(): void;
    /**
     * Pans {@link graph} by the given amount.
     */
    panGraph(dx: number, dy: number): void;
    /**
     * Destroys the handler and all its resources and DOM nodes.
     */
    onDestroy(): void;
}
export default PanningHandler;
