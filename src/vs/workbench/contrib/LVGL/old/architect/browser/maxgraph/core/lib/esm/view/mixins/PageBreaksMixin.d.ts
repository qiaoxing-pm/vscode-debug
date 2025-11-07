import type { AbstractGraph } from '../AbstractGraph.js';
type PartialGraph = Pick<AbstractGraph, 'getView' | 'getGraphBounds' | 'getPageFormat' | 'getPageScale' | 'getMinPageBreakDist' | 'getPageBreakColor' | 'getDialect' | 'isPageBreakDashed'>;
type PartialPageBreaks = Pick<AbstractGraph, 'horizontalPageBreaks' | 'verticalPageBreaks' | 'updatePageBreaks'>;
type PartialType = PartialGraph & PartialPageBreaks;
export declare const PageBreaksMixin: PartialType;
export {};
