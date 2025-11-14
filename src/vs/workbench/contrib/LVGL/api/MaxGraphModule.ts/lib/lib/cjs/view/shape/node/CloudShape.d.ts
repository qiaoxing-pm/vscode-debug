import ActorShape from './ActorShape.js';
import AbstractCanvas2D from '../../canvas/AbstractCanvas2D.js';
import Rectangle from '../../geometry/Rectangle.js';
/**
 * Extends {@link ActorShape} to implement a cloud shape.
 *
 * This shape is registered under `cloud` in {@link CellRenderer} when using {@link Graph} or calling {@link registerDefaultShapes}.
 *
 * @category Vertex Shapes
 */
declare class CloudShape extends ActorShape {
    constructor(bounds: Rectangle, fill: string, stroke: string, strokeWidth?: number);
    /**
     * Draws the path for this shape.
     */
    redrawPath(c: AbstractCanvas2D, x: number, y: number, w: number, h: number): void;
}
export default CloudShape;
