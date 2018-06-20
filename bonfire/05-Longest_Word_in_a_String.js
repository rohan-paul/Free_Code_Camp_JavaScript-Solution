/*Return the length of the longest word in the provided sentence. Your response should be a number.*/

function findLongestWord(str) {

  // First replace all no-word group with a single space. Now given, I have a string of words separated by single-space. So I invoke the split() method which will split the replaced string into an array separated by the spearator (a single space here). If I don’t add the space as the separator to the split() method, I will have the output as an array of single letters for the entire string

    var strArray = str.replace(/[^\w]/g, ' ').split(' ');

    var longest = strArray.reduce((a, b) => {
       return (a.length >= b.length ? a : b);
    });

    return longest.length;
}

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));


//Passing Tests

var chai = require('chai');
var expect = chai.expect;

expect(findLongestWord('The quick brown fox jumped over the lazy dog')).to.be.a('Number');
expect(findLongestWord('The quick brown fox jumped over the lazy dog')).to.equal(6);
expect(findLongestWord('To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.')).to.equal(14);

// Alternative solution without using reduce() method.

function findLongestWord(str) {
  var strArray = str.replace(/[^\w]/g, ' ').split(' ');

  var longestWord = 0;
  for (i = 0; i < strArray.length; i++) {
    if (strArray[i].length > longestWord) {
      longestWord = strArray[i].length;
    }
  }
  return longestWord;
}

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // => 6

longestWord1 = str => {

  let cleanStrArr = str.replace(/[^\W]/g, ' ').split(' ');

  let sortedStrArr = cleanStrArr.sort((a, b) => b.length - a.length )

  return sortedStrArr[0].length;

}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // => 6