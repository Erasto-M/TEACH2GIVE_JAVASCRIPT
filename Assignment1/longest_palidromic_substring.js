
/* 3. Find the Longest Palindromic Substring
Write a function to find the longest palindromic substring in a given string. */
var longestPalindromicSubString = function(string) {

    var length = string.length;
    var result = "";
  
    var centeredPalindrome = function(left, right) {
      while (left >= 0 && right < length && string[left] === string[right]) {
        //expand in each direction.
        left--;
        right++;
      }
  
      return string.slice(left + 1, right);
    }; 
  
    for (var i = 0; i < length - 1; i++) {
        var oddPal  = centeredPalindrome(i-1, i + 1);
        var evenPal = centeredPalindrome(i, i+1);
  
      if (oddPal.length > result.length)
        result = oddPal;
      if (evenPal.length > result.length)
        result = evenPal;
    }
  
    return console.log( "The Longest  palindromic Substring is: " + result);
  };

 module.exports = longestPalindromicSubString;