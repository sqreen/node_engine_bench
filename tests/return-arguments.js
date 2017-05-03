'use strict';
function exec() {
    return arguments;
}

const max = parseInt(process.argv[2]) || 1000;
for (let i = 0; i < max; ++i) {
    exec.apply(null, new Array(i).fill(0));
}
