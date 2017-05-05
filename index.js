'use strict';
const Fs = require('fs');
const Path = require('path');
const Runner = require('./runner');

const VERSIONS = Object.keys(Runner.VERSION);

const tests = Fs.readdirSync('./tests').map((x) => './' + Path.join('./tests', x));

const filenames = [];
for (let j = 1; j <= 5; ++j) {

    const max = Math.pow(10, j);
    const results = {};
    console.log();
    console.log();
    console.log({max});
    console.log();
    console.log();
    for (let file of tests) {
        console.log(file);
        results[file] = {};
        for (let version of VERSIONS) {
            console.log('\t', version);
            try {
                results[file][version] = Runner.timeRun(Runner.VERSION[version], file, max);
            }
            catch (e) {
                results[file][version] = e.message;
            }
        }
    }

    Fs.writeFileSync(`./result/result_${max}.json`, JSON.stringify(results));
    filenames.push({ size: max, file: `./result_${max}.json` });
}

Fs.writeFileSync('./result/index.js', `module.exports = { ${ filenames.map((item) => '\'' + item.size + '\'' + ': require(\'' + item.file + '\')').join(',\n') } }`);
