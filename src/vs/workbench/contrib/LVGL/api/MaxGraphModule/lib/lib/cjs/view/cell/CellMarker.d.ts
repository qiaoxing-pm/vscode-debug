import EventSource from '../event/EventSource.js';
import CellHighlight from './CellHighlight.js';
import type { AbstractGraph } from '../AbstractGraph.js';
import { ColorValue } from '../../types.js';
import type CellState from './CellState.js';
import InternalMouseEvent from '../event/InternalMouseEvent.js';
import type Cell from './Cell.js';
/**
 * A helper class to process mouse locations and highlight cells.
 *
 * To add a cell marker to an existing graph for highlighting all cells, the following code is used:
 *
 * ```javascript
 * const marker = new CellMarker(graph);
 * graph.addMouseListener({
 *   mouseDown: ()=> {},
 *   mouseMove: (sender, me) => {
 *     marker.process(me);
 *   },
 *   mouseUp: ()=> {}
 * });
 * ```
 *
 * ### Events
 * **{@link InternalEvent.MARK}**
 *
 * Fires after a cell has been marked or unmarked. The `state` property contains the marked {@link CellState} or `null` if no state is marked.
 */
declare class CellMarker extends EventSource {
    /**
     * Reference to the enclosing {@link AbstractGraph}.
     */
    graph: AbstractGraph;
    /**
     * Specifies if the marker is enabled.
     * @default true
     */
    enabled: boolean;
    /**
     * Specifies the portion of the width and height that should trigger a highlight.
     *
     * The area around the center of the cell to be marked is used as the hotspot. Possible values are between 0 and 1.
     * @default DEFAULT_HOTSPOT
     */
    hotspot: number;
    /**
     * Specifies if the hotspot is enabled.
     * @default false
     */
    hotspotEnabled: boolean;
    /**
     * Holds the valid marker color.
     */
    validColor: ColorValue;
    /**
     * Holds the invalid marker color.
     */
    invalidColor: ColorValue;
    /**
     * Holds the current marker color.
     */
    currentColor: ColorValue;
    /**
     * Holds the marked {@link CellState} if it is valid.
     */
    validState: CellState | null;
    /**
     * Holds the marked {@link CellState}.
     */
    markedState: CellState | null;
    highlight: CellHighlight;
    /**
     * Constructs a new cell marker.
     *
     * @param graph Reference to the enclosing {@link AbstractGraph}.
     * @param validColor Optional marker color for valid states. Default is {@link DEFAULT_VALID_COLOR}.
     * @param invalidColor Optional marker color for invalid states. Default is {@link DEFAULT_INVALID_COLOR}.
     * @param hotspot Portion of the width and height where a state intersects a given coordinate pair. A value of 0 means always highlight. Default is {@link DEFAULT_HOTSPOT}.
     */
    constructor(graph: AbstractGraph, validColor?: ColorValue, invalidColor?: ColorValue, hotspot?: number);
    /**
     * Enables or disables event handling.
     * This implementation updates {@link enabled}.
     *
     * @param enabled Boolean that specifies the new enabled state.
     */
    setEnabled(enabled: boolean): void;
    /**
     * Returns true if events are handled.
     * This implementation returns {@link enabled}.
     */
    isEnabled(): boolean;
    /**
     * Sets the {@link hotspot}.
     */
    setHotspot(hotspot: number): void;
    /**
     * Returns the {@link hotspot}.
     */
    getHotspot(): number;
    /**
     * Specifies whether the hotspot should be used in <intersects>.
     */
    setHotspotEnabled(enabled: boolean): void;
    /**
     * Returns true if hotspot is used in <intersects>.
     */
    isHotspotEnabled(): boolean;
    /**
     * Returns true if {@link validState} is not `null`.
     */
    hasValidState(): boolean;
    /**
     * Returns the {@link validState}.
     */
    getValidState(): CellState | null;
    /**
     * Returns the {@link markedState}.
     */
    getMarkedState(): CellState | null;
    /**
     * Resets the state of the cell marker.
     */
    reset(): void;
    /**
     * Processes the given event and cell and marks the state returned by {@link getState} with the color returned by {@link getMarkerColor}.
     * If the markerColor is not `null`, then the state is stored in {@link markedState}.
     * If {@link isValidState} returns `true`, then the state is stored in {@link validState} regardless of the marker color.
     * The state is returned regardless of the marker color and valid state.
     */
    process(me: InternalMouseEvent): CellState | null;
    /**
     * Sets and marks the current valid state.
     */
    setCurrentState(state: CellState | null, me: InternalMouseEvent, color?: ColorValue): void;
    /**
     * Marks the given cell using the given color, or {@link validColor} if no color is specified.
     */
    markCell(cell: Cell, color: ColorValue): void;
    /**
     * Marks the {@link markedState} and fires a {@link InternalEvent.MARK} event.
     */
    mark(): void;
    /**
     * Hides the marker and fires a {@link InternalEvent.MARK} event.
     */
    unmark(): void;
    /**
     * Returns true if the given {@link CellState} is a valid state.
     * If this returns `true`, then the state is stored in {@link validState}.
     * The return value of this method is used as the argument for {@link getMarkerColor}.
     */
    isValidState(state: CellState): boolean;
    /**
     * Returns the {@link validColor} or {@link invalidColor} depending on the value of {@link isValid}.
     * The given {@link CellState} is ignored by this implementation.
     */
    getMarkerColor(evt: Event, state: CellState | null, isValid: boolean): string;
    /**
     * Uses {@link getCell}, {@link getStateToMark} and {@link intersects} to return the {@link CellState} for the given {@link MouseEvent}.
     */
    getState(me: InternalMouseEvent): CellState | null;
    /**
     * Returns the {@link Cell} for the given event and cell.
     * This implementation returns the given cell.
     */
    getCell(me: InternalMouseEvent): Cell | null;
    /**
     * Returns the {@link CellState} to be marked for the given {@link CellState} under the mouse.
     * This implementation returns the given state.
     */
    getStateToMark(state: CellState | null): CellState | null;
    /**
     * Returns `true` if the given coordinate pair intersects the given state.
     * This returns `true` if the {@link hotspot} is `0` or the coordinates are inside the hotspot for the given cell state.
     */
    intersects(state: CellState, me: InternalMouseEvent): boolean;
    /**
     * Destroys the handler and all its resources and DOM nodes.
     */
    destroy(): void;
}
export default CellMarker;
