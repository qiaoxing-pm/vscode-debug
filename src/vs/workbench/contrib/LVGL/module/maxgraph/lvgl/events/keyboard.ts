import {
	Graph,
	UndoManager
} from "../../packages/core/src/index.js";
import Editor from "../../Editor/Editor.js";
import type { RpcProviderInterface } from "../../../../lib/worker-rpc/lib/index.js";
import { batchUpdateHirerachy } from "./hirerachyTree.js";
import type { LvScreen } from "../../type.js"

type KeyBoardCb = (event: KeyboardEvent) => void;
const { copy, cut, paste } = Editor;
export class KeyboardHandler {
	graph: Graph;
	controlKeys: { [key: string]: KeyBoardCb } = {};
	shiftKeys: { [key: string]: KeyBoardCb } = {};
	normalKeys: { [key: string]: KeyBoardCb } = {};

	constructor(graph: Graph, container: HTMLElement) {
		// console.log("las;jhlkasjf", graph, container)
		this.graph = graph;
		// container.addEventListener("keydown", (e: KeyboardEvent) => {
		// 	console.log('kjasfhkljashf', e)
		// 	const keyCode = e.key;
		// 	if (e.ctrlKey) {
		// 		if (this.controlKeys[keyCode]) {
		// 			this.controlKeys[keyCode](e);
		// 			e.preventDefault();
		// 		}
		// 	} else if (e.shiftKey) {
		// 		if (this.shiftKeys[keyCode]) {
		// 			this.shiftKeys[keyCode](e);
		// 			e.preventDefault();
		// 		}
		// 	} else {
		// 		if (this.normalKeys[keyCode]) {
		// 			this.normalKeys[keyCode](e);
		// 			e.preventDefault();
		// 		}
		// 	}
		// });
	}

	bindKey(key: string, cb: KeyBoardCb) {
		this.normalKeys[key] = cb;
	}

	bindShiftKey(key: string, cb: KeyBoardCb) {
		this.shiftKeys[key] = cb;
	}

	bindControlKey(key: string, cb: KeyBoardCb) {
		this.controlKeys[key] = cb;
	}

}

export function useKeyboard(graph: Graph, container: HTMLElement, screen: LvScreen, undoManager: UndoManager, rpc: RpcProviderInterface) {
	const keyHandler = new KeyboardHandler(graph, container);
	keyHandler.bindControlKey("a", (e) => {
		graph.selectAll();
	});

	keyHandler.bindControlKey("c", async (e) => {
		copy(graph);
	});

	keyHandler.bindControlKey("x", async (e) => {
		cut(graph);
	});

	keyHandler.bindControlKey("v", async (e) => {
		const str = await navigator.clipboard.readText();
		paste(graph, str, screen.screenObj, {
			offset: { x: 20, y: 20 },
		});
	});

	keyHandler.bindControlKey("z", (e) => {
		undoManager.undo();
		batchUpdateHirerachy(rpc);
	});

	keyHandler.bindControlKey("y", (e) => {
		undoManager.redo();
		batchUpdateHirerachy(rpc);
	});

	keyHandler.bindKey("Delete", (e) => {
		Editor.delete(graph);
	});
}
