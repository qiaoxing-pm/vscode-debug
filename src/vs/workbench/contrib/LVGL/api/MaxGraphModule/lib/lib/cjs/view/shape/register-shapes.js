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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerDefaultShapes = registerDefaultShapes;
exports.unregisterAllShapes = unregisterAllShapes;
const ShapeRegistry_js_1 = require("./ShapeRegistry.js");
const RectangleShape_js_1 = __importDefault(require("./node/RectangleShape.js"));
const EllipseShape_js_1 = __importDefault(require("./node/EllipseShape.js"));
const RhombusShape_js_1 = __importDefault(require("./node/RhombusShape.js"));
const CylinderShape_js_1 = __importDefault(require("./node/CylinderShape.js"));
const ConnectorShape_js_1 = __importDefault(require("./edge/ConnectorShape.js"));
const ActorShape_js_1 = __importDefault(require("./node/ActorShape.js"));
const TriangleShape_js_1 = __importDefault(require("./node/TriangleShape.js"));
const HexagonShape_js_1 = __importDefault(require("./node/HexagonShape.js"));
const CloudShape_js_1 = __importDefault(require("./node/CloudShape.js"));
const LineShape_js_1 = __importDefault(require("./edge/LineShape.js"));
const ArrowShape_js_1 = __importDefault(require("./edge/ArrowShape.js"));
const ArrowConnectorShape_js_1 = __importDefault(require("./edge/ArrowConnectorShape.js"));
const DoubleEllipseShape_js_1 = __importDefault(require("./node/DoubleEllipseShape.js"));
const SwimlaneShape_js_1 = __importDefault(require("./node/SwimlaneShape.js"));
const ImageShape_js_1 = __importDefault(require("./node/ImageShape.js"));
const LabelShape_js_1 = __importDefault(require("./node/LabelShape.js"));
let isDefaultElementsRegistered = false;
/**
 * Register default builtin shapes into {@link CellRenderer}.
 *
 * @category Configuration
 * @category Style
 * @since 0.18.0
 */
function registerDefaultShapes() {
    if (!isDefaultElementsRegistered) {
        const shapesToRegister = [
            ['actor', ActorShape_js_1.default],
            ['arrow', ArrowShape_js_1.default],
            ['arrowConnector', ArrowConnectorShape_js_1.default],
            ['cloud', CloudShape_js_1.default],
            ['connector', ConnectorShape_js_1.default],
            ['cylinder', CylinderShape_js_1.default],
            ['doubleEllipse', DoubleEllipseShape_js_1.default],
            ['ellipse', EllipseShape_js_1.default],
            ['hexagon', HexagonShape_js_1.default],
            ['image', ImageShape_js_1.default],
            ['label', LabelShape_js_1.default],
            ['line', LineShape_js_1.default],
            ['rectangle', RectangleShape_js_1.default],
            ['rhombus', RhombusShape_js_1.default],
            ['swimlane', SwimlaneShape_js_1.default],
            ['triangle', TriangleShape_js_1.default],
        ];
        for (const [shapeName, shapeClass] of shapesToRegister) {
            ShapeRegistry_js_1.ShapeRegistry.add(shapeName, shapeClass);
        }
        isDefaultElementsRegistered = true;
    }
}
/**
 * Unregister all shapes from {@link ShapeRegistry}.
 *
 * @category Configuration
 * @category Style
 * @since 0.18.0
 */
function unregisterAllShapes() {
    ShapeRegistry_js_1.ShapeRegistry.clear();
    isDefaultElementsRegistered = false;
}
