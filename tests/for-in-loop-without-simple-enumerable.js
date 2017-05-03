'use strict';
function exec() {
    var obj = {
        prop: 'val'
    };

    // Deleting a property puts object in hash table mode.
    // Can be verified if `%HasFastProperties(obj) === false`
    delete obj.prop;

    for (var key in obj) {}
}
const max = parseInt(process.argv[2]) || 1000;
for (let i = 0; i < max; ++i) {
    exec();
}