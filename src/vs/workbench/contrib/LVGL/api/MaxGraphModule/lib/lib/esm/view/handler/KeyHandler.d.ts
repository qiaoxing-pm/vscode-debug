import type { AbstractGraph } from '../AbstractGraph.js';
/**
 * Event handler that listens to keystroke events. This is not a singleton,
 * however, it is normally only required once if the target is the document
 * element (default).
 *
 * This handler installs a key event listener in the topmost DOM node and
 * processes all events that originate from descendants of {@link AbstractGraph.container}
 * or from the topmost DOM node. The latter means that all unhandled keystrokes
 * are handled by this object regardless of the focused state of the {@link graph}.
 *
 * Example:
 *
 * The following example creates a key handler that listens to the delete key
 * (46) and deletes the selection cells if the graph is enabled.
 *
 * ```javascript
 * const keyHandler = new KeyHandler(graph);
 * keyHandler.bindKey(46, (evt) => {
 *   if (graph.isEnabled()) {
 *     graph.removeCells();
 *   }
 * });
 * ```
 *
 * Keycodes:
 *
 * See http://tinyurl.com/yp8jgl or http://tinyurl.com/229yqw for a list of
 * keycodes or install a key event listener into the document element and print
 * the key codes of the respective events to the console.
 *
 * To support the Command key and the Control key on the Mac, the following
 * code can be used.
 *
 * ```javascript
 * keyHandler.getFunction = (evt) => {
 *   if (evt) {
 *     return (InternalEvent.isControlDown(evt) || (Client.IS_MAC && evt.metaKey)) ? this.controlKeys[evt.keyCode] : this.normalKeys[evt.keyCode];
 *   }
 *   return null;
 * };
 * ```
 */
declare class KeyHandler {
    /**
     * Constructs an event handler that executes functions bound to specific keystrokes.
     *
     * @param graph Reference to the associated {@link AbstractGraph}.
     * @param target  Optional reference to the event target.
     *                If `null`, the document element is used as the event target, that is, the object where the key event listener is installed.
     */
    constructor(graph: AbstractGraph, target?: Element | null);
    keydownHandler: ((event: KeyboardEvent) => void) | null;
    /**
     * Reference to the {@link AbstractGraph} associated with this handler.
     */
    graph: AbstractGraph | null;
    /**
     * Reference to the target DOM, that is, the DOM node where the key event
     * listeners are installed.
     */
    target: Element | null;
    /**
     * Maps from keycodes to functions for non-pressed control keys.
     */
    normalKeys: {
        [key: number]: Function;
    };
    /**
     * Maps from keycodes to functions for pressed shift keys.
     */
    shiftKeys: {
        [key: number]: Function;
    };
    /**
     * Maps from keycodes to functions for pressed control keys.
     */
    controlKeys: {
        [key: number]: Function;
    };
    /**
     * Maps from keycodes to functions for pressed control and shift keys.
     */
    controlShiftKeys: {
        [key: number]: Function;
    };
    /**
     * Specifies if events are handled. Default is true.
     */
    enabled: boolean;
    /**
     * Returns true if events are handled. This implementation returns
     * <enabled>.
     */
    isEnabled(): boolean;
    /**
     * Enables or disables event handling by updating <enabled>.
     *
     * @param enabled Boolean that specifies the new enabled state.
     */
    setEnabled(enabled: boolean): void;
    /**
     * Binds the specified keycode to the given function. This binding is used
     * if the control key is not pressed.
     *
     * @param code Integer that specifies the keycode.
     * @param funct JavaScript function that takes the key event as an argument.
     */
    bindKey(code: number, funct: Function): void;
    /**
     * Binds the specified keycode to the given function. This binding is used
     * if the shift key is pressed.
     *
     * @param code Integer that specifies the keycode.
     * @param funct JavaScript function that takes the key event as an argument.
     */
    bindShiftKey(code: number, funct: Function): void;
    /**
     * Binds the specified keycode to the given function. This binding is used
     * if the control key is pressed.
     *
     * @param code Integer that specifies the keycode.
     * @param funct JavaScript function that takes the key event as an argument.
     */
    bindControlKey(code: number, funct: Function): void;
    /**
     * Binds the specified keycode to the given function. This binding is used
     * if the control and shift key are pressed.
     *
     * @param code Integer that specifies the keycode.
     * @param funct JavaScript function that takes the key event as an argument.
     */
    bindControlShiftKey(code: number, funct: Function): void;
    /**
     * Returns true if the control key is pressed. This uses {@link Event#isControlDown}.
     *
     * @param evt Key event whose control key pressed state should be returned.
     */
    isControlDown(evt: KeyboardEvent): boolean;
    /**
     * Returns the function associated with the given key event or null if no
     * function is associated with the given event.
     *
     * @param evt Key event whose associated function should be returned.
     */
    getFunction(evt: KeyboardEvent): Function | null;
    /**
     * Returns `true` if the event should be processed by this handler.
     * That is, if the event source is either the target, one of its direct children a descendant of the {@link AbstractGraph.container},
     * or the {@link CellEditorHandler} plugin of the {@link graph}.
     *
     * @param evt Key event that represents the keystroke.
     */
    isGraphEvent(evt: KeyboardEvent): boolean;
    /**
     * Handles the event by invoking the function bound to the respective keystroke
     * if {@link isEnabledForEvent} returns `true` for the given event and if
     * {@link isEventIgnored} returns `false`, except for escape for which
     * {@link isEventIgnored} is not invoked.
     *
     * @param evt Key event that represents the keystroke.
     */
    keyDown(evt: KeyboardEvent): void;
    /**
     * Returns true if the given event should be handled. {@link isEventIgnored} is
     * called later if the event is not an escape keystroke, in which case
     * {@link escape} is called.
     *
     * This implementation returns `true` if  {@link AbstractGraph.isEnabled}
     * returns `true` for both, this handler and {@link graph}, if the event is not
     * consumed and if  {@link isGraphEvent} returns `true`.
     *
     * @param evt Key event that represents the keystroke.
     */
    isEnabledForEvent(evt: KeyboardEvent): boolean | undefined;
    /**
     * Returns true if the given keystroke should be ignored. This returns {@link AbstractGraph.isEditing}.
     *
     * @param evt Key event that represents the keystroke.
     */
    isEventIgnored(evt: KeyboardEvent): boolean;
    /**
     * Hook to process ESCAPE keystrokes. This implementation invokes
     * {@link AbstractGraph.stopEditing} to cancel the current editing, connecting
     * and/or other ongoing modifications.
     *
     * @param evt Key event that represents the keystroke. Possible keycode in this case is 27 (ESCAPE).
     */
    escape(evt: KeyboardEvent): void;
    /**
     * Destroys the handler and all its references into the DOM. This does
     * normally not need to be called, it is called automatically when the
     * window unloads (in IE).
     */
    onDestroy(): void;
}
export default KeyHandler;
