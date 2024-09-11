/*1. Check if a String is a Palindrome */
const isPalidrome = require('./is_string_palidrome');
isPalidrome('A man, A plan, A canal, panama');
isPalidrome(190);
isPalidrome('Was it a car or a cat i saw ?');
isPalidrome('Hello, World!');


/*2. Reverse a String */
const reverseString = require('./reverse_string')
reverseString(200);
reverseString("My School"); 

/* 3. Find the Longest Palindromic Substring */
const longestPalindromicSubString = require('./longest_palidromic_substring')
longestPalindromicSubString('babad');
longestPalindromicSubString('cbbd');

/*4. Check if Two Strings are Anagrams */
const areAnagrams = require('./anagrams');
areAnagrams("listen", "silent");
areAnagrams('Hello', 'World');
areAnagrams('geeksforgeeks', 'forgeeksgeeks');

/*5. Remove Duplicates from a String */
const  removeDuplicate = require('./remove_duplicates')
removeDuplicate("programming");
removeDuplicate('Hello World');
removeDuplicate("aaaaa");
removeDuplicate("abcd");
removeDuplicate('aabbcc');

/*6. Count Palindromes in a String */
const  countPalidromes = require('./count_palidromes');
countPalidromes("racecar");
countPalidromes('aabb');
countPalidromes('mum');

/*7. Longest Common Prefix */
const longestCommonPrefix = require('./longest_common_prefix');
longestCommonPrefix(['Welcome', 'Well', 'Weldone']);
longestCommonPrefix(['flower','flow','floght']);
longestCommonPrefix(['prefix','prefixes','preform']);

/*8. Case Insensitive Palindrome */
const isCaseInsensitivePalidrome = require('./case_insensitive_palidrome')
isCaseInsensitivePalidrome("MADAm");
isCaseInsensitivePalidrome('Racecar');
isCaseInsensitivePalidrome('Hello');
isCaseInsensitivePalidrome('Aba');
isCaseInsensitivePalidrome('Palidrome');

//this is  teh end











