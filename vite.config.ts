/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
	server: {
		host: true, // 等同于 '0.0.0.0'
		port: 5173, // 可选，默认5173
		proxy: {
			'/api': {
				target: 'http://win-20240531qrt:3000',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, './src'),
			"@core": path.resolve(__dirname, './src/packages/core'),
			"@plc": path.resolve(__dirname, './src/plc'),
			'@lvgl': path.resolve(__dirname, './src/lvgl/package'),
			"$lib": path.resolve(__dirname, './src/packages/src/lib'),
			"@meltui": path.resolve(__dirname, './src/packages/src/lib'),
			// "$lib": path.resolve(__dirname, './src/packages/src/lib'),
		}
	},
	plugins: [svelte()],
})
