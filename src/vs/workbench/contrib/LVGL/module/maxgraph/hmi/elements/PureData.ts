import deepDiff from "../util/deepDiff.js";
import { addr_type_t } from "../static/enums.js";
import { arrToStr, toXML as objToXml } from "../util/xml.js";



export abstract class PureData {
	lvObj: LvObjT;
	constructor(lvObj: LvObjT) {
		this.lvObj = lvObj;
	}

	isArrayKeys(): string[] {
		return [];
	}

	changeIdx(idx: number) {

	}

	pickAttributes(): {
		[key: string]: any;
	} {
		const res: any = {};
		for (const _key in this) {
			if (!_key.startsWith("_")) {
				continue;
			}
			const couldChangeKey = _key.substring(1);
			res[couldChangeKey] = (this as any)[couldChangeKey];
		}
		return res;
	};

	toXML(doc: Document, name: string, defaultObj: PureData): Element | null {
		const ele = doc.createElement(name);
		const res = deepDiff(defaultObj.pickAttributes(), this.pickAttributes());
		if (Object.keys(res).length === 0 && this.isArrayKeys().length === 0) {
			return null;
		}
		const arrKeys = this.isArrayKeys();
		arrKeys.forEach(_key => {
			const arr1 = (this as any)[_key] as any[];
			const arr2 = (defaultObj as any)[_key] as any[];
			// arr1 和 arr2 长度很可能不一样，arr2是默认值，可能更短
			const valueStr = arrToStr(arr1, arr2, arr1.length);
			if (valueStr) {
				res[_key.substring(1)] = valueStr;
			}
		});
		objToXml(doc, ele, res);
		return ele;
	}

	fromXML(node: Element) {
		const attrs = node.attributes;
		let isAllInthis = true;
		for (let i = 0; i < attrs.length; i++) {
			const attr = attrs.item(i);
			if (!attr || !(attr.name in this)) {
				isAllInthis = false;
			}
		}
		if (isAllInthis === false) {
			console.warn(`PureData.fromXML: 有属性不在当前对象中，元素名=${node.nodeName}`);
			return;
		}
		const isHasArray = this.isArrayKeys().length > 0;
		// 先设置非数组的属性，确定数组长度
		for (let i = 0; i < attrs.length; i++) {
			const attr = attrs[i];
			const key = attr.name;
			const _key = "_" + key;
			if (isHasArray && this.isArrayKeys().includes(_key)) {
				continue;
			}
			const vType = typeof (this as any)[key];
			const value = attr.value;
			if (vType === "number") {
				(this as any)[key] = Number(value);
			} else if (vType !== "object") {
				(this as any)[key] = value;
			}
		}
		if (!isHasArray) {
			return;
		}
		for (let i = 0; i < attrs.length; i++) {
			const attr = attrs[i];
			const key = attr.name;
			const _key = "_" + key;
			const arrKeys = this.isArrayKeys();

			if (arrKeys.includes(_key)) {
				const arr = attr.value.split(",");
				const len = arr.length;
				for (let j = 0; j < len; j++) {
					// 不需要再取索引，没有下划线的key返回的是当前索引值下的单值
					const that = this as any;
					if (!arr[j]) continue;
					const vType = typeof that[key];
					that[_key][j] = vType === "number" ? Number(arr[j]) : arr[j];
					// 使属性生效
					this.changeIdx(j);
					that[key] = that[_key][j];
				}
				// 复原索引
				this.changeIdx(0);
			}
		}
	} // fromXML
}

export type HasAddrData = {
	addrValid: boolean;
	addr: number;
	addrType: addr_type_t;
} & Object;
export abstract class BaseProperty extends PureData {
	addrValid = true; // 给ui用的属性
	_addr = 0;
	_addrType: addr_type_t = 0;
	_dataType?: number;
	abstract get addr(): number;
	abstract set addr(value: number);
	abstract get addrType(): addr_type_t;
	abstract set addrType(value: addr_type_t);
	// abstract pickAttributes<AddrValid extends boolean = true, R = (AddrValid extends true ? HasAddrData : any)>(): R;
	// abstract pickAttributes(): HasAddrData;
	override pickAttributes() {
		const res = super.pickAttributes();
		res.addrValid = this.addrValid;
		return res;
	}
}

export abstract class BaseDisplay extends PureData {

}
