import type { ApiInterface, ApiModuleImpl } from "../index.js"


interface messageType {
	type: "error" | "success" | "warning";
	message: string;
	location: "center" | "left" | "right" | "normal";
}
interface messageEvent {
	type: messageType["type"];
	message: string;
	location?: messageType["location"];
	duration?: number; // 可选：自动关闭时长
}



class MessageModule implements ApiModuleImpl {

	private api: ApiInterface | null = null;

	init(apiInstance: ApiInterface) {
		this.api = apiInstance;
	}

	globalMessageNotice(data: messageEvent) {
		this.api?.eventBus.emit('message:notice', data)
	}

	globalMessageReception(payload: Function) {
		this.api?.eventBus.on("message:notice", (e: messageEvent) => { payload(e) })
	}
}

export type {
	messageType,
	messageEvent
}

export default new MessageModule();
