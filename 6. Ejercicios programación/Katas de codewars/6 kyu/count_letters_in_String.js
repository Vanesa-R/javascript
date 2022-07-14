/* Instructions: In this kata, you've to count lowercase letters in a given string
and return the letter count in a hash with 'letter' as key and count as 'value'. 
The key must be 'symbol' instead of string in Ruby and 'char' instead of string in Crystal.
*/

const count = str => {  
  
  const sum = {};
 
   str.split('').map(char => {
     sum[char] ? sum[char]++ : sum[char] = 1;
   });
 
   return sum;
 }