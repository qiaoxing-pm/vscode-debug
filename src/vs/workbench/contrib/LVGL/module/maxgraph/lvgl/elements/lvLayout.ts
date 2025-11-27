import {
	Cell,
	CellState,
	Geometry,
	Rectangle
} from "../../packages/core/src/index.js";
import type { PropVariableDes } from "../package/type.js";
import { lv_align_t } from "../package/lvglEnums.js";
import { Module } from "../package/LvglModule.js";
import { moveAndRedraw } from "../tools/shape.js";
import { getShapeByCell } from "../events/utils.js";
import { VariablesToNode, nodeToVariables } from "../tools/variable.js";

class LvLayout {
	isValid = true;
	cell: Cell;
	state: CellState | null = null;
	lvglObj: LvObjT
	_flow = 0
	_align: lv_align_t = lv_align_t.LV_ALIGN_DEFAULT
	_x = 0;
	_y = 0;
	_width = 0;
	_height = 0;
	variables: PropVariableDes = {};

	constructor(cell: Cell, lvglObj: LvObjT) {
		this.lvglObj = lvglObj;
		this.cell = cell;
		this.variables = {
			align: { type: "number" },
			x: { type: "number" },
			y: { type: "number" },
			width: { type: "number" },
			height: { type: "number" },
		};
	}
	get align() { return this._align }
	set align(value: lv_align_t) {
		this._align = value;
		Module.lv_obj_set_align(this.lvglObj, value);
		Module.lv_obj_set_pos(this.lvglObj, 0, 0);
		Module.lv_obj_update_layout(this.lvglObj);
		const x1 = Module.lv_obj_get_x(this.lvglObj);
		const y2 = Module.lv_obj_get_y(this.lvglObj);
		const cell = this.cell;
		const { x, y } = cell.getGeometry()!;
		const dx = x1 - x;
		const dy = y2 - y;
		if (!this.state) return;
		const graph = this.state.view.graph;
		graph.translateCell(cell, dx, dy);
		const style = cell.getStyle();
		style.movable = this._align === lv_align_t.LV_ALIGN_DEFAULT;
		// this._state.view.graph.setCellStyle(style, [cell]);
		this.state.style.movable = style.movable;
	}

	get x() {
		const geo = this.cell.getGeometry();
		if (this._align !== lv_align_t.LV_ALIGN_DEFAULT || !geo) {
			const alignX = Module.lv_obj_get_x_aligned(this.lvglObj);
			return parseInt(alignX.toString());
		}
		return parseInt(geo.x.toString())
	}
	set x(value: number) {
		const geo = this.cell.getGeometry()!;
		let dx = value - geo.x;
		if (!dx) return;
		if (this._align !== lv_align_t.LV_ALIGN_DEFAULT) {
			const alignX = Module.lv_obj_get_x_aligned(this.lvglObj);
			dx = value - alignX;
			Module.lv_obj_set_x(this.lvglObj, value);
		}
		if (!this.state) return;
		this.state.view.graph.translateCell(this.state.cell, dx, 0);
	}

	get y() {
		const geo = this.cell.getGeometry();
		if (this._align !== lv_align_t.LV_ALIGN_DEFAULT || !geo) {
			const alignY = Module.lv_obj_get_y_aligned(this.lvglObj);
			return parseInt(alignY.toString());
		}
		return parseInt(geo.y.toString());
	}
	set y(value: number) {
		const geo = this.cell.getGeometry()!;
		let dy = value - geo.y;
		if (!dy) return;
		if (this._align !== lv_align_t.LV_ALIGN_DEFAULT) {
			const alignY = Module.lv_obj_get_y_aligned(this.lvglObj);
			dy = value - alignY;
			Module.lv_obj_set_y(this.lvglObj, value);
		}
		if (!this.state) return;
		this.state.view?.graph.translateCell(this.state.cell, 0, dy);
	}
	get width() {
		return parseInt((this.cell.getGeometry()?.width.toString() || Module.lv_obj_get_width(this.lvglObj)).toString());
	}

