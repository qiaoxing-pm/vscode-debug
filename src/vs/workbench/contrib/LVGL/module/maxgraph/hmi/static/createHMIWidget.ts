import HMiBase from "../elements/HMiBase.js";
import { Geometry } from "../../packages/core/src/index.js";
import BitButton from "../elements/BitButton.js";
import WordButton from "../elements/WordButton.js";
import MoveTrack from "../elements/MoveTrail.js";
import LineScale from "../elements/LineScale.js";
import QRCode from "../elements/QRCode.js";
import Roller from "../elements/RollerMonitor.js";
import FlowBlock from "../elements/FlowBlock.js";
import XYCurve from "../elements/XYCurve.js";
import DataGroup from "../elements/DataGroup.js";
import Ring from "../elements/RingChart.js";
import SliderSwitch from "../elements/SliderSwitch.js";
import FunctionButton from "../elements/FunctionButton.js";
import MultiFuncButton from "../elements/MultiFuncButton.js";
import TrendChart from "../elements/TrendChart.js";
import OptionList from "../elements/OptionList.js";
import TextMonitor from "../elements/TextMonitor.js";
import TimeMonitor from "../elements/TimeMonitor.js";
import ASCIIMonitor from "../elements/ASCIIMonitor.js";
import NumMonitor from "../elements/NumMonitor.js";
import Gauge from "../elements/Gauge.js";
import ImageMonitor from "../elements/ImageMonitor.js";
import GIFMonitor from "../elements/GIFMonitor.js";
import CustomBar from "../elements/CustomBar.js";
import LedButton from "../elements/LedButton.js";

export default function createHMIWidget(
	name: string,
	x: number,
	y: number,
	w: number,
	h: number,
	screen: LvObjT
): HMiBase | null {
	if (!name) {
		return null;
	}
	const geo = new Geometry(x, y, w, h);
	if (name === "BitButton") {
		return new BitButton(geo, screen);
	}
	if (name === "WordButton") {
		return new WordButton(geo, screen);
	}
	if (name === "MoveTrail" || name === "MoveTrack") {
		return new MoveTrack(geo, screen);
	}
	if (name === "LineScale") {
		return new LineScale(geo, screen);
	}
	if (name === "QRDisplay") {
		return new QRCode(geo, screen);
	}
	if (name === "RollerMonitor") {
		return new Roller(geo, screen);
	}
	if (name === "NumMonitor") {
		return new NumMonitor(geo, screen);
	}
	if (name === "ASCIIMonitor") {
		return new ASCIIMonitor(geo, screen);
	}
	if (name === "FlowBlock") {
		return new FlowBlock(geo, screen);
	}
	if (name === "XYCurve") {
		return new XYCurve(geo, screen);
	}
	if (name === "DataGroup") {
		return new DataGroup(geo, screen);
	}
	if (name === "Ring") {
		return new Ring(geo, screen);
	}
	if (name === "SliderSwitch") {
		return new SliderSwitch(geo, screen);
	}
	if (name === "TimeMonitor") {
		return new TimeMonitor(geo, screen);
	}
	if (name === "FunctionButton") {
		return new FunctionButton(geo, screen);
	}
	if (name === "MultiFuncButton") {
		return new MultiFuncButton(geo, screen);
	}
	if (name === "TrendChart") {
		return new TrendChart(geo, screen);
	}
	switch (name) {
		case "OptionList":
			return new OptionList(geo, screen);
		case "TextMonitor":
			return new TextMonitor(geo, screen);
		case "TimeMonitor":
			return new TimeMonitor(geo, screen);
		case "ASCIIMonitor":
			return new ASCIIMonitor(geo, screen);
		case "NumMonitor":
			return new NumMonitor(geo, screen);
		case "Gauge":
			return new Gauge(geo, screen);
		case "ImageMonitor":
			return new ImageMonitor(geo, screen);
		case "GIFMonitor":
			return new GIFMonitor(geo, screen);
		case "CustomBar":
			return new CustomBar(geo, screen);
		case "MultiButton":
			return new MultiFuncButton(geo, screen);
		case "DataGroup":
			return new DataGroup(geo, screen);
		case "ScreenButton":
			return new FunctionButton(geo, screen);
		case "LedButton":
			return new LedButton(geo, screen);
	}
	return null;
}
