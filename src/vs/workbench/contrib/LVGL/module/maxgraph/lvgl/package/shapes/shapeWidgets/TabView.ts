import {
	Cell,
	Graph,
	CellOverlay,
	ImageBox,
	Point,
	Geometry,
} from "../../../../packages/core/src/index.js";
import { lv_dir_t, lv_part_t } from "../../lvglEnums.js";
import { Module } from "../../LvglModule.js";
import { LvglBase, LV_Obj } from "../lvglBase.js";
import { CreateBaseStyle, LV_Text, LV_Transform } from "../lvglStyle.js";
import { genRandomStr } from "../../../../util.js";

function swapArrIdx<T>(arr: T[], i: number, j: number) {
	if (i < 0 || j < 0 || i >= arr.length || j >= arr.length) {
		throw new Error("索引超出范围");
	}
	[arr[i], arr[j]] = [arr[j], arr[i]];
}
type TabItem = {
	id: string;
	name: string;
	content?: LvObjT; // 关联的内容对象
	cell?: Cell;
};

function setCellVisible(graph: Graph, cell: Cell, visible: boolean) {
	const view = graph.getView();
	const state = view.getState(cell);
	const shape = state?.shape;
	if (!shape) {
		return;
	}
	(shape as LvglBase).isVisible = visible;
	shape.redraw();
	const children = cell.getChildren();
	for (const child of children) {
		// 虽然你认为这是你儿子，但人家不认为你是他爹
		if (child.parent?.id === cell.id) {
			setCellVisible(graph, child, visible);
		}
	}
}
export class LV_TabView extends LV_Obj {
	lvglShape?: LVGL_ShapeTabView;
	curFocus: number = 0; // 当前焦点索引
	_position: lv_dir_t = lv_dir_t.LV_DIR_TOP; // 默认方向为顶部
	_tabsize: number = 5; // 默认标签大小为0
	_activeTab = 0;
	tabs: TabItem[] = []; // 存储标签名称

	get tab(): string {
		return this.tabs[this.curFocus].name;
	}

	set tab(value: string) {
		this.tabs[this.curFocus].name = value;
		Module.lv_tabview_rename_tab(this.lvObj, this.curFocus, value);
	}

	get position(): lv_dir_t {
		return this._position;
	}
	set position(value: lv_dir_t) {
		if (this._position === value) {
			return; // 如果方向没有变化，则不需要更新
		}
		const graph = this.lvglShape?.getGraph();
		if (!graph) {
			return;
		}
		const thisCell = this.lvglShape?.State?.cell!;
		const overlays = graph.getCellOverlays(thisCell);
		this._position = value;
		const scale = this.lvglShape?.scale ?? 1;
		let dx = 8;
		let dy = 8;
		for (const overlay of overlays) {
			if (this._position === lv_dir_t.LV_DIR_TOP) {
				overlay.align = "left";
				overlay.verticalAlign = "top";
				overlay.offset = new Point(dx, dy);
				dx += 20 + 5;
			} else if (this._position === lv_dir_t.LV_DIR_BOTTOM) {
				overlay.align = "left";
				overlay.verticalAlign = "bottom";
				overlay.offset = new Point(dx, dy);
				dx += 20 + 5;
			} else if (this._position === lv_dir_t.LV_DIR_LEFT) {
				overlay.align = "left";
				overlay.verticalAlign = "top";
				overlay.offset = new Point(dx, dy);
				dy += 20;
			} else if (this._position === lv_dir_t.LV_DIR_RIGHT) {
				overlay.align = "right";
				overlay.verticalAlign = "top";
				overlay.offset = new Point(dx, dy);
				dy += 20;
			}
		}
		graph.removeCellOverlays(thisCell);
		graph.addCellOverlay(thisCell, overlays[0]);
		graph.addCellOverlay(thisCell, overlays[1]);
		Module.lv_tabview_set_tab_bar_position(this.lvObj, value);
		Module.lv_obj_update_layout(this.lvObj);
		this.lvglShape?.redraw();
	}
	get tabsize(): number {
		return this._tabsize;
	}
	set tabsize(value: number) {
		this._tabsize = value;
		Module.lv_tabview_set_tab_bar_size(this.lvObj, value);
	}

