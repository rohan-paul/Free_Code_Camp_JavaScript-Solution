/* Problem Statement -
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

    In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

    The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.*/

function uniteSortedArray(arr1, arr2, arr3) {

  var finalArr = [];
  var combinedArr = arr1.concat(arr2).concat(arr3);

  for (var i = 0; i < combinedArr.length; i++) {
      if (finalArr.indexOf(combinedArr[i]) === -1) {
          finalArr.push(combinedArr[i]);
      }
  }

   return finalArr;

}

// My own learning note - The concat() method itself takes care of the requirement that the final united array should be sorted by their original order and NOT by numerical orders.

console.log(uniteSortedArray([1, 3, 2], [1, [5]], [2, [4]]));

// var chai = require('chai');
// var expect = chai.expect;
var assert = require('assert');

assert.deepEqual(uniteSortedArray([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4], 'should return the union of the given arrays');
assert.deepEqual(uniteSortedArray([1, 3, 2], [1, [5]], [2, [4]]), [1, 3, 2, [5], [4]], 'should not flatten nested arrays');