'use strict';
function target(a, b) {

    return a.value + b.value;
}

class C1 {

    constructor(value) {

        this.value = value;
    }
}

class C2 {

    constructor(value) {

        this.value = value;
        this.c2 = true;
    }
}

const max = parseInt(process.argv[2]) || 1000;
for (let i = 0; i < max; ++i) {

    target(new C1(i), new C1(i));
}

const max = parseInt(process.argv[2]) || 1000;
for (let i = 0; i < max; ++i) {

    target(new C2(i), new C2(i));
}

const max = parseInt(process.argv[2]) || 1000;
for (let i = 0; i < max; ++i) {

    target(new C1(i), new C2(i));
}
