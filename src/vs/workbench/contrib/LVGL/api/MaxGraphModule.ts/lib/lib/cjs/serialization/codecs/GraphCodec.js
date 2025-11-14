"use strict";
/*
Copyright 2024-present The maxGraph project Contributors
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
exports.GraphCodec = exports.excludedFields = void 0;
const ObjectCodec_js_1 = __importDefault(require("../ObjectCodec.js"));
const Graph_js_1 = require("../../view/Graph.js");
exports.excludedFields = [
    'eventListeners',
    'view',
    'container',
    'cellRenderer',
    'selectionModel',
    // @ts-ignore private property
    'plugins',
];
/**
 * Codec for {@link Graph}s.
 * This class is created and registered dynamically at load time and used implicitly via {@link Codec} and the {@link CodecRegistry}.
 *
 * Transient Fields:
 *
 * - eventListeners
 * - view
 * - container
 * - cellRenderer
 * - selectionModel
 * - plugins
 *
 * @category Serialization with Codecs
 */
class GraphCodec extends ObjectCodec_js_1.default {
    constructor() {
        // Do not  load default plugins, plugins are not serialized
        super(new Graph_js_1.Graph(undefined, undefined, []), exports.excludedFields);
        this.setName('Graph');
    }
}
exports.GraphCodec = GraphCodec;
