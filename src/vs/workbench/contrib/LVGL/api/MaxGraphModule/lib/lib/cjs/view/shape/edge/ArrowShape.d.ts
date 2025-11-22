import Shape from '../Shape.js';
import Rectangle from '../../geometry/Rectangle.js';
import AbstractCanvas2D from '../../canvas/AbstractCanvas2D.js';
import Point from '../../geometry/Point.js';
import { ColorValue } from '../../../types.js';
/**
 * Extends {@link Shape} to implement an arrow shape.
 *
 * The shape is used to represent edges, not vertices.
 *
 * This shape is registered under `arrow` in {@link CellRenderer} when using {@link Graph} or calling {@link registerDefaultShapes}.
 *
 * @category Edge Shapes
 */
declare class ArrowShape extends Shape {
    constructor(points: Point[], fill: ColorValue, stroke: ColorValue, strokeWidth?: number, arrowWidth?: number, spacing?: number, endSize?: number);
    arrowWidth: number;
    /**
     * Augments the bounding box with the edge width and markers.
     */
    augmentBoundingBox(bbox: Rectangle): void;
    /**
     * Paints the line shape.
     */
    paintEdgeShape(c: AbstractCanvas2D, pts: Point[]): void;
}
export default ArrowShape;
