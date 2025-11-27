import {
	Cell,
	Geometry
} from "../../packages/core/src/index.js";

import type {
	CellStateStyle
} from "../../packages/core/src/types.js";

import type {
	LVStyleState, LvStylePart, PropVariableDes
} from "../package/type.js";
import { getDefaultWgtByName } from "../package/shapes/defaultWidgets.js";
import { VariablesToNode, nodeToVariables } from "../tools/variable.js";
import { Module } from "../package/LvglModule.js";
import LvglEvent from "../package/lvglEvent.js";
import { lv_part_t } from "../package/lvglEnums.js";
import { CreateBaseStyle } from "../package/shapes/lvglStyle.js";
import LvLayout from "./lvLayout.js";
import type { LV_BaseStyle } from "../package/shapes/lvglStyle.js";

export interface LvglCellImpl {
	lvglCreate(parent: LvObjT): void;
}

export class LV_Obj {
	name: string = "Obj";
	lvObj: LvObjT
	variables: PropVariableDes = {};
	constructor(name: string, lvobj: LvObjT) {
		this.name = name;
		this.lvObj = lvobj;
	}

	init() {
		for (const _key in this) {
			if (!_key.startsWith("_")) continue;
			const key = _key.split("_")[1];
			// const key = _key;
			let type = typeof (this as any)[_key] as string;
			if (type === "undefined") continue;
			if (type === "number") {
				type = Number.isInteger((this as any)[_key]) ? "number" : "float";
			}
			this.variables[key] = {
				type: type as "boolean" | "number" | "string" | "float",
			}
		}
	}

	pickAttributes() {
		// 挑选出所有需要修改的属性以及值，保存为一个对象，默认是下划线开头的
		const attrs: { [key: string]: any } = {};
		for (const key of Object.keys(this)) {
			if (key.startsWith("_")) {
				attrs[key.slice(1)] = (this as any)[key];
			}
		}
		attrs["variables"] = this.variables;
		return attrs;
	}

	// 改变大小后，例如图片或者背景图片需要重新适配
	updateWidget() {

	}

	createDefault() {
		const name = Module.lv_obj_get_class_name(this.lvObj);
		const widget = getDefaultWgtByName(name);
		if (!widget) {
			debugger;
			return this;
		}
		const Constructor = this.constructor as typeof LV_Obj;
		return new Constructor("", widget);
	}

	toXML(doc: XMLDocument): Element | null {
		const node = doc.createElement(this.name);
		const dW = this.createDefault();
		let equalCnt = 0;
		for (const _key of Object.keys(this)) {
			if (!_key.startsWith("_")) continue;
			const key = _key.split("_")[1];
			const value = (this as any)[key];
			const dWValue = (dW as any)[key];
			if (value !== undefined && value !== dWValue) {
				equalCnt++;
				node.setAttribute(key, this[key as keyof LV_Obj].toString());
			}
		}
		Module.lv_obj_delete(dW.lvObj);
		const varEle = VariablesToNode(doc, this.variables);
		if (varEle) {
			node.appendChild(varEle);
			equalCnt++;
		}
		if (equalCnt === 0) {
			return null;
		}
		return node;
	}

	fromXML(element: Element): void {
		const attrubutes = element.getAttributeNames();
		for (const attr of attrubutes) {
			const value = element.getAttribute(attr);
			const n = parseInt(value as string);
			if (!isNaN(n)) {
				(this as any)[attr] = n;
			} else {
				(this as any)[attr] = value;
			}
		}
		// 解析绑定的变量
		const variablesNode = element.querySelector("Variables");
		if (variablesNode) {
			nodeToVariables(this, variablesNode);
		}
	}
}

class LvglCell extends Cell {
	static nameSet = new Set<string>();

	Type = "Obj";
	name: string = "";
	parent: LvglCell;
	_flag = 0;
	_state = 0;
	_lvLayout: LvLayout | null = null;
	_widget: LV_Obj | null = null;
	_lvglObj: LvObjT | null = null;
	_styles: LVStyleState = [];
	_events: LvglEvent[] = [];

	get Flags() { return this._flag }
	set Flags(v: number) {
		let change = v ^ this._flag
		let addFlag = v & change
		let clearFlag = ~v & change
		this._flag = v
		if (addFlag) {
			Module.lv_obj_add_flag(this._lvglObj!, addFlag)
		}
		if (clearFlag) {
			Module.lv_obj_remove_flag(this._lvglObj!, clearFlag)
		}
	}

	get State() { return this._state }
	set State(v: number) {
		let change = v ^ this._state;
		let addFlag = v & change;
		let clearFlag = (~v) & change;
		this._state = v;
		if (addFlag) {
			Module.lv_obj_add_state(this._lvglObj!, addFlag);
		}
		if (clearFlag) {
			Module.lv_obj_remove_state(this._lvglObj!, clearFlag);
		}
	}

	constructor(parent: LvglCell, type: string, geo: Geometry, style?: CellStateStyle) {
		super(null, geo, style);
		this.Type = type;
		this.parent = parent;
		this.vertex = true;
		this.connectable = false;
	}

	init() {
		const stateCount = 7;
		// this.lvglCreate(this.parent._lvglObj!);
		if (!this._widget) return;
		this._widget?.init();
		this._lvLayout = new LvLayout(this, this._lvglObj!);
		this.createBaseStyle(stateCount);
		this.createStyle(stateCount);
	}

	// 子类必须实现这个函数
	lvglCreate(parent: LvObjT) {
		this._lvglObj = Module.lv_obj_create(parent);
		this._widget = new LV_Obj(this.Type, this._lvglObj!);
	}

