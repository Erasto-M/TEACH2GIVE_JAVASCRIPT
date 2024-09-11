/*5. Remove Duplicates from a String
Write a function to remove duplicate characters from a string while preserving the order of the first appearance of each character. */

  function  removeDuplicate(inputString){
    const myStringCharacters= inputString.toLowerCase().split('');
    let myCharactersList = [];
    for(var character of myStringCharacters){
     if(!myCharactersList.includes(character)){
       myCharactersList.push(character);
     }
    }
    return console.log(`${inputString} after removing duplicate is :  ${myCharactersList.join('')}`);
 }

 module.exports = removeDuplicate;