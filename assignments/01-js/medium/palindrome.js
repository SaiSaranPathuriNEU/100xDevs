/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  //let startTime = Date.now();
  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] === str[right]) {
      left++;
      right--;
    } else return false;
  }

  return true;
  //let endTime = Date.now();
  //console.log("Time for inbuilt: "+elapsedTime);

  // let startTime = Date.now();
  // let fstr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // let revstr = fstr.split('').reverse().join('');
  // let endTime = Date.now();

  // let elapsedTime = endTime - startTime;

  // console.log('Time for inbuilt: ' + elapsedTime);

  // if (fstr == revstr) return true;

  // return false;
}

module.exports = isPalindrome;

// The regular expression /[^a-zA-Z0-9]/g is used in JavaScript to match and remove all characters that are not alphanumeric from a string. Here's an explanation of each part:

// /: This forward slash is used to indicate the beginning of the regular expression pattern.
// [^a-zA-Z0-9]: This part of the regular expression defines a character class denoted by square brackets [...]. Inside the character class:
// ^: The caret symbol ^ is used as a negation operator within the character class, meaning it matches any character that is NOT in the following set.
// a-zA-Z0-9: This part specifies the set of characters we want to keep, which are lowercase letters a to z, uppercase letters A to Z, and digits 0 to 9. These are alphanumeric characters.
// So, [^a-zA-Z0-9] matches any character that is not an alphanumeric character.

// /: This forward slash is used to indicate the end of the regular expression pattern.
// g: This flag stands for "global" and is used with regular expressions in JavaScript to indicate that the pattern should be applied globally throughout the string, not just for the first match.
// When you use this regular expression with the replace method, it replaces all non-alphanumeric characters in the string with an empty string "", effectively removing them from the string.
