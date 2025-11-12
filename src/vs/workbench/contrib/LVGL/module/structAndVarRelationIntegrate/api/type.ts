import { structAndVarRelationIntegrateConstant } from '../../../api_demo/static.js';

// export interface Node {
// 	name: string;
// 	id: string;
// 	parent: Node | null;
// 	type: 'folder' | 'file' | 'tsx';
// 	optionType?: structAndVarRelationIntegrateConstant;
// 	domNode?: HTMLElement;
// 	children?: Node[];
// 	[key: string]: any;
// }


export interface contextMenuType {
	label: string;
	id: string;
	action?: Function;
	children?: Array<contextMenuType>;
}
