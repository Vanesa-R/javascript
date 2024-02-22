/* Instructions: Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
*/


const digital_root = num => {

        while (num >=10){
          
          num = num.toString() // convertimos a String para separar los digitos
                .split("") // Separamos los digitos
                .reduce((a,b) => parseInt(a) + parseInt(b)) // Sumamos los digitos (convertidos de nuevo a int)
          
        }
        
        return num
      
      
        
      }