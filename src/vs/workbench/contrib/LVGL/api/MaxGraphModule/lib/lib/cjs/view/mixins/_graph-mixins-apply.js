"use strict";
/*
Copyright 2024-present The maxGraph project Contributors

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyGraphMixins = void 0;
const utils_js_1 = require("../../internal/utils.js");
const CellsMixin_js_1 = require("./CellsMixin.js");
const ConnectionsMixin_js_1 = require("./ConnectionsMixin.js");
const DragDropMixin_js_1 = require("./DragDropMixin.js");
const EdgeMixin_js_1 = require("./EdgeMixin.js");
const EditingMixin_js_1 = require("./EditingMixin.js");
const EventsMixin_js_1 = require("./EventsMixin.js");
const FoldingMixin_js_1 = require("./FoldingMixin.js");
const GroupingMixin_js_1 = require("./GroupingMixin.js");
const ImageMixin_js_1 = require("./ImageMixin.js");
const LabelMixin_js_1 = require("./LabelMixin.js");
const OrderMixin_js_1 = require("./OrderMixin.js");
const OverlaysMixin_js_1 = require("./OverlaysMixin.js");
const PageBreaksMixin_js_1 = require("./PageBreaksMixin.js");
const PanningMixin_js_1 = require("./PanningMixin.js");
const PortsMixin_js_1 = require("./PortsMixin.js");
const SelectionMixin_js_1 = require("./SelectionMixin.js");
const SnapMixin_js_1 = require("./SnapMixin.js");
const SwimlaneMixin_js_1 = require("./SwimlaneMixin.js");
const TerminalMixin_js_1 = require("./TerminalMixin.js");
const TooltipMixin_js_1 = require("./TooltipMixin.js");
const ValidationMixin_js_1 = require("./ValidationMixin.js");
const VertexMixin_js_1 = require("./VertexMixin.js");
const ZoomMixin_js_1 = require("./ZoomMixin.js");
const applyGraphMixins = (target) => {
    const mixIntoGraph = (0, utils_js_1.mixInto)(target);
    // Apply the mixins in alphabetic order to ease maintenance.
    // The order should have no influence of the resulting Graph prototype.
    for (const mixin of [
        CellsMixin_js_1.CellsMixin,
        ConnectionsMixin_js_1.ConnectionsMixin,
        DragDropMixin_js_1.DragDropMixin,
        EdgeMixin_js_1.EdgeMixin,
        EditingMixin_js_1.EditingMixin,
        EventsMixin_js_1.EventsMixin,
        FoldingMixin_js_1.FoldingMixin,
        GroupingMixin_js_1.GroupingMixin,
        ImageMixin_js_1.ImageMixin,
        LabelMixin_js_1.LabelMixin,
        OrderMixin_js_1.OrderMixin,
        PageBreaksMixin_js_1.PageBreaksMixin,
        OverlaysMixin_js_1.OverlaysMixin,
        PanningMixin_js_1.PanningMixin,
        PortsMixin_js_1.PortsMixin,
        SelectionMixin_js_1.SelectionMixin,
        SnapMixin_js_1.SnapMixin,
        SwimlaneMixin_js_1.SwimlaneMixin,
        TerminalMixin_js_1.TerminalMixin,
        TooltipMixin_js_1.TooltipMixin,
        ValidationMixin_js_1.ValidationMixin,
        VertexMixin_js_1.VertexMixin,
        ZoomMixin_js_1.ZoomMixin,
    ]) {
        mixIntoGraph(mixin);
    }
};
exports.applyGraphMixins = applyGraphMixins;
