import { type RpcProviderInterface } from "../../../../lib/worker-rpc/lib/index.js";
import {
	Cell,
	Graph,
} from "../../packages/core/src/index.js";
import { getAllWidgets } from "../tools/widget.js";
import { debounce } from "../tools/debounce.js";
import type { LvglWidget } from "../../type.js"


export function useHirerachyTree(graph: Graph, widgets: LvglWidget[], rpcProvider: RpcProviderInterface) {

	rpcProvider.registerRpcHandler("updateHirerachyTree", () => {
		const root = graph.getDefaultParent();
		const widget = getAllWidgets(graph, root);
		widgets.splice(0, widgets.length);
		widgets.push(widget);
		rpcProvider.rpc("updateTree");
	});
};

export const batchUpdateHirerachy = debounce((rpc: RpcProviderInterface) => {
	rpc.rpc("updateHirerachyTree");
}, 50);
