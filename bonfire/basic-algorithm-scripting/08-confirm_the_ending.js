/*Check if a string (first argument) ends with the given target string (second argument).*/

function end(str, target) {
    var targetNumber = target.length;
    if (str.substr(-targetNumber) === target) {
        return true;
    } else {
        return false;
    }
}

console.log(end('Bastian', 'n'));