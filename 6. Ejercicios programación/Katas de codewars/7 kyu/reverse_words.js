/* Instructions: Complete the function that accepts a string parameter, and reverses each word in the string. 
All spaces in the string should be retained.

Example
"This is an example!" ==> "sihT si na !elpmaxe" */


const reverseWords = str =>{
  
        return str.split(" ")
                .map(word => {
                       return word.split("")
                                        .reverse()
                                        .join("")
                }).join(" ")
        
}