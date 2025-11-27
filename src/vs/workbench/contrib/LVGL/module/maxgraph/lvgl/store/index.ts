import type {
	ScreenStore,
	AnimationProps,
	WidgetProps,
	LvglWidget,
	ProjectStore,
	VariableDes,
} from "../../type.js";

export const screenStore: ScreenStore = {
	curScreen: null,
	curGraph: null,
	screens: {},
	graphs: {},
};

export const animationSStore: AnimationProps = {
	animations: {},
	cnt: 0,
};

export const typeState: {
	type: "plc" | "lvgl";
} = {
	type: "lvgl",
};

export const widgetProps: WidgetProps = {
	props: [],
	selectedCellsIds: "ss",
	selectedCellsLen: 0,
	curlvglShape: null,
	update: 0,
};

export const widgetStores: {
	widgets: LvglWidget[];
	isSelectedChange: boolean;
} = {
	widgets: [],
	isSelectedChange: false,
};

export const projectStore: ProjectStore = {
	asserts: [],
	lvFonts: {},
	fontData: [],
	images: [],
};

export const variablesStore: Array<VariableDes> = [
	{
		name: "myVar",
		type: "string",
		container: "one",
		description: "My variable",
	},
	{
		name: "myNumber",
		type: "number",
		container: "one",
		description: "My number variable",
	},
	{
		name: "myBoolean",
		type: "boolean",
		container: "one",
		description: "My boolean variable",
	},
	{
		name: "myVar2",
		type: "string",
		container: "one",
		description: "My object variable",
	},
	{
		name: "myNumber3",
		type: "number",
		container: "one",
		description: "My number variable",
	},
	{
		name: "myNumber2",
		type: "number",
		container: "one",
		description: "My number variable",
	},
];
