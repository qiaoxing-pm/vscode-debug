import type { LvglBase } from "./lvgl/package/shapes/lvglBase.js";
import type HMiBase from "./hmi/elements/HMiBase.js";
import type { Graph } from "./packages/core/src/view/Graph.js";
export type LvDisplayT = any;

export type LvScreen = {
	id: string;
	name: string;
	canvas: HTMLCanvasElement;
	width: number;
	height: number;
	scale: number;
	screenObj: LvObjT;
	shape?: LvglBase;
	display: LvDisplayT;
};

export type LvglWidget = {
	id: string;
	name: string;
	widgetType: string;
	selected: boolean;
	children: LvglWidget[];
};

export type ImportConfig = {
	offset?: { x: number; y: number }; // 在原有基础上偏移
	position?: { x: number; y: number }; // 指定是否放在指定位置
	needId?: boolean; // 是否指定id
};

export interface ChangeInfo {
	/** 被修改的属性完整路径，例如 "user.profile.name" */
	path: string;
	/** 操作类型：修改或删除 */
	type: "set" | "delete";
	/** 旧值 */
	oldValue: any;
	/** 新值 */
	newValue: any;
}

export type WidgetProps = {
	curlvglShape: LvglBase | HMiBase | null;
	selectedCellsIds: string;
	selectedCellsLen: number;
	props: [string, any, ...any[]][];
	update: number; // 用于强制刷新
};

export type EventData = {
	name: string;
	trigger: number;
	// 下拉框里面的值
	actionName: number;
	actionType: number;
};

export type ActionData = {
	actionName: number; // 事件类型
	targetId: string; // 如果没有id则为""
	type?: number; // width height x y ......
	value: any; // 可能是字符串、数字或布尔值
	animation?: boolean; // 是否有动画
};

export type EventActionInfo = {
	idx: number;
	actionIdx?: number;
	actionData: ActionData;
};

// 修正后：img 支持 URL 字符串（未加载时）或 Image 实例（加载后）
export interface imgCacheType {
	url: string; // 图片的原始 URL（作为缓存的 key 对应项，可选但建议保留）
	img: string | HTMLImageElement; // 实际用于 src 的资源
	expireTime?: number; // 可选：缓存过期时间（避免内存泄漏）
}

export interface fileItem {
	path: string;
	files: string[];
}

export interface imageType {
	name: string;
	size: number;
	src: string;
	type: string;
}

export type AssertData = {
	name: string;
	src: string;
	type: string;
};

export type ImageSuffix = "png" | "jpg" | "jpeg" | "gif" | "bmp" | "webp";

export type FontData = {
	fontName: string;
	fontAssert: string;
	fontSize: number;
	bpp: number;
	letters: string[];
	range: string;
	symbols: string;
	custom: string;
	style?: LvStyleT | null;
};

export type MapKeyType =
	| "char"
	| "string"
	| "short"
	| "int"
	| "long long"
	| "float"
	| "double"
	| "unsigned char"
	| "unsigned short"
	| "unsigned int"
	| "unsigned long long"
	| "long double"
	| "bool";

export type VariableType =
	| "string"
	| "number"
	| "bigint"
	| "boolean"
	| "symbol"
	| "undefined"
	| "object"
	| "function";

export type VariableDes = {
	name: string;
	type: MapKeyType;
	container: VariableType;
	description: string;
};

interface varTypeStore {
	name: string;
	keyType: string;
	varType?: string;
	valueType?: string;
	varDescription: string;

	[key: string]: any;
}

export interface ProjectStore {
	asserts: AssertData[];
	fontData: FontData[];
	lvFonts: {
		[key: string]: LvStyleT;
	};
	images: {
		suffix: ImageSuffix;
		src: string;
	}[];
}

export type ScreenStore = {
	curScreen: LvScreen | null;
	curGraph: Graph | null;
	screens: {
		[key: string]: LvScreen;
	};
	graphs: {
		[key: string]: Graph;
	};
};

export type AniPropertyType = {
	// type: string, // Postion, Rotation, Scale, Opacity, Color
	name: string; // 属性名称
	targetId: string; // 目标对象的id
	id: string;
	startValue: number;
	isRelative: boolean;
	isInstant: boolean;
	endValue: number;
	delay: number;
	time: number;
	playbackDelay: number;
	playbackTime: number;
	loopDelay: number;
	loopCnt: number;
	isInfinite: boolean;
	curve: number; // 线性、缓入、缓出、缓入缓出
};

