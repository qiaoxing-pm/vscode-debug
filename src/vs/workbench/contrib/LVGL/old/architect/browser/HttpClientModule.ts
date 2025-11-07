// /*---------------------------------------------------------------------------------------------
//  *  Copyright (c) Microsoft Corporation. All rights reserved.
//  *  Licensed under the MIT License. See License.txt in the project root for license information.
//  *--------------------------------------------------------------------------------------------*/


// import axios from "../../../../../../../node_modules/axios/index.js";


// // const https = {
// // 	baseURL: "http://win-20240531qrt:3000"
// // }

// class HttpClientModule {
// 	private httpInstance = axios.create({
// 		baseURL: "http://win-20240531qrt:3000",
// 		timeout: 30000,
// 		headers: {
// 			'Content-Type': 'application/json;charset=utf-8'
// 		}
// 	});

// 	constructor() {
// 		// 请求拦截器
// 		this.httpInstance.interceptors.request.use(
// 			(config) => {
// 				return config;
// 			},
// 			(error) => {
// 				// 处理请求错误
// 				console.error('请求配置错误:', error);
// 				return Promise.reject(error);
// 			}
// 		);

// 		// 响应拦截器
// 		this.httpInstance.interceptors.response.use(
// 			(response) => {
// 				return response.data;
// 			},
// 			(error) => {
// 				// 处理响应错误
// 				console.error('响应错误:', error);

// 				// 可以在这里统一处理错误状态码
// 				if (error.response) {
// 					switch (error.response.status) {
// 						case 404:
// 							// 资源不存在
// 							break;
// 						case 500:
// 							// 服务器错误
// 							break;
// 					}
// 				}
// 				return Promise.reject(error);
// 			}
// 		);
// 	}

// 	getProtocolList() {
// 		return this.httpInstance.get("/protocols");
// 	}

// 	getProtocol(protocol: string) {
// 		return this.httpInstance.get(`/protocol/${protocol}`);
// 	}

// }

// export default new HttpClientModule();








































































































class HttpClientModule {
	private baseURL = "http://win-20240531qrt:3000";
	private timeout = 30000;

	// 通用请求函数，用于模拟 axios 拦截行为
	private async request(url: string, options: RequestInit = {}) {
		// 请求拦截
		const config: RequestInit = {
			headers: {
				"Content-Type": "application/json;charset=utf-8",
				...(options.headers || {})
			},
			...options
		};

		// fetch 不支持内建超时，这里手动封装
		const controller = new AbortController();
		const timer = setTimeout(() => controller.abort(), this.timeout);
		config.signal = controller.signal;

		try {
			const response = await fetch(this.baseURL + url, config);
			clearTimeout(timer);

			// 响应拦截
			if (!response.ok) {
				console.error("响应错误:", response.status, response.statusText);
				switch (response.status) {
					case 404:
						// 资源不存在处理
						break;
					case 500:
						// 服务端错误处理
						break;
				}
				throw new Error(`HTTP错误: ${response.status}`);
			}

			// 返回 JSON 数据
			return await response;
		} catch (error) {
			console.error("请求错误:", error);
			throw error;
		}
	}

	getProtocolList() {
		return this.request("/protocols");
	}

	getProtocol(protocol: string) {
		return this.request(`/protocol/${protocol}`);
	}
}

export default new HttpClientModule();
