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
const ActorShape_js_1 = __importDefault(require("./ActorShape.js"));
const Point_js_1 = __importDefault(require("../../geometry/Point.js"));
/**
 * Implementation of the hexagon shape.
 *
 * This shape is registered under `hexagon` in {@link CellRenderer} when using {@link Graph} or calling {@link registerDefaultShapes}.
 *
 * @category Vertex Shapes
 */
class HexagonShape extends ActorShape_js_1.default {
    constructor() {
        super();
    }
    /**
     * Draws the path for this shape.
     */
    redrawPath(c, x, y, w, h) {
        const arcSize = this.getBaseArcSize();
        this.addPoints(c, [
            new Point_js_1.default(0.25 * w, 0),
            new Point_js_1.default(0.75 * w, 0),
            new Point_js_1.default(w, 0.5 * h),
            new Point_js_1.default(0.75 * w, h),
            new Point_js_1.default(0.25 * w, h),
            new Point_js_1.default(0, 0.5 * h),
        ], this.isRounded, arcSize, true);
    }
}
exports.default = HexagonShape;
