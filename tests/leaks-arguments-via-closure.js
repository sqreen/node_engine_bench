'use strict';
function exec() {
    var args = arguments;

    return function() {
        return args;
    }
}

const max = parseInt(process.argv[2]) || 1000;
for (let i = 0; i < max; ++i) {
    exec();
}
