import figlet from 'figlet'
import chalk from 'chalk'
import yargs from 'yargs'
import Message from '../helpers/message.js'

const { PreparingMessage } = Message()

/**
 * @description - Generate Snippets/Service based on selected Framework
 * @param {string} service - selected service option
 * @param {string} framework - the selected framework between react or express
 * @returns NA
 */
export const RunServiceFunc = async (service, framework) => {

    // Header Text
    console.log(figlet.textSync(`Pine UI ${framework === 'react' ? 'React' : 'Express'}`))

    await PreparingMessage(service)
}