	get Props() {
		const that = this
		const props: [string, any, ...any[]][] = [
			["Widgets",
				[
					["Id", {
						get name() { return that.name },
						set name(v: string) { that.name = v },
						type: that.Type,
						// rename(newName: string): boolean {
						// 	return that.rename(newName);
						// }
					}],
					["Layout", this._layout!],
					["Flags", { get value() { return that.flags }, set value(v: number) { that.flags = v }, type: that.Type }],// get value() { return that.Flags }, set value(v: number) { that.Flags = v }
					["States", { get value() { return that._state }, set value(v: number) { that._state = v }, type: that.Type }], //
					[this.Type, this._widget!],
				]
			],
			["Styles", this._styles, { get curStyleState() { return that.curStyleState }, set curStyleState(v: number) { that.changeStyleState(v) } }],
			["Events", this.events],
		]
		return props;
	}

	getPropsData(): [string, any, ...any[]][] {
		const data: [string, any, ...any[]][] = [
			["Widgets", [
				["Id", { name: this.name, type: this.Type }],
				["Layout", this._layout!.pickAttributes()],
				["Flags", { value: this.flags, type: this.Type }],
				["States", { value: this.state, type: this.Type }],
				[this.Type, this._widget?.pickAttributes() || {}],
			]],
		];
		const styles = [];
		// 对styles进行展开并得到有效数据
		for (const [part, styleList] of this._styles) {
			const partStyles: [string, Object][] = [];
			for (const [styleName, styleObj] of styleList) {
				const styleData = styleObj.pickAttributes();
				if (Object.keys(styleData).length > 0) {
					partStyles.push([styleName, styleData]);
				}
			}
			styles.push([part, partStyles]);
		}
		data.push(["Styles", styles, { curStyleState: this.curStyleState }]);
		data.push(["Events", this.events.map((e: LvglEvent) => e.pickAttributes())]);
		return data;
	}



	changeStyleState(newState: number) {
		// 遍历所有的样式进行更换
		this.curStyleState = newState;
		for (const [part, styles] of this._styles) {
			for (const style of styles) {
				const lvStyle = style[1] as LV_BaseStyle
				if (lvStyle) {
					lvStyle.setState(newState);
					// console.log(`changeStyleState ${this.name} ${part} to ${newState}`);
				}
			}
		}
	}

	createBaseStyle(stateCount: number) {
		const mainStyles = CreateBaseStyle.createStyles(lv_part_t.LV_PART_MAIN, stateCount, this.lvglObj, this.state!);
		this._styles.push(["Main", mainStyles]);
	}

	createStyle(stateCnt: number) {

	}

	styleToXML(doc: XMLDocument): Element {
		const node = doc.createElement("Styles")
		for (const [part, value] of this._styles) {
			const styleNode = doc.createElement(part);
			value.forEach((style) => {
				const propNode = style[1].toXML(doc);
				if (!propNode) return;
				styleNode.appendChild(propNode)
			})
			node.appendChild(styleNode)
		}
		return node
	}


	toXML(doc: XMLDocument): Element {
		const node = doc.createElement('Widget');
		for (const [key, value] of this.Props) {
			if (key == "Widgets") {
				if (!Array.isArray(value)) {
					continue;
				}
				for (const [key1, value1] of value) {
					if (key1 == "Id") {
						// const child = enc.document.createElement(key1);
						// node.setAttribute('name', this.Name);
						node.setAttribute('id', this.id!);
						node.setAttribute('type', this.Type.toString());
						node.setAttribute('name', this.name);
					} else if (key1 == "Layout") {
						if (value1) {
							node.appendChild(value1.toXML(doc))
						}
					}
					else if (key1 == "Flags") {
						const child = doc.createElement(key1);
						child.setAttribute('value', value1.value.toString());
						node.appendChild(child);
					}
					else if (key1 == "States") {
						const child = doc.createElement(key1);
						child.setAttribute('value', value1.value.toString());
						node.appendChild(child);
					}
				}
			} else if (key == "Styles") {
				node.appendChild(this.styleToXML(doc));
			} else if (key == "Events") {
				const eventsNode = doc.createElement("Events");
				for (const event of this.events) {
					eventsNode.appendChild(event.toXML(doc));
				}
				node.appendChild(eventsNode);
			}
		}
		const wXml = this._widget?.toXML(doc);
		if (this._widget && wXml) {
			node.appendChild(wXml);
		}
		return node;
	}

	fromXML(widgetNode: Element) {
		this.id = widgetNode.getAttribute('id') || this.id;
		this.Type = widgetNode.getAttribute('type') || this.Type;
		for (const child of widgetNode.children) {
			if (child.nodeName == "Layout") {
				// layout 由graph进行处理
				this._layout?.fromXML(child);
			} else if (child.nodeName == "Flags") {
				this.flags = parseInt(child.getAttribute('value') || '0');
			} else if (child.nodeName == "States") {
				this.state = parseInt(child.getAttribute('value') || '0');
			} else if (child.nodeName == "Styles") {
				const stylesNode = child;
				const partStyles = stylesNode.children;
				for (let i = 0; i < partStyles.length; i++) {
					const partStyle = partStyles[i];
					const partName = partStyle.tagName as LvStylePart;
					// const partValue = LvPartMap.get(partName) || lv_part_t.LV_PART_MAIN;
					const styleNodes = partStyle.children;
					let styleObjs = this._styles.find(style => style[0] === partName)?.[1];
					if (!styleObjs) {
						continue;
					}
					for (let j = 0; j < styleNodes.length; j++) {
						styleObjs[j][1].fromXML(styleNodes[j]);
					}
				}
			} else if (child.nodeName == "Events") {
				for (const eventNode of child.children) {
					// const event = LvglEvent.fromXML(eventNode, this);
					// this.events.push(event);
				}
			} else {
				this._widget?.fromXML(child);
			}
		}
	}
}

export default LvglCell;
