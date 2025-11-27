import {
	type UndoableChange,
} from "../../../packages/core/src/types.js";

import type { LvglBase } from "../../package/shapes/lvglBase.js";

class LvglVisibleChange implements UndoableChange {
	visible: boolean;
	shape: LvglBase;

	constructor(shape: LvglBase, visible: boolean) {
		this.shape = shape;
		this.visible = visible;
	}

	execute(): void {
		if (this.shape.isVisible === this.visible) {
			return; // 如果当前可见状态与目标状态相同，则不执行任何操作
		}
		this.shape.isVisible = this.visible;
		this.visible = !this.visible;
	}
}

export default LvglVisibleChange;
