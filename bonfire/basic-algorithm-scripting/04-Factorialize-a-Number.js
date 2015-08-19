/*Problem Statement - Return the factorial of the provided integer. If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.*/

  function factorialize(num) {
        if (num < 0) {
            return 'undefined';
        }
        var fact = 1;
        for (var i = num; i > 1; i--) {
            fact *= i;
        }
        return fact;
    }

    console.log(factorialize(6));