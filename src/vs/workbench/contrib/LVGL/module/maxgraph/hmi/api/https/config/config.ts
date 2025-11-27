import axios from "../../../../../../lib/axios/index.js";

export const https = {
	baseURL: "http://win-20240531qrt:3000"
}


const instance = axios.create({
	baseURL: https.baseURL,
	timeout: 3000,
	headers: {
		'Content-Type': "application/json;charset=utf-8"
	}
})

instance.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		console.error('请求配置错误：', error);
		return Promise.reject(error)
	}
)

instance.interceptors.response.use(
	(response) => {
		return response
	},
	(error) => {
		// console.error('响应错误：', error);

		// if (error.response) {
		//     console.log(error.response)
		// }

		return Promise.reject(error);
	}
)


export default instance;

