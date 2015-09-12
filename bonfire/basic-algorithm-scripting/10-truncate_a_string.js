/*Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a '...' ending. Note that the three dots at the end add to the string length.*/


function truncate(str, num) {
    if(str.length <= num) {
        return str;
    } else {
        return (str.substr(str, (num-3)) + "...");
    }

}

console.log(truncate('A-tisket a-tasket A green and yellow basket', 11));