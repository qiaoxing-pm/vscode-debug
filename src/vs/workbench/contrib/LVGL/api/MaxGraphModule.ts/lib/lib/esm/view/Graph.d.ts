import type { GraphCollaboratorsOptions, GraphPluginConstructor } from '../types.js';
import { AbstractGraph } from './AbstractGraph.js';
import GraphView from './GraphView.js';
import CellRenderer from './cell/CellRenderer.js';
import GraphDataModel from './GraphDataModel.js';
import { Stylesheet } from './style/Stylesheet.js';
import GraphSelectionModel from './GraphSelectionModel.js';
/**
 * An implementation of {@link AbstractGraph} that automatically loads some default built-ins (plugins, style elements).
 *
 * Good for evaluation and prototyping, but not recommended for production use. Use {@link BaseGraph} instead.
 *
 * @category Graph
 */
export declare class Graph extends AbstractGraph {
    /**
     * Creates a new {@link CellRenderer} to be used in this graph.
     */
    createCellRenderer(): CellRenderer;
    /**
     * Creates a new {@link GraphDataModel} to be used in this graph.
     */
    createGraphDataModel(): GraphDataModel;
    /**
     * Creates a new {@link GraphView} to be used in this graph.
     */
    createGraphView(): GraphView;
    /**
     * Creates a new {@link GraphSelectionModel} to be used in this graph.
     */
    createSelectionModel(): GraphSelectionModel;
    /**
     * Creates a new {@link Stylesheet} to be used in this graph.
     */
    createStylesheet(): Stylesheet;
    protected registerDefaults(): void;
    protected initializeCollaborators(options?: GraphCollaboratorsOptions): void;
    constructor(container?: HTMLElement, model?: GraphDataModel, plugins?: GraphPluginConstructor[], stylesheet?: Stylesheet | null);
}
