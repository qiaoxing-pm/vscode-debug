import type { GraphCollaboratorsOptions } from '../types.js';
import { AbstractGraph } from './AbstractGraph.js';
/**
 * An implementation of {@link AbstractGraph} that does not load any default built-ins (plugins, style elements).
 *
 * This class is optimized for production environments by enabling efficient tree-shaking.
 *
 * For evaluation and prototyping purposes, consider using {@link Graph}, which requires less configuration.
 *
 * @category Graph
 */
export declare class BaseGraph extends AbstractGraph {
    protected initializeCollaborators(options?: GraphCollaboratorsOptions): void;
}
