import instance from "../config/config.js";


const getFileByProject = async (projectName: string) => {
	const response = await instance.get(`/files/${projectName}`);
	return response.data;

}


const uploadFile = async (file: File, project: string) => {
	const formData = new FormData();
	formData.append('myFile', file);
	formData.append('project', project)
	try {
		const response = await instance.post('/upload', formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			}
		});

		return response
	} catch (error: any) {
		throw new Error(error)
	}
}


const deleteFile = async (files: Array<string>, project: string) => {
	try {
		const response = await instance.post('/files/delete', {
			project,
			files,
		});
		return response.data;
	} catch (error) {
		return 400;
	}
}


export {
	uploadFile,
	deleteFile,
	getFileByProject,
}
