import axios from "../../../../lib/axios/index.js";
import api from "../api/index.js"

interface ImageDetail {
	name: string;
	imgType: string;
	size: string;
	length: string;
}

function extractElements<T>(arr: T[], index: number, length: number): T[] {
	if (!arr.length || index < 0 || length <= 0 || index >= arr.length) {
		return [];
	}
	const actualLength = Math.min(length, arr.length - index);
	return arr.slice(index, index + actualLength);
}


function hasVerticalScrollbar(element: HTMLElement) {
	return element.scrollHeight > element.clientHeight &&
		getComputedStyle(element).overflowY !== 'hidden';
}

function filterBySubstring(strArray: Array<string>, subString: string) {
	if (!strArray || !subString) return [];
	return strArray.filter(str => {
		return str.toLowerCase().includes(subString.toLowerCase());
	})
}

/**
 * 生成随机uuid
 */
function generateUniqueId() {
	return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		const r = Math.random() * 16 | 0;
		const v = c === 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}


/**
 * 获取图片详细信息
 * @param src 图片资源路径（支持URL、dataURL、blobURL等）
 * @returns 包含图片名称、类型、大小、尺寸的信息对象
 */
async function getImageDetail(src: string): Promise<ImageDetail> {
	try {
		const instance = axios.create();
		const srcName = src.split('/').pop();
		// 1. 加载图片资源获取二进制数据
		// const response = await fetch(`/api/uploads/hmi_engineer_gallery/${srcName}`);
		const response = await instance.get(`/api/uploads/hmi_engineer_gallery/${srcName}`, {
			responseType: 'blob'
		});
		// if (!response.ok) {
		//     throw new Error(`图片加载失败：${response.statusText}`);
		// }
		// const blob = await response.blob();

		const blob = await response.data;

		// 2. 解析图片名称（从URL中提取）
		const url = new URL(src, window.location.href); // 处理相对路径
		const pathname = url.pathname;
		const name = pathname.split('/').pop() || 'unknown-image';

		// 3. 解析图片类型（从blob类型中提取，如 "image/png" -> "png"）
		const imgType = blob.type.split('/')[1] || 'unknown';

		// 4. 解析图片大小（字节转字符串）
		const length = `${formatFileSize(blob.size)}`;



		// 5. 解析图片尺寸（宽x高，像素单位）
		const img = new Image();
		img.src = src;
		await new Promise((resolve, reject) => {
			img.onload = resolve;
			img.onerror = () => reject(new Error('图片尺寸解析失败'));
		});
		const size = `${img.width}x${img.height}`;
		return { name, imgType, size, length };
	} catch (error) {
		console.error('获取图片信息失败：', error);
		throw error; // 抛出错误让调用方处理
	}
}






































/**
 * 解析 blob 格式图片数据，获取名称、大小、类型、像素
 * @param {Object} imgData - 图片数据对象
 * @param {File} imgData.file - File 类型对象（含名称、大小、类型）
 * @param {string} imgData.src - blob 格式图片地址（用于解析像素）
 * @param {Function} callback - 回调函数，接收结果（错误 + 图片信息）
 * @returns {void}
 */
function parseBlobImageInfo(imgData, callback) {
	// 1. 验证输入参数合法性
	if (!imgData || typeof imgData !== 'object') {
		callback(new Error('输入参数必须是包含 file 和 src 的对象'));
		return;
	}
	const { file, src } = imgData;
	if (!(file instanceof File) || typeof src !== 'string' || !src.startsWith('blob:')) {
		callback(new Error('参数格式错误：需包含 File 类型的 file 和 blob 格式的 src'));
		return;
	}
	if (typeof callback !== 'function') {
		throw new Error('必须传入回调函数处理结果');
	}

	// 2. 直接从 File 对象提取基础信息
	const imageInfo = {
		name: file.name, // 图片名称（含后缀，如 "cc808e8ff3cb4bbdb3f6a159dc109741.png"）
		size: file.size, // 大小（字节 B）
		sizeText: formatFileSize(file.size), // 格式化大小（如 "8.3 KB"）
		type: file.type, // 类型（MIME 格式，如 "image/png"）
		extension: file.name.split('.').pop()?.toLowerCase() || '', // 后缀（小写，如 "png"）
		width: 0, // 像素宽度
		height: 0 // 像素高度
	};

	// 3. 验证是否为图片文件（避免非图片 blob 解析报错）
	if (!file.type.startsWith('image/')) {
		callback(new Error('该文件不是图片格式'), imageInfo);
		return;
	}

	// 4. 通过 Image 对象解析 blob 图片的像素（无需 FileReader，直接用 blob src）
	const img = new Image();
	// 跨域兼容（避免 Canvas 污染）
	img.crossOrigin = 'anonymous';

	// 图片加载完成：获取像素
	img.onload = function () {
		imageInfo.width = img.width;
		imageInfo.height = img.height;
		callback(null, imageInfo); // 成功返回完整信息
		// 释放内存
		img.onload = null;
		img.onerror = null;
	};

	// 图片加载失败（如 blob 损坏、跨域问题）
	img.onerror = function () {
		callback(new Error('blob 图片解析失败，可能是损坏或跨域限制'), imageInfo);
		img.onload = null;
		img.onerror = null;
	};

	// 赋值 blob src 触发加载（核心：直接使用传入的 blob 地址）
	img.src = src;
}

/**
 * 辅助函数：格式化文件大小（字节 → KB/MB/GB）
 * @param {number} bytes - 文件大小（字节）
 * @returns {string} 格式化后的易读文本
 */
function formatFileSize(bytes) {
	if (bytes < 1024) return `${bytes} B`;
	if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
	if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
	return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`;
}









/**
 * 并发上传队列
 * @param {Array} files - 待上传文件列表: [{ file: File }]
 * @param {number} concurrency - 并发数
 * @param {Function} uploadFn - 上传函数，需返回 Promise
 */
async function uploadQueue(files: Array<any>, concurrency: number, uploadFn: Function) {
	// 给每个文件添加重试次数
	const queue = files.map(f => ({ ...f, retry: 0, error: [] }));
	const successList = [];
	const failedList = [];

	// 当前执行的任务
	let activeCount = 0;
	let index = 0;

	return new Promise(resolve => {
		const runNext = () => {
			// 如果全部执行完且没有任务在运行 → 完成
			if (index >= queue.length && activeCount === 0) {
				resolve({ success: successList, failed: failedList });
				return;
			}

			// 并发受限
			while (activeCount < concurrency && index < queue.length) {
				const task = queue[index++];
				activeCount++;

				uploadFn(task.file)
					.then(() => {
						successList.push(task);
					})
					.catch((e) => {
						task.retry++;
						task.error.push(e)
						api.message.globalMessageNotice({
							type: 'error',
							message: e.message
						})

						if (task.retry < 3) {
							// 失败加入队尾
							queue.push(task);
						} else {
							failedList.push(task);
						}
					})
					.finally(() => {
						activeCount--;
						runNext();
					});
			}
		};

		runNext();
	});
}



























export {
	hasVerticalScrollbar,
	parseBlobImageInfo,
	filterBySubstring,
	generateUniqueId,
	extractElements,
	getImageDetail,
	uploadQueue,
}
