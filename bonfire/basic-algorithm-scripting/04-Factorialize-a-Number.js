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

    alert(factorialize(6));