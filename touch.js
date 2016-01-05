#!/usr/bin/env node

"use strict";

let fs = require('pn/fs')

if (process.argv.length != 3) {
        console.error('Usage: touch.js <file name>');
        process.exit(1);
}

fs.open(process.argv[2],'r').then(function(fd)
{
	fs.futimes(fd,Date.now()/1000,Date.now()/1000)
})

