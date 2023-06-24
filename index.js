
import yargs from 'yargs'
import chalk from 'chalk';
import { RunTemplateFunc } from './src/command/template.js';
import { RunServiceFunc } from './src/command/service.js';

const Start = async () => {

    // Get the input arguments
    const argv = await yargs(process.argv.slice(2))
        .option('vite', {
            description: 'Enable Vite.',
            type: 'boolean',
        })
        // Template Option
        .option('react', {
            description: 'Select React as targeted framework.',
            type: 'boolean',
        })
        .option('express', {
            description: 'Select Express as targeted framework.',
            type: 'boolean',
        })

        // Service Option
        .option('service', {
            description: 'Generate a service.',
            type: 'string',
        })
        .parseAsync()

    //#region Catching Errors
    if (argv.react && argv.express) {
        console.log(chalk.red(`Oops! It seems you've selected multiple templates, you must specify either --template-react or --template-express.`))
        return false;
    }

    if ((argv.react || argv.express) && argv.service === '') {
        console.log(chalk.red('Oops! No service selected, please choose a service to generate.'))
        return false;
    }
    //#endregion

    //#region Running Command
    const viteEnabled = argv.vite;
    const serviceReact = argv.react;
    const serviceExpress = argv.express;

    if (viteEnabled)
        await RunTemplateFunc('vite')

    if (serviceReact)
        await RunServiceFunc(argv.service, serviceReact ? 'react' : 'express')

    //#endregion
}

await Start()