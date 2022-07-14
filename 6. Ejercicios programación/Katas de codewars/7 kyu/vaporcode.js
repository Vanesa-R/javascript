/* Instructions: https://cutt.ly/pWWP7rQ

letters into uppercase
adds 2 spaces between letter or special character */


const vaporcode = str =>  str.toUpperCase().replace(/ /g, "").split("").join("  ");
        


/* 
const vaporcode = str =>  {
        return str.toUpperCase() // mayúsculas
                .replace(/ /g, "") // reemplaza espacios
                .split("") // String 
                .join("  "); // Añadiendo dos espacios entre letras
}


*/