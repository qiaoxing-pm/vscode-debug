import eventBusModule from "./EventBusModule/index.js";
import constant from "./constant/index.js";
import { cacheMap } from "./cache/cache.js";
import MessageModule from "./MessageModule/index.js";

export interface ApiInterface {
	eventBus: typeof eventBusModule;
	constant: typeof constant;
	cacheMap: typeof cacheMap;
	message: typeof MessageModule;
}

export type ApiModuleImpl = {
	init: (api: ApiInterface) => void;
};

class Api implements ApiInterface {
	eventBus: typeof eventBusModule = eventBusModule;
	constant: typeof constant = constant;
	cacheMap: typeof cacheMap = cacheMap;
	message: typeof MessageModule = MessageModule;

	init() {
		// 初始化所有模块（如绑定全局事件、加载配置等）
		Object.values(this).forEach((module: ApiModuleImpl) => {
			if (typeof module.init === "function") {
				module.init(this); // 传入api实例，让模块能访问其他模块
			}
		});
	}
}

const api = new Api();
api.init();
export default api;
