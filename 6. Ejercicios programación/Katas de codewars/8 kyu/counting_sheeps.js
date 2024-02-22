/* Instructions: https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

Counts sheep present (true) in the array  */


const countSheeps = arr => {
  
        let sheep = 0; // Inicializamos el contador de ovejas en 0

        for (let s in arr){ // Recorrer array de ovejas
                if (arr[s] === true){
                        sheep++; // Añadimos ovejas al contador por cada true 
                }
        }
          
        return sheep;          
}
        
console.log(countSheeps([false, true, false, true, true, true, false, true])); // Devuelve 5
        
        
        