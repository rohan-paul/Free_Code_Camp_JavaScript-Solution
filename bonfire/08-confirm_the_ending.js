/*Check if a string (first argument) ends with the given target string (second argument).*/

function end(str, target) {
    var targetNumber = target.length;
    if (str.substr(-targetNumber) === target) {
        return true;
    } else {
        return false;
    }
}

console.log(end('Bastian', 'n'));

//Passing Tests

var assert = require('assert');

assert.strictEqual(end('Bastian', 'n'), true, 'should equal true if target equals end of string');
assert.strictEqual(end('Paul', 'a'), false, 'should equal false if target does not equal end of string');
assert.strictEqual(end('It is hard enough to find an error in your code when you are looking for it, it is even harder when you have assumed your code is error-free', 'error-free'), true, 'should equal true if target equals end of string');
assert.strictEqual(end('It is hard enough to find an error in your code when you are looking for it, it is even harder when you have assumed your code is error-free', 'hard'), false, 'should equal false if target does not equal end of string');