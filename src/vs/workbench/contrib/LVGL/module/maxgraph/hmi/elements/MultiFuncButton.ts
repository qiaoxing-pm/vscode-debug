import type { Geometry } from "../../packages/core/src/index.js";
import { BaseProperty, PureData } from "./PureData.js";
import HMiBase from "./HMiBase.js";
import { ButtonDisplay } from "./Button.js";
import { Module } from "../../lvgl/package/LvglModule.js";
import {
	addr_type_t,
	data_type_t,
	lv_multifuncbutton_action_t,
} from "../static/enums.js";
import { fromXML, toXML } from "../util/xml.js";

export type MultiAction = "bit" | "word" | "screen";
export class MultiFuncBtnAction {
	type: MultiAction;
	_addr: number = 0;
	_addrType: addr_type_t = 0;
	_value: number = 0;
	_dataType: data_type_t = 0;
	_action: lv_multifuncbutton_action_t = 0;
	lvObj: LvObjT;
	index: number;

	constructor(lvObj: LvObjT, type: MultiAction, index: number) {
		this.lvObj = lvObj;
		this.type = type;
		this.index = index;
	}

	set addr(value: number) {
		this._addr = value;
		Module.lv_multifuncbutton_set_addr(
			this.lvObj,
			this.index,
			this._addr,
			this._addrType
		);
	}
	get addr(): number {
		return this._addr;
	}
	set addrType(value: addr_type_t) {
		this._addrType = value;
		Module.lv_multifuncbutton_set_addr(
			this.lvObj,
			this.index,
			this._addr,
			this._addrType
		);
	}
	get addrType(): addr_type_t {
		return this._addrType;
	}
	set value(value: number) {
		this._value = value;
		Module.lv_multifuncbutton_set_value(this.lvObj, this.index, this._value);
	}
	get value(): number {
		return this._value;
	}

	get dataType(): data_type_t {
		return this._dataType;
	}
	set dataType(value: data_type_t) {
		this._dataType = value;
		Module.lv_multifuncbutton_set_data_type(
			this.lvObj,
			this.index,
			this._dataType
		);
	}

	set action(value: lv_multifuncbutton_action_t) {
		this._action = value;
		Module.lv_multifuncbutton_set_action(this.lvObj, this.index, this._action);
	}

	get action(): lv_multifuncbutton_action_t {
		return this._action;
	}

	pickAttributes(): { [key: string]: any } {
		return {
			type: this.type,
			addr: this._addr,
			addrType: this._addrType,
			value: this._value,
			action: this._action,
		};
	}

	toXML(doc: XMLDocument): Element {
		const actionElem = doc.createElement("Action");
		const res: any = {};
		res.type = this.type;
		if (this.action) res.action = this._action;
		if (this.type === "bit" || this.type === "word") {
			if (this.addr) res.addr = this._addr;
			if (this.addrType) res.addrType = this._addrType;
			if (this.type === "word" && this._value) res.value = this._value;
		} else {
			if (this._value) res.value = this._value;
		}
		// 存在必须创建节点！！！
		// if (Object.keys(res).length === 1) {
		//   return null;
		// }
		toXML(doc, actionElem, res);
		return actionElem;
	}

	fromXML(ele: Element): void {
		fromXML(ele, this);
	}
}

export class MultiFuncButtonProperty extends BaseProperty {
	// _dataType: data_type_t = data_type_t.INT16;
	override addrValid = false;
	_press = false;
	actions: MultiFuncBtnAction[] = [];

	constructor(lvObj: LvObjT) {
		super(lvObj);
		this._press = Module.lv_multifuncbutton_get_press(lvObj);
	}

	get addr() {
		return this._addr;
	}
	set addr(value: number) {
		this._addr = value;
	}
	get addrType(): number {
		return this._addrType;
	}
	set addrType(value: number) {
		this._addrType = value;
	}

	get press(): boolean {
		return this._press;
	}
	set press(value: boolean) {
		this._press = value;
		Module.lv_multifuncbutton_set_press(this.lvObj, value);
	}

	addAction(type: MultiAction) {
		// 长度不需要减1
		const action = new MultiFuncBtnAction(
			this.lvObj,
			type,
			this.actions.length
		);
		this.actions.push(action);
		return action.pickAttributes();
	}
	deleteAction(idx: number) {
		if (idx < 0 || idx >= this.actions.length) {
			return;
		}
		this.actions.splice(idx, 1);
		// 更新索引
		this.actions.forEach((action, index) => {
			action.index = index;
		});
	}

	override pickAttributes(): { [key: string]: any } {
		const attrs = super.pickAttributes();
		delete attrs.addr;
		delete attrs.addrType;
		attrs.addAction = this.addAction.bind(this);
		attrs.deleteAction = this.deleteAction.bind(this);
		attrs.actions = this.actions.map((action) => action.pickAttributes());
		return attrs;
	}

	override toXML(doc: Document, name: string, defaultObj: PureData): Element | null {
		let ele = super.toXML(doc, name, defaultObj);
		if (!ele && this.actions.length === 0) {
			return null;
		}
		if (!ele) {
			ele = doc.createElement(name);
		}
		this.actions.forEach((action) => {
			const actionElem = action.toXML(doc);
			ele.appendChild(actionElem);
		});
		return ele;
	}

	override fromXML(node: Element): void {
		super.fromXML(node);
		// 手动处理 actions
		const actionNodes = node.getElementsByTagName("Action");
		this.actions = [];
		for (let i = 0; i < actionNodes.length; i++) {
			const actionNode = actionNodes[i];
			const typeAttr = actionNode.getAttribute("type");
			if (typeAttr) {
				const action = new MultiFuncBtnAction(
					this.lvObj,
					typeAttr as MultiAction,
					this.actions.length
				);
				action.fromXML(actionNode);
				this.actions.push(action);
			}
		}
	}
}

export default class MultiFuncButton extends HMiBase {
	constructor(geo: Geometry, screen?: LvObjT) {
		super("MultiFuncButton", geo, screen);
		this._property = new MultiFuncButtonProperty(this._lvObj);
		const style = Module.lv_multifuncbutton_get_style(this._lvObj);
		this._display = new ButtonDisplay(this._lvObj, style);
		const t = Module.lv_multifuncbutton_get_permission(this._lvObj);
		this._permission = this.createAuthority(t, true, true, true, true);
	}

	override updateImage(w: number, h: number): void {
		(this._display as ButtonDisplay)?.updateImage(w, h);
	}
}
