/*6. Count Palindromes in a String
Write a function to count how many distinct palindromes are in a given string. 
A palindrome is considered distinct based on its start and end position in the string. */

function countPalidromes(stringValue){
    let palidromes = [];  
  
    function palidromesFromCenter(left, right){
      while(left >= 0 && right<stringValue.length && stringValue[left]=== stringValue[right]){
        let palidrome = stringValue.slice(left, right+1);
        if(!palidromes.includes(palidrome)){
          palidromes.push(palidrome);
        }
        left--;
        right++;
      }
    }
    //iterate on the string
    for(let i =0; i<stringValue.length; i++){
      palidromesFromCenter(i,i);
      palidromesFromCenter(i,i+1);
    }
    console.log(`The plaidromes in ${stringValue} are:  ${palidromes.join(',')}`);
     console.log(`The number of palidromes in ${stringValue} is : ${palidromes.length}`);
  }
  
 module.exports = countPalidromes;