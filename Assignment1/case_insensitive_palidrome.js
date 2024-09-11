
/*8. Case Insensitive Palindrome
Modify the palindrome function to be case insensitive, meaning it should ignore upper and 
lower case differences when checking for a palindrome. */

function isCaseInsensitivePalidrome(stringValue){
    const stringToLowerCase = stringValue.toLowerCase();
    const reversedString = stringToLowerCase.split('').reverse().join('');
    return console.log(`Is ${stringValue} a case Insensitive palidrome? :` , reversedString ===stringToLowerCase);
  }
  
  module.exports = isCaseInsensitivePalidrome;