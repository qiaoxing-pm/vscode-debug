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
exports.createObjectCodec = exports.registerBaseCodecs = exports.CodecRegistrationStates = void 0;
// The elements in this file are private and are not intended to be exported by the npm package
const CodecRegistry_js_1 = __importDefault(require("./CodecRegistry.js"));
const ObjectCodec_js_1 = __importDefault(require("./ObjectCodec.js"));
/**
 * @private
 */
exports.CodecRegistrationStates = {
    base: false,
    core: false,
    editor: false,
    model: false,
};
/**
 * @private
 */
const registerBaseCodecs = (force = false) => {
    if (!exports.CodecRegistrationStates.base || force) {
        CodecRegistry_js_1.default.register((0, exports.createObjectCodec)({}, 'Object'));
        CodecRegistry_js_1.default.register((0, exports.createObjectCodec)([], 'Array'));
        exports.CodecRegistrationStates.base = true;
    }
};
exports.registerBaseCodecs = registerBaseCodecs;
const createObjectCodec = (template, name) => {
    const objectCodec = new ObjectCodec_js_1.default(template);
    objectCodec.setName(name);
    return objectCodec;
};
exports.createObjectCodec = createObjectCodec;
