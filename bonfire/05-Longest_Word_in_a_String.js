/*Return the length of the longest word in the provided sentence. Your response should be a number.*/

function findLongestWord(str) {
    str = str.replace(/[^\w]/g, ' ').split(' ');  // First replace all not word group with a space. Then the split() method will split the replaced string into an array separated by the spearator (a single space here).
    var longest = str.reduce(function(a, b){
       return (a.length >= b.length ? a:b);
    });
    return longest.length;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));


//Passing Tests

var chai = require('chai');
var expect = chai.expect;

expect(findLongestWord('The quick brown fox jumped over the lazy dog')).to.be.a('Number');
expect(findLongestWord('The quick brown fox jumped over the lazy dog')).to.equal(6);
expect(findLongestWord('To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.')).to.equal(14);
