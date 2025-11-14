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
exports.RootChangeCodec = void 0;
const ObjectCodec_js_1 = __importDefault(require("../ObjectCodec.js"));
const RootChange_js_1 = __importDefault(require("../../view/undoable_changes/RootChange.js"));
const utils_js_1 = require("../../internal/utils.js");
/**
 * Codec for {@link RootChange}s.
 *
 * This class is created and registered dynamically at load time and used implicitly via {@link Codec} and the {@link CodecRegistry}.
 *
 * Transient Fields:
 *
 * - model
 * - previous
 * - root
 *
 * @category Serialization with Codecs
 */
class RootChangeCodec extends ObjectCodec_js_1.default {
    constructor() {
        const __dummy = undefined;
        super(new RootChange_js_1.default(__dummy, __dummy), ['model', 'previous', 'root']);
    }
    /**
     * Encodes the child recursively.
     */
    afterEncode(enc, obj, node) {
        enc.encodeCell(obj.root, node);
        return node;
    }
    /**
     * Decodes the optional children as cells using the respective decoder.
     */
    beforeDecode(dec, node, obj) {
        if ((0, utils_js_1.isElement)(node.firstChild)) {
            // Makes sure the original node isn't modified
            node = node.cloneNode(true);
            let tmp = node.firstChild;
            obj.root = dec.decodeCell(tmp, false);
            let tmp2 = tmp.nextSibling;
            tmp.parentNode?.removeChild(tmp);
            tmp = tmp2;
            while (tmp != null) {
                tmp2 = tmp.nextSibling;
                dec.decodeCell(tmp);
                tmp.parentNode?.removeChild(tmp);
                tmp = tmp2;
            }
        }
        return node;
    }
    /**
     * Restores the state by assigning the previous value.
     */
    afterDecode(_dec, _node, obj) {
        obj.previous = obj.root;
        return obj;
    }
}
exports.RootChangeCodec = RootChangeCodec;
