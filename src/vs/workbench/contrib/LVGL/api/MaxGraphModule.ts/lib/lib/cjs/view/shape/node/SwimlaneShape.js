"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const Shape_js_1 = __importDefault(require("../Shape.js"));
const Rectangle_js_1 = __importDefault(require("../../geometry/Rectangle.js"));
const Constants_js_1 = require("../../../util/Constants.js");
/**
 * Extends {@link Shape} to implement a swimlane shape.
 *
 * This shape is registered under `swimlane` in {@link CellRenderer} when using {@link Graph} or calling {@link registerDefaultShapes}.
 *
 * Use:
 * - {@link CellStateStyle.startSize} to define the size of the title region,
 * - {@link CellStateStyle.swimlaneFillColor} for the content area fill,
 * - {@link CellStateStyle.separatorColor} to draw an additional vertical separator,
 * - {@link CellStateStyle.swimlaneLine} to hide the line between the title region and the content area
 *
 * {@link CellStateStyle.horizontal} affects the orientation of this shape, not only its label.
 *
 * @category Vertex Shapes
 */
class SwimlaneShape extends Shape_js_1.default {
    constructor(bounds, fill, stroke, strokeWidth = 1) {
        super();
        /**
         * Default image width and image height if an image but no image width and image height are defined in the style.
         * @default 16
         */
        this.imageSize = 16;
        this.imageSrc = null;
        this.bounds = bounds;
        this.fill = fill;
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
    }
    /**
     * Adds roundable support.
     */
    isRoundable(c, x, y, w, h) {
        return true;
    }
    /**
     * Returns the bounding box for the gradient box for this shape.
     */
    getTitleSize() {
        return Math.max(0, this.style?.startSize ?? Constants_js_1.DEFAULT_STARTSIZE);
    }
    /**
     * Returns the bounding box for the gradient box for this shape.
     */
    getLabelBounds(rect) {
        const start = this.getTitleSize();
        const bounds = new Rectangle_js_1.default(rect.x, rect.y, rect.width, rect.height);
        const horizontal = this.isHorizontal();
        const flipH = this.style?.flipH ?? false;
        const flipV = this.style?.flipV ?? false;
        // East is default
        const shapeVertical = this.direction === 'north' || this.direction === 'south';
        const realHorizontal = horizontal == !shapeVertical;
        const realFlipH = !realHorizontal &&
            flipH !== (this.direction === 'south' || this.direction === 'west');
        const realFlipV = realHorizontal &&
            flipV !== (this.direction === 'south' || this.direction === 'west');
        // Shape is horizontal
        if (!shapeVertical) {
            const tmp = Math.min(bounds.height, start * this.scale);
            if (realFlipH || realFlipV) {
                bounds.y += bounds.height - tmp;
            }
            bounds.height = tmp;
        }
        else {
            const tmp = Math.min(bounds.width, start * this.scale);
            if (realFlipH || realFlipV) {
                bounds.x += bounds.width - tmp;
            }
            bounds.width = tmp;
        }
        return bounds;
    }
    /**
     * Returns the bounding box for the gradient box for this shape.
     */
    getGradientBounds(c, x, y, w, h) {
        let start = this.getTitleSize();
        if (this.isHorizontal()) {
            start = Math.min(start, h);
            return new Rectangle_js_1.default(x, y, w, start);
        }
        start = Math.min(start, w);
        return new Rectangle_js_1.default(x, y, start, h);
    }
    /**
     * Returns the arc size for the swimlane.
     */
    getSwimlaneArcSize(w, h, start) {
        if (this.style?.absoluteArcSize) {
            return Math.min(this.getBaseArcSize(), Math.min(h, w) / 2);
        }
        const roundingFactor = (this.style?.arcSize ?? Constants_js_1.RECTANGLE_ROUNDING_FACTOR * 100) / 100;
        return start * roundingFactor * 3;
    }
    /**
     * Paints the swimlane vertex shape.
     */
    isHorizontal() {
        return this.style?.horizontal ?? true;
    }
    /**
     * Paints the swimlane vertex shape.
     */
    paintVertexShape(c, x, y, w, h) {
        let start = this.getTitleSize();
        const fill = this.style?.swimlaneFillColor ?? Constants_js_1.NONE;
        const swimlaneLine = this.style?.swimlaneLine ?? true;
        let r = 0;
        if (this.isHorizontal()) {
            start = Math.min(start, h);
        }
        else {
            start = Math.min(start, w);
        }
        c.translate(x, y);
        if (!this.isRounded) {
            this.paintSwimlane(c, x, y, w, h, start, fill, swimlaneLine);
        }
        else {
            r = this.getSwimlaneArcSize(w, h, start);
            r = Math.min((this.isHorizontal() ? h : w) - start, Math.min(start, r));
            this.paintRoundedSwimlane(c, x, y, w, h, start, r, fill, swimlaneLine);
        }
        const sep = this.style?.separatorColor ?? Constants_js_1.NONE;
        this.paintSeparator(c, x, y, w, h, start, sep);
        if (this.imageSrc) {
            const bounds = this.getImageBounds(x, y, w, h);
            c.image(bounds.x - x, bounds.y - y, bounds.width, bounds.height, this.imageSrc, false, false, false);
        }
        if (this.glass) {
            c.setShadow(false);
            this.paintGlassEffect(c, 0, 0, w, start, r);
        }
    }
    /**
     * Paints the swimlane vertex shape.
     */
    paintSwimlane(c, x, y, w, h, start, fill, swimlaneLine) {
        c.begin();
        let events = true;
        if (this.style && this.style.pointerEvents != null) {
            events = this.style.pointerEvents;
        }
        if (!events && this.fill === Constants_js_1.NONE) {
            c.pointerEvents = false;
        }
        if (this.isHorizontal()) {
            c.moveTo(0, start);
            c.lineTo(0, 0);
            c.lineTo(w, 0);
            c.lineTo(w, start);
            c.fillAndStroke();
            if (start < h) {
                if (fill === Constants_js_1.NONE || !events) {
                    c.pointerEvents = false;
                }
                if (fill !== Constants_js_1.NONE) {
                    c.setFillColor(fill);
                }
                c.begin();
                c.moveTo(0, start);
                c.lineTo(0, h);
                c.lineTo(w, h);
                c.lineTo(w, start);
                if (fill === Constants_js_1.NONE) {
                    c.stroke();
                }
                else {
                    c.fillAndStroke();
                }
            }
        }
        else {
            c.moveTo(start, 0);
            c.lineTo(0, 0);
            c.lineTo(0, h);
            c.lineTo(start, h);
            c.fillAndStroke();
            if (start < w) {
                if (fill === Constants_js_1.NONE || !events) {
                    c.pointerEvents = false;
                }
                if (fill !== Constants_js_1.NONE) {
                    c.setFillColor(fill);
                }
                c.begin();
                c.moveTo(start, 0);
                c.lineTo(w, 0);
                c.lineTo(w, h);
                c.lineTo(start, h);
                if (fill === Constants_js_1.NONE) {
                    c.stroke();
                }
                else {
                    c.fillAndStroke();
                }
            }
        }
        if (swimlaneLine) {
            this.paintDivider(c, x, y, w, h, start, fill === Constants_js_1.NONE);
        }
    }
    /**
     * Paints the swimlane vertex shape.
     */
    paintRoundedSwimlane(c, x, y, w, h, start, r, fill, swimlaneLine) {
        c.begin();
        let events = true;
        if (this.style && this.style.pointerEvents != null) {
            events = this.style.pointerEvents;
        }
        if (!events && this.fill === Constants_js_1.NONE) {
            c.pointerEvents = false;
        }
        if (this.isHorizontal()) {
            c.moveTo(w, start);
            c.lineTo(w, r);
            c.quadTo(w, 0, w - Math.min(w / 2, r), 0);
            c.lineTo(Math.min(w / 2, r), 0);
            c.quadTo(0, 0, 0, r);
            c.lineTo(0, start);
            c.fillAndStroke();
            if (start < h) {
                if (fill === Constants_js_1.NONE || !events) {
                    c.pointerEvents = false;
                }
                if (fill !== Constants_js_1.NONE) {
                    c.setFillColor(fill);
                }
                c.begin();
                c.moveTo(0, start);
                c.lineTo(0, h - r);
                c.quadTo(0, h, Math.min(w / 2, r), h);
                c.lineTo(w - Math.min(w / 2, r), h);
                c.quadTo(w, h, w, h - r);
                c.lineTo(w, start);
                if (fill === Constants_js_1.NONE) {
                    c.stroke();
                }
                else {
                    c.fillAndStroke();
                }
            }
        }
        else {
            c.moveTo(start, 0);
            c.lineTo(r, 0);
            c.quadTo(0, 0, 0, Math.min(h / 2, r));
            c.lineTo(0, h - Math.min(h / 2, r));
            c.quadTo(0, h, r, h);
            c.lineTo(start, h);
            c.fillAndStroke();
            if (start < w) {
                if (fill === Constants_js_1.NONE || !events) {
                    c.pointerEvents = false;
                }
                if (fill !== Constants_js_1.NONE) {
                    c.setFillColor(fill);
                }
                c.begin();
                c.moveTo(start, h);
                c.lineTo(w - r, h);
                c.quadTo(w, h, w, h - Math.min(h / 2, r));
                c.lineTo(w, Math.min(h / 2, r));
                c.quadTo(w, 0, w - r, 0);
                c.lineTo(start, 0);
                if (fill === Constants_js_1.NONE) {
                    c.stroke();
                }
                else {
                    c.fillAndStroke();
                }
            }
        }
        if (swimlaneLine) {
            this.paintDivider(c, x, y, w, h, start, fill === Constants_js_1.NONE);
        }
    }
    /**
     * Paints the divider between swimlane title and content area.
     */
    paintDivider(c, x, y, w, h, start, shadow) {
        if (!shadow) {
            c.setShadow(false);
        }
        c.begin();
        if (this.isHorizontal()) {
            c.moveTo(0, start);
            c.lineTo(w, start);
        }
        else {
            c.moveTo(start, 0);
            c.lineTo(start, h);
        }
        c.stroke();
    }
    /**
     * Paints the vertical or horizontal separator line between swimlanes.
     */
    paintSeparator(c, x, y, w, h, start, color) {
        if (color !== Constants_js_1.NONE) {
            c.setStrokeColor(color);
            c.setDashed(true);
            c.begin();
            if (this.isHorizontal()) {
                c.moveTo(w, start);
                c.lineTo(w, h);
            }
            else {
                c.moveTo(start, 0);
                c.lineTo(w, 0);
            }
            c.stroke();
            c.setDashed(false);
        }
    }
    /**
     * Paints the swimlane vertex shape.
     */
    getImageBounds(x, y, w, h) {
        if (this.isHorizontal()) {
            return new Rectangle_js_1.default(x + w - this.imageSize, y, this.imageSize, this.imageSize);
        }
        return new Rectangle_js_1.default(x, y, this.imageSize, this.imageSize);
    }
}
exports.default = SwimlaneShape;
