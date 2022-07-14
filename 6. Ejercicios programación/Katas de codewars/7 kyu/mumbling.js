/* Instructions: 
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy" */



const accum = str => {
  
        return str.split("") 
                .map((char, index) =>{ 
                 return char.toUpperCase() + char.repeat(index).toLowerCase()
          
        }).join("-")
        
}

/* split("") --> Array
map() --> recorre array con char y index
toUpperCase() --> mayúscula a las letras
repeat() --> repetimos letras por cada iteración y por último ponemos estas en minúscula

Con join("-") convertimos el array en string con - como separador
*/