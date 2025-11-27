import { findWidget } from "../../tools/widget.js";
import {
	type UndoableChange
} from "../../../packages/core/src/types.js";
import type { LvglWidget } from "../../../type.js"


class HierarchyChange implements UndoableChange {
	isAdd: boolean;
	widgets: LvglWidget[];
	preParent: LvglWidget | null;
	curParent: LvglWidget | null;
	widget: LvglWidget;
	constructor(widgets: LvglWidget[], widget: LvglWidget, parent: LvglWidget | null, isAdd: boolean) {
		this.widgets = widgets;
		this.widget = widget;
		this.preParent = parent;
		this.curParent = parent;
		this.isAdd = isAdd;
	}

	execute(): void {
		this.curParent = this.preParent;
		this.preParent = findWidget(this.widgets, this.widget.id, (item) => {
			return item.children.findIndex((child) => child.id === this.widget.id) !== -1;
		});
		if (this.isAdd) {
			if (!this.curParent) {
				this.widgets.push(this.widget);
			} else {
				this.curParent.children.push(this.widget);
			}
		} else {
			// 从父节点中删除
			if (this.curParent) {
				const index = this.curParent.children.findIndex((item) => item.id === this.widget.id);
				if (index !== -1) {
					this.curParent.children.splice(index, 1);
				}
			} else {
				// 如果没有父节点，则从顶层widgets中删除
				const index = this.widgets.findIndex((item) => item.id === this.widget.id);
				if (index !== -1) {
					this.widgets.splice(index, 1);
				}
			}
		}
		// this.preParentId = findWidget(this.widgets, this.id)?.parent?.id ?? "";
		this.isAdd = !this.isAdd;
	}
}

export default HierarchyChange;
