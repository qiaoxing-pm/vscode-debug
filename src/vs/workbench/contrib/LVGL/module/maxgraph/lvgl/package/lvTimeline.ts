import { Module } from "./LvglModule.js"
import LvglAnimation from "./lvglAnimataions.js";
import type { LvglBase } from "./shapes/lvglBase.js";

class LvTimeine {
	lvTimelineT: LvAnimTimelineT;
	animations: LvglAnimation[] = [];
	aniName: string;
	startTime = 0;
	constructor(aniName: string) {
		this.lvTimelineT = Module.lv_anim_timeline_create();
		this.aniName = aniName;
	}

	addAnim(anim: LvglAnimation, startTime: number) {
		if (!anim || !this.lvTimelineT) return;
		this.animations.push(anim);
		this.startTime = startTime;
		Module.lv_anim_timeline_add(this.lvTimelineT, startTime, anim.lvAnim);
	}

	start() {
		if (!this.lvTimelineT) return;
		Module.lv_anim_timeline_start(this.lvTimelineT);
	}

	toXML(doc: XMLDocument): Element {
		const ele = doc.createElement("Animation");
		// Add attributes or child elements as needed
		ele.setAttribute("name", this.aniName);
		ele.setAttribute("startTime", this.startTime.toString());
		for (const anim of this.animations) {
			const animEle = anim.toXML(doc);
			ele.appendChild(animEle);
		}
		return ele;
	}

	static fromXML(ele: Element, findTarget: (id: string) => LvglBase): LvTimeine {
		const name = ele.getAttribute("name") || "default";
		const startTime = parseInt(ele.getAttribute("startTime") || "0");
		const timeline = new LvTimeine(name);
		const children = ele.children;
		for (const child of children) {
			if (child.tagName === "Property") {
				const ani = LvglAnimation.fromXML(child, findTarget);
				timeline.addAnim(ani, startTime);
			}
		}
		return timeline;
	}
}

export default LvTimeine;
