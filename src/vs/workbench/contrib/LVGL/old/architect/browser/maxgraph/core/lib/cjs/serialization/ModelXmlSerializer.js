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
exports.ModelXmlSerializer = void 0;
const register_model_codecs_js_1 = require("./register-model-codecs.js");
const xmlUtils_js_1 = require("../util/xmlUtils.js");
const Codec_js_1 = __importDefault(require("./Codec.js"));
/**
 * Convenient utility class using {@link Codec} to manage maxGraph model import and export.
 *
 * **WARN**: this is an experimental feature that is subject to change (class and method names).
 *
 * @experimental
 * @since 0.6.0
 * @category Serialization with Codecs
 */
// Include 'XML' in the class name as there were past discussions about supporting other format like JSON for example
// See https://github.com/maxGraph/maxGraph/discussions/60 for more details.
class ModelXmlSerializer {
    constructor(dataModel) {
        this.dataModel = dataModel;
        this.registerCodecs();
    }
    import(input) {
        const doc = typeof input === 'string' ? (0, xmlUtils_js_1.parseXml)(input) : input.ownerDocument;
        new Codec_js_1.default(doc).decode(doc.documentElement, this.dataModel);
    }
    export(options) {
        const encodedNode = new Codec_js_1.default().encode(this.dataModel);
        return (options?.pretty ?? true) ? (0, xmlUtils_js_1.getPrettyXml)(encodedNode) : (0, xmlUtils_js_1.getXml)(encodedNode);
    }
    /**
     * Hook for replacing codecs registered by default (model codecs).
     */
    registerCodecs() {
        (0, register_model_codecs_js_1.registerModelCodecs)();
    }
}
exports.ModelXmlSerializer = ModelXmlSerializer;
