//#region Import
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs'
//#endregion

const currentFileUrl = import.meta.url;
const currentFilePath = fileURLToPath(currentFileUrl);
const currentDirectory = dirname(currentFilePath);

/**
 * @description - Get the current src path of the project
 * @returns string
 */
const GetSrcPath = () => {
    return currentDirectory.replace('/helpers', '')
}

/**
 * @description - Get the user src path
 * @returns string
 */
const GetUserCurrentPath = () => {
    return path.resolve()
}

/**
 * @description - Check if the path is existing or not
 * @returns boolean
 */
const IsPathExisting = (path) => {
    if (fs.existsSync(path))
        return true

    return false
}

/**
 * @description - Create folder based on the user input path
 * @param {string} path - folder path 
 * @param {string} userPath - the current user path
 * @returns boolean
 */
const CreateDirectories = async (path, userPath) => {
    if (path.includes('/')) {

        const fileNameIndex = path.lastIndexOf('/')

        if (fileNameIndex !== -1) {
            const absolutePath = `${userPath}${path.substring(0, fileNameIndex)}`
            await fs.promises.mkdir(absolutePath, { recursive: true })
            return true
        }
    }
    else 
        return false
}

export { currentFileUrl, currentFilePath, currentDirectory, GetSrcPath, GetUserCurrentPath, IsPathExisting, CreateDirectories }