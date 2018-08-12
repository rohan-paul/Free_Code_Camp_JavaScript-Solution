/*
Problem - Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster), which may occur at any place in the word, of an English word, moves it to the end of the word and suffixes an "ay".

SO, If the first character is a vowel, then take that whole word and add 'way' at the end. Otherwise comes the tricky part, take the consonant(s) before the first vowel and move it to the end and add 'ay'.

If a word begins with a vowel you just add "way" to the end.

translatePigLatin("california") should return "aliforniacay".
translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".
Should handle words where the first vowel comes in the end of the word.
Should handle words without vowels.
*/

/* EXPLANATION OF regExpMatch - BUT I AM NO MORE USING IT FOR THE REFACTORED CODE - EARLIER IT WAS PART OF MY default case in the switch statement like below

```
default :
str=str.replace(regExpMatch, "$2$3$1ay");
break
```

var regExpMatch = /(^[^a-z]*[^aeiou]*)([aeiou])([a-z_']*)(\w+)/i;

a) Quotation marks or other punctuation around the word are captured in first block of the regexp - "^[^a-z]*"

b) [^aeiou] - Represent any character set which is not a vowel. And the "*" matches 0 or more of the bracketed match.

*********************

PAUL VERY IMP - The  '^' char is used for as A negative range characters. Matches any character not in the specified range. For example, '[^a-z]' matches any character not in the range 'a' through 'z'. BUT NOTICE TO USE IT AS A NEGATIVE-RANGE-CHARACTER, I HAVE TO PUT IT INSIDE THE SQUARE BRACKET.

HOWEVER '^'	also Matches the position at the beginning of the input string, IF PLACED JUST OUTSIDE THE SQUARE BRACKET. If the RegExp object's Multiline property is set, ^ also matches the position following '\n' or '\r'. See the opposite functionality of this function in below -

../Javascript-Interview_Challenges/Regexp/check-if-String-has-only-numbers.js

*********************

c) The regular braces in "([^aeiou]*)" is called capturing parentheses - this will make the match and remembers the match. Here, it will make the match of a first consonant (or a cluster of consonant, captured by - ^[^a-z]  ) followed by vowels ( captured [aeiou] )  and then followed by any other 0 or more word(s)  ( captured by (\w+) ) .

d) A Word can have an apostrophe and underscore in the middle (which I am allowing with regexp "([a-z_']*)". All other punctuation (comma etc) should be between words.

e) i flag indicates case-insensitive

f) $2 in replace() represent the 2-nd parenthesized sub-match of regExpMatch; i.e. the group of vowels.

General note -
A) search() will return the index of the first match of the regular expression inside the string. Otherwise, it returns -1.

*/

// Solution-1 - DID NOT PASS TEST OF - S"hould handle words without vowels.""
function translatePigLatin(str) {

    str = str.toLowerCase();

    // str.search() returns the position of the first match or -1 if none found:
    // So if Only a vowel is found in position-index-0 of the string, then '0' is returned. If the vowel is found in position-index-2 then '2' is returned.

    var re = /[aeiou]/gi;

    var vowelSearchResult = str.search(re);

    var firstVowelIndex = str.indexOf(str.match(re)[0]);

    var regExpMatch = /(^[^a-z]*[^aeiou]*)([aeiou])([a-z_']*)(\w+)/i;

    switch (true){
        case (vowelSearchResult == 0):
            str = str+"way";
            break;
        case (vowelSearchResult > 0):
            str = str.substr(firstVowelIndex) + str.substr(0, firstVowelIndex) + 'ay'
            break;
        case (vowelSearchResult < 0):
            str = str;
            break;
    }
    return str;
}

/* 1. A default clause; if provided, this clause is executed if the value of expression doesn't match any of the case clauses.

2. RETURN VALUE OF match() - If the string matches the expression, it will return an Array containing the entire matched string as the first element, followed by any results captured in parentheses. If there were no matches, null is returned.

let str2 = "Fame is the thirst of youth";

let result = str2.match(/the/i);

console.log(result);  // => [ 'the', index: 8, input: 'Fame is the thirst of youth' ]

*/

// TESTS

console.log(translatePigLatin("california") === "aliforniacay" )
console.log(translatePigLatin("paragraphs") === "aragraphspay" )
console.log(translatePigLatin("glove") === "oveglay" )
console.log(translatePigLatin("algorithm") === "algorithmway" )
console.log(translatePigLatin("eight") === "eightway" )

/**/

//