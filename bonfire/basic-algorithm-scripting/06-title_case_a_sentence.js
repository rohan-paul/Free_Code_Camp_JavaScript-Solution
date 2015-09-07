/*Return the provided string with the first letter of each word capitalized. For the purpose of this exercise, you should also capitalize connecting words like 'the' and 'of'.*/


String.prototype.toTitleCase = function()
{
    return this.toLowerCase().replace(/^(.)|\s(.)/g,
        function($1) { return $1.toUpperCase(); });
}

console.log(("I'm of little tea pot").toTitleCase());