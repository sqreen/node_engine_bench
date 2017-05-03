'use strict';
function exec() {
    var fn = function() {};

    fn.bind(null, 1, 2, 3);
}

const max = parseInt(process.argv[2]) || 1000;
for (let i = 0; i < max; ++i) {
    exec();
}
