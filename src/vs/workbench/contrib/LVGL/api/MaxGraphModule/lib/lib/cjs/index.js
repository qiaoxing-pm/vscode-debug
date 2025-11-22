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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphHierarchyEdge = exports.GraphAbstractHierarchyCell = exports.SwimlaneLayout = exports.HierarchicalLayout = exports.HierarchicalEdgeStyle = exports.StackLayout = exports.RadialTreeLayout = exports.PartitionLayout = exports.ParallelEdgeLayout = exports.GraphLayout = exports.FastOrganicLayout = exports.EdgeLabelLayout = exports.CompositeLayout = exports.CompactTreeLayout = exports.CircleLayout = exports.VertexHandler = exports.KeyHandler = exports.VertexHandle = exports.ElbowEdgeHandler = exports.EdgeSegmentHandler = exports.EdgeHandler = exports.ConstraintHandler = exports.CellTracker = exports.CellMarker = exports.CellHighlight = exports.Editor = exports.EditorToolbar = exports.EditorPopupMenu = exports.EditorKeyHandler = exports.VisibleChange = exports.ValueChange = exports.TerminalChange = exports.StyleChange = exports.SelectionChange = exports.RootChange = exports.GeometryChange = exports.CurrentRootChange = exports.CollapseChange = exports.ChildChange = exports.CellAttributeChange = exports.Client = exports.SwimlaneManager = exports.PrintPreview = exports.Outline = exports.LayoutManager = exports.GraphView = exports.GraphDataModel = exports.Graph = exports.BaseGraph = exports.AbstractGraph = void 0;
exports.Effects = exports.Animation = exports.xmlUtils = exports.styleUtils = exports.stringUtils = exports.printUtils = exports.mathUtils = exports.gestureUtils = exports.eventUtils = exports.domUtils = exports.DomHelpers = exports.constants = exports.cloneUtils = exports.cellArrayUtils = exports.TranslationsAsI18n = exports.Translations = exports.Guide = exports.StencilShapeConfig = exports.StencilShape = exports.unregisterAllStencilShapes = exports.RhombusShape = exports.RectangleShape = exports.ImageShape = exports.HexagonShape = exports.EllipseShape = exports.DoubleEllipseShape = exports.CylinderShape = exports.CloudShape = exports.PolylineShape = exports.LineShape = exports.ConnectorShape = exports.ArrowConnectorShape = exports.ArrowShape = exports.TriangleShape = exports.TextShape = exports.SwimlaneShape = exports.Shape = exports.LabelShape = exports.ActorShape = exports.ObjectCodec = exports.CodecRegistry = exports.Codec = exports.SwimlaneOrdering = exports.MinimumCycleRemover = exports.MedianHybridCrossingReduction = exports.HierarchicalLayoutStage = exports.CoordinateAssignment = exports.SwimlaneModel = exports.GraphHierarchyNode = exports.GraphHierarchyModel = void 0;
exports.Multiplicity = exports.ConnectionConstraint = exports.TemporaryCellStates = exports.CellStatePreview = exports.CellState = exports.CellRenderer = exports.CellPath = exports.CellOverlay = exports.Cell = exports.UndoManager = exports.UndoableEdit = exports.Clipboard = exports.AutoSaveManager = exports.requestUtils = exports.MaxXmlRequest = exports.UrlConverter = exports.ImageExport = exports.ImageBundle = exports.ImageBox = exports.guiUtils = exports.MaxWindow = exports.MaxToolbar = exports.MaxPopupMenu = exports.MaxLogAsLogger = exports.MaxLog = exports.MaxForm = exports.InternalMouseEvent = exports.EventSource = exports.EventObject = exports.InternalEvent = exports.PanningManager = exports.DragSource = exports.Stylesheet = exports.PerimeterRegistry = exports.EdgeMarkerRegistry = exports.Rectangle = exports.Point = exports.ObjectIdentity = exports.Geometry = exports.XmlCanvas2D = exports.SvgCanvas2D = exports.AbstractCanvas2D = exports.Morphing = void 0;
// Contribution of Mixins to the Graph type (no side effects, types only)
require("./view/mixins/_graph-mixins-types.js");
var AbstractGraph_js_1 = require("./view/AbstractGraph.js");
Object.defineProperty(exports, "AbstractGraph", { enumerable: true, get: function () { return AbstractGraph_js_1.AbstractGraph; } });
var BaseGraph_js_1 = require("./view/BaseGraph.js");
Object.defineProperty(exports, "BaseGraph", { enumerable: true, get: function () { return BaseGraph_js_1.BaseGraph; } });
var Graph_js_1 = require("./view/Graph.js");
Object.defineProperty(exports, "Graph", { enumerable: true, get: function () { return Graph_js_1.Graph; } });
__exportStar(require("./view/plugins/index.js"), exports);
var GraphDataModel_js_1 = require("./view/GraphDataModel.js");
Object.defineProperty(exports, "GraphDataModel", { enumerable: true, get: function () { return GraphDataModel_js_1.GraphDataModel; } });
var GraphView_js_1 = require("./view/GraphView.js");
Object.defineProperty(exports, "GraphView", { enumerable: true, get: function () { return GraphView_js_1.GraphView; } });
var LayoutManager_js_1 = require("./view/layout/LayoutManager.js");
Object.defineProperty(exports, "LayoutManager", { enumerable: true, get: function () { return __importDefault(LayoutManager_js_1).default; } });
var Outline_js_1 = require("./view/other/Outline.js");
Object.defineProperty(exports, "Outline", { enumerable: true, get: function () { return __importDefault(Outline_js_1).default; } });
var PrintPreview_js_1 = require("./view/other/PrintPreview.js");
Object.defineProperty(exports, "PrintPreview", { enumerable: true, get: function () { return __importDefault(PrintPreview_js_1).default; } });
var SwimlaneManager_js_1 = require("./view/layout/SwimlaneManager.js");
Object.defineProperty(exports, "SwimlaneManager", { enumerable: true, get: function () { return __importDefault(SwimlaneManager_js_1).default; } });
var Client_js_1 = require("./Client.js");
Object.defineProperty(exports, "Client", { enumerable: true, get: function () { return __importDefault(Client_js_1).default; } });
var CellAttributeChange_js_1 = require("./view/undoable_changes/CellAttributeChange.js");
Object.defineProperty(exports, "CellAttributeChange", { enumerable: true, get: function () { return __importDefault(CellAttributeChange_js_1).default; } });
var ChildChange_js_1 = require("./view/undoable_changes/ChildChange.js");
Object.defineProperty(exports, "ChildChange", { enumerable: true, get: function () { return ChildChange_js_1.ChildChange; } });
var CollapseChange_js_1 = require("./view/undoable_changes/CollapseChange.js");
Object.defineProperty(exports, "CollapseChange", { enumerable: true, get: function () { return __importDefault(CollapseChange_js_1).default; } });
var CurrentRootChange_js_1 = require("./view/undoable_changes/CurrentRootChange.js");
Object.defineProperty(exports, "CurrentRootChange", { enumerable: true, get: function () { return __importDefault(CurrentRootChange_js_1).default; } });
var GeometryChange_js_1 = require("./view/undoable_changes/GeometryChange.js");
Object.defineProperty(exports, "GeometryChange", { enumerable: true, get: function () { return __importDefault(GeometryChange_js_1).default; } });
var RootChange_js_1 = require("./view/undoable_changes/RootChange.js");
Object.defineProperty(exports, "RootChange", { enumerable: true, get: function () { return RootChange_js_1.RootChange; } });
var SelectionChange_js_1 = require("./view/undoable_changes/SelectionChange.js");
Object.defineProperty(exports, "SelectionChange", { enumerable: true, get: function () { return __importDefault(SelectionChange_js_1).default; } });
var StyleChange_js_1 = require("./view/undoable_changes/StyleChange.js");
Object.defineProperty(exports, "StyleChange", { enumerable: true, get: function () { return __importDefault(StyleChange_js_1).default; } });
var TerminalChange_js_1 = require("./view/undoable_changes/TerminalChange.js");
Object.defineProperty(exports, "TerminalChange", { enumerable: true, get: function () { return TerminalChange_js_1.TerminalChange; } });
var ValueChange_js_1 = require("./view/undoable_changes/ValueChange.js");
Object.defineProperty(exports, "ValueChange", { enumerable: true, get: function () { return __importDefault(ValueChange_js_1).default; } });
var VisibleChange_js_1 = require("./view/undoable_changes/VisibleChange.js");
Object.defineProperty(exports, "VisibleChange", { enumerable: true, get: function () { return __importDefault(VisibleChange_js_1).default; } });
var EditorKeyHandler_js_1 = require("./editor/EditorKeyHandler.js");
Object.defineProperty(exports, "EditorKeyHandler", { enumerable: true, get: function () { return EditorKeyHandler_js_1.EditorKeyHandler; } });
var EditorPopupMenu_js_1 = require("./editor/EditorPopupMenu.js");
Object.defineProperty(exports, "EditorPopupMenu", { enumerable: true, get: function () { return EditorPopupMenu_js_1.EditorPopupMenu; } });
var EditorToolbar_js_1 = require("./editor/EditorToolbar.js");
Object.defineProperty(exports, "EditorToolbar", { enumerable: true, get: function () { return EditorToolbar_js_1.EditorToolbar; } });
var Editor_js_1 = require("./editor/Editor.js");
Object.defineProperty(exports, "Editor", { enumerable: true, get: function () { return Editor_js_1.Editor; } });
var CellHighlight_js_1 = require("./view/cell/CellHighlight.js");
Object.defineProperty(exports, "CellHighlight", { enumerable: true, get: function () { return __importDefault(CellHighlight_js_1).default; } });
var CellMarker_js_1 = require("./view/cell/CellMarker.js");
Object.defineProperty(exports, "CellMarker", { enumerable: true, get: function () { return __importDefault(CellMarker_js_1).default; } });
var CellTracker_js_1 = require("./view/cell/CellTracker.js");
Object.defineProperty(exports, "CellTracker", { enumerable: true, get: function () { return __importDefault(CellTracker_js_1).default; } });
var ConstraintHandler_js_1 = require("./view/handler/ConstraintHandler.js");
Object.defineProperty(exports, "ConstraintHandler", { enumerable: true, get: function () { return __importDefault(ConstraintHandler_js_1).default; } });
var EdgeHandler_js_1 = require("./view/handler/EdgeHandler.js");
Object.defineProperty(exports, "EdgeHandler", { enumerable: true, get: function () { return __importDefault(EdgeHandler_js_1).default; } });
var EdgeSegmentHandler_js_1 = require("./view/handler/EdgeSegmentHandler.js");
Object.defineProperty(exports, "EdgeSegmentHandler", { enumerable: true, get: function () { return __importDefault(EdgeSegmentHandler_js_1).default; } });
var ElbowEdgeHandler_js_1 = require("./view/handler/ElbowEdgeHandler.js");
Object.defineProperty(exports, "ElbowEdgeHandler", { enumerable: true, get: function () { return __importDefault(ElbowEdgeHandler_js_1).default; } });
var VertexHandle_js_1 = require("./view/cell/VertexHandle.js");
Object.defineProperty(exports, "VertexHandle", { enumerable: true, get: function () { return __importDefault(VertexHandle_js_1).default; } });
var KeyHandler_js_1 = require("./view/handler/KeyHandler.js");
Object.defineProperty(exports, "KeyHandler", { enumerable: true, get: function () { return __importDefault(KeyHandler_js_1).default; } });
var VertexHandler_js_1 = require("./view/handler/VertexHandler.js");
Object.defineProperty(exports, "VertexHandler", { enumerable: true, get: function () { return __importDefault(VertexHandler_js_1).default; } });
__exportStar(require("./view/handler/config.js"), exports);
var CircleLayout_js_1 = require("./view/layout/CircleLayout.js");
Object.defineProperty(exports, "CircleLayout", { enumerable: true, get: function () { return __importDefault(CircleLayout_js_1).default; } });
var CompactTreeLayout_js_1 = require("./view/layout/CompactTreeLayout.js");
Object.defineProperty(exports, "CompactTreeLayout", { enumerable: true, get: function () { return __importDefault(CompactTreeLayout_js_1).default; } });
var CompositeLayout_js_1 = require("./view/layout/CompositeLayout.js");
Object.defineProperty(exports, "CompositeLayout", { enumerable: true, get: function () { return __importDefault(CompositeLayout_js_1).default; } });
var EdgeLabelLayout_js_1 = require("./view/layout/EdgeLabelLayout.js");
Object.defineProperty(exports, "EdgeLabelLayout", { enumerable: true, get: function () { return __importDefault(EdgeLabelLayout_js_1).default; } });
var FastOrganicLayout_js_1 = require("./view/layout/FastOrganicLayout.js");
Object.defineProperty(exports, "FastOrganicLayout", { enumerable: true, get: function () { return __importDefault(FastOrganicLayout_js_1).default; } });
var GraphLayout_js_1 = require("./view/layout/GraphLayout.js");
Object.defineProperty(exports, "GraphLayout", { enumerable: true, get: function () { return __importDefault(GraphLayout_js_1).default; } });
var ParallelEdgeLayout_js_1 = require("./view/layout/ParallelEdgeLayout.js");
Object.defineProperty(exports, "ParallelEdgeLayout", { enumerable: true, get: function () { return __importDefault(ParallelEdgeLayout_js_1).default; } });
var PartitionLayout_js_1 = require("./view/layout/PartitionLayout.js");
Object.defineProperty(exports, "PartitionLayout", { enumerable: true, get: function () { return __importDefault(PartitionLayout_js_1).default; } });
var RadialTreeLayout_js_1 = require("./view/layout/RadialTreeLayout.js");
Object.defineProperty(exports, "RadialTreeLayout", { enumerable: true, get: function () { return __importDefault(RadialTreeLayout_js_1).default; } });
var StackLayout_js_1 = require("./view/layout/StackLayout.js");
Object.defineProperty(exports, "StackLayout", { enumerable: true, get: function () { return __importDefault(StackLayout_js_1).default; } });
var HierarchicalEdgeStyle_js_1 = require("./view/layout/datatypes/HierarchicalEdgeStyle.js");
Object.defineProperty(exports, "HierarchicalEdgeStyle", { enumerable: true, get: function () { return __importDefault(HierarchicalEdgeStyle_js_1).default; } });
var HierarchicalLayout_js_1 = require("./view/layout/HierarchicalLayout.js");
Object.defineProperty(exports, "HierarchicalLayout", { enumerable: true, get: function () { return __importDefault(HierarchicalLayout_js_1).default; } });
var SwimlaneLayout_js_1 = require("./view/layout/SwimlaneLayout.js");
Object.defineProperty(exports, "SwimlaneLayout", { enumerable: true, get: function () { return __importDefault(SwimlaneLayout_js_1).default; } });
var GraphAbstractHierarchyCell_js_1 = require("./view/layout/datatypes/GraphAbstractHierarchyCell.js");
Object.defineProperty(exports, "GraphAbstractHierarchyCell", { enumerable: true, get: function () { return __importDefault(GraphAbstractHierarchyCell_js_1).default; } });
var GraphHierarchyEdge_js_1 = require("./view/layout/datatypes/GraphHierarchyEdge.js");
Object.defineProperty(exports, "GraphHierarchyEdge", { enumerable: true, get: function () { return __importDefault(GraphHierarchyEdge_js_1).default; } });
var GraphHierarchyModel_js_1 = require("./view/layout/hierarchical/GraphHierarchyModel.js");
Object.defineProperty(exports, "GraphHierarchyModel", { enumerable: true, get: function () { return __importDefault(GraphHierarchyModel_js_1).default; } });
var GraphHierarchyNode_js_1 = require("./view/layout/datatypes/GraphHierarchyNode.js");
Object.defineProperty(exports, "GraphHierarchyNode", { enumerable: true, get: function () { return __importDefault(GraphHierarchyNode_js_1).default; } });
var SwimlaneModel_js_1 = require("./view/layout/hierarchical/SwimlaneModel.js");
Object.defineProperty(exports, "SwimlaneModel", { enumerable: true, get: function () { return __importDefault(SwimlaneModel_js_1).default; } });
var CoordinateAssignment_js_1 = require("./view/layout/hierarchical/CoordinateAssignment.js");
Object.defineProperty(exports, "CoordinateAssignment", { enumerable: true, get: function () { return __importDefault(CoordinateAssignment_js_1).default; } });
var HierarchicalLayoutStage_js_1 = require("./view/layout/hierarchical/HierarchicalLayoutStage.js");
Object.defineProperty(exports, "HierarchicalLayoutStage", { enumerable: true, get: function () { return __importDefault(HierarchicalLayoutStage_js_1).default; } });
var MedianHybridCrossingReduction_js_1 = require("./view/layout/hierarchical/MedianHybridCrossingReduction.js");
Object.defineProperty(exports, "MedianHybridCrossingReduction", { enumerable: true, get: function () { return __importDefault(MedianHybridCrossingReduction_js_1).default; } });
var MinimumCycleRemover_js_1 = require("./view/layout/hierarchical/MinimumCycleRemover.js");
Object.defineProperty(exports, "MinimumCycleRemover", { enumerable: true, get: function () { return __importDefault(MinimumCycleRemover_js_1).default; } });
var SwimlaneOrdering_js_1 = require("./view/layout/hierarchical/SwimlaneOrdering.js");
Object.defineProperty(exports, "SwimlaneOrdering", { enumerable: true, get: function () { return __importDefault(SwimlaneOrdering_js_1).default; } });
var Codec_js_1 = require("./serialization/Codec.js");
Object.defineProperty(exports, "Codec", { enumerable: true, get: function () { return __importDefault(Codec_js_1).default; } });
var CodecRegistry_js_1 = require("./serialization/CodecRegistry.js");
Object.defineProperty(exports, "CodecRegistry", { enumerable: true, get: function () { return __importDefault(CodecRegistry_js_1).default; } });
var ObjectCodec_js_1 = require("./serialization/ObjectCodec.js");
Object.defineProperty(exports, "ObjectCodec", { enumerable: true, get: function () { return __importDefault(ObjectCodec_js_1).default; } });
__exportStar(require("./serialization/ModelXmlSerializer.js"), exports);
__exportStar(require("./serialization/codecs/_model-codecs.js"), exports);
__exportStar(require("./serialization/codecs/_other-codecs.js"), exports);
__exportStar(require("./serialization/register-model-codecs.js"), exports);
__exportStar(require("./serialization/register-other-codecs.js"), exports);
var ActorShape_js_1 = require("./view/shape/node/ActorShape.js");
Object.defineProperty(exports, "ActorShape", { enumerable: true, get: function () { return __importDefault(ActorShape_js_1).default; } });
var LabelShape_js_1 = require("./view/shape/node/LabelShape.js");
Object.defineProperty(exports, "LabelShape", { enumerable: true, get: function () { return __importDefault(LabelShape_js_1).default; } });
var Shape_js_1 = require("./view/shape/Shape.js");
Object.defineProperty(exports, "Shape", { enumerable: true, get: function () { return __importDefault(Shape_js_1).default; } });
var SwimlaneShape_js_1 = require("./view/shape/node/SwimlaneShape.js");
Object.defineProperty(exports, "SwimlaneShape", { enumerable: true, get: function () { return __importDefault(SwimlaneShape_js_1).default; } });
var TextShape_js_1 = require("./view/shape/node/TextShape.js");
Object.defineProperty(exports, "TextShape", { enumerable: true, get: function () { return __importDefault(TextShape_js_1).default; } });
var TriangleShape_js_1 = require("./view/shape/node/TriangleShape.js");
Object.defineProperty(exports, "TriangleShape", { enumerable: true, get: function () { return __importDefault(TriangleShape_js_1).default; } });
var ArrowShape_js_1 = require("./view/shape/edge/ArrowShape.js");
Object.defineProperty(exports, "ArrowShape", { enumerable: true, get: function () { return __importDefault(ArrowShape_js_1).default; } });
var ArrowConnectorShape_js_1 = require("./view/shape/edge/ArrowConnectorShape.js");
Object.defineProperty(exports, "ArrowConnectorShape", { enumerable: true, get: function () { return __importDefault(ArrowConnectorShape_js_1).default; } });
var ConnectorShape_js_1 = require("./view/shape/edge/ConnectorShape.js");
Object.defineProperty(exports, "ConnectorShape", { enumerable: true, get: function () { return __importDefault(ConnectorShape_js_1).default; } });
var LineShape_js_1 = require("./view/shape/edge/LineShape.js");
Object.defineProperty(exports, "LineShape", { enumerable: true, get: function () { return __importDefault(LineShape_js_1).default; } });
var PolylineShape_js_1 = require("./view/shape/edge/PolylineShape.js");
Object.defineProperty(exports, "PolylineShape", { enumerable: true, get: function () { return __importDefault(PolylineShape_js_1).default; } });
var CloudShape_js_1 = require("./view/shape/node/CloudShape.js");
Object.defineProperty(exports, "CloudShape", { enumerable: true, get: function () { return __importDefault(CloudShape_js_1).default; } });
var CylinderShape_js_1 = require("./view/shape/node/CylinderShape.js");
Object.defineProperty(exports, "CylinderShape", { enumerable: true, get: function () { return __importDefault(CylinderShape_js_1).default; } });
var DoubleEllipseShape_js_1 = require("./view/shape/node/DoubleEllipseShape.js");
Object.defineProperty(exports, "DoubleEllipseShape", { enumerable: true, get: function () { return __importDefault(DoubleEllipseShape_js_1).default; } });
var EllipseShape_js_1 = require("./view/shape/node/EllipseShape.js");
Object.defineProperty(exports, "EllipseShape", { enumerable: true, get: function () { return __importDefault(EllipseShape_js_1).default; } });
var HexagonShape_js_1 = require("./view/shape/node/HexagonShape.js");
Object.defineProperty(exports, "HexagonShape", { enumerable: true, get: function () { return __importDefault(HexagonShape_js_1).default; } });
var ImageShape_js_1 = require("./view/shape/node/ImageShape.js");
Object.defineProperty(exports, "ImageShape", { enumerable: true, get: function () { return __importDefault(ImageShape_js_1).default; } });
var RectangleShape_js_1 = require("./view/shape/node/RectangleShape.js");
Object.defineProperty(exports, "RectangleShape", { enumerable: true, get: function () { return __importDefault(RectangleShape_js_1).default; } });
var RhombusShape_js_1 = require("./view/shape/node/RhombusShape.js");
Object.defineProperty(exports, "RhombusShape", { enumerable: true, get: function () { return __importDefault(RhombusShape_js_1).default; } });
__exportStar(require("./view/shape/ShapeRegistry.js"), exports);
__exportStar(require("./view/shape/register-shapes.js"), exports);
var register_js_1 = require("./view/shape/stencil/register.js");
Object.defineProperty(exports, "unregisterAllStencilShapes", { enumerable: true, get: function () { return register_js_1.unregisterAllStencilShapes; } });
var StencilShape_js_1 = require("./view/shape/stencil/StencilShape.js");
Object.defineProperty(exports, "StencilShape", { enumerable: true, get: function () { return __importDefault(StencilShape_js_1).default; } });
Object.defineProperty(exports, "StencilShapeConfig", { enumerable: true, get: function () { return StencilShape_js_1.StencilShapeConfig; } });
__exportStar(require("./view/shape/stencil/StencilShapeRegistry.js"), exports);
var Guide_js_1 = require("./view/other/Guide.js");
Object.defineProperty(exports, "Guide", { enumerable: true, get: function () { return __importDefault(Guide_js_1).default; } });
var Translations_js_1 = require("./i18n/Translations.js");
Object.defineProperty(exports, "Translations", { enumerable: true, get: function () { return __importDefault(Translations_js_1).default; } });
Object.defineProperty(exports, "TranslationsAsI18n", { enumerable: true, get: function () { return Translations_js_1.TranslationsAsI18n; } });
__exportStar(require("./i18n/config.js"), exports);
__exportStar(require("./i18n/provider.js"), exports);
/**
 * @category Utils
 */
