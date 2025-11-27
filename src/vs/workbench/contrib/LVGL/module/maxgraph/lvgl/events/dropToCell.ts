import {
	Cell,
	SelectionHandler,
	EventObject,
	InternalEvent,
	Dictionary,
	Graph,
	SelectionCellsHandler,
	InternalMouseEvent
} from "../../packages/core/src/index.js";
import { LvglBase } from "../package/shapes/lvglBase.js";
import { isRoot } from "./utils.js";
import { type RpcProviderInterface } from "../../../../lib/worker-rpc/lib/index.js";
import { batchUpdateHirerachy } from "./hirerachyTree.js";

export function useGraphDrop(graph: Graph, rpc: RpcProviderInterface) {

	graph.setDropEnabled(true);
	graph.isValidDropTarget = function (cell: Cell, cells, evt) {
		const pre = ((this.isSplitEnabled() && this.isSplitTarget(cell, cells, evt)) ||
			(!cell.isEdge() && cell.isVisible() &&
				(this.isSwimlane(cell) || (cell.getChildCount() >= 0 && !cell.isCollapsed()))));
		if (!pre || cell.style.isHmi) {
			return false; // 如果不是一个有效的drop目标，则不允许拖拽到这个cell
		}
		if (cell.style.group) {
			return true;
		}
		const isAllLvShape = cells?.every((c) => {
			if (!c.style.shape?.startsWith("lvgl_")) {
				return false; // 如果有一个cell不是lvgl的shape，则不允许拖拽到这个cell
			}
			return true; // 如果所有的cell都是lvgl的shape，则允许拖拽到这个cell
		})
		if (!isAllLvShape) {
			return false; // 如果所有的cell都是lvgl的shape，则允许拖拽到这个cell
		}
		const shape = this.getView().getState(cell)?.shape;
		if (!shape || !(shape instanceof LvglBase)) {
			return pre;
		}
		// 处理lvgl shape
		if (!shape.isVisible) {
			return false; // 如果shape不可见，则不允许拖拽到这个cell
		}
		const type = shape.Type.toLowerCase();
		if (type !== "obj" && type !== "button" && type !== "tabitem" && type !== "screen") {
			return false;
		}
		// 只允许label 拖放到button上
		if (type === "button") {
			let f = cells?.every((c) => {
				const cs = c.style.shape;
				if (!(<string>cs)?.includes("label")) {
					return false;
				}
				return true;
			})
			if (!f) {
				return false; // 如果有一个cell不是label，则不允许拖拽到button上
			}
		}
		return true;
	}
	function _moveCells(this: SelectionHandler, cells: Cell[], dx: number, dy: number, clone: boolean,
		target: Cell | null, evt: MouseEvent) {
		// 源码中添加的部分
		let flag = false;
		if (this.target) {
			flag = true;
		}
		if (!this.cell) return;

		if (clone) {
			cells = this.graph.getCloneableCells(cells);
		}

		// Removes cells from parent
		const parent = this.cell.getParent();

		if (
			!target &&
			parent &&
			this.isRemoveCellsFromParent() &&
			this.shouldRemoveCellsFromParent(parent, cells, evt)
		) {
			target = this.graph.getDefaultParent();
			// 向外发送信号
			graph.getDataModel().batchUpdate(() => {
				this.graph.fireEvent(
					new EventObject(InternalEvent.REMOVE_CELLS_FROM_PARENT,
						{ cells })
				);
			});
		}

		// Cloning into locked cells is not allowed
		clone = !!clone && !this.graph.isCellLocked(target || this.graph.getDefaultParent());

		this.graph.batchUpdate(() => {
			const parents = [];

			// Removes parent if all child cells are removed
			if (!clone && target && this.removeEmptyParents) {
				// Collects all non-selected parents
				const dict = new Dictionary();

				for (let i = 0; i < cells.length; i += 1) {
					dict.put(cells[i], true);
				}

				// LATER: Recurse up the cell hierarchy
				for (let i = 0; i < cells.length; i += 1) {
					const par = cells[i].getParent();

					if (par && !dict.get(par)) {
						dict.put(par, true);
						parents.push(par);
					}
				}
			}

			// Passes all selected cells in order to correctly clone or move into
			// the target cell. The method checks for each cell if its movable.
			// debugger;
			cells = this.graph.moveCells(cells, dx, dy, clone, target, evt);
			if (flag) {
				this.graph.fireEvent(new EventObject("DROP_TO_TARGET", {
					target: this.target,
					cells,
				}));
			}
			// Removes parent if all child cells are removed
			const temp = [];

			for (let i = 0; i < parents.length; i += 1) {
				if (this.shouldRemoveParent(parents[i])) {
					temp.push(parents[i]);
				}
			}
			this.graph.removeCells(temp, false);
		});

		// Selects the new cells if cells have been cloned
		if (clone) {

			this.graph.setSelectionCells(cells);
		}

		if (this.isSelectEnabled() && this.scrollOnMove) {
			this.graph.scrollCellToVisible(cells[0]);
		}
	}
	SelectionHandler.prototype.moveCells = _moveCells;

	const _isPropagateSelectionCell = SelectionHandler.prototype.isPropagateSelectionCell;
	SelectionHandler.prototype.isPropagateSelectionCell = function (cell: Cell, immediate: boolean, me: InternalMouseEvent) {
		// 判断要选中的cell是否和当前的选中的cell存在兄弟关系;
		const selectedCells = this.graph.getSelectionCells();
		if (selectedCells.length != 1) {
			return _isPropagateSelectionCell.apply(this, [cell, immediate, me]);
		}
		const curCell = selectedCells[0];
		if (!curCell.parent || !cell.parent) {
			return false;
		}
		if (curCell === cell.parent || cell === curCell.parent) {
			return false;
		}
		return curCell.parent.id !== cell.parent.id;
	}

	graph.addListener("DROP_TO_TARGET", (sender: unknown, evt: EventObject) => {
		// 触发往一个组件里面拖拽其他组件的事件的时候，cell的parent已经有改变
		// cellMoved -》 drop -》 redraw
		console.log("DROP_TO_TARGET");
		const targetCell = evt.getProperty("target") as Cell;
		const cells = evt.getProperty("cells") as Cell[];
		const targetState = graph.getView().getState(targetCell);
		const parentShape = targetState!.shape as LvglBase;
		const pGeo = targetCell.geometry;

		const dataModel = graph.getDataModel();
		cells.forEach((cell) => {
			const geo = cell.geometry;
			const state = graph.view.getState(cell);
			if (geo && pGeo) {
				if (pGeo.width < geo.width || pGeo.height < geo.height) {
					pGeo.width = Math.max(geo.width, pGeo.width) + 10;
					pGeo.height = Math.max(geo.height, pGeo.height) + 10;
					dataModel.setGeometry(targetCell, pGeo);
				}
			}
			if (state) {
				const shape = state.shape;
				if (shape instanceof LvglBase) {
					shape.setParent2(dataModel, parentShape);
				}
			}
			// if (isRoot(preParent)) {
			//   // debugger
			//   const wgtIdx = widgets.findIndex((item)=>item.id === cell.id)!;
			//   deleteWidget2(dataModel, widgets, widgets[wgtIdx], null);
			// } else {
			//   // 从其它父组件拖拽过来的cell，只删除，不添加，添加在CELLS_ADDED事件中
			//   const preParentWgt = findWidget(widgets, preParent.id ?? "");
			//   if (preParentWgt) {
			//     const wgtIdx = preParentWgt.children.findIndex((item)=>item.id === cell.id);
			//     deleteWidget2(dataModel, widgets, preParentWgt.children[wgtIdx], preParentWgt);
			//   }
			// }
			// cell.setParent(targetCell);
		})
		const handler = graph.getPlugin(SelectionCellsHandler.pluginId) as SelectionCellsHandler;
		handler.reset();
		// cons
		// rpc.rpc("updateHirerachyTree");

	});
	// 存在父子关系的cell进行移动时，会触发这个事件
	/*
	---------------------
	|  ---------------   |
	|  |             |   |   cells数组里仅包含此外层cell
	|  |             |   |
	|  |             |   |
	|  ---------------   |
	---------------------
	*/
	graph.addListener(InternalEvent.REMOVE_CELLS_FROM_PARENT, (sender: unknown, evt: EventObject) => {
		// 触发往一个组件里面拖拽其他组件的事件的时候，cell的parent还没有改变
		// drop -》 cellMoved -》 redraw
		console.log("REMOVE_CELLS_FROM_PARENT");
		const dataModel = graph.getDataModel();
		const cells = evt.getProperty("cells") as Cell[];
		const p = cells[0].parent as Cell;
		if (isRoot(p)) return;
		// const pW = findWidget(widgetStores.widgets, p.id ?? "");
		let pGeo = p.geometry;
		cells.forEach((cell) => {
			const defalut = graph.getDefaultParent();
			cell.setParent(defalut);
			const state = graph.view.getState(cell);
			if (state && state.shape instanceof LvglBase) {
				(state.shape).setParent2(dataModel, null);
				(state.shape).setVisible(dataModel, true);
			}
			//父cell也可能拥有非root的父cell。应该递归
			const geo = cell.geometry;
			let p2: Cell | null = p;
			while (geo && pGeo) {
				geo.x += pGeo.x;
				geo.y += pGeo.y;
				p2 = p2?.parent;
				if (p2 && p2.id !== defalut.id) {
					pGeo = p2.geometry;
				} else {
					break;
				}
			}
			graph.getDataModel().setGeometry(cell, geo!);
			// if (pW) {
			//   const wgtIdx = pW.children.findIndex((item)=>item.id === cell.id)!;
			//   // const widgets = pW.children.splice(wgtIdx, 1);
			//   deleteWidget2(dataModel, widgets, pW.children[wgtIdx], pW);
			//   // selectedStores.selectedWidgets.push(widgets[0]);
			// }
		})
		batchUpdateHirerachy(rpc);
	});
}
