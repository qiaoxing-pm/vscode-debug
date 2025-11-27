import HMiBase from "../../hmi/elements/HMiBase.js";
import {
	UndoableEdit,
	InternalEvent,
	EventObject,
	UndoManager,
	ChildChange
} from "../../packages/core/src/index.js";

class LvglUndoManager extends UndoManager {
	undoableEditHappened(undoableEdit: UndoableEdit): void {
		this.trim();
		this.shift();
		this.history.push(undoableEdit);
		this.indexOfNextAdd = this.history.length;
		this.fireEvent(new EventObject(InternalEvent.ADD, { edit: undoableEdit }));
	}

	shift() {
		if (this.size > 0 && this.size == this.history.length) {
			const history = this.history.shift();
			if (!history) return;
			history.changes.forEach((change) => {
				if (change instanceof ChildChange && change.parent === null && change.child instanceof HMiBase) {
					// console.log("shift and destroy:", change.child.type);
					change.child.destroy();
				}
			});
		}
	}

	die(edits: UndoableEdit[]) {
		for (let i = 0; i < edits.length; i += 1) {
			const edit = edits[i];
			edit.die();
			// edit.changes.forEach((change) => {
			//   if (change instanceof ChildChange && change.previous === null && change.child instanceof HMiBase) {
			//     console.log("Die and destroy:", change.child.type);
			//     // change.child.destroy();
			//   }
			// });
		}
	}

	/**
	 * Removes all pending steps after <indexOfNextAdd> from the history,
	 * invoking die on each edit. This is called from <undoableEditHappened>.
	 */
	trim(): void {
		if (this.history.length > this.indexOfNextAdd) {
			const edits = this.history.splice(
				this.indexOfNextAdd,
				this.history.length - this.indexOfNextAdd
			);
			this.die(edits);
		}
	}
}

export default LvglUndoManager;
