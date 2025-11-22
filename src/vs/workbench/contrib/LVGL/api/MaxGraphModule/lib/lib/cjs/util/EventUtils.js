"use strict";
/*
Copyright 2021-present The maxGraph project Contributors

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
exports.isMetaDown = exports.isControlDown = exports.isAltDown = exports.isShiftDown = exports.isPopupTrigger = exports.isRightMouseButton = exports.isMiddleMouseButton = exports.isLeftMouseButton = exports.isMouseEvent = exports.isMultiTouchEvent = exports.isPenEvent = exports.isTouchEvent = exports.isConsumed = exports.getSource = exports.getClientY = exports.getClientX = exports.getMainEvent = void 0;
const Client_js_1 = __importDefault(require("../Client.js"));
/**
 * Returns the touch or mouse event that contains the mouse coordinates.
 */
const getMainEvent = (evt) => {
    let t = evt;
    if ((t.type === 'touchstart' || t.type === 'touchmove') && t.touches && t.touches[0]) {
        t = t.touches[0];
    }
    else if (t.type === 'touchend' && t.changedTouches && t.changedTouches[0]) {
        t = t.changedTouches[0];
    }
    return t;
};
exports.getMainEvent = getMainEvent;
/**
 * Returns true if the meta key is pressed for the given event.
 */
const getClientX = (evt) => {
    return (0, exports.getMainEvent)(evt).clientX;
};
exports.getClientX = getClientX;
/**
 * Returns true if the meta key is pressed for the given event.
 */
const getClientY = (evt) => {
    return (0, exports.getMainEvent)(evt).clientY;
};
exports.getClientY = getClientY;
/**
 * Returns the event's target or srcElement depending on the browser.
 */
const getSource = (evt) => {
    return evt.target;
};
exports.getSource = getSource;
/**
 * Returns true if the event has been consumed using {@link consume}.
 */
const isConsumed = (evt) => {
    const t = evt;
    return t.isConsumed !== undefined && t.isConsumed;
};
exports.isConsumed = isConsumed;
/**
 * Returns true if the event was generated using a touch device (not a pen or mouse).
 */
const isTouchEvent = (evt) => {
    const t = evt;
    return t.pointerType
        ? t.pointerType === 'touch' || t.pointerType === t.MSPOINTER_TYPE_TOUCH
        : t.mozInputSource !== undefined
            ? t.mozInputSource === 5
            : t.type.indexOf('touch') === 0;
};
exports.isTouchEvent = isTouchEvent;
/**
 * Returns true if the event was generated using a pen (not a touch device or mouse).
 */
const isPenEvent = (evt) => {
    const t = evt;
    return t.pointerType
        ? t.pointerType == 'pen' || t.pointerType === t.MSPOINTER_TYPE_PEN
        : t.mozInputSource !== undefined
            ? t.mozInputSource === 2
            : t.type.indexOf('pen') === 0;
};
exports.isPenEvent = isPenEvent;
/**
 * Returns true if the event was generated using a touch device (not a pen or mouse).
 */
const isMultiTouchEvent = (evt) => {
    const t = evt;
    return (t.type &&
        t.type.indexOf('touch') == 0 &&
        t.touches !== undefined &&
        t.touches.length > 1);
};
exports.isMultiTouchEvent = isMultiTouchEvent;
/**
 * Returns true if the event was generated using a mouse (not a pen or touch device).
 */
const isMouseEvent = (evt) => {
    const t = evt;
    return t.pointerType
        ? t.pointerType == 'mouse' || t.pointerType === t.MSPOINTER_TYPE_MOUSE
        : t.mozInputSource !== undefined
            ? t.mozInputSource === 1
            : t.type.indexOf('mouse') === 0;
};
exports.isMouseEvent = isMouseEvent;
/**
 * Returns true if the left mouse button is pressed for the given event.
 * To check if a button is pressed during a mouseMove you should use the
 * {@link AbstractGraph.isMouseDown} property. Note that this returns true in Firefox
 * for control+left-click on the Mac.
 */
const isLeftMouseButton = (evt) => {
    // Special case for mousemove and mousedown we check the buttons
    // if it exists because which is 0 even if no button is pressed
    if ('buttons' in evt && (evt.type === 'mousedown' || evt.type === 'mousemove')) {
        return evt.buttons === 1;
    }
    if (evt.which !== undefined) {
        return evt.which === 1;
    }
    return evt.button === 1;
};
exports.isLeftMouseButton = isLeftMouseButton;
/**
 * Returns true if the middle mouse button is pressed for the given event.
 * To check if a button is pressed during a mouseMove you should use the
 * {@link AbstractGraph.isMouseDown} property.
 */
const isMiddleMouseButton = (evt) => {
    return evt.button === 4;
};
exports.isMiddleMouseButton = isMiddleMouseButton;
/**
 * Returns true if the right mouse button was pressed. Note that this
 * button might not be available on some systems. For handling a popup
 * trigger {@link isPopupTrigger} should be used.
 */
const isRightMouseButton = (evt) => {
    return evt.button === 2;
};
exports.isRightMouseButton = isRightMouseButton;
/**
 * Returns true if the event is a popup trigger. This implementation
 * returns true if the right button or the left button and control was
 * pressed on a Mac.
 */
const isPopupTrigger = (evt) => {
    return ((0, exports.isRightMouseButton)(evt) ||
        (Client_js_1.default.IS_MAC &&
            (0, exports.isControlDown)(evt) &&
            !(0, exports.isShiftDown)(evt) &&
            !(0, exports.isMetaDown)(evt) &&
            !(0, exports.isAltDown)(evt)));
};
exports.isPopupTrigger = isPopupTrigger;
/**
 * Returns true if the shift key is pressed for the given event.
 */
const isShiftDown = (evt) => {
    return evt.shiftKey;
};
exports.isShiftDown = isShiftDown;
/**
 * Returns true if the alt key is pressed for the given event.
 */
const isAltDown = (evt) => {
    return evt.altKey;
};
exports.isAltDown = isAltDown;
/**
 * Returns true if the control key is pressed for the given event.
 */
const isControlDown = (evt) => {
    return evt.ctrlKey;
};
exports.isControlDown = isControlDown;
/**
 * Returns true if the meta key is pressed for the given event.
 */
const isMetaDown = (evt) => {
    return evt.metaKey;
};
exports.isMetaDown = isMetaDown;
