#!/usr/bin/env node

"use strict";

let fs = require('pn/fs')
let path = require('path')
let _ = require('lodash')

if (process.argv.length < 3) {
        console.error('Usage: ls.js <file name> <options>');
        process.exit(1);
}

var rootPath = process.argv[2]
var param
var recursive = false

if (process.argv.length == 4)
{
	var param = process.argv[3]
	if (param == '-R')
	{
		recursive = true
	}
}


function ls(rootPath, recursive)
{
     try 
     {
     	let lspromises = []

     	if(fs.statSync(rootPath).isFile())
 		{
 			process.stdout.write(rootPath + '\n')
 		}
     
     	
     	fs.readdir(rootPath).then(function(fileNames)
     	{
	     	 for (let fileName of fileNames) 
	     	 {
	     	 	let filePath = path.join(rootPath, fileName)
			 	
			 	if(recursive)
			 	{
				 	ls(filePath, recursive)
				}
				else if(fs.statSync(filePath).isFile())
				{
					ls(filePath, recursive)
				}
	    	}
     	})
    	
    } catch (e) {
        console.log(e.stack)
    }
}

ls(rootPath, recursive)





