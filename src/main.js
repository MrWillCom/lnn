#!/usr/bin/env node

import fs from 'node:fs'
import child_process from 'node:child_process'
import os from 'node:os'
import minimist from 'minimist'
import chalk from 'chalk'

const argv = minimist(process.argv.slice(2))

try {
    console.log(fs.readFileSync('./.lsnotes').toString())
} catch (err) {
    if (err.code === 'ENOENT') {
        console.log(chalk.grey('No .lsnotes.'))
    }
}

if (argv.s === true || argv.separator === true) {
    for (let i = 0; i < process.stdout.columns; i++) {
        process.stdout.write(chalk.grey('-'))
    }
}

if (argv.l === true || argv.ls === true) {
    const ls = os.platform() === 'win32' ? 'dir' : 'ls'

    console.log(child_process.execSync(ls).toString())
}
