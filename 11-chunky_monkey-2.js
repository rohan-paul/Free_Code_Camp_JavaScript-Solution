/* SOLUTION-1  PROBLEM - Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array

Create an empty array to hold the chunks called chunked_arr
Iterate through the given array, for each element in the given array
   Pull out the last element of the chunked_arr (a chunk)
   If the last element does not exist or its size is equal to size
       Push a new chunk into the chunked_arr with the current element
   Else add the current element into the chunk */

chunk = (arr, chunkSize) => {

    let chunkedArr = []

    // Now traverse the array, and for each element, check the status of the current chunk.
    // Note, current chunk will also be the last element of the chunkedArr. As I am building it from left to right
    // If current chunk is full build the next chunk or else push next element this chunk

    for (let i = 0; i < arr.length; i++) {

        // And this last element will be recalculated for each iteration of the given array
        const lastChunk = chunkedArr[chunkedArr.length - 1]

        // for the start of the array there will be no lastChunk, as I am starting with an empty array
        if (!lastChunk || lastChunk.length === chunkSize) {
            chunkedArr.push([arr[i]]);
        } else {
            lastChunk.push(arr[i]);
        }
    }
    return chunkedArr;
}

console.log(chunk([1, 2, 3, 4, 5], 2))


/* VERY IMP - Note, the line < chunkedArr.push([arr[i]]) >  I am wrapping arr[i] inside an array literal so, that takes cares of pushing the next element as a new inner nested array in this 2-D array structure.

BUT, for the line < lastChunk.push(arr[i]) > I am NOT doing that, because here, I am not creating a new Array, instead pushing an element to an existing array. So the below is how it works ( a mechanism of creating on-the-fly 2-D array )

let arr = [1, 2, 3]
arr.push(4)
console.log(arr) // =>  1, 2, 3, 4 ]

let arr1 = [1, 2, 3]
arr1.push([4])
console.log(arr1)  // => [ 1, 2, 3, [ 4 ] ]
*/

/* SOLUTION-2 - Create an empty array to hold the chunks called chunked_arr.
Calculate the number of chunks
Loop over the number of chunks
Cut the array with given size and push into the chunked_arr. */

chunk_2 = (arr, chunkSize) => {

    let chunkedArr = []

    // Count the number of chunks. i.e. the number of inner nested arrays, ie. the number of elements of the chunkedArr

    let numOfChunks = Math.ceil(arr.length / chunkSize);

    for (let i = 0; i < numOfChunks; i++) {
        chunkedArr.push(arr.splice(0, chunkSize));
    }
    return chunkedArr
}

console.log(chunk_2([1, 2, 3, 4, 5], 2))

/* SOLUTION-3 - Create an empty array to hold the chunks called chunked_arr.
Declare a variable called index started at 0
While index is less than length of the given array
   Slice the array from index to size + index and push it into the chunked_arr
   Increment the index with size */

chunk_3 = (arr, chunkSize) => {

    let chunkedArr = []
    jumpIndex = 0;

    while (jumpIndex < arr.length) {
        chunkedArr.push(arr.slice(jumpIndex, (jumpIndex + chunkSize)))
        jumpIndex += chunkSize
    }

    return chunkedArr;
}

console.log(chunk_3([1, 2, 3, 4, 5], 2))