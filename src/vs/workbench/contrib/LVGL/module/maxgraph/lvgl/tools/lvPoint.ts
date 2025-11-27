import { Module } from "../package/LvglModule.js";


export function makeLvPointT(x: number, y: number, fn?: (p: LvPointT) => void): LvPointT {
	const p = new Module.lv_point_t();
	p.x = x;
	p.y = y;
	if (fn) {
		fn(p);
		p.delete();
	}
	return p;
}
