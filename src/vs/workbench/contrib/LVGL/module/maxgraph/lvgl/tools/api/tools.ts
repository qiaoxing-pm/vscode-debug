import type { AxiosError } from "../../../../../lib/axios/index.js";

/**
 * 通用错误处理（无关层级）
 * - 优先从 AxiosError 中提取 response.data
 * - 如果是普通 Error（已被包装），用 error.message
 */
export function handleAnyError(error: unknown, context?: string): never {
	const err = error as AxiosError;

	if (err && err.isAxiosError) {
		if (err.response) {
			// 原始 AxiosError，有服务端返回
			throw new Error(
				`${context ?? "Request"} failed: ${err.response.status} ${typeof err.response.data === "string"
					? err.response.data
					: JSON.stringify(err.response.data)
				}`
			);
		} else if (err.request) {
			// 请求已发出但无响应
			// console.error(`[API Error] ${context ?? ""} - No response`);
			throw new Error(`${context ?? "Request"} failed: No response from server`);
		}
	}

	// 普通 JS Error（可能是二次处理抛出来的）
	if (error instanceof Error) {
		// console.error(`[Error] ${context ?? ""}`, error.message);
		throw new Error(`${context ?? "Request"} failed: ${error.message}`);
	}

	// 未知类型
	// console.error(`[Unknown Error] ${context ?? ""}`, error);
	throw new Error(`${context ?? "Request"} failed: Unknown error`);
}
