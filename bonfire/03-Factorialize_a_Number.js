/* Problem Statement - Return the factorial of the provided integer. If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.*/

  function factorialize (num) {
    if (num < 0) {
      return 'undefined';
    }
    var fact = 1;
    for (var i = num; i > 1; i--) {
      fact *= i;
    }
    return fact;
  }

  console.log(factorialize(6));

// Passing Tests

  var chai = require('chai');
  var expect = chai.expect;

  expect(factorialize(5)).to.be.a("Number");
  expect(factorialize(5)).to.equal(120);
  expect(factorialize(10)).to.equal(3628800);

// Recursive solution to find factorial of a number

function factorial(num) {
  return (num === 1 ? 1 : num * factorial(num - 1));
}

console.log(factorial(5));