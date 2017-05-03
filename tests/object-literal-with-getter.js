'use strict';
function exec() {
    var obj = {
        get prop() {
            return 1;
        }
    };
    return obj.prop;
}

const max = parseInt(process.argv[2]) || 1000;
for (let i = 0; i < max; ++i) {
    exec();
}