# `lnn`

Yet another [`lsnotes`](https://github.com/aeilot/lsnotes) built with Node.js.

(Check out [`lsnotes`](https://github.com/aeilot/lsnotes) by [@aeilot](https://github.com/aeilot)! It's the original project.)

## Getting Started

```sh
$ yarn global add lnn-cli
# or
$ npm install -g lnn-cli
```

Then, you can use `lnn` to print `.lsnotes` in current directory to terminal:

```sh
$ lnn

The home directory of project `lnn`.
```

## Usage

### Use as `ls`

```sh
$ alias ls='lnn -s -l' # you can add this to your terminal profile if you like it
$ ls


The home directory of project `lnn`.

----------

.git
.gitignore
.lsnotes
LICENSE
node_modules
package.json
README.md - readme file
src - code here!
yarn.lock
```

### Arguments

#### `-v` or `--version`

Prints version information

```sh
$ lnn -v
vx.y.z
```

#### `-s` or `--separator`

This adds a separator after printing `.lsnotes`.

```sh
$ lnn


The home directory of project `lnn`.

----------
```

#### `-l` or `--ls`

This appends built-in `ls` to the end of `.lsnotes`.

```sh
$ lnn


The home directory of project `lnn`.

.git
.gitignore
.lsnotes
LICENSE
node_modules
package.json
README.md - readme file
src - code here!
yarn.lock
```
