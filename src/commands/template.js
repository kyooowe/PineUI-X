//#region Import
import figlet from 'figlet'
import gradient from 'gradient-string'
import { exec } from 'child_process'
import color from 'picocolors';
import * as p from '@clack/prompts';
import { GetSrcPath } from '../helpers/path.js'
import { CopyFolderRecursive } from '../helpers/copy.js'
//#endregion

//#region Constant
//#endregion

/**
 * @description - Scaffold a new project based on selected framework
 * @param {string} template - the selected template between vite or nexjs
 * @returns NA
 */
export const RunTemplateFunc = async (template) => {

    console.log('\n')
    p.intro(`${color.white(`Create PineUI App - ${template === 'vite' ? 'Vite' : 'NextJS'}`)}`);

    const option = await p.group(
        {
            name: () =>
                p.text({
                    message: 'Name of the project?',
                    placeholder: 'Pine UI',
                    validate: (value) => {
                        if (!value) return 'Please enter valid name.'
                    }
                }),
            install: () =>
                p.confirm({
                    message: 'Auto install dependencies? (This may take some time instead of doing it manually)',
                    initialValue: false
                })
        },
        {
            onCancel: () => {
                p.cancel('Operation cancelled.');
                process.exit(0);
            },
        }
    )

    const absoluteUserPath = `${process.cwd()}/${option.name}`
    const s = p.spinner()

    // Cloning Application
    s.start(`Creating a new PineUI app in ${absoluteUserPath}.`)

    // Run Clone Functon
    await CloneTemplate(template, absoluteUserPath)
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Stop spinner
    s.stop(`${color.green('PineUI App successfully created.')}`)

    if (option.install) {

        // Installing dependencies
        s.start('Installing dependencies...')

        // Run Install Dependencies Function
        await InstallDependencies(absoluteUserPath)
        await new Promise(resolve => setTimeout(resolve, 1000))

        // Stop Spinner
        s.stop(`${color.green(`Dependencies installed!`)}`)
    }

    // Next Step
    const nextStep = ` cd ${option.name} ${option.install ? '' : '\n npm i'} \n code .`
    p.note(nextStep, 'Next steps.')

    // Outro
    p.outro(`Thank you for using PineUI! Project created at ${absoluteUserPath}. `)
}

const CloneTemplate = async (template, path) => {

    // Template folder path
    const templatePath = `${GetSrcPath()}templates/${template}/`

    await CopyFolderRecursive(templatePath, path)
}

const InstallDependencies = async (path) => {

    try {
        const command = 'npm i'
        const options = {
            cwd: path
        }

        await new Promise((resolve, reject) => {
            exec(command, { ...options }, (error, stdout, stderr) => {
                if (error || stderr) {
                    reject(new Error('Failed to install dependencies.'))
                }

                resolve({ stdout, stderr })
            });
        })

        return true
    } catch (error) {
        return false
    }
}   