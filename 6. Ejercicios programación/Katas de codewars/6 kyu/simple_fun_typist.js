/* Instructions: 
John is a typist. He has a habit of typing: he never use the Shift key to switch case, just using only Caps Lock.
Given a string s. Your task is to count how many times the keyboard has been tapped by John.
You can assume that, at the beginning the Caps Lock light is not lit.

Examples "a" return 1 
                "aa" return 2
                "AA" return 3
                "Aa" return 4
*/


const  typist = str => {
  
        // Variables
        let keys = 0;
        let acum = 0;
        let capsLock = false;
         
        for (let i = 0; i < str.length; i++){
          
        let key = str[i]
      
         if (key.charCodeAt() < 97) {  // Es mayúscula
           
           if (capsLock === false){ //  El bloqueo de mayúscula está desactivado
             capsLock = true;
             keys = 2;
             acum += keys;
           }
           
           else {
             keys = 1;
             acum += keys;
           }
           
           
         } else { // Es minúscula
                      
            if (capsLock === false ){
             keys = 1;
             acum += keys;
           }
           
             else {
             capsLock = false;
             keys = 2;
             acum += keys;
               
           }
           
         }
         
        }
            return acum;        
}