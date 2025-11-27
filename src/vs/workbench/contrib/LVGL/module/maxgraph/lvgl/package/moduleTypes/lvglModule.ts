import { type LvglStyleModule } from "./lvglModuleStyle.js";
import { type LvglEventModule } from "./lvglModuleEvent.js";
import { type LvglBaseModule } from "./lvglModuleBase.js";
import { type LvglWidgetsModule } from "./lvglModuleWidgets.js";
import { type LvglAniModule } from "./lvglModuleAni.js";
import type { HMIModule } from "./hmiMoule.js";

export interface LvglEmscriptModule extends LvglBaseModule,
	LvglStyleModule,
	LvglEventModule,
	LvglWidgetsModule,
	HMIModule,
	LvglAniModule {

}