	// 当重新设置大小之后，因为有align的存在，会使得x和y的值需要重新计算
	// eg: top midle时，宽度增加2，为了对齐，x需要减去1，width需要加2,保证处于中心区域
	set width(value: number) {
		if (this._width === value) return;
		const geo = this.cell.getGeometry() as Geometry;
		this._width = value;
		const rect = new Rectangle(geo.x, geo.y, value, geo.height);
		this.state?.view?.graph.resizeCell(this.cell, rect, true);
		if (this._align !== lv_align_t.LV_ALIGN_DEFAULT && this.state) {
			moveAndRedraw(this.state, this.lvglObj, true);
		}
	}
	get height() {
		return parseInt((this.cell.getGeometry()?.height.toString() || Module.lv_obj_get_height(this.lvglObj)).toString());
	}
	set height(value: number) {
		if (this._height === value) return;
		const geo = this.cell.getGeometry() as Geometry;
		this._height = value;
		const rect = new Rectangle(geo.x, geo.y, geo.width, value);
		this.state?.view?.graph.resizeCell(this.cell, rect, true);
		if (this._align !== lv_align_t.LV_ALIGN_DEFAULT && this.state) {
			moveAndRedraw(this.state, this.lvglObj, true);
		}
	}

	pickAttributes(): Record<string, any> {
		if (!this.isValid) return {};
		return {
			isValid: true,
			align: this._align,
			x: this._x,
			y: this._y,
			width: this._width,
			height: this._height,
			variables: this.variables,
		}
	}

	// 传进来的x，y, width, height 全是相对于父容器的坐标
	update(state: CellState, x: number, y: number, width: number, height: number) {
		this.state = state;
		// 当cell不可移动时，已经无法通过鼠标移动，也不会触发此函数，只能通过属性面板更改几何信息
		// 重绘后触发此函数，来设置lvgl对象的几何信息。
		this._x = x;
		this._y = y;
		this._width = width;
		this._height = height;
		Module.lv_obj_set_size(this.lvglObj, width + 2, height + 2);
		// 当align不是默认时，x和y是相对于align的偏移量
		if (this.align === lv_align_t.LV_ALIGN_DEFAULT) {
			Module.lv_obj_set_pos(this.lvglObj, x - 1, y - 1);
		} else if (this.state) {
			// 如果自身不是default align，也需要更新自己的位置
			moveAndRedraw(this.state, this.lvglObj, true);
		}
		// size改变引发重绘后，当child的align不是默认时， 需要对cell的x，y进行重新计算
		const cell = this.cell;
		if (cell.children.length <= 0 || !this.state) {
			return;
		}
		const children = cell.children;
		children.forEach(child => {
			const shape = getShapeByCell(state.view.graph, child);
			if (!cell.isVertex || !shape) return;
			if (!shape._layout || (shape._layout).align === lv_align_t.LV_ALIGN_DEFAULT) return;
			const obj = shape.lvglObj;
			Module.lv_obj_update_layout(obj);
			const { x: x1, y: y1 } = child.getGeometry()!;
			const x = Module.lv_obj_get_x(obj);
			const y = Module.lv_obj_get_y(obj);
			const dx = x - x1;
			const dy = y - y1;
			if ((dx || dy) && this.state) {
				this.state.view.graph.translateCell(child, dx, dy);
				// 不需要递归更新子元素，子元素重绘时，也会检查其子元素
			}
		});
	}

	toXML(doc: XMLDocument): Element {
		const node = doc.createElement('Layout');
		node.setAttribute('x', this.x.toString());
		node.setAttribute('y', this.y.toString());
		node.setAttribute('width', this.width.toString());
		node.setAttribute('height', this.height.toString());
		node.setAttribute('align', this.align.toString());
		const varNode = VariablesToNode(doc, this.variables);
		if (varNode) {
			node.appendChild(varNode);
		}
		return node;
	}

	fromXML(node: Element) {
		this.align = Number(node.getAttribute('align')) ?? lv_align_t.LV_ALIGN_DEFAULT;
		this.x = node.getAttribute('x') ? parseInt(node.getAttribute('x') || '0') : this.x;
		this.y = node.getAttribute('y') ? parseInt(node.getAttribute('y') || '0') : this.y;
		this.width = node.getAttribute('width') ? parseInt(node.getAttribute('width') || '0') : this.width;
		this.height = node.getAttribute('height') ? parseInt(node.getAttribute('height') || '0') : this.height;

		const variablesNode = node.querySelector("Variables");
		// 还要确保variablesNode是node的子节点，而不是孙子节点
		if (variablesNode && variablesNode.parentNode === node) {
			nodeToVariables(this, variablesNode);
		}
	}
}

export default LvLayout;
