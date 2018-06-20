/*Return the provided string with the first letter of each word capitalized. For the purpose of this exercise, you should also capitalize connecting words like 'the' and 'of'.*/


String.prototype.toTitleCase = function()
{
    return this.toLowerCase().replace(/^(.)|\s(.)/g,
        function($1) { return $1.toUpperCase(); });
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
*/

// console.log(("I'm the little tea pot").toTitleCase());

//Passing Tests

var chai = require('chai');
var expect = chai.expect;

// expect(("I'm the little tea pot").toTitleCase()).to.be.a('String');
// expect(("I'm the little tea pot").toTitleCase()).to.equal("I'm The Little Tea Pot");
// expect(("I'm a little tea pot").toTitleCase()).to.equal("I'm A Little Tea Pot");
// expect(("GREAT MINDS DISCUSS IDEAS").toTitleCase()).to.equal("Great Minds Discuss Ideas");

// Alternative solution Without using regexp

titleCase = str => {

    // Assuming there's no special character to clean up spllit the string by single space and return an array of words
    str = str.toLowerCase().split(' ')

    // Now traverse the array of words and make each word to titlecase
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

// console.log(titleCase("I'm the little tea pot"));

titleCase1 = str => {

    return str.toLowerCase().split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ')

}

// console.log(titleCase1("I'm the little tea pot"));

// Title Case a Sentence With the map() and the replace() Methods
titleCase2 = str => {
    return str.toLowerCase().split(' ').map(word => {
        return word.replace(word[0], word[0].toUpperCase())
    }).join(' ');
}

console.log(titleCase2("I'm the little tea pot"));