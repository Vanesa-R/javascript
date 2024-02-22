/* Instructions:
Generate a valid randomly generated hexadecimal color string. Assume all of them always have 6 digits.

Valid Output
#ffffff
#FfFfFf
#25a403
#000001

*/


const generateColor = str => {
  
        let hex = Math.floor(Math.random()*16777215).toString(16);
        
        return `#${hex}`
      
      }