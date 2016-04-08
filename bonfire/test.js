num="11222333";
console.log(num);
// This regex captures the last 3 digits as capture group #2
// and all preceding digits as capture group #1
re = /(\d+)(\d{3})/;

// re.test(num);

// This replace call replaces the match of the regex (which happens
// to match everything) with the first capture group ($1) followed by
// a comma, followed by the second capture group ($2)
var replacedNum = num.replace(re, "$1,$2");

console.log(replacedNum);
