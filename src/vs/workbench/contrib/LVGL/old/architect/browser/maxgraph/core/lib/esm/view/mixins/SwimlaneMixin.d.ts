import type { AbstractGraph } from '../AbstractGraph.js';
type PartialGraph = Pick<AbstractGraph, 'getDefaultParent' | 'getCurrentRoot' | 'getDataModel' | 'getView' | 'getContainer' | 'getCurrentCellStyle' | 'intersects' | 'isSplitEnabled' | 'isSplitTarget' | 'getPanDx' | 'getPanDy'>;
type PartialSwimlane = Pick<AbstractGraph, 'swimlaneSelectionEnabled' | 'swimlaneNesting' | 'swimlaneIndicatorColorAttribute' | 'getSwimlane' | 'getSwimlaneAt' | 'hitsSwimlaneContent' | 'getStartSize' | 'getSwimlaneDirection' | 'getActualStartSize' | 'isSwimlane' | 'isValidDropTarget' | 'getDropTarget' | 'isSwimlaneNesting' | 'setSwimlaneNesting' | 'isSwimlaneSelectionEnabled' | 'setSwimlaneSelectionEnabled'>;
type PartialType = PartialGraph & PartialSwimlane;
export declare const SwimlaneMixin: PartialType;
export {};
