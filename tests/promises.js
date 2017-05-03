'use strict';
function exec(arg) {

    return Promise.resolve(arg).then((x) => x + 1);
}

const max = parseInt(process.argv[2]) || 1000;
for (let i = 0; i < max; ++i) {
    exec(1);
}
