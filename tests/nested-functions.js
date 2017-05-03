'use strict';
function exec() {
    var nested = function() {};

    nested();
}

const max = parseInt(process.argv[2]) || 1000;
for (let i = 0; i < max; ++i) {
    exec();
}
