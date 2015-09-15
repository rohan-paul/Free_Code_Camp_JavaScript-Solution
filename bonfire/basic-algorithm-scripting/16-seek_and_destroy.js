/*You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.*/

function destroyer(arr) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j= 0; j < arguments.length; j++) {
            if(arr[i] === arguments[j]) {
                arr.splice(i, 1);
            }
        }
    }
    return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

//Code explanation - The arguments.length property provides the number of arguments actually passed to a function. This can be more or less than the defined parameter count. So with the second for loop, I am targeting each of the consecutive argument passed to the destroyer function and then comparing if the original array's element is equal to that value of the second or consecutive arguments. Noting that the second for loop is run for each of the i values of the first for loop.


// Passing Tests

var assert = require('assert');


assert.deepEqual(destroyer([1, 2, 3, 1, 2, 3], 2, 3), [1, 1], 'should remove second and other argument(s) values from an array');
assert.deepEqual(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3), [1, 5, 1], 'should remove second and other argument(s) values from an array');