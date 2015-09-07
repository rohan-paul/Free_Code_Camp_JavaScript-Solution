/*Return the provided string with the first letter of each word capitalized. For the purpose of this exercise, you should also capitalize connecting words like 'the' and 'of'.*/


String.prototype.toTitleCase = function()
{
    return this.toLowerCase().replace(/^(.)|\s(.)/g,
        function($1) { return $1.toUpperCase(); });
}

/*A) /\s(.)/g  - Captures any single character after a space.

 /^(.) - Captures the very first character of the whole string. i.e. this is input beginning specifier and capture whatever character is exactly after it.

B) $n represents the nth capture group of the regular expression. $1 is the first group from my regular expression, $2 is the second.

C) $1 regular expression property can be used as a function argument, can be used inside the function and is updated internally by the replace method after the function executes.

D) So, in the above, I am turning the entire string into lower case and then each regexp match group to upper case using replace function.
*/

console.log(("I'm of little tea pot").toTitleCase());