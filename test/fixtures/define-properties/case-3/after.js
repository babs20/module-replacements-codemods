const define = require('define-properties');
const assert = require('assert');

/*
 This usage of `define-properties` usage can be cleaned up through a mix of Object.defineProperty() and a custom predicate function.
 details can be found here: https://github.com/es-tooling/module-replacements-codemods/issues/66 
*/
const res2 = define({ a: 1, b: 2, c: 3 }, {
  a: 10,
  b: 20,
  c: 30
}, {
  a: function () { return false; },
  b: function () { return true; }
});

assert(res2.a === 1);
assert(res2.b === 20);
assert(res2.c === 3);


assert.deepEqual(Object.keys(res2), ['a', 'c']);
assert.deepEqual(Object.getOwnPropertyDescriptor(res2, 'b'), {
  configurable: true,
  enumerable: false,
  value: 20,
  writable: true
});
