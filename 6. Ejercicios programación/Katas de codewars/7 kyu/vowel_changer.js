/* Instructions: Create a function that changes all the vowels (excluding y) in a string,
and changes them all to the same vowel. The first parameter of the function is the string,
and the second is the vowel that all the vowels in the string are being changed to.*/


const vowelChange = (str, vow) => {
  
        return str.replace(/[aeiou]/g,  vow)
        
}

// Método replace reemplaza las vocales por la vocal pasada por argumento
// La expresión regular [aeiou] incluye a todas las vocales.