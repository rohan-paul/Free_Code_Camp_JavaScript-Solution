/* Problem Statement -
Create a function that sums two arguments together. If only one argument is provided, return a
function that expects one additional argument and will return the sum.
    For example, add(2, 3) should return 5, and add(2) should return a function that is waiting for an
    argument so that var sum2And = add(2); return sum2And(3); // 5
If either argument isn't a valid number, return undefined.*/

function add() {
    for(var i = 0; i < arguments.length; i++) {
        if(typeof arguments[i] !== 'number') {
            return undefined;
        }
    }
    var arg1 = arguments[0];
    if(arguments.length === 1) {
        return function(arg2) {
            for(var i = 0; i < arguments.length; i++) {
                if(typeof arguments[i] !== 'number') {
                    return undefined
                }
            }
            return arg1 + arg2;
        };
    } else {
        return arg1 + arguments[1];
    }
}

console.log(add(2, 3));