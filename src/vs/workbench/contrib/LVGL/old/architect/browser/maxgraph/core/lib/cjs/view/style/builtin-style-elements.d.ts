/**
 * Provides various EdgeStyle functions to be used in a style as the value of {@link CellStateStyle.edgeStyle}.
 *
 * @category EdgeStyle
 */
export * as EdgeStyle from './edge/index.js';
/**
 * Provides various perimeter functions to be used in a style as the value of {@link CellStateStyle.perimeter}.
 *
 * @category Perimeter
 */
export * as Perimeter from './perimeter/index.js';
/**
 * Includes all builtins edge markers which can be registered in {@link EdgeMarkerRegistry}.
 *
 * They are registered by default when instantiating {@link Graph} or they can all be registered by calling {@link registerDefaultEdgeMarkers}.
 *
 * @since 0.18.0
 * @category Style
 */
export * as EdgeMarker from './marker/edge-markers.js';
