/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import '../../workbench/contrib/LVGL/lib/PropertyInput.iife.js';
import '../../workbench/contrib/LVGL/lib/index.iife.js';
import "../../workbench/contrib/LVGL/lib/propWidget/index.iife.js"
// import "../../workbench/contrib/LVGL/lib/propWidget.iife.js"
import api from "../../workbench/contrib/LVGL/api/index.js";

// 用于标识VS Code 窗口的唯一ID
export type CodeWindow = Window & typeof globalThis & {
	readonly vscodeWindowId: number;
};

/**
 * 确保窗口类型函数
 * @param targetWindow
 * @param fallbackWindowId
 */
export function ensureCodeWindow(targetWindow: Window, fallbackWindowId: number): asserts targetWindow is CodeWindow {
	const codeWindow = targetWindow as Partial<CodeWindow>;

	if (typeof codeWindow.vscodeWindowId !== 'number') {
		Object.defineProperty(codeWindow, 'vscodeWindowId', {
			get: () => fallbackWindowId
		});
	}
}

// 将当前全局 window 对象强制转换为 CodeWindow 类型
// eslint-disable-next-line no-restricted-globals
export const mainWindow = window as CodeWindow;

/**
 * 辅助检测窗口
 * 用于窗口身份识别，区别不同的编辑器窗口
 * 向后兼容，确保即使窗口缺少必要属性也能正常工作
 * @param obj
 * @returns
 */
export function isAuxiliaryWindow(obj: Window): obj is CodeWindow {

	// XLH-F5
	// console.warn("调试，窗口检测", obj)
	// const mcxaSelectOption = document.createElement('mcxa-select-option');
	// const mcxaCascaderOption = document.createElement('mcxa-cascader-option');
	// mcxaSelectOption.api = api;
	// mcxaCascaderOption.api = api;

	// document.body.appendChild(mcxaSelectOption);
	// document.body.appendChild(mcxaCascaderOption);




	if (obj === mainWindow) {
		return false;
	}

	const candidate = obj as CodeWindow | undefined;

	return typeof candidate?.vscodeWindowId === 'number';
}
