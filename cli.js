#!/usr/bin/env node
'use strict'

var wrenpm = require('./index')
var meow = require('meow')

var cli = meow({
  help: [
    'Usage',
    '  wrenpm install'
  ]
})

if (cli.input[0] === 'install') {
  wrenpm.installDependencies({
    projectDirectory: process.cwd()
  })
} else {
  cli.showHelp()
}