	get activeTab(): number {
		return this._activeTab;
	}
	set activeTab(idx: number) {
		if (isNaN(idx)) return;
		const graph = this.lvglShape?.getGraph();
		if (!graph) {
			return;
		}
		this._activeTab = idx;
		this.tabs.forEach((tab) => {
			if (tab.cell) {
				setCellVisible(graph, tab.cell, false);
			}
		});
		const tab = this.tabs[idx];
		setCellVisible(graph, tab.cell!, true);
		Module.lv_tabview_set_active(this.lvObj, idx, true);
		this.lvglShape?.redraw();
	}

	get tabCnt(): number {
		return this.tabs.length;
		const cnt = Module.lv_tabview_get_tab_count(this.lvObj);
		return cnt;
	}

	constructor(name: string, lvObj: LvObjT, lvglShape?: LVGL_ShapeTabView) {
		super(name, lvObj);
		this.tabsize = 50;
		if (lvglShape) {
			this.lvglShape = lvglShape;
		}
		// if (lvglShape) {
		//     this.lvglShape = lvglShape;
		//     this.addTab({
		//         id: genRandomStr(8),
		//         name: "Tab" + (this.tabCnt + 1),
		//     })
		//     this.addTab({
		//         id: genRandomStr(8),
		//         name: "Tab" + (this.tabCnt + 1),
		//     })
		//     setTimeout(() => {
		//         this.activeTab = 0; // 默认激活第一个标签
		//     })
		// }
	}

	getActiveTabObj(): LvObjT {
		if (this.tabs.length === 0) {
			return this.lvObj; // 如果没有标签，返回当前对象
		}
		return this.tabs[this._activeTab].content ?? this.lvObj;
	}

	getActiveTabCell(): Cell | null {
		if (this.tabs.length === 0) {
			return null; // 如果没有标签，返回null
		}
		const activeTab = this.tabs[this._activeTab];
		return activeTab.cell || null; // 返回关联的Cell对象
	}

	addTab(item: TabItem) {
		const tab = Module.lv_tabview_add_tab(this.lvObj, item.name);
		const label = Module.lv_label_create(tab);
		Module.lv_label_set_text(label, item.name);
		item.content = tab;
		const graph = this.lvglShape?.getGraph();
		if (this.lvglShape && graph) {
			const thisCell = this.lvglShape.State?.cell!;
			const layout = thisCell.getGeometry()!;
			let x = 0;
			let y = this._tabsize;
			let w = layout.width;
			let h = layout.height - y;
			if (
				this._position === lv_dir_t.LV_DIR_LEFT ||
				this._position === lv_dir_t.LV_DIR_RIGHT
			) {
				x = this._tabsize;
				y = 0;
				w -= x;
				y = layout.height;
			}
			const cell = graph.insertVertex(thisCell, null, null, x, y, w, h, {
				type: "TabItem",
				shape: "lvgl_tabitem",
				lvglObjT: tab,
				movable: false,
				resizable: false,
			});
			item.cell = cell;
		}
		this.tabs.push(item);
	}

	renameTab(idx: number, name: string) {
		if (idx < 0 || idx >= this.tabs.length) {
			throw new Error("Index out of bounds");
		}
		this.tabs[idx].name = name;
		Module.lv_tabview_rename_tab(this.lvObj, idx, name);
	}

	removeTab(idx: number) {
		if (idx < 0 || idx >= this.tabs.length) {
			throw new Error("Index out of bounds");
		}
		if (this.tabs[idx].content) {
			Module.lv_obj_delete(this.tabs[idx].content);
		}
		this.tabs.splice(idx, 1);
	}

