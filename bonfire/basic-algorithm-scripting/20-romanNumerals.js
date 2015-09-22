// Convert the given number into a roman numeral. All roman numerals answers should be provided in upper-case.

/*
My note - The rule to implement the conversion to any roman numeral is based on the steps given in <http://www.rapidtables.com/convert/number/how-number-to-roman-numerals.htm>

 A) First make the initial table to for the 13 decimal number and corresponding roman numerals
 B) For decimal number x (that needs to be converted) - Find the highest decimal value v that is less than or equal to the decimal number x, and its corresponding roman numeral n.
 C) Write the roman numeral n that you found and subtract its corresponding decimal value v from x:
 So the new x is = x - v
 D) Repeat step A to B until I get zero result of x and at each repetition concatenate the roman numerals n to the previous ones.
*/

function convertToRoman(number) {
    var numberToConvert = number;
    var romanNumber = '';   // This will be the final Roman number that this whole snippet will ouput

    var givenRomanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    // Corresponding decimal numbers to coincide with givenRomanNumerals.
    var givenNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    for (var i = 0; i < givenRomanNumerals.length; i++ ) {
        while (numberToConvert >= givenNumbers[i]) {
            numberToConvert -= givenNumbers[i];
            romanNumber += givenRomanNumerals[i];

        }
    }
    return romanNumber.toUpperCase();
}

console.log(convertToRoman(36));

//Passing Tests

var chai = require('chai');
var expect = chai.expect;
// var assert = require('assert');

expect(convertToRoman(12)).to.equal("XII");
expect(convertToRoman(5)).to.equal("V");
expect(convertToRoman(9)).to.equal("IX");
expect(convertToRoman(29)).to.equal("XXIX");
expect(convertToRoman(16)).to.equal("XVI");