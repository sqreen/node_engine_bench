'use strict';
function exec() {
    var length = arguments.length;
    var args = new Array(length);

    for (var i = 0; i < length; ++i) {
        args[i] = arguments[i];
    }

    return args;
}
const max = parseInt(process.argv[2]) || 1000;
for (let i = 0; i < max; ++i) {
    exec();
}
