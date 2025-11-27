import {
	Graph, PopupMenuHandler,
	Cell,
	UndoManager
} from "../../packages/core/src/index.js";
import type {
	PopupMenuItem
} from "../../packages/core/src/types.js";
import Editor from "../../Editor/Editor.js";
import { getTopmostCells } from "../../packages/core/src/util/cellArrayUtils.js";
import { type RpcProviderInterface } from "../../../../lib/worker-rpc/lib/index.js";
import type { LvScreen } from "../../type.js"

const { copy, cut, paste, zoomIn, zoomOut } = Editor;

export function usePopupMenu(graph: Graph, screen: LvScreen, undoManager: UndoManager, rpc: RpcProviderInterface) {

	function factoryMethod(handler: PopupMenuItem, cell: Cell | null, me: MouseEvent) {

		const menu = (<unknown>handler) as PopupMenuHandler;
		menu.addItem("Copy", null, async () => {
			copy(graph);
		}, null, null, true, true, false);

		menu.addItem("Cut", null, async () => {
			cut(graph);
		}, null, null, true, true, false);

		menu.addSeparator();

		menu.addItem("Paste", null, async () => {
			const str = await navigator.clipboard.readText();
			paste(graph, str, screen.screenObj, {
				offset: { x: 20, y: 20 },
			});

		}, null, null, true, true, false);

		menu.addSeparator();

		menu.addItem("Delete", null, () => {
			const cells = getTopmostCells(graph.getSelectionCells());
			graph.removeCells(cells, true);
		}, null, null, true, true, false);
		menu.addSeparator();

		menu.addItem("Undo", null, () => {
			undoManager.undo();
			// undoManager.redo();
			rpc.rpc("updateHirerachyTree");
		}, null, null, true, true, false);

		menu.addSeparator();
		menu.addItem("放大", null, () => {

			zoomIn(graph, screen);

		}, null, null, true, true, false);

		menu.addItem("缩小", null, () => {

			zoomOut(graph, screen);

		}, null, null, true, true, false);

	};

	let popupMenu = graph.getPlugin("PopupMenuHandler") as PopupMenuHandler;
	popupMenu.autoExpand = true; 	// 鼠标放到二级菜单时自动子项自动展开
	popupMenu.factoryMethod = factoryMethod;

}
