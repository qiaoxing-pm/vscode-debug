import Shape from '../Shape.js';
import AbstractCanvas2D from '../../canvas/AbstractCanvas2D.js';
import Rectangle from '../../geometry/Rectangle.js';
import { ColorValue } from '../../../types.js';
/**
 * Extends {@link Shape} to implement a rectangle shape.
 *
 * This shape is registered under `rectangle` in {@link CellRenderer} when using {@link Graph} or calling {@link registerDefaultShapes}.
 *
 * @category Vertex Shapes
 */
declare class RectangleShape extends Shape {
    constructor(bounds: Rectangle, fill: ColorValue, stroke: ColorValue, strokeWidth?: number);
    /**
     * Returns true for non-rounded, non-rotated shapes with no glass gradient.
     */
    isHtmlAllowed(): boolean;
    /**
     * Generic background painting implementation.
     */
    paintBackground(c: AbstractCanvas2D, x: number, y: number, w: number, h: number): void;
    /**
     * Adds roundable support.
     */
    isRoundable(c: AbstractCanvas2D, x: number, y: number, w: number, h: number): boolean;
    /**
     * Generic background painting implementation.
     */
    paintForeground(c: AbstractCanvas2D, x: number, y: number, w: number, h: number): void;
}
export default RectangleShape;
