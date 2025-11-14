"use strict";
/*
Copyright 2023-present The maxGraph project Contributors

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
exports.unregisterAllCodecs = exports.registerAllCodecs = exports.registerEditorCodecs = exports.registerCoreCodecs = void 0;
const CodecRegistry_js_1 = __importDefault(require("./CodecRegistry.js"));
const _other_codecs_js_1 = require("./codecs/_other-codecs.js");
const Rectangle_js_1 = __importDefault(require("../view/geometry/Rectangle.js"));
const ImageBox_js_1 = __importDefault(require("../view/image/ImageBox.js"));
const CellAttributeChange_js_1 = __importDefault(require("../view/undoable_changes/CellAttributeChange.js"));
const CollapseChange_js_1 = __importDefault(require("../view/undoable_changes/CollapseChange.js"));
const GeometryChange_js_1 = __importDefault(require("../view/undoable_changes/GeometryChange.js"));
const StyleChange_js_1 = __importDefault(require("../view/undoable_changes/StyleChange.js"));
const ValueChange_js_1 = __importDefault(require("../view/undoable_changes/ValueChange.js"));
const VisibleChange_js_1 = __importDefault(require("../view/undoable_changes/VisibleChange.js"));
const register_shared_js_1 = require("./register-shared.js");
const register_model_codecs_js_1 = require("./register-model-codecs.js");
const registerGenericChangeCodecs = () => {
    const __dummy = undefined;
    CodecRegistry_js_1.default.register(new _other_codecs_js_1.GenericChangeCodec(new CellAttributeChange_js_1.default(__dummy, __dummy, __dummy), 'value'));
    CodecRegistry_js_1.default.register(new _other_codecs_js_1.GenericChangeCodec(new CollapseChange_js_1.default(__dummy, __dummy, __dummy), 'collapsed'));
    CodecRegistry_js_1.default.register(new _other_codecs_js_1.GenericChangeCodec(new GeometryChange_js_1.default(__dummy, __dummy, __dummy), 'geometry'));
    CodecRegistry_js_1.default.register(new _other_codecs_js_1.GenericChangeCodec(new StyleChange_js_1.default(__dummy, __dummy, __dummy), 'style'));
    CodecRegistry_js_1.default.register(new _other_codecs_js_1.GenericChangeCodec(new ValueChange_js_1.default(__dummy, __dummy, __dummy), 'value'));
    CodecRegistry_js_1.default.register(new _other_codecs_js_1.GenericChangeCodec(new VisibleChange_js_1.default(__dummy, __dummy, __dummy), 'visible'));
};
/**
 * Register core codecs i.e. codecs that don't relate to editor. This includes model codecs that can be registered individually with {@link registerModelCodecs}.
 *
 * @param force if `true` register the codecs even if they were already registered. If false, only register them
 *              if they have never been registered before.
 * @since 0.6.0
 * @category Configuration
 * @category Serialization with Codecs
 */
const registerCoreCodecs = (force = false) => {
    if (!register_shared_js_1.CodecRegistrationStates.core || force) {
        CodecRegistry_js_1.default.register(new _other_codecs_js_1.ChildChangeCodec());
        CodecRegistry_js_1.default.register(new _other_codecs_js_1.BaseGraphCodec());
        CodecRegistry_js_1.default.register(new _other_codecs_js_1.GraphCodec());
        CodecRegistry_js_1.default.register(new _other_codecs_js_1.GraphViewCodec());
        CodecRegistry_js_1.default.register(new _other_codecs_js_1.RootChangeCodec());
        CodecRegistry_js_1.default.register(new _other_codecs_js_1.StylesheetCodec());
        CodecRegistry_js_1.default.register(new _other_codecs_js_1.TerminalChangeCodec());
        registerGenericChangeCodecs();
        // Needed at least by Graph
        CodecRegistry_js_1.default.register((0, register_shared_js_1.createObjectCodec)(new Rectangle_js_1.default(), 'Rectangle'));
        CodecRegistry_js_1.default.register((0, register_shared_js_1.createObjectCodec)(new ImageBox_js_1.default(undefined, 0, 0), 'ImageBox'));
        (0, register_model_codecs_js_1.registerModelCodecs)(force);
        register_shared_js_1.CodecRegistrationStates.core = true;
    }
};
exports.registerCoreCodecs = registerCoreCodecs;
/**
 * Register only editor codecs.
 * @param force if `true` register the codecs even if they were already registered. If false, only register them
 *              if they have never been registered before.
 * @since 0.6.0
 * @category Configuration
 * @category Serialization with Codecs
 */
const registerEditorCodecs = (force = false) => {
    if (!register_shared_js_1.CodecRegistrationStates.editor || force) {
        (0, register_shared_js_1.registerBaseCodecs)(force);
        CodecRegistry_js_1.default.register(new _other_codecs_js_1.EditorCodec());
        CodecRegistry_js_1.default.register(new _other_codecs_js_1.EditorKeyHandlerCodec());
        CodecRegistry_js_1.default.register(new _other_codecs_js_1.EditorPopupMenuCodec());
        CodecRegistry_js_1.default.register(new _other_codecs_js_1.EditorToolbarCodec());
        register_shared_js_1.CodecRegistrationStates.editor = true;
    }
};
exports.registerEditorCodecs = registerEditorCodecs;
/**
 * Register all codecs i.e. core codecs (as done by {@link registerCoreCodecs}) and editor codecs (as done by {@link registerEditorCodecs}).
 *
 * @param force if `true` register the codecs even if they were already registered. If false, only register them
 *              if they have never been registered before.
 * @since 0.6.0
 * @category Configuration
 * @category Serialization with Codecs
 */
const registerAllCodecs = (force = false) => {
    (0, exports.registerCoreCodecs)(force);
    (0, exports.registerEditorCodecs)(force);
};
exports.registerAllCodecs = registerAllCodecs;
/**
 * Unregister all codecs from {@link CodecRegistry}.
 *
 * @since 0.18.0
 * @category Configuration
 * @category Serialization with Codecs
 */
const unregisterAllCodecs = () => {
    CodecRegistry_js_1.default.codecs = {};
    CodecRegistry_js_1.default.aliases = {};
    // reset the state to ensure that the codecs are registered again when the "register" functions are called
    for (const key of Object.keys(register_shared_js_1.CodecRegistrationStates)) {
        register_shared_js_1.CodecRegistrationStates[key] = false;
    }
};
exports.unregisterAllCodecs = unregisterAllCodecs;
