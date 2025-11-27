import * as path from 'path';
import { readFileSync } from 'fs';

/**
 * 获取 wasm 文件路径
 */
export function getWasmPath(): string {
	return path.join(__dirname, 'assets', 'lvgl_ems.wasm');
}

/**
 * 加载 wasm 模块
 */
export async function loadWasm(): Promise<WebAssembly.Instance> {
	const wasmBuffer = readFileSync(getWasmPath());
	const wasmModule = await WebAssembly.compile(wasmBuffer);
	const instance = await WebAssembly.instantiate(wasmModule, {
		/* TODO: 填写你的 imports 对象 */
	});
	return instance;
}
