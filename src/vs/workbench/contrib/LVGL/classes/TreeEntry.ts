import {
	treeNodeIdAndObj,
	childAndParentMap,
	initTreeNode,
	generateUniqueId,
	insertArrayAfterIndex,
	deleteElements,
} from "../util/util.js";

import {
	type TreeNodeType,
	type configType,
	type ruleType,
} from "../type/type.js";

import api from "../api/index.js";

const defaultRule: ruleType = {
	id: "id",
	label: "label",
	type: "type",
	children: "children",
	optionType: "optionType",
	active: "active",
	iconType: "iconType",
};

export interface treeFlattenerType { }

class NewTreeFlattener<T extends Record<string, any>> {
	private id: string = generateUniqueId();

	private sourceTree: Array<T> = [];

	private editHistory: Array<Array<any>> = [];

	private defaultConfig: Partial<configType> = {
		autoExpand: false,
		expandedKeys: [],
	};

	constructor(id?: string) {
		if (id) {
			this.id = id;
		}
	}

	differentialBuild(newSourceData: Array<T>) {
		const treeFlat = treeNodeIdAndObj(newSourceData, this.treeNodeRule, {});
		for (const element of treeFlat.contentArray) {
			const tempSource = this.getNodeBySourceId(
				element.source[this.treeNodeRule.id]
			);
			if (tempSource) {
				element.expanded = tempSource.expanded;
			}
		}
		this._updateData(newSourceData, treeFlat);
		api.eventBus.emit(`tree:flattener:update:${this.getId()}`, {});
	}

	private flatNodes: Array<TreeNodeType<T>> = [];

	private sourceIdMapNode: Map<string | number, TreeNodeType<T>> = new Map();

	private parentIdMapchildId: Map<string | number, Array<string | number>> =
		new Map();

	private treeIdMapNode: Map<string | number, TreeNodeType<T>> = new Map();

	private treeNodeRule: ruleType = defaultRule;

	build(
		treeData: T[],
		rule: Partial<ruleType>,
		config: Partial<configType>
	): void {
		this.defaultConfig = config;
		const newRule = { ...defaultRule, ...rule };
		this.treeNodeRule = newRule;
		const treeFlat = treeNodeIdAndObj(treeData, newRule, config);
		this.sourceTree = treeData;
		this.flatNodes = treeFlat.contentArray as Array<TreeNodeType<T>>;
		this.sourceIdMapNode = new Map(
			this.flatNodes.map((item) => [item.source[newRule.id], item])
		);
		this.treeIdMapNode = treeFlat.contentMap;
		this.parentIdMapchildId = childAndParentMap(this.treeIdMapNode);
	}

	getFlatNodes(): TreeNodeType<T>[] {
		return this.flatNodes;
	}

	getShow(): TreeNodeType<T>[] {
		return this.flatNodes.filter((node) => this.shouldShowNode(node.treeId));
	}

	private shouldShowNode(nodeId: string | number): boolean {
		let currentId: string | number | undefined =
			this.treeIdMapNode.get(nodeId)?.parentId;

		while (currentId !== undefined) {
			if (currentId === "root") break;
			const node = this.treeIdMapNode.get(currentId);
			if (!node || !node.expanded) return false;
			currentId = node.parentId;
			if (currentId === "root") break;
		}
		return true;
	}

	getChildren(treeId: string | number): TreeNodeType<T>[] | undefined {
		return this.parentIdMapchildId
			.get(treeId)
			?.map((id) => this.treeIdMapNode.get(id)!);
	}

	getNodeByTreeId(treeId: string | number): TreeNodeType<T> | undefined {
		return this.treeIdMapNode.get(treeId);
	}

	getNodeBySourceId(sourceId: string | number): TreeNodeType<T> | undefined {
		return this.sourceIdMapNode.get(sourceId);
	}

