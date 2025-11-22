import type { AbstractGraph } from '../AbstractGraph.js';
type PartialGraph = Pick<AbstractGraph, 'getView' | 'fireEvent' | 'getDataModel' | 'isEnabled' | 'getWarningImage' | 'getCellRenderer' | 'setSelectionCell'>;
type PartialOverlays = Pick<AbstractGraph, 'addCellOverlay' | 'getCellOverlays' | 'removeCellOverlay' | 'removeCellOverlays' | 'clearCellOverlays' | 'setCellWarning'>;
type PartialType = PartialGraph & PartialOverlays;
export declare const OverlaysMixin: PartialType;
export {};
