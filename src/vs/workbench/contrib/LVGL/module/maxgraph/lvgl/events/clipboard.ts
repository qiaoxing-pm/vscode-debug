import {
	Graph,
	InternalEvent,
} from "../../packages/core/src/index.js";
import Editor from "../../Editor/Editor.js";
import type { LvScreen } from "../../type.js"



export function useClipboard(graph: Graph, textInput: HTMLInputElement, screen: LvScreen) {
	let restoreFocus = false;
	InternalEvent.addListener(document, "keydown", function (evt: KeyboardEvent) {
		if (!textInput) return;
		if (graph.isEnabled() && !graph.isMouseDown && !graph.isEditing()) {
			if (evt.keyCode === 17) {
				if (!restoreFocus) {
					textInput.style.position = "absolute";
					textInput.style.zIndex = "-10000000";
					textInput.style.opacity = "0";
					restoreFocus = true;
					textInput.focus();
					textInput.select();
				}
			}
		}
	});

	// Restores focus on graph this.el and removes text input from DOM
	InternalEvent.addListener(document, "keyup", function (e: KeyboardEvent) {
		if (!textInput) return;
		if (
			restoreFocus &&
			(e.keyCode === 224 /* FF */ ||
				e.keyCode === 17 /* Control */ ||
				e.keyCode === 91 ||
				e.keyCode === 93) /* Meta */
		) {
			restoreFocus = false;
			if (!graph.isEditing()) {
				graph.container.focus();
			}
			textInput.parentNode?.removeChild(textInput);
		}
	});


	textInput!.addEventListener("copy", (e: ClipboardEvent) => {
		e.preventDefault();
		const xmlString = Editor.copy(graph);
		if (xmlString) {
			e.clipboardData?.setData("text/plain", xmlString);
		}
	});

	textInput!.addEventListener("cut", (e: ClipboardEvent) => {
		e.preventDefault();
		const xmlString = Editor.cut(graph);
		if (xmlString) {
			e.clipboardData?.setData("text/plain", xmlString);
		}
	});

	textInput!.addEventListener("paste", (e: ClipboardEvent) => {
		e.preventDefault();
		const xmlString = e.clipboardData?.getData("text/plain").trim() || "";
		Editor.paste(graph, xmlString, screen.screenObj, {
			offset: { x: 20, y: 20 },
		});
	});
}