export type ManageAniType = {
	selectedAni: string;
	targetId: string; // widget id
	properties: AniPropertyType[];
};

export type AnimationProps = {
	animations: {
		[key: string]: ManageAniType;
	};
	cnt: number;
};




































































































/** Other WebAssembly declarations, for compatibility with older versions of Typescript */
declare namespace WebAssembly {
	interface Module { }
}

declare namespace Emscripten {
	interface FileSystemType {
		mount(mount: FS.Mount): FS.FSNode;
		syncfs(mount: FS.Mount, populate: () => unknown, done: (err?: number | null) => unknown): void;
	}
	type EnvironmentType = "WEB" | "NODE" | "SHELL" | "WORKER";

	type JSType = "number" | "string" | "array" | "boolean" | "bigint";
	type TypeCompatibleWithC = number | string | any[] | boolean;

	type CIntType = "i8" | "i16" | "i32" | "i64";
	type CFloatType = "float" | "double";
	type CPointerType = "i8*" | "i16*" | "i32*" | "i64*" | "float*" | "double*" | "*";
	type CType = CIntType | CFloatType | CPointerType;

	interface CCallOpts {
		async?: boolean | undefined;
	}
}

// Infers the type only in TypeScript environments where GPU types are available
type MaybeGPUDevice = Navigator extends {
	gpu: {
		requestAdapter(...args: any[]): Promise<
			null | {
				requestDevice(...args: any[]): Promise<null | infer T>;
			}
		>;
	};
} ? T
	: never;

export interface EmscriptenModule {
	print(str: string): void;
	printErr(str: string): void;
	arguments: string[];
	environment: Emscripten.EnvironmentType;
	preInit: Array<{ (): void }>;
	preRun: Array<{ (): void }>;
	postRun: Array<{ (): void }>;
	onAbort: { (what: any): void };
	onRuntimeInitialized: { (): void };
	preinitializedWebGLContext: WebGLRenderingContext;
	preinitializedWebGPUDevice: MaybeGPUDevice;
	noInitialRun: boolean;
	noExitRuntime: boolean;
	logReadFiles: boolean;
	filePackagePrefixURL: string;
	wasmBinary: ArrayBuffer;

	destroy(object: object): void;
	getPreloadedPackage(remotePackageName: string, remotePackageSize: number): ArrayBuffer;
	instantiateWasm(
		imports: WebAssembly.Imports,
		successCallback: (module: WebAssembly.Instance) => void,
	): WebAssembly.Exports | undefined;
	locateFile(url: string, scriptDirectory: string): string;
	onCustomMessage(event: MessageEvent): void;

	// USE_TYPED_ARRAYS == 1
	HEAP: Int32Array;
	IHEAP: Int32Array;
	FHEAP: Float64Array;

	// USE_TYPED_ARRAYS == 2
	HEAP8: Int8Array;
	HEAP16: Int16Array;
	HEAP32: Int32Array;
	HEAPU8: Uint8Array;
	HEAPU16: Uint16Array;
	HEAPU32: Uint32Array;
	HEAPF32: Float32Array;
	HEAPF64: Float64Array;
	HEAP64: BigInt64Array;
	HEAPU64: BigUint64Array;

	TOTAL_STACK: number;
	TOTAL_MEMORY: number;
	FAST_MEMORY: number;

	addOnPreRun(cb: () => any): void;
	addOnInit(cb: () => any): void;
	addOnPreMain(cb: () => any): void;
	addOnExit(cb: () => any): void;
	addOnPostRun(cb: () => any): void;

	preloadedImages: any;
	preloadedAudios: any;

	_malloc(size: number): number;
	_free(ptr: number): void;
}

/**
 * A factory function is generated when setting the `MODULARIZE` build option
 * to `1` in your Emscripten build. It return a Promise that resolves to an
 * initialized, ready-to-call `EmscriptenModule` instance.
 *
 * By default, the factory function will be named `Module`. It's recommended to
 * use the `EXPORT_ES6` option, in which the factory function will be the
 * default export. If used without `EXPORT_ES6`, the factory function will be a
 * global variable. You can rename the variable using the `EXPORT_NAME` build
 * option. It's left to you to declare any global variables as needed in your
 * application's types.
 * @param moduleOverrides Default properties for the initialized module.
 */
