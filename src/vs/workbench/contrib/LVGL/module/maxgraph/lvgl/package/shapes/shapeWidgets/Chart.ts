
import { Module, hexStrToLvColor } from "../../LvglModule.js";
import { LvglBase, LV_Obj } from "../lvglBase.js"
import { CreateBaseStyle, LV_Paddings, LV_Transform } from "../lvglStyle.js";
import { lv_chart_type_t, lv_part_t, lv_chart_axis_t, lv_dir_t, lv_chart_update_mode_t } from "../../lvglEnums.js";


export type ChartSeriesItem = {
	name: string;
	series: lvChartSeriesT;
	type: lv_chart_axis_t;
	color: string;
	min: number;
	max: number;
	isHidden: boolean;
}
export class LV_Chart extends LV_Obj {
	serieses: ChartSeriesItem[] = [];
	// cuSeries

	_type: lv_chart_type_t = lv_chart_type_t.LV_CHART_TYPE_LINE;
	_pointCount: number = 0;

	_updateMode: lv_chart_update_mode_t = lv_chart_update_mode_t.LV_CHART_UPDATE_MODE_SHIFT;
	_hdivLineCount: number = 5; // 水平分割线数量
	_vdivLineCount: number = 5; // 垂直分割
	get type(): lv_chart_type_t {
		return this._type;
	}
	set type(value: lv_chart_type_t) {
		this._type = value;
		Module.lv_chart_set_type(this.lvObj, value);
	}
	get updateMode() {
		return this._updateMode;
	}
	set updateMode(value: lv_chart_update_mode_t) {
		this._updateMode = value;
		Module.lv_chart_set_update_mode(this.lvObj, value);
	}

	get hdivLineCount(): number {
		return this._hdivLineCount;
	}
	set hdivLineCount(value: number) {
		this._hdivLineCount = value;
		Module.lv_chart_set_div_line_count(this.lvObj, value, this._vdivLineCount);
	}
	get vdivLineCount(): number {
		return this._vdivLineCount;
	}
	set vdivLineCount(value: number) {
		this._vdivLineCount = value;
		Module.lv_chart_set_div_line_count(this.lvObj, this._hdivLineCount, value);
	}

	constructor(name: string, lvObj: LvObjT) {
		super(name, lvObj);
		this.type = lv_chart_type_t.LV_CHART_TYPE_LINE; // 默认类型为折线图
		const s1 = this.addSeries("primaryY", lv_chart_axis_t.LV_CHART_AXIS_PRIMARY_Y, "#0000ff");
		const s2 = this.addSeries("secondaryY", lv_chart_axis_t.LV_CHART_AXIS_SECONDARY_Y, "#ff0000");
		this.addSeries("primaryX", lv_chart_axis_t.LV_CHART_AXIS_PRIMARY_X, "#00ff00");
		this.addSeries("secondaryX", lv_chart_axis_t.LV_CHART_AXIS_SECONDARY_X, "#ffff00");
		for (let i = 0; i < 10; i++) {
			Module.lv_chart_set_next_value(this.lvObj, s1, (Math.random() * 40 + 10));
			Module.lv_chart_set_next_value(this.lvObj, s2, (Math.random() * 40 + 50));
		}
		Module.lv_chart_refresh(this.lvObj);
		this.hdivLineCount = 5;
		this.vdivLineCount = 5;
	}

	// init(): void {
	//     super.init();
	//     // this.variables["primaryY"] = {

	//     // };
	// }

	addSeries(name: string, axis: lv_chart_axis_t, color: string): lvChartSeriesT {
		const c = hexStrToLvColor(color);
		const series = Module.lv_chart_add_series(this.lvObj, c, axis);
		const item: ChartSeriesItem = {
			name,
			series,
			type: axis,
			color,
			min: 0,
			max: 99999,
			isHidden: false
		}
		this.serieses.push(item);
		return series;
	}
	hideSeries(idx: number): void {
		if (idx < 0 || idx >= this.serieses.length) {
			throw new Error("Index out of bounds");
		}
		const series = this.serieses[idx];
		Module.lv_chart_hide_series(this.lvObj, series.series, true);
	}
	removeSeries(idx: number): void {
		if (idx < 0 || idx >= this.serieses.length) {
			throw new Error("Index out of bounds");
		}
		const series = this.serieses[idx];
		Module.lv_chart_remove_series(this.lvObj, series.series);
		const index = this.serieses.indexOf(series);
		if (index > -1) {
			this.serieses.splice(index, 1);
		}
	}
	addCursor(color: string, dir: lv_dir_t): LvChartCursorT {
		const c = hexStrToLvColor(color);
		const cursor = Module.lv_chart_add_cursor(this.lvObj, c, dir);
		return cursor;
	}

