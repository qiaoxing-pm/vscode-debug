// 事件回调函数类型：接收事件参数，无返回值
type EventCallback<T = any> = (params: T) => void;

// 事件标识类型：支持字符串或symbol（避免命名冲突）
type EventKey = string | symbol;

// 事件注册表类型：键为事件标识，值为回调函数数组
type EventRegistry = Map<EventKey, EventCallback[]>;

export { type EventCallback, type EventKey, type EventRegistry };