	addNewNode(
		sourceTreeNode: T,
		parentId: string | number,
		shouldRename = true
	): TreeNodeType<T> {
		let tempExpand = this.defaultConfig.autoExpand ?? false;
		if (
			this.defaultConfig.expandedKeys?.includes(
				sourceTreeNode[this.treeNodeRule.id]
			)
		) {
			tempExpand = !tempExpand;
		}
		const parentNode = this.getNodeByTreeId(parentId)!;
		parentNode.expanded = true;

		const resultNode: TreeNodeType<T> = {
			...initTreeNode(
				sourceTreeNode,
				parentNode,
				this.treeNodeRule,
				tempExpand
			),
			shouldRename,
		};

		this.sourceIdMapNode.set(sourceTreeNode[this.treeNodeRule.id], resultNode);

		if (this.parentIdMapchildId.get(parentId)) {
			this.parentIdMapchildId.get(parentId)!.push(resultNode.treeId);
		} else {
			this.parentIdMapchildId.set(parentId, [resultNode.treeId]);
		}

		this.treeIdMapNode.set(resultNode.treeId, resultNode);

		const parentTreeIndex = this.flatNodes.findIndex(
			(item) => item.treeId === parentNode.treeId
		);
		const parentOldChildrenLength = this.brotherLength(parentNode);

		this.flatNodes = insertArrayAfterIndex(
			this.flatNodes,
			[resultNode],
			parentTreeIndex + parentOldChildrenLength - 1
		);

		api.eventBus.emit(`tree:flattener:update:${this.id}`, {
			parentNode,
		});
		return resultNode;
	}

	updateTreeNode(newLabelName: string, treeId: string | number): boolean {
		const currentNode = this.getNodeByTreeId(treeId);
		if (currentNode) {
			const brothers = this.getChildren(currentNode.parentId);
			if (brothers) {
				const repeatNameNode = brothers.find((item) => {
					return item.treeLabel === newLabelName;
				});
				if (repeatNameNode && repeatNameNode.treeId !== treeId) {
					return false;
				}
			}
			currentNode!.treeLabel = newLabelName;
			(currentNode as any).source[this.treeNodeRule.label as keyof T] =
				newLabelName;
			delete currentNode!.shouldRename;
			api.eventBus.emit(`tree:flattener:update:${this.id}`, {
				treeFlattener: this,
			});
		}
		return true;
	}

	getId() {
		return this.id;
	}

	rename(treeId: string | number) {
		this.getNodeByTreeId(treeId)!.shouldRename = true;
		api.eventBus.emit(`tree:flattener:rename:${this.id}`, {
			treeId,
			treeFlattener: this,
		});
	}

	private brotherLength(resultNode: any) {
		const startIndex = this.flatNodes.findIndex(
			(item) => item.treeId === resultNode.treeId
		);
		for (let i = startIndex + 1; i < this.flatNodes.length; i++) {
			if (this.flatNodes[i].level <= resultNode.level) {
				return i - startIndex;
			}
		}
		return this.flatNodes.length - startIndex;
	}

	deleteTreeNode(treeId: string | number) {
		const deleteNode = this.getNodeByTreeId(treeId)!;
		if (!deleteNode) {
			return;
		}
		const deleteIndex = this.flatNodes.findIndex(
			(item) => item.treeId === deleteNode.treeId
		);
		const deleteLength = this.brotherLength(deleteNode);
		this.parentIdMapchildId.set(deleteNode.parentId, [
			...this.parentIdMapchildId
				.get(deleteNode.parentId)
				?.filter((item) => item !== deleteNode.treeId)!,
		]);
		for (let i = deleteIndex; i < deleteIndex + deleteLength; i++) {
			let tempTreeNode = this.flatNodes[i];
			this.sourceIdMapNode.delete(tempTreeNode.source[this.treeNodeRule.id]);
			this.parentIdMapchildId.delete(tempTreeNode.treeId);
			this.treeIdMapNode.delete(tempTreeNode.treeId);
		}
		this.flatNodes = deleteElements(
			this.flatNodes,
			deleteLength,
			deleteIndex - 1
		);
		api.eventBus.emit(`tree:flattener:update:${this.id}`, {
			treeFlattener: this,
		});
	}

