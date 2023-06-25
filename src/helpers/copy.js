import fs from 'fs'
import path from 'path'
import { promisify } from 'util'

const mkdir = promisify(fs.mkdir);
const readdir = promisify(fs.readdir);
const lstat = promisify(fs.lstat);
const copyFile = promisify(fs.copyFile);

export const CopyFolderRecursive = async (source, destination) => {
    try {
        // Create destination folder if it doesn't exist
        if (!fs.existsSync(destination)) {
            await mkdir(destination);
        }

        // Read the contents of the source folder
        const files = await readdir(source);

        // Copy each file/folder from the source to the destination
        for (const file of files) {
            const currentSource = path.join(source, file);
            const currentDestination = path.join(destination, file);

            // Check if the current item is a file or a folder
            const stats = await lstat(currentSource);

            if (stats.isDirectory()) {
                // Recursively copy the sub-folder
                await CopyFolderRecursive(currentSource, currentDestination);
            } else {
                // Copy the file
                await copyFile(currentSource, currentDestination);
            }
        }

        return true
    } catch (error) {
        return false
    }
} 