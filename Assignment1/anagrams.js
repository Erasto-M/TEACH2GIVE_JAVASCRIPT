
/*4. Check if Two Strings are Anagrams
Write a function to check if two given strings are anagrams of each other. 
Two strings are anagrams if they contain the same characters in the same frequency but in different orders. */

function areAnagrams(string1,string2){
    const string1Corrected = string1.toLowerCase().split('').sort().join('');
    const string2Corrected = string2.toLowerCase().split('').sort().join('');
    return console.log(`${string1} and ${string2} are anagrams? : `, (string1Corrected === string2Corrected) && 
    (string1Corrected.length === string2Corrected.length))
   }
   module.exports = areAnagrams;
   