import { Graph, Geometry } from "../packages/core/src/index.js";
import BitButton from "./elements/BitButton.js";
import WordButton from "./elements/WordButton.js";
import MoveTrack from "./elements/MoveTrail.js";
import LineScale from "./elements/LineScale.js";
import QRCode from "./elements/QRCode.js";
import Roller from "./elements/RollerMonitor.js";
import NumberDisplayer from "./elements/NumMonitor.js";
import ASCIIDisplayer from "./elements/ASCIIMonitor.js";
import FlowBlock from "./elements/FlowBlock.js";
import XYCurve from "./elements/XYCurve.js";
import DataGroup from "./elements/DataGroup.js";
import RingChart from "./elements/RingChart.js";
import SlideSwitch from "./elements/SliderSwitch.js";
import TimeMonitor from "./elements/TimeMonitor.js";
import FunctionButton from "./elements/FunctionButton.js";
import MultiFuncButton from "./elements/MultiFuncButton.js";
import TrendChart from "./elements/TrendChart.js";
import OptionList from "./elements/OptionList.js";
import Gauge from "./elements/Gauge.js";
import CustomBar from "./elements/CustomBar.js";
import ImageMonitor from "./elements/ImageMonitor.js";
import GIFMonitor from "./elements/GIFMonitor.js";
// import type LvglGraph from "../../../lvgl/elements/LvglGraph.js";
import type LvglGraph from "../lvgl/elements//RubberBand.js";
import LedButton from "./elements/LedButton.js";
import ScreenButton from "./elements/ScreenButton.js";
import MultiButton from "./elements/MultiButton.js";

export function createHMIWidget(graph: LvglGraph, screen: LvObjT) {
	const dp = graph.getDefaultParent();
	let parent = dp;
	graph.batchUpdate(() => {
		let v1 = new BitButton(new Geometry(0, 0, 100, 50), screen);
		graph.addCell(v1, parent);
		v1 = new QRCode(new Geometry(105, 0, 100, 50), screen);
		graph.addCell(v1, parent);
		v1 = new FlowBlock(new Geometry(210, 0, 100, 50), screen);
		graph.addCell(v1, parent);
		v1 = new Roller(new Geometry(315, 0, 100, 50), screen);
		graph.addCell(v1, parent);
		v1 = new TimeMonitor(new Geometry(420, 0, 100, 50), screen);
		graph.addCell(v1, parent);

		v1 = new NumberDisplayer(new Geometry(0, 55, 100, 50), screen);
		graph.addCell(v1, parent);
		v1 = new XYCurve(new Geometry(105, 55, 100, 50), screen);
		graph.addCell(v1, parent);
		v1 = new DataGroup(new Geometry(210, 55, 100, 50), screen);
		graph.addCell(v1, parent);
		v1 = new RingChart(new Geometry(315, 55, 100, 50), screen);
		graph.addCell(v1, parent);
		v1 = new TrendChart(new Geometry(420, 55, 100, 50), screen);
		graph.addCell(v1, parent);

		v1 = new LedButton(new Geometry(0, 110, 100, 50), screen);
		graph.addCell(v1, parent);
		v1 = new ScreenButton(new Geometry(105, 110, 100, 50), screen);
		graph.addCell(v1, parent);
		v1 = new MultiButton(new Geometry(210, 110, 100, 50), screen);
		graph.addCell(v1, parent);
		v1 = new ASCIIDisplayer(new Geometry(315, 110, 100, 50), screen);
		graph.addCell(v1, parent);
		v1 = new FunctionButton(new Geometry(420, 110, 100, 50), screen);
		graph.addCell(v1, parent);

		v1 = new MultiFuncButton(new Geometry(0, 165, 100, 50), screen);
		graph.addCell(v1, parent);
		v1 = new WordButton(new Geometry(105, 165, 100, 50), screen);
		graph.addCell(v1, parent);
		v1 = new MoveTrack(new Geometry(210, 165, 100, 50), screen);
		graph.addCell(v1, parent);
		v1 = new LineScale(new Geometry(315, 165, 100, 50), screen);
		graph.addCell(v1, parent);
		v1 = new Roller(new Geometry(420, 165, 100, 50), screen);
		graph.addCell(v1, parent);

		v1 = new OptionList(new Geometry(0, 220, 100, 50), screen);
		graph.addCell(v1, parent);
		v1 = new Gauge(new Geometry(105, 220, 100, 50), screen);
		graph.addCell(v1, parent);
		v1 = new ImageMonitor(new Geometry(210, 220, 100, 50), screen);
		graph.addCell(v1, parent);
		v1 = new GIFMonitor(new Geometry(315, 220, 100, 50), screen);
		graph.addCell(v1, parent);
		v1 = new GIFMonitor(new Geometry(420, 220, 100, 50), screen);
		graph.addCell(v1, parent);

		v1 = new CustomBar(new Geometry(0, 275, 100, 50), screen);
		graph.addCell(v1, parent);
		v1 = new SlideSwitch(new Geometry(105, 275, 100, 50), screen);
		graph.addCell(v1, parent);
		v1 = new MoveTrack(new Geometry(210, 275, 100, 50), screen);
		graph.addCell(v1, parent);
		v1 = new LineScale(new Geometry(315, 275, 100, 50), screen);
		graph.addCell(v1, parent);
		v1 = new Roller(new Geometry(420, 275, 100, 50), screen);
		graph.addCell(v1, parent);
	});





}
