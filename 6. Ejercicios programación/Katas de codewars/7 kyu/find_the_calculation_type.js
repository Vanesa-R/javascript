/* Instructions: https://www.codewars.com/kata/5aca48db188ab3558e0030fa/train/javascript

3 arguments: 2 numbers and result of an unknown operation.
Return de operation was used: "addition", "subtraction", "multiplication", "division".*/



const calcType = (a, b, res) => {
  
        switch(res){
      
            case a + b:
              return "addition";
              break;
            
            case a - b:
              return "subtraction";
              break;
            
            case a * b:
              return "multiplication";
              break;
            
            case a / b:
             return "division";
             break;
            
          default:
            return "No se encuentra operador"
         
        }
}