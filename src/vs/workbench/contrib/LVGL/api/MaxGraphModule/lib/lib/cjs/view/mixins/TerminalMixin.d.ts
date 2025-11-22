import type { AbstractGraph } from '../AbstractGraph.js';
type PartialGraph = Pick<AbstractGraph, 'getView'>;
type PartialTerminal = Pick<AbstractGraph, 'isTerminalPointMovable' | 'getOpposites'>;
type PartialType = PartialGraph & PartialTerminal;
export declare const TerminalMixin: PartialType;
export {};
