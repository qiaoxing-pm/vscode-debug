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
const HierarchicalLayoutStage_js_1 = __importDefault(require("./HierarchicalLayoutStage.js"));
const arrayUtils_js_1 = require("../../../util/arrayUtils.js");
const CellPath_js_1 = __importDefault(require("../../cell/CellPath.js"));
const cloneUtils_js_1 = require("../../../util/cloneUtils.js");
/**
 * An implementation of the first stage of the Sugiyama layout. Straightforward
 * longest path calculation of layer assignment
 *
 * @category Layout
 */
class SwimlaneOrdering extends HierarchicalLayoutStage_js_1.default {
    /**
     * Creates a cycle remover for the given internal model.
     */
    constructor(layout) {
        super();
        this.layout = layout;
    }
    /**
     * Takes the graph detail and configuration information within the facade
     * and creates the resulting laid out graph within that facade for further
     * use.
     */
    execute(parent) {
        const model = this.layout.getDataModel();
        const seenNodes = {};
        const unseenNodes = (0, cloneUtils_js_1.clone)(model.vertexMapper, null, true);
        // Perform a dfs through the internal model. If a cycle is found,
        // reverse it.
        let rootsArray = null;
        if (model.roots != null) {
            const modelRoots = model.roots;
            rootsArray = [];
            for (let i = 0; i < modelRoots.length; i += 1) {
                rootsArray[i] = model.vertexMapper.get(modelRoots[i]);
            }
        }
        model.visit((parent, node, connectingEdge, layer, seen) => {
            // Check if the cell is in it's own ancestor list, if so
            // invert the connecting edge and reverse the target/source
            // relationship to that edge in the parent and the cell
            // Ancestor hashes only line up within a swimlane
            const isAncestor = parent != null &&
                parent.swimlaneIndex === node.swimlaneIndex &&
                node.isAncestor(parent);
            // If the source->target swimlane indices go from higher to
            // lower, the edge is reverse
            const reversedOverSwimlane = parent != null &&
                connectingEdge != null &&
                parent.swimlaneIndex < node.swimlaneIndex &&
                connectingEdge.source === node;
            if (isAncestor) {
                connectingEdge.invert();
                (0, arrayUtils_js_1.remove)(connectingEdge, parent.connectsAsSource);
                node.connectsAsSource.push(connectingEdge);
                parent.connectsAsTarget.push(connectingEdge);
                (0, arrayUtils_js_1.remove)(connectingEdge, node.connectsAsTarget);
            }
            else if (reversedOverSwimlane) {
                connectingEdge.invert();
                (0, arrayUtils_js_1.remove)(connectingEdge, parent.connectsAsTarget);
                node.connectsAsTarget.push(connectingEdge);
                parent.connectsAsSource.push(connectingEdge);
                (0, arrayUtils_js_1.remove)(connectingEdge, node.connectsAsSource);
            }
            const cellId = CellPath_js_1.default.create(node.cell);
            seenNodes[cellId] = node;
            delete unseenNodes[cellId];
        }, rootsArray, true, null);
    }
}
exports.default = SwimlaneOrdering;
