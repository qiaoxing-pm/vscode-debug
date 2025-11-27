import { Module } from "../../lvgl/package/LvglModule.js";
import { addr_type_t, compare_type_t, data_type_t } from "../static/enums.js";
import { fromXML } from "../util/xml.js";

abstract class Controller {
	_valid = false;
	permissionT: PermissionT;
	isShow: boolean;
	constructor(permissionT: PermissionT, isShow: boolean) {
		this.permissionT = permissionT;
		this.isShow = isShow;
	}
	abstract pickAttributes(): Object;
	abstract toXML(doc: XMLDocument): Element | null;
	fromXML(xml: Element) {
		fromXML(xml, this);
	};
}
class BitController extends Controller {
	_address = 0;
	_addressType: addr_type_t = 0;
	_status: 0 | 1 = 1;
	get valid() {
		return this._valid;
	}
	set valid(value: boolean) {
		Module.permission_set_bit(this.permissionT, value, this.isShow)
		this._valid = value;
	}
	get address() {
		return this._address;
	}
	set address(value: number) {
		this._address = value;
		Module.permission_set_bit_control_addr(this.permissionT, value, this._addressType, this.isShow);
	}

	get addressType() {
		return this._addressType;
	}
	set addressType(value: addr_type_t) {
		this._addressType = value;
		Module.permission_set_bit_control_addr(this.permissionT, this._address, value, this.isShow);
	}

	get status() {
		return this._status;
	}
	set status(value: 0 | 1) {
		this._status = value;
		Module.permission_set_bit_control_status(this.permissionT, value, this.isShow);
	}
	pickAttributes(): Object {
		return {
			valid: this.valid,
			address: this.address,
			addressType: this.addressType,
			showStatus: this.status,
		};
	}
	toXML(doc: XMLDocument): Element | null {
		const element = doc.createElement("BitController");
		let hasAttr = false;
		if (this.valid) {
			element.setAttribute("valid", String(this.valid));
			hasAttr = true;
		}
		if (this.address !== 0) {
			element.setAttribute("address", String(this.address));
			hasAttr = true;
		}
		if (this.addressType) {
			element.setAttribute("addressType", String(this.addressType));
			hasAttr = true;
		}
		if (this.status !== 1) {
			element.setAttribute("status", String(this.status));
			hasAttr = true;
		}
		return hasAttr ? element : null;
	}

}

class UserLevelController extends Controller {
	_level: number = 0;

	get valid() {
		return this._valid;
	}
	set valid(value: boolean) {
		Module.permission_set_user(this.permissionT, value, this.isShow);
		this._valid = value;
	}

	get level() {
		return this._level;
	}
	set level(value: number) {
		this._level = value;
		Module.permission_set_user_level(this.permissionT, value, this.isShow);
	}

	pickAttributes(): Object {
		return {
			valid: this.valid,
			level: this.level,
		};
	}
	toXML(doc: XMLDocument): Element | null {
		const element = doc.createElement("UserLevelController");
		let hasAttr = false;
		if (this.valid) {
			element.setAttribute("valid", String(this.valid));
			hasAttr = true;
		}
		if (this.level !== 0) {
			element.setAttribute("level", String(this.level));
			hasAttr = true;
		}
		return hasAttr ? element : null;
	}

}

class WordController extends Controller {
	_dataType: data_type_t = data_type_t.DATA_TYPE_INT16;
	_address = 0;
	_addressType: addr_type_t = addr_type_t.ADDR_TYPE_LOCAL_WORD;
	_compareType: compare_type_t = compare_type_t.COMPARE_TYPE_EQUAL;
	_value = 0;
	_eps = 0;
	get valid() {
		return this._valid;
	}
	set valid(value: boolean) {
		Module.permission_set_word(this.permissionT, value, this.isShow);
		this._valid = value;
	}
	get dataType() {
		return this._dataType;
	}
	set dataType(value: data_type_t) {
		this._dataType = value;
		Module.permission_set_word_control_data_type(this.permissionT, value, this.isShow);
	}
	get address() {
		return this._address;
	}
	set address(value: number) {
		this._address = value;
		Module.permission_set_word_control_addr(this.permissionT, value, this._addressType, this.isShow);
	}

	get addressType() {
		return this._addressType;
	}
	set addressType(value: addr_type_t) {
		this._addressType = value;
		Module.permission_set_word_control_addr(this.permissionT, this._address, value, this.isShow);
	}

	get value() {
		return this._value;
	}
	set value(value: number) {
		this._value = value;
		Module.permission_set_word_control_value(this.permissionT, value, this.isShow);
	}
	get compareType() {
		return this._compareType;
	}
	set compareType(value: compare_type_t) {
		this._compareType = value;
		Module.permission_set_word_control_compare_type(this.permissionT, value, this.isShow);
	}

