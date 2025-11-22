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
exports.PageBreaksMixin = void 0;
const Rectangle_js_1 = __importDefault(require("../geometry/Rectangle.js"));
const Point_js_1 = __importDefault(require("../geometry/Point.js"));
const PolylineShape_js_1 = __importDefault(require("../shape/edge/PolylineShape.js"));
// @ts-expect-error The properties of PartialGraph are defined elsewhere.
exports.PageBreaksMixin = {
    horizontalPageBreaks: null,
    verticalPageBreaks: null,
    updatePageBreaks(visible, _width, _height) {
        const { scale, translate: tr } = this.getView();
        const fmt = this.getPageFormat();
        const ps = scale * this.getPageScale();
        const bounds = new Rectangle_js_1.default(0, 0, fmt.width * ps, fmt.height * ps);
        const gb = Rectangle_js_1.default.fromRectangle(this.getGraphBounds());
        gb.width = Math.max(1, gb.width);
        gb.height = Math.max(1, gb.height);
        bounds.x =
            Math.floor((gb.x - tr.x * scale) / bounds.width) * bounds.width + tr.x * scale;
        bounds.y =
            Math.floor((gb.y - tr.y * scale) / bounds.height) * bounds.height + tr.y * scale;
        gb.width = Math.ceil((gb.width + (gb.x - bounds.x)) / bounds.width) * bounds.width;
        gb.height =
            Math.ceil((gb.height + (gb.y - bounds.y)) / bounds.height) * bounds.height;
        // Does not show page breaks if the scale is too small
        visible =
            visible && Math.min(bounds.width, bounds.height) > this.getMinPageBreakDist();
        const horizontalCount = visible ? Math.ceil(gb.height / bounds.height) + 1 : 0;
        const verticalCount = visible ? Math.ceil(gb.width / bounds.width) + 1 : 0;
        const right = (verticalCount - 1) * bounds.width;
        const bottom = (horizontalCount - 1) * bounds.height;
        if (this.horizontalPageBreaks == null && horizontalCount > 0) {
            this.horizontalPageBreaks = [];
        }
        if (this.verticalPageBreaks == null && verticalCount > 0) {
            this.verticalPageBreaks = [];
        }
        const drawPageBreaks = (breaks) => {
            if (breaks != null) {
                const count = breaks === this.horizontalPageBreaks ? horizontalCount : verticalCount;
                for (let i = 0; i <= count; i += 1) {
                    const pts = breaks === this.horizontalPageBreaks
                        ? [
                            new Point_js_1.default(Math.round(bounds.x), Math.round(bounds.y + i * bounds.height)),
                            new Point_js_1.default(Math.round(bounds.x + right), Math.round(bounds.y + i * bounds.height)),
                        ]
                        : [
                            new Point_js_1.default(Math.round(bounds.x + i * bounds.width), Math.round(bounds.y)),
                            new Point_js_1.default(Math.round(bounds.x + i * bounds.width), Math.round(bounds.y + bottom)),
                        ];
                    if (breaks[i] != null) {
                        breaks[i].points = pts;
                        breaks[i].redraw();
                    }
                    else {
                        const pageBreak = new PolylineShape_js_1.default(pts, this.getPageBreakColor());
                        pageBreak.dialect = this.getDialect();
                        pageBreak.pointerEvents = false;
                        pageBreak.isDashed = this.isPageBreakDashed();
                        pageBreak.init(this.getView().backgroundPane);
                        pageBreak.redraw();
                        breaks[i] = pageBreak;
                    }
                }
                for (let i = count; i < breaks.length; i += 1) {
                    breaks[i].destroy();
                }
                breaks.splice(count, breaks.length - count);
            }
        };
        drawPageBreaks(this.horizontalPageBreaks);
        drawPageBreaks(this.verticalPageBreaks);
    },
};
