import {
	UndoManager,
	Graph,
	InternalEvent,
	EventObject
} from "../../packages/core/src/index.js";


export function useUndo(graph: Graph, undoManager: UndoManager): void {


	const undolistener = function (sender: any, evt: EventObject) {
		// todo other
		undoManager.undoableEditHappened(evt.getProperty('edit'));
	};
	const redolistener = function (sender: any, evt: EventObject) {
		// todo other
		// undoManager.(evt.getProperty('edit'));
	};

	graph.getDataModel().addListener(InternalEvent.UNDO, undolistener);
	graph.getView().addListener(InternalEvent.UNDO, undolistener);
	graph.getSelectionModel().addListener(InternalEvent.UNDO, undolistener);

	graph.getDataModel().addListener(InternalEvent.REDO, redolistener);
	graph.getView().addListener(InternalEvent.REDO, redolistener);
	graph.getSelectionModel().addListener(InternalEvent.REDO, redolistener);

}
