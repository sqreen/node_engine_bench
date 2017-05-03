'use strict';
function exec() {
    return Array.prototype.slice.call(arguments, [1]);
}

const max = parseInt(process.argv[2]) || 1000;
for (let i = 0; i < max; ++i) {
    exec(1,2,3);
}
