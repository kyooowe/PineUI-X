//#region Import
import chalk from 'chalk'
import fs from 'fs'
import { ReplaceStringInFile } from '../helpers/file.js'
import { GetSrcPath, CreateDirectories, GetUserCurrentPath } from '../helpers/path.js'
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

    console.log(framework)
    console.log(service)
    console.log(fileName)

    if (framework === 'react') {
        switch (service) {
            case 'pmod':

                // Show message
                await PreparingMessage(service)
                await PageModuleWorker(fileName)

                break;
            case 'crud':
                console.log(chalk.red('\nCRUD service is still in progress. '))
                break;
        }
    }
}

/**
 * @description - Function of the page module worker, where copy the snippets to user project 
 * @param {string} fileName - Path/file name of the file where user want it to place
 * @param {string} service - Service type selected by the user
 */
const PageModuleWorker = async (fileName) => {

    try {
        const userSrcPath = `${GetUserCurrentPath()}/apps/dashboard/src/`
        const snippetsModulePath = `${GetSrcPath()}snippets/react/module/module.tsx`
        const snippetsPagePath = `${GetSrcPath()}snippets/react/page/page.tsx`

        console.log(userSrcPath)

        // Create recursive directories based on user input  
        await CreateDirectories(fileName, `${userSrcPath}modules/`) // Module
        await CreateDirectories(fileName, `${userSrcPath}pages/`) // Pages

        // Copy the module file to module folder of user
        await fs.promises.copyFile(snippetsModulePath, `${userSrcPath}/modules/${fileName}.module.tsx`)

        // Copy the page file to page folder of user
        await ReplaceStringInFile(snippetsPagePath, 'importPath', `test`) // Replace the importPath to module path
        await fs.promises.copyFile(snippetsPagePath, `${userSrcPath}/pages/${fileName}.page.tsx`)

        // Show success message
        console.log(chalk.greenBright(`Module path: src/modules/${fileName}.module.tsx`))
        console.log(chalk.greenBright(`Page path: src/pages/${fileName}.page.tsx`))
        console.log(chalk.greenBright(`\nSuccess! Your page and module is now ready.`))

        // Replace the changes to importPath
        ReplaceStringInFile(snippetsPagePath, `test`, 'importPath') // Replace the importPath to module path

    } catch (error) {
        ErrorMessage(`\n\n${error}`)
    }
}

