'use strict';
function target(a, b) {

    return a.value + b.value;
}

const max = parseInt(process.argv[2]) || 1000;
for (let i = 0; i < max; ++i) {

    target({ value: i }, { value: i });
}

for (let i = 0; i < max; ++i) {

    target({ value: i, c2: true }, { value: i, c2: true});
}

for (let i = 0; i < max; ++i) {

    target({ value: i }, { value: i, c2: true});
}