type EmscriptenModuleFactory<T extends EmscriptenModule = EmscriptenModule> = (
	moduleOverrides?: Partial<T>,
) => Promise<T>;

declare namespace FS {
	interface Lookup {
		path: string;
		node: FSNode;
	}

	interface Analyze {
		isRoot: boolean;
		exists: boolean;
		error: Error;
		name: string;
		path: Lookup["path"];
		object: Lookup["node"];
		parentExists: boolean;
		parentPath: Lookup["path"];
		parentObject: Lookup["node"];
	}

	interface Mount {
		type: Emscripten.FileSystemType;
		opts: object;
		mountpoint: string;
		mounts: Mount[];
		root: FSNode;
	}

	class FSStream {
		constructor();
		object: FSNode;
		readonly isRead: boolean;
		readonly isWrite: boolean;
		readonly isAppend: boolean;
		flags: number;
		position: number;
		fd?: number;
		nfd?: number;
	}

	interface StreamOps {
		open(stream: FSStream): void;
		close(stream: FSStream): void;
		read(stream: FSStream, buffer: Uint8Array, offset: number, length: number, position: number): number;
		write(stream: FSStream, buffer: Uint8Array, offset: number, length: number, position: number): number;
		llseek(stream: FSStream, offset: number, whence: number): number;
	}

	class FSNode {
		parent: FSNode;
		mount: Mount;
		mounted?: Mount;
		// Supported in MEMFS
		contents?: any;
		id: number;
		name: string;
		mode: number;
		rdev: number;
		readMode: number;
		writeMode: number;
		constructor(parent: FSNode, name: string, mode: number, rdev: number);
		read: boolean;
		write: boolean;
		readonly isFolder: boolean;
		readonly isDevice: boolean;
	}

	interface NodeOps {
		getattr(node: FSNode): Stats;
		setattr(node: FSNode, attr: Stats): void;
		lookup(parent: FSNode, name: string): FSNode;
		mknod(parent: FSNode, name: string, mode: number, dev: unknown): FSNode;
		rename(oldNode: FSNode, newDir: FSNode, newName: string): void;
		unlink(parent: FSNode, name: string): void;
		rmdir(parent: FSNode, name: string): void;
		readdir(node: FSNode): string[];
		symlink(parent: FSNode, newName: string, oldPath: string): void;
		readlink(node: FSNode): string;
	}

	interface Stats {
		dev: number;
		ino: number;
		mode: number;
		nlink: number;
		uid: number;
		gid: number;
		rdev: number;
		size: number;
		blksize: number;
		blocks: number;
		atime: Date;
		mtime: Date;
		ctime: Date;
		timestamp?: number;
	}

	class ErrnoError extends Error {
		name: "ErronoError";
		errno: number;
		code: string;
		constructor(errno: number);
	}

	let ignorePermissions: boolean;
	let trackingDelegate: {
		onOpenFile(path: string, trackingFlags: number): unknown;
		onCloseFile(path: string): unknown;
		onSeekFile(path: string, position: number, whence: number): unknown;
		onReadFile(path: string, bytesRead: number): unknown;
		onWriteToFile(path: string, bytesWritten: number): unknown;
		onMakeDirectory(path: string, mode: number): unknown;
		onMakeSymlink(oldpath: string, newpath: string): unknown;
		willMovePath(old_path: string, new_path: string): unknown;
		onMovePath(old_path: string, new_path: string): unknown;
		willDeletePath(path: string): unknown;
		onDeletePath(path: string): unknown;
	};
	let tracking: any;
	let genericErrors: Record<number, ErrnoError>;

	//
	// paths
	//
	function lookupPath(
		path: string,
		opts: Partial<{
			follow_mount: boolean;
			/**
			 * by default, lookupPath will not follow a symlink if it is the final path component.
			 * setting opts.follow = true will override this behavior.
			 */
			follow: boolean;
			recurse_count: number;
			parent: boolean;
		}>,
	): Lookup;
	function getPath(node: FSNode): string;
	function analyzePath(path: string, dontResolveLastLink?: boolean): Analyze;

	//
	// nodes
	//
	function isFile(mode: number): boolean;
	function isDir(mode: number): boolean;
	function isLink(mode: number): boolean;
	function isChrdev(mode: number): boolean;
	function isBlkdev(mode: number): boolean;
	function isFIFO(mode: number): boolean;
	function isSocket(mode: number): boolean;

