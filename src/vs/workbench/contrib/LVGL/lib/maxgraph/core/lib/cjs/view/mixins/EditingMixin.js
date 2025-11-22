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
exports.EditingMixin = void 0;
const EventUtils_js_1 = require("../../util/EventUtils.js");
const EventObject_js_1 = __importDefault(require("../event/EventObject.js"));
const InternalEvent_js_1 = __importDefault(require("../event/InternalEvent.js"));
// @ts-expect-error The properties of PartialGraph are defined elsewhere.
exports.EditingMixin = {
    cellsEditable: true,
    /*****************************************************************************
     * Group: Cell in-place editing
     *****************************************************************************/
    startEditing(evt) {
        this.startEditingAtCell(null, evt);
    },
    startEditingAtCell(cell = null, evt) {
        if (!evt || !(0, EventUtils_js_1.isMultiTouchEvent)(evt)) {
            if (!cell) {
                cell = this.getSelectionCell();
                if (cell && !this.isCellEditable(cell)) {
                    cell = null;
                }
            }
            else {
                this.fireEvent(new EventObject_js_1.default(InternalEvent_js_1.default.START_EDITING, { cell, event: evt }));
                const cellEditorHandler = this.getPlugin('CellEditorHandler');
                cellEditorHandler?.startEditing(cell, evt);
                this.fireEvent(new EventObject_js_1.default(InternalEvent_js_1.default.EDITING_STARTED, { cell, event: evt }));
            }
        }
    },
    getEditingValue(cell, evt) {
        return this.convertValueToString(cell);
    },
    stopEditing(cancel = false) {
        const cellEditorHandler = this.getPlugin('CellEditorHandler');
        cellEditorHandler?.stopEditing(cancel);
        this.fireEvent(new EventObject_js_1.default(InternalEvent_js_1.default.EDITING_STOPPED, { cancel }));
    },
    labelChanged(cell, value, evt) {
        this.batchUpdate(() => {
            const old = cell.value;
            this.cellLabelChanged(cell, value, this.isAutoSizeCell(cell));
            this.fireEvent(new EventObject_js_1.default(InternalEvent_js_1.default.LABEL_CHANGED, {
                cell: cell,
                value: value,
                old: old,
                event: evt,
            }));
        });
        return cell;
    },
    cellLabelChanged(cell, value, autoSize = false) {
        this.batchUpdate(() => {
            this.getDataModel().setValue(cell, value);
            if (autoSize) {
                this.cellSizeUpdated(cell, false);
            }
        });
    },
    /*****************************************************************************
     * Group: Graph behaviour
     *****************************************************************************/
    isEditing(cell = null) {
        const cellEditorHandler = this.getPlugin('CellEditorHandler');
        const editingCell = cellEditorHandler?.getEditingCell();
        return !cell ? !!editingCell : cell === editingCell;
    },
    isCellEditable(cell) {
        return (this.isCellsEditable() &&
            !this.isCellLocked(cell) &&
            (this.getCurrentCellStyle(cell).editable ?? true));
    },
    isCellsEditable() {
        return this.cellsEditable;
    },
    setCellsEditable(value) {
        this.cellsEditable = value;
    },
};
