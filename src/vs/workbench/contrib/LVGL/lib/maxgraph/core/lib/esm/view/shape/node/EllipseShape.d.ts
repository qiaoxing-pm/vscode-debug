import Shape from '../Shape.js';
import AbstractCanvas2D from '../../canvas/AbstractCanvas2D.js';
import Rectangle from '../../geometry/Rectangle.js';
/**
 * Extends {@link Shape} to implement an ellipse shape.
 *
 * This shape is registered under `ellipse` in {@link CellRenderer} when using {@link Graph} or calling {@link registerDefaultShapes}.
 *
 * @category Vertex Shapes
 */
declare class EllipseShape extends Shape {
    constructor(bounds: Rectangle, fill: string, stroke: string, strokeWidth?: number);
    /**
     * Paints the ellipse shape.
     */
    paintVertexShape(c: AbstractCanvas2D, x: number, y: number, w: number, h: number): void;
}
export default EllipseShape;
