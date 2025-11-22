import type { AbstractGraph } from '../AbstractGraph.js';
type PartialGraph = Pick<AbstractGraph, 'getContainer' | 'getView' | 'getPlugin' | 'fireEvent'>;
type PartialPanning = Pick<AbstractGraph, 'shiftPreview1' | 'shiftPreview2' | 'useScrollbarsForPanning' | 'timerAutoScroll' | 'allowAutoPanning' | 'panDx' | 'panDy' | 'isUseScrollbarsForPanning' | 'isTimerAutoScroll' | 'isAllowAutoPanning' | 'getPanDx' | 'setPanDx' | 'getPanDy' | 'setPanDy' | 'panGraph' | 'scrollCellToVisible' | 'scrollRectToVisible' | 'setPanning'>;
type PartialType = PartialGraph & PartialPanning;
export declare const PanningMixin: PartialType;
export {};
