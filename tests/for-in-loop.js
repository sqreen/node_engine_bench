'use strict';
function exec() {
    var obj = {};

    for (var key in obj) {}
}
const max = parseInt(process.argv[2]) || 1000;
for (let i = 0; i < max; ++i) {
    exec();
}
