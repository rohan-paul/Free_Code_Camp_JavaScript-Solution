/*Return the length of the longest word in the provided sentence. Your response should be a number.*/

function findLongestWord(str) {
    str = str.replace(/[^\w]/g, ' ').split(' ');
    var longest = str.reduce(function(a, b){
       return (a.length >= b.length ? a:b);
    });
    return longest.length;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));