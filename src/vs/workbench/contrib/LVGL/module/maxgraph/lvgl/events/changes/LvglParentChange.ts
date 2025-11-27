import type { LvglBase } from "../../package/shapes/lvglBase.js";
import {
	type UndoableChange
} from "../../../packages/core/src/types.js";

class LvglParentChange implements UndoableChange {
	curParent: LvglBase | null;
	preParent: LvglBase | null;
	shape: LvglBase;
	constructor(shape: LvglBase, parent: LvglBase | null) {
		this.shape = shape;
		this.curParent = parent;
		this.preParent = parent;
	}

	execute(): void {
		this.curParent = this.preParent;
		this.preParent = this.shape.setParent(this.curParent);
	}
}

export default LvglParentChange;
