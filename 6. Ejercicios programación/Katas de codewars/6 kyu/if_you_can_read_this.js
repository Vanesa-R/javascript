/* Instructions:
You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

Input: If, you can read?

Output: India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?*/


const to_nato = (words) => {
  
        let nato = {
          "A": "Alfa",  "B": "Bravo",   "C": "Charlie",
          "D": "Delta",  "E": "Echo",    "F": "Foxtrot",
          "G": "Golf",   "H": "Hotel",   "I": "India",
          "J": "Juliett","K": "Kilo",    "L": "Lima",
          "M": "Mike",   "N": "November","O": "Oscar",
          "P": "Papa",   "Q": "Quebec",  "R": "Romeo",
          "S": "Sierra", "T": "Tango",   "U": "Uniform",
          "V": "Victor", "W": "Whiskey", "X": "Xray",
          "Y": "Yankee", "Z": "Zulu", 
          "," : ",", "." : ".", "!" : "!", "?": "?"
        }
        
        
         return words.toUpperCase().split("").map(char => {
          
           
           for (let letter in nato){
             if (char === letter){
               return nato[letter]
             }
           }
           
         }).join(" ").replace(/ {2,}/g,' ').trim()
        
      }