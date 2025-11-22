import type { AbstractGraph } from '../AbstractGraph.js';
type PartialGraph = Pick<AbstractGraph, 'getView'>;
type PartialSnap = Pick<AbstractGraph, 'snapTolerance' | 'gridSize' | 'gridEnabled' | 'getSnapTolerance' | 'snap' | 'snapDelta' | 'isGridEnabled' | 'setGridEnabled' | 'getGridSize' | 'setGridSize'>;
type PartialType = PartialGraph & PartialSnap;
export declare const SnapMixin: PartialType;
export {};
