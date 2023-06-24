import figlet from 'figlet'
import chalk from 'chalk'
import Message from '../helper/message.js'

const { PreparingMessage } = Message()

/**
 * @description - Scaffold a new project based on selected framework
 * @param {string} template - the selected template between vite or nexjs
 * @returns NA
 */
export const RunTemplateFunc = async (template) => {

    // Header Text
    console.log(figlet.textSync(`Pine UI ${template === 'vite' ? 'Vite' : 'NextJS'}`))

    console.log(chalk.blueBright(`\nPreparing ${template === 'vite' ? 'Vite' : 'NextJS'} template for creation, standby and sip your coffee. 🍵`))
}