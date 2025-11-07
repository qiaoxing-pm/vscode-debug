"use strict";
/*
Copyright 2021-present The maxGraph project Contributors
Copyright (c) 2006-2015, JGraph Ltd
Copyright (c) 2006-2015, Gaudenz Alder

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
const Constants_js_1 = require("./Constants.js");
const StringUtils_js_1 = require("./StringUtils.js");
/**
 * Identity for JavaScript objects and functions.
 *
 * This is implemented using a simple incrementing counter which is stored in each object under {@link FIELD_NAME}.
 *
 * The identity for an object does not change during its lifecycle.
 */
class ObjectIdentity {
    /**
     * Returns the ID for the given object or function.
     */
    static get(obj) {
        if (obj) {
            if (obj[Constants_js_1.IDENTITY_FIELD_NAME] === null || obj[Constants_js_1.IDENTITY_FIELD_NAME] === undefined) {
                if (typeof obj === 'object') {
                    const ctor = (0, StringUtils_js_1.getFunctionName)(obj.constructor);
                    obj[Constants_js_1.IDENTITY_FIELD_NAME] = `${ctor}#${ObjectIdentity.counter++}`;
                }
                else if (typeof obj === 'function') {
                    obj[Constants_js_1.IDENTITY_FIELD_NAME] = `Function#${ObjectIdentity.counter++}`;
                }
            }
            return obj[Constants_js_1.IDENTITY_FIELD_NAME];
        }
        return null;
    }
    /**
     * Deletes the ID from the given object or function.
     */
    static clear(obj) {
        delete obj[Constants_js_1.IDENTITY_FIELD_NAME];
    }
}
/**
 * Name of the field to be used to store the object ID.
 * @default {@IDENTITY_FIELD_NAME}
 */
ObjectIdentity.FIELD_NAME = Constants_js_1.IDENTITY_FIELD_NAME;
/**
 * Current counter.
 */
ObjectIdentity.counter = 0;
exports.default = ObjectIdentity;