	get eps() {
		return this._eps;
	}
	set eps(value: number) {
		this._eps = value;
		Module.permission_set_word_control_eps(this.permissionT, value, this.isShow);
	}

	pickAttributes(): Object {
		return {
			valid: this.valid,
			dataType: this.dataType,
			address: this.address,
			addressType: this.addressType,
			compareType: this.compareType,
			value: this.value,
			eps: this.eps,
		};
	}

	toXML(doc: XMLDocument): Element | null {
		const element = doc.createElement("WordController");
		let hasAttr = false;
		if (this.valid) {
			element.setAttribute("valid", String(this.valid));
			hasAttr = true;
		}
		if (this.dataType !== data_type_t.DATA_TYPE_INT16) {
			element.setAttribute("dataType", String(this.dataType));
			hasAttr = true;
		}
		if (this.address !== 0) {
			element.setAttribute("address", String(this.address));
			hasAttr = true;
		}
		if (this.addressType !== addr_type_t.ADDR_TYPE_LOCAL_WORD) {
			element.setAttribute("addressType", String(this.addressType));
			hasAttr = true;
		}
		if (this.compareType !== compare_type_t.COMPARE_TYPE_EQUAL) {
			element.setAttribute("compareType", String(this.compareType));
			hasAttr = true;
		}
		if (this.value !== 0) {
			element.setAttribute("value", String(this.value));
			hasAttr = true;
		}
		if (this.eps !== 0) {
			element.setAttribute("eps", String(this.eps));
			hasAttr = true;
		}
		return hasAttr ? element : null;
	}
}
export default class Authority {
	// type: AuthorityType;
	_valid = false;

	controllers: [BitController, UserLevelController, WordController];
	lvObj: LvObjT;
	isShow: boolean;
	permissionT: PermissionT;
	constructor(lvObj: LvObjT, permissionT: PermissionT, isShow: boolean) {
		this.controllers = [
			new BitController(permissionT, isShow),
			new UserLevelController(permissionT, isShow),
			new WordController(permissionT, isShow),
		];
		this.lvObj = lvObj;
		this.permissionT = permissionT;
		this.isShow = isShow;
	}

	get valid() {
		return this._valid;
	}
	set valid(value: boolean) {
		if (this.isShow) {
			Module.permission_set_show(this.permissionT, value);
		} else {
			Module.permission_set_control(this.permissionT, value);
		}
		this._valid = value;
	}

	pickAttributes(): Object {
		return {
			valid: this.valid,
			controllers: this.controllers.map((controller) => controller.pickAttributes()),
		};
	}

	toXML(doc: XMLDocument): Element | null {
		const element = doc.createElement(this.isShow ? "Show" : "Control");
		let hasAttr = false;
		// if (this.isShow) {
		//   element.setAttribute("isShow", String(this.isShow));
		//   hasAttr = true;
		// }
		if (this._valid) {
			element.setAttribute("valid", String(this.valid));
			hasAttr = true;
		}
		this.controllers.forEach((controller) => {
			const controllerElement = controller.toXML(doc);
			if (controllerElement) {
				element.appendChild(controllerElement);
				hasAttr = true;
			}
		});
		return hasAttr ? element : null;
	}

	fromXML(xml: Element) {
		fromXML(xml, this);
		const children = xml.children;
		for (const child of children) {
			const name = child.nodeName;
			if (name === "ByteController") {
				this.controllers[0].fromXML(child);
			} else if (name === "UserLevelController") {
				this.controllers[1].fromXML(child);
			} else if (name === "WordController") {
				this.controllers[2].fromXML(child);
			}
		}
	}
}

export class Notify {
	_valid = false;
	_isBit = false;
	_isWord = false;

	_bitAddress = 0;
	_bitAddressType: addr_type_t = addr_type_t.ADDR_TYPE_LOCAL_BIT;
	_bitStatus: 0 | 1 = 1;

	_wordAddress = 0;
	_wordAddressType: addr_type_t = addr_type_t.ADDR_TYPE_LOCAL_WORD;
	_wordDataType: data_type_t = data_type_t.DATA_TYPE_INT16;
	_wordValue = 0;
	permissionT: PermissionT;
	constructor(permissionT: PermissionT) {
		this.permissionT = permissionT;
	}
	get valid() {
		return this._valid;
	}
	set valid(value: boolean) {
		Module.permission_set_notify(this.permissionT, value);
		this._valid = value;
	}
	get isBit() {
		return this._isBit;
	}
	set isBit(value: boolean) {
		this._isBit = value;
		Module.permission_set_notify_bit(this.permissionT, value);
	}

	get isWord() {
		return this._isWord;
	}
	set isWord(value: boolean) {
		this._isWord = value;
		Module.permission_set_notify_word(this.permissionT, value);
	}

