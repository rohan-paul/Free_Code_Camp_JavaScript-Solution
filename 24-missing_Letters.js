/* Problem - Find the missing letter in the passed letter range and return it. If all letters are present in the range, return undefined.

My own algorithmic logic to arrive at the solution - For each character in the given string I have to implement a check that >

this character = its preceding ordered alphabet + one order incremented alphabet
in other words > verify > String.fromCharCode(i) == String.fromCharCode((i-1)+1)
*/

function findMissingLetter(str) {
    var givenStrArray = str.split('');
    str = undefined;
    for (var i in givenStrArray) {
        if (i > 0 && givenStrArray[i] !== String.fromCharCode((givenStrArray[i-1].charCodeAt(0)) + 1)) {
            str = String.fromCharCode((givenStrArray[i-1].charCodeAt(0)) + 1);
        }
    }
    return str;
}

console.log(findMissingLetter('abce'));

// Passing test

var chai = require('chai');
var expect = chai.expect;
// var assert = require('assert');

expect(findMissingLetter('abce')).to.equal('d');
expect(findMissingLetter('bcde')).to.be.undefined;
expect(findMissingLetter('efghjklmno')).to.equal('i');