/* Problem Statement -
Create a function that looks through an array (first argument) and returns the first element in the
array that passes a truth test (second argument).*/

function find (arr, func) {
    return arr.filter(func)[0];
}

var result = find([1, 2, 3, 4], function(num) {
    return num % 2 === 0;
});

console.log(result);