	get bitAddress() {
		return this._bitAddress;
	}
	set bitAddress(value: number) {
		this._bitAddress = value;
		Module.permission_set_notify_bit_control_addr(this.permissionT, value, this._bitAddressType);
	}
	get bitAddressType() {
		return this._bitAddressType;
	}
	set bitAddressType(value: addr_type_t) {
		this._bitAddressType = value;
		Module.permission_set_notify_bit_control_addr(this.permissionT, this._bitAddress, value);
	}
	get bitStatus() {
		return this._bitStatus;
	}
	set bitStatus(value: 0 | 1) {
		this._bitStatus = value;
		Module.permission_set_notify_bit_control_status(this.permissionT, value);
	}

	get wordAddress() {
		return this._wordAddress;
	}
	set wordAddress(value: number) {
		this._wordAddress = value;
		Module.permission_set_notify_word_control_addr(this.permissionT, value, this._wordAddressType);
	}
	get wordAddressType() {
		return this._wordAddressType;
	}
	set wordAddressType(value: addr_type_t) {
		this._wordAddressType = value;
		Module.permission_set_notify_word_control_addr(this.permissionT, this._wordAddress, value);
	}
	get wordDataType() {
		return this._wordDataType;
	}
	set wordDataType(value: data_type_t) {
		this._wordDataType = value;
		Module.permission_set_notify_word_control_data_type(this.permissionT, value);
	}
	get wordValue() {
		return this._wordValue;
	}
	set wordValue(value: number) {
		this._wordValue = value;
		Module.permission_set_notify_word_control_value(this.permissionT, value);
	}


	pickAttributes(): Object {
		return {
			valid: this.valid,
			isBit: this.isBit,
			isWord: this.isWord,
			bitAddress: this.bitAddress,
			bitAddressType: this.bitAddressType,
			bitStatus: this.bitStatus,
			wordAddress: this.wordAddress,
			wordAddressType: this.wordAddressType,
			wordDataType: this.wordDataType,
			wordValue: this.wordValue,
		};
	}

	toXML(doc: XMLDocument): Element | null {
		const element = doc.createElement("Notify");
		let hasAttr = false;
		if (this.valid) {
			element.setAttribute("valid", String(this.valid));
			hasAttr = true;
		}
		if (this.isBit) {
			element.setAttribute("isBit", String(this.isBit));
			hasAttr = true;
		}
		if (this.isWord) {
			element.setAttribute("isWord", String(this.isWord));
			hasAttr = true;
		}
		if (this.bitAddress !== 0) {
			element.setAttribute("bitAddress", String(this.bitAddress));
			hasAttr = true;
		}
		if (this.bitAddressType) {
			element.setAttribute("bitAddressType", String(this.bitAddressType));
			hasAttr = true;
		}
		if (this.bitStatus !== 1) {
			element.setAttribute("bitStatus", String(this.bitStatus));
			hasAttr = true;
		}
		if (this.wordAddress !== 0) {
			element.setAttribute("wordAddress", String(this.wordAddress));
			hasAttr = true;
		}
		if (this.wordAddressType) {
			element.setAttribute("wordAddressType", String(this.wordAddressType));
			hasAttr = true;
		}
		if (this.wordDataType) {
			element.setAttribute("wordDataType", String(this.wordDataType));
			hasAttr = true;
		}
		if (this.wordValue) {
			element.setAttribute("wordValue", String(this.wordValue));
			hasAttr = true;
		}
		return hasAttr ? element : null;
	}

	fromXML(xml: Element) {
		fromXML(xml, this);
	}
}

export class Presstime {
	_valid = false;
	_pressTime = 0;
	permissionT: PermissionT;

	constructor(permissionT: PermissionT) {
		this.permissionT = permissionT;
	}
	get valid() {
		return this._valid;
	}
	set valid(value: boolean) {
		Module.permission_set_press(this.permissionT, value);
		this._valid = value;
	}
	get pressTime() {
		return this._pressTime;
	}
	set pressTime(value: number) {
		this._pressTime = value;
		Module.permission_set_press_time(this.permissionT, value);
	}

	pickAttributes(): Object {
		return {
			valid: this.valid,
			pressTime: this.pressTime,
		};
	}

	toXML(doc: XMLDocument): Element | null {
		const element = doc.createElement("Presstime");
		let hasAttr = false;
		if (this.valid) {
			element.setAttribute("valid", String(this.valid));
			hasAttr = true;
		}
		if (this.pressTime !== 0) {
			element.setAttribute("pressTime", String(this.pressTime));
			hasAttr = true;
		}
		return hasAttr ? element : null;
	}

	fromXML(xml: Element) {
		fromXML(xml, this);
	}
}
