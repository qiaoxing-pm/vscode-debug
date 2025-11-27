type EventCallback<T = any> = (payload: T) => void;

/**
 * 事件总线类
 * 提供类型安全的事件订阅、发布和管理功能
 * 支持移动相关事件的特殊处理
 */
class EventBusModule {
    /**
     * 存储事件订阅者的映射表
     * key: 事件名称
     * value: 该事件对应的回调函数集合
     */
    private subscribers: Map<string, Set<EventCallback>> = new Map();

    private subscribersAndValue: Map<string, any> = new Map();

    /**
     * 当前移动状态对象
     * 在移动开始时设置，移动结束时清空
     */
    private currentMove: any | null = null;

    /**
     * 订阅指定事件
     * @param eventName 事件名称
     * @param callback 事件触发时执行的回调函数
     */
    on<T = any>(eventName: string | Array<string>, callback: EventCallback<T>): void {
        if (typeof eventName === 'string') {
            if (!this.subscribers.has(eventName)) {
                this.subscribers.set(eventName, new Set());
            }
            this.subscribers.get(eventName)!.add(callback);
        } else {
            for (const eventNameItem of eventName) {
                if (!this.subscribers.has(eventNameItem)) {
                    this.subscribers.set(eventNameItem, new Set());
                }
                this.subscribers.get(eventNameItem)!.add(callback);
            }
        }
    }

    /**
     * 取消订阅指定事件
     * @param eventName 事件名称
     * @param callback 要移除的回调函数
     */
    off<T = any>(eventName: string, callback: EventCallback<T>): void {
        const callbacks = this.subscribers.get(eventName);
        if (callbacks) {
            callbacks.delete(callback);
            // 如果事件没有订阅者了，移除该事件条目
            if (callbacks.size === 0) {
                this.subscribers.delete(eventName);
            }
        }
    }

    /**
     * 发布事件并触发所有订阅者的回调
     * @param eventName 事件名称
     * @param payload 事件携带的数据
     * @param destroy 是否在发布后销毁当前移动状态
     */
    emit<T = any>(eventName: string, payload: T, destroy: boolean = false): void {

        // 如果指定了销毁，强制清除当前移动状态
        if (destroy) {
            this.currentMove = null;
        }
        this.subscribersAndValue.set(eventName, payload);

        // 触发所有订阅者的回调
        this.subscribers.get(eventName)?.forEach(callback => {
            try {
                queueMicrotask(() => {
                    callback(payload);
                })
            } catch (error) {
                console.error(`EventBus: Error executing callback for event "${eventName}":`, error);
            }
        });
    }

    /**
     * 取消所有事件的所有订阅
     * @param eventName 可选，指定事件名称，只清除该事件的订阅
     */
    clear(eventName?: string): void {
        if (eventName) {
            this.subscribers.delete(eventName);
        } else {
            this.subscribers.clear();
            this.currentMove = null;
        }
    }

    /**
     * 获取当前移动状态
     * @returns 当前移动状态对象或null
     */
    getCurrentMove(): any | null {
        return this.currentMove;
    }

    /**
     * 获取指定事件的订阅者数量
     * @param eventName 事件名称
     * @returns 订阅者数量
     */
    getSubscriberCount(eventName: string): number {
        return this.subscribers.get(eventName)?.size || 0;
    }

    /**
     * 获取事件派发时的数据，应用场景：存在向订阅者通知，但是订阅者未渲染的情况
     * @param eventname 事件派发的标识
     * @returns 
     */
    getSubscriberValue(eventname: string) {
        return this.subscribersAndValue.get(eventname)
    }
}

/**
 * 导出事件总线单例实例
 * 确保应用中全局使用同一个事件总线实例
 */
export default new EventBusModule();