exports.cellArrayUtils = __importStar(require("./util/cellArrayUtils.js"));
/**
 * @category Utils
 */
exports.cloneUtils = __importStar(require("./util/cloneUtils.js"));
/**
 * @category Utils
 */
exports.constants = __importStar(require("./util/Constants.js"));
/**
 * @category GUI
 * @category Utils
 */
exports.DomHelpers = __importStar(require("./util/domHelpers.js"));
/**
 * @category Utils
 */
exports.domUtils = __importStar(require("./util/domUtils.js"));
/**
 * @category Event
 * @category Utils
 */
exports.eventUtils = __importStar(require("./util/EventUtils.js"));
/**
 * @category Utils
 */
exports.gestureUtils = __importStar(require("./util/gestureUtils.js"));
/**
 * @category Utils
 */
exports.mathUtils = __importStar(require("./util/mathUtils.js"));
/**
 * @category Utils
 */
exports.printUtils = __importStar(require("./util/printUtils.js"));
/**
 * @category Utils
 */
exports.stringUtils = __importStar(require("./util/StringUtils.js"));
/**
 * @category Utils
 */
exports.styleUtils = __importStar(require("./util/styleUtils.js"));
/**
 * @category Utils
 */
exports.xmlUtils = __importStar(require("./util/xmlUtils.js"));
__exportStar(require("./util/config.js"), exports);
__exportStar(require("./util/logger.js"), exports);
var Animation_js_1 = require("./view/animate/Animation.js");
Object.defineProperty(exports, "Animation", { enumerable: true, get: function () { return __importDefault(Animation_js_1).default; } });
var Effects_js_1 = require("./view/animate/Effects.js");
Object.defineProperty(exports, "Effects", { enumerable: true, get: function () { return __importDefault(Effects_js_1).default; } });
var Morphing_js_1 = require("./view/animate/Morphing.js");
Object.defineProperty(exports, "Morphing", { enumerable: true, get: function () { return __importDefault(Morphing_js_1).default; } });
var AbstractCanvas2D_js_1 = require("./view/canvas/AbstractCanvas2D.js");
Object.defineProperty(exports, "AbstractCanvas2D", { enumerable: true, get: function () { return __importDefault(AbstractCanvas2D_js_1).default; } });
var SvgCanvas2D_js_1 = require("./view/canvas/SvgCanvas2D.js");
Object.defineProperty(exports, "SvgCanvas2D", { enumerable: true, get: function () { return __importDefault(SvgCanvas2D_js_1).default; } });
var XmlCanvas2D_js_1 = require("./view/canvas/XmlCanvas2D.js");
Object.defineProperty(exports, "XmlCanvas2D", { enumerable: true, get: function () { return __importDefault(XmlCanvas2D_js_1).default; } });
var Geometry_js_1 = require("./view/geometry/Geometry.js");
Object.defineProperty(exports, "Geometry", { enumerable: true, get: function () { return __importDefault(Geometry_js_1).default; } });
var ObjectIdentity_js_1 = require("./util/ObjectIdentity.js");
Object.defineProperty(exports, "ObjectIdentity", { enumerable: true, get: function () { return __importDefault(ObjectIdentity_js_1).default; } });
var Point_js_1 = require("./view/geometry/Point.js");
Object.defineProperty(exports, "Point", { enumerable: true, get: function () { return __importDefault(Point_js_1).default; } });
var Rectangle_js_1 = require("./view/geometry/Rectangle.js");
Object.defineProperty(exports, "Rectangle", { enumerable: true, get: function () { return __importDefault(Rectangle_js_1).default; } });
__exportStar(require("./view/style/builtin-style-elements.js"), exports);
__exportStar(require("./view/style/config.js"), exports);
__exportStar(require("./view/style/register.js"), exports);
__exportStar(require("./view/style/edge/EdgeStyleRegistry.js"), exports);
var EdgeMarkerRegistry_js_1 = require("./view/style/marker/EdgeMarkerRegistry.js");
Object.defineProperty(exports, "EdgeMarkerRegistry", { enumerable: true, get: function () { return EdgeMarkerRegistry_js_1.EdgeMarkerRegistry; } });
var PerimeterRegistry_js_1 = require("./view/style/perimeter/PerimeterRegistry.js");
Object.defineProperty(exports, "PerimeterRegistry", { enumerable: true, get: function () { return PerimeterRegistry_js_1.PerimeterRegistry; } });
var Stylesheet_js_1 = require("./view/style/Stylesheet.js");
Object.defineProperty(exports, "Stylesheet", { enumerable: true, get: function () { return Stylesheet_js_1.Stylesheet; } });
var DragSource_js_1 = require("./view/other/DragSource.js");
Object.defineProperty(exports, "DragSource", { enumerable: true, get: function () { return __importDefault(DragSource_js_1).default; } });
var PanningManager_js_1 = require("./view/other/PanningManager.js");
Object.defineProperty(exports, "PanningManager", { enumerable: true, get: function () { return __importDefault(PanningManager_js_1).default; } });
var InternalEvent_js_1 = require("./view/event/InternalEvent.js");
Object.defineProperty(exports, "InternalEvent", { enumerable: true, get: function () { return __importDefault(InternalEvent_js_1).default; } });
var EventObject_js_1 = require("./view/event/EventObject.js");
Object.defineProperty(exports, "EventObject", { enumerable: true, get: function () { return __importDefault(EventObject_js_1).default; } });
var EventSource_js_1 = require("./view/event/EventSource.js");
Object.defineProperty(exports, "EventSource", { enumerable: true, get: function () { return __importDefault(EventSource_js_1).default; } });
var InternalMouseEvent_js_1 = require("./view/event/InternalMouseEvent.js");
Object.defineProperty(exports, "InternalMouseEvent", { enumerable: true, get: function () { return __importDefault(InternalMouseEvent_js_1).default; } });
var MaxForm_js_1 = require("./gui/MaxForm.js");
Object.defineProperty(exports, "MaxForm", { enumerable: true, get: function () { return __importDefault(MaxForm_js_1).default; } });
var MaxLog_js_1 = require("./gui/MaxLog.js");
Object.defineProperty(exports, "MaxLog", { enumerable: true, get: function () { return __importDefault(MaxLog_js_1).default; } });
var MaxLogAsLogger_js_1 = require("./gui/MaxLogAsLogger.js");
Object.defineProperty(exports, "MaxLogAsLogger", { enumerable: true, get: function () { return MaxLogAsLogger_js_1.MaxLogAsLogger; } });
var MaxPopupMenu_js_1 = require("./gui/MaxPopupMenu.js");
Object.defineProperty(exports, "MaxPopupMenu", { enumerable: true, get: function () { return __importDefault(MaxPopupMenu_js_1).default; } });
var MaxToolbar_js_1 = require("./gui/MaxToolbar.js");
Object.defineProperty(exports, "MaxToolbar", { enumerable: true, get: function () { return __importDefault(MaxToolbar_js_1).default; } });
var MaxWindow_js_1 = require("./gui/MaxWindow.js");
Object.defineProperty(exports, "MaxWindow", { enumerable: true, get: function () { return __importDefault(MaxWindow_js_1).default; } });
/**
 * @category GUI
 * @category Utils
 */
