'use strict';
function* exec(MAX) {

    for (let i = 0; i < MAX; ++i) {
        yield i;
    }
}

const max = Math.min(parseInt(process.argv[2]) || 1000, 10000);
for (let i = 0; i < max; ++i) {
    const gen = exec(i);
    let val;
    do {
        val = gen.next();
    } while (!val.done);
}
