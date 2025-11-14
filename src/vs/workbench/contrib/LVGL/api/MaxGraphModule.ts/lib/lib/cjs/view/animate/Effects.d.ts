import type { AbstractGraph } from '../AbstractGraph.js';
import type Cell from '../../view/cell/Cell.js';
import { UndoableChange } from '../../types.js';
/**
 * Provides animation effects.
 *
 * @category Animation
 */
declare class Effects {
    /**
     * Asynchronous animated move operation. See also: <Morphing>.
     *
     * @example
     * ```javascript
     * graph.model.addListener(mxEvent.CHANGE, function(sender, evt)
     * {
     *   var changes = evt.getProperty('edit').changes;
     *
     *   if (changes.length < 10)
     *   {
     *     Effects.animateChanges(graph, changes);
     *   }
     * });
     * ```
     *
     * @param graph - {@link AbstractGraph} that received the changes.
     * @param changes - Array of changes to be animated.
     * @param done - Optional function argument that is invoked after the
     * last step of the animation.
     */
    static animateChanges(graph: AbstractGraph, changes: UndoableChange[], done?: Function): void;
    /**
     * Sets the opacity on the given cell and its descendants.
     *
     * @param graph - {@link AbstractGraph} that contains the cells.
     * @param cell - {@link Cell} to set the opacity for.
     * @param opacity - New value for the opacity in %.
     */
    static cascadeOpacity(graph: AbstractGraph, cell: Cell, opacity: number): void;
    /**
     * Asynchronous fade-out operation.
     */
    static fadeOut(node: HTMLElement, from: number, remove: boolean, step: number, delay: number, isEnabled: boolean): void;
}
export default Effects;
