import { t as _objectSpread2 } from "./objectSpread2-b6TJfdPE.js";
function t(io, Pc) {
	(Pc == null || Pc > io.length) && (Pc = io.length);
	for (var Fc = 0, Ic = Array(Pc); Fc < Pc; Fc++) Ic[Fc] = io[Fc];
	return Ic;
}
function e(io) {
	if (io === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return io;
}
function i(io, Pc) {
	if (!(io instanceof Pc)) throw TypeError("Cannot call a class as a function");
}
function a(io, Pc) {
	for (var Fc = 0; Fc < Pc.length; Fc++) {
		var Ic = Pc[Fc];
		Ic.enumerable = Ic.enumerable || !1, Ic.configurable = !0, "value" in Ic && (Ic.writable = !0), Object.defineProperty(io, x(Ic.key), Ic);
	}
}
function s(io, Pc, Fc) {
	return Pc && a(io.prototype, Pc), Fc && a(io, Fc), Object.defineProperty(io, "prototype", { writable: !1 }), io;
}
function r(io, Pc) {
	var Fc = typeof Symbol < "u" && io[Symbol.iterator] || io["@@iterator"];
	if (!Fc) {
		if (Array.isArray(io) || (Fc = m(io)) || Pc && io && typeof io.length == "number") {
			Fc && (io = Fc);
			var Ic = 0, Lc = function() {};
			return {
				s: Lc,
				n: function() {
					return Ic >= io.length ? { done: !0 } : {
						done: !1,
						value: io[Ic++]
					};
				},
				e: function(io) {
					throw io;
				},
				f: Lc
			};
		}
		throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	var Rc, zc = !0, Bc = !1;
	return {
		s: function() {
			Fc = Fc.call(io);
		},
		n: function() {
			var io = Fc.next();
			return zc = io.done, io;
		},
		e: function(io) {
			Bc = !0, Rc = io;
		},
		f: function() {
			try {
				zc || Fc.return == null || Fc.return();
			} finally {
				if (Bc) throw Rc;
			}
		}
	};
}
function n(io) {
	var Pc = c();
	return function() {
		var Ic, Lc = l(io);
		if (Pc) {
			var Rc = l(this).constructor;
			Ic = Reflect.construct(Lc, arguments, Rc);
		} else Ic = Lc.apply(this, arguments);
		return function(io, Pc) {
			if (Pc && (typeof Pc == "object" || typeof Pc == "function")) return Pc;
			if (Pc !== void 0) throw TypeError("Derived constructors may only return object or undefined");
			return e(io);
		}(this, Ic);
	};
}
function o(io, Pc, Fc) {
	return (Pc = x(Pc)) in io ? Object.defineProperty(io, Pc, {
		value: Fc,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : io[Pc] = Fc, io;
}
function l(io) {
	return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(io) {
		return io.__proto__ || Object.getPrototypeOf(io);
	}, l(io);
}
function h(io, Pc) {
	if (typeof Pc != "function" && Pc !== null) throw TypeError("Super expression must either be null or a function");
	io.prototype = Object.create(Pc && Pc.prototype, { constructor: {
		value: io,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(io, "prototype", { writable: !1 }), Pc && g(io, Pc);
}
function c() {
	try {
		var io = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
	} catch (io) {}
	return (c = function() {
		return !!io;
	})();
}
function d(io, Pc) {
	var Fc = Object.keys(io);
	if (Object.getOwnPropertySymbols) {
		var Ic = Object.getOwnPropertySymbols(io);
		Pc && (Ic = Ic.filter((function(Pc) {
			return Object.getOwnPropertyDescriptor(io, Pc).enumerable;
		}))), Fc.push.apply(Fc, Ic);
	}
	return Fc;
}
function u(io) {
	for (var Pc = 1; Pc < arguments.length; Pc++) {
		var Fc = arguments[Pc] == null ? {} : arguments[Pc];
		Pc % 2 ? d(Object(Fc), !0).forEach((function(Pc) {
			o(io, Pc, Fc[Pc]);
		})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(io, Object.getOwnPropertyDescriptors(Fc)) : d(Object(Fc)).forEach((function(Pc) {
			Object.defineProperty(io, Pc, Object.getOwnPropertyDescriptor(Fc, Pc));
		}));
	}
	return io;
}
function g(io, Pc) {
	return g = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(io, Pc) {
		return io.__proto__ = Pc, io;
	}, g(io, Pc);
}
function p(io, Pc) {
	return function(io) {
		if (Array.isArray(io)) return io;
	}(io) || function(io, Pc) {
		var Fc = io == null ? null : typeof Symbol < "u" && io[Symbol.iterator] || io["@@iterator"];
		if (Fc != null) {
			var Ic, Lc, Rc, zc, Bc = [], Vc = !0, Hc = !1;
			try {
				if (Rc = (Fc = Fc.call(io)).next, Pc === 0) {
					if (Object(Fc) !== Fc) return;
					Vc = !1;
				} else for (; !(Vc = (Ic = Rc.call(Fc)).done) && (Bc.push(Ic.value), Bc.length !== Pc); Vc = !0);
			} catch (io) {
				Hc = !0, Lc = io;
			} finally {
				try {
					if (!Vc && Fc.return != null && (zc = Fc.return(), Object(zc) !== zc)) return;
				} finally {
					if (Hc) throw Lc;
				}
			}
			return Bc;
		}
	}(io, Pc) || m(io, Pc) || function() {
		throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}();
}
function f(io) {
	return function(io) {
		if (Array.isArray(io)) return t(io);
	}(io) || function(io) {
		if (typeof Symbol < "u" && io[Symbol.iterator] != null || io["@@iterator"] != null) return Array.from(io);
	}(io) || m(io) || function() {
		throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}();
}
function x(io) {
	var Pc = function(io, Pc) {
		if (typeof io != "object" || !io) return io;
		var Fc = io[Symbol.toPrimitive];
		if (Fc !== void 0) {
			var Ic = Fc.call(io, Pc || "default");
			if (typeof Ic != "object") return Ic;
			throw TypeError("@@toPrimitive must return a primitive value.");
		}
		return (Pc === "string" ? String : Number)(io);
	}(io, "string");
	return typeof Pc == "symbol" ? Pc : Pc + "";
}
function b(io) {
	return b = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(io) {
		return typeof io;
	} : function(io) {
		return io && typeof Symbol == "function" && io.constructor === Symbol && io !== Symbol.prototype ? "symbol" : typeof io;
	}, b(io);
}
function m(io, Fc) {
	if (io) {
		if (typeof io == "string") return t(io, Fc);
		var Ic = {}.toString.call(io).slice(8, -1);
		return Ic === "Object" && io.constructor && (Ic = io.constructor.name), Ic === "Map" || Ic === "Set" ? Array.from(io) : Ic === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ic) ? t(io, Fc) : void 0;
	}
}
var v = function() {
	function io() {
		i(this, io);
	}
	return s(io, [
		{
			key: "shadeRGBColor",
			value: function(io, Pc) {
				var Fc = Pc.split(","), Ic = io < 0 ? 0 : 255, Lc = io < 0 ? -1 * io : io, Rc = parseInt(Fc[0].slice(4), 10), zc = parseInt(Fc[1], 10), Bc = parseInt(Fc[2], 10);
				return "rgb(" + (Math.round((Ic - Rc) * Lc) + Rc) + "," + (Math.round((Ic - zc) * Lc) + zc) + "," + (Math.round((Ic - Bc) * Lc) + Bc) + ")";
			}
		},
		{
			key: "shadeHexColor",
			value: function(io, Pc) {
				var Fc = parseInt(Pc.slice(1), 16), Ic = io < 0 ? 0 : 255, Lc = io < 0 ? -1 * io : io, Rc = Fc >> 16, zc = Fc >> 8 & 255, Bc = 255 & Fc;
				return "#" + (16777216 + 65536 * (Math.round((Ic - Rc) * Lc) + Rc) + 256 * (Math.round((Ic - zc) * Lc) + zc) + (Math.round((Ic - Bc) * Lc) + Bc)).toString(16).slice(1);
			}
		},
		{
			key: "shadeColor",
			value: function(Pc, Fc) {
				return io.isColorHex(Fc) ? this.shadeHexColor(Pc, Fc) : this.shadeRGBColor(Pc, Fc);
			}
		}
	], [
		{
			key: "bind",
			value: function(io, Pc) {
				return function() {
					return io.apply(Pc, arguments);
				};
			}
		},
		{
			key: "isObject",
			value: function(io) {
				return io && b(io) === "object" && !Array.isArray(io) && io != null;
			}
		},
		{
			key: "is",
			value: function(io, Pc) {
				return Object.prototype.toString.call(Pc) === "[object " + io + "]";
			}
		},
		{
			key: "isSafari",
			value: function() {
				return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
			}
		},
		{
			key: "listToArray",
			value: function(io) {
				var Pc, Fc = [];
				for (Pc = 0; Pc < io.length; Pc++) Fc[Pc] = io[Pc];
				return Fc;
			}
		},
		{
			key: "extend",
			value: function(io, Pc) {
				var Fc = this;
				typeof Object.assign != "function" && (Object.assign = function(io) {
					if (io == null) throw TypeError("Cannot convert undefined or null to object");
					for (var Pc = Object(io), Fc = 1; Fc < arguments.length; Fc++) {
						var Ic = arguments[Fc];
						if (Ic != null) for (var Lc in Ic) Ic.hasOwnProperty(Lc) && (Pc[Lc] = Ic[Lc]);
					}
					return Pc;
				});
				var Ic = Object.assign({}, io);
				return this.isObject(io) && this.isObject(Pc) && Object.keys(Pc).forEach((function(Lc) {
					Fc.isObject(Pc[Lc]) && Lc in io ? Ic[Lc] = Fc.extend(io[Lc], Pc[Lc]) : Object.assign(Ic, o({}, Lc, Pc[Lc]));
				})), Ic;
			}
		},
		{
			key: "extendArray",
			value: function(Pc, Fc) {
				var Ic = [];
				return Pc.map((function(Pc) {
					Ic.push(io.extend(Fc, Pc));
				})), Pc = Ic;
			}
		},
		{
			key: "monthMod",
			value: function(io) {
				return io % 12;
			}
		},
		{
			key: "clone",
			value: function(io) {
				var Pc, Fc = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new WeakMap();
				if (io === null || b(io) !== "object") return io;
				if (Fc.has(io)) return Fc.get(io);
				if (Array.isArray(io)) {
					Pc = [], Fc.set(io, Pc);
					for (var Ic = 0; Ic < io.length; Ic++) Pc[Ic] = this.clone(io[Ic], Fc);
				} else if (io instanceof Date) Pc = new Date(io.getTime());
				else for (var Lc in Pc = {}, Fc.set(io, Pc), io) io.hasOwnProperty(Lc) && (Pc[Lc] = this.clone(io[Lc], Fc));
				return Pc;
			}
		},
		{
			key: "log10",
			value: function(io) {
				return Math.log(io) / Math.LN10;
			}
		},
		{
			key: "roundToBase10",
			value: function(io) {
				return Math.pow(10, Math.floor(Math.log10(io)));
			}
		},
		{
			key: "roundToBase",
			value: function(io, Pc) {
				return Math.pow(Pc, Math.floor(Math.log(io) / Math.log(Pc)));
			}
		},
		{
			key: "parseNumber",
			value: function(io) {
				return io === null ? io : parseFloat(io);
			}
		},
		{
			key: "stripNumber",
			value: function(io) {
				var Pc = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
				return Number.isInteger(io) ? io : parseFloat(io.toPrecision(Pc));
			}
		},
		{
			key: "randomId",
			value: function() {
				return (Math.random() + 1).toString(36).substring(4);
			}
		},
		{
			key: "noExponents",
			value: function(io) {
				return io.toString().includes("e") ? Math.round(io) : io;
			}
		},
		{
			key: "elementExists",
			value: function(io) {
				return !(!io || !io.isConnected);
			}
		},
		{
			key: "getDimensions",
			value: function(io) {
				var Pc = getComputedStyle(io, null), Fc = io.clientHeight, Ic = io.clientWidth;
				return Fc -= parseFloat(Pc.paddingTop) + parseFloat(Pc.paddingBottom), [Ic -= parseFloat(Pc.paddingLeft) + parseFloat(Pc.paddingRight), Fc];
			}
		},
		{
			key: "getBoundingClientRect",
			value: function(io) {
				var Pc = io.getBoundingClientRect();
				return {
					top: Pc.top,
					right: Pc.right,
					bottom: Pc.bottom,
					left: Pc.left,
					width: io.clientWidth,
					height: io.clientHeight,
					x: Pc.left,
					y: Pc.top
				};
			}
		},
		{
			key: "getLargestStringFromArr",
			value: function(io) {
				return io.reduce((function(io, Pc) {
					return Array.isArray(Pc) && (Pc = Pc.reduce((function(io, Pc) {
						return io.length > Pc.length ? io : Pc;
					}))), io.length > Pc.length ? io : Pc;
				}), 0);
			}
		},
		{
			key: "hexToRgba",
			value: function() {
				var io = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "#999999", Pc = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : .6;
				io.substring(0, 1) !== "#" && (io = "#999999");
				var Fc = io.replace("#", "");
				Fc = Fc.match(RegExp("(.{" + Fc.length / 3 + "})", "g"));
				for (var Ic = 0; Ic < Fc.length; Ic++) Fc[Ic] = parseInt(Fc[Ic].length === 1 ? Fc[Ic] + Fc[Ic] : Fc[Ic], 16);
				return Pc !== void 0 && Fc.push(Pc), "rgba(" + Fc.join(",") + ")";
			}
		},
		{
			key: "getOpacityFromRGBA",
			value: function(io) {
				return parseFloat(io.replace(/^.*,(.+)\)/, "$1"));
			}
		},
		{
			key: "rgb2hex",
			value: function(io) {
				return (io = io.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && io.length === 4 ? "#" + ("0" + parseInt(io[1], 10).toString(16)).slice(-2) + ("0" + parseInt(io[2], 10).toString(16)).slice(-2) + ("0" + parseInt(io[3], 10).toString(16)).slice(-2) : "";
			}
		},
		{
			key: "isColorHex",
			value: function(io) {
				return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{8}$)/i.test(io);
			}
		},
		{
			key: "getPolygonPos",
			value: function(io, Pc) {
				for (var Fc = [], Ic = 2 * Math.PI / Pc, Lc = 0; Lc < Pc; Lc++) {
					var Rc = {};
					Rc.x = io * Math.sin(Lc * Ic), Rc.y = -io * Math.cos(Lc * Ic), Fc.push(Rc);
				}
				return Fc;
			}
		},
		{
			key: "polarToCartesian",
			value: function(io, Pc, Fc, Ic) {
				var Lc = (Ic - 90) * Math.PI / 180;
				return {
					x: io + Fc * Math.cos(Lc),
					y: Pc + Fc * Math.sin(Lc)
				};
			}
		},
		{
			key: "escapeString",
			value: function(io) {
				var Pc = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "x", Fc = io.toString().slice();
				return Fc = Fc.replace(/[` ~!@#$%^&*()|+\=?;:'",.<>{}[\]\\/]/gi, Pc);
			}
		},
		{
			key: "negToZero",
			value: function(io) {
				return io < 0 ? 0 : io;
			}
		},
		{
			key: "moveIndexInArray",
			value: function(io, Pc, Fc) {
				if (Fc >= io.length) for (var Ic = Fc - io.length + 1; Ic--;) io.push(void 0);
				return io.splice(Fc, 0, io.splice(Pc, 1)[0]), io;
			}
		},
		{
			key: "extractNumber",
			value: function(io) {
				return parseFloat(io.replace(/[^\d.]*/g, ""));
			}
		},
		{
			key: "findAncestor",
			value: function(io, Pc) {
				for (; (io = io.parentElement) && !io.classList.contains(Pc););
				return io;
			}
		},
		{
			key: "setELstyles",
			value: function(io, Pc) {
				for (var Fc in Pc) Pc.hasOwnProperty(Fc) && (io.style.key = Pc[Fc]);
			}
		},
		{
			key: "preciseAddition",
			value: function(io, Pc) {
				var Fc = (String(io).split(".")[1] || "").length, Ic = (String(Pc).split(".")[1] || "").length, Lc = Math.pow(10, Math.max(Fc, Ic));
				return (Math.round(io * Lc) + Math.round(Pc * Lc)) / Lc;
			}
		},
		{
			key: "isNumber",
			value: function(io) {
				return !isNaN(io) && parseFloat(Number(io)) === io && !isNaN(parseInt(io, 10));
			}
		},
		{
			key: "isFloat",
			value: function(io) {
				return Number(io) === io && io % 1 != 0;
			}
		},
		{
			key: "isMsEdge",
			value: function() {
				var io = window.navigator.userAgent, Pc = io.indexOf("Edge/");
				return Pc > 0 && parseInt(io.substring(Pc + 5, io.indexOf(".", Pc)), 10);
			}
		},
		{
			key: "getGCD",
			value: function(io, Pc) {
				var Fc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 7, Ic = Math.pow(10, Fc - Math.floor(Math.log10(Math.max(io, Pc))));
				for (io = Math.round(Math.abs(io) * Ic), Pc = Math.round(Math.abs(Pc) * Ic); Pc;) {
					var Lc = Pc;
					Pc = io % Pc, io = Lc;
				}
				return io / Ic;
			}
		},
		{
			key: "getPrimeFactors",
			value: function(io) {
				for (var Pc = [], Fc = 2; io >= 2;) io % Fc == 0 ? (Pc.push(Fc), io /= Fc) : Fc++;
				return Pc;
			}
		},
		{
			key: "mod",
			value: function(io, Pc) {
				var Fc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 7, Ic = Math.pow(10, Fc - Math.floor(Math.log10(Math.max(io, Pc))));
				return (io = Math.round(Math.abs(io) * Ic)) % (Pc = Math.round(Math.abs(Pc) * Ic)) / Ic;
			}
		}
	]), io;
}(), y = function() {
	function io(Pc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w;
	}
	return s(io, [
		{
			key: "animateLine",
			value: function(io, Pc, Fc, Ic) {
				io.attr(Pc).animate(Ic).attr(Fc);
			}
		},
		{
			key: "animateMarker",
			value: function(io, Pc, Fc, Ic) {
				io.attr({ opacity: 0 }).animate(Pc).attr({ opacity: 1 }).after((function() {
					Ic();
				}));
			}
		},
		{
			key: "animateRect",
			value: function(io, Pc, Fc, Ic, Lc) {
				io.attr(Pc).animate(Ic).attr(Fc).after((function() {
					return Lc();
				}));
			}
		},
		{
			key: "animatePathsGradually",
			value: function(io) {
				var Pc = io.el, Fc = io.realIndex, Ic = io.j, Lc = io.fill, Rc = io.pathFrom, zc = io.pathTo, Bc = io.speed, Vc = io.delay, Hc = this.w, Uc = 0;
				Hc.config.chart.animations.animateGradually.enabled && (Uc = Hc.config.chart.animations.animateGradually.delay), Hc.config.chart.animations.dynamicAnimation.enabled && Hc.globals.dataChanged && Hc.config.chart.type !== "bar" && (Uc = 0), this.morphSVG(Pc, Fc, Ic, Hc.config.chart.type !== "line" || Hc.globals.comboCharts ? Lc : "stroke", Rc, zc, Bc, Vc * Uc);
			}
		},
		{
			key: "showDelayedElements",
			value: function() {
				this.w.globals.delayedElements.forEach((function(io) {
					var Pc = io.el;
					Pc.classList.remove("apexcharts-element-hidden"), Pc.classList.add("apexcharts-hidden-element-shown");
				}));
			}
		},
		{
			key: "animationCompleted",
			value: function(io) {
				var Pc = this.w;
				Pc.globals.animationEnded || (Pc.globals.animationEnded = !0, this.showDelayedElements(), typeof Pc.config.chart.events.animationEnd == "function" && Pc.config.chart.events.animationEnd(this.ctx, {
					el: io,
					w: Pc
				}));
			}
		},
		{
			key: "morphSVG",
			value: function(io, Pc, Fc, Ic, Lc, Rc, zc, Bc) {
				var Vc = this, Hc = this.w;
				Lc || (Lc = io.attr("pathFrom")), Rc || (Rc = io.attr("pathTo"));
				var Uc = function(io) {
					return Hc.config.chart.type === "radar" && (zc = 1), `M 0 ${Hc.globals.gridHeight}`;
				};
				(!Lc || Lc.indexOf("undefined") > -1 || Lc.indexOf("NaN") > -1) && (Lc = Uc()), (!Rc.trim() || Rc.indexOf("undefined") > -1 || Rc.indexOf("NaN") > -1) && (Rc = Uc()), Hc.globals.shouldAnimate || (zc = 1), io.plot(Lc).animate(1, Bc).plot(Lc).animate(zc, Bc).plot(Rc).after((function() {
					v.isNumber(Fc) ? Fc === Hc.globals.series[Hc.globals.maxValsInArrayIndex].length - 2 && Hc.globals.shouldAnimate && Vc.animationCompleted(io) : Ic !== "none" && Hc.globals.shouldAnimate && (!Hc.globals.comboCharts && Pc === Hc.globals.series.length - 1 || Hc.globals.comboCharts) && Vc.animationCompleted(io), Vc.showDelayedElements();
				}));
			}
		}
	]), io;
}(), w = {}, k = [];
function A(io, Pc) {
	if (Array.isArray(io)) for (let Fc of io) A(Fc, Pc);
	else if (typeof io != "object") S(Object.getOwnPropertyNames(Pc)), w[io] = Object.assign(w[io] || {}, Pc);
	else for (let Pc in io) A(Pc, io[Pc]);
}
function C(io) {
	return w[io] || {};
}
function S(io) {
	k.push(...io);
}
function L(io, Pc) {
	let Fc, Ic = io.length, Lc = [];
	for (Fc = 0; Fc < Ic; Fc++) Lc.push(Pc(io[Fc]));
	return Lc;
}
function M(io) {
	return io % 360 * Math.PI / 180;
}
function P(io) {
	return io.charAt(0).toUpperCase() + io.slice(1);
}
function I(io, Pc, Fc, Ic) {
	return Pc != null && Fc != null || (Ic = Ic || io.bbox(), Pc == null ? Pc = Ic.width / Ic.height * Fc : Fc ??= Ic.height / Ic.width * Pc), {
		width: Pc,
		height: Fc
	};
}
function T(io, Pc) {
	let Fc = io.origin, Ic = io.ox == null ? io.originX == null ? "center" : io.originX : io.ox, Lc = io.oy == null ? io.originY == null ? "center" : io.originY : io.oy;
	Fc != null && ([Ic, Lc] = Array.isArray(Fc) ? Fc : typeof Fc == "object" ? [Fc.x, Fc.y] : [Fc, Fc]);
	let Rc = typeof Ic == "string", zc = typeof Lc == "string";
	if (Rc || zc) {
		let { height: io, width: Fc, x: Bc, y: Vc } = Pc.bbox();
		Rc && (Ic = Ic.includes("left") ? Bc : Ic.includes("right") ? Bc + Fc : Bc + Fc / 2), zc && (Lc = Lc.includes("top") ? Vc : Lc.includes("bottom") ? Vc + io : Vc + io / 2);
	}
	return [Ic, Lc];
}
var z = new Set([
	"desc",
	"metadata",
	"title"
]), X = (io) => z.has(io.nodeName), R = (Pc, Fc, Ic = {}) => {
	let Lc = _objectSpread2({}, Fc);
	for (let io in Lc) Lc[io].valueOf() === Ic[io] && delete Lc[io];
	Object.keys(Lc).length ? Pc.node.setAttribute("data-svgjs", JSON.stringify(Lc)) : (Pc.node.removeAttribute("data-svgjs"), Pc.node.removeAttribute("svgjs:data"));
}, E = "http://www.w3.org/2000/svg", Y = "http://www.w3.org/2000/xmlns/", H = "http://www.w3.org/1999/xlink", O = {
	window: typeof window > "u" ? null : window,
	document: typeof document > "u" ? null : document
};
function F() {
	return O.window;
}
var D = class {}, _ = {}, N = "___SYMBOL___ROOT___";
function W(io, Pc = E) {
	return O.document.createElementNS(Pc, io);
}
function B(io, Pc = !1) {
	if (io instanceof D) return io;
	if (typeof io == "object") return U(io);
	if (io == null) return new _[N]();
	if (typeof io == "string" && io.charAt(0) !== "<") return U(O.document.querySelector(io));
	let Fc = Pc ? O.document.createElement("div") : W("svg");
	return Fc.innerHTML = io, io = U(Fc.firstChild), Fc.removeChild(Fc.firstChild), io;
}
function G(io, Pc) {
	return Pc && (Pc instanceof O.window.Node || Pc.ownerDocument && Pc instanceof Pc.ownerDocument.defaultView.Node) ? Pc : W(io);
}
function V(io) {
	if (!io) return null;
	if (io.instance instanceof D) return io.instance;
	if (io.nodeName === "#document-fragment") return new _.Fragment(io);
	let Pc = P(io.nodeName || "Dom");
	return Pc === "LinearGradient" || Pc === "RadialGradient" ? Pc = "Gradient" : _[Pc] || (Pc = "Dom"), new _[Pc](io);
}
var U = V;
function q(io, Pc = io.name, Fc = !1) {
	return _[Pc] = io, Fc && (_[N] = io), S(Object.getOwnPropertyNames(io.prototype)), io;
}
var Z = 1e3;
function $(io) {
	return "Svgjs" + P(io) + Z++;
}
function J(io) {
	for (let Pc = io.children.length - 1; Pc >= 0; Pc--) J(io.children[Pc]);
	return io.id && (io.id = $(io.nodeName)), io;
}
function Q(io, Pc) {
	let Fc, Ic;
	for (Ic = (io = Array.isArray(io) ? io : [io]).length - 1; Ic >= 0; Ic--) for (Fc in Pc) io[Ic].prototype[Fc] = Pc[Fc];
}
function K(io) {
	return function(...Pc) {
		let Fc = Pc[Pc.length - 1];
		return !Fc || Fc.constructor !== Object || Fc instanceof Array ? io.apply(this, Pc) : io.apply(this, Pc.slice(0, -1)).attr(Fc);
	};
}
A("Dom", {
	siblings: function() {
		return this.parent().children();
	},
	position: function() {
		return this.parent().index(this);
	},
	next: function() {
		return this.siblings()[this.position() + 1];
	},
	prev: function() {
		return this.siblings()[this.position() - 1];
	},
	forward: function() {
		let io = this.position();
		return this.parent().add(this.remove(), io + 1), this;
	},
	backward: function() {
		let io = this.position();
		return this.parent().add(this.remove(), io ? io - 1 : 0), this;
	},
	front: function() {
		return this.parent().add(this.remove()), this;
	},
	back: function() {
		return this.parent().add(this.remove(), 0), this;
	},
	before: function(io) {
		(io = B(io)).remove();
		let Pc = this.position();
		return this.parent().add(io, Pc), this;
	},
	after: function(io) {
		(io = B(io)).remove();
		let Pc = this.position();
		return this.parent().add(io, Pc + 1), this;
	},
	insertBefore: function(io) {
		return (io = B(io)).before(this), this;
	},
	insertAfter: function(io) {
		return (io = B(io)).after(this), this;
	}
});
var tt = /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i, et = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i, it = /rgb\((\d+),(\d+),(\d+)\)/, at = /(#[a-z_][a-z0-9\-_]*)/i, st = /\)\s*,?\s*/, rt = /\s/g, nt = /^#[a-f0-9]{3}$|^#[a-f0-9]{6}$/i, ot = /^rgb\(/, lt = /^(\s+)?$/, ht = /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, ct = /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i, dt = /[\s,]+/, ut = /[MLHVCSQTAZ]/i;
function gt(io) {
	let Pc = Math.round(io), Fc = Math.max(0, Math.min(255, Pc)).toString(16);
	return Fc.length === 1 ? "0" + Fc : Fc;
}
function pt(io, Pc) {
	for (let Fc = Pc.length; Fc--;) if (io[Pc[Fc]] == null) return !1;
	return !0;
}
function ft(io, Pc, Fc) {
	return Fc < 0 && (Fc += 1), Fc > 1 && --Fc, Fc < 1 / 6 ? io + 6 * (Pc - io) * Fc : Fc < .5 ? Pc : Fc < 2 / 3 ? io + (Pc - io) * (2 / 3 - Fc) * 6 : io;
}
A("Dom", {
	classes: function() {
		let io = this.attr("class");
		return io == null ? [] : io.trim().split(dt);
	},
	hasClass: function(io) {
		return this.classes().indexOf(io) !== -1;
	},
	addClass: function(io) {
		if (!this.hasClass(io)) {
			let Pc = this.classes();
			Pc.push(io), this.attr("class", Pc.join(" "));
		}
		return this;
	},
	removeClass: function(io) {
		return this.hasClass(io) && this.attr("class", this.classes().filter((function(Pc) {
			return Pc !== io;
		})).join(" ")), this;
	},
	toggleClass: function(io) {
		return this.hasClass(io) ? this.removeClass(io) : this.addClass(io);
	}
}), A("Dom", {
	css: function(io, Pc) {
		let Fc = {};
		if (arguments.length === 0) return this.node.style.cssText.split(/\s*;\s*/).filter((function(io) {
			return !!io.length;
		})).forEach((function(io) {
			let Pc = io.split(/\s*:\s*/);
			Fc[Pc[0]] = Pc[1];
		})), Fc;
		if (arguments.length < 2) {
			if (Array.isArray(io)) {
				for (let Pc of io) {
					let io = Pc;
					Fc[Pc] = this.node.style.getPropertyValue(io);
				}
				return Fc;
			}
			if (typeof io == "string") return this.node.style.getPropertyValue(io);
			if (typeof io == "object") for (let Pc in io) this.node.style.setProperty(Pc, io[Pc] == null || lt.test(io[Pc]) ? "" : io[Pc]);
		}
		return arguments.length === 2 && this.node.style.setProperty(io, Pc == null || lt.test(Pc) ? "" : Pc), this;
	},
	show: function() {
		return this.css("display", "");
	},
	hide: function() {
		return this.css("display", "none");
	},
	visible: function() {
		return this.css("display") !== "none";
	}
}), A("Dom", { data: function(io, Pc, Fc) {
	if (io == null) return this.data(L(function(io, Pc) {
		let Fc, Ic = io.length, Lc = [];
		for (Fc = 0; Fc < Ic; Fc++) Pc(io[Fc]) && Lc.push(io[Fc]);
		return Lc;
	}(this.node.attributes, ((io) => io.nodeName.indexOf("data-") === 0)), ((io) => io.nodeName.slice(5))));
	if (io instanceof Array) {
		let Pc = {};
		for (let Fc of io) Pc[Fc] = this.data(Fc);
		return Pc;
	}
	if (typeof io == "object") for (Pc in io) this.data(Pc, io[Pc]);
	else if (arguments.length < 2) try {
		return JSON.parse(this.attr("data-" + io));
	} catch (Pc) {
		return this.attr("data-" + io);
	}
	else this.attr("data-" + io, Pc === null ? null : !0 === Fc || typeof Pc == "string" || typeof Pc == "number" ? Pc : JSON.stringify(Pc));
	return this;
} }), A("Dom", {
	remember: function(io, Pc) {
		if (typeof arguments[0] == "object") for (let Pc in io) this.remember(Pc, io[Pc]);
		else {
			if (arguments.length === 1) return this.memory()[io];
			this.memory()[io] = Pc;
		}
		return this;
	},
	forget: function() {
		if (arguments.length === 0) this._memory = {};
		else for (let io = arguments.length - 1; io >= 0; io--) delete this.memory()[arguments[io]];
		return this;
	},
	memory: function() {
		return this._memory = this._memory || {};
	}
});
var xt = class io {
	constructor(...io) {
		this.init(...io);
	}
	static isColor(Pc) {
		return Pc && (Pc instanceof io || this.isRgb(Pc) || this.test(Pc));
	}
	static isRgb(io) {
		return io && typeof io.r == "number" && typeof io.g == "number" && typeof io.b == "number";
	}
	static random(Pc = "vibrant", Fc) {
		let { random: Ic, round: Lc, sin: Rc, PI: zc } = Math;
		if (Pc === "vibrant") return new io(24 * Ic() + 57, 38 * Ic() + 45, 360 * Ic(), "lch");
		if (Pc === "sine") return new io(Lc(80 * Rc(2 * zc * (Fc = Fc == null ? Ic() : Fc) / .5 + .01) + 150), Lc(50 * Rc(2 * zc * Fc / .5 + 4.6) + 200), Lc(100 * Rc(2 * zc * Fc / .5 + 2.3) + 150));
		if (Pc === "pastel") return new io(8 * Ic() + 86, 17 * Ic() + 9, 360 * Ic(), "lch");
		if (Pc === "dark") return new io(10 + 10 * Ic(), 50 * Ic() + 86, 360 * Ic(), "lch");
		if (Pc === "rgb") return new io(255 * Ic(), 255 * Ic(), 255 * Ic());
		if (Pc === "lab") return new io(100 * Ic(), 256 * Ic() - 128, 256 * Ic() - 128, "lab");
		if (Pc === "grey") {
			let Pc = 255 * Ic();
			return new io(Pc, Pc, Pc);
		}
		throw Error("Unsupported random color mode");
	}
	static test(io) {
		return typeof io == "string" && (nt.test(io) || ot.test(io));
	}
	cmyk() {
		let { _a: Pc, _b: Fc, _c: Ic } = this.rgb(), [Lc, Rc, zc] = [
			Pc,
			Fc,
			Ic
		].map(((io) => io / 255)), Bc = Math.min(1 - Lc, 1 - Rc, 1 - zc);
		return Bc === 1 ? new io(0, 0, 0, 1, "cmyk") : new io((1 - Lc - Bc) / (1 - Bc), (1 - Rc - Bc) / (1 - Bc), (1 - zc - Bc) / (1 - Bc), Bc, "cmyk");
	}
	hsl() {
		let { _a: Pc, _b: Fc, _c: Ic } = this.rgb(), [Lc, Rc, zc] = [
			Pc,
			Fc,
			Ic
		].map(((io) => io / 255)), Bc = Math.max(Lc, Rc, zc), Vc = Math.min(Lc, Rc, zc), Hc = (Bc + Vc) / 2, Uc = Bc === Vc, Wc = Bc - Vc;
		return new io(360 * (Uc ? 0 : Bc === Lc ? ((Rc - zc) / Wc + (Rc < zc ? 6 : 0)) / 6 : Bc === Rc ? ((zc - Lc) / Wc + 2) / 6 : Bc === zc ? ((Lc - Rc) / Wc + 4) / 6 : 0), 100 * (Uc ? 0 : Hc > .5 ? Wc / (2 - Bc - Vc) : Wc / (Bc + Vc)), 100 * Hc, "hsl");
	}
	init(io = 0, Pc = 0, Fc = 0, Ic = 0, Lc = "rgb") {
		if (io = io || 0, this.space) for (let io in this.space) delete this[this.space[io]];
		if (typeof io == "number") Lc = typeof Ic == "string" ? Ic : Lc, Ic = typeof Ic == "string" ? 0 : Ic, Object.assign(this, {
			_a: io,
			_b: Pc,
			_c: Fc,
			_d: Ic,
			space: Lc
		});
		else if (io instanceof Array) this.space = Pc || (typeof io[3] == "string" ? io[3] : io[4]) || "rgb", Object.assign(this, {
			_a: io[0],
			_b: io[1],
			_c: io[2],
			_d: io[3] || 0
		});
		else if (io instanceof Object) {
			let Fc = function(io, Pc) {
				let Fc = pt(io, "rgb") ? {
					_a: io.r,
					_b: io.g,
					_c: io.b,
					_d: 0,
					space: "rgb"
				} : pt(io, "xyz") ? {
					_a: io.x,
					_b: io.y,
					_c: io.z,
					_d: 0,
					space: "xyz"
				} : pt(io, "hsl") ? {
					_a: io.h,
					_b: io.s,
					_c: io.l,
					_d: 0,
					space: "hsl"
				} : pt(io, "lab") ? {
					_a: io.l,
					_b: io.a,
					_c: io.b,
					_d: 0,
					space: "lab"
				} : pt(io, "lch") ? {
					_a: io.l,
					_b: io.c,
					_c: io.h,
					_d: 0,
					space: "lch"
				} : pt(io, "cmyk") ? {
					_a: io.c,
					_b: io.m,
					_c: io.y,
					_d: io.k,
					space: "cmyk"
				} : {
					_a: 0,
					_b: 0,
					_c: 0,
					space: "rgb"
				};
				return Fc.space = Pc || Fc.space, Fc;
			}(io, Pc);
			Object.assign(this, Fc);
		} else if (typeof io == "string") if (ot.test(io)) {
			let Pc = io.replace(rt, ""), [Fc, Ic, Lc] = it.exec(Pc).slice(1, 4).map(((io) => parseInt(io)));
			Object.assign(this, {
				_a: Fc,
				_b: Ic,
				_c: Lc,
				_d: 0,
				space: "rgb"
			});
		} else {
			if (!nt.test(io)) throw Error("Unsupported string format, can't construct Color");
			{
				let [, Pc, Fc, Ic] = et.exec(function(io) {
					return io.length === 4 ? [
						"#",
						io.substring(1, 2),
						io.substring(1, 2),
						io.substring(2, 3),
						io.substring(2, 3),
						io.substring(3, 4),
						io.substring(3, 4)
					].join("") : io;
				}(io)).map((io) => parseInt(io, 16));
				Object.assign(this, {
					_a: Pc,
					_b: Fc,
					_c: Ic,
					_d: 0,
					space: "rgb"
				});
			}
		}
		let { _a: Rc, _b: zc, _c: Bc, _d: Vc } = this, Hc = this.space === "rgb" ? {
			r: Rc,
			g: zc,
			b: Bc
		} : this.space === "xyz" ? {
			x: Rc,
			y: zc,
			z: Bc
		} : this.space === "hsl" ? {
			h: Rc,
			s: zc,
			l: Bc
		} : this.space === "lab" ? {
			l: Rc,
			a: zc,
			b: Bc
		} : this.space === "lch" ? {
			l: Rc,
			c: zc,
			h: Bc
		} : this.space === "cmyk" ? {
			c: Rc,
			m: zc,
			y: Bc,
			k: Vc
		} : {};
		Object.assign(this, Hc);
	}
	lab() {
		let { x: Pc, y: Fc, z: Ic } = this.xyz();
		return new io(116 * Fc - 16, 500 * (Pc - Fc), 200 * (Fc - Ic), "lab");
	}
	lch() {
		let { l: Pc, a: Fc, b: Ic } = this.lab(), Lc = Math.sqrt(Math.pow(Fc, 2) + Math.pow(Ic, 2)), Rc = 180 * Math.atan2(Ic, Fc) / Math.PI;
		return Rc < 0 && (Rc *= -1, Rc = 360 - Rc), new io(Pc, Lc, Rc, "lch");
	}
	rgb() {
		if (this.space === "rgb") return this;
		if ((Pc = this.space) === "lab" || Pc === "xyz" || Pc === "lch") {
			let { x: Pc, y: Fc, z: Ic } = this;
			if (this.space === "lab" || this.space === "lch") {
				let { l: io, a: Lc, b: Rc } = this;
				if (this.space === "lch") {
					let { c: io, h: Pc } = this, Fc = Math.PI / 180;
					Lc = io * Math.cos(Fc * Pc), Rc = io * Math.sin(Fc * Pc);
				}
				let zc = (io + 16) / 116, Bc = Lc / 500 + zc, Vc = zc - Rc / 200, Hc = 16 / 116, Uc = .008856, Wc = 7.787;
				Pc = .95047 * (Math.pow(Bc, 3) > Uc ? Math.pow(Bc, 3) : (Bc - Hc) / Wc), Fc = 1 * (Math.pow(zc, 3) > Uc ? Math.pow(zc, 3) : (zc - Hc) / Wc), Ic = 1.08883 * (Math.pow(Vc, 3) > Uc ? Math.pow(Vc, 3) : (Vc - Hc) / Wc);
			}
			let Lc = 3.2406 * Pc + -1.5372 * Fc + -.4986 * Ic, Rc = -.9689 * Pc + 1.8758 * Fc + .0415 * Ic, zc = .0557 * Pc + -.204 * Fc + 1.057 * Ic, Bc = Math.pow, Vc = .0031308, Hc = Lc > Vc ? 1.055 * Bc(Lc, 1 / 2.4) - .055 : 12.92 * Lc, Uc = Rc > Vc ? 1.055 * Bc(Rc, 1 / 2.4) - .055 : 12.92 * Rc, Wc = zc > Vc ? 1.055 * Bc(zc, 1 / 2.4) - .055 : 12.92 * zc;
			return new io(255 * Hc, 255 * Uc, 255 * Wc);
		}
		if (this.space === "hsl") {
			let { h: Pc, s: Fc, l: Ic } = this;
			if (Pc /= 360, Fc /= 100, Ic /= 100, Fc === 0) return Ic *= 255, new io(Ic, Ic, Ic);
			let Lc = Ic < .5 ? Ic * (1 + Fc) : Ic + Fc - Ic * Fc, Rc = 2 * Ic - Lc;
			return new io(255 * ft(Rc, Lc, Pc + 1 / 3), 255 * ft(Rc, Lc, Pc), 255 * ft(Rc, Lc, Pc - 1 / 3));
		}
		if (this.space === "cmyk") {
			let { c: Pc, m: Fc, y: Ic, k: Lc } = this;
			return new io(255 * (1 - Math.min(1, Pc * (1 - Lc) + Lc)), 255 * (1 - Math.min(1, Fc * (1 - Lc) + Lc)), 255 * (1 - Math.min(1, Ic * (1 - Lc) + Lc)));
		}
		return this;
		var Pc;
	}
	toArray() {
		let { _a: io, _b: Pc, _c: Fc, _d: Ic, space: Lc } = this;
		return [
			io,
			Pc,
			Fc,
			Ic,
			Lc
		];
	}
	toHex() {
		let [io, Pc, Fc] = this._clamped().map(gt);
		return `#${io}${Pc}${Fc}`;
	}
	toRgb() {
		let [io, Pc, Fc] = this._clamped();
		return `rgb(${io},${Pc},${Fc})`;
	}
	toString() {
		return this.toHex();
	}
	xyz() {
		let { _a: Pc, _b: Fc, _c: Ic } = this.rgb(), [Lc, Rc, zc] = [
			Pc,
			Fc,
			Ic
		].map(((io) => io / 255)), Bc = Lc > .04045 ? Math.pow((Lc + .055) / 1.055, 2.4) : Lc / 12.92, Vc = Rc > .04045 ? Math.pow((Rc + .055) / 1.055, 2.4) : Rc / 12.92, Hc = zc > .04045 ? Math.pow((zc + .055) / 1.055, 2.4) : zc / 12.92, Uc = (.4124 * Bc + .3576 * Vc + .1805 * Hc) / .95047, Wc = (.2126 * Bc + .7152 * Vc + .0722 * Hc) / 1, Gc = (.0193 * Bc + .1192 * Vc + .9505 * Hc) / 1.08883;
		return new io(Uc > .008856 ? Math.pow(Uc, 1 / 3) : 7.787 * Uc + 16 / 116, Wc > .008856 ? Math.pow(Wc, 1 / 3) : 7.787 * Wc + 16 / 116, Gc > .008856 ? Math.pow(Gc, 1 / 3) : 7.787 * Gc + 16 / 116, "xyz");
	}
	_clamped() {
		let { _a: io, _b: Pc, _c: Fc } = this.rgb(), { max: Ic, min: Lc, round: Rc } = Math;
		return [
			io,
			Pc,
			Fc
		].map(((io) => Ic(0, Lc(Rc(io), 255))));
	}
}, bt = class io {
	constructor(...io) {
		this.init(...io);
	}
	clone() {
		return new io(this);
	}
	init(io, Pc) {
		let Fc = Array.isArray(io) ? {
			x: io[0],
			y: io[1]
		} : typeof io == "object" ? {
			x: io.x,
			y: io.y
		} : {
			x: io,
			y: Pc
		};
		return this.x = Fc.x == null ? 0 : Fc.x, this.y = Fc.y == null ? 0 : Fc.y, this;
	}
	toArray() {
		return [this.x, this.y];
	}
	transform(io) {
		return this.clone().transformO(io);
	}
	transformO(io) {
		vt.isMatrixLike(io) || (io = new vt(io));
		let { x: Pc, y: Fc } = this;
		return this.x = io.a * Pc + io.c * Fc + io.e, this.y = io.b * Pc + io.d * Fc + io.f, this;
	}
};
function mt(io, Pc, Fc) {
	return Math.abs(Pc - io) < (Fc || 1e-6);
}
var vt = class io {
	constructor(...io) {
		this.init(...io);
	}
	static formatTransforms(io) {
		let Pc = io.flip === "both" || !0 === io.flip, Fc = io.flip && (Pc || io.flip === "x") ? -1 : 1, Ic = io.flip && (Pc || io.flip === "y") ? -1 : 1, Lc = io.skew && io.skew.length ? io.skew[0] : isFinite(io.skew) ? io.skew : isFinite(io.skewX) ? io.skewX : 0, Rc = io.skew && io.skew.length ? io.skew[1] : isFinite(io.skew) ? io.skew : isFinite(io.skewY) ? io.skewY : 0, zc = io.scale && io.scale.length ? io.scale[0] * Fc : isFinite(io.scale) ? io.scale * Fc : isFinite(io.scaleX) ? io.scaleX * Fc : Fc, Bc = io.scale && io.scale.length ? io.scale[1] * Ic : isFinite(io.scale) ? io.scale * Ic : isFinite(io.scaleY) ? io.scaleY * Ic : Ic, Vc = io.shear || 0, Hc = io.rotate || io.theta || 0, Uc = new bt(io.origin || io.around || io.ox || io.originX, io.oy || io.originY), Wc = Uc.x, Gc = Uc.y, Kc = new bt(io.position || io.px || io.positionX || NaN, io.py || io.positionY || NaN), qc = Kc.x, Jc = Kc.y, Yc = new bt(io.translate || io.tx || io.translateX, io.ty || io.translateY), Xc = Yc.x, Zc = Yc.y, Qc = new bt(io.relative || io.rx || io.relativeX, io.ry || io.relativeY);
		return {
			scaleX: zc,
			scaleY: Bc,
			skewX: Lc,
			skewY: Rc,
			shear: Vc,
			theta: Hc,
			rx: Qc.x,
			ry: Qc.y,
			tx: Xc,
			ty: Zc,
			ox: Wc,
			oy: Gc,
			px: qc,
			py: Jc
		};
	}
	static fromArray(io) {
		return {
			a: io[0],
			b: io[1],
			c: io[2],
			d: io[3],
			e: io[4],
			f: io[5]
		};
	}
	static isMatrixLike(io) {
		return io.a != null || io.b != null || io.c != null || io.d != null || io.e != null || io.f != null;
	}
	static matrixMultiply(io, Pc, Fc) {
		let Ic = io.a * Pc.a + io.c * Pc.b, Lc = io.b * Pc.a + io.d * Pc.b, Rc = io.a * Pc.c + io.c * Pc.d, zc = io.b * Pc.c + io.d * Pc.d, Bc = io.e + io.a * Pc.e + io.c * Pc.f, Vc = io.f + io.b * Pc.e + io.d * Pc.f;
		return Fc.a = Ic, Fc.b = Lc, Fc.c = Rc, Fc.d = zc, Fc.e = Bc, Fc.f = Vc, Fc;
	}
	around(io, Pc, Fc) {
		return this.clone().aroundO(io, Pc, Fc);
	}
	aroundO(io, Pc, Fc) {
		let Ic = io || 0, Lc = Pc || 0;
		return this.translateO(-Ic, -Lc).lmultiplyO(Fc).translateO(Ic, Lc);
	}
	clone() {
		return new io(this);
	}
	decompose(io = 0, Pc = 0) {
		let Fc = this.a, Ic = this.b, Lc = this.c, Rc = this.d, zc = this.e, Bc = this.f, Vc = Fc * Rc - Ic * Lc, Hc = Vc > 0 ? 1 : -1, Uc = Hc * Math.sqrt(Fc * Fc + Ic * Ic), Wc = Math.atan2(Hc * Ic, Hc * Fc), Gc = 180 / Math.PI * Wc, Kc = Math.cos(Wc), qc = Math.sin(Wc), Jc = (Fc * Lc + Ic * Rc) / Vc, Yc = Lc * Uc / (Jc * Fc - Ic) || Rc * Uc / (Jc * Ic + Fc);
		return {
			scaleX: Uc,
			scaleY: Yc,
			shear: Jc,
			rotate: Gc,
			translateX: zc - io + io * Kc * Uc + Pc * (Jc * Kc * Uc - qc * Yc),
			translateY: Bc - Pc + io * qc * Uc + Pc * (Jc * qc * Uc + Kc * Yc),
			originX: io,
			originY: Pc,
			a: this.a,
			b: this.b,
			c: this.c,
			d: this.d,
			e: this.e,
			f: this.f
		};
	}
	equals(Pc) {
		if (Pc === this) return !0;
		let Fc = new io(Pc);
		return mt(this.a, Fc.a) && mt(this.b, Fc.b) && mt(this.c, Fc.c) && mt(this.d, Fc.d) && mt(this.e, Fc.e) && mt(this.f, Fc.f);
	}
	flip(io, Pc) {
		return this.clone().flipO(io, Pc);
	}
	flipO(io, Pc) {
		return io === "x" ? this.scaleO(-1, 1, Pc, 0) : io === "y" ? this.scaleO(1, -1, 0, Pc) : this.scaleO(-1, -1, io, Pc || io);
	}
	init(Pc) {
		let Fc = io.fromArray([
			1,
			0,
			0,
			1,
			0,
			0
		]);
		return Pc = Pc instanceof Gt ? Pc.matrixify() : typeof Pc == "string" ? io.fromArray(Pc.split(dt).map(parseFloat)) : Array.isArray(Pc) ? io.fromArray(Pc) : typeof Pc == "object" && io.isMatrixLike(Pc) ? Pc : typeof Pc == "object" ? new io().transform(Pc) : arguments.length === 6 ? io.fromArray([].slice.call(arguments)) : Fc, this.a = Pc.a == null ? Fc.a : Pc.a, this.b = Pc.b == null ? Fc.b : Pc.b, this.c = Pc.c == null ? Fc.c : Pc.c, this.d = Pc.d == null ? Fc.d : Pc.d, this.e = Pc.e == null ? Fc.e : Pc.e, this.f = Pc.f == null ? Fc.f : Pc.f, this;
	}
	inverse() {
		return this.clone().inverseO();
	}
	inverseO() {
		let io = this.a, Pc = this.b, Fc = this.c, Ic = this.d, Lc = this.e, Rc = this.f, zc = io * Ic - Pc * Fc;
		if (!zc) throw Error("Cannot invert " + this);
		let Bc = Ic / zc, Vc = -Pc / zc, Hc = -Fc / zc, Uc = io / zc, Wc = -(Bc * Lc + Hc * Rc), Gc = -(Vc * Lc + Uc * Rc);
		return this.a = Bc, this.b = Vc, this.c = Hc, this.d = Uc, this.e = Wc, this.f = Gc, this;
	}
	lmultiply(io) {
		return this.clone().lmultiplyO(io);
	}
	lmultiplyO(Pc) {
		let Fc = Pc instanceof io ? Pc : new io(Pc);
		return io.matrixMultiply(Fc, this, this);
	}
	multiply(io) {
		return this.clone().multiplyO(io);
	}
	multiplyO(Pc) {
		let Fc = Pc instanceof io ? Pc : new io(Pc);
		return io.matrixMultiply(this, Fc, this);
	}
	rotate(io, Pc, Fc) {
		return this.clone().rotateO(io, Pc, Fc);
	}
	rotateO(io, Pc = 0, Fc = 0) {
		io = M(io);
		let Ic = Math.cos(io), Lc = Math.sin(io), { a: Rc, b: zc, c: Bc, d: Vc, e: Hc, f: Uc } = this;
		return this.a = Rc * Ic - zc * Lc, this.b = zc * Ic + Rc * Lc, this.c = Bc * Ic - Vc * Lc, this.d = Vc * Ic + Bc * Lc, this.e = Hc * Ic - Uc * Lc + Fc * Lc - Pc * Ic + Pc, this.f = Uc * Ic + Hc * Lc - Pc * Lc - Fc * Ic + Fc, this;
	}
	scale() {
		return this.clone().scaleO(...arguments);
	}
	scaleO(io, Pc = io, Fc = 0, Ic = 0) {
		arguments.length === 3 && (Ic = Fc, Fc = Pc, Pc = io);
		let { a: Lc, b: Rc, c: zc, d: Bc, e: Vc, f: Hc } = this;
		return this.a = Lc * io, this.b = Rc * Pc, this.c = zc * io, this.d = Bc * Pc, this.e = Vc * io - Fc * io + Fc, this.f = Hc * Pc - Ic * Pc + Ic, this;
	}
	shear(io, Pc, Fc) {
		return this.clone().shearO(io, Pc, Fc);
	}
	shearO(io, Pc = 0, Fc = 0) {
		let { a: Ic, b: Lc, c: Rc, d: zc, e: Bc, f: Vc } = this;
		return this.a = Ic + Lc * io, this.c = Rc + zc * io, this.e = Bc + Vc * io - Fc * io, this;
	}
	skew() {
		return this.clone().skewO(...arguments);
	}
	skewO(io, Pc = io, Fc = 0, Ic = 0) {
		arguments.length === 3 && (Ic = Fc, Fc = Pc, Pc = io), io = M(io), Pc = M(Pc);
		let Lc = Math.tan(io), Rc = Math.tan(Pc), { a: zc, b: Bc, c: Vc, d: Hc, e: Uc, f: Wc } = this;
		return this.a = zc + Bc * Lc, this.b = Bc + zc * Rc, this.c = Vc + Hc * Lc, this.d = Hc + Vc * Rc, this.e = Uc + Wc * Lc - Ic * Lc, this.f = Wc + Uc * Rc - Fc * Rc, this;
	}
	skewX(io, Pc, Fc) {
		return this.skew(io, 0, Pc, Fc);
	}
	skewY(io, Pc, Fc) {
		return this.skew(0, io, Pc, Fc);
	}
	toArray() {
		return [
			this.a,
			this.b,
			this.c,
			this.d,
			this.e,
			this.f
		];
	}
	toString() {
		return "matrix(" + this.a + "," + this.b + "," + this.c + "," + this.d + "," + this.e + "," + this.f + ")";
	}
	transform(Pc) {
		if (io.isMatrixLike(Pc)) return new io(Pc).multiplyO(this);
		let Fc = io.formatTransforms(Pc), { x: Ic, y: Lc } = new bt(Fc.ox, Fc.oy).transform(this), Rc = new io().translateO(Fc.rx, Fc.ry).lmultiplyO(this).translateO(-Ic, -Lc).scaleO(Fc.scaleX, Fc.scaleY).skewO(Fc.skewX, Fc.skewY).shearO(Fc.shear).rotateO(Fc.theta).translateO(Ic, Lc);
		if (isFinite(Fc.px) || isFinite(Fc.py)) {
			let io = new bt(Ic, Lc).transform(Rc), Pc = isFinite(Fc.px) ? Fc.px - io.x : 0, zc = isFinite(Fc.py) ? Fc.py - io.y : 0;
			Rc.translateO(Pc, zc);
		}
		return Rc.translateO(Fc.tx, Fc.ty), Rc;
	}
	translate(io, Pc) {
		return this.clone().translateO(io, Pc);
	}
	translateO(io, Pc) {
		return this.e += io || 0, this.f += Pc || 0, this;
	}
	valueOf() {
		return {
			a: this.a,
			b: this.b,
			c: this.c,
			d: this.d,
			e: this.e,
			f: this.f
		};
	}
};
function yt() {
	if (!yt.nodes) {
		let io = B().size(2, 0);
		io.node.style.cssText = [
			"opacity: 0",
			"position: absolute",
			"left: -100%",
			"top: -100%",
			"overflow: hidden"
		].join(";"), io.attr("focusable", "false"), io.attr("aria-hidden", "true"), yt.nodes = {
			svg: io,
			path: io.path().node
		};
	}
	if (!yt.nodes.svg.node.parentNode) {
		let io = O.document.body || O.document.documentElement;
		yt.nodes.svg.addTo(io);
	}
	return yt.nodes;
}
function wt(io) {
	return !(io.width || io.height || io.x || io.y);
}
q(vt, "Matrix");
var kt = class io {
	constructor(...io) {
		this.init(...io);
	}
	addOffset() {
		return this.x += O.window.pageXOffset, this.y += O.window.pageYOffset, new io(this);
	}
	init(io) {
		return io = typeof io == "string" ? io.split(dt).map(parseFloat) : Array.isArray(io) ? io : typeof io == "object" ? [
			io.left == null ? io.x : io.left,
			io.top == null ? io.y : io.top,
			io.width,
			io.height
		] : arguments.length === 4 ? [].slice.call(arguments) : [
			0,
			0,
			0,
			0
		], this.x = io[0] || 0, this.y = io[1] || 0, this.width = this.w = io[2] || 0, this.height = this.h = io[3] || 0, this.x2 = this.x + this.w, this.y2 = this.y + this.h, this.cx = this.x + this.w / 2, this.cy = this.y + this.h / 2, this;
	}
	isNulled() {
		return wt(this);
	}
	merge(Pc) {
		let Fc = Math.min(this.x, Pc.x), Ic = Math.min(this.y, Pc.y);
		return new io(Fc, Ic, Math.max(this.x + this.width, Pc.x + Pc.width) - Fc, Math.max(this.y + this.height, Pc.y + Pc.height) - Ic);
	}
	toArray() {
		return [
			this.x,
			this.y,
			this.width,
			this.height
		];
	}
	toString() {
		return this.x + " " + this.y + " " + this.width + " " + this.height;
	}
	transform(Pc) {
		Pc instanceof vt || (Pc = new vt(Pc));
		let Fc = Infinity, Ic = -Infinity, Lc = Infinity, Rc = -Infinity;
		return [
			new bt(this.x, this.y),
			new bt(this.x2, this.y),
			new bt(this.x, this.y2),
			new bt(this.x2, this.y2)
		].forEach((function(io) {
			io = io.transform(Pc), Fc = Math.min(Fc, io.x), Ic = Math.max(Ic, io.x), Lc = Math.min(Lc, io.y), Rc = Math.max(Rc, io.y);
		})), new io(Fc, Lc, Ic - Fc, Rc - Lc);
	}
};
function At(io, Pc, Fc) {
	let Ic;
	try {
		if (Ic = Pc(io.node), wt(Ic) && (Lc = io.node) !== O.document && !(O.document.documentElement.contains || function(io) {
			for (; io.parentNode;) io = io.parentNode;
			return io === O.document;
		}).call(O.document.documentElement, Lc)) throw Error("Element not in the dom");
	} catch (Pc) {
		Ic = Fc(io);
	}
	var Lc;
	return Ic;
}
A({ viewbox: {
	viewbox(io, Pc, Fc, Ic) {
		return io == null ? new kt(this.attr("viewBox")) : this.attr("viewBox", new kt(io, Pc, Fc, Ic));
	},
	zoom(io, Pc) {
		let { width: Fc, height: Ic } = this.attr(["width", "height"]);
		if ((Fc || Ic) && typeof Fc != "string" && typeof Ic != "string" || (Fc = this.node.clientWidth, Ic = this.node.clientHeight), !Fc || !Ic) throw Error("Impossible to get absolute width and height. Please provide an absolute width and height attribute on the zooming element");
		let Lc = this.viewbox(), Rc = Fc / Lc.width, zc = Ic / Lc.height, Bc = Math.min(Rc, zc);
		if (io == null) return Bc;
		let Vc = Bc / io;
		Vc === Infinity && (Vc = 9007199254740991 / 100), Pc = Pc || new bt(Fc / 2 / Rc + Lc.x, Ic / 2 / zc + Lc.y);
		let Hc = new kt(Lc).transform(new vt({
			scale: Vc,
			origin: Pc
		}));
		return this.viewbox(Hc);
	}
} }), q(kt, "Box");
var Ct = class extends Array {
	constructor(io = [], ...Pc) {
		if (super(io, ...Pc), typeof io == "number") return this;
		this.length = 0, this.push(...io);
	}
};
Q([Ct], {
	each(io, ...Pc) {
		return typeof io == "function" ? this.map(((Pc, Fc, Ic) => io.call(Pc, Pc, Fc, Ic))) : this.map(((Fc) => Fc[io](...Pc)));
	},
	toArray() {
		return Array.prototype.concat.apply([], this);
	}
});
var St = [
	"toArray",
	"constructor",
	"each"
];
function Lt(io, Pc) {
	return new Ct(L((Pc || O.document).querySelectorAll(io), (function(io) {
		return V(io);
	})));
}
Ct.extend = function(io) {
	io = io.reduce(((io, Pc) => (St.includes(Pc) || Pc[0] === "_" || (Pc in Array.prototype && (io["$" + Pc] = Array.prototype[Pc]), io[Pc] = function(...io) {
		return this.each(Pc, ...io);
	}), io)), {}), Q([Ct], io);
};
var Mt = 0, Pt = {};
function It(io) {
	let Pc = io.getEventHolder();
	return Pc === O.window && (Pc = Pt), Pc.events || (Pc.events = {}), Pc.events;
}
function Tt(io) {
	return io.getEventTarget();
}
function zt(io, Pc, Fc, Ic, Lc) {
	let Rc = Fc.bind(Ic || io), zc = B(io), Bc = It(zc), Vc = Tt(zc);
	Pc = Array.isArray(Pc) ? Pc : Pc.split(dt), Fc._svgjsListenerId || (Fc._svgjsListenerId = ++Mt), Pc.forEach((function(io) {
		let Pc = io.split(".")[0], Ic = io.split(".")[1] || "*";
		Bc[Pc] = Bc[Pc] || {}, Bc[Pc][Ic] = Bc[Pc][Ic] || {}, Bc[Pc][Ic][Fc._svgjsListenerId] = Rc, Vc.addEventListener(Pc, Rc, Lc || !1);
	}));
}
function Xt(io, Pc, Fc, Ic) {
	let Lc = B(io), Rc = It(Lc), zc = Tt(Lc);
	(typeof Fc != "function" || (Fc = Fc._svgjsListenerId)) && (Pc = Array.isArray(Pc) ? Pc : (Pc || "").split(dt)).forEach((function(io) {
		let Pc = io && io.split(".")[0], Bc = io && io.split(".")[1], Vc, Hc;
		if (Fc) Rc[Pc] && Rc[Pc][Bc || "*"] && (zc.removeEventListener(Pc, Rc[Pc][Bc || "*"][Fc], Ic || !1), delete Rc[Pc][Bc || "*"][Fc]);
		else if (Pc && Bc) {
			if (Rc[Pc] && Rc[Pc][Bc]) {
				for (Hc in Rc[Pc][Bc]) Xt(zc, [Pc, Bc].join("."), Hc);
				delete Rc[Pc][Bc];
			}
		} else if (Bc) for (io in Rc) for (Vc in Rc[io]) Bc === Vc && Xt(zc, [io, Bc].join("."));
		else if (Pc) {
			if (Rc[Pc]) {
				for (Vc in Rc[Pc]) Xt(zc, [Pc, Vc].join("."));
				delete Rc[Pc];
			}
		} else {
			for (io in Rc) Xt(zc, io);
			(function(io) {
				let Pc = io.getEventHolder();
				Pc === O.window && (Pc = Pt), Pc.events && (Pc.events = {});
			})(Lc);
		}
	}));
}
var Rt = class extends D {
	addEventListener() {}
	dispatch(Pc, Fc, Ic) {
		return function(Pc, Fc, Ic, Lc) {
			let Rc = Tt(Pc);
			return Fc instanceof O.window.Event || (Fc = new O.window.CustomEvent(Fc, _objectSpread2({
				detail: Ic,
				cancelable: !0
			}, Lc))), Rc.dispatchEvent(Fc), Fc;
		}(this, Pc, Fc, Ic);
	}
	dispatchEvent(io) {
		let Pc = this.getEventHolder().events;
		if (!Pc) return !0;
		let Fc = Pc[io.type];
		for (let Pc in Fc) for (let Ic in Fc[Pc]) Fc[Pc][Ic](io);
		return !io.defaultPrevented;
	}
	fire(io, Pc, Fc) {
		return this.dispatch(io, Pc, Fc), this;
	}
	getEventHolder() {
		return this;
	}
	getEventTarget() {
		return this;
	}
	off(io, Pc, Fc) {
		return Xt(this, io, Pc, Fc), this;
	}
	on(io, Pc, Fc, Ic) {
		return zt(this, io, Pc, Fc, Ic), this;
	}
	removeEventListener() {}
};
function Et() {}
q(Rt, "EventTarget");
var Yt = 400, Ht = ">", Ot = 0, Ft = {
	"fill-opacity": 1,
	"stroke-opacity": 1,
	"stroke-width": 0,
	"stroke-linejoin": "miter",
	"stroke-linecap": "butt",
	fill: "#000000",
	stroke: "#000000",
	opacity: 1,
	x: 0,
	y: 0,
	cx: 0,
	cy: 0,
	width: 0,
	height: 0,
	r: 0,
	rx: 0,
	ry: 0,
	offset: 0,
	"stop-opacity": 1,
	"stop-color": "#000000",
	"text-anchor": "start"
}, Dt = class extends Array {
	constructor(...io) {
		super(...io), this.init(...io);
	}
	clone() {
		return new this.constructor(this);
	}
	init(io) {
		return typeof io == "number" || (this.length = 0, this.push(...this.parse(io))), this;
	}
	parse(io = []) {
		return io instanceof Array ? io : io.trim().split(dt).map(parseFloat);
	}
	toArray() {
		return Array.prototype.concat.apply([], this);
	}
	toSet() {
		return new Set(this);
	}
	toString() {
		return this.join(" ");
	}
	valueOf() {
		let io = [];
		return io.push(...this), io;
	}
}, _t = class io {
	constructor(...io) {
		this.init(...io);
	}
	convert(Pc) {
		return new io(this.value, Pc);
	}
	divide(Pc) {
		return Pc = new io(Pc), new io(this / Pc, this.unit || Pc.unit);
	}
	init(Pc, Fc) {
		return Fc = Array.isArray(Pc) ? Pc[1] : Fc, Pc = Array.isArray(Pc) ? Pc[0] : Pc, this.value = 0, this.unit = Fc || "", typeof Pc == "number" ? this.value = isNaN(Pc) ? 0 : isFinite(Pc) ? Pc : Pc < 0 ? -34e37 : 34e37 : typeof Pc == "string" ? (Fc = Pc.match(tt)) && (this.value = parseFloat(Fc[1]), Fc[5] === "%" ? this.value /= 100 : Fc[5] === "s" && (this.value *= 1e3), this.unit = Fc[5]) : Pc instanceof io && (this.value = Pc.valueOf(), this.unit = Pc.unit), this;
	}
	minus(Pc) {
		return Pc = new io(Pc), new io(this - Pc, this.unit || Pc.unit);
	}
	plus(Pc) {
		return Pc = new io(Pc), new io(this + Pc, this.unit || Pc.unit);
	}
	times(Pc) {
		return Pc = new io(Pc), new io(this * Pc, this.unit || Pc.unit);
	}
	toArray() {
		return [this.value, this.unit];
	}
	toJSON() {
		return this.toString();
	}
	toString() {
		return (this.unit === "%" ? ~~(1e8 * this.value) / 1e6 : this.unit === "s" ? this.value / 1e3 : this.value) + this.unit;
	}
	valueOf() {
		return this.value;
	}
}, Nt = new Set([
	"fill",
	"stroke",
	"color",
	"bgcolor",
	"stop-color",
	"flood-color",
	"lighting-color"
]), Wt = [], Bt = class io extends Rt {
	constructor(io, Pc) {
		super(), this.node = io, this.type = io.nodeName, Pc && io !== Pc && this.attr(Pc);
	}
	add(io, Pc) {
		return (io = B(io)).removeNamespace && this.node instanceof O.window.SVGElement && io.removeNamespace(), Pc == null ? this.node.appendChild(io.node) : io.node !== this.node.childNodes[Pc] && this.node.insertBefore(io.node, this.node.childNodes[Pc]), this;
	}
	addTo(io, Pc) {
		return B(io).put(this, Pc);
	}
	children() {
		return new Ct(L(this.node.children, (function(io) {
			return V(io);
		})));
	}
	clear() {
		for (; this.node.hasChildNodes();) this.node.removeChild(this.node.lastChild);
		return this;
	}
	clone(io = !0, Pc = !0) {
		this.writeDataToDom();
		let Fc = this.node.cloneNode(io);
		return Pc && (Fc = J(Fc)), new this.constructor(Fc);
	}
	each(io, Pc) {
		let Fc = this.children(), Ic, Lc;
		for (Ic = 0, Lc = Fc.length; Ic < Lc; Ic++) io.apply(Fc[Ic], [Ic, Fc]), Pc && Fc[Ic].each(io, Pc);
		return this;
	}
	element(Pc, Fc) {
		return this.put(new io(W(Pc), Fc));
	}
	first() {
		return V(this.node.firstChild);
	}
	get(io) {
		return V(this.node.childNodes[io]);
	}
	getEventHolder() {
		return this.node;
	}
	getEventTarget() {
		return this.node;
	}
	has(io) {
		return this.index(io) >= 0;
	}
	html(io, Pc) {
		return this.xml(io, Pc, "http://www.w3.org/1999/xhtml");
	}
	id(io) {
		return io !== void 0 || this.node.id || (this.node.id = $(this.type)), this.attr("id", io);
	}
	index(io) {
		return [].slice.call(this.node.childNodes).indexOf(io.node);
	}
	last() {
		return V(this.node.lastChild);
	}
	matches(io) {
		let Pc = this.node, Fc = Pc.matches || Pc.matchesSelector || Pc.msMatchesSelector || Pc.mozMatchesSelector || Pc.webkitMatchesSelector || Pc.oMatchesSelector || null;
		return Fc && Fc.call(Pc, io);
	}
	parent(io) {
		let Pc = this;
		if (!Pc.node.parentNode) return null;
		if (Pc = V(Pc.node.parentNode), !io) return Pc;
		do
			if (typeof io == "string" ? Pc.matches(io) : Pc instanceof io) return Pc;
		while (Pc = V(Pc.node.parentNode));
		return Pc;
	}
	put(io, Pc) {
		return io = B(io), this.add(io, Pc), io;
	}
	putIn(io, Pc) {
		return B(io).add(this, Pc);
	}
	remove() {
		return this.parent() && this.parent().removeElement(this), this;
	}
	removeElement(io) {
		return this.node.removeChild(io.node), this;
	}
	replace(io) {
		return io = B(io), this.node.parentNode && this.node.parentNode.replaceChild(io.node, this.node), io;
	}
	round(io = 2, Pc = null) {
		let Fc = Math.pow(10, io), Ic = this.attr(Pc);
		for (let io in Ic) typeof Ic[io] == "number" && (Ic[io] = Math.round(Ic[io] * Fc) / Fc);
		return this.attr(Ic), this;
	}
	svg(io, Pc) {
		return this.xml(io, Pc, E);
	}
	toString() {
		return this.id();
	}
	words(io) {
		return this.node.textContent = io, this;
	}
	wrap(io) {
		let Pc = this.parent();
		if (!Pc) return this.addTo(io);
		let Fc = Pc.index(this);
		return Pc.put(io, Fc).put(this);
	}
	writeDataToDom() {
		return this.each((function() {
			this.writeDataToDom();
		})), this;
	}
	xml(io, Pc, Fc) {
		if (typeof io == "boolean" && (Fc = Pc, Pc = io, io = null), io == null || typeof io == "function") {
			Pc = Pc == null || Pc, this.writeDataToDom();
			let Fc = this;
			if (io != null) {
				if (Fc = V(Fc.node.cloneNode(!0)), Pc) {
					let Pc = io(Fc);
					if (Fc = Pc || Fc, !1 === Pc) return "";
				}
				Fc.each((function() {
					let Pc = io(this), Fc = Pc || this;
					!1 === Pc ? this.remove() : Pc && this !== Fc && this.replace(Fc);
				}), !0);
			}
			return Pc ? Fc.node.outerHTML : Fc.node.innerHTML;
		}
		Pc = Pc != null && Pc;
		let Ic = W("wrapper", Fc), Lc = O.document.createDocumentFragment();
		Ic.innerHTML = io;
		for (let io = Ic.children.length; io--;) Lc.appendChild(Ic.firstElementChild);
		let Rc = this.parent();
		return Pc ? this.replace(Lc) && Rc : this.add(Lc);
	}
};
Q(Bt, {
	attr: function(io, Pc, Fc) {
		if (io == null) {
			io = {}, Pc = this.node.attributes;
			for (let Fc of Pc) io[Fc.nodeName] = ht.test(Fc.nodeValue) ? parseFloat(Fc.nodeValue) : Fc.nodeValue;
			return io;
		}
		if (io instanceof Array) return io.reduce(((io, Pc) => (io[Pc] = this.attr(Pc), io)), {});
		if (typeof io == "object" && io.constructor === Object) for (Pc in io) this.attr(Pc, io[Pc]);
		else if (Pc === null) this.node.removeAttribute(io);
		else {
			if (Pc == null) return (Pc = this.node.getAttribute(io)) == null ? Ft[io] : ht.test(Pc) ? parseFloat(Pc) : Pc;
			typeof (Pc = Wt.reduce(((Pc, Fc) => Fc(io, Pc, this)), Pc)) == "number" ? Pc = new _t(Pc) : Nt.has(io) && xt.isColor(Pc) ? Pc = new xt(Pc) : Pc.constructor === Array && (Pc = new Dt(Pc)), io === "leading" ? this.leading && this.leading(Pc) : typeof Fc == "string" ? this.node.setAttributeNS(Fc, io, Pc.toString()) : this.node.setAttribute(io, Pc.toString()), !this.rebuild || io !== "font-size" && io !== "x" || this.rebuild();
		}
		return this;
	},
	find: function(io) {
		return Lt(io, this.node);
	},
	findOne: function(io) {
		return V(this.node.querySelector(io));
	}
}), q(Bt, "Dom");
var Gt = class extends Bt {
	constructor(io, Pc) {
		var Fc, Ic;
		super(io, Pc), this.dom = {}, this.node.instance = this, (io.hasAttribute("data-svgjs") || io.hasAttribute("svgjs:data")) && this.setData((Fc = (Ic = JSON.parse(io.getAttribute("data-svgjs"))) == null ? JSON.parse(io.getAttribute("svgjs:data")) : Ic) == null ? {} : Fc);
	}
	center(io, Pc) {
		return this.cx(io).cy(Pc);
	}
	cx(io) {
		return io == null ? this.x() + this.width() / 2 : this.x(io - this.width() / 2);
	}
	cy(io) {
		return io == null ? this.y() + this.height() / 2 : this.y(io - this.height() / 2);
	}
	defs() {
		let io = this.root();
		return io && io.defs();
	}
	dmove(io, Pc) {
		return this.dx(io).dy(Pc);
	}
	dx(io = 0) {
		return this.x(new _t(io).plus(this.x()));
	}
	dy(io = 0) {
		return this.y(new _t(io).plus(this.y()));
	}
	getEventHolder() {
		return this;
	}
	height(io) {
		return this.attr("height", io);
	}
	move(io, Pc) {
		return this.x(io).y(Pc);
	}
	parents(io = this.root()) {
		let Pc = typeof io == "string";
		Pc || (io = B(io));
		let Fc = new Ct(), Ic = this;
		for (; (Ic = Ic.parent()) && Ic.node !== O.document && Ic.nodeName !== "#document-fragment" && (Fc.push(Ic), Pc || Ic.node !== io.node) && (!Pc || !Ic.matches(io));) if (Ic.node === this.root().node) return null;
		return Fc;
	}
	reference(io) {
		if (!(io = this.attr(io))) return null;
		let Pc = (io + "").match(at);
		return Pc ? B(Pc[1]) : null;
	}
	root() {
		let io = this.parent(function(io) {
			return _[io];
		}(N));
		return io && io.root();
	}
	setData(io) {
		return this.dom = io, this;
	}
	size(io, Pc) {
		let Fc = I(this, io, Pc);
		return this.width(new _t(Fc.width)).height(new _t(Fc.height));
	}
	width(io) {
		return this.attr("width", io);
	}
	writeDataToDom() {
		return R(this, this.dom), super.writeDataToDom();
	}
	x(io) {
		return this.attr("x", io);
	}
	y(io) {
		return this.attr("y", io);
	}
};
Q(Gt, {
	bbox: function() {
		return new kt(At(this, ((io) => io.getBBox()), ((io) => {
			try {
				let Pc = io.clone().addTo(yt().svg).show(), Fc = Pc.node.getBBox();
				return Pc.remove(), Fc;
			} catch (Pc) {
				throw Error(`Getting bbox of element "${io.node.nodeName}" is not possible: ${Pc.toString()}`);
			}
		})));
	},
	rbox: function(io) {
		let Pc = new kt(At(this, ((io) => io.getBoundingClientRect()), ((io) => {
			throw Error(`Getting rbox of element "${io.node.nodeName}" is not possible`);
		})));
		return io ? Pc.transform(io.screenCTM().inverseO()) : Pc.addOffset();
	},
	inside: function(io, Pc) {
		let Fc = this.bbox();
		return io > Fc.x && Pc > Fc.y && io < Fc.x + Fc.width && Pc < Fc.y + Fc.height;
	},
	point: function(io, Pc) {
		return new bt(io, Pc).transformO(this.screenCTM().inverseO());
	},
	ctm: function() {
		return new vt(this.node.getCTM());
	},
	screenCTM: function() {
		try {
			if (typeof this.isRoot == "function" && !this.isRoot()) {
				let io = this.rect(1, 1), Pc = io.node.getScreenCTM();
				return io.remove(), new vt(Pc);
			}
			return new vt(this.node.getScreenCTM());
		} catch (io) {
			return console.warn(`Cannot get CTM from SVG node ${this.node.nodeName}. Is the element rendered?`), new vt();
		}
	}
}), q(Gt, "Element");
var jt = {
	stroke: [
		"color",
		"width",
		"opacity",
		"linecap",
		"linejoin",
		"miterlimit",
		"dasharray",
		"dashoffset"
	],
	fill: [
		"color",
		"opacity",
		"rule"
	],
	prefix: function(io, Pc) {
		return Pc === "color" ? io : io + "-" + Pc;
	}
};
["fill", "stroke"].forEach((function(io) {
	let Pc = {}, Fc;
	Pc[io] = function(Pc) {
		if (Pc === void 0) return this.attr(io);
		if (typeof Pc == "string" || Pc instanceof xt || xt.isRgb(Pc) || Pc instanceof Gt) this.attr(io, Pc);
		else for (Fc = jt[io].length - 1; Fc >= 0; Fc--) Pc[jt[io][Fc]] != null && this.attr(jt.prefix(io, jt[io][Fc]), Pc[jt[io][Fc]]);
		return this;
	}, A(["Element", "Runner"], Pc);
})), A(["Element", "Runner"], {
	matrix: function(io, Pc, Fc, Ic, Lc, Rc) {
		return io == null ? new vt(this) : this.attr("transform", new vt(io, Pc, Fc, Ic, Lc, Rc));
	},
	rotate: function(io, Pc, Fc) {
		return this.transform({
			rotate: io,
			ox: Pc,
			oy: Fc
		}, !0);
	},
	skew: function(io, Pc, Fc, Ic) {
		return arguments.length === 1 || arguments.length === 3 ? this.transform({
			skew: io,
			ox: Pc,
			oy: Fc
		}, !0) : this.transform({
			skew: [io, Pc],
			ox: Fc,
			oy: Ic
		}, !0);
	},
	shear: function(io, Pc, Fc) {
		return this.transform({
			shear: io,
			ox: Pc,
			oy: Fc
		}, !0);
	},
	scale: function(io, Pc, Fc, Ic) {
		return arguments.length === 1 || arguments.length === 3 ? this.transform({
			scale: io,
			ox: Pc,
			oy: Fc
		}, !0) : this.transform({
			scale: [io, Pc],
			ox: Fc,
			oy: Ic
		}, !0);
	},
	translate: function(io, Pc) {
		return this.transform({ translate: [io, Pc] }, !0);
	},
	relative: function(io, Pc) {
		return this.transform({ relative: [io, Pc] }, !0);
	},
	flip: function(io = "both", Pc = "center") {
		return "xybothtrue".indexOf(io) === -1 && (Pc = io, io = "both"), this.transform({
			flip: io,
			origin: Pc
		}, !0);
	},
	opacity: function(io) {
		return this.attr("opacity", io);
	}
}), A("radius", { radius: function(io, Pc = io) {
	return (this._element || this).type === "radialGradient" ? this.attr("r", new _t(io)) : this.rx(io).ry(Pc);
} }), A("Path", {
	length: function() {
		return this.node.getTotalLength();
	},
	pointAt: function(io) {
		return new bt(this.node.getPointAtLength(io));
	}
}), A(["Element", "Runner"], { font: function(io, Pc) {
	if (typeof io == "object") {
		for (Pc in io) this.font(Pc, io[Pc]);
		return this;
	}
	return io === "leading" ? this.leading(Pc) : io === "anchor" ? this.attr("text-anchor", Pc) : io === "size" || io === "family" || io === "weight" || io === "stretch" || io === "variant" || io === "style" ? this.attr("font-" + io, Pc) : this.attr(io, Pc);
} }), A("Element", [
	"click",
	"dblclick",
	"mousedown",
	"mouseup",
	"mouseover",
	"mouseout",
	"mousemove",
	"mouseenter",
	"mouseleave",
	"touchstart",
	"touchmove",
	"touchleave",
	"touchend",
	"touchcancel",
	"contextmenu",
	"wheel",
	"pointerdown",
	"pointermove",
	"pointerup",
	"pointerleave",
	"pointercancel"
].reduce((function(io, Pc) {
	return io[Pc] = function(io) {
		return io === null ? this.off(Pc) : this.on(Pc, io), this;
	}, io;
}), {})), A("Element", {
	untransform: function() {
		return this.attr("transform", null);
	},
	matrixify: function() {
		return (this.attr("transform") || "").split(st).slice(0, -1).map((function(io) {
			let Pc = io.trim().split("(");
			return [Pc[0], Pc[1].split(dt).map((function(io) {
				return parseFloat(io);
			}))];
		})).reverse().reduce((function(io, Pc) {
			return Pc[0] === "matrix" ? io.lmultiply(vt.fromArray(Pc[1])) : io[Pc[0]].apply(io, Pc[1]);
		}), new vt());
	},
	toParent: function(io, Pc) {
		if (this === io) return this;
		if (X(this.node)) return this.addTo(io, Pc);
		let Fc = this.screenCTM(), Ic = io.screenCTM().inverse();
		return this.addTo(io, Pc).untransform().transform(Ic.multiply(Fc)), this;
	},
	toRoot: function(io) {
		return this.toParent(this.root(), io);
	},
	transform: function(Pc, Fc) {
		if (Pc == null || typeof Pc == "string") {
			let io = new vt(this).decompose();
			return Pc == null ? io : io[Pc];
		}
		vt.isMatrixLike(Pc) || (Pc = _objectSpread2(_objectSpread2({}, Pc), {}, { origin: T(Pc, this) }));
		let Ic = new vt(!0 === Fc ? this : Fc || !1).transform(Pc);
		return this.attr("transform", Ic);
	}
});
var Vt = class io extends Gt {
	flatten() {
		return this.each((function() {
			if (this instanceof io) return this.flatten().ungroup();
		})), this;
	}
	ungroup(io = this.parent(), Pc = io.index(this)) {
		return Pc = Pc === -1 ? io.children().length : Pc, this.each((function(Fc, Ic) {
			return Ic[Ic.length - Fc - 1].toParent(io, Pc);
		})), this.remove();
	}
};
q(Vt, "Container");
var Ut = class extends Vt {
	constructor(io, Pc = io) {
		super(G("defs", io), Pc);
	}
	flatten() {
		return this;
	}
	ungroup() {
		return this;
	}
};
q(Ut, "Defs");
var qt = class extends Gt {};
function Zt(io) {
	return this.attr("rx", io);
}
function $t(io) {
	return this.attr("ry", io);
}
function Jt(io) {
	return io == null ? this.cx() - this.rx() : this.cx(io + this.rx());
}
function Qt(io) {
	return io == null ? this.cy() - this.ry() : this.cy(io + this.ry());
}
function Kt(io) {
	return this.attr("cx", io);
}
function te(io) {
	return this.attr("cy", io);
}
function ee(io) {
	return io == null ? 2 * this.rx() : this.rx(new _t(io).divide(2));
}
function ie(io) {
	return io == null ? 2 * this.ry() : this.ry(new _t(io).divide(2));
}
q(qt, "Shape");
var ae = Object.freeze({
	__proto__: null,
	cx: Kt,
	cy: te,
	height: ie,
	rx: Zt,
	ry: $t,
	width: ee,
	x: Jt,
	y: Qt
}), se = class extends qt {
	constructor(io, Pc = io) {
		super(G("ellipse", io), Pc);
	}
	size(io, Pc) {
		let Fc = I(this, io, Pc);
		return this.rx(new _t(Fc.width).divide(2)).ry(new _t(Fc.height).divide(2));
	}
};
Q(se, ae), A("Container", { ellipse: K((function(io = 0, Pc = io) {
	return this.put(new se()).size(io, Pc).move(0, 0);
})) }), q(se, "Ellipse");
var re = class extends Bt {
	constructor(io = O.document.createDocumentFragment()) {
		super(io);
	}
	xml(io, Pc, Fc) {
		if (typeof io == "boolean" && (Fc = Pc, Pc = io, io = null), io == null || typeof io == "function") {
			let io = new Bt(W("wrapper", Fc));
			return io.add(this.node.cloneNode(!0)), io.xml(!1, Fc);
		}
		return super.xml(io, !1, Fc);
	}
};
function ne(io, Pc) {
	return (this._element || this).type === "radialGradient" ? this.attr({
		fx: new _t(io),
		fy: new _t(Pc)
	}) : this.attr({
		x1: new _t(io),
		y1: new _t(Pc)
	});
}
function oe(io, Pc) {
	return (this._element || this).type === "radialGradient" ? this.attr({
		cx: new _t(io),
		cy: new _t(Pc)
	}) : this.attr({
		x2: new _t(io),
		y2: new _t(Pc)
	});
}
q(re, "Fragment");
var le = Object.freeze({
	__proto__: null,
	from: ne,
	to: oe
}), he = class extends Vt {
	constructor(io, Pc) {
		super(G(io + "Gradient", typeof io == "string" ? null : io), Pc);
	}
	attr(io, Pc, Fc) {
		return io === "transform" && (io = "gradientTransform"), super.attr(io, Pc, Fc);
	}
	bbox() {
		return new kt();
	}
	targets() {
		return Lt("svg [fill*=" + this.id() + "]");
	}
	toString() {
		return this.url();
	}
	update(io) {
		return this.clear(), typeof io == "function" && io.call(this, this), this;
	}
	url() {
		return "url(#" + this.id() + ")";
	}
};
Q(he, le), A({
	Container: { gradient(...io) {
		return this.defs().gradient(...io);
	} },
	Defs: { gradient: K((function(io, Pc) {
		return this.put(new he(io)).update(Pc);
	})) }
}), q(he, "Gradient");
var ce = class extends Vt {
	constructor(io, Pc = io) {
		super(G("pattern", io), Pc);
	}
	attr(io, Pc, Fc) {
		return io === "transform" && (io = "patternTransform"), super.attr(io, Pc, Fc);
	}
	bbox() {
		return new kt();
	}
	targets() {
		return Lt("svg [fill*=" + this.id() + "]");
	}
	toString() {
		return this.url();
	}
	update(io) {
		return this.clear(), typeof io == "function" && io.call(this, this), this;
	}
	url() {
		return "url(#" + this.id() + ")";
	}
};
A({
	Container: { pattern(...io) {
		return this.defs().pattern(...io);
	} },
	Defs: { pattern: K((function(io, Pc, Fc) {
		return this.put(new ce()).update(Fc).attr({
			x: 0,
			y: 0,
			width: io,
			height: Pc,
			patternUnits: "userSpaceOnUse"
		});
	})) }
}), q(ce, "Pattern");
var de = class extends qt {
	constructor(io, Pc = io) {
		super(G("image", io), Pc);
	}
	load(io, Pc) {
		if (!io) return this;
		let Fc = new O.window.Image();
		return zt(Fc, "load", (function(io) {
			let Ic = this.parent(ce);
			this.width() === 0 && this.height() === 0 && this.size(Fc.width, Fc.height), Ic instanceof ce && Ic.width() === 0 && Ic.height() === 0 && Ic.size(this.width(), this.height()), typeof Pc == "function" && Pc.call(this, io);
		}), this), zt(Fc, "load error", (function() {
			Xt(Fc);
		})), this.attr("href", Fc.src = io, H);
	}
};
Wt.push(function(io, Pc, Fc) {
	return io !== "fill" && io !== "stroke" || ct.test(Pc) && (Pc = Fc.root().defs().image(Pc)), Pc instanceof de && (Pc = Fc.root().defs().pattern(0, 0, ((io) => {
		io.add(Pc);
	}))), Pc;
}), A({ Container: { image: K((function(io, Pc) {
	return this.put(new de()).size(0, 0).load(io, Pc);
})) } }), q(de, "Image");
var ge = class extends Dt {
	bbox() {
		let io = -Infinity, Pc = -Infinity, Fc = Infinity, Ic = Infinity;
		return this.forEach((function(Lc) {
			io = Math.max(Lc[0], io), Pc = Math.max(Lc[1], Pc), Fc = Math.min(Lc[0], Fc), Ic = Math.min(Lc[1], Ic);
		})), new kt(Fc, Ic, io - Fc, Pc - Ic);
	}
	move(io, Pc) {
		let Fc = this.bbox();
		if (io -= Fc.x, Pc -= Fc.y, !isNaN(io) && !isNaN(Pc)) for (let Fc = this.length - 1; Fc >= 0; Fc--) this[Fc] = [this[Fc][0] + io, this[Fc][1] + Pc];
		return this;
	}
	parse(io = [0, 0]) {
		let Pc = [];
		(io = io instanceof Array ? Array.prototype.concat.apply([], io) : io.trim().split(dt).map(parseFloat)).length % 2 != 0 && io.pop();
		for (let Fc = 0, Ic = io.length; Fc < Ic; Fc += 2) Pc.push([io[Fc], io[Fc + 1]]);
		return Pc;
	}
	size(io, Pc) {
		let Fc, Ic = this.bbox();
		for (Fc = this.length - 1; Fc >= 0; Fc--) Ic.width && (this[Fc][0] = (this[Fc][0] - Ic.x) * io / Ic.width + Ic.x), Ic.height && (this[Fc][1] = (this[Fc][1] - Ic.y) * Pc / Ic.height + Ic.y);
		return this;
	}
	toLine() {
		return {
			x1: this[0][0],
			y1: this[0][1],
			x2: this[1][0],
			y2: this[1][1]
		};
	}
	toString() {
		let io = [];
		for (let Pc = 0, Fc = this.length; Pc < Fc; Pc++) io.push(this[Pc].join(","));
		return io.join(" ");
	}
	transform(io) {
		return this.clone().transformO(io);
	}
	transformO(io) {
		vt.isMatrixLike(io) || (io = new vt(io));
		for (let Pc = this.length; Pc--;) {
			let [Fc, Ic] = this[Pc];
			this[Pc][0] = io.a * Fc + io.c * Ic + io.e, this[Pc][1] = io.b * Fc + io.d * Ic + io.f;
		}
		return this;
	}
}, pe = ge, fe = Object.freeze({
	__proto__: null,
	MorphArray: pe,
	height: function(io) {
		let Pc = this.bbox();
		return io == null ? Pc.height : this.size(Pc.width, io);
	},
	width: function(io) {
		let Pc = this.bbox();
		return io == null ? Pc.width : this.size(io, Pc.height);
	},
	x: function(io) {
		return io == null ? this.bbox().x : this.move(io, this.bbox().y);
	},
	y: function(io) {
		return io == null ? this.bbox().y : this.move(this.bbox().x, io);
	}
}), xe = class extends qt {
	constructor(io, Pc = io) {
		super(G("line", io), Pc);
	}
	array() {
		return new ge([[this.attr("x1"), this.attr("y1")], [this.attr("x2"), this.attr("y2")]]);
	}
	move(io, Pc) {
		return this.attr(this.array().move(io, Pc).toLine());
	}
	plot(io, Pc, Fc, Ic) {
		return io == null ? this.array() : (io = Pc === void 0 ? new ge(io).toLine() : {
			x1: io,
			y1: Pc,
			x2: Fc,
			y2: Ic
		}, this.attr(io));
	}
	size(io, Pc) {
		let Fc = I(this, io, Pc);
		return this.attr(this.array().size(Fc.width, Fc.height).toLine());
	}
};
Q(xe, fe), A({ Container: { line: K((function(...io) {
	return xe.prototype.plot.apply(this.put(new xe()), io[0] == null ? [
		0,
		0,
		0,
		0
	] : io);
})) } }), q(xe, "Line");
var be = class extends Vt {
	constructor(io, Pc = io) {
		super(G("marker", io), Pc);
	}
	height(io) {
		return this.attr("markerHeight", io);
	}
	orient(io) {
		return this.attr("orient", io);
	}
	ref(io, Pc) {
		return this.attr("refX", io).attr("refY", Pc);
	}
	toString() {
		return "url(#" + this.id() + ")";
	}
	update(io) {
		return this.clear(), typeof io == "function" && io.call(this, this), this;
	}
	width(io) {
		return this.attr("markerWidth", io);
	}
};
function me(io, Pc) {
	return function(Fc) {
		return Fc == null ? this[io] : (this[io] = Fc, Pc && Pc.call(this), this);
	};
}
A({
	Container: { marker(...io) {
		return this.defs().marker(...io);
	} },
	Defs: { marker: K((function(io, Pc, Fc) {
		return this.put(new be()).size(io, Pc).ref(io / 2, Pc / 2).viewbox(0, 0, io, Pc).attr("orient", "auto").update(Fc);
	})) },
	marker: { marker(io, Pc, Fc, Ic) {
		let Lc = ["marker"];
		return io !== "all" && Lc.push(io), Lc = Lc.join("-"), io = arguments[1] instanceof be ? arguments[1] : this.defs().marker(Pc, Fc, Ic), this.attr(Lc, io);
	} }
}), q(be, "Marker");
var ve = {
	"-": function(io) {
		return io;
	},
	"<>": function(io) {
		return -Math.cos(io * Math.PI) / 2 + .5;
	},
	">": function(io) {
		return Math.sin(io * Math.PI / 2);
	},
	"<": function(io) {
		return 1 - Math.cos(io * Math.PI / 2);
	},
	bezier: function(io, Pc, Fc, Ic) {
		return function(Lc) {
			return Lc < 0 ? io > 0 ? Pc / io * Lc : Fc > 0 ? Ic / Fc * Lc : 0 : Lc > 1 ? Fc < 1 ? (1 - Ic) / (1 - Fc) * Lc + (Ic - Fc) / (1 - Fc) : io < 1 ? (1 - Pc) / (1 - io) * Lc + (Pc - io) / (1 - io) : 1 : 3 * Lc * Math.pow(1 - Lc, 2) * Pc + 3 * Math.pow(Lc, 2) * (1 - Lc) * Ic + Math.pow(Lc, 3);
		};
	},
	steps: function(io, Pc = "end") {
		Pc = Pc.split("-").reverse()[0];
		let Fc = io;
		return Pc === "none" ? --Fc : Pc === "both" && ++Fc, (Ic, Lc = !1) => {
			let Rc = Math.floor(Ic * io), zc = Ic * Rc % 1 == 0;
			return Pc !== "start" && Pc !== "both" || ++Rc, Lc && zc && --Rc, Ic >= 0 && Rc < 0 && (Rc = 0), Ic <= 1 && Rc > Fc && (Rc = Fc), Rc / Fc;
		};
	}
}, ye = class {
	done() {
		return !1;
	}
}, we = class extends ye {
	constructor(io = Ht) {
		super(), this.ease = ve[io] || io;
	}
	step(io, Pc, Fc) {
		return typeof io == "number" ? io + (Pc - io) * this.ease(Fc) : Fc < 1 ? io : Pc;
	}
}, ke = class extends ye {
	constructor(io) {
		super(), this.stepper = io;
	}
	done(io) {
		return io.done;
	}
	step(io, Pc, Fc, Ic) {
		return this.stepper(io, Pc, Fc, Ic);
	}
};
function Ae() {
	let io = (this._duration || 500) / 1e3, Pc = this._overshoot || 0, Fc = Math.PI, Ic = Math.log(Pc / 100 + 1e-10), Lc = -Ic / Math.sqrt(Fc * Fc + Ic * Ic), Rc = 3.9 / (Lc * io);
	this.d = 2 * Lc * Rc, this.k = Rc * Rc;
}
Q(class extends ke {
	constructor(io = 500, Pc = 0) {
		super(), this.duration(io).overshoot(Pc);
	}
	step(io, Pc, Fc, Ic) {
		if (typeof io == "string") return io;
		if (Ic.done = Fc === Infinity, Fc === Infinity) return Pc;
		if (Fc === 0) return io;
		Fc > 100 && (Fc = 16), Fc /= 1e3;
		let Lc = Ic.velocity || 0, Rc = -this.d * Lc - this.k * (io - Pc), zc = io + Lc * Fc + Rc * Fc * Fc / 2;
		return Ic.velocity = Lc + Rc * Fc, Ic.done = Math.abs(Pc - zc) + Math.abs(Lc) < .002, Ic.done ? Pc : zc;
	}
}, {
	duration: me("_duration", Ae),
	overshoot: me("_overshoot", Ae)
}), Q(class extends ke {
	constructor(io = .1, Pc = .01, Fc = 0, Ic = 1e3) {
		super(), this.p(io).i(Pc).d(Fc).windup(Ic);
	}
	step(io, Pc, Fc, Ic) {
		if (typeof io == "string") return io;
		if (Ic.done = Fc === Infinity, Fc === Infinity) return Pc;
		if (Fc === 0) return io;
		let Lc = Pc - io, Rc = (Ic.integral || 0) + Lc * Fc, zc = (Lc - (Ic.error || 0)) / Fc, Bc = this._windup;
		return !1 !== Bc && (Rc = Math.max(-Bc, Math.min(Rc, Bc))), Ic.error = Lc, Ic.integral = Rc, Ic.done = Math.abs(Lc) < .001, Ic.done ? Pc : io + (this.P * Lc + this.I * Rc + this.D * zc);
	}
}, {
	windup: me("_windup"),
	p: me("P"),
	i: me("I"),
	d: me("D")
});
var Ce = {
	M: 2,
	L: 2,
	H: 1,
	V: 1,
	C: 6,
	S: 4,
	Q: 4,
	T: 2,
	A: 7,
	Z: 0
}, Se = {
	M: function(io, Pc, Fc) {
		return Pc.x = Fc.x = io[0], Pc.y = Fc.y = io[1], [
			"M",
			Pc.x,
			Pc.y
		];
	},
	L: function(io, Pc) {
		return Pc.x = io[0], Pc.y = io[1], [
			"L",
			io[0],
			io[1]
		];
	},
	H: function(io, Pc) {
		return Pc.x = io[0], ["H", io[0]];
	},
	V: function(io, Pc) {
		return Pc.y = io[0], ["V", io[0]];
	},
	C: function(io, Pc) {
		return Pc.x = io[4], Pc.y = io[5], [
			"C",
			io[0],
			io[1],
			io[2],
			io[3],
			io[4],
			io[5]
		];
	},
	S: function(io, Pc) {
		return Pc.x = io[2], Pc.y = io[3], [
			"S",
			io[0],
			io[1],
			io[2],
			io[3]
		];
	},
	Q: function(io, Pc) {
		return Pc.x = io[2], Pc.y = io[3], [
			"Q",
			io[0],
			io[1],
			io[2],
			io[3]
		];
	},
	T: function(io, Pc) {
		return Pc.x = io[0], Pc.y = io[1], [
			"T",
			io[0],
			io[1]
		];
	},
	Z: function(io, Pc, Fc) {
		return Pc.x = Fc.x, Pc.y = Fc.y, ["Z"];
	},
	A: function(io, Pc) {
		return Pc.x = io[5], Pc.y = io[6], [
			"A",
			io[0],
			io[1],
			io[2],
			io[3],
			io[4],
			io[5],
			io[6]
		];
	}
}, Le = "mlhvqtcsaz".split("");
for (let io = 0, Pc = Le.length; io < Pc; ++io) Se[Le[io]] = function(io) {
	return function(Pc, Fc, Ic) {
		if (io === "H") Pc[0] += Fc.x;
		else if (io === "V") Pc[0] += Fc.y;
		else if (io === "A") Pc[5] += Fc.x, Pc[6] += Fc.y;
		else for (let io = 0, Ic = Pc.length; io < Ic; ++io) Pc[io] = Pc[io] + (io % 2 ? Fc.y : Fc.x);
		return Se[io](Pc, Fc, Ic);
	};
}(Le[io].toUpperCase());
function Me(io) {
	return io.segment.length && io.segment.length - 1 === Ce[io.segment[0].toUpperCase()];
}
function Pe(io, Pc) {
	io.inNumber && Ie(io, !1);
	let Fc = ut.test(Pc);
	if (Fc) io.segment = [Pc];
	else {
		let Pc = io.lastCommand, Fc = Pc.toLowerCase();
		io.segment = [Fc === "m" ? Pc === Fc ? "l" : "L" : Pc];
	}
	return io.inSegment = !0, io.lastCommand = io.segment[0], Fc;
}
function Ie(io, Pc) {
	if (!io.inNumber) throw Error("Parser Error");
	io.number && io.segment.push(parseFloat(io.number)), io.inNumber = Pc, io.number = "", io.pointSeen = !1, io.hasExponent = !1, Me(io) && Te(io);
}
function Te(io) {
	io.inSegment = !1, io.absolute && (io.segment = function(io) {
		return Se[io.segment[0]](io.segment.slice(1), io.p, io.p0);
	}(io)), io.segments.push(io.segment);
}
function ze(io) {
	if (!io.segment.length) return !1;
	let Pc = io.segment[0].toUpperCase() === "A", Fc = io.segment.length;
	return Pc && (Fc === 4 || Fc === 5);
}
function Xe(io) {
	return io.lastToken.toUpperCase() === "E";
}
var Re = new Set([
	" ",
	",",
	"	",
	"\n",
	"\r",
	"\f"
]), Ee = class extends Dt {
	bbox() {
		return yt().path.setAttribute("d", this.toString()), new kt(yt.nodes.path.getBBox());
	}
	move(io, Pc) {
		let Fc = this.bbox();
		if (io -= Fc.x, Pc -= Fc.y, !isNaN(io) && !isNaN(Pc)) for (let Fc, Ic = this.length - 1; Ic >= 0; Ic--) Fc = this[Ic][0], Fc === "M" || Fc === "L" || Fc === "T" ? (this[Ic][1] += io, this[Ic][2] += Pc) : Fc === "H" ? this[Ic][1] += io : Fc === "V" ? this[Ic][1] += Pc : Fc === "C" || Fc === "S" || Fc === "Q" ? (this[Ic][1] += io, this[Ic][2] += Pc, this[Ic][3] += io, this[Ic][4] += Pc, Fc === "C" && (this[Ic][5] += io, this[Ic][6] += Pc)) : Fc === "A" && (this[Ic][6] += io, this[Ic][7] += Pc);
		return this;
	}
	parse(io = "M0 0") {
		return Array.isArray(io) && (io = Array.prototype.concat.apply([], io).toString()), function(io, Pc = !0) {
			let Fc = 0, Ic = "", Lc = {
				segment: [],
				inNumber: !1,
				number: "",
				lastToken: "",
				inSegment: !1,
				segments: [],
				pointSeen: !1,
				hasExponent: !1,
				absolute: Pc,
				p0: new bt(),
				p: new bt()
			};
			for (; Lc.lastToken = Ic, Ic = io.charAt(Fc++);) if (Lc.inSegment || !Pe(Lc, Ic)) if (Ic !== ".") if (isNaN(parseInt(Ic))) if (Re.has(Ic)) Lc.inNumber && Ie(Lc, !1);
			else if (Ic !== "-" && Ic !== "+") if (Ic.toUpperCase() !== "E") {
				if (ut.test(Ic)) {
					if (Lc.inNumber) Ie(Lc, !1);
					else {
						if (!Me(Lc)) throw Error("parser Error");
						Te(Lc);
					}
					--Fc;
				}
			} else Lc.number += Ic, Lc.hasExponent = !0;
			else {
				if (Lc.inNumber && !Xe(Lc)) {
					Ie(Lc, !1), --Fc;
					continue;
				}
				Lc.number += Ic, Lc.inNumber = !0;
			}
			else {
				if (Lc.number === "0" || ze(Lc)) {
					Lc.inNumber = !0, Lc.number = Ic, Ie(Lc, !0);
					continue;
				}
				Lc.inNumber = !0, Lc.number += Ic;
			}
			else {
				if (Lc.pointSeen || Lc.hasExponent) {
					Ie(Lc, !1), --Fc;
					continue;
				}
				Lc.inNumber = !0, Lc.pointSeen = !0, Lc.number += Ic;
			}
			return Lc.inNumber && Ie(Lc, !1), Lc.inSegment && Me(Lc) && Te(Lc), Lc.segments;
		}(io);
	}
	size(io, Pc) {
		let Fc = this.bbox(), Ic, Lc;
		for (Fc.width = Fc.width === 0 ? 1 : Fc.width, Fc.height = Fc.height === 0 ? 1 : Fc.height, Ic = this.length - 1; Ic >= 0; Ic--) Lc = this[Ic][0], Lc === "M" || Lc === "L" || Lc === "T" ? (this[Ic][1] = (this[Ic][1] - Fc.x) * io / Fc.width + Fc.x, this[Ic][2] = (this[Ic][2] - Fc.y) * Pc / Fc.height + Fc.y) : Lc === "H" ? this[Ic][1] = (this[Ic][1] - Fc.x) * io / Fc.width + Fc.x : Lc === "V" ? this[Ic][1] = (this[Ic][1] - Fc.y) * Pc / Fc.height + Fc.y : Lc === "C" || Lc === "S" || Lc === "Q" ? (this[Ic][1] = (this[Ic][1] - Fc.x) * io / Fc.width + Fc.x, this[Ic][2] = (this[Ic][2] - Fc.y) * Pc / Fc.height + Fc.y, this[Ic][3] = (this[Ic][3] - Fc.x) * io / Fc.width + Fc.x, this[Ic][4] = (this[Ic][4] - Fc.y) * Pc / Fc.height + Fc.y, Lc === "C" && (this[Ic][5] = (this[Ic][5] - Fc.x) * io / Fc.width + Fc.x, this[Ic][6] = (this[Ic][6] - Fc.y) * Pc / Fc.height + Fc.y)) : Lc === "A" && (this[Ic][1] = this[Ic][1] * io / Fc.width, this[Ic][2] = this[Ic][2] * Pc / Fc.height, this[Ic][6] = (this[Ic][6] - Fc.x) * io / Fc.width + Fc.x, this[Ic][7] = (this[Ic][7] - Fc.y) * Pc / Fc.height + Fc.y);
		return this;
	}
	toString() {
		return function(io) {
			let Pc = "";
			for (let Fc = 0, Ic = io.length; Fc < Ic; Fc++) Pc += io[Fc][0], io[Fc][1] != null && (Pc += io[Fc][1], io[Fc][2] != null && (Pc += " ", Pc += io[Fc][2], io[Fc][3] != null && (Pc += " ", Pc += io[Fc][3], Pc += " ", Pc += io[Fc][4], io[Fc][5] != null && (Pc += " ", Pc += io[Fc][5], Pc += " ", Pc += io[Fc][6], io[Fc][7] != null && (Pc += " ", Pc += io[Fc][7])))));
			return Pc + " ";
		}(this);
	}
}, Ye = (io) => {
	let Pc = typeof io;
	return Pc === "number" ? _t : Pc === "string" ? xt.isColor(io) ? xt : dt.test(io) ? ut.test(io) ? Ee : Dt : tt.test(io) ? _t : Oe : Ne.indexOf(io.constructor) > -1 ? io.constructor : Array.isArray(io) ? Dt : Pc === "object" ? _e : Oe;
}, He = class {
	constructor(io) {
		this._stepper = io || new we("-"), this._from = null, this._to = null, this._type = null, this._context = null, this._morphObj = null;
	}
	at(io) {
		return this._morphObj.morph(this._from, this._to, io, this._stepper, this._context);
	}
	done() {
		return this._context.map(this._stepper.done).reduce((function(io, Pc) {
			return io && Pc;
		}), !0);
	}
	from(io) {
		return io == null ? this._from : (this._from = this._set(io), this);
	}
	stepper(io) {
		return io == null ? this._stepper : (this._stepper = io, this);
	}
	to(io) {
		return io == null ? this._to : (this._to = this._set(io), this);
	}
	type(io) {
		return io == null ? this._type : (this._type = io, this);
	}
	_set(io) {
		this._type || this.type(Ye(io));
		let Pc = new this._type(io);
		return this._type === xt && (Pc = this._to ? Pc[this._to[4]]() : this._from ? Pc[this._from[4]]() : Pc), this._type === _e && (Pc = this._to ? Pc.align(this._to) : this._from ? Pc.align(this._from) : Pc), Pc = Pc.toConsumable(), this._morphObj = this._morphObj || new this._type(), this._context = this._context || Array.apply(null, Array(Pc.length)).map(Object).map((function(io) {
			return io.done = !0, io;
		})), Pc;
	}
}, Oe = class {
	constructor(...io) {
		this.init(...io);
	}
	init(io) {
		return io = Array.isArray(io) ? io[0] : io, this.value = io, this;
	}
	toArray() {
		return [this.value];
	}
	valueOf() {
		return this.value;
	}
}, Fe = class io {
	constructor(...io) {
		this.init(...io);
	}
	init(Pc) {
		return Array.isArray(Pc) && (Pc = {
			scaleX: Pc[0],
			scaleY: Pc[1],
			shear: Pc[2],
			rotate: Pc[3],
			translateX: Pc[4],
			translateY: Pc[5],
			originX: Pc[6],
			originY: Pc[7]
		}), Object.assign(this, io.defaults, Pc), this;
	}
	toArray() {
		let io = this;
		return [
			io.scaleX,
			io.scaleY,
			io.shear,
			io.rotate,
			io.translateX,
			io.translateY,
			io.originX,
			io.originY
		];
	}
};
Fe.defaults = {
	scaleX: 1,
	scaleY: 1,
	shear: 0,
	rotate: 0,
	translateX: 0,
	translateY: 0,
	originX: 0,
	originY: 0
};
var De = (io, Pc) => io[0] < Pc[0] ? -1 : io[0] > Pc[0] ? 1 : 0, _e = class {
	constructor(...io) {
		this.init(...io);
	}
	align(io) {
		let Pc = this.values;
		for (let Fc = 0, Ic = Pc.length; Fc < Ic; ++Fc) {
			if (Pc[Fc + 1] === io[Fc + 1]) {
				if (Pc[Fc + 1] === xt && io[Fc + 7] !== Pc[Fc + 7]) {
					let Pc = io[Fc + 7], Ic = new xt(this.values.splice(Fc + 3, 5))[Pc]().toArray();
					this.values.splice(Fc + 3, 0, ...Ic);
				}
				Fc += Pc[Fc + 2] + 2;
				continue;
			}
			if (!io[Fc + 1]) return this;
			let Ic = new io[Fc + 1]().toArray(), Lc = Pc[Fc + 2] + 3;
			Pc.splice(Fc, Lc, io[Fc], io[Fc + 1], io[Fc + 2], ...Ic), Fc += Pc[Fc + 2] + 2;
		}
		return this;
	}
	init(io) {
		if (this.values = [], Array.isArray(io)) return void (this.values = io.slice());
		io = io || {};
		let Pc = [];
		for (let Fc in io) {
			let Ic = Ye(io[Fc]), Lc = new Ic(io[Fc]).toArray();
			Pc.push([
				Fc,
				Ic,
				Lc.length,
				...Lc
			]);
		}
		return Pc.sort(De), this.values = Pc.reduce(((io, Pc) => io.concat(Pc)), []), this;
	}
	toArray() {
		return this.values;
	}
	valueOf() {
		let io = {}, Pc = this.values;
		for (; Pc.length;) {
			let Fc = Pc.shift(), Ic = Pc.shift(), Lc = Pc.shift();
			io[Fc] = new Ic(Pc.splice(0, Lc));
		}
		return io;
	}
}, Ne = [
	Oe,
	Fe,
	_e
], We = class extends qt {
	constructor(io, Pc = io) {
		super(G("path", io), Pc);
	}
	array() {
		return this._array || (this._array = new Ee(this.attr("d")));
	}
	clear() {
		return delete this._array, this;
	}
	height(io) {
		return io == null ? this.bbox().height : this.size(this.bbox().width, io);
	}
	move(io, Pc) {
		return this.attr("d", this.array().move(io, Pc));
	}
	plot(io) {
		return io == null ? this.array() : this.clear().attr("d", typeof io == "string" ? io : this._array = new Ee(io));
	}
	size(io, Pc) {
		let Fc = I(this, io, Pc);
		return this.attr("d", this.array().size(Fc.width, Fc.height));
	}
	width(io) {
		return io == null ? this.bbox().width : this.size(io, this.bbox().height);
	}
	x(io) {
		return io == null ? this.bbox().x : this.move(io, this.bbox().y);
	}
	y(io) {
		return io == null ? this.bbox().y : this.move(this.bbox().x, io);
	}
};
We.prototype.MorphArray = Ee, A({ Container: { path: K((function(io) {
	return this.put(new We()).plot(io || new Ee());
})) } }), q(We, "Path");
var Be = Object.freeze({
	__proto__: null,
	array: function() {
		return this._array || (this._array = new ge(this.attr("points")));
	},
	clear: function() {
		return delete this._array, this;
	},
	move: function(io, Pc) {
		return this.attr("points", this.array().move(io, Pc));
	},
	plot: function(io) {
		return io == null ? this.array() : this.clear().attr("points", typeof io == "string" ? io : this._array = new ge(io));
	},
	size: function(io, Pc) {
		let Fc = I(this, io, Pc);
		return this.attr("points", this.array().size(Fc.width, Fc.height));
	}
}), Ge = class extends qt {
	constructor(io, Pc = io) {
		super(G("polygon", io), Pc);
	}
};
A({ Container: { polygon: K((function(io) {
	return this.put(new Ge()).plot(io || new ge());
})) } }), Q(Ge, fe), Q(Ge, Be), q(Ge, "Polygon");
var je = class extends qt {
	constructor(io, Pc = io) {
		super(G("polyline", io), Pc);
	}
};
A({ Container: { polyline: K((function(io) {
	return this.put(new je()).plot(io || new ge());
})) } }), Q(je, fe), Q(je, Be), q(je, "Polyline");
var Ve = class extends qt {
	constructor(io, Pc = io) {
		super(G("rect", io), Pc);
	}
};
Q(Ve, {
	rx: Zt,
	ry: $t
}), A({ Container: { rect: K((function(io, Pc) {
	return this.put(new Ve()).size(io, Pc);
})) } }), q(Ve, "Rect");
var Ue = class {
	constructor() {
		this._first = null, this._last = null;
	}
	first() {
		return this._first && this._first.value;
	}
	last() {
		return this._last && this._last.value;
	}
	push(io) {
		let Pc = io.next === void 0 ? {
			value: io,
			next: null,
			prev: null
		} : io;
		return this._last ? (Pc.prev = this._last, this._last.next = Pc, this._last = Pc) : (this._last = Pc, this._first = Pc), Pc;
	}
	remove(io) {
		io.prev && (io.prev.next = io.next), io.next && (io.next.prev = io.prev), io === this._last && (this._last = io.prev), io === this._first && (this._first = io.next), io.prev = null, io.next = null;
	}
	shift() {
		let io = this._first;
		return io ? (this._first = io.next, this._first && (this._first.prev = null), this._last = this._first ? this._last : null, io.value) : null;
	}
}, qe = {
	nextDraw: null,
	frames: new Ue(),
	timeouts: new Ue(),
	immediates: new Ue(),
	timer: () => O.window.performance || O.window.Date,
	transforms: [],
	frame(io) {
		let Pc = qe.frames.push({ run: io });
		return qe.nextDraw === null && (qe.nextDraw = O.window.requestAnimationFrame(qe._draw)), Pc;
	},
	timeout(io, Pc) {
		Pc = Pc || 0;
		let Fc = qe.timer().now() + Pc, Ic = qe.timeouts.push({
			run: io,
			time: Fc
		});
		return qe.nextDraw === null && (qe.nextDraw = O.window.requestAnimationFrame(qe._draw)), Ic;
	},
	immediate(io) {
		let Pc = qe.immediates.push(io);
		return qe.nextDraw === null && (qe.nextDraw = O.window.requestAnimationFrame(qe._draw)), Pc;
	},
	cancelFrame(io) {
		io != null && qe.frames.remove(io);
	},
	clearTimeout(io) {
		io != null && qe.timeouts.remove(io);
	},
	cancelImmediate(io) {
		io != null && qe.immediates.remove(io);
	},
	_draw(io) {
		let Pc = null, Fc = qe.timeouts.last();
		for (; (Pc = qe.timeouts.shift()) && (io >= Pc.time ? Pc.run() : qe.timeouts.push(Pc), Pc !== Fc););
		let Ic = null, Lc = qe.frames.last();
		for (; Ic !== Lc && (Ic = qe.frames.shift());) Ic.run(io);
		let Rc = null;
		for (; Rc = qe.immediates.shift();) Rc();
		qe.nextDraw = qe.timeouts.first() || qe.frames.first() ? O.window.requestAnimationFrame(qe._draw) : null;
	}
}, Ze = function(io) {
	let Pc = io.start, Fc = io.runner.duration();
	return {
		start: Pc,
		duration: Fc,
		end: Pc + Fc,
		runner: io.runner
	};
}, $e = function() {
	let io = O.window;
	return (io.performance || io.Date).now();
}, Je = class extends Rt {
	constructor(io = $e) {
		super(), this._timeSource = io, this.terminate();
	}
	active() {
		return !!this._nextFrame;
	}
	finish() {
		return this.time(this.getEndTimeOfTimeline() + 1), this.pause();
	}
	getEndTime() {
		let io = this.getLastRunnerInfo(), Pc = io ? io.runner.duration() : 0;
		return (io ? io.start : this._time) + Pc;
	}
	getEndTimeOfTimeline() {
		let io = this._runners.map(((io) => io.start + io.runner.duration()));
		return Math.max(0, ...io);
	}
	getLastRunnerInfo() {
		return this.getRunnerInfoById(this._lastRunnerId);
	}
	getRunnerInfoById(io) {
		return this._runners[this._runnerIds.indexOf(io)] || null;
	}
	pause() {
		return this._paused = !0, this._continue();
	}
	persist(io) {
		return io == null ? this._persist : (this._persist = io, this);
	}
	play() {
		return this._paused = !1, this.updateTime()._continue();
	}
	reverse(io) {
		let Pc = this.speed();
		if (io == null) return this.speed(-Pc);
		let Fc = Math.abs(Pc);
		return this.speed(io ? -Fc : Fc);
	}
	schedule(io, Pc, Fc) {
		if (io == null) return this._runners.map(Ze);
		let Ic = 0, Lc = this.getEndTime();
		if (Pc = Pc || 0, Fc == null || Fc === "last" || Fc === "after") Ic = Lc;
		else if (Fc === "absolute" || Fc === "start") Ic = Pc, Pc = 0;
		else if (Fc === "now") Ic = this._time;
		else if (Fc === "relative") {
			let Fc = this.getRunnerInfoById(io.id);
			Fc && (Ic = Fc.start + Pc, Pc = 0);
		} else {
			if (Fc !== "with-last") throw Error("Invalid value for the \"when\" parameter");
			{
				let io = this.getLastRunnerInfo();
				Ic = io ? io.start : this._time;
			}
		}
		io.unschedule(), io.timeline(this);
		let Rc = io.persist(), zc = {
			persist: Rc === null ? this._persist : Rc,
			start: Ic + Pc,
			runner: io
		};
		return this._lastRunnerId = io.id, this._runners.push(zc), this._runners.sort(((io, Pc) => io.start - Pc.start)), this._runnerIds = this._runners.map(((io) => io.runner.id)), this.updateTime()._continue(), this;
	}
	seek(io) {
		return this.time(this._time + io);
	}
	source(io) {
		return io == null ? this._timeSource : (this._timeSource = io, this);
	}
	speed(io) {
		return io == null ? this._speed : (this._speed = io, this);
	}
	stop() {
		return this.time(0), this.pause();
	}
	time(io) {
		return io == null ? this._time : (this._time = io, this._continue(!0));
	}
	unschedule(io) {
		let Pc = this._runnerIds.indexOf(io.id);
		return Pc < 0 || (this._runners.splice(Pc, 1), this._runnerIds.splice(Pc, 1), io.timeline(null)), this;
	}
	updateTime() {
		return this.active() || (this._lastSourceTime = this._timeSource()), this;
	}
	_continue(io = !1) {
		return qe.cancelFrame(this._nextFrame), this._nextFrame = null, io ? this._stepImmediate() : (this._paused || (this._nextFrame = qe.frame(this._step)), this);
	}
	_stepFn(io = !1) {
		let Pc = this._timeSource(), Fc = Pc - this._lastSourceTime;
		io && (Fc = 0);
		let Ic = this._speed * Fc + (this._time - this._lastStepTime);
		this._lastSourceTime = Pc, io || (this._time += Ic, this._time = this._time < 0 ? 0 : this._time), this._lastStepTime = this._time, this.fire("time", this._time);
		for (let io = this._runners.length; io--;) {
			let Pc = this._runners[io], Fc = Pc.runner;
			this._time - Pc.start <= 0 && Fc.reset();
		}
		let Lc = !1;
		for (let io = 0, Pc = this._runners.length; io < Pc; io++) {
			let Fc = this._runners[io], Rc = Fc.runner, zc = Ic, Bc = this._time - Fc.start;
			if (Bc <= 0) {
				Lc = !0;
				continue;
			}
			Bc < zc && (zc = Bc), Rc.active() && (Rc.step(zc).done ? !0 !== Fc.persist && Rc.duration() - Rc.time() + this._time + Fc.persist < this._time && (Rc.unschedule(), --io, --Pc) : Lc = !0);
		}
		return Lc && !(this._speed < 0 && this._time === 0) || this._runnerIds.length && this._speed < 0 && this._time > 0 ? this._continue() : (this.pause(), this.fire("finished")), this;
	}
	terminate() {
		this._startTime = 0, this._speed = 1, this._persist = 0, this._nextFrame = null, this._paused = !0, this._runners = [], this._runnerIds = [], this._lastRunnerId = -1, this._time = 0, this._lastSourceTime = 0, this._lastStepTime = 0, this._step = this._stepFn.bind(this, !1), this._stepImmediate = this._stepFn.bind(this, !0);
	}
};
A({ Element: { timeline: function(io) {
	return io == null ? (this._timeline = this._timeline || new Je(), this._timeline) : (this._timeline = io, this);
} } });
var Qe = class io extends Rt {
	constructor(Pc) {
		super(), this.id = io.id++, Pc = typeof (Pc = Pc == null ? Yt : Pc) == "function" ? new ke(Pc) : Pc, this._element = null, this._timeline = null, this.done = !1, this._queue = [], this._duration = typeof Pc == "number" && Pc, this._isDeclarative = Pc instanceof ke, this._stepper = this._isDeclarative ? Pc : new we(), this._history = {}, this.enabled = !0, this._time = 0, this._lastTime = 0, this._reseted = !0, this.transforms = new vt(), this.transformId = 1, this._haveReversed = !1, this._reverse = !1, this._loopsDone = 0, this._swing = !1, this._wait = 0, this._times = 1, this._frameId = null, this._persist = !!this._isDeclarative || null;
	}
	static sanitise(io, Pc, Fc) {
		var Ic, Lc, Rc, zc, Bc, Vc, Hc;
		let Uc = 1, Wc = !1, Gc = 0;
		return Pc = (Ic = Pc) == null ? Ot : Ic, Fc = Fc || "last", typeof (io = (Lc = io) == null ? Yt : Lc) != "object" || io instanceof ye || (Pc = (Rc = io.delay) == null ? Pc : Rc, Fc = (zc = io.when) == null ? Fc : zc, Wc = io.swing || Wc, Uc = (Bc = io.times) == null ? Uc : Bc, Gc = (Vc = io.wait) == null ? Gc : Vc, io = (Hc = io.duration) == null ? Yt : Hc), {
			duration: io,
			delay: Pc,
			swing: Wc,
			times: Uc,
			wait: Gc,
			when: Fc
		};
	}
	active(io) {
		return io == null ? this.enabled : (this.enabled = io, this);
	}
	addTransform(io) {
		return this.transforms.lmultiplyO(io), this;
	}
	after(io) {
		return this.on("finished", io);
	}
	animate(Pc, Fc, Ic) {
		let Lc = io.sanitise(Pc, Fc, Ic), Rc = new io(Lc.duration);
		return this._timeline && Rc.timeline(this._timeline), this._element && Rc.element(this._element), Rc.loop(Lc).schedule(Lc.delay, Lc.when);
	}
	clearTransform() {
		return this.transforms = new vt(), this;
	}
	clearTransformsFromQueue() {
		this.done && this._timeline && this._timeline._runnerIds.includes(this.id) || (this._queue = this._queue.filter(((io) => !io.isTransform)));
	}
	delay(io) {
		return this.animate(0, io);
	}
	duration() {
		return this._times * (this._wait + this._duration) - this._wait;
	}
	during(io) {
		return this.queue(null, io);
	}
	ease(io) {
		return this._stepper = new we(io), this;
	}
	element(io) {
		return io == null ? this._element : (this._element = io, io._prepareRunner(), this);
	}
	finish() {
		return this.step(Infinity);
	}
	loop(io, Pc, Fc) {
		return typeof io == "object" && (Pc = io.swing, Fc = io.wait, io = io.times), this._times = io || Infinity, this._swing = Pc || !1, this._wait = Fc || 0, !0 === this._times && (this._times = Infinity), this;
	}
	loops(io) {
		let Pc = this._duration + this._wait;
		if (io == null) {
			let io = Math.floor(this._time / Pc), Fc = (this._time - io * Pc) / this._duration;
			return Math.min(io + Fc, this._times);
		}
		let Fc = io % 1, Ic = Pc * Math.floor(io) + this._duration * Fc;
		return this.time(Ic);
	}
	persist(io) {
		return io == null ? this._persist : (this._persist = io, this);
	}
	position(io) {
		let Pc = this._time, Fc = this._duration, Ic = this._wait, Lc = this._times, Rc = this._swing, zc = this._reverse, Bc;
		if (io == null) {
			let io = function(io) {
				let Pc = Rc * Math.floor(io % (2 * (Ic + Fc)) / (Ic + Fc)), Lc = Pc && !zc || !Pc && zc, Bc = Math.pow(-1, Lc) * (io % (Ic + Fc)) / Fc + Lc;
				return Math.max(Math.min(Bc, 1), 0);
			}, Vc = Lc * (Ic + Fc) - Ic;
			return Bc = Pc <= 0 ? Math.round(io(1e-5)) : Pc < Vc ? io(Pc) : Math.round(io(Vc - 1e-5)), Bc;
		}
		let Vc = Math.floor(this.loops()), Hc = Rc && Vc % 2 == 0;
		return Bc = Vc + (Hc && !zc || zc && Hc ? io : 1 - io), this.loops(Bc);
	}
	progress(io) {
		return io == null ? Math.min(1, this._time / this.duration()) : this.time(io * this.duration());
	}
	queue(io, Pc, Fc, Ic) {
		return this._queue.push({
			initialiser: io || Et,
			runner: Pc || Et,
			retarget: Fc,
			isTransform: Ic,
			initialised: !1,
			finished: !1
		}), this.timeline() && this.timeline()._continue(), this;
	}
	reset() {
		return this._reseted || (this.time(0), this._reseted = !0), this;
	}
	reverse(io) {
		return this._reverse = io == null ? !this._reverse : io, this;
	}
	schedule(io, Pc, Fc) {
		if (io instanceof Je || (Fc = Pc, Pc = io, io = this.timeline()), !io) throw Error("Runner cannot be scheduled without timeline");
		return io.schedule(this, Pc, Fc), this;
	}
	step(io) {
		if (!this.enabled) return this;
		io = io == null ? 16 : io, this._time += io;
		let Pc = this.position(), Fc = this._lastPosition !== Pc && this._time >= 0;
		this._lastPosition = Pc;
		let Ic = this.duration(), Lc = this._lastTime <= 0 && this._time > 0, Rc = this._lastTime < Ic && this._time >= Ic;
		this._lastTime = this._time, Lc && this.fire("start", this);
		let zc = this._isDeclarative;
		this.done = !zc && !Rc && this._time >= Ic, this._reseted = !1;
		let Bc = !1;
		return (Fc || zc) && (this._initialise(Fc), this.transforms = new vt(), Bc = this._run(zc ? io : Pc), this.fire("step", this)), this.done = this.done || Bc && zc, Rc && this.fire("finished", this), this;
	}
	time(io) {
		if (io == null) return this._time;
		let Pc = io - this._time;
		return this.step(Pc), this;
	}
	timeline(io) {
		return io === void 0 ? this._timeline : (this._timeline = io, this);
	}
	unschedule() {
		let io = this.timeline();
		return io && io.unschedule(this), this;
	}
	_initialise(io) {
		if (io || this._isDeclarative) for (let Pc = 0, Fc = this._queue.length; Pc < Fc; ++Pc) {
			let Fc = this._queue[Pc], Ic = this._isDeclarative || !Fc.initialised && io;
			io = !Fc.finished, Ic && io && (Fc.initialiser.call(this), Fc.initialised = !0);
		}
	}
	_rememberMorpher(io, Pc) {
		if (this._history[io] = {
			morpher: Pc,
			caller: this._queue[this._queue.length - 1]
		}, this._isDeclarative) {
			let io = this.timeline();
			io && io.play();
		}
	}
	_run(io) {
		let Pc = !0;
		for (let Fc = 0, Ic = this._queue.length; Fc < Ic; ++Fc) {
			let Ic = this._queue[Fc], Lc = Ic.runner.call(this, io);
			Ic.finished = Ic.finished || !0 === Lc, Pc = Pc && Ic.finished;
		}
		return Pc;
	}
	_tryRetarget(io, Pc, Fc) {
		if (this._history[io]) {
			if (!this._history[io].caller.initialised) {
				let Pc = this._queue.indexOf(this._history[io].caller);
				return this._queue.splice(Pc, 1), !1;
			}
			this._history[io].caller.retarget ? this._history[io].caller.retarget.call(this, Pc, Fc) : this._history[io].morpher.to(Pc), this._history[io].caller.finished = !1;
			let Ic = this.timeline();
			return Ic && Ic.play(), !0;
		}
		return !1;
	}
};
Qe.id = 0;
var Ke = class {
	constructor(io = new vt(), Pc = -1, Fc = !0) {
		this.transforms = io, this.id = Pc, this.done = Fc;
	}
	clearTransformsFromQueue() {}
};
Q([Qe, Ke], { mergeWith(io) {
	return new Ke(io.transforms.lmultiply(this.transforms), io.id);
} });
var ti = (io, Pc) => io.lmultiplyO(Pc), ei = (io) => io.transforms;
function ii() {
	let io = this._transformationRunners.runners.map(ei).reduce(ti, new vt());
	this.transform(io), this._transformationRunners.merge(), this._transformationRunners.length() === 1 && (this._frameId = null);
}
var ai = class {
	constructor() {
		this.runners = [], this.ids = [];
	}
	add(io) {
		if (this.runners.includes(io)) return;
		let Pc = io.id + 1;
		return this.runners.push(io), this.ids.push(Pc), this;
	}
	clearBefore(io) {
		let Pc = this.ids.indexOf(io + 1) || 1;
		return this.ids.splice(0, Pc, 0), this.runners.splice(0, Pc, new Ke()).forEach(((io) => io.clearTransformsFromQueue())), this;
	}
	edit(io, Pc) {
		let Fc = this.ids.indexOf(io + 1);
		return this.ids.splice(Fc, 1, io + 1), this.runners.splice(Fc, 1, Pc), this;
	}
	getByID(io) {
		return this.runners[this.ids.indexOf(io + 1)];
	}
	length() {
		return this.ids.length;
	}
	merge() {
		let io = null;
		for (let Pc = 0; Pc < this.runners.length; ++Pc) {
			let Fc = this.runners[Pc];
			if (io && Fc.done && io.done && (!Fc._timeline || !Fc._timeline._runnerIds.includes(Fc.id)) && (!io._timeline || !io._timeline._runnerIds.includes(io.id))) {
				this.remove(Fc.id);
				let Ic = Fc.mergeWith(io);
				this.edit(io.id, Ic), io = Ic, --Pc;
			} else io = Fc;
		}
		return this;
	}
	remove(io) {
		let Pc = this.ids.indexOf(io + 1);
		return this.ids.splice(Pc, 1), this.runners.splice(Pc, 1), this;
	}
};
A({ Element: {
	animate(io, Pc, Fc) {
		let Ic = Qe.sanitise(io, Pc, Fc), Lc = this.timeline();
		return new Qe(Ic.duration).loop(Ic).element(this).timeline(Lc.play()).schedule(Ic.delay, Ic.when);
	},
	delay(io, Pc) {
		return this.animate(0, io, Pc);
	},
	_clearTransformRunnersBefore(io) {
		this._transformationRunners.clearBefore(io.id);
	},
	_currentTransform(io) {
		return this._transformationRunners.runners.filter(((Pc) => Pc.id <= io.id)).map(ei).reduce(ti, new vt());
	},
	_addRunner(io) {
		this._transformationRunners.add(io), qe.cancelImmediate(this._frameId), this._frameId = qe.immediate(ii.bind(this));
	},
	_prepareRunner() {
		this._frameId ?? (this._transformationRunners = new ai().add(new Ke(new vt(this))));
	}
} }), Q(Qe, {
	attr(io, Pc) {
		return this.styleAttr("attr", io, Pc);
	},
	css(io, Pc) {
		return this.styleAttr("css", io, Pc);
	},
	styleAttr(io, Pc, Fc) {
		if (typeof Pc == "string") return this.styleAttr(io, { [Pc]: Fc });
		let Ic = Pc;
		if (this._tryRetarget(io, Ic)) return this;
		let Lc = new He(this._stepper).to(Ic), Rc = Object.keys(Ic);
		return this.queue((function() {
			Lc = Lc.from(this.element()[io](Rc));
		}), (function(Pc) {
			return this.element()[io](Lc.at(Pc).valueOf()), Lc.done();
		}), (function(Pc) {
			let Fc = Object.keys(Pc), zc = (Bc = Rc, Fc.filter(((io) => !Bc.includes(io))));
			var Bc;
			if (zc.length) {
				let Pc = this.element()[io](zc), Fc = new _e(Lc.from()).valueOf();
				Object.assign(Fc, Pc), Lc.from(Fc);
			}
			let Vc = new _e(Lc.to()).valueOf();
			Object.assign(Vc, Pc), Lc.to(Vc), Rc = Fc, Ic = Pc;
		})), this._rememberMorpher(io, Lc), this;
	},
	zoom(io, Pc) {
		if (this._tryRetarget("zoom", io, Pc)) return this;
		let Fc = new He(this._stepper).to(new _t(io));
		return this.queue((function() {
			Fc = Fc.from(this.element().zoom());
		}), (function(io) {
			return this.element().zoom(Fc.at(io), Pc), Fc.done();
		}), (function(io, Ic) {
			Pc = Ic, Fc.to(io);
		})), this._rememberMorpher("zoom", Fc), this;
	},
	transform(Pc, Fc, Ic) {
		if (Fc = Pc.relative || Fc, this._isDeclarative && !Fc && this._tryRetarget("transform", Pc)) return this;
		let Lc = vt.isMatrixLike(Pc);
		Ic = Pc.affine == null ? Ic == null ? !Lc : Ic : Pc.affine;
		let Rc = new He(this._stepper).type(Ic ? Fe : vt), zc, Bc, Vc, Hc, Uc;
		return this.queue((function() {
			Bc = Bc || this.element(), zc = zc || T(Pc, Bc), Uc = new vt(Fc ? void 0 : Bc), Bc._addRunner(this), Fc || Bc._clearTransformRunnersBefore(this);
		}), (function(Wc) {
			Fc || this.clearTransform();
			let { x: Gc, y: Kc } = new bt(zc).transform(Bc._currentTransform(this)), qc = new vt(_objectSpread2(_objectSpread2({}, Pc), {}, { origin: [Gc, Kc] })), Jc = this._isDeclarative && Vc ? Vc : Uc;
			if (Ic) {
				qc = qc.decompose(Gc, Kc), Jc = Jc.decompose(Gc, Kc);
				let io = qc.rotate, Pc = Jc.rotate, Fc = [
					io - 360,
					io,
					io + 360
				], Ic = Fc.map(((io) => Math.abs(io - Pc))), Lc = Math.min(...Ic);
				qc.rotate = Fc[Ic.indexOf(Lc)];
			}
			Fc && (Lc || (qc.rotate = Pc.rotate || 0), this._isDeclarative && Hc && (Jc.rotate = Hc)), Rc.from(Jc), Rc.to(qc);
			let Yc = Rc.at(Wc);
			return Hc = Yc.rotate, Vc = new vt(Yc), this.addTransform(Vc), Bc._addRunner(this), Rc.done();
		}), (function(Fc) {
			(Fc.origin || "center").toString() !== (Pc.origin || "center").toString() && (zc = T(Fc, Bc)), Pc = _objectSpread2(_objectSpread2({}, Fc), {}, { origin: zc });
		}), !0), this._isDeclarative && this._rememberMorpher("transform", Rc), this;
	},
	x(io) {
		return this._queueNumber("x", io);
	},
	y(io) {
		return this._queueNumber("y", io);
	},
	ax(io) {
		return this._queueNumber("ax", io);
	},
	ay(io) {
		return this._queueNumber("ay", io);
	},
	dx(io = 0) {
		return this._queueNumberDelta("x", io);
	},
	dy(io = 0) {
		return this._queueNumberDelta("y", io);
	},
	dmove(io, Pc) {
		return this.dx(io).dy(Pc);
	},
	_queueNumberDelta(io, Pc) {
		if (Pc = new _t(Pc), this._tryRetarget(io, Pc)) return this;
		let Fc = new He(this._stepper).to(Pc), Ic = null;
		return this.queue((function() {
			Ic = this.element()[io](), Fc.from(Ic), Fc.to(Ic + Pc);
		}), (function(Pc) {
			return this.element()[io](Fc.at(Pc)), Fc.done();
		}), (function(io) {
			Fc.to(Ic + new _t(io));
		})), this._rememberMorpher(io, Fc), this;
	},
	_queueObject(io, Pc) {
		if (this._tryRetarget(io, Pc)) return this;
		let Fc = new He(this._stepper).to(Pc);
		return this.queue((function() {
			Fc.from(this.element()[io]());
		}), (function(Pc) {
			return this.element()[io](Fc.at(Pc)), Fc.done();
		})), this._rememberMorpher(io, Fc), this;
	},
	_queueNumber(io, Pc) {
		return this._queueObject(io, new _t(Pc));
	},
	cx(io) {
		return this._queueNumber("cx", io);
	},
	cy(io) {
		return this._queueNumber("cy", io);
	},
	move(io, Pc) {
		return this.x(io).y(Pc);
	},
	amove(io, Pc) {
		return this.ax(io).ay(Pc);
	},
	center(io, Pc) {
		return this.cx(io).cy(Pc);
	},
	size(io, Pc) {
		let Fc;
		return io && Pc || (Fc = this._element.bbox()), io || (io = Fc.width / Fc.height * Pc), Pc || (Pc = Fc.height / Fc.width * io), this.width(io).height(Pc);
	},
	width(io) {
		return this._queueNumber("width", io);
	},
	height(io) {
		return this._queueNumber("height", io);
	},
	plot(io, Pc, Fc, Ic) {
		if (arguments.length === 4) return this.plot([
			io,
			Pc,
			Fc,
			Ic
		]);
		if (this._tryRetarget("plot", io)) return this;
		let Lc = new He(this._stepper).type(this._element.MorphArray).to(io);
		return this.queue((function() {
			Lc.from(this._element.array());
		}), (function(io) {
			return this._element.plot(Lc.at(io)), Lc.done();
		})), this._rememberMorpher("plot", Lc), this;
	},
	leading(io) {
		return this._queueNumber("leading", io);
	},
	viewbox(io, Pc, Fc, Ic) {
		return this._queueObject("viewbox", new kt(io, Pc, Fc, Ic));
	},
	update(io) {
		return typeof io == "object" ? (io.opacity != null && this.attr("stop-opacity", io.opacity), io.color != null && this.attr("stop-color", io.color), io.offset != null && this.attr("offset", io.offset), this) : this.update({
			offset: arguments[0],
			color: arguments[1],
			opacity: arguments[2]
		});
	}
}), Q(Qe, {
	rx: Zt,
	ry: $t,
	from: ne,
	to: oe
}), q(Qe, "Runner");
var si = class extends Vt {
	constructor(io, Pc = io) {
		super(G("svg", io), Pc), this.namespace();
	}
	defs() {
		return this.isRoot() ? V(this.node.querySelector("defs")) || this.put(new Ut()) : this.root().defs();
	}
	isRoot() {
		return !this.node.parentNode || !(this.node.parentNode instanceof O.window.SVGElement) && this.node.parentNode.nodeName !== "#document-fragment";
	}
	namespace() {
		return this.isRoot() ? this.attr({
			xmlns: E,
			version: "1.1"
		}).attr("xmlns:xlink", H, Y) : this.root().namespace();
	}
	removeNamespace() {
		return this.attr({
			xmlns: null,
			version: null
		}).attr("xmlns:xlink", null, Y).attr("xmlns:svgjs", null, Y);
	}
	root() {
		return this.isRoot() ? this : super.root();
	}
};
A({ Container: { nested: K((function() {
	return this.put(new si());
})) } }), q(si, "Svg", !0);
var ri = class extends Vt {
	constructor(io, Pc = io) {
		super(G("symbol", io), Pc);
	}
};
A({ Container: { symbol: K((function() {
	return this.put(new ri());
})) } }), q(ri, "Symbol");
var ni = Object.freeze({
	__proto__: null,
	amove: function(io, Pc) {
		return this.ax(io).ay(Pc);
	},
	ax: function(io) {
		return this.attr("x", io);
	},
	ay: function(io) {
		return this.attr("y", io);
	},
	build: function(io) {
		return this._build = !!io, this;
	},
	center: function(io, Pc, Fc = this.bbox()) {
		return this.cx(io, Fc).cy(Pc, Fc);
	},
	cx: function(io, Pc = this.bbox()) {
		return io == null ? Pc.cx : this.attr("x", this.attr("x") + io - Pc.cx);
	},
	cy: function(io, Pc = this.bbox()) {
		return io == null ? Pc.cy : this.attr("y", this.attr("y") + io - Pc.cy);
	},
	length: function() {
		return this.node.getComputedTextLength();
	},
	move: function(io, Pc, Fc = this.bbox()) {
		return this.x(io, Fc).y(Pc, Fc);
	},
	plain: function(io) {
		return !1 === this._build && this.clear(), this.node.appendChild(O.document.createTextNode(io)), this;
	},
	x: function(io, Pc = this.bbox()) {
		return io == null ? Pc.x : this.attr("x", this.attr("x") + io - Pc.x);
	},
	y: function(io, Pc = this.bbox()) {
		return io == null ? Pc.y : this.attr("y", this.attr("y") + io - Pc.y);
	}
}), oi = class extends qt {
	constructor(io, Pc = io) {
		var Fc;
		super(G("text", io), Pc), this.dom.leading = (Fc = this.dom.leading) == null ? new _t(1.3) : Fc, this._rebuild = !0, this._build = !1;
	}
	leading(io) {
		return io == null ? this.dom.leading : (this.dom.leading = new _t(io), this.rebuild());
	}
	rebuild(io) {
		if (typeof io == "boolean" && (this._rebuild = io), this._rebuild) {
			let io = this, Pc = 0, Fc = this.dom.leading;
			this.each((function(Ic) {
				if (X(this.node)) return;
				let Lc = Fc * new _t(O.window.getComputedStyle(this.node).getPropertyValue("font-size"));
				this.dom.newLined && (this.attr("x", io.attr("x")), this.text() === "\n" ? Pc += Lc : (this.attr("dy", Ic ? Lc + Pc : 0), Pc = 0));
			})), this.fire("rebuild");
		}
		return this;
	}
	setData(io) {
		return this.dom = io, this.dom.leading = new _t(io.leading || 1.3), this;
	}
	writeDataToDom() {
		return R(this, this.dom, { leading: 1.3 }), this;
	}
	text(io) {
		if (io === void 0) {
			let Pc = this.node.childNodes, Fc = 0;
			io = "";
			for (let Ic = 0, Lc = Pc.length; Ic < Lc; ++Ic) Pc[Ic].nodeName === "textPath" || X(Pc[Ic]) ? Ic === 0 && (Fc = Ic + 1) : (Ic !== Fc && Pc[Ic].nodeType !== 3 && !0 === V(Pc[Ic]).dom.newLined && (io += "\n"), io += Pc[Ic].textContent);
			return io;
		}
		if (this.clear().build(!0), typeof io == "function") io.call(this, this);
		else for (let Pc = 0, Fc = (io = (io + "").split("\n")).length; Pc < Fc; Pc++) this.newLine(io[Pc]);
		return this.build(!1).rebuild();
	}
};
Q(oi, ni), A({ Container: {
	text: K((function(io = "") {
		return this.put(new oi()).text(io);
	})),
	plain: K((function(io = "") {
		return this.put(new oi()).plain(io);
	}))
} }), q(oi, "Text");
var li = class extends qt {
	constructor(io, Pc = io) {
		super(G("tspan", io), Pc), this._build = !1;
	}
	dx(io) {
		return this.attr("dx", io);
	}
	dy(io) {
		return this.attr("dy", io);
	}
	newLine() {
		this.dom.newLined = !0;
		let io = this.parent();
		if (!(io instanceof oi)) return this;
		let Pc = io.index(this), Fc = O.window.getComputedStyle(this.node).getPropertyValue("font-size"), Ic = io.dom.leading * new _t(Fc);
		return this.dy(Pc ? Ic : 0).attr("x", io.x());
	}
	text(io) {
		return io == null ? this.node.textContent + (this.dom.newLined ? "\n" : "") : (typeof io == "function" ? (this.clear().build(!0), io.call(this, this), this.build(!1)) : this.plain(io), this);
	}
};
Q(li, ni), A({
	Tspan: { tspan: K((function(io = "") {
		let Pc = new li();
		return this._build || this.clear(), this.put(Pc).text(io);
	})) },
	Text: { newLine: function(io = "") {
		return this.tspan(io).newLine();
	} }
}), q(li, "Tspan");
var hi = class extends qt {
	constructor(io, Pc = io) {
		super(G("circle", io), Pc);
	}
	radius(io) {
		return this.attr("r", io);
	}
	rx(io) {
		return this.attr("r", io);
	}
	ry(io) {
		return this.rx(io);
	}
	size(io) {
		return this.radius(new _t(io).divide(2));
	}
};
Q(hi, {
	x: Jt,
	y: Qt,
	cx: Kt,
	cy: te,
	width: ee,
	height: ie
}), A({ Container: { circle: K((function(io = 0) {
	return this.put(new hi()).size(io).move(0, 0);
})) } }), q(hi, "Circle");
var ci = class extends Vt {
	constructor(io, Pc = io) {
		super(G("clipPath", io), Pc);
	}
	remove() {
		return this.targets().forEach((function(io) {
			io.unclip();
		})), super.remove();
	}
	targets() {
		return Lt("svg [clip-path*=" + this.id() + "]");
	}
};
A({
	Container: { clip: K((function() {
		return this.defs().put(new ci());
	})) },
	Element: {
		clipper() {
			return this.reference("clip-path");
		},
		clipWith(io) {
			let Pc = io instanceof ci ? io : this.parent().clip().add(io);
			return this.attr("clip-path", "url(#" + Pc.id() + ")");
		},
		unclip() {
			return this.attr("clip-path", null);
		}
	}
}), q(ci, "ClipPath");
var di = class extends Gt {
	constructor(io, Pc = io) {
		super(G("foreignObject", io), Pc);
	}
};
A({ Container: { foreignObject: K((function(io, Pc) {
	return this.put(new di()).size(io, Pc);
})) } }), q(di, "ForeignObject");
var ui = Object.freeze({
	__proto__: null,
	dmove: function(io, Pc) {
		return this.children().forEach(((Fc) => {
			let Ic;
			try {
				Ic = Fc.node instanceof F().SVGSVGElement ? new kt(Fc.attr([
					"x",
					"y",
					"width",
					"height"
				])) : Fc.bbox();
			} catch (io) {
				return;
			}
			let Lc = new vt(Fc), Rc = Lc.translate(io, Pc).transform(Lc.inverse()), zc = new bt(Ic.x, Ic.y).transform(Rc);
			Fc.move(zc.x, zc.y);
		})), this;
	},
	dx: function(io) {
		return this.dmove(io, 0);
	},
	dy: function(io) {
		return this.dmove(0, io);
	},
	height: function(io, Pc = this.bbox()) {
		return io == null ? Pc.height : this.size(Pc.width, io, Pc);
	},
	move: function(io = 0, Pc = 0, Fc = this.bbox()) {
		let Ic = io - Fc.x, Lc = Pc - Fc.y;
		return this.dmove(Ic, Lc);
	},
	size: function(io, Pc, Fc = this.bbox()) {
		let Ic = I(this, io, Pc, Fc), Lc = Ic.width / Fc.width, Rc = Ic.height / Fc.height;
		return this.children().forEach(((io) => {
			let Pc = new bt(Fc).transform(new vt(io).inverse());
			io.scale(Lc, Rc, Pc.x, Pc.y);
		})), this;
	},
	width: function(io, Pc = this.bbox()) {
		return io == null ? Pc.width : this.size(io, Pc.height, Pc);
	},
	x: function(io, Pc = this.bbox()) {
		return io == null ? Pc.x : this.move(io, Pc.y, Pc);
	},
	y: function(io, Pc = this.bbox()) {
		return io == null ? Pc.y : this.move(Pc.x, io, Pc);
	}
}), gi = class extends Vt {
	constructor(io, Pc = io) {
		super(G("g", io), Pc);
	}
};
Q(gi, ui), A({ Container: { group: K((function() {
	return this.put(new gi());
})) } }), q(gi, "G");
var pi = class extends Vt {
	constructor(io, Pc = io) {
		super(G("a", io), Pc);
	}
	target(io) {
		return this.attr("target", io);
	}
	to(io) {
		return this.attr("href", io, H);
	}
};
Q(pi, ui), A({
	Container: { link: K((function(io) {
		return this.put(new pi()).to(io);
	})) },
	Element: {
		unlink() {
			let io = this.linker();
			if (!io) return this;
			let Pc = io.parent();
			if (!Pc) return this.remove();
			let Fc = Pc.index(io);
			return Pc.add(this, Fc), io.remove(), this;
		},
		linkTo(io) {
			let Pc = this.linker();
			return Pc || (Pc = new pi(), this.wrap(Pc)), typeof io == "function" ? io.call(Pc, Pc) : Pc.to(io), this;
		},
		linker() {
			let io = this.parent();
			return io && io.node.nodeName.toLowerCase() === "a" ? io : null;
		}
	}
}), q(pi, "A");
var fi = class extends Vt {
	constructor(io, Pc = io) {
		super(G("mask", io), Pc);
	}
	remove() {
		return this.targets().forEach((function(io) {
			io.unmask();
		})), super.remove();
	}
	targets() {
		return Lt("svg [mask*=" + this.id() + "]");
	}
};
A({
	Container: { mask: K((function() {
		return this.defs().put(new fi());
	})) },
	Element: {
		masker() {
			return this.reference("mask");
		},
		maskWith(io) {
			let Pc = io instanceof fi ? io : this.parent().mask().add(io);
			return this.attr("mask", "url(#" + Pc.id() + ")");
		},
		unmask() {
			return this.attr("mask", null);
		}
	}
}), q(fi, "Mask");
var xi = class extends Gt {
	constructor(io, Pc = io) {
		super(G("stop", io), Pc);
	}
	update(io) {
		return (typeof io == "number" || io instanceof _t) && (io = {
			offset: arguments[0],
			color: arguments[1],
			opacity: arguments[2]
		}), io.opacity != null && this.attr("stop-opacity", io.opacity), io.color != null && this.attr("stop-color", io.color), io.offset != null && this.attr("offset", new _t(io.offset)), this;
	}
};
A({ Gradient: { stop: function(io, Pc, Fc) {
	return this.put(new xi()).update(io, Pc, Fc);
} } }), q(xi, "Stop");
var bi = class extends Gt {
	constructor(io, Pc = io) {
		super(G("style", io), Pc);
	}
	addText(io = "") {
		return this.node.textContent += io, this;
	}
	font(Pc, Fc, Ic = {}) {
		return this.rule("@font-face", _objectSpread2({
			fontFamily: Pc,
			src: Fc
		}, Ic));
	}
	rule(io, Pc) {
		return this.addText(function(io, Pc) {
			if (!io) return "";
			if (!Pc) return io;
			let Fc = io + "{";
			for (let io in Pc) Fc += io.replace(/([A-Z])/g, (function(io, Pc) {
				return "-" + Pc.toLowerCase();
			})) + ":" + Pc[io] + ";";
			return Fc += "}", Fc;
		}(io, Pc));
	}
};
A("Dom", {
	style(io, Pc) {
		return this.put(new bi()).rule(io, Pc);
	},
	fontface(io, Pc, Fc) {
		return this.put(new bi()).font(io, Pc, Fc);
	}
}), q(bi, "Style");
var mi = class extends oi {
	constructor(io, Pc = io) {
		super(G("textPath", io), Pc);
	}
	array() {
		let io = this.track();
		return io ? io.array() : null;
	}
	plot(io) {
		let Pc = this.track(), Fc = null;
		return Pc && (Fc = Pc.plot(io)), io == null ? Fc : this;
	}
	track() {
		return this.reference("href");
	}
};
A({
	Container: { textPath: K((function(io, Pc) {
		return io instanceof oi || (io = this.text(io)), io.path(Pc);
	})) },
	Text: {
		path: K((function(io, Pc = !0) {
			let Fc = new mi(), Ic;
			if (io instanceof We || (io = this.defs().path(io)), Fc.attr("href", "#" + io, H), Pc) for (; Ic = this.node.firstChild;) Fc.node.appendChild(Ic);
			return this.put(Fc);
		})),
		textPath() {
			return this.findOne("textPath");
		}
	},
	Path: {
		text: K((function(io) {
			return io instanceof oi || (io = new oi().addTo(this.parent()).text(io)), io.path(this);
		})),
		targets() {
			return Lt("svg textPath").filter(((io) => (io.attr("href") || "").includes(this.id())));
		}
	}
}), mi.prototype.MorphArray = Ee, q(mi, "TextPath");
var vi = class extends qt {
	constructor(io, Pc = io) {
		super(G("use", io), Pc);
	}
	use(io, Pc) {
		return this.attr("href", (Pc || "") + "#" + io, H);
	}
};
A({ Container: { use: K((function(io, Pc) {
	return this.put(new vi()).use(io, Pc);
})) } }), q(vi, "Use");
var yi = B;
Q([
	si,
	ri,
	de,
	ce,
	be
], C("viewbox")), Q([
	xe,
	je,
	Ge,
	We
], C("marker")), Q(oi, C("Text")), Q(We, C("Path")), Q(Ut, C("Defs")), Q([oi, li], C("Tspan")), Q([
	Ve,
	se,
	he,
	Qe
], C("radius")), Q(Rt, C("EventTarget")), Q(Bt, C("Dom")), Q(Gt, C("Element")), Q(qt, C("Shape")), Q([Vt, re], C("Container")), Q(he, C("Gradient")), Q(Qe, C("Runner")), Ct.extend([...new Set(k)]), function(io = []) {
	Ne.push(...[].concat(io));
}([
	_t,
	xt,
	kt,
	vt,
	Dt,
	ge,
	Ee,
	bt
]), Q(Ne, {
	to(io) {
		return new He().type(this.constructor).from(this.toArray()).to(io);
	},
	fromArray(io) {
		return this.init(io), this;
	},
	toConsumable() {
		return this.toArray();
	},
	morph(io, Pc, Fc, Ic, Lc) {
		return this.fromArray(io.map((function(io, Rc) {
			return Ic.step(io, Pc[Rc], Fc, Lc[Rc], Lc);
		})));
	}
});
var wi = class extends Gt {
	constructor(io) {
		super(G("filter", io), io), this.$source = "SourceGraphic", this.$sourceAlpha = "SourceAlpha", this.$background = "BackgroundImage", this.$backgroundAlpha = "BackgroundAlpha", this.$fill = "FillPaint", this.$stroke = "StrokePaint", this.$autoSetIn = !0;
	}
	put(io, Pc) {
		return !(io = super.put(io, Pc)).attr("in") && this.$autoSetIn && io.attr("in", this.$source), io.attr("result") || io.attr("result", io.id()), io;
	}
	remove() {
		return this.targets().each("unfilter"), super.remove();
	}
	targets() {
		return Lt("svg [filter*=\"" + this.id() + "\"]");
	}
	toString() {
		return "url(#" + this.id() + ")";
	}
}, ki = class extends Gt {
	constructor(io, Pc) {
		super(io, Pc), this.result(this.id());
	}
	in(io) {
		if (io == null) {
			let io = this.attr("in");
			return this.parent() && this.parent().find(`[result="${io}"]`)[0] || io;
		}
		return this.attr("in", io);
	}
	result(io) {
		return this.attr("result", io);
	}
	toString() {
		return this.result();
	}
}, Ai = (io) => function(...Pc) {
	for (let Fc = io.length; Fc--;) Pc[Fc] != null && this.attr(io[Fc], Pc[Fc]);
}, Ci = {
	blend: Ai([
		"in",
		"in2",
		"mode"
	]),
	colorMatrix: Ai(["type", "values"]),
	composite: Ai([
		"in",
		"in2",
		"operator"
	]),
	convolveMatrix: function(io) {
		io = new Dt(io).toString(), this.attr({
			order: Math.sqrt(io.split(" ").length),
			kernelMatrix: io
		});
	},
	diffuseLighting: Ai([
		"surfaceScale",
		"lightingColor",
		"diffuseConstant",
		"kernelUnitLength"
	]),
	displacementMap: Ai([
		"in",
		"in2",
		"scale",
		"xChannelSelector",
		"yChannelSelector"
	]),
	dropShadow: Ai([
		"in",
		"dx",
		"dy",
		"stdDeviation"
	]),
	flood: Ai(["flood-color", "flood-opacity"]),
	gaussianBlur: function(io = 0, Pc = io) {
		this.attr("stdDeviation", io + " " + Pc);
	},
	image: function(io) {
		this.attr("href", io, H);
	},
	morphology: Ai(["operator", "radius"]),
	offset: Ai(["dx", "dy"]),
	specularLighting: Ai([
		"surfaceScale",
		"lightingColor",
		"diffuseConstant",
		"specularExponent",
		"kernelUnitLength"
	]),
	tile: Ai([]),
	turbulence: Ai([
		"baseFrequency",
		"numOctaves",
		"seed",
		"stitchTiles",
		"type"
	])
};
[
	"blend",
	"colorMatrix",
	"componentTransfer",
	"composite",
	"convolveMatrix",
	"diffuseLighting",
	"displacementMap",
	"dropShadow",
	"flood",
	"gaussianBlur",
	"image",
	"merge",
	"morphology",
	"offset",
	"specularLighting",
	"tile",
	"turbulence"
].forEach(((io) => {
	let Pc = P(io), Fc = Ci[io];
	wi[Pc + "Effect"] = class extends ki {
		constructor(io) {
			super(G("fe" + Pc, io), io);
		}
		update(io) {
			return Fc.apply(this, io), this;
		}
	}, wi.prototype[io] = K((function(io, ...Fc) {
		let Ic = new wi[Pc + "Effect"]();
		return io == null ? this.put(Ic) : (typeof io == "function" ? io.call(Ic, Ic) : Fc.unshift(io), this.put(Ic).update(Fc));
	}));
})), Q(wi, {
	merge(io) {
		let Pc = this.put(new wi.MergeEffect());
		return typeof io == "function" ? (io.call(Pc, Pc), Pc) : ((io instanceof Array ? io : [...arguments]).forEach(((io) => {
			io instanceof wi.MergeNode ? Pc.put(io) : Pc.mergeNode(io);
		})), Pc);
	},
	componentTransfer(io = {}) {
		let Pc = this.put(new wi.ComponentTransferEffect());
		if (typeof io == "function") return io.call(Pc, Pc), Pc;
		for (let Fc in io.r || io.g || io.b || io.a || (io = {
			r: io,
			g: io,
			b: io,
			a: io
		}), io) Pc.add(new wi["Func" + Fc.toUpperCase()](io[Fc]));
		return Pc;
	}
}), [
	"distantLight",
	"pointLight",
	"spotLight",
	"mergeNode",
	"FuncR",
	"FuncG",
	"FuncB",
	"FuncA"
].forEach(((io) => {
	let Pc = P(io);
	wi[Pc] = class extends ki {
		constructor(io) {
			super(G("fe" + Pc, io), io);
		}
	};
})), [
	"funcR",
	"funcG",
	"funcB",
	"funcA"
].forEach((function(io) {
	let Pc = wi[P(io)], Fc = K((function() {
		return this.put(new Pc());
	}));
	wi.ComponentTransferEffect.prototype[io] = Fc;
})), [
	"distantLight",
	"pointLight",
	"spotLight"
].forEach(((io) => {
	let Pc = wi[P(io)], Fc = K((function() {
		return this.put(new Pc());
	}));
	wi.DiffuseLightingEffect.prototype[io] = Fc, wi.SpecularLightingEffect.prototype[io] = Fc;
})), Q(wi.MergeEffect, { mergeNode(io) {
	return this.put(new wi.MergeNode()).attr("in", io);
} }), Q(Ut, { filter: function(io) {
	let Pc = this.put(new wi());
	return typeof io == "function" && io.call(Pc, Pc), Pc;
} }), Q(Vt, { filter: function(io) {
	return this.defs().filter(io);
} }), Q(Gt, {
	filterWith: function(io) {
		let Pc = io instanceof wi ? io : this.defs().filter(io);
		return this.attr("filter", Pc);
	},
	unfilter: function(io) {
		return this.attr("filter", null);
	},
	filterer() {
		return this.reference("filter");
	}
}), Q(ki, {
	blend: function(io, Pc) {
		return this.parent() && this.parent().blend(this, io, Pc);
	},
	colorMatrix: function(io, Pc) {
		return this.parent() && this.parent().colorMatrix(io, Pc).in(this);
	},
	componentTransfer: function(io) {
		return this.parent() && this.parent().componentTransfer(io).in(this);
	},
	composite: function(io, Pc) {
		return this.parent() && this.parent().composite(this, io, Pc);
	},
	convolveMatrix: function(io) {
		return this.parent() && this.parent().convolveMatrix(io).in(this);
	},
	diffuseLighting: function(io, Pc, Fc, Ic) {
		return this.parent() && this.parent().diffuseLighting(io, Fc, Ic).in(this);
	},
	displacementMap: function(io, Pc, Fc, Ic) {
		return this.parent() && this.parent().displacementMap(this, io, Pc, Fc, Ic);
	},
	dropShadow: function(io, Pc, Fc) {
		return this.parent() && this.parent().dropShadow(this, io, Pc, Fc).in(this);
	},
	flood: function(io, Pc) {
		return this.parent() && this.parent().flood(io, Pc);
	},
	gaussianBlur: function(io, Pc) {
		return this.parent() && this.parent().gaussianBlur(io, Pc).in(this);
	},
	image: function(io) {
		return this.parent() && this.parent().image(io);
	},
	merge: function(io) {
		return io = io instanceof Array ? io : [...io], this.parent() && this.parent().merge(this, ...io);
	},
	morphology: function(io, Pc) {
		return this.parent() && this.parent().morphology(io, Pc).in(this);
	},
	offset: function(io, Pc) {
		return this.parent() && this.parent().offset(io, Pc).in(this);
	},
	specularLighting: function(io, Pc, Fc, Ic, Lc) {
		return this.parent() && this.parent().specularLighting(io, Fc, Ic, Lc).in(this);
	},
	tile: function() {
		return this.parent() && this.parent().tile().in(this);
	},
	turbulence: function(io, Pc, Fc, Ic, Lc) {
		return this.parent() && this.parent().turbulence(io, Pc, Fc, Ic, Lc).in(this);
	}
}), Q(wi.MergeEffect, { in: function(io) {
	return io instanceof wi.MergeNode ? this.add(io, 0) : this.add(new wi.MergeNode().in(io), 0), this;
} }), Q([
	wi.CompositeEffect,
	wi.BlendEffect,
	wi.DisplacementMapEffect
], { in2: function(io) {
	if (io == null) {
		let io = this.attr("in2");
		return this.parent() && this.parent().find(`[result="${io}"]`)[0] || io;
	}
	return this.attr("in2", io);
} }), wi.filter = { sepiatone: [
	.343,
	.669,
	.119,
	0,
	0,
	.249,
	.626,
	.13,
	0,
	0,
	.172,
	.334,
	.111,
	0,
	0,
	0,
	0,
	0,
	1,
	0
] };
var Li = function() {
	function io(Pc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w;
	}
	return s(io, [
		{
			key: "getDefaultFilter",
			value: function(io, Pc) {
				var Fc = this.w;
				io.unfilter(!0), new wi().size("120%", "180%", "-5%", "-40%"), Fc.config.chart.dropShadow.enabled && this.dropShadow(io, Fc.config.chart.dropShadow, Pc);
			}
		},
		{
			key: "applyFilter",
			value: function(io, Pc, Fc) {
				var Ic, Lc = this, Rc = this.w;
				if (io.unfilter(!0), Fc !== "none") {
					var zc, Bc, Vc = Rc.config.chart.dropShadow, Hc = Fc === "lighten" ? 2 : .3;
					io.filterWith((function(io) {
						io.colorMatrix({
							type: "matrix",
							values: `
          ${Hc} 0 0 0 0
          0 ${Hc} 0 0 0
          0 0 ${Hc} 0 0
          0 0 0 1 0
        `,
							in: "SourceGraphic",
							result: "brightness"
						}), Vc.enabled && Lc.addShadow(io, Pc, Vc, "brightness");
					})), !Vc.noUserSpaceOnUse && ((zc = io.filterer()) == null || (Bc = zc.node) == null || Bc.setAttribute("filterUnits", "userSpaceOnUse")), this._scaleFilterSize((Ic = io.filterer()) == null ? void 0 : Ic.node);
				} else this.getDefaultFilter(io, Pc);
			}
		},
		{
			key: "addShadow",
			value: function(io, Pc, Fc, Ic) {
				var Lc, Rc = this.w, zc = Fc.blur, Bc = Fc.top, Vc = Fc.left, Hc = Fc.color, Uc = Fc.opacity;
				if (Hc = Array.isArray(Hc) ? Hc[Pc] : Hc, ((Lc = Rc.config.chart.dropShadow.enabledOnSeries) == null ? void 0 : Lc.length) > 0 && Rc.config.chart.dropShadow.enabledOnSeries.indexOf(Pc) === -1) return io;
				io.offset({
					in: Ic,
					dx: Vc,
					dy: Bc,
					result: "offset"
				}), io.gaussianBlur({
					in: "offset",
					stdDeviation: zc,
					result: "blur"
				}), io.flood({
					"flood-color": Hc,
					"flood-opacity": Uc,
					result: "flood"
				}), io.composite({
					in: "flood",
					in2: "blur",
					operator: "in",
					result: "shadow"
				}), io.merge(["shadow", Ic]);
			}
		},
		{
			key: "dropShadow",
			value: function(io, Pc) {
				var Fc, Ic, Lc, Rc, zc, Bc = this, Vc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, Hc = this.w;
				return io.unfilter(!0), v.isMsEdge() && Hc.config.chart.type === "radialBar" || ((Fc = Hc.config.chart.dropShadow.enabledOnSeries) == null ? void 0 : Fc.length) > 0 && ((Lc = Hc.config.chart.dropShadow.enabledOnSeries) == null ? void 0 : Lc.indexOf(Vc)) === -1 ? io : ((io.filterWith((function(io) {
					Bc.addShadow(io, Vc, Pc, "SourceGraphic");
				})), Pc.noUserSpaceOnUse) || (Rc = io.filterer()) == null || (zc = Rc.node) == null || zc.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize((Ic = io.filterer()) == null ? void 0 : Ic.node), io);
			}
		},
		{
			key: "setSelectionFilter",
			value: function(io, Pc, Fc) {
				var Ic = this.w;
				if (Ic.globals.selectedDataPoints[Pc] !== void 0 && Ic.globals.selectedDataPoints[Pc].indexOf(Fc) > -1) {
					io.node.setAttribute("selected", !0);
					var Lc = Ic.config.states.active.filter;
					Lc !== "none" && this.applyFilter(io, Pc, Lc.type);
				}
			}
		},
		{
			key: "_scaleFilterSize",
			value: function(io) {
				io && (function(Pc) {
					for (var Fc in Pc) Pc.hasOwnProperty(Fc) && io.setAttribute(Fc, Pc[Fc]);
				})({
					width: "200%",
					height: "200%",
					x: "-50%",
					y: "-50%"
				});
			}
		}
	]), io;
}(), Mi = function() {
	function io(Pc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w;
	}
	return s(io, [
		{
			key: "roundPathCorners",
			value: function(io, Pc) {
				function Fc(io, Pc, Fc) {
					var Lc = Pc.x - io.x, Rc = Pc.y - io.y, zc = Math.sqrt(Lc * Lc + Rc * Rc);
					return Ic(io, Pc, Math.min(1, Fc / zc));
				}
				function Ic(io, Pc, Fc) {
					return {
						x: io.x + (Pc.x - io.x) * Fc,
						y: io.y + (Pc.y - io.y) * Fc
					};
				}
				function Lc(io, Pc) {
					io.length > 2 && (io[io.length - 2] = Pc.x, io[io.length - 1] = Pc.y);
				}
				function Rc(io) {
					return {
						x: parseFloat(io[io.length - 2]),
						y: parseFloat(io[io.length - 1])
					};
				}
				io.indexOf("NaN") > -1 && (io = "");
				var zc = io.split(/[,\s]/).reduce((function(io, Pc) {
					var Fc = Pc.match(/^([a-zA-Z])(.+)/);
					return Fc ? (io.push(Fc[1]), io.push(Fc[2])) : io.push(Pc), io;
				}), []).reduce((function(io, Pc) {
					return parseFloat(Pc) == Pc && io.length ? io[io.length - 1].push(Pc) : io.push([Pc]), io;
				}), []), Bc = [];
				if (zc.length > 1) {
					var Vc = Rc(zc[0]), Hc = null;
					zc[zc.length - 1][0] == "Z" && zc[0].length > 2 && (Hc = [
						"L",
						Vc.x,
						Vc.y
					], zc[zc.length - 1] = Hc), Bc.push(zc[0]);
					for (var Uc = 1; Uc < zc.length; Uc++) {
						var Wc = Bc[Bc.length - 1], Gc = zc[Uc], Kc = Gc == Hc ? zc[1] : zc[Uc + 1];
						if (Kc && Wc && Wc.length > 2 && Gc[0] == "L" && Kc.length > 2 && Kc[0] == "L") {
							var qc, Jc, Yc = Rc(Wc), Xc = Rc(Gc), Zc = Rc(Kc);
							qc = Fc(Xc, Yc, Pc), Jc = Fc(Xc, Zc, Pc), Lc(Gc, qc), Gc.origPoint = Xc, Bc.push(Gc);
							var Qc = Ic(qc, Xc, .5), $c = Ic(Xc, Jc, .5), el = [
								"C",
								Qc.x,
								Qc.y,
								$c.x,
								$c.y,
								Jc.x,
								Jc.y
							];
							el.origPoint = Xc, Bc.push(el);
						} else Bc.push(Gc);
					}
					if (Hc) {
						var tl = Rc(Bc[Bc.length - 1]);
						Bc.push(["Z"]), Lc(Bc[0], tl);
					}
				} else Bc = zc;
				return Bc.reduce((function(io, Pc) {
					return io + Pc.join(" ") + " ";
				}), "");
			}
		},
		{
			key: "drawLine",
			value: function(io, Pc, Fc, Ic) {
				var Lc = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "#a8a8a8", Rc = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0, zc = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null, Bc = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "butt";
				return this.w.globals.dom.Paper.line().attr({
					x1: io,
					y1: Pc,
					x2: Fc,
					y2: Ic,
					stroke: Lc,
					"stroke-dasharray": Rc,
					"stroke-width": zc,
					"stroke-linecap": Bc
				});
			}
		},
		{
			key: "drawRect",
			value: function() {
				var io = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, Pc = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, Fc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, Ic = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, Lc = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, Rc = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "#fefefe", zc = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : 1, Bc = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : null, Vc = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : null, Hc = arguments.length > 9 && arguments[9] !== void 0 ? arguments[9] : 0, Uc = this.w.globals.dom.Paper.rect();
				return Uc.attr({
					x: io,
					y: Pc,
					width: Fc > 0 ? Fc : 0,
					height: Ic > 0 ? Ic : 0,
					rx: Lc,
					ry: Lc,
					opacity: zc,
					"stroke-width": Bc === null ? 0 : Bc,
					stroke: Vc === null ? "none" : Vc,
					"stroke-dasharray": Hc
				}), Uc.node.setAttribute("fill", Rc), Uc;
			}
		},
		{
			key: "drawPolygon",
			value: function(io) {
				var Pc = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "#e1e1e1", Fc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, Ic = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "none";
				return this.w.globals.dom.Paper.polygon(io).attr({
					fill: Ic,
					stroke: Pc,
					"stroke-width": Fc
				});
			}
		},
		{
			key: "drawCircle",
			value: function(io) {
				var Pc = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
				io < 0 && (io = 0);
				var Fc = this.w.globals.dom.Paper.circle(2 * io);
				return Pc !== null && Fc.attr(Pc), Fc;
			}
		},
		{
			key: "drawPath",
			value: function(io) {
				var Pc = io.d, Fc = Pc === void 0 ? "" : Pc, Ic = io.stroke, Lc = Ic === void 0 ? "#a8a8a8" : Ic, Rc = io.strokeWidth, zc = Rc === void 0 ? 1 : Rc, Bc = io.fill, Vc = io.fillOpacity, Hc = Vc === void 0 ? 1 : Vc, Uc = io.strokeOpacity, Wc = Uc === void 0 ? 1 : Uc, Gc = io.classes, Kc = io.strokeLinecap, qc = Kc === void 0 ? null : Kc, Jc = io.strokeDashArray, Yc = Jc === void 0 ? 0 : Jc, Xc = this.w;
				return qc === null && (qc = Xc.config.stroke.lineCap), (Fc.indexOf("undefined") > -1 || Fc.indexOf("NaN") > -1) && (Fc = `M 0 ${Xc.globals.gridHeight}`), Xc.globals.dom.Paper.path(Fc).attr({
					fill: Bc,
					"fill-opacity": Hc,
					stroke: Lc,
					"stroke-opacity": Wc,
					"stroke-linecap": qc,
					"stroke-width": zc,
					"stroke-dasharray": Yc,
					class: Gc
				});
			}
		},
		{
			key: "group",
			value: function() {
				var io = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, Pc = this.w.globals.dom.Paper.group();
				return io !== null && Pc.attr(io), Pc;
			}
		},
		{
			key: "move",
			value: function(io, Pc) {
				return [
					"M",
					io,
					Pc
				].join(" ");
			}
		},
		{
			key: "line",
			value: function(io, Pc) {
				var Fc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, Ic = null;
				return Fc === null ? Ic = [
					" L",
					io,
					Pc
				].join(" ") : Fc === "H" ? Ic = [" H", io].join(" ") : Fc === "V" && (Ic = [" V", Pc].join(" ")), Ic;
			}
		},
		{
			key: "curve",
			value: function(io, Pc, Fc, Ic, Lc, Rc) {
				return [
					"C",
					io,
					Pc,
					Fc,
					Ic,
					Lc,
					Rc
				].join(" ");
			}
		},
		{
			key: "quadraticCurve",
			value: function(io, Pc, Fc, Ic) {
				return [
					"Q",
					io,
					Pc,
					Fc,
					Ic
				].join(" ");
			}
		},
		{
			key: "arc",
			value: function(io, Pc, Fc, Ic, Lc, Rc, zc) {
				var Bc = "A";
				return arguments.length > 7 && arguments[7] !== void 0 && arguments[7] && (Bc = "a"), [
					Bc,
					io,
					Pc,
					Fc,
					Ic,
					Lc,
					Rc,
					zc
				].join(" ");
			}
		},
		{
			key: "renderPaths",
			value: function(io) {
				var Pc, Fc = io.j, Ic = io.realIndex, Lc = io.pathFrom, Rc = io.pathTo, zc = io.stroke, Bc = io.strokeWidth, Vc = io.strokeLinecap, Hc = io.fill, Uc = io.animationDelay, Wc = io.initialSpeed, Gc = io.dataChangeSpeed, qc = io.className, Jc = io.chartType, Yc = io.shouldClipToGrid, Xc = Yc === void 0 || Yc, Zc = io.bindEventsOnPaths, Qc = Zc === void 0 || Zc, $c = io.drawShadow, tl = $c === void 0 || $c, nl = this.w, rl = new Li(this.ctx), il = new y(this.ctx), al = this.w.config.chart.animations.enabled, ol = al && this.w.config.chart.animations.dynamicAnimation.enabled;
				if (Lc && Lc.startsWith("M 0 0") && Rc) {
					var sl = Rc.match(/^M\s+[\d.-]+\s+[\d.-]+/);
					sl && (Lc = Lc.replace(/^M\s+0\s+0/, sl[0]));
				}
				var cl = !!(al && !nl.globals.resized || ol && nl.globals.dataChanged && nl.globals.shouldAnimate);
				cl ? Pc = Lc : (Pc = Rc, nl.globals.animationEnded = !0);
				var ll = nl.config.stroke.dashArray, ul = 0;
				ul = Array.isArray(ll) ? ll[Ic] : nl.config.stroke.dashArray;
				var dl = this.drawPath({
					d: Pc,
					stroke: zc,
					strokeWidth: Bc,
					fill: Hc,
					fillOpacity: 1,
					classes: qc,
					strokeLinecap: Vc,
					strokeDashArray: ul
				});
				dl.attr("index", Ic), Xc && (Jc === "bar" && !nl.globals.isHorizontal || nl.globals.comboCharts ? dl.attr({ "clip-path": `url(#gridRectBarMask${nl.globals.cuid})` }) : dl.attr({ "clip-path": `url(#gridRectMask${nl.globals.cuid})` })), nl.config.chart.dropShadow.enabled && tl && rl.dropShadow(dl, nl.config.chart.dropShadow, Ic), Qc && (dl.node.addEventListener("mouseenter", this.pathMouseEnter.bind(this, dl)), dl.node.addEventListener("mouseleave", this.pathMouseLeave.bind(this, dl)), dl.node.addEventListener("mousedown", this.pathMouseDown.bind(this, dl))), dl.attr({
					pathTo: Rc,
					pathFrom: Lc
				});
				var fl = {
					el: dl,
					j: Fc,
					realIndex: Ic,
					pathFrom: Lc,
					pathTo: Rc,
					fill: Hc,
					strokeWidth: Bc,
					delay: Uc
				};
				return !al || nl.globals.resized || nl.globals.dataChanged ? !nl.globals.resized && nl.globals.dataChanged || il.showDelayedElements() : il.animatePathsGradually(u(u({}, fl), {}, { speed: Wc })), nl.globals.dataChanged && ol && cl && il.animatePathsGradually(u(u({}, fl), {}, { speed: Gc })), dl;
			}
		},
		{
			key: "drawPattern",
			value: function(io, Pc, Fc) {
				var Ic = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "#a8a8a8", Lc = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
				return this.w.globals.dom.Paper.pattern(Pc, Fc, (function(Rc) {
					io === "horizontalLines" ? Rc.line(0, 0, Fc, 0).stroke({
						color: Ic,
						width: Lc + 1
					}) : io === "verticalLines" ? Rc.line(0, 0, 0, Pc).stroke({
						color: Ic,
						width: Lc + 1
					}) : io === "slantedLines" ? Rc.line(0, 0, Pc, Fc).stroke({
						color: Ic,
						width: Lc
					}) : io === "squares" ? Rc.rect(Pc, Fc).fill("none").stroke({
						color: Ic,
						width: Lc
					}) : io === "circles" && Rc.circle(Pc).fill("none").stroke({
						color: Ic,
						width: Lc
					});
				}));
			}
		},
		{
			key: "drawGradient",
			value: function(io, Pc, Fc, Ic, Lc) {
				var Rc, zc = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null, Bc = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null, Vc = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : [], Hc = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : 0, Uc = this.w;
				Pc.length < 9 && Pc.indexOf("#") === 0 && (Pc = v.hexToRgba(Pc, Ic)), Fc.length < 9 && Fc.indexOf("#") === 0 && (Fc = v.hexToRgba(Fc, Lc));
				var Wc = 0, Gc = 1, Kc = 1, qc = null;
				Bc !== null && (Wc = Bc[0] === void 0 ? 0 : Bc[0] / 100, Gc = Bc[1] === void 0 ? 1 : Bc[1] / 100, Kc = Bc[2] === void 0 ? 1 : Bc[2] / 100, qc = Bc[3] === void 0 ? null : Bc[3] / 100);
				var Jc = !(Uc.config.chart.type !== "donut" && Uc.config.chart.type !== "pie" && Uc.config.chart.type !== "polarArea" && Uc.config.chart.type !== "bubble");
				if (Rc = Vc && Vc.length !== 0 ? Uc.globals.dom.Paper.gradient(Jc ? "radial" : "linear", (function(io) {
					(Array.isArray(Vc[Hc]) ? Vc[Hc] : Vc).forEach((function(Pc) {
						io.stop(Pc.offset / 100, Pc.color, Pc.opacity);
					}));
				})) : Uc.globals.dom.Paper.gradient(Jc ? "radial" : "linear", (function(io) {
					io.stop(Wc, Pc, Ic), io.stop(Gc, Fc, Lc), io.stop(Kc, Fc, Lc), qc !== null && io.stop(qc, Pc, Ic);
				})), Jc) {
					var Yc = Uc.globals.gridWidth / 2, Xc = Uc.globals.gridHeight / 2;
					Uc.config.chart.type === "bubble" ? Rc.attr({
						cx: .5,
						cy: .5,
						r: .8,
						fx: .2,
						fy: .2
					}) : Rc.attr({
						gradientUnits: "userSpaceOnUse",
						cx: Yc,
						cy: Xc,
						r: zc
					});
				} else io === "vertical" ? Rc.from(0, 0).to(0, 1) : io === "diagonal" ? Rc.from(0, 0).to(1, 1) : io === "horizontal" ? Rc.from(0, 1).to(1, 1) : io === "diagonal2" && Rc.from(1, 0).to(0, 1);
				return Rc;
			}
		},
		{
			key: "getTextBasedOnMaxWidth",
			value: function(io) {
				var Pc = io.text, Fc = io.maxWidth, Ic = io.fontSize, Lc = io.fontFamily, Rc = this.getTextRects(Pc, Ic, Lc), zc = Rc.width / Pc.length, Bc = Math.floor(Fc / zc);
				return Fc < Rc.width ? Pc.slice(0, Bc - 3) + "..." : Pc;
			}
		},
		{
			key: "drawText",
			value: function(io) {
				var Pc = this, Fc = io.x, Ic = io.y, Lc = io.text, Rc = io.textAnchor, zc = io.fontSize, Bc = io.fontFamily, Vc = io.fontWeight, Hc = io.foreColor, Uc = io.opacity, Wc = io.maxWidth, Gc = io.cssClass, qc = Gc === void 0 ? "" : Gc, Jc = io.isPlainText, Yc = Jc === void 0 || Jc, Xc = io.dominantBaseline, Zc = Xc === void 0 ? "auto" : Xc, Qc = this.w;
				Lc === void 0 && (Lc = "");
				var $c = Lc;
				Rc || (Rc = "start"), Hc && Hc.length || (Hc = Qc.config.chart.foreColor), Bc = Bc || Qc.config.chart.fontFamily, Vc = Vc || "regular";
				var el, tl = {
					maxWidth: Wc,
					fontSize: zc = zc || "11px",
					fontFamily: Bc
				};
				return Array.isArray(Lc) ? el = Qc.globals.dom.Paper.text((function(io) {
					for (var Fc = 0; Fc < Lc.length; Fc++) $c = Lc[Fc], Wc && ($c = Pc.getTextBasedOnMaxWidth(u({ text: Lc[Fc] }, tl))), Fc === 0 ? io.tspan($c) : io.tspan($c).newLine();
				})) : (Wc && ($c = this.getTextBasedOnMaxWidth(u({ text: Lc }, tl))), el = Yc ? Qc.globals.dom.Paper.plain(Lc) : Qc.globals.dom.Paper.text((function(io) {
					return io.tspan($c);
				}))), el.attr({
					x: Fc,
					y: Ic,
					"text-anchor": Rc,
					"dominant-baseline": Zc,
					"font-size": zc,
					"font-family": Bc,
					"font-weight": Vc,
					fill: Hc,
					class: "apexcharts-text " + qc
				}), el.node.style.fontFamily = Bc, el.node.style.opacity = Uc, el;
			}
		},
		{
			key: "getMarkerPath",
			value: function(io, Pc, Fc, Ic) {
				var Lc = "";
				switch (Fc) {
					case "cross":
						Lc = `M ${io - (Ic /= 1.4)} ${Pc - Ic} L ${io + Ic} ${Pc + Ic}  M ${io - Ic} ${Pc + Ic} L ${io + Ic} ${Pc - Ic}`;
						break;
					case "plus":
						Lc = `M ${io - (Ic /= 1.12)} ${Pc} L ${io + Ic} ${Pc}  M ${io} ${Pc - Ic} L ${io} ${Pc + Ic}`;
						break;
					case "star":
					case "sparkle":
						var Rc = 5;
						Ic *= 1.15, Fc === "sparkle" && (Ic /= 1.1, Rc = 4);
						for (var zc = Math.PI / Rc, Bc = 0; Bc <= 2 * Rc; Bc++) {
							var Vc = Bc * zc, Hc = Bc % 2 == 0 ? Ic : Ic / 2;
							Lc += (Bc === 0 ? "M" : "L") + (io + Hc * Math.sin(Vc)) + "," + (Pc - Hc * Math.cos(Vc));
						}
						Lc += "Z";
						break;
					case "triangle":
						Lc = `M ${io} ${Pc - Ic} 
             L ${io + Ic} ${Pc + Ic} 
             L ${io - Ic} ${Pc + Ic} 
             Z`;
						break;
					case "square":
					case "rect":
						Lc = `M ${io - (Ic /= 1.125)} ${Pc - Ic} 
           L ${io + Ic} ${Pc - Ic} 
           L ${io + Ic} ${Pc + Ic} 
           L ${io - Ic} ${Pc + Ic} 
           Z`;
						break;
					case "diamond":
						Ic *= 1.05, Lc = `M ${io} ${Pc - Ic} 
             L ${io + Ic} ${Pc} 
             L ${io} ${Pc + Ic} 
             L ${io - Ic} ${Pc} 
            Z`;
						break;
					case "line":
						Lc = `M ${io - (Ic /= 1.1)} ${Pc} 
           L ${io + Ic} ${Pc}`;
						break;
					default: Ic *= 2, Lc = `M ${io}, ${Pc} 
           m -${Ic / 2}, 0 
           a ${Ic / 2},${Ic / 2} 0 1,0 ${Ic},0 
           a ${Ic / 2},${Ic / 2} 0 1,0 -${Ic},0`;
				}
				return Lc;
			}
		},
		{
			key: "drawMarkerShape",
			value: function(io, Pc, Fc, Ic, Lc) {
				var Rc = this.drawPath({
					d: this.getMarkerPath(io, Pc, Fc, Ic, Lc),
					stroke: Lc.pointStrokeColor,
					strokeDashArray: Lc.pointStrokeDashArray,
					strokeWidth: Lc.pointStrokeWidth,
					fill: Lc.pointFillColor,
					fillOpacity: Lc.pointFillOpacity,
					strokeOpacity: Lc.pointStrokeOpacity
				});
				return Rc.attr({
					cx: io,
					cy: Pc,
					shape: Lc.shape,
					class: Lc.class ? Lc.class : ""
				}), Rc;
			}
		},
		{
			key: "drawMarker",
			value: function(io, Pc, Fc) {
				io = io || 0;
				var Ic = Fc.pSize || 0;
				return v.isNumber(Pc) || (Ic = 0, Pc = 0), this.drawMarkerShape(io, Pc, Fc == null ? void 0 : Fc.shape, Ic, u(u({}, Fc), Fc.shape === "line" || Fc.shape === "plus" || Fc.shape === "cross" ? {
					pointStrokeColor: Fc.pointFillColor,
					pointStrokeOpacity: Fc.pointFillOpacity
				} : {}));
			}
		},
		{
			key: "pathMouseEnter",
			value: function(io, Pc) {
				var Fc = this.w, Ic = new Li(this.ctx), Lc = parseInt(io.node.getAttribute("index"), 10), Rc = parseInt(io.node.getAttribute("j"), 10);
				if (typeof Fc.config.chart.events.dataPointMouseEnter == "function" && Fc.config.chart.events.dataPointMouseEnter(Pc, this.ctx, {
					seriesIndex: Lc,
					dataPointIndex: Rc,
					w: Fc
				}), this.ctx.events.fireEvent("dataPointMouseEnter", [
					Pc,
					this.ctx,
					{
						seriesIndex: Lc,
						dataPointIndex: Rc,
						w: Fc
					}
				]), (Fc.config.states.active.filter.type === "none" || io.node.getAttribute("selected") !== "true") && Fc.config.states.hover.filter.type !== "none" && !Fc.globals.isTouchDevice) {
					var zc = Fc.config.states.hover.filter;
					Ic.applyFilter(io, Lc, zc.type);
				}
			}
		},
		{
			key: "pathMouseLeave",
			value: function(io, Pc) {
				var Fc = this.w, Ic = new Li(this.ctx), Lc = parseInt(io.node.getAttribute("index"), 10), Rc = parseInt(io.node.getAttribute("j"), 10);
				typeof Fc.config.chart.events.dataPointMouseLeave == "function" && Fc.config.chart.events.dataPointMouseLeave(Pc, this.ctx, {
					seriesIndex: Lc,
					dataPointIndex: Rc,
					w: Fc
				}), this.ctx.events.fireEvent("dataPointMouseLeave", [
					Pc,
					this.ctx,
					{
						seriesIndex: Lc,
						dataPointIndex: Rc,
						w: Fc
					}
				]), Fc.config.states.active.filter.type !== "none" && io.node.getAttribute("selected") === "true" || Fc.config.states.hover.filter.type !== "none" && Ic.getDefaultFilter(io, Lc);
			}
		},
		{
			key: "pathMouseDown",
			value: function(io, Pc) {
				var Fc = this.w, Ic = new Li(this.ctx), Lc = parseInt(io.node.getAttribute("index"), 10), Rc = parseInt(io.node.getAttribute("j"), 10), zc = "false";
				if (io.node.getAttribute("selected") === "true") {
					if (io.node.setAttribute("selected", "false"), Fc.globals.selectedDataPoints[Lc].indexOf(Rc) > -1) {
						var Bc = Fc.globals.selectedDataPoints[Lc].indexOf(Rc);
						Fc.globals.selectedDataPoints[Lc].splice(Bc, 1);
					}
				} else {
					if (!Fc.config.states.active.allowMultipleDataPointsSelection && Fc.globals.selectedDataPoints.length > 0) {
						Fc.globals.selectedDataPoints = [];
						var Vc = Fc.globals.dom.Paper.find(".apexcharts-series path:not(.apexcharts-decoration-element)"), Hc = Fc.globals.dom.Paper.find(".apexcharts-series circle:not(.apexcharts-decoration-element), .apexcharts-series rect:not(.apexcharts-decoration-element)"), Uc = function(io) {
							Array.prototype.forEach.call(io, (function(io) {
								io.node.setAttribute("selected", "false"), Ic.getDefaultFilter(io, Lc);
							}));
						};
						Uc(Vc), Uc(Hc);
					}
					io.node.setAttribute("selected", "true"), zc = "true", Fc.globals.selectedDataPoints[Lc] === void 0 && (Fc.globals.selectedDataPoints[Lc] = []), Fc.globals.selectedDataPoints[Lc].push(Rc);
				}
				if (zc === "true") {
					var Wc = Fc.config.states.active.filter;
					if (Wc !== "none") Ic.applyFilter(io, Lc, Wc.type);
					else if (Fc.config.states.hover.filter !== "none" && !Fc.globals.isTouchDevice) {
						var Gc = Fc.config.states.hover.filter;
						Ic.applyFilter(io, Lc, Gc.type);
					}
				} else Fc.config.states.active.filter.type !== "none" && (Fc.config.states.hover.filter.type === "none" || Fc.globals.isTouchDevice ? Ic.getDefaultFilter(io, Lc) : (Gc = Fc.config.states.hover.filter, Ic.applyFilter(io, Lc, Gc.type)));
				typeof Fc.config.chart.events.dataPointSelection == "function" && Fc.config.chart.events.dataPointSelection(Pc, this.ctx, {
					selectedDataPoints: Fc.globals.selectedDataPoints,
					seriesIndex: Lc,
					dataPointIndex: Rc,
					w: Fc
				}), Pc && this.ctx.events.fireEvent("dataPointSelection", [
					Pc,
					this.ctx,
					{
						selectedDataPoints: Fc.globals.selectedDataPoints,
						seriesIndex: Lc,
						dataPointIndex: Rc,
						w: Fc
					}
				]);
			}
		},
		{
			key: "rotateAroundCenter",
			value: function(io) {
				var Pc = {};
				return io && typeof io.getBBox == "function" && (Pc = io.getBBox()), {
					x: Pc.x + Pc.width / 2,
					y: Pc.y + Pc.height / 2
				};
			}
		},
		{
			key: "getTextRects",
			value: function(io, Pc, Fc, Ic) {
				var Lc = !(arguments.length > 4 && arguments[4] !== void 0) || arguments[4], Rc = this.w, zc = this.drawText({
					x: -200,
					y: -200,
					text: io,
					textAnchor: "start",
					fontSize: Pc,
					fontFamily: Fc,
					foreColor: "#fff",
					opacity: 0
				});
				Ic && zc.attr("transform", Ic), Rc.globals.dom.Paper.add(zc);
				var Bc = zc.bbox();
				return Lc || (Bc = zc.node.getBoundingClientRect()), zc.remove(), {
					width: Bc.width,
					height: Bc.height
				};
			}
		},
		{
			key: "placeTextWithEllipsis",
			value: function(io, Pc, Fc) {
				if (typeof io.getComputedTextLength == "function" && (io.textContent = Pc, Pc.length > 0 && io.getComputedTextLength() >= Fc / 1.1)) {
					for (var Ic = Pc.length - 3; Ic > 0; Ic -= 3) if (io.getSubStringLength(0, Ic) <= Fc / 1.1) return void (io.textContent = Pc.substring(0, Ic) + "...");
					io.textContent = ".";
				}
			}
		}
	], [{
		key: "setAttrs",
		value: function(io, Pc) {
			for (var Fc in Pc) Pc.hasOwnProperty(Fc) && io.setAttribute(Fc, Pc[Fc]);
		}
	}]), io;
}(), Pi = function() {
	function io(Pc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w;
	}
	return s(io, [
		{
			key: "getStackedSeriesTotals",
			value: function() {
				var io = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], Pc = this.w, Fc = [];
				if (Pc.globals.series.length === 0) return Fc;
				for (var Ic = 0; Ic < Pc.globals.series[Pc.globals.maxValsInArrayIndex].length; Ic++) {
					for (var Lc = 0, Rc = 0; Rc < Pc.globals.series.length; Rc++) Pc.globals.series[Rc][Ic] !== void 0 && io.indexOf(Rc) === -1 && (Lc += Pc.globals.series[Rc][Ic]);
					Fc.push(Lc);
				}
				return Fc;
			}
		},
		{
			key: "getSeriesTotalByIndex",
			value: function() {
				var io = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
				return io === null ? this.w.config.series.reduce((function(io, Pc) {
					return io + Pc;
				}), 0) : this.w.globals.series[io].reduce((function(io, Pc) {
					return io + Pc;
				}), 0);
			}
		},
		{
			key: "getStackedSeriesTotalsByGroups",
			value: function() {
				var io = this, Pc = this.w, Fc = [];
				return Pc.globals.seriesGroups.forEach((function(Ic) {
					var Lc = [];
					Pc.config.series.forEach((function(io, Fc) {
						Ic.indexOf(Pc.globals.seriesNames[Fc]) > -1 && Lc.push(Fc);
					}));
					var Rc = Pc.globals.series.map((function(io, Pc) {
						return Lc.indexOf(Pc) === -1 ? Pc : -1;
					})).filter((function(io) {
						return io !== -1;
					}));
					Fc.push(io.getStackedSeriesTotals(Rc));
				})), Fc;
			}
		},
		{
			key: "setSeriesYAxisMappings",
			value: function() {
				var io = this.w.globals, Pc = this.w.config, Fc = [], Ic = [], Lc = [], Rc = io.series.length > Pc.yaxis.length || Pc.yaxis.some((function(io) {
					return Array.isArray(io.seriesName);
				}));
				Pc.series.forEach((function(io, Pc) {
					Lc.push(Pc), Ic.push(null);
				})), Pc.yaxis.forEach((function(io, Pc) {
					Fc[Pc] = [];
				}));
				var zc = [];
				Pc.yaxis.forEach((function(io, Ic) {
					var Bc = !1;
					if (io.seriesName) {
						var Vc = [];
						Array.isArray(io.seriesName) ? Vc = io.seriesName : Vc.push(io.seriesName), Vc.forEach((function(io) {
							Pc.series.forEach((function(Pc, zc) {
								if (Pc.name === io) {
									var Vc = zc;
									Ic === zc || Rc ? !Rc || Lc.indexOf(zc) > -1 ? Fc[Ic].push([Ic, zc]) : console.warn("Series '" + Pc.name + "' referenced more than once in what looks like the new style. That is, when using either seriesName: [], or when there are more series than yaxes.") : (Fc[zc].push([zc, Ic]), Vc = Ic), Bc = !0, (Vc = Lc.indexOf(Vc)) !== -1 && Lc.splice(Vc, 1);
								}
							}));
						}));
					}
					Bc || zc.push(Ic);
				})), Fc = Fc.map((function(io, Pc) {
					var Fc = [];
					return io.forEach((function(io) {
						Ic[io[1]] = io[0], Fc.push(io[1]);
					})), Fc;
				}));
				for (var Bc = Pc.yaxis.length - 1, Vc = 0; Vc < zc.length && (Bc = zc[Vc], Fc[Bc] = [], Lc); Vc++) {
					var Hc = Lc[0];
					Lc.shift(), Fc[Bc].push(Hc), Ic[Hc] = Bc;
				}
				Lc.forEach((function(io) {
					Fc[Bc].push(io), Ic[io] = Bc;
				})), io.seriesYAxisMap = Fc.map((function(io) {
					return io;
				})), io.seriesYAxisReverseMap = Ic.map((function(io) {
					return io;
				})), io.seriesYAxisMap.forEach((function(io, Fc) {
					io.forEach((function(io) {
						Pc.series[io] && Pc.series[io].group === void 0 && (Pc.series[io].group = `apexcharts-axis-${Fc.toString()}`);
					}));
				}));
			}
		},
		{
			key: "isSeriesNull",
			value: function() {
				var io = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
				return (io === null ? this.w.config.series.filter((function(io) {
					return io !== null;
				})) : this.w.config.series[io].data.filter((function(io) {
					return io !== null;
				}))).length === 0;
			}
		},
		{
			key: "seriesHaveSameValues",
			value: function(io) {
				return this.w.globals.series[io].every((function(io, Pc, Fc) {
					return io === Fc[0];
				}));
			}
		},
		{
			key: "getCategoryLabels",
			value: function(io) {
				var Pc = this.w, Fc = io.slice();
				return Pc.config.xaxis.convertedCatToNumeric && (Fc = io.map((function(io, Fc) {
					return Pc.config.xaxis.labels.formatter(io - Pc.globals.minX + 1);
				}))), Fc;
			}
		},
		{
			key: "getLargestSeries",
			value: function() {
				var io = this.w;
				io.globals.maxValsInArrayIndex = io.globals.series.map((function(io) {
					return io.length;
				})).indexOf(Math.max.apply(Math, io.globals.series.map((function(io) {
					return io.length;
				}))));
			}
		},
		{
			key: "getLargestMarkerSize",
			value: function() {
				var io = this.w, Pc = 0;
				return io.globals.markers.size.forEach((function(io) {
					Pc = Math.max(Pc, io);
				})), io.config.markers.discrete && io.config.markers.discrete.length && io.config.markers.discrete.forEach((function(io) {
					Pc = Math.max(Pc, io.size);
				})), Pc > 0 && (io.config.markers.hover.size > 0 ? Pc = io.config.markers.hover.size : Pc += io.config.markers.hover.sizeOffset), io.globals.markers.largestSize = Pc, Pc;
			}
		},
		{
			key: "getSeriesTotals",
			value: function() {
				var io = this.w;
				io.globals.seriesTotals = io.globals.series.map((function(io, Pc) {
					var Fc = 0;
					if (Array.isArray(io)) for (var Ic = 0; Ic < io.length; Ic++) Fc += io[Ic];
					else Fc += io;
					return Fc;
				}));
			}
		},
		{
			key: "getSeriesTotalsXRange",
			value: function(io, Pc) {
				var Fc = this.w;
				return Fc.globals.series.map((function(Ic, Lc) {
					for (var Rc = 0, zc = 0; zc < Ic.length; zc++) Fc.globals.seriesX[Lc][zc] > io && Fc.globals.seriesX[Lc][zc] < Pc && (Rc += Ic[zc]);
					return Rc;
				}));
			}
		},
		{
			key: "getPercentSeries",
			value: function() {
				var io = this.w;
				io.globals.seriesPercent = io.globals.series.map((function(Pc, Fc) {
					var Ic = [];
					if (Array.isArray(Pc)) for (var Lc = 0; Lc < Pc.length; Lc++) {
						var Rc = io.globals.stackedSeriesTotals[Lc], zc = 0;
						Rc && (zc = 100 * Pc[Lc] / Rc), Ic.push(zc);
					}
					else {
						var Bc = 100 * Pc / io.globals.seriesTotals.reduce((function(io, Pc) {
							return io + Pc;
						}), 0);
						Ic.push(Bc);
					}
					return Ic;
				}));
			}
		},
		{
			key: "getCalculatedRatios",
			value: function() {
				var io, Pc, Fc, Ic = this, Lc = this.w, Rc = Lc.globals, zc = [], Bc = 0, Vc = [], Hc = .1, Uc = 0;
				if (Rc.yRange = [], Rc.isMultipleYAxis) for (var Wc = 0; Wc < Rc.minYArr.length; Wc++) Rc.yRange.push(Math.abs(Rc.minYArr[Wc] - Rc.maxYArr[Wc])), Vc.push(0);
				else Rc.yRange.push(Math.abs(Rc.minY - Rc.maxY));
				Rc.xRange = Math.abs(Rc.maxX - Rc.minX), Rc.zRange = Math.abs(Rc.maxZ - Rc.minZ);
				for (var Gc = 0; Gc < Rc.yRange.length; Gc++) zc.push(Rc.yRange[Gc] / Rc.gridHeight);
				if (Pc = Rc.xRange / Rc.gridWidth, io = Rc.yRange / Rc.gridWidth, Fc = Rc.xRange / Rc.gridHeight, (Bc = Rc.zRange / Rc.gridHeight * 16) || (Bc = 1), Rc.minY !== Number.MIN_VALUE && Math.abs(Rc.minY) !== 0 && (Rc.hasNegs = !0), Lc.globals.seriesYAxisReverseMap.length > 0) {
					var Kc = function(io, Pc) {
						var Fc = Lc.config.yaxis[Lc.globals.seriesYAxisReverseMap[Pc]], Rc = io < 0 ? -1 : 1;
						return io = Math.abs(io), Fc.logarithmic && (io = Ic.getBaseLog(Fc.logBase, io)), -Rc * io / zc[Pc];
					};
					if (Rc.isMultipleYAxis) {
						Vc = [];
						for (var qc = 0; qc < zc.length; qc++) Vc.push(Kc(Rc.minYArr[qc], qc));
					} else (Vc = []).push(Kc(Rc.minY, 0)), Rc.minY !== Number.MIN_VALUE && Math.abs(Rc.minY) !== 0 && (Hc = -Rc.minY / io, Uc = Rc.minX / Pc);
				} else (Vc = []).push(0), Hc = 0, Uc = 0;
				return {
					yRatio: zc,
					invertedYRatio: io,
					zRatio: Bc,
					xRatio: Pc,
					invertedXRatio: Fc,
					baseLineInvertedY: Hc,
					baseLineY: Vc,
					baseLineX: Uc
				};
			}
		},
		{
			key: "getLogSeries",
			value: function(io) {
				var Pc = this, Fc = this.w;
				return Fc.globals.seriesLog = io.map((function(io, Ic) {
					var Lc = Fc.globals.seriesYAxisReverseMap[Ic];
					return Fc.config.yaxis[Lc] && Fc.config.yaxis[Lc].logarithmic ? io.map((function(io) {
						return io === null ? null : Pc.getLogVal(Fc.config.yaxis[Lc].logBase, io, Ic);
					})) : io;
				})), Fc.globals.invalidLogScale ? io : Fc.globals.seriesLog;
			}
		},
		{
			key: "getLogValAtSeriesIndex",
			value: function(io, Pc) {
				if (io === null) return null;
				var Fc = this.w, Ic = Fc.globals.seriesYAxisReverseMap[Pc];
				return Fc.config.yaxis[Ic] && Fc.config.yaxis[Ic].logarithmic ? this.getLogVal(Fc.config.yaxis[Ic].logBase, io, Pc) : io;
			}
		},
		{
			key: "getBaseLog",
			value: function(io, Pc) {
				return Math.log(Pc) / Math.log(io);
			}
		},
		{
			key: "getLogVal",
			value: function(io, Pc, Fc) {
				if (Pc <= 0) return 0;
				var Ic = this.w, Lc = Ic.globals.minYArr[Fc] === 0 ? -1 : this.getBaseLog(io, Ic.globals.minYArr[Fc]), Rc = (Ic.globals.maxYArr[Fc] === 0 ? 0 : this.getBaseLog(io, Ic.globals.maxYArr[Fc])) - Lc;
				return Pc < 1 ? Pc / Rc : (this.getBaseLog(io, Pc) - Lc) / Rc;
			}
		},
		{
			key: "getLogYRatios",
			value: function(io) {
				var Pc = this, Fc = this.w, Ic = this.w.globals;
				return Ic.yLogRatio = io.slice(), Ic.logYRange = Ic.yRange.map((function(io, Lc) {
					var Rc = Fc.globals.seriesYAxisReverseMap[Lc];
					if (Fc.config.yaxis[Rc] && Pc.w.config.yaxis[Rc].logarithmic) {
						var zc, Bc = -Number.MAX_VALUE, Vc = Number.MIN_VALUE;
						return Ic.seriesLog.forEach((function(io, Pc) {
							io.forEach((function(io) {
								Fc.config.yaxis[Pc] && Fc.config.yaxis[Pc].logarithmic && (Bc = Math.max(io, Bc), Vc = Math.min(io, Vc));
							}));
						})), zc = Math.pow(Ic.yRange[Lc], Math.abs(Vc - Bc) / Ic.yRange[Lc]), Ic.yLogRatio[Lc] = zc / Ic.gridHeight, zc;
					}
				})), Ic.invalidLogScale ? io.slice() : Ic.yLogRatio;
			}
		},
		{
			key: "drawSeriesByGroup",
			value: function(io, Pc, Fc, Ic) {
				var Lc = this.w, Rc = [];
				return io.series.length > 0 && Pc.forEach((function(Pc) {
					var zc = [], Bc = [];
					io.i.forEach((function(Fc, Ic) {
						Lc.config.series[Fc].group === Pc && (zc.push(io.series[Ic]), Bc.push(Fc));
					})), zc.length > 0 && Rc.push(Ic.draw(zc, Fc, Bc));
				})), Rc;
			}
		}
	], [{
		key: "checkComboSeries",
		value: function(io, Pc) {
			var Fc = !1, Ic = 0, Lc = 0;
			return Pc === void 0 && (Pc = "line"), io.length && io[0].type !== void 0 && io.forEach((function(io) {
				io.type !== "bar" && io.type !== "column" && io.type !== "candlestick" && io.type !== "boxPlot" || Ic++, io.type !== void 0 && io.type !== Pc && Lc++;
			})), Lc > 0 && (Fc = !0), {
				comboBarCount: Ic,
				comboCharts: Fc
			};
		}
	}, {
		key: "extendArrayProps",
		value: function(io, Pc, Fc) {
			var Ic, Lc, Rc, zc, Bc, Vc;
			return ((Ic = Pc) != null && Ic.yaxis && (Pc = io.extendYAxis(Pc, Fc)), (Lc = Pc) != null && Lc.annotations) && (Pc.annotations.yaxis && (Pc = io.extendYAxisAnnotations(Pc)), (Rc = Pc) != null && (zc = Rc.annotations) != null && zc.xaxis && (Pc = io.extendXAxisAnnotations(Pc)), (Bc = Pc) != null && (Vc = Bc.annotations) != null && Vc.points && (Pc = io.extendPointAnnotations(Pc))), Pc;
		}
	}]), io;
}(), Ii = function() {
	function io(Pc) {
		i(this, io), this.w = Pc.w, this.annoCtx = Pc;
	}
	return s(io, [
		{
			key: "setOrientations",
			value: function(io) {
				var Pc = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, Fc = this.w;
				if (io.label.orientation === "vertical") {
					var Ic = Pc === null ? 0 : Pc, Lc = Fc.globals.dom.baseEl.querySelector(`.apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='${Ic}']`);
					if (Lc !== null) {
						var Rc = Lc.getBoundingClientRect();
						Lc.setAttribute("x", parseFloat(Lc.getAttribute("x")) - Rc.height + 4);
						var zc = io.label.position === "top" ? Rc.width : -Rc.width;
						Lc.setAttribute("y", parseFloat(Lc.getAttribute("y")) + zc);
						var Bc = this.annoCtx.graphics.rotateAroundCenter(Lc), Vc = Bc.x, Hc = Bc.y;
						Lc.setAttribute("transform", `rotate(-90 ${Vc} ${Hc})`);
					}
				}
			}
		},
		{
			key: "addBackgroundToAnno",
			value: function(io, Pc) {
				var Fc = this.w;
				if (!io || !Pc.label.text || !String(Pc.label.text).trim()) return null;
				var Ic = Fc.globals.dom.baseEl.querySelector(".apexcharts-grid").getBoundingClientRect(), Lc = io.getBoundingClientRect(), Rc = Pc.label.style.padding, zc = Rc.left, Bc = Rc.right, Vc = Rc.top, Hc = Rc.bottom;
				if (Pc.label.orientation === "vertical") {
					var Uc = [
						zc,
						Bc,
						Vc,
						Hc
					];
					Vc = Uc[0], Hc = Uc[1], zc = Uc[2], Bc = Uc[3];
				}
				var Wc = Lc.left - Ic.left - zc, Gc = Lc.top - Ic.top - Vc, Kc = this.annoCtx.graphics.drawRect(Wc - Fc.globals.barPadForNumericAxis, Gc, Lc.width + zc + Bc, Lc.height + Vc + Hc, Pc.label.borderRadius, Pc.label.style.background, 1, Pc.label.borderWidth, Pc.label.borderColor, 0);
				return Pc.id && Kc.node.classList.add(Pc.id), Kc;
			}
		},
		{
			key: "annotationsBackground",
			value: function() {
				var io = this, Pc = this.w, Fc = function(Fc, Ic, Lc) {
					var Rc = Pc.globals.dom.baseEl.querySelector(`.apexcharts-${Lc}-annotations .apexcharts-${Lc}-annotation-label[rel='${Ic}']`);
					if (Rc) {
						var zc = Rc.parentNode, Bc = io.addBackgroundToAnno(Rc, Fc);
						Bc && (zc.insertBefore(Bc.node, Rc), Fc.label.mouseEnter && Bc.node.addEventListener("mouseenter", Fc.label.mouseEnter.bind(io, Fc)), Fc.label.mouseLeave && Bc.node.addEventListener("mouseleave", Fc.label.mouseLeave.bind(io, Fc)), Fc.label.click && Bc.node.addEventListener("click", Fc.label.click.bind(io, Fc)));
					}
				};
				Pc.config.annotations.xaxis.forEach((function(io, Pc) {
					return Fc(io, Pc, "xaxis");
				})), Pc.config.annotations.yaxis.forEach((function(io, Pc) {
					return Fc(io, Pc, "yaxis");
				})), Pc.config.annotations.points.forEach((function(io, Pc) {
					return Fc(io, Pc, "point");
				}));
			}
		},
		{
			key: "getY1Y2",
			value: function(io, Pc) {
				var Fc, Ic = this.w, Lc = io === "y1" ? Pc.y : Pc.y2, Rc = !1;
				if (this.annoCtx.invertAxis) {
					var zc = Ic.config.xaxis.convertedCatToNumeric ? Ic.globals.categoryLabels : Ic.globals.labels, Bc = zc.indexOf(Lc), Vc = Ic.globals.dom.baseEl.querySelector(`.apexcharts-yaxis-texts-g text:nth-child(${Bc + 1})`);
					Fc = Vc ? parseFloat(Vc.getAttribute("y")) : (Ic.globals.gridHeight / zc.length - 1) * (Bc + 1) - Ic.globals.barHeight, Pc.seriesIndex !== void 0 && Ic.globals.barHeight && (Fc -= Ic.globals.barHeight / 2 * (Ic.globals.series.length - 1) - Ic.globals.barHeight * Pc.seriesIndex);
				} else {
					var Hc, Uc = Ic.globals.seriesYAxisMap[Pc.yAxisIndex][0], Wc = Ic.config.yaxis[Pc.yAxisIndex].logarithmic ? new Pi(this.annoCtx.ctx).getLogVal(Ic.config.yaxis[Pc.yAxisIndex].logBase, Lc, Uc) / Ic.globals.yLogRatio[Uc] : (Lc - Ic.globals.minYArr[Uc]) / (Ic.globals.yRange[Uc] / Ic.globals.gridHeight);
					Fc = Ic.globals.gridHeight - Math.min(Math.max(Wc, 0), Ic.globals.gridHeight), Rc = Wc > Ic.globals.gridHeight || Wc < 0, !Pc.marker || Pc.y !== void 0 && Pc.y !== null || (Fc = 0), (Hc = Ic.config.yaxis[Pc.yAxisIndex]) != null && Hc.reversed && (Fc = Wc);
				}
				return typeof Lc == "string" && Lc.includes("px") && (Fc = parseFloat(Lc)), {
					yP: Fc,
					clipped: Rc
				};
			}
		},
		{
			key: "getX1X2",
			value: function(io, Pc) {
				var Fc = this.w, Ic = io === "x1" ? Pc.x : Pc.x2, Lc = this.annoCtx.invertAxis ? Fc.globals.minY : Fc.globals.minX, Rc = this.annoCtx.invertAxis ? Fc.globals.maxY : Fc.globals.maxX, zc = this.annoCtx.invertAxis ? Fc.globals.yRange[0] : Fc.globals.xRange, Bc = !1, Vc = this.annoCtx.inversedReversedAxis ? (Rc - Ic) / (zc / Fc.globals.gridWidth) : (Ic - Lc) / (zc / Fc.globals.gridWidth);
				return Fc.config.xaxis.type !== "category" && !Fc.config.xaxis.convertedCatToNumeric || this.annoCtx.invertAxis || Fc.globals.dataFormatXNumeric || Fc.config.chart.sparkline.enabled || (Vc = this.getStringX(Ic)), typeof Ic == "string" && Ic.includes("px") && (Vc = parseFloat(Ic)), Ic == null && Pc.marker && (Vc = Fc.globals.gridWidth), Pc.seriesIndex !== void 0 && Fc.globals.barWidth && !this.annoCtx.invertAxis && (Vc -= Fc.globals.barWidth / 2 * (Fc.globals.series.length - 1) - Fc.globals.barWidth * Pc.seriesIndex), typeof Vc != "number" && (Vc = 0, Bc = !0), parseFloat(Vc.toFixed(10)) > parseFloat(Fc.globals.gridWidth.toFixed(10)) ? (Vc = Fc.globals.gridWidth, Bc = !0) : Vc < 0 && (Vc = 0, Bc = !0), {
					x: Vc,
					clipped: Bc
				};
			}
		},
		{
			key: "getStringX",
			value: function(io) {
				var Pc = this.w, Fc = io;
				Pc.config.xaxis.convertedCatToNumeric && Pc.globals.categoryLabels.length && (io = Pc.globals.categoryLabels.indexOf(io) + 1);
				var Ic = Pc.globals.labels.map((function(io) {
					return Array.isArray(io) ? io.join(" ") : io;
				})).indexOf(io), Lc = Pc.globals.dom.baseEl.querySelector(`.apexcharts-xaxis-texts-g text:nth-child(${Ic + 1})`);
				return Lc && (Fc = parseFloat(Lc.getAttribute("x"))), Fc;
			}
		}
	]), io;
}(), Ti = function() {
	function io(Pc) {
		i(this, io), this.w = Pc.w, this.annoCtx = Pc, this.invertAxis = this.annoCtx.invertAxis, this.helpers = new Ii(this.annoCtx);
	}
	return s(io, [{
		key: "addXaxisAnnotation",
		value: function(io, Pc, Fc) {
			var Ic, Lc = this.w, Rc = this.helpers.getX1X2("x1", io), zc = Rc.x, Bc = Rc.clipped, Vc = !0, Hc = io.label.text, Uc = io.strokeDashArray;
			if (v.isNumber(zc)) {
				if (io.x2 === null || io.x2 === void 0) {
					if (!Bc) {
						var Wc = this.annoCtx.graphics.drawLine(zc + io.offsetX, 0 + io.offsetY, zc + io.offsetX, Lc.globals.gridHeight + io.offsetY, io.borderColor, Uc, io.borderWidth);
						Pc.appendChild(Wc.node), io.id && Wc.node.classList.add(io.id);
					}
				} else {
					var Gc = this.helpers.getX1X2("x2", io);
					if (Ic = Gc.x, Vc = Gc.clipped, Ic < zc) {
						var Kc = zc;
						zc = Ic, Ic = Kc;
					}
					var qc = this.annoCtx.graphics.drawRect(zc + io.offsetX, 0 + io.offsetY, Ic - zc, Lc.globals.gridHeight + io.offsetY, 0, io.fillColor, io.opacity, 1, io.borderColor, Uc);
					qc.node.classList.add("apexcharts-annotation-rect"), qc.attr("clip-path", `url(#gridRectMask${Lc.globals.cuid})`), Pc.appendChild(qc.node), io.id && qc.node.classList.add(io.id);
				}
				if (!Bc || !Vc) {
					var Jc = this.annoCtx.graphics.getTextRects(Hc, parseFloat(io.label.style.fontSize)), Yc = io.label.position === "top" ? 4 : io.label.position === "center" ? Lc.globals.gridHeight / 2 + (io.label.orientation === "vertical" ? Jc.width / 2 : 0) : Lc.globals.gridHeight, Xc = this.annoCtx.graphics.drawText({
						x: zc + io.label.offsetX,
						y: Yc + io.label.offsetY - (io.label.orientation === "vertical" ? io.label.position === "top" ? Jc.width / 2 - 12 : -Jc.width / 2 : 0),
						text: Hc,
						textAnchor: io.label.textAnchor,
						fontSize: io.label.style.fontSize,
						fontFamily: io.label.style.fontFamily,
						fontWeight: io.label.style.fontWeight,
						foreColor: io.label.style.color,
						cssClass: `apexcharts-xaxis-annotation-label ${io.label.style.cssClass} ${io.id ? io.id : ""}`
					});
					Xc.attr({ rel: Fc }), Pc.appendChild(Xc.node), this.annoCtx.helpers.setOrientations(io, Fc);
				}
			}
		}
	}, {
		key: "drawXAxisAnnotations",
		value: function() {
			var io = this, Pc = this.w, Fc = this.annoCtx.graphics.group({ class: "apexcharts-xaxis-annotations" });
			return Pc.config.annotations.xaxis.map((function(Pc, Ic) {
				io.addXaxisAnnotation(Pc, Fc.node, Ic);
			})), Fc;
		}
	}]), io;
}(), zi = function() {
	function io(Pc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w, this.months31 = [
			1,
			3,
			5,
			7,
			8,
			10,
			12
		], this.months30 = [
			2,
			4,
			6,
			9,
			11
		], this.daysCntOfYear = [
			0,
			31,
			59,
			90,
			120,
			151,
			181,
			212,
			243,
			273,
			304,
			334
		];
	}
	return s(io, [
		{
			key: "isValidDate",
			value: function(io) {
				return typeof io != "number" && !isNaN(this.parseDate(io));
			}
		},
		{
			key: "getTimeStamp",
			value: function(io) {
				return Date.parse(io) ? this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(io).toISOString().substr(0, 25)).getTime() : new Date(io).getTime() : io;
			}
		},
		{
			key: "getDate",
			value: function(io) {
				return this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(io).toUTCString()) : new Date(io);
			}
		},
		{
			key: "parseDate",
			value: function(io) {
				var Pc = Date.parse(io);
				if (!isNaN(Pc)) return this.getTimeStamp(io);
				var Fc = Date.parse(io.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
				return Fc = this.getTimeStamp(Fc);
			}
		},
		{
			key: "parseDateWithTimezone",
			value: function(io) {
				return Date.parse(io.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
			}
		},
		{
			key: "formatDate",
			value: function(io, Pc) {
				var Fc = this.w.globals.locale, Ic = this.w.config.xaxis.labels.datetimeUTC, Lc = ["\0"].concat(f(Fc.months)), Rc = [""].concat(f(Fc.shortMonths)), zc = [""].concat(f(Fc.days)), Bc = [""].concat(f(Fc.shortDays));
				function Vc(io, Pc) {
					var Fc = io + "";
					for (Pc = Pc || 2; Fc.length < Pc;) Fc = "0" + Fc;
					return Fc;
				}
				var Hc = Ic ? io.getUTCFullYear() : io.getFullYear();
				Pc = (Pc = (Pc = Pc.replace(/(^|[^\\])yyyy+/g, "$1" + Hc)).replace(/(^|[^\\])yy/g, "$1" + Hc.toString().substr(2, 2))).replace(/(^|[^\\])y/g, "$1" + Hc);
				var Uc = (Ic ? io.getUTCMonth() : io.getMonth()) + 1;
				Pc = (Pc = (Pc = (Pc = Pc.replace(/(^|[^\\])MMMM+/g, "$1" + Lc[0])).replace(/(^|[^\\])MMM/g, "$1" + Rc[0])).replace(/(^|[^\\])MM/g, "$1" + Vc(Uc))).replace(/(^|[^\\])M/g, "$1" + Uc);
				var Wc = Ic ? io.getUTCDate() : io.getDate();
				Pc = (Pc = (Pc = (Pc = Pc.replace(/(^|[^\\])dddd+/g, "$1" + zc[0])).replace(/(^|[^\\])ddd/g, "$1" + Bc[0])).replace(/(^|[^\\])dd/g, "$1" + Vc(Wc))).replace(/(^|[^\\])d/g, "$1" + Wc);
				var Gc = Ic ? io.getUTCHours() : io.getHours(), Kc = Gc > 12 ? Gc - 12 : Gc === 0 ? 12 : Gc;
				Pc = (Pc = (Pc = (Pc = Pc.replace(/(^|[^\\])HH+/g, "$1" + Vc(Gc))).replace(/(^|[^\\])H/g, "$1" + Gc)).replace(/(^|[^\\])hh+/g, "$1" + Vc(Kc))).replace(/(^|[^\\])h/g, "$1" + Kc);
				var qc = Ic ? io.getUTCMinutes() : io.getMinutes();
				Pc = (Pc = Pc.replace(/(^|[^\\])mm+/g, "$1" + Vc(qc))).replace(/(^|[^\\])m/g, "$1" + qc);
				var Jc = Ic ? io.getUTCSeconds() : io.getSeconds();
				Pc = (Pc = Pc.replace(/(^|[^\\])ss+/g, "$1" + Vc(Jc))).replace(/(^|[^\\])s/g, "$1" + Jc);
				var Xc = Ic ? io.getUTCMilliseconds() : io.getMilliseconds();
				Pc = Pc.replace(/(^|[^\\])fff+/g, "$1" + Vc(Xc, 3)), Xc = Math.round(Xc / 10), Pc = Pc.replace(/(^|[^\\])ff/g, "$1" + Vc(Xc)), Xc = Math.round(Xc / 10);
				var Zc = Gc < 12 ? "AM" : "PM";
				Pc = (Pc = (Pc = Pc.replace(/(^|[^\\])f/g, "$1" + Xc)).replace(/(^|[^\\])TT+/g, "$1" + Zc)).replace(/(^|[^\\])T/g, "$1" + Zc.charAt(0));
				var Qc = Zc.toLowerCase();
				Pc = (Pc = Pc.replace(/(^|[^\\])tt+/g, "$1" + Qc)).replace(/(^|[^\\])t/g, "$1" + Qc.charAt(0));
				var $c = -io.getTimezoneOffset(), el = Ic || !$c ? "Z" : $c > 0 ? "+" : "-";
				if (!Ic) {
					var tl = ($c = Math.abs($c)) % 60;
					el += Vc(Math.floor($c / 60)) + ":" + Vc(tl);
				}
				Pc = Pc.replace(/(^|[^\\])K/g, "$1" + el);
				var nl = (Ic ? io.getUTCDay() : io.getDay()) + 1;
				return Pc = (Pc = (Pc = (Pc = (Pc = Pc.replace(new RegExp(zc[0], "g"), zc[nl])).replace(new RegExp(Bc[0], "g"), Bc[nl])).replace(new RegExp(Lc[0], "g"), Lc[Uc])).replace(new RegExp(Rc[0], "g"), Rc[Uc])).replace(/\\(.)/g, "$1");
			}
		},
		{
			key: "getTimeUnitsfromTimestamp",
			value: function(io, Pc, Fc) {
				var Ic = this.w;
				Ic.config.xaxis.min !== void 0 && (io = Ic.config.xaxis.min), Ic.config.xaxis.max !== void 0 && (Pc = Ic.config.xaxis.max);
				var Lc = this.getDate(io), Rc = this.getDate(Pc), zc = this.formatDate(Lc, "yyyy MM dd HH mm ss fff").split(" "), Bc = this.formatDate(Rc, "yyyy MM dd HH mm ss fff").split(" ");
				return {
					minMillisecond: parseInt(zc[6], 10),
					maxMillisecond: parseInt(Bc[6], 10),
					minSecond: parseInt(zc[5], 10),
					maxSecond: parseInt(Bc[5], 10),
					minMinute: parseInt(zc[4], 10),
					maxMinute: parseInt(Bc[4], 10),
					minHour: parseInt(zc[3], 10),
					maxHour: parseInt(Bc[3], 10),
					minDate: parseInt(zc[2], 10),
					maxDate: parseInt(Bc[2], 10),
					minMonth: parseInt(zc[1], 10) - 1,
					maxMonth: parseInt(Bc[1], 10) - 1,
					minYear: parseInt(zc[0], 10),
					maxYear: parseInt(Bc[0], 10)
				};
			}
		},
		{
			key: "isLeapYear",
			value: function(io) {
				return io % 4 == 0 && io % 100 != 0 || io % 400 == 0;
			}
		},
		{
			key: "calculcateLastDaysOfMonth",
			value: function(io, Pc, Fc) {
				return this.determineDaysOfMonths(io, Pc) - Fc;
			}
		},
		{
			key: "determineDaysOfYear",
			value: function(io) {
				var Pc = 365;
				return this.isLeapYear(io) && (Pc = 366), Pc;
			}
		},
		{
			key: "determineRemainingDaysOfYear",
			value: function(io, Pc, Fc) {
				var Ic = this.daysCntOfYear[Pc] + Fc;
				return Pc > 1 && this.isLeapYear() && Ic++, Ic;
			}
		},
		{
			key: "determineDaysOfMonths",
			value: function(io, Pc) {
				var Fc = 30;
				switch (io = v.monthMod(io), !0) {
					case this.months30.indexOf(io) > -1:
						io === 2 && (Fc = this.isLeapYear(Pc) ? 29 : 28);
						break;
					case this.months31.indexOf(io) > -1:
					default: Fc = 31;
				}
				return Fc;
			}
		}
	]), io;
}(), Xi = function() {
	function io(Pc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w, this.tooltipKeyFormat = "dd MMM";
	}
	return s(io, [
		{
			key: "xLabelFormat",
			value: function(io, Pc, Fc, Ic) {
				var Lc = this.w;
				if (Lc.config.xaxis.type === "datetime" && Lc.config.xaxis.labels.formatter === void 0 && Lc.config.tooltip.x.formatter === void 0) {
					var Rc = new zi(this.ctx);
					return Rc.formatDate(Rc.getDate(Pc), Lc.config.tooltip.x.format);
				}
				return io(Pc, Fc, Ic);
			}
		},
		{
			key: "defaultGeneralFormatter",
			value: function(io) {
				return Array.isArray(io) ? io.map((function(io) {
					return io;
				})) : io;
			}
		},
		{
			key: "defaultYFormatter",
			value: function(io, Pc, Fc) {
				var Ic = this.w;
				if (v.isNumber(io)) if (Ic.globals.yValueDecimal !== 0) io = io.toFixed(Pc.decimalsInFloat === void 0 ? Ic.globals.yValueDecimal : Pc.decimalsInFloat);
				else {
					var Lc = io.toFixed(0);
					io = io == Lc ? Lc : io.toFixed(1);
				}
				return io;
			}
		},
		{
			key: "setLabelFormatters",
			value: function() {
				var io = this, Pc = this.w;
				return Pc.globals.xaxisTooltipFormatter = function(Pc) {
					return io.defaultGeneralFormatter(Pc);
				}, Pc.globals.ttKeyFormatter = function(Pc) {
					return io.defaultGeneralFormatter(Pc);
				}, Pc.globals.ttZFormatter = function(io) {
					return io;
				}, Pc.globals.legendFormatter = function(Pc) {
					return io.defaultGeneralFormatter(Pc);
				}, Pc.config.xaxis.labels.formatter === void 0 ? Pc.globals.xLabelFormatter = function(io) {
					if (v.isNumber(io)) {
						if (!Pc.config.xaxis.convertedCatToNumeric && Pc.config.xaxis.type === "numeric") {
							if (v.isNumber(Pc.config.xaxis.decimalsInFloat)) return io.toFixed(Pc.config.xaxis.decimalsInFloat);
							var Fc = Pc.globals.maxX - Pc.globals.minX;
							return Fc > 0 && Fc < 100 ? io.toFixed(1) : io.toFixed(0);
						}
						return Pc.globals.isBarHorizontal && Pc.globals.maxY - Pc.globals.minYArr < 4 ? io.toFixed(1) : io.toFixed(0);
					}
					return io;
				} : Pc.globals.xLabelFormatter = Pc.config.xaxis.labels.formatter, typeof Pc.config.tooltip.x.formatter == "function" ? Pc.globals.ttKeyFormatter = Pc.config.tooltip.x.formatter : Pc.globals.ttKeyFormatter = Pc.globals.xLabelFormatter, typeof Pc.config.xaxis.tooltip.formatter == "function" && (Pc.globals.xaxisTooltipFormatter = Pc.config.xaxis.tooltip.formatter), (Array.isArray(Pc.config.tooltip.y) || Pc.config.tooltip.y.formatter !== void 0) && (Pc.globals.ttVal = Pc.config.tooltip.y), Pc.config.tooltip.z.formatter !== void 0 && (Pc.globals.ttZFormatter = Pc.config.tooltip.z.formatter), Pc.config.legend.formatter !== void 0 && (Pc.globals.legendFormatter = Pc.config.legend.formatter), Pc.config.yaxis.forEach((function(Fc, Ic) {
					Fc.labels.formatter === void 0 ? Pc.globals.yLabelFormatters[Ic] = function(Lc) {
						return Pc.globals.xyCharts ? Array.isArray(Lc) ? Lc.map((function(Pc) {
							return io.defaultYFormatter(Pc, Fc, Ic);
						})) : io.defaultYFormatter(Lc, Fc, Ic) : Lc;
					} : Pc.globals.yLabelFormatters[Ic] = Fc.labels.formatter;
				})), Pc.globals;
			}
		},
		{
			key: "heatmapLabelFormatters",
			value: function() {
				var io = this.w;
				if (io.config.chart.type === "heatmap") {
					io.globals.yAxisScale[0].result = io.globals.seriesNames.slice();
					var Pc = io.globals.seriesNames.reduce((function(io, Pc) {
						return io.length > Pc.length ? io : Pc;
					}), 0);
					io.globals.yAxisScale[0].niceMax = Pc, io.globals.yAxisScale[0].niceMin = Pc;
				}
			}
		}
	]), io;
}(), Ri = function() {
	function io(Pc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w;
	}
	return s(io, [
		{
			key: "getLabel",
			value: function(io, Pc, Fc, Ic) {
				var Lc = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [], Rc = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "12px", zc = !(arguments.length > 6 && arguments[6] !== void 0) || arguments[6], Bc = this.w, Vc = io[Ic] === void 0 ? "" : io[Ic], Hc = Vc, Uc = Bc.globals.xLabelFormatter, Wc = Bc.config.xaxis.labels.formatter, Gc = !1, Kc = new Xi(this.ctx), qc = Vc;
				zc && (Hc = Kc.xLabelFormat(Uc, Vc, qc, {
					i: Ic,
					dateFormatter: new zi(this.ctx).formatDate,
					w: Bc
				}), Wc !== void 0 && (Hc = Wc(Vc, io[Ic], {
					i: Ic,
					dateFormatter: new zi(this.ctx).formatDate,
					w: Bc
				})));
				var Jc, Yc;
				Pc.length > 0 ? (Jc = Pc[Ic].unit, Yc = null, Pc.forEach((function(io) {
					io.unit === "month" ? Yc = "year" : io.unit === "day" ? Yc = "month" : io.unit === "hour" ? Yc = "day" : io.unit === "minute" && (Yc = "hour");
				})), Gc = Yc === Jc, Fc = Pc[Ic].position, Hc = Pc[Ic].value) : Bc.config.xaxis.type === "datetime" && Wc === void 0 && (Hc = ""), Hc === void 0 && (Hc = ""), Hc = Array.isArray(Hc) ? Hc : Hc.toString();
				var Xc = new Mi(this.ctx), Zc = {};
				Zc = Bc.globals.rotateXLabels && zc ? Xc.getTextRects(Hc, parseInt(Rc, 10), null, `rotate(${Bc.config.xaxis.labels.rotate} 0 0)`, !1) : Xc.getTextRects(Hc, parseInt(Rc, 10));
				var Qc = !Bc.config.xaxis.labels.showDuplicates && this.ctx.timeScale;
				return !Array.isArray(Hc) && (String(Hc) === "NaN" || Lc.indexOf(Hc) >= 0 && Qc) && (Hc = ""), {
					x: Fc,
					text: Hc,
					textRect: Zc,
					isBold: Gc
				};
			}
		},
		{
			key: "checkLabelBasedOnTickamount",
			value: function(io, Pc, Fc) {
				var Ic = this.w, Lc = Ic.config.xaxis.tickAmount;
				return Lc === "dataPoints" && (Lc = Math.round(Ic.globals.gridWidth / 120)), Lc > Fc || io % Math.round(Fc / (Lc + 1)) == 0 || (Pc.text = ""), Pc;
			}
		},
		{
			key: "checkForOverflowingLabels",
			value: function(io, Pc, Fc, Ic, Lc) {
				var Rc = this.w;
				if (io === 0 && Rc.globals.skipFirstTimelinelabel && (Pc.text = ""), io === Fc - 1 && Rc.globals.skipLastTimelinelabel && (Pc.text = ""), Rc.config.xaxis.labels.hideOverlappingLabels && Ic.length > 0) {
					var zc = Lc[Lc.length - 1];
					Pc.x < zc.textRect.width / (Rc.globals.rotateXLabels ? Math.abs(Rc.config.xaxis.labels.rotate) / 12 : 1.01) + zc.x && (Pc.text = "");
				}
				return Pc;
			}
		},
		{
			key: "checkForReversedLabels",
			value: function(io, Pc) {
				var Fc = this.w;
				return Fc.config.yaxis[io] && Fc.config.yaxis[io].reversed && Pc.reverse(), Pc;
			}
		},
		{
			key: "yAxisAllSeriesCollapsed",
			value: function(io) {
				var Pc = this.w.globals;
				return !Pc.seriesYAxisMap[io].some((function(io) {
					return Pc.collapsedSeriesIndices.indexOf(io) === -1;
				}));
			}
		},
		{
			key: "translateYAxisIndex",
			value: function(io) {
				var Pc = this.w, Fc = Pc.globals, Ic = Pc.config.yaxis;
				return Fc.series.length > Ic.length || Ic.some((function(io) {
					return Array.isArray(io.seriesName);
				})) ? io : Fc.seriesYAxisReverseMap[io];
			}
		},
		{
			key: "isYAxisHidden",
			value: function(io) {
				var Pc = this.w, Fc = Pc.config.yaxis[io];
				if (!Fc.show || this.yAxisAllSeriesCollapsed(io)) return !0;
				if (!Fc.showForNullSeries) {
					var Ic = Pc.globals.seriesYAxisMap[io], Lc = new Pi(this.ctx);
					return Ic.every((function(io) {
						return Lc.isSeriesNull(io);
					}));
				}
				return !1;
			}
		},
		{
			key: "getYAxisForeColor",
			value: function(io, Pc) {
				var Fc = this.w;
				return Array.isArray(io) && Fc.globals.yAxisScale[Pc] && this.ctx.theme.pushExtraColors(io, Fc.globals.yAxisScale[Pc].result.length, !1), io;
			}
		},
		{
			key: "drawYAxisTicks",
			value: function(io, Pc, Fc, Ic, Lc, Rc, zc) {
				var Bc = this.w, Vc = new Mi(this.ctx), Hc = Bc.globals.translateY + Bc.config.yaxis[Lc].labels.offsetY;
				if (Bc.globals.isBarHorizontal ? Hc = 0 : Bc.config.chart.type === "heatmap" && (Hc += Rc / 2), Ic.show && Pc > 0) {
					!0 === Bc.config.yaxis[Lc].opposite && (io += Ic.width);
					for (var Uc = Pc; Uc >= 0; Uc--) {
						var Wc = Vc.drawLine(io + Fc.offsetX - Ic.width + Ic.offsetX, Hc + Ic.offsetY, io + Fc.offsetX + Ic.offsetX, Hc + Ic.offsetY, Ic.color);
						zc.add(Wc), Hc += Rc;
					}
				}
			}
		}
	]), io;
}(), Ei = function() {
	function io(Pc) {
		i(this, io), this.w = Pc.w, this.annoCtx = Pc, this.helpers = new Ii(this.annoCtx), this.axesUtils = new Ri(this.annoCtx);
	}
	return s(io, [
		{
			key: "addYaxisAnnotation",
			value: function(io, Pc, Fc) {
				var Ic, Lc = this.w, Rc = io.strokeDashArray, zc = this.helpers.getY1Y2("y1", io), Bc = zc.yP, Vc = zc.clipped, Hc = !0, Uc = !1, Wc = io.label.text;
				if (io.y2 === null || io.y2 === void 0) {
					if (!Vc) {
						Uc = !0;
						var Gc = this.annoCtx.graphics.drawLine(0 + io.offsetX, Bc + io.offsetY, this._getYAxisAnnotationWidth(io), Bc + io.offsetY, io.borderColor, Rc, io.borderWidth);
						Pc.appendChild(Gc.node), io.id && Gc.node.classList.add(io.id);
					}
				} else {
					if (Ic = (zc = this.helpers.getY1Y2("y2", io)).yP, Hc = zc.clipped, Ic > Bc) {
						var Kc = Bc;
						Bc = Ic, Ic = Kc;
					}
					if (!Vc || !Hc) {
						Uc = !0;
						var qc = this.annoCtx.graphics.drawRect(0 + io.offsetX, Ic + io.offsetY, this._getYAxisAnnotationWidth(io), Bc - Ic, 0, io.fillColor, io.opacity, 1, io.borderColor, Rc);
						qc.node.classList.add("apexcharts-annotation-rect"), qc.attr("clip-path", `url(#gridRectMask${Lc.globals.cuid})`), Pc.appendChild(qc.node), io.id && qc.node.classList.add(io.id);
					}
				}
				if (Uc) {
					var Jc = io.label.position === "right" ? Lc.globals.gridWidth : io.label.position === "center" ? Lc.globals.gridWidth / 2 : 0, Yc = this.annoCtx.graphics.drawText({
						x: Jc + io.label.offsetX,
						y: (Ic == null ? Bc : Ic) + io.label.offsetY - 3,
						text: Wc,
						textAnchor: io.label.textAnchor,
						fontSize: io.label.style.fontSize,
						fontFamily: io.label.style.fontFamily,
						fontWeight: io.label.style.fontWeight,
						foreColor: io.label.style.color,
						cssClass: `apexcharts-yaxis-annotation-label ${io.label.style.cssClass} ${io.id ? io.id : ""}`
					});
					Yc.attr({ rel: Fc }), Pc.appendChild(Yc.node);
				}
			}
		},
		{
			key: "_getYAxisAnnotationWidth",
			value: function(io) {
				var Pc = this.w;
				return Pc.globals.gridWidth, (io.width.indexOf("%") > -1 ? Pc.globals.gridWidth * parseInt(io.width, 10) / 100 : parseInt(io.width, 10)) + io.offsetX;
			}
		},
		{
			key: "drawYAxisAnnotations",
			value: function() {
				var io = this, Pc = this.w, Fc = this.annoCtx.graphics.group({ class: "apexcharts-yaxis-annotations" });
				return Pc.config.annotations.yaxis.forEach((function(Pc, Ic) {
					Pc.yAxisIndex = io.axesUtils.translateYAxisIndex(Pc.yAxisIndex), io.axesUtils.isYAxisHidden(Pc.yAxisIndex) && io.axesUtils.yAxisAllSeriesCollapsed(Pc.yAxisIndex) || io.addYaxisAnnotation(Pc, Fc.node, Ic);
				})), Fc;
			}
		}
	]), io;
}(), Yi = function() {
	function io(Pc) {
		i(this, io), this.w = Pc.w, this.annoCtx = Pc, this.helpers = new Ii(this.annoCtx);
	}
	return s(io, [{
		key: "addPointAnnotation",
		value: function(io, Pc, Fc) {
			if (!(this.w.globals.collapsedSeriesIndices.indexOf(io.seriesIndex) > -1)) {
				var Ic = this.helpers.getX1X2("x1", io), Lc = Ic.x, Rc = Ic.clipped, zc = (Ic = this.helpers.getY1Y2("y1", io)).yP, Bc = Ic.clipped;
				if (v.isNumber(Lc) && !Bc && !Rc) {
					var Vc = {
						pSize: io.marker.size,
						pointStrokeWidth: io.marker.strokeWidth,
						pointFillColor: io.marker.fillColor,
						pointStrokeColor: io.marker.strokeColor,
						shape: io.marker.shape,
						pRadius: io.marker.radius,
						class: `apexcharts-point-annotation-marker ${io.marker.cssClass} ${io.id ? io.id : ""}`
					}, Hc = this.annoCtx.graphics.drawMarker(Lc + io.marker.offsetX, zc + io.marker.offsetY, Vc);
					Pc.appendChild(Hc.node);
					var Uc = io.label.text ? io.label.text : "", Wc = this.annoCtx.graphics.drawText({
						x: Lc + io.label.offsetX,
						y: zc + io.label.offsetY - io.marker.size - parseFloat(io.label.style.fontSize) / 1.6,
						text: Uc,
						textAnchor: io.label.textAnchor,
						fontSize: io.label.style.fontSize,
						fontFamily: io.label.style.fontFamily,
						fontWeight: io.label.style.fontWeight,
						foreColor: io.label.style.color,
						cssClass: `apexcharts-point-annotation-label ${io.label.style.cssClass} ${io.id ? io.id : ""}`
					});
					if (Wc.attr({ rel: Fc }), Pc.appendChild(Wc.node), io.customSVG.SVG) {
						var Gc = this.annoCtx.graphics.group({ class: "apexcharts-point-annotations-custom-svg " + io.customSVG.cssClass });
						Gc.attr({ transform: `translate(${Lc + io.customSVG.offsetX}, ${zc + io.customSVG.offsetY})` }), Gc.node.innerHTML = io.customSVG.SVG, Pc.appendChild(Gc.node);
					}
					if (io.image.path) {
						var Kc = io.image.width ? io.image.width : 20, qc = io.image.height ? io.image.height : 20;
						Hc = this.annoCtx.addImage({
							x: Lc + io.image.offsetX - Kc / 2,
							y: zc + io.image.offsetY - qc / 2,
							width: Kc,
							height: qc,
							path: io.image.path,
							appendTo: ".apexcharts-point-annotations"
						});
					}
					io.mouseEnter && Hc.node.addEventListener("mouseenter", io.mouseEnter.bind(this, io)), io.mouseLeave && Hc.node.addEventListener("mouseleave", io.mouseLeave.bind(this, io)), io.click && Hc.node.addEventListener("click", io.click.bind(this, io));
				}
			}
		}
	}, {
		key: "drawPointAnnotations",
		value: function() {
			var io = this, Pc = this.w, Fc = this.annoCtx.graphics.group({ class: "apexcharts-point-annotations" });
			return Pc.config.annotations.points.map((function(Pc, Ic) {
				io.addPointAnnotation(Pc, Fc.node, Ic);
			})), Fc;
		}
	}]), io;
}(), Hi = {
	name: "en",
	options: {
		months: [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		],
		shortMonths: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec"
		],
		days: [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
		],
		shortDays: [
			"Sun",
			"Mon",
			"Tue",
			"Wed",
			"Thu",
			"Fri",
			"Sat"
		],
		toolbar: {
			exportToSVG: "Download SVG",
			exportToPNG: "Download PNG",
			exportToCSV: "Download CSV",
			menu: "Menu",
			selection: "Selection",
			selectionZoom: "Selection Zoom",
			zoomIn: "Zoom In",
			zoomOut: "Zoom Out",
			pan: "Panning",
			reset: "Reset Zoom"
		}
	}
}, Oi = function() {
	function io() {
		i(this, io), this.yAxis = {
			show: !0,
			showAlways: !1,
			showForNullSeries: !0,
			seriesName: void 0,
			opposite: !1,
			reversed: !1,
			logarithmic: !1,
			logBase: 10,
			tickAmount: void 0,
			stepSize: void 0,
			forceNiceScale: !1,
			max: void 0,
			min: void 0,
			floating: !1,
			decimalsInFloat: void 0,
			labels: {
				show: !0,
				showDuplicates: !1,
				minWidth: 0,
				maxWidth: 160,
				offsetX: 0,
				offsetY: 0,
				align: void 0,
				rotate: 0,
				padding: 20,
				style: {
					colors: [],
					fontSize: "11px",
					fontWeight: 400,
					fontFamily: void 0,
					cssClass: ""
				},
				formatter: void 0
			},
			axisBorder: {
				show: !1,
				color: "#e0e0e0",
				width: 1,
				offsetX: 0,
				offsetY: 0
			},
			axisTicks: {
				show: !1,
				color: "#e0e0e0",
				width: 6,
				offsetX: 0,
				offsetY: 0
			},
			title: {
				text: void 0,
				rotate: -90,
				offsetY: 0,
				offsetX: 0,
				style: {
					color: void 0,
					fontSize: "11px",
					fontWeight: 900,
					fontFamily: void 0,
					cssClass: ""
				}
			},
			tooltip: {
				enabled: !1,
				offsetX: 0
			},
			crosshairs: {
				show: !0,
				position: "front",
				stroke: {
					color: "#b6b6b6",
					width: 1,
					dashArray: 0
				}
			}
		}, this.pointAnnotation = {
			id: void 0,
			x: 0,
			y: null,
			yAxisIndex: 0,
			seriesIndex: void 0,
			mouseEnter: void 0,
			mouseLeave: void 0,
			click: void 0,
			marker: {
				size: 4,
				fillColor: "#fff",
				strokeWidth: 2,
				strokeColor: "#333",
				shape: "circle",
				offsetX: 0,
				offsetY: 0,
				cssClass: ""
			},
			label: {
				borderColor: "#c2c2c2",
				borderWidth: 1,
				borderRadius: 2,
				text: void 0,
				textAnchor: "middle",
				offsetX: 0,
				offsetY: 0,
				mouseEnter: void 0,
				mouseLeave: void 0,
				click: void 0,
				style: {
					background: "#fff",
					color: void 0,
					fontSize: "11px",
					fontFamily: void 0,
					fontWeight: 400,
					cssClass: "",
					padding: {
						left: 5,
						right: 5,
						top: 2,
						bottom: 2
					}
				}
			},
			customSVG: {
				SVG: void 0,
				cssClass: void 0,
				offsetX: 0,
				offsetY: 0
			},
			image: {
				path: void 0,
				width: 20,
				height: 20,
				offsetX: 0,
				offsetY: 0
			}
		}, this.yAxisAnnotation = {
			id: void 0,
			y: 0,
			y2: null,
			strokeDashArray: 1,
			fillColor: "#c2c2c2",
			borderColor: "#c2c2c2",
			borderWidth: 1,
			opacity: .3,
			offsetX: 0,
			offsetY: 0,
			width: "100%",
			yAxisIndex: 0,
			label: {
				borderColor: "#c2c2c2",
				borderWidth: 1,
				borderRadius: 2,
				text: void 0,
				textAnchor: "end",
				position: "right",
				offsetX: 0,
				offsetY: -3,
				mouseEnter: void 0,
				mouseLeave: void 0,
				click: void 0,
				style: {
					background: "#fff",
					color: void 0,
					fontSize: "11px",
					fontFamily: void 0,
					fontWeight: 400,
					cssClass: "",
					padding: {
						left: 5,
						right: 5,
						top: 2,
						bottom: 2
					}
				}
			}
		}, this.xAxisAnnotation = {
			id: void 0,
			x: 0,
			x2: null,
			strokeDashArray: 1,
			fillColor: "#c2c2c2",
			borderColor: "#c2c2c2",
			borderWidth: 1,
			opacity: .3,
			offsetX: 0,
			offsetY: 0,
			label: {
				borderColor: "#c2c2c2",
				borderWidth: 1,
				borderRadius: 2,
				text: void 0,
				textAnchor: "middle",
				orientation: "vertical",
				position: "top",
				offsetX: 0,
				offsetY: 0,
				mouseEnter: void 0,
				mouseLeave: void 0,
				click: void 0,
				style: {
					background: "#fff",
					color: void 0,
					fontSize: "11px",
					fontFamily: void 0,
					fontWeight: 400,
					cssClass: "",
					padding: {
						left: 5,
						right: 5,
						top: 2,
						bottom: 2
					}
				}
			}
		}, this.text = {
			x: 0,
			y: 0,
			text: "",
			textAnchor: "start",
			foreColor: void 0,
			fontSize: "13px",
			fontFamily: void 0,
			fontWeight: 400,
			appendTo: ".apexcharts-annotations",
			backgroundColor: "transparent",
			borderColor: "#c2c2c2",
			borderRadius: 0,
			borderWidth: 0,
			paddingLeft: 4,
			paddingRight: 4,
			paddingTop: 2,
			paddingBottom: 2
		};
	}
	return s(io, [{
		key: "init",
		value: function() {
			return {
				annotations: {
					yaxis: [this.yAxisAnnotation],
					xaxis: [this.xAxisAnnotation],
					points: [this.pointAnnotation],
					texts: [],
					images: [],
					shapes: []
				},
				chart: {
					animations: {
						enabled: !0,
						speed: 800,
						animateGradually: {
							delay: 150,
							enabled: !0
						},
						dynamicAnimation: {
							enabled: !0,
							speed: 350
						}
					},
					background: "",
					locales: [Hi],
					defaultLocale: "en",
					dropShadow: {
						enabled: !1,
						enabledOnSeries: void 0,
						top: 2,
						left: 2,
						blur: 4,
						color: "#000",
						opacity: .7
					},
					events: {
						animationEnd: void 0,
						beforeMount: void 0,
						mounted: void 0,
						updated: void 0,
						click: void 0,
						mouseMove: void 0,
						mouseLeave: void 0,
						xAxisLabelClick: void 0,
						legendClick: void 0,
						markerClick: void 0,
						selection: void 0,
						dataPointSelection: void 0,
						dataPointMouseEnter: void 0,
						dataPointMouseLeave: void 0,
						beforeZoom: void 0,
						beforeResetZoom: void 0,
						zoomed: void 0,
						scrolled: void 0,
						brushScrolled: void 0
					},
					foreColor: "#373d3f",
					fontFamily: "Helvetica, Arial, sans-serif",
					height: "auto",
					parentHeightOffset: 15,
					redrawOnParentResize: !0,
					redrawOnWindowResize: !0,
					id: void 0,
					group: void 0,
					nonce: void 0,
					offsetX: 0,
					offsetY: 0,
					selection: {
						enabled: !1,
						type: "x",
						fill: {
							color: "#24292e",
							opacity: .1
						},
						stroke: {
							width: 1,
							color: "#24292e",
							opacity: .4,
							dashArray: 3
						},
						xaxis: {
							min: void 0,
							max: void 0
						},
						yaxis: {
							min: void 0,
							max: void 0
						}
					},
					sparkline: { enabled: !1 },
					brush: {
						enabled: !1,
						autoScaleYaxis: !0,
						target: void 0,
						targets: void 0
					},
					stacked: !1,
					stackOnlyBar: !0,
					stackType: "normal",
					toolbar: {
						show: !0,
						offsetX: 0,
						offsetY: 0,
						tools: {
							download: !0,
							selection: !0,
							zoom: !0,
							zoomin: !0,
							zoomout: !0,
							pan: !0,
							reset: !0,
							customIcons: []
						},
						export: {
							csv: {
								filename: void 0,
								columnDelimiter: ",",
								headerCategory: "category",
								headerValue: "value",
								categoryFormatter: void 0,
								valueFormatter: void 0
							},
							png: { filename: void 0 },
							svg: { filename: void 0 },
							scale: void 0,
							width: void 0
						},
						autoSelected: "zoom"
					},
					type: "line",
					width: "100%",
					zoom: {
						enabled: !0,
						type: "x",
						autoScaleYaxis: !1,
						allowMouseWheelZoom: !0,
						zoomedArea: {
							fill: {
								color: "#90CAF9",
								opacity: .4
							},
							stroke: {
								color: "#0D47A1",
								opacity: .4,
								width: 1
							}
						}
					}
				},
				plotOptions: {
					line: {
						isSlopeChart: !1,
						colors: {
							threshold: 0,
							colorAboveThreshold: void 0,
							colorBelowThreshold: void 0
						}
					},
					area: { fillTo: "origin" },
					bar: {
						horizontal: !1,
						columnWidth: "70%",
						barHeight: "70%",
						distributed: !1,
						borderRadius: 0,
						borderRadiusApplication: "around",
						borderRadiusWhenStacked: "last",
						rangeBarOverlap: !0,
						rangeBarGroupRows: !1,
						hideZeroBarsWhenGrouped: !1,
						isDumbbell: !1,
						dumbbellColors: void 0,
						isFunnel: !1,
						isFunnel3d: !0,
						colors: {
							ranges: [],
							backgroundBarColors: [],
							backgroundBarOpacity: 1,
							backgroundBarRadius: 0
						},
						dataLabels: {
							position: "top",
							maxItems: 100,
							hideOverflowingLabels: !0,
							orientation: "horizontal",
							total: {
								enabled: !1,
								formatter: void 0,
								offsetX: 0,
								offsetY: 0,
								style: {
									color: "#373d3f",
									fontSize: "12px",
									fontFamily: void 0,
									fontWeight: 600
								}
							}
						}
					},
					bubble: {
						zScaling: !0,
						minBubbleRadius: void 0,
						maxBubbleRadius: void 0
					},
					candlestick: {
						colors: {
							upward: "#00B746",
							downward: "#EF403C"
						},
						wick: { useFillColor: !0 }
					},
					boxPlot: { colors: {
						upper: "#00E396",
						lower: "#008FFB"
					} },
					heatmap: {
						radius: 2,
						enableShades: !0,
						shadeIntensity: .5,
						reverseNegativeShade: !1,
						distributed: !1,
						useFillColorAsStroke: !1,
						colorScale: {
							inverse: !1,
							ranges: [],
							min: void 0,
							max: void 0
						}
					},
					treemap: {
						enableShades: !0,
						shadeIntensity: .5,
						distributed: !1,
						reverseNegativeShade: !1,
						useFillColorAsStroke: !1,
						borderRadius: 4,
						dataLabels: { format: "scale" },
						colorScale: {
							inverse: !1,
							ranges: [],
							min: void 0,
							max: void 0
						},
						seriesTitle: {
							show: !0,
							offsetY: 1,
							offsetX: 1,
							borderColor: "#000",
							borderWidth: 1,
							borderRadius: 2,
							style: {
								background: "rgba(0, 0, 0, 0.6)",
								color: "#fff",
								fontSize: "12px",
								fontFamily: void 0,
								fontWeight: 400,
								cssClass: "",
								padding: {
									left: 6,
									right: 6,
									top: 2,
									bottom: 2
								}
							}
						}
					},
					radialBar: {
						inverseOrder: !1,
						startAngle: 0,
						endAngle: 360,
						offsetX: 0,
						offsetY: 0,
						hollow: {
							margin: 5,
							size: "50%",
							background: "transparent",
							image: void 0,
							imageWidth: 150,
							imageHeight: 150,
							imageOffsetX: 0,
							imageOffsetY: 0,
							imageClipped: !0,
							position: "front",
							dropShadow: {
								enabled: !1,
								top: 0,
								left: 0,
								blur: 3,
								color: "#000",
								opacity: .5
							}
						},
						track: {
							show: !0,
							startAngle: void 0,
							endAngle: void 0,
							background: "#f2f2f2",
							strokeWidth: "97%",
							opacity: 1,
							margin: 5,
							dropShadow: {
								enabled: !1,
								top: 0,
								left: 0,
								blur: 3,
								color: "#000",
								opacity: .5
							}
						},
						dataLabels: {
							show: !0,
							name: {
								show: !0,
								fontSize: "16px",
								fontFamily: void 0,
								fontWeight: 600,
								color: void 0,
								offsetY: 0,
								formatter: function(io) {
									return io;
								}
							},
							value: {
								show: !0,
								fontSize: "14px",
								fontFamily: void 0,
								fontWeight: 400,
								color: void 0,
								offsetY: 16,
								formatter: function(io) {
									return io + "%";
								}
							},
							total: {
								show: !1,
								label: "Total",
								fontSize: "16px",
								fontWeight: 600,
								fontFamily: void 0,
								color: void 0,
								formatter: function(io) {
									return io.globals.seriesTotals.reduce((function(io, Pc) {
										return io + Pc;
									}), 0) / io.globals.series.length + "%";
								}
							}
						},
						barLabels: {
							enabled: !1,
							offsetX: 0,
							offsetY: 0,
							useSeriesColors: !0,
							fontFamily: void 0,
							fontWeight: 600,
							fontSize: "16px",
							formatter: function(io) {
								return io;
							},
							onClick: void 0
						}
					},
					pie: {
						customScale: 1,
						offsetX: 0,
						offsetY: 0,
						startAngle: 0,
						endAngle: 360,
						expandOnClick: !0,
						dataLabels: {
							offset: 0,
							minAngleToShowLabel: 10
						},
						donut: {
							size: "65%",
							background: "transparent",
							labels: {
								show: !1,
								name: {
									show: !0,
									fontSize: "16px",
									fontFamily: void 0,
									fontWeight: 600,
									color: void 0,
									offsetY: -10,
									formatter: function(io) {
										return io;
									}
								},
								value: {
									show: !0,
									fontSize: "20px",
									fontFamily: void 0,
									fontWeight: 400,
									color: void 0,
									offsetY: 10,
									formatter: function(io) {
										return io;
									}
								},
								total: {
									show: !1,
									showAlways: !1,
									label: "Total",
									fontSize: "16px",
									fontWeight: 400,
									fontFamily: void 0,
									color: void 0,
									formatter: function(io) {
										return io.globals.seriesTotals.reduce((function(io, Pc) {
											return io + Pc;
										}), 0);
									}
								}
							}
						}
					},
					polarArea: {
						rings: {
							strokeWidth: 1,
							strokeColor: "#e8e8e8"
						},
						spokes: {
							strokeWidth: 1,
							connectorColors: "#e8e8e8"
						}
					},
					radar: {
						size: void 0,
						offsetX: 0,
						offsetY: 0,
						polygons: {
							strokeWidth: 1,
							strokeColors: "#e8e8e8",
							connectorColors: "#e8e8e8",
							fill: { colors: void 0 }
						}
					}
				},
				colors: void 0,
				dataLabels: {
					enabled: !0,
					enabledOnSeries: void 0,
					formatter: function(io) {
						return io === null ? "" : io;
					},
					textAnchor: "middle",
					distributed: !1,
					offsetX: 0,
					offsetY: 0,
					style: {
						fontSize: "12px",
						fontFamily: void 0,
						fontWeight: 600,
						colors: void 0
					},
					background: {
						enabled: !0,
						foreColor: "#fff",
						backgroundColor: void 0,
						borderRadius: 2,
						padding: 4,
						opacity: .9,
						borderWidth: 1,
						borderColor: "#fff",
						dropShadow: {
							enabled: !1,
							top: 1,
							left: 1,
							blur: 1,
							color: "#000",
							opacity: .8
						}
					},
					dropShadow: {
						enabled: !1,
						top: 1,
						left: 1,
						blur: 1,
						color: "#000",
						opacity: .8
					}
				},
				fill: {
					type: "solid",
					colors: void 0,
					opacity: .85,
					gradient: {
						shade: "dark",
						type: "horizontal",
						shadeIntensity: .5,
						gradientToColors: void 0,
						inverseColors: !0,
						opacityFrom: 1,
						opacityTo: 1,
						stops: [
							0,
							50,
							100
						],
						colorStops: []
					},
					image: {
						src: [],
						width: void 0,
						height: void 0
					},
					pattern: {
						style: "squares",
						width: 6,
						height: 6,
						strokeWidth: 2
					}
				},
				forecastDataPoints: {
					count: 0,
					fillOpacity: .5,
					strokeWidth: void 0,
					dashArray: 4
				},
				grid: {
					show: !0,
					borderColor: "#e0e0e0",
					strokeDashArray: 0,
					position: "back",
					xaxis: { lines: { show: !1 } },
					yaxis: { lines: { show: !0 } },
					row: {
						colors: void 0,
						opacity: .5
					},
					column: {
						colors: void 0,
						opacity: .5
					},
					padding: {
						top: 0,
						right: 10,
						bottom: 0,
						left: 12
					}
				},
				labels: [],
				legend: {
					show: !0,
					showForSingleSeries: !1,
					showForNullSeries: !0,
					showForZeroSeries: !0,
					floating: !1,
					position: "bottom",
					horizontalAlign: "center",
					inverseOrder: !1,
					fontSize: "12px",
					fontFamily: void 0,
					fontWeight: 400,
					width: void 0,
					height: void 0,
					formatter: void 0,
					tooltipHoverFormatter: void 0,
					offsetX: -20,
					offsetY: 4,
					customLegendItems: [],
					clusterGroupedSeries: !0,
					clusterGroupedSeriesOrientation: "vertical",
					labels: {
						colors: void 0,
						useSeriesColors: !1
					},
					markers: {
						size: 7,
						fillColors: void 0,
						strokeWidth: 1,
						shape: void 0,
						offsetX: 0,
						offsetY: 0,
						customHTML: void 0,
						onClick: void 0
					},
					itemMargin: {
						horizontal: 5,
						vertical: 4
					},
					onItemClick: { toggleDataSeries: !0 },
					onItemHover: { highlightDataSeries: !0 }
				},
				markers: {
					discrete: [],
					size: 0,
					colors: void 0,
					strokeColors: "#fff",
					strokeWidth: 2,
					strokeOpacity: .9,
					strokeDashArray: 0,
					fillOpacity: 1,
					shape: "circle",
					offsetX: 0,
					offsetY: 0,
					showNullDataPoints: !0,
					onClick: void 0,
					onDblClick: void 0,
					hover: {
						size: void 0,
						sizeOffset: 3
					}
				},
				noData: {
					text: void 0,
					align: "center",
					verticalAlign: "middle",
					offsetX: 0,
					offsetY: 0,
					style: {
						color: void 0,
						fontSize: "14px",
						fontFamily: void 0
					}
				},
				responsive: [],
				series: void 0,
				states: {
					hover: { filter: { type: "lighten" } },
					active: {
						allowMultipleDataPointsSelection: !1,
						filter: { type: "darken" }
					}
				},
				title: {
					text: void 0,
					align: "left",
					margin: 5,
					offsetX: 0,
					offsetY: 0,
					floating: !1,
					style: {
						fontSize: "14px",
						fontWeight: 900,
						fontFamily: void 0,
						color: void 0
					}
				},
				subtitle: {
					text: void 0,
					align: "left",
					margin: 5,
					offsetX: 0,
					offsetY: 30,
					floating: !1,
					style: {
						fontSize: "12px",
						fontWeight: 400,
						fontFamily: void 0,
						color: void 0
					}
				},
				stroke: {
					show: !0,
					curve: "smooth",
					lineCap: "butt",
					width: 2,
					colors: void 0,
					dashArray: 0,
					fill: {
						type: "solid",
						colors: void 0,
						opacity: .85,
						gradient: {
							shade: "dark",
							type: "horizontal",
							shadeIntensity: .5,
							gradientToColors: void 0,
							inverseColors: !0,
							opacityFrom: 1,
							opacityTo: 1,
							stops: [
								0,
								50,
								100
							],
							colorStops: []
						}
					}
				},
				tooltip: {
					enabled: !0,
					enabledOnSeries: void 0,
					shared: !0,
					hideEmptySeries: !1,
					followCursor: !1,
					intersect: !1,
					inverseOrder: !1,
					custom: void 0,
					fillSeriesColor: !1,
					theme: "light",
					cssClass: "",
					style: {
						fontSize: "12px",
						fontFamily: void 0
					},
					onDatasetHover: { highlightDataSeries: !1 },
					x: {
						show: !0,
						format: "dd MMM",
						formatter: void 0
					},
					y: {
						formatter: void 0,
						title: { formatter: function(io) {
							return io ? io + ": " : "";
						} }
					},
					z: {
						formatter: void 0,
						title: "Size: "
					},
					marker: {
						show: !0,
						fillColors: void 0
					},
					items: { display: "flex" },
					fixed: {
						enabled: !1,
						position: "topRight",
						offsetX: 0,
						offsetY: 0
					}
				},
				xaxis: {
					type: "category",
					categories: [],
					convertedCatToNumeric: !1,
					offsetX: 0,
					offsetY: 0,
					overwriteCategories: void 0,
					labels: {
						show: !0,
						rotate: -45,
						rotateAlways: !1,
						hideOverlappingLabels: !0,
						trim: !1,
						minHeight: void 0,
						maxHeight: 120,
						showDuplicates: !0,
						style: {
							colors: [],
							fontSize: "12px",
							fontWeight: 400,
							fontFamily: void 0,
							cssClass: ""
						},
						offsetX: 0,
						offsetY: 0,
						format: void 0,
						formatter: void 0,
						datetimeUTC: !0,
						datetimeFormatter: {
							year: "yyyy",
							month: "MMM 'yy",
							day: "dd MMM",
							hour: "HH:mm",
							minute: "HH:mm:ss",
							second: "HH:mm:ss"
						}
					},
					group: {
						groups: [],
						style: {
							colors: [],
							fontSize: "12px",
							fontWeight: 400,
							fontFamily: void 0,
							cssClass: ""
						}
					},
					axisBorder: {
						show: !0,
						color: "#e0e0e0",
						width: "100%",
						height: 1,
						offsetX: 0,
						offsetY: 0
					},
					axisTicks: {
						show: !0,
						color: "#e0e0e0",
						height: 6,
						offsetX: 0,
						offsetY: 0
					},
					stepSize: void 0,
					tickAmount: void 0,
					tickPlacement: "on",
					min: void 0,
					max: void 0,
					range: void 0,
					floating: !1,
					decimalsInFloat: void 0,
					position: "bottom",
					title: {
						text: void 0,
						offsetX: 0,
						offsetY: 0,
						style: {
							color: void 0,
							fontSize: "12px",
							fontWeight: 900,
							fontFamily: void 0,
							cssClass: ""
						}
					},
					crosshairs: {
						show: !0,
						width: 1,
						position: "back",
						opacity: .9,
						stroke: {
							color: "#b6b6b6",
							width: 1,
							dashArray: 3
						},
						fill: {
							type: "solid",
							color: "#B1B9C4",
							gradient: {
								colorFrom: "#D8E3F0",
								colorTo: "#BED1E6",
								stops: [0, 100],
								opacityFrom: .4,
								opacityTo: .5
							}
						},
						dropShadow: {
							enabled: !1,
							left: 0,
							top: 0,
							blur: 1,
							opacity: .8
						}
					},
					tooltip: {
						enabled: !0,
						offsetY: 0,
						formatter: void 0,
						style: {
							fontSize: "12px",
							fontFamily: void 0
						}
					}
				},
				yaxis: this.yAxis,
				theme: {
					mode: "",
					palette: "palette1",
					monochrome: {
						enabled: !1,
						color: "#008FFB",
						shadeTo: "light",
						shadeIntensity: .65
					}
				}
			};
		}
	}]), io;
}(), Fi = function() {
	function io(Pc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w, this.graphics = new Mi(this.ctx), this.w.globals.isBarHorizontal && (this.invertAxis = !0), this.helpers = new Ii(this), this.xAxisAnnotations = new Ti(this), this.yAxisAnnotations = new Ei(this), this.pointsAnnotations = new Yi(this), this.w.globals.isBarHorizontal && this.w.config.yaxis[0].reversed && (this.inversedReversedAxis = !0), this.xDivision = this.w.globals.gridWidth / this.w.globals.dataPoints;
	}
	return s(io, [
		{
			key: "drawAxesAnnotations",
			value: function() {
				var io = this.w;
				if (io.globals.axisCharts && io.globals.dataPoints) {
					for (var Pc = this.yAxisAnnotations.drawYAxisAnnotations(), Fc = this.xAxisAnnotations.drawXAxisAnnotations(), Ic = this.pointsAnnotations.drawPointAnnotations(), Lc = io.config.chart.animations.enabled, Rc = [
						Pc,
						Fc,
						Ic
					], zc = [
						Fc.node,
						Pc.node,
						Ic.node
					], Bc = 0; Bc < 3; Bc++) io.globals.dom.elGraphical.add(Rc[Bc]), !Lc || io.globals.resized || io.globals.dataChanged || io.config.chart.type !== "scatter" && io.config.chart.type !== "bubble" && io.globals.dataPoints > 1 && zc[Bc].classList.add("apexcharts-element-hidden"), io.globals.delayedElements.push({
						el: zc[Bc],
						index: 0
					});
					this.helpers.annotationsBackground();
				}
			}
		},
		{
			key: "drawImageAnnos",
			value: function() {
				var io = this;
				this.w.config.annotations.images.map((function(Pc, Fc) {
					io.addImage(Pc, Fc);
				}));
			}
		},
		{
			key: "drawTextAnnos",
			value: function() {
				var io = this;
				this.w.config.annotations.texts.map((function(Pc, Fc) {
					io.addText(Pc, Fc);
				}));
			}
		},
		{
			key: "addXaxisAnnotation",
			value: function(io, Pc, Fc) {
				this.xAxisAnnotations.addXaxisAnnotation(io, Pc, Fc);
			}
		},
		{
			key: "addYaxisAnnotation",
			value: function(io, Pc, Fc) {
				this.yAxisAnnotations.addYaxisAnnotation(io, Pc, Fc);
			}
		},
		{
			key: "addPointAnnotation",
			value: function(io, Pc, Fc) {
				this.pointsAnnotations.addPointAnnotation(io, Pc, Fc);
			}
		},
		{
			key: "addText",
			value: function(io, Pc) {
				var Fc = io.x, Ic = io.y, Lc = io.text, Rc = io.textAnchor, zc = io.foreColor, Bc = io.fontSize, Vc = io.fontFamily, Hc = io.fontWeight, Uc = io.cssClass, Wc = io.backgroundColor, Gc = io.borderWidth, Kc = io.strokeDashArray, qc = io.borderRadius, Jc = io.borderColor, Yc = io.appendTo, Xc = Yc === void 0 ? ".apexcharts-svg" : Yc, Zc = io.paddingLeft, Qc = Zc === void 0 ? 4 : Zc, $c = io.paddingRight, el = $c === void 0 ? 4 : $c, tl = io.paddingBottom, nl = tl === void 0 ? 2 : tl, rl = io.paddingTop, il = rl === void 0 ? 2 : rl, al = this.w, ol = this.graphics.drawText({
					x: Fc,
					y: Ic,
					text: Lc,
					textAnchor: Rc || "start",
					fontSize: Bc || "12px",
					fontWeight: Hc || "regular",
					fontFamily: Vc || al.config.chart.fontFamily,
					foreColor: zc || al.config.chart.foreColor,
					cssClass: Uc
				}), sl = al.globals.dom.baseEl.querySelector(Xc);
				sl && sl.appendChild(ol.node);
				var cl = ol.bbox();
				if (Lc) {
					var ll = this.graphics.drawRect(cl.x - Qc, cl.y - il, cl.width + Qc + el, cl.height + nl + il, qc, Wc || "transparent", 1, Gc, Jc, Kc);
					sl.insertBefore(ll.node, ol.node);
				}
			}
		},
		{
			key: "addImage",
			value: function(io, Pc) {
				var Fc = this.w, Ic = io.path, Lc = io.x, Rc = Lc === void 0 ? 0 : Lc, zc = io.y, Bc = zc === void 0 ? 0 : zc, Vc = io.width, Hc = Vc === void 0 ? 20 : Vc, Uc = io.height, Wc = Uc === void 0 ? 20 : Uc, Gc = io.appendTo, Kc = Gc === void 0 ? ".apexcharts-svg" : Gc, qc = Fc.globals.dom.Paper.image(Ic);
				qc.size(Hc, Wc).move(Rc, Bc);
				var Jc = Fc.globals.dom.baseEl.querySelector(Kc);
				return Jc && Jc.appendChild(qc.node), qc;
			}
		},
		{
			key: "addXaxisAnnotationExternal",
			value: function(io, Pc, Fc) {
				return this.addAnnotationExternal({
					params: io,
					pushToMemory: Pc,
					context: Fc,
					type: "xaxis",
					contextMethod: Fc.addXaxisAnnotation
				}), Fc;
			}
		},
		{
			key: "addYaxisAnnotationExternal",
			value: function(io, Pc, Fc) {
				return this.addAnnotationExternal({
					params: io,
					pushToMemory: Pc,
					context: Fc,
					type: "yaxis",
					contextMethod: Fc.addYaxisAnnotation
				}), Fc;
			}
		},
		{
			key: "addPointAnnotationExternal",
			value: function(io, Pc, Fc) {
				return this.invertAxis === void 0 && (this.invertAxis = Fc.w.globals.isBarHorizontal), this.addAnnotationExternal({
					params: io,
					pushToMemory: Pc,
					context: Fc,
					type: "point",
					contextMethod: Fc.addPointAnnotation
				}), Fc;
			}
		},
		{
			key: "addAnnotationExternal",
			value: function(io) {
				var Pc = io.params, Fc = io.pushToMemory, Ic = io.context, Lc = io.type, Rc = io.contextMethod, zc = Ic, Bc = zc.w, Vc = Bc.globals.dom.baseEl.querySelector(`.apexcharts-${Lc}-annotations`), Hc = Vc.childNodes.length + 1, Uc = new Oi(), Wc = Object.assign({}, Lc === "xaxis" ? Uc.xAxisAnnotation : Lc === "yaxis" ? Uc.yAxisAnnotation : Uc.pointAnnotation), Gc = v.extend(Wc, Pc);
				switch (Lc) {
					case "xaxis":
						this.addXaxisAnnotation(Gc, Vc, Hc);
						break;
					case "yaxis":
						this.addYaxisAnnotation(Gc, Vc, Hc);
						break;
					case "point": this.addPointAnnotation(Gc, Vc, Hc);
				}
				var Kc = Bc.globals.dom.baseEl.querySelector(`.apexcharts-${Lc}-annotations .apexcharts-${Lc}-annotation-label[rel='${Hc}']`), qc = this.helpers.addBackgroundToAnno(Kc, Gc);
				return qc && Vc.insertBefore(qc.node, Kc), Fc && Bc.globals.memory.methodsToExec.push({
					context: zc,
					id: Gc.id ? Gc.id : v.randomId(),
					method: Rc,
					label: "addAnnotation",
					params: Pc
				}), Ic;
			}
		},
		{
			key: "clearAnnotations",
			value: function(io) {
				for (var Pc = io.w, Fc = Pc.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations"), Ic = Pc.globals.memory.methodsToExec.length - 1; Ic >= 0; Ic--) Pc.globals.memory.methodsToExec[Ic].label !== "addText" && Pc.globals.memory.methodsToExec[Ic].label !== "addAnnotation" || Pc.globals.memory.methodsToExec.splice(Ic, 1);
				Fc = v.listToArray(Fc), Array.prototype.forEach.call(Fc, (function(io) {
					for (; io.firstChild;) io.removeChild(io.firstChild);
				}));
			}
		},
		{
			key: "removeAnnotation",
			value: function(io, Pc) {
				var Fc = io.w, Ic = Fc.globals.dom.baseEl.querySelectorAll(`.${Pc}`);
				Ic && (Fc.globals.memory.methodsToExec.map((function(io, Ic) {
					io.id === Pc && Fc.globals.memory.methodsToExec.splice(Ic, 1);
				})), Object.keys(Fc.config.annotations).forEach((function(io) {
					var Ic = Fc.config.annotations[io];
					Array.isArray(Ic) && (Fc.config.annotations[io] = Ic.filter((function(io) {
						return io.id !== Pc;
					})));
				})), Array.prototype.forEach.call(Ic, (function(io) {
					io.parentElement.removeChild(io);
				})));
			}
		}
	]), io;
}(), Di = function(io) {
	var Pc, Fc = io.isTimeline, Ic = io.ctx, Lc = io.seriesIndex, Rc = io.dataPointIndex, zc = io.y1, Bc = io.y2, Vc = io.w, Hc = Vc.globals.seriesRangeStart[Lc][Rc], Uc = Vc.globals.seriesRangeEnd[Lc][Rc], Wc = Vc.globals.labels[Rc], Gc = Vc.config.series[Lc].name ? Vc.config.series[Lc].name : "", Kc = Vc.globals.ttKeyFormatter, qc = Vc.config.tooltip.y.title.formatter, Jc = {
		w: Vc,
		seriesIndex: Lc,
		dataPointIndex: Rc,
		start: Hc,
		end: Uc
	};
	(typeof qc == "function" && (Gc = qc(Gc, Jc)), (Pc = Vc.config.series[Lc].data[Rc]) != null && Pc.x && (Wc = Vc.config.series[Lc].data[Rc].x), Fc) || Vc.config.xaxis.type === "datetime" && (Wc = new Xi(Ic).xLabelFormat(Vc.globals.ttKeyFormatter, Wc, Wc, {
		i: void 0,
		dateFormatter: new zi(Ic).formatDate,
		w: Vc
	})), typeof Kc == "function" && (Wc = Kc(Wc, Jc)), Number.isFinite(zc) && Number.isFinite(Bc) && (Hc = zc, Uc = Bc);
	var Yc = "", Xc = "", Zc = Vc.globals.colors[Lc];
	if (Vc.config.tooltip.x.formatter === void 0) if (Vc.config.xaxis.type === "datetime") {
		var Qc = new zi(Ic);
		Yc = Qc.formatDate(Qc.getDate(Hc), Vc.config.tooltip.x.format), Xc = Qc.formatDate(Qc.getDate(Uc), Vc.config.tooltip.x.format);
	} else Yc = Hc, Xc = Uc;
	else Yc = Vc.config.tooltip.x.formatter(Hc), Xc = Vc.config.tooltip.x.formatter(Uc);
	return {
		start: Hc,
		end: Uc,
		startVal: Yc,
		endVal: Xc,
		ylabel: Wc,
		color: Zc,
		seriesName: Gc
	};
}, _i = function(io) {
	var Pc = io.color, Fc = io.seriesName, Ic = io.ylabel, Lc = io.start, Rc = io.end, zc = io.seriesIndex, Bc = io.dataPointIndex, Vc = io.ctx.tooltip.tooltipLabels.getFormatters(zc);
	Lc = Vc.yLbFormatter(Lc), Rc = Vc.yLbFormatter(Rc);
	var Hc = Vc.yLbFormatter(io.w.globals.series[zc][Bc]), Uc = `<span class="value start-value">
  ${Lc}
  </span> <span class="separator">-</span> <span class="value end-value">
  ${Rc}
  </span>`;
	return "<div class=\"apexcharts-tooltip-rangebar\"><div> <span class=\"series-name\" style=\"color: " + Pc + "\">" + (Fc || "") + "</span></div><div> <span class=\"category\">" + Ic + ": </span> " + (io.w.globals.comboCharts ? io.w.config.series[zc].type === "rangeArea" || io.w.config.series[zc].type === "rangeBar" ? Uc : `<span>${Hc}</span>` : Uc) + " </div></div>";
}, Ni = function() {
	function io(Pc) {
		i(this, io), this.opts = Pc;
	}
	return s(io, [
		{
			key: "hideYAxis",
			value: function() {
				this.opts.yaxis[0].show = !1, this.opts.yaxis[0].title.text = "", this.opts.yaxis[0].axisBorder.show = !1, this.opts.yaxis[0].axisTicks.show = !1, this.opts.yaxis[0].floating = !0;
			}
		},
		{
			key: "line",
			value: function() {
				return {
					dataLabels: { enabled: !1 },
					stroke: {
						width: 5,
						curve: "straight"
					},
					markers: {
						size: 0,
						hover: { sizeOffset: 6 }
					},
					xaxis: { crosshairs: { width: 1 } }
				};
			}
		},
		{
			key: "sparkline",
			value: function(io) {
				return this.hideYAxis(), v.extend(io, {
					grid: {
						show: !1,
						padding: {
							left: 0,
							right: 0,
							top: 0,
							bottom: 0
						}
					},
					legend: { show: !1 },
					xaxis: {
						labels: { show: !1 },
						tooltip: { enabled: !1 },
						axisBorder: { show: !1 },
						axisTicks: { show: !1 }
					},
					chart: {
						toolbar: { show: !1 },
						zoom: { enabled: !1 }
					},
					dataLabels: { enabled: !1 }
				});
			}
		},
		{
			key: "slope",
			value: function() {
				return this.hideYAxis(), {
					chart: {
						toolbar: { show: !1 },
						zoom: { enabled: !1 }
					},
					dataLabels: {
						enabled: !0,
						formatter: function(io, Pc) {
							var Fc = Pc.w.config.series[Pc.seriesIndex].name;
							return io === null ? "" : Fc + ": " + io;
						},
						background: { enabled: !1 },
						offsetX: -5
					},
					grid: {
						xaxis: { lines: { show: !0 } },
						yaxis: { lines: { show: !1 } }
					},
					xaxis: {
						position: "top",
						labels: { style: {
							fontSize: 14,
							fontWeight: 900
						} },
						tooltip: { enabled: !1 },
						crosshairs: { show: !1 }
					},
					markers: {
						size: 8,
						hover: { sizeOffset: 1 }
					},
					legend: { show: !1 },
					tooltip: {
						shared: !1,
						intersect: !0,
						followCursor: !0
					},
					stroke: {
						width: 5,
						curve: "straight"
					}
				};
			}
		},
		{
			key: "bar",
			value: function() {
				return {
					chart: { stacked: !1 },
					plotOptions: { bar: { dataLabels: { position: "center" } } },
					dataLabels: {
						style: { colors: ["#fff"] },
						background: { enabled: !1 }
					},
					stroke: {
						width: 0,
						lineCap: "square"
					},
					fill: { opacity: .85 },
					legend: { markers: { shape: "square" } },
					tooltip: {
						shared: !1,
						intersect: !0
					},
					xaxis: {
						tooltip: { enabled: !1 },
						tickPlacement: "between",
						crosshairs: {
							width: "barWidth",
							position: "back",
							fill: { type: "gradient" },
							dropShadow: { enabled: !1 },
							stroke: { width: 0 }
						}
					}
				};
			}
		},
		{
			key: "funnel",
			value: function() {
				return this.hideYAxis(), u(u({}, this.bar()), {}, {
					chart: { animations: {
						speed: 800,
						animateGradually: { enabled: !1 }
					} },
					plotOptions: { bar: {
						horizontal: !0,
						borderRadiusApplication: "around",
						borderRadius: 0,
						dataLabels: { position: "center" }
					} },
					grid: {
						show: !1,
						padding: {
							left: 0,
							right: 0
						}
					},
					xaxis: {
						labels: { show: !1 },
						tooltip: { enabled: !1 },
						axisBorder: { show: !1 },
						axisTicks: { show: !1 }
					}
				});
			}
		},
		{
			key: "candlestick",
			value: function() {
				var io = this;
				return {
					stroke: { width: 1 },
					fill: { opacity: 1 },
					dataLabels: { enabled: !1 },
					tooltip: {
						shared: !0,
						custom: function(Pc) {
							var Fc = Pc.seriesIndex, Ic = Pc.dataPointIndex, Lc = Pc.w;
							return io._getBoxTooltip(Lc, Fc, Ic, [
								"Open",
								"High",
								"",
								"Low",
								"Close"
							], "candlestick");
						}
					},
					states: { active: { filter: { type: "none" } } },
					xaxis: { crosshairs: { width: 1 } }
				};
			}
		},
		{
			key: "boxPlot",
			value: function() {
				var io = this;
				return {
					chart: { animations: { dynamicAnimation: { enabled: !1 } } },
					stroke: {
						width: 1,
						colors: ["#24292e"]
					},
					dataLabels: { enabled: !1 },
					tooltip: {
						shared: !0,
						custom: function(Pc) {
							var Fc = Pc.seriesIndex, Ic = Pc.dataPointIndex, Lc = Pc.w;
							return io._getBoxTooltip(Lc, Fc, Ic, [
								"Minimum",
								"Q1",
								"Median",
								"Q3",
								"Maximum"
							], "boxPlot");
						}
					},
					markers: {
						size: 7,
						strokeWidth: 1,
						strokeColors: "#111"
					},
					xaxis: { crosshairs: { width: 1 } }
				};
			}
		},
		{
			key: "rangeBar",
			value: function() {
				return {
					chart: { animations: { animateGradually: !1 } },
					stroke: {
						width: 0,
						lineCap: "square"
					},
					plotOptions: { bar: {
						borderRadius: 0,
						dataLabels: { position: "center" }
					} },
					dataLabels: {
						enabled: !1,
						formatter: function(io, Pc) {
							Pc.ctx;
							var Fc = Pc.seriesIndex, Ic = Pc.dataPointIndex, Lc = Pc.w, Rc = function() {
								var io = Lc.globals.seriesRangeStart[Fc][Ic];
								return Lc.globals.seriesRangeEnd[Fc][Ic] - io;
							};
							return Lc.globals.comboCharts ? Lc.config.series[Fc].type === "rangeBar" || Lc.config.series[Fc].type === "rangeArea" ? Rc() : io : Rc();
						},
						background: { enabled: !1 },
						style: { colors: ["#fff"] }
					},
					markers: { size: 10 },
					tooltip: {
						shared: !1,
						followCursor: !0,
						custom: function(io) {
							return io.w.config.plotOptions && io.w.config.plotOptions.bar && io.w.config.plotOptions.bar.horizontal ? function(io) {
								var Pc = Di(u(u({}, io), {}, { isTimeline: !0 })), Fc = Pc.color, Ic = Pc.seriesName, Lc = Pc.ylabel, Rc = Pc.startVal, zc = Pc.endVal;
								return _i(u(u({}, io), {}, {
									color: Fc,
									seriesName: Ic,
									ylabel: Lc,
									start: Rc,
									end: zc
								}));
							}(io) : function(io) {
								var Pc = Di(io), Fc = Pc.color, Ic = Pc.seriesName, Lc = Pc.ylabel, Rc = Pc.start, zc = Pc.end;
								return _i(u(u({}, io), {}, {
									color: Fc,
									seriesName: Ic,
									ylabel: Lc,
									start: Rc,
									end: zc
								}));
							}(io);
						}
					},
					xaxis: {
						tickPlacement: "between",
						tooltip: { enabled: !1 },
						crosshairs: { stroke: { width: 0 } }
					}
				};
			}
		},
		{
			key: "dumbbell",
			value: function(io) {
				var Pc, Fc;
				return (Pc = io.plotOptions.bar) != null && Pc.barHeight || (io.plotOptions.bar.barHeight = 2), (Fc = io.plotOptions.bar) != null && Fc.columnWidth || (io.plotOptions.bar.columnWidth = 2), io;
			}
		},
		{
			key: "area",
			value: function() {
				return {
					stroke: {
						width: 4,
						fill: {
							type: "solid",
							gradient: {
								inverseColors: !1,
								shade: "light",
								type: "vertical",
								opacityFrom: .65,
								opacityTo: .5,
								stops: [
									0,
									100,
									100
								]
							}
						}
					},
					fill: {
						type: "gradient",
						gradient: {
							inverseColors: !1,
							shade: "light",
							type: "vertical",
							opacityFrom: .65,
							opacityTo: .5,
							stops: [
								0,
								100,
								100
							]
						}
					},
					markers: {
						size: 0,
						hover: { sizeOffset: 6 }
					},
					tooltip: { followCursor: !1 }
				};
			}
		},
		{
			key: "rangeArea",
			value: function() {
				return {
					stroke: {
						curve: "straight",
						width: 0
					},
					fill: {
						type: "solid",
						opacity: .6
					},
					markers: { size: 0 },
					states: {
						hover: { filter: { type: "none" } },
						active: { filter: { type: "none" } }
					},
					tooltip: {
						intersect: !1,
						shared: !0,
						followCursor: !0,
						custom: function(io) {
							return function(io) {
								var Pc = Di(io), Fc = Pc.color, Ic = Pc.seriesName, Lc = Pc.ylabel, Rc = Pc.start, zc = Pc.end;
								return _i(u(u({}, io), {}, {
									color: Fc,
									seriesName: Ic,
									ylabel: Lc,
									start: Rc,
									end: zc
								}));
							}(io);
						}
					}
				};
			}
		},
		{
			key: "brush",
			value: function(io) {
				return v.extend(io, {
					chart: {
						toolbar: {
							autoSelected: "selection",
							show: !1
						},
						zoom: { enabled: !1 }
					},
					dataLabels: { enabled: !1 },
					stroke: { width: 1 },
					tooltip: { enabled: !1 },
					xaxis: { tooltip: { enabled: !1 } }
				});
			}
		},
		{
			key: "stacked100",
			value: function(io) {
				io.dataLabels = io.dataLabels || {}, io.dataLabels.formatter = io.dataLabels.formatter || void 0;
				var Pc = io.dataLabels.formatter;
				return io.yaxis.forEach((function(Pc, Fc) {
					io.yaxis[Fc].min = 0, io.yaxis[Fc].max = 100;
				})), io.chart.type === "bar" && (io.dataLabels.formatter = Pc || function(io) {
					return typeof io == "number" && io ? io.toFixed(0) + "%" : io;
				}), io;
			}
		},
		{
			key: "stackedBars",
			value: function() {
				var io = this.bar();
				return u(u({}, io), {}, { plotOptions: u(u({}, io.plotOptions), {}, { bar: u(u({}, io.plotOptions.bar), {}, {
					borderRadiusApplication: "end",
					borderRadiusWhenStacked: "last"
				}) }) });
			}
		},
		{
			key: "convertCatToNumeric",
			value: function(io) {
				return io.xaxis.convertedCatToNumeric = !0, io;
			}
		},
		{
			key: "convertCatToNumericXaxis",
			value: function(io, Pc, Fc) {
				io.xaxis.type = "numeric", io.xaxis.labels = io.xaxis.labels || {}, io.xaxis.labels.formatter = io.xaxis.labels.formatter || function(io) {
					return v.isNumber(io) ? Math.floor(io) : io;
				};
				var Ic = io.xaxis.labels.formatter, Lc = io.xaxis.categories && io.xaxis.categories.length ? io.xaxis.categories : io.labels;
				return Fc && Fc.length && (Lc = Fc.map((function(io) {
					return Array.isArray(io) ? io : String(io);
				}))), Lc && Lc.length && (io.xaxis.labels.formatter = function(io) {
					return v.isNumber(io) ? Ic(Lc[Math.floor(io) - 1]) : Ic(io);
				}), io.xaxis.categories = [], io.labels = [], io.xaxis.tickAmount = io.xaxis.tickAmount || "dataPoints", io;
			}
		},
		{
			key: "bubble",
			value: function() {
				return {
					dataLabels: { style: { colors: ["#fff"] } },
					tooltip: {
						shared: !1,
						intersect: !0
					},
					xaxis: { crosshairs: { width: 0 } },
					fill: {
						type: "solid",
						gradient: {
							shade: "light",
							inverse: !0,
							shadeIntensity: .55,
							opacityFrom: .4,
							opacityTo: .8
						}
					}
				};
			}
		},
		{
			key: "scatter",
			value: function() {
				return {
					dataLabels: { enabled: !1 },
					tooltip: {
						shared: !1,
						intersect: !0
					},
					markers: {
						size: 6,
						strokeWidth: 1,
						hover: { sizeOffset: 2 }
					}
				};
			}
		},
		{
			key: "heatmap",
			value: function() {
				return {
					chart: { stacked: !1 },
					fill: { opacity: 1 },
					dataLabels: { style: { colors: ["#fff"] } },
					stroke: { colors: ["#fff"] },
					tooltip: {
						followCursor: !0,
						marker: { show: !1 },
						x: { show: !1 }
					},
					legend: {
						position: "top",
						markers: { shape: "square" }
					},
					grid: { padding: { right: 20 } }
				};
			}
		},
		{
			key: "treemap",
			value: function() {
				return {
					chart: { zoom: { enabled: !1 } },
					dataLabels: { style: {
						fontSize: 14,
						fontWeight: 600,
						colors: ["#fff"]
					} },
					stroke: {
						show: !0,
						width: 2,
						colors: ["#fff"]
					},
					legend: { show: !1 },
					fill: {
						opacity: 1,
						gradient: { stops: [0, 100] }
					},
					tooltip: {
						followCursor: !0,
						x: { show: !1 }
					},
					grid: { padding: {
						left: 0,
						right: 0
					} },
					xaxis: {
						crosshairs: { show: !1 },
						tooltip: { enabled: !1 }
					}
				};
			}
		},
		{
			key: "pie",
			value: function() {
				return {
					chart: { toolbar: { show: !1 } },
					plotOptions: { pie: { donut: { labels: { show: !1 } } } },
					dataLabels: {
						formatter: function(io) {
							return io.toFixed(1) + "%";
						},
						style: { colors: ["#fff"] },
						background: { enabled: !1 },
						dropShadow: { enabled: !0 }
					},
					stroke: { colors: ["#fff"] },
					fill: {
						opacity: 1,
						gradient: {
							shade: "light",
							stops: [0, 100]
						}
					},
					tooltip: {
						theme: "dark",
						fillSeriesColor: !0
					},
					legend: { position: "right" },
					grid: { padding: {
						left: 0,
						right: 0,
						top: 0,
						bottom: 0
					} }
				};
			}
		},
		{
			key: "donut",
			value: function() {
				return {
					chart: { toolbar: { show: !1 } },
					dataLabels: {
						formatter: function(io) {
							return io.toFixed(1) + "%";
						},
						style: { colors: ["#fff"] },
						background: { enabled: !1 },
						dropShadow: { enabled: !0 }
					},
					stroke: { colors: ["#fff"] },
					fill: {
						opacity: 1,
						gradient: {
							shade: "light",
							shadeIntensity: .35,
							stops: [80, 100],
							opacityFrom: 1,
							opacityTo: 1
						}
					},
					tooltip: {
						theme: "dark",
						fillSeriesColor: !0
					},
					legend: { position: "right" },
					grid: { padding: {
						left: 0,
						right: 0,
						top: 0,
						bottom: 0
					} }
				};
			}
		},
		{
			key: "polarArea",
			value: function() {
				return {
					chart: { toolbar: { show: !1 } },
					dataLabels: {
						formatter: function(io) {
							return io.toFixed(1) + "%";
						},
						enabled: !1
					},
					stroke: {
						show: !0,
						width: 2
					},
					fill: { opacity: .7 },
					tooltip: {
						theme: "dark",
						fillSeriesColor: !0
					},
					legend: { position: "right" },
					grid: { padding: {
						left: 0,
						right: 0,
						top: 0,
						bottom: 0
					} }
				};
			}
		},
		{
			key: "radar",
			value: function() {
				return this.opts.yaxis[0].labels.offsetY = this.opts.yaxis[0].labels.offsetY ? this.opts.yaxis[0].labels.offsetY : 6, {
					dataLabels: {
						enabled: !1,
						style: { fontSize: "11px" }
					},
					stroke: { width: 2 },
					markers: {
						size: 5,
						strokeWidth: 1,
						strokeOpacity: 1
					},
					fill: { opacity: .2 },
					tooltip: {
						shared: !1,
						intersect: !0,
						followCursor: !0
					},
					grid: {
						show: !1,
						padding: {
							left: 0,
							right: 0,
							top: 0,
							bottom: 0
						}
					},
					xaxis: {
						labels: {
							formatter: function(io) {
								return io;
							},
							style: {
								colors: ["#a8a8a8"],
								fontSize: "11px"
							}
						},
						tooltip: { enabled: !1 },
						crosshairs: { show: !1 }
					}
				};
			}
		},
		{
			key: "radialBar",
			value: function() {
				return {
					chart: {
						animations: { dynamicAnimation: {
							enabled: !0,
							speed: 800
						} },
						toolbar: { show: !1 }
					},
					fill: { gradient: {
						shade: "dark",
						shadeIntensity: .4,
						inverseColors: !1,
						type: "diagonal2",
						opacityFrom: 1,
						opacityTo: 1,
						stops: [
							70,
							98,
							100
						]
					} },
					legend: {
						show: !1,
						position: "right"
					},
					tooltip: {
						enabled: !1,
						fillSeriesColor: !0
					},
					grid: { padding: {
						left: 0,
						right: 0,
						top: 0,
						bottom: 0
					} }
				};
			}
		},
		{
			key: "_getBoxTooltip",
			value: function(io, Pc, Fc, Ic, Lc) {
				var Rc = io.globals.seriesCandleO[Pc][Fc], zc = io.globals.seriesCandleH[Pc][Fc], Bc = io.globals.seriesCandleM[Pc][Fc], Vc = io.globals.seriesCandleL[Pc][Fc], Hc = io.globals.seriesCandleC[Pc][Fc];
				return io.config.series[Pc].type && io.config.series[Pc].type !== Lc ? `<div class="apexcharts-custom-tooltip">
          ${io.config.series[Pc].name ? io.config.series[Pc].name : "series-" + (Pc + 1)}: <strong>${io.globals.series[Pc][Fc]}</strong>
        </div>` : `<div class="apexcharts-tooltip-box apexcharts-tooltip-${io.config.chart.type}"><div>${Ic[0]}: <span class="value">` + Rc + `</span></div><div>${Ic[1]}: <span class="value">` + zc + "</span></div>" + (Bc ? `<div>${Ic[2]}: <span class="value">` + Bc + "</span></div>" : "") + `<div>${Ic[3]}: <span class="value">` + Vc + `</span></div><div>${Ic[4]}: <span class="value">` + Hc + "</span></div></div>";
			}
		}
	]), io;
}(), Wi = function() {
	function io(Pc) {
		i(this, io), this.opts = Pc;
	}
	return s(io, [
		{
			key: "init",
			value: function(io) {
				var Pc = io.responsiveOverride, Fc = this.opts, Ic = new Oi(), Lc = new Ni(Fc);
				this.chartType = Fc.chart.type, Fc = this.extendYAxis(Fc), Fc = this.extendAnnotations(Fc);
				var Rc = Ic.init(), zc = {};
				if (Fc && b(Fc) === "object") {
					var Bc, Vc, Hc, Uc, Wc, Gc, Kc, qc, Jc, Yc, Xc = {};
					Xc = [
						"line",
						"area",
						"bar",
						"candlestick",
						"boxPlot",
						"rangeBar",
						"rangeArea",
						"bubble",
						"scatter",
						"heatmap",
						"treemap",
						"pie",
						"polarArea",
						"donut",
						"radar",
						"radialBar"
					].indexOf(Fc.chart.type) === -1 ? Lc.line() : Lc[Fc.chart.type](), (Bc = Fc.plotOptions) != null && (Vc = Bc.bar) != null && Vc.isFunnel && (Xc = Lc.funnel()), Fc.chart.stacked && Fc.chart.type === "bar" && (Xc = Lc.stackedBars()), (Hc = Fc.chart.brush) != null && Hc.enabled && (Xc = Lc.brush(Xc)), (Uc = Fc.plotOptions) != null && (Wc = Uc.line) != null && Wc.isSlopeChart && (Xc = Lc.slope()), Fc.chart.stacked && Fc.chart.stackType === "100%" && (Fc = Lc.stacked100(Fc)), (Gc = Fc.plotOptions) != null && (Kc = Gc.bar) != null && Kc.isDumbbell && (Fc = Lc.dumbbell(Fc)), this.checkForDarkTheme(window.Apex), this.checkForDarkTheme(Fc), Fc.xaxis = Fc.xaxis || window.Apex.xaxis || {}, Pc || (Fc.xaxis.convertedCatToNumeric = !1), ((qc = (Fc = this.checkForCatToNumericXAxis(this.chartType, Xc, Fc)).chart.sparkline) != null && qc.enabled || (Jc = window.Apex.chart) != null && (Yc = Jc.sparkline) != null && Yc.enabled) && (Xc = Lc.sparkline(Xc)), zc = v.extend(Rc, Xc);
				}
				var Qc = v.extend(zc, window.Apex);
				return Rc = v.extend(Qc, Fc), Rc = this.handleUserInputErrors(Rc);
			}
		},
		{
			key: "checkForCatToNumericXAxis",
			value: function(io, Pc, Fc) {
				var Ic, Lc, Rc = new Ni(Fc), zc = (io === "bar" || io === "boxPlot") && ((Ic = Fc.plotOptions) == null || (Lc = Ic.bar) == null ? void 0 : Lc.horizontal), Bc = io === "pie" || io === "polarArea" || io === "donut" || io === "radar" || io === "radialBar" || io === "heatmap", Vc = Fc.xaxis.type !== "datetime" && Fc.xaxis.type !== "numeric", Hc = Fc.xaxis.tickPlacement ? Fc.xaxis.tickPlacement : Pc.xaxis && Pc.xaxis.tickPlacement;
				return zc || Bc || !Vc || Hc === "between" || (Fc = Rc.convertCatToNumeric(Fc)), Fc;
			}
		},
		{
			key: "extendYAxis",
			value: function(io, Pc) {
				var Fc = new Oi();
				(io.yaxis === void 0 || !io.yaxis || Array.isArray(io.yaxis) && io.yaxis.length === 0) && (io.yaxis = {}), io.yaxis.constructor !== Array && window.Apex.yaxis && window.Apex.yaxis.constructor !== Array && (io.yaxis = v.extend(io.yaxis, window.Apex.yaxis)), io.yaxis.constructor === Array ? io.yaxis = v.extendArray(io.yaxis, Fc.yAxis) : io.yaxis = [v.extend(Fc.yAxis, io.yaxis)];
				var Ic = !1;
				io.yaxis.forEach((function(io) {
					io.logarithmic && (Ic = !0);
				}));
				var Lc = io.series;
				return Pc && !Lc && (Lc = Pc.config.series), Ic && Lc.length !== io.yaxis.length && Lc.length && (io.yaxis = Lc.map((function(Pc, Ic) {
					if (Pc.name || (Lc[Ic].name = `series-${Ic + 1}`), io.yaxis[Ic]) return io.yaxis[Ic].seriesName = Lc[Ic].name, io.yaxis[Ic];
					var Rc = v.extend(Fc.yAxis, io.yaxis[0]);
					return Rc.show = !1, Rc;
				}))), Ic && Lc.length > 1 && Lc.length !== io.yaxis.length && console.warn("A multi-series logarithmic chart should have equal number of series and y-axes"), io;
			}
		},
		{
			key: "extendAnnotations",
			value: function(io) {
				return io.annotations === void 0 && (io.annotations = {}, io.annotations.yaxis = [], io.annotations.xaxis = [], io.annotations.points = []), io = this.extendYAxisAnnotations(io), io = this.extendXAxisAnnotations(io), io = this.extendPointAnnotations(io);
			}
		},
		{
			key: "extendYAxisAnnotations",
			value: function(io) {
				var Pc = new Oi();
				return io.annotations.yaxis = v.extendArray(io.annotations.yaxis === void 0 ? [] : io.annotations.yaxis, Pc.yAxisAnnotation), io;
			}
		},
		{
			key: "extendXAxisAnnotations",
			value: function(io) {
				var Pc = new Oi();
				return io.annotations.xaxis = v.extendArray(io.annotations.xaxis === void 0 ? [] : io.annotations.xaxis, Pc.xAxisAnnotation), io;
			}
		},
		{
			key: "extendPointAnnotations",
			value: function(io) {
				var Pc = new Oi();
				return io.annotations.points = v.extendArray(io.annotations.points === void 0 ? [] : io.annotations.points, Pc.pointAnnotation), io;
			}
		},
		{
			key: "checkForDarkTheme",
			value: function(io) {
				io.theme && io.theme.mode === "dark" && (io.tooltip || (io.tooltip = {}), io.tooltip.theme !== "light" && (io.tooltip.theme = "dark"), io.chart.foreColor || (io.chart.foreColor = "#f6f7f8"), io.theme.palette || (io.theme.palette = "palette4"));
			}
		},
		{
			key: "handleUserInputErrors",
			value: function(io) {
				var Pc = io;
				if (Pc.tooltip.shared && Pc.tooltip.intersect) throw Error("tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false.");
				if (Pc.chart.type === "bar" && Pc.plotOptions.bar.horizontal) {
					if (Pc.yaxis.length > 1) throw Error("Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false");
					Pc.yaxis[0].reversed && (Pc.yaxis[0].opposite = !0), Pc.xaxis.tooltip.enabled = !1, Pc.yaxis[0].tooltip.enabled = !1, Pc.chart.zoom.enabled = !1;
				}
				return Pc.chart.type !== "bar" && Pc.chart.type !== "rangeBar" || Pc.tooltip.shared && Pc.xaxis.crosshairs.width === "barWidth" && Pc.series.length > 1 && (Pc.xaxis.crosshairs.width = "tickWidth"), Pc.chart.type !== "candlestick" && Pc.chart.type !== "boxPlot" || Pc.yaxis[0].reversed && (console.warn(`Reversed y-axis in ${Pc.chart.type} chart is not supported.`), Pc.yaxis[0].reversed = !1), Pc;
			}
		}
	]), io;
}(), Bi = function() {
	function io() {
		i(this, io);
	}
	return s(io, [
		{
			key: "initGlobalVars",
			value: function(io) {
				io.series = [], io.seriesCandleO = [], io.seriesCandleH = [], io.seriesCandleM = [], io.seriesCandleL = [], io.seriesCandleC = [], io.seriesRangeStart = [], io.seriesRangeEnd = [], io.seriesRange = [], io.seriesPercent = [], io.seriesGoals = [], io.seriesX = [], io.seriesZ = [], io.seriesNames = [], io.seriesTotals = [], io.seriesLog = [], io.seriesColors = [], io.stackedSeriesTotals = [], io.seriesXvalues = [], io.seriesYvalues = [], io.labels = [], io.hasXaxisGroups = !1, io.groups = [], io.barGroups = [], io.lineGroups = [], io.areaGroups = [], io.hasSeriesGroups = !1, io.seriesGroups = [], io.categoryLabels = [], io.timescaleLabels = [], io.noLabelsProvided = !1, io.resizeTimer = null, io.selectionResizeTimer = null, io.lastWheelExecution = 0, io.delayedElements = [], io.pointsArray = [], io.dataLabelsRects = [], io.isXNumeric = !1, io.skipLastTimelinelabel = !1, io.skipFirstTimelinelabel = !1, io.isDataXYZ = !1, io.isMultiLineX = !1, io.isMultipleYAxis = !1, io.maxY = -Number.MAX_VALUE, io.minY = Number.MIN_VALUE, io.minYArr = [], io.maxYArr = [], io.maxX = -Number.MAX_VALUE, io.minX = Number.MAX_VALUE, io.initialMaxX = -Number.MAX_VALUE, io.initialMinX = Number.MAX_VALUE, io.maxDate = 0, io.minDate = Number.MAX_VALUE, io.minZ = Number.MAX_VALUE, io.maxZ = -Number.MAX_VALUE, io.minXDiff = Number.MAX_VALUE, io.yAxisScale = [], io.xAxisScale = null, io.xAxisTicksPositions = [], io.yLabelsCoords = [], io.yTitleCoords = [], io.barPadForNumericAxis = 0, io.padHorizontal = 0, io.xRange = 0, io.yRange = [], io.zRange = 0, io.dataPoints = 0, io.xTickAmount = 0, io.multiAxisTickAmount = 0;
			}
		},
		{
			key: "globalVars",
			value: function(io) {
				return {
					chartID: null,
					cuid: null,
					events: {
						beforeMount: [],
						mounted: [],
						updated: [],
						clicked: [],
						selection: [],
						dataPointSelection: [],
						zoomed: [],
						scrolled: []
					},
					colors: [],
					clientX: null,
					clientY: null,
					fill: { colors: [] },
					stroke: { colors: [] },
					dataLabels: { style: { colors: [] } },
					radarPolygons: { fill: { colors: [] } },
					markers: {
						colors: [],
						size: io.markers.size,
						largestSize: 0
					},
					animationEnded: !1,
					isTouchDevice: "ontouchstart" in window || navigator.msMaxTouchPoints,
					isDirty: !1,
					isExecCalled: !1,
					initialConfig: null,
					initialSeries: [],
					lastXAxis: [],
					lastYAxis: [],
					columnSeries: null,
					labels: [],
					timescaleLabels: [],
					noLabelsProvided: !1,
					allSeriesCollapsed: !1,
					collapsedSeries: [],
					collapsedSeriesIndices: [],
					ancillaryCollapsedSeries: [],
					ancillaryCollapsedSeriesIndices: [],
					risingSeries: [],
					dataFormatXNumeric: !1,
					capturedSeriesIndex: -1,
					capturedDataPointIndex: -1,
					selectedDataPoints: [],
					invalidLogScale: !1,
					ignoreYAxisIndexes: [],
					maxValsInArrayIndex: 0,
					radialSize: 0,
					selection: void 0,
					zoomEnabled: io.chart.toolbar.autoSelected === "zoom" && io.chart.toolbar.tools.zoom && io.chart.zoom.enabled,
					panEnabled: io.chart.toolbar.autoSelected === "pan" && io.chart.toolbar.tools.pan,
					selectionEnabled: io.chart.toolbar.autoSelected === "selection" && io.chart.toolbar.tools.selection,
					yaxis: null,
					mousedown: !1,
					lastClientPosition: {},
					visibleXRange: void 0,
					yValueDecimal: 0,
					total: 0,
					SVGNS: "http://www.w3.org/2000/svg",
					svgWidth: 0,
					svgHeight: 0,
					noData: !1,
					locale: {},
					dom: {},
					memory: { methodsToExec: [] },
					shouldAnimate: !0,
					skipLastTimelinelabel: !1,
					skipFirstTimelinelabel: !1,
					delayedElements: [],
					axisCharts: !0,
					isDataXYZ: !1,
					isSlopeChart: io.plotOptions.line.isSlopeChart,
					resized: !1,
					resizeTimer: null,
					comboCharts: !1,
					dataChanged: !1,
					previousPaths: [],
					allSeriesHasEqualX: !0,
					pointsArray: [],
					dataLabelsRects: [],
					lastDrawnDataLabelsIndexes: [],
					hasNullValues: !1,
					zoomed: !1,
					gridWidth: 0,
					gridHeight: 0,
					rotateXLabels: !1,
					defaultLabels: !1,
					xLabelFormatter: void 0,
					yLabelFormatters: [],
					xaxisTooltipFormatter: void 0,
					ttKeyFormatter: void 0,
					ttVal: void 0,
					ttZFormatter: void 0,
					LINE_HEIGHT_RATIO: 1.618,
					xAxisLabelsHeight: 0,
					xAxisGroupLabelsHeight: 0,
					xAxisLabelsWidth: 0,
					yAxisLabelsWidth: 0,
					scaleX: 1,
					scaleY: 1,
					translateX: 0,
					translateY: 0,
					translateYAxisX: [],
					yAxisWidths: [],
					translateXAxisY: 0,
					translateXAxisX: 0,
					tooltip: null,
					niceScaleAllowedMagMsd: [[
						1,
						1,
						2,
						5,
						5,
						5,
						10,
						10,
						10,
						10,
						10
					], [
						1,
						1,
						2,
						5,
						5,
						5,
						10,
						10,
						10,
						10,
						10
					]],
					niceScaleDefaultTicks: [
						1,
						2,
						4,
						4,
						6,
						6,
						6,
						6,
						6,
						6,
						6,
						6,
						6,
						6,
						6,
						6,
						6,
						6,
						12,
						12,
						12,
						12,
						12,
						12,
						12,
						12,
						12,
						24
					],
					seriesYAxisMap: [],
					seriesYAxisReverseMap: []
				};
			}
		},
		{
			key: "init",
			value: function(io) {
				var Pc = this.globalVars(io);
				return this.initGlobalVars(Pc), Pc.initialConfig = v.extend({}, io), Pc.initialSeries = v.clone(io.series), Pc.lastXAxis = v.clone(Pc.initialConfig.xaxis), Pc.lastYAxis = v.clone(Pc.initialConfig.yaxis), Pc;
			}
		}
	]), io;
}(), Gi = function() {
	function io(Pc) {
		i(this, io), this.opts = Pc;
	}
	return s(io, [{
		key: "init",
		value: function() {
			var io = new Wi(this.opts).init({ responsiveOverride: !1 });
			return {
				config: io,
				globals: new Bi().init(io)
			};
		}
	}]), io;
}(), ji = function() {
	function io(Pc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w, this.opts = null, this.seriesIndex = 0, this.patternIDs = [];
	}
	return s(io, [
		{
			key: "clippedImgArea",
			value: function(io) {
				var Pc = this.w, Fc = Pc.config, Ic = parseInt(Pc.globals.gridWidth, 10), Lc = parseInt(Pc.globals.gridHeight, 10), Rc = Ic > Lc ? Ic : Lc, zc = io.image, Bc = 0, Vc = 0;
				io.width === void 0 && io.height === void 0 ? Fc.fill.image.width !== void 0 && Fc.fill.image.height !== void 0 ? (Bc = Fc.fill.image.width + 1, Vc = Fc.fill.image.height) : (Bc = Rc + 1, Vc = Rc) : (Bc = io.width, Vc = io.height);
				var Hc = document.createElementNS(Pc.globals.SVGNS, "pattern");
				Mi.setAttrs(Hc, {
					id: io.patternID,
					patternUnits: io.patternUnits ? io.patternUnits : "userSpaceOnUse",
					width: Bc + "px",
					height: Vc + "px"
				});
				var Uc = document.createElementNS(Pc.globals.SVGNS, "image");
				Hc.appendChild(Uc), Uc.setAttributeNS(window.SVG.xlink, "href", zc), Mi.setAttrs(Uc, {
					x: 0,
					y: 0,
					preserveAspectRatio: "none",
					width: Bc + "px",
					height: Vc + "px"
				}), Uc.style.opacity = io.opacity, Pc.globals.dom.elDefs.node.appendChild(Hc);
			}
		},
		{
			key: "getSeriesIndex",
			value: function(io) {
				var Pc = this.w, Fc = Pc.config.chart.type;
				return (Fc === "bar" || Fc === "rangeBar") && Pc.config.plotOptions.bar.distributed || Fc === "heatmap" || Fc === "treemap" ? this.seriesIndex = io.seriesNumber : this.seriesIndex = io.seriesNumber % Pc.globals.series.length, this.seriesIndex;
			}
		},
		{
			key: "computeColorStops",
			value: function(io, Pc) {
				var Fc, Ic = this.w, Lc = null, Rc = null, Bc = r(io);
				try {
					for (Bc.s(); !(Fc = Bc.n()).done;) {
						var Vc = Fc.value;
						Vc >= Pc.threshold ? (Lc === null || Vc > Lc) && (Lc = Vc) : (Rc === null || Vc < Rc) && (Rc = Vc);
					}
				} catch (io) {
					Bc.e(io);
				} finally {
					Bc.f();
				}
				Lc === null && (Lc = Pc.threshold), Rc === null && (Rc = Pc.threshold);
				var Hc = Lc - Pc.threshold + (Pc.threshold - Rc);
				Hc === 0 && (Hc = 1);
				var Uc = 100 - (Pc.threshold - Rc) / Hc * 100;
				return [{
					offset: Uc = Math.max(0, Math.min(Uc, 100)),
					color: Pc.colorAboveThreshold,
					opacity: Ic.config.fill.opacity
				}, {
					offset: 0,
					color: Pc.colorBelowThreshold,
					opacity: Ic.config.fill.opacity
				}];
			}
		},
		{
			key: "fillPath",
			value: function(io) {
				var Pc, Fc, Ic, Lc = this.w;
				this.opts = io;
				var Rc, zc, Bc, Vc = this.w.config;
				this.seriesIndex = this.getSeriesIndex(io);
				var Hc = Vc.plotOptions.line.colors.colorAboveThreshold && Vc.plotOptions.line.colors.colorBelowThreshold, Uc = this.getFillColors()[this.seriesIndex];
				Lc.globals.seriesColors[this.seriesIndex] !== void 0 && (Uc = Lc.globals.seriesColors[this.seriesIndex]), typeof Uc == "function" && (Uc = Uc({
					seriesIndex: this.seriesIndex,
					dataPointIndex: io.dataPointIndex,
					value: io.value,
					w: Lc
				}));
				var Wc, Gc, Kc, qc = io.fillType ? io.fillType : this.getFillType(this.seriesIndex), Jc = Array.isArray(Vc.fill.opacity) ? Vc.fill.opacity[this.seriesIndex] : Vc.fill.opacity, Xc = qc === "gradient" || Hc;
				(io.color && (Uc = io.color), (Pc = Lc.config.series[this.seriesIndex]) != null && (Fc = Pc.data) != null && (Ic = Fc[io.dataPointIndex]) != null && Ic.fillColor) && (Uc = (Wc = Lc.config.series[this.seriesIndex]) == null || (Gc = Wc.data) == null || (Kc = Gc[io.dataPointIndex]) == null ? void 0 : Kc.fillColor), Uc || (Uc = "#fff", console.warn("undefined color - ApexCharts"));
				var Zc = Uc;
				if (Uc.indexOf("rgb") === -1 ? Uc.indexOf("#") === -1 ? Zc = Uc : Uc.length < 9 && (Zc = v.hexToRgba(Uc, Jc)) : Uc.indexOf("rgba") > -1 ? Jc = v.getOpacityFromRGBA(Uc) : Zc = v.hexToRgba(v.rgb2hex(Uc), Jc), io.opacity && (Jc = io.opacity), qc === "pattern" && (zc = this.handlePatternFill({
					fillConfig: io.fillConfig,
					patternFill: zc,
					fillColor: Uc,
					fillOpacity: Jc,
					defaultColor: Zc
				})), Xc) {
					var Qc = f(Vc.fill.gradient.colorStops) || [], el = Vc.fill.gradient.type;
					Hc && (Qc[this.seriesIndex] = this.computeColorStops(Lc.globals.series[this.seriesIndex], Vc.plotOptions.line.colors), el = "vertical"), Bc = this.handleGradientFill({
						type: el,
						fillConfig: io.fillConfig,
						fillColor: Uc,
						fillOpacity: Jc,
						colorStops: Qc,
						i: this.seriesIndex
					});
				}
				if (qc === "image") {
					var tl = Vc.fill.image.src, nl = io.patternID ? io.patternID : "", rl = `pattern${Lc.globals.cuid}${io.seriesNumber + 1}${nl}`;
					this.patternIDs.indexOf(rl) === -1 && (this.clippedImgArea({
						opacity: Jc,
						image: Array.isArray(tl) ? io.seriesNumber < tl.length ? tl[io.seriesNumber] : tl[0] : tl,
						width: io.width ? io.width : void 0,
						height: io.height ? io.height : void 0,
						patternUnits: io.patternUnits,
						patternID: rl
					}), this.patternIDs.push(rl)), Rc = `url(#${rl})`;
				} else Rc = Xc ? Bc : qc === "pattern" ? zc : Zc;
				return io.solid && (Rc = Zc), Rc;
			}
		},
		{
			key: "getFillType",
			value: function(io) {
				var Pc = this.w;
				return Array.isArray(Pc.config.fill.type) ? Pc.config.fill.type[io] : Pc.config.fill.type;
			}
		},
		{
			key: "getFillColors",
			value: function() {
				var io = this.w, Pc = io.config, Fc = this.opts, Ic = [];
				return io.globals.comboCharts ? io.config.series[this.seriesIndex].type === "line" ? Array.isArray(io.globals.stroke.colors) ? Ic = io.globals.stroke.colors : Ic.push(io.globals.stroke.colors) : Array.isArray(io.globals.fill.colors) ? Ic = io.globals.fill.colors : Ic.push(io.globals.fill.colors) : Pc.chart.type === "line" ? Array.isArray(io.globals.stroke.colors) ? Ic = io.globals.stroke.colors : Ic.push(io.globals.stroke.colors) : Array.isArray(io.globals.fill.colors) ? Ic = io.globals.fill.colors : Ic.push(io.globals.fill.colors), Fc.fillColors !== void 0 && (Ic = [], Array.isArray(Fc.fillColors) ? Ic = Fc.fillColors.slice() : Ic.push(Fc.fillColors)), Ic;
			}
		},
		{
			key: "handlePatternFill",
			value: function(io) {
				var Pc = io.fillConfig, Fc = io.patternFill, Ic = io.fillColor, Lc = io.fillOpacity, Rc = io.defaultColor, zc = this.w.config.fill;
				Pc && (zc = Pc);
				var Bc = this.opts, Vc = new Mi(this.ctx), Hc = Array.isArray(zc.pattern.strokeWidth) ? zc.pattern.strokeWidth[this.seriesIndex] : zc.pattern.strokeWidth, Uc = Ic;
				return Fc = Array.isArray(zc.pattern.style) ? zc.pattern.style[Bc.seriesNumber] === void 0 ? Rc : Vc.drawPattern(zc.pattern.style[Bc.seriesNumber], zc.pattern.width, zc.pattern.height, Uc, Hc, Lc) : Vc.drawPattern(zc.pattern.style, zc.pattern.width, zc.pattern.height, Uc, Hc, Lc), Fc;
			}
		},
		{
			key: "handleGradientFill",
			value: function(io) {
				var Pc = io.type, Fc = io.fillColor, Ic = io.fillOpacity, Lc = io.fillConfig, Rc = io.colorStops, zc = io.i, Bc = this.w.config.fill;
				Lc && (Bc = u(u({}, Bc), Lc));
				var Vc = this.opts, Hc = new Mi(this.ctx), Uc = new v();
				Pc = Pc || Bc.gradient.type;
				var Wc, Gc = Fc, qc = Bc.gradient.opacityFrom === void 0 ? Ic : Array.isArray(Bc.gradient.opacityFrom) ? Bc.gradient.opacityFrom[zc] : Bc.gradient.opacityFrom;
				Gc.indexOf("rgba") > -1 && (qc = v.getOpacityFromRGBA(Gc));
				var Jc = Bc.gradient.opacityTo === void 0 ? Ic : Array.isArray(Bc.gradient.opacityTo) ? Bc.gradient.opacityTo[zc] : Bc.gradient.opacityTo;
				if (Bc.gradient.gradientToColors === void 0 || Bc.gradient.gradientToColors.length === 0) Wc = Bc.gradient.shade === "dark" ? Uc.shadeColor(-1 * parseFloat(Bc.gradient.shadeIntensity), Fc.indexOf("rgb") > -1 ? v.rgb2hex(Fc) : Fc) : Uc.shadeColor(parseFloat(Bc.gradient.shadeIntensity), Fc.indexOf("rgb") > -1 ? v.rgb2hex(Fc) : Fc);
				else if (Bc.gradient.gradientToColors[Vc.seriesNumber]) {
					var Yc = Bc.gradient.gradientToColors[Vc.seriesNumber];
					Wc = Yc, Yc.indexOf("rgba") > -1 && (Jc = v.getOpacityFromRGBA(Yc));
				} else Wc = Fc;
				if (Bc.gradient.gradientFrom && (Gc = Bc.gradient.gradientFrom), Bc.gradient.gradientTo && (Wc = Bc.gradient.gradientTo), Bc.gradient.inverseColors) {
					var Xc = Gc;
					Gc = Wc, Wc = Xc;
				}
				return Gc.indexOf("rgb") > -1 && (Gc = v.rgb2hex(Gc)), Wc.indexOf("rgb") > -1 && (Wc = v.rgb2hex(Wc)), Hc.drawGradient(Pc, Gc, Wc, qc, Jc, Vc.size, Bc.gradient.stops, Rc, zc);
			}
		}
	]), io;
}(), Vi = function() {
	function io(Pc, Fc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w;
	}
	return s(io, [
		{
			key: "setGlobalMarkerSize",
			value: function() {
				var io = this.w;
				if (io.globals.markers.size = Array.isArray(io.config.markers.size) ? io.config.markers.size : [io.config.markers.size], io.globals.markers.size.length > 0) {
					if (io.globals.markers.size.length < io.globals.series.length + 1) for (var Pc = 0; Pc <= io.globals.series.length; Pc++) io.globals.markers.size[Pc] === void 0 && io.globals.markers.size.push(io.globals.markers.size[0]);
				} else io.globals.markers.size = io.config.series.map((function(Pc) {
					return io.config.markers.size;
				}));
			}
		},
		{
			key: "plotChartMarkers",
			value: function(io) {
				var Pc = io.pointsPos, Fc = io.seriesIndex, Ic = io.j, Lc = io.pSize, Rc = io.alwaysDrawMarker, zc = Rc !== void 0 && Rc, Bc = io.isVirtualPoint, Vc = Bc !== void 0 && Bc, Hc = this.w, Uc = Fc, Wc = Pc, Gc = null, Kc = new Mi(this.ctx), qc = Hc.config.markers.discrete && Hc.config.markers.discrete.length;
				if (Array.isArray(Wc.x)) for (var Jc = 0; Jc < Wc.x.length; Jc++) {
					var Yc = void 0, Xc = Ic, Zc = !v.isNumber(Wc.y[Jc]);
					Hc.globals.markers.largestSize === 0 && Hc.globals.hasNullValues && Hc.globals.series[Uc][Ic + 1] !== null && !Vc && (Zc = !0), Ic === 1 && Jc === 0 && (Xc = 0), Ic === 1 && Jc === 1 && (Xc = 1);
					var Qc = "apexcharts-marker";
					if (Hc.config.chart.type !== "line" && Hc.config.chart.type !== "area" || Hc.globals.comboCharts || Hc.config.tooltip.intersect || (Qc += " no-pointer-events"), (Array.isArray(Hc.config.markers.size) ? Hc.globals.markers.size[Fc] > 0 : Hc.config.markers.size > 0) || zc || qc) {
						Zc || (Qc += ` w${v.randomId()}`);
						var el = this.getMarkerConfig({
							cssClass: Qc,
							seriesIndex: Fc,
							dataPointIndex: Xc
						});
						Hc.config.series[Uc].data[Xc] && (Hc.config.series[Uc].data[Xc].fillColor && (el.pointFillColor = Hc.config.series[Uc].data[Xc].fillColor), Hc.config.series[Uc].data[Xc].strokeColor && (el.pointStrokeColor = Hc.config.series[Uc].data[Xc].strokeColor)), Lc !== void 0 && (el.pSize = Lc), (Wc.x[Jc] < -Hc.globals.markers.largestSize || Wc.x[Jc] > Hc.globals.gridWidth + Hc.globals.markers.largestSize || Wc.y[Jc] < -Hc.globals.markers.largestSize || Wc.y[Jc] > Hc.globals.gridHeight + Hc.globals.markers.largestSize) && (el.pSize = 0), !Zc && ((Hc.globals.markers.size[Fc] > 0 || zc || qc) && !Gc && (Gc = Kc.group({ class: zc || qc ? "" : "apexcharts-series-markers" })).attr("clip-path", `url(#gridRectMarkerMask${Hc.globals.cuid})`), (Yc = Kc.drawMarker(Wc.x[Jc], Wc.y[Jc], el)).attr("rel", Xc), Yc.attr("j", Xc), Yc.attr("index", Fc), Yc.node.setAttribute("default-marker-size", el.pSize), new Li(this.ctx).setSelectionFilter(Yc, Fc, Xc), this.addEvents(Yc), Gc && Gc.add(Yc));
					} else Hc.globals.pointsArray[Fc] === void 0 && (Hc.globals.pointsArray[Fc] = []), Hc.globals.pointsArray[Fc].push([Wc.x[Jc], Wc.y[Jc]]);
				}
				return Gc;
			}
		},
		{
			key: "getMarkerConfig",
			value: function(io) {
				var Pc = io.cssClass, Fc = io.seriesIndex, Ic = io.dataPointIndex, Lc = Ic === void 0 ? null : Ic, Rc = io.radius, zc = Rc === void 0 ? null : Rc, Bc = io.size, Vc = Bc === void 0 ? null : Bc, Hc = io.strokeWidth, Uc = Hc === void 0 ? null : Hc, Wc = this.w, Gc = this.getMarkerStyle(Fc), Kc = Vc === null ? Wc.globals.markers.size[Fc] : Vc, qc = Wc.config.markers;
				return Lc !== null && qc.discrete.length && qc.discrete.map((function(io) {
					io.seriesIndex === Fc && io.dataPointIndex === Lc && (Gc.pointStrokeColor = io.strokeColor, Gc.pointFillColor = io.fillColor, Kc = io.size, Gc.pointShape = io.shape);
				})), {
					pSize: zc === null ? Kc : zc,
					pRadius: zc === null ? qc.radius : zc,
					pointStrokeWidth: Uc === null ? Array.isArray(qc.strokeWidth) ? qc.strokeWidth[Fc] : qc.strokeWidth : Uc,
					pointStrokeColor: Gc.pointStrokeColor,
					pointFillColor: Gc.pointFillColor,
					shape: Gc.pointShape || (Array.isArray(qc.shape) ? qc.shape[Fc] : qc.shape),
					class: Pc,
					pointStrokeOpacity: Array.isArray(qc.strokeOpacity) ? qc.strokeOpacity[Fc] : qc.strokeOpacity,
					pointStrokeDashArray: Array.isArray(qc.strokeDashArray) ? qc.strokeDashArray[Fc] : qc.strokeDashArray,
					pointFillOpacity: Array.isArray(qc.fillOpacity) ? qc.fillOpacity[Fc] : qc.fillOpacity,
					seriesIndex: Fc
				};
			}
		},
		{
			key: "addEvents",
			value: function(io) {
				var Pc = this.w, Fc = new Mi(this.ctx);
				io.node.addEventListener("mouseenter", Fc.pathMouseEnter.bind(this.ctx, io)), io.node.addEventListener("mouseleave", Fc.pathMouseLeave.bind(this.ctx, io)), io.node.addEventListener("mousedown", Fc.pathMouseDown.bind(this.ctx, io)), io.node.addEventListener("click", Pc.config.markers.onClick), io.node.addEventListener("dblclick", Pc.config.markers.onDblClick), io.node.addEventListener("touchstart", Fc.pathMouseDown.bind(this.ctx, io), { passive: !0 });
			}
		},
		{
			key: "getMarkerStyle",
			value: function(io) {
				var Pc = this.w, Fc = Pc.globals.markers.colors, Ic = Pc.config.markers.strokeColor || Pc.config.markers.strokeColors;
				return {
					pointStrokeColor: Array.isArray(Ic) ? Ic[io] : Ic,
					pointFillColor: Array.isArray(Fc) ? Fc[io] : Fc
				};
			}
		}
	]), io;
}(), Ui = function() {
	function io(Pc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w, this.initialAnim = this.w.config.chart.animations.enabled;
	}
	return s(io, [
		{
			key: "draw",
			value: function(io, Pc, Fc) {
				var Ic = this.w, Lc = new Mi(this.ctx), Rc = Fc.realIndex, zc = Fc.pointsPos, Bc = Fc.zRatio, Vc = Fc.elParent, Hc = Lc.group({ class: `apexcharts-series-markers apexcharts-series-${Ic.config.chart.type}` });
				if (Hc.attr("clip-path", `url(#gridRectMarkerMask${Ic.globals.cuid})`), Array.isArray(zc.x)) for (var Uc = 0; Uc < zc.x.length; Uc++) {
					var Wc = Pc + 1, Gc = !0;
					Pc === 0 && Uc === 0 && (Wc = 0), Pc === 0 && Uc === 1 && (Wc = 1);
					var Kc = Ic.globals.markers.size[Rc];
					if (Bc !== Infinity) {
						var qc = Ic.config.plotOptions.bubble;
						Kc = Ic.globals.seriesZ[Rc][Wc], qc.zScaling && (Kc /= Bc), qc.minBubbleRadius && Kc < qc.minBubbleRadius && (Kc = qc.minBubbleRadius), qc.maxBubbleRadius && Kc > qc.maxBubbleRadius && (Kc = qc.maxBubbleRadius);
					}
					var Jc = zc.x[Uc], Yc = zc.y[Uc];
					if (Kc = Kc || 0, Yc !== null && Ic.globals.series[Rc][Wc] !== void 0 || (Gc = !1), Gc) {
						var Xc = this.drawPoint(Jc, Yc, Kc, Rc, Wc, Pc);
						Hc.add(Xc);
					}
					Vc.add(Hc);
				}
			}
		},
		{
			key: "drawPoint",
			value: function(io, Pc, Fc, Ic, Lc, Rc) {
				var zc = this.w, Bc = Ic, Vc = new y(this.ctx), Hc = new Li(this.ctx), Uc = new ji(this.ctx), Wc = new Vi(this.ctx), Gc = new Mi(this.ctx), Kc = Wc.getMarkerConfig({
					cssClass: "apexcharts-marker",
					seriesIndex: Bc,
					dataPointIndex: Lc,
					radius: zc.config.chart.type === "bubble" || zc.globals.comboCharts && zc.config.series[Ic] && zc.config.series[Ic].type === "bubble" ? Fc : null
				}), qc = Uc.fillPath({
					seriesNumber: Ic,
					dataPointIndex: Lc,
					color: Kc.pointFillColor,
					patternUnits: "objectBoundingBox",
					value: zc.globals.series[Ic][Rc]
				}), Jc = Gc.drawMarker(io, Pc, Kc);
				if (zc.config.series[Bc].data[Lc] && zc.config.series[Bc].data[Lc].fillColor && (qc = zc.config.series[Bc].data[Lc].fillColor), Jc.attr({ fill: qc }), zc.config.chart.dropShadow.enabled) {
					var Yc = zc.config.chart.dropShadow;
					Hc.dropShadow(Jc, Yc, Ic);
				}
				if (!this.initialAnim || zc.globals.dataChanged || zc.globals.resized) zc.globals.animationEnded = !0;
				else {
					var Xc = zc.config.chart.animations.speed;
					Vc.animateMarker(Jc, Xc, zc.globals.easing, (function() {
						window.setTimeout((function() {
							Vc.animationCompleted(Jc);
						}), 100);
					}));
				}
				return Jc.attr({
					rel: Lc,
					j: Lc,
					index: Ic,
					"default-marker-size": Kc.pSize
				}), Hc.setSelectionFilter(Jc, Ic, Lc), Wc.addEvents(Jc), Jc.node.classList.add("apexcharts-marker"), Jc;
			}
		},
		{
			key: "centerTextInBubble",
			value: function(io) {
				var Pc = this.w;
				return { y: io += parseInt(Pc.config.dataLabels.style.fontSize, 10) / 4 };
			}
		}
	]), io;
}(), qi = function() {
	function io(Pc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w;
	}
	return s(io, [
		{
			key: "dataLabelsCorrection",
			value: function(io, Pc, Fc, Ic, Lc, Rc, zc) {
				var Bc = this.w, Vc = !1, Hc = new Mi(this.ctx).getTextRects(Fc, zc), Uc = Hc.width, Wc = Hc.height;
				Pc < 0 && (Pc = 0), Pc > Bc.globals.gridHeight + Wc && (Pc = Bc.globals.gridHeight + Wc / 2), Bc.globals.dataLabelsRects[Ic] === void 0 && (Bc.globals.dataLabelsRects[Ic] = []), Bc.globals.dataLabelsRects[Ic].push({
					x: io,
					y: Pc,
					width: Uc,
					height: Wc
				});
				var Gc = Bc.globals.dataLabelsRects[Ic].length - 2, Kc = Bc.globals.lastDrawnDataLabelsIndexes[Ic] === void 0 ? 0 : Bc.globals.lastDrawnDataLabelsIndexes[Ic][Bc.globals.lastDrawnDataLabelsIndexes[Ic].length - 1];
				if (Bc.globals.dataLabelsRects[Ic][Gc] !== void 0) {
					var qc = Bc.globals.dataLabelsRects[Ic][Kc];
					(io > qc.x + qc.width || Pc > qc.y + qc.height || Pc + Wc < qc.y || io + Uc < qc.x) && (Vc = !0);
				}
				return (Lc === 0 || Rc) && (Vc = !0), {
					x: io,
					y: Pc,
					textRects: Hc,
					drawnextLabel: Vc
				};
			}
		},
		{
			key: "drawDataLabel",
			value: function(io) {
				var Pc = this, Fc = io.type, Ic = io.pos, Lc = io.i, Rc = io.j, zc = io.isRangeStart, Bc = io.strokeWidth, Vc = Bc === void 0 ? 2 : Bc, Hc = this.w, Uc = new Mi(this.ctx), Wc = Hc.config.dataLabels, Gc = 0, Kc = 0, qc = Rc, Jc = null;
				if (Hc.globals.collapsedSeriesIndices.indexOf(Lc) !== -1 || !Wc.enabled || !Array.isArray(Ic.x)) return Jc;
				Jc = Uc.group({ class: "apexcharts-data-labels" });
				for (var Yc = 0; Yc < Ic.x.length; Yc++) if (Gc = Ic.x[Yc] + Wc.offsetX, Kc = Ic.y[Yc] + Wc.offsetY + Vc, !isNaN(Gc)) {
					Rc === 1 && Yc === 0 && (qc = 0), Rc === 1 && Yc === 1 && (qc = 1);
					var Xc = Hc.globals.series[Lc][qc];
					Fc === "rangeArea" && (Xc = zc ? Hc.globals.seriesRangeStart[Lc][qc] : Hc.globals.seriesRangeEnd[Lc][qc]);
					var Zc = "", Qc = function(io) {
						return Hc.config.dataLabels.formatter(io, {
							ctx: Pc.ctx,
							seriesIndex: Lc,
							dataPointIndex: qc,
							w: Hc
						});
					};
					Hc.config.chart.type === "bubble" ? (Zc = Qc(Xc = Hc.globals.seriesZ[Lc][qc]), Kc = Ic.y[Yc], Kc = new Ui(this.ctx).centerTextInBubble(Kc, Lc, qc).y) : Xc !== void 0 && (Zc = Qc(Xc));
					var $c = Hc.config.dataLabels.textAnchor;
					Hc.globals.isSlopeChart && ($c = qc === 0 ? "end" : qc === Hc.config.series[Lc].data.length - 1 ? "start" : "middle"), this.plotDataLabelsText({
						x: Gc,
						y: Kc,
						text: Zc,
						i: Lc,
						j: qc,
						parent: Jc,
						offsetCorrection: !0,
						dataLabelsConfig: Hc.config.dataLabels,
						textAnchor: $c
					});
				}
				return Jc;
			}
		},
		{
			key: "plotDataLabelsText",
			value: function(io) {
				var Pc = this.w, Fc = new Mi(this.ctx), Ic = io.x, Lc = io.y, Rc = io.i, zc = io.j, Bc = io.text, Vc = io.textAnchor, Hc = io.fontSize, Uc = io.parent, Wc = io.dataLabelsConfig, Gc = io.color, Kc = io.alwaysDrawDataLabel, qc = io.offsetCorrection, Jc = io.className, Yc = null;
				if (Array.isArray(Pc.config.dataLabels.enabledOnSeries) && Pc.config.dataLabels.enabledOnSeries.indexOf(Rc) < 0) return Yc;
				var Xc = {
					x: Ic,
					y: Lc,
					drawnextLabel: !0,
					textRects: null
				};
				qc && (Xc = this.dataLabelsCorrection(Ic, Lc, Bc, Rc, zc, Kc, parseInt(Wc.style.fontSize, 10))), Pc.globals.zoomed || (Ic = Xc.x, Lc = Xc.y), Xc.textRects && (Ic < -20 - Xc.textRects.width || Ic > Pc.globals.gridWidth + Xc.textRects.width + 30) && (Bc = "");
				var Zc = Pc.globals.dataLabels.style.colors[Rc];
				((Pc.config.chart.type === "bar" || Pc.config.chart.type === "rangeBar") && Pc.config.plotOptions.bar.distributed || Pc.config.dataLabels.distributed) && (Zc = Pc.globals.dataLabels.style.colors[zc]), typeof Zc == "function" && (Zc = Zc({
					series: Pc.globals.series,
					seriesIndex: Rc,
					dataPointIndex: zc,
					w: Pc
				})), Gc && (Zc = Gc);
				var Qc = Wc.offsetX, $c = Wc.offsetY;
				if (Pc.config.chart.type !== "bar" && Pc.config.chart.type !== "rangeBar" || (Qc = 0, $c = 0), Pc.globals.isSlopeChart && (zc !== 0 && (Qc = -2 * Wc.offsetX + 5), zc !== 0 && zc !== Pc.config.series[Rc].data.length - 1 && (Qc = 0)), Xc.drawnextLabel) {
					if ((Yc = Fc.drawText({
						width: 100,
						height: parseInt(Wc.style.fontSize, 10),
						x: Ic + Qc,
						y: Lc + $c,
						foreColor: Zc,
						textAnchor: Vc || Wc.textAnchor,
						text: Bc,
						fontSize: Hc || Wc.style.fontSize,
						fontFamily: Wc.style.fontFamily,
						fontWeight: Wc.style.fontWeight || "normal"
					})).attr({
						class: Jc || "apexcharts-datalabel",
						cx: Ic,
						cy: Lc
					}), Wc.dropShadow.enabled) {
						var el = Wc.dropShadow;
						new Li(this.ctx).dropShadow(Yc, el);
					}
					Uc.add(Yc), Pc.globals.lastDrawnDataLabelsIndexes[Rc] === void 0 && (Pc.globals.lastDrawnDataLabelsIndexes[Rc] = []), Pc.globals.lastDrawnDataLabelsIndexes[Rc].push(zc);
				}
				return Yc;
			}
		},
		{
			key: "addBackgroundToDataLabel",
			value: function(io, Pc) {
				var Fc = this.w, Ic = Fc.config.dataLabels.background, Lc = Ic.padding, Rc = Ic.padding / 2, zc = Pc.width, Bc = Pc.height, Vc = new Mi(this.ctx).drawRect(Pc.x - Lc, Pc.y - Rc / 2, zc + 2 * Lc, Bc + Rc, Ic.borderRadius, Fc.config.chart.background !== "transparent" && Fc.config.chart.background ? Fc.config.chart.background : "#fff", Ic.opacity, Ic.borderWidth, Ic.borderColor);
				return Ic.dropShadow.enabled && new Li(this.ctx).dropShadow(Vc, Ic.dropShadow), Vc;
			}
		},
		{
			key: "dataLabelsBackground",
			value: function() {
				var io = this.w;
				if (io.config.chart.type !== "bubble") for (var Pc = io.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels text"), Fc = 0; Fc < Pc.length; Fc++) {
					var Ic = Pc[Fc], Lc = Ic.getBBox(), Rc = null;
					if (Lc.width && Lc.height && (Rc = this.addBackgroundToDataLabel(Ic, Lc)), Rc) {
						Ic.parentNode.insertBefore(Rc.node, Ic);
						var zc = io.config.dataLabels.background.backgroundColor || Ic.getAttribute("fill");
						io.config.chart.animations.enabled && !io.globals.resized && !io.globals.dataChanged ? Rc.animate().attr({ fill: zc }) : Rc.attr({ fill: zc }), Ic.setAttribute("fill", io.config.dataLabels.background.foreColor);
					}
				}
			}
		},
		{
			key: "bringForward",
			value: function() {
				for (var io = this.w, Pc = io.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels"), Fc = io.globals.dom.baseEl.querySelector(".apexcharts-plot-series:last-child"), Ic = 0; Ic < Pc.length; Ic++) Fc && Fc.insertBefore(Pc[Ic], Fc.nextSibling);
			}
		}
	]), io;
}(), Zi = function() {
	function io(Pc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w, this.legendInactiveClass = "legend-mouseover-inactive";
	}
	return s(io, [
		{
			key: "getAllSeriesEls",
			value: function() {
				return this.w.globals.dom.baseEl.getElementsByClassName("apexcharts-series");
			}
		},
		{
			key: "getSeriesByName",
			value: function(io) {
				return this.w.globals.dom.baseEl.querySelector(`.apexcharts-inner .apexcharts-series[seriesName='${v.escapeString(io)}']`);
			}
		},
		{
			key: "isSeriesHidden",
			value: function(io) {
				var Pc = this.getSeriesByName(io), Fc = parseInt(Pc.getAttribute("data:realIndex"), 10);
				return {
					isHidden: Pc.classList.contains("apexcharts-series-collapsed"),
					realIndex: Fc
				};
			}
		},
		{
			key: "addCollapsedClassToSeries",
			value: function(io, Pc) {
				var Fc = this.w;
				function Ic(Fc) {
					for (var Ic = 0; Ic < Fc.length; Ic++) Fc[Ic].index === Pc && io.node.classList.add("apexcharts-series-collapsed");
				}
				Ic(Fc.globals.collapsedSeries), Ic(Fc.globals.ancillaryCollapsedSeries);
			}
		},
		{
			key: "toggleSeries",
			value: function(io) {
				var Pc = this.isSeriesHidden(io);
				return this.ctx.legend.legendHelpers.toggleDataSeries(Pc.realIndex, Pc.isHidden), Pc.isHidden;
			}
		},
		{
			key: "showSeries",
			value: function(io) {
				var Pc = this.isSeriesHidden(io);
				Pc.isHidden && this.ctx.legend.legendHelpers.toggleDataSeries(Pc.realIndex, !0);
			}
		},
		{
			key: "hideSeries",
			value: function(io) {
				var Pc = this.isSeriesHidden(io);
				Pc.isHidden || this.ctx.legend.legendHelpers.toggleDataSeries(Pc.realIndex, !1);
			}
		},
		{
			key: "resetSeries",
			value: function() {
				var io = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0], Pc = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], Fc = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], Ic = this.w, Lc = v.clone(Ic.globals.initialSeries);
				Ic.globals.previousPaths = [], Fc ? (Ic.globals.collapsedSeries = [], Ic.globals.ancillaryCollapsedSeries = [], Ic.globals.collapsedSeriesIndices = [], Ic.globals.ancillaryCollapsedSeriesIndices = []) : Lc = this.emptyCollapsedSeries(Lc), Ic.config.series = Lc, io && (Pc && (Ic.globals.zoomed = !1, this.ctx.updateHelpers.revertDefaultAxisMinMax()), this.ctx.updateHelpers._updateSeries(Lc, Ic.config.chart.animations.dynamicAnimation.enabled));
			}
		},
		{
			key: "emptyCollapsedSeries",
			value: function(io) {
				for (var Pc = this.w, Fc = 0; Fc < io.length; Fc++) Pc.globals.collapsedSeriesIndices.indexOf(Fc) > -1 && (io[Fc].data = []);
				return io;
			}
		},
		{
			key: "highlightSeries",
			value: function(io) {
				var Pc = this.w, Fc = this.getSeriesByName(io), Ic = parseInt(Fc == null ? void 0 : Fc.getAttribute("data:realIndex"), 10), Lc = Pc.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels, .apexcharts-yaxis"), Rc = null, zc = null, Bc = null;
				if (Pc.globals.axisCharts || Pc.config.chart.type === "radialBar") if (Pc.globals.axisCharts) {
					Rc = Pc.globals.dom.baseEl.querySelector(`.apexcharts-series[data\\:realIndex='${Ic}']`), zc = Pc.globals.dom.baseEl.querySelector(`.apexcharts-datalabels[data\\:realIndex='${Ic}']`);
					var Vc = Pc.globals.seriesYAxisReverseMap[Ic];
					Bc = Pc.globals.dom.baseEl.querySelector(`.apexcharts-yaxis[rel='${Vc}']`);
				} else Rc = Pc.globals.dom.baseEl.querySelector(`.apexcharts-series[rel='${Ic + 1}']`);
				else Rc = Pc.globals.dom.baseEl.querySelector(`.apexcharts-series[rel='${Ic + 1}'] path`);
				for (var Hc = 0; Hc < Lc.length; Hc++) Lc[Hc].classList.add(this.legendInactiveClass);
				if (Rc) Pc.globals.axisCharts || Rc.parentNode.classList.remove(this.legendInactiveClass), Rc.classList.remove(this.legendInactiveClass), zc !== null && zc.classList.remove(this.legendInactiveClass), Bc !== null && Bc.classList.remove(this.legendInactiveClass);
				else for (var Uc = 0; Uc < Lc.length; Uc++) Lc[Uc].classList.remove(this.legendInactiveClass);
			}
		},
		{
			key: "toggleSeriesOnHover",
			value: function(io, Pc) {
				var Fc = this.w;
				Pc || (Pc = io.target);
				var Ic = Fc.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels, .apexcharts-yaxis");
				if (io.type === "mousemove") {
					var Lc = parseInt(Pc.getAttribute("rel"), 10) - 1;
					this.highlightSeries(Fc.globals.seriesNames[Lc]);
				} else if (io.type === "mouseout") for (var Rc = 0; Rc < Ic.length; Rc++) Ic[Rc].classList.remove(this.legendInactiveClass);
			}
		},
		{
			key: "highlightRangeInSeries",
			value: function(io, Pc) {
				var Fc = this, Ic = this.w, Lc = Ic.globals.dom.baseEl.getElementsByClassName("apexcharts-heatmap-rect"), Rc = function(io) {
					for (var Pc = 0; Pc < Lc.length; Pc++) Lc[Pc].classList[io](Fc.legendInactiveClass);
				};
				if (io.type === "mousemove") {
					var zc = parseInt(Pc.getAttribute("rel"), 10) - 1;
					Rc("add");
					var Bc = Ic.config.plotOptions.heatmap.colorScale.ranges;
					(function(io, Pc) {
						for (var Ic = 0; Ic < Lc.length; Ic++) {
							var Rc = Number(Lc[Ic].getAttribute("val"));
							Rc >= io.from && (Rc < io.to || io.to === Pc && Rc === Pc) && Lc[Ic].classList.remove(Fc.legendInactiveClass);
						}
					})(Bc[zc], Bc.reduce((function(io, Pc) {
						return Math.max(io, Pc.to);
					}), 0));
				} else io.type === "mouseout" && Rc("remove");
			}
		},
		{
			key: "getActiveConfigSeriesIndex",
			value: function() {
				var io = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "asc", Pc = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], Fc = this.w, Ic = 0;
				if (Fc.config.series.length > 1) {
					for (var Lc = Fc.config.series.map((function(io, Ic) {
						return io.data && io.data.length > 0 && Fc.globals.collapsedSeriesIndices.indexOf(Ic) === -1 && (!Fc.globals.comboCharts || Pc.length === 0 || Pc.length && Pc.indexOf(Fc.config.series[Ic].type) > -1) ? Ic : -1;
					})), Rc = io === "asc" ? 0 : Lc.length - 1; io === "asc" ? Rc < Lc.length : Rc >= 0; io === "asc" ? Rc++ : Rc--) if (Lc[Rc] !== -1) {
						Ic = Lc[Rc];
						break;
					}
				}
				return Ic;
			}
		},
		{
			key: "getBarSeriesIndices",
			value: function() {
				return this.w.globals.comboCharts ? this.w.config.series.map((function(io, Pc) {
					return io.type === "bar" || io.type === "column" ? Pc : -1;
				})).filter((function(io) {
					return io !== -1;
				})) : this.w.config.series.map((function(io, Pc) {
					return Pc;
				}));
			}
		},
		{
			key: "getPreviousPaths",
			value: function() {
				var io = this.w;
				function Pc(Pc, Fc, Ic) {
					for (var Lc = Pc[Fc].childNodes, Rc = {
						type: Ic,
						paths: [],
						realIndex: Pc[Fc].getAttribute("data:realIndex")
					}, zc = 0; zc < Lc.length; zc++) if (Lc[zc].hasAttribute("pathTo")) {
						var Bc = Lc[zc].getAttribute("pathTo");
						Rc.paths.push({ d: Bc });
					}
					io.globals.previousPaths.push(Rc);
				}
				io.globals.previousPaths = [], [
					"line",
					"area",
					"bar",
					"rangebar",
					"rangeArea",
					"candlestick",
					"radar"
				].forEach((function(Fc) {
					for (var Ic, Lc = (Ic = Fc, io.globals.dom.baseEl.querySelectorAll(`.apexcharts-${Ic}-series .apexcharts-series`)), Rc = 0; Rc < Lc.length; Rc++) Pc(Lc, Rc, Fc);
				}));
				var Fc = io.globals.dom.baseEl.querySelectorAll(`.apexcharts-${io.config.chart.type} .apexcharts-series`);
				if (Fc.length > 0) for (var Ic = function(Pc) {
					for (var Fc = io.globals.dom.baseEl.querySelectorAll(`.apexcharts-${io.config.chart.type} .apexcharts-series[data\\:realIndex='${Pc}'] rect`), Ic = [], Lc = function(io) {
						var Pc = function(Pc) {
							return Fc[io].getAttribute(Pc);
						}, Lc = {
							x: parseFloat(Pc("x")),
							y: parseFloat(Pc("y")),
							width: parseFloat(Pc("width")),
							height: parseFloat(Pc("height"))
						};
						Ic.push({
							rect: Lc,
							color: Fc[io].getAttribute("color")
						});
					}, Rc = 0; Rc < Fc.length; Rc++) Lc(Rc);
					io.globals.previousPaths.push(Ic);
				}, Lc = 0; Lc < Fc.length; Lc++) Ic(Lc);
				io.globals.axisCharts || (io.globals.previousPaths = io.globals.series);
			}
		},
		{
			key: "clearPreviousPaths",
			value: function() {
				var io = this.w;
				io.globals.previousPaths = [], io.globals.allSeriesCollapsed = !1;
			}
		},
		{
			key: "handleNoData",
			value: function() {
				var io = this.w, Pc = io.config.noData, Fc = new Mi(this.ctx), Ic = io.globals.svgWidth / 2, Lc = io.globals.svgHeight / 2, Rc = "middle";
				if (io.globals.noData = !0, io.globals.animationEnded = !0, Pc.align === "left" ? (Ic = 10, Rc = "start") : Pc.align === "right" && (Ic = io.globals.svgWidth - 10, Rc = "end"), Pc.verticalAlign === "top" ? Lc = 50 : Pc.verticalAlign === "bottom" && (Lc = io.globals.svgHeight - 50), Ic += Pc.offsetX, Lc = Lc + parseInt(Pc.style.fontSize, 10) + 2 + Pc.offsetY, Pc.text !== void 0 && Pc.text !== "") {
					var zc = Fc.drawText({
						x: Ic,
						y: Lc,
						text: Pc.text,
						textAnchor: Rc,
						fontSize: Pc.style.fontSize,
						fontFamily: Pc.style.fontFamily,
						foreColor: Pc.style.color,
						opacity: 1,
						class: "apexcharts-text-nodata"
					});
					io.globals.dom.Paper.add(zc);
				}
			}
		},
		{
			key: "setNullSeriesToZeroValues",
			value: function(io) {
				for (var Pc = this.w, Fc = 0; Fc < io.length; Fc++) if (io[Fc].length === 0) for (var Ic = 0; Ic < io[Pc.globals.maxValsInArrayIndex].length; Ic++) io[Fc].push(0);
				return io;
			}
		},
		{
			key: "hasAllSeriesEqualX",
			value: function() {
				for (var io = !0, Pc = this.w, Fc = this.filteredSeriesX(), Ic = 0; Ic < Fc.length - 1; Ic++) if (Fc[Ic][0] !== Fc[Ic + 1][0]) {
					io = !1;
					break;
				}
				return Pc.globals.allSeriesHasEqualX = io, io;
			}
		},
		{
			key: "filteredSeriesX",
			value: function() {
				return this.w.globals.seriesX.map((function(io) {
					return io.length > 0 ? io : [];
				}));
			}
		}
	]), io;
}(), $i = function() {
	function io(Pc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w, this.twoDSeries = [], this.threeDSeries = [], this.twoDSeriesX = [], this.seriesGoals = [], this.coreUtils = new Pi(this.ctx);
	}
	return s(io, [
		{
			key: "isMultiFormat",
			value: function() {
				return this.isFormatXY() || this.isFormat2DArray();
			}
		},
		{
			key: "isFormatXY",
			value: function() {
				var io = this.w.config.series.slice();
				if (this.activeSeriesIndex = new Zi(this.ctx).getActiveConfigSeriesIndex(), io[this.activeSeriesIndex].data !== void 0 && io[this.activeSeriesIndex].data.length > 0 && io[this.activeSeriesIndex].data[0] !== null && io[this.activeSeriesIndex].data[0].x !== void 0 && io[this.activeSeriesIndex].data[0] !== null) return !0;
			}
		},
		{
			key: "isFormat2DArray",
			value: function() {
				var io = this.w.config.series.slice();
				if (this.activeSeriesIndex = new Zi(this.ctx).getActiveConfigSeriesIndex(), io[this.activeSeriesIndex].data !== void 0 && io[this.activeSeriesIndex].data.length > 0 && io[this.activeSeriesIndex].data[0] !== void 0 && io[this.activeSeriesIndex].data[0] !== null && io[this.activeSeriesIndex].data[0].constructor === Array) return !0;
			}
		},
		{
			key: "handleFormat2DArray",
			value: function(io, Pc) {
				for (var Fc = this.w.config, Ic = this.w.globals, Lc = Fc.chart.type === "boxPlot" || Fc.series[Pc].type === "boxPlot", Rc = 0; Rc < io[Pc].data.length; Rc++) if (io[Pc].data[Rc][1] !== void 0 && (Array.isArray(io[Pc].data[Rc][1]) && io[Pc].data[Rc][1].length === 4 && !Lc ? this.twoDSeries.push(v.parseNumber(io[Pc].data[Rc][1][3])) : io[Pc].data[Rc].length >= 5 ? this.twoDSeries.push(v.parseNumber(io[Pc].data[Rc][4])) : this.twoDSeries.push(v.parseNumber(io[Pc].data[Rc][1])), Ic.dataFormatXNumeric = !0), Fc.xaxis.type === "datetime") {
					var zc = new Date(io[Pc].data[Rc][0]);
					zc = new Date(zc).getTime(), this.twoDSeriesX.push(zc);
				} else this.twoDSeriesX.push(io[Pc].data[Rc][0]);
				for (var Bc = 0; Bc < io[Pc].data.length; Bc++) io[Pc].data[Bc][2] !== void 0 && (this.threeDSeries.push(io[Pc].data[Bc][2]), Ic.isDataXYZ = !0);
			}
		},
		{
			key: "handleFormatXY",
			value: function(io, Pc) {
				var Fc = this.w.config, Ic = this.w.globals, Lc = new zi(this.ctx), Rc = Pc;
				Ic.collapsedSeriesIndices.indexOf(Pc) > -1 && (Rc = this.activeSeriesIndex);
				for (var zc = 0; zc < io[Pc].data.length; zc++) io[Pc].data[zc].y !== void 0 && (Array.isArray(io[Pc].data[zc].y) ? this.twoDSeries.push(v.parseNumber(io[Pc].data[zc].y[io[Pc].data[zc].y.length - 1])) : this.twoDSeries.push(v.parseNumber(io[Pc].data[zc].y))), io[Pc].data[zc].goals !== void 0 && Array.isArray(io[Pc].data[zc].goals) ? (this.seriesGoals[Pc] === void 0 && (this.seriesGoals[Pc] = []), this.seriesGoals[Pc].push(io[Pc].data[zc].goals)) : (this.seriesGoals[Pc] === void 0 && (this.seriesGoals[Pc] = []), this.seriesGoals[Pc].push(null));
				for (var Bc = 0; Bc < io[Rc].data.length; Bc++) {
					var Vc = typeof io[Rc].data[Bc].x == "string", Hc = Array.isArray(io[Rc].data[Bc].x), Uc = !Hc && !!Lc.isValidDate(io[Rc].data[Bc].x);
					if (Vc || Uc) if (Vc || Fc.xaxis.convertedCatToNumeric) {
						var Wc = Ic.isBarHorizontal && Ic.isRangeData;
						Fc.xaxis.type !== "datetime" || Wc ? (this.fallbackToCategory = !0, this.twoDSeriesX.push(io[Rc].data[Bc].x), isNaN(io[Rc].data[Bc].x) || this.w.config.xaxis.type === "category" || typeof io[Rc].data[Bc].x == "string" || (Ic.isXNumeric = !0)) : this.twoDSeriesX.push(Lc.parseDate(io[Rc].data[Bc].x));
					} else Fc.xaxis.type === "datetime" ? this.twoDSeriesX.push(Lc.parseDate(io[Rc].data[Bc].x.toString())) : (Ic.dataFormatXNumeric = !0, Ic.isXNumeric = !0, this.twoDSeriesX.push(parseFloat(io[Rc].data[Bc].x)));
					else Hc ? (this.fallbackToCategory = !0, this.twoDSeriesX.push(io[Rc].data[Bc].x)) : (Ic.isXNumeric = !0, Ic.dataFormatXNumeric = !0, this.twoDSeriesX.push(io[Rc].data[Bc].x));
				}
				if (io[Pc].data[0] && io[Pc].data[0].z !== void 0) {
					for (var Gc = 0; Gc < io[Pc].data.length; Gc++) this.threeDSeries.push(io[Pc].data[Gc].z);
					Ic.isDataXYZ = !0;
				}
			}
		},
		{
			key: "handleRangeData",
			value: function(io, Pc) {
				var Fc = this.w.globals, Ic = {};
				return this.isFormat2DArray() ? Ic = this.handleRangeDataFormat("array", io, Pc) : this.isFormatXY() && (Ic = this.handleRangeDataFormat("xy", io, Pc)), Fc.seriesRangeStart[Pc] = Ic.start === void 0 ? [] : Ic.start, Fc.seriesRangeEnd[Pc] = Ic.end === void 0 ? [] : Ic.end, Fc.seriesRange[Pc] = Ic.rangeUniques, Fc.seriesRange.forEach((function(io, Pc) {
					io && io.forEach((function(io, Pc) {
						io.y.forEach((function(Pc, Fc) {
							for (var Ic = 0; Ic < io.y.length; Ic++) if (Fc !== Ic) {
								var Lc = Pc.y1, Rc = Pc.y2, zc = io.y[Ic].y1;
								Lc <= io.y[Ic].y2 && zc <= Rc && (io.overlaps.indexOf(Pc.rangeName) < 0 && io.overlaps.push(Pc.rangeName), io.overlaps.indexOf(io.y[Ic].rangeName) < 0 && io.overlaps.push(io.y[Ic].rangeName));
							}
						}));
					}));
				})), Ic;
			}
		},
		{
			key: "handleCandleStickBoxData",
			value: function(io, Pc) {
				var Fc = this.w.globals, Ic = {};
				return this.isFormat2DArray() ? Ic = this.handleCandleStickBoxDataFormat("array", io, Pc) : this.isFormatXY() && (Ic = this.handleCandleStickBoxDataFormat("xy", io, Pc)), Fc.seriesCandleO[Pc] = Ic.o, Fc.seriesCandleH[Pc] = Ic.h, Fc.seriesCandleM[Pc] = Ic.m, Fc.seriesCandleL[Pc] = Ic.l, Fc.seriesCandleC[Pc] = Ic.c, Ic;
			}
		},
		{
			key: "handleRangeDataFormat",
			value: function(io, Pc, Fc) {
				var Ic = [], Lc = [], Rc = Pc[Fc].data.filter((function(io, Pc, Fc) {
					return Pc === Fc.findIndex((function(Pc) {
						return Pc.x === io.x;
					}));
				})).map((function(io, Pc) {
					return {
						x: io.x,
						overlaps: [],
						y: []
					};
				}));
				if (io === "array") for (var zc = 0; zc < Pc[Fc].data.length; zc++) Array.isArray(Pc[Fc].data[zc]) ? (Ic.push(Pc[Fc].data[zc][1][0]), Lc.push(Pc[Fc].data[zc][1][1])) : (Ic.push(Pc[Fc].data[zc]), Lc.push(Pc[Fc].data[zc]));
				else if (io === "xy") for (var Bc = function(io) {
					var zc = Array.isArray(Pc[Fc].data[io].y), Bc = v.randomId(), Vc = Pc[Fc].data[io].x, Hc = {
						y1: zc ? Pc[Fc].data[io].y[0] : Pc[Fc].data[io].y,
						y2: zc ? Pc[Fc].data[io].y[1] : Pc[Fc].data[io].y,
						rangeName: Bc
					};
					Pc[Fc].data[io].rangeName = Bc, Rc[Rc.findIndex((function(io) {
						return io.x === Vc;
					}))].y.push(Hc), Ic.push(Hc.y1), Lc.push(Hc.y2);
				}, Vc = 0; Vc < Pc[Fc].data.length; Vc++) Bc(Vc);
				return {
					start: Ic,
					end: Lc,
					rangeUniques: Rc
				};
			}
		},
		{
			key: "handleCandleStickBoxDataFormat",
			value: function(io, Pc, Fc) {
				var Ic = this.w, Lc = Ic.config.chart.type === "boxPlot" || Ic.config.series[Fc].type === "boxPlot", Rc = [], zc = [], Bc = [], Vc = [], Hc = [];
				if (io === "array") if (Lc && Pc[Fc].data[0].length === 6 || !Lc && Pc[Fc].data[0].length === 5) for (var Uc = 0; Uc < Pc[Fc].data.length; Uc++) Rc.push(Pc[Fc].data[Uc][1]), zc.push(Pc[Fc].data[Uc][2]), Lc ? (Bc.push(Pc[Fc].data[Uc][3]), Vc.push(Pc[Fc].data[Uc][4]), Hc.push(Pc[Fc].data[Uc][5])) : (Vc.push(Pc[Fc].data[Uc][3]), Hc.push(Pc[Fc].data[Uc][4]));
				else for (var Wc = 0; Wc < Pc[Fc].data.length; Wc++) Array.isArray(Pc[Fc].data[Wc][1]) && (Rc.push(Pc[Fc].data[Wc][1][0]), zc.push(Pc[Fc].data[Wc][1][1]), Lc ? (Bc.push(Pc[Fc].data[Wc][1][2]), Vc.push(Pc[Fc].data[Wc][1][3]), Hc.push(Pc[Fc].data[Wc][1][4])) : (Vc.push(Pc[Fc].data[Wc][1][2]), Hc.push(Pc[Fc].data[Wc][1][3])));
				else if (io === "xy") for (var Gc = 0; Gc < Pc[Fc].data.length; Gc++) Array.isArray(Pc[Fc].data[Gc].y) && (Rc.push(Pc[Fc].data[Gc].y[0]), zc.push(Pc[Fc].data[Gc].y[1]), Lc ? (Bc.push(Pc[Fc].data[Gc].y[2]), Vc.push(Pc[Fc].data[Gc].y[3]), Hc.push(Pc[Fc].data[Gc].y[4])) : (Vc.push(Pc[Fc].data[Gc].y[2]), Hc.push(Pc[Fc].data[Gc].y[3])));
				return {
					o: Rc,
					h: zc,
					m: Bc,
					l: Vc,
					c: Hc
				};
			}
		},
		{
			key: "parseDataAxisCharts",
			value: function(io) {
				var Pc = this, Fc = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.ctx, Ic = this.w.config, Lc = this.w.globals, Rc = new zi(Fc), zc = Ic.labels.length > 0 ? Ic.labels.slice() : Ic.xaxis.categories.slice();
				Lc.isRangeBar = Ic.chart.type === "rangeBar" && Lc.isBarHorizontal, Lc.hasXaxisGroups = Ic.xaxis.type === "category" && Ic.xaxis.group.groups.length > 0, Lc.hasXaxisGroups && (Lc.groups = Ic.xaxis.group.groups), io.forEach((function(io, Pc) {
					io.name === void 0 ? Lc.seriesNames.push("series-" + parseInt(Pc + 1, 10)) : Lc.seriesNames.push(io.name);
				})), this.coreUtils.setSeriesYAxisMappings();
				var Bc = [], Vc = f(new Set(Ic.series.map((function(io) {
					return io.group;
				}))));
				Ic.series.forEach((function(io, Pc) {
					var Fc = Vc.indexOf(io.group);
					Bc[Fc] || (Bc[Fc] = []), Bc[Fc].push(Lc.seriesNames[Pc]);
				})), Lc.seriesGroups = Bc;
				for (var Hc = function() {
					for (var io = 0; io < zc.length; io++) if (typeof zc[io] == "string") {
						if (!Rc.isValidDate(zc[io])) throw Error("You have provided invalid Date format. Please provide a valid JavaScript Date");
						Pc.twoDSeriesX.push(Rc.parseDate(zc[io]));
					} else Pc.twoDSeriesX.push(zc[io]);
				}, Uc = 0; Uc < io.length; Uc++) {
					if (this.twoDSeries = [], this.twoDSeriesX = [], this.threeDSeries = [], io[Uc].data === void 0) return void console.error("It is a possibility that you may have not included 'data' property in series.");
					if (Ic.chart.type !== "rangeBar" && Ic.chart.type !== "rangeArea" && io[Uc].type !== "rangeBar" && io[Uc].type !== "rangeArea" || (Lc.isRangeData = !0, this.handleRangeData(io, Uc)), this.isMultiFormat()) this.isFormat2DArray() ? this.handleFormat2DArray(io, Uc) : this.isFormatXY() && this.handleFormatXY(io, Uc), Ic.chart.type !== "candlestick" && io[Uc].type !== "candlestick" && Ic.chart.type !== "boxPlot" && io[Uc].type !== "boxPlot" || this.handleCandleStickBoxData(io, Uc), Lc.series.push(this.twoDSeries), Lc.labels.push(this.twoDSeriesX), Lc.seriesX.push(this.twoDSeriesX), Lc.seriesGoals = this.seriesGoals, Uc !== this.activeSeriesIndex || this.fallbackToCategory || (Lc.isXNumeric = !0);
					else {
						Ic.xaxis.type === "datetime" ? (Lc.isXNumeric = !0, Hc(), Lc.seriesX.push(this.twoDSeriesX)) : Ic.xaxis.type === "numeric" && (Lc.isXNumeric = !0, zc.length > 0 && (this.twoDSeriesX = zc, Lc.seriesX.push(this.twoDSeriesX))), Lc.labels.push(this.twoDSeriesX);
						var Wc = io[Uc].data.map((function(io) {
							return v.parseNumber(io);
						}));
						Lc.series.push(Wc);
					}
					Lc.seriesZ.push(this.threeDSeries), io[Uc].color === void 0 ? Lc.seriesColors.push(void 0) : Lc.seriesColors.push(io[Uc].color);
				}
				return this.w;
			}
		},
		{
			key: "parseDataNonAxisCharts",
			value: function(io) {
				var Pc = this.w.globals, Fc = this.w.config;
				Pc.series = io.slice(), Pc.seriesNames = Fc.labels.slice();
				for (var Ic = 0; Ic < Pc.series.length; Ic++) Pc.seriesNames[Ic] === void 0 && Pc.seriesNames.push("series-" + (Ic + 1));
				return this.w;
			}
		},
		{
			key: "handleExternalLabelsData",
			value: function(io) {
				var Pc = this.w.config, Fc = this.w.globals;
				Pc.xaxis.categories.length > 0 ? Fc.labels = Pc.xaxis.categories : Pc.labels.length > 0 ? Fc.labels = Pc.labels.slice() : this.fallbackToCategory ? (Fc.labels = Fc.labels[0], Fc.seriesRange.length && (Fc.seriesRange.map((function(io) {
					io.forEach((function(io) {
						Fc.labels.indexOf(io.x) < 0 && io.x && Fc.labels.push(io.x);
					}));
				})), Fc.labels = Array.from(new Set(Fc.labels.map(JSON.stringify)), JSON.parse)), Pc.xaxis.convertedCatToNumeric && (new Ni(Pc).convertCatToNumericXaxis(Pc, this.ctx, Fc.seriesX[0]), this._generateExternalLabels(io))) : this._generateExternalLabels(io);
			}
		},
		{
			key: "_generateExternalLabels",
			value: function(io) {
				var Pc = this.w.globals, Fc = this.w.config, Ic = [];
				if (Pc.axisCharts) {
					if (Pc.series.length > 0) if (this.isFormatXY()) for (var Lc = Fc.series.map((function(io, Pc) {
						return io.data.filter((function(io, Pc, Fc) {
							return Fc.findIndex((function(Pc) {
								return Pc.x === io.x;
							})) === Pc;
						}));
					})), Rc = Lc.reduce((function(io, Pc, Fc, Ic) {
						return Ic[io].length > Pc.length ? io : Fc;
					}), 0), zc = 0; zc < Lc[Rc].length; zc++) Ic.push(zc + 1);
					else for (var Bc = 0; Bc < Pc.series[Pc.maxValsInArrayIndex].length; Bc++) Ic.push(Bc + 1);
					Pc.seriesX = [];
					for (var Vc = 0; Vc < io.length; Vc++) Pc.seriesX.push(Ic);
					this.w.globals.isBarHorizontal || (Pc.isXNumeric = !0);
				}
				if (Ic.length === 0) {
					Ic = Pc.axisCharts ? [] : Pc.series.map((function(io, Pc) {
						return Pc + 1;
					}));
					for (var Hc = 0; Hc < io.length; Hc++) Pc.seriesX.push(Ic);
				}
				Pc.labels = Ic, Fc.xaxis.convertedCatToNumeric && (Pc.categoryLabels = Ic.map((function(io) {
					return Fc.xaxis.labels.formatter(io);
				}))), Pc.noLabelsProvided = !0;
			}
		},
		{
			key: "parseData",
			value: function(io) {
				var Pc = this.w, Fc = Pc.config, Ic = Pc.globals;
				this.excludeCollapsedSeriesInYAxis(), this.fallbackToCategory = !1, this.ctx.core.resetGlobals(), this.ctx.core.isMultipleY(), Ic.axisCharts ? (this.parseDataAxisCharts(io), this.coreUtils.getLargestSeries()) : this.parseDataNonAxisCharts(io), Fc.chart.stacked && (Ic.series = new Zi(this.ctx).setNullSeriesToZeroValues(Ic.series)), this.coreUtils.getSeriesTotals(), Ic.axisCharts && (Ic.stackedSeriesTotals = this.coreUtils.getStackedSeriesTotals(), Ic.stackedSeriesTotalsByGroups = this.coreUtils.getStackedSeriesTotalsByGroups()), this.coreUtils.getPercentSeries(), Ic.dataFormatXNumeric || Ic.isXNumeric && (Fc.xaxis.type !== "numeric" || Fc.labels.length !== 0 || Fc.xaxis.categories.length !== 0) || this.handleExternalLabelsData(io);
				for (var Lc = this.coreUtils.getCategoryLabels(Ic.labels), Rc = 0; Rc < Lc.length; Rc++) if (Array.isArray(Lc[Rc])) {
					Ic.isMultiLineX = !0;
					break;
				}
			}
		},
		{
			key: "excludeCollapsedSeriesInYAxis",
			value: function() {
				var io = this.w, Pc = [];
				io.globals.seriesYAxisMap.forEach((function(Fc, Ic) {
					var Lc = 0;
					Fc.forEach((function(Pc) {
						io.globals.collapsedSeriesIndices.indexOf(Pc) !== -1 && Lc++;
					})), Lc > 0 && Lc == Fc.length && Pc.push(Ic);
				})), io.globals.ignoreYAxisIndexes = Pc.map((function(io) {
					return io;
				}));
			}
		}
	]), io;
}(), Ji = function() {
	function io(Pc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w;
	}
	return s(io, [
		{
			key: "svgStringToNode",
			value: function(io) {
				return new DOMParser().parseFromString(io, "image/svg+xml").documentElement;
			}
		},
		{
			key: "scaleSvgNode",
			value: function(io, Pc) {
				var Fc = parseFloat(io.getAttributeNS(null, "width")), Ic = parseFloat(io.getAttributeNS(null, "height"));
				io.setAttributeNS(null, "width", Fc * Pc), io.setAttributeNS(null, "height", Ic * Pc), io.setAttributeNS(null, "viewBox", "0 0 " + Fc + " " + Ic);
			}
		},
		{
			key: "getSvgString",
			value: function(io) {
				var Pc = this;
				return new Promise((function(Fc) {
					var Ic = Pc.w, Lc = io || Ic.config.chart.toolbar.export.scale || Ic.config.chart.toolbar.export.width / Ic.globals.svgWidth;
					Lc || (Lc = 1);
					var Rc = Ic.globals.svgWidth * Lc, zc = Ic.globals.svgHeight * Lc, Bc = Ic.globals.dom.elWrap.cloneNode(!0);
					Bc.style.width = Rc + "px", Bc.style.height = zc + "px";
					var Vc = new XMLSerializer().serializeToString(Bc), Hc = `
        <svg xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          class="apexcharts-svg"
          xmlns:data="ApexChartsNS"
          transform="translate(0, 0)"
          width="${Ic.globals.svgWidth}px" height="${Ic.globals.svgHeight}px">
          <foreignObject width="100%" height="100%">
            <div xmlns="http://www.w3.org/1999/xhtml" style="width:${Rc}px; height:${zc}px;">
            <style type="text/css">
              .apexcharts-tooltip, .apexcharts-toolbar, .apexcharts-xaxistooltip, .apexcharts-yaxistooltip, .apexcharts-xcrosshairs, .apexcharts-ycrosshairs, .apexcharts-zoom-rect, .apexcharts-selection-rect {
                display: none;
              }
            </style>
              ${Vc}
            </div>
          </foreignObject>
        </svg>
      `, Uc = Pc.svgStringToNode(Hc);
					Lc !== 1 && Pc.scaleSvgNode(Uc, Lc), Pc.convertImagesToBase64(Uc).then((function() {
						Hc = new XMLSerializer().serializeToString(Uc), Fc(Hc.replace(/&nbsp;/g, "&#160;"));
					}));
				}));
			}
		},
		{
			key: "convertImagesToBase64",
			value: function(io) {
				var Pc = this, Fc = io.getElementsByTagName("image"), Ic = Array.from(Fc).map((function(io) {
					var Fc = io.getAttributeNS("http://www.w3.org/1999/xlink", "href");
					return Fc && !Fc.startsWith("data:") ? Pc.getBase64FromUrl(Fc).then((function(Pc) {
						io.setAttributeNS("http://www.w3.org/1999/xlink", "href", Pc);
					})).catch((function(io) {
						console.error("Error converting image to base64:", io);
					})) : Promise.resolve();
				}));
				return Promise.all(Ic);
			}
		},
		{
			key: "getBase64FromUrl",
			value: function(io) {
				return new Promise((function(Pc, Fc) {
					var Ic = new Image();
					Ic.crossOrigin = "Anonymous", Ic.onload = function() {
						var io = document.createElement("canvas");
						io.width = Ic.width, io.height = Ic.height, io.getContext("2d").drawImage(Ic, 0, 0), Pc(io.toDataURL());
					}, Ic.onerror = Fc, Ic.src = io;
				}));
			}
		},
		{
			key: "svgUrl",
			value: function() {
				var io = this;
				return new Promise((function(Pc) {
					io.getSvgString().then((function(io) {
						var Fc = new Blob([io], { type: "image/svg+xml;charset=utf-8" });
						Pc(URL.createObjectURL(Fc));
					}));
				}));
			}
		},
		{
			key: "dataURI",
			value: function(io) {
				var Pc = this;
				return new Promise((function(Fc) {
					var Ic = Pc.w, Lc = io ? io.scale || io.width / Ic.globals.svgWidth : 1, Rc = document.createElement("canvas");
					Rc.width = Ic.globals.svgWidth * Lc, Rc.height = parseInt(Ic.globals.dom.elWrap.style.height, 10) * Lc;
					var zc = Ic.config.chart.background !== "transparent" && Ic.config.chart.background ? Ic.config.chart.background : "#fff", Bc = Rc.getContext("2d");
					Bc.fillStyle = zc, Bc.fillRect(0, 0, Rc.width * Lc, Rc.height * Lc), Pc.getSvgString(Lc).then((function(io) {
						var Pc = "data:image/svg+xml," + encodeURIComponent(io), Ic = new Image();
						Ic.crossOrigin = "anonymous", Ic.onload = function() {
							Bc.drawImage(Ic, 0, 0), Rc.msToBlob ? Fc({ blob: Rc.msToBlob() }) : Fc({ imgURI: Rc.toDataURL("image/png") });
						}, Ic.src = Pc;
					}));
				}));
			}
		},
		{
			key: "exportToSVG",
			value: function() {
				var io = this;
				this.svgUrl().then((function(Pc) {
					io.triggerDownload(Pc, io.w.config.chart.toolbar.export.svg.filename, ".svg");
				}));
			}
		},
		{
			key: "exportToPng",
			value: function() {
				var io = this, Pc = this.w.config.chart.toolbar.export.scale, Fc = this.w.config.chart.toolbar.export.width, Ic = Pc ? { scale: Pc } : Fc ? { width: Fc } : void 0;
				this.dataURI(Ic).then((function(Pc) {
					var Fc = Pc.imgURI, Ic = Pc.blob;
					Ic ? navigator.msSaveOrOpenBlob(Ic, io.w.globals.chartID + ".png") : io.triggerDownload(Fc, io.w.config.chart.toolbar.export.png.filename, ".png");
				}));
			}
		},
		{
			key: "exportToCSV",
			value: function(io) {
				var Pc = this, Fc = io.series, Ic = io.fileName, Lc = io.columnDelimiter, Rc = Lc === void 0 ? "," : Lc, zc = io.lineDelimiter, Bc = zc === void 0 ? "\n" : zc, Vc = this.w;
				Fc || (Fc = Vc.config.series);
				var Hc = [], Uc = [], Wc = "", Gc = Vc.globals.series.map((function(io, Pc) {
					return Vc.globals.collapsedSeriesIndices.indexOf(Pc) === -1 ? io : [];
				})), Kc = function(io) {
					return typeof Vc.config.chart.toolbar.export.csv.categoryFormatter == "function" ? Vc.config.chart.toolbar.export.csv.categoryFormatter(io) : Vc.config.xaxis.type === "datetime" && String(io).length >= 10 ? new Date(io).toDateString() : v.isNumber(io) ? io : io.split(Rc).join("");
				}, qc = function(io) {
					return typeof Vc.config.chart.toolbar.export.csv.valueFormatter == "function" ? Vc.config.chart.toolbar.export.csv.valueFormatter(io) : io;
				}, Jc = Math.max.apply(Math, f(Fc.map((function(io) {
					return io.data ? io.data.length : 0;
				})))), Xc = new $i(this.ctx), Zc = new Ri(this.ctx), Qc = function(io) {
					var Fc = "";
					if (Vc.globals.axisCharts) {
						if (Vc.config.xaxis.type === "category" || Vc.config.xaxis.convertedCatToNumeric) if (Vc.globals.isBarHorizontal) {
							var Ic = Vc.globals.yLabelFormatters[0], Lc = new Zi(Pc.ctx).getActiveConfigSeriesIndex();
							Fc = Ic(Vc.globals.labels[io], {
								seriesIndex: Lc,
								dataPointIndex: io,
								w: Vc
							});
						} else Fc = Zc.getLabel(Vc.globals.labels, Vc.globals.timescaleLabels, 0, io).text;
						Vc.config.xaxis.type === "datetime" && (Vc.config.xaxis.categories.length ? Fc = Vc.config.xaxis.categories[io] : Vc.config.labels.length && (Fc = Vc.config.labels[io]));
					} else Fc = Vc.config.labels[io];
					return Fc === null ? "nullvalue" : (Array.isArray(Fc) && (Fc = Fc.join(" ")), v.isNumber(Fc) ? Fc : Fc.split(Rc).join(""));
				}, el = function(io, Pc) {
					if (Hc.length && Pc === 0 && Uc.push(Hc.join(Rc)), io.data) {
						io.data = io.data.length && io.data || f(Array(Jc)).map((function() {
							return "";
						}));
						for (var Ic = 0; Ic < io.data.length; Ic++) {
							Hc = [];
							var Lc = Qc(Ic);
							if (Lc !== "nullvalue") {
								if (Lc || (Xc.isFormatXY() ? Lc = Fc[Pc].data[Ic].x : Xc.isFormat2DArray() && (Lc = Fc[Pc].data[Ic] ? Fc[Pc].data[Ic][0] : "")), Pc === 0) {
									Hc.push(Kc(Lc));
									for (var zc = 0; zc < Vc.globals.series.length; zc++) {
										var Bc, Wc = Xc.isFormatXY() ? (Bc = Fc[zc].data[Ic]) == null ? void 0 : Bc.y : Gc[zc][Ic];
										Hc.push(qc(Wc));
									}
								}
								(Vc.config.chart.type === "candlestick" || io.type && io.type === "candlestick") && (Hc.pop(), Hc.push(Vc.globals.seriesCandleO[Pc][Ic]), Hc.push(Vc.globals.seriesCandleH[Pc][Ic]), Hc.push(Vc.globals.seriesCandleL[Pc][Ic]), Hc.push(Vc.globals.seriesCandleC[Pc][Ic])), (Vc.config.chart.type === "boxPlot" || io.type && io.type === "boxPlot") && (Hc.pop(), Hc.push(Vc.globals.seriesCandleO[Pc][Ic]), Hc.push(Vc.globals.seriesCandleH[Pc][Ic]), Hc.push(Vc.globals.seriesCandleM[Pc][Ic]), Hc.push(Vc.globals.seriesCandleL[Pc][Ic]), Hc.push(Vc.globals.seriesCandleC[Pc][Ic])), Vc.config.chart.type === "rangeBar" && (Hc.pop(), Hc.push(Vc.globals.seriesRangeStart[Pc][Ic]), Hc.push(Vc.globals.seriesRangeEnd[Pc][Ic])), Hc.length && Uc.push(Hc.join(Rc));
							}
						}
					}
				};
				Hc.push(Vc.config.chart.toolbar.export.csv.headerCategory), Vc.config.chart.type === "boxPlot" ? (Hc.push("minimum"), Hc.push("q1"), Hc.push("median"), Hc.push("q3"), Hc.push("maximum")) : Vc.config.chart.type === "candlestick" ? (Hc.push("open"), Hc.push("high"), Hc.push("low"), Hc.push("close")) : Vc.config.chart.type === "rangeBar" ? (Hc.push("minimum"), Hc.push("maximum")) : Fc.map((function(io, Pc) {
					var Fc = (io.name ? io.name : `series-${Pc}`) + "";
					Vc.globals.axisCharts && Hc.push(Fc.split(Rc).join("") ? Fc.split(Rc).join("") : `series-${Pc}`);
				})), Vc.globals.axisCharts || (Hc.push(Vc.config.chart.toolbar.export.csv.headerValue), Uc.push(Hc.join(Rc))), Vc.globals.allSeriesHasEqualX || !Vc.globals.axisCharts || Vc.config.xaxis.categories.length || Vc.config.labels.length ? Fc.map((function(io, Pc) {
					Vc.globals.axisCharts ? el(io, Pc) : ((Hc = []).push(Kc(Vc.globals.labels[Pc])), Hc.push(qc(Gc[Pc])), Uc.push(Hc.join(Rc)));
				})) : function() {
					var io = /* @__PURE__ */ new Set(), Pc = {};
					Fc.forEach((function(Ic, Lc) {
						Ic?.data.forEach((function(Ic) {
							var Rc, zc;
							if (Xc.isFormatXY()) Rc = Ic.x, zc = Ic.y;
							else {
								if (!Xc.isFormat2DArray()) return;
								Rc = Ic[0], zc = Ic[1];
							}
							Pc[Rc] || (Pc[Rc] = Array(Fc.length).fill("")), Pc[Rc][Lc] = qc(zc), io.add(Rc);
						}));
					})), Hc.length && Uc.push(Hc.join(Rc)), Array.from(io).sort().forEach((function(io) {
						Uc.push([Kc(io), Pc[io].join(Rc)]);
					}));
				}(), Wc += Uc.join(Bc), this.triggerDownload("data:text/csv; charset=utf-8," + encodeURIComponent("﻿" + Wc), Ic || Vc.config.chart.toolbar.export.csv.filename, ".csv");
			}
		},
		{
			key: "triggerDownload",
			value: function(io, Pc, Fc) {
				var Ic = document.createElement("a");
				Ic.href = io, Ic.download = (Pc || this.w.globals.chartID) + Fc, document.body.appendChild(Ic), Ic.click(), document.body.removeChild(Ic);
			}
		}
	]), io;
}(), Qi = function() {
	function io(Pc, Fc) {
		i(this, io), this.ctx = Pc, this.elgrid = Fc, this.w = Pc.w;
		var Lc = this.w;
		this.axesUtils = new Ri(Pc), this.xaxisLabels = Lc.globals.labels.slice(), Lc.globals.timescaleLabels.length > 0 && !Lc.globals.isBarHorizontal && (this.xaxisLabels = Lc.globals.timescaleLabels.slice()), Lc.config.xaxis.overwriteCategories && (this.xaxisLabels = Lc.config.xaxis.overwriteCategories), this.drawnLabels = [], this.drawnLabelsRects = [], Lc.config.xaxis.position === "top" ? this.offY = 0 : this.offY = Lc.globals.gridHeight, this.offY += Lc.config.xaxis.axisBorder.offsetY, this.isCategoryBarHorizontal = Lc.config.chart.type === "bar" && Lc.config.plotOptions.bar.horizontal, this.xaxisFontSize = Lc.config.xaxis.labels.style.fontSize, this.xaxisFontFamily = Lc.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = Lc.config.xaxis.labels.style.colors, this.xaxisBorderWidth = Lc.config.xaxis.axisBorder.width, this.isCategoryBarHorizontal && (this.xaxisBorderWidth = Lc.config.yaxis[0].axisBorder.width.toString()), this.xaxisBorderWidth.indexOf("%") > -1 ? this.xaxisBorderWidth = Lc.globals.gridWidth * parseInt(this.xaxisBorderWidth, 10) / 100 : this.xaxisBorderWidth = parseInt(this.xaxisBorderWidth, 10), this.xaxisBorderHeight = Lc.config.xaxis.axisBorder.height, this.yaxis = Lc.config.yaxis[0];
	}
	return s(io, [
		{
			key: "drawXaxis",
			value: function() {
				var io = this.w, Pc = new Mi(this.ctx), Fc = Pc.group({
					class: "apexcharts-xaxis",
					transform: `translate(${io.config.xaxis.offsetX}, ${io.config.xaxis.offsetY})`
				}), Ic = Pc.group({
					class: "apexcharts-xaxis-texts-g",
					transform: `translate(${io.globals.translateXAxisX}, ${io.globals.translateXAxisY})`
				});
				Fc.add(Ic);
				for (var Lc = [], Rc = 0; Rc < this.xaxisLabels.length; Rc++) Lc.push(this.xaxisLabels[Rc]);
				if (this.drawXAxisLabelAndGroup(!0, Pc, Ic, Lc, io.globals.isXNumeric, (function(io, Pc) {
					return Pc;
				})), io.globals.hasXaxisGroups) {
					var zc = io.globals.groups;
					Lc = [];
					for (var Bc = 0; Bc < zc.length; Bc++) Lc.push(zc[Bc].title);
					var Vc = {};
					io.config.xaxis.group.style && (Vc.xaxisFontSize = io.config.xaxis.group.style.fontSize, Vc.xaxisFontFamily = io.config.xaxis.group.style.fontFamily, Vc.xaxisForeColors = io.config.xaxis.group.style.colors, Vc.fontWeight = io.config.xaxis.group.style.fontWeight, Vc.cssClass = io.config.xaxis.group.style.cssClass), this.drawXAxisLabelAndGroup(!1, Pc, Ic, Lc, !1, (function(io, Pc) {
						return zc[io].cols * Pc;
					}), Vc);
				}
				if (io.config.xaxis.title.text !== void 0) {
					var Hc = Pc.group({ class: "apexcharts-xaxis-title" }), Uc = Pc.drawText({
						x: io.globals.gridWidth / 2 + io.config.xaxis.title.offsetX,
						y: this.offY + parseFloat(this.xaxisFontSize) + (io.config.xaxis.position === "bottom" ? io.globals.xAxisLabelsHeight : -io.globals.xAxisLabelsHeight - 10) + io.config.xaxis.title.offsetY,
						text: io.config.xaxis.title.text,
						textAnchor: "middle",
						fontSize: io.config.xaxis.title.style.fontSize,
						fontFamily: io.config.xaxis.title.style.fontFamily,
						fontWeight: io.config.xaxis.title.style.fontWeight,
						foreColor: io.config.xaxis.title.style.color,
						cssClass: "apexcharts-xaxis-title-text " + io.config.xaxis.title.style.cssClass
					});
					Hc.add(Uc), Fc.add(Hc);
				}
				if (io.config.xaxis.axisBorder.show) {
					var Wc = io.globals.barPadForNumericAxis, Gc = Pc.drawLine(io.globals.padHorizontal + io.config.xaxis.axisBorder.offsetX - Wc, this.offY, this.xaxisBorderWidth + Wc, this.offY, io.config.xaxis.axisBorder.color, 0, this.xaxisBorderHeight);
					this.elgrid && this.elgrid.elGridBorders && io.config.grid.show ? this.elgrid.elGridBorders.add(Gc) : Fc.add(Gc);
				}
				return Fc;
			}
		},
		{
			key: "drawXAxisLabelAndGroup",
			value: function(io, Pc, Fc, Ic, Lc, Rc) {
				var zc, Bc = this, Vc = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : {}, Hc = [], Uc = [], Wc = this.w, Gc = Vc.xaxisFontSize || this.xaxisFontSize, Kc = Vc.xaxisFontFamily || this.xaxisFontFamily, qc = Vc.xaxisForeColors || this.xaxisForeColors, Jc = Vc.fontWeight || Wc.config.xaxis.labels.style.fontWeight, Yc = Vc.cssClass || Wc.config.xaxis.labels.style.cssClass, Xc = Wc.globals.padHorizontal, Zc = Ic.length, Qc = Wc.config.xaxis.type === "category" ? Wc.globals.dataPoints : Zc;
				if (Qc === 0 && Zc > Qc && (Qc = Zc), Lc) {
					var $c = Math.max(Number(Wc.config.xaxis.tickAmount) || 1, Qc > 1 ? Qc - 1 : Qc);
					zc = Wc.globals.gridWidth / Math.min($c, Zc - 1), Xc = Xc + Rc(0, zc) / 2 + Wc.config.xaxis.labels.offsetX;
				} else zc = Wc.globals.gridWidth / Qc, Xc = Xc + Rc(0, zc) + Wc.config.xaxis.labels.offsetX;
				for (var el = function(Lc) {
					var Vc = Xc - Rc(Lc, zc) / 2 + Wc.config.xaxis.labels.offsetX;
					Lc === 0 && Zc === 1 && zc / 2 === Xc && Qc === 1 && (Vc = Wc.globals.gridWidth / 2);
					var $c = Bc.axesUtils.getLabel(Ic, Wc.globals.timescaleLabels, Vc, Lc, Hc, Gc, io), el = 28;
					if (Wc.globals.rotateXLabels && io && (el = 22), Wc.config.xaxis.title.text && Wc.config.xaxis.position === "top" && (el += parseFloat(Wc.config.xaxis.title.style.fontSize) + 2), io || (el = el + parseFloat(Gc) + (Wc.globals.xAxisLabelsHeight - Wc.globals.xAxisGroupLabelsHeight) + (Wc.globals.rotateXLabels ? 10 : 0)), $c = Wc.config.xaxis.tickAmount !== void 0 && Wc.config.xaxis.tickAmount !== "dataPoints" && Wc.config.xaxis.type !== "datetime" ? Bc.axesUtils.checkLabelBasedOnTickamount(Lc, $c, Zc) : Bc.axesUtils.checkForOverflowingLabels(Lc, $c, Zc, Hc, Uc), Wc.config.xaxis.labels.show) {
						var tl = Pc.drawText({
							x: $c.x,
							y: Bc.offY + Wc.config.xaxis.labels.offsetY + el - (Wc.config.xaxis.position === "top" ? Wc.globals.xAxisHeight + Wc.config.xaxis.axisTicks.height - 2 : 0),
							text: $c.text,
							textAnchor: "middle",
							fontWeight: $c.isBold ? 600 : Jc,
							fontSize: Gc,
							fontFamily: Kc,
							foreColor: Array.isArray(qc) ? io && Wc.config.xaxis.convertedCatToNumeric ? qc[Wc.globals.minX + Lc - 1] : qc[Lc] : qc,
							isPlainText: !1,
							cssClass: (io ? "apexcharts-xaxis-label " : "apexcharts-xaxis-group-label ") + Yc
						});
						if (Fc.add(tl), tl.on("click", (function(io) {
							if (typeof Wc.config.chart.events.xAxisLabelClick == "function") {
								var Pc = Object.assign({}, Wc, { labelIndex: Lc });
								Wc.config.chart.events.xAxisLabelClick(io, Bc.ctx, Pc);
							}
						})), io) {
							var nl = document.createElementNS(Wc.globals.SVGNS, "title");
							nl.textContent = Array.isArray($c.text) ? $c.text.join(" ") : $c.text, tl.node.appendChild(nl), $c.text !== "" && (Hc.push($c.text), Uc.push($c));
						}
					}
					Lc < Zc - 1 && (Xc += Rc(Lc + 1, zc));
				}, tl = 0; tl <= Zc - 1; tl++) el(tl);
			}
		},
		{
			key: "drawXaxisInversed",
			value: function(io) {
				var Pc, Fc, Ic = this, Lc = this.w, Rc = new Mi(this.ctx), zc = Lc.config.yaxis[0].opposite ? Lc.globals.translateYAxisX[io] : 0, Bc = Rc.group({
					class: "apexcharts-yaxis apexcharts-xaxis-inversed",
					rel: io
				}), Vc = Rc.group({
					class: "apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g",
					transform: "translate(" + zc + ", 0)"
				});
				Bc.add(Vc);
				var Hc = [];
				if (Lc.config.yaxis[io].show) for (var Uc = 0; Uc < this.xaxisLabels.length; Uc++) Hc.push(this.xaxisLabels[Uc]);
				Pc = Lc.globals.gridHeight / Hc.length, Fc = -Pc / 2.2;
				var Wc = Lc.globals.yLabelFormatters[0], Gc = Lc.config.yaxis[0].labels;
				if (Gc.show) for (var Kc = function(zc) {
					var Bc = Hc[zc] === void 0 ? "" : Hc[zc];
					Bc = Wc(Bc, {
						seriesIndex: io,
						dataPointIndex: zc,
						w: Lc
					});
					var Uc = Ic.axesUtils.getYAxisForeColor(Gc.style.colors, io), Kc = 0;
					Array.isArray(Bc) && (Kc = Bc.length / 2 * parseInt(Gc.style.fontSize, 10));
					var qc = Gc.offsetX - 15, Jc = "end";
					Ic.yaxis.opposite && (Jc = "start"), Lc.config.yaxis[0].labels.align === "left" ? (qc = Gc.offsetX, Jc = "start") : Lc.config.yaxis[0].labels.align === "center" ? (qc = Gc.offsetX, Jc = "middle") : Lc.config.yaxis[0].labels.align === "right" && (Jc = "end");
					var Yc = Rc.drawText({
						x: qc,
						y: Fc + Pc + Gc.offsetY - Kc,
						text: Bc,
						textAnchor: Jc,
						foreColor: Array.isArray(Uc) ? Uc[zc] : Uc,
						fontSize: Gc.style.fontSize,
						fontFamily: Gc.style.fontFamily,
						fontWeight: Gc.style.fontWeight,
						isPlainText: !1,
						cssClass: "apexcharts-yaxis-label " + Gc.style.cssClass,
						maxWidth: Gc.maxWidth
					});
					Vc.add(Yc), Yc.on("click", (function(io) {
						if (typeof Lc.config.chart.events.xAxisLabelClick == "function") {
							var Pc = Object.assign({}, Lc, { labelIndex: zc });
							Lc.config.chart.events.xAxisLabelClick(io, Ic.ctx, Pc);
						}
					}));
					var Xc = document.createElementNS(Lc.globals.SVGNS, "title");
					if (Xc.textContent = Array.isArray(Bc) ? Bc.join(" ") : Bc, Yc.node.appendChild(Xc), Lc.config.yaxis[io].labels.rotate !== 0) {
						var Zc = Rc.rotateAroundCenter(Yc.node);
						Yc.node.setAttribute("transform", `rotate(${Lc.config.yaxis[io].labels.rotate} 0 ${Zc.y})`);
					}
					Fc += Pc;
				}, qc = 0; qc <= Hc.length - 1; qc++) Kc(qc);
				if (Lc.config.yaxis[0].title.text !== void 0) {
					var Jc = Rc.group({
						class: "apexcharts-yaxis-title apexcharts-xaxis-title-inversed",
						transform: "translate(" + zc + ", 0)"
					}), Yc = Rc.drawText({
						x: Lc.config.yaxis[0].title.offsetX,
						y: Lc.globals.gridHeight / 2 + Lc.config.yaxis[0].title.offsetY,
						text: Lc.config.yaxis[0].title.text,
						textAnchor: "middle",
						foreColor: Lc.config.yaxis[0].title.style.color,
						fontSize: Lc.config.yaxis[0].title.style.fontSize,
						fontWeight: Lc.config.yaxis[0].title.style.fontWeight,
						fontFamily: Lc.config.yaxis[0].title.style.fontFamily,
						cssClass: "apexcharts-yaxis-title-text " + Lc.config.yaxis[0].title.style.cssClass
					});
					Jc.add(Yc), Bc.add(Jc);
				}
				var Xc = 0;
				this.isCategoryBarHorizontal && Lc.config.yaxis[0].opposite && (Xc = Lc.globals.gridWidth);
				var Zc = Lc.config.xaxis.axisBorder;
				if (Zc.show) {
					var Qc = Rc.drawLine(Lc.globals.padHorizontal + Zc.offsetX + Xc, 1 + Zc.offsetY, Lc.globals.padHorizontal + Zc.offsetX + Xc, Lc.globals.gridHeight + Zc.offsetY, Zc.color, 0);
					this.elgrid && this.elgrid.elGridBorders && Lc.config.grid.show ? this.elgrid.elGridBorders.add(Qc) : Bc.add(Qc);
				}
				return Lc.config.yaxis[0].axisTicks.show && this.axesUtils.drawYAxisTicks(Xc, Hc.length, Lc.config.yaxis[0].axisBorder, Lc.config.yaxis[0].axisTicks, 0, Pc, Bc), Bc;
			}
		},
		{
			key: "drawXaxisTicks",
			value: function(io, Pc, Fc) {
				var Ic = this.w, Lc = io;
				if (!(io < 0 || io - 2 > Ic.globals.gridWidth)) {
					var Rc = this.offY + Ic.config.xaxis.axisTicks.offsetY;
					if (Pc = Pc + Rc + Ic.config.xaxis.axisTicks.height, Ic.config.xaxis.position === "top" && (Pc = Rc - Ic.config.xaxis.axisTicks.height), Ic.config.xaxis.axisTicks.show) {
						var zc = new Mi(this.ctx).drawLine(io + Ic.config.xaxis.axisTicks.offsetX, Rc + Ic.config.xaxis.offsetY, Lc + Ic.config.xaxis.axisTicks.offsetX, Pc + Ic.config.xaxis.offsetY, Ic.config.xaxis.axisTicks.color);
						Fc.add(zc), zc.node.classList.add("apexcharts-xaxis-tick");
					}
				}
			}
		},
		{
			key: "getXAxisTicksPositions",
			value: function() {
				var io = this.w, Pc = [], Fc = this.xaxisLabels.length, Ic = io.globals.padHorizontal;
				if (io.globals.timescaleLabels.length > 0) for (var Lc = 0; Lc < Fc; Lc++) Ic = this.xaxisLabels[Lc].position, Pc.push(Ic);
				else for (var Rc = Fc, zc = 0; zc < Rc; zc++) {
					var Bc = Rc;
					io.globals.isXNumeric && io.config.chart.type !== "bar" && --Bc, Ic += io.globals.gridWidth / Bc, Pc.push(Ic);
				}
				return Pc;
			}
		},
		{
			key: "xAxisLabelCorrections",
			value: function() {
				var io = this.w, Pc = new Mi(this.ctx), Fc = io.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"), Ic = io.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text:not(.apexcharts-xaxis-group-label)"), Lc = io.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"), Rc = io.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text tspan");
				if (io.globals.rotateXLabels || io.config.xaxis.labels.rotateAlways) for (var zc = 0; zc < Ic.length; zc++) {
					var Bc = Pc.rotateAroundCenter(Ic[zc]);
					--Bc.y, Bc.x += 1, Ic[zc].setAttribute("transform", `rotate(${io.config.xaxis.labels.rotate} ${Bc.x} ${Bc.y})`), Ic[zc].setAttribute("text-anchor", "end"), Fc.setAttribute("transform", "translate(0, -10)");
					var Vc = Ic[zc].childNodes;
					io.config.xaxis.labels.trim && Array.prototype.forEach.call(Vc, (function(Fc) {
						Pc.placeTextWithEllipsis(Fc, Fc.textContent, io.globals.xAxisLabelsHeight - (io.config.legend.position === "bottom" ? 20 : 10));
					}));
				}
				else (function() {
					for (var Fc = io.globals.gridWidth / (io.globals.labels.length + 1), Lc = 0; Lc < Ic.length; Lc++) {
						var Rc = Ic[Lc].childNodes;
						io.config.xaxis.labels.trim && io.config.xaxis.type !== "datetime" && Array.prototype.forEach.call(Rc, (function(io) {
							Pc.placeTextWithEllipsis(io, io.textContent, Fc);
						}));
					}
				})();
				if (Lc.length > 0) {
					var Hc = Lc[Lc.length - 1].getBBox(), Uc = Lc[0].getBBox();
					Hc.x < -20 && Lc[Lc.length - 1].parentNode.removeChild(Lc[Lc.length - 1]), Uc.x + Uc.width > io.globals.gridWidth && !io.globals.isBarHorizontal && Lc[0].parentNode.removeChild(Lc[0]);
					for (var Wc = 0; Wc < Rc.length; Wc++) Pc.placeTextWithEllipsis(Rc[Wc], Rc[Wc].textContent, io.config.yaxis[0].labels.maxWidth - (io.config.yaxis[0].title.text ? 2 * parseFloat(io.config.yaxis[0].title.style.fontSize) : 0) - 15);
				}
			}
		}
	]), io;
}(), Ki = function() {
	function io(Pc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w;
		var Fc = this.w;
		this.xaxisLabels = Fc.globals.labels.slice(), this.axesUtils = new Ri(Pc), this.isRangeBar = Fc.globals.seriesRange.length && Fc.globals.isBarHorizontal, Fc.globals.timescaleLabels.length > 0 && (this.xaxisLabels = Fc.globals.timescaleLabels.slice());
	}
	return s(io, [
		{
			key: "drawGridArea",
			value: function() {
				var io = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, Pc = this.w, Fc = new Mi(this.ctx);
				io || (io = Fc.group({ class: "apexcharts-grid" }));
				var Ic = Fc.drawLine(Pc.globals.padHorizontal, 1, Pc.globals.padHorizontal, Pc.globals.gridHeight, "transparent"), Lc = Fc.drawLine(Pc.globals.padHorizontal, Pc.globals.gridHeight, Pc.globals.gridWidth, Pc.globals.gridHeight, "transparent");
				return io.add(Lc), io.add(Ic), io;
			}
		},
		{
			key: "drawGrid",
			value: function() {
				if (this.w.globals.axisCharts) {
					var io = this.renderGrid();
					return this.drawGridArea(io.el), io;
				}
				return null;
			}
		},
		{
			key: "createGridMask",
			value: function() {
				var io = this.w, Pc = io.globals, Fc = new Mi(this.ctx), Ic = Array.isArray(io.config.stroke.width) ? Math.max.apply(Math, f(io.config.stroke.width)) : io.config.stroke.width, Lc = function(io) {
					var Fc = document.createElementNS(Pc.SVGNS, "clipPath");
					return Fc.setAttribute("id", io), Fc;
				};
				Pc.dom.elGridRectMask = Lc(`gridRectMask${Pc.cuid}`), Pc.dom.elGridRectBarMask = Lc(`gridRectBarMask${Pc.cuid}`), Pc.dom.elGridRectMarkerMask = Lc(`gridRectMarkerMask${Pc.cuid}`), Pc.dom.elForecastMask = Lc(`forecastMask${Pc.cuid}`), Pc.dom.elNonForecastMask = Lc(`nonForecastMask${Pc.cuid}`);
				var Rc = 0, zc = 0;
				([
					"bar",
					"rangeBar",
					"candlestick",
					"boxPlot"
				].includes(io.config.chart.type) || io.globals.comboBarCount > 0) && io.globals.isXNumeric && !io.globals.isBarHorizontal && (Rc = Math.max(io.config.grid.padding.left, Pc.barPadForNumericAxis), zc = Math.max(io.config.grid.padding.right, Pc.barPadForNumericAxis)), Pc.dom.elGridRect = Fc.drawRect(-Ic / 2 - 2, -Ic / 2 - 2, Pc.gridWidth + Ic + 4, Pc.gridHeight + Ic + 4, 0, "#fff"), Pc.dom.elGridRectBar = Fc.drawRect(-Ic / 2 - Rc - 2, -Ic / 2 - 2, Pc.gridWidth + Ic + zc + Rc + 4, Pc.gridHeight + Ic + 4, 0, "#fff");
				var Bc = io.globals.markers.largestSize;
				Pc.dom.elGridRectMarker = Fc.drawRect(-Bc, -Bc, Pc.gridWidth + 2 * Bc, Pc.gridHeight + 2 * Bc, 0, "#fff"), Pc.dom.elGridRectMask.appendChild(Pc.dom.elGridRect.node), Pc.dom.elGridRectBarMask.appendChild(Pc.dom.elGridRectBar.node), Pc.dom.elGridRectMarkerMask.appendChild(Pc.dom.elGridRectMarker.node);
				var Vc = Pc.dom.baseEl.querySelector("defs");
				Vc.appendChild(Pc.dom.elGridRectMask), Vc.appendChild(Pc.dom.elGridRectBarMask), Vc.appendChild(Pc.dom.elGridRectMarkerMask), Vc.appendChild(Pc.dom.elForecastMask), Vc.appendChild(Pc.dom.elNonForecastMask);
			}
		},
		{
			key: "_drawGridLines",
			value: function(io) {
				var Pc = io.i, Fc = io.x1, Ic = io.y1, Lc = io.x2, Rc = io.y2, zc = io.xCount, Bc = io.parent, Vc = this.w;
				if (!(Pc === 0 && Vc.globals.skipFirstTimelinelabel || Pc === zc - 1 && Vc.globals.skipLastTimelinelabel && !Vc.config.xaxis.labels.formatter || Vc.config.chart.type === "radar")) {
					Vc.config.grid.xaxis.lines.show && this._drawGridLine({
						i: Pc,
						x1: Fc,
						y1: Ic,
						x2: Lc,
						y2: Rc,
						xCount: zc,
						parent: Bc
					});
					var Hc = 0;
					if (Vc.globals.hasXaxisGroups && Vc.config.xaxis.tickPlacement === "between") {
						var Uc = Vc.globals.groups;
						if (Uc) {
							for (var Wc = 0, Gc = 0; Wc < Pc && Gc < Uc.length; Gc++) Wc += Uc[Gc].cols;
							Wc === Pc && (Hc = .6 * Vc.globals.xAxisLabelsHeight);
						}
					}
					new Qi(this.ctx).drawXaxisTicks(Fc, Hc, Vc.globals.dom.elGraphical);
				}
			}
		},
		{
			key: "_drawGridLine",
			value: function(io) {
				var Pc = io.i, Fc = io.x1, Ic = io.y1, Lc = io.x2, Rc = io.y2, zc = io.xCount, Bc = io.parent, Vc = this.w, Hc = Bc.node.classList.contains("apexcharts-gridlines-horizontal"), Uc = Vc.globals.barPadForNumericAxis, Wc = Ic === 0 && Rc === 0 || Fc === 0 && Lc === 0 || Ic === Vc.globals.gridHeight && Rc === Vc.globals.gridHeight || Vc.globals.isBarHorizontal && (Pc === 0 || Pc === zc - 1), Gc = new Mi(this).drawLine(Fc - (Hc ? Uc : 0), Ic, Lc + (Hc ? Uc : 0), Rc, Vc.config.grid.borderColor, Vc.config.grid.strokeDashArray);
				Gc.node.classList.add("apexcharts-gridline"), Wc && Vc.config.grid.show ? this.elGridBorders.add(Gc) : Bc.add(Gc);
			}
		},
		{
			key: "_drawGridBandRect",
			value: function(io) {
				var Pc = io.c, Fc = io.x1, Ic = io.y1, Lc = io.x2, Rc = io.y2, zc = io.type, Bc = this.w, Vc = new Mi(this.ctx), Hc = Bc.globals.barPadForNumericAxis, Uc = Bc.config.grid[zc].colors[Pc], Wc = Vc.drawRect(Fc - (zc === "row" ? Hc : 0), Ic, Lc + (zc === "row" ? 2 * Hc : 0), Rc, 0, Uc, Bc.config.grid[zc].opacity);
				this.elg.add(Wc), Wc.attr("clip-path", `url(#gridRectMask${Bc.globals.cuid})`), Wc.node.classList.add(`apexcharts-grid-${zc}`);
			}
		},
		{
			key: "_drawXYLines",
			value: function(io) {
				var Pc = this, Fc = io.xCount, Ic = io.tickAmount, Lc = this.w;
				if (Lc.config.grid.xaxis.lines.show || Lc.config.xaxis.axisTicks.show) {
					var Rc, zc = Lc.globals.padHorizontal, Bc = Lc.globals.gridHeight;
					Lc.globals.timescaleLabels.length ? function(io) {
						for (var Ic = io.xC, Lc = io.x1, Rc = io.y1, zc = io.x2, Bc = io.y2, Vc = 0; Vc < Ic; Vc++) Lc = Pc.xaxisLabels[Vc].position, zc = Pc.xaxisLabels[Vc].position, Pc._drawGridLines({
							i: Vc,
							x1: Lc,
							y1: Rc,
							x2: zc,
							y2: Bc,
							xCount: Fc,
							parent: Pc.elgridLinesV
						});
					}({
						xC: Fc,
						x1: zc,
						y1: 0,
						x2: Rc,
						y2: Bc
					}) : (Lc.globals.isXNumeric && (Fc = Lc.globals.xAxisScale.result.length), function(io) {
						for (var Ic = io.xC, Rc = io.x1, zc = io.y1, Bc = io.x2, Vc = io.y2, Hc = 0; Hc < Ic + (Lc.globals.isXNumeric ? 0 : 1); Hc++) Hc === 0 && Ic === 1 && Lc.globals.dataPoints === 1 && (Bc = Rc = Lc.globals.gridWidth / 2), Pc._drawGridLines({
							i: Hc,
							x1: Rc,
							y1: zc,
							x2: Bc,
							y2: Vc,
							xCount: Fc,
							parent: Pc.elgridLinesV
						}), Bc = Rc += Lc.globals.gridWidth / (Lc.globals.isXNumeric ? Ic - 1 : Ic);
					}({
						xC: Fc,
						x1: zc,
						y1: 0,
						x2: Rc,
						y2: Bc
					}));
				}
				if (Lc.config.grid.yaxis.lines.show) {
					var Vc = 0, Hc = 0, Uc = Lc.globals.gridWidth, Wc = Ic + 1;
					this.isRangeBar && (Wc = Lc.globals.labels.length);
					for (var Gc = 0; Gc < Wc + (this.isRangeBar ? 1 : 0); Gc++) this._drawGridLine({
						i: Gc,
						xCount: Wc + (this.isRangeBar ? 1 : 0),
						x1: 0,
						y1: Vc,
						x2: Uc,
						y2: Hc,
						parent: this.elgridLinesH
					}), Hc = Vc += Lc.globals.gridHeight / (this.isRangeBar ? Wc : Ic);
				}
			}
		},
		{
			key: "_drawInvertedXYLines",
			value: function(io) {
				var Pc = io.xCount, Fc = this.w;
				if (Fc.config.grid.xaxis.lines.show || Fc.config.xaxis.axisTicks.show) for (var Ic, Lc = Fc.globals.padHorizontal, Rc = Fc.globals.gridHeight, zc = 0; zc < Pc + 1; zc++) Fc.config.grid.xaxis.lines.show && this._drawGridLine({
					i: zc,
					xCount: Pc + 1,
					x1: Lc,
					y1: 0,
					x2: Ic,
					y2: Rc,
					parent: this.elgridLinesV
				}), new Qi(this.ctx).drawXaxisTicks(Lc, 0, Fc.globals.dom.elGraphical), Ic = Lc += Fc.globals.gridWidth / Pc;
				if (Fc.config.grid.yaxis.lines.show) for (var Bc = 0, Vc = 0, Hc = Fc.globals.gridWidth, Uc = 0; Uc < Fc.globals.dataPoints + 1; Uc++) this._drawGridLine({
					i: Uc,
					xCount: Fc.globals.dataPoints + 1,
					x1: 0,
					y1: Bc,
					x2: Hc,
					y2: Vc,
					parent: this.elgridLinesH
				}), Vc = Bc += Fc.globals.gridHeight / Fc.globals.dataPoints;
			}
		},
		{
			key: "renderGrid",
			value: function() {
				var io = this.w, Pc = io.globals, Fc = new Mi(this.ctx);
				this.elg = Fc.group({ class: "apexcharts-grid" }), this.elgridLinesH = Fc.group({ class: "apexcharts-gridlines-horizontal" }), this.elgridLinesV = Fc.group({ class: "apexcharts-gridlines-vertical" }), this.elGridBorders = Fc.group({ class: "apexcharts-grid-borders" }), this.elg.add(this.elgridLinesH), this.elg.add(this.elgridLinesV), io.config.grid.show || (this.elgridLinesV.hide(), this.elgridLinesH.hide(), this.elGridBorders.hide());
				for (var Ic = 0; Ic < Pc.seriesYAxisMap.length && Pc.ignoreYAxisIndexes.includes(Ic);) Ic++;
				Ic === Pc.seriesYAxisMap.length && (Ic = 0);
				var Lc, Rc = Pc.yAxisScale[Ic].result.length - 1;
				if (!Pc.isBarHorizontal || this.isRangeBar) {
					var zc, Bc, Vc;
					Lc = this.xaxisLabels.length, this.isRangeBar && (Rc = Pc.labels.length, io.config.xaxis.tickAmount && io.config.xaxis.labels.formatter && (Lc = io.config.xaxis.tickAmount), ((zc = Pc.yAxisScale) == null || (Bc = zc[Ic]) == null || (Vc = Bc.result) == null ? void 0 : Vc.length) > 0 && io.config.xaxis.type !== "datetime" && (Lc = Pc.yAxisScale[Ic].result.length - 1)), this._drawXYLines({
						xCount: Lc,
						tickAmount: Rc
					});
				} else Lc = Rc, Rc = Pc.xTickAmount, this._drawInvertedXYLines({
					xCount: Lc,
					tickAmount: Rc
				});
				return this.drawGridBands(Lc, Rc), {
					el: this.elg,
					elGridBorders: this.elGridBorders,
					xAxisTickWidth: Pc.gridWidth / Lc
				};
			}
		},
		{
			key: "drawGridBands",
			value: function(io, Pc) {
				var Fc, Ic, Lc = this, Rc = this.w;
				if (((Fc = Rc.config.grid.row.colors) == null ? void 0 : Fc.length) > 0 && function(io, Fc, Ic, zc, Bc, Vc) {
					for (var Hc = 0, Uc = 0; Hc < Fc; Hc++, Uc++) Uc >= Rc.config.grid[io].colors.length && (Uc = 0), Lc._drawGridBandRect({
						c: Uc,
						x1: Ic,
						y1: zc,
						x2: Bc,
						y2: Vc,
						type: io
					}), zc += Rc.globals.gridHeight / Pc;
				}("row", Pc, 0, 0, Rc.globals.gridWidth, Rc.globals.gridHeight / Pc), ((Ic = Rc.config.grid.column.colors) == null ? void 0 : Ic.length) > 0) {
					var zc = Rc.globals.isBarHorizontal || Rc.config.xaxis.tickPlacement !== "on" || Rc.config.xaxis.type !== "category" && !Rc.config.xaxis.convertedCatToNumeric ? io : io - 1;
					Rc.globals.isXNumeric && (zc = Rc.globals.xAxisScale.result.length - 1);
					for (var Bc = Rc.globals.padHorizontal, Vc = Rc.globals.padHorizontal + Rc.globals.gridWidth / zc, Hc = Rc.globals.gridHeight, Uc = 0, Wc = 0; Uc < io; Uc++, Wc++) {
						var Gc;
						Wc >= Rc.config.grid.column.colors.length && (Wc = 0), Rc.config.xaxis.type === "datetime" && (Bc = this.xaxisLabels[Uc].position, Vc = (((Gc = this.xaxisLabels[Uc + 1]) == null ? void 0 : Gc.position) || Rc.globals.gridWidth) - this.xaxisLabels[Uc].position), this._drawGridBandRect({
							c: Wc,
							x1: Bc,
							y1: 0,
							x2: Vc,
							y2: Hc,
							type: "column"
						}), Bc += Rc.globals.gridWidth / zc;
					}
				}
			}
		}
	]), io;
}(), ta = function() {
	function io(Pc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w, this.coreUtils = new Pi(this.ctx);
	}
	return s(io, [
		{
			key: "niceScale",
			value: function(io, Pc) {
				var Fc, Ic, Lc, Rc, zc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, Bc = 1e-11, Vc = this.w, Hc = Vc.globals;
				Hc.isBarHorizontal ? (Fc = Vc.config.xaxis, Ic = Math.max((Hc.svgWidth - 100) / 25, 2)) : (Fc = Vc.config.yaxis[zc], Ic = Math.max((Hc.svgHeight - 100) / 15, 2)), v.isNumber(Ic) || (Ic = 10), Lc = Fc.min !== void 0 && Fc.min !== null, Rc = Fc.max !== void 0 && Fc.min !== null;
				var Uc = Fc.stepSize !== void 0 && Fc.stepSize !== null, Wc = Fc.tickAmount !== void 0 && Fc.tickAmount !== null, Gc = Wc ? Fc.tickAmount : Hc.niceScaleDefaultTicks[Math.min(Math.round(Ic / 2), Hc.niceScaleDefaultTicks.length - 1)];
				if (Hc.isMultipleYAxis && !Wc && Hc.multiAxisTickAmount > 0 && (Gc = Hc.multiAxisTickAmount, Wc = !0), Gc = Gc === "dataPoints" ? Hc.dataPoints - 1 : Math.abs(Math.round(Gc)), (io === Number.MIN_VALUE && Pc === 0 || !v.isNumber(io) && !v.isNumber(Pc) || io === Number.MIN_VALUE && Pc === -Number.MAX_VALUE) && (io = v.isNumber(Fc.min) ? Fc.min : 0, Pc = v.isNumber(Fc.max) ? Fc.max : io + Gc, Hc.allSeriesCollapsed = !1), io > Pc) {
					console.warn("axis.min cannot be greater than axis.max: swapping min and max");
					var Kc = Pc;
					Pc = io, io = Kc;
				} else io === Pc && (io = io === 0 ? 0 : io - 1, Pc = Pc === 0 ? 2 : Pc + 1);
				var qc = [];
				Gc < 1 && (Gc = 1);
				var Jc = Gc, Yc = Math.abs(Pc - io);
				!Lc && io > 0 && io / Yc < .15 && (io = 0, Lc = !0), !Rc && Pc < 0 && -Pc / Yc < .15 && (Pc = 0, Rc = !0);
				var Xc = (Yc = Math.abs(Pc - io)) / Jc, Zc = Xc, Qc = Math.floor(Math.log10(Zc)), el = Math.pow(10, Qc), tl = Math.ceil(Zc / el);
				if (Xc = Zc = (tl = Hc.niceScaleAllowedMagMsd[Hc.yValueDecimal === 0 ? 0 : 1][tl]) * el, Hc.isBarHorizontal && Fc.stepSize && Fc.type !== "datetime" ? (Xc = Fc.stepSize, Uc = !0) : Uc && (Xc = Fc.stepSize), Uc && Fc.forceNiceScale) {
					var nl = Math.floor(Math.log10(Xc));
					Xc *= Math.pow(10, Qc - nl);
				}
				if (Lc && Rc) {
					var rl = Yc / Jc;
					if (Wc) if (Uc) if (v.mod(Yc, Xc) != 0) {
						var il = v.getGCD(Xc, rl);
						Xc = rl / il < 10 ? il : rl;
					} else v.mod(Xc, rl) == 0 ? Xc = rl : (rl = Xc, Wc = !1);
					else Xc = rl;
					else if (Uc) v.mod(Yc, Xc) == 0 ? rl = Xc : Xc = rl;
					else if (v.mod(Yc, Xc) == 0) rl = Xc;
					else {
						rl = Yc / (Jc = Math.ceil(Yc / Xc));
						var al = v.getGCD(Yc, Xc);
						Yc / al < Ic && (rl = al), Xc = rl;
					}
					Jc = Math.round(Yc / Xc);
				} else {
					if (Lc || Rc) {
						if (Rc) if (Wc) io = Pc - Xc * Jc;
						else {
							var ol = io;
							io = Xc * Math.floor(io / Xc), Math.abs(Pc - io) / v.getGCD(Yc, Xc) > Ic && (io = Pc - Xc * Gc, io += Xc * Math.floor((ol - io) / Xc));
						}
						else if (Lc) if (Wc) Pc = io + Xc * Jc;
						else {
							var sl = Pc;
							Pc = Xc * Math.ceil(Pc / Xc), Math.abs(Pc - io) / v.getGCD(Yc, Xc) > Ic && (Pc = io + Xc * Gc, Pc += Xc * Math.ceil((sl - Pc) / Xc));
						}
					} else if (Hc.isMultipleYAxis && Wc) {
						var cl = Xc * Math.floor(io / Xc), ll = cl + Xc * Jc;
						ll < Pc && (Xc *= 2), ll = Pc, Pc = (io = cl) + Xc * Jc, Yc = Math.abs(Pc - io), io > 0 && io < Math.abs(ll - Pc) && (io = 0, Pc = Xc * Jc), Pc < 0 && -Pc < Math.abs(cl - io) && (Pc = 0, io = -Xc * Jc);
					} else io = Xc * Math.floor(io / Xc), Pc = Xc * Math.ceil(Pc / Xc);
					Yc = Math.abs(Pc - io), Xc = v.getGCD(Yc, Xc), Jc = Math.round(Yc / Xc);
				}
				if (Wc || Lc || Rc || (Jc = Math.ceil((Yc - Bc) / (Xc + Bc))) > 16 && v.getPrimeFactors(Jc).length < 2 && Jc++, !Wc && Fc.forceNiceScale && Hc.yValueDecimal === 0 && Jc > Yc && (Jc = Yc, Xc = Math.round(Yc / Jc)), Jc > Ic && (!Wc && !Uc || Fc.forceNiceScale)) {
					var ul = v.getPrimeFactors(Jc), dl = ul.length - 1, fl = Jc;
					t: for (var pl = 0; pl < dl; pl++) for (var ml = 0; ml <= dl - pl; ml++) {
						for (var hl = Math.min(ml + pl, dl), gl = fl, _l = 1, vl = ml; vl <= hl; vl++) _l *= ul[vl];
						if ((gl /= _l) < Ic) {
							fl = gl;
							break t;
						}
					}
					Xc = fl === Jc ? Yc : Yc / fl, Jc = Math.round(Yc / Xc);
				}
				Hc.isMultipleYAxis && Hc.multiAxisTickAmount == 0 && Hc.ignoreYAxisIndexes.indexOf(zc) < 0 && (Hc.multiAxisTickAmount = Jc);
				var yl = io - Xc, bl = Xc * Bc;
				do
					yl += Xc, qc.push(v.stripNumber(yl, 7));
				while (Pc - yl > bl);
				return {
					result: qc,
					niceMin: qc[0],
					niceMax: qc[qc.length - 1]
				};
			}
		},
		{
			key: "linearScale",
			value: function(io, Pc) {
				var Fc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 10, Ic = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, Lc = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : void 0, Rc = Math.abs(Pc - io), zc = [];
				if (io === Pc) return {
					result: zc = [io],
					niceMin: zc[0],
					niceMax: zc[zc.length - 1]
				};
				(Fc = this._adjustTicksForSmallRange(Fc, Ic, Rc)) === "dataPoints" && (Fc = this.w.globals.dataPoints - 1), Lc || (Lc = Rc / Fc), Lc = Math.round(100 * (Lc + Number.EPSILON)) / 100, Fc === Number.MAX_VALUE && (Fc = 5, Lc = 1);
				for (var Bc = io; Fc >= 0;) zc.push(Bc), Bc = v.preciseAddition(Bc, Lc), --Fc;
				return {
					result: zc,
					niceMin: zc[0],
					niceMax: zc[zc.length - 1]
				};
			}
		},
		{
			key: "logarithmicScaleNice",
			value: function(io, Pc, Fc) {
				Pc <= 0 && (Pc = Math.max(io, Fc)), io <= 0 && (io = Math.min(Pc, Fc));
				for (var Ic = [], Lc = Math.ceil(Math.log(Pc) / Math.log(Fc) + 1), Rc = Math.floor(Math.log(io) / Math.log(Fc)); Rc < Lc; Rc++) Ic.push(Math.pow(Fc, Rc));
				return {
					result: Ic,
					niceMin: Ic[0],
					niceMax: Ic[Ic.length - 1]
				};
			}
		},
		{
			key: "logarithmicScale",
			value: function(io, Pc, Fc) {
				Pc <= 0 && (Pc = Math.max(io, Fc)), io <= 0 && (io = Math.min(Pc, Fc));
				for (var Ic = [], Lc = Math.log(Pc) / Math.log(Fc), Rc = Math.log(io) / Math.log(Fc), zc = Lc - Rc, Bc = Math.round(zc), Vc = zc / Bc, Hc = 0, Uc = Rc; Hc < Bc; Hc++, Uc += Vc) Ic.push(Math.pow(Fc, Uc));
				return Ic.push(Math.pow(Fc, Lc)), {
					result: Ic,
					niceMin: io,
					niceMax: Pc
				};
			}
		},
		{
			key: "_adjustTicksForSmallRange",
			value: function(io, Pc, Fc) {
				var Ic = io;
				if (Pc !== void 0 && this.w.config.yaxis[Pc].labels.formatter && this.w.config.yaxis[Pc].tickAmount === void 0) {
					var Lc = Number(this.w.config.yaxis[Pc].labels.formatter(1));
					v.isNumber(Lc) && this.w.globals.yValueDecimal === 0 && (Ic = Math.ceil(Fc));
				}
				return Ic < io ? Ic : io;
			}
		},
		{
			key: "setYScaleForIndex",
			value: function(io, Pc, Fc) {
				var Ic = this.w.globals, Lc = this.w.config, Rc = Ic.isBarHorizontal ? Lc.xaxis : Lc.yaxis[io];
				Ic.yAxisScale[io] === void 0 && (Ic.yAxisScale[io] = []);
				var zc = Math.abs(Fc - Pc);
				Rc.logarithmic && zc <= 5 && (Ic.invalidLogScale = !0), Rc.logarithmic && zc > 5 ? (Ic.allSeriesCollapsed = !1, Ic.yAxisScale[io] = Rc.forceNiceScale ? this.logarithmicScaleNice(Pc, Fc, Rc.logBase) : this.logarithmicScale(Pc, Fc, Rc.logBase)) : Fc !== -Number.MAX_VALUE && v.isNumber(Fc) && Pc !== Number.MAX_VALUE && v.isNumber(Pc) ? (Ic.allSeriesCollapsed = !1, Ic.yAxisScale[io] = this.niceScale(Pc, Fc, io)) : Ic.yAxisScale[io] = this.niceScale(Number.MIN_VALUE, 0, io);
			}
		},
		{
			key: "setXScale",
			value: function(io, Pc) {
				var Fc = this.w, Ic = Fc.globals;
				if (Pc !== -Number.MAX_VALUE && v.isNumber(Pc)) {
					var Lc = Ic.xTickAmount;
					Ic.xAxisScale = this.linearScale(io, Pc, Lc, 0, Fc.config.xaxis.stepSize);
				} else Ic.xAxisScale = this.linearScale(0, 10, 10);
				return Ic.xAxisScale;
			}
		},
		{
			key: "scaleMultipleYAxes",
			value: function() {
				var io = this, Pc = this.w.config, Fc = this.w.globals;
				this.coreUtils.setSeriesYAxisMappings();
				var Ic = Fc.seriesYAxisMap, Lc = Fc.minYArr, Rc = Fc.maxYArr;
				Fc.allSeriesCollapsed = !0, Fc.barGroups = [], Ic.forEach((function(Ic, zc) {
					var Bc = [];
					Ic.forEach((function(io) {
						var Fc, Ic = (Fc = Pc.series[io]) == null ? void 0 : Fc.group;
						Bc.indexOf(Ic) < 0 && Bc.push(Ic);
					})), Ic.length > 0 ? function() {
						var Vc, Hc, Uc = Number.MAX_VALUE, Wc = -Number.MAX_VALUE, Gc = Uc, Kc = Wc;
						if (Pc.chart.stacked) (function() {
							var io = Array(Fc.dataPoints).fill(0), Lc = [], Rc = [], qc = [];
							Bc.forEach((function() {
								Lc.push(io.map((function() {
									return Number.MIN_VALUE;
								}))), Rc.push(io.map((function() {
									return Number.MIN_VALUE;
								}))), qc.push(io.map((function() {
									return Number.MIN_VALUE;
								})));
							}));
							for (var Jc = function(io) {
								!Vc && Pc.series[Ic[io]].type && (Vc = Pc.series[Ic[io]].type);
								var Uc = Ic[io];
								Hc = Pc.series[Uc].group ? Pc.series[Uc].group : `axis-${zc}`, !(Fc.collapsedSeriesIndices.indexOf(Uc) < 0 && Fc.ancillaryCollapsedSeriesIndices.indexOf(Uc) < 0) || (Fc.allSeriesCollapsed = !1, Bc.forEach((function(io, Ic) {
									if (Pc.series[Uc].group === io) for (var zc = 0; zc < Fc.series[Uc].length; zc++) {
										var Bc = Fc.series[Uc][zc];
										Bc >= 0 ? Rc[Ic][zc] += Bc : qc[Ic][zc] += Bc, Lc[Ic][zc] += Bc, Gc = Math.min(Gc, Bc), Kc = Math.max(Kc, Bc);
									}
								}))), Vc !== "bar" && Vc !== "column" || Fc.barGroups.push(Hc);
							}, Yc = 0; Yc < Ic.length; Yc++) Jc(Yc);
							Vc || (Vc = Pc.chart.type), Vc === "bar" || Vc === "column" ? Bc.forEach((function(io, Pc) {
								Uc = Math.min(Uc, Math.min.apply(null, qc[Pc])), Wc = Math.max(Wc, Math.max.apply(null, Rc[Pc]));
							})) : (Bc.forEach((function(io, Pc) {
								Gc = Math.min(Gc, Math.min.apply(null, Lc[Pc])), Kc = Math.max(Kc, Math.max.apply(null, Lc[Pc]));
							})), Uc = Gc, Wc = Kc), Uc === Number.MIN_VALUE && Wc === Number.MIN_VALUE && (Wc = -Number.MAX_VALUE);
						})();
						else for (var qc = 0; qc < Ic.length; qc++) {
							var Jc = Ic[qc];
							Uc = Math.min(Uc, Lc[Jc]), Wc = Math.max(Wc, Rc[Jc]), !(Fc.collapsedSeriesIndices.indexOf(Jc) < 0 && Fc.ancillaryCollapsedSeriesIndices.indexOf(Jc) < 0) || (Fc.allSeriesCollapsed = !1);
						}
						Pc.yaxis[zc].min !== void 0 && (Uc = typeof Pc.yaxis[zc].min == "function" ? Pc.yaxis[zc].min(Uc) : Pc.yaxis[zc].min), Pc.yaxis[zc].max !== void 0 && (Wc = typeof Pc.yaxis[zc].max == "function" ? Pc.yaxis[zc].max(Wc) : Pc.yaxis[zc].max), Fc.barGroups = Fc.barGroups.filter((function(io, Pc, Fc) {
							return Fc.indexOf(io) === Pc;
						})), io.setYScaleForIndex(zc, Uc, Wc), Ic.forEach((function(io) {
							Lc[io] = Fc.yAxisScale[zc].niceMin, Rc[io] = Fc.yAxisScale[zc].niceMax;
						}));
					}() : io.setYScaleForIndex(zc, 0, -Number.MAX_VALUE);
				}));
			}
		}
	]), io;
}(), ea = function() {
	function io(Pc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w, this.scales = new ta(Pc);
	}
	return s(io, [
		{
			key: "init",
			value: function() {
				this.setYRange(), this.setXRange(), this.setZRange();
			}
		},
		{
			key: "getMinYMaxY",
			value: function(io) {
				var Pc = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE, Fc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : -Number.MAX_VALUE, Ic = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, Lc = this.w.config, Rc = this.w.globals, zc = -Number.MAX_VALUE, Bc = Number.MIN_VALUE;
				Ic === null && (Ic = io + 1);
				var Vc = Rc.series, Hc = Vc, Uc = Vc;
				Lc.chart.type === "candlestick" ? (Hc = Rc.seriesCandleL, Uc = Rc.seriesCandleH) : Lc.chart.type === "boxPlot" ? (Hc = Rc.seriesCandleO, Uc = Rc.seriesCandleC) : Rc.isRangeData && (Hc = Rc.seriesRangeStart, Uc = Rc.seriesRangeEnd);
				var Wc = !1;
				if (Rc.seriesX.length >= Ic) {
					var Gc, Kc = (Gc = Rc.brushSource) == null ? void 0 : Gc.w.config.chart.brush;
					(Lc.chart.zoom.enabled && Lc.chart.zoom.autoScaleYaxis || Kc != null && Kc.enabled && Kc != null && Kc.autoScaleYaxis) && (Wc = !0);
				}
				for (var qc = io; qc < Ic; qc++) {
					Rc.dataPoints = Math.max(Rc.dataPoints, Vc[qc].length);
					var Jc = Lc.series[qc].type;
					Rc.categoryLabels.length && (Rc.dataPoints = Rc.categoryLabels.filter((function(io) {
						return io !== void 0;
					})).length), Rc.labels.length && Lc.xaxis.type !== "datetime" && Rc.series.reduce((function(io, Pc) {
						return io + Pc.length;
					}), 0) !== 0 && (Rc.dataPoints = Math.max(Rc.dataPoints, Rc.labels.length));
					var Yc = 0, Xc = Vc[qc].length - 1;
					if (Wc) {
						if (Lc.xaxis.min) for (; Yc < Xc && Rc.seriesX[qc][Yc] < Lc.xaxis.min; Yc++);
						if (Lc.xaxis.max) for (; Xc > Yc && Rc.seriesX[qc][Xc] > Lc.xaxis.max; Xc--);
					}
					for (var Zc = Yc; Zc <= Xc && Zc < Rc.series[qc].length; Zc++) {
						var Qc = Vc[qc][Zc];
						if (Qc !== null && v.isNumber(Qc)) {
							var el, tl, nl, rl;
							switch (((el = Uc[qc]) == null ? void 0 : el[Zc]) !== void 0 && (zc = Math.max(zc, Uc[qc][Zc]), Pc = Math.min(Pc, Uc[qc][Zc])), ((tl = Hc[qc]) == null ? void 0 : tl[Zc]) !== void 0 && (Pc = Math.min(Pc, Hc[qc][Zc]), Fc = Math.max(Fc, Hc[qc][Zc])), Jc) {
								case "candlestick":
									Rc.seriesCandleC[qc][Zc] !== void 0 && (zc = Math.max(zc, Rc.seriesCandleH[qc][Zc]), Pc = Math.min(Pc, Rc.seriesCandleL[qc][Zc]));
									break;
								case "boxPlot": Rc.seriesCandleC[qc][Zc] !== void 0 && (zc = Math.max(zc, Rc.seriesCandleC[qc][Zc]), Pc = Math.min(Pc, Rc.seriesCandleO[qc][Zc]));
							}
							Jc && Jc !== "candlestick" && Jc !== "boxPlot" && Jc !== "rangeArea" && Jc !== "rangeBar" && (zc = Math.max(zc, Rc.series[qc][Zc]), Pc = Math.min(Pc, Rc.series[qc][Zc])), Rc.seriesGoals[qc] && Rc.seriesGoals[qc][Zc] && Array.isArray(Rc.seriesGoals[qc][Zc]) && Rc.seriesGoals[qc][Zc].forEach((function(io) {
								zc = Math.max(zc, io.value), Pc = Math.min(Pc, io.value);
							})), Fc = zc, Qc = v.noExponents(Qc), v.isFloat(Qc) && (Rc.yValueDecimal = Math.max(Rc.yValueDecimal, Qc.toString().split(".")[1].length)), Bc > ((nl = Hc[qc]) == null ? void 0 : nl[Zc]) && ((rl = Hc[qc]) == null ? void 0 : rl[Zc]) < 0 && (Bc = Hc[qc][Zc]);
						} else Rc.hasNullValues = !0;
					}
					Jc !== "bar" && Jc !== "column" || (Bc < 0 && zc < 0 && (zc = 0, Fc = Math.max(Fc, 0)), Bc === Number.MIN_VALUE && (Bc = 0, Pc = Math.min(Pc, 0)));
				}
				return Lc.chart.type === "rangeBar" && Rc.seriesRangeStart.length && Rc.isBarHorizontal && (Bc = Pc), Lc.chart.type === "bar" && (Bc < 0 && zc < 0 && (zc = 0), Bc === Number.MIN_VALUE && (Bc = 0)), {
					minY: Bc,
					maxY: zc,
					lowestY: Pc,
					highestY: Fc
				};
			}
		},
		{
			key: "setYRange",
			value: function() {
				var io = this.w.globals, Pc = this.w.config;
				io.maxY = -Number.MAX_VALUE, io.minY = Number.MIN_VALUE;
				var Fc, Ic = Number.MAX_VALUE;
				if (io.isMultipleYAxis) {
					Ic = Number.MAX_VALUE;
					for (var Lc = 0; Lc < io.series.length; Lc++) Fc = this.getMinYMaxY(Lc), io.minYArr[Lc] = Fc.lowestY, io.maxYArr[Lc] = Fc.highestY, Ic = Math.min(Ic, Fc.lowestY);
				}
				return Fc = this.getMinYMaxY(0, Ic, null, io.series.length), Pc.chart.type === "bar" ? (io.minY = Fc.minY, io.maxY = Fc.maxY) : (io.minY = Fc.lowestY, io.maxY = Fc.highestY), Ic = Fc.lowestY, Pc.chart.stacked && this._setStackedMinMax(), Pc.chart.type === "line" || Pc.chart.type === "area" || Pc.chart.type === "scatter" || Pc.chart.type === "candlestick" || Pc.chart.type === "boxPlot" || Pc.chart.type === "rangeBar" && !io.isBarHorizontal ? io.minY === Number.MIN_VALUE && Ic !== -Number.MAX_VALUE && Ic !== io.maxY && (io.minY = Ic) : io.minY = io.minY === Number.MIN_VALUE ? Fc.minY : Math.min(Fc.minY, io.minY), Pc.yaxis.forEach((function(Pc, Fc) {
					Pc.max !== void 0 && (typeof Pc.max == "number" ? io.maxYArr[Fc] = Pc.max : typeof Pc.max == "function" && (io.maxYArr[Fc] = Pc.max(io.isMultipleYAxis ? io.maxYArr[Fc] : io.maxY)), io.maxY = io.maxYArr[Fc]), Pc.min !== void 0 && (typeof Pc.min == "number" ? io.minYArr[Fc] = Pc.min : typeof Pc.min == "function" && (io.minYArr[Fc] = Pc.min(io.isMultipleYAxis ? io.minYArr[Fc] === Number.MIN_VALUE ? 0 : io.minYArr[Fc] : io.minY)), io.minY = io.minYArr[Fc]);
				})), io.isBarHorizontal && ["min", "max"].forEach((function(Fc) {
					Pc.xaxis[Fc] !== void 0 && typeof Pc.xaxis[Fc] == "number" && (Fc === "min" ? io.minY = Pc.xaxis[Fc] : io.maxY = Pc.xaxis[Fc]);
				})), io.isMultipleYAxis ? (this.scales.scaleMultipleYAxes(), io.minY = Ic) : (this.scales.setYScaleForIndex(0, io.minY, io.maxY), io.minY = io.yAxisScale[0].niceMin, io.maxY = io.yAxisScale[0].niceMax, io.minYArr[0] = io.minY, io.maxYArr[0] = io.maxY), io.barGroups = [], io.lineGroups = [], io.areaGroups = [], Pc.series.forEach((function(Fc) {
					switch (Fc.type || Pc.chart.type) {
						case "bar":
						case "column":
							io.barGroups.push(Fc.group);
							break;
						case "line":
							io.lineGroups.push(Fc.group);
							break;
						case "area": io.areaGroups.push(Fc.group);
					}
				})), io.barGroups = io.barGroups.filter((function(io, Pc, Fc) {
					return Fc.indexOf(io) === Pc;
				})), io.lineGroups = io.lineGroups.filter((function(io, Pc, Fc) {
					return Fc.indexOf(io) === Pc;
				})), io.areaGroups = io.areaGroups.filter((function(io, Pc, Fc) {
					return Fc.indexOf(io) === Pc;
				})), {
					minY: io.minY,
					maxY: io.maxY,
					minYArr: io.minYArr,
					maxYArr: io.maxYArr,
					yAxisScale: io.yAxisScale
				};
			}
		},
		{
			key: "setXRange",
			value: function() {
				var io = this.w.globals, Pc = this.w.config, Fc = Pc.xaxis.type === "numeric" || Pc.xaxis.type === "datetime" || Pc.xaxis.type === "category" && !io.noLabelsProvided || io.noLabelsProvided || io.isXNumeric;
				if (io.isXNumeric && function() {
					for (var Pc = 0; Pc < io.series.length; Pc++) if (io.labels[Pc]) for (var Fc = 0; Fc < io.labels[Pc].length; Fc++) io.labels[Pc][Fc] !== null && v.isNumber(io.labels[Pc][Fc]) && (io.maxX = Math.max(io.maxX, io.labels[Pc][Fc]), io.initialMaxX = Math.max(io.maxX, io.labels[Pc][Fc]), io.minX = Math.min(io.minX, io.labels[Pc][Fc]), io.initialMinX = Math.min(io.minX, io.labels[Pc][Fc]));
				}(), io.noLabelsProvided && Pc.xaxis.categories.length === 0 && (io.maxX = io.labels[io.labels.length - 1], io.initialMaxX = io.labels[io.labels.length - 1], io.minX = 1, io.initialMinX = 1), io.isXNumeric || io.noLabelsProvided || io.dataFormatXNumeric) {
					var Ic = 10;
					if (Pc.xaxis.tickAmount === void 0) Ic = Math.round(io.svgWidth / 150), Pc.xaxis.type === "numeric" && io.dataPoints < 30 && (Ic = io.dataPoints - 1), Ic > io.dataPoints && io.dataPoints !== 0 && (Ic = io.dataPoints - 1);
					else if (Pc.xaxis.tickAmount === "dataPoints") {
						if (io.series.length > 1 && (Ic = io.series[io.maxValsInArrayIndex].length - 1), io.isXNumeric) {
							var Lc = Math.round(io.maxX - io.minX);
							Lc < 30 && (Ic = Lc - 1);
						}
					} else Ic = Pc.xaxis.tickAmount;
					if (io.xTickAmount = Ic, Pc.xaxis.max !== void 0 && typeof Pc.xaxis.max == "number" && (io.maxX = Pc.xaxis.max), Pc.xaxis.min !== void 0 && typeof Pc.xaxis.min == "number" && (io.minX = Pc.xaxis.min), Pc.xaxis.range !== void 0 && (io.minX = io.maxX - Pc.xaxis.range), io.minX !== Number.MAX_VALUE && io.maxX !== -Number.MAX_VALUE) if (Pc.xaxis.convertedCatToNumeric && !io.dataFormatXNumeric) {
						for (var Rc = [], zc = io.minX - 1; zc < io.maxX; zc++) Rc.push(zc + 1);
						io.xAxisScale = {
							result: Rc,
							niceMin: Rc[0],
							niceMax: Rc[Rc.length - 1]
						};
					} else io.xAxisScale = this.scales.setXScale(io.minX, io.maxX);
					else io.xAxisScale = this.scales.linearScale(0, Ic, Ic, 0, Pc.xaxis.stepSize), io.noLabelsProvided && io.labels.length > 0 && (io.xAxisScale = this.scales.linearScale(1, io.labels.length, Ic - 1, 0, Pc.xaxis.stepSize), io.seriesX = io.labels.slice());
					Fc && (io.labels = io.xAxisScale.result.slice());
				}
				return io.isBarHorizontal && io.labels.length && (io.xTickAmount = io.labels.length), this._handleSingleDataPoint(), this._getMinXDiff(), {
					minX: io.minX,
					maxX: io.maxX
				};
			}
		},
		{
			key: "setZRange",
			value: function() {
				var io = this.w.globals;
				if (io.isDataXYZ) {
					for (var Pc = 0; Pc < io.series.length; Pc++) if (io.seriesZ[Pc] !== void 0) for (var Fc = 0; Fc < io.seriesZ[Pc].length; Fc++) io.seriesZ[Pc][Fc] !== null && v.isNumber(io.seriesZ[Pc][Fc]) && (io.maxZ = Math.max(io.maxZ, io.seriesZ[Pc][Fc]), io.minZ = Math.min(io.minZ, io.seriesZ[Pc][Fc]));
				}
			}
		},
		{
			key: "_handleSingleDataPoint",
			value: function() {
				var io = this.w.globals, Pc = this.w.config;
				if (io.minX === io.maxX) {
					var Fc = new zi(this.ctx);
					if (Pc.xaxis.type === "datetime") {
						var Ic = Fc.getDate(io.minX);
						Pc.xaxis.labels.datetimeUTC ? Ic.setUTCDate(Ic.getUTCDate() - 2) : Ic.setDate(Ic.getDate() - 2), io.minX = new Date(Ic).getTime();
						var Lc = Fc.getDate(io.maxX);
						Pc.xaxis.labels.datetimeUTC ? Lc.setUTCDate(Lc.getUTCDate() + 2) : Lc.setDate(Lc.getDate() + 2), io.maxX = new Date(Lc).getTime();
					} else (Pc.xaxis.type === "numeric" || Pc.xaxis.type === "category" && !io.noLabelsProvided) && (io.minX -= 2, io.initialMinX = io.minX, io.maxX += 2, io.initialMaxX = io.maxX);
				}
			}
		},
		{
			key: "_getMinXDiff",
			value: function() {
				var io = this.w.globals;
				io.isXNumeric && io.seriesX.forEach((function(Pc, Fc) {
					if (Pc.length) {
						Pc.length === 1 && Pc.push(io.seriesX[io.maxValsInArrayIndex][io.seriesX[io.maxValsInArrayIndex].length - 1]);
						var Ic = Pc.slice();
						Ic.sort((function(io, Pc) {
							return io - Pc;
						})), Ic.forEach((function(Pc, Fc) {
							if (Fc > 0) {
								var Lc = Pc - Ic[Fc - 1];
								Lc > 0 && (io.minXDiff = Math.min(Lc, io.minXDiff));
							}
						})), io.dataPoints !== 1 && io.minXDiff !== Number.MAX_VALUE || (io.minXDiff = .5);
					}
				}));
			}
		},
		{
			key: "_setStackedMinMax",
			value: function() {
				var io = this, Pc = this.w.globals;
				if (Pc.series.length) {
					var Fc = Pc.seriesGroups;
					Fc.length || (Fc = [this.w.globals.seriesNames.map((function(io) {
						return io;
					}))]);
					var Ic = {}, Lc = {};
					Fc.forEach((function(Fc) {
						Ic[Fc] = [], Lc[Fc] = [], io.w.config.series.map((function(io, Ic) {
							return Fc.indexOf(Pc.seriesNames[Ic]) > -1 ? Ic : null;
						})).filter((function(io) {
							return io !== null;
						})).forEach((function(Rc) {
							for (var zc = 0; zc < Pc.series[Pc.maxValsInArrayIndex].length; zc++) {
								var Bc, Vc, Hc, Uc;
								Ic[Fc][zc] === void 0 && (Ic[Fc][zc] = 0, Lc[Fc][zc] = 0), (io.w.config.chart.stacked && !Pc.comboCharts || io.w.config.chart.stacked && Pc.comboCharts && (!io.w.config.chart.stackOnlyBar || ((Bc = io.w.config.series) == null || (Vc = Bc[Rc]) == null ? void 0 : Vc.type) === "bar" || ((Hc = io.w.config.series) == null || (Uc = Hc[Rc]) == null ? void 0 : Uc.type) === "column")) && Pc.series[Rc][zc] !== null && v.isNumber(Pc.series[Rc][zc]) && (Pc.series[Rc][zc] > 0 ? Ic[Fc][zc] += parseFloat(Pc.series[Rc][zc]) + 1e-4 : Lc[Fc][zc] += parseFloat(Pc.series[Rc][zc]));
							}
						}));
					})), Object.entries(Ic).forEach((function(io) {
						var Fc = p(io, 1)[0];
						Ic[Fc].forEach((function(io, Rc) {
							Pc.maxY = Math.max(Pc.maxY, Ic[Fc][Rc]), Pc.minY = Math.min(Pc.minY, Lc[Fc][Rc]);
						}));
					}));
				}
			}
		}
	]), io;
}(), ia = function() {
	function io(Pc, Fc) {
		i(this, io), this.ctx = Pc, this.elgrid = Fc, this.w = Pc.w;
		var Lc = this.w;
		this.xaxisFontSize = Lc.config.xaxis.labels.style.fontSize, this.axisFontFamily = Lc.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = Lc.config.xaxis.labels.style.colors, this.isCategoryBarHorizontal = Lc.config.chart.type === "bar" && Lc.config.plotOptions.bar.horizontal, this.xAxisoffX = Lc.config.xaxis.position === "bottom" ? Lc.globals.gridHeight : 0, this.drawnLabels = [], this.axesUtils = new Ri(Pc);
	}
	return s(io, [
		{
			key: "drawYaxis",
			value: function(io) {
				var Pc = this.w, Fc = new Mi(this.ctx), Ic = Pc.config.yaxis[io].labels.style, Lc = Ic.fontSize, Rc = Ic.fontFamily, zc = Ic.fontWeight, Bc = Fc.group({
					class: "apexcharts-yaxis",
					rel: io,
					transform: `translate(${Pc.globals.translateYAxisX[io]}, 0)`
				});
				if (this.axesUtils.isYAxisHidden(io)) return Bc;
				var Vc = Fc.group({ class: "apexcharts-yaxis-texts-g" });
				Bc.add(Vc);
				var Hc = Pc.globals.yAxisScale[io].result.length - 1, Uc = Pc.globals.gridHeight / Hc, Wc = Pc.globals.yLabelFormatters[io], Gc = this.axesUtils.checkForReversedLabels(io, Pc.globals.yAxisScale[io].result.slice());
				if (Pc.config.yaxis[io].labels.show) {
					var Kc = Pc.globals.translateY + Pc.config.yaxis[io].labels.offsetY;
					Pc.globals.isBarHorizontal ? Kc = 0 : Pc.config.chart.type === "heatmap" && (Kc -= Uc / 2), Kc += parseInt(Lc, 10) / 3;
					for (var qc = Hc; qc >= 0; qc--) {
						var Jc = Wc(Gc[qc], qc, Pc), Yc = Pc.config.yaxis[io].labels.padding;
						Pc.config.yaxis[io].opposite && Pc.config.yaxis.length !== 0 && (Yc *= -1);
						var Xc = this.getTextAnchor(Pc.config.yaxis[io].labels.align, Pc.config.yaxis[io].opposite), Zc = this.axesUtils.getYAxisForeColor(Ic.colors, io), Qc = Array.isArray(Zc) ? Zc[qc] : Zc, el = v.listToArray(Pc.globals.dom.baseEl.querySelectorAll(`.apexcharts-yaxis[rel='${io}'] .apexcharts-yaxis-label tspan`)).map((function(io) {
							return io.textContent;
						})), tl = Fc.drawText({
							x: Yc,
							y: Kc,
							text: el.includes(Jc) && !Pc.config.yaxis[io].labels.showDuplicates ? "" : Jc,
							textAnchor: Xc,
							fontSize: Lc,
							fontFamily: Rc,
							fontWeight: zc,
							maxWidth: Pc.config.yaxis[io].labels.maxWidth,
							foreColor: Qc,
							isPlainText: !1,
							cssClass: `apexcharts-yaxis-label ${Ic.cssClass}`
						});
						Vc.add(tl), this.addTooltip(tl, Jc), Pc.config.yaxis[io].labels.rotate !== 0 && this.rotateLabel(Fc, tl, firstLabel, Pc.config.yaxis[io].labels.rotate), Kc += Uc;
					}
				}
				return this.addYAxisTitle(Fc, Bc, io), this.addAxisBorder(Fc, Bc, io, Hc, Uc), Bc;
			}
		},
		{
			key: "getTextAnchor",
			value: function(io, Pc) {
				return io === "left" ? "start" : io === "center" ? "middle" : io === "right" ? "end" : Pc ? "start" : "end";
			}
		},
		{
			key: "addTooltip",
			value: function(io, Pc) {
				var Fc = document.createElementNS(this.w.globals.SVGNS, "title");
				Fc.textContent = Array.isArray(Pc) ? Pc.join(" ") : Pc, io.node.appendChild(Fc);
			}
		},
		{
			key: "rotateLabel",
			value: function(io, Pc, Fc, Ic) {
				var Lc = io.rotateAroundCenter(Fc.node), Rc = io.rotateAroundCenter(Pc.node);
				Pc.node.setAttribute("transform", `rotate(${Ic} ${Lc.x} ${Rc.y})`);
			}
		},
		{
			key: "addYAxisTitle",
			value: function(io, Pc, Fc) {
				var Ic = this.w;
				if (Ic.config.yaxis[Fc].title.text !== void 0) {
					var Lc = io.group({ class: "apexcharts-yaxis-title" }), Rc = Ic.config.yaxis[Fc].opposite ? Ic.globals.translateYAxisX[Fc] : 0, zc = io.drawText({
						x: Rc,
						y: Ic.globals.gridHeight / 2 + Ic.globals.translateY + Ic.config.yaxis[Fc].title.offsetY,
						text: Ic.config.yaxis[Fc].title.text,
						textAnchor: "end",
						foreColor: Ic.config.yaxis[Fc].title.style.color,
						fontSize: Ic.config.yaxis[Fc].title.style.fontSize,
						fontWeight: Ic.config.yaxis[Fc].title.style.fontWeight,
						fontFamily: Ic.config.yaxis[Fc].title.style.fontFamily,
						cssClass: `apexcharts-yaxis-title-text ${Ic.config.yaxis[Fc].title.style.cssClass}`
					});
					Lc.add(zc), Pc.add(Lc);
				}
			}
		},
		{
			key: "addAxisBorder",
			value: function(io, Pc, Fc, Ic, Lc) {
				var Rc = this.w, zc = Rc.config.yaxis[Fc].axisBorder, Bc = 31 + zc.offsetX;
				if (Rc.config.yaxis[Fc].opposite && (Bc = -31 - zc.offsetX), zc.show) {
					var Vc = io.drawLine(Bc, Rc.globals.translateY + zc.offsetY - 2, Bc, Rc.globals.gridHeight + Rc.globals.translateY + zc.offsetY + 2, zc.color, 0, zc.width);
					Pc.add(Vc);
				}
				Rc.config.yaxis[Fc].axisTicks.show && this.axesUtils.drawYAxisTicks(Bc, Ic, zc, Rc.config.yaxis[Fc].axisTicks, Fc, Lc, Pc);
			}
		},
		{
			key: "drawYaxisInversed",
			value: function(io) {
				var Pc = this.w, Fc = new Mi(this.ctx), Ic = Fc.group({ class: "apexcharts-xaxis apexcharts-yaxis-inversed" }), Lc = Fc.group({
					class: "apexcharts-xaxis-texts-g",
					transform: `translate(${Pc.globals.translateXAxisX}, ${Pc.globals.translateXAxisY})`
				});
				Ic.add(Lc);
				var Rc = Pc.globals.yAxisScale[io].result.length - 1, zc = Pc.globals.gridWidth / Rc + .1, Bc = zc + Pc.config.xaxis.labels.offsetX, Vc = Pc.globals.xLabelFormatter, Hc = this.axesUtils.checkForReversedLabels(io, Pc.globals.yAxisScale[io].result.slice()), Uc = Pc.globals.timescaleLabels;
				if (Uc.length > 0 && (this.xaxisLabels = Uc.slice(), Rc = (Hc = Uc.slice()).length), Pc.config.xaxis.labels.show) for (var Wc = Uc.length ? 0 : Rc; Uc.length ? Wc < Uc.length : Wc >= 0; Uc.length ? Wc++ : Wc--) {
					var Gc = Vc(Hc[Wc], Wc, Pc), Kc = Pc.globals.gridWidth + Pc.globals.padHorizontal - (Bc - zc + Pc.config.xaxis.labels.offsetX);
					if (Uc.length) {
						var qc = this.axesUtils.getLabel(Hc, Uc, Kc, Wc, this.drawnLabels, this.xaxisFontSize);
						Kc = qc.x, Gc = qc.text, this.drawnLabels.push(qc.text), Wc === 0 && Pc.globals.skipFirstTimelinelabel && (Gc = ""), Wc === Hc.length - 1 && Pc.globals.skipLastTimelinelabel && (Gc = "");
					}
					var Jc = Fc.drawText({
						x: Kc,
						y: this.xAxisoffX + Pc.config.xaxis.labels.offsetY + 30 - (Pc.config.xaxis.position === "top" ? Pc.globals.xAxisHeight + Pc.config.xaxis.axisTicks.height - 2 : 0),
						text: Gc,
						textAnchor: "middle",
						foreColor: Array.isArray(this.xaxisForeColors) ? this.xaxisForeColors[io] : this.xaxisForeColors,
						fontSize: this.xaxisFontSize,
						fontFamily: this.xaxisFontFamily,
						fontWeight: Pc.config.xaxis.labels.style.fontWeight,
						isPlainText: !1,
						cssClass: `apexcharts-xaxis-label ${Pc.config.xaxis.labels.style.cssClass}`
					});
					Lc.add(Jc), Jc.tspan(Gc), this.addTooltip(Jc, Gc), Bc += zc;
				}
				return this.inversedYAxisTitleText(Ic), this.inversedYAxisBorder(Ic), Ic;
			}
		},
		{
			key: "inversedYAxisBorder",
			value: function(io) {
				var Pc = this.w, Fc = new Mi(this.ctx), Ic = Pc.config.xaxis.axisBorder;
				if (Ic.show) {
					var Lc = 0;
					Pc.config.chart.type === "bar" && Pc.globals.isXNumeric && (Lc -= 15);
					var Rc = Fc.drawLine(Pc.globals.padHorizontal + Lc + Ic.offsetX, this.xAxisoffX, Pc.globals.gridWidth, this.xAxisoffX, Ic.color, 0, Ic.height);
					this.elgrid && this.elgrid.elGridBorders && Pc.config.grid.show ? this.elgrid.elGridBorders.add(Rc) : io.add(Rc);
				}
			}
		},
		{
			key: "inversedYAxisTitleText",
			value: function(io) {
				var Pc = this.w, Fc = new Mi(this.ctx);
				if (Pc.config.xaxis.title.text !== void 0) {
					var Ic = Fc.group({ class: "apexcharts-xaxis-title apexcharts-yaxis-title-inversed" }), Lc = Fc.drawText({
						x: Pc.globals.gridWidth / 2 + Pc.config.xaxis.title.offsetX,
						y: this.xAxisoffX + parseFloat(this.xaxisFontSize) + parseFloat(Pc.config.xaxis.title.style.fontSize) + Pc.config.xaxis.title.offsetY + 20,
						text: Pc.config.xaxis.title.text,
						textAnchor: "middle",
						fontSize: Pc.config.xaxis.title.style.fontSize,
						fontFamily: Pc.config.xaxis.title.style.fontFamily,
						fontWeight: Pc.config.xaxis.title.style.fontWeight,
						foreColor: Pc.config.xaxis.title.style.color,
						cssClass: `apexcharts-xaxis-title-text ${Pc.config.xaxis.title.style.cssClass}`
					});
					Ic.add(Lc), io.add(Ic);
				}
			}
		},
		{
			key: "yAxisTitleRotate",
			value: function(io, Pc) {
				var Fc = this.w, Ic = new Mi(this.ctx), Lc = Fc.globals.dom.baseEl.querySelector(`.apexcharts-yaxis[rel='${io}'] .apexcharts-yaxis-texts-g`), Rc = Lc ? Lc.getBoundingClientRect() : {
					width: 0,
					height: 0
				}, zc = Fc.globals.dom.baseEl.querySelector(`.apexcharts-yaxis[rel='${io}'] .apexcharts-yaxis-title text`), Bc = zc ? zc.getBoundingClientRect() : {
					width: 0,
					height: 0
				};
				if (zc) {
					var Vc = this.xPaddingForYAxisTitle(io, Rc, Bc, Pc);
					zc.setAttribute("x", Vc.xPos - (Pc ? 10 : 0));
					var Hc = Ic.rotateAroundCenter(zc);
					zc.setAttribute("transform", `rotate(${Pc ? -1 * Fc.config.yaxis[io].title.rotate : Fc.config.yaxis[io].title.rotate} ${Hc.x} ${Hc.y})`);
				}
			}
		},
		{
			key: "xPaddingForYAxisTitle",
			value: function(io, Pc, Fc, Ic) {
				var Lc = this.w, Rc = 0, zc = 10;
				return Lc.config.yaxis[io].title.text === void 0 || io < 0 ? {
					xPos: Rc,
					padd: 0
				} : (Ic ? Rc = Pc.width + Lc.config.yaxis[io].title.offsetX + Fc.width / 2 + zc / 2 : (Rc = -1 * Pc.width + Lc.config.yaxis[io].title.offsetX + zc / 2 + Fc.width / 2, Lc.globals.isBarHorizontal && (zc = 25, Rc = -1 * Pc.width - Lc.config.yaxis[io].title.offsetX - zc)), {
					xPos: Rc,
					padd: zc
				});
			}
		},
		{
			key: "setYAxisXPosition",
			value: function(io, Pc) {
				var Fc = this.w, Ic = 0, Lc = 0, Rc = 18, zc = 1;
				Fc.config.yaxis.length > 1 && (this.multipleYs = !0), Fc.config.yaxis.forEach((function(Bc, Vc) {
					var Hc = Fc.globals.ignoreYAxisIndexes.includes(Vc) || !Bc.show || Bc.floating || io[Vc].width === 0, Uc = io[Vc].width + Pc[Vc].width;
					Bc.opposite ? Fc.globals.isBarHorizontal ? (Lc = Fc.globals.gridWidth + Fc.globals.translateX - 1, Fc.globals.translateYAxisX[Vc] = Lc - Bc.labels.offsetX) : (Lc = Fc.globals.gridWidth + Fc.globals.translateX + zc, Hc || (zc += Uc + 20), Fc.globals.translateYAxisX[Vc] = Lc - Bc.labels.offsetX + 20) : (Ic = Fc.globals.translateX - Rc, Hc || (Rc += Uc + 20), Fc.globals.translateYAxisX[Vc] = Ic + Bc.labels.offsetX);
				}));
			}
		},
		{
			key: "setYAxisTextAlignments",
			value: function() {
				var io = this.w;
				v.listToArray(io.globals.dom.baseEl.getElementsByClassName("apexcharts-yaxis")).forEach((function(Pc, Fc) {
					var Ic = io.config.yaxis[Fc];
					if (Ic && !Ic.floating && Ic.labels.align !== void 0) {
						var Lc = io.globals.dom.baseEl.querySelector(`.apexcharts-yaxis[rel='${Fc}'] .apexcharts-yaxis-texts-g`), Rc = v.listToArray(io.globals.dom.baseEl.querySelectorAll(`.apexcharts-yaxis[rel='${Fc}'] .apexcharts-yaxis-label`)), zc = Lc.getBoundingClientRect();
						Rc.forEach((function(io) {
							io.setAttribute("text-anchor", Ic.labels.align);
						})), Ic.labels.align !== "left" || Ic.opposite ? Ic.labels.align === "center" ? Lc.setAttribute("transform", `translate(${zc.width / 2 * (Ic.opposite ? 1 : -1)}, 0)`) : Ic.labels.align === "right" && Ic.opposite && Lc.setAttribute("transform", `translate(${zc.width}, 0)`) : Lc.setAttribute("transform", `translate(-${zc.width}, 0)`);
					}
				}));
			}
		}
	]), io;
}(), aa = function() {
	function io(Pc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w, this.documentEvent = v.bind(this.documentEvent, this);
	}
	return s(io, [
		{
			key: "addEventListener",
			value: function(io, Pc) {
				var Fc = this.w;
				Fc.globals.events.hasOwnProperty(io) ? Fc.globals.events[io].push(Pc) : Fc.globals.events[io] = [Pc];
			}
		},
		{
			key: "removeEventListener",
			value: function(io, Pc) {
				var Fc = this.w;
				if (Fc.globals.events.hasOwnProperty(io)) {
					var Ic = Fc.globals.events[io].indexOf(Pc);
					Ic !== -1 && Fc.globals.events[io].splice(Ic, 1);
				}
			}
		},
		{
			key: "fireEvent",
			value: function(io, Pc) {
				var Fc = this.w;
				if (Fc.globals.events.hasOwnProperty(io)) {
					Pc && Pc.length || (Pc = []);
					for (var Ic = Fc.globals.events[io], Lc = Ic.length, Rc = 0; Rc < Lc; Rc++) Ic[Rc].apply(null, Pc);
				}
			}
		},
		{
			key: "setupEventHandlers",
			value: function() {
				var io = this, Pc = this.w, Fc = this.ctx, Ic = Pc.globals.dom.baseEl.querySelector(Pc.globals.chartClass);
				this.ctx.eventList.forEach((function(io) {
					Ic.addEventListener(io, (function(io) {
						var Ic = io.target.getAttribute("i") === null && Pc.globals.capturedSeriesIndex !== -1 ? Pc.globals.capturedSeriesIndex : io.target.getAttribute("i"), Lc = io.target.getAttribute("j") === null && Pc.globals.capturedDataPointIndex !== -1 ? Pc.globals.capturedDataPointIndex : io.target.getAttribute("j"), Rc = Object.assign({}, Pc, {
							seriesIndex: Pc.globals.axisCharts ? Ic : 0,
							dataPointIndex: Lc
						});
						io.type === "mousemove" || io.type === "touchmove" ? typeof Pc.config.chart.events.mouseMove == "function" && Pc.config.chart.events.mouseMove(io, Fc, Rc) : io.type === "mouseleave" || io.type === "touchleave" ? typeof Pc.config.chart.events.mouseLeave == "function" && Pc.config.chart.events.mouseLeave(io, Fc, Rc) : (io.type === "mouseup" && io.which === 1 || io.type === "touchend") && (typeof Pc.config.chart.events.click == "function" && Pc.config.chart.events.click(io, Fc, Rc), Fc.ctx.events.fireEvent("click", [
							io,
							Fc,
							Rc
						]));
					}), {
						capture: !1,
						passive: !0
					});
				})), this.ctx.eventList.forEach((function(Fc) {
					Pc.globals.dom.baseEl.addEventListener(Fc, io.documentEvent, { passive: !0 });
				})), this.ctx.core.setupBrushHandler();
			}
		},
		{
			key: "documentEvent",
			value: function(io) {
				var Pc = this.w, Fc = io.target.className;
				if (io.type === "click") {
					var Ic = Pc.globals.dom.baseEl.querySelector(".apexcharts-menu");
					Ic && Ic.classList.contains("apexcharts-menu-open") && Fc !== "apexcharts-menu-icon" && Ic.classList.remove("apexcharts-menu-open");
				}
				Pc.globals.clientX = io.type === "touchmove" ? io.touches[0].clientX : io.clientX, Pc.globals.clientY = io.type === "touchmove" ? io.touches[0].clientY : io.clientY;
			}
		}
	]), io;
}(), sa = function() {
	function io(Pc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w;
	}
	return s(io, [{
		key: "setCurrentLocaleValues",
		value: function(io) {
			var Pc = this.w.config.chart.locales;
			window.Apex.chart && window.Apex.chart.locales && window.Apex.chart.locales.length > 0 && (Pc = this.w.config.chart.locales.concat(window.Apex.chart.locales));
			var Fc = Pc.filter((function(Pc) {
				return Pc.name === io;
			}))[0];
			if (!Fc) throw Error("Wrong locale name provided. Please make sure you set the correct locale name in options");
			var Ic = v.extend(Hi, Fc);
			this.w.globals.locale = Ic.options;
		}
	}]), io;
}(), ra = function() {
	function io(Pc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w;
	}
	return s(io, [{
		key: "drawAxis",
		value: function(io, Pc) {
			var Fc, Ic, Lc = this, Rc = this.w.globals, zc = this.w.config, Bc = new Qi(this.ctx, Pc), Vc = new ia(this.ctx, Pc);
			Rc.axisCharts && io !== "radar" && (Rc.isBarHorizontal ? (Ic = Vc.drawYaxisInversed(0), Fc = Bc.drawXaxisInversed(0), Rc.dom.elGraphical.add(Fc), Rc.dom.elGraphical.add(Ic)) : (Fc = Bc.drawXaxis(), Rc.dom.elGraphical.add(Fc), zc.yaxis.map((function(io, Pc) {
				if (Rc.ignoreYAxisIndexes.indexOf(Pc) === -1 && (Ic = Vc.drawYaxis(Pc), Rc.dom.Paper.add(Ic), Lc.w.config.grid.position === "back")) {
					var Fc = Rc.dom.Paper.children()[1];
					Fc.remove(), Rc.dom.Paper.add(Fc);
				}
			}))));
		}
	}]), io;
}(), na = function() {
	function io(Pc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w;
	}
	return s(io, [{
		key: "drawXCrosshairs",
		value: function() {
			var io = this.w, Pc = new Mi(this.ctx), Fc = new Li(this.ctx), Ic = io.config.xaxis.crosshairs.fill.gradient, Lc = io.config.xaxis.crosshairs.dropShadow, Rc = io.config.xaxis.crosshairs.fill.type, zc = Ic.colorFrom, Bc = Ic.colorTo, Vc = Ic.opacityFrom, Hc = Ic.opacityTo, Uc = Ic.stops, Wc = Lc.enabled, Gc = Lc.left, Kc = Lc.top, qc = Lc.blur, Jc = Lc.color, Yc = Lc.opacity, Xc = io.config.xaxis.crosshairs.fill.color;
			if (io.config.xaxis.crosshairs.show) {
				Rc === "gradient" && (Xc = Pc.drawGradient("vertical", zc, Bc, Vc, Hc, null, Uc, null));
				var Zc = Pc.drawRect();
				io.config.xaxis.crosshairs.width === 1 && (Zc = Pc.drawLine());
				var Qc = io.globals.gridHeight;
				(!v.isNumber(Qc) || Qc < 0) && (Qc = 0);
				var el = io.config.xaxis.crosshairs.width;
				(!v.isNumber(el) || el < 0) && (el = 0), Zc.attr({
					class: "apexcharts-xcrosshairs",
					x: 0,
					y: 0,
					y2: Qc,
					width: el,
					height: Qc,
					fill: Xc,
					filter: "none",
					"fill-opacity": io.config.xaxis.crosshairs.opacity,
					stroke: io.config.xaxis.crosshairs.stroke.color,
					"stroke-width": io.config.xaxis.crosshairs.stroke.width,
					"stroke-dasharray": io.config.xaxis.crosshairs.stroke.dashArray
				}), Wc && (Zc = Fc.dropShadow(Zc, {
					left: Gc,
					top: Kc,
					blur: qc,
					color: Jc,
					opacity: Yc
				})), io.globals.dom.elGraphical.add(Zc);
			}
		}
	}, {
		key: "drawYCrosshairs",
		value: function() {
			var io = this.w, Pc = new Mi(this.ctx), Fc = io.config.yaxis[0].crosshairs, Ic = io.globals.barPadForNumericAxis;
			if (io.config.yaxis[0].crosshairs.show) {
				var Lc = Pc.drawLine(-Ic, 0, io.globals.gridWidth + Ic, 0, Fc.stroke.color, Fc.stroke.dashArray, Fc.stroke.width);
				Lc.attr({ class: "apexcharts-ycrosshairs" }), io.globals.dom.elGraphical.add(Lc);
			}
			var Rc = Pc.drawLine(-Ic, 0, io.globals.gridWidth + Ic, 0, Fc.stroke.color, 0, 0);
			Rc.attr({ class: "apexcharts-ycrosshairs-hidden" }), io.globals.dom.elGraphical.add(Rc);
		}
	}]), io;
}(), oa = function() {
	function io(Pc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w;
	}
	return s(io, [{
		key: "checkResponsiveConfig",
		value: function(io) {
			var Pc = this, Fc = this.w, Ic = Fc.config;
			if (Ic.responsive.length !== 0) {
				var Lc = Ic.responsive.slice();
				Lc.sort((function(io, Pc) {
					return io.breakpoint > Pc.breakpoint ? 1 : Pc.breakpoint > io.breakpoint ? -1 : 0;
				})).reverse();
				var Rc = new Wi({}), zc = function() {
					var io = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, Ic = Lc[0].breakpoint, zc = window.innerWidth > 0 ? window.innerWidth : screen.width;
					if (zc > Ic) {
						var Bc = v.clone(Fc.globals.initialConfig);
						Bc.series = v.clone(Fc.config.series);
						var Vc = Pi.extendArrayProps(Rc, Bc, Fc);
						io = v.extend(Vc, io), io = v.extend(Fc.config, io), Pc.overrideResponsiveOptions(io);
					} else for (var Hc = 0; Hc < Lc.length; Hc++) zc < Lc[Hc].breakpoint && (io = Pi.extendArrayProps(Rc, Lc[Hc].options, Fc), io = v.extend(Fc.config, io), Pc.overrideResponsiveOptions(io));
				};
				if (io) {
					var Bc = Pi.extendArrayProps(Rc, io, Fc);
					Bc = v.extend(Fc.config, Bc), zc(Bc = v.extend(Bc, io));
				} else zc({});
			}
		}
	}, {
		key: "overrideResponsiveOptions",
		value: function(io) {
			var Pc = new Wi(io).init({ responsiveOverride: !0 });
			this.w.config = Pc;
		}
	}]), io;
}(), la = function() {
	function io(Pc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w, this.colors = [], this.isColorFn = !1, this.isHeatmapDistributed = this.checkHeatmapDistributed(), this.isBarDistributed = this.checkBarDistributed();
	}
	return s(io, [
		{
			key: "checkHeatmapDistributed",
			value: function() {
				var io = this.w.config, Pc = io.chart, Fc = io.plotOptions;
				return Pc.type === "treemap" && Fc.treemap && Fc.treemap.distributed || Pc.type === "heatmap" && Fc.heatmap && Fc.heatmap.distributed;
			}
		},
		{
			key: "checkBarDistributed",
			value: function() {
				var io = this.w.config, Pc = io.chart, Fc = io.plotOptions;
				return Fc.bar && Fc.bar.distributed && (Pc.type === "bar" || Pc.type === "rangeBar");
			}
		},
		{
			key: "init",
			value: function() {
				this.setDefaultColors();
			}
		},
		{
			key: "setDefaultColors",
			value: function() {
				var io = this.w, Pc = new v();
				io.globals.dom.elWrap.classList.add(`apexcharts-theme-${io.config.theme.mode || "light"}`);
				var Fc = f(io.config.colors || io.config.fill.colors || []);
				io.globals.colors = this.getColors(Fc), this.applySeriesColors(io.globals.seriesColors, io.globals.colors), io.config.theme.monochrome.enabled && (io.globals.colors = this.getMonochromeColors(io.config.theme.monochrome, io.globals.series, Pc));
				var Ic = io.globals.colors.slice();
				this.pushExtraColors(io.globals.colors), this.applyColorTypes(["fill", "stroke"], Ic), this.applyDataLabelsColors(Ic), this.applyRadarPolygonsColors(), this.applyMarkersColors(Ic);
			}
		},
		{
			key: "getColors",
			value: function(io) {
				var Pc = this, Fc = this.w;
				return io && io.length !== 0 ? Array.isArray(io) && io.length > 0 && typeof io[0] == "function" ? (this.isColorFn = !0, Fc.config.series.map((function(Ic, Lc) {
					var Rc = io[Lc] || io[0];
					return typeof Rc == "function" ? Rc({
						value: Fc.globals.axisCharts ? Fc.globals.series[Lc][0] || 0 : Fc.globals.series[Lc],
						seriesIndex: Lc,
						dataPointIndex: Lc,
						w: Pc.w
					}) : Rc;
				}))) : io : this.predefined();
			}
		},
		{
			key: "applySeriesColors",
			value: function(io, Pc) {
				io.forEach((function(io, Fc) {
					io && (Pc[Fc] = io);
				}));
			}
		},
		{
			key: "getMonochromeColors",
			value: function(io, Pc, Fc) {
				var Ic = io.color, Lc = io.shadeIntensity, Rc = io.shadeTo, zc = this.isBarDistributed || this.isHeatmapDistributed ? Pc[0].length * Pc.length : Pc.length, Bc = 1 / (zc / Lc), Vc = 0;
				return Array.from({ length: zc }, (function() {
					var io = Rc === "dark" ? Fc.shadeColor(-1 * Vc, Ic) : Fc.shadeColor(Vc, Ic);
					return Vc += Bc, io;
				}));
			}
		},
		{
			key: "applyColorTypes",
			value: function(io, Pc) {
				var Fc = this, Ic = this.w;
				io.forEach((function(io) {
					Ic.globals[io].colors = Ic.config[io].colors === void 0 ? Fc.isColorFn ? Ic.config.colors : Pc : Ic.config[io].colors.slice(), Fc.pushExtraColors(Ic.globals[io].colors);
				}));
			}
		},
		{
			key: "applyDataLabelsColors",
			value: function(io) {
				var Pc = this.w;
				Pc.globals.dataLabels.style.colors = Pc.config.dataLabels.style.colors === void 0 ? io : Pc.config.dataLabels.style.colors.slice(), this.pushExtraColors(Pc.globals.dataLabels.style.colors, 50);
			}
		},
		{
			key: "applyRadarPolygonsColors",
			value: function() {
				var io = this.w;
				io.globals.radarPolygons.fill.colors = io.config.plotOptions.radar.polygons.fill.colors === void 0 ? [io.config.theme.mode === "dark" ? "#343A3F" : "none"] : io.config.plotOptions.radar.polygons.fill.colors.slice(), this.pushExtraColors(io.globals.radarPolygons.fill.colors, 20);
			}
		},
		{
			key: "applyMarkersColors",
			value: function(io) {
				var Pc = this.w;
				Pc.globals.markers.colors = Pc.config.markers.colors === void 0 ? io : Pc.config.markers.colors.slice(), this.pushExtraColors(Pc.globals.markers.colors);
			}
		},
		{
			key: "pushExtraColors",
			value: function(io, Pc) {
				var Fc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, Ic = this.w, Lc = Pc || Ic.globals.series.length;
				if (Fc === null && (Fc = this.isBarDistributed || this.isHeatmapDistributed || Ic.config.chart.type === "heatmap" && Ic.config.plotOptions.heatmap && Ic.config.plotOptions.heatmap.colorScale.inverse), Fc && Ic.globals.series.length && (Lc = Ic.globals.series[Ic.globals.maxValsInArrayIndex].length * Ic.globals.series.length), io.length < Lc) for (var Rc = Lc - io.length, zc = 0; zc < Rc; zc++) io.push(io[zc]);
			}
		},
		{
			key: "updateThemeOptions",
			value: function(io) {
				io.chart = io.chart || {}, io.tooltip = io.tooltip || {};
				var Pc = io.theme.mode, Fc = Pc === "dark" ? "palette4" : Pc === "light" ? "palette1" : io.theme.palette || "palette1", Ic = Pc === "dark" ? "#f6f7f8" : Pc === "light" ? "#373d3f" : io.chart.foreColor || "#373d3f";
				return io.tooltip.theme = Pc || "light", io.chart.foreColor = Ic, io.theme.palette = Fc, io;
			}
		},
		{
			key: "predefined",
			value: function() {
				var io = {
					palette1: [
						"#008FFB",
						"#00E396",
						"#FEB019",
						"#FF4560",
						"#775DD0"
					],
					palette2: [
						"#3f51b5",
						"#03a9f4",
						"#4caf50",
						"#f9ce1d",
						"#FF9800"
					],
					palette3: [
						"#33b2df",
						"#546E7A",
						"#d4526e",
						"#13d8aa",
						"#A5978B"
					],
					palette4: [
						"#4ecdc4",
						"#c7f464",
						"#81D4FA",
						"#fd6a6a",
						"#546E7A"
					],
					palette5: [
						"#2b908f",
						"#f9a3a4",
						"#90ee7e",
						"#fa4443",
						"#69d2e7"
					],
					palette6: [
						"#449DD1",
						"#F86624",
						"#EA3546",
						"#662E9B",
						"#C5D86D"
					],
					palette7: [
						"#D7263D",
						"#1B998B",
						"#2E294E",
						"#F46036",
						"#E2C044"
					],
					palette8: [
						"#662E9B",
						"#F86624",
						"#F9C80E",
						"#EA3546",
						"#43BCCD"
					],
					palette9: [
						"#5C4742",
						"#A5978B",
						"#8D5B4C",
						"#5A2A27",
						"#C4BBAF"
					],
					palette10: [
						"#A300D6",
						"#7D02EB",
						"#5653FE",
						"#2983FF",
						"#00B1F2"
					],
					default: [
						"#008FFB",
						"#00E396",
						"#FEB019",
						"#FF4560",
						"#775DD0"
					]
				};
				return io[this.w.config.theme.palette] || io.default;
			}
		}
	]), io;
}(), ha = function() {
	function io(Pc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w;
	}
	return s(io, [{
		key: "draw",
		value: function() {
			this.drawTitleSubtitle("title"), this.drawTitleSubtitle("subtitle");
		}
	}, {
		key: "drawTitleSubtitle",
		value: function(io) {
			var Pc = this.w, Fc = io === "title" ? Pc.config.title : Pc.config.subtitle, Ic = Pc.globals.svgWidth / 2, Lc = Fc.offsetY, Rc = "middle";
			if (Fc.align === "left" ? (Ic = 10, Rc = "start") : Fc.align === "right" && (Ic = Pc.globals.svgWidth - 10, Rc = "end"), Ic += Fc.offsetX, Lc = Lc + parseInt(Fc.style.fontSize, 10) + Fc.margin / 2, Fc.text !== void 0) {
				var zc = new Mi(this.ctx).drawText({
					x: Ic,
					y: Lc,
					text: Fc.text,
					textAnchor: Rc,
					fontSize: Fc.style.fontSize,
					fontFamily: Fc.style.fontFamily,
					fontWeight: Fc.style.fontWeight,
					foreColor: Fc.style.color,
					opacity: 1
				});
				zc.node.setAttribute("class", `apexcharts-${io}-text`), Pc.globals.dom.Paper.add(zc);
			}
		}
	}]), io;
}(), ca = function() {
	function io(Pc) {
		i(this, io), this.w = Pc.w, this.dCtx = Pc;
	}
	return s(io, [
		{
			key: "getTitleSubtitleCoords",
			value: function(io) {
				var Pc = this.w, Fc = 0, Ic = 0, Lc = io === "title" ? Pc.config.title.floating : Pc.config.subtitle.floating, Rc = Pc.globals.dom.baseEl.querySelector(`.apexcharts-${io}-text`);
				if (Rc !== null && !Lc) {
					var zc = Rc.getBoundingClientRect();
					Fc = zc.width, Ic = Pc.globals.axisCharts ? zc.height + 5 : zc.height;
				}
				return {
					width: Fc,
					height: Ic
				};
			}
		},
		{
			key: "getLegendsRect",
			value: function() {
				var io = this.w, Pc = io.globals.dom.elLegendWrap;
				io.config.legend.height || io.config.legend.position !== "top" && io.config.legend.position !== "bottom" || (Pc.style.maxHeight = io.globals.svgHeight / 2 + "px");
				var Fc = Object.assign({}, v.getBoundingClientRect(Pc));
				return Pc !== null && !io.config.legend.floating && io.config.legend.show ? this.dCtx.lgRect = {
					x: Fc.x,
					y: Fc.y,
					height: Fc.height,
					width: Fc.height === 0 ? 0 : Fc.width
				} : this.dCtx.lgRect = {
					x: 0,
					y: 0,
					height: 0,
					width: 0
				}, io.config.legend.position !== "left" && io.config.legend.position !== "right" || 1.5 * this.dCtx.lgRect.width > io.globals.svgWidth && (this.dCtx.lgRect.width = io.globals.svgWidth / 1.5), this.dCtx.lgRect;
			}
		},
		{
			key: "getDatalabelsRect",
			value: function() {
				var io = this, Pc = this.w, Fc = [];
				Pc.config.series.forEach((function(Lc, Rc) {
					Lc.data.forEach((function(Lc, zc) {
						var Bc = Pc.globals.series[Rc][zc];
						Ic = Pc.config.dataLabels.formatter(Bc, {
							ctx: io.dCtx.ctx,
							seriesIndex: Rc,
							dataPointIndex: zc,
							w: Pc
						}), Fc.push(Ic);
					}));
				}));
				var Ic = v.getLargestStringFromArr(Fc), Lc = new Mi(this.dCtx.ctx), Rc = Pc.config.dataLabels.style, zc = Lc.getTextRects(Ic, parseInt(Rc.fontSize), Rc.fontFamily);
				return {
					width: 1.05 * zc.width,
					height: zc.height
				};
			}
		},
		{
			key: "getLargestStringFromMultiArr",
			value: function(io, Pc) {
				var Fc = io;
				if (this.w.globals.isMultiLineX) {
					var Ic = Pc.map((function(io, Pc) {
						return Array.isArray(io) ? io.length : 1;
					})), Lc = Math.max.apply(Math, f(Ic));
					Fc = Pc[Ic.indexOf(Lc)];
				}
				return Fc;
			}
		}
	]), io;
}(), da = function() {
	function io(Pc) {
		i(this, io), this.w = Pc.w, this.dCtx = Pc;
	}
	return s(io, [
		{
			key: "getxAxisLabelsCoords",
			value: function() {
				var io, Pc = this.w, Fc = Pc.globals.labels.slice();
				if (Pc.config.xaxis.convertedCatToNumeric && Fc.length === 0 && (Fc = Pc.globals.categoryLabels), Pc.globals.timescaleLabels.length > 0) {
					var Ic = this.getxAxisTimeScaleLabelsCoords();
					io = {
						width: Ic.width,
						height: Ic.height
					}, Pc.globals.rotateXLabels = !1;
				} else {
					this.dCtx.lgWidthForSideLegends = Pc.config.legend.position !== "left" && Pc.config.legend.position !== "right" || Pc.config.legend.floating ? 0 : this.dCtx.lgRect.width;
					var Lc = Pc.globals.xLabelFormatter, Rc = v.getLargestStringFromArr(Fc), zc = this.dCtx.dimHelpers.getLargestStringFromMultiArr(Rc, Fc);
					Pc.globals.isBarHorizontal && (zc = Rc = Pc.globals.yAxisScale[0].result.reduce((function(io, Pc) {
						return io.length > Pc.length ? io : Pc;
					}), 0));
					var Bc = new Xi(this.dCtx.ctx), Vc = Rc;
					Rc = Bc.xLabelFormat(Lc, Rc, Vc, {
						i: void 0,
						dateFormatter: new zi(this.dCtx.ctx).formatDate,
						w: Pc
					}), zc = Bc.xLabelFormat(Lc, zc, Vc, {
						i: void 0,
						dateFormatter: new zi(this.dCtx.ctx).formatDate,
						w: Pc
					}), (Pc.config.xaxis.convertedCatToNumeric && Rc === void 0 || String(Rc).trim() === "") && (zc = Rc = "1");
					var Hc = new Mi(this.dCtx.ctx), Uc = Hc.getTextRects(Rc, Pc.config.xaxis.labels.style.fontSize), Wc = Uc;
					if (Rc !== zc && (Wc = Hc.getTextRects(zc, Pc.config.xaxis.labels.style.fontSize)), (io = {
						width: Uc.width >= Wc.width ? Uc.width : Wc.width,
						height: Uc.height >= Wc.height ? Uc.height : Wc.height
					}).width * Fc.length > Pc.globals.svgWidth - this.dCtx.lgWidthForSideLegends - this.dCtx.yAxisWidth - this.dCtx.gridPad.left - this.dCtx.gridPad.right && Pc.config.xaxis.labels.rotate !== 0 || Pc.config.xaxis.labels.rotateAlways) {
						if (!Pc.globals.isBarHorizontal) {
							Pc.globals.rotateXLabels = !0;
							var Gc = function(io) {
								return Hc.getTextRects(io, Pc.config.xaxis.labels.style.fontSize, Pc.config.xaxis.labels.style.fontFamily, `rotate(${Pc.config.xaxis.labels.rotate} 0 0)`, !1);
							};
							Uc = Gc(Rc), Rc !== zc && (Wc = Gc(zc)), io.height = (Uc.height > Wc.height ? Uc.height : Wc.height) / 1.5, io.width = Uc.width > Wc.width ? Uc.width : Wc.width;
						}
					} else Pc.globals.rotateXLabels = !1;
				}
				return Pc.config.xaxis.labels.show || (io = {
					width: 0,
					height: 0
				}), {
					width: io.width,
					height: io.height
				};
			}
		},
		{
			key: "getxAxisGroupLabelsCoords",
			value: function() {
				var io, Pc = this.w;
				if (!Pc.globals.hasXaxisGroups) return {
					width: 0,
					height: 0
				};
				var Fc, Ic = ((io = Pc.config.xaxis.group.style) == null ? void 0 : io.fontSize) || Pc.config.xaxis.labels.style.fontSize, Lc = Pc.globals.groups.map((function(io) {
					return io.title;
				})), Rc = v.getLargestStringFromArr(Lc), zc = this.dCtx.dimHelpers.getLargestStringFromMultiArr(Rc, Lc), Bc = new Mi(this.dCtx.ctx), Vc = Bc.getTextRects(Rc, Ic), Hc = Vc;
				return Rc !== zc && (Hc = Bc.getTextRects(zc, Ic)), Fc = {
					width: Vc.width >= Hc.width ? Vc.width : Hc.width,
					height: Vc.height >= Hc.height ? Vc.height : Hc.height
				}, Pc.config.xaxis.labels.show || (Fc = {
					width: 0,
					height: 0
				}), {
					width: Fc.width,
					height: Fc.height
				};
			}
		},
		{
			key: "getxAxisTitleCoords",
			value: function() {
				var io = this.w, Pc = 0, Fc = 0;
				if (io.config.xaxis.title.text !== void 0) {
					var Ic = new Mi(this.dCtx.ctx).getTextRects(io.config.xaxis.title.text, io.config.xaxis.title.style.fontSize);
					Pc = Ic.width, Fc = Ic.height;
				}
				return {
					width: Pc,
					height: Fc
				};
			}
		},
		{
			key: "getxAxisTimeScaleLabelsCoords",
			value: function() {
				var io, Pc = this.w;
				this.dCtx.timescaleLabels = Pc.globals.timescaleLabels.slice();
				var Fc = this.dCtx.timescaleLabels.map((function(io) {
					return io.value;
				})), Ic = Fc.reduce((function(io, Pc) {
					return io === void 0 ? (console.error("You have possibly supplied invalid Date format. Please supply a valid JavaScript Date"), 0) : io.length > Pc.length ? io : Pc;
				}), 0);
				return 1.05 * (io = new Mi(this.dCtx.ctx).getTextRects(Ic, Pc.config.xaxis.labels.style.fontSize)).width * Fc.length > Pc.globals.gridWidth && Pc.config.xaxis.labels.rotate !== 0 && (Pc.globals.overlappingXLabels = !0), io;
			}
		},
		{
			key: "additionalPaddingXLabels",
			value: function(io) {
				var Pc = this, Fc = this.w, Ic = Fc.globals, Lc = Fc.config, Rc = Lc.xaxis.type, zc = io.width;
				Ic.skipLastTimelinelabel = !1, Ic.skipFirstTimelinelabel = !1;
				var Bc = Fc.config.yaxis[0].opposite && Fc.globals.isBarHorizontal, Vc = function(io, Bc) {
					Lc.yaxis.length > 1 && function(io) {
						return Ic.collapsedSeriesIndices.indexOf(io) !== -1;
					}(Bc) || function(io) {
						if (Pc.dCtx.timescaleLabels && Pc.dCtx.timescaleLabels.length) {
							var Bc = Pc.dCtx.timescaleLabels[0], Vc = Pc.dCtx.timescaleLabels[Pc.dCtx.timescaleLabels.length - 1].position + zc / 1.75 - Pc.dCtx.yAxisWidthRight, Hc = Bc.position - zc / 1.75 + Pc.dCtx.yAxisWidthLeft, Uc = Fc.config.legend.position === "right" && Pc.dCtx.lgRect.width > 0 ? Pc.dCtx.lgRect.width : 0;
							Vc > Ic.svgWidth - Ic.translateX - Uc && (Ic.skipLastTimelinelabel = !0), Hc < -(io.show && !io.floating || Lc.chart.type !== "bar" && Lc.chart.type !== "candlestick" && Lc.chart.type !== "rangeBar" && Lc.chart.type !== "boxPlot" ? 10 : zc / 1.75) && (Ic.skipFirstTimelinelabel = !0);
						} else Rc === "datetime" ? Pc.dCtx.gridPad.right < zc && !Ic.rotateXLabels && (Ic.skipLastTimelinelabel = !0) : Rc !== "datetime" && Pc.dCtx.gridPad.right < zc / 2 - Pc.dCtx.yAxisWidthRight && !Ic.rotateXLabels && !Fc.config.xaxis.labels.trim && (Pc.dCtx.xPadRight = zc / 2 + 1);
					}(io);
				};
				Lc.yaxis.forEach((function(io, Fc) {
					Bc ? (Pc.dCtx.gridPad.left < zc && (Pc.dCtx.xPadLeft = zc / 2 + 1), Pc.dCtx.xPadRight = zc / 2 + 1) : Vc(io, Fc);
				}));
			}
		}
	]), io;
}(), ua = function() {
	function io(Pc) {
		i(this, io), this.w = Pc.w, this.dCtx = Pc;
	}
	return s(io, [
		{
			key: "getyAxisLabelsCoords",
			value: function() {
				var io = this, Pc = this.w, Fc = [], Ic = 10, Lc = new Ri(this.dCtx.ctx);
				return Pc.config.yaxis.map((function(Rc, zc) {
					var Bc = {
						seriesIndex: zc,
						dataPointIndex: -1,
						w: Pc
					}, Vc = Pc.globals.yAxisScale[zc], Hc = 0;
					if (!Lc.isYAxisHidden(zc) && Rc.labels.show && Rc.labels.minWidth !== void 0 && (Hc = Rc.labels.minWidth), !Lc.isYAxisHidden(zc) && Rc.labels.show && Vc.result.length) {
						var Uc = Pc.globals.yLabelFormatters[zc], Wc = Vc.niceMin === Number.MIN_VALUE ? 0 : Vc.niceMin, Gc = Vc.result.reduce((function(io, Pc) {
							var Fc, Ic;
							return ((Fc = String(Uc(io, Bc))) == null ? void 0 : Fc.length) > ((Ic = String(Uc(Pc, Bc))) == null ? void 0 : Ic.length) ? io : Pc;
						}), Wc), Kc = Gc = Uc(Gc, Bc);
						if (Gc !== void 0 && Gc.length !== 0 || (Gc = Vc.niceMax), Pc.globals.isBarHorizontal) {
							Ic = 0;
							var qc = Pc.globals.labels.slice();
							Gc = v.getLargestStringFromArr(qc), Gc = Uc(Gc, {
								seriesIndex: zc,
								dataPointIndex: -1,
								w: Pc
							}), Kc = io.dCtx.dimHelpers.getLargestStringFromMultiArr(Gc, qc);
						}
						var Jc = new Mi(io.dCtx.ctx), Yc = `rotate(${Rc.labels.rotate} 0 0)`, Xc = Jc.getTextRects(Gc, Rc.labels.style.fontSize, Rc.labels.style.fontFamily, Yc, !1), Zc = Xc;
						Gc !== Kc && (Zc = Jc.getTextRects(Kc, Rc.labels.style.fontSize, Rc.labels.style.fontFamily, Yc, !1)), Fc.push({
							width: (Hc > Zc.width || Hc > Xc.width ? Hc : Zc.width > Xc.width ? Zc.width : Xc.width) + Ic,
							height: Zc.height > Xc.height ? Zc.height : Xc.height
						});
					} else Fc.push({
						width: 0,
						height: 0
					});
				})), Fc;
			}
		},
		{
			key: "getyAxisTitleCoords",
			value: function() {
				var io = this, Pc = this.w, Fc = [];
				return Pc.config.yaxis.map((function(Pc, Ic) {
					if (Pc.show && Pc.title.text !== void 0) {
						var Lc = new Mi(io.dCtx.ctx), Rc = `rotate(${Pc.title.rotate} 0 0)`, zc = Lc.getTextRects(Pc.title.text, Pc.title.style.fontSize, Pc.title.style.fontFamily, Rc, !1);
						Fc.push({
							width: zc.width,
							height: zc.height
						});
					} else Fc.push({
						width: 0,
						height: 0
					});
				})), Fc;
			}
		},
		{
			key: "getTotalYAxisWidth",
			value: function() {
				var io = this.w, Pc = 0, Fc = 0, Ic = 0, Lc = io.globals.yAxisScale.length > 1 ? 10 : 0, Rc = new Ri(this.dCtx.ctx), zc = function(zc, Bc) {
					var Vc = io.config.yaxis[Bc].floating, Hc = 0;
					zc.width > 0 && !Vc ? (Hc = zc.width + Lc, function(Pc) {
						return io.globals.ignoreYAxisIndexes.indexOf(Pc) > -1;
					}(Bc) && (Hc = Hc - zc.width - Lc)) : Hc = Vc || Rc.isYAxisHidden(Bc) ? 0 : 5, io.config.yaxis[Bc].opposite ? Ic += Hc : Fc += Hc, Pc += Hc;
				};
				return io.globals.yLabelsCoords.map((function(io, Pc) {
					zc(io, Pc);
				})), io.globals.yTitleCoords.map((function(io, Pc) {
					zc(io, Pc);
				})), io.globals.isBarHorizontal && !io.config.yaxis[0].floating && (Pc = io.globals.yLabelsCoords[0].width + io.globals.yTitleCoords[0].width + 15), this.dCtx.yAxisWidthLeft = Fc, this.dCtx.yAxisWidthRight = Ic, Pc;
			}
		}
	]), io;
}(), ga = function() {
	function io(Pc) {
		i(this, io), this.w = Pc.w, this.dCtx = Pc;
	}
	return s(io, [
		{
			key: "gridPadForColumnsInNumericAxis",
			value: function(io) {
				var Pc = this.w, Fc = Pc.config, Ic = Pc.globals;
				if (Ic.noData || Ic.collapsedSeries.length + Ic.ancillaryCollapsedSeries.length === Fc.series.length) return 0;
				var Lc = function(io) {
					return [
						"bar",
						"rangeBar",
						"candlestick",
						"boxPlot"
					].includes(io);
				}, Rc = Fc.chart.type, zc = 0, Bc = Lc(Rc) ? Fc.series.length : 1;
				Ic.comboBarCount > 0 && (Bc = Ic.comboBarCount), Ic.collapsedSeries.forEach((function(io) {
					Lc(io.type) && --Bc;
				})), Fc.chart.stacked && (Bc = 1);
				var Vc = Lc(Rc) || Ic.comboBarCount > 0, Hc = Math.abs(Ic.initialMaxX - Ic.initialMinX);
				if (Vc && Ic.isXNumeric && !Ic.isBarHorizontal && Bc > 0 && Hc !== 0) {
					Hc <= 3 && (Hc = Ic.dataPoints);
					var Uc = Hc / io, Wc = Ic.minXDiff && Ic.minXDiff / Uc > 0 ? Ic.minXDiff / Uc : 0;
					Wc > io / 2 && (Wc /= 2), (zc = Wc * parseInt(Fc.plotOptions.bar.columnWidth, 10) / 100) < 1 && (zc = 1), Ic.barPadForNumericAxis = zc;
				}
				return zc;
			}
		},
		{
			key: "gridPadFortitleSubtitle",
			value: function() {
				var io = this, Pc = this.w, Fc = Pc.globals, Ic = this.dCtx.isSparkline || !Fc.axisCharts ? 0 : 10;
				["title", "subtitle"].forEach((function(Lc) {
					Pc.config[Lc].text === void 0 ? Ic += io.dCtx.isSparkline || !Fc.axisCharts ? 0 : 5 : Ic += Pc.config[Lc].margin;
				})), !Pc.config.legend.show || Pc.config.legend.position !== "bottom" || Pc.config.legend.floating || Fc.axisCharts || (Ic += 10);
				var Lc = this.dCtx.dimHelpers.getTitleSubtitleCoords("title"), Rc = this.dCtx.dimHelpers.getTitleSubtitleCoords("subtitle");
				Fc.gridHeight -= Lc.height + Rc.height + Ic, Fc.translateY += Lc.height + Rc.height + Ic;
			}
		},
		{
			key: "setGridXPosForDualYAxis",
			value: function(io, Pc) {
				var Fc = this.w, Ic = new Ri(this.dCtx.ctx);
				Fc.config.yaxis.forEach((function(Lc, Rc) {
					Fc.globals.ignoreYAxisIndexes.indexOf(Rc) !== -1 || Lc.floating || Ic.isYAxisHidden(Rc) || (Lc.opposite && (Fc.globals.translateX -= Pc[Rc].width + io[Rc].width + parseInt(Lc.labels.style.fontSize, 10) / 1.2 + 12), Fc.globals.translateX < 2 && (Fc.globals.translateX = 2));
				}));
			}
		}
	]), io;
}(), pa = function() {
	function io(Pc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w, this.lgRect = {}, this.yAxisWidth = 0, this.yAxisWidthLeft = 0, this.yAxisWidthRight = 0, this.xAxisHeight = 0, this.isSparkline = this.w.config.chart.sparkline.enabled, this.dimHelpers = new ca(this), this.dimYAxis = new ua(this), this.dimXAxis = new da(this), this.dimGrid = new ga(this), this.lgWidthForSideLegends = 0, this.gridPad = this.w.config.grid.padding, this.xPadRight = 0, this.xPadLeft = 0;
	}
	return s(io, [
		{
			key: "plotCoords",
			value: function() {
				var io = this, Pc = this.w, Fc = Pc.globals;
				this.lgRect = this.dimHelpers.getLegendsRect(), this.datalabelsCoords = {
					width: 0,
					height: 0
				};
				var Ic = Array.isArray(Pc.config.stroke.width) ? Math.max.apply(Math, f(Pc.config.stroke.width)) : Pc.config.stroke.width;
				this.isSparkline && ((Pc.config.markers.discrete.length > 0 || Pc.config.markers.size > 0) && Object.entries(this.gridPad).forEach((function(Pc) {
					var Fc = p(Pc, 2), Ic = Fc[0], Lc = Fc[1];
					io.gridPad[Ic] = Math.max(Lc, io.w.globals.markers.largestSize / 1.5);
				})), this.gridPad.top = Math.max(Ic / 2, this.gridPad.top), this.gridPad.bottom = Math.max(Ic / 2, this.gridPad.bottom)), Fc.axisCharts ? this.setDimensionsForAxisCharts() : this.setDimensionsForNonAxisCharts(), this.dimGrid.gridPadFortitleSubtitle(), Fc.gridHeight = Fc.gridHeight - this.gridPad.top - this.gridPad.bottom, Fc.gridWidth = Fc.gridWidth - this.gridPad.left - this.gridPad.right - this.xPadRight - this.xPadLeft;
				var Lc = this.dimGrid.gridPadForColumnsInNumericAxis(Fc.gridWidth);
				Fc.gridWidth -= 2 * Lc, Fc.translateX = Fc.translateX + this.gridPad.left + this.xPadLeft + (Lc > 0 ? Lc : 0), Fc.translateY += this.gridPad.top;
			}
		},
		{
			key: "setDimensionsForAxisCharts",
			value: function() {
				var io = this, Pc = this.w, Fc = Pc.globals, Ic = this.dimYAxis.getyAxisLabelsCoords(), Lc = this.dimYAxis.getyAxisTitleCoords();
				Fc.isSlopeChart && (this.datalabelsCoords = this.dimHelpers.getDatalabelsRect()), Pc.globals.yLabelsCoords = [], Pc.globals.yTitleCoords = [], Pc.config.yaxis.map((function(io, Fc) {
					Pc.globals.yLabelsCoords.push({
						width: Ic[Fc].width,
						index: Fc
					}), Pc.globals.yTitleCoords.push({
						width: Lc[Fc].width,
						index: Fc
					});
				})), this.yAxisWidth = this.dimYAxis.getTotalYAxisWidth();
				var Rc = this.dimXAxis.getxAxisLabelsCoords(), zc = this.dimXAxis.getxAxisGroupLabelsCoords(), Bc = this.dimXAxis.getxAxisTitleCoords();
				this.conditionalChecksForAxisCoords(Rc, Bc, zc), Fc.translateXAxisY = Pc.globals.rotateXLabels ? this.xAxisHeight / 8 : -4, Fc.translateXAxisX = Pc.globals.rotateXLabels && Pc.globals.isXNumeric && Pc.config.xaxis.labels.rotate <= -45 ? -this.xAxisWidth / 4 : 0, Pc.globals.isBarHorizontal && (Fc.rotateXLabels = !1, Fc.translateXAxisY = parseInt(Pc.config.xaxis.labels.style.fontSize, 10) / 1.5 * -1), Fc.translateXAxisY += Pc.config.xaxis.labels.offsetY, Fc.translateXAxisX += Pc.config.xaxis.labels.offsetX;
				var Vc = this.yAxisWidth, Hc = this.xAxisHeight;
				Fc.xAxisLabelsHeight = this.xAxisHeight - Bc.height, Fc.xAxisGroupLabelsHeight = Fc.xAxisLabelsHeight - Rc.height, Fc.xAxisLabelsWidth = this.xAxisWidth, Fc.xAxisHeight = this.xAxisHeight;
				var Uc = 10;
				(Pc.config.chart.type === "radar" || this.isSparkline) && (Vc = 0, Hc = 0), this.isSparkline && (this.lgRect = {
					height: 0,
					width: 0
				}), (this.isSparkline || Pc.config.chart.type === "treemap") && (Vc = 0, Hc = 0, Uc = 0), this.isSparkline || Pc.config.chart.type === "treemap" || this.dimXAxis.additionalPaddingXLabels(Rc);
				var Wc = function() {
					Fc.translateX = Vc + io.datalabelsCoords.width, Fc.gridHeight = Fc.svgHeight - io.lgRect.height - Hc - (io.isSparkline || Pc.config.chart.type === "treemap" ? 0 : Pc.globals.rotateXLabels ? 10 : 15), Fc.gridWidth = Fc.svgWidth - Vc - 2 * io.datalabelsCoords.width;
				};
				switch (Pc.config.xaxis.position === "top" && (Uc = Fc.xAxisHeight - Pc.config.xaxis.axisTicks.height - 5), Pc.config.legend.position) {
					case "bottom":
						Fc.translateY = Uc, Wc();
						break;
					case "top":
						Fc.translateY = this.lgRect.height + Uc, Wc();
						break;
					case "left":
						Fc.translateY = Uc, Fc.translateX = this.lgRect.width + Vc + this.datalabelsCoords.width, Fc.gridHeight = Fc.svgHeight - Hc - 12, Fc.gridWidth = Fc.svgWidth - this.lgRect.width - Vc - 2 * this.datalabelsCoords.width;
						break;
					case "right":
						Fc.translateY = Uc, Fc.translateX = Vc + this.datalabelsCoords.width, Fc.gridHeight = Fc.svgHeight - Hc - 12, Fc.gridWidth = Fc.svgWidth - this.lgRect.width - Vc - 2 * this.datalabelsCoords.width - 5;
						break;
					default: throw Error("Legend position not supported");
				}
				this.dimGrid.setGridXPosForDualYAxis(Lc, Ic), new ia(this.ctx).setYAxisXPosition(Ic, Lc);
			}
		},
		{
			key: "setDimensionsForNonAxisCharts",
			value: function() {
				var io = this.w, Pc = io.globals, Fc = io.config, Ic = 0;
				io.config.legend.show && !io.config.legend.floating && (Ic = 20);
				var Lc = Fc.chart.type === "pie" || Fc.chart.type === "polarArea" || Fc.chart.type === "donut" ? "pie" : "radialBar", Rc = Fc.plotOptions[Lc].offsetY, zc = Fc.plotOptions[Lc].offsetX;
				if (!Fc.legend.show || Fc.legend.floating) {
					Pc.gridHeight = Pc.svgHeight;
					var Bc = Pc.dom.elWrap.getBoundingClientRect().width;
					Pc.gridWidth = Math.min(Bc, Pc.gridHeight), Pc.translateY = Rc, Pc.translateX = zc + (Pc.svgWidth - Pc.gridWidth) / 2;
					return;
				}
				switch (Fc.legend.position) {
					case "bottom":
						Pc.gridHeight = Pc.svgHeight - this.lgRect.height, Pc.gridWidth = Pc.svgWidth, Pc.translateY = Rc - 10, Pc.translateX = zc + (Pc.svgWidth - Pc.gridWidth) / 2;
						break;
					case "top":
						Pc.gridHeight = Pc.svgHeight - this.lgRect.height, Pc.gridWidth = Pc.svgWidth, Pc.translateY = this.lgRect.height + Rc + 10, Pc.translateX = zc + (Pc.svgWidth - Pc.gridWidth) / 2;
						break;
					case "left":
						Pc.gridWidth = Pc.svgWidth - this.lgRect.width - Ic, Pc.gridHeight = Fc.chart.height === "auto" ? Pc.gridWidth : Pc.svgHeight, Pc.translateY = Rc, Pc.translateX = zc + this.lgRect.width + Ic;
						break;
					case "right":
						Pc.gridWidth = Pc.svgWidth - this.lgRect.width - Ic - 5, Pc.gridHeight = Fc.chart.height === "auto" ? Pc.gridWidth : Pc.svgHeight, Pc.translateY = Rc, Pc.translateX = zc + 10;
						break;
					default: throw Error("Legend position not supported");
				}
			}
		},
		{
			key: "conditionalChecksForAxisCoords",
			value: function(io, Pc, Fc) {
				var Ic = this.w, Lc = Ic.globals.hasXaxisGroups ? 2 : 1, Rc = Fc.height + io.height + Pc.height, zc = Ic.globals.isMultiLineX ? 1.2 : Ic.globals.LINE_HEIGHT_RATIO, Bc = Ic.globals.rotateXLabels ? 22 : 10, Vc = Ic.globals.rotateXLabels && Ic.config.legend.position === "bottom" ? 10 : 0;
				this.xAxisHeight = Rc * zc + Lc * Bc + Vc, this.xAxisWidth = io.width, this.xAxisHeight - Pc.height > Ic.config.xaxis.labels.maxHeight && (this.xAxisHeight = Ic.config.xaxis.labels.maxHeight), Ic.config.xaxis.labels.minHeight && this.xAxisHeight < Ic.config.xaxis.labels.minHeight && (this.xAxisHeight = Ic.config.xaxis.labels.minHeight), Ic.config.xaxis.floating && (this.xAxisHeight = 0);
				var Hc = 0, Uc = 0;
				Ic.config.yaxis.forEach((function(io) {
					Hc += io.labels.minWidth, Uc += io.labels.maxWidth;
				})), this.yAxisWidth < Hc && (this.yAxisWidth = Hc), this.yAxisWidth > Uc && (this.yAxisWidth = Uc);
			}
		}
	]), io;
}(), fa = function() {
	function io(Pc) {
		i(this, io), this.w = Pc.w, this.lgCtx = Pc;
	}
	return s(io, [
		{
			key: "getLegendStyles",
			value: function() {
				var io, Pc, Fc, Ic = document.createElement("style");
				Ic.setAttribute("type", "text/css");
				var Lc = ((io = this.lgCtx.ctx) == null || (Pc = io.opts) == null || (Fc = Pc.chart) == null ? void 0 : Fc.nonce) || this.w.config.chart.nonce;
				Lc && Ic.setAttribute("nonce", Lc);
				var Rc = document.createTextNode("\n      .apexcharts-flip-y {\n        transform: scaleY(-1) translateY(-100%);\n        transform-origin: top;\n        transform-box: fill-box;\n      }\n      .apexcharts-flip-x {\n        transform: scaleX(-1);\n        transform-origin: center;\n        transform-box: fill-box;\n      }\n      .apexcharts-legend {\n        display: flex;\n        overflow: auto;\n        padding: 0 10px;\n      }\n      .apexcharts-legend.apexcharts-legend-group-horizontal {\n        flex-direction: column;\n      }\n      .apexcharts-legend-group {\n        display: flex;\n      }\n      .apexcharts-legend-group-vertical {\n        flex-direction: column-reverse;\n      }\n      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\n        flex-wrap: wrap\n      }\n      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n        flex-direction: column;\n        bottom: 0;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n        justify-content: flex-start;\n        align-items: flex-start;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n        justify-content: center;\n        align-items: center;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n        justify-content: flex-end;\n        align-items: flex-end;\n      }\n      .apexcharts-legend-series {\n        cursor: pointer;\n        line-height: normal;\n        display: flex;\n        align-items: center;\n      }\n      .apexcharts-legend-text {\n        position: relative;\n        font-size: 14px;\n      }\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\n        pointer-events: none;\n      }\n      .apexcharts-legend-marker {\n        position: relative;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        margin-right: 1px;\n      }\n\n      .apexcharts-legend-series.apexcharts-no-click {\n        cursor: auto;\n      }\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\n        display: none !important;\n      }\n      .apexcharts-inactive-legend {\n        opacity: 0.45;\n      }\n\n    ");
				return Ic.appendChild(Rc), Ic;
			}
		},
		{
			key: "getLegendDimensions",
			value: function() {
				var io = this.w.globals.dom.baseEl.querySelector(".apexcharts-legend").getBoundingClientRect(), Pc = io.width;
				return {
					clwh: io.height,
					clww: Pc
				};
			}
		},
		{
			key: "appendToForeignObject",
			value: function() {
				this.w.globals.dom.elLegendForeign.appendChild(this.getLegendStyles());
			}
		},
		{
			key: "toggleDataSeries",
			value: function(io, Pc) {
				var Fc = this, Ic = this.w;
				if (Ic.globals.axisCharts || Ic.config.chart.type === "radialBar") {
					Ic.globals.resized = !0;
					var Lc = null, Rc = null;
					Ic.globals.risingSeries = [], Ic.globals.axisCharts ? (Lc = Ic.globals.dom.baseEl.querySelector(`.apexcharts-series[data\\:realIndex='${io}']`), Rc = parseInt(Lc.getAttribute("data:realIndex"), 10)) : (Lc = Ic.globals.dom.baseEl.querySelector(`.apexcharts-series[rel='${io + 1}']`), Rc = parseInt(Lc.getAttribute("rel"), 10) - 1), Pc ? [{
						cs: Ic.globals.collapsedSeries,
						csi: Ic.globals.collapsedSeriesIndices
					}, {
						cs: Ic.globals.ancillaryCollapsedSeries,
						csi: Ic.globals.ancillaryCollapsedSeriesIndices
					}].forEach((function(io) {
						Fc.riseCollapsedSeries(io.cs, io.csi, Rc);
					})) : this.hideSeries({
						seriesEl: Lc,
						realIndex: Rc
					});
				} else {
					var zc = Ic.globals.dom.Paper.findOne(` .apexcharts-series[rel='${io + 1}'] path`), Bc = Ic.config.chart.type;
					if (Bc === "pie" || Bc === "polarArea" || Bc === "donut") {
						var Vc = Ic.config.plotOptions.pie.donut.labels;
						new Mi(this.lgCtx.ctx).pathMouseDown(zc, null), this.lgCtx.ctx.pie.printDataLabelsInner(zc.node, Vc);
					}
					zc.fire("click");
				}
			}
		},
		{
			key: "getSeriesAfterCollapsing",
			value: function(io) {
				var Pc = io.realIndex, Fc = this.w, Ic = Fc.globals, Lc = v.clone(Fc.config.series);
				if (Ic.axisCharts) {
					var Rc = Fc.config.yaxis[Ic.seriesYAxisReverseMap[Pc]], zc = {
						index: Pc,
						data: Lc[Pc].data.slice(),
						type: Lc[Pc].type || Fc.config.chart.type
					};
					if (Rc && Rc.show && Rc.showAlways) Ic.ancillaryCollapsedSeriesIndices.indexOf(Pc) < 0 && (Ic.ancillaryCollapsedSeries.push(zc), Ic.ancillaryCollapsedSeriesIndices.push(Pc));
					else if (Ic.collapsedSeriesIndices.indexOf(Pc) < 0) {
						Ic.collapsedSeries.push(zc), Ic.collapsedSeriesIndices.push(Pc);
						var Bc = Ic.risingSeries.indexOf(Pc);
						Ic.risingSeries.splice(Bc, 1);
					}
				} else Ic.collapsedSeries.push({
					index: Pc,
					data: Lc[Pc]
				}), Ic.collapsedSeriesIndices.push(Pc);
				return Ic.allSeriesCollapsed = Ic.collapsedSeries.length + Ic.ancillaryCollapsedSeries.length === Fc.config.series.length, this._getSeriesBasedOnCollapsedState(Lc);
			}
		},
		{
			key: "hideSeries",
			value: function(io) {
				for (var Pc = io.seriesEl, Fc = io.realIndex, Ic = this.w, Lc = this.getSeriesAfterCollapsing({ realIndex: Fc }), Rc = Pc.childNodes, zc = 0; zc < Rc.length; zc++) Rc[zc].classList.contains("apexcharts-series-markers-wrap") && (Rc[zc].classList.contains("apexcharts-hide") ? Rc[zc].classList.remove("apexcharts-hide") : Rc[zc].classList.add("apexcharts-hide"));
				this.lgCtx.ctx.updateHelpers._updateSeries(Lc, Ic.config.chart.animations.dynamicAnimation.enabled);
			}
		},
		{
			key: "riseCollapsedSeries",
			value: function(io, Pc, Fc) {
				var Ic = this.w, Lc = v.clone(Ic.config.series);
				if (io.length > 0) {
					for (var Rc = 0; Rc < io.length; Rc++) io[Rc].index === Fc && (Ic.globals.axisCharts ? Lc[Fc].data = io[Rc].data.slice() : Lc[Fc] = io[Rc].data, typeof Lc[Fc] != "number" && (Lc[Fc].hidden = !1), io.splice(Rc, 1), Pc.splice(Rc, 1), Ic.globals.risingSeries.push(Fc));
					Lc = this._getSeriesBasedOnCollapsedState(Lc), this.lgCtx.ctx.updateHelpers._updateSeries(Lc, Ic.config.chart.animations.dynamicAnimation.enabled);
				}
			}
		},
		{
			key: "_getSeriesBasedOnCollapsedState",
			value: function(io) {
				var Pc = this.w, Fc = 0;
				return Pc.globals.axisCharts ? io.forEach((function(Ic, Lc) {
					Pc.globals.collapsedSeriesIndices.indexOf(Lc) < 0 && Pc.globals.ancillaryCollapsedSeriesIndices.indexOf(Lc) < 0 || (io[Lc].data = [], Fc++);
				})) : io.forEach((function(Ic, Lc) {
					!Pc.globals.collapsedSeriesIndices.indexOf(Lc) < 0 && (io[Lc] = 0, Fc++);
				})), Pc.globals.allSeriesCollapsed = Fc === io.length, io;
			}
		}
	]), io;
}(), xa = function() {
	function io(Pc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w, this.onLegendClick = this.onLegendClick.bind(this), this.onLegendHovered = this.onLegendHovered.bind(this), this.isBarsDistributed = this.w.config.chart.type === "bar" && this.w.config.plotOptions.bar.distributed && this.w.config.series.length === 1, this.legendHelpers = new fa(this);
	}
	return s(io, [
		{
			key: "init",
			value: function() {
				var io = this.w, Pc = io.globals, Fc = io.config, Ic = Fc.legend.showForSingleSeries && Pc.series.length === 1 || this.isBarsDistributed || Pc.series.length > 1;
				if (this.legendHelpers.appendToForeignObject(), (Ic || !Pc.axisCharts) && Fc.legend.show) {
					for (; Pc.dom.elLegendWrap.firstChild;) Pc.dom.elLegendWrap.removeChild(Pc.dom.elLegendWrap.firstChild);
					this.drawLegends(), Fc.legend.position === "bottom" || Fc.legend.position === "top" ? this.legendAlignHorizontal() : Fc.legend.position !== "right" && Fc.legend.position !== "left" || this.legendAlignVertical();
				}
			}
		},
		{
			key: "createLegendMarker",
			value: function(io) {
				var Pc = io.i, Fc = io.fillcolor, Ic = this.w, Lc = document.createElement("span");
				Lc.classList.add("apexcharts-legend-marker");
				var Rc = Ic.config.legend.markers.shape || Ic.config.markers.shape, zc = Rc;
				Array.isArray(Rc) && (zc = Rc[Pc]);
				var Bc = Array.isArray(Ic.config.legend.markers.size) ? parseFloat(Ic.config.legend.markers.size[Pc]) : parseFloat(Ic.config.legend.markers.size), Vc = Array.isArray(Ic.config.legend.markers.offsetX) ? parseFloat(Ic.config.legend.markers.offsetX[Pc]) : parseFloat(Ic.config.legend.markers.offsetX), Hc = Array.isArray(Ic.config.legend.markers.offsetY) ? parseFloat(Ic.config.legend.markers.offsetY[Pc]) : parseFloat(Ic.config.legend.markers.offsetY), Uc = Array.isArray(Ic.config.legend.markers.strokeWidth) ? parseFloat(Ic.config.legend.markers.strokeWidth[Pc]) : parseFloat(Ic.config.legend.markers.strokeWidth), Wc = Lc.style;
				if (Wc.height = 2 * (Bc + Uc) + "px", Wc.width = 2 * (Bc + Uc) + "px", Wc.left = Vc + "px", Wc.top = Hc + "px", Ic.config.legend.markers.customHTML) Wc.background = "transparent", Wc.color = Fc[Pc], Array.isArray(Ic.config.legend.markers.customHTML) ? Ic.config.legend.markers.customHTML[Pc] && (Lc.innerHTML = Ic.config.legend.markers.customHTML[Pc]()) : Lc.innerHTML = Ic.config.legend.markers.customHTML();
				else {
					var Gc = new Vi(this.ctx).getMarkerConfig({
						cssClass: `apexcharts-legend-marker apexcharts-marker apexcharts-marker-${zc}`,
						seriesIndex: Pc,
						strokeWidth: Uc,
						size: Bc
					}), qc = window.SVG().addTo(Lc).size("100%", "100%"), Jc = new Mi(this.ctx).drawMarker(0, 0, u(u({}, Gc), {}, {
						pointFillColor: Array.isArray(Fc) ? Fc[Pc] : Gc.pointFillColor,
						shape: zc
					}));
					Ic.globals.dom.Paper.find(".apexcharts-legend-marker.apexcharts-marker").forEach((function(io) {
						io.node.classList.contains("apexcharts-marker-triangle") ? io.node.style.transform = "translate(50%, 45%)" : io.node.style.transform = "translate(50%, 50%)";
					})), qc.add(Jc);
				}
				return Lc;
			}
		},
		{
			key: "drawLegends",
			value: function() {
				var io = this, Pc = this, Fc = this.w, Ic = Fc.config.legend.fontFamily, Lc = Fc.globals.seriesNames, Rc = Fc.config.legend.markers.fillColors ? Fc.config.legend.markers.fillColors.slice() : Fc.globals.colors.slice();
				if (Fc.config.chart.type === "heatmap") {
					var zc = Fc.config.plotOptions.heatmap.colorScale.ranges;
					Lc = zc.map((function(io) {
						return io.name ? io.name : io.from + " - " + io.to;
					})), Rc = zc.map((function(io) {
						return io.color;
					}));
				} else this.isBarsDistributed && (Lc = Fc.globals.labels.slice());
				Fc.config.legend.customLegendItems.length && (Lc = Fc.config.legend.customLegendItems);
				var Bc = Fc.globals.legendFormatter, Vc = Fc.config.legend.inverseOrder, Hc = [];
				Fc.globals.seriesGroups.length > 1 && Fc.config.legend.clusterGroupedSeries && Fc.globals.seriesGroups.forEach((function(io, Pc) {
					Hc[Pc] = document.createElement("div"), Hc[Pc].classList.add("apexcharts-legend-group", `apexcharts-legend-group-${Pc}`), Fc.config.legend.clusterGroupedSeriesOrientation === "horizontal" ? Fc.globals.dom.elLegendWrap.classList.add("apexcharts-legend-group-horizontal") : Hc[Pc].classList.add("apexcharts-legend-group-vertical");
				}));
				for (var Uc = function(Pc) {
					var zc, Vc = Bc(Lc[Pc], {
						seriesIndex: Pc,
						w: Fc
					}), Uc = !1, Wc = !1;
					if (Fc.globals.collapsedSeries.length > 0) for (var Gc = 0; Gc < Fc.globals.collapsedSeries.length; Gc++) Fc.globals.collapsedSeries[Gc].index === Pc && (Uc = !0);
					if (Fc.globals.ancillaryCollapsedSeriesIndices.length > 0) for (var Kc = 0; Kc < Fc.globals.ancillaryCollapsedSeriesIndices.length; Kc++) Fc.globals.ancillaryCollapsedSeriesIndices[Kc] === Pc && (Wc = !0);
					var qc = io.createLegendMarker({
						i: Pc,
						fillcolor: Rc
					});
					Mi.setAttrs(qc, {
						rel: Pc + 1,
						"data:collapsed": Uc || Wc
					}), (Uc || Wc) && qc.classList.add("apexcharts-inactive-legend");
					var Jc = document.createElement("div"), Yc = document.createElement("span");
					Yc.classList.add("apexcharts-legend-text"), Yc.innerHTML = Array.isArray(Vc) ? Vc.join(" ") : Vc;
					var Xc = Fc.config.legend.labels.useSeriesColors ? Fc.globals.colors[Pc] : Array.isArray(Fc.config.legend.labels.colors) ? (zc = Fc.config.legend.labels.colors) == null ? void 0 : zc[Pc] : Fc.config.legend.labels.colors;
					Xc || (Xc = Fc.config.chart.foreColor), Yc.style.color = Xc, Yc.style.fontSize = parseFloat(Fc.config.legend.fontSize) + "px", Yc.style.fontWeight = Fc.config.legend.fontWeight, Yc.style.fontFamily = Ic || Fc.config.chart.fontFamily, Mi.setAttrs(Yc, {
						rel: Pc + 1,
						i: Pc,
						"data:default-text": encodeURIComponent(Vc),
						"data:collapsed": Uc || Wc
					}), Jc.appendChild(qc), Jc.appendChild(Yc);
					var Zc = new Pi(io.ctx);
					Fc.config.legend.showForZeroSeries || Zc.getSeriesTotalByIndex(Pc) === 0 && Zc.seriesHaveSameValues(Pc) && !Zc.isSeriesNull(Pc) && Fc.globals.collapsedSeriesIndices.indexOf(Pc) === -1 && Fc.globals.ancillaryCollapsedSeriesIndices.indexOf(Pc) === -1 && Jc.classList.add("apexcharts-hidden-zero-series"), Fc.config.legend.showForNullSeries || Zc.isSeriesNull(Pc) && Fc.globals.collapsedSeriesIndices.indexOf(Pc) === -1 && Fc.globals.ancillaryCollapsedSeriesIndices.indexOf(Pc) === -1 && Jc.classList.add("apexcharts-hidden-null-series"), Hc.length ? Fc.globals.seriesGroups.forEach((function(io, Ic) {
						var Lc;
						io.includes((Lc = Fc.config.series[Pc]) == null ? void 0 : Lc.name) && (Fc.globals.dom.elLegendWrap.appendChild(Hc[Ic]), Hc[Ic].appendChild(Jc));
					})) : Fc.globals.dom.elLegendWrap.appendChild(Jc), Fc.globals.dom.elLegendWrap.classList.add(`apexcharts-align-${Fc.config.legend.horizontalAlign}`), Fc.globals.dom.elLegendWrap.classList.add("apx-legend-position-" + Fc.config.legend.position), Jc.classList.add("apexcharts-legend-series"), Jc.style.margin = `${Fc.config.legend.itemMargin.vertical}px ${Fc.config.legend.itemMargin.horizontal}px`, Fc.globals.dom.elLegendWrap.style.width = Fc.config.legend.width ? Fc.config.legend.width + "px" : "", Fc.globals.dom.elLegendWrap.style.height = Fc.config.legend.height ? Fc.config.legend.height + "px" : "", Mi.setAttrs(Jc, {
						rel: Pc + 1,
						seriesName: v.escapeString(Lc[Pc]),
						"data:collapsed": Uc || Wc
					}), (Uc || Wc) && Jc.classList.add("apexcharts-inactive-legend"), Fc.config.legend.onItemClick.toggleDataSeries || Jc.classList.add("apexcharts-no-click");
				}, Wc = Vc ? Lc.length - 1 : 0; Vc ? Wc >= 0 : Wc <= Lc.length - 1; Vc ? Wc-- : Wc++) Uc(Wc);
				Fc.globals.dom.elWrap.addEventListener("click", Pc.onLegendClick, !0), Fc.config.legend.onItemHover.highlightDataSeries && Fc.config.legend.customLegendItems.length === 0 && (Fc.globals.dom.elWrap.addEventListener("mousemove", Pc.onLegendHovered, !0), Fc.globals.dom.elWrap.addEventListener("mouseout", Pc.onLegendHovered, !0));
			}
		},
		{
			key: "setLegendWrapXY",
			value: function(io, Pc) {
				var Fc = this.w, Ic = Fc.globals.dom.elLegendWrap, Lc = Ic.clientHeight, Rc = 0, zc = 0;
				if (Fc.config.legend.position === "bottom") zc = Fc.globals.svgHeight - Math.min(Lc, Fc.globals.svgHeight / 2) - 5;
				else if (Fc.config.legend.position === "top") {
					var Bc = new pa(this.ctx), Vc = Bc.dimHelpers.getTitleSubtitleCoords("title").height, Hc = Bc.dimHelpers.getTitleSubtitleCoords("subtitle").height;
					zc = (Vc > 0 ? Vc - 10 : 0) + (Hc > 0 ? Hc - 10 : 0);
				}
				Ic.style.position = "absolute", Rc = Rc + io + Fc.config.legend.offsetX, zc = zc + Pc + Fc.config.legend.offsetY, Ic.style.left = Rc + "px", Ic.style.top = zc + "px", Fc.config.legend.position === "right" && (Ic.style.left = "auto", Ic.style.right = 25 + Fc.config.legend.offsetX + "px"), ["width", "height"].forEach((function(io) {
					Ic.style[io] && (Ic.style[io] = parseInt(Fc.config.legend[io], 10) + "px");
				}));
			}
		},
		{
			key: "legendAlignHorizontal",
			value: function() {
				var io = this.w;
				io.globals.dom.elLegendWrap.style.right = 0;
				var Pc = new pa(this.ctx), Fc = Pc.dimHelpers.getTitleSubtitleCoords("title"), Ic = Pc.dimHelpers.getTitleSubtitleCoords("subtitle"), Lc = 0;
				io.config.legend.position === "top" && (Lc = Fc.height + Ic.height + io.config.title.margin + io.config.subtitle.margin - 10), this.setLegendWrapXY(20, Lc);
			}
		},
		{
			key: "legendAlignVertical",
			value: function() {
				var io = this.w, Pc = this.legendHelpers.getLegendDimensions(), Fc = 0;
				io.config.legend.position === "left" && (Fc = 20), io.config.legend.position === "right" && (Fc = io.globals.svgWidth - Pc.clww - 10), this.setLegendWrapXY(Fc, 20);
			}
		},
		{
			key: "onLegendHovered",
			value: function(io) {
				var Pc = this.w, Fc = io.target.classList.contains("apexcharts-legend-series") || io.target.classList.contains("apexcharts-legend-text") || io.target.classList.contains("apexcharts-legend-marker");
				if (Pc.config.chart.type === "heatmap" || this.isBarsDistributed) {
					if (Fc) {
						var Ic = parseInt(io.target.getAttribute("rel"), 10) - 1;
						this.ctx.events.fireEvent("legendHover", [
							this.ctx,
							Ic,
							this.w
						]), new Zi(this.ctx).highlightRangeInSeries(io, io.target);
					}
				} else !io.target.classList.contains("apexcharts-inactive-legend") && Fc && new Zi(this.ctx).toggleSeriesOnHover(io, io.target);
			}
		},
		{
			key: "onLegendClick",
			value: function(io) {
				var Pc = this.w;
				if (!Pc.config.legend.customLegendItems.length && (io.target.classList.contains("apexcharts-legend-series") || io.target.classList.contains("apexcharts-legend-text") || io.target.classList.contains("apexcharts-legend-marker"))) {
					var Fc = parseInt(io.target.getAttribute("rel"), 10) - 1, Ic = io.target.getAttribute("data:collapsed") === "true", Lc = this.w.config.chart.events.legendClick;
					typeof Lc == "function" && Lc(this.ctx, Fc, this.w), this.ctx.events.fireEvent("legendClick", [
						this.ctx,
						Fc,
						this.w
					]);
					var Rc = this.w.config.legend.markers.onClick;
					typeof Rc == "function" && io.target.classList.contains("apexcharts-legend-marker") && (Rc(this.ctx, Fc, this.w), this.ctx.events.fireEvent("legendMarkerClick", [
						this.ctx,
						Fc,
						this.w
					])), Pc.config.chart.type !== "treemap" && Pc.config.chart.type !== "heatmap" && !this.isBarsDistributed && Pc.config.legend.onItemClick.toggleDataSeries && this.legendHelpers.toggleDataSeries(Fc, Ic);
				}
			}
		}
	]), io;
}(), ba = function() {
	function io(Pc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w;
		var Fc = this.w;
		this.ev = this.w.config.chart.events, this.selectedClass = "apexcharts-selected", this.localeValues = this.w.globals.locale.toolbar, this.minX = Fc.globals.minX, this.maxX = Fc.globals.maxX;
	}
	return s(io, [
		{
			key: "createToolbar",
			value: function() {
				var io = this, Pc = this.w, Fc = function() {
					return document.createElement("div");
				}, Ic = Fc();
				if (Ic.setAttribute("class", "apexcharts-toolbar"), Ic.style.top = Pc.config.chart.toolbar.offsetY + "px", Ic.style.right = 3 - Pc.config.chart.toolbar.offsetX + "px", Pc.globals.dom.elWrap.appendChild(Ic), this.elZoom = Fc(), this.elZoomIn = Fc(), this.elZoomOut = Fc(), this.elPan = Fc(), this.elSelection = Fc(), this.elZoomReset = Fc(), this.elMenuIcon = Fc(), this.elMenu = Fc(), this.elCustomIcons = [], this.t = Pc.config.chart.toolbar.tools, Array.isArray(this.t.customIcons)) for (var Lc = 0; Lc < this.t.customIcons.length; Lc++) this.elCustomIcons.push(Fc());
				var Rc = [], zc = function(Fc, Ic, Lc) {
					var zc = Fc.toLowerCase();
					io.t[zc] && Pc.config.chart.zoom.enabled && Rc.push({
						el: Ic,
						icon: typeof io.t[zc] == "string" ? io.t[zc] : Lc,
						title: io.localeValues[Fc],
						class: `apexcharts-${zc}-icon`
					});
				};
				zc("zoomIn", this.elZoomIn, "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n    <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n    <path d=\"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"/>\n</svg>\n"), zc("zoomOut", this.elZoomOut, "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n    <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n    <path d=\"M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"/>\n</svg>\n");
				var Bc = function(Fc) {
					io.t[Fc] && Pc.config.chart[Fc].enabled && Rc.push({
						el: Fc === "zoom" ? io.elZoom : io.elSelection,
						icon: typeof io.t[Fc] == "string" ? io.t[Fc] : Fc === "zoom" ? "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n    <path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\"/>\n    <path d=\"M0 0h24v24H0V0z\" fill=\"none\"/>\n    <path d=\"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z\"/>\n</svg>" : "<svg fill=\"#6E8192\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n    <path d=\"M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z\"/>\n</svg>",
						title: io.localeValues[Fc === "zoom" ? "selectionZoom" : "selection"],
						class: Pc.globals.isTouchDevice ? "apexcharts-element-hidden" : `apexcharts-${Fc}-icon`
					});
				};
				Bc("zoom"), Bc("selection"), this.t.pan && Pc.config.chart.zoom.enabled && Rc.push({
					el: this.elPan,
					icon: typeof this.t.pan == "string" ? this.t.pan : "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n    <defs>\n        <path d=\"M0 0h24v24H0z\" id=\"a\"/>\n    </defs>\n    <clipPath id=\"b\">\n        <use overflow=\"visible\" xlink:href=\"#a\"/>\n    </clipPath>\n    <path clip-path=\"url(#b)\" d=\"M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z\"/>\n</svg>",
					title: this.localeValues.pan,
					class: Pc.globals.isTouchDevice ? "apexcharts-element-hidden" : "apexcharts-pan-icon"
				}), zc("reset", this.elZoomReset, "<svg fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z\"/>\n    <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n</svg>"), this.t.download && Rc.push({
					el: this.elMenuIcon,
					icon: typeof this.t.download == "string" ? this.t.download : "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"none\" d=\"M0 0h24v24H0V0z\"/><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"/></svg>",
					title: this.localeValues.menu,
					class: "apexcharts-menu-icon"
				});
				for (var Vc = 0; Vc < this.elCustomIcons.length; Vc++) Rc.push({
					el: this.elCustomIcons[Vc],
					icon: this.t.customIcons[Vc].icon,
					title: this.t.customIcons[Vc].title,
					index: this.t.customIcons[Vc].index,
					class: "apexcharts-toolbar-custom-icon " + this.t.customIcons[Vc].class
				});
				Rc.forEach((function(io, Pc) {
					io.index && v.moveIndexInArray(Rc, Pc, io.index);
				}));
				for (var Hc = 0; Hc < Rc.length; Hc++) Mi.setAttrs(Rc[Hc].el, {
					class: Rc[Hc].class,
					title: Rc[Hc].title
				}), Rc[Hc].el.innerHTML = Rc[Hc].icon, Ic.appendChild(Rc[Hc].el);
				this._createHamburgerMenu(Ic), Pc.globals.zoomEnabled ? this.elZoom.classList.add(this.selectedClass) : Pc.globals.panEnabled ? this.elPan.classList.add(this.selectedClass) : Pc.globals.selectionEnabled && this.elSelection.classList.add(this.selectedClass), this.addToolbarEventListeners();
			}
		},
		{
			key: "_createHamburgerMenu",
			value: function(io) {
				this.elMenuItems = [], io.appendChild(this.elMenu), Mi.setAttrs(this.elMenu, { class: "apexcharts-menu" });
				for (var Pc = [
					{
						name: "exportSVG",
						title: this.localeValues.exportToSVG
					},
					{
						name: "exportPNG",
						title: this.localeValues.exportToPNG
					},
					{
						name: "exportCSV",
						title: this.localeValues.exportToCSV
					}
				], Fc = 0; Fc < Pc.length; Fc++) this.elMenuItems.push(document.createElement("div")), this.elMenuItems[Fc].innerHTML = Pc[Fc].title, Mi.setAttrs(this.elMenuItems[Fc], {
					class: `apexcharts-menu-item ${Pc[Fc].name}`,
					title: Pc[Fc].title
				}), this.elMenu.appendChild(this.elMenuItems[Fc]);
			}
		},
		{
			key: "addToolbarEventListeners",
			value: function() {
				var io = this;
				this.elZoomReset.addEventListener("click", this.handleZoomReset.bind(this)), this.elSelection.addEventListener("click", this.toggleZoomSelection.bind(this, "selection")), this.elZoom.addEventListener("click", this.toggleZoomSelection.bind(this, "zoom")), this.elZoomIn.addEventListener("click", this.handleZoomIn.bind(this)), this.elZoomOut.addEventListener("click", this.handleZoomOut.bind(this)), this.elPan.addEventListener("click", this.togglePanning.bind(this)), this.elMenuIcon.addEventListener("click", this.toggleMenu.bind(this)), this.elMenuItems.forEach((function(Pc) {
					Pc.classList.contains("exportSVG") ? Pc.addEventListener("click", io.handleDownload.bind(io, "svg")) : Pc.classList.contains("exportPNG") ? Pc.addEventListener("click", io.handleDownload.bind(io, "png")) : Pc.classList.contains("exportCSV") && Pc.addEventListener("click", io.handleDownload.bind(io, "csv"));
				}));
				for (var Pc = 0; Pc < this.t.customIcons.length; Pc++) this.elCustomIcons[Pc].addEventListener("click", this.t.customIcons[Pc].click.bind(this, this.ctx, this.ctx.w));
			}
		},
		{
			key: "toggleZoomSelection",
			value: function(io) {
				this.ctx.getSyncedCharts().forEach((function(Pc) {
					Pc.ctx.toolbar.toggleOtherControls();
					var Fc = io === "selection" ? Pc.ctx.toolbar.elSelection : Pc.ctx.toolbar.elZoom, Ic = io === "selection" ? "selectionEnabled" : "zoomEnabled";
					Pc.w.globals[Ic] = !Pc.w.globals[Ic], Fc.classList.contains(Pc.ctx.toolbar.selectedClass) ? Fc.classList.remove(Pc.ctx.toolbar.selectedClass) : Fc.classList.add(Pc.ctx.toolbar.selectedClass);
				}));
			}
		},
		{
			key: "getToolbarIconsReference",
			value: function() {
				var io = this.w;
				this.elZoom || (this.elZoom = io.globals.dom.baseEl.querySelector(".apexcharts-zoom-icon")), this.elPan || (this.elPan = io.globals.dom.baseEl.querySelector(".apexcharts-pan-icon")), this.elSelection || (this.elSelection = io.globals.dom.baseEl.querySelector(".apexcharts-selection-icon"));
			}
		},
		{
			key: "enableZoomPanFromToolbar",
			value: function(io) {
				this.toggleOtherControls(), io === "pan" ? this.w.globals.panEnabled = !0 : this.w.globals.zoomEnabled = !0;
				var Pc = io === "pan" ? this.elPan : this.elZoom, Fc = io === "pan" ? this.elZoom : this.elPan;
				Pc && Pc.classList.add(this.selectedClass), Fc && Fc.classList.remove(this.selectedClass);
			}
		},
		{
			key: "togglePanning",
			value: function() {
				this.ctx.getSyncedCharts().forEach((function(io) {
					io.ctx.toolbar.toggleOtherControls(), io.w.globals.panEnabled = !io.w.globals.panEnabled, io.ctx.toolbar.elPan.classList.contains(io.ctx.toolbar.selectedClass) ? io.ctx.toolbar.elPan.classList.remove(io.ctx.toolbar.selectedClass) : io.ctx.toolbar.elPan.classList.add(io.ctx.toolbar.selectedClass);
				}));
			}
		},
		{
			key: "toggleOtherControls",
			value: function() {
				var io = this, Pc = this.w;
				Pc.globals.panEnabled = !1, Pc.globals.zoomEnabled = !1, Pc.globals.selectionEnabled = !1, this.getToolbarIconsReference(), [
					this.elPan,
					this.elSelection,
					this.elZoom
				].forEach((function(Pc) {
					Pc && Pc.classList.remove(io.selectedClass);
				}));
			}
		},
		{
			key: "handleZoomIn",
			value: function() {
				var io = this.w;
				io.globals.isRangeBar && (this.minX = io.globals.minY, this.maxX = io.globals.maxY);
				var Pc = (this.minX + this.maxX) / 2, Fc = (this.minX + Pc) / 2, Ic = (this.maxX + Pc) / 2, Lc = this._getNewMinXMaxX(Fc, Ic);
				io.globals.disableZoomIn || this.zoomUpdateOptions(Lc.minX, Lc.maxX);
			}
		},
		{
			key: "handleZoomOut",
			value: function() {
				var io = this.w;
				if (io.globals.isRangeBar && (this.minX = io.globals.minY, this.maxX = io.globals.maxY), !(io.config.xaxis.type === "datetime" && new Date(this.minX).getUTCFullYear() < 1e3)) {
					var Pc = (this.minX + this.maxX) / 2, Fc = this.minX - (Pc - this.minX), Ic = this.maxX - (Pc - this.maxX), Lc = this._getNewMinXMaxX(Fc, Ic);
					io.globals.disableZoomOut || this.zoomUpdateOptions(Lc.minX, Lc.maxX);
				}
			}
		},
		{
			key: "_getNewMinXMaxX",
			value: function(io, Pc) {
				var Fc = this.w.config.xaxis.convertedCatToNumeric;
				return {
					minX: Fc ? Math.floor(io) : io,
					maxX: Fc ? Math.floor(Pc) : Pc
				};
			}
		},
		{
			key: "zoomUpdateOptions",
			value: function(io, Pc) {
				var Fc = this.w;
				if (io !== void 0 || Pc !== void 0) {
					if (!(Fc.config.xaxis.convertedCatToNumeric && (io < 1 && (io = 1, Pc = Fc.globals.dataPoints), Pc - io < 2))) {
						var Ic = {
							min: io,
							max: Pc
						}, Lc = this.getBeforeZoomRange(Ic);
						Lc && (Ic = Lc.xaxis);
						var Rc = { xaxis: Ic }, zc = v.clone(Fc.globals.initialConfig.yaxis);
						Fc.config.chart.group || (Rc.yaxis = zc), this.w.globals.zoomed = !0, this.ctx.updateHelpers._updateOptions(Rc, !1, this.w.config.chart.animations.dynamicAnimation.enabled), this.zoomCallback(Ic, zc);
					}
				} else this.handleZoomReset();
			}
		},
		{
			key: "zoomCallback",
			value: function(io, Pc) {
				typeof this.ev.zoomed == "function" && (this.ev.zoomed(this.ctx, {
					xaxis: io,
					yaxis: Pc
				}), this.ctx.events.fireEvent("zoomed", {
					xaxis: io,
					yaxis: Pc
				}));
			}
		},
		{
			key: "getBeforeZoomRange",
			value: function(io, Pc) {
				var Fc = null;
				return typeof this.ev.beforeZoom == "function" && (Fc = this.ev.beforeZoom(this, {
					xaxis: io,
					yaxis: Pc
				})), Fc;
			}
		},
		{
			key: "toggleMenu",
			value: function() {
				var io = this;
				window.setTimeout((function() {
					io.elMenu.classList.contains("apexcharts-menu-open") ? io.elMenu.classList.remove("apexcharts-menu-open") : io.elMenu.classList.add("apexcharts-menu-open");
				}), 0);
			}
		},
		{
			key: "handleDownload",
			value: function(io) {
				var Pc = this.w, Fc = new Ji(this.ctx);
				switch (io) {
					case "svg":
						Fc.exportToSVG(this.ctx);
						break;
					case "png":
						Fc.exportToPng(this.ctx);
						break;
					case "csv": Fc.exportToCSV({
						series: Pc.config.series,
						columnDelimiter: Pc.config.chart.toolbar.export.csv.columnDelimiter
					});
				}
			}
		},
		{
			key: "handleZoomReset",
			value: function(io) {
				this.ctx.getSyncedCharts().forEach((function(io) {
					var Pc = io.w;
					if (Pc.globals.lastXAxis.min = Pc.globals.initialConfig.xaxis.min, Pc.globals.lastXAxis.max = Pc.globals.initialConfig.xaxis.max, io.updateHelpers.revertDefaultAxisMinMax(), typeof Pc.config.chart.events.beforeResetZoom == "function") {
						var Fc = Pc.config.chart.events.beforeResetZoom(io, Pc);
						Fc && io.updateHelpers.revertDefaultAxisMinMax(Fc);
					}
					typeof Pc.config.chart.events.zoomed == "function" && io.ctx.toolbar.zoomCallback({
						min: Pc.config.xaxis.min,
						max: Pc.config.xaxis.max
					}), Pc.globals.zoomed = !1;
					var Ic = io.ctx.series.emptyCollapsedSeries(v.clone(Pc.globals.initialSeries));
					io.updateHelpers._updateSeries(Ic, Pc.config.chart.animations.dynamicAnimation.enabled);
				}));
			}
		},
		{
			key: "destroy",
			value: function() {
				this.elZoom = null, this.elZoomIn = null, this.elZoomOut = null, this.elPan = null, this.elSelection = null, this.elZoomReset = null, this.elMenuIcon = null;
			}
		}
	]), io;
}(), ma = function(io) {
	h(Fc, ba);
	var Pc = n(Fc);
	function Fc(io) {
		var Lc;
		return i(this, Fc), (Lc = Pc.call(this, io)).ctx = io, Lc.w = io.w, Lc.dragged = !1, Lc.graphics = new Mi(Lc.ctx), Lc.eventList = [
			"mousedown",
			"mouseleave",
			"mousemove",
			"touchstart",
			"touchmove",
			"mouseup",
			"touchend",
			"wheel"
		], Lc.clientX = 0, Lc.clientY = 0, Lc.startX = 0, Lc.endX = 0, Lc.dragX = 0, Lc.startY = 0, Lc.endY = 0, Lc.dragY = 0, Lc.moveDirection = "none", Lc.debounceTimer = null, Lc.debounceDelay = 100, Lc.wheelDelay = 400, Lc;
	}
	return s(Fc, [
		{
			key: "init",
			value: function(io) {
				var Pc = this, Fc = io.xyRatios, Ic = this.w, Lc = this;
				this.xyRatios = Fc, this.zoomRect = this.graphics.drawRect(0, 0, 0, 0), this.selectionRect = this.graphics.drawRect(0, 0, 0, 0), this.gridRect = Ic.globals.dom.baseEl.querySelector(".apexcharts-grid"), this.constraints = new kt(0, 0, Ic.globals.gridWidth, Ic.globals.gridHeight), this.zoomRect.node.classList.add("apexcharts-zoom-rect"), this.selectionRect.node.classList.add("apexcharts-selection-rect"), Ic.globals.dom.Paper.add(this.zoomRect), Ic.globals.dom.Paper.add(this.selectionRect), Ic.config.chart.selection.type === "x" ? this.slDraggableRect = this.selectionRect.draggable({
					minX: 0,
					minY: 0,
					maxX: Ic.globals.gridWidth,
					maxY: Ic.globals.gridHeight
				}).on("dragmove.namespace", this.selectionDragging.bind(this, "dragging")) : Ic.config.chart.selection.type === "y" ? this.slDraggableRect = this.selectionRect.draggable({
					minX: 0,
					maxX: Ic.globals.gridWidth
				}).on("dragmove.namespace", this.selectionDragging.bind(this, "dragging")) : this.slDraggableRect = this.selectionRect.draggable().on("dragmove.namespace", this.selectionDragging.bind(this, "dragging")), this.preselectedSelection(), this.hoverArea = Ic.globals.dom.baseEl.querySelector(`${Ic.globals.chartClass} .apexcharts-svg`), this.hoverArea.classList.add("apexcharts-zoomable"), this.eventList.forEach((function(io) {
					Pc.hoverArea.addEventListener(io, Lc.svgMouseEvents.bind(Lc, Fc), {
						capture: !1,
						passive: !0
					});
				})), Ic.config.chart.zoom.enabled && Ic.config.chart.zoom.allowMouseWheelZoom && this.hoverArea.addEventListener("wheel", Lc.mouseWheelEvent.bind(Lc), {
					capture: !1,
					passive: !1
				});
			}
		},
		{
			key: "destroy",
			value: function() {
				this.slDraggableRect && (this.slDraggableRect.draggable(!1), this.slDraggableRect.off(), this.selectionRect.off()), this.selectionRect = null, this.zoomRect = null, this.gridRect = null;
			}
		},
		{
			key: "svgMouseEvents",
			value: function(io, Pc) {
				var Fc = this.w, Ic = this.ctx.toolbar, Lc = Fc.globals.zoomEnabled ? Fc.config.chart.zoom.type : Fc.config.chart.selection.type, Rc = Fc.config.chart.toolbar.autoSelected;
				if (Pc.shiftKey ? (this.shiftWasPressed = !0, Ic.enableZoomPanFromToolbar(Rc === "pan" ? "zoom" : "pan")) : this.shiftWasPressed && (Ic.enableZoomPanFromToolbar(Rc), this.shiftWasPressed = !1), Pc.target) {
					var zc, Bc = Pc.target.classList;
					if (Pc.target.parentNode && Pc.target.parentNode !== null && (zc = Pc.target.parentNode.classList), !(Bc.contains("apexcharts-legend-marker") || Bc.contains("apexcharts-legend-text") || zc && zc.contains("apexcharts-toolbar"))) {
						if (this.clientX = Pc.type === "touchmove" || Pc.type === "touchstart" ? Pc.touches[0].clientX : Pc.type === "touchend" ? Pc.changedTouches[0].clientX : Pc.clientX, this.clientY = Pc.type === "touchmove" || Pc.type === "touchstart" ? Pc.touches[0].clientY : Pc.type === "touchend" ? Pc.changedTouches[0].clientY : Pc.clientY, Pc.type === "mousedown" && Pc.which === 1 || Pc.type === "touchstart") {
							var Vc = this.gridRect.getBoundingClientRect();
							this.startX = this.clientX - Vc.left - Fc.globals.barPadForNumericAxis, this.startY = this.clientY - Vc.top, this.dragged = !1, this.w.globals.mousedown = !0;
						}
						(Pc.type === "mousemove" && Pc.which === 1 || Pc.type === "touchmove") && (this.dragged = !0, Fc.globals.panEnabled ? (Fc.globals.selection = null, this.w.globals.mousedown && this.panDragging({
							context: this,
							zoomtype: Lc,
							xyRatios: io
						})) : (this.w.globals.mousedown && Fc.globals.zoomEnabled || this.w.globals.mousedown && Fc.globals.selectionEnabled) && (this.selection = this.selectionDrawing({
							context: this,
							zoomtype: Lc
						}))), Pc.type !== "mouseup" && Pc.type !== "touchend" && Pc.type !== "mouseleave" || this.handleMouseUp({ zoomtype: Lc }), this.makeSelectionRectDraggable();
					}
				}
			}
		},
		{
			key: "handleMouseUp",
			value: function(io) {
				var Pc, Fc = io.zoomtype, Ic = io.isResized, Lc = this.w, Rc = (Pc = this.gridRect) == null ? void 0 : Pc.getBoundingClientRect();
				Rc && (this.w.globals.mousedown || Ic) && (this.endX = this.clientX - Rc.left - Lc.globals.barPadForNumericAxis, this.endY = this.clientY - Rc.top, this.dragX = Math.abs(this.endX - this.startX), this.dragY = Math.abs(this.endY - this.startY), (Lc.globals.zoomEnabled || Lc.globals.selectionEnabled) && this.selectionDrawn({
					context: this,
					zoomtype: Fc
				})), Lc.globals.zoomEnabled && this.hideSelectionRect(this.selectionRect), this.dragged = !1, this.w.globals.mousedown = !1;
			}
		},
		{
			key: "mouseWheelEvent",
			value: function(io) {
				var Pc = this, Fc = this.w;
				io.preventDefault();
				var Ic = Date.now();
				Ic - Fc.globals.lastWheelExecution > this.wheelDelay && (this.executeMouseWheelZoom(io), Fc.globals.lastWheelExecution = Ic), this.debounceTimer && clearTimeout(this.debounceTimer), this.debounceTimer = setTimeout((function() {
					Ic - Fc.globals.lastWheelExecution > Pc.wheelDelay && (Pc.executeMouseWheelZoom(io), Fc.globals.lastWheelExecution = Ic);
				}), this.debounceDelay);
			}
		},
		{
			key: "executeMouseWheelZoom",
			value: function(io) {
				var Pc, Fc = this.w;
				this.minX = Fc.globals.isRangeBar ? Fc.globals.minY : Fc.globals.minX, this.maxX = Fc.globals.isRangeBar ? Fc.globals.maxY : Fc.globals.maxX;
				var Ic = (Pc = this.gridRect) == null ? void 0 : Pc.getBoundingClientRect();
				if (Ic) {
					var Lc, Rc, zc, Bc = (io.clientX - Ic.left) / Ic.width, Vc = this.minX, Hc = this.maxX, Uc = Hc - Vc;
					if (io.deltaY < 0) {
						var Wc = Vc + Bc * Uc;
						Rc = Wc - (Lc = .5 * Uc) / 2, zc = Wc + Lc / 2;
					} else Rc = Vc - (Lc = 1.5 * Uc) / 2, zc = Hc + Lc / 2;
					if (!Fc.globals.isRangeBar) {
						Rc = Math.max(Rc, Fc.globals.initialMinX), zc = Math.min(zc, Fc.globals.initialMaxX);
						var Gc = .01 * (Fc.globals.initialMaxX - Fc.globals.initialMinX);
						if (zc - Rc < Gc) {
							var Kc = (Rc + zc) / 2;
							Rc = Kc - Gc / 2, zc = Kc + Gc / 2;
						}
					}
					var qc = this._getNewMinXMaxX(Rc, zc);
					isNaN(qc.minX) || isNaN(qc.maxX) || this.zoomUpdateOptions(qc.minX, qc.maxX);
				}
			}
		},
		{
			key: "makeSelectionRectDraggable",
			value: function() {
				var io = this, Pc = this.w;
				if (this.selectionRect) {
					var Fc = this.selectionRect.node.getBoundingClientRect();
					Fc.width > 0 && Fc.height > 0 && (this.selectionRect.select(!1).resize(!1), this.selectionRect.select({
						createRot: function() {},
						updateRot: function() {},
						createHandle: function(io, Pc, Fc, Ic, Lc) {
							return Lc === "l" || Lc === "r" ? io.circle(8).css({
								"stroke-width": 1,
								stroke: "#333",
								fill: "#fff"
							}) : io.circle(0);
						},
						updateHandle: function(io, Pc) {
							return io.center(Pc[0], Pc[1]);
						}
					}).resize().on("resize", (function() {
						var Fc = Pc.globals.zoomEnabled ? Pc.config.chart.zoom.type : Pc.config.chart.selection.type;
						io.handleMouseUp({
							zoomtype: Fc,
							isResized: !0
						});
					})));
				}
			}
		},
		{
			key: "preselectedSelection",
			value: function() {
				var io = this.w, Pc = this.xyRatios;
				if (!io.globals.zoomEnabled) {
					if (io.globals.selection !== void 0 && io.globals.selection !== null) this.drawSelectionRect(u(u({}, io.globals.selection), {}, {
						translateX: io.globals.translateX,
						translateY: io.globals.translateY
					}));
					else if (io.config.chart.selection.xaxis.min !== void 0 && io.config.chart.selection.xaxis.max !== void 0) {
						var Fc = (io.config.chart.selection.xaxis.min - io.globals.minX) / Pc.xRatio, Ic = io.globals.gridWidth - (io.globals.maxX - io.config.chart.selection.xaxis.max) / Pc.xRatio - Fc;
						io.globals.isRangeBar && (Fc = (io.config.chart.selection.xaxis.min - io.globals.yAxisScale[0].niceMin) / Pc.invertedYRatio, Ic = (io.config.chart.selection.xaxis.max - io.config.chart.selection.xaxis.min) / Pc.invertedYRatio);
						var Lc = {
							x: Fc,
							y: 0,
							width: Ic,
							height: io.globals.gridHeight,
							translateX: io.globals.translateX,
							translateY: io.globals.translateY,
							selectionEnabled: !0
						};
						this.drawSelectionRect(Lc), this.makeSelectionRectDraggable(), typeof io.config.chart.events.selection == "function" && io.config.chart.events.selection(this.ctx, {
							xaxis: {
								min: io.config.chart.selection.xaxis.min,
								max: io.config.chart.selection.xaxis.max
							},
							yaxis: {}
						});
					}
				}
			}
		},
		{
			key: "drawSelectionRect",
			value: function(io) {
				var Pc = io.x, Fc = io.y, Ic = io.width, Lc = io.height, Rc = io.translateX, zc = Rc === void 0 ? 0 : Rc, Bc = io.translateY, Vc = Bc === void 0 ? 0 : Bc, Hc = this.w, Uc = this.zoomRect, Wc = this.selectionRect;
				if (this.dragged || Hc.globals.selection !== null) {
					var Gc = { transform: "translate(" + zc + ", " + Vc + ")" };
					Hc.globals.zoomEnabled && this.dragged && (Ic < 0 && (Ic = 1), Uc.attr({
						x: Pc,
						y: Fc,
						width: Ic,
						height: Lc,
						fill: Hc.config.chart.zoom.zoomedArea.fill.color,
						"fill-opacity": Hc.config.chart.zoom.zoomedArea.fill.opacity,
						stroke: Hc.config.chart.zoom.zoomedArea.stroke.color,
						"stroke-width": Hc.config.chart.zoom.zoomedArea.stroke.width,
						"stroke-opacity": Hc.config.chart.zoom.zoomedArea.stroke.opacity
					}), Mi.setAttrs(Uc.node, Gc)), Hc.globals.selectionEnabled && (Wc.attr({
						x: Pc,
						y: Fc,
						width: Ic > 0 ? Ic : 0,
						height: Lc > 0 ? Lc : 0,
						fill: Hc.config.chart.selection.fill.color,
						"fill-opacity": Hc.config.chart.selection.fill.opacity,
						stroke: Hc.config.chart.selection.stroke.color,
						"stroke-width": Hc.config.chart.selection.stroke.width,
						"stroke-dasharray": Hc.config.chart.selection.stroke.dashArray,
						"stroke-opacity": Hc.config.chart.selection.stroke.opacity
					}), Mi.setAttrs(Wc.node, Gc));
				}
			}
		},
		{
			key: "hideSelectionRect",
			value: function(io) {
				io && io.attr({
					x: 0,
					y: 0,
					width: 0,
					height: 0
				});
			}
		},
		{
			key: "selectionDrawing",
			value: function(io) {
				var Pc = io.context, Fc = io.zoomtype, Ic = this.w, Lc = Pc, Rc = this.gridRect.getBoundingClientRect(), zc = Lc.startX - 1, Bc = Lc.startY, Vc = !1, Hc = !1, Uc = Lc.clientX - Rc.left - Ic.globals.barPadForNumericAxis, Wc = Lc.clientY - Rc.top, Gc = Uc - zc, qc = Wc - Bc, Jc = {
					translateX: Ic.globals.translateX,
					translateY: Ic.globals.translateY
				};
				return Math.abs(Gc + zc) > Ic.globals.gridWidth ? Gc = Ic.globals.gridWidth - zc : Uc < 0 && (Gc = zc), zc > Uc && (Vc = !0, Gc = Math.abs(Gc)), Bc > Wc && (Hc = !0, qc = Math.abs(qc)), Jc = u(u({}, Jc = Fc === "x" ? {
					x: Vc ? zc - Gc : zc,
					y: 0,
					width: Gc,
					height: Ic.globals.gridHeight
				} : Fc === "y" ? {
					x: 0,
					y: Hc ? Bc - qc : Bc,
					width: Ic.globals.gridWidth,
					height: qc
				} : {
					x: Vc ? zc - Gc : zc,
					y: Hc ? Bc - qc : Bc,
					width: Gc,
					height: qc
				}), {}, {
					translateX: Ic.globals.translateX,
					translateY: Ic.globals.translateY
				}), Lc.drawSelectionRect(Jc), Lc.selectionDragging("resizing"), Jc;
			}
		},
		{
			key: "selectionDragging",
			value: function(io, Pc) {
				var Fc = this, Ic = this.w;
				if (Pc) {
					Pc.preventDefault();
					var Lc = Pc.detail, Rc = Lc.handler, zc = Lc.box, Bc = zc.x, Vc = zc.y;
					Bc < this.constraints.x && (Bc = this.constraints.x), Vc < this.constraints.y && (Vc = this.constraints.y), zc.x2 > this.constraints.x2 && (Bc = this.constraints.x2 - zc.w), zc.y2 > this.constraints.y2 && (Vc = this.constraints.y2 - zc.h), Rc.move(Bc, Vc);
					var Hc = this.xyRatios, Uc = this.selectionRect, Wc = 0;
					io === "resizing" && (Wc = 30);
					var Gc = function(io) {
						return parseFloat(Uc.node.getAttribute(io));
					}, Kc = {
						x: Gc("x"),
						y: Gc("y"),
						width: Gc("width"),
						height: Gc("height")
					};
					Ic.globals.selection = Kc, typeof Ic.config.chart.events.selection == "function" && Ic.globals.selectionEnabled && (clearTimeout(this.w.globals.selectionResizeTimer), this.w.globals.selectionResizeTimer = window.setTimeout((function() {
						var io, Pc, Lc, Rc, zc = Fc.gridRect.getBoundingClientRect(), Bc = Uc.node.getBoundingClientRect();
						Ic.globals.isRangeBar ? (io = Ic.globals.yAxisScale[0].niceMin + (Bc.left - zc.left) * Hc.invertedYRatio, Pc = Ic.globals.yAxisScale[0].niceMin + (Bc.right - zc.left) * Hc.invertedYRatio, Lc = 0, Rc = 1) : (io = Ic.globals.xAxisScale.niceMin + (Bc.left - zc.left) * Hc.xRatio, Pc = Ic.globals.xAxisScale.niceMin + (Bc.right - zc.left) * Hc.xRatio, Lc = Ic.globals.yAxisScale[0].niceMin + (zc.bottom - Bc.bottom) * Hc.yRatio[0], Rc = Ic.globals.yAxisScale[0].niceMax - (Bc.top - zc.top) * Hc.yRatio[0]);
						var Vc = {
							xaxis: {
								min: io,
								max: Pc
							},
							yaxis: {
								min: Lc,
								max: Rc
							}
						};
						Ic.config.chart.events.selection(Fc.ctx, Vc), Ic.config.chart.brush.enabled && Ic.config.chart.events.brushScrolled !== void 0 && Ic.config.chart.events.brushScrolled(Fc.ctx, Vc);
					}), Wc));
				}
			}
		},
		{
			key: "selectionDrawn",
			value: function(io) {
				var Pc, Fc, Ic = io.context, Lc = io.zoomtype, Rc = this.w, zc = Ic, Bc = this.xyRatios, Vc = this.ctx.toolbar, Hc = Rc.globals.zoomEnabled ? zc.zoomRect.node.getBoundingClientRect() : zc.selectionRect.node.getBoundingClientRect(), Uc = zc.gridRect.getBoundingClientRect(), Wc = Hc.left - Uc.left - Rc.globals.barPadForNumericAxis, Gc = Hc.right - Uc.left - Rc.globals.barPadForNumericAxis, Kc = Hc.top - Uc.top, qc = Hc.bottom - Uc.top;
				Rc.globals.isRangeBar ? (Pc = Rc.globals.yAxisScale[0].niceMin + Wc * Bc.invertedYRatio, Fc = Rc.globals.yAxisScale[0].niceMin + Gc * Bc.invertedYRatio) : (Pc = Rc.globals.xAxisScale.niceMin + Wc * Bc.xRatio, Fc = Rc.globals.xAxisScale.niceMin + Gc * Bc.xRatio);
				var Jc = [], Yc = [];
				if (Rc.config.yaxis.forEach((function(io, Pc) {
					var Fc = Rc.globals.seriesYAxisMap[Pc][0], Ic = Rc.globals.yAxisScale[Pc].niceMax - Bc.yRatio[Fc] * Kc, Lc = Rc.globals.yAxisScale[Pc].niceMax - Bc.yRatio[Fc] * qc;
					Jc.push(Ic), Yc.push(Lc);
				})), zc.dragged && (zc.dragX > 10 || zc.dragY > 10) && Pc !== Fc) {
					if (Rc.globals.zoomEnabled) {
						var Xc = v.clone(Rc.globals.initialConfig.yaxis), Zc = v.clone(Rc.globals.initialConfig.xaxis);
						if (Rc.globals.zoomed = !0, Rc.config.xaxis.convertedCatToNumeric && (Pc = Math.floor(Pc), Fc = Math.floor(Fc), Pc < 1 && (Pc = 1, Fc = Rc.globals.dataPoints), Fc - Pc < 2 && (Fc = Pc + 1)), Lc !== "xy" && Lc !== "x" || (Zc = {
							min: Pc,
							max: Fc
						}), Lc !== "xy" && Lc !== "y" || Xc.forEach((function(io, Pc) {
							Xc[Pc].min = Yc[Pc], Xc[Pc].max = Jc[Pc];
						})), Vc) {
							var Qc = Vc.getBeforeZoomRange(Zc, Xc);
							Qc && (Zc = Qc.xaxis ? Qc.xaxis : Zc, Xc = Qc.yaxis ? Qc.yaxis : Xc);
						}
						var el = { xaxis: Zc };
						Rc.config.chart.group || (el.yaxis = Xc), zc.ctx.updateHelpers._updateOptions(el, !1, zc.w.config.chart.animations.dynamicAnimation.enabled), typeof Rc.config.chart.events.zoomed == "function" && Vc.zoomCallback(Zc, Xc);
					} else if (Rc.globals.selectionEnabled) {
						var tl, nl = null;
						tl = {
							min: Pc,
							max: Fc
						}, Lc !== "xy" && Lc !== "y" || (nl = v.clone(Rc.config.yaxis)).forEach((function(io, Pc) {
							nl[Pc].min = Yc[Pc], nl[Pc].max = Jc[Pc];
						})), Rc.globals.selection = zc.selection, typeof Rc.config.chart.events.selection == "function" && Rc.config.chart.events.selection(zc.ctx, {
							xaxis: tl,
							yaxis: nl
						});
					}
				}
			}
		},
		{
			key: "panDragging",
			value: function(io) {
				var Pc = io.context, Fc = this.w, Ic = Pc;
				if (Fc.globals.lastClientPosition.x !== void 0) {
					var Lc = Fc.globals.lastClientPosition.x - Ic.clientX, Rc = Fc.globals.lastClientPosition.y - Ic.clientY;
					Math.abs(Lc) > Math.abs(Rc) && Lc > 0 ? this.moveDirection = "left" : Math.abs(Lc) > Math.abs(Rc) && Lc < 0 ? this.moveDirection = "right" : Math.abs(Rc) > Math.abs(Lc) && Rc > 0 ? this.moveDirection = "up" : Math.abs(Rc) > Math.abs(Lc) && Rc < 0 && (this.moveDirection = "down");
				}
				Fc.globals.lastClientPosition = {
					x: Ic.clientX,
					y: Ic.clientY
				};
				var zc = Fc.globals.isRangeBar ? Fc.globals.minY : Fc.globals.minX, Bc = Fc.globals.isRangeBar ? Fc.globals.maxY : Fc.globals.maxX;
				Ic.panScrolled(zc, Bc);
			}
		},
		{
			key: "panScrolled",
			value: function(io, Pc) {
				var Fc = this.w, Ic = this.xyRatios, Lc = v.clone(Fc.globals.initialConfig.yaxis), Rc = Ic.xRatio, zc = Fc.globals.minX, Bc = Fc.globals.maxX;
				Fc.globals.isRangeBar && (Rc = Ic.invertedYRatio, zc = Fc.globals.minY, Bc = Fc.globals.maxY), this.moveDirection === "left" ? (io = zc + Fc.globals.gridWidth / 15 * Rc, Pc = Bc + Fc.globals.gridWidth / 15 * Rc) : this.moveDirection === "right" && (io = zc - Fc.globals.gridWidth / 15 * Rc, Pc = Bc - Fc.globals.gridWidth / 15 * Rc), Fc.globals.isRangeBar || (io < Fc.globals.initialMinX || Pc > Fc.globals.initialMaxX) && (io = zc, Pc = Bc);
				var Vc = { xaxis: {
					min: io,
					max: Pc
				} };
				Fc.config.chart.group || (Vc.yaxis = Lc), this.updateScrolledChart(Vc, io, Pc);
			}
		},
		{
			key: "updateScrolledChart",
			value: function(io, Pc, Fc) {
				var Ic = this.w;
				if (this.ctx.updateHelpers._updateOptions(io, !1, !1), typeof Ic.config.chart.events.scrolled == "function") {
					var Lc = { xaxis: {
						min: Pc,
						max: Fc
					} };
					Ic.config.chart.events.scrolled(this.ctx, Lc), this.ctx.events.fireEvent("scrolled", Lc);
				}
			}
		}
	]), Fc;
}(), va = function() {
	function io(Pc) {
		i(this, io), this.w = Pc.w, this.ttCtx = Pc, this.ctx = Pc.ctx;
	}
	return s(io, [
		{
			key: "getNearestValues",
			value: function(io) {
				var Pc = io.hoverArea, Fc = io.elGrid, Ic = io.clientX, Lc = io.clientY, Rc = this.w, zc = Fc.getBoundingClientRect(), Bc = zc.width, Vc = zc.height, Hc = Bc / (Rc.globals.dataPoints - 1), Uc = Vc / Rc.globals.dataPoints, Wc = this.hasBars();
				!Rc.globals.comboCharts && !Wc || Rc.config.xaxis.convertedCatToNumeric || (Hc = Bc / Rc.globals.dataPoints);
				var Gc = Ic - zc.left - Rc.globals.barPadForNumericAxis, Kc = Lc - zc.top;
				Gc < 0 || Kc < 0 || Gc > Bc || Kc > Vc ? (Pc.classList.remove("hovering-zoom"), Pc.classList.remove("hovering-pan")) : Rc.globals.zoomEnabled ? (Pc.classList.remove("hovering-pan"), Pc.classList.add("hovering-zoom")) : Rc.globals.panEnabled && (Pc.classList.remove("hovering-zoom"), Pc.classList.add("hovering-pan"));
				var qc = Math.round(Gc / Hc), Jc = Math.floor(Kc / Uc);
				Wc && !Rc.config.xaxis.convertedCatToNumeric && (qc = Math.ceil(Gc / Hc), --qc);
				var Yc = null, Xc = null, Zc = Rc.globals.seriesXvalues.map((function(io) {
					return io.filter((function(io) {
						return v.isNumber(io);
					}));
				})), Qc = Rc.globals.seriesYvalues.map((function(io) {
					return io.filter((function(io) {
						return v.isNumber(io);
					}));
				}));
				if (Rc.globals.isXNumeric) {
					var el = this.ttCtx.getElGrid().getBoundingClientRect(), tl = Gc * (el.width / Bc), nl = Kc * (el.height / Vc);
					Yc = (Xc = this.closestInMultiArray(tl, nl, Zc, Qc)).index, qc = Xc.j, Yc !== null && Rc.globals.hasNullValues && (Zc = Rc.globals.seriesXvalues[Yc], qc = (Xc = this.closestInArray(tl, Zc)).j);
				}
				return Rc.globals.capturedSeriesIndex = Yc === null ? -1 : Yc, (!qc || qc < 1) && (qc = 0), Rc.globals.isBarHorizontal ? Rc.globals.capturedDataPointIndex = Jc : Rc.globals.capturedDataPointIndex = qc, {
					capturedSeries: Yc,
					j: Rc.globals.isBarHorizontal ? Jc : qc,
					hoverX: Gc,
					hoverY: Kc
				};
			}
		},
		{
			key: "getFirstActiveXArray",
			value: function(io) {
				for (var Pc = this.w, Fc = 0, Ic = io.map((function(io, Pc) {
					return io.length > 0 ? Pc : -1;
				})), Lc = 0; Lc < Ic.length; Lc++) if (Ic[Lc] !== -1 && Pc.globals.collapsedSeriesIndices.indexOf(Lc) === -1 && Pc.globals.ancillaryCollapsedSeriesIndices.indexOf(Lc) === -1) {
					Fc = Ic[Lc];
					break;
				}
				return Fc;
			}
		},
		{
			key: "closestInMultiArray",
			value: function(io, Pc, Fc, Ic) {
				for (var Lc, Rc = this.w, zc = Infinity, Bc = null, Vc = null, Hc = 0; Hc < Fc.length; Hc++) if (Lc = Hc, Rc.globals.collapsedSeriesIndices.indexOf(Lc) === -1 && Rc.globals.ancillaryCollapsedSeriesIndices.indexOf(Lc) === -1) for (var Uc = Fc[Hc], Wc = Ic[Hc], Gc = Math.min(Uc.length, Wc.length), Kc = 0; Kc < Gc; Kc++) {
					var qc = io - Uc[Kc], Jc = Math.sqrt(qc * qc);
					if (!Rc.globals.allSeriesHasEqualX) {
						var Yc = Pc - Wc[Kc];
						Jc = Math.sqrt(qc * qc + Yc * Yc);
					}
					Jc < zc && (zc = Jc, Bc = Hc, Vc = Kc);
				}
				return {
					index: Bc,
					j: Vc
				};
			}
		},
		{
			key: "closestInArray",
			value: function(io, Pc) {
				for (var Fc = Pc[0], Ic = null, Lc = Math.abs(io - Fc), Rc = 0; Rc < Pc.length; Rc++) {
					var zc = Math.abs(io - Pc[Rc]);
					zc < Lc && (Lc = zc, Ic = Rc);
				}
				return { j: Ic };
			}
		},
		{
			key: "isXoverlap",
			value: function(io) {
				var Pc = [], Fc = this.w.globals.seriesX.filter((function(io) {
					return io[0] !== void 0;
				}));
				if (Fc.length > 0) for (var Ic = 0; Ic < Fc.length - 1; Ic++) Fc[Ic][io] !== void 0 && Fc[Ic + 1][io] !== void 0 && Fc[Ic][io] !== Fc[Ic + 1][io] && Pc.push("unEqual");
				return Pc.length === 0;
			}
		},
		{
			key: "isInitialSeriesSameLen",
			value: function() {
				for (var io = !0, Pc = this.w.globals.initialSeries, Fc = 0; Fc < Pc.length - 1; Fc++) if (Pc[Fc].data.length !== Pc[Fc + 1].data.length) {
					io = !1;
					break;
				}
				return io;
			}
		},
		{
			key: "getBarsHeight",
			value: function(io) {
				return f(io).reduce((function(io, Pc) {
					return io + Pc.getBBox().height;
				}), 0);
			}
		},
		{
			key: "getElMarkers",
			value: function(io) {
				return typeof io == "number" ? this.w.globals.dom.baseEl.querySelectorAll(`.apexcharts-series[data\\:realIndex='${io}'] .apexcharts-series-markers-wrap > *`) : this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap > *");
			}
		},
		{
			key: "getAllMarkers",
			value: function() {
				var io = this, Pc = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], Fc = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap");
				Fc = f(Fc), Pc && (Fc = Fc.filter((function(Pc) {
					var Fc = Number(Pc.getAttribute("data:realIndex"));
					return io.w.globals.collapsedSeriesIndices.indexOf(Fc) === -1;
				}))), Fc.sort((function(io, Pc) {
					var Fc = Number(io.getAttribute("data:realIndex")), Ic = Number(Pc.getAttribute("data:realIndex"));
					return Ic < Fc ? 1 : Ic > Fc ? -1 : 0;
				}));
				var Ic = [];
				return Fc.forEach((function(io) {
					Ic.push(io.querySelector(".apexcharts-marker"));
				})), Ic;
			}
		},
		{
			key: "hasMarkers",
			value: function(io) {
				return this.getElMarkers(io).length > 0;
			}
		},
		{
			key: "getPathFromPoint",
			value: function(io, Pc) {
				var Fc = Number(io.getAttribute("cx")), Ic = Number(io.getAttribute("cy")), Lc = io.getAttribute("shape");
				return new Mi(this.ctx).getMarkerPath(Fc, Ic, Lc, Pc);
			}
		},
		{
			key: "getElBars",
			value: function() {
				return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series,  .apexcharts-candlestick-series, .apexcharts-boxPlot-series, .apexcharts-rangebar-series");
			}
		},
		{
			key: "hasBars",
			value: function() {
				return this.getElBars().length > 0;
			}
		},
		{
			key: "getHoverMarkerSize",
			value: function(io) {
				var Pc = this.w, Fc = Pc.config.markers.hover.size;
				return Fc === void 0 && (Fc = Pc.globals.markers.size[io] + Pc.config.markers.hover.sizeOffset), Fc;
			}
		},
		{
			key: "toggleAllTooltipSeriesGroups",
			value: function(io) {
				var Pc = this.w, Fc = this.ttCtx;
				Fc.allTooltipSeriesGroups.length === 0 && (Fc.allTooltipSeriesGroups = Pc.globals.dom.baseEl.querySelectorAll(".apexcharts-tooltip-series-group"));
				for (var Ic = Fc.allTooltipSeriesGroups, Lc = 0; Lc < Ic.length; Lc++) io === "enable" ? (Ic[Lc].classList.add("apexcharts-active"), Ic[Lc].style.display = Pc.config.tooltip.items.display) : (Ic[Lc].classList.remove("apexcharts-active"), Ic[Lc].style.display = "none");
			}
		}
	]), io;
}(), ya = function() {
	function io(Pc) {
		i(this, io), this.w = Pc.w, this.ctx = Pc.ctx, this.ttCtx = Pc, this.tooltipUtil = new va(Pc);
	}
	return s(io, [
		{
			key: "drawSeriesTexts",
			value: function(io) {
				var Pc = io.shared, Fc = Pc === void 0 || Pc, Ic = io.ttItems, Lc = io.i, Rc = Lc === void 0 ? 0 : Lc, zc = io.j, Bc = zc === void 0 ? null : zc, Vc = io.y1, Hc = io.y2, Uc = io.e, Wc = this.w;
				Wc.config.tooltip.custom === void 0 ? this.toggleActiveInactiveSeries(Fc, Rc) : this.handleCustomTooltip({
					i: Rc,
					j: Bc,
					y1: Vc,
					y2: Hc,
					w: Wc
				});
				var Gc = this.getValuesToPrint({
					i: Rc,
					j: Bc
				});
				this.printLabels({
					i: Rc,
					j: Bc,
					values: Gc,
					ttItems: Ic,
					shared: Fc,
					e: Uc
				});
				var Kc = this.ttCtx.getElTooltip();
				this.ttCtx.tooltipRect.ttWidth = Kc.getBoundingClientRect().width, this.ttCtx.tooltipRect.ttHeight = Kc.getBoundingClientRect().height;
			}
		},
		{
			key: "printLabels",
			value: function(io) {
				var Pc, Fc = this, Ic = io.i, Lc = io.j, Rc = io.values, zc = io.ttItems, Bc = io.shared, Vc = io.e, Hc = this.w, Uc = [], Wc = function(io) {
					return Hc.globals.seriesGoals[io] && Hc.globals.seriesGoals[io][Lc] && Array.isArray(Hc.globals.seriesGoals[io][Lc]);
				}, Gc = Rc.xVal, qc = Rc.zVal, Jc = Rc.xAxisTTVal, Yc = "", Xc = Hc.globals.colors[Ic];
				Lc !== null && Hc.config.plotOptions.bar.distributed && (Xc = Hc.globals.colors[Lc]);
				for (var Zc = function(io, Rc) {
					var Zc = Fc.getFormatters(Ic);
					Yc = Fc.getSeriesName({
						fn: Zc.yLbTitleFormatter,
						index: Ic,
						seriesIndex: Ic,
						j: Lc
					}), Hc.config.chart.type === "treemap" && (Yc = Zc.yLbTitleFormatter(String(Hc.config.series[Ic].data[Lc].x), {
						series: Hc.globals.series,
						seriesIndex: Ic,
						dataPointIndex: Lc,
						w: Hc
					}));
					var Qc = Hc.config.tooltip.inverseOrder ? Rc : io;
					if (Hc.globals.axisCharts) {
						var $c = function(io) {
							var Pc, Fc, Ic, Rc;
							return Hc.globals.isRangeData ? Zc.yLbFormatter((Pc = Hc.globals.seriesRangeStart) == null || (Fc = Pc[io]) == null ? void 0 : Fc[Lc], {
								series: Hc.globals.seriesRangeStart,
								seriesIndex: io,
								dataPointIndex: Lc,
								w: Hc
							}) + " - " + Zc.yLbFormatter((Ic = Hc.globals.seriesRangeEnd) == null || (Rc = Ic[io]) == null ? void 0 : Rc[Lc], {
								series: Hc.globals.seriesRangeEnd,
								seriesIndex: io,
								dataPointIndex: Lc,
								w: Hc
							}) : Zc.yLbFormatter(Hc.globals.series[io][Lc], {
								series: Hc.globals.series,
								seriesIndex: io,
								dataPointIndex: Lc,
								w: Hc
							});
						};
						if (Bc) Zc = Fc.getFormatters(Qc), Yc = Fc.getSeriesName({
							fn: Zc.yLbTitleFormatter,
							index: Qc,
							seriesIndex: Ic,
							j: Lc
						}), Xc = Hc.globals.colors[Qc], Pc = $c(Qc), Wc(Qc) && (Uc = Hc.globals.seriesGoals[Qc][Lc].map((function(io) {
							return {
								attrs: io,
								val: Zc.yLbFormatter(io.value, {
									seriesIndex: Qc,
									dataPointIndex: Lc,
									w: Hc
								})
							};
						})));
						else {
							var el, tl = Vc == null || (el = Vc.target) == null ? void 0 : el.getAttribute("fill");
							tl && (tl.indexOf("url") === -1 ? Xc = tl : tl.indexOf("Pattern") !== -1 && (Xc = Hc.globals.dom.baseEl.querySelector(tl.substr(4).slice(0, -1)).childNodes[0].getAttribute("stroke"))), Pc = $c(Ic), Wc(Ic) && Array.isArray(Hc.globals.seriesGoals[Ic][Lc]) && (Uc = Hc.globals.seriesGoals[Ic][Lc].map((function(io) {
								return {
									attrs: io,
									val: Zc.yLbFormatter(io.value, {
										seriesIndex: Ic,
										dataPointIndex: Lc,
										w: Hc
									})
								};
							})));
						}
					}
					Lc === null && (Pc = Zc.yLbFormatter(Hc.globals.series[Ic], u(u({}, Hc), {}, {
						seriesIndex: Ic,
						dataPointIndex: Ic
					}))), Fc.DOMHandling({
						i: Ic,
						t: Qc,
						j: Lc,
						ttItems: zc,
						values: {
							val: Pc,
							goalVals: Uc,
							xVal: Gc,
							xAxisTTVal: Jc,
							zVal: qc
						},
						seriesName: Yc,
						shared: Bc,
						pColor: Xc
					});
				}, Qc = 0, $c = Hc.globals.series.length - 1; Qc < Hc.globals.series.length; Qc++, $c--) Zc(Qc, $c);
			}
		},
		{
			key: "getFormatters",
			value: function(io) {
				var Pc, Fc = this.w, Ic = Fc.globals.yLabelFormatters[io];
				return Fc.globals.ttVal === void 0 ? Pc = Fc.config.tooltip.y.title.formatter : Array.isArray(Fc.globals.ttVal) ? (Ic = Fc.globals.ttVal[io] && Fc.globals.ttVal[io].formatter, Pc = Fc.globals.ttVal[io] && Fc.globals.ttVal[io].title && Fc.globals.ttVal[io].title.formatter) : (Ic = Fc.globals.ttVal.formatter, typeof Fc.globals.ttVal.title.formatter == "function" && (Pc = Fc.globals.ttVal.title.formatter)), typeof Ic != "function" && (Ic = Fc.globals.yLabelFormatters[0] ? Fc.globals.yLabelFormatters[0] : function(io) {
					return io;
				}), typeof Pc != "function" && (Pc = function(io) {
					return io ? io + ": " : "";
				}), {
					yLbFormatter: Ic,
					yLbTitleFormatter: Pc
				};
			}
		},
		{
			key: "getSeriesName",
			value: function(io) {
				var Pc = io.fn, Fc = io.index, Ic = io.seriesIndex, Lc = io.j, Rc = this.w;
				return Pc(String(Rc.globals.seriesNames[Fc]), {
					series: Rc.globals.series,
					seriesIndex: Ic,
					dataPointIndex: Lc,
					w: Rc
				});
			}
		},
		{
			key: "DOMHandling",
			value: function(io) {
				io.i;
				var Pc = io.t, Fc = io.j, Ic = io.ttItems, Lc = io.values, Rc = io.seriesName, zc = io.shared, Bc = io.pColor, Vc = this.w, Hc = this.ttCtx, Uc = Lc.val, Wc = Lc.goalVals, Gc = Lc.xVal, Kc = Lc.xAxisTTVal, qc = Lc.zVal, Jc = null;
				Jc = Ic[Pc].children, Vc.config.tooltip.fillSeriesColor && (Ic[Pc].style.backgroundColor = Bc, Jc[0].style.display = "none"), Hc.showTooltipTitle && (Hc.tooltipTitle === null && (Hc.tooltipTitle = Vc.globals.dom.baseEl.querySelector(".apexcharts-tooltip-title")), Hc.tooltipTitle.innerHTML = Gc), Hc.isXAxisTooltipEnabled && (Hc.xaxisTooltipText.innerHTML = Kc === "" ? Gc : Kc);
				var Yc = Ic[Pc].querySelector(".apexcharts-tooltip-text-y-label");
				Yc && (Yc.innerHTML = Rc || "");
				var Xc = Ic[Pc].querySelector(".apexcharts-tooltip-text-y-value");
				Xc && (Xc.innerHTML = Uc === void 0 ? "" : Uc), Jc[0] && Jc[0].classList.contains("apexcharts-tooltip-marker") && (Vc.config.tooltip.marker.fillColors && Array.isArray(Vc.config.tooltip.marker.fillColors) && (Bc = Vc.config.tooltip.marker.fillColors[Pc]), Vc.config.tooltip.fillSeriesColor ? Jc[0].style.backgroundColor = Bc : Jc[0].style.color = Bc), Vc.config.tooltip.marker.show || (Jc[0].style.display = "none");
				var Zc = Ic[Pc].querySelector(".apexcharts-tooltip-text-goals-label"), Qc = Ic[Pc].querySelector(".apexcharts-tooltip-text-goals-value");
				if (Wc.length && Vc.globals.seriesGoals[Pc]) {
					var $c = function() {
						var io = "<div>", Pc = "<div>";
						Wc.forEach((function(Fc, Ic) {
							io += ` <div style="display: flex"><span class="apexcharts-tooltip-marker" style="background-color: ${Fc.attrs.strokeColor}; height: 3px; border-radius: 0; top: 5px;"></span> ${Fc.attrs.name}</div>`, Pc += `<div>${Fc.val}</div>`;
						})), Zc.innerHTML = io + "</div>", Qc.innerHTML = Pc + "</div>";
					};
					zc ? Vc.globals.seriesGoals[Pc][Fc] && Array.isArray(Vc.globals.seriesGoals[Pc][Fc]) ? $c() : (Zc.innerHTML = "", Qc.innerHTML = "") : $c();
				} else Zc.innerHTML = "", Qc.innerHTML = "";
				if (qc !== null && (Ic[Pc].querySelector(".apexcharts-tooltip-text-z-label").innerHTML = Vc.config.tooltip.z.title, Ic[Pc].querySelector(".apexcharts-tooltip-text-z-value").innerHTML = qc === void 0 ? "" : qc), zc && Jc[0]) {
					if (Vc.config.tooltip.hideEmptySeries) {
						var el = Ic[Pc].querySelector(".apexcharts-tooltip-marker"), tl = Ic[Pc].querySelector(".apexcharts-tooltip-text");
						parseFloat(Uc) == 0 ? (el.style.display = "none", tl.style.display = "none") : (el.style.display = "block", tl.style.display = "block");
					}
					Uc == null || Vc.globals.ancillaryCollapsedSeriesIndices.indexOf(Pc) > -1 || Vc.globals.collapsedSeriesIndices.indexOf(Pc) > -1 || Array.isArray(Hc.tConfig.enabledOnSeries) && Hc.tConfig.enabledOnSeries.indexOf(Pc) === -1 ? Jc[0].parentNode.style.display = "none" : Jc[0].parentNode.style.display = Vc.config.tooltip.items.display;
				} else Array.isArray(Hc.tConfig.enabledOnSeries) && Hc.tConfig.enabledOnSeries.indexOf(Pc) === -1 && (Jc[0].parentNode.style.display = "none");
			}
		},
		{
			key: "toggleActiveInactiveSeries",
			value: function(io, Pc) {
				var Fc = this.w;
				if (io) this.tooltipUtil.toggleAllTooltipSeriesGroups("enable");
				else {
					this.tooltipUtil.toggleAllTooltipSeriesGroups("disable");
					var Ic = Fc.globals.dom.baseEl.querySelector(`.apexcharts-tooltip-series-group-${Pc}`);
					Ic && (Ic.classList.add("apexcharts-active"), Ic.style.display = Fc.config.tooltip.items.display);
				}
			}
		},
		{
			key: "getValuesToPrint",
			value: function(io) {
				var Pc = io.i, Fc = io.j, Ic = this.w, Lc = this.ctx.series.filteredSeriesX(), Rc = "", zc = "", Bc = null, Vc = null, Hc = {
					series: Ic.globals.series,
					seriesIndex: Pc,
					dataPointIndex: Fc,
					w: Ic
				}, Uc = Ic.globals.ttZFormatter;
				Fc === null ? Vc = Ic.globals.series[Pc] : Ic.globals.isXNumeric && Ic.config.chart.type !== "treemap" ? (Rc = Lc[Pc][Fc], Lc[Pc].length === 0 && (Rc = Lc[this.tooltipUtil.getFirstActiveXArray(Lc)][Fc])) : Rc = new $i(this.ctx).isFormatXY() ? Ic.config.series[Pc].data[Fc] === void 0 ? "" : Ic.config.series[Pc].data[Fc].x : Ic.globals.labels[Fc] === void 0 ? "" : Ic.globals.labels[Fc];
				var Wc = Rc;
				return Rc = Ic.globals.isXNumeric && Ic.config.xaxis.type === "datetime" ? new Xi(this.ctx).xLabelFormat(Ic.globals.ttKeyFormatter, Wc, Wc, {
					i: void 0,
					dateFormatter: new zi(this.ctx).formatDate,
					w: this.w
				}) : Ic.globals.isBarHorizontal ? Ic.globals.yLabelFormatters[0](Wc, Hc) : Ic.globals.xLabelFormatter(Wc, Hc), Ic.config.tooltip.x.formatter !== void 0 && (Rc = Ic.globals.ttKeyFormatter(Wc, Hc)), Ic.globals.seriesZ.length > 0 && Ic.globals.seriesZ[Pc].length > 0 && (Bc = Uc(Ic.globals.seriesZ[Pc][Fc], Ic)), zc = typeof Ic.config.xaxis.tooltip.formatter == "function" ? Ic.globals.xaxisTooltipFormatter(Wc, Hc) : Rc, {
					val: Array.isArray(Vc) ? Vc.join(" ") : Vc,
					xVal: Array.isArray(Rc) ? Rc.join(" ") : Rc,
					xAxisTTVal: Array.isArray(zc) ? zc.join(" ") : zc,
					zVal: Bc
				};
			}
		},
		{
			key: "handleCustomTooltip",
			value: function(io) {
				var Pc = io.i, Fc = io.j, Ic = io.y1, Lc = io.y2, Rc = io.w, zc = this.ttCtx.getElTooltip(), Bc = Rc.config.tooltip.custom;
				Array.isArray(Bc) && Bc[Pc] && (Bc = Bc[Pc]);
				var Vc = Bc({
					ctx: this.ctx,
					series: Rc.globals.series,
					seriesIndex: Pc,
					dataPointIndex: Fc,
					y1: Ic,
					y2: Lc,
					w: Rc
				});
				typeof Vc == "string" || typeof Vc == "number" ? zc.innerHTML = Vc : (Vc instanceof Element || typeof Vc.nodeName == "string") && (zc.innerHTML = "", zc.appendChild(Vc.cloneNode(!0)));
			}
		}
	]), io;
}(), wa = function() {
	function io(Pc) {
		i(this, io), this.ttCtx = Pc, this.ctx = Pc.ctx, this.w = Pc.w;
	}
	return s(io, [
		{
			key: "moveXCrosshairs",
			value: function(io) {
				var Pc = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, Fc = this.ttCtx, Ic = this.w, Lc = Fc.getElXCrosshairs(), Rc = io - Fc.xcrosshairsWidth / 2, zc = Ic.globals.labels.slice().length;
				if (Pc !== null && (Rc = Ic.globals.gridWidth / zc * Pc), Lc === null || Ic.globals.isBarHorizontal || (Lc.setAttribute("x", Rc), Lc.setAttribute("x1", Rc), Lc.setAttribute("x2", Rc), Lc.setAttribute("y2", Ic.globals.gridHeight), Lc.classList.add("apexcharts-active")), Rc < 0 && (Rc = 0), Rc > Ic.globals.gridWidth && (Rc = Ic.globals.gridWidth), Fc.isXAxisTooltipEnabled) {
					var Bc = Rc;
					Ic.config.xaxis.crosshairs.width !== "tickWidth" && Ic.config.xaxis.crosshairs.width !== "barWidth" || (Bc = Rc + Fc.xcrosshairsWidth / 2), this.moveXAxisTooltip(Bc);
				}
			}
		},
		{
			key: "moveYCrosshairs",
			value: function(io) {
				var Pc = this.ttCtx;
				Pc.ycrosshairs !== null && Mi.setAttrs(Pc.ycrosshairs, {
					y1: io,
					y2: io
				}), Pc.ycrosshairsHidden !== null && Mi.setAttrs(Pc.ycrosshairsHidden, {
					y1: io,
					y2: io
				});
			}
		},
		{
			key: "moveXAxisTooltip",
			value: function(io) {
				var Pc = this.w, Fc = this.ttCtx;
				if (Fc.xaxisTooltip !== null && Fc.xcrosshairsWidth !== 0) {
					Fc.xaxisTooltip.classList.add("apexcharts-active");
					var Ic = Fc.xaxisOffY + Pc.config.xaxis.tooltip.offsetY + Pc.globals.translateY + 1 + Pc.config.xaxis.offsetY;
					if (io -= Fc.xaxisTooltip.getBoundingClientRect().width / 2, !isNaN(io)) {
						io += Pc.globals.translateX;
						var Lc = new Mi(this.ctx).getTextRects(Fc.xaxisTooltipText.innerHTML);
						Fc.xaxisTooltipText.style.minWidth = Lc.width + "px", Fc.xaxisTooltip.style.left = io + "px", Fc.xaxisTooltip.style.top = Ic + "px";
					}
				}
			}
		},
		{
			key: "moveYAxisTooltip",
			value: function(io) {
				var Pc = this.w, Fc = this.ttCtx;
				Fc.yaxisTTEls === null && (Fc.yaxisTTEls = Pc.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
				var Ic = parseInt(Fc.ycrosshairsHidden.getAttribute("y1"), 10), Lc = Pc.globals.translateY + Ic, Rc = Fc.yaxisTTEls[io].getBoundingClientRect(), zc = Rc.height, Bc = Pc.globals.translateYAxisX[io] - 2;
				Pc.config.yaxis[io].opposite && (Bc -= Rc.width), Lc -= zc / 2, Pc.globals.ignoreYAxisIndexes.indexOf(io) === -1 && Lc > 0 && Lc < Pc.globals.gridHeight ? (Fc.yaxisTTEls[io].classList.add("apexcharts-active"), Fc.yaxisTTEls[io].style.top = Lc + "px", Fc.yaxisTTEls[io].style.left = Bc + Pc.config.yaxis[io].tooltip.offsetX + "px") : Fc.yaxisTTEls[io].classList.remove("apexcharts-active");
			}
		},
		{
			key: "moveTooltip",
			value: function(io, Pc) {
				var Fc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, Ic = this.w, Lc = this.ttCtx, Rc = Lc.getElTooltip(), zc = Lc.tooltipRect, Bc = Fc === null ? 1 : parseFloat(Fc), Vc = parseFloat(io) + Bc + 5, Hc = parseFloat(Pc) + Bc / 2;
				if (Vc > Ic.globals.gridWidth / 2 && (Vc = Vc - zc.ttWidth - Bc - 10), Vc > Ic.globals.gridWidth - zc.ttWidth - 10 && (Vc = Ic.globals.gridWidth - zc.ttWidth), Vc < -20 && (Vc = -20), Ic.config.tooltip.followCursor) {
					var Uc = Lc.getElGrid().getBoundingClientRect();
					(Vc = Lc.e.clientX - Uc.left) > Ic.globals.gridWidth / 2 && (Vc -= Lc.tooltipRect.ttWidth), (Hc = Lc.e.clientY + Ic.globals.translateY - Uc.top) > Ic.globals.gridHeight / 2 && (Hc -= Lc.tooltipRect.ttHeight);
				} else Ic.globals.isBarHorizontal || zc.ttHeight / 2 + Hc > Ic.globals.gridHeight && (Hc = Ic.globals.gridHeight - zc.ttHeight + Ic.globals.translateY);
				isNaN(Vc) || (Vc += Ic.globals.translateX, Rc.style.left = Vc + "px", Rc.style.top = Hc + "px");
			}
		},
		{
			key: "moveMarkers",
			value: function(io, Pc) {
				var Fc = this.w, Ic = this.ttCtx;
				if (Fc.globals.markers.size[io] > 0) for (var Lc = Fc.globals.dom.baseEl.querySelectorAll(` .apexcharts-series[data\\:realIndex='${io}'] .apexcharts-marker`), Rc = 0; Rc < Lc.length; Rc++) parseInt(Lc[Rc].getAttribute("rel"), 10) === Pc && (Ic.marker.resetPointsSize(), Ic.marker.enlargeCurrentPoint(Pc, Lc[Rc]));
				else Ic.marker.resetPointsSize(), this.moveDynamicPointOnHover(Pc, io);
			}
		},
		{
			key: "moveDynamicPointOnHover",
			value: function(io, Pc) {
				var Fc, Ic, Lc, Rc, zc = this.w, Bc = this.ttCtx, Vc = new Mi(this.ctx), Hc = zc.globals.pointsArray, Uc = Bc.tooltipUtil.getHoverMarkerSize(Pc), Wc = zc.config.series[Pc].type;
				if (!Wc || Wc !== "column" && Wc !== "candlestick" && Wc !== "boxPlot") {
					Lc = (Fc = Hc[Pc][io]) == null ? void 0 : Fc[0], Rc = ((Ic = Hc[Pc][io]) == null ? void 0 : Ic[1]) || 0;
					var Gc = zc.globals.dom.baseEl.querySelector(`.apexcharts-series[data\\:realIndex='${Pc}'] .apexcharts-series-markers path`);
					if (Gc && Rc < zc.globals.gridHeight && Rc > 0) {
						var Kc = Gc.getAttribute("shape"), qc = Vc.getMarkerPath(Lc, Rc, Kc, 1.5 * Uc);
						Gc.setAttribute("d", qc);
					}
					this.moveXCrosshairs(Lc), Bc.fixedTooltip || this.moveTooltip(Lc, Rc, Uc);
				}
			}
		},
		{
			key: "moveDynamicPointsOnHover",
			value: function(io) {
				var Pc, Fc = this.ttCtx, Ic = Fc.w, Lc = 0, Rc = 0, zc = Ic.globals.pointsArray, Bc = new Zi(this.ctx), Vc = new Mi(this.ctx);
				Pc = Bc.getActiveConfigSeriesIndex("asc", [
					"line",
					"area",
					"scatter",
					"bubble"
				]);
				var Hc = Fc.tooltipUtil.getHoverMarkerSize(Pc);
				if (zc[Pc] && (Lc = zc[Pc][io][0], Rc = zc[Pc][io][1]), !isNaN(Lc)) {
					var Uc = Fc.tooltipUtil.getAllMarkers();
					if (Uc.length) for (var Wc = 0; Wc < Ic.globals.series.length; Wc++) {
						var Gc = zc[Wc];
						if (Ic.globals.comboCharts && Gc === void 0 && Uc.splice(Wc, 0, null), Gc && Gc.length) {
							var Kc = zc[Wc][io][1], qc = void 0;
							Uc[Wc].setAttribute("cx", Lc);
							var Jc = Uc[Wc].getAttribute("shape");
							if (Ic.config.chart.type === "rangeArea" && !Ic.globals.comboCharts) {
								var Yc = io + Ic.globals.series[Wc].length;
								qc = zc[Wc][Yc][1], Kc -= Math.abs(Kc - qc) / 2;
							}
							if (Kc !== null && !isNaN(Kc) && Kc < Ic.globals.gridHeight + Hc && Kc + Hc > 0) {
								var Xc = Vc.getMarkerPath(Lc, Kc, Jc, Hc);
								Uc[Wc].setAttribute("d", Xc);
							} else Uc[Wc].setAttribute("d", "");
						}
					}
					this.moveXCrosshairs(Lc), Fc.fixedTooltip || this.moveTooltip(Lc, Rc || Ic.globals.gridHeight, Hc);
				}
			}
		},
		{
			key: "moveStickyTooltipOverBars",
			value: function(io, Pc) {
				var Fc = this.w, Ic = this.ttCtx, Lc = Fc.globals.columnSeries ? Fc.globals.columnSeries.length : Fc.globals.series.length;
				Fc.config.chart.stacked && (Lc = Fc.globals.barGroups.length);
				var Rc = Lc >= 2 && Lc % 2 == 0 ? Math.floor(Lc / 2) : Math.floor(Lc / 2) + 1;
				Fc.globals.isBarHorizontal && (Rc = new Zi(this.ctx).getActiveConfigSeriesIndex("desc") + 1);
				var zc = Fc.globals.dom.baseEl.querySelector(`.apexcharts-bar-series .apexcharts-series[rel='${Rc}'] path[j='${io}'], .apexcharts-candlestick-series .apexcharts-series[rel='${Rc}'] path[j='${io}'], .apexcharts-boxPlot-series .apexcharts-series[rel='${Rc}'] path[j='${io}'], .apexcharts-rangebar-series .apexcharts-series[rel='${Rc}'] path[j='${io}']`);
				zc || typeof Pc != "number" || (zc = Fc.globals.dom.baseEl.querySelector(`.apexcharts-bar-series .apexcharts-series[data\\:realIndex='${Pc}'] path[j='${io}'],
        .apexcharts-candlestick-series .apexcharts-series[data\\:realIndex='${Pc}'] path[j='${io}'],
        .apexcharts-boxPlot-series .apexcharts-series[data\\:realIndex='${Pc}'] path[j='${io}'],
        .apexcharts-rangebar-series .apexcharts-series[data\\:realIndex='${Pc}'] path[j='${io}']`));
				var Bc = zc ? parseFloat(zc.getAttribute("cx")) : 0, Vc = zc ? parseFloat(zc.getAttribute("cy")) : 0, Hc = zc ? parseFloat(zc.getAttribute("barWidth")) : 0, Uc = Ic.getElGrid().getBoundingClientRect(), Wc = zc && (zc.classList.contains("apexcharts-candlestick-area") || zc.classList.contains("apexcharts-boxPlot-area"));
				Fc.globals.isXNumeric ? (zc && !Wc && (Bc -= Lc % 2 == 0 ? 0 : Hc / 2), zc && Wc && (Bc -= Hc / 2)) : Fc.globals.isBarHorizontal || (Bc = Ic.xAxisTicksPositions[io - 1] + Ic.dataPointsDividedWidth / 2, isNaN(Bc) && (Bc = Ic.xAxisTicksPositions[io] - Ic.dataPointsDividedWidth / 2)), Fc.globals.isBarHorizontal ? Vc -= Ic.tooltipRect.ttHeight : Fc.config.tooltip.followCursor ? Vc = Ic.e.clientY - Uc.top - Ic.tooltipRect.ttHeight / 2 : Vc + Ic.tooltipRect.ttHeight + 15 > Fc.globals.gridHeight && (Vc = Fc.globals.gridHeight), Fc.globals.isBarHorizontal || this.moveXCrosshairs(Bc), Ic.fixedTooltip || this.moveTooltip(Bc, Vc || Fc.globals.gridHeight);
			}
		}
	]), io;
}(), ka = function() {
	function io(Pc) {
		i(this, io), this.w = Pc.w, this.ttCtx = Pc, this.ctx = Pc.ctx, this.tooltipPosition = new wa(Pc);
	}
	return s(io, [
		{
			key: "drawDynamicPoints",
			value: function() {
				var io = this.w, Pc = new Mi(this.ctx), Fc = new Vi(this.ctx), Ic = io.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
				Ic = f(Ic), io.config.chart.stacked && Ic.sort((function(io, Pc) {
					return parseFloat(io.getAttribute("data:realIndex")) - parseFloat(Pc.getAttribute("data:realIndex"));
				}));
				for (var Lc = 0; Lc < Ic.length; Lc++) {
					var Rc = Ic[Lc].querySelector(".apexcharts-series-markers-wrap");
					if (Rc !== null) {
						var zc = void 0, Bc = `apexcharts-marker w${(Math.random() + 1).toString(36).substring(4)}`;
						io.config.chart.type !== "line" && io.config.chart.type !== "area" || io.globals.comboCharts || io.config.tooltip.intersect || (Bc += " no-pointer-events");
						var Vc = Fc.getMarkerConfig({
							cssClass: Bc,
							seriesIndex: Number(Rc.getAttribute("data:realIndex"))
						});
						(zc = Pc.drawMarker(0, 0, Vc)).node.setAttribute("default-marker-size", 0);
						var Hc = document.createElementNS(io.globals.SVGNS, "g");
						Hc.classList.add("apexcharts-series-markers"), Hc.appendChild(zc.node), Rc.appendChild(Hc);
					}
				}
			}
		},
		{
			key: "enlargeCurrentPoint",
			value: function(io, Pc) {
				var Fc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, Ic = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, Lc = this.w;
				Lc.config.chart.type !== "bubble" && this.newPointSize(io, Pc);
				var Rc = Pc.getAttribute("cx"), zc = Pc.getAttribute("cy");
				if (Fc !== null && Ic !== null && (Rc = Fc, zc = Ic), this.tooltipPosition.moveXCrosshairs(Rc), !this.fixedTooltip) {
					if (Lc.config.chart.type === "radar") {
						var Bc = this.ttCtx.getElGrid().getBoundingClientRect();
						Rc = this.ttCtx.e.clientX - Bc.left;
					}
					this.tooltipPosition.moveTooltip(Rc, zc, Lc.config.markers.hover.size);
				}
			}
		},
		{
			key: "enlargePoints",
			value: function(io) {
				for (var Pc = this.w, Fc = this, Ic = this.ttCtx, Lc = io, Rc = Pc.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), zc = Pc.config.markers.hover.size, Bc = 0; Bc < Rc.length; Bc++) {
					var Vc = Rc[Bc].getAttribute("rel"), Hc = Rc[Bc].getAttribute("index");
					if (zc === void 0 && (zc = Pc.globals.markers.size[Hc] + Pc.config.markers.hover.sizeOffset), Lc === parseInt(Vc, 10)) {
						Fc.newPointSize(Lc, Rc[Bc]);
						var Uc = Rc[Bc].getAttribute("cx"), Wc = Rc[Bc].getAttribute("cy");
						Fc.tooltipPosition.moveXCrosshairs(Uc), Ic.fixedTooltip || Fc.tooltipPosition.moveTooltip(Uc, Wc, zc);
					} else Fc.oldPointSize(Rc[Bc]);
				}
			}
		},
		{
			key: "newPointSize",
			value: function(io, Pc) {
				var Fc = this.w, Ic = Fc.config.markers.hover.size, Lc = io === 0 ? Pc.parentNode.firstChild : Pc.parentNode.lastChild;
				if (Lc.getAttribute("default-marker-size") !== "0") {
					var Rc = parseInt(Lc.getAttribute("index"), 10);
					Ic === void 0 && (Ic = Fc.globals.markers.size[Rc] + Fc.config.markers.hover.sizeOffset), Ic < 0 && (Ic = 0);
					var zc = this.ttCtx.tooltipUtil.getPathFromPoint(Pc, Ic);
					Pc.setAttribute("d", zc);
				}
			}
		},
		{
			key: "oldPointSize",
			value: function(io) {
				var Pc = parseFloat(io.getAttribute("default-marker-size")), Fc = this.ttCtx.tooltipUtil.getPathFromPoint(io, Pc);
				io.setAttribute("d", Fc);
			}
		},
		{
			key: "resetPointsSize",
			value: function() {
				for (var io = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), Pc = 0; Pc < io.length; Pc++) {
					var Fc = parseFloat(io[Pc].getAttribute("default-marker-size"));
					if (v.isNumber(Fc) && Fc > 0) {
						var Ic = this.ttCtx.tooltipUtil.getPathFromPoint(io[Pc], Fc);
						io[Pc].setAttribute("d", Ic);
					} else io[Pc].setAttribute("d", "M0,0");
				}
			}
		}
	]), io;
}(), Aa = function() {
	function io(Pc) {
		i(this, io), this.w = Pc.w;
		var Fc = this.w;
		this.ttCtx = Pc, this.isVerticalGroupedRangeBar = !Fc.globals.isBarHorizontal && Fc.config.chart.type === "rangeBar" && Fc.config.plotOptions.bar.rangeBarGroupRows;
	}
	return s(io, [
		{
			key: "getAttr",
			value: function(io, Pc) {
				return parseFloat(io.target.getAttribute(Pc));
			}
		},
		{
			key: "handleHeatTreeTooltip",
			value: function(io) {
				var Pc = io.e, Fc = io.opt, Ic = io.x, Lc = io.y, Rc = io.type, zc = this.ttCtx, Bc = this.w;
				if (Pc.target.classList.contains(`apexcharts-${Rc}-rect`)) {
					var Vc = this.getAttr(Pc, "i"), Hc = this.getAttr(Pc, "j"), Uc = this.getAttr(Pc, "cx"), Wc = this.getAttr(Pc, "cy"), Gc = this.getAttr(Pc, "width"), Kc = this.getAttr(Pc, "height");
					if (zc.tooltipLabels.drawSeriesTexts({
						ttItems: Fc.ttItems,
						i: Vc,
						j: Hc,
						shared: !1,
						e: Pc
					}), Bc.globals.capturedSeriesIndex = Vc, Bc.globals.capturedDataPointIndex = Hc, Ic = Uc + zc.tooltipRect.ttWidth / 2 + Gc, Lc = Wc + zc.tooltipRect.ttHeight / 2 - Kc / 2, zc.tooltipPosition.moveXCrosshairs(Uc + Gc / 2), Ic > Bc.globals.gridWidth / 2 && (Ic = Uc - zc.tooltipRect.ttWidth / 2 + Gc), zc.w.config.tooltip.followCursor) {
						var qc = Bc.globals.dom.elWrap.getBoundingClientRect();
						Ic = Bc.globals.clientX - qc.left - (Ic > Bc.globals.gridWidth / 2 ? zc.tooltipRect.ttWidth : 0), Lc = Bc.globals.clientY - qc.top - (Lc > Bc.globals.gridHeight / 2 ? zc.tooltipRect.ttHeight : 0);
					}
				}
				return {
					x: Ic,
					y: Lc
				};
			}
		},
		{
			key: "handleMarkerTooltip",
			value: function(io) {
				var Pc, Fc, Ic = io.e, Lc = io.opt, Rc = io.x, zc = io.y, Bc = this.w, Vc = this.ttCtx;
				if (Ic.target.classList.contains("apexcharts-marker")) {
					var Hc = parseInt(Lc.paths.getAttribute("cx"), 10), Uc = parseInt(Lc.paths.getAttribute("cy"), 10), Wc = parseFloat(Lc.paths.getAttribute("val"));
					if (Fc = parseInt(Lc.paths.getAttribute("rel"), 10), Pc = parseInt(Lc.paths.parentNode.parentNode.parentNode.getAttribute("rel"), 10) - 1, Vc.intersect) {
						var Gc = v.findAncestor(Lc.paths, "apexcharts-series");
						Gc && (Pc = parseInt(Gc.getAttribute("data:realIndex"), 10));
					}
					if (Vc.tooltipLabels.drawSeriesTexts({
						ttItems: Lc.ttItems,
						i: Pc,
						j: Fc,
						shared: !Vc.showOnIntersect && Bc.config.tooltip.shared,
						e: Ic
					}), Ic.type === "mouseup" && Vc.markerClick(Ic, Pc, Fc), Bc.globals.capturedSeriesIndex = Pc, Bc.globals.capturedDataPointIndex = Fc, Rc = Hc, zc = Uc + Bc.globals.translateY - 1.4 * Vc.tooltipRect.ttHeight, Vc.w.config.tooltip.followCursor) {
						var Kc = Vc.getElGrid().getBoundingClientRect();
						zc = Vc.e.clientY + Bc.globals.translateY - Kc.top;
					}
					Wc < 0 && (zc = Uc), Vc.marker.enlargeCurrentPoint(Fc, Lc.paths, Rc, zc);
				}
				return {
					x: Rc,
					y: zc
				};
			}
		},
		{
			key: "handleBarTooltip",
			value: function(io) {
				var Pc, Fc, Ic = io.e, Lc = io.opt, Rc = this.w, zc = this.ttCtx, Bc = zc.getElTooltip(), Vc = 0, Hc = 0, Uc = 0, Wc = this.getBarTooltipXY({
					e: Ic,
					opt: Lc
				});
				if (Wc.j !== null || Wc.barHeight !== 0 || Wc.barWidth !== 0) {
					Pc = Wc.i;
					var Gc = Wc.j;
					if (Rc.globals.capturedSeriesIndex = Pc, Rc.globals.capturedDataPointIndex = Gc, Rc.globals.isBarHorizontal && zc.tooltipUtil.hasBars() || !Rc.config.tooltip.shared ? (Hc = Wc.x, Uc = Wc.y, Fc = Array.isArray(Rc.config.stroke.width) ? Rc.config.stroke.width[Pc] : Rc.config.stroke.width, Vc = Hc) : Rc.globals.comboCharts || Rc.config.tooltip.shared || (Vc /= 2), isNaN(Uc) && (Uc = Rc.globals.svgHeight - zc.tooltipRect.ttHeight), parseInt(Lc.paths.parentNode.getAttribute("data:realIndex"), 10), Hc + zc.tooltipRect.ttWidth > Rc.globals.gridWidth ? Hc -= zc.tooltipRect.ttWidth : Hc < 0 && (Hc = 0), zc.w.config.tooltip.followCursor) {
						var Kc = zc.getElGrid().getBoundingClientRect();
						Uc = zc.e.clientY - Kc.top;
					}
					zc.tooltip === null && (zc.tooltip = Rc.globals.dom.baseEl.querySelector(".apexcharts-tooltip")), Rc.config.tooltip.shared || (Rc.globals.comboBarCount > 0 ? zc.tooltipPosition.moveXCrosshairs(Vc + Fc / 2) : zc.tooltipPosition.moveXCrosshairs(Vc)), !zc.fixedTooltip && (!Rc.config.tooltip.shared || Rc.globals.isBarHorizontal && zc.tooltipUtil.hasBars()) && (Uc = Uc + Rc.globals.translateY - zc.tooltipRect.ttHeight / 2, Bc.style.left = Hc + Rc.globals.translateX + "px", Bc.style.top = Uc + "px");
				}
			}
		},
		{
			key: "getBarTooltipXY",
			value: function(io) {
				var Pc = this, Fc = io.e, Ic = io.opt, Lc = this.w, Rc = null, zc = this.ttCtx, Bc = 0, Vc = 0, Hc = 0, Uc = 0, Wc = 0, Gc = Fc.target.classList;
				if (Gc.contains("apexcharts-bar-area") || Gc.contains("apexcharts-candlestick-area") || Gc.contains("apexcharts-boxPlot-area") || Gc.contains("apexcharts-rangebar-area")) {
					var Kc = Fc.target, qc = Kc.getBoundingClientRect(), Jc = Ic.elGrid.getBoundingClientRect(), Yc = qc.height;
					Wc = qc.height;
					var Xc = qc.width, Zc = parseInt(Kc.getAttribute("cx"), 10), Qc = parseInt(Kc.getAttribute("cy"), 10);
					Uc = parseFloat(Kc.getAttribute("barWidth"));
					var $c = Fc.type === "touchmove" ? Fc.touches[0].clientX : Fc.clientX;
					Rc = parseInt(Kc.getAttribute("j"), 10), Bc = parseInt(Kc.parentNode.getAttribute("rel"), 10) - 1;
					var el = Kc.getAttribute("data-range-y1"), tl = Kc.getAttribute("data-range-y2");
					Lc.globals.comboCharts && (Bc = parseInt(Kc.parentNode.getAttribute("data:realIndex"), 10));
					var nl = function(io) {
						return Lc.globals.isXNumeric ? Zc - Xc / 2 : Pc.isVerticalGroupedRangeBar ? Zc + Xc / 2 : Zc - zc.dataPointsDividedWidth + Xc / 2;
					}, rl = function() {
						return Qc - zc.dataPointsDividedHeight + Yc / 2 - zc.tooltipRect.ttHeight / 2;
					};
					zc.tooltipLabels.drawSeriesTexts({
						ttItems: Ic.ttItems,
						i: Bc,
						j: Rc,
						y1: el ? parseInt(el, 10) : null,
						y2: tl ? parseInt(tl, 10) : null,
						shared: !zc.showOnIntersect && Lc.config.tooltip.shared,
						e: Fc
					}), Lc.config.tooltip.followCursor ? Lc.globals.isBarHorizontal ? (Vc = $c - Jc.left + 15, Hc = rl()) : (Vc = nl(), Hc = Fc.clientY - Jc.top - zc.tooltipRect.ttHeight / 2 - 15) : Lc.globals.isBarHorizontal ? ((Vc = Zc) < zc.xyRatios.baseLineInvertedY && (Vc = Zc - zc.tooltipRect.ttWidth), Hc = rl()) : (Vc = nl(), Hc = Qc);
				}
				return {
					x: Vc,
					y: Hc,
					barHeight: Wc,
					barWidth: Uc,
					i: Bc,
					j: Rc
				};
			}
		}
	]), io;
}(), Ca = function() {
	function io(Pc) {
		i(this, io), this.w = Pc.w, this.ttCtx = Pc;
	}
	return s(io, [
		{
			key: "drawXaxisTooltip",
			value: function() {
				var io = this.w, Pc = this.ttCtx, Fc = io.config.xaxis.position === "bottom";
				Pc.xaxisOffY = Fc ? io.globals.gridHeight + 1 : -io.globals.xAxisHeight - io.config.xaxis.axisTicks.height + 3;
				var Ic = Fc ? "apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom" : "apexcharts-xaxistooltip apexcharts-xaxistooltip-top", Lc = io.globals.dom.elWrap;
				Pc.isXAxisTooltipEnabled && io.globals.dom.baseEl.querySelector(".apexcharts-xaxistooltip") === null && (Pc.xaxisTooltip = document.createElement("div"), Pc.xaxisTooltip.setAttribute("class", Ic + " apexcharts-theme-" + io.config.tooltip.theme), Lc.appendChild(Pc.xaxisTooltip), Pc.xaxisTooltipText = document.createElement("div"), Pc.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"), Pc.xaxisTooltipText.style.fontFamily = io.config.xaxis.tooltip.style.fontFamily || io.config.chart.fontFamily, Pc.xaxisTooltipText.style.fontSize = io.config.xaxis.tooltip.style.fontSize, Pc.xaxisTooltip.appendChild(Pc.xaxisTooltipText));
			}
		},
		{
			key: "drawYaxisTooltip",
			value: function() {
				for (var io = this.w, Pc = this.ttCtx, Fc = 0; Fc < io.config.yaxis.length; Fc++) {
					var Ic = io.config.yaxis[Fc].opposite || io.config.yaxis[Fc].crosshairs.opposite;
					Pc.yaxisOffX = Ic ? io.globals.gridWidth + 1 : 1;
					var Lc = `apexcharts-yaxistooltip apexcharts-yaxistooltip-${Fc}${Ic ? " apexcharts-yaxistooltip-right" : " apexcharts-yaxistooltip-left"}`, Rc = io.globals.dom.elWrap;
					io.globals.dom.baseEl.querySelector(`.apexcharts-yaxistooltip apexcharts-yaxistooltip-${Fc}`) === null && (Pc.yaxisTooltip = document.createElement("div"), Pc.yaxisTooltip.setAttribute("class", Lc + " apexcharts-theme-" + io.config.tooltip.theme), Rc.appendChild(Pc.yaxisTooltip), Fc === 0 && (Pc.yaxisTooltipText = []), Pc.yaxisTooltipText[Fc] = document.createElement("div"), Pc.yaxisTooltipText[Fc].classList.add("apexcharts-yaxistooltip-text"), Pc.yaxisTooltip.appendChild(Pc.yaxisTooltipText[Fc]));
				}
			}
		},
		{
			key: "setXCrosshairWidth",
			value: function() {
				var io = this.w, Pc = this.ttCtx, Fc = Pc.getElXCrosshairs();
				if (Pc.xcrosshairsWidth = parseInt(io.config.xaxis.crosshairs.width, 10), io.globals.comboCharts) {
					var Ic = io.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
					if (Ic !== null && io.config.xaxis.crosshairs.width === "barWidth") Pc.xcrosshairsWidth = parseFloat(Ic.getAttribute("barWidth"));
					else if (io.config.xaxis.crosshairs.width === "tickWidth") {
						var Lc = io.globals.labels.length;
						Pc.xcrosshairsWidth = io.globals.gridWidth / Lc;
					}
				} else if (io.config.xaxis.crosshairs.width === "tickWidth") {
					var Rc = io.globals.labels.length;
					Pc.xcrosshairsWidth = io.globals.gridWidth / Rc;
				} else if (io.config.xaxis.crosshairs.width === "barWidth") {
					var zc = io.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
					zc === null ? Pc.xcrosshairsWidth = 1 : Pc.xcrosshairsWidth = parseFloat(zc.getAttribute("barWidth"));
				}
				io.globals.isBarHorizontal && (Pc.xcrosshairsWidth = 0), Fc !== null && Pc.xcrosshairsWidth > 0 && Fc.setAttribute("width", Pc.xcrosshairsWidth);
			}
		},
		{
			key: "handleYCrosshair",
			value: function() {
				var io = this.w, Pc = this.ttCtx;
				Pc.ycrosshairs = io.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs"), Pc.ycrosshairsHidden = io.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden");
			}
		},
		{
			key: "drawYaxisTooltipText",
			value: function(io, Pc, Fc) {
				var Ic = this.ttCtx, Lc = this.w, Rc = Lc.globals, zc = Rc.seriesYAxisMap[io];
				if (Ic.yaxisTooltips[io] && zc.length > 0) {
					var Bc = Rc.yLabelFormatters[io], Vc = Ic.getElGrid().getBoundingClientRect(), Hc = zc[0], Uc = 0;
					Fc.yRatio.length > 1 && (Uc = Hc);
					var Wc = (Pc - Vc.top) * Fc.yRatio[Uc], Gc = Rc.maxYArr[Hc] - Rc.minYArr[Hc], Kc = Rc.minYArr[Hc] + (Gc - Wc);
					Lc.config.yaxis[io].reversed && (Kc = Rc.maxYArr[Hc] - (Gc - Wc)), Ic.tooltipPosition.moveYCrosshairs(Pc - Vc.top), Ic.yaxisTooltipText[io].innerHTML = Bc(Kc), Ic.tooltipPosition.moveYAxisTooltip(io);
				}
			}
		}
	]), io;
}(), Sa = function() {
	function io(Pc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w;
		var Fc = this.w;
		this.tConfig = Fc.config.tooltip, this.tooltipUtil = new va(this), this.tooltipLabels = new ya(this), this.tooltipPosition = new wa(this), this.marker = new ka(this), this.intersect = new Aa(this), this.axesTooltip = new Ca(this), this.showOnIntersect = this.tConfig.intersect, this.showTooltipTitle = this.tConfig.x.show, this.fixedTooltip = this.tConfig.fixed.enabled, this.xaxisTooltip = null, this.yaxisTTEls = null, this.isBarShared = !Fc.globals.isBarHorizontal && this.tConfig.shared, this.lastHoverTime = Date.now();
	}
	return s(io, [
		{
			key: "getElTooltip",
			value: function(io) {
				return io || (io = this), io.w.globals.dom.baseEl ? io.w.globals.dom.baseEl.querySelector(".apexcharts-tooltip") : null;
			}
		},
		{
			key: "getElXCrosshairs",
			value: function() {
				return this.w.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs");
			}
		},
		{
			key: "getElGrid",
			value: function() {
				return this.w.globals.dom.baseEl.querySelector(".apexcharts-grid");
			}
		},
		{
			key: "drawTooltip",
			value: function(io) {
				var Pc = this.w;
				this.xyRatios = io, this.isXAxisTooltipEnabled = Pc.config.xaxis.tooltip.enabled && Pc.globals.axisCharts, this.yaxisTooltips = Pc.config.yaxis.map((function(io, Fc) {
					return !!(io.show && io.tooltip.enabled && Pc.globals.axisCharts);
				})), this.allTooltipSeriesGroups = [], Pc.globals.axisCharts || (this.showTooltipTitle = !1);
				var Fc = document.createElement("div");
				if (Fc.classList.add("apexcharts-tooltip"), Pc.config.tooltip.cssClass && Fc.classList.add(Pc.config.tooltip.cssClass), Fc.classList.add(`apexcharts-theme-${this.tConfig.theme || "light"}`), Pc.globals.dom.elWrap.appendChild(Fc), Pc.globals.axisCharts && (this.axesTooltip.drawXaxisTooltip(), this.axesTooltip.drawYaxisTooltip(), this.axesTooltip.setXCrosshairWidth(), this.axesTooltip.handleYCrosshair(), this.xAxisTicksPositions = new Qi(this.ctx).getXAxisTicksPositions()), !Pc.globals.comboCharts && !this.tConfig.intersect && Pc.config.chart.type !== "rangeBar" || this.tConfig.shared || (this.showOnIntersect = !0), Pc.config.markers.size !== 0 && Pc.globals.markers.largestSize !== 0 || this.marker.drawDynamicPoints(this), Pc.globals.collapsedSeries.length !== Pc.globals.series.length) {
					this.dataPointsDividedHeight = Pc.globals.gridHeight / Pc.globals.dataPoints, this.dataPointsDividedWidth = Pc.globals.gridWidth / Pc.globals.dataPoints, this.showTooltipTitle && (this.tooltipTitle = document.createElement("div"), this.tooltipTitle.classList.add("apexcharts-tooltip-title"), this.tooltipTitle.style.fontFamily = this.tConfig.style.fontFamily || Pc.config.chart.fontFamily, this.tooltipTitle.style.fontSize = this.tConfig.style.fontSize, Fc.appendChild(this.tooltipTitle));
					var Ic = Pc.globals.series.length;
					(Pc.globals.xyCharts || Pc.globals.comboCharts) && this.tConfig.shared && (Ic = this.showOnIntersect ? 1 : Pc.globals.series.length), this.legendLabels = Pc.globals.dom.baseEl.querySelectorAll(".apexcharts-legend-text"), this.ttItems = this.createTTElements(Ic), this.addSVGEvents();
				}
			}
		},
		{
			key: "createTTElements",
			value: function(io) {
				for (var Pc = this, Fc = this.w, Ic = [], Lc = this.getElTooltip(), Rc = function(Rc) {
					var zc = document.createElement("div");
					zc.classList.add("apexcharts-tooltip-series-group", `apexcharts-tooltip-series-group-${Rc}`), zc.style.order = Fc.config.tooltip.inverseOrder ? io - Rc : Rc + 1;
					var Bc = document.createElement("span");
					Bc.classList.add("apexcharts-tooltip-marker"), Fc.config.tooltip.fillSeriesColor ? Bc.style.backgroundColor = Fc.globals.colors[Rc] : Bc.style.color = Fc.globals.colors[Rc];
					var Vc = Fc.config.markers.shape, Hc = Vc;
					Array.isArray(Vc) && (Hc = Vc[Rc]), Bc.setAttribute("shape", Hc), zc.appendChild(Bc);
					var Uc = document.createElement("div");
					Uc.classList.add("apexcharts-tooltip-text"), Uc.style.fontFamily = Pc.tConfig.style.fontFamily || Fc.config.chart.fontFamily, Uc.style.fontSize = Pc.tConfig.style.fontSize, [
						"y",
						"goals",
						"z"
					].forEach((function(io) {
						var Pc = document.createElement("div");
						Pc.classList.add(`apexcharts-tooltip-${io}-group`);
						var Fc = document.createElement("span");
						Fc.classList.add(`apexcharts-tooltip-text-${io}-label`), Pc.appendChild(Fc);
						var Ic = document.createElement("span");
						Ic.classList.add(`apexcharts-tooltip-text-${io}-value`), Pc.appendChild(Ic), Uc.appendChild(Pc);
					})), zc.appendChild(Uc), Lc.appendChild(zc), Ic.push(zc);
				}, zc = 0; zc < io; zc++) Rc(zc);
				return Ic;
			}
		},
		{
			key: "addSVGEvents",
			value: function() {
				var io = this.w, Pc = io.config.chart.type, Fc = this.getElTooltip(), Ic = !(Pc !== "bar" && Pc !== "candlestick" && Pc !== "boxPlot" && Pc !== "rangeBar"), Lc = Pc === "area" || Pc === "line" || Pc === "scatter" || Pc === "bubble" || Pc === "radar", Rc = io.globals.dom.Paper.node, zc = this.getElGrid();
				zc && (this.seriesBound = zc.getBoundingClientRect());
				var Bc, Vc = [], Hc = [], Uc = {
					hoverArea: Rc,
					elGrid: zc,
					tooltipEl: Fc,
					tooltipY: Vc,
					tooltipX: Hc,
					ttItems: this.ttItems
				};
				if (io.globals.axisCharts && (Lc ? Bc = io.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker") : Ic ? Bc = io.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-boxPlot-area, .apexcharts-series .apexcharts-rangebar-area") : Pc !== "heatmap" && Pc !== "treemap" || (Bc = io.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap, .apexcharts-series .apexcharts-treemap")), Bc && Bc.length)) for (var Wc = 0; Wc < Bc.length; Wc++) Vc.push(Bc[Wc].getAttribute("cy")), Hc.push(Bc[Wc].getAttribute("cx"));
				if (io.globals.xyCharts && !this.showOnIntersect || io.globals.comboCharts && !this.showOnIntersect || Ic && this.tooltipUtil.hasBars() && this.tConfig.shared) this.addPathsEventListeners([Rc], Uc);
				else if (Ic && !io.globals.comboCharts || Lc && this.showOnIntersect) this.addDatapointEventsListeners(Uc);
				else if (!io.globals.axisCharts || Pc === "heatmap" || Pc === "treemap") {
					var Gc = io.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
					this.addPathsEventListeners(Gc, Uc);
				}
				if (this.showOnIntersect) {
					var Kc = io.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker, .apexcharts-area-series .apexcharts-marker");
					Kc.length > 0 && this.addPathsEventListeners(Kc, Uc), this.tooltipUtil.hasBars() && !this.tConfig.shared && this.addDatapointEventsListeners(Uc);
				}
			}
		},
		{
			key: "drawFixedTooltipRect",
			value: function() {
				var io = this.w, Pc = this.getElTooltip(), Fc = Pc.getBoundingClientRect(), Ic = Fc.width + 10, Lc = Fc.height + 10, Rc = this.tConfig.fixed.offsetX, zc = this.tConfig.fixed.offsetY, Bc = this.tConfig.fixed.position.toLowerCase();
				return Bc.indexOf("right") > -1 && (Rc = Rc + io.globals.svgWidth - Ic + 10), Bc.indexOf("bottom") > -1 && (zc = zc + io.globals.svgHeight - Lc - 10), Pc.style.left = Rc + "px", Pc.style.top = zc + "px", {
					x: Rc,
					y: zc,
					ttWidth: Ic,
					ttHeight: Lc
				};
			}
		},
		{
			key: "addDatapointEventsListeners",
			value: function(io) {
				var Pc = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker, .apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-boxPlot-area, .apexcharts-rangebar-area");
				this.addPathsEventListeners(Pc, io);
			}
		},
		{
			key: "addPathsEventListeners",
			value: function(io, Pc) {
				for (var Fc = this, Ic = function(Ic) {
					var Lc = {
						paths: io[Ic],
						tooltipEl: Pc.tooltipEl,
						tooltipY: Pc.tooltipY,
						tooltipX: Pc.tooltipX,
						elGrid: Pc.elGrid,
						hoverArea: Pc.hoverArea,
						ttItems: Pc.ttItems
					};
					[
						"mousemove",
						"mouseup",
						"touchmove",
						"mouseout",
						"touchend"
					].map((function(Pc) {
						return io[Ic].addEventListener(Pc, Fc.onSeriesHover.bind(Fc, Lc), {
							capture: !1,
							passive: !0
						});
					}));
				}, Lc = 0; Lc < io.length; Lc++) Ic(Lc);
			}
		},
		{
			key: "onSeriesHover",
			value: function(io, Pc) {
				var Fc = this, Ic = Date.now() - this.lastHoverTime;
				Ic >= 20 ? this.seriesHover(io, Pc) : (clearTimeout(this.seriesHoverTimeout), this.seriesHoverTimeout = setTimeout((function() {
					Fc.seriesHover(io, Pc);
				}), 20 - Ic));
			}
		},
		{
			key: "seriesHover",
			value: function(io, Pc) {
				var Fc = this;
				this.lastHoverTime = Date.now();
				var Ic = [], Lc = this.w;
				Lc.config.chart.group && (Ic = this.ctx.getGroupedCharts()), Lc.globals.axisCharts && (Lc.globals.minX === -Infinity && Lc.globals.maxX === Infinity || Lc.globals.dataPoints === 0) || (Ic.length ? Ic.forEach((function(Ic) {
					var Lc = Fc.getElTooltip(Ic), Rc = {
						paths: io.paths,
						tooltipEl: Lc,
						tooltipY: io.tooltipY,
						tooltipX: io.tooltipX,
						elGrid: io.elGrid,
						hoverArea: io.hoverArea,
						ttItems: Ic.w.globals.tooltip.ttItems
					};
					Ic.w.globals.minX === Fc.w.globals.minX && Ic.w.globals.maxX === Fc.w.globals.maxX && Ic.w.globals.tooltip.seriesHoverByContext({
						chartCtx: Ic,
						ttCtx: Ic.w.globals.tooltip,
						opt: Rc,
						e: Pc
					});
				})) : this.seriesHoverByContext({
					chartCtx: this.ctx,
					ttCtx: this.w.globals.tooltip,
					opt: io,
					e: Pc
				}));
			}
		},
		{
			key: "seriesHoverByContext",
			value: function(io) {
				var Pc = io.chartCtx, Fc = io.ttCtx, Ic = io.opt, Lc = io.e, Rc = Pc.w, zc = this.getElTooltip(Pc);
				zc && (Fc.tooltipRect = {
					x: 0,
					y: 0,
					ttWidth: zc.getBoundingClientRect().width,
					ttHeight: zc.getBoundingClientRect().height
				}, Fc.e = Lc, Fc.tooltipUtil.hasBars() && !Rc.globals.comboCharts && !Fc.isBarShared && this.tConfig.onDatasetHover.highlightDataSeries && new Zi(Pc).toggleSeriesOnHover(Lc, Lc.target.parentNode), Rc.globals.axisCharts ? Fc.axisChartsTooltips({
					e: Lc,
					opt: Ic,
					tooltipRect: Fc.tooltipRect
				}) : Fc.nonAxisChartsTooltips({
					e: Lc,
					opt: Ic,
					tooltipRect: Fc.tooltipRect
				}), Fc.fixedTooltip && Fc.drawFixedTooltipRect());
			}
		},
		{
			key: "axisChartsTooltips",
			value: function(io) {
				var Pc, Fc, Ic = io.e, Lc = io.opt, Rc = this.w, zc = Lc.elGrid.getBoundingClientRect(), Bc = Ic.type === "touchmove" ? Ic.touches[0].clientX : Ic.clientX, Vc = Ic.type === "touchmove" ? Ic.touches[0].clientY : Ic.clientY;
				if (this.clientY = Vc, this.clientX = Bc, Rc.globals.capturedSeriesIndex = -1, Rc.globals.capturedDataPointIndex = -1, Vc < zc.top || Vc > zc.top + zc.height) this.handleMouseOut(Lc);
				else {
					if (Array.isArray(this.tConfig.enabledOnSeries) && !Rc.config.tooltip.shared) {
						var Hc = parseInt(Lc.paths.getAttribute("index"), 10);
						if (this.tConfig.enabledOnSeries.indexOf(Hc) < 0) return void this.handleMouseOut(Lc);
					}
					var Uc = this.getElTooltip(), Wc = this.getElXCrosshairs(), Gc = [];
					Rc.config.chart.group && (Gc = this.ctx.getSyncedCharts());
					var Kc = Rc.globals.xyCharts || Rc.config.chart.type === "bar" && !Rc.globals.isBarHorizontal && this.tooltipUtil.hasBars() && this.tConfig.shared || Rc.globals.comboCharts && this.tooltipUtil.hasBars();
					if (Ic.type === "mousemove" || Ic.type === "touchmove" || Ic.type === "mouseup") {
						if (Rc.globals.collapsedSeries.length + Rc.globals.ancillaryCollapsedSeries.length === Rc.globals.series.length) return;
						Wc !== null && Wc.classList.add("apexcharts-active");
						var qc = this.yaxisTooltips.filter((function(io) {
							return !0 === io;
						}));
						if (this.ycrosshairs !== null && qc.length && this.ycrosshairs.classList.add("apexcharts-active"), Kc && !this.showOnIntersect || Gc.length > 1) this.handleStickyTooltip(Ic, Bc, Vc, Lc);
						else if (Rc.config.chart.type === "heatmap" || Rc.config.chart.type === "treemap") {
							var Jc = this.intersect.handleHeatTreeTooltip({
								e: Ic,
								opt: Lc,
								x: Pc,
								y: Fc,
								type: Rc.config.chart.type
							});
							Pc = Jc.x, Fc = Jc.y, Uc.style.left = Pc + "px", Uc.style.top = Fc + "px";
						} else this.tooltipUtil.hasBars() && this.intersect.handleBarTooltip({
							e: Ic,
							opt: Lc
						}), this.tooltipUtil.hasMarkers() && this.intersect.handleMarkerTooltip({
							e: Ic,
							opt: Lc,
							x: Pc,
							y: Fc
						});
						if (this.yaxisTooltips.length) for (var Yc = 0; Yc < Rc.config.yaxis.length; Yc++) this.axesTooltip.drawYaxisTooltipText(Yc, Vc, this.xyRatios);
						Rc.globals.dom.baseEl.classList.add("apexcharts-tooltip-active"), Lc.tooltipEl.classList.add("apexcharts-active");
					} else Ic.type !== "mouseout" && Ic.type !== "touchend" || this.handleMouseOut(Lc);
				}
			}
		},
		{
			key: "nonAxisChartsTooltips",
			value: function(io) {
				var Pc = io.e, Fc = io.opt, Ic = io.tooltipRect, Lc = this.w, Rc = Fc.paths.getAttribute("rel"), zc = this.getElTooltip(), Bc = Lc.globals.dom.elWrap.getBoundingClientRect();
				if (Pc.type === "mousemove" || Pc.type === "touchmove") {
					Lc.globals.dom.baseEl.classList.add("apexcharts-tooltip-active"), zc.classList.add("apexcharts-active"), this.tooltipLabels.drawSeriesTexts({
						ttItems: Fc.ttItems,
						i: parseInt(Rc, 10) - 1,
						shared: !1
					});
					var Vc = Lc.globals.clientX - Bc.left - Ic.ttWidth / 2, Hc = Lc.globals.clientY - Bc.top - Ic.ttHeight - 10;
					if (zc.style.left = Vc + "px", zc.style.top = Hc + "px", Lc.config.legend.tooltipHoverFormatter) {
						var Uc = Rc - 1, Wc = (0, Lc.config.legend.tooltipHoverFormatter)(this.legendLabels[Uc].getAttribute("data:default-text"), {
							seriesIndex: Uc,
							dataPointIndex: Uc,
							w: Lc
						});
						this.legendLabels[Uc].innerHTML = Wc;
					}
				} else Pc.type !== "mouseout" && Pc.type !== "touchend" || (zc.classList.remove("apexcharts-active"), Lc.globals.dom.baseEl.classList.remove("apexcharts-tooltip-active"), Lc.config.legend.tooltipHoverFormatter && this.legendLabels.forEach((function(io) {
					var Pc = io.getAttribute("data:default-text");
					io.innerHTML = decodeURIComponent(Pc);
				})));
			}
		},
		{
			key: "handleStickyTooltip",
			value: function(io, Pc, Fc, Ic) {
				var Lc = this.w, Rc = this.tooltipUtil.getNearestValues({
					context: this,
					hoverArea: Ic.hoverArea,
					elGrid: Ic.elGrid,
					clientX: Pc,
					clientY: Fc
				}), zc = Rc.j, Bc = Rc.capturedSeries;
				Lc.globals.collapsedSeriesIndices.includes(Bc) && (Bc = null);
				var Vc = Ic.elGrid.getBoundingClientRect();
				if (Rc.hoverX < 0 || Rc.hoverX > Vc.width) this.handleMouseOut(Ic);
				else if (Bc !== null) this.handleStickyCapturedSeries(io, Bc, Ic, zc);
				else if (this.tooltipUtil.isXoverlap(zc) || Lc.globals.isBarHorizontal) {
					var Hc = Lc.globals.series.findIndex((function(io, Pc) {
						return !Lc.globals.collapsedSeriesIndices.includes(Pc);
					}));
					this.create(io, this, Hc, zc, Ic.ttItems);
				}
			}
		},
		{
			key: "handleStickyCapturedSeries",
			value: function(io, Pc, Fc, Ic) {
				var Lc = this.w;
				if (!this.tConfig.shared && Lc.globals.series[Pc][Ic] === null) return void this.handleMouseOut(Fc);
				if (Lc.globals.series[Pc][Ic] !== void 0) this.tConfig.shared && this.tooltipUtil.isXoverlap(Ic) && this.tooltipUtil.isInitialSeriesSameLen() ? this.create(io, this, Pc, Ic, Fc.ttItems) : this.create(io, this, Pc, Ic, Fc.ttItems, !1);
				else if (this.tooltipUtil.isXoverlap(Ic)) {
					var Rc = Lc.globals.series.findIndex((function(io, Pc) {
						return !Lc.globals.collapsedSeriesIndices.includes(Pc);
					}));
					this.create(io, this, Rc, Ic, Fc.ttItems);
				}
			}
		},
		{
			key: "deactivateHoverFilter",
			value: function() {
				for (var io = this.w, Pc = new Mi(this.ctx), Fc = io.globals.dom.Paper.find(".apexcharts-bar-area"), Ic = 0; Ic < Fc.length; Ic++) Pc.pathMouseLeave(Fc[Ic]);
			}
		},
		{
			key: "handleMouseOut",
			value: function(io) {
				var Pc = this.w, Fc = this.getElXCrosshairs();
				if (Pc.globals.dom.baseEl.classList.remove("apexcharts-tooltip-active"), io.tooltipEl.classList.remove("apexcharts-active"), this.deactivateHoverFilter(), Pc.config.chart.type !== "bubble" && this.marker.resetPointsSize(), Fc !== null && Fc.classList.remove("apexcharts-active"), this.ycrosshairs !== null && this.ycrosshairs.classList.remove("apexcharts-active"), this.isXAxisTooltipEnabled && this.xaxisTooltip.classList.remove("apexcharts-active"), this.yaxisTooltips.length) {
					this.yaxisTTEls === null && (this.yaxisTTEls = Pc.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
					for (var Ic = 0; Ic < this.yaxisTTEls.length; Ic++) this.yaxisTTEls[Ic].classList.remove("apexcharts-active");
				}
				Pc.config.legend.tooltipHoverFormatter && this.legendLabels.forEach((function(io) {
					var Pc = io.getAttribute("data:default-text");
					io.innerHTML = decodeURIComponent(Pc);
				}));
			}
		},
		{
			key: "markerClick",
			value: function(io, Pc, Fc) {
				var Ic = this.w;
				typeof Ic.config.chart.events.markerClick == "function" && Ic.config.chart.events.markerClick(io, this.ctx, {
					seriesIndex: Pc,
					dataPointIndex: Fc,
					w: Ic
				}), this.ctx.events.fireEvent("markerClick", [
					io,
					this.ctx,
					{
						seriesIndex: Pc,
						dataPointIndex: Fc,
						w: Ic
					}
				]);
			}
		},
		{
			key: "create",
			value: function(io, Pc, Fc, Ic, Lc) {
				var Rc, zc, Bc, Vc, Hc, Uc, Wc, Gc, qc, Jc, Yc, Xc, Zc, Qc, $c, el, tl = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null, nl = this.w, rl = Pc;
				io.type === "mouseup" && this.markerClick(io, Fc, Ic), tl === null && (tl = this.tConfig.shared);
				var il = this.tooltipUtil.hasMarkers(Fc), al = this.tooltipUtil.getElBars(), ol = function() {
					nl.globals.markers.largestSize > 0 ? rl.marker.enlargePoints(Ic) : rl.tooltipPosition.moveDynamicPointsOnHover(Ic);
				};
				if (nl.config.legend.tooltipHoverFormatter) {
					var sl = nl.config.legend.tooltipHoverFormatter, cl = Array.from(this.legendLabels);
					cl.forEach((function(io) {
						var Pc = io.getAttribute("data:default-text");
						io.innerHTML = decodeURIComponent(Pc);
					}));
					for (var ll = 0; ll < cl.length; ll++) {
						var ul = cl[ll], dl = parseInt(ul.getAttribute("i"), 10), fl = decodeURIComponent(ul.getAttribute("data:default-text")), pl = sl(fl, {
							seriesIndex: tl ? dl : Fc,
							dataPointIndex: Ic,
							w: nl
						});
						if (tl) ul.innerHTML = nl.globals.collapsedSeriesIndices.indexOf(dl) < 0 ? pl : fl;
						else if (ul.innerHTML = dl === Fc ? pl : fl, Fc === dl) break;
					}
				}
				var ml = u(u({
					ttItems: Lc,
					i: Fc,
					j: Ic
				}, ((Rc = nl.globals.seriesRange) == null || (zc = Rc[Fc]) == null || (Bc = zc[Ic]) == null || (Vc = Bc.y[0]) == null ? void 0 : Vc.y1) !== void 0 && { y1: (Hc = nl.globals.seriesRange) == null || (Uc = Hc[Fc]) == null || (Wc = Uc[Ic]) == null || (Gc = Wc.y[0]) == null ? void 0 : Gc.y1 }), ((qc = nl.globals.seriesRange) == null || (Jc = qc[Fc]) == null || (Yc = Jc[Ic]) == null || (Xc = Yc.y[0]) == null ? void 0 : Xc.y2) !== void 0 && { y2: (Zc = nl.globals.seriesRange) == null || (Qc = Zc[Fc]) == null || ($c = Qc[Ic]) == null || (el = $c.y[0]) == null ? void 0 : el.y2 });
				if (tl) {
					if (rl.tooltipLabels.drawSeriesTexts(u(u({}, ml), {}, { shared: !this.showOnIntersect && this.tConfig.shared })), il) ol();
					else if (this.tooltipUtil.hasBars() && (this.barSeriesHeight = this.tooltipUtil.getBarsHeight(al), this.barSeriesHeight > 0)) {
						var hl = new Mi(this.ctx), gl = nl.globals.dom.Paper.find(`.apexcharts-bar-area[j='${Ic}']`);
						this.deactivateHoverFilter(), rl.tooltipUtil.getAllMarkers(!0).length && !this.barSeriesHeight && ol(), rl.tooltipPosition.moveStickyTooltipOverBars(Ic, Fc);
						for (var _l = 0; _l < gl.length; _l++) hl.pathMouseEnter(gl[_l]);
					}
				} else rl.tooltipLabels.drawSeriesTexts(u({ shared: !1 }, ml)), this.tooltipUtil.hasBars() && rl.tooltipPosition.moveStickyTooltipOverBars(Ic, Fc), il && rl.tooltipPosition.moveMarkers(Fc, Ic);
			}
		}
	]), io;
}(), La = function() {
	function io(Pc) {
		i(this, io), this.w = Pc.w, this.barCtx = Pc, this.totalFormatter = this.w.config.plotOptions.bar.dataLabels.total.formatter, this.totalFormatter || (this.totalFormatter = this.w.config.dataLabels.formatter);
	}
	return s(io, [
		{
			key: "handleBarDataLabels",
			value: function(io) {
				var Pc, Fc, Ic = io.x, Lc = io.y, Rc = io.y1, zc = io.y2, Bc = io.i, Vc = io.j, Hc = io.realIndex, Uc = io.columnGroupIndex, Wc = io.series, Gc = io.barHeight, qc = io.barWidth, Jc = io.barXPosition, Yc = io.barYPosition, Xc = io.visibleSeries, Zc = this.w, Qc = new Mi(this.barCtx.ctx), $c = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[Hc] : this.barCtx.strokeWidth;
				Zc.globals.isXNumeric && !Zc.globals.isBarHorizontal ? (Pc = Ic + parseFloat(qc * (Xc + 1)), Fc = Lc + parseFloat(Gc * (Xc + 1)) - $c) : (Pc = Ic + parseFloat(qc * Xc), Fc = Lc + parseFloat(Gc * Xc));
				var el, tl = null, nl = Ic, rl = Lc, il = {}, al = Zc.config.dataLabels, ol = this.barCtx.barOptions.dataLabels, sl = this.barCtx.barOptions.dataLabels.total;
				Yc !== void 0 && this.barCtx.isRangeBar && (Fc = Yc, rl = Yc), Jc !== void 0 && this.barCtx.isVerticalGroupedRangeBar && (Pc = Jc, nl = Jc);
				var cl = al.offsetX, ll = al.offsetY, ul = {
					width: 0,
					height: 0
				};
				if (Zc.config.dataLabels.enabled) {
					var dl = Zc.globals.series[Bc][Vc];
					ul = Qc.getTextRects(Zc.config.dataLabels.formatter ? Zc.config.dataLabels.formatter(dl, u(u({}, Zc), {}, {
						seriesIndex: Bc,
						dataPointIndex: Vc,
						w: Zc
					})) : Zc.globals.yLabelFormatters[0](dl), parseFloat(al.style.fontSize));
				}
				var fl = {
					x: Ic,
					y: Lc,
					i: Bc,
					j: Vc,
					realIndex: Hc,
					columnGroupIndex: Uc,
					bcx: Pc,
					bcy: Fc,
					barHeight: Gc,
					barWidth: qc,
					textRects: ul,
					strokeWidth: $c,
					dataLabelsX: nl,
					dataLabelsY: rl,
					dataLabelsConfig: al,
					barDataLabelsConfig: ol,
					barTotalDataLabelsConfig: sl,
					offX: cl,
					offY: ll
				};
				return il = this.barCtx.isHorizontal ? this.calculateBarsDataLabelsPosition(fl) : this.calculateColumnsDataLabelsPosition(fl), el = this.drawCalculatedDataLabels({
					x: il.dataLabelsX,
					y: il.dataLabelsY,
					val: this.barCtx.isRangeBar ? [Rc, zc] : Zc.config.chart.stackType === "100%" ? Wc[Hc][Vc] : Zc.globals.series[Hc][Vc],
					i: Hc,
					j: Vc,
					barWidth: qc,
					barHeight: Gc,
					textRects: ul,
					dataLabelsConfig: al
				}), Zc.config.chart.stacked && sl.enabled && (tl = this.drawTotalDataLabels({
					x: il.totalDataLabelsX,
					y: il.totalDataLabelsY,
					barWidth: qc,
					barHeight: Gc,
					realIndex: Hc,
					textAnchor: il.totalDataLabelsAnchor,
					val: this.getStackedTotalDataLabel({
						realIndex: Hc,
						j: Vc
					}),
					dataLabelsConfig: al,
					barTotalDataLabelsConfig: sl
				})), {
					dataLabelsPos: il,
					dataLabels: el,
					totalDataLabels: tl
				};
			}
		},
		{
			key: "getStackedTotalDataLabel",
			value: function(io) {
				var Pc = io.realIndex, Fc = io.j, Ic = this.w, Lc = this.barCtx.stackedSeriesTotals[Fc];
				return this.totalFormatter && (Lc = this.totalFormatter(Lc, u(u({}, Ic), {}, {
					seriesIndex: Pc,
					dataPointIndex: Fc,
					w: Ic
				}))), Lc;
			}
		},
		{
			key: "calculateColumnsDataLabelsPosition",
			value: function(io) {
				var Pc = this, Fc = this.w, Ic = io.i, Lc = io.j, Rc = io.realIndex;
				io.columnGroupIndex;
				var zc, Bc, Vc = io.y, Hc = io.bcx, Uc = io.barWidth, Wc = io.barHeight, Gc = io.textRects, Kc = io.dataLabelsX, qc = io.dataLabelsY, Jc = io.dataLabelsConfig, Yc = io.barDataLabelsConfig, Xc = io.barTotalDataLabelsConfig, Zc = io.strokeWidth, Qc = io.offX, $c = io.offY, el = Hc;
				Wc = Math.abs(Wc);
				var tl = Fc.config.plotOptions.bar.dataLabels.orientation === "vertical", nl = this.barCtx.barHelpers.getZeroValueEncounters({
					i: Ic,
					j: Lc
				}).zeroEncounters;
				Hc -= Zc / 2;
				var rl = Fc.globals.gridWidth / Fc.globals.dataPoints;
				this.barCtx.isVerticalGroupedRangeBar ? Kc += Uc / 2 : (Kc = Fc.globals.isXNumeric ? Hc - Uc / 2 + Qc : Hc - rl + Uc / 2 + Qc, !Fc.config.chart.stacked && nl > 0 && Fc.config.plotOptions.bar.hideZeroBarsWhenGrouped && (Kc -= Uc * nl)), tl && (Kc = Kc + Gc.height / 2 - Zc / 2 - 2);
				var il = Fc.globals.series[Ic][Lc] < 0, al = Vc;
				switch (this.barCtx.isReversed && (al = Vc + (il ? Wc : -Wc)), Yc.position) {
					case "center":
						qc = tl ? il ? al - Wc / 2 + $c : al + Wc / 2 - $c : il ? al - Wc / 2 + Gc.height / 2 + $c : al + Wc / 2 + Gc.height / 2 - $c;
						break;
					case "bottom":
						qc = tl ? il ? al - Wc + $c : al + Wc - $c : il ? al - Wc + Gc.height + Zc + $c : al + Wc - Gc.height / 2 + Zc - $c;
						break;
					case "top": qc = tl ? il ? al + $c : al - $c : il ? al - Gc.height / 2 - $c : al + Gc.height + $c;
				}
				var ol = al;
				if (Fc.globals.seriesGroups.forEach((function(io) {
					var Fc;
					(Fc = Pc.barCtx[io.join(",")]) == null || Fc.prevY.forEach((function(io) {
						ol = il ? Math.max(io[Lc], ol) : Math.min(io[Lc], ol);
					}));
				})), this.barCtx.lastActiveBarSerieIndex === Rc && Xc.enabled) {
					var sl = new Mi(this.barCtx.ctx).getTextRects(this.getStackedTotalDataLabel({
						realIndex: Rc,
						j: Lc
					}), Jc.fontSize);
					zc = il ? ol - sl.height / 2 - $c - Xc.offsetY + 18 : ol + sl.height + $c + Xc.offsetY - 18;
					var cl = rl;
					Bc = el + (Fc.globals.isXNumeric ? -Uc * Fc.globals.barGroups.length / 2 : Fc.globals.barGroups.length * Uc / 2 - (Fc.globals.barGroups.length - 1) * Uc - cl) + Xc.offsetX;
				}
				return Fc.config.chart.stacked || (qc < 0 ? qc = 0 + Zc : qc + Gc.height / 3 > Fc.globals.gridHeight && (qc = Fc.globals.gridHeight - Zc)), {
					bcx: Hc,
					bcy: Vc,
					dataLabelsX: Kc,
					dataLabelsY: qc,
					totalDataLabelsX: Bc,
					totalDataLabelsY: zc,
					totalDataLabelsAnchor: "middle"
				};
			}
		},
		{
			key: "calculateBarsDataLabelsPosition",
			value: function(io) {
				var Pc = this, Fc = this.w, Ic = io.x, Lc = io.i, Rc = io.j, zc = io.realIndex, Bc = io.bcy, Vc = io.barHeight, Hc = io.barWidth, Uc = io.textRects, Wc = io.dataLabelsX, Gc = io.strokeWidth, Kc = io.dataLabelsConfig, qc = io.barDataLabelsConfig, Jc = io.barTotalDataLabelsConfig, Yc = io.offX, Xc = io.offY, Zc = Fc.globals.gridHeight / Fc.globals.dataPoints, Qc = this.barCtx.barHelpers.getZeroValueEncounters({
					i: Lc,
					j: Rc
				}).zeroEncounters;
				Hc = Math.abs(Hc);
				var $c, el, tl = Bc - (this.barCtx.isRangeBar ? 0 : Zc) + Vc / 2 + Uc.height / 2 + Xc - 3;
				!Fc.config.chart.stacked && Qc > 0 && Fc.config.plotOptions.bar.hideZeroBarsWhenGrouped && (tl -= Vc * Qc);
				var nl = "start", rl = Fc.globals.series[Lc][Rc] < 0, il = Ic;
				switch (this.barCtx.isReversed && (il = Ic + (rl ? -Hc : Hc), nl = rl ? "start" : "end"), qc.position) {
					case "center":
						Wc = rl ? il + Hc / 2 - Yc : Math.max(Uc.width / 2, il - Hc / 2) + Yc;
						break;
					case "bottom":
						Wc = rl ? il + Hc - Gc - Yc : il - Hc + Gc + Yc;
						break;
					case "top": Wc = rl ? il - Gc - Yc : il - Gc + Yc;
				}
				var al = il;
				if (Fc.globals.seriesGroups.forEach((function(io) {
					var Fc;
					(Fc = Pc.barCtx[io.join(",")]) == null || Fc.prevX.forEach((function(io) {
						al = rl ? Math.min(io[Rc], al) : Math.max(io[Rc], al);
					}));
				})), this.barCtx.lastActiveBarSerieIndex === zc && Jc.enabled) {
					var ol = new Mi(this.barCtx.ctx).getTextRects(this.getStackedTotalDataLabel({
						realIndex: zc,
						j: Rc
					}), Kc.fontSize);
					rl ? ($c = al - Gc - Yc - Jc.offsetX, nl = "end") : $c = al + Yc + Jc.offsetX + (this.barCtx.isReversed ? -(Hc + Gc) : Gc), el = tl - Uc.height / 2 + ol.height / 2 + Jc.offsetY + Gc, Fc.globals.barGroups.length > 1 && (el -= Fc.globals.barGroups.length / 2 * (Vc / 2));
				}
				return Fc.config.chart.stacked || (Kc.textAnchor === "start" ? Wc - Uc.width < 0 ? Wc = rl ? Uc.width + Gc : Gc : Wc + Uc.width > Fc.globals.gridWidth && (Wc = rl ? Fc.globals.gridWidth - Gc : Fc.globals.gridWidth - Uc.width - Gc) : Kc.textAnchor === "middle" ? Wc - Uc.width / 2 < 0 ? Wc = Uc.width / 2 + Gc : Wc + Uc.width / 2 > Fc.globals.gridWidth && (Wc = Fc.globals.gridWidth - Uc.width / 2 - Gc) : Kc.textAnchor === "end" && (Wc < 1 ? Wc = Uc.width + Gc : Wc + 1 > Fc.globals.gridWidth && (Wc = Fc.globals.gridWidth - Uc.width - Gc))), {
					bcx: Ic,
					bcy: Bc,
					dataLabelsX: Wc,
					dataLabelsY: tl,
					totalDataLabelsX: $c,
					totalDataLabelsY: el,
					totalDataLabelsAnchor: nl
				};
			}
		},
		{
			key: "drawCalculatedDataLabels",
			value: function(io) {
				var Pc = io.x, Fc = io.y, Ic = io.val, Lc = io.i, Rc = io.j, zc = io.textRects, Bc = io.barHeight, Vc = io.barWidth, Hc = io.dataLabelsConfig, Uc = this.w, Wc = "rotate(0)";
				Uc.config.plotOptions.bar.dataLabels.orientation === "vertical" && (Wc = `rotate(-90, ${Pc}, ${Fc})`);
				var Gc = new qi(this.barCtx.ctx), qc = new Mi(this.barCtx.ctx), Jc = Hc.formatter, Yc = null, Xc = Uc.globals.collapsedSeriesIndices.indexOf(Lc) > -1;
				if (Hc.enabled && !Xc) {
					Yc = qc.group({
						class: "apexcharts-data-labels",
						transform: Wc
					});
					var Zc = "";
					Ic !== void 0 && (Zc = Jc(Ic, u(u({}, Uc), {}, {
						seriesIndex: Lc,
						dataPointIndex: Rc,
						w: Uc
					}))), !Ic && Uc.config.plotOptions.bar.hideZeroBarsWhenGrouped && (Zc = "");
					var Qc = Uc.globals.series[Lc][Rc] < 0, $c = Uc.config.plotOptions.bar.dataLabels.position;
					Uc.config.plotOptions.bar.dataLabels.orientation === "vertical" && ($c === "top" && (Hc.textAnchor = Qc ? "end" : "start"), $c === "center" && (Hc.textAnchor = "middle"), $c === "bottom" && (Hc.textAnchor = Qc ? "end" : "start")), this.barCtx.isRangeBar && this.barCtx.barOptions.dataLabels.hideOverflowingLabels && Vc < qc.getTextRects(Zc, parseFloat(Hc.style.fontSize)).width && (Zc = ""), Uc.config.chart.stacked && this.barCtx.barOptions.dataLabels.hideOverflowingLabels && (this.barCtx.isHorizontal ? zc.width / 1.6 > Math.abs(Vc) && (Zc = "") : zc.height / 1.6 > Math.abs(Bc) && (Zc = ""));
					var el = u({}, Hc);
					this.barCtx.isHorizontal && Ic < 0 && (Hc.textAnchor === "start" ? el.textAnchor = "end" : Hc.textAnchor === "end" && (el.textAnchor = "start")), Gc.plotDataLabelsText({
						x: Pc,
						y: Fc,
						text: Zc,
						i: Lc,
						j: Rc,
						parent: Yc,
						dataLabelsConfig: el,
						alwaysDrawDataLabel: !0,
						offsetCorrection: !0
					});
				}
				return Yc;
			}
		},
		{
			key: "drawTotalDataLabels",
			value: function(io) {
				var Pc = io.x, Fc = io.y, Ic = io.val, Lc = io.realIndex, Rc = io.textAnchor, zc = io.barTotalDataLabelsConfig;
				this.w;
				var Bc, Vc = new Mi(this.barCtx.ctx);
				return zc.enabled && Pc !== void 0 && Fc !== void 0 && this.barCtx.lastActiveBarSerieIndex === Lc && (Bc = Vc.drawText({
					x: Pc,
					y: Fc,
					foreColor: zc.style.color,
					text: Ic,
					textAnchor: Rc,
					fontFamily: zc.style.fontFamily,
					fontSize: zc.style.fontSize,
					fontWeight: zc.style.fontWeight
				})), Bc;
			}
		}
	]), io;
}(), Ma = function() {
	function io(Pc) {
		i(this, io), this.w = Pc.w, this.barCtx = Pc;
	}
	return s(io, [
		{
			key: "initVariables",
			value: function(io) {
				var Pc = this.w;
				this.barCtx.series = io, this.barCtx.totalItems = 0, this.barCtx.seriesLen = 0, this.barCtx.visibleI = -1, this.barCtx.visibleItems = 1;
				for (var Fc = 0; Fc < io.length; Fc++) if (io[Fc].length > 0 && (this.barCtx.seriesLen = this.barCtx.seriesLen + 1, this.barCtx.totalItems += io[Fc].length), Pc.globals.isXNumeric) for (var Ic = 0; Ic < io[Fc].length; Ic++) Pc.globals.seriesX[Fc][Ic] > Pc.globals.minX && Pc.globals.seriesX[Fc][Ic] < Pc.globals.maxX && this.barCtx.visibleItems++;
				else this.barCtx.visibleItems = Pc.globals.dataPoints;
				this.arrBorderRadius = this.createBorderRadiusArr(Pc.globals.series), v.isSafari() && (this.arrBorderRadius = this.arrBorderRadius.map((function(io) {
					return io.map((function(io) {
						return "none";
					}));
				}))), this.barCtx.seriesLen === 0 && (this.barCtx.seriesLen = 1), this.barCtx.zeroSerieses = [], Pc.globals.comboCharts || this.checkZeroSeries({ series: io });
			}
		},
		{
			key: "initialPositions",
			value: function(io) {
				var Pc, Fc, Ic, Lc, Rc, zc, Bc, Vc, Hc = this.w, Uc = Hc.globals.dataPoints;
				this.barCtx.isRangeBar && (Uc = Hc.globals.labels.length);
				var Wc = this.barCtx.seriesLen;
				if (Hc.config.plotOptions.bar.rangeBarGroupRows && (Wc = 1), this.barCtx.isHorizontal) Rc = (Ic = Hc.globals.gridHeight / Uc) / Wc, Hc.globals.isXNumeric && (Rc = (Ic = Hc.globals.gridHeight / this.barCtx.totalItems) / this.barCtx.seriesLen), Rc = Rc * parseInt(this.barCtx.barOptions.barHeight, 10) / 100, String(this.barCtx.barOptions.barHeight).indexOf("%") === -1 && (Rc = parseInt(this.barCtx.barOptions.barHeight, 10)), Vc = this.barCtx.baseLineInvertedY + Hc.globals.padHorizontal + (this.barCtx.isReversed ? Hc.globals.gridWidth : 0) - (this.barCtx.isReversed ? 2 * this.barCtx.baseLineInvertedY : 0), this.barCtx.isFunnel && (Vc = Hc.globals.gridWidth / 2), Fc = (Ic - Rc * this.barCtx.seriesLen) / 2;
				else {
					if (Lc = Hc.globals.gridWidth / this.barCtx.visibleItems, Hc.config.xaxis.convertedCatToNumeric && (Lc = Hc.globals.gridWidth / Hc.globals.dataPoints), zc = Lc / Wc * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100, Hc.globals.isXNumeric) {
						var Gc = this.barCtx.xRatio;
						Hc.globals.minXDiff && Hc.globals.minXDiff !== .5 && Hc.globals.minXDiff / Gc > 0 && (Lc = Hc.globals.minXDiff / Gc), (zc = Lc / Wc * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100) < 1 && (zc = 1);
					}
					String(this.barCtx.barOptions.columnWidth).indexOf("%") === -1 && (zc = parseInt(this.barCtx.barOptions.columnWidth, 10)), Bc = Hc.globals.gridHeight - this.barCtx.baseLineY[this.barCtx.translationsIndex] - (this.barCtx.isReversed ? Hc.globals.gridHeight : 0) + (this.barCtx.isReversed ? 2 * this.barCtx.baseLineY[this.barCtx.translationsIndex] : 0), Pc = Hc.globals.isXNumeric ? this.barCtx.getBarXForNumericXAxis({
						x: Pc,
						j: 0,
						realIndex: io,
						barWidth: zc
					}).x : Hc.globals.padHorizontal + v.noExponents(Lc - zc * this.barCtx.seriesLen) / 2;
				}
				return Hc.globals.barHeight = Rc, Hc.globals.barWidth = zc, {
					x: Pc,
					y: Fc,
					yDivision: Ic,
					xDivision: Lc,
					barHeight: Rc,
					barWidth: zc,
					zeroH: Bc,
					zeroW: Vc
				};
			}
		},
		{
			key: "initializeStackedPrevVars",
			value: function(io) {
				io.w.globals.seriesGroups.forEach((function(Pc) {
					io[Pc] || (io[Pc] = {}), io[Pc].prevY = [], io[Pc].prevX = [], io[Pc].prevYF = [], io[Pc].prevXF = [], io[Pc].prevYVal = [], io[Pc].prevXVal = [];
				}));
			}
		},
		{
			key: "initializeStackedXYVars",
			value: function(io) {
				io.w.globals.seriesGroups.forEach((function(Pc) {
					io[Pc] || (io[Pc] = {}), io[Pc].xArrj = [], io[Pc].xArrjF = [], io[Pc].xArrjVal = [], io[Pc].yArrj = [], io[Pc].yArrjF = [], io[Pc].yArrjVal = [];
				}));
			}
		},
		{
			key: "getPathFillColor",
			value: function(io, Pc, Fc, Ic) {
				var Lc, Rc, zc, Bc, Vc = this.w, Hc = this.barCtx.ctx.fill, Uc = null, Wc = this.barCtx.barOptions.distributed ? Fc : Pc, Gc = !1;
				return this.barCtx.barOptions.colors.ranges.length > 0 && this.barCtx.barOptions.colors.ranges.map((function(Ic) {
					io[Pc][Fc] >= Ic.from && io[Pc][Fc] <= Ic.to && (Uc = Ic.color, Gc = !0);
				})), {
					color: Hc.fillPath({
						seriesNumber: this.barCtx.barOptions.distributed ? Wc : Ic,
						dataPointIndex: Fc,
						color: Uc,
						value: io[Pc][Fc],
						fillConfig: (Lc = Vc.config.series[Pc].data[Fc]) == null ? void 0 : Lc.fill,
						fillType: (Rc = Vc.config.series[Pc].data[Fc]) != null && (zc = Rc.fill) != null && zc.type ? (Bc = Vc.config.series[Pc].data[Fc]) == null ? void 0 : Bc.fill.type : Array.isArray(Vc.config.fill.type) ? Vc.config.fill.type[Ic] : Vc.config.fill.type
					}),
					useRangeColor: Gc
				};
			}
		},
		{
			key: "getStrokeWidth",
			value: function(io, Pc, Fc) {
				var Ic = 0, Lc = this.w;
				return this.barCtx.series[io][Pc] === void 0 || this.barCtx.series[io][Pc] === null ? this.barCtx.isNullValue = !0 : this.barCtx.isNullValue = !1, Lc.config.stroke.show && (this.barCtx.isNullValue || (Ic = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[Fc] : this.barCtx.strokeWidth)), Ic;
			}
		},
		{
			key: "createBorderRadiusArr",
			value: function(io) {
				var Pc, Fc = this.w, Ic = !this.w.config.chart.stacked || Fc.config.plotOptions.bar.borderRadius <= 0, Lc = io.length, Rc = 0 | ((Pc = io[0]) == null ? void 0 : Pc.length), Bc = Array.from({ length: Lc }, (function() {
					return Array(Rc).fill(Ic ? "top" : "none");
				}));
				if (Ic) return Bc;
				for (var Vc = 0; Vc < Rc; Vc++) {
					for (var Hc = [], Uc = [], Wc = 0, Gc = 0; Gc < Lc; Gc++) {
						var Kc = io[Gc][Vc];
						Kc > 0 ? (Hc.push(Gc), Wc++) : Kc < 0 && (Uc.push(Gc), Wc++);
					}
					if (Hc.length > 0 && Uc.length === 0) if (Hc.length === 1) Bc[Hc[0]][Vc] = "both";
					else {
						var qc, Jc = Hc[0], Yc = Hc[Hc.length - 1], Xc = r(Hc);
						try {
							for (Xc.s(); !(qc = Xc.n()).done;) {
								var Zc = qc.value;
								Bc[Zc][Vc] = Zc === Jc ? "bottom" : Zc === Yc ? "top" : "none";
							}
						} catch (io) {
							Xc.e(io);
						} finally {
							Xc.f();
						}
					}
					else if (Uc.length > 0 && Hc.length === 0) if (Uc.length === 1) Bc[Uc[0]][Vc] = "both";
					else {
						var Qc, $c = Math.max.apply(Math, Uc), el = Math.min.apply(Math, Uc), tl = r(Uc);
						try {
							for (tl.s(); !(Qc = tl.n()).done;) {
								var nl = Qc.value;
								Bc[nl][Vc] = nl === $c ? "bottom" : nl === el ? "top" : "none";
							}
						} catch (io) {
							tl.e(io);
						} finally {
							tl.f();
						}
					}
					else if (Hc.length > 0 && Uc.length > 0) {
						var rl, il = Hc[Hc.length - 1], al = r(Hc);
						try {
							for (al.s(); !(rl = al.n()).done;) {
								var ol = rl.value;
								Bc[ol][Vc] = ol === il ? "top" : "none";
							}
						} catch (io) {
							al.e(io);
						} finally {
							al.f();
						}
						var sl, cl = Math.max.apply(Math, Uc), ll = r(Uc);
						try {
							for (ll.s(); !(sl = ll.n()).done;) {
								var ul = sl.value;
								Bc[ul][Vc] = ul === cl ? "bottom" : "none";
							}
						} catch (io) {
							ll.e(io);
						} finally {
							ll.f();
						}
					} else Wc === 1 && (Bc[Hc[0] || Uc[0]][Vc] = "both");
				}
				return Bc;
			}
		},
		{
			key: "barBackground",
			value: function(io) {
				var Pc = io.j, Fc = io.i, Ic = io.x1, Lc = io.x2, Rc = io.y1, zc = io.y2, Bc = io.elSeries, Vc = this.w, Hc = new Mi(this.barCtx.ctx), Uc = new Zi(this.barCtx.ctx).getActiveConfigSeriesIndex();
				if (this.barCtx.barOptions.colors.backgroundBarColors.length > 0 && Uc === Fc) {
					Pc >= this.barCtx.barOptions.colors.backgroundBarColors.length && (Pc %= this.barCtx.barOptions.colors.backgroundBarColors.length);
					var Wc = this.barCtx.barOptions.colors.backgroundBarColors[Pc], Gc = Hc.drawRect(Ic === void 0 ? 0 : Ic, Rc === void 0 ? 0 : Rc, Lc === void 0 ? Vc.globals.gridWidth : Lc, zc === void 0 ? Vc.globals.gridHeight : zc, this.barCtx.barOptions.colors.backgroundBarRadius, Wc, this.barCtx.barOptions.colors.backgroundBarOpacity);
					Bc.add(Gc), Gc.node.classList.add("apexcharts-backgroundBar");
				}
			}
		},
		{
			key: "getColumnPaths",
			value: function(io) {
				var Pc, Fc = io.barWidth, Ic = io.barXPosition, Lc = io.y1, Rc = io.y2, zc = io.strokeWidth, Bc = io.isReversed, Vc = io.series, Hc = io.seriesGroup, Uc = io.realIndex, Wc = io.i, Gc = io.j, Kc = io.w, qc = new Mi(this.barCtx.ctx);
				(zc = Array.isArray(zc) ? zc[Uc] : zc) || (zc = 0);
				var Jc = Fc, Yc = Ic;
				(Pc = Kc.config.series[Uc].data[Gc]) != null && Pc.columnWidthOffset && (Yc = Ic - Kc.config.series[Uc].data[Gc].columnWidthOffset / 2, Jc = Fc + Kc.config.series[Uc].data[Gc].columnWidthOffset);
				var Xc = zc / 2, Zc = Yc + Xc, Qc = Yc + Jc - Xc, $c = (Vc[Wc][Gc] >= 0 ? 1 : -1) * (Bc ? -1 : 1);
				Lc += .001 - Xc * $c, Rc += .001 + Xc * $c;
				var el = qc.move(Zc, Lc), tl = qc.move(Zc, Lc), nl = qc.line(Qc, Lc);
				if (Kc.globals.previousPaths.length > 0 && (tl = this.barCtx.getPreviousPath(Uc, Gc, !1)), el = el + qc.line(Zc, Rc) + qc.line(Qc, Rc) + nl + (Kc.config.plotOptions.bar.borderRadiusApplication === "around" || this.arrBorderRadius[Uc][Gc] === "both" ? " Z" : " z"), tl = tl + qc.line(Zc, Lc) + nl + nl + nl + nl + nl + qc.line(Zc, Lc) + (Kc.config.plotOptions.bar.borderRadiusApplication === "around" || this.arrBorderRadius[Uc][Gc] === "both" ? " Z" : " z"), this.arrBorderRadius[Uc][Gc] !== "none" && (el = qc.roundPathCorners(el, Kc.config.plotOptions.bar.borderRadius)), Kc.config.chart.stacked) {
					var rl = this.barCtx;
					(rl = this.barCtx[Hc]).yArrj.push(Rc - Xc * $c), rl.yArrjF.push(Math.abs(Lc - Rc + zc * $c)), rl.yArrjVal.push(this.barCtx.series[Wc][Gc]);
				}
				return {
					pathTo: el,
					pathFrom: tl
				};
			}
		},
		{
			key: "getBarpaths",
			value: function(io) {
				var Pc, Fc = io.barYPosition, Ic = io.barHeight, Lc = io.x1, Rc = io.x2, zc = io.strokeWidth, Bc = io.isReversed, Vc = io.series, Hc = io.seriesGroup, Uc = io.realIndex, Wc = io.i, Gc = io.j, Kc = io.w, qc = new Mi(this.barCtx.ctx);
				(zc = Array.isArray(zc) ? zc[Uc] : zc) || (zc = 0);
				var Jc = Fc, Yc = Ic;
				(Pc = Kc.config.series[Uc].data[Gc]) != null && Pc.barHeightOffset && (Jc = Fc - Kc.config.series[Uc].data[Gc].barHeightOffset / 2, Yc = Ic + Kc.config.series[Uc].data[Gc].barHeightOffset);
				var Xc = zc / 2, Zc = Jc + Xc, Qc = Jc + Yc - Xc, $c = (Vc[Wc][Gc] >= 0 ? 1 : -1) * (Bc ? -1 : 1);
				Lc += .001 + Xc * $c, Rc += .001 - Xc * $c;
				var el = qc.move(Lc, Zc), tl = qc.move(Lc, Zc);
				Kc.globals.previousPaths.length > 0 && (tl = this.barCtx.getPreviousPath(Uc, Gc, !1));
				var nl = qc.line(Lc, Qc);
				if (el = el + qc.line(Rc, Zc) + qc.line(Rc, Qc) + nl + (Kc.config.plotOptions.bar.borderRadiusApplication === "around" || this.arrBorderRadius[Uc][Gc] === "both" ? " Z" : " z"), tl = tl + qc.line(Lc, Zc) + nl + nl + nl + nl + nl + qc.line(Lc, Zc) + (Kc.config.plotOptions.bar.borderRadiusApplication === "around" || this.arrBorderRadius[Uc][Gc] === "both" ? " Z" : " z"), this.arrBorderRadius[Uc][Gc] !== "none" && (el = qc.roundPathCorners(el, Kc.config.plotOptions.bar.borderRadius)), Kc.config.chart.stacked) {
					var rl = this.barCtx;
					(rl = this.barCtx[Hc]).xArrj.push(Rc + Xc * $c), rl.xArrjF.push(Math.abs(Lc - Rc - zc * $c)), rl.xArrjVal.push(this.barCtx.series[Wc][Gc]);
				}
				return {
					pathTo: el,
					pathFrom: tl
				};
			}
		},
		{
			key: "checkZeroSeries",
			value: function(io) {
				for (var Pc = io.series, Fc = this.w, Ic = 0; Ic < Pc.length; Ic++) {
					for (var Lc = 0, Rc = 0; Rc < Pc[Fc.globals.maxValsInArrayIndex].length; Rc++) Lc += Pc[Ic][Rc];
					Lc === 0 && this.barCtx.zeroSerieses.push(Ic);
				}
			}
		},
		{
			key: "getXForValue",
			value: function(io, Pc) {
				var Fc = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2] ? Pc : null;
				return io != null && (Fc = Pc + io / this.barCtx.invertedYRatio - 2 * (this.barCtx.isReversed ? io / this.barCtx.invertedYRatio : 0)), Fc;
			}
		},
		{
			key: "getYForValue",
			value: function(io, Pc, Fc) {
				var Ic = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3] ? Pc : null;
				return io != null && (Ic = Pc - io / this.barCtx.yRatio[Fc] + 2 * (this.barCtx.isReversed ? io / this.barCtx.yRatio[Fc] : 0)), Ic;
			}
		},
		{
			key: "getGoalValues",
			value: function(io, Pc, Fc, Ic, Lc, Rc) {
				var zc = this, Bc = this.w, Hc = [], Uc = function(Ic, Lc) {
					var Bc;
					Hc.push((o(Bc = {}, io, io === "x" ? zc.getXForValue(Ic, Pc, !1) : zc.getYForValue(Ic, Fc, Rc, !1)), o(Bc, "attrs", Lc), Bc));
				};
				if (Bc.globals.seriesGoals[Ic] && Bc.globals.seriesGoals[Ic][Lc] && Array.isArray(Bc.globals.seriesGoals[Ic][Lc]) && Bc.globals.seriesGoals[Ic][Lc].forEach((function(io) {
					Uc(io.value, io);
				})), this.barCtx.barOptions.isDumbbell && Bc.globals.seriesRange.length) {
					var Wc = this.barCtx.barOptions.dumbbellColors ? this.barCtx.barOptions.dumbbellColors : Bc.globals.colors, Gc = {
						strokeHeight: io === "x" ? 0 : Bc.globals.markers.size[Ic],
						strokeWidth: io === "x" ? Bc.globals.markers.size[Ic] : 0,
						strokeDashArray: 0,
						strokeLineCap: "round",
						strokeColor: Array.isArray(Wc[Ic]) ? Wc[Ic][0] : Wc[Ic]
					};
					Uc(Bc.globals.seriesRangeStart[Ic][Lc], Gc), Uc(Bc.globals.seriesRangeEnd[Ic][Lc], u(u({}, Gc), {}, { strokeColor: Array.isArray(Wc[Ic]) ? Wc[Ic][1] : Wc[Ic] }));
				}
				return Hc;
			}
		},
		{
			key: "drawGoalLine",
			value: function(io) {
				var Pc = io.barXPosition, Fc = io.barYPosition, Ic = io.goalX, Lc = io.goalY, Rc = io.barWidth, zc = io.barHeight, Bc = new Mi(this.barCtx.ctx), Vc = Bc.group({ className: "apexcharts-bar-goals-groups" });
				Vc.node.classList.add("apexcharts-element-hidden"), this.barCtx.w.globals.delayedElements.push({ el: Vc.node }), Vc.attr("clip-path", `url(#gridRectMarkerMask${this.barCtx.w.globals.cuid})`);
				var Hc = null;
				return this.barCtx.isHorizontal ? Array.isArray(Ic) && Ic.forEach((function(io) {
					if (io.x >= -1 && io.x <= Bc.w.globals.gridWidth + 1) {
						var Pc = io.attrs.strokeHeight === void 0 ? zc / 2 : io.attrs.strokeHeight, Ic = Fc + Pc + zc / 2;
						Hc = Bc.drawLine(io.x, Ic - 2 * Pc, io.x, Ic, io.attrs.strokeColor ? io.attrs.strokeColor : void 0, io.attrs.strokeDashArray, io.attrs.strokeWidth ? io.attrs.strokeWidth : 2, io.attrs.strokeLineCap), Vc.add(Hc);
					}
				})) : Array.isArray(Lc) && Lc.forEach((function(io) {
					if (io.y >= -1 && io.y <= Bc.w.globals.gridHeight + 1) {
						var Fc = io.attrs.strokeWidth === void 0 ? Rc / 2 : io.attrs.strokeWidth, Ic = Pc + Fc + Rc / 2;
						Hc = Bc.drawLine(Ic - 2 * Fc, io.y, Ic, io.y, io.attrs.strokeColor ? io.attrs.strokeColor : void 0, io.attrs.strokeDashArray, io.attrs.strokeHeight ? io.attrs.strokeHeight : 2, io.attrs.strokeLineCap), Vc.add(Hc);
					}
				})), Vc;
			}
		},
		{
			key: "drawBarShadow",
			value: function(io) {
				var Pc = io.prevPaths, Fc = io.currPaths, Ic = io.color, Lc = this.w, Rc = Pc.x, zc = Pc.x1, Bc = Pc.barYPosition, Vc = Fc.x, Hc = Fc.x1, Uc = Fc.barYPosition, Wc = Bc + Fc.barHeight, Gc = new Mi(this.barCtx.ctx), Kc = new v(), qc = Gc.move(zc, Wc) + Gc.line(Rc, Wc) + Gc.line(Vc, Uc) + Gc.line(Hc, Uc) + Gc.line(zc, Wc) + (Lc.config.plotOptions.bar.borderRadiusApplication === "around" || this.arrBorderRadius[realIndex][j] === "both" ? " Z" : " z");
				return Gc.drawPath({
					d: qc,
					fill: Kc.shadeColor(.5, v.rgb2hex(Ic)),
					stroke: "none",
					strokeWidth: 0,
					fillOpacity: 1,
					classes: "apexcharts-bar-shadow apexcharts-decoration-element"
				});
			}
		},
		{
			key: "getZeroValueEncounters",
			value: function(io) {
				var Pc, Fc = io.i, Ic = io.j, Lc = this.w, Rc = 0, zc = 0;
				return (Lc.config.plotOptions.bar.horizontal ? Lc.globals.series.map((function(io, Pc) {
					return Pc;
				})) : ((Pc = Lc.globals.columnSeries) == null ? void 0 : Pc.i.map((function(io) {
					return io;
				}))) || []).forEach((function(io) {
					var Pc = Lc.globals.seriesPercent[io][Ic];
					Pc && Rc++, io < Fc && Pc === 0 && zc++;
				})), {
					nonZeroColumns: Rc,
					zeroEncounters: zc
				};
			}
		},
		{
			key: "getGroupIndex",
			value: function(io) {
				var Pc = this.w, Fc = Pc.globals.seriesGroups.findIndex((function(Fc) {
					return Fc.indexOf(Pc.globals.seriesNames[io]) > -1;
				})), Ic = this.barCtx.columnGroupIndices, Lc = Ic.indexOf(Fc);
				return Lc < 0 && (Ic.push(Fc), Lc = Ic.length - 1), {
					groupIndex: Fc,
					columnGroupIndex: Lc
				};
			}
		}
	]), io;
}(), Pa = function() {
	function io(Pc, Fc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w;
		var Lc = this.w;
		this.barOptions = Lc.config.plotOptions.bar, this.isHorizontal = this.barOptions.horizontal, this.strokeWidth = Lc.config.stroke.width, this.isNullValue = !1, this.isRangeBar = Lc.globals.seriesRange.length && this.isHorizontal, this.isVerticalGroupedRangeBar = !Lc.globals.isBarHorizontal && Lc.globals.seriesRange.length && Lc.config.plotOptions.bar.rangeBarGroupRows, this.isFunnel = this.barOptions.isFunnel, this.xyRatios = Fc, this.xyRatios !== null && (this.xRatio = Fc.xRatio, this.yRatio = Fc.yRatio, this.invertedXRatio = Fc.invertedXRatio, this.invertedYRatio = Fc.invertedYRatio, this.baseLineY = Fc.baseLineY, this.baseLineInvertedY = Fc.baseLineInvertedY), this.yaxisIndex = 0, this.translationsIndex = 0, this.seriesLen = 0, this.pathArr = [];
		var Rc = new Zi(this.ctx);
		this.lastActiveBarSerieIndex = Rc.getActiveConfigSeriesIndex("desc", ["bar", "column"]), this.columnGroupIndices = [];
		var zc = Rc.getBarSeriesIndices();
		this.stackedSeriesTotals = new Pi(this.ctx).getStackedSeriesTotals(this.w.config.series.map((function(io, Pc) {
			return zc.indexOf(Pc) === -1 ? Pc : -1;
		})).filter((function(io) {
			return io !== -1;
		}))), this.barHelpers = new Ma(this);
	}
	return s(io, [
		{
			key: "draw",
			value: function(io, Pc) {
				var Fc = this.w, Ic = new Mi(this.ctx), Lc = new Pi(this.ctx, Fc);
				io = Lc.getLogSeries(io), this.series = io, this.yRatio = Lc.getLogYRatios(this.yRatio), this.barHelpers.initVariables(io);
				var Rc = Ic.group({ class: "apexcharts-bar-series apexcharts-plot-series" });
				Fc.config.dataLabels.enabled && this.totalItems > this.barOptions.dataLabels.maxItems && console.warn("WARNING: DataLabels are enabled but there are too many to display. This may cause performance issue when rendering - ApexCharts");
				for (var zc = 0, Bc = 0; zc < io.length; zc++, Bc++) {
					var Vc, Hc, Uc, Wc, Gc = void 0, qc = void 0, Jc = [], Yc = [], Xc = Fc.globals.comboCharts ? Pc[zc] : zc, Zc = this.barHelpers.getGroupIndex(Xc).columnGroupIndex, Qc = Ic.group({
						class: "apexcharts-series",
						rel: zc + 1,
						seriesName: v.escapeString(Fc.globals.seriesNames[Xc]),
						"data:realIndex": Xc
					});
					this.ctx.series.addCollapsedClassToSeries(Qc, Xc), io[zc].length > 0 && (this.visibleI += 1);
					var el = 0, tl = 0;
					this.yRatio.length > 1 && (this.yaxisIndex = Fc.globals.seriesYAxisReverseMap[Xc], this.translationsIndex = Xc);
					var nl = this.translationsIndex;
					this.isReversed = Fc.config.yaxis[this.yaxisIndex] && Fc.config.yaxis[this.yaxisIndex].reversed;
					var rl = this.barHelpers.initialPositions(Xc);
					qc = rl.y, el = rl.barHeight, Hc = rl.yDivision, Wc = rl.zeroW, Gc = rl.x, tl = rl.barWidth, Vc = rl.xDivision, Uc = rl.zeroH, this.isHorizontal || Yc.push(Gc + tl / 2);
					var il = Ic.group({
						class: "apexcharts-datalabels",
						"data:realIndex": Xc
					});
					Fc.globals.delayedElements.push({ el: il.node }), il.node.classList.add("apexcharts-element-hidden");
					var al = Ic.group({ class: "apexcharts-bar-goals-markers" }), ol = Ic.group({ class: "apexcharts-bar-shadows" });
					Fc.globals.delayedElements.push({ el: ol.node }), ol.node.classList.add("apexcharts-element-hidden");
					for (var sl = 0; sl < io[zc].length; sl++) {
						var cl = this.barHelpers.getStrokeWidth(zc, sl, Xc), ll = null, ul = {
							indexes: {
								i: zc,
								j: sl,
								realIndex: Xc,
								translationsIndex: nl,
								bc: Bc
							},
							x: Gc,
							y: qc,
							strokeWidth: cl,
							elSeries: Qc
						};
						this.isHorizontal ? (ll = this.drawBarPaths(u(u({}, ul), {}, {
							barHeight: el,
							zeroW: Wc,
							yDivision: Hc
						})), tl = this.series[zc][sl] / this.invertedYRatio) : (ll = this.drawColumnPaths(u(u({}, ul), {}, {
							xDivision: Vc,
							barWidth: tl,
							zeroH: Uc
						})), el = this.series[zc][sl] / this.yRatio[nl]);
						var dl = this.barHelpers.getPathFillColor(io, zc, sl, Xc);
						if (this.isFunnel && this.barOptions.isFunnel3d && this.pathArr.length && sl > 0) {
							var fl, pl = this.barHelpers.drawBarShadow({
								color: typeof dl.color == "string" && ((fl = dl.color) == null ? void 0 : fl.indexOf("url")) === -1 ? dl.color : v.hexToRgba(Fc.globals.colors[zc]),
								prevPaths: this.pathArr[this.pathArr.length - 1],
								currPaths: ll
							});
							ol.add(pl), Fc.config.chart.dropShadow.enabled && new Li(this.ctx).dropShadow(pl, Fc.config.chart.dropShadow, Xc);
						}
						this.pathArr.push(ll);
						var ml = this.barHelpers.drawGoalLine({
							barXPosition: ll.barXPosition,
							barYPosition: ll.barYPosition,
							goalX: ll.goalX,
							goalY: ll.goalY,
							barHeight: el,
							barWidth: tl
						});
						ml && al.add(ml), qc = ll.y, Gc = ll.x, sl > 0 && Yc.push(Gc + tl / 2), Jc.push(qc), this.renderSeries(u(u({
							realIndex: Xc,
							pathFill: dl.color
						}, dl.useRangeColor ? { lineFill: dl.color } : {}), {}, {
							j: sl,
							i: zc,
							columnGroupIndex: Zc,
							pathFrom: ll.pathFrom,
							pathTo: ll.pathTo,
							strokeWidth: cl,
							elSeries: Qc,
							x: Gc,
							y: qc,
							series: io,
							barHeight: Math.abs(ll.barHeight ? ll.barHeight : el),
							barWidth: Math.abs(ll.barWidth ? ll.barWidth : tl),
							elDataLabelsWrap: il,
							elGoalsMarkers: al,
							elBarShadows: ol,
							visibleSeries: this.visibleI,
							type: "bar"
						}));
					}
					Fc.globals.seriesXvalues[Xc] = Yc, Fc.globals.seriesYvalues[Xc] = Jc, Rc.add(Qc);
				}
				return Rc;
			}
		},
		{
			key: "renderSeries",
			value: function(io) {
				var Pc = io.realIndex, Fc = io.pathFill, Ic = io.lineFill, Lc = io.j, Rc = io.i, zc = io.columnGroupIndex, Bc = io.pathFrom, Vc = io.pathTo, Hc = io.strokeWidth, Uc = io.elSeries, Wc = io.x, Gc = io.y, Kc = io.y1, qc = io.y2, Jc = io.series, Yc = io.barHeight, Xc = io.barWidth, Zc = io.barXPosition, Qc = io.barYPosition, $c = io.elDataLabelsWrap, el = io.elGoalsMarkers, tl = io.elBarShadows, nl = io.visibleSeries, rl = io.type, il = io.classes, al = this.w, ol = new Mi(this.ctx), sl = !1;
				if (!Ic) {
					var cl = typeof al.globals.stroke.colors[Pc] == "function" ? function(io) {
						var Pc, Fc = al.config.stroke.colors;
						return Array.isArray(Fc) && Fc.length > 0 && ((Pc = Fc[io]) || (Pc = ""), typeof Pc == "function") ? Pc({
							value: al.globals.series[io][Lc],
							dataPointIndex: Lc,
							w: al
						}) : Pc;
					}(Pc) : al.globals.stroke.colors[Pc];
					Ic = this.barOptions.distributed ? al.globals.stroke.colors[Lc] : cl;
				}
				var ll = new La(this).handleBarDataLabels({
					x: Wc,
					y: Gc,
					y1: Kc,
					y2: qc,
					i: Rc,
					j: Lc,
					series: Jc,
					realIndex: Pc,
					columnGroupIndex: zc,
					barHeight: Yc,
					barWidth: Xc,
					barXPosition: Zc,
					barYPosition: Qc,
					visibleSeries: nl
				});
				al.globals.isBarHorizontal || (ll.dataLabelsPos.dataLabelsX + Xc < 0 || ll.dataLabelsPos.dataLabelsX - Xc > al.globals.gridWidth) && (sl = !0), al.config.series[Rc].data[Lc] && al.config.series[Rc].data[Lc].strokeColor && (Ic = al.config.series[Rc].data[Lc].strokeColor), this.isNullValue && (Fc = "none");
				var ul = Lc / al.config.chart.animations.animateGradually.delay * (al.config.chart.animations.speed / al.globals.dataPoints) / 2.4;
				if (!sl) {
					var dl = ol.renderPaths({
						i: Rc,
						j: Lc,
						realIndex: Pc,
						pathFrom: Bc,
						pathTo: Vc,
						stroke: Ic,
						strokeWidth: Hc,
						strokeLineCap: al.config.stroke.lineCap,
						fill: Fc,
						animationDelay: ul,
						initialSpeed: al.config.chart.animations.speed,
						dataChangeSpeed: al.config.chart.animations.dynamicAnimation.speed,
						className: `apexcharts-${rl}-area ${il}`,
						chartType: rl
					});
					dl.attr("clip-path", `url(#gridRectBarMask${al.globals.cuid})`);
					var fl = al.config.forecastDataPoints;
					fl.count > 0 && Lc >= al.globals.dataPoints - fl.count && (dl.node.setAttribute("stroke-dasharray", fl.dashArray), dl.node.setAttribute("stroke-width", fl.strokeWidth), dl.node.setAttribute("fill-opacity", fl.fillOpacity)), Kc !== void 0 && qc !== void 0 && (dl.attr("data-range-y1", Kc), dl.attr("data-range-y2", qc)), new Li(this.ctx).setSelectionFilter(dl, Pc, Lc), Uc.add(dl), dl.attr({
						cy: ll.dataLabelsPos.bcy,
						cx: ll.dataLabelsPos.bcx,
						j: Lc,
						val: al.globals.series[Rc][Lc],
						barHeight: Yc,
						barWidth: Xc
					}), ll.dataLabels !== null && $c.add(ll.dataLabels), ll.totalDataLabels && $c.add(ll.totalDataLabels), Uc.add($c), el && Uc.add(el), tl && Uc.add(tl);
				}
				return Uc;
			}
		},
		{
			key: "drawBarPaths",
			value: function(io) {
				var Pc, Fc = io.indexes, Ic = io.barHeight, Lc = io.strokeWidth, Rc = io.zeroW, zc = io.x, Bc = io.y, Vc = io.yDivision, Hc = io.elSeries, Uc = this.w, Wc = Fc.i, Gc = Fc.j;
				if (Uc.globals.isXNumeric) Pc = (Bc = (Uc.globals.seriesX[Wc][Gc] - Uc.globals.minX) / this.invertedXRatio - Ic) + Ic * this.visibleI;
				else if (Uc.config.plotOptions.bar.hideZeroBarsWhenGrouped) {
					var Kc = this.barHelpers.getZeroValueEncounters({
						i: Wc,
						j: Gc
					}), qc = Kc.nonZeroColumns, Jc = Kc.zeroEncounters;
					qc > 0 && (Ic = this.seriesLen * Ic / qc), Pc = Bc + Ic * this.visibleI, Pc -= Ic * Jc;
				} else Pc = Bc + Ic * this.visibleI;
				this.isFunnel && (Rc -= (this.barHelpers.getXForValue(this.series[Wc][Gc], Rc) - Rc) / 2), zc = this.barHelpers.getXForValue(this.series[Wc][Gc], Rc);
				var Yc = this.barHelpers.getBarpaths({
					barYPosition: Pc,
					barHeight: Ic,
					x1: Rc,
					x2: zc,
					strokeWidth: Lc,
					isReversed: this.isReversed,
					series: this.series,
					realIndex: Fc.realIndex,
					i: Wc,
					j: Gc,
					w: Uc
				});
				return Uc.globals.isXNumeric || (Bc += Vc), this.barHelpers.barBackground({
					j: Gc,
					i: Wc,
					y1: Pc - Ic * this.visibleI,
					y2: Ic * this.seriesLen,
					elSeries: Hc
				}), {
					pathTo: Yc.pathTo,
					pathFrom: Yc.pathFrom,
					x1: Rc,
					x: zc,
					y: Bc,
					goalX: this.barHelpers.getGoalValues("x", Rc, null, Wc, Gc),
					barYPosition: Pc,
					barHeight: Ic
				};
			}
		},
		{
			key: "drawColumnPaths",
			value: function(io) {
				var Pc, Fc = io.indexes, Ic = io.x, Lc = io.y, Rc = io.xDivision, zc = io.barWidth, Bc = io.zeroH, Vc = io.strokeWidth, Hc = io.elSeries, Uc = this.w, Wc = Fc.realIndex, Gc = Fc.translationsIndex, Kc = Fc.i, qc = Fc.j, Jc = Fc.bc;
				if (Uc.globals.isXNumeric) {
					var Yc = this.getBarXForNumericXAxis({
						x: Ic,
						j: qc,
						realIndex: Wc,
						barWidth: zc
					});
					Ic = Yc.x, Pc = Yc.barXPosition;
				} else if (Uc.config.plotOptions.bar.hideZeroBarsWhenGrouped) {
					var Xc = this.barHelpers.getZeroValueEncounters({
						i: Kc,
						j: qc
					}), Zc = Xc.nonZeroColumns, Qc = Xc.zeroEncounters;
					Zc > 0 && (zc = this.seriesLen * zc / Zc), Pc = Ic + zc * this.visibleI, Pc -= zc * Qc;
				} else Pc = Ic + zc * this.visibleI;
				Lc = this.barHelpers.getYForValue(this.series[Kc][qc], Bc, Gc);
				var $c = this.barHelpers.getColumnPaths({
					barXPosition: Pc,
					barWidth: zc,
					y1: Bc,
					y2: Lc,
					strokeWidth: Vc,
					isReversed: this.isReversed,
					series: this.series,
					realIndex: Wc,
					i: Kc,
					j: qc,
					w: Uc
				});
				return Uc.globals.isXNumeric || (Ic += Rc), this.barHelpers.barBackground({
					bc: Jc,
					j: qc,
					i: Kc,
					x1: Pc - Vc / 2 - zc * this.visibleI,
					x2: zc * this.seriesLen + Vc / 2,
					elSeries: Hc
				}), {
					pathTo: $c.pathTo,
					pathFrom: $c.pathFrom,
					x: Ic,
					y: Lc,
					goalY: this.barHelpers.getGoalValues("y", null, Bc, Kc, qc, Gc),
					barXPosition: Pc,
					barWidth: zc
				};
			}
		},
		{
			key: "getBarXForNumericXAxis",
			value: function(io) {
				var Pc = io.x, Fc = io.barWidth, Ic = io.realIndex, Lc = io.j, Rc = this.w, zc = Ic;
				return Rc.globals.seriesX[Ic].length || (zc = Rc.globals.maxValsInArrayIndex), v.isNumber(Rc.globals.seriesX[zc][Lc]) && (Pc = (Rc.globals.seriesX[zc][Lc] - Rc.globals.minX) / this.xRatio - Fc * this.seriesLen / 2), {
					barXPosition: Pc + Fc * this.visibleI,
					x: Pc
				};
			}
		},
		{
			key: "getPreviousPath",
			value: function(io, Pc) {
				for (var Fc = this.w, Ic = "M 0 0", Lc = 0; Lc < Fc.globals.previousPaths.length; Lc++) {
					var Rc = Fc.globals.previousPaths[Lc];
					Rc.paths && Rc.paths.length > 0 && parseInt(Rc.realIndex, 10) === parseInt(io, 10) && Fc.globals.previousPaths[Lc].paths[Pc] !== void 0 && (Ic = Fc.globals.previousPaths[Lc].paths[Pc].d);
				}
				return Ic;
			}
		}
	]), io;
}(), Ia = function(io) {
	h(Fc, Pa);
	var Pc = n(Fc);
	function Fc() {
		return i(this, Fc), Pc.apply(this, arguments);
	}
	return s(Fc, [
		{
			key: "draw",
			value: function(io, Pc) {
				var Fc = this, Ic = this.w;
				this.graphics = new Mi(this.ctx), this.bar = new Pa(this.ctx, this.xyRatios);
				var Lc = new Pi(this.ctx, Ic);
				io = Lc.getLogSeries(io), this.yRatio = Lc.getLogYRatios(this.yRatio), this.barHelpers.initVariables(io), Ic.config.chart.stackType === "100%" && (io = Ic.globals.comboCharts ? Pc.map((function(io) {
					return Ic.globals.seriesPercent[io];
				})) : Ic.globals.seriesPercent.slice()), this.series = io, this.barHelpers.initializeStackedPrevVars(this);
				for (var Rc = this.graphics.group({ class: "apexcharts-bar-series apexcharts-plot-series" }), zc = 0, Bc = 0, Vc = function(Lc, Vc) {
					var Hc = void 0, Uc = void 0, Wc = void 0, Gc = void 0, qc = Ic.globals.comboCharts ? Pc[Lc] : Lc, Jc = Fc.barHelpers.getGroupIndex(qc), Yc = Jc.groupIndex, Xc = Jc.columnGroupIndex;
					Fc.groupCtx = Fc[Ic.globals.seriesGroups[Yc]];
					var Zc = [], Qc = [], el = 0;
					Fc.yRatio.length > 1 && (Fc.yaxisIndex = Ic.globals.seriesYAxisReverseMap[qc][0], el = qc), Fc.isReversed = Ic.config.yaxis[Fc.yaxisIndex] && Ic.config.yaxis[Fc.yaxisIndex].reversed;
					var tl = Fc.graphics.group({
						class: "apexcharts-series",
						seriesName: v.escapeString(Ic.globals.seriesNames[qc]),
						rel: Lc + 1,
						"data:realIndex": qc
					});
					Fc.ctx.series.addCollapsedClassToSeries(tl, qc);
					var nl = Fc.graphics.group({
						class: "apexcharts-datalabels",
						"data:realIndex": qc
					}), rl = Fc.graphics.group({ class: "apexcharts-bar-goals-markers" }), il = 0, al = 0, ol = Fc.initialPositions(zc, Bc, Hc, Uc, Wc, Gc, el);
					Bc = ol.y, il = ol.barHeight, Uc = ol.yDivision, Gc = ol.zeroW, zc = ol.x, al = ol.barWidth, Hc = ol.xDivision, Wc = ol.zeroH, Ic.globals.barHeight = il, Ic.globals.barWidth = al, Fc.barHelpers.initializeStackedXYVars(Fc), Fc.groupCtx.prevY.length === 1 && Fc.groupCtx.prevY[0].every((function(io) {
						return isNaN(io);
					})) && (Fc.groupCtx.prevY[0] = Fc.groupCtx.prevY[0].map((function() {
						return Wc;
					})), Fc.groupCtx.prevYF[0] = Fc.groupCtx.prevYF[0].map((function() {
						return 0;
					})));
					for (var sl = 0; sl < Ic.globals.dataPoints; sl++) {
						var cl = Fc.barHelpers.getStrokeWidth(Lc, sl, qc), ll = {
							indexes: {
								i: Lc,
								j: sl,
								realIndex: qc,
								translationsIndex: el,
								bc: Vc
							},
							strokeWidth: cl,
							x: zc,
							y: Bc,
							elSeries: tl,
							columnGroupIndex: Xc,
							seriesGroup: Ic.globals.seriesGroups[Yc]
						}, ul = null;
						Fc.isHorizontal ? (ul = Fc.drawStackedBarPaths(u(u({}, ll), {}, {
							zeroW: Gc,
							barHeight: il,
							yDivision: Uc
						})), al = Fc.series[Lc][sl] / Fc.invertedYRatio) : (ul = Fc.drawStackedColumnPaths(u(u({}, ll), {}, {
							xDivision: Hc,
							barWidth: al,
							zeroH: Wc
						})), il = Fc.series[Lc][sl] / Fc.yRatio[el]);
						var dl = Fc.barHelpers.drawGoalLine({
							barXPosition: ul.barXPosition,
							barYPosition: ul.barYPosition,
							goalX: ul.goalX,
							goalY: ul.goalY,
							barHeight: il,
							barWidth: al
						});
						dl && rl.add(dl), Bc = ul.y, zc = ul.x, Zc.push(zc), Qc.push(Bc);
						var fl = Fc.barHelpers.getPathFillColor(io, Lc, sl, qc), pl = "", ml = Ic.globals.isBarHorizontal ? "apexcharts-flip-x" : "apexcharts-flip-y";
						(Fc.barHelpers.arrBorderRadius[qc][sl] === "bottom" && Ic.globals.series[qc][sl] > 0 || Fc.barHelpers.arrBorderRadius[qc][sl] === "top" && Ic.globals.series[qc][sl] < 0) && (pl = ml), tl = Fc.renderSeries(u(u({
							realIndex: qc,
							pathFill: fl.color
						}, fl.useRangeColor ? { lineFill: fl.color } : {}), {}, {
							j: sl,
							i: Lc,
							columnGroupIndex: Xc,
							pathFrom: ul.pathFrom,
							pathTo: ul.pathTo,
							strokeWidth: cl,
							elSeries: tl,
							x: zc,
							y: Bc,
							series: io,
							barHeight: il,
							barWidth: al,
							elDataLabelsWrap: nl,
							elGoalsMarkers: rl,
							type: "bar",
							visibleSeries: Xc,
							classes: pl
						}));
					}
					Ic.globals.seriesXvalues[qc] = Zc, Ic.globals.seriesYvalues[qc] = Qc, Fc.groupCtx.prevY.push(Fc.groupCtx.yArrj), Fc.groupCtx.prevYF.push(Fc.groupCtx.yArrjF), Fc.groupCtx.prevYVal.push(Fc.groupCtx.yArrjVal), Fc.groupCtx.prevX.push(Fc.groupCtx.xArrj), Fc.groupCtx.prevXF.push(Fc.groupCtx.xArrjF), Fc.groupCtx.prevXVal.push(Fc.groupCtx.xArrjVal), Rc.add(tl);
				}, Hc = 0, Uc = 0; Hc < io.length; Hc++, Uc++) Vc(Hc, Uc);
				return Rc;
			}
		},
		{
			key: "initialPositions",
			value: function(io, Pc, Fc, Ic, Lc, Rc, zc) {
				var Bc, Vc, Hc = this.w;
				if (this.isHorizontal) {
					Ic = Hc.globals.gridHeight / Hc.globals.dataPoints;
					var Uc = Hc.config.plotOptions.bar.barHeight;
					Bc = String(Uc).indexOf("%") === -1 ? parseInt(Uc, 10) : Ic * parseInt(Uc, 10) / 100, Rc = Hc.globals.padHorizontal + (this.isReversed ? Hc.globals.gridWidth - this.baseLineInvertedY : this.baseLineInvertedY), Pc = (Ic - Bc) / 2;
				} else {
					Vc = Fc = Hc.globals.gridWidth / Hc.globals.dataPoints;
					var Wc = Hc.config.plotOptions.bar.columnWidth;
					Hc.globals.isXNumeric && Hc.globals.dataPoints > 1 ? Vc = (Fc = Hc.globals.minXDiff / this.xRatio) * parseInt(this.barOptions.columnWidth, 10) / 100 : String(Wc).indexOf("%") === -1 ? Vc = parseInt(Wc, 10) : Vc *= parseInt(Wc, 10) / 100, Lc = this.isReversed ? this.baseLineY[zc] : Hc.globals.gridHeight - this.baseLineY[zc], io = Hc.globals.padHorizontal + (Fc - Vc) / 2;
				}
				var Gc = Hc.globals.barGroups.length || 1;
				return {
					x: io,
					y: Pc,
					yDivision: Ic,
					xDivision: Fc,
					barHeight: Bc / Gc,
					barWidth: Vc / Gc,
					zeroH: Lc,
					zeroW: Rc
				};
			}
		},
		{
			key: "drawStackedBarPaths",
			value: function(io) {
				for (var Pc, Fc = io.indexes, Ic = io.barHeight, Lc = io.strokeWidth, Rc = io.zeroW, zc = io.x, Bc = io.y, Vc = io.columnGroupIndex, Hc = io.seriesGroup, Uc = io.yDivision, Wc = io.elSeries, Gc = this.w, Kc = Bc + Vc * Ic, qc = Fc.i, Jc = Fc.j, Yc = Fc.realIndex, Xc = Fc.translationsIndex, Zc = 0, Qc = 0; Qc < this.groupCtx.prevXF.length; Qc++) Zc += this.groupCtx.prevXF[Qc][Jc];
				var $c = qc;
				if (Gc.config.series[Yc].name && ($c = Hc.indexOf(Gc.config.series[Yc].name)), $c > 0) {
					var el = Rc;
					this.groupCtx.prevXVal[$c - 1][Jc] < 0 ? el = this.series[qc][Jc] >= 0 ? this.groupCtx.prevX[$c - 1][Jc] + Zc - 2 * (this.isReversed ? Zc : 0) : this.groupCtx.prevX[$c - 1][Jc] : this.groupCtx.prevXVal[$c - 1][Jc] >= 0 && (el = this.series[qc][Jc] >= 0 ? this.groupCtx.prevX[$c - 1][Jc] : this.groupCtx.prevX[$c - 1][Jc] - Zc + 2 * (this.isReversed ? Zc : 0)), Pc = el;
				} else Pc = Rc;
				zc = this.series[qc][Jc] === null ? Pc : Pc + this.series[qc][Jc] / this.invertedYRatio - 2 * (this.isReversed ? this.series[qc][Jc] / this.invertedYRatio : 0);
				var tl = this.barHelpers.getBarpaths({
					barYPosition: Kc,
					barHeight: Ic,
					x1: Pc,
					x2: zc,
					strokeWidth: Lc,
					isReversed: this.isReversed,
					series: this.series,
					realIndex: Fc.realIndex,
					seriesGroup: Hc,
					i: qc,
					j: Jc,
					w: Gc
				});
				return this.barHelpers.barBackground({
					j: Jc,
					i: qc,
					y1: Kc,
					y2: Ic,
					elSeries: Wc
				}), Bc += Uc, {
					pathTo: tl.pathTo,
					pathFrom: tl.pathFrom,
					goalX: this.barHelpers.getGoalValues("x", Rc, null, qc, Jc, Xc),
					barXPosition: Pc,
					barYPosition: Kc,
					x: zc,
					y: Bc
				};
			}
		},
		{
			key: "drawStackedColumnPaths",
			value: function(io) {
				var Pc = io.indexes, Fc = io.x, Ic = io.y, Lc = io.xDivision, Rc = io.barWidth, zc = io.zeroH, Bc = io.columnGroupIndex, Vc = io.seriesGroup, Hc = io.elSeries, Uc = this.w, Wc = Pc.i, Gc = Pc.j, Kc = Pc.bc, qc = Pc.realIndex, Jc = Pc.translationsIndex;
				if (Uc.globals.isXNumeric) {
					var Yc = Uc.globals.seriesX[qc][Gc];
					Yc || (Yc = 0), Fc = (Yc - Uc.globals.minX) / this.xRatio - Rc / 2 * Uc.globals.barGroups.length;
				}
				for (var Xc, Zc = Fc + Bc * Rc, Qc = 0, $c = 0; $c < this.groupCtx.prevYF.length; $c++) Qc += isNaN(this.groupCtx.prevYF[$c][Gc]) ? 0 : this.groupCtx.prevYF[$c][Gc];
				var el = Wc;
				if (Vc && (el = Vc.indexOf(Uc.globals.seriesNames[qc])), el > 0 && !Uc.globals.isXNumeric || el > 0 && Uc.globals.isXNumeric && Uc.globals.seriesX[qc - 1][Gc] === Uc.globals.seriesX[qc][Gc]) {
					var tl, nl, rl, il = Math.min(this.yRatio.length + 1, qc + 1);
					if (this.groupCtx.prevY[el - 1] !== void 0 && this.groupCtx.prevY[el - 1].length) for (var al = 1; al < il; al++) {
						var ol;
						if (!isNaN((ol = this.groupCtx.prevY[el - al]) == null ? void 0 : ol[Gc])) {
							rl = this.groupCtx.prevY[el - al][Gc];
							break;
						}
					}
					for (var sl = 1; sl < il; sl++) {
						var cl, ll;
						if (((cl = this.groupCtx.prevYVal[el - sl]) == null ? void 0 : cl[Gc]) < 0) {
							nl = this.series[Wc][Gc] >= 0 ? rl - Qc + 2 * (this.isReversed ? Qc : 0) : rl;
							break;
						}
						if (((ll = this.groupCtx.prevYVal[el - sl]) == null ? void 0 : ll[Gc]) >= 0) {
							nl = this.series[Wc][Gc] >= 0 ? rl : rl + Qc - 2 * (this.isReversed ? Qc : 0);
							break;
						}
					}
					nl === void 0 && (nl = Uc.globals.gridHeight), Xc = (tl = this.groupCtx.prevYF[0]) != null && tl.every((function(io) {
						return io === 0;
					})) && this.groupCtx.prevYF.slice(1, el).every((function(io) {
						return io.every((function(io) {
							return isNaN(io);
						}));
					})) ? zc : nl;
				} else Xc = zc;
				Ic = this.series[Wc][Gc] ? Xc - this.series[Wc][Gc] / this.yRatio[Jc] + 2 * (this.isReversed ? this.series[Wc][Gc] / this.yRatio[Jc] : 0) : Xc;
				var ul = this.barHelpers.getColumnPaths({
					barXPosition: Zc,
					barWidth: Rc,
					y1: Xc,
					y2: Ic,
					yRatio: this.yRatio[Jc],
					strokeWidth: this.strokeWidth,
					isReversed: this.isReversed,
					series: this.series,
					seriesGroup: Vc,
					realIndex: Pc.realIndex,
					i: Wc,
					j: Gc,
					w: Uc
				});
				return this.barHelpers.barBackground({
					bc: Kc,
					j: Gc,
					i: Wc,
					x1: Zc,
					x2: Rc,
					elSeries: Hc
				}), {
					pathTo: ul.pathTo,
					pathFrom: ul.pathFrom,
					goalY: this.barHelpers.getGoalValues("y", null, zc, Wc, Gc),
					barXPosition: Zc,
					x: Uc.globals.isXNumeric ? Fc : Fc + Lc,
					y: Ic
				};
			}
		}
	]), Fc;
}(), Ta = function(io) {
	h(Fc, Pa);
	var Pc = n(Fc);
	function Fc() {
		return i(this, Fc), Pc.apply(this, arguments);
	}
	return s(Fc, [
		{
			key: "draw",
			value: function(io, Pc, Fc) {
				var Ic = this, Lc = this.w, Rc = new Mi(this.ctx), zc = Lc.globals.comboCharts ? Pc : Lc.config.chart.type, Bc = new ji(this.ctx);
				this.candlestickOptions = this.w.config.plotOptions.candlestick, this.boxOptions = this.w.config.plotOptions.boxPlot, this.isHorizontal = Lc.config.plotOptions.bar.horizontal, this.isOHLC = this.candlestickOptions && this.candlestickOptions.type === "ohlc";
				var Vc = new Pi(this.ctx, Lc);
				io = Vc.getLogSeries(io), this.series = io, this.yRatio = Vc.getLogYRatios(this.yRatio), this.barHelpers.initVariables(io);
				for (var Hc = Rc.group({ class: `apexcharts-${zc}-series apexcharts-plot-series` }), Uc = function(Pc) {
					Ic.isBoxPlot = Lc.config.chart.type === "boxPlot" || Lc.config.series[Pc].type === "boxPlot";
					var zc, Vc, Uc, Wc, Gc = void 0, qc = void 0, Jc = [], Yc = [], Xc = Lc.globals.comboCharts ? Fc[Pc] : Pc, Zc = Ic.barHelpers.getGroupIndex(Xc).columnGroupIndex, Qc = Rc.group({
						class: "apexcharts-series",
						seriesName: v.escapeString(Lc.globals.seriesNames[Xc]),
						rel: Pc + 1,
						"data:realIndex": Xc
					});
					Ic.ctx.series.addCollapsedClassToSeries(Qc, Xc), io[Pc].length > 0 && (Ic.visibleI += 1);
					var el, tl, nl = 0;
					Ic.yRatio.length > 1 && (Ic.yaxisIndex = Lc.globals.seriesYAxisReverseMap[Xc][0], nl = Xc);
					var rl = Ic.barHelpers.initialPositions(Xc);
					qc = rl.y, el = rl.barHeight, Vc = rl.yDivision, Wc = rl.zeroW, Gc = rl.x, tl = rl.barWidth, zc = rl.xDivision, Uc = rl.zeroH, Yc.push(Gc + tl / 2);
					for (var il = Rc.group({
						class: "apexcharts-datalabels",
						"data:realIndex": Xc
					}), al = Rc.group({ class: "apexcharts-bar-goals-markers" }), ol = function(Fc) {
						var Rc = Ic.barHelpers.getStrokeWidth(Pc, Fc, Xc), Hc = null, $c = {
							indexes: {
								i: Pc,
								j: Fc,
								realIndex: Xc,
								translationsIndex: nl
							},
							x: Gc,
							y: qc,
							strokeWidth: Rc,
							elSeries: Qc
						};
						Hc = Ic.isHorizontal ? Ic.drawHorizontalBoxPaths(u(u({}, $c), {}, {
							yDivision: Vc,
							barHeight: el,
							zeroW: Wc
						})) : Ic.drawVerticalBoxPaths(u(u({}, $c), {}, {
							xDivision: zc,
							barWidth: tl,
							zeroH: Uc
						})), qc = Hc.y, Gc = Hc.x;
						var rl = Ic.barHelpers.drawGoalLine({
							barXPosition: Hc.barXPosition,
							barYPosition: Hc.barYPosition,
							goalX: Hc.goalX,
							goalY: Hc.goalY,
							barHeight: el,
							barWidth: tl
						});
						rl && al.add(rl), Fc > 0 && Yc.push(Gc + tl / 2), Jc.push(qc), Hc.pathTo.forEach((function(zc, Vc) {
							var Uc = !Ic.isBoxPlot && Ic.candlestickOptions.wick.useFillColor ? Hc.color[Vc] : Lc.globals.stroke.colors[Pc], Wc = Bc.fillPath({
								seriesNumber: Xc,
								dataPointIndex: Fc,
								color: Hc.color[Vc],
								value: io[Pc][Fc]
							});
							Ic.renderSeries({
								realIndex: Xc,
								pathFill: Wc,
								lineFill: Uc,
								j: Fc,
								i: Pc,
								pathFrom: Hc.pathFrom,
								pathTo: zc,
								strokeWidth: Rc,
								elSeries: Qc,
								x: Gc,
								y: qc,
								series: io,
								columnGroupIndex: Zc,
								barHeight: el,
								barWidth: tl,
								elDataLabelsWrap: il,
								elGoalsMarkers: al,
								visibleSeries: Ic.visibleI,
								type: Lc.config.chart.type
							});
						}));
					}, sl = 0; sl < Lc.globals.dataPoints; sl++) ol(sl);
					Lc.globals.seriesXvalues[Xc] = Yc, Lc.globals.seriesYvalues[Xc] = Jc, Hc.add(Qc);
				}, Wc = 0; Wc < io.length; Wc++) Uc(Wc);
				return Hc;
			}
		},
		{
			key: "drawVerticalBoxPaths",
			value: function(io) {
				var Pc = io.indexes, Fc = io.x;
				io.y;
				var Ic = io.xDivision, Lc = io.barWidth, Rc = io.zeroH, zc = io.strokeWidth, Bc = this.w, Vc = new Mi(this.ctx), Hc = Pc.i, Uc = Pc.j, Wc = Bc.config.plotOptions.candlestick.colors, Gc = this.boxOptions.colors, Kc = Pc.realIndex, qc = function(io) {
					return Array.isArray(io) ? io[Kc] : io;
				}, Jc = qc(Wc.upward), Yc = qc(Wc.downward), Xc = this.yRatio[Pc.translationsIndex], Zc = this.getOHLCValue(Kc, Uc), Qc = Rc, $c = Rc, el = Zc.o < Zc.c ? [Jc] : [Yc];
				this.isBoxPlot && (el = [qc(Gc.lower), qc(Gc.upper)]);
				var tl = Math.min(Zc.o, Zc.c), nl = Math.max(Zc.o, Zc.c), rl = Zc.m;
				Bc.globals.isXNumeric && (Fc = (Bc.globals.seriesX[Kc][Uc] - Bc.globals.minX) / this.xRatio - Lc / 2);
				var il = Fc + Lc * this.visibleI;
				this.series[Hc][Uc] === void 0 || this.series[Hc][Uc] === null ? (tl = Rc, nl = Rc) : (tl = Rc - tl / Xc, nl = Rc - nl / Xc, Qc = Rc - Zc.h / Xc, $c = Rc - Zc.l / Xc, rl = Rc - Zc.m / Xc);
				var al = Vc.move(il, Rc), ol = Vc.move(il + Lc / 2, tl);
				if (Bc.globals.previousPaths.length > 0 && (ol = this.getPreviousPath(Kc, Uc, !0)), this.isOHLC) {
					var sl = il + Lc / 2, cl = Rc - Zc.o / Xc, ll = Rc - Zc.c / Xc;
					al = [Vc.move(sl, Qc) + Vc.line(sl, $c) + Vc.move(sl, cl) + Vc.line(il, cl) + Vc.move(sl, ll) + Vc.line(il + Lc, ll)];
				} else al = this.isBoxPlot ? [Vc.move(il, tl) + Vc.line(il + Lc / 2, tl) + Vc.line(il + Lc / 2, Qc) + Vc.line(il + Lc / 4, Qc) + Vc.line(il + Lc - Lc / 4, Qc) + Vc.line(il + Lc / 2, Qc) + Vc.line(il + Lc / 2, tl) + Vc.line(il + Lc, tl) + Vc.line(il + Lc, rl) + Vc.line(il, rl) + Vc.line(il, tl + zc / 2), Vc.move(il, rl) + Vc.line(il + Lc, rl) + Vc.line(il + Lc, nl) + Vc.line(il + Lc / 2, nl) + Vc.line(il + Lc / 2, $c) + Vc.line(il + Lc - Lc / 4, $c) + Vc.line(il + Lc / 4, $c) + Vc.line(il + Lc / 2, $c) + Vc.line(il + Lc / 2, nl) + Vc.line(il, nl) + Vc.line(il, rl) + "z"] : [Vc.move(il, nl) + Vc.line(il + Lc / 2, nl) + Vc.line(il + Lc / 2, Qc) + Vc.line(il + Lc / 2, nl) + Vc.line(il + Lc, nl) + Vc.line(il + Lc, tl) + Vc.line(il + Lc / 2, tl) + Vc.line(il + Lc / 2, $c) + Vc.line(il + Lc / 2, tl) + Vc.line(il, tl) + Vc.line(il, nl - zc / 2)];
				return ol += Vc.move(il, tl), Bc.globals.isXNumeric || (Fc += Ic), {
					pathTo: al,
					pathFrom: ol,
					x: Fc,
					y: nl,
					goalY: this.barHelpers.getGoalValues("y", null, Rc, Hc, Uc, Pc.translationsIndex),
					barXPosition: il,
					color: el
				};
			}
		},
		{
			key: "drawHorizontalBoxPaths",
			value: function(io) {
				var Pc = io.indexes;
				io.x;
				var Fc = io.y, Ic = io.yDivision, Lc = io.barHeight, Rc = io.zeroW, zc = io.strokeWidth, Bc = this.w, Vc = new Mi(this.ctx), Hc = Pc.i, Uc = Pc.j, Wc = this.boxOptions.colors.lower;
				this.isBoxPlot && (Wc = [this.boxOptions.colors.lower, this.boxOptions.colors.upper]);
				var Gc = this.invertedYRatio, Kc = Pc.realIndex, qc = this.getOHLCValue(Kc, Uc), Jc = Rc, Yc = Rc, Xc = Math.min(qc.o, qc.c), Zc = Math.max(qc.o, qc.c), Qc = qc.m;
				Bc.globals.isXNumeric && (Fc = (Bc.globals.seriesX[Kc][Uc] - Bc.globals.minX) / this.invertedXRatio - Lc / 2);
				var $c = Fc + Lc * this.visibleI;
				this.series[Hc][Uc] === void 0 || this.series[Hc][Uc] === null ? (Xc = Rc, Zc = Rc) : (Xc = Rc + Xc / Gc, Zc = Rc + Zc / Gc, Jc = Rc + qc.h / Gc, Yc = Rc + qc.l / Gc, Qc = Rc + qc.m / Gc);
				var el = Vc.move(Rc, $c), tl = Vc.move(Xc, $c + Lc / 2);
				return Bc.globals.previousPaths.length > 0 && (tl = this.getPreviousPath(Kc, Uc, !0)), el = [Vc.move(Xc, $c) + Vc.line(Xc, $c + Lc / 2) + Vc.line(Jc, $c + Lc / 2) + Vc.line(Jc, $c + Lc / 2 - Lc / 4) + Vc.line(Jc, $c + Lc / 2 + Lc / 4) + Vc.line(Jc, $c + Lc / 2) + Vc.line(Xc, $c + Lc / 2) + Vc.line(Xc, $c + Lc) + Vc.line(Qc, $c + Lc) + Vc.line(Qc, $c) + Vc.line(Xc + zc / 2, $c), Vc.move(Qc, $c) + Vc.line(Qc, $c + Lc) + Vc.line(Zc, $c + Lc) + Vc.line(Zc, $c + Lc / 2) + Vc.line(Yc, $c + Lc / 2) + Vc.line(Yc, $c + Lc - Lc / 4) + Vc.line(Yc, $c + Lc / 4) + Vc.line(Yc, $c + Lc / 2) + Vc.line(Zc, $c + Lc / 2) + Vc.line(Zc, $c) + Vc.line(Qc, $c) + "z"], tl += Vc.move(Xc, $c), Bc.globals.isXNumeric || (Fc += Ic), {
					pathTo: el,
					pathFrom: tl,
					x: Zc,
					y: Fc,
					goalX: this.barHelpers.getGoalValues("x", Rc, null, Hc, Uc),
					barYPosition: $c,
					color: Wc
				};
			}
		},
		{
			key: "getOHLCValue",
			value: function(io, Pc) {
				var Fc = this.w, Ic = new Pi(this.ctx, Fc), Lc = Ic.getLogValAtSeriesIndex(Fc.globals.seriesCandleH[io][Pc], io), Rc = Ic.getLogValAtSeriesIndex(Fc.globals.seriesCandleO[io][Pc], io), zc = Ic.getLogValAtSeriesIndex(Fc.globals.seriesCandleM[io][Pc], io), Bc = Ic.getLogValAtSeriesIndex(Fc.globals.seriesCandleC[io][Pc], io), Vc = Ic.getLogValAtSeriesIndex(Fc.globals.seriesCandleL[io][Pc], io);
				return {
					o: this.isBoxPlot ? Lc : Rc,
					h: this.isBoxPlot ? Rc : Lc,
					m: zc,
					l: this.isBoxPlot ? Bc : Vc,
					c: this.isBoxPlot ? Vc : Bc
				};
			}
		}
	]), Fc;
}(), za = function() {
	function io(Pc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w;
	}
	return s(io, [
		{
			key: "checkColorRange",
			value: function() {
				var io = this.w, Pc = !1, Fc = io.config.plotOptions[io.config.chart.type];
				return Fc.colorScale.ranges.length > 0 && Fc.colorScale.ranges.map((function(io, Fc) {
					io.from <= 0 && (Pc = !0);
				})), Pc;
			}
		},
		{
			key: "getShadeColor",
			value: function(io, Pc, Fc, Ic) {
				var Lc = this.w, Rc = 1, zc = Lc.config.plotOptions[io].shadeIntensity, Bc = this.determineColor(io, Pc, Fc);
				Lc.globals.hasNegs || Ic ? Rc = Lc.config.plotOptions[io].reverseNegativeShade ? Bc.percent < 0 ? Bc.percent / 100 * (1.25 * zc) : (1 - Bc.percent / 100) * (1.25 * zc) : Bc.percent <= 0 ? 1 - (1 + Bc.percent / 100) * zc : (1 - Bc.percent / 100) * zc : (Rc = 1 - Bc.percent / 100, io === "treemap" && (Rc = (1 - Bc.percent / 100) * (1.25 * zc)));
				var Vc = Bc.color, Hc = new v();
				if (Lc.config.plotOptions[io].enableShades) if (this.w.config.theme.mode === "dark") {
					var Uc = Hc.shadeColor(-1 * Rc, Bc.color);
					Vc = v.hexToRgba(v.isColorHex(Uc) ? Uc : v.rgb2hex(Uc), Lc.config.fill.opacity);
				} else {
					var Wc = Hc.shadeColor(Rc, Bc.color);
					Vc = v.hexToRgba(v.isColorHex(Wc) ? Wc : v.rgb2hex(Wc), Lc.config.fill.opacity);
				}
				return {
					color: Vc,
					colorProps: Bc
				};
			}
		},
		{
			key: "determineColor",
			value: function(io, Pc, Fc) {
				var Ic = this.w, Lc = Ic.globals.series[Pc][Fc], Rc = Ic.config.plotOptions[io], zc = Rc.colorScale.inverse ? Fc : Pc;
				Rc.distributed && Ic.config.chart.type === "treemap" && (zc = Fc);
				var Bc = Ic.globals.colors[zc], Vc = null, Hc = Math.min.apply(Math, f(Ic.globals.series[Pc])), Uc = Math.max.apply(Math, f(Ic.globals.series[Pc]));
				Rc.distributed || io !== "heatmap" || (Hc = Ic.globals.minY, Uc = Ic.globals.maxY), Rc.colorScale.min !== void 0 && (Hc = Rc.colorScale.min < Ic.globals.minY ? Rc.colorScale.min : Ic.globals.minY, Uc = Rc.colorScale.max > Ic.globals.maxY ? Rc.colorScale.max : Ic.globals.maxY);
				var Wc = Math.abs(Uc) + Math.abs(Hc), Gc = 100 * Lc / (Wc === 0 ? Wc - 1e-6 : Wc);
				return Rc.colorScale.ranges.length > 0 && Rc.colorScale.ranges.map((function(io, Pc) {
					if (Lc >= io.from && Lc <= io.to) {
						Bc = io.color, Vc = io.foreColor ? io.foreColor : null, Hc = io.from, Uc = io.to;
						var Fc = Math.abs(Uc) + Math.abs(Hc);
						Gc = 100 * Lc / (Fc === 0 ? Fc - 1e-6 : Fc);
					}
				})), {
					color: Bc,
					foreColor: Vc,
					percent: Gc
				};
			}
		},
		{
			key: "calculateDataLabels",
			value: function(io) {
				var Pc = io.text, Fc = io.x, Ic = io.y, Lc = io.i, Rc = io.j, zc = io.colorProps, Bc = io.fontSize, Vc = this.w.config.dataLabels, Hc = new Mi(this.ctx), Uc = new qi(this.ctx), Wc = null;
				if (Vc.enabled) {
					Wc = Hc.group({ class: "apexcharts-data-labels" });
					var Gc = Vc.offsetX, Kc = Vc.offsetY, qc = Fc + Gc, Jc = Ic + parseFloat(Vc.style.fontSize) / 3 + Kc;
					Uc.plotDataLabelsText({
						x: qc,
						y: Jc,
						text: Pc,
						i: Lc,
						j: Rc,
						color: zc.foreColor,
						parent: Wc,
						fontSize: Bc,
						dataLabelsConfig: Vc
					});
				}
				return Wc;
			}
		},
		{
			key: "addListeners",
			value: function(io) {
				var Pc = new Mi(this.ctx);
				io.node.addEventListener("mouseenter", Pc.pathMouseEnter.bind(this, io)), io.node.addEventListener("mouseleave", Pc.pathMouseLeave.bind(this, io)), io.node.addEventListener("mousedown", Pc.pathMouseDown.bind(this, io));
			}
		}
	]), io;
}(), Xa = function() {
	function io(Pc, Fc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w, this.xRatio = Fc.xRatio, this.yRatio = Fc.yRatio, this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.helpers = new za(Pc), this.rectRadius = this.w.config.plotOptions.heatmap.radius, this.strokeWidth = this.w.config.stroke.show ? this.w.config.stroke.width : 0;
	}
	return s(io, [
		{
			key: "draw",
			value: function(io) {
				var Pc = this.w, Fc = new Mi(this.ctx), Ic = Fc.group({ class: "apexcharts-heatmap" });
				Ic.attr("clip-path", `url(#gridRectMask${Pc.globals.cuid})`);
				var Lc = Pc.globals.gridWidth / Pc.globals.dataPoints, Rc = Pc.globals.gridHeight / Pc.globals.series.length, zc = 0, Bc = !1;
				this.negRange = this.helpers.checkColorRange();
				var Vc = io.slice();
				Pc.config.yaxis[0].reversed && (Bc = !0, Vc.reverse());
				for (var Hc = Bc ? 0 : Vc.length - 1; Bc ? Hc < Vc.length : Hc >= 0; Bc ? Hc++ : Hc--) {
					var Uc = Fc.group({
						class: "apexcharts-series apexcharts-heatmap-series",
						seriesName: v.escapeString(Pc.globals.seriesNames[Hc]),
						rel: Hc + 1,
						"data:realIndex": Hc
					});
					if (this.ctx.series.addCollapsedClassToSeries(Uc, Hc), Pc.config.chart.dropShadow.enabled) {
						var Wc = Pc.config.chart.dropShadow;
						new Li(this.ctx).dropShadow(Uc, Wc, Hc);
					}
					for (var Gc = 0, Kc = Pc.config.plotOptions.heatmap.shadeIntensity, qc = 0, Jc = 0; Jc < Pc.globals.dataPoints; Jc++) if (Pc.globals.seriesX.length && !Pc.globals.allSeriesHasEqualX && Pc.globals.minX + Pc.globals.minXDiff * Jc < Pc.globals.seriesX[Hc][qc]) Gc += Lc;
					else {
						if (qc >= Vc[Hc].length) break;
						var Yc = this.helpers.getShadeColor(Pc.config.chart.type, Hc, qc, this.negRange), Xc = Yc.color, Zc = Yc.colorProps;
						Pc.config.fill.type === "image" && (Xc = new ji(this.ctx).fillPath({
							seriesNumber: Hc,
							dataPointIndex: qc,
							opacity: Pc.globals.hasNegs ? Zc.percent < 0 ? 1 - (1 + Zc.percent / 100) : Kc + Zc.percent / 100 : Zc.percent / 100,
							patternID: v.randomId(),
							width: Pc.config.fill.image.width ? Pc.config.fill.image.width : Lc,
							height: Pc.config.fill.image.height ? Pc.config.fill.image.height : Rc
						}));
						var Qc = this.rectRadius, el = Fc.drawRect(Gc, zc, Lc, Rc, Qc);
						if (el.attr({
							cx: Gc,
							cy: zc
						}), el.node.classList.add("apexcharts-heatmap-rect"), Uc.add(el), el.attr({
							fill: Xc,
							i: Hc,
							index: Hc,
							j: qc,
							val: io[Hc][qc],
							"stroke-width": this.strokeWidth,
							stroke: Pc.config.plotOptions.heatmap.useFillColorAsStroke ? Xc : Pc.globals.stroke.colors[0],
							color: Xc
						}), this.helpers.addListeners(el), Pc.config.chart.animations.enabled && !Pc.globals.dataChanged) {
							var tl = 1;
							Pc.globals.resized || (tl = Pc.config.chart.animations.speed), this.animateHeatMap(el, Gc, zc, Lc, Rc, tl);
						}
						if (Pc.globals.dataChanged) {
							var nl = 1;
							if (this.dynamicAnim.enabled && Pc.globals.shouldAnimate) {
								nl = this.dynamicAnim.speed;
								var rl = Pc.globals.previousPaths[Hc] && Pc.globals.previousPaths[Hc][qc] && Pc.globals.previousPaths[Hc][qc].color;
								rl || (rl = "rgba(255, 255, 255, 0)"), this.animateHeatColor(el, v.isColorHex(rl) ? rl : v.rgb2hex(rl), v.isColorHex(Xc) ? Xc : v.rgb2hex(Xc), nl);
							}
						}
						var il = (0, Pc.config.dataLabels.formatter)(Pc.globals.series[Hc][qc], {
							value: Pc.globals.series[Hc][qc],
							seriesIndex: Hc,
							dataPointIndex: qc,
							w: Pc
						}), al = this.helpers.calculateDataLabels({
							text: il,
							x: Gc + Lc / 2,
							y: zc + Rc / 2,
							i: Hc,
							j: qc,
							colorProps: Zc,
							series: Vc
						});
						al !== null && Uc.add(al), Gc += Lc, qc++;
					}
					zc += Rc, Ic.add(Uc);
				}
				var ol = Pc.globals.yAxisScale[0].result.slice();
				return Pc.config.yaxis[0].reversed ? ol.unshift("") : ol.push(""), Pc.globals.yAxisScale[0].result = ol, Ic;
			}
		},
		{
			key: "animateHeatMap",
			value: function(io, Pc, Fc, Ic, Lc, Rc) {
				var zc = new y(this.ctx);
				zc.animateRect(io, {
					x: Pc + Ic / 2,
					y: Fc + Lc / 2,
					width: 0,
					height: 0
				}, {
					x: Pc,
					y: Fc,
					width: Ic,
					height: Lc
				}, Rc, (function() {
					zc.animationCompleted(io);
				}));
			}
		},
		{
			key: "animateHeatColor",
			value: function(io, Pc, Fc, Ic) {
				io.attr({ fill: Pc }).animate(Ic).attr({ fill: Fc });
			}
		}
	]), io;
}(), Ra = function() {
	function io(Pc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w;
	}
	return s(io, [{
		key: "drawYAxisTexts",
		value: function(io, Pc, Fc, Ic) {
			var Lc = this.w, Rc = Lc.config.yaxis[0], zc = Lc.globals.yLabelFormatters[0];
			return new Mi(this.ctx).drawText({
				x: io + Rc.labels.offsetX,
				y: Pc + Rc.labels.offsetY,
				text: zc(Ic, Fc),
				textAnchor: "middle",
				fontSize: Rc.labels.style.fontSize,
				fontFamily: Rc.labels.style.fontFamily,
				foreColor: Array.isArray(Rc.labels.style.colors) ? Rc.labels.style.colors[Fc] : Rc.labels.style.colors
			});
		}
	}]), io;
}(), Ea = function() {
	function io(Pc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w;
		var Fc = this.w;
		this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animBeginArr = [0], this.animDur = 0, this.donutDataLabels = this.w.config.plotOptions.pie.donut.labels, this.lineColorArr = Fc.globals.stroke.colors === void 0 ? Fc.globals.colors : Fc.globals.stroke.colors, this.defaultSize = Math.min(Fc.globals.gridWidth, Fc.globals.gridHeight), this.centerY = this.defaultSize / 2, this.centerX = Fc.globals.gridWidth / 2, Fc.config.chart.type === "radialBar" ? this.fullAngle = 360 : this.fullAngle = Math.abs(Fc.config.plotOptions.pie.endAngle - Fc.config.plotOptions.pie.startAngle), this.initialAngle = Fc.config.plotOptions.pie.startAngle % this.fullAngle, Fc.globals.radialSize = this.defaultSize / 2.05 - Fc.config.stroke.width - (Fc.config.chart.sparkline.enabled ? 0 : Fc.config.chart.dropShadow.blur), this.donutSize = Fc.globals.radialSize * parseInt(Fc.config.plotOptions.pie.donut.size, 10) / 100;
		var Lc = Fc.config.plotOptions.pie.customScale, Rc = Fc.globals.gridWidth / 2, zc = Fc.globals.gridHeight / 2;
		this.translateX = Rc - Rc * Lc, this.translateY = zc - zc * Lc, this.dataLabelsGroup = new Mi(this.ctx).group({
			class: "apexcharts-datalabels-group",
			transform: `translate(${this.translateX}, ${this.translateY}) scale(${Lc})`
		}), this.maxY = 0, this.sliceLabels = [], this.sliceSizes = [], this.prevSectorAngleArr = [];
	}
	return s(io, [
		{
			key: "draw",
			value: function(io) {
				var Pc = this, Fc = this.w, Ic = new Mi(this.ctx), Lc = Ic.group({ class: "apexcharts-pie" });
				if (Fc.globals.noData) return Lc;
				for (var Rc = 0, zc = 0; zc < io.length; zc++) Rc += v.negToZero(io[zc]);
				var Bc = [], Vc = Ic.group();
				Rc === 0 && (Rc = 1e-5), io.forEach((function(io) {
					Pc.maxY = Math.max(Pc.maxY, io);
				})), Fc.config.yaxis[0].max && (this.maxY = Fc.config.yaxis[0].max), Fc.config.grid.position === "back" && this.chartType === "polarArea" && this.drawPolarElements(Lc);
				for (var Hc = 0; Hc < io.length; Hc++) {
					var Uc = this.fullAngle * v.negToZero(io[Hc]) / Rc;
					Bc.push(Uc), this.chartType === "polarArea" ? (Bc[Hc] = this.fullAngle / io.length, this.sliceSizes.push(Fc.globals.radialSize * io[Hc] / this.maxY)) : this.sliceSizes.push(Fc.globals.radialSize);
				}
				if (Fc.globals.dataChanged) {
					for (var Wc, Gc = 0, Kc = 0; Kc < Fc.globals.previousPaths.length; Kc++) Gc += v.negToZero(Fc.globals.previousPaths[Kc]);
					for (var qc = 0; qc < Fc.globals.previousPaths.length; qc++) Wc = this.fullAngle * v.negToZero(Fc.globals.previousPaths[qc]) / Gc, this.prevSectorAngleArr.push(Wc);
				}
				if (this.donutSize < 0 && (this.donutSize = 0), this.chartType === "donut") {
					var Jc = Ic.drawCircle(this.donutSize);
					Jc.attr({
						cx: this.centerX,
						cy: this.centerY,
						fill: Fc.config.plotOptions.pie.donut.background ? Fc.config.plotOptions.pie.donut.background : "transparent"
					}), Vc.add(Jc);
				}
				var Yc = this.drawArcs(Bc, io);
				if (this.sliceLabels.forEach((function(io) {
					Yc.add(io);
				})), Vc.attr({ transform: `translate(${this.translateX}, ${this.translateY}) scale(${Fc.config.plotOptions.pie.customScale})` }), Vc.add(Yc), Lc.add(Vc), this.donutDataLabels.show) {
					var Xc = this.renderInnerDataLabels(this.dataLabelsGroup, this.donutDataLabels, {
						hollowSize: this.donutSize,
						centerX: this.centerX,
						centerY: this.centerY,
						opacity: this.donutDataLabels.show
					});
					Lc.add(Xc);
				}
				return Fc.config.grid.position === "front" && this.chartType === "polarArea" && this.drawPolarElements(Lc), Lc;
			}
		},
		{
			key: "drawArcs",
			value: function(io, Pc) {
				var Fc = this.w, Ic = new Li(this.ctx), Lc = new Mi(this.ctx), Rc = new ji(this.ctx), zc = Lc.group({ class: "apexcharts-slices" }), Bc = this.initialAngle, Vc = this.initialAngle, Hc = this.initialAngle, Uc = this.initialAngle;
				this.strokeWidth = Fc.config.stroke.show ? Fc.config.stroke.width : 0;
				for (var Wc = 0; Wc < io.length; Wc++) {
					var Gc = Lc.group({
						class: "apexcharts-series apexcharts-pie-series",
						seriesName: v.escapeString(Fc.globals.seriesNames[Wc]),
						rel: Wc + 1,
						"data:realIndex": Wc
					});
					zc.add(Gc), Vc = Uc, Hc = (Bc = Hc) + io[Wc], Uc = Vc + this.prevSectorAngleArr[Wc];
					var Kc = Hc < Bc ? this.fullAngle + Hc - Bc : Hc - Bc, qc = Rc.fillPath({
						seriesNumber: Wc,
						size: this.sliceSizes[Wc],
						value: Pc[Wc]
					}), Jc = this.getChangedPath(Vc, Uc), Yc = Lc.drawPath({
						d: Jc,
						stroke: Array.isArray(this.lineColorArr) ? this.lineColorArr[Wc] : this.lineColorArr,
						strokeWidth: 0,
						fill: qc,
						fillOpacity: Fc.config.fill.opacity,
						classes: `apexcharts-pie-area apexcharts-${this.chartType.toLowerCase()}-slice-${Wc}`
					});
					if (Yc.attr({
						index: 0,
						j: Wc
					}), Ic.setSelectionFilter(Yc, 0, Wc), Fc.config.chart.dropShadow.enabled) {
						var Xc = Fc.config.chart.dropShadow;
						Ic.dropShadow(Yc, Xc, Wc);
					}
					this.addListeners(Yc, this.donutDataLabels), Mi.setAttrs(Yc.node, {
						"data:angle": Kc,
						"data:startAngle": Bc,
						"data:strokeWidth": this.strokeWidth,
						"data:value": Pc[Wc]
					});
					var Zc = {
						x: 0,
						y: 0
					};
					this.chartType === "pie" || this.chartType === "polarArea" ? Zc = v.polarToCartesian(this.centerX, this.centerY, Fc.globals.radialSize / 1.25 + Fc.config.plotOptions.pie.dataLabels.offset, (Bc + Kc / 2) % this.fullAngle) : this.chartType === "donut" && (Zc = v.polarToCartesian(this.centerX, this.centerY, (Fc.globals.radialSize + this.donutSize) / 2 + Fc.config.plotOptions.pie.dataLabels.offset, (Bc + Kc / 2) % this.fullAngle)), Gc.add(Yc);
					var Qc = 0;
					if (!this.initialAnim || Fc.globals.resized || Fc.globals.dataChanged ? this.animBeginArr.push(0) : ((Qc = Kc / this.fullAngle * Fc.config.chart.animations.speed) === 0 && (Qc = 1), this.animDur = Qc + this.animDur, this.animBeginArr.push(this.animDur)), this.dynamicAnim && Fc.globals.dataChanged ? this.animatePaths(Yc, {
						size: this.sliceSizes[Wc],
						endAngle: Hc,
						startAngle: Bc,
						prevStartAngle: Vc,
						prevEndAngle: Uc,
						animateStartingPos: !0,
						i: Wc,
						animBeginArr: this.animBeginArr,
						shouldSetPrevPaths: !0,
						dur: Fc.config.chart.animations.dynamicAnimation.speed
					}) : this.animatePaths(Yc, {
						size: this.sliceSizes[Wc],
						endAngle: Hc,
						startAngle: Bc,
						i: Wc,
						totalItems: io.length - 1,
						animBeginArr: this.animBeginArr,
						dur: Qc
					}), Fc.config.plotOptions.pie.expandOnClick && this.chartType !== "polarArea" && Yc.node.addEventListener("mouseup", this.pieClicked.bind(this, Wc)), Fc.globals.selectedDataPoints[0] !== void 0 && Fc.globals.selectedDataPoints[0].indexOf(Wc) > -1 && this.pieClicked(Wc), Fc.config.dataLabels.enabled) {
						var el = Zc.x, tl = Zc.y, nl = 100 * Kc / this.fullAngle + "%";
						if (Kc !== 0 && Fc.config.plotOptions.pie.dataLabels.minAngleToShowLabel < io[Wc]) {
							var rl = Fc.config.dataLabels.formatter;
							rl !== void 0 && (nl = rl(Fc.globals.seriesPercent[Wc][0], {
								seriesIndex: Wc,
								w: Fc
							}));
							var il = Fc.globals.dataLabels.style.colors[Wc], al = Lc.group({ class: "apexcharts-datalabels" }), ol = Lc.drawText({
								x: el,
								y: tl,
								text: nl,
								textAnchor: "middle",
								fontSize: Fc.config.dataLabels.style.fontSize,
								fontFamily: Fc.config.dataLabels.style.fontFamily,
								fontWeight: Fc.config.dataLabels.style.fontWeight,
								foreColor: il
							});
							if (al.add(ol), Fc.config.dataLabels.dropShadow.enabled) {
								var sl = Fc.config.dataLabels.dropShadow;
								Ic.dropShadow(ol, sl);
							}
							ol.node.classList.add("apexcharts-pie-label"), Fc.config.chart.animations.animate && !1 === Fc.globals.resized && (ol.node.classList.add("apexcharts-pie-label-delay"), ol.node.style.animationDelay = Fc.config.chart.animations.speed / 940 + "s"), this.sliceLabels.push(al);
						}
					}
				}
				return zc;
			}
		},
		{
			key: "addListeners",
			value: function(io, Pc) {
				var Fc = new Mi(this.ctx);
				io.node.addEventListener("mouseenter", Fc.pathMouseEnter.bind(this, io)), io.node.addEventListener("mouseleave", Fc.pathMouseLeave.bind(this, io)), io.node.addEventListener("mouseleave", this.revertDataLabelsInner.bind(this, io.node, Pc)), io.node.addEventListener("mousedown", Fc.pathMouseDown.bind(this, io)), this.donutDataLabels.total.showAlways || (io.node.addEventListener("mouseenter", this.printDataLabelsInner.bind(this, io.node, Pc)), io.node.addEventListener("mousedown", this.printDataLabelsInner.bind(this, io.node, Pc)));
			}
		},
		{
			key: "animatePaths",
			value: function(io, Pc) {
				var Fc = this.w, Ic = Pc.endAngle < Pc.startAngle ? this.fullAngle + Pc.endAngle - Pc.startAngle : Pc.endAngle - Pc.startAngle, Lc = Ic, Rc = Pc.startAngle, zc = Pc.startAngle;
				Pc.prevStartAngle !== void 0 && Pc.prevEndAngle !== void 0 && (Rc = Pc.prevEndAngle, Lc = Pc.prevEndAngle < Pc.prevStartAngle ? this.fullAngle + Pc.prevEndAngle - Pc.prevStartAngle : Pc.prevEndAngle - Pc.prevStartAngle), Pc.i === Fc.config.series.length - 1 && (Ic + zc > this.fullAngle ? Pc.endAngle -= Ic + zc : Ic + zc < this.fullAngle && (Pc.endAngle += this.fullAngle - (Ic + zc))), Ic === this.fullAngle && (Ic = this.fullAngle - .01), this.animateArc(io, Rc, zc, Ic, Lc, Pc);
			}
		},
		{
			key: "animateArc",
			value: function(io, Pc, Fc, Ic, Lc, Rc) {
				var zc, Bc = this, Vc = this.w, Hc = new y(this.ctx), Uc = Rc.size;
				(isNaN(Pc) || isNaN(Lc)) && (Pc = Fc, Lc = Ic, Rc.dur = 0);
				var Wc = Ic, Gc = Fc, Kc = Pc < Fc ? this.fullAngle + Pc - Fc : Pc - Fc;
				Vc.globals.dataChanged && Rc.shouldSetPrevPaths && Rc.prevEndAngle && (zc = Bc.getPiePath({
					me: Bc,
					startAngle: Rc.prevStartAngle,
					angle: Rc.prevEndAngle < Rc.prevStartAngle ? this.fullAngle + Rc.prevEndAngle - Rc.prevStartAngle : Rc.prevEndAngle - Rc.prevStartAngle,
					size: Uc
				}), io.attr({ d: zc })), Rc.dur === 0 ? (zc = Bc.getPiePath({
					me: Bc,
					startAngle: Gc,
					angle: Ic,
					size: Uc
				}), Rc.isTrack || (Vc.globals.animationEnded = !0), io.node.setAttribute("data:pathOrig", zc), io.attr({
					d: zc,
					"stroke-width": Bc.strokeWidth
				})) : io.animate(Rc.dur, Rc.animBeginArr[Rc.i]).after((function() {
					Bc.chartType !== "pie" && Bc.chartType !== "donut" && Bc.chartType !== "polarArea" || this.animate(Vc.config.chart.animations.dynamicAnimation.speed).attr({ "stroke-width": Bc.strokeWidth }), Rc.i === Vc.config.series.length - 1 && Hc.animationCompleted(io);
				})).during((function(Vc) {
					Wc = Kc + (Ic - Kc) * Vc, Rc.animateStartingPos && (Wc = Lc + (Ic - Lc) * Vc, Gc = Pc - Lc + (Fc - (Pc - Lc)) * Vc), zc = Bc.getPiePath({
						me: Bc,
						startAngle: Gc,
						angle: Wc,
						size: Uc
					}), io.node.setAttribute("data:pathOrig", zc), io.attr({ d: zc });
				}));
			}
		},
		{
			key: "pieClicked",
			value: function(io) {
				var Pc, Fc = this.w, Ic = this, Lc = Ic.sliceSizes[io] + (Fc.config.plotOptions.pie.expandOnClick ? 4 : 0), Rc = Fc.globals.dom.Paper.findOne(`.apexcharts-${Ic.chartType.toLowerCase()}-slice-${io}`);
				if (Rc.attr("data:pieClicked") !== "true") {
					var zc = Fc.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area");
					Array.prototype.forEach.call(zc, (function(io) {
						io.setAttribute("data:pieClicked", "false");
						var Pc = io.getAttribute("data:pathOrig");
						Pc && io.setAttribute("d", Pc);
					})), Fc.globals.capturedDataPointIndex = io, Rc.attr("data:pieClicked", "true");
					var Bc = parseInt(Rc.attr("data:startAngle"), 10), Vc = parseInt(Rc.attr("data:angle"), 10);
					Pc = Ic.getPiePath({
						me: Ic,
						startAngle: Bc,
						angle: Vc,
						size: Lc
					}), Vc !== 360 && Rc.plot(Pc);
				} else {
					Rc.attr({ "data:pieClicked": "false" }), this.revertDataLabelsInner(Rc.node, this.donutDataLabels);
					var Hc = Rc.attr("data:pathOrig");
					Rc.attr({ d: Hc });
				}
			}
		},
		{
			key: "getChangedPath",
			value: function(io, Pc) {
				var Fc = "";
				return this.dynamicAnim && this.w.globals.dataChanged && (Fc = this.getPiePath({
					me: this,
					startAngle: io,
					angle: Pc - io,
					size: this.size
				})), Fc;
			}
		},
		{
			key: "getPiePath",
			value: function(io) {
				var Pc, Fc = io.me, Ic = io.startAngle, Lc = io.angle, Rc = io.size, zc = new Mi(this.ctx), Bc = Ic, Vc = Math.PI * (Bc - 90) / 180, Hc = Lc + Ic;
				Math.ceil(Hc) >= this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle && (Hc = this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle - .01), Math.ceil(Hc) > this.fullAngle && (Hc -= this.fullAngle);
				var Uc = Math.PI * (Hc - 90) / 180, Wc = Fc.centerX + Rc * Math.cos(Vc), Gc = Fc.centerY + Rc * Math.sin(Vc), Kc = Fc.centerX + Rc * Math.cos(Uc), qc = Fc.centerY + Rc * Math.sin(Uc), Jc = v.polarToCartesian(Fc.centerX, Fc.centerY, Fc.donutSize, Hc), Yc = v.polarToCartesian(Fc.centerX, Fc.centerY, Fc.donutSize, Bc), Xc = Lc > 180 ? 1 : 0, Zc = [
					"M",
					Wc,
					Gc,
					"A",
					Rc,
					Rc,
					0,
					Xc,
					1,
					Kc,
					qc
				];
				return Pc = Fc.chartType === "donut" ? [].concat(Zc, [
					"L",
					Jc.x,
					Jc.y,
					"A",
					Fc.donutSize,
					Fc.donutSize,
					0,
					Xc,
					0,
					Yc.x,
					Yc.y,
					"L",
					Wc,
					Gc,
					"z"
				]).join(" ") : Fc.chartType === "pie" || Fc.chartType === "polarArea" ? [].concat(Zc, [
					"L",
					Fc.centerX,
					Fc.centerY,
					"L",
					Wc,
					Gc
				]).join(" ") : [].concat(Zc).join(" "), zc.roundPathCorners(Pc, 2 * this.strokeWidth);
			}
		},
		{
			key: "drawPolarElements",
			value: function(io) {
				var Pc = this.w, Fc = new ta(this.ctx), Ic = new Mi(this.ctx), Lc = new Ra(this.ctx), Rc = Ic.group(), zc = Ic.group(), Bc = Fc.niceScale(0, Math.ceil(this.maxY), 0), Vc = Bc.result.reverse(), Hc = Bc.result.length;
				this.maxY = Bc.niceMax;
				for (var Uc = Pc.globals.radialSize, Wc = Uc / (Hc - 1), Gc = 0; Gc < Hc - 1; Gc++) {
					var Kc = Ic.drawCircle(Uc);
					if (Kc.attr({
						cx: this.centerX,
						cy: this.centerY,
						fill: "none",
						"stroke-width": Pc.config.plotOptions.polarArea.rings.strokeWidth,
						stroke: Pc.config.plotOptions.polarArea.rings.strokeColor
					}), Pc.config.yaxis[0].show) {
						var qc = Lc.drawYAxisTexts(this.centerX, this.centerY - Uc + parseInt(Pc.config.yaxis[0].labels.style.fontSize, 10) / 2, Gc, Vc[Gc]);
						zc.add(qc);
					}
					Rc.add(Kc), Uc -= Wc;
				}
				this.drawSpokes(io), io.add(Rc), io.add(zc);
			}
		},
		{
			key: "renderInnerDataLabels",
			value: function(io, Pc, Fc) {
				var Ic = this.w, Lc = new Mi(this.ctx), Rc = Pc.total.show;
				io.node.innerHTML = "", io.node.style.opacity = Fc.opacity;
				var zc, Bc, Vc = Fc.centerX, Hc = this.donutDataLabels.total.label ? Fc.centerY : Fc.centerY - Fc.centerY / 6;
				zc = Pc.name.color === void 0 ? Ic.globals.colors[0] : Pc.name.color;
				var Uc = Pc.name.fontSize, Wc = Pc.name.fontFamily, Gc = Pc.name.fontWeight;
				Bc = Pc.value.color === void 0 ? Ic.config.chart.foreColor : Pc.value.color;
				var Kc = Pc.value.formatter, qc = "", Jc = "";
				if (Rc ? (zc = Pc.total.color, Uc = Pc.total.fontSize, Wc = Pc.total.fontFamily, Gc = Pc.total.fontWeight, Jc = this.donutDataLabels.total.label ? Pc.total.label : "", qc = Pc.total.formatter(Ic)) : Ic.globals.series.length === 1 && (qc = Kc(Ic.globals.series[0], Ic), Jc = Ic.globals.seriesNames[0]), Jc && (Jc = Pc.name.formatter(Jc, Pc.total.show, Ic)), Pc.name.show) {
					var Yc = Lc.drawText({
						x: Vc,
						y: Hc + parseFloat(Pc.name.offsetY),
						text: Jc,
						textAnchor: "middle",
						foreColor: zc,
						fontSize: Uc,
						fontWeight: Gc,
						fontFamily: Wc
					});
					Yc.node.classList.add("apexcharts-datalabel-label"), io.add(Yc);
				}
				if (Pc.value.show) {
					var Xc = Pc.name.show ? parseFloat(Pc.value.offsetY) + 16 : Pc.value.offsetY, Zc = Lc.drawText({
						x: Vc,
						y: Hc + Xc,
						text: qc,
						textAnchor: "middle",
						foreColor: Bc,
						fontWeight: Pc.value.fontWeight,
						fontSize: Pc.value.fontSize,
						fontFamily: Pc.value.fontFamily
					});
					Zc.node.classList.add("apexcharts-datalabel-value"), io.add(Zc);
				}
				return io;
			}
		},
		{
			key: "printInnerLabels",
			value: function(io, Pc, Fc, Ic) {
				var Lc, Rc = this.w;
				Ic ? Lc = io.name.color === void 0 ? Rc.globals.colors[parseInt(Ic.parentNode.getAttribute("rel"), 10) - 1] : io.name.color : Rc.globals.series.length > 1 && io.total.show && (Lc = io.total.color);
				var zc = Rc.globals.dom.baseEl.querySelector(".apexcharts-datalabel-label"), Bc = Rc.globals.dom.baseEl.querySelector(".apexcharts-datalabel-value");
				Fc = (0, io.value.formatter)(Fc, Rc), Ic || typeof io.total.formatter != "function" || (Fc = io.total.formatter(Rc));
				var Vc = Pc === io.total.label;
				Pc = this.donutDataLabels.total.label ? io.name.formatter(Pc, Vc, Rc) : "", zc !== null && (zc.textContent = Pc), Bc !== null && (Bc.textContent = Fc), zc !== null && (zc.style.fill = Lc);
			}
		},
		{
			key: "printDataLabelsInner",
			value: function(io, Pc) {
				var Fc = this.w, Ic = io.getAttribute("data:value"), Lc = Fc.globals.seriesNames[parseInt(io.parentNode.getAttribute("rel"), 10) - 1];
				Fc.globals.series.length > 1 && this.printInnerLabels(Pc, Lc, Ic, io);
				var Rc = Fc.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");
				Rc !== null && (Rc.style.opacity = 1);
			}
		},
		{
			key: "drawSpokes",
			value: function(io) {
				var Pc = this, Fc = this.w, Ic = new Mi(this.ctx), Lc = Fc.config.plotOptions.polarArea.spokes;
				if (Lc.strokeWidth !== 0) {
					for (var Rc = [], zc = 360 / Fc.globals.series.length, Bc = 0; Bc < Fc.globals.series.length; Bc++) Rc.push(v.polarToCartesian(this.centerX, this.centerY, Fc.globals.radialSize, Fc.config.plotOptions.pie.startAngle + zc * Bc));
					Rc.forEach((function(Fc, Rc) {
						var zc = Ic.drawLine(Fc.x, Fc.y, Pc.centerX, Pc.centerY, Array.isArray(Lc.connectorColors) ? Lc.connectorColors[Rc] : Lc.connectorColors);
						io.add(zc);
					}));
				}
			}
		},
		{
			key: "revertDataLabelsInner",
			value: function() {
				var io = this.w;
				if (this.donutDataLabels.show) {
					var Pc = io.globals.dom.Paper.findOne(".apexcharts-datalabels-group"), Fc = this.renderInnerDataLabels(Pc, this.donutDataLabels, {
						hollowSize: this.donutSize,
						centerX: this.centerX,
						centerY: this.centerY,
						opacity: this.donutDataLabels.show
					});
					io.globals.dom.Paper.findOne(".apexcharts-radialbar, .apexcharts-pie").add(Fc);
				}
			}
		}
	]), io;
}(), Ya = function() {
	function io(Pc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w, this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animDur = 0;
		var Fc = this.w;
		this.graphics = new Mi(this.ctx), this.lineColorArr = Fc.globals.stroke.colors === void 0 ? Fc.globals.colors : Fc.globals.stroke.colors, this.defaultSize = Fc.globals.svgHeight < Fc.globals.svgWidth ? Fc.globals.gridHeight : Fc.globals.gridWidth, this.isLog = Fc.config.yaxis[0].logarithmic, this.logBase = Fc.config.yaxis[0].logBase, this.coreUtils = new Pi(this.ctx), this.maxValue = this.isLog ? this.coreUtils.getLogVal(this.logBase, Fc.globals.maxY, 0) : Fc.globals.maxY, this.minValue = this.isLog ? this.coreUtils.getLogVal(this.logBase, this.w.globals.minY, 0) : Fc.globals.minY, this.polygons = Fc.config.plotOptions.radar.polygons, this.strokeWidth = Fc.config.stroke.show ? Fc.config.stroke.width : 0, this.size = this.defaultSize / 2.1 - this.strokeWidth - Fc.config.chart.dropShadow.blur, Fc.config.xaxis.labels.show && (this.size -= Fc.globals.xAxisLabelsWidth / 1.75), Fc.config.plotOptions.radar.size !== void 0 && (this.size = Fc.config.plotOptions.radar.size), this.dataRadiusOfPercent = [], this.dataRadius = [], this.angleArr = [], this.yaxisLabelsTextsPos = [];
	}
	return s(io, [
		{
			key: "draw",
			value: function(io) {
				var Pc = this, Fc = this.w, Ic = new ji(this.ctx), Lc = [], Rc = new qi(this.ctx);
				io.length && (this.dataPointsLen = io[Fc.globals.maxValsInArrayIndex].length), this.disAngle = 2 * Math.PI / this.dataPointsLen;
				var zc = Fc.globals.gridWidth / 2, Bc = Fc.globals.gridHeight / 2, Vc = zc + Fc.config.plotOptions.radar.offsetX, Hc = Bc + Fc.config.plotOptions.radar.offsetY, Uc = this.graphics.group({
					class: "apexcharts-radar-series apexcharts-plot-series",
					transform: `translate(${Vc || 0}, ${Hc || 0})`
				}), Wc = [], Gc = null, qc = null;
				if (this.yaxisLabels = this.graphics.group({ class: "apexcharts-yaxis" }), io.forEach((function(io, zc) {
					var Bc = io.length === Fc.globals.dataPoints, Vc = Pc.graphics.group().attr({
						class: "apexcharts-series",
						"data:longestSeries": Bc,
						seriesName: v.escapeString(Fc.globals.seriesNames[zc]),
						rel: zc + 1,
						"data:realIndex": zc
					});
					Pc.dataRadiusOfPercent[zc] = [], Pc.dataRadius[zc] = [], Pc.angleArr[zc] = [], io.forEach((function(io, Fc) {
						var Ic = Math.abs(Pc.maxValue - Pc.minValue);
						io -= Pc.minValue, Pc.isLog && (io = Pc.coreUtils.getLogVal(Pc.logBase, io, 0)), Pc.dataRadiusOfPercent[zc][Fc] = io / Ic, Pc.dataRadius[zc][Fc] = Pc.dataRadiusOfPercent[zc][Fc] * Pc.size, Pc.angleArr[zc][Fc] = Fc * Pc.disAngle;
					})), Wc = Pc.getDataPointsPos(Pc.dataRadius[zc], Pc.angleArr[zc]);
					var Hc = Pc.createPaths(Wc, {
						x: 0,
						y: 0
					});
					Gc = Pc.graphics.group({ class: "apexcharts-series-markers-wrap apexcharts-element-hidden" }), qc = Pc.graphics.group({
						class: "apexcharts-datalabels",
						"data:realIndex": zc
					}), Fc.globals.delayedElements.push({
						el: Gc.node,
						index: zc
					});
					var Uc = {
						i: zc,
						realIndex: zc,
						animationDelay: zc,
						initialSpeed: Fc.config.chart.animations.speed,
						dataChangeSpeed: Fc.config.chart.animations.dynamicAnimation.speed,
						className: "apexcharts-radar",
						shouldClipToGrid: !1,
						bindEventsOnPaths: !1,
						stroke: Fc.globals.stroke.colors[zc],
						strokeLineCap: Fc.config.stroke.lineCap
					}, Jc = null;
					Fc.globals.previousPaths.length > 0 && (Jc = Pc.getPreviousPath(zc));
					for (var Yc = 0; Yc < Hc.linePathsTo.length; Yc++) {
						var Xc = Pc.graphics.renderPaths(u(u({}, Uc), {}, {
							pathFrom: Jc === null ? Hc.linePathsFrom[Yc] : Jc,
							pathTo: Hc.linePathsTo[Yc],
							strokeWidth: Array.isArray(Pc.strokeWidth) ? Pc.strokeWidth[zc] : Pc.strokeWidth,
							fill: "none",
							drawShadow: !1
						}));
						Vc.add(Xc);
						var Zc = Ic.fillPath({ seriesNumber: zc }), Qc = Pc.graphics.renderPaths(u(u({}, Uc), {}, {
							pathFrom: Jc === null ? Hc.areaPathsFrom[Yc] : Jc,
							pathTo: Hc.areaPathsTo[Yc],
							strokeWidth: 0,
							fill: Zc,
							drawShadow: !1
						}));
						if (Fc.config.chart.dropShadow.enabled) {
							var el = new Li(Pc.ctx), tl = Fc.config.chart.dropShadow;
							el.dropShadow(Qc, Object.assign({}, tl, { noUserSpaceOnUse: !0 }), zc);
						}
						Vc.add(Qc);
					}
					io.forEach((function(io, Ic) {
						var Lc = new Vi(Pc.ctx).getMarkerConfig({
							cssClass: "apexcharts-marker",
							seriesIndex: zc,
							dataPointIndex: Ic
						}), Bc = Pc.graphics.drawMarker(Wc[Ic].x, Wc[Ic].y, Lc);
						Bc.attr("rel", Ic), Bc.attr("j", Ic), Bc.attr("index", zc), Bc.node.setAttribute("default-marker-size", Lc.pSize);
						var Hc = Pc.graphics.group({ class: "apexcharts-series-markers" });
						Hc && Hc.add(Bc), Gc.add(Hc), Vc.add(Gc);
						var Uc = Fc.config.dataLabels;
						if (Uc.enabled) {
							var Jc = Uc.formatter(Fc.globals.series[zc][Ic], {
								seriesIndex: zc,
								dataPointIndex: Ic,
								w: Fc
							});
							Rc.plotDataLabelsText({
								x: Wc[Ic].x,
								y: Wc[Ic].y,
								text: Jc,
								textAnchor: "middle",
								i: zc,
								j: zc,
								parent: qc,
								offsetCorrection: !1,
								dataLabelsConfig: u({}, Uc)
							});
						}
						Vc.add(qc);
					})), Lc.push(Vc);
				})), this.drawPolygons({ parent: Uc }), Fc.config.xaxis.labels.show) {
					var Jc = this.drawXAxisTexts();
					Uc.add(Jc);
				}
				return Lc.forEach((function(io) {
					Uc.add(io);
				})), Uc.add(this.yaxisLabels), Uc;
			}
		},
		{
			key: "drawPolygons",
			value: function(io) {
				for (var Pc = this, Fc = this.w, Ic = io.parent, Lc = new Ra(this.ctx), Rc = Fc.globals.yAxisScale[0].result.reverse(), zc = Rc.length, Bc = [], Vc = this.size / (zc - 1), Hc = 0; Hc < zc; Hc++) Bc[Hc] = Vc * Hc;
				Bc.reverse();
				var Uc = [], Wc = [];
				Bc.forEach((function(io, Fc) {
					var Ic = v.getPolygonPos(io, Pc.dataPointsLen), Lc = "";
					Ic.forEach((function(io, Ic) {
						if (Fc === 0) {
							var Rc = Pc.graphics.drawLine(io.x, io.y, 0, 0, Array.isArray(Pc.polygons.connectorColors) ? Pc.polygons.connectorColors[Ic] : Pc.polygons.connectorColors);
							Wc.push(Rc);
						}
						Ic === 0 && Pc.yaxisLabelsTextsPos.push({
							x: io.x,
							y: io.y
						}), Lc += io.x + "," + io.y + " ";
					})), Uc.push(Lc);
				})), Uc.forEach((function(io, Lc) {
					var Rc = Pc.polygons.strokeColors, zc = Pc.polygons.strokeWidth, Bc = Pc.graphics.drawPolygon(io, Array.isArray(Rc) ? Rc[Lc] : Rc, Array.isArray(zc) ? zc[Lc] : zc, Fc.globals.radarPolygons.fill.colors[Lc]);
					Ic.add(Bc);
				})), Wc.forEach((function(io) {
					Ic.add(io);
				})), Fc.config.yaxis[0].show && this.yaxisLabelsTextsPos.forEach((function(io, Fc) {
					var Ic = Lc.drawYAxisTexts(io.x, io.y, Fc, Rc[Fc]);
					Pc.yaxisLabels.add(Ic);
				}));
			}
		},
		{
			key: "drawXAxisTexts",
			value: function() {
				var io = this, Pc = this.w, Fc = Pc.config.xaxis.labels, Ic = this.graphics.group({ class: "apexcharts-xaxis" }), Lc = v.getPolygonPos(this.size, this.dataPointsLen);
				return Pc.globals.labels.forEach((function(Rc, zc) {
					var Bc = Pc.config.xaxis.labels.formatter, Vc = new qi(io.ctx);
					if (Lc[zc]) {
						var Hc = io.getTextPos(Lc[zc], io.size), Uc = Bc(Rc, {
							seriesIndex: -1,
							dataPointIndex: zc,
							w: Pc
						});
						Vc.plotDataLabelsText({
							x: Hc.newX,
							y: Hc.newY,
							text: Uc,
							textAnchor: Hc.textAnchor,
							i: zc,
							j: zc,
							parent: Ic,
							className: "apexcharts-xaxis-label",
							color: Array.isArray(Fc.style.colors) && Fc.style.colors[zc] ? Fc.style.colors[zc] : "#a8a8a8",
							dataLabelsConfig: u({
								textAnchor: Hc.textAnchor,
								dropShadow: { enabled: !1 }
							}, Fc),
							offsetCorrection: !1
						}).on("click", (function(Fc) {
							if (typeof Pc.config.chart.events.xAxisLabelClick == "function") {
								var Ic = Object.assign({}, Pc, { labelIndex: zc });
								Pc.config.chart.events.xAxisLabelClick(Fc, io.ctx, Ic);
							}
						}));
					}
				})), Ic;
			}
		},
		{
			key: "createPaths",
			value: function(io, Pc) {
				var Fc = this, Ic = [], Lc = [], Rc = [], zc = [];
				if (io.length) {
					Lc = [this.graphics.move(Pc.x, Pc.y)], zc = [this.graphics.move(Pc.x, Pc.y)];
					var Bc = this.graphics.move(io[0].x, io[0].y), Vc = this.graphics.move(io[0].x, io[0].y);
					io.forEach((function(Pc, Ic) {
						Bc += Fc.graphics.line(Pc.x, Pc.y), Vc += Fc.graphics.line(Pc.x, Pc.y), Ic === io.length - 1 && (Bc += "Z", Vc += "Z");
					})), Ic.push(Bc), Rc.push(Vc);
				}
				return {
					linePathsFrom: Lc,
					linePathsTo: Ic,
					areaPathsFrom: zc,
					areaPathsTo: Rc
				};
			}
		},
		{
			key: "getTextPos",
			value: function(io, Pc) {
				var Fc = "middle", Ic = io.x, Lc = io.y;
				return Math.abs(io.x) >= 10 ? io.x > 0 ? (Fc = "start", Ic += 10) : io.x < 0 && (Fc = "end", Ic -= 10) : Fc = "middle", Math.abs(io.y) >= Pc - 10 && (io.y < 0 ? Lc -= 10 : io.y > 0 && (Lc += 10)), {
					textAnchor: Fc,
					newX: Ic,
					newY: Lc
				};
			}
		},
		{
			key: "getPreviousPath",
			value: function(io) {
				for (var Pc = this.w, Fc = null, Ic = 0; Ic < Pc.globals.previousPaths.length; Ic++) {
					var Lc = Pc.globals.previousPaths[Ic];
					Lc.paths.length > 0 && parseInt(Lc.realIndex, 10) === parseInt(io, 10) && Pc.globals.previousPaths[Ic].paths[0] !== void 0 && (Fc = Pc.globals.previousPaths[Ic].paths[0].d);
				}
				return Fc;
			}
		},
		{
			key: "getDataPointsPos",
			value: function(io, Pc) {
				var Fc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.dataPointsLen;
				io = io || [], Pc = Pc || [];
				for (var Ic = [], Lc = 0; Lc < Fc; Lc++) {
					var Rc = {};
					Rc.x = io[Lc] * Math.sin(Pc[Lc]), Rc.y = -io[Lc] * Math.cos(Pc[Lc]), Ic.push(Rc);
				}
				return Ic;
			}
		}
	]), io;
}(), Ha = function(io) {
	h(Lc, Ea);
	var Pc = n(Lc);
	function Lc(io) {
		var Rc;
		i(this, Lc), (Rc = Pc.call(this, io)).ctx = io, Rc.w = io.w, Rc.animBeginArr = [0], Rc.animDur = 0;
		var zc = Rc.w;
		return Rc.startAngle = zc.config.plotOptions.radialBar.startAngle, Rc.endAngle = zc.config.plotOptions.radialBar.endAngle, Rc.totalAngle = Math.abs(zc.config.plotOptions.radialBar.endAngle - zc.config.plotOptions.radialBar.startAngle), Rc.trackStartAngle = zc.config.plotOptions.radialBar.track.startAngle, Rc.trackEndAngle = zc.config.plotOptions.radialBar.track.endAngle, Rc.barLabels = Rc.w.config.plotOptions.radialBar.barLabels, Rc.donutDataLabels = Rc.w.config.plotOptions.radialBar.dataLabels, Rc.radialDataLabels = Rc.donutDataLabels, Rc.trackStartAngle || (Rc.trackStartAngle = Rc.startAngle), Rc.trackEndAngle || (Rc.trackEndAngle = Rc.endAngle), Rc.endAngle === 360 && (Rc.endAngle = 359.99), Rc.margin = parseInt(zc.config.plotOptions.radialBar.track.margin, 10), Rc.onBarLabelClick = Rc.onBarLabelClick.bind(e(Rc)), Rc;
	}
	return s(Lc, [
		{
			key: "draw",
			value: function(io) {
				var Pc = this.w, Fc = new Mi(this.ctx), Ic = Fc.group({ class: "apexcharts-radialbar" });
				if (Pc.globals.noData) return Ic;
				var Lc = Fc.group(), Rc = this.defaultSize / 2, zc = Pc.globals.gridWidth / 2, Bc = this.defaultSize / 2.05;
				Pc.config.chart.sparkline.enabled || (Bc = Bc - Pc.config.stroke.width - Pc.config.chart.dropShadow.blur);
				var Vc = Pc.globals.fill.colors;
				if (Pc.config.plotOptions.radialBar.track.show) {
					var Hc = this.drawTracks({
						size: Bc,
						centerX: zc,
						centerY: Rc,
						colorArr: Vc,
						series: io
					});
					Lc.add(Hc);
				}
				var Uc = this.drawArcs({
					size: Bc,
					centerX: zc,
					centerY: Rc,
					colorArr: Vc,
					series: io
				}), Wc = 360;
				Pc.config.plotOptions.radialBar.startAngle < 0 && (Wc = this.totalAngle);
				var Gc = (360 - Wc) / 360;
				if (Pc.globals.radialSize = Bc - Bc * Gc, this.radialDataLabels.value.show) {
					var Kc = Math.max(this.radialDataLabels.value.offsetY, this.radialDataLabels.name.offsetY);
					Pc.globals.radialSize += Kc * Gc;
				}
				return Lc.add(Uc.g), Pc.config.plotOptions.radialBar.hollow.position === "front" && (Uc.g.add(Uc.elHollow), Uc.dataLabels && Uc.g.add(Uc.dataLabels)), Ic.add(Lc), Ic;
			}
		},
		{
			key: "drawTracks",
			value: function(io) {
				var Pc = this.w, Fc = new Mi(this.ctx), Ic = Fc.group({ class: "apexcharts-tracks" }), Lc = new Li(this.ctx), Rc = new ji(this.ctx), zc = this.getStrokeWidth(io);
				io.size -= zc / 2;
				for (var Bc = 0; Bc < io.series.length; Bc++) {
					var Vc = Fc.group({ class: "apexcharts-radialbar-track apexcharts-track" });
					Ic.add(Vc), Vc.attr({ rel: Bc + 1 }), io.size = io.size - zc - this.margin;
					var Hc = Pc.config.plotOptions.radialBar.track, Uc = Rc.fillPath({
						seriesNumber: 0,
						size: io.size,
						fillColors: Array.isArray(Hc.background) ? Hc.background[Bc] : Hc.background,
						solid: !0
					}), Wc = this.trackStartAngle, Gc = this.trackEndAngle;
					Math.abs(Gc) + Math.abs(Wc) >= 360 && (Gc = 360 - Math.abs(this.startAngle) - .1);
					var Kc = Fc.drawPath({
						d: "",
						stroke: Uc,
						strokeWidth: zc * parseInt(Hc.strokeWidth, 10) / 100,
						fill: "none",
						strokeOpacity: Hc.opacity,
						classes: "apexcharts-radialbar-area"
					});
					if (Hc.dropShadow.enabled) {
						var qc = Hc.dropShadow;
						Lc.dropShadow(Kc, qc);
					}
					Vc.add(Kc), Kc.attr("id", "apexcharts-radialbarTrack-" + Bc), this.animatePaths(Kc, {
						centerX: io.centerX,
						centerY: io.centerY,
						endAngle: Gc,
						startAngle: Wc,
						size: io.size,
						i: Bc,
						totalItems: 2,
						animBeginArr: 0,
						dur: 0,
						isTrack: !0
					});
				}
				return Ic;
			}
		},
		{
			key: "drawArcs",
			value: function(io) {
				var Pc = this.w, Fc = new Mi(this.ctx), Ic = new ji(this.ctx), Lc = new Li(this.ctx), Rc = Fc.group(), zc = this.getStrokeWidth(io);
				io.size -= zc / 2;
				var Bc = Pc.config.plotOptions.radialBar.hollow.background, Vc = io.size - zc * io.series.length - this.margin * io.series.length - zc * parseInt(Pc.config.plotOptions.radialBar.track.strokeWidth, 10) / 100 / 2, Hc = Vc - Pc.config.plotOptions.radialBar.hollow.margin;
				Pc.config.plotOptions.radialBar.hollow.image !== void 0 && (Bc = this.drawHollowImage(io, Rc, Vc, Bc));
				var Uc = this.drawHollow({
					size: Hc,
					centerX: io.centerX,
					centerY: io.centerY,
					fill: Bc || "transparent"
				});
				if (Pc.config.plotOptions.radialBar.hollow.dropShadow.enabled) {
					var Wc = Pc.config.plotOptions.radialBar.hollow.dropShadow;
					Lc.dropShadow(Uc, Wc);
				}
				var Gc = 1;
				!this.radialDataLabels.total.show && Pc.globals.series.length > 1 && (Gc = 0);
				var Kc = null;
				if (this.radialDataLabels.show) {
					var qc = Pc.globals.dom.Paper.findOne(".apexcharts-datalabels-group");
					Kc = this.renderInnerDataLabels(qc, this.radialDataLabels, {
						hollowSize: Vc,
						centerX: io.centerX,
						centerY: io.centerY,
						opacity: Gc
					});
				}
				Pc.config.plotOptions.radialBar.hollow.position === "back" && (Rc.add(Uc), Kc && Rc.add(Kc));
				var Jc = !1;
				Pc.config.plotOptions.radialBar.inverseOrder && (Jc = !0);
				for (var Yc = Jc ? io.series.length - 1 : 0; Jc ? Yc >= 0 : Yc < io.series.length; Jc ? Yc-- : Yc++) {
					var Xc = Fc.group({
						class: "apexcharts-series apexcharts-radial-series",
						seriesName: v.escapeString(Pc.globals.seriesNames[Yc])
					});
					Rc.add(Xc), Xc.attr({
						rel: Yc + 1,
						"data:realIndex": Yc
					}), this.ctx.series.addCollapsedClassToSeries(Xc, Yc), io.size = io.size - zc - this.margin;
					var Zc = Ic.fillPath({
						seriesNumber: Yc,
						size: io.size,
						value: io.series[Yc]
					}), Qc = this.startAngle, el = void 0, tl = v.negToZero(io.series[Yc] > 100 ? 100 : io.series[Yc]) / 100, nl = Math.round(this.totalAngle * tl) + this.startAngle, rl = void 0;
					Pc.globals.dataChanged && (el = this.startAngle, rl = Math.round(this.totalAngle * v.negToZero(Pc.globals.previousPaths[Yc]) / 100) + el), Math.abs(nl) + Math.abs(Qc) > 360 && (nl -= .01), Math.abs(rl) + Math.abs(el) > 360 && (rl -= .01);
					var il = nl - Qc, al = Array.isArray(Pc.config.stroke.dashArray) ? Pc.config.stroke.dashArray[Yc] : Pc.config.stroke.dashArray, ol = Fc.drawPath({
						d: "",
						stroke: Zc,
						strokeWidth: zc,
						fill: "none",
						fillOpacity: Pc.config.fill.opacity,
						classes: "apexcharts-radialbar-area apexcharts-radialbar-slice-" + Yc,
						strokeDashArray: al
					});
					if (Mi.setAttrs(ol.node, {
						"data:angle": il,
						"data:value": io.series[Yc]
					}), Pc.config.chart.dropShadow.enabled) {
						var sl = Pc.config.chart.dropShadow;
						Lc.dropShadow(ol, sl, Yc);
					}
					if (Lc.setSelectionFilter(ol, 0, Yc), this.addListeners(ol, this.radialDataLabels), Xc.add(ol), ol.attr({
						index: 0,
						j: Yc
					}), this.barLabels.enabled) {
						var cl = v.polarToCartesian(io.centerX, io.centerY, io.size, Qc), ll = this.barLabels.formatter(Pc.globals.seriesNames[Yc], {
							seriesIndex: Yc,
							w: Pc
						}), ul = ["apexcharts-radialbar-label"];
						this.barLabels.onClick || ul.push("apexcharts-no-click");
						var dl = this.barLabels.useSeriesColors ? Pc.globals.colors[Yc] : Pc.config.chart.foreColor;
						dl || (dl = Pc.config.chart.foreColor);
						var fl = cl.x + this.barLabels.offsetX, pl = cl.y + this.barLabels.offsetY, ml = Fc.drawText({
							x: fl,
							y: pl,
							text: ll,
							textAnchor: "end",
							dominantBaseline: "middle",
							fontFamily: this.barLabels.fontFamily,
							fontWeight: this.barLabels.fontWeight,
							fontSize: this.barLabels.fontSize,
							foreColor: dl,
							cssClass: ul.join(" ")
						});
						ml.on("click", this.onBarLabelClick), ml.attr({ rel: Yc + 1 }), Qc !== 0 && ml.attr({
							"transform-origin": `${fl} ${pl}`,
							transform: `rotate(${Qc} 0 0)`
						}), Xc.add(ml);
					}
					var hl = 0;
					!this.initialAnim || Pc.globals.resized || Pc.globals.dataChanged || (hl = Pc.config.chart.animations.speed), Pc.globals.dataChanged && (hl = Pc.config.chart.animations.dynamicAnimation.speed), this.animDur = hl / (1.2 * io.series.length) + this.animDur, this.animBeginArr.push(this.animDur), this.animatePaths(ol, {
						centerX: io.centerX,
						centerY: io.centerY,
						endAngle: nl,
						startAngle: Qc,
						prevEndAngle: rl,
						prevStartAngle: el,
						size: io.size,
						i: Yc,
						totalItems: 2,
						animBeginArr: this.animBeginArr,
						dur: hl,
						shouldSetPrevPaths: !0
					});
				}
				return {
					g: Rc,
					elHollow: Uc,
					dataLabels: Kc
				};
			}
		},
		{
			key: "drawHollow",
			value: function(io) {
				var Pc = new Mi(this.ctx).drawCircle(2 * io.size);
				return Pc.attr({
					class: "apexcharts-radialbar-hollow",
					cx: io.centerX,
					cy: io.centerY,
					r: io.size,
					fill: io.fill
				}), Pc;
			}
		},
		{
			key: "drawHollowImage",
			value: function(io, Pc, Fc, Ic) {
				var Lc = this.w, Rc = new ji(this.ctx), zc = v.randomId(), Bc = Lc.config.plotOptions.radialBar.hollow.image;
				if (Lc.config.plotOptions.radialBar.hollow.imageClipped) Rc.clippedImgArea({
					width: Fc,
					height: Fc,
					image: Bc,
					patternID: `pattern${Lc.globals.cuid}${zc}`
				}), Ic = `url(#pattern${Lc.globals.cuid}${zc})`;
				else {
					var Vc = Lc.config.plotOptions.radialBar.hollow.imageWidth, Hc = Lc.config.plotOptions.radialBar.hollow.imageHeight;
					if (Vc === void 0 && Hc === void 0) {
						var Uc = Lc.globals.dom.Paper.image(Bc, (function(Pc) {
							this.move(io.centerX - Pc.width / 2 + Lc.config.plotOptions.radialBar.hollow.imageOffsetX, io.centerY - Pc.height / 2 + Lc.config.plotOptions.radialBar.hollow.imageOffsetY);
						}));
						Pc.add(Uc);
					} else {
						var Wc = Lc.globals.dom.Paper.image(Bc, (function(Pc) {
							this.move(io.centerX - Vc / 2 + Lc.config.plotOptions.radialBar.hollow.imageOffsetX, io.centerY - Hc / 2 + Lc.config.plotOptions.radialBar.hollow.imageOffsetY), this.size(Vc, Hc);
						}));
						Pc.add(Wc);
					}
				}
				return Ic;
			}
		},
		{
			key: "getStrokeWidth",
			value: function(io) {
				var Pc = this.w;
				return io.size * (100 - parseInt(Pc.config.plotOptions.radialBar.hollow.size, 10)) / 100 / (io.series.length + 1) - this.margin;
			}
		},
		{
			key: "onBarLabelClick",
			value: function(io) {
				var Pc = parseInt(io.target.getAttribute("rel"), 10) - 1, Fc = this.barLabels.onClick, Ic = this.w;
				Fc && Fc(Ic.globals.seriesNames[Pc], {
					w: Ic,
					seriesIndex: Pc
				});
			}
		}
	]), Lc;
}(), Oa = function(io) {
	h(Fc, Pa);
	var Pc = n(Fc);
	function Fc() {
		return i(this, Fc), Pc.apply(this, arguments);
	}
	return s(Fc, [
		{
			key: "draw",
			value: function(io, Pc) {
				var Fc = this.w, Ic = new Mi(this.ctx);
				this.rangeBarOptions = this.w.config.plotOptions.rangeBar, this.series = io, this.seriesRangeStart = Fc.globals.seriesRangeStart, this.seriesRangeEnd = Fc.globals.seriesRangeEnd, this.barHelpers.initVariables(io);
				for (var Lc = Ic.group({ class: "apexcharts-rangebar-series apexcharts-plot-series" }), Rc = 0; Rc < io.length; Rc++) {
					var zc, Bc, Vc, Hc, Uc = void 0, Wc = void 0, Gc = Fc.globals.comboCharts ? Pc[Rc] : Rc, qc = this.barHelpers.getGroupIndex(Gc).columnGroupIndex, Jc = Ic.group({
						class: "apexcharts-series",
						seriesName: v.escapeString(Fc.globals.seriesNames[Gc]),
						rel: Rc + 1,
						"data:realIndex": Gc
					});
					this.ctx.series.addCollapsedClassToSeries(Jc, Gc), io[Rc].length > 0 && (this.visibleI += 1);
					var Yc = 0, Xc = 0, Zc = 0;
					this.yRatio.length > 1 && (this.yaxisIndex = Fc.globals.seriesYAxisReverseMap[Gc][0], Zc = Gc);
					var Qc = this.barHelpers.initialPositions(Gc);
					Wc = Qc.y, Hc = Qc.zeroW, Uc = Qc.x, Xc = Qc.barWidth, Yc = Qc.barHeight, zc = Qc.xDivision, Bc = Qc.yDivision, Vc = Qc.zeroH;
					for (var el = Ic.group({
						class: "apexcharts-datalabels",
						"data:realIndex": Gc
					}), tl = Ic.group({ class: "apexcharts-rangebar-goals-markers" }), nl = 0; nl < Fc.globals.dataPoints; nl++) {
						var rl = this.barHelpers.getStrokeWidth(Rc, nl, Gc), il = this.seriesRangeStart[Rc][nl], al = this.seriesRangeEnd[Rc][nl], ol = null, sl = null, cl = null, ll = {
							x: Uc,
							y: Wc,
							strokeWidth: rl,
							elSeries: Jc
						}, ul = this.seriesLen;
						if (Fc.config.plotOptions.bar.rangeBarGroupRows && (ul = 1), Fc.config.series[Rc].data[nl] === void 0) break;
						if (this.isHorizontal) {
							cl = Wc + Yc * this.visibleI;
							var dl = (Bc - Yc * ul) / 2;
							if (Fc.config.series[Rc].data[nl].x) {
								var fl = this.detectOverlappingBars({
									i: Rc,
									j: nl,
									barYPosition: cl,
									srty: dl,
									barHeight: Yc,
									yDivision: Bc,
									initPositions: Qc
								});
								Yc = fl.barHeight, cl = fl.barYPosition;
							}
							Xc = (ol = this.drawRangeBarPaths(u({
								indexes: {
									i: Rc,
									j: nl,
									realIndex: Gc
								},
								barHeight: Yc,
								barYPosition: cl,
								zeroW: Hc,
								yDivision: Bc,
								y1: il,
								y2: al
							}, ll))).barWidth;
						} else {
							Fc.globals.isXNumeric && (Uc = (Fc.globals.seriesX[Rc][nl] - Fc.globals.minX) / this.xRatio - Xc / 2), sl = Uc + Xc * this.visibleI;
							var pl = (zc - Xc * ul) / 2;
							if (Fc.config.series[Rc].data[nl].x) {
								var ml = this.detectOverlappingBars({
									i: Rc,
									j: nl,
									barXPosition: sl,
									srtx: pl,
									barWidth: Xc,
									xDivision: zc,
									initPositions: Qc
								});
								Xc = ml.barWidth, sl = ml.barXPosition;
							}
							Yc = (ol = this.drawRangeColumnPaths(u({
								indexes: {
									i: Rc,
									j: nl,
									realIndex: Gc,
									translationsIndex: Zc
								},
								barWidth: Xc,
								barXPosition: sl,
								zeroH: Vc,
								xDivision: zc
							}, ll))).barHeight;
						}
						var hl = this.barHelpers.drawGoalLine({
							barXPosition: ol.barXPosition,
							barYPosition: cl,
							goalX: ol.goalX,
							goalY: ol.goalY,
							barHeight: Yc,
							barWidth: Xc
						});
						hl && tl.add(hl), Wc = ol.y, Uc = ol.x;
						var gl = this.barHelpers.getPathFillColor(io, Rc, nl, Gc);
						this.renderSeries({
							realIndex: Gc,
							pathFill: gl.color,
							lineFill: gl.useRangeColor ? gl.color : Fc.globals.stroke.colors[Gc],
							j: nl,
							i: Rc,
							x: Uc,
							y: Wc,
							y1: il,
							y2: al,
							pathFrom: ol.pathFrom,
							pathTo: ol.pathTo,
							strokeWidth: rl,
							elSeries: Jc,
							series: io,
							barHeight: Yc,
							barWidth: Xc,
							barXPosition: sl,
							barYPosition: cl,
							columnGroupIndex: qc,
							elDataLabelsWrap: el,
							elGoalsMarkers: tl,
							visibleSeries: this.visibleI,
							type: "rangebar"
						});
					}
					Lc.add(Jc);
				}
				return Lc;
			}
		},
		{
			key: "detectOverlappingBars",
			value: function(io) {
				var Pc = io.i, Fc = io.j, Ic = io.barYPosition, Lc = io.barXPosition, Rc = io.srty, zc = io.srtx, Bc = io.barHeight, Vc = io.barWidth, Hc = io.yDivision, Uc = io.xDivision, Wc = io.initPositions, Gc = this.w, Kc = [], qc = Gc.config.series[Pc].data[Fc].rangeName, Jc = Gc.config.series[Pc].data[Fc].x, Yc = Array.isArray(Jc) ? Jc.join(" ") : Jc, Xc = Gc.globals.labels.map((function(io) {
					return Array.isArray(io) ? io.join(" ") : io;
				})).indexOf(Yc), Zc = Gc.globals.seriesRange[Pc].findIndex((function(io) {
					return io.x === Yc && io.overlaps.length > 0;
				}));
				return this.isHorizontal ? (Ic = Gc.config.plotOptions.bar.rangeBarGroupRows ? Rc + Hc * Xc : Rc + Bc * this.visibleI + Hc * Xc, Zc > -1 && !Gc.config.plotOptions.bar.rangeBarOverlap && (Kc = Gc.globals.seriesRange[Pc][Zc].overlaps).indexOf(qc) > -1 && (Ic = (Bc = Wc.barHeight / Kc.length) * this.visibleI + Hc * (100 - parseInt(this.barOptions.barHeight, 10)) / 100 / 2 + Bc * (this.visibleI + Kc.indexOf(qc)) + Hc * Xc)) : (Xc > -1 && !Gc.globals.timescaleLabels.length && (Lc = Gc.config.plotOptions.bar.rangeBarGroupRows ? zc + Uc * Xc : zc + Vc * this.visibleI + Uc * Xc), Zc > -1 && !Gc.config.plotOptions.bar.rangeBarOverlap && (Kc = Gc.globals.seriesRange[Pc][Zc].overlaps).indexOf(qc) > -1 && (Lc = (Vc = Wc.barWidth / Kc.length) * this.visibleI + Uc * (100 - parseInt(this.barOptions.barWidth, 10)) / 100 / 2 + Vc * (this.visibleI + Kc.indexOf(qc)) + Uc * Xc)), {
					barYPosition: Ic,
					barXPosition: Lc,
					barHeight: Bc,
					barWidth: Vc
				};
			}
		},
		{
			key: "drawRangeColumnPaths",
			value: function(io) {
				var Pc = io.indexes, Fc = io.x, Ic = io.xDivision, Lc = io.barWidth, Rc = io.barXPosition, zc = io.zeroH, Bc = this.w, Vc = Pc.i, Hc = Pc.j, Uc = Pc.realIndex, Wc = Pc.translationsIndex, Gc = this.yRatio[Wc], Kc = this.getRangeValue(Uc, Hc), qc = Math.min(Kc.start, Kc.end), Jc = Math.max(Kc.start, Kc.end);
				this.series[Vc][Hc] === void 0 || this.series[Vc][Hc] === null ? qc = zc : (qc = zc - qc / Gc, Jc = zc - Jc / Gc);
				var Yc = Math.abs(Jc - qc), Xc = this.barHelpers.getColumnPaths({
					barXPosition: Rc,
					barWidth: Lc,
					y1: qc,
					y2: Jc,
					strokeWidth: this.strokeWidth,
					series: this.seriesRangeEnd,
					realIndex: Uc,
					i: Uc,
					j: Hc,
					w: Bc
				});
				if (Bc.globals.isXNumeric) {
					var Zc = this.getBarXForNumericXAxis({
						x: Fc,
						j: Hc,
						realIndex: Uc,
						barWidth: Lc
					});
					Fc = Zc.x, Rc = Zc.barXPosition;
				} else Fc += Ic;
				return {
					pathTo: Xc.pathTo,
					pathFrom: Xc.pathFrom,
					barHeight: Yc,
					x: Fc,
					y: Kc.start < 0 && Kc.end < 0 ? qc : Jc,
					goalY: this.barHelpers.getGoalValues("y", null, zc, Vc, Hc, Wc),
					barXPosition: Rc
				};
			}
		},
		{
			key: "preventBarOverflow",
			value: function(io) {
				var Pc = this.w;
				return io < 0 && (io = 0), io > Pc.globals.gridWidth && (io = Pc.globals.gridWidth), io;
			}
		},
		{
			key: "drawRangeBarPaths",
			value: function(io) {
				var Pc = io.indexes, Fc = io.y, Ic = io.y1, Lc = io.y2, Rc = io.yDivision, zc = io.barHeight, Bc = io.barYPosition, Vc = io.zeroW, Hc = this.w, Uc = Pc.realIndex, Wc = Pc.j, Gc = this.preventBarOverflow(Vc + Ic / this.invertedYRatio), Kc = this.preventBarOverflow(Vc + Lc / this.invertedYRatio), qc = this.getRangeValue(Uc, Wc), Jc = Math.abs(Kc - Gc), Yc = this.barHelpers.getBarpaths({
					barYPosition: Bc,
					barHeight: zc,
					x1: Gc,
					x2: Kc,
					strokeWidth: this.strokeWidth,
					series: this.seriesRangeEnd,
					i: Uc,
					realIndex: Uc,
					j: Wc,
					w: Hc
				});
				return Hc.globals.isXNumeric || (Fc += Rc), {
					pathTo: Yc.pathTo,
					pathFrom: Yc.pathFrom,
					barWidth: Jc,
					x: qc.start < 0 && qc.end < 0 ? Gc : Kc,
					goalX: this.barHelpers.getGoalValues("x", Vc, null, Uc, Wc),
					y: Fc
				};
			}
		},
		{
			key: "getRangeValue",
			value: function(io, Pc) {
				var Fc = this.w;
				return {
					start: Fc.globals.seriesRangeStart[io][Pc],
					end: Fc.globals.seriesRangeEnd[io][Pc]
				};
			}
		}
	]), Fc;
}(), Fa = function() {
	function io(Pc) {
		i(this, io), this.w = Pc.w, this.lineCtx = Pc;
	}
	return s(io, [
		{
			key: "sameValueSeriesFix",
			value: function(io, Pc) {
				var Fc = this.w;
				if ((Fc.config.fill.type === "gradient" || Fc.config.fill.type[io] === "gradient") && new Pi(this.lineCtx.ctx, Fc).seriesHaveSameValues(io)) {
					var Ic = Pc[io].slice();
					Ic[Ic.length - 1] = Ic[Ic.length - 1] + 1e-6, Pc[io] = Ic;
				}
				return Pc;
			}
		},
		{
			key: "calculatePoints",
			value: function(io) {
				var Pc = io.series, Fc = io.realIndex, Ic = io.x, Lc = io.y, Rc = io.i, zc = io.j, Bc = io.prevY, Vc = this.w, Hc = [], Uc = [], Wc = this.lineCtx.categoryAxisCorrection + Vc.config.markers.offsetX;
				return Vc.globals.isXNumeric && (Wc = (Vc.globals.seriesX[Fc][0] - Vc.globals.minX) / this.lineCtx.xRatio + Vc.config.markers.offsetX), zc === 0 && (Hc.push(Wc), Uc.push(v.isNumber(Pc[Rc][0]) ? Bc + Vc.config.markers.offsetY : null)), Hc.push(Ic + Vc.config.markers.offsetX), Uc.push(v.isNumber(Pc[Rc][zc + 1]) ? Lc + Vc.config.markers.offsetY : null), {
					x: Hc,
					y: Uc
				};
			}
		},
		{
			key: "checkPreviousPaths",
			value: function(io) {
				for (var Pc = io.pathFromLine, Fc = io.pathFromArea, Ic = io.realIndex, Lc = this.w, Rc = 0; Rc < Lc.globals.previousPaths.length; Rc++) {
					var zc = Lc.globals.previousPaths[Rc];
					(zc.type === "line" || zc.type === "area") && zc.paths.length > 0 && parseInt(zc.realIndex, 10) === parseInt(Ic, 10) && (zc.type === "line" ? (this.lineCtx.appendPathFrom = !1, Pc = Lc.globals.previousPaths[Rc].paths[0].d) : zc.type === "area" && (this.lineCtx.appendPathFrom = !1, Fc = Lc.globals.previousPaths[Rc].paths[0].d, Lc.config.stroke.show && Lc.globals.previousPaths[Rc].paths[1] && (Pc = Lc.globals.previousPaths[Rc].paths[1].d)));
				}
				return {
					pathFromLine: Pc,
					pathFromArea: Fc
				};
			}
		},
		{
			key: "determineFirstPrevY",
			value: function(io) {
				var Pc, Fc, Ic, Lc = io.i, Rc = io.realIndex, zc = io.series, Bc = io.prevY, Vc = io.lineYPosition, Hc = io.translationsIndex, Uc = this.w, Wc = Uc.config.chart.stacked && !Uc.globals.comboCharts || Uc.config.chart.stacked && Uc.globals.comboCharts && (!this.w.config.chart.stackOnlyBar || ((Pc = this.w.config.series[Rc]) == null ? void 0 : Pc.type) === "bar" || ((Fc = this.w.config.series[Rc]) == null ? void 0 : Fc.type) === "column");
				if (((Ic = zc[Lc]) == null ? void 0 : Ic[0]) !== void 0) Bc = (Vc = Wc && Lc > 0 ? this.lineCtx.prevSeriesY[Lc - 1][0] : this.lineCtx.zeroY) - zc[Lc][0] / this.lineCtx.yRatio[Hc] + 2 * (this.lineCtx.isReversed ? zc[Lc][0] / this.lineCtx.yRatio[Hc] : 0);
				else if (Wc && Lc > 0 && zc[Lc][0] === void 0) {
					for (var Gc = Lc - 1; Gc >= 0; Gc--) if (zc[Gc][0] !== null && zc[Gc][0] !== void 0) {
						Bc = Vc = this.lineCtx.prevSeriesY[Gc][0];
						break;
					}
				}
				return {
					prevY: Bc,
					lineYPosition: Vc
				};
			}
		}
	]), io;
}(), Da = function(io) {
	for (var Pc, Fc, Ic, Lc, Rc = function(io) {
		for (var Pc = [], Fc = io[0], Ic = io[1], Lc = Pc[0] = Wa(Fc, Ic), Rc = 1, zc = io.length - 1; Rc < zc; Rc++) Fc = Ic, Ic = io[Rc + 1], Pc[Rc] = .5 * (Lc + (Lc = Wa(Fc, Ic)));
		return Pc[Rc] = Lc, Pc;
	}(io), zc = io.length - 1, Bc = [], Vc = 0; Vc < zc; Vc++) Ic = Wa(io[Vc], io[Vc + 1]), Math.abs(Ic) < 1e-6 ? Rc[Vc] = Rc[Vc + 1] = 0 : (Lc = (Pc = Rc[Vc] / Ic) * Pc + (Fc = Rc[Vc + 1] / Ic) * Fc) > 9 && (Lc = 3 * Ic / Math.sqrt(Lc), Rc[Vc] = Lc * Pc, Rc[Vc + 1] = Lc * Fc);
	for (var Hc = 0; Hc <= zc; Hc++) Lc = (io[Math.min(zc, Hc + 1)][0] - io[Math.max(0, Hc - 1)][0]) / (6 * (1 + Rc[Hc] * Rc[Hc])), Bc.push([Lc || 0, Rc[Hc] * Lc || 0]);
	return Bc;
}, _a = function(io) {
	var Pc = Da(io), Fc = io[1], Ic = io[0], Lc = [], Rc = Pc[1], zc = Pc[0];
	Lc.push(Ic, [
		Ic[0] + zc[0],
		Ic[1] + zc[1],
		Fc[0] - Rc[0],
		Fc[1] - Rc[1],
		Fc[0],
		Fc[1]
	]);
	for (var Bc = 2, Vc = Pc.length; Bc < Vc; Bc++) {
		var Hc = io[Bc], Uc = Pc[Bc];
		Lc.push([
			Hc[0] - Uc[0],
			Hc[1] - Uc[1],
			Hc[0],
			Hc[1]
		]);
	}
	return Lc;
}, Na = function(io, Pc, Fc) {
	var Ic = io.slice(Pc, Fc);
	if (Pc) {
		if (Fc - Pc > 1 && Ic[1].length < 6) {
			var Lc = Ic[0].length;
			Ic[1] = [2 * Ic[0][Lc - 2] - Ic[0][Lc - 4], 2 * Ic[0][Lc - 1] - Ic[0][Lc - 3]].concat(Ic[1]);
		}
		Ic[0] = Ic[0].slice(-2);
	}
	return Ic;
};
function Wa(io, Pc) {
	return (Pc[1] - io[1]) / (Pc[0] - io[0]);
}
var Ba = function() {
	function io(Pc, Fc, Lc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w, this.xyRatios = Fc, this.pointsChart = !(this.w.config.chart.type !== "bubble" && this.w.config.chart.type !== "scatter") || Lc, this.scatter = new Ui(this.ctx), this.noNegatives = this.w.globals.minX === Number.MAX_VALUE, this.lineHelpers = new Fa(this), this.markers = new Vi(this.ctx), this.prevSeriesY = [], this.categoryAxisCorrection = 0, this.yaxisIndex = 0;
	}
	return s(io, [
		{
			key: "draw",
			value: function(io, Pc, Fc, Ic) {
				var Lc, Rc = this.w, zc = new Mi(this.ctx), Bc = Rc.globals.comboCharts ? Pc : Rc.config.chart.type, Vc = zc.group({ class: `apexcharts-${Bc}-series apexcharts-plot-series` }), Hc = new Pi(this.ctx, Rc);
				this.yRatio = this.xyRatios.yRatio, this.zRatio = this.xyRatios.zRatio, this.xRatio = this.xyRatios.xRatio, this.baseLineY = this.xyRatios.baseLineY, io = Hc.getLogSeries(io), this.yRatio = Hc.getLogYRatios(this.yRatio), this.prevSeriesY = [];
				for (var Uc = [], Wc = 0; Wc < io.length; Wc++) {
					io = this.lineHelpers.sameValueSeriesFix(Wc, io);
					var Gc = Rc.globals.comboCharts ? Fc[Wc] : Wc, qc = this.yRatio.length > 1 ? Gc : 0;
					this._initSerieVariables(io, Wc, Gc);
					var Jc = [], Yc = [], Xc = [], Zc = Rc.globals.padHorizontal + this.categoryAxisCorrection;
					this.ctx.series.addCollapsedClassToSeries(this.elSeries, Gc), Rc.globals.isXNumeric && Rc.globals.seriesX.length > 0 && (Zc = (Rc.globals.seriesX[Gc][0] - Rc.globals.minX) / this.xRatio), Xc.push(Zc);
					var Qc, $c = Zc, el = void 0, tl = $c, nl = this.zeroY, rl = this.zeroY;
					nl = this.lineHelpers.determineFirstPrevY({
						i: Wc,
						realIndex: Gc,
						series: io,
						prevY: nl,
						lineYPosition: 0,
						translationsIndex: qc
					}).prevY, Rc.config.stroke.curve === "monotoneCubic" && io[Wc][0] === null ? Jc.push(null) : Jc.push(nl), Qc = nl, Bc === "rangeArea" && (el = rl = this.lineHelpers.determineFirstPrevY({
						i: Wc,
						realIndex: Gc,
						series: Ic,
						prevY: rl,
						lineYPosition: 0,
						translationsIndex: qc
					}).prevY, Yc.push(Jc[0] === null ? null : rl));
					var il = this._calculatePathsFrom({
						type: Bc,
						series: io,
						i: Wc,
						realIndex: Gc,
						translationsIndex: qc,
						prevX: tl,
						prevY: nl,
						prevY2: rl
					}), al = [Jc[0]], ol = [Yc[0]], sl = {
						type: Bc,
						series: io,
						realIndex: Gc,
						translationsIndex: qc,
						i: Wc,
						x: Zc,
						y: 1,
						pX: $c,
						pY: Qc,
						pathsFrom: il,
						linePaths: [],
						areaPaths: [],
						seriesIndex: Fc,
						lineYPosition: 0,
						xArrj: Xc,
						yArrj: Jc,
						y2Arrj: Yc,
						seriesRangeEnd: Ic
					}, cl = this._iterateOverDataPoints(u(u({}, sl), {}, {
						iterations: Bc === "rangeArea" ? io[Wc].length - 1 : void 0,
						isRangeStart: !0
					}));
					if (Bc === "rangeArea") {
						for (var ll = this._calculatePathsFrom({
							series: Ic,
							i: Wc,
							realIndex: Gc,
							prevX: tl,
							prevY: rl
						}), ul = this._iterateOverDataPoints(u(u({}, sl), {}, {
							series: Ic,
							xArrj: [Zc],
							yArrj: al,
							y2Arrj: ol,
							pY: el,
							areaPaths: cl.areaPaths,
							pathsFrom: ll,
							iterations: Ic[Wc].length - 1,
							isRangeStart: !1
						})), dl = cl.linePaths.length / 2, fl = 0; fl < dl; fl++) cl.linePaths[fl] = ul.linePaths[fl + dl] + cl.linePaths[fl];
						cl.linePaths.splice(dl), cl.pathFromLine = ul.pathFromLine + cl.pathFromLine;
					} else cl.pathFromArea += "z";
					this._handlePaths({
						type: Bc,
						realIndex: Gc,
						i: Wc,
						paths: cl
					}), this.elSeries.add(this.elPointsMain), this.elSeries.add(this.elDataLabelsWrap), Uc.push(this.elSeries);
				}
				if (((Lc = Rc.config.series[0]) == null ? void 0 : Lc.zIndex) !== void 0 && Uc.sort((function(io, Pc) {
					return Number(io.node.getAttribute("zIndex")) - Number(Pc.node.getAttribute("zIndex"));
				})), Rc.config.chart.stacked) for (var pl = Uc.length - 1; pl >= 0; pl--) Vc.add(Uc[pl]);
				else for (var ml = 0; ml < Uc.length; ml++) Vc.add(Uc[ml]);
				return Vc;
			}
		},
		{
			key: "_initSerieVariables",
			value: function(io, Pc, Fc) {
				var Ic = this.w, Lc = new Mi(this.ctx);
				this.xDivision = Ic.globals.gridWidth / (Ic.globals.dataPoints - (Ic.config.xaxis.tickPlacement === "on" ? 1 : 0)), this.strokeWidth = Array.isArray(Ic.config.stroke.width) ? Ic.config.stroke.width[Fc] : Ic.config.stroke.width;
				var Rc = 0;
				if (this.yRatio.length > 1 && (this.yaxisIndex = Ic.globals.seriesYAxisReverseMap[Fc], Rc = Fc), this.isReversed = Ic.config.yaxis[this.yaxisIndex] && Ic.config.yaxis[this.yaxisIndex].reversed, this.zeroY = Ic.globals.gridHeight - this.baseLineY[Rc] - (this.isReversed ? Ic.globals.gridHeight : 0) + (this.isReversed ? 2 * this.baseLineY[Rc] : 0), this.areaBottomY = this.zeroY, (this.zeroY > Ic.globals.gridHeight || Ic.config.plotOptions.area.fillTo === "end") && (this.areaBottomY = Ic.globals.gridHeight), this.categoryAxisCorrection = this.xDivision / 2, this.elSeries = Lc.group({
					class: "apexcharts-series",
					zIndex: Ic.config.series[Fc].zIndex === void 0 ? Fc : Ic.config.series[Fc].zIndex,
					seriesName: v.escapeString(Ic.globals.seriesNames[Fc])
				}), this.elPointsMain = Lc.group({
					class: "apexcharts-series-markers-wrap",
					"data:realIndex": Fc
				}), Ic.globals.hasNullValues) {
					var zc = this.markers.plotChartMarkers({
						pointsPos: {
							x: [0],
							y: [Ic.globals.gridHeight + Ic.globals.markers.largestSize]
						},
						seriesIndex: Pc,
						j: 0,
						pSize: .1,
						alwaysDrawMarker: !0,
						isVirtualPoint: !0
					});
					zc !== null && this.elPointsMain.add(zc);
				}
				this.elDataLabelsWrap = Lc.group({
					class: "apexcharts-datalabels",
					"data:realIndex": Fc
				});
				var Bc = io[Pc].length === Ic.globals.dataPoints;
				this.elSeries.attr({
					"data:longestSeries": Bc,
					rel: Pc + 1,
					"data:realIndex": Fc
				}), this.appendPathFrom = !0;
			}
		},
		{
			key: "_calculatePathsFrom",
			value: function(io) {
				var Pc, Fc, Ic, Lc, Rc = io.type, zc = io.series, Bc = io.i, Vc = io.realIndex, Hc = io.translationsIndex, Uc = io.prevX, Wc = io.prevY, Gc = io.prevY2, Kc = this.w, qc = new Mi(this.ctx);
				if (zc[Bc][0] === null) {
					for (var Jc = 0; Jc < zc[Bc].length; Jc++) if (zc[Bc][Jc] !== null) {
						Uc = this.xDivision * Jc, Wc = this.zeroY - zc[Bc][Jc] / this.yRatio[Hc], Pc = qc.move(Uc, Wc), Fc = qc.move(Uc, this.areaBottomY);
						break;
					}
				} else Pc = qc.move(Uc, Wc), Rc === "rangeArea" && (Pc = qc.move(Uc, Gc) + qc.line(Uc, Wc)), Fc = qc.move(Uc, this.areaBottomY) + qc.line(Uc, Wc);
				if (Ic = qc.move(0, this.areaBottomY) + qc.line(0, this.areaBottomY), Lc = qc.move(0, this.areaBottomY) + qc.line(0, this.areaBottomY), Kc.globals.previousPaths.length > 0) {
					var Yc = this.lineHelpers.checkPreviousPaths({
						pathFromLine: Ic,
						pathFromArea: Lc,
						realIndex: Vc
					});
					Ic = Yc.pathFromLine, Lc = Yc.pathFromArea;
				}
				return {
					prevX: Uc,
					prevY: Wc,
					linePath: Pc,
					areaPath: Fc,
					pathFromLine: Ic,
					pathFromArea: Lc
				};
			}
		},
		{
			key: "_handlePaths",
			value: function(io) {
				var Pc = io.type, Fc = io.realIndex, Ic = io.i, Lc = io.paths, Rc = this.w, zc = new Mi(this.ctx), Bc = new ji(this.ctx);
				this.prevSeriesY.push(Lc.yArrj), Rc.globals.seriesXvalues[Fc] = Lc.xArrj, Rc.globals.seriesYvalues[Fc] = Lc.yArrj;
				var Vc = Rc.config.forecastDataPoints;
				if (Vc.count > 0 && Pc !== "rangeArea") {
					var Hc = Rc.globals.seriesXvalues[Fc][Rc.globals.seriesXvalues[Fc].length - Vc.count - 1], Uc = zc.drawRect(Hc, 0, Rc.globals.gridWidth, Rc.globals.gridHeight, 0);
					Rc.globals.dom.elForecastMask.appendChild(Uc.node);
					var Wc = zc.drawRect(0, 0, Hc, Rc.globals.gridHeight, 0);
					Rc.globals.dom.elNonForecastMask.appendChild(Wc.node);
				}
				this.pointsChart || Rc.globals.delayedElements.push({
					el: this.elPointsMain.node,
					index: Fc
				});
				var Gc = {
					i: Ic,
					realIndex: Fc,
					animationDelay: Ic,
					initialSpeed: Rc.config.chart.animations.speed,
					dataChangeSpeed: Rc.config.chart.animations.dynamicAnimation.speed,
					className: `apexcharts-${Pc}`
				};
				if (Pc === "area") for (var qc = Bc.fillPath({ seriesNumber: Fc }), Jc = 0; Jc < Lc.areaPaths.length; Jc++) {
					var Yc = zc.renderPaths(u(u({}, Gc), {}, {
						pathFrom: Lc.pathFromArea,
						pathTo: Lc.areaPaths[Jc],
						stroke: "none",
						strokeWidth: 0,
						strokeLineCap: null,
						fill: qc
					}));
					this.elSeries.add(Yc);
				}
				if (Rc.config.stroke.show && !this.pointsChart) {
					var Xc = null;
					if (Pc === "line") Xc = Bc.fillPath({
						seriesNumber: Fc,
						i: Ic
					});
					else if (Rc.config.stroke.fill.type === "solid") Xc = Rc.globals.stroke.colors[Fc];
					else {
						var Zc = Rc.config.fill;
						Rc.config.fill = Rc.config.stroke.fill, Xc = Bc.fillPath({
							seriesNumber: Fc,
							i: Ic
						}), Rc.config.fill = Zc;
					}
					for (var Qc = 0; Qc < Lc.linePaths.length; Qc++) {
						var $c = Xc;
						Pc === "rangeArea" && ($c = Bc.fillPath({ seriesNumber: Fc }));
						var el = u(u({}, Gc), {}, {
							pathFrom: Lc.pathFromLine,
							pathTo: Lc.linePaths[Qc],
							stroke: Xc,
							strokeWidth: this.strokeWidth,
							strokeLineCap: Rc.config.stroke.lineCap,
							fill: Pc === "rangeArea" ? $c : "none"
						}), tl = zc.renderPaths(el);
						if (this.elSeries.add(tl), tl.attr("fill-rule", "evenodd"), Vc.count > 0 && Pc !== "rangeArea") {
							var nl = zc.renderPaths(el);
							nl.node.setAttribute("stroke-dasharray", Vc.dashArray), Vc.strokeWidth && nl.node.setAttribute("stroke-width", Vc.strokeWidth), this.elSeries.add(nl), nl.attr("clip-path", `url(#forecastMask${Rc.globals.cuid})`), tl.attr("clip-path", `url(#nonForecastMask${Rc.globals.cuid})`);
						}
					}
				}
			}
		},
		{
			key: "_iterateOverDataPoints",
			value: function(io) {
				var Pc, Fc, Ic = this, Lc = io.type, Rc = io.series, zc = io.iterations, Bc = io.realIndex, Vc = io.translationsIndex, Hc = io.i, Uc = io.x, Wc = io.y, Gc = io.pX, Kc = io.pY, qc = io.pathsFrom, Jc = io.linePaths, Yc = io.areaPaths, Xc = io.seriesIndex, Zc = io.lineYPosition, Qc = io.xArrj, el = io.yArrj, tl = io.y2Arrj, nl = io.isRangeStart, rl = io.seriesRangeEnd, il = this.w, al = new Mi(this.ctx), ol = this.yRatio, sl = qc.prevY, cl = qc.linePath, ll = qc.areaPath, ul = qc.pathFromLine, dl = qc.pathFromArea, fl = v.isNumber(il.globals.minYArr[Bc]) ? il.globals.minYArr[Bc] : il.globals.minY;
				zc || (zc = il.globals.dataPoints > 1 ? il.globals.dataPoints - 1 : il.globals.dataPoints);
				var pl = function(io, Pc) {
					return Pc - io / ol[Vc] + 2 * (Ic.isReversed ? io / ol[Vc] : 0);
				}, ml = Wc, hl = il.config.chart.stacked && !il.globals.comboCharts || il.config.chart.stacked && il.globals.comboCharts && (!this.w.config.chart.stackOnlyBar || ((Pc = this.w.config.series[Bc]) == null ? void 0 : Pc.type) === "bar" || ((Fc = this.w.config.series[Bc]) == null ? void 0 : Fc.type) === "column"), gl = il.config.stroke.curve;
				Array.isArray(gl) && (gl = Array.isArray(Xc) ? gl[Xc[Hc]] : gl[Hc]);
				for (var _l, vl = 0, yl = 0; yl < zc && Rc[Hc].length !== 0; yl++) {
					var bl = Rc[Hc][yl + 1] === void 0 || Rc[Hc][yl + 1] === null;
					if (il.globals.isXNumeric) {
						var xl = il.globals.seriesX[Bc][yl + 1];
						il.globals.seriesX[Bc][yl + 1] === void 0 && (xl = il.globals.seriesX[Bc][zc - 1]), Uc = (xl - il.globals.minX) / this.xRatio;
					} else Uc += this.xDivision;
					Zc = hl && Hc > 0 && il.globals.collapsedSeries.length < il.config.series.length - 1 ? this.prevSeriesY[function(io) {
						for (var Pc = io; Pc > 0; Pc--) {
							if (!(il.globals.collapsedSeriesIndices.indexOf((Xc == null ? void 0 : Xc[Pc]) || Pc) > -1)) return Pc;
							Pc--;
						}
						return 0;
					}(Hc - 1)][yl + 1] : this.zeroY, bl ? Wc = pl(fl, Zc) : (Wc = pl(Rc[Hc][yl + 1], Zc), Lc === "rangeArea" && (ml = pl(rl[Hc][yl + 1], Zc))), Qc.push(Rc[Hc][yl + 1] === null ? null : Uc), !bl || il.config.stroke.curve !== "smooth" && il.config.stroke.curve !== "monotoneCubic" ? (el.push(Wc), tl.push(ml)) : (el.push(null), tl.push(null));
					var Sl = this.lineHelpers.calculatePoints({
						series: Rc,
						x: Uc,
						y: Wc,
						realIndex: Bc,
						i: Hc,
						j: yl,
						prevY: sl
					}), Cl = this._createPaths({
						type: Lc,
						series: Rc,
						i: Hc,
						realIndex: Bc,
						j: yl,
						x: Uc,
						y: Wc,
						y2: ml,
						xArrj: Qc,
						yArrj: el,
						y2Arrj: tl,
						pX: Gc,
						pY: Kc,
						pathState: vl,
						segmentStartX: _l,
						linePath: cl,
						areaPath: ll,
						linePaths: Jc,
						areaPaths: Yc,
						curve: gl,
						isRangeStart: nl
					});
					Yc = Cl.areaPaths, Jc = Cl.linePaths, Gc = Cl.pX, Kc = Cl.pY, vl = Cl.pathState, _l = Cl.segmentStartX, ll = Cl.areaPath, cl = Cl.linePath, !this.appendPathFrom || il.globals.hasNullValues || gl === "monotoneCubic" && Lc === "rangeArea" || (ul += al.line(Uc, this.areaBottomY), dl += al.line(Uc, this.areaBottomY)), this.handleNullDataPoints(Rc, Sl, Hc, yl, Bc), this._handleMarkersAndLabels({
						type: Lc,
						pointsPos: Sl,
						i: Hc,
						j: yl,
						realIndex: Bc,
						isRangeStart: nl
					});
				}
				return {
					yArrj: el,
					xArrj: Qc,
					pathFromArea: dl,
					areaPaths: Yc,
					pathFromLine: ul,
					linePaths: Jc,
					linePath: cl,
					areaPath: ll
				};
			}
		},
		{
			key: "_handleMarkersAndLabels",
			value: function(io) {
				var Pc = io.type, Fc = io.pointsPos, Ic = io.isRangeStart, Lc = io.i, Rc = io.j, zc = io.realIndex, Bc = this.w, Vc = new qi(this.ctx);
				if (this.pointsChart) this.scatter.draw(this.elSeries, Rc, {
					realIndex: zc,
					pointsPos: Fc,
					zRatio: this.zRatio,
					elParent: this.elPointsMain
				});
				else {
					Bc.globals.series[Lc].length > 1 && this.elPointsMain.node.classList.add("apexcharts-element-hidden");
					var Hc = this.markers.plotChartMarkers({
						pointsPos: Fc,
						seriesIndex: zc,
						j: Rc + 1
					});
					Hc !== null && this.elPointsMain.add(Hc);
				}
				var Uc = Vc.drawDataLabel({
					type: Pc,
					isRangeStart: Ic,
					pos: Fc,
					i: zc,
					j: Rc + 1
				});
				Uc !== null && this.elDataLabelsWrap.add(Uc);
			}
		},
		{
			key: "_createPaths",
			value: function(io) {
				var Pc = io.type, Fc = io.series, Ic = io.i;
				io.realIndex;
				var Lc, Rc = io.j, zc = io.x, Bc = io.y, Vc = io.xArrj, Hc = io.yArrj, Uc = io.y2, Wc = io.y2Arrj, Gc = io.pX, Kc = io.pY, qc = io.pathState, Jc = io.segmentStartX, Yc = io.linePath, Xc = io.areaPath, Zc = io.linePaths, Qc = io.areaPaths, $c = io.curve, el = io.isRangeStart, tl = new Mi(this.ctx), nl = this.areaBottomY, rl = Pc === "rangeArea", il = Pc === "rangeArea" && el;
				switch ($c) {
					case "monotoneCubic":
						var al = el ? Hc : Wc;
						switch (qc) {
							case 0:
								if (al[Rc + 1] === null) break;
								qc = 1;
							case 1: if (!(rl ? Vc.length === Fc[Ic].length : Rc === Fc[Ic].length - 2)) break;
							case 2:
								var ol = el ? Vc : Vc.slice().reverse(), sl = el ? al : al.slice().reverse(), cl = (Lc = sl, ol.map((function(io, Pc) {
									return [io, Lc[Pc]];
								})).filter((function(io) {
									return io[1] !== null;
								}))), ll = cl.length > 1 ? _a(cl) : cl, ul = [];
								rl && (il ? Qc = cl : ul = Qc.reverse());
								var dl = 0, fl = 0;
								if (function(io, Pc) {
									for (var Fc = function(io) {
										var Pc = [], Fc = 0;
										return io.forEach((function(io) {
											io === null ? Fc > 0 && (Pc.push(Fc), Fc = 0) : Fc++;
										})), Fc > 0 && Pc.push(Fc), Pc;
									}(io), Ic = [], Lc = 0, Rc = 0; Lc < Fc.length; Rc += Fc[Lc++]) Ic[Lc] = Na(Pc, Rc, Rc + Fc[Lc]);
									return Ic;
								}(sl, ll).forEach((function(io) {
									dl++;
									var Pc = function(io) {
										for (var Pc = "", Fc = 0; Fc < io.length; Fc++) {
											var Ic = io[Fc], Lc = Ic.length;
											Lc > 4 ? (Pc += `C${Ic[0]}, ${Ic[1]}`, Pc += `, ${Ic[2]}, ${Ic[3]}`, Pc += `, ${Ic[4]}, ${Ic[5]}`) : Lc > 2 && (Pc += `S${Ic[0]}, ${Ic[1]}`, Pc += `, ${Ic[2]}, ${Ic[3]}`);
										}
										return Pc;
									}(io), Fc = fl, Ic = (fl += io.length) - 1;
									il ? Yc = tl.move(cl[Fc][0], cl[Fc][1]) + Pc : rl ? Yc = tl.move(ul[Fc][0], ul[Fc][1]) + tl.line(cl[Fc][0], cl[Fc][1]) + Pc + tl.line(ul[Ic][0], ul[Ic][1]) : (Yc = tl.move(cl[Fc][0], cl[Fc][1]) + Pc, Xc = Yc + tl.line(cl[Ic][0], nl) + tl.line(cl[Fc][0], nl) + "z", Qc.push(Xc)), Zc.push(Yc);
								})), rl && dl > 1 && !il) {
									var pl = Zc.slice(dl).reverse();
									Zc.splice(dl), pl.forEach((function(io) {
										return Zc.push(io);
									}));
								}
								qc = 0;
						}
						break;
					case "smooth":
						var ml = .35 * (zc - Gc);
						if (Fc[Ic][Rc] === null) qc = 0;
						else switch (qc) {
							case 0:
								if (Jc = Gc, Yc = il ? tl.move(Gc, Wc[Rc]) + tl.line(Gc, Kc) : tl.move(Gc, Kc), Xc = tl.move(Gc, Kc), Fc[Ic][Rc + 1] === null || Fc[Ic][Rc + 1] === void 0) {
									Zc.push(Yc), Qc.push(Xc);
									break;
								}
								if (qc = 1, Rc < Fc[Ic].length - 2) {
									var hl = tl.curve(Gc + ml, Kc, zc - ml, Bc, zc, Bc);
									Yc += hl, Xc += hl;
									break;
								}
							case 1: if (Fc[Ic][Rc + 1] === null) Yc += il ? tl.line(Gc, Uc) : tl.move(Gc, Kc), Xc += tl.line(Gc, nl) + tl.line(Jc, nl) + "z", Zc.push(Yc), Qc.push(Xc), qc = -1;
							else {
								var gl = tl.curve(Gc + ml, Kc, zc - ml, Bc, zc, Bc);
								Yc += gl, Xc += gl, Rc >= Fc[Ic].length - 2 && (il && (Yc += tl.curve(zc, Bc, zc, Bc, zc, Uc) + tl.move(zc, Uc)), Xc += tl.curve(zc, Bc, zc, Bc, zc, nl) + tl.line(Jc, nl) + "z", Zc.push(Yc), Qc.push(Xc), qc = -1);
							}
						}
						Gc = zc, Kc = Bc;
						break;
					default:
						var _l = function(io, Pc, Fc) {
							var Ic = [];
							switch (io) {
								case "stepline":
									Ic = tl.line(Pc, null, "H") + tl.line(null, Fc, "V");
									break;
								case "linestep":
									Ic = tl.line(null, Fc, "V") + tl.line(Pc, null, "H");
									break;
								case "straight": Ic = tl.line(Pc, Fc);
							}
							return Ic;
						};
						if (Fc[Ic][Rc] === null) qc = 0;
						else switch (qc) {
							case 0:
								if (Jc = Gc, Yc = il ? tl.move(Gc, Wc[Rc]) + tl.line(Gc, Kc) : tl.move(Gc, Kc), Xc = tl.move(Gc, Kc), Fc[Ic][Rc + 1] === null || Fc[Ic][Rc + 1] === void 0) {
									Zc.push(Yc), Qc.push(Xc);
									break;
								}
								if (qc = 1, Rc < Fc[Ic].length - 2) {
									var vl = _l($c, zc, Bc);
									Yc += vl, Xc += vl;
									break;
								}
							case 1: if (Fc[Ic][Rc + 1] === null) Yc += il ? tl.line(Gc, Uc) : tl.move(Gc, Kc), Xc += tl.line(Gc, nl) + tl.line(Jc, nl) + "z", Zc.push(Yc), Qc.push(Xc), qc = -1;
							else {
								var yl = _l($c, zc, Bc);
								Yc += yl, Xc += yl, Rc >= Fc[Ic].length - 2 && (il && (Yc += tl.line(zc, Uc)), Xc += tl.line(zc, nl) + tl.line(Jc, nl) + "z", Zc.push(Yc), Qc.push(Xc), qc = -1);
							}
						}
						Gc = zc, Kc = Bc;
				}
				return {
					linePaths: Zc,
					areaPaths: Qc,
					pX: Gc,
					pY: Kc,
					pathState: qc,
					segmentStartX: Jc,
					linePath: Yc,
					areaPath: Xc
				};
			}
		},
		{
			key: "handleNullDataPoints",
			value: function(io, Pc, Fc, Ic, Lc) {
				var Rc = this.w;
				if (io[Fc][Ic] === null && Rc.config.markers.showNullDataPoints || io[Fc].length === 1) {
					var zc = this.strokeWidth - Rc.config.markers.strokeWidth / 2;
					zc > 0 || (zc = 0);
					var Bc = this.markers.plotChartMarkers({
						pointsPos: Pc,
						seriesIndex: Lc,
						j: Ic + 1,
						pSize: zc,
						alwaysDrawMarker: !0
					});
					Bc !== null && this.elPointsMain.add(Bc);
				}
			}
		}
	]), io;
}();
window.TreemapSquared = {}, window.TreemapSquared.generate = function() {
	function io(Pc, Fc, Ic, Lc) {
		this.xoffset = Pc, this.yoffset = Fc, this.height = Lc, this.width = Ic, this.shortestEdge = function() {
			return Math.min(this.height, this.width);
		}, this.getCoordinates = function(io) {
			var Pc, Fc = [], Ic = this.xoffset, Lc = this.yoffset, zc = Rc(io) / this.height, Bc = Rc(io) / this.width;
			if (this.width >= this.height) for (Pc = 0; Pc < io.length; Pc++) Fc.push([
				Ic,
				Lc,
				Ic + zc,
				Lc + io[Pc] / zc
			]), Lc += io[Pc] / zc;
			else for (Pc = 0; Pc < io.length; Pc++) Fc.push([
				Ic,
				Lc,
				Ic + io[Pc] / Bc,
				Lc + Bc
			]), Ic += io[Pc] / Bc;
			return Fc;
		}, this.cutArea = function(Pc) {
			var Fc;
			if (this.width >= this.height) {
				var Ic = Pc / this.height, Lc = this.width - Ic;
				Fc = new io(this.xoffset + Ic, this.yoffset, Lc, this.height);
			} else {
				var Rc = Pc / this.width, zc = this.height - Rc;
				Fc = new io(this.xoffset, this.yoffset + Rc, this.width, zc);
			}
			return Fc;
		};
	}
	function Pc(Pc, Ic, Lc, zc, Bc) {
		return zc = zc === void 0 ? 0 : zc, Bc = Bc === void 0 ? 0 : Bc, function(io) {
			var Pc, Fc, Ic = [];
			for (Pc = 0; Pc < io.length; Pc++) for (Fc = 0; Fc < io[Pc].length; Fc++) Ic.push(io[Pc][Fc]);
			return Ic;
		}(Fc(function(io, Pc) {
			var Fc, Ic = [], Lc = Pc / Rc(io);
			for (Fc = 0; Fc < io.length; Fc++) Ic[Fc] = io[Fc] * Lc;
			return Ic;
		}(Pc, Ic * Lc), [], new io(zc, Bc, Ic, Lc), []));
	}
	function Fc(io, Pc, Lc, zc) {
		var Bc, Vc, Hc;
		if (io.length !== 0) return Bc = Lc.shortestEdge(), function(io, Pc, Fc) {
			var Lc;
			return io.length === 0 ? !0 : ((Lc = io.slice()).push(Pc), Ic(io, Fc) >= Ic(Lc, Fc));
		}(Pc, Vc = io[0], Bc) ? (Pc.push(Vc), Fc(io.slice(1), Pc, Lc, zc)) : (Hc = Lc.cutArea(Rc(Pc), zc), zc.push(Lc.getCoordinates(Pc)), Fc(io, [], Hc, zc)), zc;
		zc.push(Lc.getCoordinates(Pc));
	}
	function Ic(io, Pc) {
		var Fc = Math.min.apply(Math, io), Ic = Math.max.apply(Math, io), Lc = Rc(io);
		return Math.max(Math.pow(Pc, 2) * Ic / Math.pow(Lc, 2), Math.pow(Lc, 2) / (Math.pow(Pc, 2) * Fc));
	}
	function Lc(io) {
		return io && io.constructor === Array;
	}
	function Rc(io) {
		var Pc, Fc = 0;
		for (Pc = 0; Pc < io.length; Pc++) Fc += io[Pc];
		return Fc;
	}
	function zc(io) {
		var Pc, Fc = 0;
		if (Lc(io[0])) for (Pc = 0; Pc < io.length; Pc++) Fc += zc(io[Pc]);
		else Fc = Rc(io);
		return Fc;
	}
	return function io(Fc, Ic, Rc, Bc, Vc) {
		Bc = Bc === void 0 ? 0 : Bc, Vc = Vc === void 0 ? 0 : Vc;
		var Hc, Uc, Wc = [], Gc = [];
		if (Lc(Fc[0])) {
			for (Uc = 0; Uc < Fc.length; Uc++) Wc[Uc] = zc(Fc[Uc]);
			for (Hc = Pc(Wc, Ic, Rc, Bc, Vc), Uc = 0; Uc < Fc.length; Uc++) Gc.push(io(Fc[Uc], Hc[Uc][2] - Hc[Uc][0], Hc[Uc][3] - Hc[Uc][1], Hc[Uc][0], Hc[Uc][1]));
		} else Gc = Pc(Fc, Ic, Rc, Bc, Vc);
		return Gc;
	};
}();
var Ga = function() {
	function io(Pc, Fc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w, this.strokeWidth = this.w.config.stroke.width, this.helpers = new za(Pc), this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.labels = [];
	}
	return s(io, [
		{
			key: "draw",
			value: function(io) {
				var Pc = this, Fc = this.w, Ic = new Mi(this.ctx), Lc = new ji(this.ctx), Rc = Ic.group({ class: "apexcharts-treemap" });
				if (Fc.globals.noData) return Rc;
				var zc = [];
				return io.forEach((function(io) {
					var Pc = io.map((function(io) {
						return Math.abs(io);
					}));
					zc.push(Pc);
				})), this.negRange = this.helpers.checkColorRange(), Fc.config.series.forEach((function(io, Fc) {
					io.data.forEach((function(io) {
						Array.isArray(Pc.labels[Fc]) || (Pc.labels[Fc] = []), Pc.labels[Fc].push(io.x);
					}));
				})), window.TreemapSquared.generate(zc, Fc.globals.gridWidth, Fc.globals.gridHeight).forEach((function(zc, Bc) {
					var Vc = Ic.group({
						class: "apexcharts-series apexcharts-treemap-series",
						seriesName: v.escapeString(Fc.globals.seriesNames[Bc]),
						rel: Bc + 1,
						"data:realIndex": Bc
					});
					if (Fc.config.chart.dropShadow.enabled) {
						var Hc = Fc.config.chart.dropShadow;
						new Li(Pc.ctx).dropShadow(Rc, Hc, Bc);
					}
					var Uc = Ic.group({ class: "apexcharts-data-labels" }), Wc = {
						xMin: Infinity,
						yMin: Infinity,
						xMax: -Infinity,
						yMax: -Infinity
					};
					zc.forEach((function(Rc, zc) {
						var Hc = Rc[0], Uc = Rc[1], Gc = Rc[2], Kc = Rc[3];
						Wc.xMin = Math.min(Wc.xMin, Hc), Wc.yMin = Math.min(Wc.yMin, Uc), Wc.xMax = Math.max(Wc.xMax, Gc), Wc.yMax = Math.max(Wc.yMax, Kc);
						var qc = Pc.helpers.getShadeColor(Fc.config.chart.type, Bc, zc, Pc.negRange), Jc = qc.color, Yc = Lc.fillPath({
							color: Jc,
							seriesNumber: Bc,
							dataPointIndex: zc
						}), Xc = Ic.drawRect(Hc, Uc, Gc - Hc, Kc - Uc, Fc.config.plotOptions.treemap.borderRadius, "#fff", 1, Pc.strokeWidth, Fc.config.plotOptions.treemap.useFillColorAsStroke ? Jc : Fc.globals.stroke.colors[Bc]);
						Xc.attr({
							cx: Hc,
							cy: Uc,
							index: Bc,
							i: Bc,
							j: zc,
							width: Gc - Hc,
							height: Kc - Uc,
							fill: Yc
						}), Xc.node.classList.add("apexcharts-treemap-rect"), Pc.helpers.addListeners(Xc);
						var Zc = {
							x: Hc + (Gc - Hc) / 2,
							y: Uc + (Kc - Uc) / 2,
							width: 0,
							height: 0
						}, Qc = {
							x: Hc,
							y: Uc,
							width: Gc - Hc,
							height: Kc - Uc
						};
						if (Fc.config.chart.animations.enabled && !Fc.globals.dataChanged) {
							var $c = 1;
							Fc.globals.resized || ($c = Fc.config.chart.animations.speed), Pc.animateTreemap(Xc, Zc, Qc, $c);
						}
						if (Fc.globals.dataChanged) {
							var el = 1;
							Pc.dynamicAnim.enabled && Fc.globals.shouldAnimate && (el = Pc.dynamicAnim.speed, Fc.globals.previousPaths[Bc] && Fc.globals.previousPaths[Bc][zc] && Fc.globals.previousPaths[Bc][zc].rect && (Zc = Fc.globals.previousPaths[Bc][zc].rect), Pc.animateTreemap(Xc, Zc, Qc, el));
						}
						var tl = Pc.getFontSize(Rc), nl = Fc.config.dataLabels.formatter(Pc.labels[Bc][zc], {
							value: Fc.globals.series[Bc][zc],
							seriesIndex: Bc,
							dataPointIndex: zc,
							w: Fc
						});
						Fc.config.plotOptions.treemap.dataLabels.format === "truncate" && (tl = parseInt(Fc.config.dataLabels.style.fontSize, 10), nl = Pc.truncateLabels(nl, tl, Hc, Uc, Gc, Kc));
						var rl = null;
						Fc.globals.series[Bc][zc] && (rl = Pc.helpers.calculateDataLabels({
							text: nl,
							x: (Hc + Gc) / 2,
							y: (Uc + Kc) / 2 + Pc.strokeWidth / 2 + tl / 3,
							i: Bc,
							j: zc,
							colorProps: qc,
							fontSize: tl,
							series: io
						})), Fc.config.dataLabels.enabled && rl && Pc.rotateToFitLabel(rl, tl, nl, Hc, Uc, Gc, Kc), Vc.add(Xc), rl !== null && Vc.add(rl);
					}));
					var Gc = Fc.config.plotOptions.treemap.seriesTitle;
					if (Fc.config.series.length > 1 && Gc && Gc.show) {
						var Kc = Fc.config.series[Bc].name || "";
						if (Kc && Wc.xMin < Infinity && Wc.yMin < Infinity) {
							var qc = Gc.offsetX, Jc = Gc.offsetY, Yc = Gc.borderColor, Xc = Gc.borderWidth, Zc = Gc.borderRadius, Qc = Gc.style, el = Qc.color || Fc.config.chart.foreColor, tl = {
								left: Qc.padding.left,
								right: Qc.padding.right,
								top: Qc.padding.top,
								bottom: Qc.padding.bottom
							}, nl = Ic.getTextRects(Kc, Qc.fontSize, Qc.fontFamily), rl = nl.width + tl.left + tl.right, il = nl.height + tl.top + tl.bottom, al = Wc.xMin + (qc || 0), ol = Wc.yMin + (Jc || 0), sl = Ic.drawRect(al, ol, rl, il, Zc, Qc.background, 1, Xc, Yc), cl = Ic.drawText({
								x: al + tl.left,
								y: ol + tl.top + .75 * nl.height,
								text: Kc,
								fontSize: Qc.fontSize,
								fontFamily: Qc.fontFamily,
								fontWeight: Qc.fontWeight,
								foreColor: el,
								cssClass: Qc.cssClass || ""
							});
							Vc.add(sl), Vc.add(cl);
						}
					}
					Vc.add(Uc), Rc.add(Vc);
				})), Rc;
			}
		},
		{
			key: "getFontSize",
			value: function(io) {
				var Pc = this.w, Fc = function io(Pc) {
					var Fc, Ic = 0;
					if (Array.isArray(Pc[0])) for (Fc = 0; Fc < Pc.length; Fc++) Ic += io(Pc[Fc]);
					else for (Fc = 0; Fc < Pc.length; Fc++) Ic += Pc[Fc].length;
					return Ic;
				}(this.labels) / function io(Pc) {
					var Fc, Ic = 0;
					if (Array.isArray(Pc[0])) for (Fc = 0; Fc < Pc.length; Fc++) Ic += io(Pc[Fc]);
					else for (Fc = 0; Fc < Pc.length; Fc++) Ic += 1;
					return Ic;
				}(this.labels);
				return function(io, Ic) {
					var Lc = io * Ic, Rc = Math.pow(Lc, .5);
					return Math.min(Rc / Fc, parseInt(Pc.config.dataLabels.style.fontSize, 10));
				}(io[2] - io[0], io[3] - io[1]);
			}
		},
		{
			key: "rotateToFitLabel",
			value: function(io, Pc, Fc, Ic, Lc, Rc, zc) {
				var Bc = new Mi(this.ctx), Vc = Bc.getTextRects(Fc, Pc);
				if (Vc.width + this.w.config.stroke.width + 5 > Rc - Ic && Vc.width <= zc - Lc) {
					var Hc = Bc.rotateAroundCenter(io.node);
					io.node.setAttribute("transform", `rotate(-90 ${Hc.x} ${Hc.y}) translate(${Vc.height / 3})`);
				}
			}
		},
		{
			key: "truncateLabels",
			value: function(io, Pc, Fc, Ic, Lc, Rc) {
				var zc = new Mi(this.ctx), Bc = zc.getTextRects(io, Pc).width + this.w.config.stroke.width + 5 > Lc - Fc && Rc - Ic > Lc - Fc ? Rc - Ic : Lc - Fc, Vc = zc.getTextBasedOnMaxWidth({
					text: io,
					maxWidth: Bc,
					fontSize: Pc
				});
				return io.length !== Vc.length && Bc / Pc < 5 ? "" : Vc;
			}
		},
		{
			key: "animateTreemap",
			value: function(io, Pc, Fc, Ic) {
				var Lc = new y(this.ctx);
				Lc.animateRect(io, Pc, Fc, Ic, (function() {
					Lc.animationCompleted(io);
				}));
			}
		}
	]), io;
}(), ja = 86400, Va = 10 / ja, Ua = function() {
	function io(Pc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w, this.timeScaleArray = [], this.utc = this.w.config.xaxis.labels.datetimeUTC;
	}
	return s(io, [
		{
			key: "calculateTimeScaleTicks",
			value: function(io, Pc) {
				var Fc = this, Ic = this.w;
				if (Ic.globals.allSeriesCollapsed) return Ic.globals.labels = [], Ic.globals.timescaleLabels = [], [];
				var Lc = new zi(this.ctx), Rc = (Pc - io) / 864e5;
				this.determineInterval(Rc), Ic.globals.disableZoomIn = !1, Ic.globals.disableZoomOut = !1, Rc < Va ? Ic.globals.disableZoomIn = !0 : Rc > 5e4 && (Ic.globals.disableZoomOut = !0);
				var zc = Lc.getTimeUnitsfromTimestamp(io, Pc, this.utc), Bc = Ic.globals.gridWidth / Rc, Vc = Bc / 24, Hc = Vc / 60, Uc = Hc / 60, Wc = Math.floor(24 * Rc), Gc = Math.floor(1440 * Rc), qc = Math.floor(Rc * ja), Jc = Math.floor(Rc), Yc = Math.floor(Rc / 30), Xc = Math.floor(Rc / 365), Zc = {
					minMillisecond: zc.minMillisecond,
					minSecond: zc.minSecond,
					minMinute: zc.minMinute,
					minHour: zc.minHour,
					minDate: zc.minDate,
					minMonth: zc.minMonth,
					minYear: zc.minYear
				}, Qc = {
					firstVal: Zc,
					currentMillisecond: Zc.minMillisecond,
					currentSecond: Zc.minSecond,
					currentMinute: Zc.minMinute,
					currentHour: Zc.minHour,
					currentMonthDate: Zc.minDate,
					currentDate: Zc.minDate,
					currentMonth: Zc.minMonth,
					currentYear: Zc.minYear,
					daysWidthOnXAxis: Bc,
					hoursWidthOnXAxis: Vc,
					minutesWidthOnXAxis: Hc,
					secondsWidthOnXAxis: Uc,
					numberOfSeconds: qc,
					numberOfMinutes: Gc,
					numberOfHours: Wc,
					numberOfDays: Jc,
					numberOfMonths: Yc,
					numberOfYears: Xc
				};
				switch (this.tickInterval) {
					case "years":
						this.generateYearScale(Qc);
						break;
					case "months":
					case "half_year":
						this.generateMonthScale(Qc);
						break;
					case "months_days":
					case "months_fortnight":
					case "days":
					case "week_days":
						this.generateDayScale(Qc);
						break;
					case "hours":
						this.generateHourScale(Qc);
						break;
					case "minutes_fives":
					case "minutes":
						this.generateMinuteScale(Qc);
						break;
					case "seconds_tens":
					case "seconds_fives":
					case "seconds": this.generateSecondScale(Qc);
				}
				var $c = this.timeScaleArray.map((function(io) {
					var Pc = {
						position: io.position,
						unit: io.unit,
						year: io.year,
						day: io.day ? io.day : 1,
						hour: io.hour ? io.hour : 0,
						month: io.month + 1
					};
					return io.unit === "month" ? u(u({}, Pc), {}, {
						day: 1,
						value: io.value + 1
					}) : io.unit === "day" || io.unit === "hour" ? u(u({}, Pc), {}, { value: io.value }) : io.unit === "minute" ? u(u({}, Pc), {}, {
						value: io.value,
						minute: io.value
					}) : io.unit === "second" ? u(u({}, Pc), {}, {
						value: io.value,
						minute: io.minute,
						second: io.second
					}) : io;
				}));
				return $c.filter((function(io) {
					var Pc = 1, Lc = Math.ceil(Ic.globals.gridWidth / 120), Rc = io.value;
					Ic.config.xaxis.tickAmount !== void 0 && (Lc = Ic.config.xaxis.tickAmount), $c.length > Lc && (Pc = Math.floor($c.length / Lc));
					var zc = !1, Bc = !1;
					switch (Fc.tickInterval) {
						case "years":
							io.unit === "year" && (zc = !0);
							break;
						case "half_year":
							Pc = 7, io.unit === "year" && (zc = !0);
							break;
						case "months":
							Pc = 1, io.unit === "year" && (zc = !0);
							break;
						case "months_fortnight":
							Pc = 15, io.unit !== "year" && io.unit !== "month" || (zc = !0), Rc === 30 && (Bc = !0);
							break;
						case "months_days":
							Pc = 10, io.unit === "month" && (zc = !0), Rc === 30 && (Bc = !0);
							break;
						case "week_days":
							Pc = 8, io.unit === "month" && (zc = !0);
							break;
						case "days":
							Pc = 1, io.unit === "month" && (zc = !0);
							break;
						case "hours":
							io.unit === "day" && (zc = !0);
							break;
						case "minutes_fives":
						case "seconds_fives":
							Rc % 5 != 0 && (Bc = !0);
							break;
						case "seconds_tens": Rc % 10 != 0 && (Bc = !0);
					}
					if (Fc.tickInterval === "hours" || Fc.tickInterval === "minutes_fives" || Fc.tickInterval === "seconds_tens" || Fc.tickInterval === "seconds_fives") {
						if (!Bc) return !0;
					} else if ((Rc % Pc == 0 || zc) && !Bc) return !0;
				}));
			}
		},
		{
			key: "recalcDimensionsBasedOnFormat",
			value: function(io, Pc) {
				var Fc = this.w, Ic = this.formatDates(io), Lc = this.removeOverlappingTS(Ic);
				Fc.globals.timescaleLabels = Lc.slice(), new pa(this.ctx).plotCoords();
			}
		},
		{
			key: "determineInterval",
			value: function(io) {
				var Pc = 24 * io, Fc = 60 * Pc;
				switch (!0) {
					case io / 365 > 5:
						this.tickInterval = "years";
						break;
					case io > 800:
						this.tickInterval = "half_year";
						break;
					case io > 180:
						this.tickInterval = "months";
						break;
					case io > 90:
						this.tickInterval = "months_fortnight";
						break;
					case io > 60:
						this.tickInterval = "months_days";
						break;
					case io > 30:
						this.tickInterval = "week_days";
						break;
					case io > 2:
						this.tickInterval = "days";
						break;
					case Pc > 2.4:
						this.tickInterval = "hours";
						break;
					case Fc > 15:
						this.tickInterval = "minutes_fives";
						break;
					case Fc > 5:
						this.tickInterval = "minutes";
						break;
					case Fc > 1:
						this.tickInterval = "seconds_tens";
						break;
					case 60 * Fc > 20:
						this.tickInterval = "seconds_fives";
						break;
					default: this.tickInterval = "seconds";
				}
			}
		},
		{
			key: "generateYearScale",
			value: function(io) {
				var Pc = io.firstVal, Fc = io.currentMonth, Ic = io.currentYear, Lc = io.daysWidthOnXAxis, Rc = io.numberOfYears, zc = Pc.minYear, Bc = 0, Vc = new zi(this.ctx), Hc = "year";
				if (Pc.minDate > 1 || Pc.minMonth > 0) {
					var Uc = Vc.determineRemainingDaysOfYear(Pc.minYear, Pc.minMonth, Pc.minDate);
					Bc = (Vc.determineDaysOfYear(Pc.minYear) - Uc + 1) * Lc, zc = Pc.minYear + 1, this.timeScaleArray.push({
						position: Bc,
						value: zc,
						unit: Hc,
						year: zc,
						month: v.monthMod(Fc + 1)
					});
				} else Pc.minDate === 1 && Pc.minMonth === 0 && this.timeScaleArray.push({
					position: Bc,
					value: zc,
					unit: Hc,
					year: Ic,
					month: v.monthMod(Fc + 1)
				});
				for (var Wc = zc, Gc = Bc, Kc = 0; Kc < Rc; Kc++) Wc++, Gc = Vc.determineDaysOfYear(Wc - 1) * Lc + Gc, this.timeScaleArray.push({
					position: Gc,
					value: Wc,
					unit: Hc,
					year: Wc,
					month: 1
				});
			}
		},
		{
			key: "generateMonthScale",
			value: function(io) {
				var Pc = io.firstVal, Fc = io.currentMonthDate, Ic = io.currentMonth, Lc = io.currentYear, Rc = io.daysWidthOnXAxis, zc = io.numberOfMonths, Bc = Ic, Vc = 0, Hc = new zi(this.ctx), Uc = "month", Wc = 0;
				if (Pc.minDate > 1) {
					Vc = (Hc.determineDaysOfMonths(Ic + 1, Pc.minYear) - Fc + 1) * Rc, Bc = v.monthMod(Ic + 1);
					var Gc = Lc + Wc, Kc = v.monthMod(Bc), qc = Bc;
					Bc === 0 && (Uc = "year", qc = Gc, Kc = 1, Gc += Wc += 1), this.timeScaleArray.push({
						position: Vc,
						value: qc,
						unit: Uc,
						year: Gc,
						month: Kc
					});
				} else this.timeScaleArray.push({
					position: Vc,
					value: Bc,
					unit: Uc,
					year: Lc,
					month: v.monthMod(Ic)
				});
				for (var Jc = Bc + 1, Yc = Vc, Xc = 0, Zc = 1; Xc < zc; Xc++, Zc++) {
					(Jc = v.monthMod(Jc)) === 0 ? (Uc = "year", Wc += 1) : Uc = "month";
					var Qc = this._getYear(Lc, Jc, Wc);
					Yc = Hc.determineDaysOfMonths(Jc, Qc) * Rc + Yc;
					var el = Jc === 0 ? Qc : Jc;
					this.timeScaleArray.push({
						position: Yc,
						value: el,
						unit: Uc,
						year: Qc,
						month: Jc === 0 ? 1 : Jc
					}), Jc++;
				}
			}
		},
		{
			key: "generateDayScale",
			value: function(io) {
				var Pc = io.firstVal, Fc = io.currentMonth, Ic = io.currentYear, Lc = io.hoursWidthOnXAxis, Rc = io.numberOfDays, zc = new zi(this.ctx), Bc = "day", Vc = Pc.minDate + 1, Hc = Vc, Uc = function(io, Pc, Fc) {
					return io > zc.determineDaysOfMonths(Pc + 1, Fc) ? (Hc = 1, Bc = "month", Gc = Pc += 1, Pc) : Pc;
				}, Wc = (24 - Pc.minHour) * Lc, Gc = Vc, Kc = Uc(Hc, Fc, Ic);
				Pc.minHour === 0 && Pc.minDate === 1 ? (Wc = 0, Gc = v.monthMod(Pc.minMonth), Bc = "month", Hc = Pc.minDate) : Pc.minDate !== 1 && Pc.minHour === 0 && Pc.minMinute === 0 && (Wc = 0, Vc = Pc.minDate, Gc = Vc, Kc = Uc(Hc = Vc, Fc, Ic), Gc !== 1 && (Bc = "day")), this.timeScaleArray.push({
					position: Wc,
					value: Gc,
					unit: Bc,
					year: this._getYear(Ic, Kc, 0),
					month: v.monthMod(Kc),
					day: Hc
				});
				for (var qc = Wc, Jc = 0; Jc < Rc; Jc++) {
					Bc = "day", Kc = Uc(Hc += 1, Kc, this._getYear(Ic, Kc, 0));
					var Yc = this._getYear(Ic, Kc, 0);
					qc = 24 * Lc + qc;
					var Xc = Hc === 1 ? v.monthMod(Kc) : Hc;
					this.timeScaleArray.push({
						position: qc,
						value: Xc,
						unit: Bc,
						year: Yc,
						month: v.monthMod(Kc),
						day: Xc
					});
				}
			}
		},
		{
			key: "generateHourScale",
			value: function(io) {
				var Pc = io.firstVal, Fc = io.currentDate, Ic = io.currentMonth, Lc = io.currentYear, Rc = io.minutesWidthOnXAxis, zc = io.numberOfHours, Bc = new zi(this.ctx), Vc = "hour", Hc = function(io, Pc) {
					return io > Bc.determineDaysOfMonths(Pc + 1, Lc) && (Jc = 1, Pc += 1), {
						month: Pc,
						date: Jc
					};
				}, Uc = function(io, Pc) {
					return io > Bc.determineDaysOfMonths(Pc + 1, Lc) ? Pc += 1 : Pc;
				}, Wc = 60 - (Pc.minMinute + Pc.minSecond / 60), Gc = Wc * Rc, Kc = Pc.minHour + 1, qc = Kc;
				Wc === 60 && (Gc = 0, qc = Kc = Pc.minHour);
				var Jc = Fc;
				qc >= 24 && (qc = 0, Vc = "day", Kc = Jc += 1);
				var Yc = Hc(Jc, Ic).month;
				Yc = Uc(Jc, Yc), Kc > 31 && (Kc = Jc = 1), this.timeScaleArray.push({
					position: Gc,
					value: Kc,
					unit: Vc,
					day: Jc,
					hour: qc,
					year: Lc,
					month: v.monthMod(Yc)
				}), qc++;
				for (var Xc = Gc, Zc = 0; Zc < zc; Zc++) {
					Vc = "hour", qc >= 24 && (qc = 0, Vc = "day", Yc = Hc(Jc += 1, Yc).month, Yc = Uc(Jc, Yc));
					var Qc = this._getYear(Lc, Yc, 0);
					Xc = 60 * Rc + Xc;
					var el = qc === 0 ? Jc : qc;
					this.timeScaleArray.push({
						position: Xc,
						value: el,
						unit: Vc,
						hour: qc,
						day: Jc,
						year: Qc,
						month: v.monthMod(Yc)
					}), qc++;
				}
			}
		},
		{
			key: "generateMinuteScale",
			value: function(io) {
				for (var Pc = io.currentMillisecond, Fc = io.currentSecond, Ic = io.currentMinute, Lc = io.currentHour, Rc = io.currentDate, zc = io.currentMonth, Bc = io.currentYear, Vc = io.minutesWidthOnXAxis, Hc = io.secondsWidthOnXAxis, Uc = io.numberOfMinutes, Wc = Ic + 1, Gc = Rc, Kc = zc, qc = Bc, Jc = Lc, Yc = (60 - Fc - Pc / 1e3) * Hc, Xc = 0; Xc < Uc; Xc++) Wc >= 60 && (Wc = 0, (Jc += 1) === 24 && (Jc = 0)), this.timeScaleArray.push({
					position: Yc,
					value: Wc,
					unit: "minute",
					hour: Jc,
					minute: Wc,
					day: Gc,
					year: this._getYear(qc, Kc, 0),
					month: v.monthMod(Kc)
				}), Yc += Vc, Wc++;
			}
		},
		{
			key: "generateSecondScale",
			value: function(io) {
				for (var Pc = io.currentMillisecond, Fc = io.currentSecond, Ic = io.currentMinute, Lc = io.currentHour, Rc = io.currentDate, zc = io.currentMonth, Bc = io.currentYear, Vc = io.secondsWidthOnXAxis, Hc = io.numberOfSeconds, Uc = Fc + 1, Wc = Ic, Gc = Rc, Kc = zc, qc = Bc, Jc = Lc, Yc = (1e3 - Pc) / 1e3 * Vc, Xc = 0; Xc < Hc; Xc++) Uc >= 60 && (Uc = 0, ++Wc >= 60 && (Wc = 0, ++Jc === 24 && (Jc = 0))), this.timeScaleArray.push({
					position: Yc,
					value: Uc,
					unit: "second",
					hour: Jc,
					minute: Wc,
					second: Uc,
					day: Gc,
					year: this._getYear(qc, Kc, 0),
					month: v.monthMod(Kc)
				}), Yc += Vc, Uc++;
			}
		},
		{
			key: "createRawDateString",
			value: function(io, Pc) {
				var Fc = io.year;
				return io.month === 0 && (io.month = 1), Fc += "-" + ("0" + io.month.toString()).slice(-2), io.unit === "day" ? Fc += io.unit === "day" ? "-" + ("0" + Pc).slice(-2) : "-01" : Fc += "-" + ("0" + (io.day ? io.day : "1")).slice(-2), io.unit === "hour" ? Fc += io.unit === "hour" ? "T" + ("0" + Pc).slice(-2) : "T00" : Fc += "T" + ("0" + (io.hour ? io.hour : "0")).slice(-2), io.unit === "minute" ? Fc += ":" + ("0" + Pc).slice(-2) : Fc += ":" + (io.minute ? ("0" + io.minute).slice(-2) : "00"), io.unit === "second" ? Fc += ":" + ("0" + Pc).slice(-2) : Fc += ":00", this.utc && (Fc += ".000Z"), Fc;
			}
		},
		{
			key: "formatDates",
			value: function(io) {
				var Pc = this, Fc = this.w;
				return io.map((function(io) {
					var Ic = io.value.toString(), Lc = new zi(Pc.ctx), Rc = Pc.createRawDateString(io, Ic), zc = Lc.getDate(Lc.parseDate(Rc));
					if (Pc.utc || (zc = Lc.getDate(Lc.parseDateWithTimezone(Rc))), Fc.config.xaxis.labels.format === void 0) {
						var Bc = "dd MMM", Vc = Fc.config.xaxis.labels.datetimeFormatter;
						io.unit === "year" && (Bc = Vc.year), io.unit === "month" && (Bc = Vc.month), io.unit === "day" && (Bc = Vc.day), io.unit === "hour" && (Bc = Vc.hour), io.unit === "minute" && (Bc = Vc.minute), io.unit === "second" && (Bc = Vc.second), Ic = Lc.formatDate(zc, Bc);
					} else Ic = Lc.formatDate(zc, Fc.config.xaxis.labels.format);
					return {
						dateString: Rc,
						position: io.position,
						value: Ic,
						unit: io.unit,
						year: io.year,
						month: io.month
					};
				}));
			}
		},
		{
			key: "removeOverlappingTS",
			value: function(io) {
				var Pc, Fc = this, Ic = new Mi(this.ctx), Lc = !1;
				io.length > 0 && io[0].value && io.every((function(Pc) {
					return Pc.value.length === io[0].value.length;
				})) && (Lc = !0, Pc = Ic.getTextRects(io[0].value).width);
				var Rc = 0, zc = io.map((function(zc, Bc) {
					if (Bc > 0 && Fc.w.config.xaxis.labels.hideOverlappingLabels) {
						var Vc = Lc ? Pc : Ic.getTextRects(io[Rc].value).width, Hc = io[Rc].position;
						return zc.position > Hc + Vc + 10 ? (Rc = Bc, zc) : null;
					}
					return zc;
				}));
				return zc = zc.filter((function(io) {
					return io !== null;
				}));
			}
		},
		{
			key: "_getYear",
			value: function(io, Pc, Fc) {
				return io + Math.floor(Pc / 12) + Fc;
			}
		}
	]), io;
}(), qa = function() {
	function io(Pc, Fc) {
		i(this, io), this.ctx = Fc, this.w = Fc.w, this.el = Pc;
	}
	return s(io, [
		{
			key: "setupElements",
			value: function() {
				var io = this.w, Pc = io.globals, Fc = io.config, Ic = Fc.chart.type;
				Pc.axisCharts = [
					"line",
					"area",
					"bar",
					"rangeBar",
					"rangeArea",
					"candlestick",
					"boxPlot",
					"scatter",
					"bubble",
					"radar",
					"heatmap",
					"treemap"
				].includes(Ic), Pc.xyCharts = [
					"line",
					"area",
					"bar",
					"rangeBar",
					"rangeArea",
					"candlestick",
					"boxPlot",
					"scatter",
					"bubble"
				].includes(Ic), Pc.isBarHorizontal = [
					"bar",
					"rangeBar",
					"boxPlot"
				].includes(Ic) && Fc.plotOptions.bar.horizontal, Pc.chartClass = `.apexcharts${Pc.chartID}`, Pc.dom.baseEl = this.el, Pc.dom.elWrap = document.createElement("div"), Mi.setAttrs(Pc.dom.elWrap, {
					id: Pc.chartClass.substring(1),
					class: `apexcharts-canvas ${Pc.chartClass.substring(1)}`
				}), this.el.appendChild(Pc.dom.elWrap), Pc.dom.Paper = window.SVG().addTo(Pc.dom.elWrap), Pc.dom.Paper.attr({
					class: "apexcharts-svg",
					"xmlns:data": "ApexChartsNS",
					transform: `translate(${Fc.chart.offsetX}, ${Fc.chart.offsetY})`
				}), Pc.dom.Paper.node.style.background = Fc.theme.mode !== "dark" || Fc.chart.background ? Fc.theme.mode !== "light" || Fc.chart.background ? Fc.chart.background : "#fff" : "#343A3F", this.setSVGDimensions(), Pc.dom.elLegendForeign = document.createElementNS(Pc.SVGNS, "foreignObject"), Mi.setAttrs(Pc.dom.elLegendForeign, {
					x: 0,
					y: 0,
					width: Pc.svgWidth,
					height: Pc.svgHeight
				}), Pc.dom.elLegendWrap = document.createElement("div"), Pc.dom.elLegendWrap.classList.add("apexcharts-legend"), Pc.dom.elWrap.appendChild(Pc.dom.elLegendWrap), Pc.dom.Paper.node.appendChild(Pc.dom.elLegendForeign), Pc.dom.elGraphical = Pc.dom.Paper.group().attr({ class: "apexcharts-inner apexcharts-graphical" }), Pc.dom.elDefs = Pc.dom.Paper.defs(), Pc.dom.Paper.add(Pc.dom.elGraphical), Pc.dom.elGraphical.add(Pc.dom.elDefs);
			}
		},
		{
			key: "plotChartType",
			value: function(io, Pc) {
				var Fc = this.w, Ic = this.ctx, Lc = Fc.config, Rc = Fc.globals, zc = {
					line: {
						series: [],
						i: []
					},
					area: {
						series: [],
						i: []
					},
					scatter: {
						series: [],
						i: []
					},
					bubble: {
						series: [],
						i: []
					},
					bar: {
						series: [],
						i: []
					},
					candlestick: {
						series: [],
						i: []
					},
					boxPlot: {
						series: [],
						i: []
					},
					rangeBar: {
						series: [],
						i: []
					},
					rangeArea: {
						series: [],
						seriesRangeEnd: [],
						i: []
					}
				}, Bc = Lc.chart.type || "line", Vc = null, Hc = 0;
				Rc.series.forEach((function(Pc, Ic) {
					var Lc = io[Ic].type === "column" ? "bar" : io[Ic].type || (Bc === "column" ? "bar" : Bc);
					zc[Lc] ? (Lc === "rangeArea" ? (zc[Lc].series.push(Rc.seriesRangeStart[Ic]), zc[Lc].seriesRangeEnd.push(Rc.seriesRangeEnd[Ic])) : zc[Lc].series.push(Pc), zc[Lc].i.push(Ic), Lc === "bar" && (Fc.globals.columnSeries = zc.bar)) : [
						"heatmap",
						"treemap",
						"pie",
						"donut",
						"polarArea",
						"radialBar",
						"radar"
					].includes(Lc) ? Vc = Lc : console.warn(`You have specified an unrecognized series type (${Lc}).`), Bc !== Lc && Lc !== "scatter" && Hc++;
				})), Hc > 0 && (Vc && console.warn(`Chart or series type ${Vc} cannot appear with other chart or series types.`), zc.bar.series.length > 0 && Lc.plotOptions.bar.horizontal && (Hc -= zc.bar.series.length, zc.bar = {
					series: [],
					i: []
				}, Fc.globals.columnSeries = {
					series: [],
					i: []
				}, console.warn("Horizontal bars are not supported in a mixed/combo chart. Please turn off `plotOptions.bar.horizontal`"))), Rc.comboCharts || (Rc.comboCharts = Hc > 0);
				var Uc = new Ba(Ic, Pc), Wc = new Ta(Ic, Pc);
				Ic.pie = new Ea(Ic);
				var Gc = new Ha(Ic);
				Ic.rangeBar = new Oa(Ic, Pc);
				var Kc = new Ya(Ic), qc = [];
				if (Rc.comboCharts) {
					var Jc, Xc, Zc = new Pi(Ic);
					if (zc.area.series.length > 0 && (Jc = qc).push.apply(Jc, f(Zc.drawSeriesByGroup(zc.area, Rc.areaGroups, "area", Uc))), zc.bar.series.length > 0) if (Lc.chart.stacked) {
						var Qc = new Ia(Ic, Pc);
						qc.push(Qc.draw(zc.bar.series, zc.bar.i));
					} else Ic.bar = new Pa(Ic, Pc), qc.push(Ic.bar.draw(zc.bar.series, zc.bar.i));
					if (zc.rangeArea.series.length > 0 && qc.push(Uc.draw(zc.rangeArea.series, "rangeArea", zc.rangeArea.i, zc.rangeArea.seriesRangeEnd)), zc.line.series.length > 0 && (Xc = qc).push.apply(Xc, f(Zc.drawSeriesByGroup(zc.line, Rc.lineGroups, "line", Uc))), zc.candlestick.series.length > 0 && qc.push(Wc.draw(zc.candlestick.series, "candlestick", zc.candlestick.i)), zc.boxPlot.series.length > 0 && qc.push(Wc.draw(zc.boxPlot.series, "boxPlot", zc.boxPlot.i)), zc.rangeBar.series.length > 0 && qc.push(Ic.rangeBar.draw(zc.rangeBar.series, zc.rangeBar.i)), zc.scatter.series.length > 0) {
						var $c = new Ba(Ic, Pc, !0);
						qc.push($c.draw(zc.scatter.series, "scatter", zc.scatter.i));
					}
					if (zc.bubble.series.length > 0) {
						var el = new Ba(Ic, Pc, !0);
						qc.push(el.draw(zc.bubble.series, "bubble", zc.bubble.i));
					}
				} else switch (Lc.chart.type) {
					case "line":
						qc = Uc.draw(Rc.series, "line");
						break;
					case "area":
						qc = Uc.draw(Rc.series, "area");
						break;
					case "bar":
						Lc.chart.stacked ? qc = new Ia(Ic, Pc).draw(Rc.series) : (Ic.bar = new Pa(Ic, Pc), qc = Ic.bar.draw(Rc.series));
						break;
					case "candlestick":
						qc = new Ta(Ic, Pc).draw(Rc.series, "candlestick");
						break;
					case "boxPlot":
						qc = new Ta(Ic, Pc).draw(Rc.series, Lc.chart.type);
						break;
					case "rangeBar":
						qc = Ic.rangeBar.draw(Rc.series);
						break;
					case "rangeArea":
						qc = Uc.draw(Rc.seriesRangeStart, "rangeArea", void 0, Rc.seriesRangeEnd);
						break;
					case "heatmap":
						qc = new Xa(Ic, Pc).draw(Rc.series);
						break;
					case "treemap":
						qc = new Ga(Ic, Pc).draw(Rc.series);
						break;
					case "pie":
					case "donut":
					case "polarArea":
						qc = Ic.pie.draw(Rc.series);
						break;
					case "radialBar":
						qc = Gc.draw(Rc.series);
						break;
					case "radar":
						qc = Kc.draw(Rc.series);
						break;
					default: qc = Uc.draw(Rc.series);
				}
				return qc;
			}
		},
		{
			key: "setSVGDimensions",
			value: function() {
				var io = this.w, Pc = io.globals, Fc = io.config;
				Fc.chart.width = Fc.chart.width || "100%", Fc.chart.height = Fc.chart.height || "auto", Pc.svgWidth = Fc.chart.width, Pc.svgHeight = Fc.chart.height;
				var Ic = v.getDimensions(this.el), Lc = Fc.chart.width.toString().split(/[0-9]+/g).pop();
				Lc === "%" ? v.isNumber(Ic[0]) && (Ic[0].width === 0 && (Ic = v.getDimensions(this.el.parentNode)), Pc.svgWidth = Ic[0] * parseInt(Fc.chart.width, 10) / 100) : Lc !== "px" && Lc !== "" || (Pc.svgWidth = parseInt(Fc.chart.width, 10));
				var Rc = String(Fc.chart.height).toString().split(/[0-9]+/g).pop();
				if (Pc.svgHeight !== "auto" && Pc.svgHeight !== "" ? Rc === "%" ? Pc.svgHeight = v.getDimensions(this.el.parentNode)[1] * parseInt(Fc.chart.height, 10) / 100 : Pc.svgHeight = parseInt(Fc.chart.height, 10) : Pc.svgHeight = Pc.axisCharts ? Pc.svgWidth / 1.61 : Pc.svgWidth / 1.2, Pc.svgWidth = Math.max(Pc.svgWidth, 0), Pc.svgHeight = Math.max(Pc.svgHeight, 0), Mi.setAttrs(Pc.dom.Paper.node, {
					width: Pc.svgWidth,
					height: Pc.svgHeight
				}), Rc !== "%") {
					var zc = Fc.chart.sparkline.enabled ? 0 : Pc.axisCharts ? Fc.chart.parentHeightOffset : 0;
					Pc.dom.Paper.node.parentNode.parentNode.style.minHeight = `${Pc.svgHeight + zc}px`;
				}
				Pc.dom.elWrap.style.width = `${Pc.svgWidth}px`, Pc.dom.elWrap.style.height = `${Pc.svgHeight}px`;
			}
		},
		{
			key: "shiftGraphPosition",
			value: function() {
				var io = this.w.globals, Pc = io.translateY, Fc = io.translateX;
				Mi.setAttrs(io.dom.elGraphical.node, { transform: `translate(${Fc}, ${Pc})` });
			}
		},
		{
			key: "resizeNonAxisCharts",
			value: function() {
				var io = this.w, Pc = io.globals, Fc = 0, Ic = io.config.chart.sparkline.enabled ? 1 : 15;
				Ic += io.config.grid.padding.bottom, ["top", "bottom"].includes(io.config.legend.position) && io.config.legend.show && !io.config.legend.floating && (Fc = new xa(this.ctx).legendHelpers.getLegendDimensions().clwh + 7);
				var Lc = io.globals.dom.baseEl.querySelector(".apexcharts-radialbar, .apexcharts-pie"), Rc = 2.05 * io.globals.radialSize;
				if (Lc && !io.config.chart.sparkline.enabled && io.config.plotOptions.radialBar.startAngle !== 0) {
					var zc = v.getBoundingClientRect(Lc);
					Rc = zc.bottom;
					var Bc = zc.bottom - zc.top;
					Rc = Math.max(2.05 * io.globals.radialSize, Bc);
				}
				var Vc = Math.ceil(Rc + Pc.translateY + Fc + Ic);
				Pc.dom.elLegendForeign && Pc.dom.elLegendForeign.setAttribute("height", Vc), io.config.chart.height && String(io.config.chart.height).includes("%") || (Pc.dom.elWrap.style.height = `${Vc}px`, Mi.setAttrs(Pc.dom.Paper.node, { height: Vc }), Pc.dom.Paper.node.parentNode.parentNode.style.minHeight = `${Vc}px`);
			}
		},
		{
			key: "coreCalculations",
			value: function() {
				new ea(this.ctx).init();
			}
		},
		{
			key: "resetGlobals",
			value: function() {
				var io = this, Pc = function() {
					return io.w.config.series.map((function() {
						return [];
					}));
				}, Fc = new Bi(), Ic = this.w.globals;
				Fc.initGlobalVars(Ic), Ic.seriesXvalues = Pc(), Ic.seriesYvalues = Pc();
			}
		},
		{
			key: "isMultipleY",
			value: function() {
				return !!(Array.isArray(this.w.config.yaxis) && this.w.config.yaxis.length > 1) && (this.w.globals.isMultipleYAxis = !0, !0);
			}
		},
		{
			key: "xySettings",
			value: function() {
				var io = this.w, Pc = null;
				if (io.globals.axisCharts) {
					if (io.config.xaxis.crosshairs.position === "back" && new na(this.ctx).drawXCrosshairs(), io.config.yaxis[0].crosshairs.position === "back" && new na(this.ctx).drawYCrosshairs(), io.config.xaxis.type === "datetime" && io.config.xaxis.labels.formatter === void 0) {
						this.ctx.timeScale = new Ua(this.ctx);
						var Fc = [];
						isFinite(io.globals.minX) && isFinite(io.globals.maxX) && !io.globals.isBarHorizontal ? Fc = this.ctx.timeScale.calculateTimeScaleTicks(io.globals.minX, io.globals.maxX) : io.globals.isBarHorizontal && (Fc = this.ctx.timeScale.calculateTimeScaleTicks(io.globals.minY, io.globals.maxY)), this.ctx.timeScale.recalcDimensionsBasedOnFormat(Fc);
					}
					Pc = new Pi(this.ctx).getCalculatedRatios();
				}
				return Pc;
			}
		},
		{
			key: "updateSourceChart",
			value: function(io) {
				this.ctx.w.globals.selection = void 0, this.ctx.updateHelpers._updateOptions({ chart: { selection: { xaxis: {
					min: io.w.globals.minX,
					max: io.w.globals.maxX
				} } } }, !1, !1);
			}
		},
		{
			key: "setupBrushHandler",
			value: function() {
				var io = this, Pc = this.ctx, Fc = this.w;
				if (Fc.config.chart.brush.enabled && typeof Fc.config.chart.events.selection != "function") {
					var Ic = Array.isArray(Fc.config.chart.brush.targets) ? Fc.config.chart.brush.targets : [Fc.config.chart.brush.target];
					Ic.forEach((function(Fc) {
						var Ic = Pc.constructor.getChartByID(Fc);
						Ic.w.globals.brushSource = io.ctx, typeof Ic.w.config.chart.events.zoomed != "function" && (Ic.w.config.chart.events.zoomed = function() {
							return io.updateSourceChart(Ic);
						}), typeof Ic.w.config.chart.events.scrolled != "function" && (Ic.w.config.chart.events.scrolled = function() {
							return io.updateSourceChart(Ic);
						});
					})), Fc.config.chart.events.selection = function(io, Fc) {
						Ic.forEach((function(io) {
							Pc.constructor.getChartByID(io).ctx.updateHelpers._updateOptions({ xaxis: {
								min: Fc.xaxis.min,
								max: Fc.xaxis.max
							} }, !1, !1, !1, !1);
						}));
					};
				}
			}
		}
	]), io;
}(), Za = function() {
	function io(Pc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w;
	}
	return s(io, [
		{
			key: "_updateOptions",
			value: function(io) {
				var Pc = this, Fc = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], Ic = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], Lc = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3], Rc = arguments.length > 4 && arguments[4] !== void 0 && arguments[4];
				return new Promise((function(zc) {
					var Bc = [Pc.ctx];
					Lc && (Bc = Pc.ctx.getSyncedCharts()), Pc.ctx.w.globals.isExecCalled && (Bc = [Pc.ctx], Pc.ctx.w.globals.isExecCalled = !1), Bc.forEach((function(Lc, Vc) {
						var Hc = Lc.w;
						if (Hc.globals.shouldAnimate = Ic, Fc || (Hc.globals.resized = !0, Hc.globals.dataChanged = !0, Ic && Lc.series.getPreviousPaths()), io && b(io) === "object" && (Lc.config = new Wi(io), io = Pi.extendArrayProps(Lc.config, io, Hc), Lc.w.globals.chartID !== Pc.ctx.w.globals.chartID && delete io.series, Hc.config = v.extend(Hc.config, io), Rc && (Hc.globals.lastXAxis = io.xaxis ? v.clone(io.xaxis) : [], Hc.globals.lastYAxis = io.yaxis ? v.clone(io.yaxis) : [], Hc.globals.initialConfig = v.extend({}, Hc.config), Hc.globals.initialSeries = v.clone(Hc.config.series), io.series))) {
							for (var Uc = 0; Uc < Hc.globals.collapsedSeriesIndices.length; Uc++) {
								var Wc = Hc.config.series[Hc.globals.collapsedSeriesIndices[Uc]];
								Hc.globals.collapsedSeries[Uc].data = Hc.globals.axisCharts ? Wc.data.slice() : Wc;
							}
							for (var Gc = 0; Gc < Hc.globals.ancillaryCollapsedSeriesIndices.length; Gc++) {
								var Kc = Hc.config.series[Hc.globals.ancillaryCollapsedSeriesIndices[Gc]];
								Hc.globals.ancillaryCollapsedSeries[Gc].data = Hc.globals.axisCharts ? Kc.data.slice() : Kc;
							}
							Lc.series.emptyCollapsedSeries(Hc.config.series);
						}
						return Lc.update(io).then((function() {
							Vc === Bc.length - 1 && zc(Lc);
						}));
					}));
				}));
			}
		},
		{
			key: "_updateSeries",
			value: function(io, Pc) {
				var Fc = this, Ic = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
				return new Promise((function(Lc) {
					var Rc, zc = Fc.w;
					return zc.globals.shouldAnimate = Pc, zc.globals.dataChanged = !0, Pc && Fc.ctx.series.getPreviousPaths(), zc.globals.axisCharts ? ((Rc = io.map((function(io, Pc) {
						return Fc._extendSeries(io, Pc);
					}))).length === 0 && (Rc = [{ data: [] }]), zc.config.series = Rc) : zc.config.series = io.slice(), Ic && (zc.globals.initialConfig.series = v.clone(zc.config.series), zc.globals.initialSeries = v.clone(zc.config.series)), Fc.ctx.update().then((function() {
						Lc(Fc.ctx);
					}));
				}));
			}
		},
		{
			key: "_extendSeries",
			value: function(io, Pc) {
				var Fc = this.w, Ic = Fc.config.series[Pc];
				return u(u({}, Fc.config.series[Pc]), {}, {
					name: io.name ? io.name : Ic == null ? void 0 : Ic.name,
					color: io.color ? io.color : Ic == null ? void 0 : Ic.color,
					type: io.type ? io.type : Ic == null ? void 0 : Ic.type,
					group: io.group ? io.group : Ic == null ? void 0 : Ic.group,
					hidden: io.hidden === void 0 ? Ic == null ? void 0 : Ic.hidden : io.hidden,
					data: io.data ? io.data : Ic == null ? void 0 : Ic.data,
					zIndex: io.zIndex === void 0 ? Pc : io.zIndex
				});
			}
		},
		{
			key: "toggleDataPointSelection",
			value: function(io, Pc) {
				var Fc = this.w, Ic = null, Lc = `.apexcharts-series[data\\:realIndex='${io}']`;
				return Fc.globals.axisCharts ? Ic = Fc.globals.dom.Paper.findOne(`${Lc} path[j='${Pc}'], ${Lc} circle[j='${Pc}'], ${Lc} rect[j='${Pc}']`) : Pc === void 0 && (Ic = Fc.globals.dom.Paper.findOne(`${Lc} path[j='${io}']`), Fc.config.chart.type !== "pie" && Fc.config.chart.type !== "polarArea" && Fc.config.chart.type !== "donut" || this.ctx.pie.pieClicked(io)), Ic ? (new Mi(this.ctx).pathMouseDown(Ic, null), Ic.node ? Ic.node : null) : (console.warn("toggleDataPointSelection: Element not found"), null);
			}
		},
		{
			key: "forceXAxisUpdate",
			value: function(io) {
				var Pc = this.w;
				return ["min", "max"].forEach((function(Fc) {
					io.xaxis[Fc] !== void 0 && (Pc.config.xaxis[Fc] = io.xaxis[Fc], Pc.globals.lastXAxis[Fc] = io.xaxis[Fc]);
				})), io.xaxis.categories && io.xaxis.categories.length && (Pc.config.xaxis.categories = io.xaxis.categories), Pc.config.xaxis.convertedCatToNumeric && (io = new Ni(io).convertCatToNumericXaxis(io, this.ctx)), io;
			}
		},
		{
			key: "forceYAxisUpdate",
			value: function(io) {
				return io.chart && io.chart.stacked && io.chart.stackType === "100%" && (Array.isArray(io.yaxis) ? io.yaxis.forEach((function(Pc, Fc) {
					io.yaxis[Fc].min = 0, io.yaxis[Fc].max = 100;
				})) : (io.yaxis.min = 0, io.yaxis.max = 100)), io;
			}
		},
		{
			key: "revertDefaultAxisMinMax",
			value: function(io) {
				var Pc = this, Fc = this.w, Ic = Fc.globals.lastXAxis, Lc = Fc.globals.lastYAxis;
				io && io.xaxis && (Ic = io.xaxis), io && io.yaxis && (Lc = io.yaxis), Fc.config.xaxis.min = Ic.min, Fc.config.xaxis.max = Ic.max;
				var Rc = function(io) {
					Lc[io] !== void 0 && (Fc.config.yaxis[io].min = Lc[io].min, Fc.config.yaxis[io].max = Lc[io].max);
				};
				Fc.config.yaxis.map((function(io, Ic) {
					Fc.globals.zoomed || Lc[Ic] !== void 0 ? Rc(Ic) : Pc.ctx.opts.yaxis[Ic] !== void 0 && (io.min = Pc.ctx.opts.yaxis[Ic].min, io.max = Pc.ctx.opts.yaxis[Ic].max);
				}));
			}
		}
	]), io;
}();
(function() {
	function io() {
		for (var io = arguments.length > 0 && arguments[0] !== Hc ? arguments[0] : [], Lc = arguments.length > 1 ? arguments[1] : Hc, Rc = arguments.length > 2 ? arguments[2] : Hc, zc = arguments.length > 3 ? arguments[3] : Hc, Bc = arguments.length > 4 ? arguments[4] : Hc, Vc = arguments.length > 5 ? arguments[5] : Hc, Hc = arguments.length > 6 ? arguments[6] : Hc, Uc = io.slice(Lc, Rc || Hc), Wc = zc.slice(Bc, Vc || Hc), Gc = 0, Kc = {
			pos: [0, 0],
			start: [0, 0]
		}, qc = {
			pos: [0, 0],
			start: [0, 0]
		}; Uc[Gc] = Pc.call(Kc, Uc[Gc]), Wc[Gc] = Pc.call(qc, Wc[Gc]), Uc[Gc][0] != Wc[Gc][0] || Uc[Gc][0] == "M" || Uc[Gc][0] == "A" && (Uc[Gc][4] != Wc[Gc][4] || Uc[Gc][5] != Wc[Gc][5]) ? (Array.prototype.splice.apply(Uc, [Gc, 1].concat(Ic.call(Kc, Uc[Gc]))), Array.prototype.splice.apply(Wc, [Gc, 1].concat(Ic.call(qc, Wc[Gc])))) : (Uc[Gc] = Fc.call(Kc, Uc[Gc]), Wc[Gc] = Fc.call(qc, Wc[Gc])), !(++Gc == Uc.length && Gc == Wc.length);) Gc == Uc.length && Uc.push([
			"C",
			Kc.pos[0],
			Kc.pos[1],
			Kc.pos[0],
			Kc.pos[1],
			Kc.pos[0],
			Kc.pos[1]
		]), Gc == Wc.length && Wc.push([
			"C",
			qc.pos[0],
			qc.pos[1],
			qc.pos[0],
			qc.pos[1],
			qc.pos[0],
			qc.pos[1]
		]);
		return {
			start: Uc,
			dest: Wc
		};
	}
	function Pc(io) {
		switch (io[0]) {
			case "z":
			case "Z":
				io[0] = "L", io[1] = this.start[0], io[2] = this.start[1];
				break;
			case "H":
				io[0] = "L", io[2] = this.pos[1];
				break;
			case "V":
				io[0] = "L", io[2] = io[1], io[1] = this.pos[0];
				break;
			case "T":
				io[0] = "Q", io[3] = io[1], io[4] = io[2], io[1] = this.reflection[1], io[2] = this.reflection[0];
				break;
			case "S": io[0] = "C", io[6] = io[4], io[5] = io[3], io[4] = io[2], io[3] = io[1], io[2] = this.reflection[1], io[1] = this.reflection[0];
		}
		return io;
	}
	function Fc(io) {
		var Pc = io.length;
		return this.pos = [io[Pc - 2], io[Pc - 1]], "SCQT".indexOf(io[0]) != -1 && (this.reflection = [2 * this.pos[0] - io[Pc - 4], 2 * this.pos[1] - io[Pc - 3]]), io;
	}
	function Ic(io) {
		var Pc = [io];
		switch (io[0]) {
			case "M": return this.pos = this.start = [io[1], io[2]], Pc;
			case "L":
				io[5] = io[3] = io[1], io[6] = io[4] = io[2], io[1] = this.pos[0], io[2] = this.pos[1];
				break;
			case "Q":
				io[6] = io[4], io[5] = io[3], io[4] = 1 * io[4] / 3 + 2 * io[2] / 3, io[3] = 1 * io[3] / 3 + 2 * io[1] / 3, io[2] = 1 * this.pos[1] / 3 + 2 * io[2] / 3, io[1] = 1 * this.pos[0] / 3 + 2 * io[1] / 3;
				break;
			case "A": Pc = function(io, Pc) {
				var Fc, Ic, Lc, Rc, zc, Bc, Vc, Hc, Uc, Wc, Gc, Kc, qc, Jc, Yc, Xc, Zc, Qc, $c, el, tl, nl, rl, il, al, ol, sl = Math.abs(Pc[1]), cl = Math.abs(Pc[2]), ll = Pc[3] % 360, ul = Pc[4], dl = Pc[5], fl = Pc[6], pl = Pc[7], ml = new bt(io), hl = new bt(fl, pl), gl = [];
				if (sl === 0 || cl === 0 || ml.x === hl.x && ml.y === hl.y) return [[
					"C",
					ml.x,
					ml.y,
					hl.x,
					hl.y,
					hl.x,
					hl.y
				]];
				for (Fc = new bt((ml.x - hl.x) / 2, (ml.y - hl.y) / 2).transform(new vt().rotate(ll)), Ic = Fc.x * Fc.x / (sl * sl) + Fc.y * Fc.y / (cl * cl), Ic > 1 && (sl *= Ic = Math.sqrt(Ic), cl *= Ic), Lc = new vt().rotate(ll).scale(1 / sl, 1 / cl).rotate(-ll), ml = ml.transform(Lc), hl = hl.transform(Lc), Rc = [hl.x - ml.x, hl.y - ml.y], Bc = Rc[0] * Rc[0] + Rc[1] * Rc[1], zc = Math.sqrt(Bc), Rc[0] /= zc, Rc[1] /= zc, Vc = Bc < 4 ? Math.sqrt(1 - Bc / 4) : 0, ul === dl && (Vc *= -1), Hc = new bt((hl.x + ml.x) / 2 + Vc * -Rc[1], (hl.y + ml.y) / 2 + Vc * Rc[0]), Uc = new bt(ml.x - Hc.x, ml.y - Hc.y), Wc = new bt(hl.x - Hc.x, hl.y - Hc.y), Gc = Math.acos(Uc.x / Math.sqrt(Uc.x * Uc.x + Uc.y * Uc.y)), Uc.y < 0 && (Gc *= -1), Kc = Math.acos(Wc.x / Math.sqrt(Wc.x * Wc.x + Wc.y * Wc.y)), Wc.y < 0 && (Kc *= -1), dl && Gc > Kc && (Kc += 2 * Math.PI), !dl && Gc < Kc && (Kc -= 2 * Math.PI), Jc = Math.ceil(2 * Math.abs(Gc - Kc) / Math.PI), Xc = [], Zc = Gc, qc = (Kc - Gc) / Jc, Yc = 4 * Math.tan(qc / 4) / 3, tl = 0; tl <= Jc; tl++) $c = Math.cos(Zc), Qc = Math.sin(Zc), el = new bt(Hc.x + $c, Hc.y + Qc), Xc[tl] = [
					new bt(el.x + Yc * Qc, el.y - Yc * $c),
					el,
					new bt(el.x - Yc * Qc, el.y + Yc * $c)
				], Zc += qc;
				for (Xc[0][0] = Xc[0][1].clone(), Xc[Xc.length - 1][2] = Xc[Xc.length - 1][1].clone(), Lc = new vt().rotate(ll).scale(sl, cl).rotate(-ll), tl = 0, nl = Xc.length; tl < nl; tl++) Xc[tl][0] = Xc[tl][0].transform(Lc), Xc[tl][1] = Xc[tl][1].transform(Lc), Xc[tl][2] = Xc[tl][2].transform(Lc);
				for (tl = 1, nl = Xc.length; tl < nl; tl++) rl = (el = Xc[tl - 1][2]).x, il = el.y, al = (el = Xc[tl][0]).x, ol = el.y, fl = (el = Xc[tl][1]).x, pl = el.y, gl.push([
					"C",
					rl,
					il,
					al,
					ol,
					fl,
					pl
				]);
				return gl;
			}(this.pos, io), io = Pc[0];
		}
		return io[0] = "C", this.pos = [io[5], io[6]], this.reflection = [2 * io[5] - io[3], 2 * io[6] - io[4]], Pc;
	}
	function Lc() {
		var io = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], Pc = arguments.length > 1 ? arguments[1] : void 0;
		if (!1 === Pc) return !1;
		for (var Fc = Pc, Ic = io.length; Fc < Ic; ++Fc) if (io[Fc][0] == "M") return Fc;
		return !1;
	}
	Q(Ee, { morph: function(Pc, Fc, Ic, Rc, zc) {
		for (var Bc = this.parse(Pc), Vc = this.parse(Fc), Hc = 0, Uc = 0, Wc = !1, Gc = !1; !1 !== Hc || !1 !== Uc;) {
			var Kc;
			Wc = Lc(Bc, !1 !== Hc && Hc + 1), Gc = Lc(Vc, !1 !== Uc && Uc + 1), !1 === Hc && (Hc = (Kc = new Ee(qc.start).bbox()).height == 0 || Kc.width == 0 ? Bc.push(Bc[0]) - 1 : Bc.push([
				"M",
				Kc.x + Kc.width / 2,
				Kc.y + Kc.height / 2
			]) - 1), !1 === Uc && (Uc = (Kc = new Ee(qc.dest).bbox()).height == 0 || Kc.width == 0 ? Vc.push(Vc[0]) - 1 : Vc.push([
				"M",
				Kc.x + Kc.width / 2,
				Kc.y + Kc.height / 2
			]) - 1);
			var qc = io(Bc, Hc, Wc, Vc, Uc, Gc);
			Bc = Bc.slice(0, Hc).concat(qc.start, !1 === Wc ? [] : Bc.slice(Wc)), Vc = Vc.slice(0, Uc).concat(qc.dest, !1 === Gc ? [] : Vc.slice(Gc)), Hc = !1 !== Wc && Hc + qc.start.length, Uc = !1 !== Gc && Uc + qc.dest.length;
		}
		return this._array = Bc, this.destination = new Ee(), this.destination._array = Vc, this.fromArray(Bc.map((function(io, Pc) {
			return Vc[Pc].map((function(Fc, Lc) {
				return Lc === 0 ? Fc : Rc.step(io[Lc], Vc[Pc][Lc], Ic, zc[Pc], zc);
			}));
		})));
	} });
})();
var $a = (io) => (io.changedTouches && (io = io.changedTouches[0]), {
	x: io.clientX,
	y: io.clientY
}), Ja = class {
	constructor(io) {
		io.remember("_draggable", this), this.el = io, this.drag = this.drag.bind(this), this.startDrag = this.startDrag.bind(this), this.endDrag = this.endDrag.bind(this);
	}
	init(io) {
		io ? (this.el.on("mousedown.drag", this.startDrag), this.el.on("touchstart.drag", this.startDrag, { passive: !1 })) : (this.el.off("mousedown.drag"), this.el.off("touchstart.drag"));
	}
	startDrag(io) {
		let Pc = !io.type.indexOf("mouse");
		if (Pc && io.which !== 1 && io.buttons !== 0 || this.el.dispatch("beforedrag", {
			event: io,
			handler: this
		}).defaultPrevented) return;
		io.preventDefault(), io.stopPropagation(), this.init(!1), this.box = this.el.bbox(), this.lastClick = this.el.point($a(io));
		let Fc = (Pc ? "mouseup" : "touchend") + ".drag";
		zt(window, (Pc ? "mousemove" : "touchmove") + ".drag", this.drag, this, { passive: !1 }), zt(window, Fc, this.endDrag, this, { passive: !1 }), this.el.fire("dragstart", {
			event: io,
			handler: this,
			box: this.box
		});
	}
	drag(io) {
		let { box: Pc, lastClick: Fc } = this, Ic = this.el.point($a(io)), Lc = Ic.x - Fc.x, Rc = Ic.y - Fc.y;
		if (!Lc && !Rc) return Pc;
		let zc = Pc.x + Lc, Bc = Pc.y + Rc;
		this.box = new kt(zc, Bc, Pc.w, Pc.h), this.lastClick = Ic, this.el.dispatch("dragmove", {
			event: io,
			handler: this,
			box: this.box
		}).defaultPrevented || this.move(zc, Bc);
	}
	move(io, Pc) {
		this.el.type === "svg" ? gi.prototype.move.call(this.el, io, Pc) : this.el.move(io, Pc);
	}
	endDrag(io) {
		this.drag(io), this.el.fire("dragend", {
			event: io,
			handler: this,
			box: this.box
		}), Xt(window, "mousemove.drag"), Xt(window, "touchmove.drag"), Xt(window, "mouseup.drag"), Xt(window, "touchend.drag"), this.init(!0);
	}
};
function Qa(io, Pc, Fc, Ic = null) {
	return function(Lc) {
		Lc.preventDefault(), Lc.stopPropagation();
		var Rc = Lc.pageX || Lc.touches[0].pageX, zc = Lc.pageY || Lc.touches[0].pageY;
		Pc.fire(io, {
			x: Rc,
			y: zc,
			event: Lc,
			index: Ic,
			points: Fc
		});
	};
}
function Ka([io, Pc], { a: Fc, b: Ic, c: Lc, d: Rc, e: zc, f: Bc }) {
	return [io * Fc + Pc * Lc + zc, io * Ic + Pc * Rc + Bc];
}
Q(Gt, { draggable(io = !0) {
	return (this.remember("_draggable") || new Ja(this)).init(io), this;
} });
var ts = class {
	constructor(io) {
		this.el = io, io.remember("_selectHandler", this), this.selection = new gi(), this.order = [
			"lt",
			"t",
			"rt",
			"r",
			"rb",
			"b",
			"lb",
			"l",
			"rot"
		], this.mutationHandler = this.mutationHandler.bind(this), this.observer = new (F()).MutationObserver(this.mutationHandler);
	}
	init(io) {
		this.createHandle = io.createHandle || this.createHandleFn, this.createRot = io.createRot || this.createRotFn, this.updateHandle = io.updateHandle || this.updateHandleFn, this.updateRot = io.updateRot || this.updateRotFn, this.el.root().put(this.selection), this.updatePoints(), this.createSelection(), this.createResizeHandles(), this.updateResizeHandles(), this.createRotationHandle(), this.updateRotationHandle(), this.observer.observe(this.el.node, { attributes: !0 });
	}
	active(io, Pc) {
		if (!io) return this.selection.clear().remove(), void this.observer.disconnect();
		this.init(Pc);
	}
	createSelection() {
		this.selection.polygon(this.handlePoints).addClass("svg_select_shape");
	}
	updateSelection() {
		this.selection.get(0).plot(this.handlePoints);
	}
	createResizeHandles() {
		this.handlePoints.forEach(((io, Pc, Fc) => {
			let Ic = this.order[Pc];
			this.createHandle.call(this, this.selection, io, Pc, Fc, Ic), this.selection.get(Pc + 1).addClass("svg_select_handle svg_select_handle_" + Ic).on("mousedown.selection touchstart.selection", Qa(Ic, this.el, this.handlePoints, Pc));
		}));
	}
	createHandleFn(io) {
		io.polyline();
	}
	updateHandleFn(io, Pc, Fc, Ic) {
		let Lc = Ic.at(Fc - 1), Rc = Ic[(Fc + 1) % Ic.length], zc = Pc, Bc = [zc[0] - Lc[0], zc[1] - Lc[1]], Vc = [zc[0] - Rc[0], zc[1] - Rc[1]], Hc = Math.sqrt(Bc[0] * Bc[0] + Bc[1] * Bc[1]), Uc = Math.sqrt(Vc[0] * Vc[0] + Vc[1] * Vc[1]), Wc = [Bc[0] / Hc, Bc[1] / Hc], Gc = [Vc[0] / Uc, Vc[1] / Uc], Kc = [zc[0] - 10 * Wc[0], zc[1] - 10 * Wc[1]], qc = [zc[0] - 10 * Gc[0], zc[1] - 10 * Gc[1]];
		io.plot([
			Kc,
			zc,
			qc
		]);
	}
	updateResizeHandles() {
		this.handlePoints.forEach(((io, Pc, Fc) => {
			let Ic = this.order[Pc];
			this.updateHandle.call(this, this.selection.get(Pc + 1), io, Pc, Fc, Ic);
		}));
	}
	createRotFn(io) {
		io.line(), io.circle(5);
	}
	getPoint(io) {
		return this.handlePoints[this.order.indexOf(io)];
	}
	getPointHandle(io) {
		return this.selection.get(this.order.indexOf(io) + 1);
	}
	updateRotFn(io, Pc) {
		let Fc = this.getPoint("t");
		io.get(0).plot(Fc[0], Fc[1], Pc[0], Pc[1]), io.get(1).center(Pc[0], Pc[1]);
	}
	createRotationHandle() {
		let io = this.selection.group().addClass("svg_select_handle_rot").on("mousedown.selection touchstart.selection", Qa("rot", this.el, this.handlePoints));
		this.createRot.call(this, io);
	}
	updateRotationHandle() {
		let io = this.selection.findOne("g.svg_select_handle_rot");
		this.updateRot(io, this.rotationPoint, this.handlePoints);
	}
	updatePoints() {
		let io = this.el.bbox(), Pc = this.el.parent().screenCTM().inverseO().multiplyO(this.el.screenCTM());
		this.handlePoints = this.getHandlePoints(io).map(((io) => Ka(io, Pc))), this.rotationPoint = Ka(this.getRotationPoint(io), Pc);
	}
	getHandlePoints({ x: io, x2: Pc, y: Fc, y2: Ic, cx: Lc, cy: Rc } = this.el.bbox()) {
		return [
			[io, Fc],
			[Lc, Fc],
			[Pc, Fc],
			[Pc, Rc],
			[Pc, Ic],
			[Lc, Ic],
			[io, Ic],
			[io, Rc]
		];
	}
	getRotationPoint({ y: io, cx: Pc } = this.el.bbox()) {
		return [Pc, io - 20];
	}
	mutationHandler() {
		this.updatePoints(), this.updateSelection(), this.updateResizeHandles(), this.updateRotationHandle();
	}
}, es = (io) => function(Pc = !0, Fc = {}) {
	typeof Pc == "object" && (Fc = Pc, Pc = !0);
	let Ic = this.remember("_" + io.name);
	return Ic || (Pc.prototype instanceof ts ? (Ic = new Pc(this), Pc = !0) : Ic = new io(this), this.remember("_" + io.name, Ic)), Ic.active(Pc, Fc), this;
};
function is(io, Pc, Fc, Ic = null) {
	return function(Lc) {
		Lc.preventDefault(), Lc.stopPropagation();
		var Rc = Lc.pageX || Lc.touches[0].pageX, zc = Lc.pageY || Lc.touches[0].pageY;
		Pc.fire(io, {
			x: Rc,
			y: zc,
			event: Lc,
			index: Ic,
			points: Fc
		});
	};
}
function as([io, Pc], { a: Fc, b: Ic, c: Lc, d: Rc, e: zc, f: Bc }) {
	return [io * Fc + Pc * Lc + zc, io * Ic + Pc * Rc + Bc];
}
Q(Gt, { select: es(ts) }), Q([
	Ge,
	je,
	xe
], { pointSelect: es(class {
	constructor(io) {
		this.el = io, io.remember("_pointSelectHandler", this), this.selection = new gi(), this.order = [
			"lt",
			"t",
			"rt",
			"r",
			"rb",
			"b",
			"lb",
			"l",
			"rot"
		], this.mutationHandler = this.mutationHandler.bind(this), this.observer = new (F()).MutationObserver(this.mutationHandler);
	}
	init(io) {
		this.createHandle = io.createHandle || this.createHandleFn, this.updateHandle = io.updateHandle || this.updateHandleFn, this.el.root().put(this.selection), this.updatePoints(), this.createSelection(), this.createPointHandles(), this.updatePointHandles(), this.observer.observe(this.el.node, { attributes: !0 });
	}
	active(io, Pc) {
		if (!io) return this.selection.clear().remove(), void this.observer.disconnect();
		this.init(Pc);
	}
	createSelection() {
		this.selection.polygon(this.points).addClass("svg_select_shape_pointSelect");
	}
	updateSelection() {
		this.selection.get(0).plot(this.points);
	}
	createPointHandles() {
		this.points.forEach(((io, Pc, Fc) => {
			this.createHandle.call(this, this.selection, io, Pc, Fc), this.selection.get(Pc + 1).addClass("svg_select_handle_point").on("mousedown.selection touchstart.selection", Qa("point", this.el, this.points, Pc));
		}));
	}
	createHandleFn(io) {
		io.circle(5);
	}
	updateHandleFn(io, Pc) {
		io.center(Pc[0], Pc[1]);
	}
	updatePointHandles() {
		this.points.forEach(((io, Pc, Fc) => {
			this.updateHandle.call(this, this.selection.get(Pc + 1), io, Pc, Fc);
		}));
	}
	updatePoints() {
		let io = this.el.parent().screenCTM().inverseO().multiplyO(this.el.screenCTM());
		this.points = this.el.array().map(((Pc) => Ka(Pc, io)));
	}
	mutationHandler() {
		this.updatePoints(), this.updateSelection(), this.updatePointHandles();
	}
}) });
var ss = class {
	constructor(io) {
		this.el = io, io.remember("_selectHandler", this), this.selection = new gi(), this.order = [
			"lt",
			"t",
			"rt",
			"r",
			"rb",
			"b",
			"lb",
			"l",
			"rot"
		], this.mutationHandler = this.mutationHandler.bind(this), this.observer = new (F()).MutationObserver(this.mutationHandler);
	}
	init(io) {
		this.createHandle = io.createHandle || this.createHandleFn, this.createRot = io.createRot || this.createRotFn, this.updateHandle = io.updateHandle || this.updateHandleFn, this.updateRot = io.updateRot || this.updateRotFn, this.el.root().put(this.selection), this.updatePoints(), this.createSelection(), this.createResizeHandles(), this.updateResizeHandles(), this.createRotationHandle(), this.updateRotationHandle(), this.observer.observe(this.el.node, { attributes: !0 });
	}
	active(io, Pc) {
		if (!io) return this.selection.clear().remove(), void this.observer.disconnect();
		this.init(Pc);
	}
	createSelection() {
		this.selection.polygon(this.handlePoints).addClass("svg_select_shape");
	}
	updateSelection() {
		this.selection.get(0).plot(this.handlePoints);
	}
	createResizeHandles() {
		this.handlePoints.forEach(((io, Pc, Fc) => {
			let Ic = this.order[Pc];
			this.createHandle.call(this, this.selection, io, Pc, Fc, Ic), this.selection.get(Pc + 1).addClass("svg_select_handle svg_select_handle_" + Ic).on("mousedown.selection touchstart.selection", is(Ic, this.el, this.handlePoints, Pc));
		}));
	}
	createHandleFn(io) {
		io.polyline();
	}
	updateHandleFn(io, Pc, Fc, Ic) {
		let Lc = Ic.at(Fc - 1), Rc = Ic[(Fc + 1) % Ic.length], zc = Pc, Bc = [zc[0] - Lc[0], zc[1] - Lc[1]], Vc = [zc[0] - Rc[0], zc[1] - Rc[1]], Hc = Math.sqrt(Bc[0] * Bc[0] + Bc[1] * Bc[1]), Uc = Math.sqrt(Vc[0] * Vc[0] + Vc[1] * Vc[1]), Wc = [Bc[0] / Hc, Bc[1] / Hc], Gc = [Vc[0] / Uc, Vc[1] / Uc], Kc = [zc[0] - 10 * Wc[0], zc[1] - 10 * Wc[1]], qc = [zc[0] - 10 * Gc[0], zc[1] - 10 * Gc[1]];
		io.plot([
			Kc,
			zc,
			qc
		]);
	}
	updateResizeHandles() {
		this.handlePoints.forEach(((io, Pc, Fc) => {
			let Ic = this.order[Pc];
			this.updateHandle.call(this, this.selection.get(Pc + 1), io, Pc, Fc, Ic);
		}));
	}
	createRotFn(io) {
		io.line(), io.circle(5);
	}
	getPoint(io) {
		return this.handlePoints[this.order.indexOf(io)];
	}
	getPointHandle(io) {
		return this.selection.get(this.order.indexOf(io) + 1);
	}
	updateRotFn(io, Pc) {
		let Fc = this.getPoint("t");
		io.get(0).plot(Fc[0], Fc[1], Pc[0], Pc[1]), io.get(1).center(Pc[0], Pc[1]);
	}
	createRotationHandle() {
		let io = this.selection.group().addClass("svg_select_handle_rot").on("mousedown.selection touchstart.selection", is("rot", this.el, this.handlePoints));
		this.createRot.call(this, io);
	}
	updateRotationHandle() {
		let io = this.selection.findOne("g.svg_select_handle_rot");
		this.updateRot(io, this.rotationPoint, this.handlePoints);
	}
	updatePoints() {
		let io = this.el.bbox(), Pc = this.el.parent().screenCTM().inverseO().multiplyO(this.el.screenCTM());
		this.handlePoints = this.getHandlePoints(io).map(((io) => as(io, Pc))), this.rotationPoint = as(this.getRotationPoint(io), Pc);
	}
	getHandlePoints({ x: io, x2: Pc, y: Fc, y2: Ic, cx: Lc, cy: Rc } = this.el.bbox()) {
		return [
			[io, Fc],
			[Lc, Fc],
			[Pc, Fc],
			[Pc, Rc],
			[Pc, Ic],
			[Lc, Ic],
			[io, Ic],
			[io, Rc]
		];
	}
	getRotationPoint({ y: io, cx: Pc } = this.el.bbox()) {
		return [Pc, io - 20];
	}
	mutationHandler() {
		this.updatePoints(), this.updateSelection(), this.updateResizeHandles(), this.updateRotationHandle();
	}
}, rs = (io) => function(Pc = !0, Fc = {}) {
	typeof Pc == "object" && (Fc = Pc, Pc = !0);
	let Ic = this.remember("_" + io.name);
	return Ic || (Pc.prototype instanceof ss ? (Ic = new Pc(this), Pc = !0) : Ic = new io(this), this.remember("_" + io.name, Ic)), Ic.active(Pc, Fc), this;
};
Q(Gt, { select: rs(ss) }), Q([
	Ge,
	je,
	xe
], { pointSelect: rs(class {
	constructor(io) {
		this.el = io, io.remember("_pointSelectHandler", this), this.selection = new gi(), this.order = [
			"lt",
			"t",
			"rt",
			"r",
			"rb",
			"b",
			"lb",
			"l",
			"rot"
		], this.mutationHandler = this.mutationHandler.bind(this), this.observer = new (F()).MutationObserver(this.mutationHandler);
	}
	init(io) {
		this.createHandle = io.createHandle || this.createHandleFn, this.updateHandle = io.updateHandle || this.updateHandleFn, this.el.root().put(this.selection), this.updatePoints(), this.createSelection(), this.createPointHandles(), this.updatePointHandles(), this.observer.observe(this.el.node, { attributes: !0 });
	}
	active(io, Pc) {
		if (!io) return this.selection.clear().remove(), void this.observer.disconnect();
		this.init(Pc);
	}
	createSelection() {
		this.selection.polygon(this.points).addClass("svg_select_shape_pointSelect");
	}
	updateSelection() {
		this.selection.get(0).plot(this.points);
	}
	createPointHandles() {
		this.points.forEach(((io, Pc, Fc) => {
			this.createHandle.call(this, this.selection, io, Pc, Fc), this.selection.get(Pc + 1).addClass("svg_select_handle_point").on("mousedown.selection touchstart.selection", is("point", this.el, this.points, Pc));
		}));
	}
	createHandleFn(io) {
		io.circle(5);
	}
	updateHandleFn(io, Pc) {
		io.center(Pc[0], Pc[1]);
	}
	updatePointHandles() {
		this.points.forEach(((io, Pc, Fc) => {
			this.updateHandle.call(this, this.selection.get(Pc + 1), io, Pc, Fc);
		}));
	}
	updatePoints() {
		let io = this.el.parent().screenCTM().inverseO().multiplyO(this.el.screenCTM());
		this.points = this.el.array().map(((Pc) => as(Pc, io)));
	}
	mutationHandler() {
		this.updatePoints(), this.updateSelection(), this.updatePointHandles();
	}
}) });
var ns = (io) => (io.changedTouches && (io = io.changedTouches[0]), {
	x: io.clientX,
	y: io.clientY
}), os = (io) => {
	let Pc = Infinity, Fc = Infinity, Ic = -Infinity, Lc = -Infinity;
	for (let Rc = 0; Rc < io.length; Rc++) {
		let zc = io[Rc];
		Pc = Math.min(Pc, zc[0]), Fc = Math.min(Fc, zc[1]), Ic = Math.max(Ic, zc[0]), Lc = Math.max(Lc, zc[1]);
	}
	return new kt(Pc, Fc, Ic - Pc, Lc - Fc);
}, ls = class {
	constructor(io) {
		this.el = io, io.remember("_ResizeHandler", this), this.lastCoordinates = null, this.eventType = "", this.lastEvent = null, this.handleResize = this.handleResize.bind(this), this.resize = this.resize.bind(this), this.endResize = this.endResize.bind(this), this.rotate = this.rotate.bind(this), this.movePoint = this.movePoint.bind(this);
	}
	active(io, Pc) {
		var Fc, Ic, Lc, Rc;
		this.preserveAspectRatio = (Fc = Pc.preserveAspectRatio) == null ? !1 : Fc, this.aroundCenter = (Ic = Pc.aroundCenter) == null ? !1 : Ic, this.grid = (Lc = Pc.grid) == null ? 0 : Lc, this.degree = (Rc = Pc.degree) == null ? 0 : Rc, this.el.off(".resize"), io && (this.el.on([
			"lt.resize",
			"rt.resize",
			"rb.resize",
			"lb.resize",
			"t.resize",
			"r.resize",
			"b.resize",
			"l.resize",
			"rot.resize",
			"point.resize"
		], this.handleResize), this.lastEvent && (this.eventType === "rot" ? this.rotate(this.lastEvent) : this.eventType === "point" ? this.movePoint(this.lastEvent) : this.resize(this.lastEvent)));
	}
	handleResize(io) {
		this.eventType = io.type;
		let { event: Pc, index: Fc, points: Ic } = io.detail, Lc = !Pc.type.indexOf("mouse");
		if (Lc && (Pc.which || Pc.buttons) !== 1 || this.el.dispatch("beforeresize", {
			event: io,
			handler: this
		}).defaultPrevented) return;
		this.box = this.el.bbox(), this.startPoint = this.el.point(ns(Pc)), this.index = Fc, this.points = Ic.slice();
		let Rc = (Lc ? "mousemove" : "touchmove") + ".resize", zc = (Lc ? "mouseup" : "touchcancel.resize touchend") + ".resize";
		io.type === "point" ? zt(window, Rc, this.movePoint) : io.type === "rot" ? zt(window, Rc, this.rotate) : zt(window, Rc, this.resize), zt(window, zc, this.endResize);
	}
	resize(io) {
		this.lastEvent = io;
		let Pc = this.snapToGrid(this.el.point(ns(io))), Fc = Pc.x - this.startPoint.x, Ic = Pc.y - this.startPoint.y;
		this.preserveAspectRatio && this.aroundCenter && (Fc *= 2, Ic *= 2);
		let Lc = this.box.x + Fc, Rc = this.box.y + Ic, zc = this.box.x2 + Fc, Bc = this.box.y2 + Ic, Vc = new kt(this.box);
		if (this.eventType.includes("l") && (Vc.x = Math.min(Lc, this.box.x2), Vc.x2 = Math.max(Lc, this.box.x2)), this.eventType.includes("r") && (Vc.x = Math.min(zc, this.box.x), Vc.x2 = Math.max(zc, this.box.x)), this.eventType.includes("t") && (Vc.y = Math.min(Rc, this.box.y2), Vc.y2 = Math.max(Rc, this.box.y2)), this.eventType.includes("b") && (Vc.y = Math.min(Bc, this.box.y), Vc.y2 = Math.max(Bc, this.box.y)), Vc.width = Vc.x2 - Vc.x, Vc.height = Vc.y2 - Vc.y, this.preserveAspectRatio) {
			let io = Vc.width / this.box.width, Pc = Vc.height / this.box.height, Fc = [
				"lt",
				"t",
				"rt",
				"r",
				"rb",
				"b",
				"lb",
				"l"
			], Ic = (Fc.indexOf(this.eventType) + 4) % Fc.length, Lc = this.aroundCenter ? [this.box.cx, this.box.cy] : this.points[Ic], Rc = this.eventType.includes("t") || this.eventType.includes("b") ? Pc : io;
			Rc = this.eventType.length === 2 ? Math.max(io, Pc) : Rc, Vc = function(io, Pc, Fc) {
				return os([
					[io.x, io.y],
					[io.x + io.width, io.y],
					[io.x + io.width, io.y + io.height],
					[io.x, io.y + io.height]
				].map((([io, Ic]) => {
					let Lc = io - Pc[0], Rc = (Ic - Pc[1]) * Fc;
					return [Lc * Fc + Pc[0], Rc + Pc[1]];
				})));
			}(this.box, Lc, Rc);
		}
		this.el.dispatch("resize", {
			box: new kt(Vc),
			angle: 0,
			eventType: this.eventType,
			event: io,
			handler: this
		}).defaultPrevented || this.el.size(Vc.width, Vc.height).move(Vc.x, Vc.y);
	}
	movePoint(io) {
		this.lastEvent = io;
		let { x: Pc, y: Fc } = this.snapToGrid(this.el.point(ns(io))), Ic = this.el.array().slice();
		Ic[this.index] = [Pc, Fc], this.el.dispatch("resize", {
			box: os(Ic),
			angle: 0,
			eventType: this.eventType,
			event: io,
			handler: this
		}).defaultPrevented || this.el.plot(Ic);
	}
	rotate(io) {
		this.lastEvent = io;
		let Pc = this.startPoint, Fc = this.el.point(ns(io)), { cx: Ic, cy: Lc } = this.box, Rc = Pc.x - Ic, zc = Pc.y - Lc, Bc = Fc.x - Ic, Vc = Fc.y - Lc, Hc = Math.sqrt(Rc * Rc + zc * zc) * Math.sqrt(Bc * Bc + Vc * Vc);
		if (Hc === 0) return;
		let Uc = Math.acos((Rc * Bc + zc * Vc) / Hc) / Math.PI * 180;
		if (!Uc) return;
		Fc.x < Pc.x && (Uc = -Uc);
		let Wc = new vt(this.el), { x: Gc, y: Kc } = new bt(Ic, Lc).transformO(Wc), { rotate: qc } = Wc.decompose(), Jc = this.snapToAngle(qc + Uc) - qc;
		this.el.dispatch("resize", {
			box: this.box,
			angle: Jc,
			eventType: this.eventType,
			event: io,
			handler: this
		}).defaultPrevented || this.el.transform(Wc.rotateO(Jc, Gc, Kc));
	}
	endResize(io) {
		this.eventType !== "rot" && this.eventType !== "point" && this.resize(io), this.lastEvent = null, this.eventType = "", Xt(window, "mousemove.resize touchmove.resize"), Xt(window, "mouseup.resize touchend.resize");
	}
	snapToGrid(io) {
		return this.grid && (io.x = Math.round(io.x / this.grid) * this.grid, io.y = Math.round(io.y / this.grid) * this.grid), io;
	}
	snapToAngle(io) {
		return this.degree && (io = Math.round(io / this.degree) * this.degree), io;
	}
};
Q(Gt, { resize: function(io = !0, Pc = {}) {
	typeof io == "object" && (Pc = io, io = !0);
	let Fc = this.remember("_ResizeHandler");
	return Fc || (io.prototype instanceof ls ? (Fc = new io(this), io = !0) : Fc = new ls(this), this.remember("_resizeHandler", Fc)), Fc.active(io, Pc), this;
} }), window.SVG === void 0 && (window.SVG = yi), window.Apex === void 0 && (window.Apex = {});
var hs = function() {
	function io(Pc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w;
	}
	return s(io, [{
		key: "initModules",
		value: function() {
			this.ctx.publicMethods = [
				"updateOptions",
				"updateSeries",
				"appendData",
				"appendSeries",
				"isSeriesHidden",
				"highlightSeries",
				"toggleSeries",
				"showSeries",
				"hideSeries",
				"setLocale",
				"resetSeries",
				"zoomX",
				"toggleDataPointSelection",
				"dataURI",
				"exportToCSV",
				"addXaxisAnnotation",
				"addYaxisAnnotation",
				"addPointAnnotation",
				"clearAnnotations",
				"removeAnnotation",
				"paper",
				"destroy"
			], this.ctx.eventList = [
				"click",
				"mousedown",
				"mousemove",
				"mouseleave",
				"touchstart",
				"touchmove",
				"touchleave",
				"mouseup",
				"touchend"
			], this.ctx.animations = new y(this.ctx), this.ctx.axes = new ra(this.ctx), this.ctx.core = new qa(this.ctx.el, this.ctx), this.ctx.config = new Wi({}), this.ctx.data = new $i(this.ctx), this.ctx.grid = new Ki(this.ctx), this.ctx.graphics = new Mi(this.ctx), this.ctx.coreUtils = new Pi(this.ctx), this.ctx.crosshairs = new na(this.ctx), this.ctx.events = new aa(this.ctx), this.ctx.exports = new Ji(this.ctx), this.ctx.fill = new ji(this.ctx), this.ctx.localization = new sa(this.ctx), this.ctx.options = new Oi(), this.ctx.responsive = new oa(this.ctx), this.ctx.series = new Zi(this.ctx), this.ctx.theme = new la(this.ctx), this.ctx.formatters = new Xi(this.ctx), this.ctx.titleSubtitle = new ha(this.ctx), this.ctx.legend = new xa(this.ctx), this.ctx.toolbar = new ba(this.ctx), this.ctx.tooltip = new Sa(this.ctx), this.ctx.dimensions = new pa(this.ctx), this.ctx.updateHelpers = new Za(this.ctx), this.ctx.zoomPanSelection = new ma(this.ctx), this.ctx.w.globals.tooltip = new Sa(this.ctx);
		}
	}]), io;
}(), cs = function() {
	function io(Pc) {
		i(this, io), this.ctx = Pc, this.w = Pc.w;
	}
	return s(io, [
		{
			key: "clear",
			value: function(io) {
				var Pc = io.isUpdating;
				this.ctx.zoomPanSelection && this.ctx.zoomPanSelection.destroy(), this.ctx.toolbar && this.ctx.toolbar.destroy(), this.ctx.animations = null, this.ctx.axes = null, this.ctx.annotations = null, this.ctx.core = null, this.ctx.data = null, this.ctx.grid = null, this.ctx.series = null, this.ctx.responsive = null, this.ctx.theme = null, this.ctx.formatters = null, this.ctx.titleSubtitle = null, this.ctx.legend = null, this.ctx.dimensions = null, this.ctx.options = null, this.ctx.crosshairs = null, this.ctx.zoomPanSelection = null, this.ctx.updateHelpers = null, this.ctx.toolbar = null, this.ctx.localization = null, this.ctx.w.globals.tooltip = null, this.clearDomElements({ isUpdating: Pc });
			}
		},
		{
			key: "killSVG",
			value: function(io) {
				io.each((function() {
					this.removeClass("*"), this.off();
				}), !0), io.clear();
			}
		},
		{
			key: "clearDomElements",
			value: function(io) {
				var Pc = this, Fc = io.isUpdating, Ic = this.w.globals.dom.Paper.node;
				Ic.parentNode && Ic.parentNode.parentNode && !Fc && (Ic.parentNode.parentNode.style.minHeight = "unset");
				var Lc = this.w.globals.dom.baseEl;
				Lc && this.ctx.eventList.forEach((function(io) {
					Lc.removeEventListener(io, Pc.ctx.events.documentEvent);
				}));
				var Rc = this.w.globals.dom;
				if (this.ctx.el !== null) for (; this.ctx.el.firstChild;) this.ctx.el.removeChild(this.ctx.el.firstChild);
				this.killSVG(Rc.Paper), Rc.Paper.remove(), Rc.elWrap = null, Rc.elGraphical = null, Rc.elLegendWrap = null, Rc.elLegendForeign = null, Rc.baseEl = null, Rc.elGridRect = null, Rc.elGridRectMask = null, Rc.elGridRectBarMask = null, Rc.elGridRectMarkerMask = null, Rc.elForecastMask = null, Rc.elNonForecastMask = null, Rc.elDefs = null;
			}
		}
	]), io;
}(), ds = /* @__PURE__ */ new WeakMap(), us = function() {
	function io(Pc, Fc) {
		i(this, io), this.opts = Fc, this.ctx = this, this.w = new Gi(Fc).init(), this.el = Pc, this.w.globals.cuid = v.randomId(), this.w.globals.chartID = this.w.config.chart.id ? v.escapeString(this.w.config.chart.id) : this.w.globals.cuid, new hs(this).initModules(), this.lastUpdateOptions = null, this.create = v.bind(this.create, this), this.windowResizeHandler = this._windowResizeHandler.bind(this), this.parentResizeHandler = this._parentResizeCallback.bind(this);
	}
	return s(io, [
		{
			key: "render",
			value: function() {
				var io = this;
				return new Promise((function(Pc, Fc) {
					if (v.elementExists(io.el)) {
						Apex._chartInstances === void 0 && (Apex._chartInstances = []), io.w.config.chart.id && Apex._chartInstances.push({
							id: io.w.globals.chartID,
							group: io.w.config.chart.group,
							chart: io
						}), io.setLocale(io.w.config.chart.defaultLocale);
						var Ic = io.w.config.chart.events.beforeMount;
						typeof Ic == "function" && Ic(io, io.w), io.events.fireEvent("beforeMount", [io, io.w]), window.addEventListener("resize", io.windowResizeHandler), function(io, Pc) {
							var Fc = !1;
							if (io.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
								var Ic = io.getBoundingClientRect();
								io.style.display !== "none" && Ic.width !== 0 || (Fc = !0);
							}
							var Lc = new ResizeObserver((function(Ic) {
								Fc && Pc.call(io, Ic), Fc = !0;
							}));
							io.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? Array.from(io.children).forEach((function(io) {
								return Lc.observe(io);
							})) : Lc.observe(io), ds.set(Pc, Lc);
						}(io.el.parentNode, io.parentResizeHandler);
						var Lc = io.el.getRootNode && io.el.getRootNode(), Rc = v.is("ShadowRoot", Lc), zc = io.el.ownerDocument, Bc = Rc ? Lc.getElementById("apexcharts-css") : zc.getElementById("apexcharts-css");
						if (!Bc) {
							var Vc;
							(Bc = document.createElement("style")).id = "apexcharts-css", Bc.textContent = "@keyframes opaque {\n  0% {\n    opacity: 0\n  }\n\n  to {\n    opacity: 1\n  }\n}\n\n@keyframes resizeanim {\n\n  0%,\n  to {\n    opacity: 0\n  }\n}\n\n.apexcharts-canvas {\n  position: relative;\n  direction: ltr !important;\n  user-select: none\n}\n\n.apexcharts-canvas ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 6px\n}\n\n.apexcharts-canvas ::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, .5);\n  box-shadow: 0 0 1px rgba(255, 255, 255, .5);\n  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5)\n}\n\n.apexcharts-inner {\n  position: relative\n}\n\n.apexcharts-text tspan {\n  font-family: inherit\n}\n\nrect.legend-mouseover-inactive,\n.legend-mouseover-inactive rect,\n.legend-mouseover-inactive path,\n.legend-mouseover-inactive circle,\n.legend-mouseover-inactive line,\n.legend-mouseover-inactive text.apexcharts-yaxis-title-text,\n.legend-mouseover-inactive text.apexcharts-yaxis-label {\n  transition: .15s ease all;\n  opacity: .2\n}\n\n.apexcharts-legend-text {\n  padding-left: 15px;\n  margin-left: -15px;\n}\n\n.apexcharts-series-collapsed {\n  opacity: 0\n}\n\n.apexcharts-tooltip {\n  border-radius: 5px;\n  box-shadow: 2px 2px 6px -4px #999;\n  cursor: default;\n  font-size: 14px;\n  left: 62px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 20px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  white-space: nowrap;\n  z-index: 12;\n  transition: .15s ease all\n}\n\n.apexcharts-tooltip.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-tooltip.apexcharts-theme-light {\n  border: 1px solid #e3e3e3;\n  background: rgba(255, 255, 255, .96)\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark {\n  color: #fff;\n  background: rgba(30, 30, 30, .8)\n}\n\n.apexcharts-tooltip * {\n  font-family: inherit\n}\n\n.apexcharts-tooltip-title {\n  padding: 6px;\n  font-size: 15px;\n  margin-bottom: 4px\n}\n\n.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {\n  background: #eceff1;\n  border-bottom: 1px solid #ddd\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {\n  background: rgba(0, 0, 0, .7);\n  border-bottom: 1px solid #333\n}\n\n.apexcharts-tooltip-text-goals-value,\n.apexcharts-tooltip-text-y-value,\n.apexcharts-tooltip-text-z-value {\n  display: inline-block;\n  margin-left: 5px;\n  font-weight: 600\n}\n\n.apexcharts-tooltip-text-goals-label:empty,\n.apexcharts-tooltip-text-goals-value:empty,\n.apexcharts-tooltip-text-y-label:empty,\n.apexcharts-tooltip-text-y-value:empty,\n.apexcharts-tooltip-text-z-value:empty,\n.apexcharts-tooltip-title:empty {\n  display: none\n}\n\n.apexcharts-tooltip-text-goals-label,\n.apexcharts-tooltip-text-goals-value {\n  padding: 6px 0 5px\n}\n\n.apexcharts-tooltip-goals-group,\n.apexcharts-tooltip-text-goals-label,\n.apexcharts-tooltip-text-goals-value {\n  display: flex\n}\n\n.apexcharts-tooltip-text-goals-label:not(:empty),\n.apexcharts-tooltip-text-goals-value:not(:empty) {\n  margin-top: -6px\n}\n\n.apexcharts-tooltip-marker {\n  display: inline-block;\n  position: relative;\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n  line-height: 16px;\n  margin-right: 4px;\n  text-align: center;\n  vertical-align: middle;\n  color: inherit;\n}\n\n.apexcharts-tooltip-marker::before {\n  content: \"\";\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  color: currentcolor;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  font-size: 26px;\n  font-family: Arial, Helvetica, sans-serif;\n  line-height: 14px;\n  font-weight: 900;\n}\n\n.apexcharts-tooltip-marker[shape=\"circle\"]::before {\n  content: \"\\25CF\";\n}\n\n.apexcharts-tooltip-marker[shape=\"square\"]::before,\n.apexcharts-tooltip-marker[shape=\"rect\"]::before {\n  content: \"\\25A0\";\n  transform: translate(-1px, -2px);\n}\n\n.apexcharts-tooltip-marker[shape=\"line\"]::before {\n  content: \"\\2500\";\n}\n\n.apexcharts-tooltip-marker[shape=\"diamond\"]::before {\n  content: \"\\25C6\";\n  font-size: 28px;\n}\n\n.apexcharts-tooltip-marker[shape=\"triangle\"]::before {\n  content: \"\\25B2\";\n  font-size: 22px;\n}\n\n.apexcharts-tooltip-marker[shape=\"cross\"]::before {\n  content: \"\\2715\";\n  font-size: 18px;\n}\n\n.apexcharts-tooltip-marker[shape=\"plus\"]::before {\n  content: \"\\2715\";\n  transform: rotate(45deg) translate(-1px, -1px);\n  font-size: 18px;\n}\n\n.apexcharts-tooltip-marker[shape=\"star\"]::before {\n  content: \"\\2605\";\n  font-size: 18px;\n}\n\n.apexcharts-tooltip-marker[shape=\"sparkle\"]::before {\n  content: \"\\2726\";\n  font-size: 20px;\n}\n\n.apexcharts-tooltip-series-group {\n  padding: 0 10px;\n  display: none;\n  text-align: left;\n  justify-content: left;\n  align-items: center\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {\n  opacity: 1\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active,\n.apexcharts-tooltip-series-group:last-child {\n  padding-bottom: 4px\n}\n\n.apexcharts-tooltip-y-group {\n  padding: 6px 0 5px\n}\n\n.apexcharts-custom-tooltip,\n.apexcharts-tooltip-box {\n  padding: 4px 8px\n}\n\n.apexcharts-tooltip-boxPlot {\n  display: flex;\n  flex-direction: column-reverse\n}\n\n.apexcharts-tooltip-box>div {\n  margin: 4px 0\n}\n\n.apexcharts-tooltip-box span.value {\n  font-weight: 700\n}\n\n.apexcharts-tooltip-rangebar {\n  padding: 5px 8px\n}\n\n.apexcharts-tooltip-rangebar .category {\n  font-weight: 600;\n  color: #777\n}\n\n.apexcharts-tooltip-rangebar .series-name {\n  font-weight: 700;\n  display: block;\n  margin-bottom: 5px\n}\n\n.apexcharts-xaxistooltip,\n.apexcharts-yaxistooltip {\n  opacity: 0;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #eceff1;\n  border: 1px solid #90a4ae\n}\n\n.apexcharts-xaxistooltip {\n  padding: 9px 10px;\n  transition: .15s ease all\n}\n\n.apexcharts-xaxistooltip.apexcharts-theme-dark {\n  background: rgba(0, 0, 0, .7);\n  border: 1px solid rgba(0, 0, 0, .5);\n  color: #fff\n}\n\n.apexcharts-xaxistooltip:after,\n.apexcharts-xaxistooltip:before {\n  left: 50%;\n  border: solid transparent;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none\n}\n\n.apexcharts-xaxistooltip:after {\n  border-color: transparent;\n  border-width: 6px;\n  margin-left: -6px\n}\n\n.apexcharts-xaxistooltip:before {\n  border-color: transparent;\n  border-width: 7px;\n  margin-left: -7px\n}\n\n.apexcharts-xaxistooltip-bottom:after,\n.apexcharts-xaxistooltip-bottom:before {\n  bottom: 100%\n}\n\n.apexcharts-xaxistooltip-top:after,\n.apexcharts-xaxistooltip-top:before {\n  top: 100%\n}\n\n.apexcharts-xaxistooltip-bottom:after {\n  border-bottom-color: #eceff1\n}\n\n.apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #90a4ae\n}\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after,\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {\n  border-bottom-color: rgba(0, 0, 0, .5)\n}\n\n.apexcharts-xaxistooltip-top:after {\n  border-top-color: #eceff1\n}\n\n.apexcharts-xaxistooltip-top:before {\n  border-top-color: #90a4ae\n}\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:after,\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {\n  border-top-color: rgba(0, 0, 0, .5)\n}\n\n.apexcharts-xaxistooltip.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-yaxistooltip {\n  padding: 4px 10px\n}\n\n.apexcharts-yaxistooltip.apexcharts-theme-dark {\n  background: rgba(0, 0, 0, .7);\n  border: 1px solid rgba(0, 0, 0, .5);\n  color: #fff\n}\n\n.apexcharts-yaxistooltip:after,\n.apexcharts-yaxistooltip:before {\n  top: 50%;\n  border: solid transparent;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none\n}\n\n.apexcharts-yaxistooltip:after {\n  border-color: transparent;\n  border-width: 6px;\n  margin-top: -6px\n}\n\n.apexcharts-yaxistooltip:before {\n  border-color: transparent;\n  border-width: 7px;\n  margin-top: -7px\n}\n\n.apexcharts-yaxistooltip-left:after,\n.apexcharts-yaxistooltip-left:before {\n  left: 100%\n}\n\n.apexcharts-yaxistooltip-right:after,\n.apexcharts-yaxistooltip-right:before {\n  right: 100%\n}\n\n.apexcharts-yaxistooltip-left:after {\n  border-left-color: #eceff1\n}\n\n.apexcharts-yaxistooltip-left:before {\n  border-left-color: #90a4ae\n}\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:after,\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {\n  border-left-color: rgba(0, 0, 0, .5)\n}\n\n.apexcharts-yaxistooltip-right:after {\n  border-right-color: #eceff1\n}\n\n.apexcharts-yaxistooltip-right:before {\n  border-right-color: #90a4ae\n}\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:after,\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {\n  border-right-color: rgba(0, 0, 0, .5)\n}\n\n.apexcharts-yaxistooltip.apexcharts-active {\n  opacity: 1\n}\n\n.apexcharts-yaxistooltip-hidden {\n  display: none\n}\n\n.apexcharts-xcrosshairs,\n.apexcharts-ycrosshairs {\n  pointer-events: none;\n  opacity: 0;\n  transition: .15s ease all\n}\n\n.apexcharts-xcrosshairs.apexcharts-active,\n.apexcharts-ycrosshairs.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-ycrosshairs-hidden {\n  opacity: 0\n}\n\n.apexcharts-selection-rect {\n  cursor: move\n}\n\n.svg_select_shape {\n  stroke-width: 1;\n  stroke-dasharray: 10 10;\n  stroke: black;\n  stroke-opacity: 0.1;\n  pointer-events: none;\n  fill: none;\n}\n\n.svg_select_handle {\n  stroke-width: 3;\n  stroke: black;\n  fill: none;\n}\n\n.svg_select_handle_r {\n  cursor: e-resize;\n}\n\n.svg_select_handle_l {\n  cursor: w-resize;\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-zoom {\n  cursor: crosshair\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-pan {\n  cursor: move\n}\n\n.apexcharts-menu-icon,\n.apexcharts-pan-icon,\n.apexcharts-reset-icon,\n.apexcharts-selection-icon,\n.apexcharts-toolbar-custom-icon,\n.apexcharts-zoom-icon,\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  line-height: 24px;\n  color: #6e8192;\n  text-align: center\n}\n\n.apexcharts-menu-icon svg,\n.apexcharts-reset-icon svg,\n.apexcharts-zoom-icon svg,\n.apexcharts-zoomin-icon svg,\n.apexcharts-zoomout-icon svg {\n  fill: #6e8192\n}\n\n.apexcharts-selection-icon svg {\n  fill: #444;\n  transform: scale(.76)\n}\n\n.apexcharts-theme-dark .apexcharts-menu-icon svg,\n.apexcharts-theme-dark .apexcharts-pan-icon svg,\n.apexcharts-theme-dark .apexcharts-reset-icon svg,\n.apexcharts-theme-dark .apexcharts-selection-icon svg,\n.apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg,\n.apexcharts-theme-dark .apexcharts-zoom-icon svg,\n.apexcharts-theme-dark .apexcharts-zoomin-icon svg,\n.apexcharts-theme-dark .apexcharts-zoomout-icon svg {\n  fill: #f3f4f5\n}\n\n.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg,\n.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,\n.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg {\n  fill: #008ffb\n}\n\n.apexcharts-theme-light .apexcharts-menu-icon:hover svg,\n.apexcharts-theme-light .apexcharts-reset-icon:hover svg,\n.apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,\n.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,\n.apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,\n.apexcharts-theme-light .apexcharts-zoomout-icon:hover svg {\n  fill: #333\n}\n\n.apexcharts-menu-icon,\n.apexcharts-selection-icon {\n  position: relative\n}\n\n.apexcharts-reset-icon {\n  margin-left: 5px\n}\n\n.apexcharts-menu-icon,\n.apexcharts-reset-icon,\n.apexcharts-zoom-icon {\n  transform: scale(.85)\n}\n\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon {\n  transform: scale(.7)\n}\n\n.apexcharts-zoomout-icon {\n  margin-right: 3px\n}\n\n.apexcharts-pan-icon {\n  transform: scale(.62);\n  position: relative;\n  left: 1px;\n  top: 0\n}\n\n.apexcharts-pan-icon svg {\n  fill: #fff;\n  stroke: #6e8192;\n  stroke-width: 2\n}\n\n.apexcharts-pan-icon.apexcharts-selected svg {\n  stroke: #008ffb\n}\n\n.apexcharts-pan-icon:not(.apexcharts-selected):hover svg {\n  stroke: #333\n}\n\n.apexcharts-toolbar {\n  position: absolute;\n  z-index: 11;\n  max-width: 176px;\n  text-align: right;\n  border-radius: 3px;\n  padding: 0 6px 2px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center\n}\n\n.apexcharts-menu {\n  background: #fff;\n  position: absolute;\n  top: 100%;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 3px;\n  right: 10px;\n  opacity: 0;\n  min-width: 110px;\n  transition: .15s ease all;\n  pointer-events: none\n}\n\n.apexcharts-menu.apexcharts-menu-open {\n  opacity: 1;\n  pointer-events: all;\n  transition: .15s ease all\n}\n\n.apexcharts-menu-item {\n  padding: 6px 7px;\n  font-size: 12px;\n  cursor: pointer\n}\n\n.apexcharts-theme-light .apexcharts-menu-item:hover {\n  background: #eee\n}\n\n.apexcharts-theme-dark .apexcharts-menu {\n  background: rgba(0, 0, 0, .7);\n  color: #fff\n}\n\n@media screen and (min-width:768px) {\n  .apexcharts-canvas:hover .apexcharts-toolbar {\n    opacity: 1\n  }\n}\n\n.apexcharts-canvas .apexcharts-element-hidden,\n.apexcharts-datalabel.apexcharts-element-hidden,\n.apexcharts-hide .apexcharts-series-points {\n  opacity: 0;\n}\n\n.apexcharts-hidden-element-shown {\n  opacity: 1;\n  transition: 0.25s ease all;\n}\n\n.apexcharts-datalabel,\n.apexcharts-datalabel-label,\n.apexcharts-datalabel-value,\n.apexcharts-datalabels,\n.apexcharts-pie-label {\n  cursor: default;\n  pointer-events: none\n}\n\n.apexcharts-pie-label-delay {\n  opacity: 0;\n  animation-name: opaque;\n  animation-duration: .3s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease\n}\n\n.apexcharts-radialbar-label {\n  cursor: pointer;\n}\n\n.apexcharts-annotation-rect,\n.apexcharts-area-series .apexcharts-area,\n.apexcharts-gridline,\n.apexcharts-line,\n.apexcharts-point-annotation-label,\n.apexcharts-radar-series path:not(.apexcharts-marker),\n.apexcharts-radar-series polygon,\n.apexcharts-toolbar svg,\n.apexcharts-tooltip .apexcharts-marker,\n.apexcharts-xaxis-annotation-label,\n.apexcharts-yaxis-annotation-label,\n.apexcharts-zoom-rect,\n.no-pointer-events {\n  pointer-events: none\n}\n\n.apexcharts-tooltip-active .apexcharts-marker {\n  transition: .15s ease all\n}\n\n.apexcharts-radar-series .apexcharts-yaxis {\n  pointer-events: none;\n}\n\n.resize-triggers {\n  animation: 1ms resizeanim;\n  visibility: hidden;\n  opacity: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden\n}\n\n.contract-trigger:before,\n.resize-triggers,\n.resize-triggers>div {\n  content: \" \";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0\n}\n\n.resize-triggers>div {\n  height: 100%;\n  width: 100%;\n  background: #eee;\n  overflow: auto\n}\n\n.contract-trigger:before {\n  overflow: hidden;\n  width: 200%;\n  height: 200%\n}\n\n.apexcharts-bar-goals-markers {\n  pointer-events: none\n}\n\n.apexcharts-bar-shadows {\n  pointer-events: none\n}\n\n.apexcharts-rangebar-goals-markers {\n  pointer-events: none\n}\n\n.apexcharts-disable-transitions * {\n  transition: none !important;\n}";
							var Hc = ((Vc = io.opts.chart) == null ? void 0 : Vc.nonce) || io.w.config.chart.nonce;
							Hc && Bc.setAttribute("nonce", Hc), Rc ? Lc.prepend(Bc) : zc.head.appendChild(Bc);
						}
						var Uc = io.create(io.w.config.series, {});
						if (!Uc) return Pc(io);
						io.mount(Uc).then((function() {
							typeof io.w.config.chart.events.mounted == "function" && io.w.config.chart.events.mounted(io, io.w), io.events.fireEvent("mounted", [io, io.w]), Pc(Uc);
						})).catch((function(io) {
							Fc(io);
						}));
					} else Fc(/* @__PURE__ */ Error("Element not found"));
				}));
			}
		},
		{
			key: "create",
			value: function(io, Pc) {
				var Fc = this, Ic = this.w;
				new hs(this).initModules();
				var Lc = this.w.globals;
				if (Lc.noData = !1, Lc.animationEnded = !1, !v.elementExists(this.el) || ((this.responsive.checkResponsiveConfig(Pc), Ic.config.xaxis.convertedCatToNumeric) && new Ni(Ic.config).convertCatToNumericXaxis(Ic.config, this.ctx), this.core.setupElements(), Ic.config.chart.type === "treemap" && (Ic.config.grid.show = !1, Ic.config.yaxis[0].show = !1), Lc.svgWidth === 0)) return Lc.animationEnded = !0, null;
				var Rc = io;
				io.forEach((function(io, Pc) {
					io.hidden && (Rc = Fc.legend.legendHelpers.getSeriesAfterCollapsing({ realIndex: Pc }));
				}));
				var zc = Pi.checkComboSeries(Rc, Ic.config.chart.type);
				Lc.comboCharts = zc.comboCharts, Lc.comboBarCount = zc.comboBarCount;
				var Bc = Rc.every((function(io) {
					return io.data && io.data.length === 0;
				}));
				(Rc.length === 0 || Bc && Lc.collapsedSeries.length < 1) && this.series.handleNoData(), this.events.setupEventHandlers(), this.data.parseData(Rc), this.theme.init(), new Vi(this).setGlobalMarkerSize(), this.formatters.setLabelFormatters(), this.titleSubtitle.draw(), Lc.noData && Lc.collapsedSeries.length !== Lc.series.length && !Ic.config.legend.showForSingleSeries || this.legend.init(), this.series.hasAllSeriesEqualX(), Lc.axisCharts && (this.core.coreCalculations(), Ic.config.xaxis.type !== "category" && this.formatters.setLabelFormatters(), this.ctx.toolbar.minX = Ic.globals.minX, this.ctx.toolbar.maxX = Ic.globals.maxX), this.formatters.heatmapLabelFormatters(), new Pi(this).getLargestMarkerSize(), this.dimensions.plotCoords();
				var Vc = this.core.xySettings();
				this.grid.createGridMask();
				var Hc = this.core.plotChartType(Rc, Vc), Uc = new qi(this);
				return Uc.bringForward(), Ic.config.dataLabels.background.enabled && Uc.dataLabelsBackground(), this.core.shiftGraphPosition(), Ic.globals.dataPoints > 50 && Ic.globals.dom.elWrap.classList.add("apexcharts-disable-transitions"), {
					elGraph: Hc,
					xyRatios: Vc,
					dimensions: { plot: {
						left: Ic.globals.translateX,
						top: Ic.globals.translateY,
						width: Ic.globals.gridWidth,
						height: Ic.globals.gridHeight
					} }
				};
			}
		},
		{
			key: "mount",
			value: function() {
				var io = this, Pc = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, Fc = this, Ic = Fc.w;
				return new Promise((function(Lc, Rc) {
					if (Fc.el === null) return Rc(/* @__PURE__ */ Error("Not enough data to display or target element not found"));
					(Pc === null || Ic.globals.allSeriesCollapsed) && Fc.series.handleNoData(), Fc.grid = new Ki(Fc);
					var zc, Bc, Vc = Fc.grid.drawGrid();
					if ((Fc.annotations = new Fi(Fc), Fc.annotations.drawImageAnnos(), Fc.annotations.drawTextAnnos(), Ic.config.grid.position === "back") && (Vc && Ic.globals.dom.elGraphical.add(Vc.el), Vc != null && (zc = Vc.elGridBorders) != null && zc.node && Ic.globals.dom.elGraphical.add(Vc.elGridBorders)), Array.isArray(Pc.elGraph)) for (var Hc = 0; Hc < Pc.elGraph.length; Hc++) Ic.globals.dom.elGraphical.add(Pc.elGraph[Hc]);
					else Ic.globals.dom.elGraphical.add(Pc.elGraph);
					Ic.config.grid.position === "front" && (Vc && Ic.globals.dom.elGraphical.add(Vc.el), Vc != null && (Bc = Vc.elGridBorders) != null && Bc.node && Ic.globals.dom.elGraphical.add(Vc.elGridBorders)), Ic.config.xaxis.crosshairs.position === "front" && Fc.crosshairs.drawXCrosshairs(), Ic.config.yaxis[0].crosshairs.position === "front" && Fc.crosshairs.drawYCrosshairs(), Ic.config.chart.type !== "treemap" && Fc.axes.drawAxis(Ic.config.chart.type, Vc);
					var Uc = new Qi(io.ctx, Vc), Wc = new ia(io.ctx, Vc);
					if (Vc !== null && (Uc.xAxisLabelCorrections(Vc.xAxisTickWidth), Wc.setYAxisTextAlignments(), Ic.config.yaxis.map((function(io, Pc) {
						Ic.globals.ignoreYAxisIndexes.indexOf(Pc) === -1 && Wc.yAxisTitleRotate(Pc, io.opposite);
					}))), Fc.annotations.drawAxesAnnotations(), !Ic.globals.noData) {
						if (Ic.config.tooltip.enabled && !Ic.globals.noData && Fc.w.globals.tooltip.drawTooltip(Pc.xyRatios), Ic.globals.axisCharts && (Ic.globals.isXNumeric || Ic.config.xaxis.convertedCatToNumeric || Ic.globals.isRangeBar)) (Ic.config.chart.zoom.enabled || Ic.config.chart.selection && Ic.config.chart.selection.enabled || Ic.config.chart.pan && Ic.config.chart.pan.enabled) && Fc.zoomPanSelection.init({ xyRatios: Pc.xyRatios });
						else {
							var Gc = Ic.config.chart.toolbar.tools;
							[
								"zoom",
								"zoomin",
								"zoomout",
								"selection",
								"pan",
								"reset"
							].forEach((function(io) {
								Gc[io] = !1;
							}));
						}
						Ic.config.chart.toolbar.show && !Ic.globals.allSeriesCollapsed && Fc.toolbar.createToolbar();
					}
					Ic.globals.memory.methodsToExec.length > 0 && Ic.globals.memory.methodsToExec.forEach((function(io) {
						io.method(io.params, !1, io.context);
					})), Ic.globals.axisCharts || Ic.globals.noData || Fc.core.resizeNonAxisCharts(), Lc(Fc);
				}));
			}
		},
		{
			key: "destroy",
			value: function() {
				window.removeEventListener("resize", this.windowResizeHandler), function(io, Pc) {
					var Fc = ds.get(Pc);
					Fc && (Fc.disconnect(), ds.delete(Pc));
				}(this.el.parentNode, this.parentResizeHandler);
				var io = this.w.config.chart.id;
				io && Apex._chartInstances.forEach((function(Pc, Fc) {
					Pc.id === v.escapeString(io) && Apex._chartInstances.splice(Fc, 1);
				})), new cs(this.ctx).clear({ isUpdating: !1 });
			}
		},
		{
			key: "updateOptions",
			value: function(io) {
				var Pc = this, Fc = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], Ic = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], Lc = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3], Rc = !(arguments.length > 4 && arguments[4] !== void 0) || arguments[4], zc = this.w;
				return zc.globals.selection = void 0, this.lastUpdateOptions && JSON.stringify(this.lastUpdateOptions) === JSON.stringify(io) ? this : (this.lastUpdateOptions = v.clone(io), io.series && (this.series.resetSeries(!1, !0, !1), io.series.length && io.series[0].data && (io.series = io.series.map((function(io, Fc) {
					return Pc.updateHelpers._extendSeries(io, Fc);
				}))), this.updateHelpers.revertDefaultAxisMinMax()), io.xaxis && (io = this.updateHelpers.forceXAxisUpdate(io)), io.yaxis && (io = this.updateHelpers.forceYAxisUpdate(io)), zc.globals.collapsedSeriesIndices.length > 0 && this.series.clearPreviousPaths(), io.theme && (io = this.theme.updateThemeOptions(io)), this.updateHelpers._updateOptions(io, Fc, Ic, Lc, Rc));
			}
		},
		{
			key: "updateSeries",
			value: function() {
				var io = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], Pc = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], Fc = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
				return this.series.resetSeries(!1), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(io, Pc, Fc);
			}
		},
		{
			key: "appendSeries",
			value: function(io) {
				var Pc = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], Fc = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], Ic = this.w.config.series.slice();
				return Ic.push(io), this.series.resetSeries(!1), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(Ic, Pc, Fc);
			}
		},
		{
			key: "appendData",
			value: function(io) {
				var Pc = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], Fc = this;
				Fc.w.globals.dataChanged = !0, Fc.series.getPreviousPaths();
				for (var Ic = Fc.w.config.series.slice(), Lc = 0; Lc < Ic.length; Lc++) if (io[Lc] !== null && io[Lc] !== void 0) for (var Rc = 0; Rc < io[Lc].data.length; Rc++) Ic[Lc].data.push(io[Lc].data[Rc]);
				return Fc.w.config.series = Ic, Pc && (Fc.w.globals.initialSeries = v.clone(Fc.w.config.series)), this.update();
			}
		},
		{
			key: "update",
			value: function(io) {
				var Pc = this;
				return new Promise((function(Fc, Ic) {
					if (Pc.lastUpdateOptions && JSON.stringify(Pc.lastUpdateOptions) === JSON.stringify(io)) return Fc(Pc);
					Pc.lastUpdateOptions = v.clone(io), new cs(Pc.ctx).clear({ isUpdating: !0 });
					var Lc = Pc.create(Pc.w.config.series, io);
					if (!Lc) return Fc(Pc);
					Pc.mount(Lc).then((function() {
						typeof Pc.w.config.chart.events.updated == "function" && Pc.w.config.chart.events.updated(Pc, Pc.w), Pc.events.fireEvent("updated", [Pc, Pc.w]), Pc.w.globals.isDirty = !0, Fc(Pc);
					})).catch((function(io) {
						Ic(io);
					}));
				}));
			}
		},
		{
			key: "getSyncedCharts",
			value: function() {
				var io = this.getGroupedCharts(), Pc = [this];
				return io.length && (Pc = [], io.forEach((function(io) {
					Pc.push(io);
				}))), Pc;
			}
		},
		{
			key: "getGroupedCharts",
			value: function() {
				var io = this;
				return Apex._chartInstances.filter((function(io) {
					if (io.group) return !0;
				})).map((function(Pc) {
					return io.w.config.chart.group === Pc.group ? Pc.chart : io;
				}));
			}
		},
		{
			key: "toggleSeries",
			value: function(io) {
				return this.series.toggleSeries(io);
			}
		},
		{
			key: "highlightSeriesOnLegendHover",
			value: function(io, Pc) {
				return this.series.toggleSeriesOnHover(io, Pc);
			}
		},
		{
			key: "showSeries",
			value: function(io) {
				this.series.showSeries(io);
			}
		},
		{
			key: "hideSeries",
			value: function(io) {
				this.series.hideSeries(io);
			}
		},
		{
			key: "highlightSeries",
			value: function(io) {
				this.series.highlightSeries(io);
			}
		},
		{
			key: "isSeriesHidden",
			value: function(io) {
				this.series.isSeriesHidden(io);
			}
		},
		{
			key: "resetSeries",
			value: function() {
				var io = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0], Pc = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
				this.series.resetSeries(io, Pc);
			}
		},
		{
			key: "addEventListener",
			value: function(io, Pc) {
				this.events.addEventListener(io, Pc);
			}
		},
		{
			key: "removeEventListener",
			value: function(io, Pc) {
				this.events.removeEventListener(io, Pc);
			}
		},
		{
			key: "addXaxisAnnotation",
			value: function(io) {
				var Pc = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], Fc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, Ic = this;
				Fc && (Ic = Fc), Ic.annotations.addXaxisAnnotationExternal(io, Pc, Ic);
			}
		},
		{
			key: "addYaxisAnnotation",
			value: function(io) {
				var Pc = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], Fc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, Ic = this;
				Fc && (Ic = Fc), Ic.annotations.addYaxisAnnotationExternal(io, Pc, Ic);
			}
		},
		{
			key: "addPointAnnotation",
			value: function(io) {
				var Pc = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], Fc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, Ic = this;
				Fc && (Ic = Fc), Ic.annotations.addPointAnnotationExternal(io, Pc, Ic);
			}
		},
		{
			key: "clearAnnotations",
			value: function() {
				var io = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0, Pc = this;
				io && (Pc = io), Pc.annotations.clearAnnotations(Pc);
			}
		},
		{
			key: "removeAnnotation",
			value: function(io) {
				var Pc = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, Fc = this;
				Pc && (Fc = Pc), Fc.annotations.removeAnnotation(Fc, io);
			}
		},
		{
			key: "getChartArea",
			value: function() {
				return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner");
			}
		},
		{
			key: "getSeriesTotalXRange",
			value: function(io, Pc) {
				return this.coreUtils.getSeriesTotalsXRange(io, Pc);
			}
		},
		{
			key: "getHighestValueInSeries",
			value: function() {
				var io = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
				return new ea(this.ctx).getMinYMaxY(io).highestY;
			}
		},
		{
			key: "getLowestValueInSeries",
			value: function() {
				var io = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
				return new ea(this.ctx).getMinYMaxY(io).lowestY;
			}
		},
		{
			key: "getSeriesTotal",
			value: function() {
				return this.w.globals.seriesTotals;
			}
		},
		{
			key: "toggleDataPointSelection",
			value: function(io, Pc) {
				return this.updateHelpers.toggleDataPointSelection(io, Pc);
			}
		},
		{
			key: "zoomX",
			value: function(io, Pc) {
				this.ctx.toolbar.zoomUpdateOptions(io, Pc);
			}
		},
		{
			key: "setLocale",
			value: function(io) {
				this.localization.setCurrentLocaleValues(io);
			}
		},
		{
			key: "dataURI",
			value: function(io) {
				return new Ji(this.ctx).dataURI(io);
			}
		},
		{
			key: "getSvgString",
			value: function(io) {
				return new Ji(this.ctx).getSvgString(io);
			}
		},
		{
			key: "exportToCSV",
			value: function() {
				var io = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				return new Ji(this.ctx).exportToCSV(io);
			}
		},
		{
			key: "paper",
			value: function() {
				return this.w.globals.dom.Paper;
			}
		},
		{
			key: "_parentResizeCallback",
			value: function() {
				this.w.globals.animationEnded && this.w.config.chart.redrawOnParentResize && this._windowResize();
			}
		},
		{
			key: "_windowResize",
			value: function() {
				var io = this;
				clearTimeout(this.w.globals.resizeTimer), this.w.globals.resizeTimer = window.setTimeout((function() {
					io.w.globals.resized = !0, io.w.globals.dataChanged = !1, io.ctx.update();
				}), 150);
			}
		},
		{
			key: "_windowResizeHandler",
			value: function() {
				var io = this.w.config.chart.redrawOnWindowResize;
				typeof io == "function" && (io = io()), io && this._windowResize();
			}
		}
	], [
		{
			key: "getChartByID",
			value: function(io) {
				var Pc = v.escapeString(io);
				if (Apex._chartInstances) {
					var Fc = Apex._chartInstances.filter((function(io) {
						return io.id === Pc;
					}))[0];
					return Fc && Fc.chart;
				}
			}
		},
		{
			key: "initOnLoad",
			value: function() {
				for (var Pc = document.querySelectorAll("[data-apexcharts]"), Fc = 0; Fc < Pc.length; Fc++) new io(Pc[Fc], JSON.parse(Pc[Fc].getAttribute("data-options"))).render();
			}
		},
		{
			key: "exec",
			value: function(io, Pc) {
				var Fc = this.getChartByID(io);
				if (Fc) {
					Fc.w.globals.isExecCalled = !0;
					var Ic = null;
					if (Fc.publicMethods.indexOf(Pc) !== -1) {
						var Lc = [...arguments].slice(2);
						Ic = Fc[Pc].apply(Fc, Lc);
					}
					return Ic;
				}
			}
		},
		{
			key: "merge",
			value: function(io, Pc) {
				return v.extend(io, Pc);
			}
		}
	]), io;
}();
export { us as default };
