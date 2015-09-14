/*Repeat a given string (first argument) n times (second argument).
Return an empty string if n is a negative number.*/

function repeat (str, num) {
    repeatedString = '';
    if (num <= 0) {
        return repeatedString;
    }
    for (var i = 0; i < num; i++ ) {
        repeatedString += str;
    }
    return repeatedString;
}

console.log(repeat('abc', 3));