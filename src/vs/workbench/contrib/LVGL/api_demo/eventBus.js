// VSCode runtime 全局可见
if (!globalThis.__EVENT_BUS__) {
	globalThis.__EVENT_BUS__ = new EventTarget();
}

globalThis.emit = function (name, payload) {
	globalThis.__EVENT_BUS__.dispatchEvent(
		new CustomEvent(name, { detail: payload })
	);
};

globalThis.onEvent = function (name, handler) {
	const fn = (e) => handler(e.detail, e);
	globalThis.__EVENT_BUS__.addEventListener(name, fn);
	return () => globalThis.__EVENT_BUS__.removeEventListener(name, fn);
};
