'use strict';
const CP = require('child_process');

module.exports.VERSION = {
    '6.10.1_v8': '/home/vladimir/.nvm/versions/node/v6.10.1/bin/node',
    '7.10.0_v8': '/home/vladimir/.nvm/versions/node/v7.10.0/bin/node',
    '7.10.0_v8_turbo_ignition': '/home/vladimir/.nvm/versions/node/v7.10.0/bin/node --turbo --ignition',
    '8.0.0_v8': '/home/vladimir/.nvm/versions/node/v8.0.0/bin/node',
    '8.0.0_v8_turbo_ignition': '/home/vladimir/.nvm/versions/node/v8.0.0/bin/node --turbo --ignition',
    '8.0.0-nightly20170415265fc0bedc_chakra': '/home/vladimir/.nvs/chakracore/8.0.0-pre2/x64/bin/node',
    '8.0.0-nightly20170505fe44f54949_chakra': '/home/vladimir/.nvs/chakracore-nightly/8.0.0-nightly20170505fe44f54949/x64/bin/node'
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
