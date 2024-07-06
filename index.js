#!/usr/bin/env node

import yargs from 'yargs'
import chalk from 'chalk';
import { RunTemplateFunc } from './src/commands/template.js';
import { RunServiceFunc } from './src/commands/service.js';

const Start = async () => {

    // Get the input arguments
    const argv = await yargs(process.argv.slice(2))

        // Template 
        .option('vite', {
            description: 'Select Vite as template.',
            type: 'boolean',
        })
        .option('nextjs', {
            description: 'Select NextJs as template.',
            type: 'boolean',
        })

        // Framework Option
        .option('react', {
            description: 'Select React as targeted framework.',
            type: 'boolean',
        })
        .option('express', {
            description: 'Select Express as targeted framework.',
            type: 'boolean',
        })

        // Service Option
        .command('*', '', (yargs) => {
            yargs.parserConfiguration({ 'parse-positional-numbers': false });
        })
        .parseAsync()

    //#region Catching Errors
    if (argv.vite && argv.nextjs) {
        console.log(chalk.red(`\n\nOops! It seems you've selected multiple templates, you must specify either --vite or --nextjs.`))
        return false;
    }

    if (argv.react && argv.express) {
        console.log(chalk.red(`\n\nOops! It seems you've selected multiple frameworks, you must specify either --template-react or --template-express.`))
        return false;
    }
    //#endregion

    //#region Running Command
    const viteEnabled = argv.vite
    const nextjsEnabled = argv.nextjs
    const serviceReact = argv.react
    const serviceExpress = argv.express
    const serviceType = argv._[0]
    const fileName = argv._[1]

    if (viteEnabled || nextjsEnabled)
        await RunTemplateFunc(viteEnabled ? 'vite' : 'nextjs')

    if (serviceReact || serviceExpress)
        await RunServiceFunc(serviceReact ? 'react' : 'express', serviceType, fileName)

    //#endregion
}

await Start()