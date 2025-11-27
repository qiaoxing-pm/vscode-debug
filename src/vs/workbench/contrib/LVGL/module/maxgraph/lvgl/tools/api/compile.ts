import api from "./request.js";
import { handleAnyError } from "./tools.js";


export async function compile(project: string, canvas: string[]): Promise<{
	type: "success" | "error";
	message: string;
}> {
	try {
		const response = await api.post("/compile", {
			project,
			canvas,
		});
		if (response.status !== 200) {
			return {
				type: "error",
				message: "Compile failed",
			};
		}
		return {
			type: "success",
			message: "Compile success",
		};
	} catch (error) {
		console.error("Compile failed:", error);
		return {
			type: "error",
			message: "Compile failed",
		};
	}
}

export async function downloadFile(filename?: string) {
	try {
		const response = await api.get("/download", {
			responseType: "blob", // 关键：以二进制流接收
		});

		// 创建 blob 对象
		const blob = new Blob([response.data]);

		// 创建临时的 a 标签用于触发下载
		const link = document.createElement("a");
		link.href = URL.createObjectURL(blob);
		link.download = "compile.zip"; // 自定义保存文件名（用户可改路径）

		// 触发点击下载
		document.body.appendChild(link);
		link.click();

		// 清理
		document.body.removeChild(link);
		URL.revokeObjectURL(link.href);

	} catch (error) {
		handleAnyError(error, "downloadFile");
	}
}
