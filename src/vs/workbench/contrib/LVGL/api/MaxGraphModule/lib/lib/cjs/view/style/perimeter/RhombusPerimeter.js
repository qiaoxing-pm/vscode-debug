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
exports.RhombusPerimeter = void 0;
const Point_js_1 = __importDefault(require("../../geometry/Point.js"));
const mathUtils_js_1 = require("../../../util/mathUtils.js");
/**
 * This perimeter is registered under `rhombusPerimeter` in {@link PerimeterRegistry} when using {@link Graph} or calling {@link registerDefaultPerimeters}.
 *
 * @category Perimeter
 */
const RhombusPerimeter = (bounds, _vertex, next, orthogonal = false) => {
    const { x } = bounds;
    const { y } = bounds;
    const w = bounds.width;
    const h = bounds.height;
    const cx = x + w / 2;
    const cy = y + h / 2;
    const px = next.x;
    const py = next.y;
    // Special case for intersecting the diamond's corners
    if (cx === px) {
        if (cy > py) {
            return new Point_js_1.default(cx, y); // top
        }
        return new Point_js_1.default(cx, y + h); // bottom
    }
    if (cy === py) {
        if (cx > px) {
            return new Point_js_1.default(x, cy); // left
        }
        return new Point_js_1.default(x + w, cy); // right
    }
    let tx = cx;
    let ty = cy;
    if (orthogonal) {
        if (px >= x && px <= x + w) {
            tx = px;
        }
        else if (py >= y && py <= y + h) {
            ty = py;
        }
    }
    // In which quadrant will the intersection be?
    // set the slope and offset of the border line accordingly
    if (px < cx) {
        if (py < cy) {
            return (0, mathUtils_js_1.intersection)(px, py, tx, ty, cx, y, x, cy);
        }
        return (0, mathUtils_js_1.intersection)(px, py, tx, ty, cx, y + h, x, cy);
    }
    if (py < cy) {
        return (0, mathUtils_js_1.intersection)(px, py, tx, ty, cx, y, x + w, cy);
    }
    return (0, mathUtils_js_1.intersection)(px, py, tx, ty, cx, y + h, x + w, cy);
};
exports.RhombusPerimeter = RhombusPerimeter;
