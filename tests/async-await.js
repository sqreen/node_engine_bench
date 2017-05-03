'use strict';
async function exec(arg) {

    const result = await Promise.resolve(arg);
    return result;
}

const max = parseInt(process.argv[2]) || 1000;
for (let i = 0; i < max; ++i) {
    exec(1);
}
