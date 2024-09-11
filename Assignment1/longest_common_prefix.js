/*7. Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings.
 If there is no common prefix, return an empty string. */

function longestCommonPrefix(stringsArray){
    if(!stringsArray[0] || stringsArray.length ===1) return stringsArray[0] || '';
    let i = 0;
    while(stringsArray.every((string)=>string[i] === stringsArray[0][i])){
     i++;
    }
     return console.log(`The Longest common prefix is : ${stringsArray[0].substr(0,i)}`);
   }
   
   module.exports = longestCommonPrefix;