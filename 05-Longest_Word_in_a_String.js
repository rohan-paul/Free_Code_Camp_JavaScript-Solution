/*Return the length of the longest word in the provided sentence. Your response should be a number.*/
// SOLUTION-1
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

// SOLUTION-2

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

// SOLUTION-3
longestWord1 = str => str.split(' ').sort((a, b) => b.length - a.length )[0].length;

// console.log(longestWord1('The quick brown fox jumped over the lazy dog')); // => 6

// In the above solution, I just could not combine the replace() method within the same line ( on 24-June-2018 )


// SOLUTION-4 Using Math.max - beautiful one-liner

// longestWord2 = str => Math.max.apply(null, str.split(' ').map(i => i.length))

// Even shorter - The new spread operator is a shorter way of writing the apply solution to get the maximum of an array:
longestWord2 = s => Math.max(...s.split(' ').map(i => i.length))

console.log(longestWord2('The quick brown fox jumped over the lazy dog'));

/* Warning by Official Doc - However, both spread (...) and apply will either fail or return the wrong result if the array has too many elements, because they try to pass the array elements as function parameters. The reduce solution does not have this problem. */