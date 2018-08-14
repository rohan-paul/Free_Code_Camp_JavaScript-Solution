/* Problem Statement -
 Find the smallest number that is evenly divisible by all numbers in the provided range.
 The range will be an array of two numbers that will not necessarily be in numerical order.
 */

/* Key Point - Given the initial value of the multiplier is set to be the largest value in the range - while traversing the range incrementing the multiplier for each loop, once I find that the multiplier is not perfectly divisible with a particular number, no point in incrementing the number by one or by this current element. I have straightaway increment it, by the largest number in the range.

For example for the case [1, 5], I am stating off the multiplier to be 5. And while traversing, when I find a multiplier is not divisible with a particular number in the range, I will increment the multiplier by 5.

 */
function smallestCommonMultiple(arr) {

    // First sort the given 2-element array in ascending order (largest number at last index position, in this case arr[1])

    arr.sort();

    let lowestCommonMultiple = 0;

    // smallest multiple can not be lesser than the largest number in the range, so lets initialize this accordingly
    let multiple = arr[1];

    // Within this while loop, I will run a for loop to check all the numbers in the range, and only after the range is done, I am resetting the value of lowestCommonMultiple. Till then, its value is remaining at 0 ( at which it was initialized )

    while ( lowestCommonMultiple === 0 ) {

        for (let i = arr[0]; i <= arr[1]; i++) {

            if (multiple % i !== 0 ) break;

            // Then below if loop's code, can only get executed, if the 'break' statement was NEVER executed. So, that means, we have made it all the way to the last value (sortedArr[1]) . That in turn means, that this multiple was perfectly divisible by all values in the range. So this should be the final result of lowestCommonMultiple

            if ( i === arr[1]) {
                lowestCommonMultiple = multiple;
            }
        }

        // After each of the for loop > Increment multiple by the largest number in the range (see above for explanation)
        multiple += arr[1];
    }
    return lowestCommonMultiple;
}

console.log(smallestCommonMultiple([1, 5]));    // should return 60.
console.log(smallestCommonMultiple([5, 1]));    // should return 60.
console.log(smallestCommonMultiple([13, 1]));   // should return 360360.