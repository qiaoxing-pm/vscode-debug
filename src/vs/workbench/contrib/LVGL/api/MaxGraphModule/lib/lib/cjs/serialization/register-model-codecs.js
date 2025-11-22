"use strict";
/*
Copyright 2025-present The maxGraph project Contributors

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
exports.registerModelCodecs = void 0;
const CodecRegistry_js_1 = __importDefault(require("./CodecRegistry.js"));
const _model_codecs_js_1 = require("./codecs/_model-codecs.js");
const Geometry_js_1 = __importDefault(require("../view/geometry/Geometry.js"));
const Point_js_1 = __importDefault(require("../view/geometry/Point.js"));
const register_shared_js_1 = require("./register-shared.js");
/**
 * Register model codecs i.e. codecs used to import/export the Graph Model, see {@link GraphDataModel}.
 *
 * @param force if `true` register the codecs even if they were already registered. If false, only register them
 *              if they have never been registered before.
 * @since 0.10.0
 * @category Configuration
 * @category Serialization with Codecs
 */
const registerModelCodecs = (force = false) => {
    if (!register_shared_js_1.CodecRegistrationStates.model || force) {
        CodecRegistry_js_1.default.register(new _model_codecs_js_1.CellCodec());
        CodecRegistry_js_1.default.register(new _model_codecs_js_1.ModelCodec());
        // To support decode/import executed before encode/export (see https://github.com/maxGraph/maxGraph/issues/178)
        // Codecs are currently only registered automatically during encode/export
        CodecRegistry_js_1.default.register((0, register_shared_js_1.createObjectCodec)(new Geometry_js_1.default(), 'Geometry'));
        CodecRegistry_js_1.default.register((0, register_shared_js_1.createObjectCodec)(new Point_js_1.default(), 'Point'));
        (0, register_shared_js_1.registerBaseCodecs)(force);
        // mxGraph support
        CodecRegistry_js_1.default.addAlias('mxGraphModel', 'GraphDataModel');
        CodecRegistry_js_1.default.addAlias('mxPoint', 'Point');
        CodecRegistry_js_1.default.register(new _model_codecs_js_1.mxCellCodec(), false);
        CodecRegistry_js_1.default.register(new _model_codecs_js_1.mxGeometryCodec(), false);
        register_shared_js_1.CodecRegistrationStates.model = true;
    }
};
exports.registerModelCodecs = registerModelCodecs;
