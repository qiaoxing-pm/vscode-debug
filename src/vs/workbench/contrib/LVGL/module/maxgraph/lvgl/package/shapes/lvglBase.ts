import {
	AbstractCanvas2D,
	CellState,
	Geometry,
	Shape,
	Cell,
	GraphDataModel,
} from "../../../packages/core/src/index.js";
import type {
	CellStyle
} from '../../../packages/core/src/types.js';

import { CreateBaseStyle, LV_BackgroundImage, LV_BaseStyle } from "./lvglStyle.js";
import { Module } from "../LvglModule.js";
import { lv_part_t } from "../lvglEnums.js";
import LvglEvent from "../lvglEvent.js";
import { getDefaultWgtByName } from "./defaultWidgets.js";
import LvglParentChange from "../../events/changes/LvglParentChange.js";
import LvglVisibleChange from "../../events/changes/LvglVisibleChange.js";
import type { PropVariableDes } from "../type.js";
import { VariablesToNode, nodeToVariables } from "../../tools/variable.js";
import { extractNumbers } from "../../../util.js";
import LvLayout from "../../elements/lvLayout.js";
import type { LVStyleState, LvStylePart } from "../type.js";
import type LvglCell from "../../elements/lvglCell.js";
import type { WidgetProps, EventData, EventActionInfo } from "../../../type.js";

export class LV_Obj {
	name: string = "Obj";
	lvObj: LvObjT;
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
			};
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
	updateWidget(geo?: Geometry) { }

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
		if (variablesNode && variablesNode.parentNode === element) {
			nodeToVariables(this, variablesNode);
		}
	}
}

export class LvglBase extends Shape {
	static nameSet = new Set<string>();
	Type: string;

	name: string = "";
	id: string = "";
	lvglId: string = "";
	_widget: LV_Obj | null = null;
	_lvglObj: LvObjT | null = null; // C语言指针对象;
	_layout: LvLayout | null = null;

	_styles: LVStyleState = [];
	events: LvglEvent[] = [];
	screen: LvObjT = Module.lv_screen_active();
	parent: LvglBase | null = null;
	_flags = 0;
	_state = 0;
	_props: WidgetProps["props"] = [];
	isVisible = true;
	curStyleState = 0; // 当前显示的样式状态
	constructor(type: string = "Obj", id?: string) {
		super();
		this.Type = type;
		this.isRounded = true; // force rounded shape
	}
	get lvglObj() {
		return this._lvglObj!;
	}
	get flags() {
		return this._flags;
	}
	set flags(v: number) {
		let change = v ^ this._flags;
		let addFlag = v & change;
		let clearFlag = ~v & change;
		this._flags = v;
		if (addFlag) {
			Module.lv_obj_add_flag(this._lvglObj!, addFlag);
		}
		if (clearFlag) {
			Module.lv_obj_remove_flag(this._lvglObj!, clearFlag);
		}
	}
	get state() {
		return this._state;
	}
	set state(v: number) {
		let change = v ^ this._state;
		let addFlag = v & change;
		let clearFlag = ~v & change;
		this._state = v;
		if (addFlag) {
			Module.lv_obj_add_state(this._lvglObj!, addFlag);
		}
		if (clearFlag) {
			Module.lv_obj_remove_state(this._lvglObj!, clearFlag);
		}
	}

	get Props() {
		const that = this;
		const props: [string, any, ...any[]][] = [
			[
				"Widgets",
				[
					[
						"Id",
						{
							get name() {
								return that.name;
							},
							set name(v: string) {
								that.name = v;
							},
							type: that.Type,
							// rename(newName: string): boolean {
							// 	return that.rename(newName);
							// }
						},
					],
					["Layout", this._layout!],
					[
						"Flags",
						{
							get value() {
								return that.flags;
							},
							set value(v: number) {
								that.flags = v;
							},
							type: that.Type,
						},
					], // get value() { return that.Flags }, set value(v: number) { that.Flags = v }
					[
						"States",
						{
							get value() {
								return that.state;
							},
							set value(v: number) {
								that.state = v;
							},
							type: that.Type,
						},
					], //
					[this.Type, this._widget!],
				],
			],
			[
				"Styles",
				this._styles,
				{
					get curStyleState() {
						return that.curStyleState;
					},
					set curStyleState(v: number) {
						that.changeStyleState(v);
					},
				},
			],
			["Events", this.events],
		];
		return props;
	}

