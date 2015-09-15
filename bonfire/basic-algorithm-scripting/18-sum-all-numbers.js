/*
Problem -
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.*/

function sumAll(arr) {
    var MaxNumberFromOriginalArray = function (arr) {
        return Math.max.apply(null, arr);
    };

    var MinNumberFromOriginalArray = function (arr) {
        return Math.min.apply(null, arr);
    };

    // If I don't use the apply method, the final result will only addup the 2 given elements of the original array.

    var secondMaxNumber = MaxNumberFromOriginalArray(arr) - 1;
    var secondMinNumber = MinNumberFromOriginalArray(arr) + 1;

    // Now to the original array I have to push all the other numbers in between the max and min numbers, so I have the final array containing the entire series of numbers from max to min.

    for (var i = secondMaxNumber; i >= secondMinNumber; i--) {
        arr.push(i);
    }

    //And now just sumup all the individual elements of the numbers.

    var sum = arr.reduce(function (currentValue, previousValue) {
        return currentValue + previousValue;
    });

    return (sum);
}

console.log(sumAll([1,4]));

// Passing Tests

var chai = require('chai');
var expect = chai.expect;

expect(sumAll([1, 4])).to.be.a('Number');
expect(sumAll([1, 4])).to.equal(10);
expect(sumAll([4, 1])).to.equal(10);
expect(sumAll([5, 10])).to.equal(45);
expect(sumAll([10, 5])).to.equal(45);