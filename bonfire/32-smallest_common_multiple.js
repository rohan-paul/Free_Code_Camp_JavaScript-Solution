/* Problem Statement -
 Find the smallest number that is evenly divisible by all numbers in the provided range.
 The range will be an array of two numbers that will not necessarily be in numerical order.
 */

function smallestCommonMultiple(array) {
    // First sort the given array in descending order
    array.sort(function(a, b) {
        return b - a;
    });

    // Create a newArray with the full range of numbers in between the greatest and the smallest numbers of the original given array.

    var newArray = [];
    for (var i = array[0]; i >= array[1]; i--) {
        newArray.push(i);
    }


    var commonMultiple;
    var loopCounter = 1;
    var incrementalMultiplier;

    // Now iterate through the newArray determining lcm of values
    do {
        commonMultiple = newArray[0] * loopCounter * array[1];
        for (incrementalMultiplier = 2; incrementalMultiplier < newArray.length; incrementalMultiplier++) {
            if(commonMultiple % newArray[incrementalMultiplier] !== 0) {
                break;
            }
        }

        loopCounter++;
    } while (incrementalMultiplier < newArray.length);

    return commonMultiple;
}

console.log(smallestCommonMultiple([1, 13]));
