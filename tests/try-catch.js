'use strict';
function exec() {
    try {} catch (e) {}
}

const max = parseInt(process.argv[2]) || 1000;
for (let i = 0; i < max; ++i) {
    exec();
}
