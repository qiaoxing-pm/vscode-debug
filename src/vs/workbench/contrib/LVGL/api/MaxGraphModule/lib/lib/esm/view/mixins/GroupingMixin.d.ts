import type { AbstractGraph } from '../AbstractGraph.js';
type PartialGraph = Pick<AbstractGraph, 'getDataModel' | 'fireEvent' | 'getView' | 'getDefaultParent' | 'batchUpdate' | 'isValidRoot' | 'getCurrentRoot' | 'cellsAdded' | 'cellsMoved' | 'cellsResized' | 'getBoundingBoxFromGeometry' | 'cellsRemoved' | 'getChildCells' | 'moveCells' | 'addAllEdges' | 'getSelectionCells' | 'getSelectionCell' | 'clearSelection' | 'setSelectionCell' | 'isSwimlane' | 'getStartSize' | 'getActualStartSize'>;
type PartialGrouping = Pick<AbstractGraph, 'groupCells' | 'getCellsForGroup' | 'getBoundsForGroup' | 'createGroupCell' | 'ungroupCells' | 'getCellsForUngroup' | 'removeCellsAfterUngroup' | 'removeCellsFromParent' | 'updateGroupBounds' | 'enterGroup' | 'exitGroup'>;
type PartialType = PartialGraph & PartialGrouping;
export declare const GroupingMixin: PartialType;
export {};
