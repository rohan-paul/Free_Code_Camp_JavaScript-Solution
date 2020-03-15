/*
Return true if the given string is a palindrome. Otherwise, return false. A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
You'll need to remove punctuation and turn everything lower case in order to check for palindromes. We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.*/

function palindrome(myString) {
  /*remove punctuation (i.e. replace any character which is not a letter or number with empty chracter) i.e. all non-alphanumeric chars
  This could also have been done with str.replace(/[^\w]/gi)
  */
  var cleanString = myString.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase()

  return (
    cleanString ===
    cleanString
      .split("")
      .reverse()
      .join("")
  )
}

// [^A-Z] matches anything that is not enclosed between A and Z
// [^a-z] matches anything that is not enclosed between a and z
// [^0-9] matches anything that is not enclosed between 0 and 9

// console.log(palindrome("eye"));

//Passing Tests
var chai = require("chai")
var expect = chai.expect
var assert = require("assert")

expect(palindrome("eye")).to.be.a("boolean")
assert.deepEqual(palindrome("eye"), true)
assert.deepEqual(palindrome("race car"), true)
assert.deepEqual(palindrome("This is not a palindrome"), false)
assert.deepEqual(
  palindrome("Are we not drawn onward, we few, drawn onward to new era"),
  true,
)
assert.deepEqual(palindrome("Paul"), false)

// Alernative by dividing the array in 2 parts and checking corresponding elements. Half-indexing (len/2) has benefits when processing large strings. We check the end from each part and divide the number of iterations inside the FOR loop by two.

function isPalindrome2(str) {
  let cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/gi, "")

  let len = Math.floor(cleanStr.length)

  // Very important - the division by 2 needs to be done in the for loop
  // if its done with Math.floor - it will NOT calculate the correct number
  for (let i = 0; i < len / 2; i++) {
    if (cleanStr[i] !== cleanStr[len - 1 - i]) {
      return false
    }
  }
  return true
}

// console.log(isPalindrome2("eye"));
