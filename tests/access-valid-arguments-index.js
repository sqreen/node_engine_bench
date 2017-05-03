function exec(/* arg0 */) {
    var arg0 = arguments[0];
    return arg0;
}

const max = parseInt(process.argv[2]) || 1000;
for (let i = 0; i < max; ++i) {
    exec(1);
}