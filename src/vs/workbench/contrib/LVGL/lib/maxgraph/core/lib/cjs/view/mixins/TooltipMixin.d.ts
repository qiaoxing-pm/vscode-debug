import type { AbstractGraph } from '../AbstractGraph.js';
type PartialGraph = Pick<AbstractGraph, 'convertValueToString' | 'getPlugin' | 'getCollapseExpandResource'>;
type PartialTooltip = Pick<AbstractGraph, 'getTooltip' | 'getTooltipForCell' | 'setTooltips'>;
type PartialType = PartialGraph & PartialTooltip;
export declare const TooltipMixin: PartialType;
export {};
