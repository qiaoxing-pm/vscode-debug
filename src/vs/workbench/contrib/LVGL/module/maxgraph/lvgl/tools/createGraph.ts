import {
	Graph,
	Cell,
	GraphDataModel,
	SelectionHandler,
} from "../../packages/core/src/index.js";

import type {
	LvScreen
} from "../../type.js"



function createGraph(container: HTMLDivElement, screen: LvScreen): Graph {
	const graph = new Graph(container);

	return graph;
}

export default createGraph;
