/*Return the provided string with the first letter of each word capitalized. For the purpose of this exercise, you should also capitalize connecting words like 'the' and 'of'.*/

// SOLUTION-1
String.prototype.toTitleCase = function() {
  return this.toLowerCase().replace(/^(.)|\s(.)/g, function($1) {
    return $1.toUpperCase()
  })
}

/*
A) (a|b) means a or b so /^(.)|\s(.)/g means /^(.)/ or /\s(.)/

B) /\s(.)/g  - Captures any single character after a space.

C) /^(.) - Captures the very first character of the whole string. i.e. this is input beginning specifier and capture whatever character is exactly after it.

 . (a single dot) means any character except new line (\n)

 and ^ means Start of string, or start of line in multi-line pattern
 (https://www.cheatography.com/davechild/cheat-sheets/regular-expressions/)

D) $n represents the nth capture group of the regular expression. $1 is the first group from my regular expression, $2 is the second.

E) $1 regular expression property can be used as a function argument, can be used inside the function and is updated internally by the replace method after the function executes.

F) So, in the above, I am turning the entire string into lower case and then each regexp match group to upper case using replace function.

G) replace() examples >>> 'night before Xmas'.replace(/xmas/i, 'Christmas')
will output => night before Christmas

And here, replace() takes a function >> This function is to be invoked to create the new substring to be used to replace the matches to the given regexp or substr.

*/

// console.log(("I'm the little tea pot").toTitleCase());

//Passing Tests

var chai = require("chai")
var expect = chai.expect

// expect(("I'm the little tea pot").toTitleCase()).to.be.a('String');
// expect(("I'm the little tea pot").toTitleCase()).to.equal("I'm The Little Tea Pot");
// expect(("I'm a little tea pot").toTitleCase()).to.equal("I'm A Little Tea Pot");
// expect(("GREAT MINDS DISCUSS IDEAS").toTitleCase()).to.equal("Great Minds Discuss Ideas");

// SOLUTION-2

titleCase = str => {
  // Assuming there's no special character to clean up spllit the string by single space and return an array of words
  str = str.toLowerCase().split(" ")

  // Now traverse the array of words and make each word to titlecase
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
  }
  return str.join(" ")
}

// console.log(titleCase("I'm the little tea pot"));

// SOLUTION-3
titleCase1 = str =>
  str
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

console.log(titleCase1("I'm the little tea pot"))

// SOLUTION-4
titleCase2 = str =>
  str
    .toLowerCase()
    .split(" ")
    .map(word => word.replace(word[0], word[0].toUpperCase()))
    .join(" ")

console.log(titleCase2("I'm the little tea pot"))

/*

^	Matches the position at the beginning of the input string. If the RegExp object's Multiline property is set, ^ also matches the position following '\n' or '\r'. See the opposite functionality of this function - check-if-String-has-only-numbers.js


PAUL VERY IMP - The same '^' char is used for as A negative range characters. Matches any character not in the specified range. For example, '[^a-z]' matches any character not in the range 'a' through 'z'. BUT NOTICE TO USE IT AS A NEGATIVE-RANGE-CHARACTER, I HAVE TO PUT IT INSIDE THE SQUARE BRACKET.


PAUL - So here, by including '^'	at the beginning of the input string AND '$' at the end of the input string - I am making sure, the 're' variable takes the whole input string from START-TO-END as the block to match. So when I pass this 're' to match() method - IT WILL MATCH THE ENTIRE INPUT ARGUMENT (i.e. the entire input string passed as argument ) and return null if the entire input argument does not match.

+ >> 	Matches the preceding character or sub-expression one or more times. For example, 'zo+' matches "zo" and "zoo", but not "z". + is equivalent to {1,}.
*/
