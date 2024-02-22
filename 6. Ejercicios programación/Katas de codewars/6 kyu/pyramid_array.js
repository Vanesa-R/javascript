/* Instructions:Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

Examples: 
pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]*/



function pyramid(n) {
    
        let arr = []; // Crear array
              
        for (let i = 0; i < n; i++){
                   
          let a = []; // Array por cada iteración
          
          for (let j = 0; j <= i; j++){
            
              a.push(1)
            
          }
          
          arr.push(a)
      
        }

        
        return arr
        
      }