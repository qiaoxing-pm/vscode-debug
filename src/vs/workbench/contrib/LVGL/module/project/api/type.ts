export interface Node {
	label: string;
	type: 'folder' | 'other' | 'module';
	data?: any;
	children?: Array<Node>;
	module?: any;
}

export interface TreeNodeDom {
	label: HTMLSpanElement;
	twistie: HTMLDivElement;
	container: HTMLElement;
	parent: HTMLElement;
}
