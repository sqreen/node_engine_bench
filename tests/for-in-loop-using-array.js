'use strict';
function exec() {
    var arr = [1, 2];

    for (var key in arr) {}
}
const max = parseInt(process.argv[2]) || 1000;
for (let i = 0; i < max; ++i) {
    exec();
}
