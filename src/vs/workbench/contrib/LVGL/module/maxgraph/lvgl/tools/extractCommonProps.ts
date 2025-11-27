import type { LVStyleState, LV_StyleCombine, LvStylePart, Props } from "../package/type.js";

type NestedObjectData = Record<string, any>;

function extractCommonNestedData(objects: NestedObjectData[]): NestedObjectData {
	if (objects.length === 0) {
		return {};
	}
	const commonData: NestedObjectData = {};
	// 获取第一个对象的所有属性名
	const keys = Object.keys(objects[0]);
	keys.forEach(key => {
		// 只检查下划线为首的属性并且检查属性是否在所有对象中都存在
		if (objects.every(obj => key in obj)) {
			// 如果属性值是对象，则递归比较
			if (typeof objects[0][key] === 'object' && objects[0][key] !== null) {
				commonData[key] = extractCommonNestedData(objects.map(obj => obj[key]));
			} else {
				// 普通属性，比较每一个对象的值，判断是否相等，相等就保留
				if (objects.slice(1).every(obj => obj[key] === objects[0][key])) {
					commonData[key] = objects[0][key];
				} else {
					const v = objects[0][key];
					if (typeof v === "number") {
						commonData[key] = -1;
					} else if (typeof v === "string") {
						commonData[key] = "";
					} else {
						commonData[key] = null;
					}

				}
			}
		}
	});
	return commonData;
}

function extractCommonHMIProps(datas: Array<[string, any, ...any[]][]>, isSameType: boolean, type = ""): [string, any, ...any[]][] {
	let res: Array<[string, any, ...any[]]> = [];
	const layouts: Record<string, any>[] = [];
	const properties: Record<string, any>[] = [];
	const displaies: Record<string, any>[] = [];
	const permissions: Record<string, any>[] = [];
	for (let i = 0; i < datas.length; i++) {
		const data = datas[i];
		const layout = data[0][1][0][1];
		layouts.push(layout);
		if (!isSameType) {
			continue;
		}
		const property = data[0][1][1][1];
		if (property) {
			properties.push(property);
		}
		const display = data[1][1][0][1];
		if (display) {
			displaies.push(display);
		}
		const permission = data[2][1];
		if (permission) {
			permissions.push(permission);
		}
	}
	if (!isSameType) {
		return [
			["General", [
				["Layout", extractCommonNestedData(layouts)],
			]],
		]
	}
	res = [
		["General", [
			["Layout", extractCommonNestedData(layouts)],
			[type, extractCommonNestedData(properties)],
		]],
		["Display", [
			[type, extractCommonNestedData(displaies)],
		]],
		["Permission", extractCommonNestedData(permissions)],
	];
	console.log("extractCommonHMIProps", res);
	return res;
}

const UnsupportedMultiSelectTypes = [
	"multiStateButton", "multiStateImage", "multiStateNum",
	// "Multi"
]

function extractCommonProps(datas: Array<[string, any, ...any[]][]>, isSameType: boolean, type = "", isHMI = false): [string, any, ...any[]][] {
	if (datas.length === 0) return [];
	if (isHMI) {
		return extractCommonHMIProps(datas, isSameType, type);
	}
	const commonProps: Array<[string, any, ...any[]]> = [];
	// widgets [id, layout, flags, states, widget] 如果是同一种类型的widget，则widget是同一种类型
	const firstProps = datas[0];
	let widgetProps = firstProps[0][1];
	const stylesProps = firstProps[1][1] as LVStyleState;
	const firstLayoutData = widgetProps[1][1];
	if (datas.length === 1) {
		return datas[0];
	}
	const layouts = [firstLayoutData];
	const stylesList = [stylesProps];
	// const flags = [widgetProps[2][1].value];
	// const states = [widgetProps[3][1].value];
	widgetProps = [];
	if (isSameType && !type.includes("multi")) {
		datas.forEach(d => {
			widgetProps.push(d[0][1][4][1]);
		})
		widgetProps = extractCommonNestedData(widgetProps);
	} else {
		widgetProps = firstProps[0][1][4][1];
	}
	for (let i = 1; i < datas.length; i++) {
		const otherProps = datas[i];
		const layout = otherProps[0][1][1][1];
		layouts.push(layout);
		const styles = otherProps[1][1];
		stylesList.push(styles);
	}
	const commonLayout = extractCommonNestedData(layouts);
	commonLayout.isValid = true;
	const commonStyles = getCommonStyles(...stylesList);
	commonProps.push(["Widgets", [
		[],
		["Layout", commonLayout],
		["Flags", { value: 0, type: "common" }], // flags
		["States", { value: 0, type: "common" }], // states
		[type, widgetProps], // 占位
	]]);
	// console.log("Styles", commonStyles);
	commonProps.push(["Styles", commonStyles, { curStyleState: firstProps[1][2].curStyleState }]);
	return commonProps;
}

function getCommonStyles(
	...styleStates: LVStyleState[]
): [LvStylePart, [string, Object][]][] {
	if (styleStates.length === 0) return [];

	// ---- 1. 找出共同的 part ----
	const commonParts = new Set(styleStates[0].map(([part]) => part));
	for (let i = 1; i < styleStates.length; i++) {
		const parts = new Set(styleStates[i].map(([part]) => part));
		for (const p of Array.from(commonParts)) {
			if (!parts.has(p)) commonParts.delete(p);
		}
	}

	const result: [LvStylePart, [string, Object][]][] = [];

	// ---- 2. 针对每个共同 part，求共同 style ----
	for (const part of commonParts) {
		const styleNameSets = styleStates.map(styles => {
			const entry = styles.find(([p]) => p === part);
			const names = entry ? entry[1].map(([name]) => name) : [];
			return new Set(names);
		});

		const commonStyleNames = Array.from(styleNameSets[0]).filter(name =>
			styleNameSets.every(set => set.has(name))
		);

		const stylePairs: [string, Object][] = [];

		// ---- 3. 每个共同 style 名，提取共同属性 ----
		for (const styleName of commonStyleNames) {
			const allInstances = []; // : LV_BaseStyle[]

			for (const styles of styleStates) {
				const entry = styles.find(([p]) => p === part);
				const obj = entry?.[1].find(([n]) => n === styleName)?.[1];
				if (obj) allInstances.push(obj);
			}

			if (allInstances.length === styleStates.length) {
				const picked = allInstances; // allInstances.map(o => o.pickAttributes())
				const merged = extractCommonNestedData(picked);
				stylePairs.push([styleName, merged]);
			}
		}

		if (stylePairs.length > 0) result.push([part, stylePairs]);
	}

	return result;
}

export default extractCommonProps;
