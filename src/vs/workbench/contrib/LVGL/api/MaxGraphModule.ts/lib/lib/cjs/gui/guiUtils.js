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
exports.GuiConfig = exports.error = exports.popup = void 0;
const StringUtils_js_1 = require("../util/StringUtils.js");
const Client_js_1 = __importDefault(require("../Client.js"));
const domUtils_js_1 = require("../util/domUtils.js");
const i18n_utils_js_1 = require("../internal/i18n-utils.js");
const InternalEvent_js_1 = __importDefault(require("../view/event/InternalEvent.js"));
const MaxWindow_js_1 = __importDefault(require("./MaxWindow.js"));
/**
 * Shows the specified text content in a new {@link MaxWindow} or a new browser window if `isInternalWindow` is `false`.
 *
 * @param content String that specifies the text to be displayed.
 * @param isInternalWindow Optional boolean indicating if an {@link MaxWindow} should be used instead of a new browser window. Default is `false`.
 */
const popup = (content, isInternalWindow = false) => {
    if (isInternalWindow) {
        const div = document.createElement('div');
        div.style.overflow = 'scroll';
        div.style.width = '636px';
        div.style.height = '460px';
        const pre = document.createElement('pre');
        pre.innerHTML = (0, StringUtils_js_1.htmlEntities)(content, false)
            .replace(/\n/g, '<br>')
            .replace(/ /g, '&nbsp;');
        div.appendChild(pre);
        const w = document.body.clientWidth;
        const h = Math.max(document.body.clientHeight || 0, document.documentElement.clientHeight);
        const wnd = new MaxWindow_js_1.default('Popup Window', div, w / 2 - 320, h / 2 - 240, 640, 480, false, true);
        wnd.setClosable(true);
        wnd.setVisible(true);
    }
    else {
        // Wraps up the XML content in a textarea
        if (Client_js_1.default.IS_NS) {
            const wnd = window.open();
            if (!wnd) {
                throw new Error('Permission not granted to open popup window');
            }
            wnd.document.writeln(`<pre>${(0, StringUtils_js_1.htmlEntities)(content)}</pre>`);
            wnd.document.close();
        }
        else {
            const wnd = window.open();
            if (!wnd) {
                throw new Error('Permission not granted to open popup window');
            }
            const pre = wnd.document.createElement('pre');
            pre.innerHTML = (0, StringUtils_js_1.htmlEntities)(content, false)
                .replace(/\n/g, '<br>')
                .replace(/ /g, '&nbsp;');
            wnd.document.body.appendChild(pre);
        }
    }
};
exports.popup = popup;
/**
 * Displays the given error message in a new <MaxWindow> of the given width.
 * If close is true then an additional close button is added to the window.
 * The optional icon specifies the icon to be used for the window. Default is {@link GuiConfig.errorImage}.
 *
 * @param message String specifying the message to be displayed.
 * @param width Integer specifying the width of the window.
 * @param close Optional boolean indicating whether to add a close button.
 * @param icon Optional icon for the window decoration.
 */
const error = (message, width, close, icon = null) => {
    const div = document.createElement('div');
    div.style.padding = '20px';
    const img = document.createElement('img');
    img.setAttribute('src', icon || exports.GuiConfig.errorImage);
    img.setAttribute('valign', 'bottom');
    img.style.verticalAlign = 'middle';
    div.appendChild(img);
    div.appendChild(document.createTextNode('\u00a0')); // &nbsp;
    div.appendChild(document.createTextNode('\u00a0')); // &nbsp;
    div.appendChild(document.createTextNode('\u00a0')); // &nbsp;
    (0, domUtils_js_1.write)(div, message);
    const w = document.body.clientWidth;
    const h = document.body.clientHeight || document.documentElement.clientHeight;
    const warn = new MaxWindow_js_1.default((0, i18n_utils_js_1.translate)(exports.GuiConfig.errorResource) || exports.GuiConfig.errorResource, div, (w - width) / 2, h / 4, width, null, false, true);
    if (close) {
        (0, domUtils_js_1.br)(div);
        const tmp = document.createElement('p');
        const button = document.createElement('button');
        button.setAttribute('style', 'float:right');
        InternalEvent_js_1.default.addListener(button, 'click', (evt) => {
            warn.destroy();
        });
        (0, domUtils_js_1.write)(button, (0, i18n_utils_js_1.translate)(exports.GuiConfig.closeResource) || exports.GuiConfig.closeResource);
        tmp.appendChild(button);
        div.appendChild(tmp);
        (0, domUtils_js_1.br)(div);
        warn.setClosable(true);
    }
    warn.setVisible(true);
    return warn;
};
exports.error = error;
/**
 * A global configuration for maxGraph GUI.
 */
exports.GuiConfig = {
    /*
     * Specifies the resource key for the title of the error window. If the
     * resource for this key does not exist then the value is used as
     * the title. Default is 'error'.
     */
    errorResource: 'error',
    /**
     * Specifies the resource key for the label of the close button. If the
     * resource for this key does not exist then the value is used as
     * the label. Default is 'close'.
     */
    closeResource: 'close',
    /**
     * Defines the image used for error dialogs.
     */
    errorImage: `${Client_js_1.default.imageBasePath}/error.gif`,
};
