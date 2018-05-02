function factorial (num) {
  let result = 1;
  for (var i = 0; i < num; i++) {
    result = result * (num - i);
  }
  return result;
}

function factorialRecurse(num) {
    return (num !== 1) ? num * factorial(num - 1) : 1;  
}

console.time("Loop Solution");
factorial(1000);
console.timeEnd("Loop Solution");

console.log("***********");

console.time("Recursive Solution");
factorialRecurse(1000);
console.timeEnd("Recursive Solution");

/*output of above code 

Loop Solution: 0.095ms
***********
Recursive Solution: 0.043ms

*/