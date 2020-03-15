// Problem - Compare two arrays and return a new array with any items not found in both of the original arrays. (i.e. elements that are in one array but not the other)

// My note - A) Find indexOf of all elements, that are in array1 but not in array2 > push all such elements to a newArray. Do the same in the opposite direction.

function diffArrays(array1, array2) {
  var newArray = []
  for (var i = 0; i < array1.length; i++) {
    if (array2.indexOf(array1[i]) < 0) {
      newArray.push(array1[i])
    }
  }

  for (var i = 0; i < array2.length; i++) {
    if (array1.indexOf(array2[i]) < 0) {
      newArray.push(array2[i])
    }
  }
  return newArray
}

console.log(diffArrays([1, 2, 3, 5], [1, 2, 3, 4, 5])) // [ 4 ]

//Passing Tests

var chai = require("chai")
var expect = chai.expect
var assert = require("assert")

expect(diffArrays([1, 2, 3, 5], [1, 2, 3, 4, 5])).to.be.a("array")
assert.deepEqual(
  diffArrays([1, 2, 3, 5], [1, 2, 3, 4, 5]),
  [4],
  "arrays with only 1 difference difference",
)
assert.deepEqual(
  diffArrays(["abcd", "efgh", "man", "woman"], ["boy", "Girl", "man", "woman"]),
  ["abcd", "efgh", "boy", "Girl"],
  "arrays with two difference",
)
assert.deepEqual(
  diffArrays(
    ["abcd", "efgh", "man", "woman"],
    ["abcd", "efgh", "man", "woman"],
  ),
  [],
  "arrays with no difference",
)
assert.deepEqual(
  diffArrays([1, 2, 3, 5], [1, 2, 3, 4, 5]),
  [4],
  "arrays with numbers",
)
assert.deepEqual(
  diffArrays([1, "calf", 3, "piglet"], [1, "calf", 3, 4]),
  ["piglet", 4],
  "arrays with numbers and strings",
)
assert.deepEqual(
  diffArrays([], [1, "calf", 3, "piglet"]),
  [1, "calf", 3, "piglet"],
  "empty array",
)
