#!/usr/bin/env node

import fs from 'node:fs'
import minimist from 'minimist'
import chalk from 'chalk'

const argv = minimist(process.argv.slice(2))

try {
    console.log(fs.readFileSync('./.lsnotes', 'utf8'))
} catch (err) {
    if (err.code === 'ENOENT') {
        console.log(chalk.grey('No .lsnotes.'))
    }
}

if (argv.s === true || argv.separator === true) {
    for (let i = 0; i < process.stdout.columns; i++) {
        process.stdout.write(chalk.grey('-'))
    }
    console.log('\n')
}

if (argv.l === true || argv.ls === true) {
    const dir = fs.readdirSync('./')

    for (const i in dir) {
        console.log(dir[i])
    }
}
