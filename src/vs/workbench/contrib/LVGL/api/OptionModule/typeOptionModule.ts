
// import type { TypeOption, ContainerType, ContainerTypeOption, MapKeyType } from "../type";
import type { TypeOption, ContainerType, ContainerTypeOption, PrimitiveType } from "../../type/type.js"
import { type ApiInterface } from "../index.js";
// 基础类型选项列表
const typeOptionsData: TypeOption[] = [
	{
		label: "String",
		key: 'string',
		value: 'string',
		color: "#1aff00ff",
		varType: 'Single'
	},
	{
		label: 'Integer',
		key: 'int',
		value: 'int',
		color: '#8ef6f6',
		varType: 'Single'
	},
	{
		label: 'Double',
		key: 'double',
		value: 'double',
		color: '#8b42d8',
		varType: 'Single'
	},
	{
		label: 'Boolean',
		key: 'bool',
		value: 'bool',
		color: '#ff00a2ff',
		varType: 'Single'
	},
	{
		label: 'Character',
		key: 'char',
		value: 'char',
		color: '#ff0000',
		varType: 'Single'
	},
	{
		label: 'Short Integer',
		key: 'short',
		value: 'short',
		color: '#8b42d8',
		varType: 'Single'
	},

	{
		label: 'Long Long',
		key: 'long long',
		value: 'long long',
		color: '#90ff95',
		varType: 'Single'
	},
	{
		label: 'Float',
		key: 'float',
		value: 'float',
		color: '#42d849',
		varType: 'Single'
	},

	{
		label: 'Unsigned Character',
		key: 'unsigned char',
		value: 'unsigned char',
		color: '#592bfb',
		varType: 'Single'
	},
	{
		label: 'Unsigned Short',
		key: 'unsigned short',
		value: 'unsigned short',
		color: '#cda5f1',
		varType: 'Single'
	},
	{
		label: 'Unsigned Int',
		key: 'unsigned int',
		value: 'unsigned int',
		color: '#f1cda5',
		varType: 'Single'
	},
	{
		label: 'Unsigned Long Long',
		key: 'unsigned long long',
		value: 'unsigned long long',
		color: '#f1a5cd',
		varType: 'Single'
	},
	{
		label: 'Long Double',
		key: 'long double',
		value: 'long double',
		color: '#a5f1cd',
		varType: 'Single'
	}
];

// 基础类型字节长度映射表（不包含string）
const typeByteLengths = new Map<string, number>([
	['int', 4],                  // 整数，通常4字节
	['double', 8],               // 双精度浮点数，8字节
	['bool', 1],                 // 布尔值，通常1字节
	['char', 1],                 // 字符，1字节
	['short', 2],                // 短整数，2字节
	['long long', 8],            // 长整数，8字节
	['float', 4],                // 单精度浮点数，4字节
	['unsigned char', 1],        // 无符号字符，1字节
	['unsigned short', 2],       // 无符号短整数，2字节
	['unsigned int', 4],         // 无符号整数，4字节
	['unsigned long long', 8],   // 无符号长整数，8字节
	['long double', 16]          // 长双精度浮点数，通常16字节
]);

const typeOptionsDataMap = new Map<string, TypeOption>(typeOptionsData.map(item => {
	return [item.key, item]
}))

// 容器类型选项列表（单个、数组等）
const containerTypeOptionsData: ContainerTypeOption[] = [
	{
		varType: 'Single',
		value: 'Single',
		label: 'Single' // 单个
	},
	{
		varType: 'Array',
		value: 'Array',
		label: 'Array' // 数组
	},
	{
		varType: 'Set',
		value: 'Set',
		label: 'Set' // 集合
	},
	{
		varType: 'Map',
		value: 'Map',
		label: 'Map' // 映射
	},
];


/**
 * 类型组件管理模块
 *
 * 【注意】本模块为类型组件专用管理模块，设计上不具备拓展性，不建议进行二次开发或功能扩展
 * 如需自定义配置或扩展功能，请使用 publicOptionModule 替代
 *
 * @module OptionModule
 * @version 1.0.0
 * @author 向林浩
 * @since 2025-09-01
 *
 * @description
 * 该模块仅负责基础类型组件的注册、销毁及状态管理，提供最简化的核心功能
 * 内部实现采用固定逻辑，不支持插件化扩展和配置项自定义
 *
 * @warning
 * 1. 请勿修改本模块源代码，可能导致类型系统不稳定
 * 2. 不支持新增扩展方法，所有自定义功能需通过 publicOptionModule 实现
 * 3. 模块接口可能随核心版本变更，升级时需特别注意兼容性
 *
 * @see {@link publicOptionModule} 推荐使用的可扩展替代模块
 */
