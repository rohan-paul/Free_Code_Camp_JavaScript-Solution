/* Problem -
Check if a value is classified as a boolean primitive.*/

function checkBoolean(bool) {
    return (typeof bool === 'boolean');
}

console.log(checkBoolean(false));
console.log(checkBoolean("JavaScript"));

// Passing test

// var chai = require('chai');
// var expect = chai.expect;
var assert = require('assert');

assert.strictEqual(checkBoolean(true), true);
assert.strictEqual(checkBoolean(false), true);
assert.strictEqual(checkBoolean([1, 2, 3]), false);
assert.strictEqual(checkBoolean({'a' : 5}), false);
assert.strictEqual(checkBoolean(NaN), false);
assert.strictEqual(checkBoolean('abc'), false);