import { genRandomStr } from "../../util.js";
import type { LvglBase } from "./shapes/lvglBase.js";
import { Module } from "./LvglModule.js";
import { writeVariablesToNode } from "../tools/variable.js";

enum LvglEventActionType {
	SET_PROPERTY = 0,
	CALL_FUNCTION = 1,
	CHANGE_VARIABLE = 2,
	CHANGE_SCREEN = 3,
}

export type LvActionData = {
	id: string;
	type: number; // 不同的 action 有不同的 type
	actionName: number; // 事件类型
	value: string | number | boolean;
	variable: string; // 变量名
	varOperator: "set" | "modify"; // 操作符
	functionName: string;
	trigger: number;
	targetId: string; // 事件触发的目标对象的 ID
	isDelete: boolean;
}

export type LvEventData = {
	name: string;
	trigger: number;
	actions: LvActionData[];
}

export class LvglEventAction {
	id: string = genRandomStr(8);
	type: number = 0;
	actionName: number = 0; // 事件类型
	value: string | number | boolean = "";
	variable: string = ""; // 变量名
	varOperator: "set" | "modify" = "set"; // 操作符
	functionName: string = "";
	trigger: number = 1;
	lvglObj: LvglBase; // 事件绑定的 lvgl 对象
	targetId: string = ""; // 事件触发的目标对象的 ID 尽管可以通过target获取targetId, 但在fromXML中需要用到targetId来查找对象
	target: LvglBase | null = null; // 事件触发的目标对象
	isDelete: boolean = false;
	func: ((event: LvEventT) => void) | null = null;

	constructor(lvglObj: LvglBase, actionName: number) {
		this.lvglObj = lvglObj;
		this.actionName = actionName;
		console.log("LvglEventAction created", this.id, this.actionName);
	}

	genFunc(v: string | number | boolean): (event: LvEventT) => void {
		if (!this.target) {
			return (event: LvEventT) => { };
		}
		let func = (event: LvEventT) => { };
		if (this.actionName === LvglEventActionType.SET_PROPERTY) {
			const value = Number(v);
			if (this.type === 0) {
				func = (event: LvEventT) => {
					this.target!._layout!.width = value;
					console.log("set width");
				}
			} else if (this.type === 1) {
				func = () => {
					this.target!._layout!.height = value;
					console.log("set hight");
				}
			}
			else if (this.type === 2) {
				func = () => {
					this.target!._layout!.x = value;
				}
			} else if (this.type === 3) {
				func = () => {
					this.target!._layout!.y = value;
				}
			} else if (this.type === 4) {
				func = () => {
					this.target!.setValue(v);
				}
			}

		} else if (this.actionName === LvglEventActionType.CALL_FUNCTION) {

		} else if (this.actionName === LvglEventActionType.CHANGE_VARIABLE) {

		} else if (this.actionName === LvglEventActionType.CHANGE_SCREEN) {

		}
		return func;
	}

	pickAttributes(): LvActionData {
		return {
			id: this.id,
			type: this.type,
			actionName: this.actionName,
			value: this.value,
			variable: this.variable,
			varOperator: this.varOperator,
			functionName: this.functionName,
			trigger: this.trigger,
			targetId: this.targetId,
			isDelete: this.isDelete,
		}
	}

	setTarget(target: LvglBase) {
		this.target = target;
		this.targetId = target.getId();
	}

	apply(type?: number, value?: string) {
		if (type !== undefined) {
			this.type = type;
		}
		if (value !== undefined) {
			this.value = value;
		}
		this.func = this.genFunc(this.value);
		console.log(this.id, this.value, this.type);
		const funt = Module.addFunction(this.func, "vp");
		// 1 clicked
		Module.lv_obj_add_event_cb(this.lvglObj.lvglObj, funt, this.trigger, this.value);
	}

	toXML(doc: XMLDocument): Element {
		const ele = doc.createElement("action");
		ele.setAttribute("id", this.id);
		ele.setAttribute("actionName", this.actionName.toString());
		if (this.actionName === LvglEventActionType.SET_PROPERTY && this.targetId) {
			ele.setAttribute("type", this.type.toString());
			ele.setAttribute("targetId", this.targetId);
		} else if (this.actionName === LvglEventActionType.CALL_FUNCTION && this.functionName != "") {
			ele.setAttribute("functionName", this.functionName);
		} else if (this.actionName === LvglEventActionType.CHANGE_VARIABLE) {
			ele.setAttribute("varOperator", this.varOperator);
			writeVariablesToNode(ele, this.variable);
		} else if (this.actionName === LvglEventActionType.CHANGE_SCREEN) {
			ele.setAttribute("isDelete", this.isDelete.toString());
		}
		if (this.value !== "") {
			ele.setAttribute("value", this.value.toString());
		}
		return ele;
	}

