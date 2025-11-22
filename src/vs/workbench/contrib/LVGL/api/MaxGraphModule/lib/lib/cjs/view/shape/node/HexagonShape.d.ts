import ActorShape from './ActorShape.js';
import AbstractCanvas2D from '../../canvas/AbstractCanvas2D.js';
/**
 * Implementation of the hexagon shape.
 *
 * This shape is registered under `hexagon` in {@link CellRenderer} when using {@link Graph} or calling {@link registerDefaultShapes}.
 *
 * @category Vertex Shapes
 */
declare class HexagonShape extends ActorShape {
    constructor();
    /**
     * Draws the path for this shape.
     */
    redrawPath(c: AbstractCanvas2D, x: number, y: number, w: number, h: number): void;
}
export default HexagonShape;
