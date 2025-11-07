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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseGraph = void 0;
const AbstractGraph_js_1 = require("./AbstractGraph.js");
const GraphDataModel_js_1 = __importDefault(require("./GraphDataModel.js"));
const CellRenderer_js_1 = __importDefault(require("./cell/CellRenderer.js"));
const Stylesheet_js_1 = require("./style/Stylesheet.js");
const GraphSelectionModel_js_1 = __importDefault(require("./GraphSelectionModel.js"));
const GraphView_js_1 = __importDefault(require("./GraphView.js"));
/**
 * An implementation of {@link AbstractGraph} that does not load any default built-ins (plugins, style elements).
 *
 * This class is optimized for production environments by enabling efficient tree-shaking.
 *
 * For evaluation and prototyping purposes, consider using {@link Graph}, which requires less configuration.
 *
 * @category Graph
 */
class BaseGraph extends AbstractGraph_js_1.AbstractGraph {
    initializeCollaborators(options) {
        this.cellRenderer = options?.cellRenderer ?? new CellRenderer_js_1.default();
        this.model = options?.model ?? new GraphDataModel_js_1.default();
        this.setSelectionModel(options?.selectionModel?.(this) ?? new GraphSelectionModel_js_1.default(this));
        this.setStylesheet(options?.stylesheet ?? new Stylesheet_js_1.Stylesheet());
        this.view = options?.view?.(this) ?? new GraphView_js_1.default(this);
    }
}
exports.BaseGraph = BaseGraph;
