/*Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a '...' ending. Note that the three dots at the end add to the string length.*/


function truncate(str, num) {
    if(str.length <= num) {
        return str;
    } else {
        return (str.substr(str, (num-3)) + "...");
    }
}
// Learning note - In the substr() method if the first argument passed is the original string, then it starts truncating the string from 0 index position of the string

console.log(truncate('A-tisket a-tasket A green and yellow basket', 11));

//Passing Tests

var chai = require('chai');
var expect = chai.expect;
var assert = require('assert');

expect(truncate('A-tisket a-tasket A green and yellow basket', 11)).to.eqls('A-tisket...');
assert(truncate('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length) === 'A-tisket a-tasket A green and yellow basket', 'should not truncate if firsst argument string is = length');
assert.strictEqual(truncate('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length + 1), 'A-tisket a-tasket A green and yellow basket', 'should not truncate if first argument string is < length');
