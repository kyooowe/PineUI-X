//#region Import
import figlet from 'figlet'
import chalk from 'chalk'
import gradient from 'gradient-string'
import { GetSrcPath } from '../helpers/path.js'
import { CopyFolderRecursive } from '../helpers/copy.js'
import Message from '../helpers/message.js'

const { MiddleMessage, InfoMessage } = Message()
//#endregion

//#region Constant
//#endregion

/**
 * @description - Scaffold a new project based on selected framework
 * @param {string} template - the selected template between vite or nexjs
 * @returns NA
 */
export const RunTemplateFunc = async (template) => {

    if(template === 'nextjs') {
        console.log(chalk.blueBright(`\n\n Sorry, NextJS template still in progress. You can try our Vite template by simply adding --vite flag.`))
        return
    }

    // Header Text
    console.log(chalk.blueBright(`\n\nPreparing ${template === 'vite' ? 'Vite' : 'NextJS'} template for creation, standby and sip your coffee. 🍵`))

    await CloneTemplate(template)
    await MiddleMessage()

    console.log(chalk.greenBright(`\nSuccess! To get started, open the terminal in the /pineui-${template} directory and execute the command "npm i."`))
    console.log(chalk.greenBright(`Additionally, feel free to refer to the documentation available at https://github.com/kyooowe/pineui.`))
    
    figlet('Thank you for using\n Pine UI!', (err, data) => {
        console.log(gradient.pastel.multiline(data))
    })
}

const CloneTemplate = async (template) => {

    // Template folder path
    const templatePath = `${GetSrcPath()}templates/vite/`
    const userPath = `${process.cwd()}\\pineui-${template}\\`

    await CopyFolderRecursive(templatePath, userPath)
}