/* Problem Statement -
Sum all the prime numbers up to and including the provided number.

    A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.

The provided / given number may not be a prime.*/

function isPrime(num) {
    if(isNaN(num) || !isFinite(num) || num % 1 || num < 2) {
        return false;
    }
   var maxNumberToTest = Math.sqrt(num);
   for (var i = 2; i <= maxNumberToTest; i++) {
       if (num % i === 0) {
           return false;
       }
   } return true;
}

console.log(isPrime(2));

function sumAllPrimes (num) {
    var sumPrimes = 0;
    if(num < 2) {
        return 0;
    } else {
        for(var i = 2; i <= num; i++) {
            if(isPrime(i)) {
                sumPrimes = sumPrimes + i;
            }
        }
    }
    return sumPrimes;
    
}
console.log(sumAllPrimes(10));
