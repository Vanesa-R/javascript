/* Instructions:
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"*/


const solution = (str) => {
        return str.split("").map(el => {
          
          return (el.match(/[A-Z]/)) ? ` ${el}` : el 
          
        }).join("")
        
}


/* Creamos un array con split
lo recorremos con map
y retornamos en el caso de que haya una coincidencia con la expresión regular
el elemento con un espacio en blanco antes, o el elemento
Finalmente con join obtenemos el string*/