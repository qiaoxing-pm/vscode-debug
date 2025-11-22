import type Rectangle from '../../geometry/Rectangle.js';
import Shape from '../Shape.js';
import type AbstractCanvas2D from '../../canvas/AbstractCanvas2D.js';
import { ColorValue } from '../../../types.js';
/**
 * Extends {@link Shape} to implement an actor shape.
 *
 * This shape is registered under `actor` in {@link CellRenderer} when using {@link Graph} or calling {@link registerDefaultShapes}.
 *
 * If a custom shape with one filled area is needed, then this shape's {@link redrawPath} method should be overridden
 * like in the following example:
 *
 * ```typescript
 * class SampleShape extends ActorShape {
 *   redrawPath(c: AbstractCanvas2D, x: number, y: number, w: number, h: number) {
 *     path.moveTo(0, 0);
 *     path.lineTo(w, h);
 *     // ...
 *     path.close();
 *   }
 * }
 * ```
 *
 * @category Vertex Shapes
 */
declare class ActorShape extends Shape {
    constructor(bounds?: Rectangle | null, fill?: ColorValue, stroke?: ColorValue, strokeWidth?: number);
    /**
     * Redirects to redrawPath for subclasses to work.
     */
    paintVertexShape(c: AbstractCanvas2D, x: number, y: number, w: number, h: number): void;
    /**
     * Draws the path for this shape.
     */
    redrawPath(c: AbstractCanvas2D, x: number, y: number, w: number, h: number): void;
}
export default ActorShape;
