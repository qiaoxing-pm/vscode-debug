import Shape from '../Shape.js';
import AbstractCanvas2D from '../../canvas/AbstractCanvas2D.js';
import Rectangle from '../../geometry/Rectangle.js';
import { ColorValue } from '../../../types.js';
/**
 * Extends {@link Shape} to implement a horizontal line shape.
 *
 * The shape is used to represent edges, not vertices.
 *
 * This shape is registered under `line` in {@link CellRenderer} when using {@link Graph} or calling {@link registerDefaultShapes}.
 *
 * @category Edge Shapes
 */
declare class LineShape extends Shape {
    constructor(bounds: Rectangle, stroke: ColorValue, strokeWidth?: number, vertical?: boolean);
    /**
     * Whether to paint a vertical line.
     */
    vertical: boolean;
    /**
     * Redirects to redrawPath for subclasses to work.
     * @param {AbstractCanvas2D} c
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     */
    paintVertexShape(c: AbstractCanvas2D, x: number, y: number, w: number, h: number): void;
}
export default LineShape;
