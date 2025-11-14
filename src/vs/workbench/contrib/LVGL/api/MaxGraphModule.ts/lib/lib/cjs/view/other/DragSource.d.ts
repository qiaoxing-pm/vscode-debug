import CellHighlight from '../cell/CellHighlight.js';
import Guide from './Guide.js';
import Point from '../geometry/Point.js';
import EventSource from '../event/EventSource.js';
import EventObject from '../event/EventObject.js';
import type { AbstractGraph } from '../AbstractGraph.js';
import type Cell from '../cell/Cell.js';
import type { DropHandler } from '../../types.js';
/**
 * Wrapper to create a drag source from a DOM element so that the element can be dragged over a graph and dropped into the graph as a new cell.
 *
 * Problem is that in the dropHandler the current preview location is not available, so the preview and the dropHandler must match.
 */
declare class DragSource {
    constructor(element: EventTarget, dropHandler: DropHandler);
    /**
     * Reference to the DOM node which was made draggable.
     */
    element: EventTarget;
    /**
     * Holds the DOM node that is used to represent the drag preview. If this is
     * null then the source element will be cloned and used for the drag preview.
     */
    dropHandler: DropHandler;
    eventConsumer: (sender: EventSource, evt: EventObject) => void;
    /**
     * {@link Point} that specifies the offset of the {@link dragElement}. Default is null.
     */
    dragOffset: Point | null;
    /**
     * Holds the DOM node that is used to represent the drag preview. If this is
     * `null` then the source element will be cloned and used for the drag preview.
     */
    dragElement: HTMLElement | null;
    /**
     * Holds the DOM node that is used to represent the drag preview in the graph.
     */
    previewElement: HTMLElement | null;
    /**
     * Optional {@link Point} that specifies the offset of the preview in pixels.
     */
    previewOffset: Point | null;
    /**
     * Specifies if this drag source is enabled. Default is true.
     */
    enabled: boolean;
    /**
     * Reference to the {@link AbstractGraph} that is the current drop target.
     */
    currentGraph: AbstractGraph | null;
    /**
     * Holds the current drop target under the mouse.
     */
    currentDropTarget: Cell | null;
    /**
     * Holds the current drop location.
     */
    currentPoint: Point | null;
    /**
     * Holds a {@link Guide} for the {@link currentGraph} (only created when {@link dragElement} exists).
     */
    currentGuide: Guide | null;
    /**
     * Holds a {@link CellHighlight} for the {@link currentGraph}.
     */
    currentHighlight: CellHighlight | null;
    /**
     * Specifies if the graph should scroll automatically. Default is true.
     */
    autoscroll: boolean;
    /**
     * Specifies if {@link Guide} should be enabled. Default is true.
     */
    guidesEnabled: boolean;
    /**
     * Specifies if the grid should be allowed. Default is true.
     */
    gridEnabled: boolean;
    /**
     * Specifies if drop targets should be highlighted. Default is true.
     */
    highlightDropTargets: boolean;
    /**
     * ZIndex for the drag element. Default is 100.
     */
    dragElementZIndex: number;
    /**
     * Opacity of the drag element in %. Default is 70.
     */
    dragElementOpacity: number;
    /**
     * Whether the event source should be checked in {@link graphContainerEvent}. Default
     * is true.
     */
    checkEventSource: boolean;
    mouseMoveHandler: ((evt: MouseEvent) => void) | null;
    mouseUpHandler: ((evt: MouseEvent) => void) | null;
    eventSource: EventTarget | null;
    /**
     * Returns {@link enabled}.
     */
    isEnabled(): boolean;
    /**
     * Sets {@link enabled}.
     */
    setEnabled(value: boolean): void;
    /**
     * Returns {@link guidesEnabled}.
     */
    isGuidesEnabled(): boolean;
    /**
     * Sets {@link guidesEnabled}.
     */
    setGuidesEnabled(value: boolean): void;
    /**
     * Returns {@link gridEnabled}.
     */
    isGridEnabled(): boolean;
    /**
     * Sets {@link gridEnabled}.
     */
    setGridEnabled(value: boolean): void;
    /**
     * Returns the graph for the given mouse event. This implementation returns
     * null.
     */
    getGraphForEvent(evt: MouseEvent): null;
    /**
     * Returns the drop target for the given graph and coordinates.
     * This implementation uses {@link AbstractGraph.getCellAt}.
     */
    getDropTarget(graph: AbstractGraph, x: number, y: number, evt: MouseEvent): Cell | null;
    /**
     * Creates and returns a clone of the {@link dragElementPrototype} or the {@link element}
     * if the former is not defined.
     */
    createDragElement(evt: MouseEvent): HTMLElement;
    /**
     * Creates and returns an element which can be used as a preview in the given
     * graph.
     */
    createPreviewElement(graph: AbstractGraph): HTMLElement | null;
    /**
     * Returns true if this drag source is active.
     */
    isActive(): boolean;
    /**
     * Stops and removes everything and restores the state of the object.
     */
    reset(): void;
    /**
     * Returns the drop target for the given graph and coordinates.
     * This implementation uses {@link AbstractGraph.getCellAt}.
     *
     * To ignore popup menu events for a drag source, this function can be overridden as follows.
     *
     * ```javascript
     * const mouseDown = dragSource.mouseDown;
     *
     * dragSource.mouseDown(evt) {
     *   if (!EventUtils.isPopupTrigger(evt)) {
     *     mouseDown.apply(this, [evt]);
     *   }
     * };
     * ```
     */
    mouseDown(evt: MouseEvent): void;
    /**
     * Creates the {@link dragElement} using {@link createDragElement}.
     */
    startDrag(evt: MouseEvent): void;
    /**
     * Invokes {@link removeDragElement}.
     */
    stopDrag(): void;
    /**
     * Removes and destroys the {@link dragElement}.
     */
    removeDragElement(): void;
    /**
     * Returns the topmost element under the given event.
     */
    getElementForEvent(evt: MouseEvent): EventTarget | null;
    /**
     * Returns true if the given graph contains the given event.
     */
    graphContainsEvent(graph: AbstractGraph, evt: MouseEvent): boolean;
    /**
     * Gets the graph for the given event using {@link getGraphForEvent}, updates the
     * {@link currentGraph}, calling {@link dragEnter} and {@link dragExit} on the new and old graph,
     * respectively, and invokes {@link dragOver} if {@link currentGraph} is not null.
     */
    mouseMove(evt: MouseEvent): void;
    /**
     * Processes the mouse up event and invokes {@link drop}, {@link dragExit} and {@link stopDrag}
     * as required.
     */
    mouseUp(evt: MouseEvent): void;
    /**
     * Actives the given graph as a drop target.
     */
    removeListeners(): void;
    /**
     * Actives the given graph as a drop target.
     */
    dragEnter(graph: AbstractGraph, evt: MouseEvent): void;
    /**
     * Deactivates the given graph as a drop target.
     */
    dragExit(graph: AbstractGraph, evt?: MouseEvent): void;
    /**
     * Implements autoscroll, updates the {@link currentPoint}, highlights any drop
     * targets and updates the preview.
     */
    dragOver(graph: AbstractGraph, evt: MouseEvent): void;
    /**
     * Returns the drop target for the given graph and coordinates. This
     * implementation uses {@link AbstractGraph.getCellAt}.
     */
    drop(graph: AbstractGraph, evt: MouseEvent, dropTarget: (Cell | null) | undefined, x: number, y: number): void;
}
export default DragSource;