	override toXML(doc: XMLDocument): Element | null {
		let ele = super.toXML(doc);
		if (!ele && this.tabs.length > 0) {
			ele = doc.createElement("TabView");
		} else if (!ele) {
			return null;
		}
		const names = this.tabs.map((tab) => tab.name);
		let str = names.join(",");
		ele.setAttribute("tabs", str);
		return ele;
	}

	override fromXML(element: Element): void {
		const tabs = element.getAttribute("tabs");
		if (tabs) {
			const tabNames = tabs.split(",");
			tabNames.forEach((name) => {
				this.addTab({ id: genRandomStr(8), name });
			});
		}
	}
}

export class LVGL_ShapeTabView extends LvglBase {
	override Type = "TabView";

	override lvglCreate(parent: LvObjT) {
		this._lvglObj = Module.lv_tabview_create(parent);
		this._widget = new LV_TabView(this.Type, this._lvglObj, this);
		const graph = this.getGraph();
		const thisCell = this.State?.cell!;
		if (!graph) {
			return;
		}
		const size = 20;
		const offset = 8;
		const o1 = new CellOverlay(
			new ImageBox("images/open_start.gif", size, size),
			null,
			"left",
			"top",
			new Point(offset, offset)
		);
		const o2 = new CellOverlay(
			new ImageBox("images/open_end.gif", size, size),
			null,
			"left",
			"top",
			new Point(offset + 25, offset)
		);
		const tabview = this._widget as LV_TabView;
		o1.addListener("click", () => {
			const tabCnt = tabview.tabs.length;
			if (tabCnt > 0) {
				tabview.activeTab = (tabview.activeTab + 1) % tabCnt; // 循环切换到下一个标签
			}
		});
		o2.addListener("click", () => {
			const tabCnt = tabview.tabCnt;
			if (tabCnt > 0) {
				tabview.activeTab = (tabview.activeTab - 1 + tabCnt) % tabCnt; // 循环切换到上一个标签
			}
		});
		thisCell.overlays = [o1, o2];
		// graph.addCellOverlay(thisCell, o1);
		// graph.addCellOverlay(thisCell, o2);
	}

	override setLvglGeo(rect: Geometry): void {
		super.setLvglGeo(rect);
		const graph = this.getGraph();
		if (!graph) {
			return;
		}
		const cont = Module.lv_tabview_get_content(this._lvglObj!);
		let x = Math.abs(Module.lv_obj_get_x(cont));
		let y = Math.abs(Module.lv_obj_get_y(cont));
		let w = rect.width - x;
		let h = rect.height - y;
		const tabview = this._widget as LV_TabView;
		if (tabview._position === lv_dir_t.LV_DIR_BOTTOM) {
			w = rect.width;
			h = rect.height - y;
			x = 0;
			y = 0;
		}
		const thisCell = this.State?.cell!;
		const children = thisCell.getChildren();
		for (const child of children) {
			const preGeo = child.getGeometry()!;
			preGeo.x = x;
			preGeo.y = y;
			preGeo.width = w;
			preGeo.height = h;
			graph.getDataModel().setGeometry(child, preGeo);
		}
	}

	override createBaseStyle(stateCount: number) {
		const mainStyles = CreateBaseStyle.createStyles(
			lv_part_t.LV_PART_MAIN,
			stateCount,
			this._lvglObj!,
			this.State!
		);
		this._styles.push(["Main", mainStyles]);
	}

	override createStyle(stateCount: number) {
		// 向 mainStyles 添加属性
		const mainStyles = this._styles.find((style) => style[0] === "Main")?.[1];
		if (mainStyles) {
			mainStyles.push([
				"Text",
				new LV_Text(
					this._lvglObj!,
					lv_part_t.LV_PART_MAIN,
					this.State!,
					stateCount
				),
			]);
			mainStyles.push([
				"Transform",
				new LV_Transform(
					this._lvglObj!,
					lv_part_t.LV_PART_MAIN,
					this.State!,
					stateCount
				),
			]);
		}
	}
}
