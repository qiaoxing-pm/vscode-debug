import type { AbstractGraph } from '../AbstractGraph.js';
type PartialGraph = Pick<AbstractGraph, 'getDataModel' | 'fireEvent' | 'getCurrentCellStyle' | 'isExtendParent' | 'extendParent' | 'constrainChild' | 'getPreferredSizeForCell' | 'getSelectionCells' | 'stopEditing' | 'batchUpdate' | 'options'>;
type PartialFolding = Pick<AbstractGraph, 'collapseExpandResource' | 'getCollapseExpandResource' | 'isFoldingEnabled' | 'getFoldableCells' | 'isCellFoldable' | 'getFoldingImage' | 'foldCells' | 'cellsFolded' | 'swapBounds' | 'updateAlternateBounds'>;
type PartialType = PartialGraph & PartialFolding;
export declare const FoldingMixin: PartialType;
export {};
