/*
Problem -
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.*/

function sumAll(arr) {
    var MaxNumberFromOriginalArray = function (arr) {
        return Math.max.apply(null, arr);
    };

    var MinNumberFromOriginalArray = function (arr) {
        return Math.min.apply(null, arr);
    };

    // If I don't use 

    var secondMaxNumber = MaxNumberFromOriginalArray(arr) - 1;
    var secondMinNumber = MinNumberFromOriginalArray(arr) + 1;

    // Now to the original array I have to push all the other numbers in between the max and min numbers, so I have the final array containing the entire series of numbers from max to min.

    for (var i = secondMaxNumber; i >= secondMinNumber; i--) {
        arr.push(i);
    }

    //And now just sumup all the individual elements of the numbers.

    var sum = arr.reduce(function (currentValue, previousValue) {
        return currentValue + previousValue;
    });

    return (sum);
}

console.log(sumAll([1,4]));