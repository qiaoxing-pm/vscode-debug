import { uploadFile, deleteFile, getFileByProject } from './client/index.js'
import { https } from './config/config.js'

const baseURL = https.baseURL;

export {
	baseURL,
	uploadFile,
	deleteFile,
	getFileByProject,
}
