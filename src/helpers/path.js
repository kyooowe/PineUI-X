import { dirname } from 'path';
import { fileURLToPath } from 'url';

const currentFileUrl = import.meta.url;
const currentFilePath = fileURLToPath(currentFileUrl);
const currentDirectory = dirname(currentFilePath);

const GetSrcPath = () => {
    return currentDirectory.replace('\helpers', '')
}

export { currentFileUrl, currentFilePath, currentDirectory, GetSrcPath }