/* Instructions: https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript/

how many years ago the father was twice as old as his son
or in how many years he will be twice as old

*/


const twiceAsOld = (dadYearsOld, sonYearsOld) => {

        let yearsAgo = dadYearsOld - (sonYearsOld *2);  
        let inHow = Math.abs(yearsAgo) 
      
        return (yearsAgo < 1) ? inHow : yearsAgo
                
}

/* Doblamos la edad del hijo y la restamos al padre. Ejemplo:
                36 - (7 *2) //  Devuelve 22


        Con Math.abs obtenemos el valor absoluto de un número. Ejemplo:
                55 - (30 * 2) // Devuelve -5. 

                Si obtenemos el número absoluto de esa variable, nos dará como resultado 5 */