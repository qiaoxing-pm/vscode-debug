import type { AbstractGraph } from '../AbstractGraph.js';
import Cell from '../cell/Cell.js';
type PartialGraph = Pick<AbstractGraph, 'batchUpdate' | 'fireEvent' | 'getDataModel' | 'getView' | 'getChildCells' | 'isValidAncestor' | 'cellsAdded' | 'cellsMoved' | 'cloneCell' | 'addCell' | 'cellConnected'>;
type PartialEdge = Pick<AbstractGraph, 'resetEdgesOnResize' | 'resetEdgesOnMove' | 'resetEdgesOnConnect' | 'connectableEdges' | 'allowDanglingEdges' | 'cloneInvalidEdges' | 'alternateEdgeStyle' | 'edgeLabelsMovable' | 'isResetEdgesOnMove' | 'isResetEdgesOnConnect' | 'isResetEdgesOnResize' | 'isEdgeLabelsMovable' | 'setEdgeLabelsMovable' | 'setAllowDanglingEdges' | 'isAllowDanglingEdges' | 'setConnectableEdges' | 'isConnectableEdges' | 'setCloneInvalidEdges' | 'isCloneInvalidEdges' | 'flipEdge' | 'splitEdge' | 'createEdge' | 'addEdge' | 'addAllEdges' | 'getAllEdges' | 'getIncomingEdges' | 'getOutgoingEdges' | 'getEdges' | 'getChildEdges' | 'getEdgesBetween' | 'resetEdges' | 'resetEdge'> & {
    insertEdge: (...args: any[]) => Cell;
};
type PartialType = PartialGraph & PartialEdge;
export declare const EdgeMixin: PartialType;
export {};
