import { type ApiInterface, type ApiModuleImpl } from "../index.js";
// import { type optionType } from "./type";
import { type optionType } from "../../type/type.js";
import { editableTypeOption } from "./static/editabelState.js";
import { optionLength } from "./static/optionLength.js";
import { structAndvarRelationIntegrateConstant } from "./static/StructAndVarRelationIntegrateConstant.js";
import constant from "../ConstantModule/ConstantModule.js";
class OptionModule implements ApiModuleImpl {

	private api: ApiInterface | null = null;
	private optionsMap = new Map<string, Array<optionType>>();
	private optionsMapSource = new Map<string, Array<optionType>>();


	constructor() {
		this.optionsMap.set(constant.optionModulePublicOptions.EDITABLE_TYPE_OPTION, editableTypeOption);
		this.optionsMapSource.set(constant.optionModulePublicOptions.EDITABLE_TYPE_OPTION, editableTypeOption)
		this.optionsMap.set(constant.optionModulePublicOptions.OPTION_LENGTH, optionLength)
		this.optionsMapSource.set(constant.optionModulePublicOptions.OPTION_LENGTH, optionLength)
		this.optionsMap.set(constant.optionModulePublicOptions.STRUCT_AND_VAR_RELATION_INTEGRATE, structAndvarRelationIntegrateConstant);
		this.optionsMapSource.set(constant.optionModulePublicOptions.STRUCT_AND_VAR_RELATION_INTEGRATE, structAndvarRelationIntegrateConstant);
	}

	init(apiInstance: ApiInterface) {
		this.api = apiInstance;

	}


	setOptionsMap(key: string, options: Array<optionType>, updateSource?: boolean) {
		// 第一次创建或者强制更新原始数据
		if (!this.optionsMapSource.get(key) || updateSource) {
			this.optionsMapSource.set(key, options)
		}
		this.optionsMap.set(key, options)
	}

	getOptions(key: string) {
		return this.optionsMap.get(key)
	}

	getOptionsSource(key: string): Array<optionType> {
		return this.optionsMapSource.get(key)!
	}
}

export default new OptionModule();


