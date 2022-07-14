/* Instructions:
You want to create secret messages which can be deciphered by the Decipher this! kata. 
Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter*/


const encryptThis = str => {

        return str.split(" ").map( word => {
              
                switch (word.length) {
              
                        case 1: // Si la palabra tiene un caracter
                                return word[0].charCodeAt()
                                break;
              
                        case 2: // Si tiene dos caracteres
                                return word[0].charCodeAt() + word[1]
                                break;
              
                        default: // Si tiene más de dos caracteres
                                return word[0].charCodeAt() + word.slice(word.length -1) + word.substring(2, word.length - 1) + word[1]
                }
          
        }).join(" ")
        
        
        
      }