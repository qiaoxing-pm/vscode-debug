import type { AbstractGraph } from '../AbstractGraph.js';
type PartialGraph = Pick<AbstractGraph, 'getDataModel' | 'isAllowLoops' | 'isMultigraph' | 'getView' | 'isValidRoot' | 'getContainsValidationErrorsResource' | 'getAlreadyConnectedResource' | 'isAllowDanglingEdges' | 'isValidConnection' | 'setCellWarning'>;
type PartialValidation = Pick<AbstractGraph, 'multiplicities' | 'validationAlert' | 'isEdgeValid' | 'getEdgeValidationError' | 'validateEdge' | 'validateGraph' | 'getCellValidationError' | 'validateCell'>;
type PartialType = PartialGraph & PartialValidation;
export declare const ValidationMixin: PartialType;
export {};
