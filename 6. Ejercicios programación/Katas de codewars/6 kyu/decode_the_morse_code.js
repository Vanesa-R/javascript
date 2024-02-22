/* Instructions:
https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript/6148942b47472d002027c769

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.*/


const decodeMorse = (morseCode) => {
  
        let morse = {
        ".-": "A", "-...": "B", "-.-.": "C", "-.." : "D", "." : "E",
        "..-." : "F", "--." : "G", "...." : "H", ".." : "I", ".---" : "J",
        "-.-" : "K", ".-.." : "L", "--" : "M", "-." : "N", "---" : "O",
        ".--." : "P", "--.-" : "Q", ".-." : "R", "..." : "S", "-" : "T",
        "..-" : "U", "...-" : "V", ".--" : "W", "-..-" : "X", "-.--" : "Y", "--.." : "Z", "":" ",
        "...---..." : "SOS", "-.-.--" : "!", ".-.-.-" : "."}
        
          
            return morseCode.split(" ").map(char => {
              
              for (let letter in morse){
                if (char === letter){
                  return morse[letter]
                }
              }
            }).join("").replace(/ {2,}/g,' ').trim()
      
      }
        