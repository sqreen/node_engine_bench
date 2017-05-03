'use strict';
function exec() {
    var obj = {
        set prop(value) {
        }
    };

    obj.prop = 10;
}

const max = parseInt(process.argv[2]) || 1000;
for (let i = 0; i < max; ++i) {
    exec();
}