class OptionModule {


	readonly options = typeOptionsData;
	readonly optionsMap = typeOptionsDataMap;
	readonly containerOptions = containerTypeOptionsData;
	readonly optionTypeByteLengths = typeByteLengths;



	// 存储基础类型选项的映射表（key为类型标识）
	private typeOptionsMap: Map<string, TypeOption>;

	private typeOptions: TypeOption[];

	// 存储容器类型选项的映射表（key为容器类型标识）
	private containerTypeMap: Map<ContainerType, ContainerTypeOption>;

	private containerType: ContainerTypeOption[];

	// API实例（用于后续可能的外部交互）
	private api: ApiInterface | null = null;

	constructor() {
		// 初始化映射表
		this.typeOptionsMap = new Map(
			typeOptionsData.map(item => [item.key, item])
		);

		this.containerTypeMap = new Map(
			containerTypeOptionsData.map(item => [item.varType, item])
		);

		this.typeOptions = typeOptionsData;

		this.containerType = containerTypeOptionsData
	}

	getOptionTypeLengths(type: PrimitiveType) {
		if (type === 'string') {
			return undefined;
		}

		return this.optionTypeByteLengths.get(type);
	}

	getTypeOptions() {
		return this.typeOptions;
	}

	setTypeOptions(newArray: TypeOption[]) {
		this.typeOptions = newArray;
	}


	getContainerType() {
		return this.containerType;
	}

	setContainerType(newContainerType: ContainerTypeOption[]) {
		this.containerType = newContainerType;
	}

	/**
	 * 初始化API实例
	 * @param apiInstance - 外部API实例
	 */
	init(apiInstance: any): void {
		this.api = apiInstance;
	}

	/**
	 * 获取所有基础类型选项的映射表
	 * @returns 基础类型选项映射表
	 */
	getTypeOptionsMap(): Map<string, TypeOption> {
		return this.typeOptionsMap;
	}

	/**
	 * 替换所有基础类型选项
	 * @param newMap - 新的基础类型选项映射表
	 */
	setTypeOptionsMap(newMap: Map<string, TypeOption>): void {
		this.typeOptionsMap = newMap;
	}

	/**
	 * 更新单个基础类型选项
	 * @param key - 选项标识
	 * @param value - 新的选项值
	 */
	updateTypeOption(key: string, value: TypeOption): void {
		this.typeOptionsMap.set(key, value);
	}

	/**
	 * 删除单个基础类型选项
	 * @param key - 要删除的选项标识
	 */
	deleteTypeOption(key: string): void {
		this.typeOptionsMap.delete(key);
	}

	/**
	 * 获取所有容器类型选项的映射表
	 * @returns 容器类型选项映射表
	 */
	getContainerTypeMap(): Map<ContainerType, ContainerTypeOption> {
		return this.containerTypeMap;
	}

	/**
	 * 替换所有容器类型选项
	 * @param newMap - 新的容器类型选项映射表
	 */
	setContainerTypeMap(newMap: Map<ContainerType, ContainerTypeOption>): void {
		this.containerTypeMap = newMap;
	}

	/**
	 * 更新单个容器类型选项
	 * @param key - 容器类型标识
	 * @param value - 新的容器类型选项值
	 */
	updateContainerType(key: ContainerType, value: ContainerTypeOption): void {
		this.containerTypeMap.set(key, value);
	}

	/**
	 * updateByStructure
	 * 根据结构来更新选项
	 */
	updateByStructure() {
		if (!this.api) return;
		const structureData = this.api!.structure.getStructure();
		if (structureData.children) {
			const tempStructureData = structureData.children.map(item => {
				return {
					color: 'white',
					key: item.id,
					label: item.name,
					value: item.id,
					varType: this.containerOptions[0].varType,
				} as TypeOption
			})
			for (const element of tempStructureData) {
				this.updateTypeOption(element.key, element)
			}
			this.setTypeOptions([...this.options, ...tempStructureData])
		}
	}

	findOptionName(key: string) {
		const name = this.optionsMap.get(key);
		if (name) {
			return name.value;
		} else {
			const structureName = this.typeOptionsMap.get(key);
			if (structureName) {
				return structureName.label;
			} else {
				throw new Error("未找到选项的名字")
			}
		}
	}
}

export default new OptionModule();