	//
	// devices
	//
	function major(dev: number): number;
	function minor(dev: number): number;
	function makedev(ma: number, mi: number): number;
	function registerDevice(dev: number, ops: Partial<StreamOps>): void;
	function getDevice(dev: number): { stream_ops: StreamOps };
	var createDevice:
		& ((
			parent: string | FSNode,
			name: string,
			input?: (() => number | null | undefined) | null,
			output?: ((code: number) => void) | null,
		) => FSNode)
		& {
			major: number;
		};

	//
	// core
	//
	function getMounts(mount: Mount): Mount[];
	function syncfs(populate: boolean, callback: (e: any) => any): void;
	function syncfs(callback: (e: any) => any, populate?: boolean): void;
	function mount(type: Emscripten.FileSystemType, opts: any, mountpoint: string): any;
	function unmount(mountpoint: string): void;
	function isMountpoint(node: FSNode): boolean;

	function closeStream(fd: number): void;
	function getStream(fd: number): FSStream;

	function mkdir(path: string, mode?: number): FSNode;
	function mkdirTree(path: string, mode?: number): void;
	function mkdev(path: string, mode?: number, dev?: number): FSNode;
	function symlink(oldpath: string, newpath: string): FSNode;
	function rename(old_path: string, new_path: string): void;
	function rmdir(path: string): void;
	function readdir(path: string): string[];
	function unlink(path: string): void;
	function readlink(path: string): string;
	function stat(path: string, dontFollow?: boolean): Stats;
	function lstat(path: string): Stats;
	function chmod(path: string, mode: number, dontFollow?: boolean): void;
	function lchmod(path: string, mode: number): void;
	function fchmod(fd: number, mode: number): void;
	function chown(path: string, uid: number, gid: number, dontFollow?: boolean): void;
	function lchown(path: string, uid: number, gid: number): void;
	function fchown(fd: number, uid: number, gid: number): void;
	function truncate(path: string, len: number): void;
	function ftruncate(fd: number, len: number): void;
	function utime(path: string, atime: number, mtime: number): void;
	function open(path: string, flags: string | number, mode?: number): FSStream;
	function close(stream: FSStream): void;
	function llseek(stream: FSStream, offset: number, whence: number): number;
	function read(stream: FSStream, buffer: ArrayBufferView, offset: number, length: number, position?: number): number;
	function write(
		stream: FSStream,
		buffer: ArrayBufferView,
		offset: number,
		length: number,
		position?: number,
		canOwn?: boolean,
	): number;
	function mmap(
		stream: FSStream,
		buffer: ArrayBufferView,
		offset: number,
		length: number,
		position: number,
		prot: number,
		flags: number,
	): {
		allocated: boolean;
		ptr: number;
	};
	function ioctl(stream: FSStream, cmd: any, arg: any): any;
	function readFile(path: string, opts: { encoding: "binary"; flags?: string | undefined }): Uint8Array;
	function readFile(path: string, opts: { encoding: "utf8"; flags?: string | undefined }): string;
	function readFile(path: string, opts?: { flags?: string | undefined }): Uint8Array;
	function writeFile(
		path: string,
		data: string | ArrayBufferView,
		opts?: { flags?: string | undefined; mode?: number | undefined; canOwn?: boolean | undefined },
	): void;

	//
	// module-level FS code
	//
	function cwd(): string;
	function chdir(path: string): void;
	function init(
		input: null | (() => number | null),
		output: null | ((c: number) => any),
		error: null | ((c: number) => any),
	): void;

	function createLazyFile(
		parent: string | FSNode,
		name: string,
		url: string,
		canRead: boolean,
		canWrite: boolean,
	): FSNode;
	function createPreloadedFile(
		parent: string | FSNode,
		name: string,
		url: string,
		canRead: boolean,
		canWrite: boolean,
		onload?: () => void,
		onerror?: () => void,
		dontCreateFile?: boolean,
		canOwn?: boolean,
	): void;
	function createDataFile(
		parent: string | FSNode,
		name: string,
		data: ArrayBufferView,
		canRead: boolean,
		canWrite: boolean,
		canOwn: boolean,
	): FSNode;
}

declare var MEMFS: Emscripten.FileSystemType;
declare var NODEFS: Emscripten.FileSystemType;
declare var IDBFS: Emscripten.FileSystemType;