	buildTreeByTreeId(rootIds: Array<string | number>): TreeNodeType<T>[] {
		const result: TreeNodeType<T>[] = [];
		this.treeIdMapNode.forEach(
			(node) => (node[this.treeNodeRule.children] = [])
		);
		const queue = [...rootIds];
		while (queue.length > 0) {
			const currentId = queue.shift()!;
			const currentNode = this.treeIdMapNode.get(currentId);
			if (!currentNode) continue;
			const childIds = this.parentIdMapchildId.get(currentId) || [];
			childIds.forEach((childId) => {
				const childNode = this.treeIdMapNode.get(childId);
				if (childNode) {
					currentNode[this.treeNodeRule.children]!.push(childNode);
					queue.push(childId);
				}
			});
			if (rootIds.includes(currentId)) {
				result.push(currentNode);
			}
		}
		return result;
	}

	buildTree(): TreeNodeType<T> {
		const virtualRoot: TreeNodeType<T> = {
			treeId: "root",
			treeLabel: "root",
			parentId: "",
			expanded: true,
			level: -1,
			source: {} as T,
			[this.treeNodeRule.children]: [],
		};
		this.treeIdMapNode.forEach(
			(node) => (node[this.treeNodeRule.children] = [])
		);
		const rootNodeIds = this.parentIdMapchildId.get("root") || [];
		rootNodeIds.forEach((rootId) => {
			const rootNode = this.treeIdMapNode.get(rootId);
			if (rootNode) {
				virtualRoot[this.treeNodeRule.children]!.push(rootNode);
			}
		});
		const stack = [...rootNodeIds];
		while (stack.length > 0) {
			const currentId = stack.pop()!;
			const currentNode = this.treeIdMapNode.get(currentId);
			if (!currentNode) continue;
			const childIds = this.parentIdMapchildId.get(currentId) || [];
			childIds.forEach((childId) => {
				const childNode = this.treeIdMapNode.get(childId);
				if (childNode) {
					currentNode[this.treeNodeRule.children]!.push(childNode);
					stack.push(childId);
				}
			});
		}
		return virtualRoot;
	}

	buildSourceTree(rootId = "root"): T[] {
		const rootTreeIds = this.parentIdMapchildId.get(rootId) || [];
		const allRoots: T[] = [];
		rootTreeIds.forEach((rootTreeId) => {
			const rootComponentNode = this.treeIdMapNode.get(rootTreeId);
			if (rootComponentNode) {
				const rootRawNode: T = { ...rootComponentNode.source };
				const queue: Array<[TreeNodeType<T>, T]> = [];
				if (this.parentIdMapchildId.has(rootTreeId)) {
					rootRawNode[this.treeNodeRule.children] = [];
					queue.push([rootComponentNode, rootRawNode]);
				}
				while (queue.length > 0) {
					const [currentComponentNode, currentRawNode] = queue.shift()!;
					const childIds =
						this.parentIdMapchildId.get(currentComponentNode.treeId) || [];
					childIds.forEach((childId) => {
						const childComponentNode = this.treeIdMapNode.get(childId);
						if (childComponentNode) {
							const childRawNode: T = { ...childComponentNode.source };
							if (this.parentIdMapchildId.has(childId)) {
								childRawNode[this.treeNodeRule.children] = [];
							}
							currentRawNode[this.treeNodeRule.children]!.push(childRawNode);
							queue.push([childComponentNode, childRawNode]);
						}
					});
				}
				allRoots.push(rootRawNode);
			}
		});
		if (rootId !== "root") {
			const rootNode = this.treeIdMapNode.get(rootId)!;
			if (rootNode) {
				return [
					{
						...rootNode.source,
						[this.treeNodeRule.children]: allRoots,
					},
				];
			}
		}
		return allRoots;
	}

	changeNodeBySourceId(sourceId: string, newValue: Record<string, any>) {
		const currentNode = this.getNodeBySourceId(sourceId);

		let shouldUpdateUI = false;

		if (currentNode) {
			if (currentNode.source) {
				const currentSourceNode = currentNode.source;

				for (const key in newValue) {
					if (!Object.hasOwn(newValue, key)) continue;

					if (this.treeNodeRule.label === key) {
						currentNode.treeLabel = newValue[key];

						shouldUpdateUI = true;
					}

					if (Object.hasOwn(currentSourceNode, key)) {
						currentSourceNode[key] = newValue[key];
					}
				}
			}
		}

		return shouldUpdateUI;
	}

