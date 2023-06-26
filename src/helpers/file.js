import fs from 'fs'

/**
 * @description - Replace the selected string on the file
 * @param {string} path - source path
 * @param {string} searchString - string that need to be changed
 * @param {string} replacementString - replace for the searchString
 */
const ReplaceStringInFile = async (path, searchString, replacementString) => {

    // Get the content of file
    const content = await fs.promises.readFile(path, 'utf8');

    // Replace the content
    const modifiedData = content.replace(searchString, replacementString);

    // Write
    await fs.promises.writeFile(path, modifiedData, 'utf8');
}

export { ReplaceStringInFile }