import Authority, { Notify, Presstime } from "./Authority.js";
import { Cell, Geometry } from "../../packages/core/src/index.js";
import type { CellStateStyle } from "../../packages/core/src/types.js";
import { Module } from "../../lvgl/package/LvglModule.js";
import { getDefaultWgtByName } from "../../lvgl/package/shapes/defaultWidgets.js";
import Layout from "./Layout.js";
import { CellState } from "../../packages/core/src/index.js";
import { ButtonDisplay } from "./Button.js";
import { BaseProperty, BaseDisplay, PureData } from "./PureData.js";
import { getButtonStyleT } from "./style.js";

export type PermissionData = {
	show?: Authority | null;
	touch?: Authority | null;
	notify?: Notify | null;
	pressTime?: Presstime | null;
};
class HMiBase extends Cell {
	mxTransient: string[] = [
		"id",
		"value",
		"parent",
		"source",
		"target",
		"children",
		"edges",
		"style",
		"_layout",
		"_property",
		"_display",
		"_permission",
		"_lvObj",
		"other",
		"screen",
	];
	readonly type: string = "HMiBase";
	screen: LvObjT | null = null;
	_layout: Layout | null;
	_property: BaseProperty | null = null;
	_display: BaseDisplay | null = null;
	_permission: PermissionData = {};
	_lvObj: LvObjT;
	other: {
		pickAttributes(): Object;
	} | null = null;

	constructor(type: string, geo: Geometry, screen?: LvObjT) {
		const style: CellStateStyle = {
			shape: "hmi",
			foldable: false,
			cloneable: false,
			isHmi: true,
		};
		// geo.relative = true;
		super(null, geo, style);
		this.vertex = true;
		this.connectable = false;
		// 创建C语言对象，并且创建lyout
		this.type = type;
		const obj = getDefaultWgtByName(type, screen);
		// const obj = null;
		if (obj) {
			this._lvObj = obj;
		} else {
			this._lvObj = Module.lv_label_create(Module.lv_screen_active());
			Module.lv_label_set_text(this._lvObj, type);
		}
		// 很重要，控件有了大小，才可以反序列化时，设置图片等按大小处理的属性, 不然要等到下次重绘，在layout中处理
		Module.lv_obj_set_size(this._lvObj, geo.width, geo.height);
		Module.lv_obj_set_pos(this._lvObj, geo.x, geo.y);
		if (!this._lvObj) {
			throw new Error(`Cannot create lvgl object of type ${type}`);
		}
		this._layout = new Layout(this, this._lvObj);
		if (screen) {
			this.screen = screen;
			Module.lv_obj_set_parent(this._lvObj, screen);
		}
	}

	setParent(parent: Cell | null): void {
		super.setParent(parent);
		if (parent && parent instanceof HMiBase) {
			Module.lv_obj_set_parent(this._lvObj, parent._lvObj);
		} else if (parent && this.screen) {
			Module.lv_obj_set_parent(this._lvObj, this.screen);
		} else if (!parent) {
			Module.remove_from_parent(this._lvObj);
		}
	}

	setScreen(screen: LvObjT): void {
		this.screen = screen;
		Module.lv_obj_set_parent(this._lvObj, screen);
	}

	insert(child: Cell, index?: number): Cell | null {
		// 父函数完成插入逻辑后，再调整lvgl对象的层级
		const c = super.insert(child, index);
		if (child instanceof HMiBase) {
			const obj = child._lvObj;
			Module.lv_obj_move_to_index(obj, index ?? 0);
		}
		return c;
	}

	removeFromParent(): void {
		if (this.screen) {
		}
		Module.remove_from_parent(this._lvObj);
		super.removeFromParent();
	}

	destroy() {
		if (this._lvObj) {
			Module.lv_obj_delete(this._lvObj);
			// console.log(`Destroyed lvgl object of type ${this.type}`);
		}
	}

	createAuthority(
		permissionT: PermissionT,
		isShow: boolean,
		isTouch = false,
		notify = false,
		pressTime = false
	): PermissionData {
		const auth: PermissionData = {
			show: isShow ? new Authority(this._lvObj, permissionT, true) : null,
			touch: isTouch ? new Authority(this._lvObj, permissionT, false) : null,
			notify: notify ? new Notify(permissionT) : null,
			pressTime: pressTime ? new Presstime(permissionT) : null,
		};

		return auth;
	}

	updateImage(w: number, h: number) { }

	updateLayout(state: CellState, geo: Geometry): void {
		if (this._layout) {
			const { x, y, width, height } = geo;
			const oldW = Module.lv_obj_get_width(this._lvObj);
			const oldH = Module.lv_obj_get_height(this._lvObj);
			this._layout.update(state, x, y, width, height);
			// 如果需要缩放背景图片，则在这里处理
			if (width !== oldW || height !== oldH) {
				this.updateImage(width, height);
			}
		}
	}

