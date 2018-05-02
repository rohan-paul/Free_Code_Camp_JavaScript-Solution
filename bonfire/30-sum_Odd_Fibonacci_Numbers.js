/* Problem Statement -
Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

    The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.
     As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.*/

function sumOddFib(n) {
    var previous1 = 0;
    var previous2 = 1;
    var currentFibNumber = 1;
    var sumOfOddFibNumber = 1;

    while (previous1 + previous2 <= n) {
        currentFibNumber = previous1 + previous2;
        previous1 = previous2;
        previous2 = currentFibNumber;

        if (currentFibNumber %2 !== 0) {
            sumOfOddFibNumber += currentFibNumber;
        }
    }
    return sumOfOddFibNumber;

}

console.log(sumOddFib(4));


// Passing test

var chai = require('chai');
var expect = chai.expect;
// var assert = require('assert');

expect(sumOddFib(4)).to.equal(5);