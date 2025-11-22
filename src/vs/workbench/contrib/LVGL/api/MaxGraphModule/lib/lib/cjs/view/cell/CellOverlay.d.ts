import Point from '../geometry/Point.js';
import Rectangle from '../geometry/Rectangle.js';
import EventSource from '../event/EventSource.js';
import ImageBox from '../image/ImageBox.js';
import CellState from './CellState.js';
import type ObjectIdentity from '../../util/ObjectIdentity.js';
import { AlignValue, VAlignValue } from '../../types.js';
/**
 * Extends {@link EventSource} to implement a graph overlay, represented by an icon and a tooltip.
 *
 * Overlays can handle and fire {@link InternalEvent.CLICK} events and are added to the graph using {@link AbstractGraph.addCellOverlay}, and removed using
 * {@link AbstractGraph.removeCellOverlay}, or {@link AbstractGraph.removeCellOverlays} to remove all overlays.
 * The {@link AbstractGraph.getCellOverlays} function returns the array of overlays for a given cell in a graph.
 * If multiple overlays exist for the same cell, then {@link getBounds} should be overridden in at least one of the overlays.
 *
 * Overlays appear on top of all cells in a special layer.
 * If this is not desirable, then the image must be rendered as part of the shape or label of the cell instead.
 *
 * For cell overlays to be printed, use {@link PrintPreview.printOverlays}.
 *
 * ### Example
 *
 * The following adds a new overlay for a given vertex and selects the cell if the overlay is clicked.
 *
 * ```javascript
 * const overlay = new CellOverlay(img, html);
 * graph.addCellOverlay(vertex, overlay);
 * overlay.addListener(InternalEvent.CLICK, (sender, evt) => {
 *   const cell = evt.getProperty('cell');
 *   graph.setSelectionCell(cell);
 * });
 * ```
 *
 * ### Events
 *
 * **{@link InternalEvent.CLICK}**
 *
 * Fires when the user clicks on the overlay.
 * In the {@link EventObject} parameter of the listener function:
 * - the `event` property contains the corresponding {@link MouseEvent}
 * - the `cell` property contains the {@link Cell}.
 *
 * For touch devices this is fired if the element receives a touchend event.
 */
declare class CellOverlay extends EventSource implements ObjectIdentity {
    /**
     * Constructs a new overlay using the given image and tooltip.
     *
     * @param image {@link ImageBox} that represents the icon to be displayed.
     * @param tooltip Optional string that specifies the tooltip.
     * @param align Optional horizontal alignment for the overlay. Possible values are 'left', 'center' and 'right' (default).
     * @param verticalAlign Vertical alignment for the overlay. Possible values are 'top', 'middle' and 'bottom' (default).
     * @param offset Optional offset for positioning the overlay relative to its alignment. Scaled according to the current graph scale. Default is `new Point()`.
     * @param cursor Optional CSS cursor for the overlay. Default is `'help'`.
     */
    constructor(image: ImageBox, tooltip?: string | null, align?: AlignValue, verticalAlign?: VAlignValue, offset?: Point, cursor?: string);
    /**
     * Holds the {@link Image} to be used as the icon.
     */
    image: ImageBox;
    /**
     * Holds the optional string to be used as the tooltip.
     */
    tooltip?: string | null;
    /**
     * Holds the horizontal alignment for the overlay.
     *
     * For edges, the overlay always appears in the center of the edge.
     * @default 'right'
     */
    align: AlignValue;
    /**
     * Holds the vertical alignment for the overlay.
     *
     * For edges, the overlay always appears in the center of the edge.
     * @default 'bottom'
     */
    verticalAlign: VAlignValue;
    /**
     * Holds the offset as an {@link Point}. The offset will be scaled according to the current scale.
     */
    offset: Point;
    /**
     * Holds the cursor for the overlay.
     * @default 'help'.
     */
    cursor: string;
    /**
     * Defines the overlapping for the overlay, that is, the proportional distance from the origin to the point defined by the alignment.
     * @default 0.5
     */
    defaultOverlap: number;
    /**
     * Returns the bounds of the overlay for the given {@link CellState} as an {@link Rectangle}.
     * This should be overridden when using multiple overlays per cell so that the overlays do not overlap.
     *
     * The following example will place the overlay along an edge (where x=[-1..1] from the start to the end of the edge
     * and y is the orthogonal offset in px).
     *
     * ```javascript
     * const overlayBounds = overlay.getBounds;
     * overlay.getBounds = function(state) {
     *   const bounds = overlayBounds.call(this, state);
     *
     *   if (state.view.graph.getDataModel().isEdge(state.cell)) {
     *     const pt = state.view.getPoint(state, {x: 0, y: 0, relative: true});
     *
     *     bounds.x = pt.x - bounds.width / 2;
     *     bounds.y = pt.y - bounds.height / 2;
     *   }
     *
     *   return bounds;
     * };
     * ```
     *
     * @param state {@link CellState} that represents the current state of the associated cell.
     */
    getBounds(state: CellState): Rectangle;
    /**
     * Returns the textual representation of the overlay to be used as the tooltip.
     *
     * This implementation returns {@link tooltip}.
     */
    toString(): string | null | undefined;
}
export default CellOverlay;
