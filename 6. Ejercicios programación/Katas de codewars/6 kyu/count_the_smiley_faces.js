/* Instructions: Given an array as an argument complete the function that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
*/

const countSmileys = arr => {
  
        let count = 0;      
        
        for (let smiley in arr){
          (arr[smiley].match(/[:;][-~]?[D\)]/g,)) ? count++ : count;
        }
        return count
      }