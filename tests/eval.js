'use strict';
function exec() {
    eval('var foo = 5;');
}
const max = parseInt(process.argv[2]) || 1000;
for (let i = 0; i < max; ++i) {
    exec();
}
