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
const Point_js_1 = __importDefault(require("../geometry/Point.js"));
const InternalEvent_js_1 = __importDefault(require("../event/InternalEvent.js"));
/**
 * Action to change the current root in a view.
 *
 * @category Change
 */
class CurrentRootChange {
    constructor(view, root) {
        this.view = view;
        this.root = root;
        this.previous = root;
        this.isUp = root === null;
        if (!this.isUp) {
            let tmp = this.view.currentRoot;
            while (tmp) {
                if (tmp === root) {
                    this.isUp = true;
                    break;
                }
                tmp = tmp.getParent();
            }
        }
    }
    /**
     * Changes the current root of the view.
     */
    execute() {
        const tmp = this.view.currentRoot;
        this.view.currentRoot = this.previous;
        this.previous = tmp;
        const translate = this.view.graph.getTranslateForRoot(this.view.currentRoot);
        if (translate) {
            this.view.translate = new Point_js_1.default(-translate.x, -translate.y);
        }
        if (this.isUp) {
            this.view.clear(this.view.currentRoot, true, true);
            this.view.validate(null);
        }
        else {
            this.view.refresh();
        }
        const name = this.isUp ? InternalEvent_js_1.default.UP : InternalEvent_js_1.default.DOWN;
        this.view.fireEvent(new EventObject_js_1.default(name, { root: this.view.currentRoot, previous: this.previous }));
        this.isUp = !this.isUp;
    }
}
exports.default = CurrentRootChange;
