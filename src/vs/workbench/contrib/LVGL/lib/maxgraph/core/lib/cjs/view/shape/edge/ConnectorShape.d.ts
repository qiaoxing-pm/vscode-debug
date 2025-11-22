import PolylineShape from './PolylineShape.js';
import Point from '../../geometry/Point.js';
import AbstractCanvas2D from '../../canvas/AbstractCanvas2D.js';
import Rectangle from '../../geometry/Rectangle.js';
import { ColorValue } from '../../../types.js';
/**
 * Extends {@link PolylineShape} to implement a connector shape including a polyline (a line with multiple points)
 * that allows for arrow heads on either side.
 *
 * The shape is used to represent edges, not vertices.
 *
 * This shape is registered under `connector` in {@link CellRenderer} when using {@link Graph} or calling {@link registerDefaultShapes}.
 *
 * @category Edge Shapes
 */
declare class ConnectorShape extends PolylineShape {
    constructor(points: Point[], stroke: ColorValue, strokewidth: number);
    /**
     * Updates the {@link boundingBox} for this shape using {@link createBoundingBox}
     * and {@link augmentBoundingBox} and stores the result in {@link boundingBox}.
     */
    updateBoundingBox(): void;
    /**
     * Paints the line shape.
     */
    paintEdgeShape(c: AbstractCanvas2D, pts: Point[]): void;
    /**
     * Prepares the marker by adding offsets in pts and returning a function to paint the marker.
     */
    createMarker(c: AbstractCanvas2D, pts: Point[], source: boolean): import("../../../types.js").MarkerFunction | null;
    /**
     * Augments the bounding box with the strokewidth and shadow offsets.
     */
    augmentBoundingBox(bbox: Rectangle): void;
}
export default ConnectorShape;
