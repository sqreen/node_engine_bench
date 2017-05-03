'use strict';
const exec0 = function() {

    return this.name;
};

const exec = exec0.bind({ name: 'name' });

const max = parseInt(process.argv[2]) || 1000;
for (let i = 0; i < max; ++i) {
    exec();
}
