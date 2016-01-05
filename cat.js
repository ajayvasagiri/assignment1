#!/usr/bin/env node

"use strict";

let fs = require('pn/fs')

if (process.argv.length != 3) {
        console.error('Usage: cat.js <file name>');
        process.exit(1);
}


fs.readFile(process.argv[2]).then(function (data) 
{ 
	process.stdout.write( data+"\n")
})


