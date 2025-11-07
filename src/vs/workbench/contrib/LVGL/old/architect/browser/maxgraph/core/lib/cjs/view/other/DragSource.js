"use strict";
/*
Copyright 2021-present The maxGraph project Contributors
Copyright (c) 2006-2015, JGraph Ltd
Copyright (c) 2006-2015, Gaudenz Alder

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Rectangle_js_1 = __importDefault(require("../geometry/Rectangle.js"));
const CellHighlight_js_1 = __importDefault(require("../cell/CellHighlight.js"));
const styleUtils_js_1 = require("../../util/styleUtils.js");
const InternalEvent_js_1 = __importDefault(require("../event/InternalEvent.js"));
const Client_js_1 = __importDefault(require("../../Client.js"));
const Guide_js_1 = __importDefault(require("./Guide.js"));
const Constants_js_1 = require("../../util/Constants.js");
const Point_js_1 = __importDefault(require("../geometry/Point.js"));
const EventUtils_js_1 = require("../../util/EventUtils.js");
/**
 * Wrapper to create a drag source from a DOM element so that the element can be dragged over a graph and dropped into the graph as a new cell.
 *
 * Problem is that in the dropHandler the current preview location is not available, so the preview and the dropHandler must match.
 */
class DragSource {
    constructor(element, dropHandler) {
        /**
         * {@link Point} that specifies the offset of the {@link dragElement}. Default is null.
         */
        this.dragOffset = null;
        /**
         * Holds the DOM node that is used to represent the drag preview. If this is
         * `null` then the source element will be cloned and used for the drag preview.
         */
        this.dragElement = null;
        /**
         * Holds the DOM node that is used to represent the drag preview in the graph.
         */
        this.previewElement = null;
        /**
         * Optional {@link Point} that specifies the offset of the preview in pixels.
         */
        this.previewOffset = null;
        /**
         * Specifies if this drag source is enabled. Default is true.
         */
        this.enabled = true;
        /**
         * Reference to the {@link AbstractGraph} that is the current drop target.
         */
        this.currentGraph = null;
        /**
         * Holds the current drop target under the mouse.
         */
        this.currentDropTarget = null;
        /**
         * Holds the current drop location.
         */
        this.currentPoint = null;
        /**
         * Holds a {@link Guide} for the {@link currentGraph} (only created when {@link dragElement} exists).
         */
        this.currentGuide = null;
        /**
         * Holds a {@link CellHighlight} for the {@link currentGraph}.
         */
        this.currentHighlight = null;
        /**
         * Specifies if the graph should scroll automatically. Default is true.
         */
        this.autoscroll = true;
        /**
         * Specifies if {@link Guide} should be enabled. Default is true.
         */
        this.guidesEnabled = true;
        /**
         * Specifies if the grid should be allowed. Default is true.
         */
        this.gridEnabled = true;
        /**
         * Specifies if drop targets should be highlighted. Default is true.
         */
        this.highlightDropTargets = true;
        /**
         * ZIndex for the drag element. Default is 100.
         */
        this.dragElementZIndex = 100;
        /**
         * Opacity of the drag element in %. Default is 70.
         */
        this.dragElementOpacity = 70;
        /**
         * Whether the event source should be checked in {@link graphContainerEvent}. Default
         * is true.
         */
        this.checkEventSource = true;
        this.mouseMoveHandler = null;
        this.mouseUpHandler = null;
        this.eventSource = null;
        this.element = element;
        this.dropHandler = dropHandler;
        // Handles a drag gesture on the element
        InternalEvent_js_1.default.addGestureListeners(element, (evt) => {
            this.mouseDown(evt);
        });
        // Prevents native drag and drop
        InternalEvent_js_1.default.addListener(element, 'dragstart', (evt) => {
            InternalEvent_js_1.default.consume(evt);
        });
        this.eventConsumer = (sender, evt) => {
            const evtName = evt.getProperty('eventName');
            const me = evt.getProperty('event');
            if (evtName !== InternalEvent_js_1.default.MOUSE_DOWN) {
                me.consume();
            }
        };
    }
    /**
     * Returns {@link enabled}.
     */
    isEnabled() {
        return this.enabled;
    }
    /**
     * Sets {@link enabled}.
     */
    setEnabled(value) {
        this.enabled = value;
    }
    /**
     * Returns {@link guidesEnabled}.
     */
    isGuidesEnabled() {
        return this.guidesEnabled;
    }
    /**
     * Sets {@link guidesEnabled}.
     */
    setGuidesEnabled(value) {
        this.guidesEnabled = value;
    }
    /**
     * Returns {@link gridEnabled}.
     */
    isGridEnabled() {
        return this.gridEnabled;
    }
    /**
     * Sets {@link gridEnabled}.
     */
    setGridEnabled(value) {
        this.gridEnabled = value;
    }
    /**
     * Returns the graph for the given mouse event. This implementation returns
     * null.
     */
    getGraphForEvent(evt) {
        return null;
    }
    /**
     * Returns the drop target for the given graph and coordinates.
     * This implementation uses {@link AbstractGraph.getCellAt}.
     */
    getDropTarget(graph, x, y, evt) {
        return graph.getCellAt(x, y);
    }
    /**
     * Creates and returns a clone of the {@link dragElementPrototype} or the {@link element}
     * if the former is not defined.
     */
    createDragElement(evt) {
        return this.element.cloneNode(true);
    }
    /**
     * Creates and returns an element which can be used as a preview in the given
     * graph.
     */
    createPreviewElement(graph) {
        return null;
    }
    /**
     * Returns true if this drag source is active.
     */
    isActive() {
        return !!this.mouseMoveHandler;
    }
    /**
     * Stops and removes everything and restores the state of the object.
     */
    reset() {
        if (this.currentGraph) {
            this.dragExit(this.currentGraph);
            this.currentGraph = null;
        }
        this.removeDragElement();
        this.removeListeners();
        this.stopDrag();
    }
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
    mouseDown(evt) {
        if (this.enabled && !(0, EventUtils_js_1.isConsumed)(evt) && this.mouseMoveHandler == null) {
            this.startDrag(evt);
            this.mouseMoveHandler = this.mouseMove.bind(this);
            this.mouseUpHandler = this.mouseUp.bind(this);
            InternalEvent_js_1.default.addGestureListeners(document, null, this.mouseMoveHandler, this.mouseUpHandler);
            if (Client_js_1.default.IS_TOUCH && !(0, EventUtils_js_1.isMouseEvent)(evt)) {
                this.eventSource = (0, EventUtils_js_1.getSource)(evt);
                if (this.eventSource) {
                    InternalEvent_js_1.default.addGestureListeners(this.eventSource, null, this.mouseMoveHandler, this.mouseUpHandler);
                }
            }
        }
    }
    /**
     * Creates the {@link dragElement} using {@link createDragElement}.
     */
    startDrag(evt) {
        this.dragElement = this.createDragElement(evt);
        this.dragElement.style.position = 'absolute';
        this.dragElement.style.zIndex = String(this.dragElementZIndex);
        (0, styleUtils_js_1.setOpacity)(this.dragElement, this.dragElementOpacity);
        if (this.checkEventSource && Client_js_1.default.IS_SVG) {
            this.dragElement.style.pointerEvents = 'none';
        }
    }
    /**
     * Invokes {@link removeDragElement}.
     */
    stopDrag() {
        // LATER: This used to have a mouse event. If that is still needed we need to add another
        // final call to the DnD protocol to add a cleanup step in the case of escape press, which
        // is not associated with a mouse event and which currently calles this method.
        this.removeDragElement();
    }
    /**
     * Removes and destroys the {@link dragElement}.
     */
    removeDragElement() {
        if (this.dragElement) {
            if (this.dragElement.parentNode) {
                this.dragElement.parentNode.removeChild(this.dragElement);
            }
            this.dragElement = null;
        }
    }
    /**
     * Returns the topmost element under the given event.
     */
    getElementForEvent(evt) {
        return (0, EventUtils_js_1.isTouchEvent)(evt) || (0, EventUtils_js_1.isPenEvent)(evt)
            ? document.elementFromPoint((0, EventUtils_js_1.getClientX)(evt), (0, EventUtils_js_1.getClientY)(evt))
            : (0, EventUtils_js_1.getSource)(evt);
    }
    /**
     * Returns true if the given graph contains the given event.
     */
    graphContainsEvent(graph, evt) {
        const x = (0, EventUtils_js_1.getClientX)(evt);
        const y = (0, EventUtils_js_1.getClientY)(evt);
        const offset = (0, styleUtils_js_1.getOffset)(graph.container);
        const origin = (0, styleUtils_js_1.getScrollOrigin)();
        let elt = this.getElementForEvent(evt);
        if (this.checkEventSource) {
            while (elt && elt !== graph.container) {
                // @ts-ignore parentNode may exist
                elt = elt.parentNode;
            }
        }
        // Checks if event is inside the bounds of the graph container
        return (!!elt &&
            x >= offset.x - origin.x &&
            y >= offset.y - origin.y &&
            x <= offset.x - origin.x + graph.container.offsetWidth &&
            y <= offset.y - origin.y + graph.container.offsetHeight);
    }
    /**
     * Gets the graph for the given event using {@link getGraphForEvent}, updates the
     * {@link currentGraph}, calling {@link dragEnter} and {@link dragExit} on the new and old graph,
     * respectively, and invokes {@link dragOver} if {@link currentGraph} is not null.
     */
    mouseMove(evt) {
        let graph = this.getGraphForEvent(evt);
        // Checks if event is inside the bounds of the graph container
        if (graph && !this.graphContainsEvent(graph, evt)) {
            graph = null;
        }
        if (graph !== this.currentGraph) {
            if (this.currentGraph) {
                this.dragExit(this.currentGraph, evt);
            }
            this.currentGraph = graph;
            if (this.currentGraph) {
                this.dragEnter(this.currentGraph, evt);
            }
        }
        if (this.currentGraph) {
            this.dragOver(this.currentGraph, evt);
        }
        if (this.dragElement &&
            (!this.previewElement || this.previewElement.style.visibility !== 'visible')) {
            let x = (0, EventUtils_js_1.getClientX)(evt);
            let y = (0, EventUtils_js_1.getClientY)(evt);
            if (this.dragElement.parentNode == null) {
                document.body.appendChild(this.dragElement);
            }
            this.dragElement.style.visibility = 'visible';
            if (this.dragOffset) {
                x += this.dragOffset.x;
                y += this.dragOffset.y;
            }
            const offset = (0, styleUtils_js_1.getDocumentScrollOrigin)(document);
            this.dragElement.style.left = `${x + offset.x}px`;
            this.dragElement.style.top = `${y + offset.y}px`;
        }
        else if (this.dragElement) {
            this.dragElement.style.visibility = 'hidden';
        }
        InternalEvent_js_1.default.consume(evt);
    }
    /**
     * Processes the mouse up event and invokes {@link drop}, {@link dragExit} and {@link stopDrag}
     * as required.
     */
    mouseUp(evt) {
        if (this.currentGraph) {
            if (this.currentPoint &&
                (!this.previewElement || this.previewElement.style.visibility !== 'hidden')) {
                const { scale } = this.currentGraph.view;
                const tr = this.currentGraph.view.translate;
                const x = this.currentPoint.x / scale - tr.x;
                const y = this.currentPoint.y / scale - tr.y;
                this.drop(this.currentGraph, evt, this.currentDropTarget, x, y);
            }
            this.dragExit(this.currentGraph);
            this.currentGraph = null;
        }
        this.stopDrag();
        this.removeListeners();
        InternalEvent_js_1.default.consume(evt);
    }
    /**
     * Actives the given graph as a drop target.
     */
    // removeListeners(): void;
    removeListeners() {
        if (this.eventSource) {
            InternalEvent_js_1.default.removeGestureListeners(this.eventSource, null, this.mouseMoveHandler, this.mouseUpHandler);
            this.eventSource = null;
        }
        InternalEvent_js_1.default.removeGestureListeners(document, null, this.mouseMoveHandler, this.mouseUpHandler);
        this.mouseMoveHandler = null;
        this.mouseUpHandler = null;
    }
    /**
     * Actives the given graph as a drop target.
     */
    dragEnter(graph, evt) {
        graph.isMouseDown = true;
        graph.isMouseTrigger = (0, EventUtils_js_1.isMouseEvent)(evt);
        this.previewElement = this.createPreviewElement(graph);
        if (this.previewElement && this.checkEventSource && Client_js_1.default.IS_SVG) {
            this.previewElement.style.pointerEvents = 'none';
        }
        // Guide is only needed if preview element is used
        if (this.isGuidesEnabled() && this.previewElement) {
            const selectionHandler = graph.getPlugin('SelectionHandler');
            this.currentGuide = new Guide_js_1.default(graph, selectionHandler?.getGuideStates() ?? []);
        }
        if (this.highlightDropTargets) {
            this.currentHighlight = new CellHighlight_js_1.default(graph, Constants_js_1.DROP_TARGET_COLOR);
        }
        // Consumes all events in the current graph before they are fired
        graph.addListener(InternalEvent_js_1.default.FIRE_MOUSE_EVENT, this.eventConsumer);
    }
    /**
     * Deactivates the given graph as a drop target.
     */
    dragExit(graph, evt) {
        this.currentDropTarget = null;
        this.currentPoint = null;
        graph.isMouseDown = false;
        // Consumes all events in the current graph before they are fired
        graph.removeListener(this.eventConsumer);
        if (this.previewElement) {
            if (this.previewElement.parentNode) {
                this.previewElement.parentNode.removeChild(this.previewElement);
            }
            this.previewElement = null;
        }
        if (this.currentGuide) {
            this.currentGuide.destroy();
            this.currentGuide = null;
        }
        if (this.currentHighlight) {
            this.currentHighlight.destroy();
            this.currentHighlight = null;
        }
    }
    /**
     * Implements autoscroll, updates the {@link currentPoint}, highlights any drop
     * targets and updates the preview.
     */
    dragOver(graph, evt) {
        const offset = (0, styleUtils_js_1.getOffset)(graph.container);
        const origin = (0, styleUtils_js_1.getScrollOrigin)(graph.container);
        let x = (0, EventUtils_js_1.getClientX)(evt) - offset.x + origin.x - graph.getPanDx();
        let y = (0, EventUtils_js_1.getClientY)(evt) - offset.y + origin.y - graph.getPanDy();
        if (graph.isAutoScroll() && (!this.autoscroll || this.autoscroll)) {
            graph.scrollPointToVisible(x, y, graph.isAutoExtend());
        }
        // Highlights the drop target under the mouse
        if (this.currentHighlight && graph.isDropEnabled()) {
            this.currentDropTarget = this.getDropTarget(graph, x, y, evt);
            if (this.currentDropTarget) {
                const state = graph.getView().getState(this.currentDropTarget);
                this.currentHighlight.highlight(state);
            }
        }
        // Updates the location of the preview
        if (this.previewElement) {
            if (!this.previewElement.parentNode) {
                graph.container.appendChild(this.previewElement);
                this.previewElement.style.zIndex = '3';
                this.previewElement.style.position = 'absolute';
            }
            const gridEnabled = this.isGridEnabled() && graph.isGridEnabledEvent(evt);
            let hideGuide = true;
            // Grid and guides
            if (this.currentGuide && this.currentGuide.isEnabledForEvent(evt)) {
                // LATER: HTML preview appears smaller than SVG preview
                const w = parseInt(this.previewElement.style.width);
                const h = parseInt(this.previewElement.style.height);
                const bounds = new Rectangle_js_1.default(0, 0, w, h);
                let delta = new Point_js_1.default(x, y);
                delta = this.currentGuide.move(bounds, delta, gridEnabled, true);
                hideGuide = false;
                x = delta.x;
                y = delta.y;
            }
            else if (gridEnabled) {
                const { scale } = graph.view;
                const tr = graph.view.translate;
                const off = graph.getGridSize() / 2;
                x = (graph.snap(x / scale - tr.x - off) + tr.x) * scale;
                y = (graph.snap(y / scale - tr.y - off) + tr.y) * scale;
            }
            if (this.currentGuide && hideGuide) {
                this.currentGuide.hide();
            }
            if (this.previewOffset) {
                x += this.previewOffset.x;
                y += this.previewOffset.y;
            }
            this.previewElement.style.left = `${Math.round(x)}px`;
            this.previewElement.style.top = `${Math.round(y)}px`;
            this.previewElement.style.visibility = 'visible';
        }
        this.currentPoint = new Point_js_1.default(x, y);
    }
    /**
     * Returns the drop target for the given graph and coordinates. This
     * implementation uses {@link AbstractGraph.getCellAt}.
     */
    drop(graph, evt, dropTarget = null, x, y) {
        this.dropHandler(graph, evt, dropTarget, x, y);
        // Had to move this to after the insert because it will
        // affect the scrollbars of the window in IE to try and
        // make the complete container visible.
        // LATER: Should be made optional.
        if (graph.container.style.visibility !== 'hidden') {
            graph.container.focus();
        }
    }
}
exports.default = DragSource;
