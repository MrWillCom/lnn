import fs from 'node:fs'
import child_process from 'node:child_process'
import os from 'node:os'

console.log(fs.readFileSync('./.lsnotes').toString())

console.log('---\n')

const ls = os.platform() === 'win32' ? 'dir' : 'ls'

console.log(child_process.execSync(ls).toString())
