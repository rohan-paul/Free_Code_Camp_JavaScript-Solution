/*Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays. Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i] . If you are writing your own Chai.js tests, be sure to use a deep equal statement instead of an equal statement when comparing arrays.*/


function largestOfFour(givenArray) {
    var largestNum = [];
    for (var i = 0; i < givenArray.length; i++) {
        var subArray = givenArray[i];
          var largest = Math.max.apply(Math, subArray);
           largestNum.push(largest);

    }
    return largestNum;
}


console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

//Passing Tests

var chai = require('chai');
var expect = chai.expect;
//var should = require('should');
//var should = chai.should;
var assert = require('assert');

expect(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])).to.be.a('array');
//expect(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])).to.equal([ 5, 27, 39, 1001 ]);

expect(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])).to.equal([9,35,97,1000000]);
//assert(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]).should.eql([9,35,97,1000000]));

//expect(("I'm the little tea pot").toTitleCase()).to.equal("I'm The Little Tea Pot");