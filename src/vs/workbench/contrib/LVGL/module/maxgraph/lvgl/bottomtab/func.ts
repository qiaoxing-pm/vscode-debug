import { compile, downloadFile } from "../tools/api/compile.js";
import { screenStore } from "../store/index.js";
import { exportProjectXML } from "../tools/projectXml.js";
import { exportXML } from "../tools/serialize.js";

function exportAllCanvas() {
	const canvasXmls: string[] = [];
	for (const id in screenStore.screens) {
		const graph = screenStore.graphs[id];
		const screen = screenStore.screens[id];
		if (graph && screen) {
			const xml = exportXML(graph, screen);
			canvasXmls.push(xml);
		} else {
			throw new Error(`Screen or Graph not found for id: ${id}`);
		}
	}
	return canvasXmls;
}

export async function compileProject() {
	if (!screenStore.curGraph || !screenStore.curScreen) {
		// api.message.globalMessageNotice({
		// 	type: "error",
		// 	message: "No screen selected for compile",
		// });
		return;
	}
	// const spinner = api.popUp.getPopUp(
	// 	window.API.constant.component.GLOBAL_LOAD,
	// ) as any;
	// spinner.changeSpinner({
	// 	title: "Compiling...",
	// })
	const res = await compile(exportProjectXML(), exportAllCanvas());
	// window.API.message.globalMessageNotice({
	// 	type: res.type,
	// 	message: res.message,
	// })
	// spinner.close();
}

export function downloadCompiledFile() {
	try {
		downloadFile();
	} catch (error) {
		console.error("Download failed", (error as Error).message);
	}
}
