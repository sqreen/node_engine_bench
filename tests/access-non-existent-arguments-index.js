'use strict';
function exec(/* no arguments */) {
    var arg = arguments[1];
    return arg;
}
const max = parseInt(process.argv[2]) || 1000;
for (let i = 0; i < max; ++i) {
    exec();
}
