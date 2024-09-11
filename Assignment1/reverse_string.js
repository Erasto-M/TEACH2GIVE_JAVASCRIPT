/*2. Reverse a String
Write a function to reverse a given string. */

function reverseString(inputValue){
    return console.log(`${inputValue} reversed is: ${String(inputValue).split('').reverse().join('')}`);
   
  }
 
  module.exports = reverseString;