exports.guiUtils = __importStar(require("./gui/guiUtils.js"));
var ImageBox_js_1 = require("./view/image/ImageBox.js");
Object.defineProperty(exports, "ImageBox", { enumerable: true, get: function () { return __importDefault(ImageBox_js_1).default; } });
var ImageBundle_js_1 = require("./view/image/ImageBundle.js");
Object.defineProperty(exports, "ImageBundle", { enumerable: true, get: function () { return __importDefault(ImageBundle_js_1).default; } });
var ImageExport_js_1 = require("./view/image/ImageExport.js");
Object.defineProperty(exports, "ImageExport", { enumerable: true, get: function () { return __importDefault(ImageExport_js_1).default; } });
var UrlConverter_js_1 = require("./util/UrlConverter.js");
Object.defineProperty(exports, "UrlConverter", { enumerable: true, get: function () { return __importDefault(UrlConverter_js_1).default; } });
var MaxXmlRequest_js_1 = require("./util/MaxXmlRequest.js");
Object.defineProperty(exports, "MaxXmlRequest", { enumerable: true, get: function () { return __importDefault(MaxXmlRequest_js_1).default; } });
/**
 * @category Utils
 */
exports.requestUtils = __importStar(require("./util/requestUtils.js"));
var AutoSaveManager_js_1 = require("./view/other/AutoSaveManager.js");
Object.defineProperty(exports, "AutoSaveManager", { enumerable: true, get: function () { return __importDefault(AutoSaveManager_js_1).default; } });
var Clipboard_js_1 = require("./util/Clipboard.js");
Object.defineProperty(exports, "Clipboard", { enumerable: true, get: function () { return __importDefault(Clipboard_js_1).default; } });
var UndoableEdit_js_1 = require("./view/undoable_changes/UndoableEdit.js");
Object.defineProperty(exports, "UndoableEdit", { enumerable: true, get: function () { return __importDefault(UndoableEdit_js_1).default; } });
var UndoManager_js_1 = require("./view/undoable_changes/UndoManager.js");
Object.defineProperty(exports, "UndoManager", { enumerable: true, get: function () { return __importDefault(UndoManager_js_1).default; } });
var Cell_js_1 = require("./view/cell/Cell.js");
Object.defineProperty(exports, "Cell", { enumerable: true, get: function () { return Cell_js_1.Cell; } });
var CellOverlay_js_1 = require("./view/cell/CellOverlay.js");
Object.defineProperty(exports, "CellOverlay", { enumerable: true, get: function () { return __importDefault(CellOverlay_js_1).default; } });
var CellPath_js_1 = require("./view/cell/CellPath.js");
Object.defineProperty(exports, "CellPath", { enumerable: true, get: function () { return __importDefault(CellPath_js_1).default; } });
var CellRenderer_js_1 = require("./view/cell/CellRenderer.js");
Object.defineProperty(exports, "CellRenderer", { enumerable: true, get: function () { return __importDefault(CellRenderer_js_1).default; } });
var CellState_js_1 = require("./view/cell/CellState.js");
Object.defineProperty(exports, "CellState", { enumerable: true, get: function () { return __importDefault(CellState_js_1).default; } });
var CellStatePreview_js_1 = require("./view/cell/CellStatePreview.js");
Object.defineProperty(exports, "CellStatePreview", { enumerable: true, get: function () { return __importDefault(CellStatePreview_js_1).default; } });
var TemporaryCellStates_js_1 = require("./view/cell/TemporaryCellStates.js");
Object.defineProperty(exports, "TemporaryCellStates", { enumerable: true, get: function () { return __importDefault(TemporaryCellStates_js_1).default; } });
var ConnectionConstraint_js_1 = require("./view/other/ConnectionConstraint.js");
Object.defineProperty(exports, "ConnectionConstraint", { enumerable: true, get: function () { return __importDefault(ConnectionConstraint_js_1).default; } });
var Multiplicity_js_1 = require("./view/other/Multiplicity.js");
Object.defineProperty(exports, "Multiplicity", { enumerable: true, get: function () { return __importDefault(Multiplicity_js_1).default; } });
__exportStar(require("./types.js"), exports);
