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
exports.resetVertexHandlerConfig = exports.VertexHandlerConfig = exports.resetHandleConfig = exports.HandleConfig = exports.resetEdgeHandlerConfig = exports.EdgeHandlerConfig = void 0;
const Constants_js_1 = require("../../util/Constants.js");
const clone_utils_js_1 = require("../../internal/clone-utils.js");
/**
 * Global configuration for {@link EdgeHandler} (including subclasses).
 *
 * @experimental Subject to change or removal. maxGraph's global configuration may be modified in the future without prior notice.
 * @since 0.14.0
 * @category Configuration
 */
exports.EdgeHandlerConfig = {
    addBendOnShiftClickEnabled: false,
    connectFillColor: Constants_js_1.CONNECT_HANDLE_FILLCOLOR,
    cursorBend: 'crosshair',
    cursorMovable: 'move',
    cursorTerminal: 'pointer',
    cursorVirtualBend: 'crosshair',
    handleShape: 'square',
    removeBendOnShiftClickEnabled: false,
    selectionColor: Constants_js_1.EDGE_SELECTION_COLOR,
    selectionDashed: Constants_js_1.EDGE_SELECTION_DASHED,
    selectionStrokeWidth: Constants_js_1.EDGE_SELECTION_STROKEWIDTH,
    virtualBendOpacity: 20,
    virtualBendsEnabled: false,
};
const defaultEdgeHandlerConfig = { ...exports.EdgeHandlerConfig };
/**
 * Resets {@link EdgeHandlerConfig} to default values.
 *
 * @experimental Subject to change or removal. maxGraph's global configuration may be modified in the future without prior notice.
 * @since 0.14.0
 * @category Configuration
 */
const resetEdgeHandlerConfig = () => {
    (0, clone_utils_js_1.shallowCopy)(defaultEdgeHandlerConfig, exports.EdgeHandlerConfig);
};
exports.resetEdgeHandlerConfig = resetEdgeHandlerConfig;
/**
 * Global configuration for handles, used {@link VertexHandler} and {@link EdgeHandler} (including subclasses).
 *
 * @experimental Subject to change or removal. maxGraph's global configuration may be modified in the future without prior notice.
 * @since 0.14.0
 * @category Configuration
 */
exports.HandleConfig = {
    /**
     * Defines the default color to be used for the handle fill color. Use `none` for no color.
     * @default {@link HANDLE_FILLCOLOR}
     */
    fillColor: Constants_js_1.HANDLE_FILLCOLOR,
    /**
     * Defines the cursor to be used for the label handle.
     * @default 'default'
     * @since 0.20.0
     */
    labelCursor: 'default',
    /**
     * Defines the color to be used for the label handle fill color. Use `none` for no color.
     * @default {@link LABEL_HANDLE_FILLCOLOR}
     */
    labelFillColor: Constants_js_1.LABEL_HANDLE_FILLCOLOR,
    /**
     * Defines the default size for label handles.
     * @default {@link LABEL_HANDLE_SIZE}
     */
    labelSize: Constants_js_1.LABEL_HANDLE_SIZE,
    /**
     * Defines the default size for handles.
     * @default {@link HANDLE_SIZE}
     */
    size: Constants_js_1.HANDLE_SIZE,
    /**
     * Defines the default color to be used for the handle stroke color. Use `none` for no color.
     * @default {@link HANDLE_STROKECOLOR}
     */
    strokeColor: Constants_js_1.HANDLE_STROKECOLOR,
};
const defaultHandleConfig = { ...exports.HandleConfig };
/**
 * Resets {@link HandleConfig} to default values.
 *
 * @experimental Subject to change or removal. maxGraph's global configuration may be modified in the future without prior notice.
 * @since 0.14.0
 * @category Configuration
 */
const resetHandleConfig = () => {
    (0, clone_utils_js_1.shallowCopy)(defaultHandleConfig, exports.HandleConfig);
};
exports.resetHandleConfig = resetHandleConfig;
/**
 * Global configuration for {@link VertexHandler}.
 *
 * @experimental Subject to change or removal. maxGraph's global configuration may be modified in the future without prior notice.
 * @since 0.12.0
 * @category Configuration
 */
exports.VertexHandlerConfig = {
    /**
     * Defines the cursor for a movable vertex.
     * @since 0.20.0
     */
    cursorMovable: 'move',
    /**
     * Enable rotation handle
     * @default false
     */
    rotationEnabled: false,
    /**
     * Defines the default color to be used for the selection border of vertices. Use `none` for no color.
     * @default {@link VERTEX_SELECTION_COLOR}
     * @since 0.14.0
     */
    selectionColor: Constants_js_1.VERTEX_SELECTION_COLOR,
    /**
     * Defines the default stroke width to be used for vertex selections.
     * @default {@link VERTEX_SELECTION_STROKEWIDTH}
     * @since 0.14.0
     */
    selectionStrokeWidth: Constants_js_1.VERTEX_SELECTION_STROKEWIDTH,
    /**
     * Defines the default dashed state to be used for the vertex selection border.
     * @default {@link VERTEX_SELECTION_DASHED}
     * @since 0.14.0
     */
    selectionDashed: Constants_js_1.VERTEX_SELECTION_DASHED,
};
const defaultVertexHandlerConfig = { ...exports.VertexHandlerConfig };
/**
 * Resets {@link VertexHandlerConfig} to default values.
 *
 * @experimental Subject to change or removal. maxGraph's global configuration may be modified in the future without prior notice.
 * @since 0.14.0
 * @category Configuration
 */
const resetVertexHandlerConfig = () => {
    (0, clone_utils_js_1.shallowCopy)(defaultVertexHandlerConfig, exports.VertexHandlerConfig);
};
exports.resetVertexHandlerConfig = resetVertexHandlerConfig;