	private changeNodes(
		sourceNode: TreeNodeType<T>,
		newValue: any,
		length: number,
		treeFlattener: any
	) {
		const flatNodes = treeFlattener.getFlatNodes();
	}

	private findValidElements(
		arr: Array<TreeNodeType<T>>,
		startElement: TreeNodeType<T>,
		targetLength: number,
		treeFlattener: any
	) {
		const startTreeNode = treeFlattener.getNodeBySourceId(startElement.id);
		const startIndex = arr.indexOf(startTreeNode);
		if (startIndex === -1) {
			return;
		}
		let baseLevel = null;
		const currentArr = [];
		for (let i = startIndex; i < arr.length; i++) {
			const current = arr[i];
			if (baseLevel && baseLevel < current.level) {
				continue;
			}
			if (baseLevel === current.level) {
				baseLevel = null;
			}
			if (!current.expanded) {
				baseLevel = current.level;
			}
			currentArr.push(current.source);
			if (currentArr.length === targetLength) {
				break;
			}
		}

		return currentArr.filter(
			(item) =>
				item.optionType ===
				api.constant.structAndVarRelationConstants.STRUCT_VAR_RELATION_STRUCT_ELEMENT
		);
	}

	changeNode(
		sourceNode: TreeNodeType<T>,
		newValue: any,
		length = 1,
		treeFlattener: NewTreeFlattener<T>
	) {
		let shouldUpdateUI = false;
		let tempEditHistory = [];

		if (treeFlattener) {
			const currentArr = this.findValidElements(
				treeFlattener.getFlatNodes(),
				sourceNode,
				length,
				treeFlattener
			);

			if (currentArr) {
				for (let i = 0; i < currentArr.length; i++) {
					const currentSourceNodeData = currentArr[i];
					const currentNode = this.getNodeBySourceId(
						currentSourceNodeData[this.treeNodeRule.id]
					);
					if (currentNode) {
						if (currentNode.source) {
							const currentSourceNode = currentNode.source;

							for (const key in newValue) {
								if (!Object.hasOwn(newValue, key)) continue;

								if (this.treeNodeRule.label === key) {
									currentNode.treeLabel = newValue[key];

									shouldUpdateUI = true;
								}

								if (Object.hasOwn(currentSourceNode, key)) {
									if (currentSourceNode[key] != newValue[key]) {
										tempEditHistory.push({
											id: currentSourceNode.id,
											key: currentSourceNode[key],
										});
									}

									currentSourceNode[key] = newValue[key];
								}
							}
						}
					}
				}
			}
		} else {
			const currentNode = this.getNodeBySourceId(
				sourceNode[this.treeNodeRule.id]
			);
			if (currentNode) {
				if (currentNode.source) {
					const currentSourceNode = currentNode.source;
					for (const key in newValue) {
						if (!Object.hasOwn(newValue, key)) continue;

						if (this.treeNodeRule.label === key) {
							currentNode.treeLabel = newValue[key];

							shouldUpdateUI = true;
						}

						if (Object.hasOwn(currentSourceNode, key)) {
							if (currentSourceNode[key] != newValue[key]) {
								tempEditHistory.push({
									id: currentSourceNode.id,
									key: currentSourceNode[key],
								});
							}

							currentSourceNode[key] = newValue[key];
						}
					}
				}
			}
		}

		if (tempEditHistory.length) {
			this.editHistory.push(tempEditHistory);
		}
		console.log(this.editHistory);

		return shouldUpdateUI;
	}

	private _updateData(
		newSourceData: Array<T>,
		newTreeFlat: {
			contentArray: Array<TreeNodeType<any>>;
			contentMap: Map<string | number, TreeNodeType<any>>;
		}
	) {
		this.sourceTree = newSourceData;
		this.flatNodes = newTreeFlat.contentArray;
		this.sourceIdMapNode = new Map(
			this.flatNodes.map((item) => [item.source[this.treeNodeRule.id], item])
		);
		this.treeIdMapNode = newTreeFlat.contentMap;
		this.parentIdMapchildId = childAndParentMap(newTreeFlat.contentMap);
	}
}

export { type ruleType, defaultRule };

export default NewTreeFlattener;
