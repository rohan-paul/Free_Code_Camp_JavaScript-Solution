/*
Problem - Translate the provided string to pig latin. Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay". If a word begins with a vowel you just add "way" to the end.*/

function pigLatin(str) {

    str=str.toLowerCase();
    var n =str.search(/[aeiuo]/);
    switch (n){
        case 0: str = str+"way"; break;
        case -1: str = str+"ay"; break;
        default :
            //str= str.substr(n)+str.substr(0,n)+"ay";
            str=str.replace(/([^aeiou]*)([aeiou])(\w+)/, "$2$3$1ay");
            break;
    }
    return str;

}

console.log(pigLatin("para"));