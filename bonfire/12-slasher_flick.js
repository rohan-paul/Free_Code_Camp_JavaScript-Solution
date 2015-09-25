/*Return the remaining elements of an array after chopping off n elements from the head.*/


function slasher(arr, howMany) {
    arr.splice(0, howMany);
    return arr;
}

console.log(slasher([1, 2, 3], 2));

// Passing Tests

//var chai = require('chai');
//var expect = chai.expect;
var assert = require('assert');

assert.deepEqual(slasher([1, 2, 3], 2), [3], 'should drop the first two elements');
assert.deepEqual(slasher([1, 2, 3, 4], 0), [1, 2, 3, 4], 'should return all elements when n < 1');
assert.deepEqual(slasher([1, 2, 3], 3), [], 'should return an empty array when n >= array.length');
assert.deepEqual(slasher([1, 2, 3], 5), [], 'should return an empty array when n >= array.length');

