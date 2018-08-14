/*
Problem - Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word 'Book' with the word 'dog', it should be replaced as 'Dog'*/

// SOLUTION-1
function replace(str, before, after) {
    var splitSentenceArray = str.split(' ');

    if (before.charAt(0) === before.charAt(0).toUpperCase()) {
        after = after.charAt(0).toUpperCase() + after.substring(1).toLowerCase();
    } else {
        after = after.substring(0).toLowerCase();
    }

    splitSentenceArray.splice(splitSentenceArray.indexOf(before), 1, after);

    return splitSentenceArray.join(' ');
}

//console.log(replace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));
console.log(replace("Life is a war", "war", "Race"));

//Passing Tests

var chai = require('chai');
var expect = chai.expect;
//var assert = require('assert');


expect(replace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped")).to.equal("A quick brown fox Leaped over the lazy dog");
expect(replace("Life is a war", "war", "Race")).to.equal("Life is a race");
expect(replace("Let us get back to more Coding", "Coding", "bonfires")).to.equal("Let us get back to more Bonfires");


// SOLUTION- 2 - same just changing charAt() with simple str[0]

function replace_2(str, before, after) {

    var splitSentenceArray = str.split(' ');

    if (before[0] === before[0].toUpperCase()) {
        after = after[0].toUpperCase() + after.slice(1).toLowerCase();
    } else {
        after = after.slice(0).toLowerCase();
    }

    splitSentenceArray.splice(splitSentenceArray.indexOf(before), 1, after);

    return splitSentenceArray.join(' ');
}

console.log(replace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));
console.log(replace_2("Life is a war", "war", "Race"));