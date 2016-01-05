#!/usr/bin/env node

"use strict";

let fs = require('pn/fs')

if (process.argv.length != 3) {
        console.error('Usage: rm.js <file name>');
        process.exit(1);
}

fs.rmdir(process.argv[2])

