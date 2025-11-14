import Point from '../geometry/Point.js';
import Rectangle from '../geometry/Rectangle.js';
import type Cell from './Cell.js';
import type GraphView from '../../view/GraphView.js';
import type Shape from '../shape/Shape.js';
import TextShape from '../shape/node/TextShape.js';
import { CellStateStyle } from '../../types.js';
import RectangleShape from '../shape/node/RectangleShape.js';
import CellOverlay from './CellOverlay.js';
/**
 * Represents the current state of a cell in a given {@link GraphView}.
 *
 * For edges, the edge label position is stored in {@link absoluteOffset}.
 *
 * The size for oversize labels can be retrieved using the `boundingBox` property of the {@link text} field as shown below.
 *
 * ```javascript
 * const bbox = state.text?.boundingBox ?? null;
 * ```
 */
declare class CellState extends Rectangle {
    node: HTMLElement | null;
    cellBounds: Rectangle | null;
    paintBounds: Rectangle | null;
    boundingBox: Rectangle | null;
    control: Shape | null;
    overlays: Map<CellOverlay, Shape>;
    /**
     * Reference to the enclosing {@link GraphView}.
     */
    view: GraphView;
    /**
     * Reference to the {@link Cell} that is represented by this state.
     */
    cell: Cell;
    /**
     * The style of the {@link Cell}.
     */
    style: CellStateStyle;
    /**
     * Specifies if the style is invalid.
     * @default false
     */
    invalidStyle: boolean;
    /**
     * Specifies if the state is invalid.
     * @default true
     */
    invalid: boolean;
    /**
     * {@link Point} that holds the origin for all child cells.
     * @default a new empty {@link Point}.
     */
    origin: Point;
    /**
     * Holds an array of {@link Point} that represent the absolute points of an edge.
     */
    absolutePoints: (null | Point)[];
    /**
     * {@link Point} that holds the absolute offset.
     *
     * - For edges, this is the absolute coordinates of the label position.
     * - For vertices, this is the offset of the label relative to the top, left corner of the vertex.
     */
    absoluteOffset: Point;
    /**
     * Caches the visible source terminal state.
     */
    visibleSourceState: CellState | null;
    /**
     * Caches the visible target terminal state.
     */
    visibleTargetState: CellState | null;
    /**
     * Caches the distance between the end points for an edge.
     */
    terminalDistance: number;
    /**
     * Caches the length of an edge.
     */
    length: number;
    /**
     * Array of numbers that represent the cached length of each segment of the edge.
     */
    segments: number[];
    /**
     * Holds the {@link Shape} that represents the cell graphically.
     */
    shape: Shape | null;
    /**
     * Holds the {@link Text} that represents the label of the cell.
     * This may be `null` if the cell has no label.
     */
    text: TextShape | null;
    /**
     * Holds the unscaled width of the state.
     */
    unscaledWidth: number;
    /**
     * Holds the unscaled height of the state.
     */
    unscaledHeight: number;
    parentHighlight: RectangleShape | null;
    point: Point | null;
    /**
     * Constructs a new object that represents the current state of the given Cell in the specified view.
     *
     * @param view {@link GraphView} that contains the state.
     * @param cell {@link Cell} that this state represents.
     * @param style the style of the Cell.
     */
    constructor(view?: GraphView | null, cell?: Cell | null, style?: CellStateStyle | null);
    /**
     * Returns the {@link Rectangle} that should be used as the perimeter of the cell.
     *
     * @param border Optional border to be added around the perimeter bounds.
     * @param bounds Optional {@link Rectangle} to be used as the initial bounds.
     */
    getPerimeterBounds(border?: number, bounds?: Rectangle): Rectangle;
    /**
     * Sets the first or last point in <absolutePoints> depending on isSource.
     *
     * @param point {@link Point} that represents the terminal point.
     * @param isSource Boolean that specifies if the first or last point should be assigned.
     */
    setAbsoluteTerminalPoint(point: Point | null, isSource?: boolean): void;
    /**
     * Sets the given cursor on the shape and text shape.
     */
    setCursor(cursor: string): void;
    /**
     * Returns the visible source or target terminal cell.
     *
     * @param source Boolean that specifies if the source or target cell should be returned.
     */
    getVisibleTerminal(source?: boolean): Cell | null;
    /**
     * Returns the visible source or target terminal state.
     *
     * @param source Boolean that specifies if the source or target state should be returned.
     */
    getVisibleTerminalState(source?: boolean): CellState | null;
    /**
     * Sets the visible source or target terminal state.
     *
     * @param terminalState {@link CellState} that represents the terminal.
     * @param source Boolean that specifies if the source or target state should be set.
     */
    setVisibleTerminalState(terminalState: CellState | null, source?: boolean): void;
    /**
     * Returns the unscaled, untranslated bounds.
     */
    getCellBounds(): Rectangle | null;
    /**
     * Returns the unscaled, untranslated paint bounds.
     *
     * This is the same as {@link getCellBounds} but with a 90-degrees rotation if the  {@link Shape.isPaintBoundsInverted} returns `true`.
     */
    getPaintBounds(): Rectangle | null;
    /**
     * Updates the {@link cellBounds} and {@link paintBounds}.
     */
    updateCachedBounds(): void;
    /**
     * Copies all fields from the given state to this state.
     */
    setState(state: CellState): void;
    /**
     * Returns a clone of this {@link Point}.
     */
    clone(): CellState;
    /**
     * Destroys the state and all associated resources.
     */
    destroy(): void;
    /**
     * Returns `true` if the given cell state is a loop.
     *
     * @param state {@link CellState} that represents a potential loop.
     */
    isLoop(state: CellState): boolean | null;
    /*****************************************************************************
     * Group: Graph appearance
     *****************************************************************************/
    /**
     * Returns the vertical alignment for the given cell state.
     * This implementation returns the value stored in the {@link CellStateStyle.verticalAlign}
     * property of {@link style}.
     */
    getVerticalAlign(): import("../../types.js").VAlignValue;
    /**
     * Returns `true` if the given state has no stroke, no fill color and no image.
     */
    isTransparentState(): boolean;
    /**
     * Returns the image URL for the given cell state.
     * This implementation returns the value stored in the {@link CellStateStyle.image} property
     * of {@link style}.
     */
    getImageSrc(): string | null;
    /**
     * Returns the indicator color for the given cell state.
     * This implementation returns the value stored in the {@link CellStateStyle.indicatorColor}
     * property of {@link style}.
     */
    getIndicatorColor(): string | null;
    /**
     * Returns the indicator gradient color for the given cell state.
     * This implementation returns the value stored in the {@link CellStateStyle.gradientColor}
     * property of {@link style}.
     */
    getIndicatorGradientColor(): import("../../types.js").SpecialStyleColorValue | null;
    /**
     * Returns the indicator shape for the given cell state.
     * This implementation returns the value stored in the {@link CellStateStyle.indicatorShape}
     * property of {@link style}.
     */
    getIndicatorShape(): import("../../types.js").StyleShapeValue | null;
    /**
     * Returns the indicator image for the given cell state.
     * This implementation returns the value stored in the {@link CellStateStyle.indicatorImage}
     * property of {@link style}.
     */
    getIndicatorImageSrc(): string | null;
}
export default CellState;
