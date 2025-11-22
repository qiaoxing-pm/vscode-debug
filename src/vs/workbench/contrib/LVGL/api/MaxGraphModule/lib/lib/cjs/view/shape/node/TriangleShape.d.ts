import ActorShape from './ActorShape.js';
import AbstractCanvas2D from '../../canvas/AbstractCanvas2D.js';
/**
 * Implementation of the triangle shape.
 *
 * This shape is registered under `triangle` in {@link CellRenderer} when using {@link Graph} or calling {@link registerDefaultShapes}.
 *
 * @category Vertex Shapes
 */
declare class TriangleShape extends ActorShape {
    constructor();
    /**
     * Adds roundable support.
     * @returns {boolean}
     */
    isRoundable(): boolean;
    /**
     * Draws the path for this shape.
     */
    redrawPath(c: AbstractCanvas2D, x: number, y: number, w: number, h: number): void;
}
export default TriangleShape;
