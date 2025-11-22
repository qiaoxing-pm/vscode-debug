import type { AbstractGraph } from '../AbstractGraph.js';
type PartialGraph = Pick<AbstractGraph, 'fireEvent' | 'batchUpdate' | 'getDataModel' | 'getSelectionCells'>;
type PartialOrder = Pick<AbstractGraph, 'orderCells' | 'cellsOrdered'>;
type PartialType = PartialGraph & PartialOrder;
export declare const OrderMixin: PartialType;
export {};
