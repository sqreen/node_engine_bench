'use strict';
function exec() {
    try {} finally {}
}
const max = parseInt(process.argv[2]) || 1000;
for (let i = 0; i < max; ++i) {
    exec();
}

