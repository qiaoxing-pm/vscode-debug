import type { PropVariableDes, Expression } from "../package/type.js";
import { genRandomStr } from "../../util.js";

import api from '../../../../api/index.js';

export function variableIdToName(ids: string): string {
	let res = "";
	const idArr = ids.split(".");
	const treeFlattener = api.structAndVarRelationIntegrate.getTreeFlattener();
	idArr.forEach((id) => {
		const s = treeFlattener.getNodeBySourceId(id)?.source;
		if (s) {
			res += (s.name as string) + ".";
		}
	});
	// 去掉最后一个点
	return res.slice(0, -1);
}

export function VariablesToNode(
	doc: XMLDocument,
	variables: PropVariableDes
): Element | null {
	let cnt = 0;
	const node = doc.createElement("Variables");
	for (const variable in variables) {
		if (!variables[variable].bindVar) continue;
		cnt++;
		const varNode = doc.createElement("Variable");
		varNode.setAttribute("name", variable);
		varNode.setAttribute("type", variables[variable].type);
		if (variables[variable].isDynamic) {
			varNode.setAttribute("isDynamic", "true");
		}
		const bindVar = variables[variable].bindVar;
		varNode.setAttribute("bindVar", variableIdToName(bindVar));
		varNode.setAttribute("bindVarId", bindVar);
		if (variables[variable].expression) {
			const expNode = doc.createElement("Expressions");
			variables[variable].expression.forEach((e) => {
				const node = doc.createElement("Expression");
				// expNode.setAttribute("key", e.key); // key不存储，读取时重新生成
				node.setAttribute("condition", e.condition);
				if (e.condition === "btwn") {
					// between
					node.setAttribute("value", e.value.join(","));
				} else if (e.value.length > 0) {
					node.setAttribute("value", e.value[0].toString());
				}
				node.setAttribute("result", e.result.toString());
				expNode.setAttribute("valueType", e.valueType); // 同一组表达式中 valueType 和 resultType 必然相同
				expNode.appendChild(node);
			});
			varNode.appendChild(expNode);
		}
		node.appendChild(varNode);
	}
	if (cnt === 0) return null;
	return node;
}

export function nodeToVariables(
	obj: { variables: PropVariableDes },
	variablesNode: Element
): PropVariableDes {
	const variables: PropVariableDes = {};
	const variableNodes = variablesNode?.querySelectorAll("Variable") || [];
	variableNodes.forEach((varNode) => {
		const name = varNode.getAttribute("name");
		if (!name) return;
		const bindVar = varNode.getAttribute("bindVarId"); // name无用，只关心id
		const isDynamic = varNode.getAttribute("isDynamic") === "true";
		const resultType = obj.variables[name].type;
		if (bindVar && name && obj.variables[name]) {
			obj.variables[name].bindVar = bindVar;
			obj.variables[name].isDynamic = isDynamic;
			const expressionsNode = varNode.querySelector("Expressions");
			if (!expressionsNode) return;
			const expressions: Expression[] = [];
			const expressionNodes = expressionsNode?.querySelectorAll("Expression");
			expressionNodes.forEach((expNode) => {
				const condition = expNode.getAttribute("condition")!;
				const valueStr = expNode.getAttribute("value")! as string;
				const valueType = expressionsNode.getAttribute("valueType")!; // 同一组表达式中 valueType 和 resultType 必然相同
				let valueArr: (number | string)[] = [];
				if (condition === "btwn" && !valueStr.includes(",")) {
					valueArr = valueStr.split(",").map((v) => {
						return valueType === "number" ? Number(v) : v;
					});
				} else {
					valueArr = [
						valueType === "number" ? Number(valueStr) : valueStr,
						valueType === "number" ? Number(valueStr) : valueStr,
					];
				}
				const result =
					resultType !== "string"
						? Number(expNode.getAttribute("result")!)
						: expNode.getAttribute("result")!;
				expressions.push({
					key: genRandomStr(6),
					condition,
					value: valueArr,
					valueType,
					result,
				});
			});
			if (expressions.length > 0) {
				obj.variables[name].expression = expressions;
			}
		}
	});
	return variables;
}

export function writeVariablesToNode(node: Element, varId: string) {
	node.setAttribute("variableId", varId);
	node.setAttribute("variable", variableIdToName(varId));
}
