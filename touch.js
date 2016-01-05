#!/usr/bin/env node

"use strict";



let fs = require('pn/fs')

if (process.argv.length != 3) {
        console.error('Usage: touch.js <file name>');
        process.exit(1);
}

var filename = process.argv[2];
fs.exists(filename,function (exists) {
    if (exists) {
    	var currentTime = new Date();
        fs.utimes(filename,currentTime,currentTime);
    } else {
    	fs.open(filename,"w");
    }
});



