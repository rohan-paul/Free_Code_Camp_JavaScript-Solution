/* Problem Statement
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes*/

function spinalTapCase(str) {
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2').replace((/(\s|_)/g), '-').toLowerCase();
    return str;
}

// Passing test

var chai = require('chai');
var expect = chai.expect;
var assert = require('assert');

assert.strictEqual(spinalTapCase('This Is Spinal Tap'), 'this-is-spinal-tap', 'should return spinal case from string with spaces');