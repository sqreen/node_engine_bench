'use strict';
function exec(arg0) {
    var foo = arguments[0];

    arg0 = 'foo';
}

const max = parseInt(process.argv[2]) || 1000;
for (let i = 0; i < max; ++i) {
    exec(1);
}
