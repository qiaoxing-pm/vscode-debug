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
exports.StylesheetCodec = void 0;
const ObjectCodec_js_1 = __importDefault(require("../ObjectCodec.js"));
const utils_js_1 = require("./utils.js");
const Stylesheet_js_1 = require("../../view/style/Stylesheet.js");
const cloneUtils_js_1 = require("../../util/cloneUtils.js");
const config_js_1 = require("../../util/config.js");
const mathUtils_js_1 = require("../../util/mathUtils.js");
const domUtils_js_1 = require("../../util/domUtils.js");
const utils_js_2 = require("../../internal/utils.js");
/**
 * Codec for {@link Stylesheet}s.
 *
 * This class is created and registered dynamically at load time and used implicitly via {@link Codec} and the {@link CodecRegistry}.
 *
 * @category Serialization with Codecs
 */
class StylesheetCodec extends ObjectCodec_js_1.default {
    constructor() {
        super(new Stylesheet_js_1.Stylesheet());
    }
    /**
     * Encodes a stylesheet. See {@link decode} for a description of the format.
     */
    encode(enc, obj) {
        const node = enc.document.createElement(this.getName());
        for (const styleName of obj.styles.keys()) {
            const style = obj.styles.get(styleName);
            const styleNode = enc.document.createElement('add');
            if (styleName) {
                styleNode.setAttribute('as', styleName);
                for (const stylePropertyName of Object.keys(style ?? {})) {
                    // @ts-ignore style is not defined as indexed type
                    const value = this.getStringValue(stylePropertyName, style[stylePropertyName]);
                    if (value != null) {
                        const entry = enc.document.createElement('add');
                        entry.setAttribute('value', value);
                        entry.setAttribute('as', stylePropertyName);
                        styleNode.appendChild(entry);
                    }
                }
                if (styleNode.childNodes.length > 0) {
                    node.appendChild(styleNode);
                }
            }
        }
        return node;
    }
    /**
     * Returns the string for encoding the given value.
     */
    getStringValue(key, value) {
        const type = typeof value;
        // Tries to turn functions into strings
        if (type === 'function') {
            value = (0, utils_js_1.getNameFromRegistries)(value);
        }
        else if (type === 'object') {
            value = null;
        }
        return value;
    }
    /**
     * Reads a sequence of the following child nodes and attributes:
     *
     * Child Nodes:
     * - `add` - Adds a new style.
     *
     * Attributes:
     * - `as` - Name of the style.
     * - `extend` - Name of the style to inherit from.
     *
     * Each node contains another sequence of add and remove nodes with the following attributes:
     * - `as` - Name of the style (see properties of {@link CellStateStyle}).
     * - `value` - Value for the style.
     *
     * Instead of the value-attribute, one can put Javascript expressions into the node as follows if {@link allowEval} is `true`:
     * <add as="perimeter">Perimeter.RectanglePerimeter</add>
     *
     * A remove node will remove the entry with the name given in the as-attribute from the style.
     *
     * Example:
     *
     * ```javascript
     * <Stylesheet as="stylesheet">
     *   <add as="text">
     *     <add as="fontSize" value="12"/>
     *   </add>
     *   <add as="defaultVertex" extend="text">
     *     <add as="shape" value="rectangle"/>
     *   </add>
     * </Stylesheet>
     * ```
     */
    decode(dec, _node, into) {
        const obj = into || new this.template.constructor();
        const id = _node.getAttribute('id');
        if (id) {
            dec.objects[id] = obj;
        }
        let node = _node.firstChild;
        while (node) {
            if (!this.processInclude(dec, node, obj) && node.nodeName === 'add') {
                const as = node.getAttribute('as');
                if (as) {
                    const extend = node.getAttribute('extend');
                    let style = extend ? (0, cloneUtils_js_1.clone)(obj.styles[extend]) : null;
                    if (!style) {
                        if (extend) {
                            config_js_1.GlobalConfig.logger.warn(`StylesheetCodec.decode: stylesheet ${extend} not found to extend`);
                        }
                        style = {};
                    }
                    let entry = node.firstChild;
                    while (entry) {
                        if ((0, utils_js_2.isElement)(entry)) {
                            const key = entry.getAttribute('as');
                            if (entry.nodeName === 'add') {
                                const text = (0, domUtils_js_1.getTextContent)(entry);
                                let value = null;
                                if (text && StylesheetCodec.allowEval) {
                                    value = (0, utils_js_2.doEval)(text);
                                }
                                else {
                                    value = entry.getAttribute('value');
                                    if ((0, mathUtils_js_1.isNumeric)(value)) {
                                        value = parseFloat(value);
                                    }
                                }
                                if (value) {
                                    style[key] = value;
                                }
                            }
                            else if (entry.nodeName === 'remove') {
                                delete style[key];
                            }
                        }
                        entry = entry.nextSibling;
                    }
                    obj.putCellStyle(as, style);
                }
            }
            node = node.nextSibling;
        }
        return obj;
    }
}
exports.StylesheetCodec = StylesheetCodec;
/**
 * Static global switch that specifies if the use of eval is allowed for evaluating text content.
 * Set this to `false` if stylesheets may contain user input.
 *
 * **WARNING**: Enabling this switch carries a possible security risk.
 *
 * @default false
 */
StylesheetCodec.allowEval = false;
