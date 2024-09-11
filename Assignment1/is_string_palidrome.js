/*
 1. Check if a String is a Palindrome
Write a function to determine if a given string is a palindrome. 
A palindrome is a string that reads the same forward and backward (ignoring spaces, punctuation, and case).
 */


function isPalidrome(value){
    const valueLowerCase = String(value).toLowerCase().replace(/[^a-z0-9]/g, '')
    const reversedValue = valueLowerCase.split('').reverse().join('');
   return  console.log(`Is palidrome? :  ` , valueLowerCase === reversedValue);
}


module.exports = isPalidrome;