	apply(idx: number) {
		if (idx < 0 || idx >= this.serieses.length) {
			throw new Error("Index out of bounds");
		}
		const series = this.serieses[idx];
		Module.lv_chart_set_range(this.lvObj, series.type, series.min, series.max);
		Module.lv_chart_set_series_color(this.lvObj, series.series, hexStrToLvColor(series.color));
		Module.lv_chart_hide_series(this.lvObj, series.series, series.isHidden);
		Module.lv_chart_refresh(this.lvObj);
	}

	override toXML(doc: XMLDocument): Element | null {
		let ele = super.toXML(doc);
		if (!ele) {
			ele = doc.createElement("Chart");
		};
		const seriesesEle = doc.createElement("Serieses");
		for (const series of this.serieses) {
			const seriesEle = doc.createElement("Series");
			seriesEle.setAttribute("type", series.type.toString());
			seriesEle.setAttribute("color", series.color);
			seriesEle.setAttribute("min", series.min.toString());
			seriesEle.setAttribute("max", series.max.toString());
			seriesEle.setAttribute("isHidden", series.isHidden.toString());
			seriesesEle.appendChild(seriesEle);
		}
		ele.appendChild(seriesesEle);
		return ele;
	}

	override fromXML(element: Element): void {
		super.fromXML(element);
		const seriesesEle = element.querySelector("Serieses");
		if (!seriesesEle) {
			return;
		}
		const seriesEles = seriesesEle.querySelectorAll("Series") as NodeListOf<Element>;
		for (const seriesEle of seriesEles) {
			const type = parseInt(seriesEle.getAttribute("type") || "0", 10) as lv_chart_axis_t;
			const idx = this.serieses.findIndex(s => s.type === type);
			if (idx === -1) {
				return;
			}
			const thisSeries = this.serieses[idx];
			thisSeries.color = seriesEle.getAttribute("color") || "#000000";
			thisSeries.min = parseFloat(seriesEle.getAttribute("min") || "0");
			thisSeries.max = parseFloat(seriesEle.getAttribute("max") || "99999");
			thisSeries.isHidden = seriesEle.getAttribute("isHidden") === "true";
			this.apply(idx);
		}

	}
}

export class LVGL_ShapeChart extends LvglBase {
	override Type = "Chart";

	override lvglCreate(parent: LvObjT): void {
		this._lvglObj = Module.lv_chart_create(parent);
		this._widget = new LV_Chart(this.Type, this._lvglObj);
	}

	override createStyle(stateCount: number) {
		// 向 mainStyles 添加属性
		const mainStyles = this._styles.find(style => style[0] === "Main")?.[1];
		if (mainStyles) {
			// mainStyles.splice(0, mainStyles.length);
		}
		const secondStyles = CreateBaseStyle.createStyles(lv_part_t.LV_PART_SCROLLBAR, stateCount, this.lvglObj, this.State!);
		this._styles.push(["SCROLLBAR", secondStyles]);
		// secondStyles.push(["Line", new LV_Background(stylePart, this.state!, stateCount)]);
		secondStyles.push(["Transform", new LV_Transform(this.lvglObj, lv_part_t.LV_PART_SCROLLBAR, this.State!, stateCount)]);

		const thirdStyles = CreateBaseStyle.createStyles(lv_part_t.LV_PART_ITEMS, stateCount, this.lvglObj, this.State!);
		this._styles.push(["ITEMS", thirdStyles]);

		const forthStyles = CreateBaseStyle.createStyles(lv_part_t.LV_PART_INDICATOR, stateCount, this.lvglObj, this.State!);
		this._styles.push(["INDICATOR", forthStyles]);
		// forthStyles.push(["Line", new LV_Background(stylePart, this.state!, stateCount)]);
		forthStyles.push(["Paddings", new LV_Paddings(this.lvglObj, lv_part_t.LV_PART_ITEMS, this.State!, stateCount)]);

		const fifthStyles = CreateBaseStyle.createStyles(lv_part_t.LV_PART_CURSOR, stateCount, this.lvglObj, this.State!);
		this._styles.push(["CURSOR", fifthStyles]);
		// fifthStyles.push(["Size", new LV_Background(stylePart, this.state!, stateCount)]);
		/*
		const sixthStyles = new CreateBaseStyle(stylePart, this.state!, stateCount).createStyles(this.lvglObj);
		this._Styles.push(["TICKS", sixthStyles]);
		sixthStyles.splice(0, mainStyles.length);
		sixthStyles.push(["Line", new LV_Background(stylePart, this.state!, stateCount)]);
		sixthStyles.push(["Text", new LV_Text(stylePart, this.state!, stateCount)]);
		*/
	}

}

