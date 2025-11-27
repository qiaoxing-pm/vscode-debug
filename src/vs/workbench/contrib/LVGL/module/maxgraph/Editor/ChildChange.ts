import HMiBase from "../hmi/elements/HMiBase.js";
import {
	ChildChange,
	GraphDataModel,
	Cell
} from "../packages/core/src/index.js";
import { Module } from "../lvgl/package/LvglModule.js";

export class ChildIdxChange extends ChildChange {
	constructor(model: GraphDataModel, parent: Cell | null, child: Cell, index = 0) {
		super(model, parent, child, index);
	}

	override execute() {
		let tmp = this.child.getParent();
		const tmp2 = tmp ? tmp.getIndex(this.child) : 0;

		if (!this.previous) {
			this.connect(this.child, false);
		}

		tmp = this.model.parentForCellChanged(this.child, this.previous, this.previousIndex);
		if (this.child instanceof HMiBase) {
			const obj = this.child._lvObj;
			Module.lv_obj_move_to_index(obj, this.previousIndex);
		}


		this.parent = this.previous;
		this.previous = tmp;
		this.index = this.previousIndex;
		this.previousIndex = tmp2;
	}
}
