import { Module } from "../../LvglModule.js";
import { LvglBase, LV_Obj } from "../lvglBase.js"
import { CreateBaseStyle } from "../lvglStyle.js";
import { lv_part_t } from "../../lvglEnums.js";

export class LV_Table extends LV_Obj {
	_rowCount: number = 0;
	_columnCount: number = 0;
	_columnWidth: number = 0;
	get rowCount() {
		return this._rowCount;
	}
	set rowCount(value: number) {
		this._rowCount = value;
		Module.lv_table_set_row_count(this.lvObj, value);
	}
	get columnCount() {
		return this._columnCount;
	}
	set columnCount(value: number) {
		this._columnCount = value;
		Module.lv_table_set_column_count(this.lvObj, value);
	}
	get columnWidth() {
		return this._columnWidth;
	}
	set columnWidth(value: number) {
		this._columnWidth = value;
		Module.lv_table_set_column_width(this.lvObj, 0, value);
	}

	constructor(name: string, lvObj: LvObjT) {
		super(name, lvObj);
		this.columnWidth = 100
		const table = this.lvObj;
		Module.lv_table_set_cell_value(table, 0, 0, "Name");
		Module.lv_table_set_cell_value(table, 1, 0, "Apple");
		Module.lv_table_set_cell_value(table, 2, 0, "Banana");
		Module.lv_table_set_cell_value(table, 3, 0, "Lemon");
		Module.lv_table_set_cell_value(table, 4, 0, "Grape");
		Module.lv_table_set_cell_value(table, 5, 0, "Melon");
		Module.lv_table_set_cell_value(table, 6, 0, "Peach");
		Module.lv_table_set_cell_value(table, 7, 0, "Nuts");

		Module.lv_table_set_cell_value(table, 0, 1, "Price");
		Module.lv_table_set_cell_value(table, 1, 1, "$7");
		Module.lv_table_set_cell_value(table, 2, 1, "$4");
		Module.lv_table_set_cell_value(table, 3, 1, "$6");
		Module.lv_table_set_cell_value(table, 4, 1, "$2");
		Module.lv_table_set_cell_value(table, 5, 1, "$5");
		Module.lv_table_set_cell_value(table, 6, 1, "$1");
		Module.lv_table_set_cell_value(table, 7, 1, "$9");
	}

	setCellValue(row: number, column: number, value: string) {
		Module.lv_table_set_cell_value(this.lvObj, row, column, value);
	}

}

export class LVGL_ShapeTable extends LvglBase {
	static id = 1
	constructor(type: string, id: number) {
		if (id != null) {
			LVGL_ShapeTable.id = id
		}
		else {
			id = LVGL_ShapeTable.id + 1
		}
		super("Table", id.toString());
	}

	override lvglCreate(parent: LvObjT): void {
		this._lvglObj = Module.lv_table_create(parent);
		this._widget = new LV_Table("Table", this._lvglObj);
	}
	override createStyle(stateCount: number) {
		const itemsStyle = CreateBaseStyle.createStyles(lv_part_t.LV_PART_ITEMS, stateCount, this.lvglObj, this.State!);
		this._styles.push(["ITEMS", itemsStyle]);
	}
}
