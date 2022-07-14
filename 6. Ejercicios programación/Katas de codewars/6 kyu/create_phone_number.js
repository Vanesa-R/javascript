/* Instructions:
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"*/


const createPhoneNumber = arr => {
  
        let prefix = arr.join("").substring(0, 3)
        let num = arr.join("").substring(3, 6)

        return prefix.replace(prefix, `(${prefix}) `) + num.replace(num, `${num}-`) + arr.join("").substring(6, arr.lenght)
 
}

/* Devolvemos prefix entre () y un espacio en blanco
Incluimos al final de num -
Devolvemos el resto del array*/