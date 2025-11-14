"use strict";
/*
Copyright 2021-present The maxGraph project Contributors

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
const EventObject_js_1 = __importDefault(require("../event/EventObject.js"));
const InternalEvent_js_1 = __importDefault(require("../event/InternalEvent.js"));
/**
 * Action to change the current root in a view.
 *
 * @category Change
 */
class SelectionChange {
    constructor(graph, added = [], removed = []) {
        this.graph = graph;
        this.added = added.slice();
        this.removed = removed.slice();
    }
    /**
     * Changes the current root of the view.
     */
    execute() {
        const selectionModel = this.graph.getSelectionModel();
        for (const removed of this.removed) {
            selectionModel.cellRemoved(removed);
        }
        for (const added of this.added) {
            selectionModel.cellAdded(added);
        }
        [this.added, this.removed] = [this.removed, this.added];
        selectionModel.fireEvent(new EventObject_js_1.default(InternalEvent_js_1.default.CHANGE, { added: this.added, removed: this.removed }));
    }
}
exports.default = SelectionChange;
