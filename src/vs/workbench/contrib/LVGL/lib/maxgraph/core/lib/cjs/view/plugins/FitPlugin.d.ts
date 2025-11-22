import type { GraphPlugin } from '../../types.js';
import type { AbstractGraph } from '../AbstractGraph.js';
/**
 * Options of the {@link FitPlugin.fitCenter} method.
 * @since 0.17.0
 * @category Navigation
 */
export type FitCenterOptions = {
    /**
     * Margin between the graph and the container.
     * @default 2
     */
    margin?: number;
};
/**
 * Options of the {@link FitPlugin.fit} method.
 * @since 0.21.0
 * @category Navigation
 */
export type FitOptions = {
    /**
     * Optional number that specifies the border.
     * @default{@link Graph.getBorder}
     */
    border?: number;
    /**
     * Optional boolean that specifies if the "translate" should be changed.
     * @default false
     */
    keepOrigin?: boolean;
    /**
     * Optional margin in pixels.
     * @default 0
     */
    margin?: number;
    /**
     * Optional boolean that specifies if the scale should be set (when `true`) or just returned.
     * @default true
     */
    enabled?: boolean;
    /**
     * Optional boolean that specifies if the width should be ignored.
     * @default false
     */
    ignoreWidth?: boolean;
    /**
     * Optional boolean that specifies if the height should be ignored.
     * @default false
     */
    ignoreHeight?: boolean;
    /**
     * Optional maximum height. When set to `null`, the height is ignored i.e. use the maximum available height within the container.
     * @default null
     */
    maxHeight?: number | null;
};
/**
 * A plugin providing methods to fit the graph within its container.
 * @since 0.17.0
 * @category Navigation
 * @category Plugin
 */
export declare class FitPlugin implements GraphPlugin {
    private readonly graph;
    static readonly pluginId = "fit";
    /**
     * Specifies the minimum scale to be applied in {@link fit}. Set this to `null` to allow any value.
     * @default 0.1
     * @since 0.21.0
     */
    minFitScale: number | null;
    /**
     * Specifies the maximum scale to be applied in {@link fit} and  {@link fitCenter}. Set this to `null` to allow any value.
     * @default 8
     */
    maxFitScale: number | null;
    /**
     * Constructs the plugin that provides `fit` methods.
     *
     * @param graph Reference to the enclosing {@link AbstractGraph}.
     */
    constructor(graph: AbstractGraph);
    /**
     * Scales the graph such that the complete diagram fits into {@link Graph.container} and returns the current scale in the view.
     * To fit an initial graph prior to rendering, set {@link GraphView.rendering} to `false` prior to changing the model
     * and execute the following after changing the model.
     *
     * ```javascript
     * graph.view.rendering = false;
     * // here, change the model
     * graph.getPlugin<FitPlugin>('fit')?.fit();
     * graph.view.rendering = true;
     * graph.refresh();
     * ```
     *
     * To fit and center the graph, use {@link fitCenter}.
     *
     * @param options Optional number that specifies the border.
     * @since 0.21.0
     */
    fit(options?: FitOptions): number;
    /**
     * Fit and center the graph within its container.
     *
     * @param options Optional options to customize the fit behavior.
     * @returns The current scale in the view.
     */
    fitCenter(options?: FitCenterOptions): number;
    /** Do nothing here. */
    onDestroy(): void;
}
