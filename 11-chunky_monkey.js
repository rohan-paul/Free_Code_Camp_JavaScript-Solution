/*Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array*/

// SOLUTION-1 - BOTH SOL1 AND 2 I THINK IS SIMPLE AND BEST SOLUTION
function chunk(arr, size) {
    newArr = [];
    while (arr.length > size) {
        newArr.push(arr.splice(0, size));
    }

	// Now to take care of the left over elements
  	// e.g. if the array is [1, 2, 3, 4, 5] I have already pushed first 4 elements, and so now
    if (arr.length <= size) {
        newArr.push(arr);
    }
    return newArr;
}


console.log(chunk(['a', 'b', 'c', 'd', 'e'], 2));

/* For creating the inner array, because am using splice() - I dont have to separately take care of the requirement to create a 2-D array. Because, each element of newArr, will automatically be an array as splice() return the deleted elements as an array.

With the first iteration of the while loop, when for the first time splice is applied on the existing array - it removes 'size' number of elements starting at index 0. And returns a new array with the deleted elements. So, for the first time running of the while loop, we get the first chunk of a new array containing the first 2 elements.

Then for the second time running of the while loop, splice removes the next 2 elements of the original array and we get the second chunk of a new array,formed of those just-removed next 2 elements of the original array.
  */

//Passing Tests

//var chai = require('chai');
//var expect = chai.expect;
var assert = require('assert');

assert.deepEqual(chunk(['a', 'b', 'c', 'd'], 2), [['a', 'b'], ['c', 'd']], 'should return chunked arrays');
assert.deepEqual(chunk([0, 1, 2, 3, 4, 5], 3), [[0, 1, 2], [3, 4, 5]], 'should return chunked arrays');
assert.deepEqual(chunk([0, 1, 2, 3, 4, 5], 2), [[0, 1], [2, 3], [4, 5]], 'should return chunked arrays');
assert.deepEqual(chunk([0, 1, 2, 3, 4, 5], 4), [[0, 1, 2, 3], [4, 5]], 'should return the last chunk as remaining elements');


// SOLUTION-2 - 100% same logic and execution as above only I am combining two if function to a single ternary function.
chunk_2 = (arr, chunkSize) => {

    let innerChunkArr = [];

    while (arr.length) {
        arr.length > chunkSize ? innerChunkArr.push(arr.splice(0, chunkSize)) : innerChunkArr.push(arr.splice(0))
    }
    return innerChunkArr;
}

console.log(chunk_2(['a', 'b', 'c', 'd', 'e'], 2));