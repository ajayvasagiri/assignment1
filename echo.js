#!/usr/bin/env node

if (process.argv.length < 3) {
        console.error('Usage: echo.js <message>');
        process.exit(1);
}

var i = 2
while (i < process.argv.length) 
{
	process.stdout.write(process.argv[i] + ' ')
    i++;
}


