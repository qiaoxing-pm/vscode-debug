import type { GraphPluginConstructor } from '../../types.js';
export { default as CellEditorHandler } from './CellEditorHandler.js';
export { default as ConnectionHandler } from './ConnectionHandler.js';
export * from './FitPlugin.js';
export { default as PanningHandler } from './PanningHandler.js';
export { default as PopupMenuHandler } from './PopupMenuHandler.js';
export { default as RubberBandHandler } from './RubberBandHandler.js';
export { default as SelectionCellsHandler } from './SelectionCellsHandler.js';
export { default as SelectionHandler } from './SelectionHandler.js';
export { default as TooltipHandler } from './TooltipHandler.js';
/**
 * Returns the list of plugins used by default in `maxGraph`.
 *
 * The function returns a new array each time it is called.
 *
 * @category Plugin
 * @since 0.13.0
 */
export declare const getDefaultPlugins: () => GraphPluginConstructor[];
