import type { EmscriptenModule } from "../../../type.js"


export interface LvglEventModule extends EmscriptenModule {
	lv_obj_add_event_cb(obj: LvObjT, cb: LvFunT, eventCode: number, userData: number | string | boolean): void
	lv_obj_remove_event_cb(obj: LvObjT, cb: LvFunT): void;
	lv_event_get_target(event: LvEventT): LvObjT
	lv_event_get_current_target(event: LvEventT): LvObjT
	lv_event_get_param(e: LvEventT): VoidT;
	lv_event_get_user_data(e: LvEventT): VoidT;
	lv_event_stop_bubbling(e: LvEventT): void;
	lv_event_stop_processing(e: LvEventT): void;
	lv_event_register_id(): number;

	addFunction: (fun: Function, id: string) => LvFunT
}
