'use strict';
function target(a, b) {

    return a + b;
}

const max = parseInt(process.argv[2]) || 1000;
for (let i = 0; i < max; ++i) {

    target(i, i);
}

const max = parseInt(process.argv[2]) || 1000;
for (let i = 0; i < max; ++i) {

    target('' + i, '' + i);
}

const max = parseInt(process.argv[2]) || 1000;
for (let i = 0; i < max; ++i) {

    target(i, '' + i);
}
