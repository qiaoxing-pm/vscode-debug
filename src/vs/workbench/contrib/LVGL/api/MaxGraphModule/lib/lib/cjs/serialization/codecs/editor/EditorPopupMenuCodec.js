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
exports.EditorPopupMenuCodec = void 0;
const ObjectCodec_js_1 = __importDefault(require("../../ObjectCodec.js"));
const EditorPopupMenu_js_1 = __importDefault(require("../../../editor/EditorPopupMenu.js"));
/**
 * Custom codec for configuring {@link EditorPopupMenu}s.
 *
 * This class is created and registered dynamically at load time and used implicitly via {@link Codec} and the {@link CodecRegistry}.
 *
 * This codec only reads configuration data for existing popup menus, it does not encode or create menus.
 * Note that this codec only passes the configuration node to the popup menu, which uses the config to dynamically create menus.
 *
 * @see {@link EditorPopupMenu.createMenu}.
 * @category Serialization with Codecs
 */
class EditorPopupMenuCodec extends ObjectCodec_js_1.default {
    constructor() {
        super(new EditorPopupMenu_js_1.default());
    }
    /**
     * Returns null.
     */
    encode(_enc, _obj) {
        return null;
    }
    /**
     * Uses the given node as the config for {@link EditorPopupMenu}.
     */
    decode(dec, node, into) {
        const inc = node.getElementsByTagName('include')[0];
        if (inc != null) {
            this.processInclude(dec, inc, into);
        }
        else if (into != null) {
            into.config = node;
        }
        return into;
    }
}
exports.EditorPopupMenuCodec = EditorPopupMenuCodec;
