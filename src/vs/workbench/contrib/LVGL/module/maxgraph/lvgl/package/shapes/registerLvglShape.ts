import { CellRenderer } from "../../../packages/core/src/index.js";
import { LvglBase } from './lvglBase.js'
import { LVGL_ShapeArc } from './shapeWidgets/Arc.js'
import { LVGL_ShapeButton } from "./shapeWidgets/Button.js"
import { LVGL_ShapePanel } from "./shapeWidgets/Panel.js"
import { LVGL_ShapeImage } from "./shapeWidgets/Image.js"
import { LVGL_ShapeLabel } from "./shapeWidgets/Label.js"
import { LVGL_ShapeContainer } from "./shapeWidgets/container.js"
import { LVGL_ShapeTabView } from "./shapeWidgets/TabView.js"
import { LVGL_ShapeTextArea } from "./shapeWidgets/TextArea.js"
import { LVGL_ShapeCalendar } from "./shapeWidgets/Calendar.js";
import { LVGL_ShapeCheckBox } from "./shapeWidgets/CheckBox.js";
import { LVGL_ShapeColorWheel } from "./shapeWidgets/ColorWheel.js";
import { LVGL_ShapeDropDown } from "./shapeWidgets/DropDown.js";
import { LVGL_ShapeImgButton } from "./shapeWidgets/ImgButton.js";
import { LVGL_ShapeKeyBoard } from "./shapeWidgets/KeyBoard.js";
import { LVGL_ShapeRoller } from "./shapeWidgets/Roller.js";
import { LVGL_ShapeSlider } from "./shapeWidgets/Slider.js";
import { LVGL_ShapeSpinBox } from "./shapeWidgets/SpinBox.js";
import { LVGL_ShapeSwitch } from "./shapeWidgets/Switch.js";
import { LVGL_ShapeBar } from "./shapeWidgets/Bar.js";
import { LVGL_ShapeChart } from "./shapeWidgets/Chart.js";
import { LvGL_LedShape } from "./shapeWidgets/Led.js";
import { LVGL_ShapeScale } from "./shapeWidgets/scale.js";
import { LVGL_ShapeList } from "./shapeWidgets/List.js";
import { LVGL_ShapeSpan } from "./shapeWidgets/Span.js";
import { LVGL_ShapeWin } from "./shapeWidgets/Win.js";
import { LVGL_ShapeTable } from "./shapeWidgets/Table.js";
import { LVGL_ShapeSpinner } from "./shapeWidgets/Spinner.js";
import { LVGL_ShapeMsgBox } from "./shapeWidgets/MessageBox.js";
import { LVGL_ShapeLine } from "./shapeWidgets/Line.js";
import { LVGL_ShapeMenu } from "./shapeWidgets/Menu.js";
import { LVGL_ShapeMultiStateNum } from "./shapeWidgets/MultiStateNum.js";
import { LVGL_ShapeMultiStateImage } from "./shapeWidgets/MultiStateImage.js";
import { LVGL_ShapeMultiStateText } from "./shapeWidgets/MultiStateText.js";
import { LVGL_ShapePlayer } from "./shapeWidgets/Player.js";
import PolygonShape from "./shapeWidgets/graphics/Polygon.js";
import { LVGL_ShapeCircle } from "./shapeWidgets/graphics/Circle.js";
import { LVGL_ShapeEllipse } from "./shapeWidgets/graphics/Ellipse.js";
import { LVGL_ShapePartCircle } from "./shapeWidgets/graphics/PartCircle.js";
import { LVGL_PartEllipse } from "./shapeWidgets/graphics/PartEllipse.js";
import { LVGL_Pipe } from "./shapeWidgets/graphics/Pipe.js";
import HMiShape from "../../../hmi/shapes/HMiShape.js";
function registerLvglShape() {
	//@ts-ignore
	CellRenderer.registerShape('lvgl_obj', LvglBase);
	//@ts-ignore
	CellRenderer.registerShape('lvgl_tabitem', LvglBase);
	//@ts-ignore
	CellRenderer.registerShape('lvgl_screen', LvglBase);
	//@ts-ignore
	CellRenderer.registerShape('lvgl_arc', LVGL_ShapeArc);
	//@ts-ignore
	CellRenderer.registerShape('lvgl_button', LVGL_ShapeButton);
	//@ts-ignore
	CellRenderer.registerShape('lvgl_panel', LVGL_ShapePanel);
	//@ts-ignore
	CellRenderer.registerShape('lvgl_image', LVGL_ShapeImage);
	//@ts-ignore
	CellRenderer.registerShape('lvgl_label', LVGL_ShapeLabel);
	//@ts-ignore
	CellRenderer.registerShape('lvgl_container', LVGL_ShapeContainer);
	//@ts-ignore
	CellRenderer.registerShape('lvgl_tabview', LVGL_ShapeTabView);
	//@ts-ignore
	CellRenderer.registerShape('lvgl_textarea', LVGL_ShapeTextArea);

	//@ts-ignore
	CellRenderer.registerShape('lvgl_calendar', LVGL_ShapeCalendar);
	//@ts-ignore
	CellRenderer.registerShape('lvgl_checkbox', LVGL_ShapeCheckBox);
	//@ts-ignore
	CellRenderer.registerShape('lvgl_colorwheel', LVGL_ShapeColorWheel);
	//@ts-ignore
	CellRenderer.registerShape('lvgl_dropdown', LVGL_ShapeDropDown);
	//@ts-ignore
	CellRenderer.registerShape('lvgl_imgbutton', LVGL_ShapeImgButton);
	//@ts-ignore
	CellRenderer.registerShape('lvgl_keyboard', LVGL_ShapeKeyBoard);
	//@ts-ignore
	CellRenderer.registerShape('lvgl_roller', LVGL_ShapeRoller);
	//@ts-ignore
	CellRenderer.registerShape('lvgl_slider', LVGL_ShapeSlider);
	//@ts-ignore
	CellRenderer.registerShape('lvgl_spinbox', LVGL_ShapeSpinBox);
	//@ts-ignore
	CellRenderer.registerShape('lvgl_switch', LVGL_ShapeSwitch);
	//@ts-ignore
	CellRenderer.registerShape('lvgl_bar', LVGL_ShapeBar);
	//@ts-ignore
	CellRenderer.registerShape('lvgl_chart', LVGL_ShapeChart);
	//@ts-ignore
	CellRenderer.registerShape("lvgl_led", LvGL_LedShape);
	// @ts-ignore
	CellRenderer.registerShape('lvgl_scale', LVGL_ShapeScale); // Scale
	// @ts-ignore
	CellRenderer.registerShape('lvgl_list', LVGL_ShapeList); // List
	// @ts-ignore
	CellRenderer.registerShape('lvgl_span', LVGL_ShapeSpan); // Span
	// @ts-ignore
	CellRenderer.registerShape('lvgl_table', LVGL_ShapeTable); // Table
	// @ts-ignore
	CellRenderer.registerShape('lvgl_win', LVGL_ShapeWin); // Win
	// @ts-ignore
	CellRenderer.registerShape('lvgl_spinner', LVGL_ShapeSpinner); // Span
	// @ts-ignore
	CellRenderer.registerShape('lvgl_msgbox', LVGL_ShapeMsgBox); // Msgbox
	// @ts-ignore
	CellRenderer.registerShape('lvgl_line', LVGL_ShapeLine); // Line
	// @ts-ignore
	CellRenderer.registerShape('lvgl_menu', LVGL_ShapeMenu); // Menu
	// @ts-ignore
	CellRenderer.registerShape('lvgl_multistatenum', LVGL_ShapeMultiStateNum); // MultiStateNum
	// @ts-ignore
	CellRenderer.registerShape('lvgl_multistateimage', LVGL_ShapeMultiStateImage); // MultiStateImage
	// @ts-ignore
	CellRenderer.registerShape('lvgl_multistatetext', LVGL_ShapeMultiStateText); // MultiStateText
	// @ts-ignore
	CellRenderer.registerShape('lvgl_player', LVGL_ShapePlayer); // Player
	// @ts-ignore
	CellRenderer.registerShape('lvgl_polygon', PolygonShape); // Polygon
	// @ts-ignore
	CellRenderer.registerShape('lvgl_triangle', PolygonShape); // Triangle
	// @ts-ignore
	CellRenderer.registerShape('lvgl_diamond', PolygonShape); // Diamond
	// @ts-ignore
	CellRenderer.registerShape('lvgl_parallelogram', PolygonShape); // Parallelogram
	// @ts-ignore
	CellRenderer.registerShape('lvgl_circle', LVGL_ShapeCircle); // Circle
	// @ts-ignore
	CellRenderer.registerShape('lvgl_ellipse', LVGL_ShapeEllipse); // Ellipse
	// @ts-ignore
	CellRenderer.registerShape('lvgl_partcircle', LVGL_ShapePartCircle); // PartCircle
	// @ts-ignore
	CellRenderer.registerShape('lvgl_partellipse', LVGL_PartEllipse); // PartEllipse
	// @ts-ignore
	CellRenderer.registerShape('lvgl_pipe', LVGL_Pipe); // Pipe

	CellRenderer.registerShape("hmi", HMiShape)

};

export { LvglBase as LvglShape, registerLvglShape }
