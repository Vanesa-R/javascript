/*
Jenny has written a function that returns a greeting for a user. 
However, she's in love with Johnny, and would like to greet him slightly different. 
She added a special case to her function, but she made a mistake.

This is her function:

function greet(name){
  return "Hello, " + name + "!";
  if(name === "Johnny")
    return "Hello, my love!";
}

CAN YOU HELP HER?

 */

const greet = (name) => {

        return (name === "Johnny") ? `Hello, my love!` : `Hello, ${name}!`;
}

      
console.log(greet("Johnny"))
console.log(greet("Jim"))