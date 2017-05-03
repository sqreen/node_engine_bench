'use strict';
const Fs = require('fs');
const Path = require('path');
const Runner = require('./runner');

const VERSIONS = Object.keys(Runner.VERSION);

const tests = Fs.readdirSync('./tests').map((x) => './' + Path.join('./tests', x));

const results = {};

for (let file of tests) {
    console.log(file);
    results[file] = {};
    for (let version of VERSIONS) {
        console.log('\t', version);
        try {
            results[file][version] = Runner.timeRun(Runner.VERSION[version], file, 100000);
        }
        catch (e) {
            results[file][version] = e.message;
        }
    }
}

Fs.writeFileSync('./result,json', JSON.stringify(results));