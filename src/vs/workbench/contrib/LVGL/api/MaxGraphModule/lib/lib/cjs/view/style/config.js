"use strict";
/*
Copyright 2025-present The maxGraph project Contributors

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
exports.resetManhattanConnectorConfig = exports.ManhattanConnectorConfig = exports.resetOrthogonalConnectorConfig = exports.OrthogonalConnectorConfig = exports.resetEntityRelationConnectorConfig = exports.EntityRelationConnectorConfig = void 0;
const Constants_js_1 = require("../../util/Constants.js");
const clone_utils_js_1 = require("../../internal/clone-utils.js");
/**
 * Configure the {@link EntityRelation} connector.
 *
 * @experimental subject to change or removal. maxGraph's global configuration may be modified in the future without prior notice.
 * @since 0.15.0
 * @category Configuration
 * @category EdgeStyle
 */
exports.EntityRelationConnectorConfig = {
    /**
     * Defines the length of the horizontal segment of an `Entity Relation`.
     * This can be overridden using {@link CellStateStyle.segment} style.
     * @default {@link ENTITY_SEGMENT}
     */
    segment: Constants_js_1.ENTITY_SEGMENT,
};
/**
 * Resets {@link EntityRelationConnectorConfig} to default values.
 *
 * @experimental Subject to change or removal. maxGraph's global configuration may be modified in the future without prior notice.
 * @since 0.15.0
 * @category Configuration
 * @category EdgeStyle
 */
const resetEntityRelationConnectorConfig = () => {
    // implement the reset manually as there are a few properties for now
    exports.EntityRelationConnectorConfig.segment = Constants_js_1.ENTITY_SEGMENT;
};
exports.resetEntityRelationConnectorConfig = resetEntityRelationConnectorConfig;
/**
 * Configure the {@link OrthConnector}.
 *
 * @experimental subject to change or removal. maxGraph's global configuration may be modified in the future without prior notice.
 * @since 0.16.0
 * @category Configuration
 * @category EdgeStyle
 */
exports.OrthogonalConnectorConfig = {
    /**
     * If the value is not set in {@link CellStateStyle.jettySize}, defines the jetty size of the connector.
     *
     * If the computed value of the jetty size coming from {@link CellStateStyle} is 'auto', it is used in the computation of the automatic jetty size.
     * See the implementation of {@link OrthConnector} for more details.
     *
     * @default 10
     */
    buffer: 10,
    /**
     * See the implementation of {@link OrthConnector} for more details.
     * @default true
     */
    pointsFallback: true,
};
const originalOrthogonalConnectorConfig = { ...exports.OrthogonalConnectorConfig };
/**
 * Resets {@link OrthogonalConnectorConfig} to default values.
 *
 * @experimental Subject to change or removal. maxGraph's global configuration may be modified in the future without prior notice.
 * @since 0.16.0
 * @category Configuration
 * @category EdgeStyle
 */
const resetOrthogonalConnectorConfig = () => {
    (0, clone_utils_js_1.shallowCopy)(originalOrthogonalConnectorConfig, exports.OrthogonalConnectorConfig);
};
exports.resetOrthogonalConnectorConfig = resetOrthogonalConnectorConfig;
const allDirections = () => {
    return ['north', 'south', 'east', 'west'];
};
/**
 * Configure the {@link ManhattanConnector}.
 *
 * @experimental subject to change or removal. maxGraph's global configuration may be modified in the future without prior notice.
 * @since 0.16.0
 * @category Configuration
 * @category EdgeStyle
 */
exports.ManhattanConnectorConfig = {
    maxAllowedDirectionChange: 90,
    maxLoops: 2000,
    endDirections: allDirections(),
    startDirections: allDirections(),
    step: 12,
};
const originalManhattanConnectorConfig = {};
(0, clone_utils_js_1.shallowCopy)(exports.ManhattanConnectorConfig, originalManhattanConnectorConfig);
/**
 * Resets {@link ManhattanConnectorConfig} to default values.
 *
 * @experimental Subject to change or removal. maxGraph's global configuration may be modified in the future without prior notice.
 * @since 0.16.0
 * @category Configuration
 * @category EdgeStyle
 */
const resetManhattanConnectorConfig = () => {
    (0, clone_utils_js_1.shallowCopy)(originalManhattanConnectorConfig, exports.ManhattanConnectorConfig);
};
exports.resetManhattanConnectorConfig = resetManhattanConnectorConfig;
