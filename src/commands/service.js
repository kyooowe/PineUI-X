//#region Import
import chalk from 'chalk'
import fs from 'fs'
import { ReplaceStringInFile } from '../helpers/file.js'
import { GetSrcPath, CreateDirectories } from '../helpers/path.js'
import Message from '../helpers/message.js'

const { PreparingMessage, ErrorMessage } = Message()
//#endregion

/**
 * @description - Generate Snippets/Service based on selected Framework
 * @param {string} service - selected service option
 * @param {string} framework - the selected framework between react or express
 * @param {string} fileName - file name of the output
 * @returns NA
 */
export const RunServiceFunc = async (framework, service, fileName) => {

    // Show message
    await PreparingMessage(service)

    // Header Text
    if (framework === 'react') {
        switch (service) {
            case 'pmod':
                await PageModuleWorker(fileName, service)
                break;
        }
    }

}

/**
 * @description - Function of the page module worker, where copy the snippets to user project 
 * @param {string} fileName - Path/file name of the file where user want it to place
 * @param {string} service - Service type selected by the user
 */
const PageModuleWorker = async (fileName, service) => {

    try {
        const userSrcPath = `${GetUserCurrentPath()}apps/dashboard/src/`
        const snippetsModulePath = `${GetSrcPath()}snippets/react/module/module.tsx`
        const snippetsPagePath = `${GetSrcPath()}snippets/react/page/page.tsx`

        // Create recursive directories based on user input  
        await CreateDirectories(fileName, `${userSrcPath}modules/`) // Module
        await CreateDirectories(fileName, `${userSrcPath}pages/`) // Pages

        // Copy the module file to module folder of user
        await fs.promises.copyFile(snippetsModulePath, `${userSrcPath}/modules/${fileName}.module.tsx`)

        // Copy the page file to page folder of user
        await ReplaceStringInFile(snippetsPagePath, 'importPath', `@modules/${fileName}.module`) // Replace the importPath to module path
        await fs.promises.copyFile(snippetsPagePath, `${userSrcPath}/pages/${fileName}.page.tsx`)

        // Show success message
        console.log(chalk.greenBright(`Success! Your ${service} is now ready.`))

        // Replace the changes to importPath
        ReplaceStringInFile(snippetsPagePath, `@modules/${fileName}.module`, 'importPath') // Replace the importPath to module path

    } catch (error) {
        ErrorMessage(`\n\n${error}`)
    }
}
