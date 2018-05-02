/*
Problem - Translate the provided string to pig latin. Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay". If a word begins with a vowel you just add "way" to the end.*/

function pigLatin(str) {

    str = str.toLowerCase();
    var vowelSearchResult = str.search(/[aeiuo]/);
    var regExpMatch = /(^[^a-z]*[^aeiou]*)([aeiou])([a-z_']*)(\w+)/i;

    switch (vowelSearchResult){
        case 0: str = str+"way"; break;
        case -1: str = str+"ay"; break;
        default :
            str=str.replace(regExpMatch, "$2$3$1ay");
            break;
    }
    return str;

}

console.log(pigLatin("%Eloquent_JavaScript"));

// Implement testing

var assertTranslation = function(input, expectedOut) {
    var assert = require('assert'),
        actual = pigLatin(input);

    console.log("Input:\t\t" + input);
    console.log("Expected:\t" + expectedOut);
    console.log("Actual:\t\t" + actual);

    try {
        assert.equal(actual, expectedOut);
        console.log("Correct!\n");
        return true;
    } catch (error) {
        console.error("Incorrect!\n");
        return false
    }
};

assertTranslation("JavaScript", "avascripjay");
assertTranslation("Eloquent_JavaScript", "eloquent_javascriptway");
assertTranslation("%Eloquent_JavaScript", "eloquent_javascrip%ay");


/* My learning note explaining regExpMatch -
a) Quotation marks or other punctuation around the word are captured in first block of the regexp - "^[^a-z]*"
b) [^aeiou] - Represent any character set which is not a vowel. And the "*" matches 0 or more of the bracketed match.
c) The regular braces in "([^aeiou]*)" is called capturing parentheses - this will make the match and remembers the match. Here, it will make the match of a first consonant (or a cluster of consonant) followed by vowels and then followed by any other 0 or more word(s).
d) A Word can have an apostrophe and underscore in the middle (which I am allowing with regexp "([a-z_']*)". All other punctuation (comma etc) should be between words.
e) i flag indicates case-insensitive

f) $2 in replace() represent the 2-nd parenthesized submatch of regExpMatch; i.e. the group of vowels.

General note -
A) search() will return the index of the first match of the regular expression inside the string. Otherwise, it returns -1.
*/