
romanToDecimal = str => {

  let decimalResult = 0;

  // the result is now a number, not a string
  let decimal = [1000,  900, 500,  400,  100,  90,  50,  40,   10,  9,   5,  4,   1];
  let roman =    ["M", "CM",  "D",  "CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];

  for ( let i = 0; i < roman.length; i++) {

    // Try to match for the 0-index position of the given string (roman number) argument with the 'roman' array
    while ( str.indexOf(roman[i]) === 0 ) {

      decimalResult +=  decimal[i];

      // After finding the match of the 0-Index position letter from the given string, modify the string by taking out that letter and returning the rest of the letters for the next iteration of the while loop
      str = str.replace(roman[i], '');
    }
  }
  return decimalResult;
}

console.log(romanToDecimal("LXXXVII"));
console.log(romanToDecimal("XLIII"));
console.log(romanToDecimal("XXII"));