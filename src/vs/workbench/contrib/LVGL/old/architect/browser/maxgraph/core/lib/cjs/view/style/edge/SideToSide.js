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
exports.SideToSide = void 0;
const CellState_js_1 = __importDefault(require("../../cell/CellState.js"));
const Point_js_1 = __importDefault(require("../../geometry/Point.js"));
const mathUtils_js_1 = require("../../../util/mathUtils.js");
/**
 * Implements a horizontal elbow edge.
 *
 * This EdgeStyle is registered under `sideToSideEdgeStyle` in {@link EdgeStyleRegistry} when using {@link Graph} or calling {@link registerDefaultEdgeStyles}.
 *
 * **IMPORTANT**: When registering it manually  in {@link EdgeStyleRegistry}, the following metadata must be used:
 * - handlerKind: 'elbow'
 * - isOrthogonal: true
 */
const SideToSide = (state, source, target, points, result) => {
    const { view } = state;
    let pt = points != null && points.length > 0 ? points[0] : null;
    const pts = state.absolutePoints;
    const p0 = pts[0];
    const pe = pts[pts.length - 1];
    if (pt != null) {
        pt = view.transformControlPoint(state, pt);
    }
    if (p0 != null) {
        source = new CellState_js_1.default();
        source.x = p0.x;
        source.y = p0.y;
    }
    if (pe != null) {
        target = new CellState_js_1.default();
        target.x = pe.x;
        target.y = pe.y;
    }
    if (source != null && target != null) {
        const l = Math.max(source.x, target.x);
        const r = Math.min(source.x + source.width, target.x + target.width);
        const x = pt != null ? pt.x : Math.round(r + (l - r) / 2);
        let y1 = view.getRoutingCenterY(source);
        let y2 = view.getRoutingCenterY(target);
        if (pt != null) {
            if (pt.y >= source.y && pt.y <= source.y + source.height) {
                y1 = pt.y;
            }
            if (pt.y >= target.y && pt.y <= target.y + target.height) {
                y2 = pt.y;
            }
        }
        if (!(0, mathUtils_js_1.contains)(target, x, y1) && !(0, mathUtils_js_1.contains)(source, x, y1)) {
            result.push(new Point_js_1.default(x, y1));
        }
        if (!(0, mathUtils_js_1.contains)(target, x, y2) && !(0, mathUtils_js_1.contains)(source, x, y2)) {
            result.push(new Point_js_1.default(x, y2));
        }
        if (result.length === 1) {
            if (pt != null) {
                if (!(0, mathUtils_js_1.contains)(target, x, pt.y) && !(0, mathUtils_js_1.contains)(source, x, pt.y)) {
                    result.push(new Point_js_1.default(x, pt.y));
                }
            }
            else {
                const t = Math.max(source.y, target.y);
                const b = Math.min(source.y + source.height, target.y + target.height);
                result.push(new Point_js_1.default(x, t + (b - t) / 2));
            }
        }
    }
};
exports.SideToSide = SideToSide;
