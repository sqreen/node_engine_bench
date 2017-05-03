'use strict';
var createClosure = function() {
  var nonLocal = 1;
  var exec = function() {};

  return exec;
};

const exec = createClosure();

const max = parseInt(process.argv[2]) || 1000;
for (let i = 0; i < max; ++i) {
    exec();
}
