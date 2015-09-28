/*
Problem -
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.*/

function sumAll(arr) {
    var getMaxNumberFromOriginalArray = function (arr) {
        return Math.max.apply(null, arr);
    };

    var getMinNumberFromOriginalArray = function (arr) {
        return Math.min.apply(null, arr);
    };

    /* My interpretation of using the apply() in the above -
    A) If I don't use the apply method, or use the apply method without "null" as its first argument, the final result will only addup the 2 given elements of the original array.

     Now, both call() and apply() are methods we can use to assign the <this> pointer for the duration of a method invocation, and here, because I am passing an array to the Math.max function, will have to use apply().

    B) The apply() method invokes the function Math.max() and uses its first parameter as the <this> pointer inside the body of the function. In other words - we've told the runtime what object to reference as <this> while executing inside of function Math.max

    C) And when null or undefined is supplied as the receiver to call() or apply(), the global object is used as the value for receiver instead, as the value of this can never be null or undefined when a function is called. And here the global object is the finnal value of "arr".  */

    var secondMaxNumber = getMaxNumberFromOriginalArray(arr) - 1;
    var secondMinNumber = getMinNumberFromOriginalArray(arr) + 1;

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