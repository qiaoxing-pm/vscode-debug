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
exports.EdgeStyleRegistry = void 0;
const utils_js_1 = require("../../../internal/utils.js");
const BaseRegistry_js_1 = require("../../../internal/BaseRegistry.js");
/**
 * @private
 */
class EdgeStyleRegistryImpl extends BaseRegistry_js_1.BaseRegistry {
    constructor() {
        super(...arguments);
        this.handlerMapping = new Map();
        this.orthogonalStates = new Map();
    }
    add(name, edgeStyle, metaData) {
        super.add(name, edgeStyle);
        metaData?.handlerKind && this.handlerMapping.set(edgeStyle, metaData.handlerKind);
        !(0, utils_js_1.isNullish)(metaData?.isOrthogonal) &&
            this.orthogonalStates.set(edgeStyle, metaData.isOrthogonal);
    }
    isOrthogonal(edgeStyle) {
        return this.orthogonalStates.get(edgeStyle) ?? false;
    }
    getHandlerKind(edgeStyle) {
        return this.handlerMapping.get(edgeStyle) ?? 'default';
    }
    clear() {
        super.clear();
        this.handlerMapping.clear();
        this.orthogonalStates.clear();
    }
}
/**
 * A registry that stores the {@link EdgeStyle}s and their configuration.
 *
 * @since 0.20.0
 * @category Style
 * @category Configuration
 */
exports.EdgeStyleRegistry = new EdgeStyleRegistryImpl();
