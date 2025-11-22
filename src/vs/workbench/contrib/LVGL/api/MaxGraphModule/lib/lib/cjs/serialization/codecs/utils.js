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
exports.getNameFromRegistries = void 0;
const EdgeStyleRegistry_js_1 = require("../../view/style/edge/EdgeStyleRegistry.js");
const PerimeterRegistry_js_1 = require("../../view/style/perimeter/PerimeterRegistry.js");
const registries = [EdgeStyleRegistry_js_1.EdgeStyleRegistry, PerimeterRegistry_js_1.PerimeterRegistry];
/**
 * @since 0.20.0
 */
const getNameFromRegistries = (value) => {
    for (const registry of registries) {
        const name = registry.getName(value);
        if (name) {
            return name;
        }
    }
    return null;
};
exports.getNameFromRegistries = getNameFromRegistries;
