import GraphLayout from './GraphLayout.js';
import type { AbstractGraph } from '../AbstractGraph.js';
import type Cell from '../cell/Cell.js';
/**
 * Extends {@link GraphLayout} for partitioning the parent cell vertically or
 * horizontally by filling the complete area with the child cells. A horizontal
 * layout partitions the height of the given parent whereas a non-horizontal
 * layout partitions the width. If the parent is a layer (that is, a child of
 * the root node), then the current graph size is partitioned. The children do
 * not need to be connected for this layout to work.
 *
 * Example:
 *
 * ```javascript
 * const layout = new PartitionLayout(graph, true, 10, 20);
 * layout.execute(graph.getDefaultParent());
 * ```
 *
 * @category Layout
 */
declare class PartitionLayout extends GraphLayout {
    constructor(graph: AbstractGraph, horizontal?: boolean, spacing?: number, border?: number);
    /**
     * Boolean indicating the direction in which the space is partitioned.
     * Default is true.
     */
    horizontal: boolean;
    /**
     * Integer that specifies the absolute spacing in pixels between the
     * children. Default is 0.
     */
    spacing: number;
    /**
     * Integer that specifies the absolute inset in pixels for the parent that
     * contains the children. Default is 0.
     */
    border: number;
    /**
     * Boolean that specifies if vertices should be resized.
     * @default true
     */
    resizeVertices: boolean;
    /**
     * Returns {@link horizontal}.
     */
    isHorizontal(): boolean;
    moveCell(cell: Cell, x: number, y: number): void;
    /**
     * Implements {@link GraphLayout#execute}. All children where <isVertexIgnored>
     * returns false and <isVertexMovable> returns true are modified.
     */
    execute(parent: Cell): void;
}
export default PartitionLayout;
