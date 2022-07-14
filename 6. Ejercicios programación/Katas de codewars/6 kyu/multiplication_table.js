/* Instructions:
Your task, is to create NxN multiplication table, of size provided in parameter.

For example, when given size is 3 the return value should be: [[1,2,3],[2,4,6],[3,6,9]]*/


multiplicationTable = function(size) {
  
        let arr = [];  // Array para devolver el resultado
        
        for (let i = 1; i <= size; i++){ // Primera iteración
          
          let a = [] // Creamos los arrays que van a almacenarse en arr
          
          for (let j = 1; j <= size; j++){ // Segunda iteración para multiplicar i * j
          
            a.push(i*j) // Almacenamos los resultados en a
            
          }
          
          arr.push(a) // Almacenamos los arrays en arr
      
        }
        
       return arr
        
      }