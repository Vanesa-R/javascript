/* Instructions: https://www.codewars.com/kata/55192f4ecd82ff826900089e/train/javascript

Watermelons - divide even numbers.
Two parts consists of an even number. 

*/

const divide = pieces => ((pieces % 2 == 0) && (pieces/2 > 1)) ? true : false;

console.log(divide(4))
console.log(divide(57))



/* 
Sin refactorizar

const divide = pieces => {
        if ((pieces % 2 == 0) && (pices/2 >1)){
                return true:
        } else {
                return false
        }
}

Con el operador ternario puede quedar:

return (pieces % 2 == 0) && (pices/2 >1)) ? true : false


Recuerda que si el código está en una misma línea, en la función flecha podemos omitir las llaves y el return


*/