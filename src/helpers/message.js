import chalk from 'chalk'

const Message = () => {
    const PreparingMessage = async (fileName) => {
        await new Promise(resolve => setTimeout(resolve, 100))
        console.log(chalk.blueBright(`\nPreparing ${fileName} for creation, standby and sip your coffee. 🍵`))
        console.log(chalk.blueBright('Customizing the file base on your input request. 🔧🔨\n'))
        await new Promise(resolve => setTimeout(resolve, 1000))
    }

    const MiddleMessage = async () => {
        console.log(chalk.blueBright('Finalizing the file.....\n'))
        await new Promise(resolve => setTimeout(resolve, 1000))
    }

    const CustomMessage = async (message) => {
        console.log(chalk.blueBright(`${message}\n`))
        await new Promise(resolve => setTimeout(resolve, 1000))
    }

    const InfoMessage = async (message) => {
        console.log(chalk.green(`${message}\n`))
        await new Promise(resolve => setTimeout(resolve, 1000))
    }

    const ErrorMessage = (customMessage) => {
        if (customMessage) { console.log(chalk.redBright(`${customMessage}\n`)) } else { console.log(chalk.redBright('Error occured, you can start again to try our JS Work-CLI. \n')) }
    }

    return { PreparingMessage, MiddleMessage, CustomMessage, InfoMessage, ErrorMessage }
}

export default Message
