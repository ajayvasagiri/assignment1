#!/usr/bin/env node

"use strict";

let fs = require('pn/fs')

if (process.argv.length != 3) {
        console.error('Usage: mkdir.js <file name>');
        process.exit(1);
}

fs.mkdir(process.argv[2])

