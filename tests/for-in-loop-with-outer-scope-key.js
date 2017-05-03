'use strict';
var key;
function exec() {
    var obj = {};

    for (key in obj) {}
}

const max = parseInt(process.argv[2]) || 1000;
for (let i = 0; i < max; ++i) {
    exec();
}