// https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html
type StringToType<R extends any> = R extends Emscripten.JSType ? {
	number: number;
	string: string;
	array: number[] | string[] | boolean[] | Uint8Array | Int8Array;
	boolean: boolean;
	bigint: bigint;
	null: null;
}[R]
	: never;

type ArgsToType<T extends Array<Emscripten.JSType | null>> = Extract<
	{
		[P in keyof T]: StringToType<T[P]>;
	},
	any[]
>;

type ReturnToType<R extends Emscripten.JSType | null> = R extends null ? null : StringToType<Exclude<R, null>>;

// Below runtime function/variable declarations are exportable by
// -s EXTRA_EXPORTED_RUNTIME_METHODS. You can extend or merge
// EmscriptenModule interface to add runtime functions.
//
// For example, by using -s "EXTRA_EXPORTED_RUNTIME_METHODS=['ccall']"
// You can access ccall() via Module["ccall"]. In this case, you should
// extend EmscriptenModule to pass the compiler check like the following:
//
// interface YourOwnEmscriptenModule extends EmscriptenModule {
//     ccall: typeof ccall;
// }
//
// See: https://emscripten.org/docs/getting_started/FAQ.html#why-do-i-get-typeerror-module-something-is-not-a-function

declare function cwrap<I extends Array<Emscripten.JSType | null> | [], R extends Emscripten.JSType | null>(
	ident: string,
	returnType: R,
	argTypes: I,
	opts?: Emscripten.CCallOpts,
): (...arg: ArgsToType<I>) => ReturnToType<R>;

declare function ccall<I extends Array<Emscripten.JSType | null> | [], R extends Emscripten.JSType | null>(
	ident: string,
	returnType: R,
	argTypes: I,
	args: ArgsToType<I>,
	opts?: Emscripten.CCallOpts,
): ReturnToType<R>;

declare function setValue<T extends Emscripten.CType>(
	ptr: number,
	value: T extends "i64" | "i64*" ? bigint : number,
	type: T,
	noSafe?: boolean,
): void;
declare function getValue<T extends Emscripten.CType>(
	ptr: number,
	type: T,
	noSafe?: boolean,
): T extends "i64" | "i64*" ? bigint : number;

declare function allocate(
	slab: number[] | ArrayBufferView | number,
	types: Emscripten.CType | Emscripten.CType[],
	allocator: number,
	ptr?: number,
): number;

declare function stackAlloc(size: number): number;
declare function stackSave(): number;
declare function stackRestore(ptr: number): void;

declare function AsciiToString(ptr: number): string;
declare function UTF8ToString(ptr: number, maxBytesToRead?: number): string;
declare function stringToUTF8(str: string, outPtr: number, maxBytesToRead?: number): void;
declare function lengthBytesUTF8(str: string): number;
/** @deprecated - Use `stringToNewUTF8` instead */
declare function allocateUTF8(str: string): number;
/** @deprecated - Use `stringToUTF8OnStack` instead */
declare function allocateUTF8OnStack(str: string): number;
declare function stringToNewUTF8(str: string): number;
declare function stringToUTF8OnStack(str: string): number;
declare function UTF16ToString(ptr: number): string;
declare function stringToUTF16(str: string, outPtr: number, maxBytesToRead?: number): void;
declare function lengthBytesUTF16(str: string): number;
declare function UTF32ToString(ptr: number): string;
declare function stringToUTF32(str: string, outPtr: number, maxBytesToRead?: number): void;
declare function lengthBytesUTF32(str: string): number;

declare function intArrayFromString(stringy: string, dontAddNull?: boolean, length?: number): number[];
declare function intArrayToString(array: number[]): string;
declare function writeStringToMemory(str: string, buffer: number, dontAddNull: boolean): void;
declare function writeArrayToMemory(array: number[], buffer: number): void;
declare function writeAsciiToMemory(str: string, buffer: number, dontAddNull: boolean): void;

declare function addRunDependency(id: any): void;
declare function removeRunDependency(id: any): void;

declare function addFunction(func: (...args: any[]) => any, signature?: string): number;
declare function removeFunction(funcPtr: number): void;

declare var ALLOC_NORMAL: number;
declare var ALLOC_STACK: number;
declare var ALLOC_STATIC: number;
declare var ALLOC_DYNAMIC: number;
declare var ALLOC_NONE: number;













export interface preDropWidgetInfoType {
	width: number;
	height: number;
	type: string;
}

