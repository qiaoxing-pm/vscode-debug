import {
	Cell,
	Graph,
	CellState,
	VertexHandler,
	Point,
	UndoManager
} from "../../packages/core/src/index.js";
import PolygonVertexHandler from "../handlers/PolygonVertexHandler.js";
import { Module } from "../package/LvglModule.js";
import { getShapeByCell } from "../events/utils.js";
import { lv_border_side_t } from "../package/lvglEnums.js";
import { exportXML, importXML } from "../tools/serialize.js";
import LvglUndoManager from "./lvglUndoManager.js";
import type { LvScreen } from "../../type.js"


class LvglGraph extends Graph {

	undoManager: UndoManager;
	screen: LvScreen

	constructor(container: HTMLElement, screen: LvScreen) {
		super(container);
		this.undoManager = new LvglUndoManager(20);
		this.screen = screen;
	}

	getChildOffsetForCell(cell: Cell): Point | null {
		if (this.model.isRoot(cell)) {
			return null;
		}
		const scale = this.view.scale;
		const shape = getShapeByCell(this, cell);
		if (!shape || !shape.lvglObj) {
			return null;
		}
		let dx = 0;
		let dy = 0;

		const pShape = getShapeByCell(this, cell.getParent());
		let pObj = pShape ? pShape.lvglObj : shape.screen;
		if (!pObj) {
			return null;
		}
		let state = Module.lv_obj_get_state(pObj);
		const side = Module.lv_obj_get_style_border_side(pObj, state);
		if (side == lv_border_side_t.LV_BORDER_SIDE_LEFT || side == lv_border_side_t.LV_BORDER_SIDE_FULL) {
			dx += Module.lv_obj_get_style_border_width(pObj, state);
		}
		if (side == lv_border_side_t.LV_BORDER_SIDE_TOP || side == lv_border_side_t.LV_BORDER_SIDE_FULL) {
			dy += Module.lv_obj_get_style_border_width(pObj, state);
		}

		const pl = Module.lv_obj_get_style_pad_left(pObj, state);
		const pt = Module.lv_obj_get_style_pad_top(pObj, state);
		dx += pl;
		dy += pt;

		state = Module.lv_obj_get_state(shape.lvglObj);
		const mt = Module.lv_obj_get_style_margin_top(shape.lvglObj, state);
		const ml = Module.lv_obj_get_style_margin_left(shape.lvglObj, state);
		dx += ml;
		dy += mt;

		const offset = new Point(dx, dy);
		// console.log("getChildOffsetForCell", cell.getId(), offset);
		return offset;
	}

	createVertexHandler(state: CellState): VertexHandler {
		if (state.style.shape === "lvgl_polygon") {
			return new PolygonVertexHandler(state);
		}
		return new VertexHandler(state);
	}

	importXML(xmlContent: string) {
		importXML(this, xmlContent, this.screen.screenObj);
	}

	exportXML(fileName?: string) {
		exportXML(this, this.screen, fileName);
	}
}

export default LvglGraph;
