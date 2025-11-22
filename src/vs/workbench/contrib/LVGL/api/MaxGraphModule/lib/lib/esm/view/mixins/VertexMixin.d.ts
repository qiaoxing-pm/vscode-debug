import Cell from '../cell/Cell.js';
import type { AbstractGraph } from '../AbstractGraph.js';
type PartialGraph = Pick<AbstractGraph, 'addCell' | 'getChildCells'>;
type PartialVertex = Pick<AbstractGraph, 'vertexLabelsMovable' | 'allowNegativeCoordinates' | 'isAllowNegativeCoordinates' | 'setAllowNegativeCoordinates' | 'createVertex' | 'getChildVertices' | 'isVertexLabelsMovable' | 'setVertexLabelsMovable'> & {
    insertVertex: (...args: any[]) => Cell;
};
type PartialType = PartialGraph & PartialVertex;
export declare const VertexMixin: PartialType;
export {};
