import { structAndVarRelationIntegrateConstant } from '../../../api/static.js';

export interface Node {
	label: string;
	id: string;
	parent: Node | null;
	type: 'folder' | 'file' | 'tsx';
	contextMenu?: structAndVarRelationIntegrateConstant;
	domNode?: HTMLElement;
	children?: Node[];
}


export interface contextMenuType {
	label: string;
	id: string;
	action?: Function;
	children?: Array<contextMenuType>;
}
