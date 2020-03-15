/*Check if a string (first argument) ends with the given target string (second argument).*/

// function isEndingWith(str, target) {
//   var targetNumber = target.length
//   if (str.substr(-targetNumber) === target) {
//     return true
//   } else {
//     return false
//   }
// }

const isEndingWith = (str, n) => str.charAt(str.length - 1) === n

let str = "Bastion"
console.log(isEndingWith(str, "n"))

console.log(isEndingWith("Bastian", "n")) // true

//Passing Tests

var assert = require("assert")

assert.strictEqual(
  isEndingWith("Bastian", "n"),
  true,
  "should equal true if target equals isEndingWith of string",
)
assert.strictEqual(
  isEndingWith("Paul", "a"),
  false,
  "should equal false if target does not equal isEndingWith of string",
)
assert.strictEqual(
  isEndingWith(
    "It is hard enough to find an error in your code when you are looking for it, it is even harder when you have assumed your code is error-free",
    "error-free",
  ),
  true,
  "should equal true if target equals isEndingWith of string",
)
assert.strictEqual(
  isEndingWith(
    "It is hard enough to find an error in your code when you are looking for it, it is even harder when you have assumed your code is error-free",
    "hard",
  ),
  false,
  "should equal false if target does not equal isEndingWith of string",
)
