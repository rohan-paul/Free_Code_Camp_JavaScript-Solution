/*
Return true if the given string is a palindrome. Otherwise, return false. A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
You'll need to remove punctuation and turn everything lower case in order to check for palindromes. We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.*/

function palindrome(myString) {

    /*remove punctuation and turn lower case in order to compare 2 strings*/
    var cleanString = myString.replace(/[^a-zA-Z0-9]/ig, "").toLowerCase();

    /*now reverse the cleanString to compare*/
    var reverseCleanString = cleanString.split('').reverse().join('');

    if(cleanString === reverseCleanString) {
        return true;
    } else {
        return false;
    }
}


//Passing Tests

console.log(palindrome("eye"));

var chai = require('chai');
var expect = chai.expect;
var assert = require('assert');


expect(palindrome("eye")).to.be.a("boolean");
assert.deepEqual(palindrome("eye"), true);
assert.deepEqual(palindrome("race car"), true);
assert.deepEqual(palindrome("This is not a palindrome"), false);
assert.deepEqual(palindrome("Are we not drawn onward, we few, drawn onward to new era"), true);
assert.deepEqual(palindrome("Paul"), false);