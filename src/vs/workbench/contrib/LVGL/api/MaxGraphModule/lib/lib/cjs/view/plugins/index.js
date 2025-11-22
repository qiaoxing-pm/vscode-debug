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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultPlugins = exports.TooltipHandler = exports.SelectionHandler = exports.SelectionCellsHandler = exports.RubberBandHandler = exports.PopupMenuHandler = exports.PanningHandler = exports.ConnectionHandler = exports.CellEditorHandler = void 0;
const CellEditorHandler_js_1 = __importDefault(require("./CellEditorHandler.js"));
const TooltipHandler_js_1 = __importDefault(require("./TooltipHandler.js"));
const SelectionCellsHandler_js_1 = __importDefault(require("./SelectionCellsHandler.js"));
const PopupMenuHandler_js_1 = __importDefault(require("./PopupMenuHandler.js"));
const ConnectionHandler_js_1 = __importDefault(require("./ConnectionHandler.js"));
const SelectionHandler_js_1 = __importDefault(require("./SelectionHandler.js"));
const PanningHandler_js_1 = __importDefault(require("./PanningHandler.js"));
const FitPlugin_js_1 = require("./FitPlugin.js");
// Export all plugins and types to have them in the root barrel file
var CellEditorHandler_js_2 = require("./CellEditorHandler.js");
Object.defineProperty(exports, "CellEditorHandler", { enumerable: true, get: function () { return __importDefault(CellEditorHandler_js_2).default; } });
var ConnectionHandler_js_2 = require("./ConnectionHandler.js");
Object.defineProperty(exports, "ConnectionHandler", { enumerable: true, get: function () { return __importDefault(ConnectionHandler_js_2).default; } });
__exportStar(require("./FitPlugin.js"), exports);
var PanningHandler_js_2 = require("./PanningHandler.js");
Object.defineProperty(exports, "PanningHandler", { enumerable: true, get: function () { return __importDefault(PanningHandler_js_2).default; } });
var PopupMenuHandler_js_2 = require("./PopupMenuHandler.js");
Object.defineProperty(exports, "PopupMenuHandler", { enumerable: true, get: function () { return __importDefault(PopupMenuHandler_js_2).default; } });
var RubberBandHandler_js_1 = require("./RubberBandHandler.js");
Object.defineProperty(exports, "RubberBandHandler", { enumerable: true, get: function () { return __importDefault(RubberBandHandler_js_1).default; } });
var SelectionCellsHandler_js_2 = require("./SelectionCellsHandler.js");
Object.defineProperty(exports, "SelectionCellsHandler", { enumerable: true, get: function () { return __importDefault(SelectionCellsHandler_js_2).default; } });
var SelectionHandler_js_2 = require("./SelectionHandler.js");
Object.defineProperty(exports, "SelectionHandler", { enumerable: true, get: function () { return __importDefault(SelectionHandler_js_2).default; } });
var TooltipHandler_js_2 = require("./TooltipHandler.js");
Object.defineProperty(exports, "TooltipHandler", { enumerable: true, get: function () { return __importDefault(TooltipHandler_js_2).default; } });
/**
 * Returns the list of plugins used by default in `maxGraph`.
 *
 * The function returns a new array each time it is called.
 *
 * @category Plugin
 * @since 0.13.0
 */
const getDefaultPlugins = () => [
    CellEditorHandler_js_1.default,
    TooltipHandler_js_1.default,
    SelectionCellsHandler_js_1.default,
    PopupMenuHandler_js_1.default,
    ConnectionHandler_js_1.default,
    SelectionHandler_js_1.default,
    PanningHandler_js_1.default,
    FitPlugin_js_1.FitPlugin,
];
exports.getDefaultPlugins = getDefaultPlugins;
