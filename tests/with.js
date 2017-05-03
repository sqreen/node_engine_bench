function exec(a, b) {
    with (Math) {

        return min(a, b)
    }
}

const max = parseInt(process.argv[2]) || 1000;
for (let i = 0; i < max; ++i) {
    exec(i, i + 1);
}

