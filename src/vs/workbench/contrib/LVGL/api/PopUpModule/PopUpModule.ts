import type { ApiInterface, ApiModuleImpl } from "../index.js"

interface popUpApiType {
	used: boolean,
	[key: string]: any,
}

const controlVariablePopUpEventBus = "controlVariablePopUp";
const rightClickMenuBarEventBus = "rightClickMenuBarEventBus";

type resourcesType = typeof controlVariablePopUpEventBus | typeof rightClickMenuBarEventBus;


class PopUpModule implements ApiModuleImpl {

	private api: ApiInterface | null = null;

	// private popUpMap = new Map<string, popUpApiType>([])
	// 初始化Map时，默认资源未锁定
	private popUpMap = new Map<string, popUpApiType>([
		[controlVariablePopUpEventBus, { used: false, isLocked: false, isPublic: true }],
		[rightClickMenuBarEventBus, { used: false, isLocked: false, isPublic: true }]
	]);


	init(apiInstance: ApiInterface) {
		this.api = apiInstance;
	}

	registerPopUp(key: string, value: Partial<popUpApiType>, isPublic = true,) {
		const result = value;
		result['used'] ??= false;
		result['isLocked'] ??= false;
		/**
		 * 默认为公共资源不会进行锁判定 isPublic = true;
		 */
		result['isPublic'] = isPublic,
			// 注册时默认初始化锁定状态
			this.popUpMap.set(key, result);
	}

	getPopUp(key: string) {
		return this.popUpMap.get(key);
	}

	updatePopUp(key: string, value: any) {
		this.popUpMap.set(key, value)
	}

	/**
	 * 申请资源并锁定
	 * @param resourcesId 资源ID
	 * @returns 资源实例（锁定成功）或null（锁定失败，资源已被占用）
	 */
	applyResources(resourcesId: resourcesType): popUpApiType | null {
		const resource = this.popUpMap.get(resourcesId);
		if (!resource) {
			console.warn(`资源 ${resourcesId} 不存在`);
			return null;
		}
		if (resource.isPublic) {
			return resource;
		}

		// 如果资源已锁定，返回null表示申请失败
		if (resource.isLocked) {
			console.warn(`资源 ${resourcesId} 已被锁定，无法重复申请`);
			return null;
		}

		// 锁定资源
		resource.isLocked = true;
		this.popUpMap.set(resourcesId, resource);
		console.log(`资源 ${resourcesId} 已锁定`);
		return resource;
	}

	/**
	 * 释放资源锁定
	 * @param resourcesId 资源ID
	 * @returns 是否释放成功
	 */
	releaseResources(resourcesId: resourcesType): boolean {
		const resource = this.popUpMap.get(resourcesId);
		if (!resource) {
			console.warn(`资源 ${resourcesId} 不存在`);
			return false;
		}

		// 如果资源未锁定，无需释放
		if (!resource.isLocked) {
			console.warn(`资源 ${resourcesId} 未被锁定，无需释放`);
			return false;
		}

		// 释放锁定
		resource.isLocked = false;
		this.popUpMap.set(resourcesId, resource);
		console.log(`资源 ${resourcesId} 已释放锁定`);
		return true;
	}
}

export default new PopUpModule();

export {
	controlVariablePopUpEventBus,
	rightClickMenuBarEventBus,
}
