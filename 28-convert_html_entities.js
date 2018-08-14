/* Problem Statement
Convert the characters "&", "<", ">", '"' (double quote), and "'" (apostrophe),in a string to their corresponding HTML entities.*/

function convert(str) {
    return str.replace(/\&/g, '&amp;')
     .replace(/</g, '&lt;')
     .replace(/>/g, '&gt;')
     .replace(/"/g, '&quot;')
     .replace(/'/g, '&apos;');
}

console.log(convert('Dolce & Gabbana'));

// Passing test

// var chai = require('chai');
// var expect = chai.expect;
var assert = require('assert');

assert.strictEqual(convert('Dolce & Gabbana'), 'Dolce &amp; Gabbana', 'should escape characters');
assert.strictEqual(convert('abc'), 'abc', 'should manage strings with nothing to escape');