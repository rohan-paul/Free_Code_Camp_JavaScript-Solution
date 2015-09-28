/*Problem Statement - Reverse the provided string.You may need to turn the string into an array before you can reverse it. Your result must be a string.*/


function reverseStr(str) {
    var reverse = '';
    for(var i = str.length - 1; i >= 0; i--)
    reverse += str[i];
    return reverse;
}

console.log(reverseStr("Paul"));

//Passing Tests

var chai = require('chai');
var expect = chai.expect;

expect(reverseStr('hello')).to.be.a('String');
expect(reverseStr('hello')).to.equal('olleh');
expect(reverseStr('Hi from planet Earth')).to.equal('htraE tenalp morf iH');