import type { AbstractGraph } from '../AbstractGraph.js';
type PartialGraph = Pick<AbstractGraph, 'convertValueToString' | 'batchUpdate' | 'getDataModel' | 'getSelectionCell' | 'fireEvent' | 'isAutoSizeCell' | 'cellSizeUpdated' | 'getCurrentCellStyle' | 'isCellLocked' | 'getPlugin'>;
type PartialEditing = Pick<AbstractGraph, 'cellsEditable' | 'startEditing' | 'startEditingAtCell' | 'getEditingValue' | 'stopEditing' | 'labelChanged' | 'cellLabelChanged' | 'isEditing' | 'isCellEditable' | 'isCellsEditable' | 'setCellsEditable'>;
type PartialType = PartialGraph & PartialEditing;
export declare const EditingMixin: PartialType;
export {};
