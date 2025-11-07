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
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchBinaryMask = exports.mixInto = exports.isNullish = exports.isElement = exports.doEval = void 0;
const Constants_js_1 = require("../util/Constants.js");
const config_js_1 = require("../util/config.js");
/**
 * @private
 */
const doEval = (expression) => {
    // eslint-disable-next-line no-eval -- valid here as we want this function to be the only place in the codebase that uses eval
    return eval(expression);
};
exports.doEval = doEval;
/**
 * Returns true if the parameter is not `nullish` and its nodeType relates to an {@link Element}.
 * @private
 */
const isElement = (node) => node?.nodeType === Constants_js_1.NODE_TYPE.ELEMENT;
exports.isElement = isElement;
/**
 * @private not part of the public API, can be removed or changed without prior notice
 */
const isNullish = (v) => v === null || v === undefined;
exports.isNullish = isNullish;
/**
 * Merge a mixin into the destination
 * @param dest the destination class
 *
 * @private not part of the public API, can be removed or changed without prior notice
 */
const mixInto = (dest) => (mixin) => {
    const keys = Reflect.ownKeys(mixin);
    try {
        for (const key of keys) {
            Object.defineProperty(dest.prototype, key, {
                value: mixin[key],
                writable: true,
            });
        }
    }
    catch (e) {
        config_js_1.GlobalConfig.logger.error('Error while mixing', e);
    }
};
exports.mixInto = mixInto;
/**
 * @param value the value to check.
 * @param mask the binary mask to apply.
 * @returns `true` if the value matches the binary mask.
 * @private Subject to change prior being part of the public API.
 */
const matchBinaryMask = (value, mask) => {
    return (value & mask) === mask;
};
exports.matchBinaryMask = matchBinaryMask;
