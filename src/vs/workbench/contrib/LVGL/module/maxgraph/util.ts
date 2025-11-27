/**
 * 根据路径字符串修改对象中的深层属性值
 * @param obj 原始对象（可能是数组或对象）
 * @param path 以"."分隔的路径字符串，例如 "a.b.0.c"
 * @param value 要设置的新值
 */
export function setDeepValue(obj: any, path: string, value: any): void {
	if (!obj || typeof obj !== "object") return;
	if (!path) return;

	const keys = path.split(".");

	let current: any = obj;

	for (let i = 0; i < keys.length - 1; i++) {
		const key = keys[i];

		// 判断是数组索引还是对象键
		const isIndex = /^\d+$/.test(key);
		if (isIndex) {
			const index = Number(key);
			if (!Array.isArray(current)) throw new Error(`路径 ${key} 不是数组`);
			if (current[index] === undefined) {
				current[index] = {}; // 自动填充空层
			}
			current = current[index];
		} else {
			if (!(key in current) || typeof current[key] !== "object") {
				current[key] = {}; // 自动填充空层
			}
			current = current[key];
		}
	}

	const lastKey = keys[keys.length - 1];
	const isIndex = /^\d+$/.test(lastKey);

	if (isIndex) {
		const index = Number(lastKey);
		if (!Array.isArray(current)) throw new Error(`路径 ${lastKey} 不是数组`);
		current[index] = value;
	} else {
		current[lastKey] = value;
	}
}









const cached: Set<String> = new Set();
const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
export function genRandomStr(length: number): string {
	const result: string[] = [];
	const max = charset.length;

	for (let i = 0; i < length; i++) {
		result.push(charset[Math.floor(Math.random() * max)]);
	}
	const str = result.join('');
	if (cached.has(str)) {
		return genRandomStr(length);
	} else {
		cached.add(str);
		return str;
	}
}



export function toCamelCase(str: string): string {
	return (
		str
			// 转小写开头，空格 + 字母 => 大写字母
			.replace(/\s+([a-zA-Z])/g, (_, c: string) => c.toUpperCase())
			// 确保第一个字母小写
			.replace(/^\w/, (c) => c.toLowerCase())
	);
}
export function camelToTitleCase(str: string): string {
	return (
		str
			// 在每个大写字母前插入空格
			.replace(/([A-Z])/g, " $1")
			// 去掉可能开头的空格
			.trim()
			// 首字母大写，其他保持原状
			.replace(/^\w/, (c) => c.toUpperCase())
	);
}

export function extractNumbers(input: string): string | null {
	const match = input.match(/\d+$/); // 匹配结尾的一段数字
	return match ? match[0] : null;
}
