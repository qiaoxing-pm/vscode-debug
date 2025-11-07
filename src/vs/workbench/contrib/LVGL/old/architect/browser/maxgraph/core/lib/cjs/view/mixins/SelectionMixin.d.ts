import type { AbstractGraph } from '../AbstractGraph.js';
type PartialGraph = Pick<AbstractGraph, 'getDataModel' | 'getView' | 'isCellSelectable' | 'fireEvent' | 'getDefaultParent' | 'getCurrentRoot' | 'getCells' | 'isToggleEvent'>;
type PartialCells = Pick<AbstractGraph, 'singleSelection' | 'selectionModel' | 'getSelectionModel' | 'setSelectionModel' | 'isCellSelected' | 'isSelectionEmpty' | 'clearSelection' | 'getSelectionCount' | 'getSelectionCell' | 'getSelectionCells' | 'setSelectionCell' | 'setSelectionCells' | 'addSelectionCell' | 'addSelectionCells' | 'removeSelectionCell' | 'removeSelectionCells' | 'selectRegion' | 'selectNextCell' | 'selectPreviousCell' | 'selectParentCell' | 'selectChildCell' | 'selectCell' | 'selectAll' | 'selectVertices' | 'selectEdges' | 'selectCells' | 'selectCellForEvent' | 'selectCellsForEvent' | 'isSiblingSelected' | 'getSelectionCellsForChanges' | 'updateSelection'>;
type PartialType = PartialGraph & PartialCells;
export declare const SelectionMixin: PartialType;
export {};
