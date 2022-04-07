#!/usr/bin/env node

import fs from 'node:fs'
import minimist from 'minimist'
import chalk from 'chalk'
import yamlFront from 'yaml-front-matter'

const argv = minimist(process.argv.slice(2))

const main = () => {
    // `-v` or `--version` for version information
    if (argv.v || argv.version) {
        console.log('v' + JSON.parse(fs.readFileSync('./package.json', 'utf8')).version)
        return
    }

    var notes = {}

    // output `.lsnotes`
    try {
        notes = yamlFront.loadFront(fs.readFileSync('./.lsnotes', 'utf8'))
        console.log(notes.__content)
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log(chalk.grey('\nNo .lsnotes.\n'))
        }
    }

    // output a separator if `-s` or `--separator`
    if (argv.s || argv.separator) {
        for (let i = 0; i < process.stdout.columns; i++) {
            process.stdout.write(chalk.grey('-'))
        }
        console.log('\n')
    }

    // built-in `ls` if `-l` or `--ls`
    if (argv.l || argv.ls) {
        const dir = fs.readdirSync('./')
        var output = ''

        for (const i in dir) {
            try {
                if (fs.statSync(dir[i]).isDirectory()) {
                    output += chalk.blue(dir[i])
                } else {
                    output += dir[i]
                }
            } catch (err) {
                output += dir[i]
            }
            for (const j in notes['files']) {
                if (j === dir[i]) {
                    output += chalk.dim(' - ')
                    output += chalk.dim(notes['files'][j])
                }
            }
            output += '\n'
        }

        console.log(output)
    }
}

main()