	getPropsData(): [string, any, ...any[]][] {
		const data: [string, any, ...any[]][] = [
			[
				"Widgets",
				[
					["Id", { name: this.name, type: this.Type }],
					["Layout", this._layout!.pickAttributes()],
					["Flags", { value: this.flags, type: this.Type }],
					["States", { value: this.state, type: this.Type }],
					[this.Type, this._widget?.pickAttributes() || {}],
				],
			],
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
		data.push(["Events", this.events.map((e) => e.pickAttributes())]);
		return data;
	}

	Update() {
		const state = this.State!;
		state.invalid = true;
		state.view?.validateCellState(state.cell, false);
	}

	setVisible(dataModel: GraphDataModel, visible: boolean) {
		dataModel.execute(new LvglVisibleChange(this, visible));
	}

	paintVertexShape(
		canvas: AbstractCanvas2D,
		x: number,
		y: number,
		w: number,
		h: number
	) {
		// 传入的x, y, w, h 是经过缩放的全局坐标 并不是相对于父cell的坐标
		// x: state.x = (pState.origin.x + cell.geo.x + offset.x) * scale;
		// 不可见情况下不绘制cell的外层框
		if (this.isVisible) {
			canvas.setStrokeColor("transparent");
			canvas.setStrokeWidth(1);
			canvas.rect(x, y, w, h);
			canvas.stroke();
		}

		// 上述x,y是全局坐标 而cell的几何坐标是相对于父cell的坐标
		const geo = this.State?.cell.getGeometry();
		if (!geo) {
			return;
		}
		this.setLvglGeo(geo);
	}

	setLvglGeo(geo: Geometry) {
		// 传入的x，y 是全局坐标
		if (!this._lvglObj || !this.State) return;
		if (!this._layout) return;
		let { x, y, width, height } = geo;
		// 注意先后位置，先检查样式是否需要变化
		this.updateStyle(geo);
		this._layout.update(this.State, x, y, width, height);
		this._widget?.updateWidget(geo); // 更新widget的大小
	}

	updateStyle(geo: Geometry) {
		if (!this._lvglObj || !this.State) return;
		if (!this._layout) return;
		let { width, height } = geo;
		const { _width, _height } = this._layout;
		// 在有背景图片的情况下，需要重新设置图片
		if (_height !== height || _width !== width) {
			this._styles.forEach(([_, styles]) => {
				styles.forEach((style) => {
					const name = style[0];
					if (name === "BackgroundImage") {
						const bgImage = style[1] as LV_BackgroundImage;
						if (bgImage.bgImage) {
							bgImage.bgImage = bgImage.bgImage; // 重新设置背景图片
						}
					}
				});
			});
		}
	}

	isRoot(cell: Cell | null) {
		// let flag = false
		if (!cell) {
			return true;
		}
		return cell.getId() == "0" || cell.getId() == "1";
	}

	getId(): string {
		return this.id;
	}

	rename(newName: string): boolean {
		if (LvglBase.nameSet.has(newName)) {
			return false; // 名称已存在
		}
		LvglBase.nameSet.delete(this.name);
		this.name = newName;
		LvglBase.nameSet.add(newName);
		return true;
	}

	apply(state: CellState) {
		super.apply(state);
		this.State = state;
		const cell = state.cell as LvglCell;
		const cellParent = cell.getParent();
		const cellStyle = cell.getStyle();
		this.Type = cellStyle.type ?? this.Type;
		if (cellParent && !this.isRoot(cellParent)) {
			const pState = state.view.getState(cellParent);
			if (pState) {
				this.parent = pState.shape as LvglBase;
			}
		}
		const geo = cell.getGeometry();
		if (geo) {
			this.bounds = geo;
		}
		const stateCount = 7;
		if (!this._lvglObj) {
			this._Events = {};
			// @ts-ignore
			const screen = cellStyle.screen;
			if (screen) {
				this.screen = screen;
			}
			let parent = this.parent?._lvglObj || this.screen;
			// @ts-ignore
			const lvglObjT = cellStyle.lvglObjT;
			if (lvglObjT) {
				this._lvglObj = lvglObjT;
				// this._widget = new LV_Obj("Obj", this._lvglObj);
			} else {
				this.lvglCreate(parent);
				this._widget?.init();
			}
			this.id = cell.getId()!;
			let name = this.State.style.name;
			if (!name) {
				const id = Module.lv_obj_get_string_id(this._lvglObj!) || "";
				name = this.Type.toLowerCase() + extractNumbers(id);
			} else {
				this.State.style.name = ""; // 清除cell上的name，name只在LvglBase上保存
			}
			// while name重复时，进行重命名
			let i = 0;
			while (LvglBase.nameSet.has(name)) {
				name += "_" + ++i;
			}
			LvglBase.nameSet.add(name);
			this.name = name;
			this.createBaseStyle(stateCount);
			this.createStyle(stateCount);
			this._layout = new LvLayout(cell, this._lvglObj!);
			if (this.Type === "screen") {
				this._layout.isValid = false; // 屏幕不需要布局
			}
			// console.log(`apply ${this.Type} ${this.id} ${this.Name} ${this.lvglId}`);
		}
		let style: CellStyle = cell.getStyle();
		const node = style.node;
		if (node) {
			this.fromXML(node);
			delete style.node;
		}
		// Module.lv_anim_timeline_create();
	}

	lvglCreate(parent: LvObjT) {
		this._lvglObj = Module.lv_obj_create(parent);
		this._widget = new LV_Obj(this.Type, this._lvglObj!);
	}

	createStyle(stateCnt: number) { }

	setValue(value: any) { }

	setParent(parent: LvglBase | null): LvglBase | null {
		const temp = this.parent;
		this.parent = parent;
		if (this.State && parent && this._lvglObj) {
			// this.state!.cell.setParent(parent.state!.cell);
			Module.lv_obj_set_parent(this._lvglObj, parent.lvglObj);
		} else if (this.State && this._lvglObj) {
			// this.state.cell.setParent(this.getGraph()?.getDefaultParent()!);
			Module.lv_obj_set_parent(this._lvglObj, this.screen);
		}
		return temp;
	}

	setParent2(model: GraphDataModel, parent: LvglBase | null) {
		model.execute(new LvglParentChange(this, parent));
	}

	moveToIdx(idx: number) {
		Module.lv_obj_move_to_index(this._lvglObj!, idx);
	}

	addEvent(eventData: EventData) {
		this.events.push(
			new LvglEvent(eventData.name, eventData.trigger, eventData.actionType)
		);
	}

	addAction(actionInfo: EventActionInfo) {
		const idx = actionInfo.idx;
		if (idx < 0 || idx >= this.events.length) {
			return;
		}
		const event = this.events[idx];
		const actionData = actionInfo.actionData;
		event.addAction(actionData, this);
	}

	createBaseStyle(stateCount: number) {
		const mainStyles = CreateBaseStyle.createStyles(
			lv_part_t.LV_PART_MAIN,
			stateCount,
			this.lvglObj,
			this.State!
		);
		this._styles.push(["Main", mainStyles]);
	}

	changeStyleState(newState: number) {
		// 遍历所有的样式进行更换
		this.curStyleState = newState;
		for (const [part, styles] of this._styles) {
			for (const style of styles) {
				const lvStyle = style[1] as LV_BaseStyle;
				if (lvStyle) {
					lvStyle.setState(newState);
					// console.log(`changeStyleState ${this.name} ${part} to ${newState}`);
				}
			}
		}
	}

	styleToXML(doc: XMLDocument): Element {
		const node = doc.createElement("Styles");
		for (const [part, value] of this._styles) {
			const styleNode = doc.createElement(part);
			value.forEach((style) => {
				const propNode = style[1].toXML(doc);
				if (!propNode) return;
				styleNode.appendChild(propNode);
			});
			node.appendChild(styleNode);
		}
		return node;
	}

	toXML(doc: XMLDocument): Element {
		const node = doc.createElement("Widget");
		for (const [key, value] of this.Props) {
			if (key == "Widgets") {
				if (!Array.isArray(value)) {
					continue;
				}
				for (const [key1, value1] of value) {
					if (key1 == "Id") {
						// const child = enc.document.createElement(key1);
						// node.setAttribute('name', this.Name);
						node.setAttribute("id", this.getId());
						node.setAttribute("type", this.Type.toString());
						node.setAttribute("name", this.name);
					} else if (key1 == "Layout") {
						if (value1) {
							node.appendChild(value1.toXML(doc));
						}
					} else if (key1 == "Flags") {
						const child = doc.createElement(key1);
						child.setAttribute("value", value1.value.toString());
						node.appendChild(child);
					} else if (key1 == "States") {
						const child = doc.createElement(key1);
						child.setAttribute("value", value1.value.toString());
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
		this.id = widgetNode.getAttribute("id") || this.id;
		this.Type = widgetNode.getAttribute("type") || this.Type;
		for (const child of widgetNode.children) {
			if (child.nodeName == "Layout") {
				// layout 由graph进行处理
				this._layout?.fromXML(child);
			} else if (child.nodeName == "Flags") {
				this.flags = parseInt(child.getAttribute("value") || "0");
			} else if (child.nodeName == "States") {
				this.state = parseInt(child.getAttribute("value") || "0");
			} else if (child.nodeName == "Styles") {
				const stylesNode = child;
				const partStyles = stylesNode.children;
				for (let i = 0; i < partStyles.length; i++) {
					const partStyle = partStyles[i];
					const partName = partStyle.tagName as LvStylePart;
					// const partValue = LvPartMap.get(partName) || lv_part_t.LV_PART_MAIN;
					const styleNodes = partStyle.children;
					let styleObjs = this._styles.find(
						(style) => style[0] === partName
					)?.[1];
					if (!styleObjs) {
						continue;
					}
					for (let j = 0; j < styleNodes.length; j++) {
						styleObjs[j][1].fromXML(styleNodes[j]);
					}
				}
			} else if (child.nodeName == "Events") {
				for (const eventNode of child.children) {
					const event = LvglEvent.fromXML(eventNode, this);
					this.events.push(event);
				}
			} else {
				this._widget?.fromXML(child);
			}
		}
	}

	getGraph() {
		return this.State?.view.graph || null;
	}

	destroy() {
		super.destroy();
		// @ts-ignore
		const lvglObjT = this.State?.cell.getStyle().lvglObjT as LvObjT | undefined;
		// 在别的地方创建的lv_obj_t对象不需要删除
		if (lvglObjT) {
			return;
		}
		if (this._lvglObj) {
			Module.lv_obj_remove_style_all(this._lvglObj);
			Module.lv_obj_delete(this._lvglObj);
			this._lvglObj = null;
		}
	}
}
