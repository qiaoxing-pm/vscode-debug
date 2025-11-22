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
exports.FoldingMixin = void 0;
const EventObject_js_1 = __importDefault(require("../event/EventObject.js"));
const InternalEvent_js_1 = __importDefault(require("../event/InternalEvent.js"));
const mathUtils_js_1 = require("../../util/mathUtils.js");
const Rectangle_js_1 = __importDefault(require("../geometry/Rectangle.js"));
const i18n_utils_js_1 = require("../../internal/i18n-utils.js");
// @ts-expect-error The properties of PartialGraph are defined elsewhere.
exports.FoldingMixin = {
    collapseExpandResource: (0, i18n_utils_js_1.isI18nEnabled)() ? 'collapse-expand' : '',
    getCollapseExpandResource() {
        return this.collapseExpandResource;
    },
    isFoldingEnabled() {
        return this.options.foldingEnabled;
    },
    getFoldableCells(cells, collapse = false) {
        return this.getDataModel().filterCells(cells, (cell) => {
            return this.isCellFoldable(cell, collapse);
        });
    },
    isCellFoldable(cell, _collapse) {
        return cell.getChildCount() > 0 && (this.getCurrentCellStyle(cell).foldable ?? true);
    },
    getFoldingImage(state) {
        if (state != null && this.isFoldingEnabled() && !state.cell.isEdge()) {
            const tmp = state.cell.isCollapsed();
            if (this.isCellFoldable(state.cell, !tmp)) {
                return tmp ? this.options.collapsedImage : this.options.expandedImage;
            }
        }
        return null;
    },
    foldCells(collapse = false, recurse = false, cells = null, checkFoldable = false, _evt = null) {
        if (cells == null) {
            cells = this.getFoldableCells(this.getSelectionCells(), collapse);
        }
        this.stopEditing(false);
        this.batchUpdate(() => {
            this.cellsFolded(cells, collapse, recurse, checkFoldable);
            this.fireEvent(new EventObject_js_1.default(InternalEvent_js_1.default.FOLD_CELLS, 'collapse', collapse, 'recurse', recurse, 'cells', cells));
        });
        return cells;
    },
    cellsFolded(cells = null, collapse = false, recurse = false, checkFoldable = false) {
        if (cells != null && cells.length > 0) {
            this.batchUpdate(() => {
                for (let i = 0; i < cells.length; i += 1) {
                    if ((!checkFoldable || this.isCellFoldable(cells[i], collapse)) &&
                        collapse !== cells[i].isCollapsed()) {
                        this.getDataModel().setCollapsed(cells[i], collapse);
                        this.swapBounds(cells[i], collapse);
                        if (this.isExtendParent(cells[i])) {
                            this.extendParent(cells[i]);
                        }
                        if (recurse) {
                            const children = cells[i].getChildren();
                            this.cellsFolded(children, collapse, recurse);
                        }
                        this.constrainChild(cells[i]);
                    }
                }
                this.fireEvent(new EventObject_js_1.default(InternalEvent_js_1.default.CELLS_FOLDED, { cells, collapse, recurse }));
            });
        }
    },
    swapBounds(cell, willCollapse = false) {
        let geo = cell.getGeometry();
        if (geo != null) {
            geo = geo.clone();
            this.updateAlternateBounds(cell, geo, willCollapse);
            geo.swap();
            this.getDataModel().setGeometry(cell, geo);
        }
    },
    updateAlternateBounds(cell = null, geo = null, _willCollapse = false) {
        if (cell != null && geo != null) {
            const style = this.getCurrentCellStyle(cell);
            if (geo.alternateBounds == null) {
                let bounds = geo;
                if (this.options.collapseToPreferredSize) {
                    const tmp = this.getPreferredSizeForCell(cell);
                    if (tmp != null) {
                        bounds = tmp;
                        const startSize = style.startSize ?? 0;
                        if (startSize > 0) {
                            bounds.height = Math.max(bounds.height, startSize);
                        }
                    }
                }
                geo.alternateBounds = new Rectangle_js_1.default(0, 0, bounds.width, bounds.height);
            }
            if (geo.alternateBounds != null) {
                geo.alternateBounds.x = geo.x;
                geo.alternateBounds.y = geo.y;
                const alpha = (0, mathUtils_js_1.toRadians)(style.rotation || 0);
                if (alpha !== 0) {
                    const dx = geo.alternateBounds.getCenterX() - geo.getCenterX();
                    const dy = geo.alternateBounds.getCenterY() - geo.getCenterY();
                    const cos = Math.cos(alpha);
                    const sin = Math.sin(alpha);
                    const dx2 = cos * dx - sin * dy;
                    const dy2 = sin * dx + cos * dy;
                    geo.alternateBounds.x += dx2 - dx;
                    geo.alternateBounds.y += dy2 - dy;
                }
            }
        }
    },
};
