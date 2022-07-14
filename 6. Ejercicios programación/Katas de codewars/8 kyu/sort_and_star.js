/* You will be given a vector of strings. 
You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) 
and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

*/



function twoSort(s) {
 
       s = s.sort(); // Ordenar el string
      
        return s[0] // Coger la primera palabra del string
          .split("") // Dividimos el String en substrings
          .join("***") // Creamos un nuevo string contatenandolo con la separación "***"

      }
      
      console.log(twoSort(["bitcoin", "take", "over", "the", "world"]));