/* Return the lowest index at which a value (second argument) should be inserted into a sorted array (first argument).

For example, where([1,2,3,4], 1.5) should return 1 because it is greater than 1 (0th index), but less than 2 (1st index).*/

function where (arr, num) {
  arr.push(num);
  arr.sort();
  return arr.indexOf(num);
}

console.log(where([40, 60], 50));

// Passing test

var chai = require('chai');
var expect = chai.expect;
// var assert = require('assert');

expect(where([40, 60], 50)).to.be.a('Number');
expect(where([40, 60], 50)).to.equal(1);
