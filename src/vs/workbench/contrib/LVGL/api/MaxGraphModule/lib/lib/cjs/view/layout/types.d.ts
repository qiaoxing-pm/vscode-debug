import type Cell from '../cell/Cell.js';
import type GraphHierarchyNode from './datatypes/GraphHierarchyNode.js';
/**
 * @category Layout
 */
export interface GraphLayoutTraverseArgs {
    vertex: Cell | null;
    directed: boolean | null;
    func: Function | null;
    edge: Cell | null;
    visited: Map<Cell, boolean> | null;
}
/**
 * @category Layout
 */
export interface HierarchicalGraphLayoutTraverseArgs extends GraphLayoutTraverseArgs {
    allVertices: {
        [key: string]: Cell;
    } | null;
    currentComp: {
        [key: string]: Cell | null;
    };
    hierarchyVertices: GraphHierarchyNode[];
    filledVertexSet: {
        [key: string]: Cell;
    } | null;
}
/**
 * @category Layout
 */
export interface SwimlaneGraphLayoutTraverseArgs extends HierarchicalGraphLayoutTraverseArgs {
    swimlaneIndex: number;
}
