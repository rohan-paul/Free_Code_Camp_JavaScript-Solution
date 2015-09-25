/*Repeat a given string (first argument) n times (second argument).
Return an empty string if n is a negative number.*/

function repeat (str, num) {
    repeatedString = '';
    if (num <= 0) {
        return repeatedString;
    }
    for (var i = 0; i < num; i++ ) {
        repeatedString += str;
    }
    return repeatedString;
}

console.log(repeat('abc', 3));

var assert = require('assert');

assert.strictEqual(repeat('*', 3), '***', 'should repeat a string n times');
assert.strictEqual(repeat('abc', 3), 'abcabcabc', 'should repeat a string n times');
assert.strictEqual(repeat('abc', -2), '', 'should return an empty string for negative numbers');