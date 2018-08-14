// Title case a string except the words 'in', 'for', 'of', 'and'

titleCase = str => {

  str = str.split(/\s/);

  let finalResult = []

  for (let i = 0; i < str.length; i++) {

    // the 'c' below is each single word from the given string
    let c = str[i].toLowerCase();

    // the single dot - Matches any single character, except newline or line terminator. So here it will match the first letter of the word

    let matchWord = c.match(/./)

    // Uppercase the first character ( like an alternative of charCode(0) )
    // The match() method retrieves the matches when matching a string against a regular expression. If the string matches the expression, it will return an Array containing the entire matched string as the first element, followed by any results captured in parentheses. If there were no matches, null is returned.

    let replaceWord = matchWord[0].toUpperCase();

    // Now replace this lowercase word with the replaced word except those exception
    // The \b metacharacter is used to find a match at the beginning or end of a word.

    if (!c.match(/for\b|and\b|in\b|of\b/)) {
      finalResult.push(c.replace(matchWord, replaceWord))
    } else {
      finalResult.push(c)
    }
  }
  return finalResult.join(' ')
}

console.log(titleCase("i am for paul"));