	static fromXML(ele: Element, lvglObj: LvglBase): LvglEventAction {
		const action = new LvglEventAction(lvglObj, parseInt(ele.getAttribute("actionName") || "0"));
		action.id = ele.getAttribute("id") || "";
		action.functionName = ele.getAttribute("functionName") || "";
		action.value = ele.getAttribute("value") || "";
		action.targetId = ele.getAttribute("targetId") || "";
		action.type = parseInt(ele.getAttribute("type") || "0");
		action.varOperator = ele.getAttribute("varOperator") as "set" | "modify";
		action.variable = ele.getAttribute("variableId") || "";
		action.isDelete = ele.getAttribute("isDelete") === "true";
		return action;
	}

	destroy() {
		if (this.lvglObj && this.func) {
			const cb = Module.addFunction(this.func, "vp");
			Module.lv_obj_remove_event_cb(this.lvglObj.lvglObj, cb);
		}
	}
}

export default class LvglEvent {
	name: string;
	// 更改时，要改变所有事件的触发器
	_trigger: number;
	get trigger() {
		return this._trigger;
	}
	set trigger(value: number) {
		console.log("set trigger", value);
		this._trigger = value;
		// this.actions.forEach(action => {
		//   action.trigger = value;
		//   // 重新设置回调函数
		//   const actionData: ActionData = {
		//     actionName: action.actionName,
		//     type: action.type,
		//     value: action.value,
		//     targetId: action.target?.getId() || ""
		//   }
		//   action.apply(actionData);
		// });
	}

	actions: LvglEventAction[] = [];

	constructor(name: string, trigger: number, type?: number) {
		this.name = name;
		this._trigger = trigger;
	}

	pickAttributes(): LvEventData {
		return {
			name: this.name,
			trigger: this._trigger,
			actions: this.actions.map(a => a.pickAttributes()),
		}
	}

	// 生成回调函数设置给目标对象，在反序列化后单独调用
	// 不能在fromXML中调用，因为回调函数影响到的对象可能还没有被创建
	initEventAction(findFunc: (id: string) => LvglBase | null) {
		for (let i = 0; i < this.actions.length; i++) {
			const action = this.actions[i];

			action.trigger = this._trigger;
			const target = findFunc(action.targetId);
			if (!target) continue;
			action.setTarget(target);
			action.apply();
		}
	}

	addAction(data: ActionData, lvglObj: LvglBase) {
		const action = new LvglEventAction(lvglObj, data.actionName);
		this.actions.push(action);
	}

	removeAction(actionIdx: number) {
		if (actionIdx < 0 || actionIdx >= this.actions.length) {
			return;
		}
		const action = this.actions[actionIdx];
		action.destroy();
		this.actions.splice(actionIdx, 1);
	}

	// 使回调函数生效
	applyAction(actionIdx: number, target: LvglBase, data: ActionData) {
		if (actionIdx < 0 || actionIdx >= this.actions.length) {
			return;
		}
		const action = this.actions[actionIdx];
		action.setTarget(target);
		action.apply();
	}

	destroy() {
		for (const action of this.actions) {
			action.destroy();
		}
		this.actions = [];
	}

	toXML(doc: XMLDocument): Element {
		const ele = doc.createElement("event");
		ele.setAttribute("name", this.name);
		// ele.setAttribute("actionName", this.actionName.toString());
		ele.setAttribute("trigger", this._trigger.toString());
		for (const action of this.actions) {
			ele.appendChild(action.toXML(doc));
		}
		return ele;
	}

	static fromXML(ele: Element, lvglObj: LvglBase): LvglEvent {
		const name = ele.getAttribute("name") || "";
		// const actionName = parseInt(ele.getAttribute("actionName") || "0");
		const trigger = parseInt(ele.getAttribute("trigger") || "0");
		const actionType = parseInt(ele.getAttribute("actionType") || "0");
		const event = new LvglEvent(name, trigger, actionType);

		for (const child of ele.children) {
			if (child.tagName !== "action") {
				continue;
			}
			const action = LvglEventAction.fromXML(child, lvglObj);
			event.actions.push(action);
		}

		return event;

	}
}
