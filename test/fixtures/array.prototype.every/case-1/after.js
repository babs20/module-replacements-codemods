var assert = require("assert");

assert.equal(
  true,
  [1, 1, 1].every(function (x) {
    return x === 1;
  }),
);
assert.equal(
  false,
  [1, 0, 1].every(function (x) {
    return x === 1;
  }),
);