	get Props(): [string, any, ...any[]][] {
		return [
			[
				"General",
				[
					["Layout", this._layout ?? {}],
					[this.type, this._property ?? {}],
				],
			],
			["Display", [[this.type, this._display || {}]]],
			["Permission", this._permission],
		];
	}

	getPropsData(): [string, any, ...any[]][] {
		// 注意没有该属性的话，一定要设置为null / undefined, 如果是空对象，if (obj) 会被认为是有值的
		const res: [string, any, ...any[]][] = [
			[
				"General",
				[
					["Layout", this._layout?.pickAttributes() ?? null],
					[this.type, this._property?.pickAttributes() ?? null],
				],
			],
			["Display", [[this.type, this._display?.pickAttributes() || null]]],
			[
				"Permission",
				{
					show: this._permission.show?.pickAttributes() ?? null,
					touch: this._permission.touch?.pickAttributes() ?? null,
					notify: this._permission.notify?.pickAttributes() ?? null,
					pressTime: this._permission.pressTime?.pickAttributes() ?? null,
				},
			],
		];
		return res;
	}

	toXML(doc: XMLDocument): Element {
		const ele = doc.createElement("Widget");
		ele.setAttribute("type", this.type);
		if (this._layout) {
			ele.appendChild(this._layout.toXML(doc));
		}
		const widget = getDefaultWgtByName(this.type);
		if (!widget) {
			throw new Error(`Cannot create lvgl object of type ${this.type}`);
		}

		const toxml = (
			name: string,
			obj: BaseDisplay | BaseProperty
		): Element | null => {
			const pureDataClass = obj.constructor as unknown as any;
			let defaultObj = null;
			if (obj instanceof ButtonDisplay && widget && obj.style) {
				const style = getButtonStyleT(this.type, widget);
				defaultObj = new ButtonDisplay(widget!, style);
			} else {
				defaultObj = new pureDataClass(widget) as PureData;
			}
			const res = obj.toXML(doc, name, defaultObj);
			return res;
		};
		const typeEle = doc.createElement(this.type);
		if (this._property) {
			const propEle = toxml("Property", this._property);
			if (propEle) {
				typeEle.appendChild(propEle);
			}
		}
		if (this._display) {
			const displayEle = toxml("Display", this._display);
			if (displayEle) {
				typeEle.appendChild(displayEle);
			}
		}
		ele.appendChild(typeEle);
		const permissionEle = doc.createElement("Permission");
		let hasPermission = false;
		if (this._permission.show) {
			const showEle = this._permission.show.toXML(doc);
			if (showEle) {
				permissionEle.appendChild(showEle);
				hasPermission = true;
			}
		}
		if (this._permission.touch) {
			const touchEle = this._permission.touch.toXML(doc);
			if (touchEle) {
				permissionEle.appendChild(touchEle);
				hasPermission = true;
			}
		}
		if (this._permission.notify) {
			const notifyEle = this._permission.notify.toXML(doc);
			if (notifyEle) {
				permissionEle.appendChild(notifyEle);
				hasPermission = true;
			}
		}
		if (this._permission.pressTime) {
			const pressTimeEle = this._permission.pressTime.toXML(doc);
			if (pressTimeEle) {
				permissionEle.appendChild(pressTimeEle);
				hasPermission = true;
			}
		}
		if (hasPermission) {
			typeEle.appendChild(permissionEle);
		}
		if (typeEle.children.length > 0) {
			ele.appendChild(typeEle);
		}
		Module.lv_obj_delete(widget);
		return ele;
	}

	fromXML(xml: Element): void {
		for (const child of xml.children) {
			if (child.nodeName === "Layout" && this._layout) {
				this._layout.fromXML(child);
			} else if (child.nodeName === this.type) {
				for (const subChild of child.children) {
					const name = subChild.nodeName;
					if (name === "Property" && this._property) {
						this._property.fromXML(subChild);
					} else if (name === "Display" && this._display) {
						this._display.fromXML(subChild);
					} else if (name === "Permission") {
						for (const permChild of subChild.children) {
							if (permChild.nodeName === "Show" && this._permission.show) {
								this._permission.show.fromXML(permChild);
							} else if (
								permChild.nodeName === "Control" &&
								this._permission.touch
							) {
								this._permission.touch.fromXML(permChild);
							} else if (
								permChild.nodeName === "Notify" &&
								this._permission.notify
							) {
								this._permission.notify.fromXML(permChild);
							} else if (
								permChild.nodeName === "PressTime" &&
								this._permission.pressTime
							) {
								this._permission.pressTime.fromXML(permChild);
							}
						}
					}
				}
			}
		}
	}
}

export default HMiBase;
