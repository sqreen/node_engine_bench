'use strict';
const CP = require('child_process');

module.exports.VERSION = {
    'v8_6.10.1': '/home/vladimir/.nvm/versions/node/v6.10.1/bin/node',
    'v8_7.10.0': '/home/vladimir/.nvm/versions/node/v7.10.0/bin/node',
    'v8_7.10.0_turbo_ignition': '/home/vladimir/.nvm/versions/node/v7.10.0/bin/node --turbo --ignition',
    'v8_v8.0.0-nightly201705043f48ab3042': '/home/vladimir/.nvs/nightly/8.0.0-nightly201705043f48ab3042/x64/bin/node',
    'v8_v8.0.0-nightly201705043f48ab3042_turbo_ignition': '/home/vladimir/.nvs/nightly/8.0.0-nightly201705043f48ab3042/x64/bin/node --turbo --ignition',
    'chakra_v8.0.0-nightly20170415265fc0bedc': '/home/vladimir/.nvs/chakracore/8.0.0-pre2/x64/bin/node',
    'chakra_v8.0.0-nightly20170505fe44f54949': '/home/vladimir/.nvs/chakracore-nightly/8.0.0-nightly20170505fe44f54949/x64/bin/node'
};

module.exports.runWith = function (exec, file, cb) {

    const command = exec + ' ' + file;

    return CP.exec(command, cb);
};

module.exports.timeRun = function (exec, file, arg) {

    const command = exec + ' ' + file + ' ' + arg;

    console.log('\t\t', command);

    const t0 = process.hrtime();
    CP.execSync(command);
    const t1 = process.hrtime(t0); // [seconds, nanoseconds]
    const result = t1[0] * 1000 + t1[1]/1e6;
    console.log('\t\t', result, 'ms');
    return result;
};
