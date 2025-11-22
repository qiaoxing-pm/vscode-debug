import Point from '../geometry/Point.js';
import ImageShape from '../shape/node/ImageShape.js';
import Rectangle from '../geometry/Rectangle.js';
import type Shape from '../shape/Shape.js';
import InternalMouseEvent from '../event/InternalMouseEvent.js';
import ImageBox from '../image/ImageBox.js';
import CellState from './CellState.js';
import type { AbstractGraph } from '../AbstractGraph.js';
import type { CellHandle, CellStateStyle } from '../../types.js';
/**
 * Implements a single custom handle for vertices.
 *
 * @class VertexHandle
 */
declare class VertexHandle implements CellHandle {
    dependencies: string[];
    graph: AbstractGraph;
    state: CellState;
    shape: Shape | ImageShape | null;
    /**
     * Specifies the cursor to be used for this handle. Default is 'default'.
     */
    cursor: string;
    /**
     * Specifies the {@link Image} to be used to render the handle. Default is null.
     */
    image: ImageBox | null;
    /**
     * Default is false.
     */
    ignoreGrid: boolean;
    active: boolean;
    constructor(state: CellState, cursor?: string, image?: ImageBox | null, shape?: Shape | null);
    /**
     * Hook for subclassers to return the current position of the handle.
     */
    getPosition(bounds: Rectangle | null): Point;
    /**
     * Hooks for subclassers to update the style in the <state>.
     */
    setPosition(bounds: Rectangle | null, pt: Point, me: InternalMouseEvent): void;
    /**
     * Hook for subclassers to execute the handle.
     */
    execute(me: InternalMouseEvent): void;
    /**
     * Sets the cell style with the given name to the corresponding value in <state>.
     */
    copyStyle(key: keyof CellStateStyle): void;
    /**
     * Processes the given {@link MouseEvent} and invokes <setPosition>.
     */
    processEvent(me: InternalMouseEvent): void;
    /**
     * Should be called after <setPosition> in <processEvent>.
     * This repaints the state using {@link CellRenderer}.
     */
    positionChanged(): void;
    /**
     * Returns the rotation defined in the style of the cell.
     */
    getRotation(): number;
    /**
     * Returns the rotation from the style and the rotation from the direction of
     * the cell.
     */
    getTotalRotation(): number;
    /**
     * Creates and initializes the shapes required for this handle.
     */
    init(): void;
    /**
     * Creates and returns the shape for this handle.
     */
    createShape(_html: boolean): Shape;
    /**
     * Initializes <shape> and sets its cursor.
     */
    initShape(html: boolean): void;
    /**
     * Renders the shape for this handle.
     */
    redraw(): void;
    /**
     * Returns true if this handle should be rendered in HTML. This returns true if
     * the text node is in the graph container.
     */
    isHtmlRequired(): boolean;
    /**
     * Rotates the point by the given angle.
     */
    rotatePoint(pt: Point, alpha: number): Point;
    /**
     * Flips the given point vertically and/or horizontally.
     */
    flipPoint(pt: Point): Point;
    /**
     * Snaps the given point to the grid if ignore is false. This modifies
     * the given point in-place and also returns it.
     */
    snapPoint(pt: Point, ignore: boolean): Point;
    /**
     * Shows or hides this handle.
     */
    setVisible(visible: boolean): void;
    /**
     * Resets the state of this handle by setting its visibility to true.
     */
    reset(): void;
    /**
     * Destroys this handle.
     */
    destroy(): void;
}
export default VertexHandle;
