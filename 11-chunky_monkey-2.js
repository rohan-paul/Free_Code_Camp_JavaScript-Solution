/* SOLUTION-1  PROBLEM - Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array

Create an empty array to hold the chunks called chunked_arr
Iterate through the given array, for each element in the given array
   Pull out the last element of the chunked_arr (a chunk)
   If the last element does not exist or its size is equal to size
       Push a new chunk into the chunked_arr with the current element
   Else add the current element into the chunk */

chunk = (arr, chunkSize) => {
  let chunkedArr = []

  // Now traverse the array, and for each element, check the status of the current chunk. which is the nested inner-array in chunkArr
  // Note, current chunk will also be the last element (i.e. the length - 1 element) of the chunkedArr. As I am building it from left to right.
  // If current chunk is full build the next chunk or else push next element this chunk

  for (let i = 0; i < arr.length; i++) {
    // And this last element will be recalculated for each iteration of the given array
    const lastChunk = chunkedArr[chunkedArr.length - 1]

    // for the start of the array there will be no lastChunk, as I am starting with an empty array
    if (!lastChunk || lastChunk.length === chunkSize) {
      chunkedArr.push([arr[i]])
    } else {
      lastChunk.push(arr[i])
    }
  }
  return chunkedArr
}

// console.log(chunk([1, 2, 3, 4, 5], 2))

/* VERY IMP - Note, the line < chunkedArr.push([arr[i]]) >  I am wrapping arr[i] inside an array literal so, that takes cares of pushing the next element as a new inner nested array in this 2-D array structure.

BUT, for the line < lastChunk.push(arr[i]) > I am NOT doing that, because here, I am not creating a new Array, instead pushing an element to an existing array. So the below is how it works ( a mechanism of creating on-the-fly 2-D array )

let arr = [1, 2, 3]
arr.push(4)
console.log(arr) // =>  1, 2, 3, 4 ]

let arr1 = [1, 2, 3]
arr1.push([4])
console.log(arr1)  // => [ 1, 2, 3, [ 4 ] ]
*/

/* SOLUTION-2 - This one for me, makes the solution more intuitive -

Create an empty array to hold the chunks called chunked_arr.
Calculate the number of chunks
Loop over the number of chunks
Cut the array with given size and push into the chunked_arr. */

chunk_2 = (arr, chunkSize) => {
  let chunkedArr = []

  // Count the number of chunks. i.e. the number of inner nested arrays, ie. the number of elements of the chunkedArr

  let numOfChunks = Math.ceil(arr.length / chunkSize)

  for (let i = 0; i < numOfChunks; i++) {
    chunkedArr.push(arr.splice(0, chunkSize))
    // If I had used above slice() instead of splice() - then would get the output - [ [ 1, 2 ], [ 1, 2 ], [ 1, 2 ] ]
    // Because, the slice() is non-mutative and so the original array length will never be reduced
  }
  return chunkedArr
}

console.log(chunk_2([1, 2, 3, 4, 5], 2)) // [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]

/* The general syntax of splice
let arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

Return value - An array containing the deleted elements.
 */

// SOLUTION-3 - EXACT SAME AS ABOVE, BUT USING ES-6 SYNTAX OF CREATING THE ARRAY with Array.from and then filling up this created array
// with sliced array from the original

chunk_3 = (arr, chunkSize) => {
  return Array.from({ length: Math.ceil(arr.length / chunkSize) }, () => {
    return arr.splice(0, chunkSize)
  })
}

console.log(chunk_3([1, 2, 3, 4, 5], 2))

// SOLUTION-3-USING slice() instead of splice()
chunk_3_slice = (arr, chunkSize) => {
  return Array.from(
    { length: Math.ceil(arr.length / chunkSize) },
    (_elem, index) => {
      return arr.slice(index * chunkSize, index * chunkSize + chunkSize)
    },
  )
}

console.log(chunk_3_slice([1, 2, 3, 4, 5], 2))

/* EXPLANATION OF THE ABOVE SLICE METHOD - THIS IS ALSO A BEAUTIFUL EXAMPLE IMPLEMENTING THE FUNCTIONALITY OF SPLICE() METHOD WITH SLICE() METHOD

index will take values from 0, 1, 2, 3 .... so for by case of ([1, 2, 3, 4, 5], 2)

// I start with by slicing and returning the sliced-arr for the first 2 elements which are index-0 and index-1. So I start at index-0 and end just before index-2
1st arr.slice(0 * 2, 0*2 + 2)

// I alredy have picked up the first 2 elements, so now, I want to pick up the next 2 (i.e. the third and fourth element) representedby index-2 and index-3 . So I start at index-2 and end just before index-4
2nd arr.slice(1*2, 1*2+2)

// I alredy have picked up the first 4 elements, so now, I want to pick up the next 2 (i.e. the fifth and sixth element) representedby index-4 and index-5. So I start at index-4 and end just before index-6
3rd arr.slice(2*2, 2*2 + 2)


Note on Array.from() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from


// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`

Array.from({length: 5}, (v, i) => i);  // => [0, 1, 2, 3, 4]

Paul - So the above function just returns the index value (represented by the second argument to the callback 'i' for each element of the newly creted array with Array.from() - So effectively this function turns the newly created array where all element are initialized to be 'undefined' to take up a real actual value which in this case is the index value

So, in my above function, I am feeling up each of the elements of that Array ( that I created with Array.from ) with a new array, which is being sliced from the arragy given in the top level function argument.

 */

/* SOLUTION-4 - Create an empty array to hold the chunks called chunked_arr.
Declare a variable called index started at 0
While index is less than length of the given array
   Slice the array from index to size + index and push it into the chunked_arr
   Increment the index with size */

chunk_4 = (arr, chunkSize) => {
  let chunkedArr = []
  jumpIndex = 0

  while (jumpIndex < arr.length) {
    chunkedArr.push(arr.slice(jumpIndex, jumpIndex + chunkSize))
    jumpIndex += chunkSize
  }

  return chunkedArr
}

// console.log(chunk_4([1, 2, 3, 4, 5], 2))
