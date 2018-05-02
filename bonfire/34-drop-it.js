/* Problem Statement -
Drop the elements of an array (first argument), starting from the front, until the predicate (second
argument) returns true.*/

function drop(arr, func) {
    var counter = arr.length;
    for (var i = 0; i < counter; i++) {
        if(func(arr[0])) {
            break;
        } else {
            arr.shift();
        }
    }
    return arr;
}

var result = drop([1, 2, 3, 4, 5], function(n) {
    return n > 4;
});
console.log(result);
