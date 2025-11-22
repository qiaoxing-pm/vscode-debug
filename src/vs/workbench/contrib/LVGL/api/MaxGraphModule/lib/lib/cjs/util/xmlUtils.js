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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findNode = exports.getPrettyXml = exports.getXml = exports.getViewXml = exports.parseXml = exports.createXmlDocument = void 0;
const Constants_js_1 = require("./Constants.js");
const Point_js_1 = __importDefault(require("../view/geometry/Point.js"));
const StringUtils_js_1 = require("./StringUtils.js");
const TemporaryCellStates_js_1 = __importDefault(require("../view/cell/TemporaryCellStates.js"));
const domUtils_js_1 = require("./domUtils.js");
const Codec_js_1 = __importDefault(require("../serialization/Codec.js"));
const utils_js_1 = require("../internal/utils.js");
/**
 * Returns a new, empty XML document.
 */
const createXmlDocument = () => {
    return document.implementation.createDocument('', '', null);
};
exports.createXmlDocument = createXmlDocument;
const parseXml = (xmlString) => {
    return new DOMParser().parseFromString(xmlString, 'text/xml');
};
exports.parseXml = parseXml;
const getViewXml = (graph, scale = 1, cells = null, x0 = 0, y0 = 0) => {
    if (cells == null) {
        const model = graph.getDataModel();
        cells = [model.getRoot()];
    }
    const view = graph.getView();
    let result = null;
    // Disables events on the view
    const eventsEnabled = view.isEventsEnabled();
    view.setEventsEnabled(false);
    // Workaround for label bounds not taken into account for image export.
    // Creates a temporary draw pane which is used for rendering the text.
    // Text rendering is required for finding the bounds of the labels.
    const { drawPane } = view;
    const { overlayPane } = view;
    if (graph.dialect === 'svg') {
        view.drawPane = document.createElementNS(Constants_js_1.NS_SVG, 'g');
        view.canvas.appendChild(view.drawPane);
        // Redirects cell overlays into temporary container
        view.overlayPane = document.createElementNS(Constants_js_1.NS_SVG, 'g');
        view.canvas.appendChild(view.overlayPane);
    }
    else {
        view.drawPane = view.drawPane.cloneNode(false);
        view.canvas.appendChild(view.drawPane);
        // Redirects cell overlays into temporary container
        view.overlayPane = view.overlayPane.cloneNode(false);
        view.canvas.appendChild(view.overlayPane);
    }
    // Resets the translation
    const translate = view.getTranslate();
    view.translate = new Point_js_1.default(x0, y0);
    // Creates the temporary cell states in the view
    const temp = new TemporaryCellStates_js_1.default(graph.getView(), scale, cells);
    try {
        const enc = new Codec_js_1.default();
        result = enc.encode(graph.getView());
    }
    finally {
        temp.destroy();
        view.translate = translate;
        view.canvas.removeChild(view.drawPane);
        view.canvas.removeChild(view.overlayPane);
        view.drawPane = drawPane;
        view.overlayPane = overlayPane;
        view.setEventsEnabled(eventsEnabled);
    }
    return result;
};
exports.getViewXml = getViewXml;
/**
 * Returns the XML content of the specified node.
 *
 * All `\n` are then replaced with the linefeed parameter value.
 *
 * @param node DOM node to return the XML for.
 * @param linefeed Optional string that linefeed are converted into. Default is `&#xa;`.
 */
const getXml = (node, linefeed = '&#xa;') => {
    const xmlSerializer = new XMLSerializer();
    let xml = xmlSerializer.serializeToString(node);
    // Replaces linefeed with HTML Entities.
    xml = xml.replace(/\n/g, linefeed);
    return xml;
};
exports.getXml = getXml;
/**
 * Returns a pretty printed string that represents the XML tree for the
 * given node. This method should only be used to print XML for reading,
 * use <getXml> instead to obtain a string for processing.
 *
 * @param node DOM node to return the XML for.
 * @param tab Optional string that specifies the indentation for one level.
 * @param indent Optional string that represents the current indentation.
 * @param newline Optional string that represents a linefeed.
 * @param ns Optional string that represents the target namespace URI.
 */
const getPrettyXml = (node, tab = '  ', indent = '', newline = '\n', ns = null) => {
    const result = [];
    if (node != null) {
        if (node.namespaceURI != null && node.namespaceURI !== ns) {
            ns = node.namespaceURI;
            if (node.getAttribute('xmlns') == null) {
                node.setAttribute('xmlns', node.namespaceURI);
            }
        }
        if (node.nodeType === Constants_js_1.NODE_TYPE.DOCUMENT) {
            result.push((0, exports.getPrettyXml)(node.documentElement, tab, indent, newline, ns));
        }
        else if (node.nodeType === Constants_js_1.NODE_TYPE.DOCUMENT_FRAGMENT) {
            let tmp = node.firstChild;
            if (tmp != null) {
                while (tmp != null) {
                    result.push((0, exports.getPrettyXml)(tmp, tab, indent, newline, ns));
                    tmp = tmp.nextSibling;
                }
            }
        }
        else if (node.nodeType === Constants_js_1.NODE_TYPE.COMMENT) {
            const value = (0, domUtils_js_1.getTextContent)(node);
            if (value.length > 0) {
                result.push(`${indent}<!--${value}-->${newline}`);
            }
        }
        else if (node.nodeType === Constants_js_1.NODE_TYPE.TEXT) {
            const value = (0, StringUtils_js_1.trim)((0, domUtils_js_1.getTextContent)(node));
            if (value && value.length > 0) {
                result.push(indent + (0, StringUtils_js_1.htmlEntities)(value, false) + newline);
            }
        }
        else if (node.nodeType === Constants_js_1.NODE_TYPE.CDATA) {
            const value = (0, domUtils_js_1.getTextContent)(node);
            if (value.length > 0) {
                result.push(`${indent}<![CDATA[${value}]]${newline}`);
            }
        }
        else {
            result.push(`${indent}<${node.nodeName}`);
            // Creates the string with the node attributes
            // and converts all HTML entities in the values
            const attrs = node.attributes;
            if (attrs != null) {
                for (let i = 0; i < attrs.length; i += 1) {
                    const val = (0, StringUtils_js_1.htmlEntities)(attrs[i].value);
                    result.push(` ${attrs[i].nodeName}="${val}"`);
                }
            }
            // Recursively creates the XML string for each child
            // node and appends it here with an indentation
            let tmp = node.firstChild;
            if (tmp != null) {
                result.push(`>${newline}`);
                while (tmp != null) {
                    result.push((0, exports.getPrettyXml)(tmp, tab, indent + tab, newline, ns));
                    tmp = tmp.nextSibling;
                }
                result.push(`${indent}</${node.nodeName}>${newline}`);
            }
            else {
                result.push(` />${newline}`);
            }
        }
    }
    return result.join('');
};
exports.getPrettyXml = getPrettyXml;
/**
 * Returns the first node where attr equals value.
 * This implementation does not use XPath.
 */
const findNode = (node, attr, value) => {
    if ((0, utils_js_1.isElement)(node)) {
        const tmp = node.getAttribute(attr);
        if (tmp && tmp === value) {
            return node;
        }
    }
    node = node.firstChild;
    while (node) {
        const result = (0, exports.findNode)(node, attr, value);
        if (result) {
            return result;
        }
        node = node.nextSibling;
    }
    return null;
};
exports.findNode = findNode;
