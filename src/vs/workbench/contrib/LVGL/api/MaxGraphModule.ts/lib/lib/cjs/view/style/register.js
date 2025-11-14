"use strict";
/*
Copyright 2024-present The maxGraph project Contributors

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.unregisterAllEdgeMarkers = exports.registerDefaultEdgeMarkers = exports.unregisterAllPerimeters = exports.unregisterAllEdgeStyles = exports.unregisterAllEdgeStylesAndPerimeters = exports.registerDefaultPerimeters = exports.registerDefaultEdgeStyles = void 0;
const builtin_style_elements_js_1 = require("./builtin-style-elements.js");
const EdgeStyleRegistry_js_1 = require("./edge/EdgeStyleRegistry.js");
const EdgeMarkerRegistry_js_1 = require("./marker/EdgeMarkerRegistry.js");
const PerimeterRegistry_js_1 = require("./perimeter/PerimeterRegistry.js");
let isDefaultEdgeStylesRegistered = false;
/**
 * Register default builtin {@link EdgeStyle}s in {@link EdgeStyleRegistry}.
 *
 * @category Configuration
 * @category Style
 * @since 0.18.0
 */
const registerDefaultEdgeStyles = () => {
    if (!isDefaultEdgeStylesRegistered) {
        const edgeStylesToRegister = [
            ['elbowEdgeStyle', builtin_style_elements_js_1.EdgeStyle.ElbowConnector, { handlerKind: 'elbow' }],
            ['entityRelationEdgeStyle', builtin_style_elements_js_1.EdgeStyle.EntityRelation, {}],
            ['loopEdgeStyle', builtin_style_elements_js_1.EdgeStyle.Loop, { handlerKind: 'elbow', isOrthogonal: false }],
            ['manhattanEdgeStyle', builtin_style_elements_js_1.EdgeStyle.ManhattanConnector, { handlerKind: 'segment' }],
            ['orthogonalEdgeStyle', builtin_style_elements_js_1.EdgeStyle.OrthConnector, { handlerKind: 'segment' }],
            ['segmentEdgeStyle', builtin_style_elements_js_1.EdgeStyle.SegmentConnector, { handlerKind: 'segment' }],
            ['sideToSideEdgeStyle', builtin_style_elements_js_1.EdgeStyle.SideToSide, { handlerKind: 'elbow' }],
            ['topToBottomEdgeStyle', builtin_style_elements_js_1.EdgeStyle.TopToBottom, { handlerKind: 'elbow' }],
        ];
        for (const [name, edgeStyle, metadata] of edgeStylesToRegister) {
            EdgeStyleRegistry_js_1.EdgeStyleRegistry.add(name, edgeStyle, {
                ...metadata,
                // most edge styles registered here are orthogonal, so set to true by default to avoid to duplicate the configuration code
                isOrthogonal: metadata.isOrthogonal ?? true,
            });
        }
        isDefaultEdgeStylesRegistered = true;
    }
};
exports.registerDefaultEdgeStyles = registerDefaultEdgeStyles;
let isDefaultPerimetersRegistered = false;
/**
 * Register default builtin {@link Perimeter}s in {@link PerimeterRegistry}.
 *
 * @category Configuration
 * @category Style
 * @since 0.18.0
 */
const registerDefaultPerimeters = () => {
    if (!isDefaultPerimetersRegistered) {
        const perimetersToRegister = [
            ['ellipsePerimeter', builtin_style_elements_js_1.Perimeter.EllipsePerimeter],
            ['hexagonPerimeter', builtin_style_elements_js_1.Perimeter.HexagonPerimeter],
            ['rectanglePerimeter', builtin_style_elements_js_1.Perimeter.RectanglePerimeter],
            ['rhombusPerimeter', builtin_style_elements_js_1.Perimeter.RhombusPerimeter],
            ['trianglePerimeter', builtin_style_elements_js_1.Perimeter.TrianglePerimeter],
        ];
        for (const [name, perimeter] of perimetersToRegister) {
            PerimeterRegistry_js_1.PerimeterRegistry.add(name, perimeter);
        }
        isDefaultPerimetersRegistered = true;
    }
};
exports.registerDefaultPerimeters = registerDefaultPerimeters;
/**
 * Unregister all {@link EdgeStyle}s and {@link Perimeter}s from their registries.
 *
 * @see unregisterAllEdgeStyles
 * @see unregisterAllPerimeters
 *
 * @category Configuration
 * @category Style
 * @since 0.18.0
 */
const unregisterAllEdgeStylesAndPerimeters = () => {
    (0, exports.unregisterAllEdgeStyles)();
    (0, exports.unregisterAllPerimeters)();
};
exports.unregisterAllEdgeStylesAndPerimeters = unregisterAllEdgeStylesAndPerimeters;
/**
 * Unregister all {@link EdgeStyle}s from {@link EdgeStyleRegistry}.
 *
 * @category Configuration
 * @category Style
 * @since 0.20.0
 */
const unregisterAllEdgeStyles = () => {
    EdgeStyleRegistry_js_1.EdgeStyleRegistry.clear();
    isDefaultEdgeStylesRegistered = false;
};
exports.unregisterAllEdgeStyles = unregisterAllEdgeStyles;
/**
 * Unregister all {@link Perimeter}s from {@link PerimeterRegistry}.
 *
 * @category Configuration
 * @category Style
 * @since 0.20.0
 */
const unregisterAllPerimeters = () => {
    PerimeterRegistry_js_1.PerimeterRegistry.clear();
    isDefaultPerimetersRegistered = false;
};
exports.unregisterAllPerimeters = unregisterAllPerimeters;
let isDefaultMarkersRegistered = false;
/**
 *
 * Register default builtin {@link MarkerFactoryFunction}s in {@link EdgeMarkerRegistry}.
 *
 * @category Configuration
 * @category Style
 * @since 0.18.0
 */
const registerDefaultEdgeMarkers = () => {
    if (!isDefaultMarkersRegistered) {
        const markersToRegister = [
            ['classic', builtin_style_elements_js_1.EdgeMarker.createArrow(2)],
            ['classicThin', builtin_style_elements_js_1.EdgeMarker.createArrow(3)],
            ['block', builtin_style_elements_js_1.EdgeMarker.createArrow(2)],
            ['blockThin', builtin_style_elements_js_1.EdgeMarker.createArrow(3)],
            ['open', builtin_style_elements_js_1.EdgeMarker.createOpenArrow(2)],
            ['openThin', builtin_style_elements_js_1.EdgeMarker.createOpenArrow(3)],
            ['oval', builtin_style_elements_js_1.EdgeMarker.oval],
            ['diamond', builtin_style_elements_js_1.EdgeMarker.diamond],
            ['diamondThin', builtin_style_elements_js_1.EdgeMarker.diamond],
        ];
        for (const [type, factory] of markersToRegister) {
            EdgeMarkerRegistry_js_1.EdgeMarkerRegistry.add(type, factory);
        }
        isDefaultMarkersRegistered = true;
    }
};
exports.registerDefaultEdgeMarkers = registerDefaultEdgeMarkers;
/**
 * Unregister all {@link MarkerFactoryFunction}s from {@link EdgeMarkerRegistry}.
 *
 * @category Configuration
 * @category Style
 * @since 0.18.0
 */
const unregisterAllEdgeMarkers = () => {
    EdgeMarkerRegistry_js_1.EdgeMarkerRegistry.clear();
    isDefaultMarkersRegistered = false;
};
exports.unregisterAllEdgeMarkers = unregisterAllEdgeMarkers;
