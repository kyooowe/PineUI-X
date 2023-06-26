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
        .option('service', {
            description: 'Generate a service.',
            type: 'string',
            when: ['react', 'express']
        })
        .parseAsync()

    //#region Catching Errors
    if(argv.vite && argv.nextjs) {
        console.log(chalk.red(`\n\nOops! It seems you've selected multiple templates, you must specify either --vite or --nextjs.`))
        return false;
    }

    if (argv.react && argv.express) {
        console.log(chalk.red(`\n\nOops! It seems you've selected multiple frameworks, you must specify either --template-react or --template-express.`))
        return false;
    }

    if ((argv.react || argv.express) && !argv.service) {
        console.log(chalk.red('\n\nOops! No service selected, please choose a service to generate.'))
        return false;
    }
    //#endregion

    //#region Running Command
    const viteEnabled = argv.vite
    const nextjsEnabled = argv.nextjs
    const serviceReact = argv.react
    const serviceExpress = argv.express

    if (viteEnabled || nextjsEnabled)
        await RunTemplateFunc(viteEnabled ? 'vite' : 'nextjs')

    if (serviceReact || serviceExpress)
        await RunServiceFunc(argv.service, serviceReact ? 'react' : 'express')

    //#endregion
}

await Start()