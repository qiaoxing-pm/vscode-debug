import api, { baseURL } from "./request.js";
import { Module } from "../../package/LvglModule.js";
import { handleAnyError } from "./tools.js";
import type { AssertData, ImageSuffix } from "../../../type.js";
import { projectStore } from "../../store/index.js";

async function initAssert(data: AssertData[]) {
	projectStore.asserts = data;
	projectStore.images = [];
	for (const assert of data) {
		if (assert.type === "image") {
			if (Module.Images[assert.src]) {
				continue; // 如果已经存在，则跳过
			}
			const image = new Image();
			image.crossOrigin = "anonymous";
			image.src = baseURL + assert.src;
			image.onload = () => {
				Module.Images[assert.src] = image;
			};
			projectStore.images.push({
				suffix: assert.name.split(".").pop() as ImageSuffix,
				src: assert.src,
			});
		} else if (assert.type === "binFont") {
			if (projectStore.lvFonts[assert.name]) {
				continue; // 如果已经存在，则跳过
			}
			const res = await api.get("/uploads/" + assert.name, {
				responseType: "arraybuffer",
			});
			if (res.status === 200) {
				projectStore.lvFonts[assert.name] =
					Module.lv_binfont_create_from_buffer(res.data, 0); // 第二个参数暂时无用
			} else {
				new Error("Failed to load font:" + assert.name);
			}
		}
	}
}
export async function fetchFiles() {
	try {
		const response = await api.get("/files");
		initAssert(response.data);
		// Asserts.
	} catch (error) {
		return [];
	}
}

export async function getFileByName(name: string): Promise<AssertData | null> {
	try {
		const res = await api.get(`/uploads/${name}`);
		if (res.status === 200) {
			return res.data as AssertData;
		}
		return null;
	} catch (error) {
		handleAnyError(error, "getFileByName");
	}
}

export async function deleteFiles(filename: string) {
	try {
		const response = await api.post(`/files/delete`, { filename });
		if (response.status === 200) {
			await fetchFiles(); // 删除后更新文件列表
		} else {
			throw new Error("Failed to delete file: " + filename);
		}
	} catch (error) {
		handleAnyError(error, "deleteFiles");
	}
}

export async function uploadFile(files: FileList) {
	const formData = new FormData();
	for (let i = 0; i < files.length; i++) {
		const file = files[i];
		const acceptedTypes = ["png", "jpeg", "gif", "jpg", "ttf", "otf", "svg"];
		const accepted = acceptedTypes.some((type) => {
			return file.name.endsWith(`.${type}`);
		});
		if (!accepted) {
			console.error("Unsupported file type:", file.name);
			continue; // 跳过不支持的文件类型
		}
		formData.append("myFile", file);
	}
	try {
		const response = await api.post("/upload", formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});

		// 成功范围：200-299
		if (response.status >= 200 && response.status < 300) {
			await fetchFiles(); // 上传成功，刷新列表
		} else {
			throw new Error(
				`Upload failed: ${response.status} ${response.statusText}`
			);
		}
	} catch (error: any) {
		handleAnyError(error, "uploadFile");
	}
}
