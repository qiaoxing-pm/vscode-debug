import type { AbstractGraph } from '../AbstractGraph.js';
type PartialGraph = Pick<AbstractGraph, 'getEdgeValidationError'>;
type PartialDragDrop = Pick<AbstractGraph, 'dropEnabled' | 'splitEnabled' | 'autoScroll' | 'autoExtend' | 'isAutoScroll' | 'isAutoExtend' | 'isDropEnabled' | 'setDropEnabled' | 'isSplitEnabled' | 'setSplitEnabled' | 'isSplitTarget'>;
type PartialType = PartialGraph & PartialDragDrop;
export declare const DragDropMixin: PartialType;
export {};
