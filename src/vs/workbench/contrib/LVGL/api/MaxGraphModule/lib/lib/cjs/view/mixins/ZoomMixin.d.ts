import type { AbstractGraph } from '../AbstractGraph.js';
type PartialGraph = Pick<AbstractGraph, 'getView' | 'getSelectionCell' | 'getContainer' | 'scrollRectToVisible'>;
type PartialZoom = Pick<AbstractGraph, 'zoomFactor' | 'keepSelectionVisibleOnZoom' | 'centerZoom' | 'zoomIn' | 'zoomOut' | 'zoomActual' | 'zoomTo' | 'zoom' | 'zoomToRect'>;
type PartialType = PartialGraph & PartialZoom;
export declare const ZoomMixin: PartialType;
export {};
