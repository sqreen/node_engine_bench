'use strict';
function exec(...rest) {
    return rest[0];
}
const max = parseInt(process.argv[2]) || 1000;
for (let i = 0; i < max; ++i) {
    exec(1, 2, 3 ,4, 5, 6);
}
