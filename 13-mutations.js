/* Build a function that takes an array of strings as its argument. And return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ['hello', 'Hello'], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ['hello', 'hey'] should return false because the string 'hello' does not contain a 'y'.

Lastly, ['Alien', 'line'], should return true because all of the letters in 'line' are present in 'Alien'.*/

function mutation(arr) {
  for (var i = 0; i < arr[1].length; i++) {
    if (
      arr[0]
        .toLowerCase()
        .split("")
        .indexOf(arr[1].split("")[i].toLowerCase()) < 0
    ) {
      return false
    }
  }
  return true
}

console.log(mutation(["hello", "hEllo"]))

//Passing Tests

var chai = require("chai")
var expect = chai.expect
//var assert = require('assert');

expect(mutation(["hello", "hey"])).to.be.false
expect(mutation(["hello", "Hello"])).to.be.true
expect(mutation(["ABCcdef", "Dd"])).to.be.true

// My note - In the line if(arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) <0 )
// the string method indexOf() checks that if each of the arr[1]'s
// elements are also present in the arr[0]
// i.e. each of the arr[1]'s element has a non-negative index number in arr[0]

// SOLUTION-2
mutation2 = arr => {
  if (arr[1].length === 0 || arr[0].length < arr[1].length) return false

  a = arr[0].toLowerCase().split("")
  b = arr[1].toLowerCase().split("")

  return b.every(x => a.indexOf(x) >= 0)
}

console.log(mutation2(["hello", "hEllo"])) // => // => true
console.log(mutation2(["hello", "hey"])) // => false
console.log(mutation2(["ABCcdef", "Dd"])) // => true
