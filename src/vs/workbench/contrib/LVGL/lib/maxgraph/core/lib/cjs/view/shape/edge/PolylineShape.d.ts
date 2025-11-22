import Shape from '../Shape.js';
import Point from '../../geometry/Point.js';
import AbstractCanvas2D from '../../canvas/AbstractCanvas2D.js';
import { ColorValue } from '../../../types.js';
/**
 * Extends {@link Shape} to implement a polyline (a line with multiple points).
 *
 * The shape is used to represent edges, not vertices.
 *
 * This shape is **NOT** registered in {@link CellRenderer} when using {@link Graph} or calling {@link registerDefaultShapes}.
 *
 * @category Edge Shapes
 */
declare class PolylineShape extends Shape {
    /**
     * Constructs a new polyline shape.
     *
     * @param points Array of <{@link Point} that define the points. This is stored in {@link Shape.points}.
     * @param stroke String that defines the stroke color. Default is 'black'. This is stored in {@link Shape.stroke}.
     * @param strokeWidth Optional integer that defines the stroke width. Default is 1. This is stored in {@link Shape.strokeWidth}.
     */
    constructor(points: Point[], stroke: ColorValue, strokeWidth?: number);
    /**
     * Returns 0.
     */
    getRotation(): number;
    /**
     * Returns 0.
     */
    getShapeRotation(): number;
    /**
     * Returns false.
     */
    isPaintBoundsInverted(): boolean;
    /**
     * Paints the line shape.
     */
    paintEdgeShape(c: AbstractCanvas2D, pts: Point[]): void;
    /**
     * Paints the line shape.
     */
    paintLine(c: AbstractCanvas2D, pts: Point[], rounded?: boolean): void;
    /**
     * Paints the line shape.
     */
    paintCurvedLine(c: AbstractCanvas2D, pts: Point[]): void;
}
export default PolylineShape;
