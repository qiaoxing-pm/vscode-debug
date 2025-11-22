import Point from '../geometry/Point.js';
import CellStatePreview from '../cell/CellStatePreview.js';
import Animation from './Animation.js';
import type CellState from '../cell/CellState.js';
import type Cell from '../cell/Cell.js';
import type { AbstractGraph } from '../AbstractGraph.js';
/**
 * Implements animation for morphing cells.
 *
 * Here is an example of using this class for animating the result of a layout algorithm:
 *
 * ```javascript
 * graph.getDataModel().beginUpdate();
 * try {
 *   const circleLayout = new CircleLayout(graph);
 *   circleLayout.execute(graph.getDefaultParent());
 * } finally {
 *   const morph = new Morphing(graph);
 *   morph.addListener(mxEvent.DONE, () => {
 *     graph.getDataModel().endUpdate();
 *   });
 *
 *   morph.startAnimation();
 * }
 * ```
 *
 * @category Animation
 */
declare class Morphing extends Animation {
    /**
     * Constructs an animation.
     *
     * @param graph Reference to the enclosing {@link AbstractGraph}.
     * @param steps Optional number of steps in the morphing animation. Default is 6.
     * @param ease Optional easing constant for the animation. Default is 1.5.
     * @param delay Optional delay between the animation steps. Passed to {@link Animation}.
     */
    constructor(graph: AbstractGraph, steps?: number, ease?: number, delay?: number);
    graph: AbstractGraph;
    /**
     * Specifies the maximum number of steps for the morphing.
     */
    steps: number;
    /**
     * Contains the current step.
     */
    step: number;
    /**
     * Ease-off for movement towards the given vector. Larger values are
     * slower and smoother. Default is 4.
     */
    ease: number;
    /**
     * Optional array of cells to be animated. If this is not specified
     * then all cells are checked and animated if they have been moved
     * in the current transaction.
     */
    cells: Cell[] | null;
    /**
     * Animation step.
     */
    updateAnimation(): void;
    /**
     * Shows the changes in the given <CellStatePreview>.
     */
    show(move: CellStatePreview): void;
    /**
     * Animates the given cell state using <CellStatePreview.moveState>.
     */
    animateCell(cell: Cell, move: CellStatePreview, recurse?: boolean): void;
    /**
     * Returns true if the animation should not recursively find more
     * deltas for children if the given parent state has been animated.
     */
    stopRecursion(state?: CellState | null, delta?: Point | null): boolean;
    /**
     * Returns the vector between the current rendered state and the future
     * location of the state after the display will be updated.
     */
    getDelta(state: CellState): Point;
    /**
     * Returns the top, left corner of the given cell. TODO: Improve performance
     * by using caching inside this method as the result per cell never changes
     * during the lifecycle of this object.
     */
    getOriginForCell(cell?: Cell | null): Point | null;
}
export default Morphing;
