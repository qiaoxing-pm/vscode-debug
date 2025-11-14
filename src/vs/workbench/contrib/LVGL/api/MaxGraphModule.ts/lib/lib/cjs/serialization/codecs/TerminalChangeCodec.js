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
exports.TerminalChangeCodec = void 0;
const ObjectCodec_js_1 = __importDefault(require("../ObjectCodec.js"));
const TerminalChange_js_1 = __importDefault(require("../../view/undoable_changes/TerminalChange.js"));
/**
 * Codec for {@link TerminalChange}s.
 *
 * This class is created and registered dynamically at load time and used implicitly via {@link Codec} and the {@link CodecRegistry}.
 *
 * Transient Fields:
 *
 * - model
 * - previous
 *
 * Reference Fields:
 *
 * - cell
 * - terminal
 *
 * @category Serialization with Codecs
 */
class TerminalChangeCodec extends ObjectCodec_js_1.default {
    constructor() {
        const __dummy = undefined;
        super(new TerminalChange_js_1.default(__dummy, __dummy, __dummy, __dummy), ['model', 'previous'], ['cell', 'terminal']);
    }
    /**
     * Restores the state by assigning the previous value.
     */
    afterDecode(_dec, _node, obj) {
        obj.previous = obj.terminal;
        return obj;
    }
}
exports.TerminalChangeCodec = TerminalChangeCodec;
