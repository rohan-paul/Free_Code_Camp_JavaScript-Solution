/* Problem Statement-
Flatten a nested array. You must account for varying levels of nesting.*/

function steamroller(arr) {
    var flattenedArray = [];

    function flatten(arg) {
        if(!Array.isArray(arg)) {
            flattenedArray.push(arg); // i.e. if the argument is not an array itself, then just push the argument to the flattenedArray, so this argument becomes an element of the final flattened array.
        } else { // i.e. when the 'arg' is itself an arrary
          for (var a in arg) {
                flatten(arg[a]); // Recursively applying flatten() function to each element of 'arg' which is an array
            }
        }
    }

    arr.forEach(flatten); // flatten() function is called as a 'callback' function to forEach to apply flatten() to each element of the original given array
    return flattenedArray;
}



console.log(steamroller([1, [2], [3, [[4, [5]]]]]));