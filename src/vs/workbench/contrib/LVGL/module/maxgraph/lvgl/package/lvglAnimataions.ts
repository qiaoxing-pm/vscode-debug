import type { LvglBase } from "./shapes/lvglBase.js"
import { Module } from "./LvglModule.js"

type JsCallBack = (obj: number, v: number) => void;
function genFunc(type: number): JsCallBack {
	if (type === 0) {
		return (o: number, v: number) => {
			const obj = Module.lv_int_to_obj(o);
			Module.lv_obj_set_x(obj, v);
		};
	} else if (type === 1) {
		return (o: number, v: number) => {
			const obj = Module.lv_int_to_obj(o);
			Module.lv_obj_set_y(obj, v);
		};
	} else if (type === 2) {
		return (o: number, v: number) => {
			const obj = Module.lv_int_to_obj(o);
			Module.lv_obj_set_width(obj, v);
		};
	} else if (type === 3) {
		return (o: number, v: number) => {
			const obj = Module.lv_int_to_obj(o);
			Module.lv_obj_set_height(obj, v);
		};
	}
	return () => { };
}

class LvglAnimation {
	target: LvglBase | null = null;
	targetId: string = ""; // 事件触发的目标对象的 ID
	type = 0; // 动画类型
	startValue = 0
	endValue = 255
	// duration: number
	delay = 0
	isRelative = false
	isInstant = false
	time = 1000
	playbackDelay = 0
	playbackTime = 0
	loopDelay = 0
	loopCnt = 1
	isInfinite = false
	curve = 0 // 线性、缓入、缓出、缓入缓出
	lvAnim: LvAnimT;
	func: JsCallBack;

	constructor(type: number = 0) {
		this.lvAnim = new Module.lv_anim_t();
		Module.lv_anim_init(this.lvAnim);
		this.type = type;
		this.func = genFunc(type);

	}

	setCurve(curve: number) {
		this.curve = curve;
		if (this.curve === 0) {
			Module.lv_anim_path_linear(this.lvAnim);
		} else if (this.curve === 1) {
			Module.lv_anim_path_ease_in(this.lvAnim);
		} else if (this.curve === 2) {
			Module.lv_anim_path_ease_out(this.lvAnim);
		} else if (this.curve === 3) {
			Module.lv_anim_path_ease_in_out(this.lvAnim);
		} else if (this.curve === 4) {
			Module.lv_anim_path_bounce(this.lvAnim);
		} else if (this.curve === 5) {
			Module.lv_anim_path_overshoot(this.lvAnim);
		} else if (this.curve === 6) {
			Module.lv_anim_path_step(this.lvAnim);
		}
	}


	play(target?: LvglBase) {
		// this.target = target;
		if (!this.target) {
			console.warn("Target is not set for the animation.");
			return;
		}
		let funT = Module.addFunction(this.func, "vii");
		Module.lv_anim_delete(this.lvAnim, funT);
		funT = Module.addFunction(this.func, "vii");
		Module.lv_anim_set_var(this.lvAnim, this.target.lvglObj);
		Module.lv_anim_set_exec_cb(this.lvAnim, funT);
		Module.lv_anim_start(this.lvAnim);
	}

	setTarget(target: LvglBase) {
		this.target = target;
		this.targetId = target.getId();
		Module.lv_anim_set_var(this.lvAnim, this.target.lvglObj);
	}

	setProperty(property: AniPropertyType) {
		this.endValue = property.endValue
		this.delay = property.delay || 0
		this.isRelative = property.isRelative;
		this.isInstant = property.isInstant;
		this.time = property.time;
		this.playbackDelay = property.playbackDelay;
		this.playbackTime = property.playbackTime;
		this.loopDelay = property.loopDelay;
		this.isInfinite = property.isInfinite;
		if (this.isInfinite) {
			this.loopCnt = Module.LV_ANIM_REPEAT_INFINITE;
		} else {
			this.loopCnt = property.loopCnt;
		}
		this.curve = property.curve || 0; // 默认线性
		this.setCurve(property.curve);

		Module.lv_anim_init(this.lvAnim);
		Module.lv_anim_set_values(this.lvAnim, this.startValue, this.endValue);
		Module.lv_anim_set_duration(this.lvAnim, this.time);
		Module.lv_anim_set_delay(this.lvAnim, this.delay);
		Module.lv_anim_set_repeat_delay(this.lvAnim, this.loopDelay);
		Module.lv_anim_set_playback_delay(this.lvAnim, this.playbackDelay);
		Module.lv_anim_set_playback_time(this.lvAnim, this.playbackTime);
		Module.lv_anim_set_repeat_count(this.lvAnim, this.loopCnt);
	}

	destroy() {
	}

	toXML(doc: XMLDocument): Element {
		const ele = doc.createElement("Property");
		if (this.target) {
			ele.setAttribute("targetId", this.target.getId());
		}
		ele.setAttribute("type", this.type.toString());
		ele.setAttribute("startValue", this.startValue.toString());
		ele.setAttribute("endValue", this.endValue.toString());
		ele.setAttribute("delay", this.delay.toString());
		ele.setAttribute("isRelative", this.isRelative.toString());
		ele.setAttribute("isInstant", this.isInstant.toString());
		ele.setAttribute("time", this.time.toString());
		ele.setAttribute("playbackDelay", this.playbackDelay.toString());
		ele.setAttribute("playbackTime", this.playbackTime.toString());
		ele.setAttribute("loopDelay", this.loopDelay.toString());
		ele.setAttribute("loopCnt", this.loopCnt.toString());
		ele.setAttribute("isInfinite", this.isInfinite.toString());
		ele.setAttribute("curve", this.curve.toString());

		return ele;
	}

	static fromXML(ele: Element, findTarget: (id: string) => LvglBase): LvglAnimation {
		const anim = new LvglAnimation();
		const aniProperty: AniPropertyType = {
			id: "",
			name: " ",
			targetId: ele.getAttribute("targetId") || "",
			startValue: parseInt(ele.getAttribute("startValue") || "0"),
			endValue: parseInt(ele.getAttribute("endValue") || "255"),
			delay: parseInt(ele.getAttribute("delay") || "0"),
			isRelative: ele.getAttribute("isRelative") === "true",
			isInstant: ele.getAttribute("isInstant") === "true",
			time: parseInt(ele.getAttribute("time") || "1000"),
			playbackDelay: parseInt(ele.getAttribute("playbackDelay") || "0"),
			playbackTime: parseInt(ele.getAttribute("playbackTime") || "0"),
			loopDelay: parseInt(ele.getAttribute("loopDelay") || "0"),
			loopCnt: parseInt(ele.getAttribute("loopCnt") || "1"),
			isInfinite: ele.getAttribute("isInfinite") === "true",
			curve: parseInt(ele.getAttribute("curve") || "0")
		}
		anim.type = parseInt(ele.getAttribute("type") || "0");
		anim.target = findTarget(aniProperty.targetId || "");
		anim.setProperty(aniProperty);

		return anim;
	}
}

export default LvglAnimation
