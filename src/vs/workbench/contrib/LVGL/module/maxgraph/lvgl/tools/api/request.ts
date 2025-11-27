import axios, { type AxiosRequestConfig, type AxiosResponse } from '../../../../../lib/axios/index.js';
import api from '../../../../../api/index.js';
export const baseURL = api.https.baseUrl;

const server = axios.create({
	baseURL,
	timeout: 30000, // 30 seconds
	headers: {
		'Content-Type': 'application/json',
	},
})
/**
 * 通用请求函数
 * @param url 请求地址
 * @param config Axios 配置（method, headers, data, params 等）
 * @returns 返回 AxiosResponse.data
 */
export async function request<T = any>(
	url: string,
	config: AxiosRequestConfig = {}
): Promise<T> {
	try {
		const response: AxiosResponse<T> = await axios({
			url,
			...config,
		});

		// 统一判断 2xx 成功
		if (response.status >= 200 && response.status < 300) {
			return response.data;
		} else {
			throw new Error(
				`Request failed: ${response.status} ${response.statusText}`
			);
		}
	} catch (error: any) {
		if (error.response) {
			// 服务端返回了错误响应
			console.error(
				"Server Error:",
				error.response.status,
				error.response.data
			);
			throw new Error(
				`Server Error: ${error.response.status} ${JSON.stringify(
					error.response.data
				)}`
			);
		} else if (error.request) {
			// 请求发出但无响应
			console.error("No response from server:", error.request);
			throw new Error("No response from server");
		} else {
			// 其它错误（配置错误等）
			console.error("Request Error:", error.message);
			throw error;
		}
	}
}
export default server;
/*
// 请求拦截器
service.interceptors.request.use(
		config => {
				// 可以在这里统一添加 token
				const token = localStorage.getItem('token');
				if (token) {
						config.headers.Authorization = `Bearer ${token}`;
				}
				console.log('发起请求:', config);
				return config;
		},
		error => {
				console.error('请求错误:', error);
				return Promise.reject(error);
		}
);
// 响应拦截器
service.interceptors.response.use(
		response => {
				console.log('响应数据:', response);
				// 可以在这里统一做错误处理
				if (response.data && response.data.code !== 0) {
						console.warn('API 返回异常:', response.data.message);
				}
				return response.data;
		},
		error => {
				console.error('响应错误:', error);
				return Promise.reject(error);
		}
);
 */
