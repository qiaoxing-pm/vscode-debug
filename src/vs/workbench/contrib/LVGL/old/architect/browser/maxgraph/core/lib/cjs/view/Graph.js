"use strict";
/*
Copyright 2021-present The maxGraph project Contributors
Copyright (c) 2006-2015, JGraph Ltd
Copyright (c) 2006-2015, Gaudenz Alder

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
exports.Graph = void 0;
const AbstractGraph_js_1 = require("./AbstractGraph.js");
const GraphView_js_1 = __importDefault(require("./GraphView.js"));
const CellRenderer_js_1 = __importDefault(require("./cell/CellRenderer.js"));
const GraphDataModel_js_1 = __importDefault(require("./GraphDataModel.js"));
const Stylesheet_js_1 = require("./style/Stylesheet.js");
const GraphSelectionModel_js_1 = __importDefault(require("./GraphSelectionModel.js"));
const register_shapes_js_1 = require("./shape/register-shapes.js");
const register_js_1 = require("./style/register.js");
const index_js_1 = require("./plugins/index.js");
/**
 * An implementation of {@link AbstractGraph} that automatically loads some default built-ins (plugins, style elements).
 *
 * Good for evaluation and prototyping, but not recommended for production use. Use {@link BaseGraph} instead.
 *
 * @category Graph
 */
class Graph extends AbstractGraph_js_1.AbstractGraph {
    /**
     * Creates a new {@link CellRenderer} to be used in this graph.
     */
    createCellRenderer() {
        return new CellRenderer_js_1.default();
    }
    /**
     * Creates a new {@link GraphDataModel} to be used in this graph.
     */
    createGraphDataModel() {
        return new GraphDataModel_js_1.default();
    }
    /**
     * Creates a new {@link GraphView} to be used in this graph.
     */
    createGraphView() {
        return new GraphView_js_1.default(this);
    }
    /**
     * Creates a new {@link GraphSelectionModel} to be used in this graph.
     */
    createSelectionModel() {
        return new GraphSelectionModel_js_1.default(this);
    }
    /**
     * Creates a new {@link Stylesheet} to be used in this graph.
     */
    createStylesheet() {
        return new Stylesheet_js_1.Stylesheet();
    }
    // Register all builtins provided by maxGraph
    registerDefaults() {
        (0, register_js_1.registerDefaultEdgeMarkers)();
        (0, register_js_1.registerDefaultEdgeStyles)();
        (0, register_js_1.registerDefaultPerimeters)();
        (0, register_shapes_js_1.registerDefaultShapes)();
    }
    // Use the create factory methods of the class instead of the collaborators because they cannot be passed in the constructor
    initializeCollaborators(options) {
        this.cellRenderer = this.createCellRenderer();
        this.model = options?.model ?? this.createGraphDataModel();
        this.setSelectionModel(this.createSelectionModel());
        this.setStylesheet(options?.stylesheet ?? this.createStylesheet());
        this.view = this.createGraphView();
    }
    constructor(container, model, plugins = (0, index_js_1.getDefaultPlugins)(), stylesheet) {
        super({ container, model, plugins, stylesheet: stylesheet ?? undefined });
    }
}
exports.Graph = Graph;
