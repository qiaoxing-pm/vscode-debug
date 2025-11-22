function _typeof(n) {
	"@babel/helpers - typeof";
	return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, _typeof(n);
}
function toPrimitive(n, r) {
	if (_typeof(n) != "object" || !n) return n;
	var i = n[Symbol.toPrimitive];
	if (i !== void 0) {
		var a = i.call(n, r || "default");
		if (_typeof(a) != "object") return a;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (r === "string" ? String : Number)(n);
}
function toPropertyKey(r) {
	var i = toPrimitive(r, "string");
	return _typeof(i) == "symbol" ? i : i + "";
}
function _defineProperty(e, n, i) {
	return (n = toPropertyKey(n)) in e ? Object.defineProperty(e, n, {
		value: i,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[n] = i, e;
}
function ownKeys(e, n) {
	var r = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var i = Object.getOwnPropertySymbols(e);
		n && (i = i.filter(function(n) {
			return Object.getOwnPropertyDescriptor(e, n).enumerable;
		})), r.push.apply(r, i);
	}
	return r;
}
function _objectSpread2(e) {
	for (var n = 1; n < arguments.length; n++) {
		var r = arguments[n] == null ? {} : arguments[n];
		n % 2 ? ownKeys(Object(r), !0).forEach(function(n) {
			_defineProperty(e, n, r[n]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function(n) {
			Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
		});
	}
	return e;
}
export { _defineProperty as n, _objectSpread2 as t };
