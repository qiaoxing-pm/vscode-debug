import type { AbstractGraph } from '../AbstractGraph.js';
type PartialGraph = Pick<AbstractGraph, 'convertValueToString' | 'getCurrentCellStyle' | 'isCellLocked' | 'isEdgeLabelsMovable' | 'isVertexLabelsMovable'>;
type PartialLabel = Pick<AbstractGraph, 'labelsVisible' | 'htmlLabels' | 'getLabel' | 'isHtmlLabel' | 'isLabelsVisible' | 'isHtmlLabels' | 'setHtmlLabels' | 'isWrapping' | 'isLabelClipped' | 'isLabelMovable'>;
type PartialType = PartialGraph & PartialLabel;
export declare const LabelMixin: PartialType;
export {};
