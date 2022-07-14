/*
Instructions: https://www.codewars.com/kata/5aa736a455f906981800360d/train/javascript

Each animal is bringing one dish.
The dish must start and end with the same letters as the animal's name. */


const feast = (beast, dish) => {
  
        if ((beast.length > 1) && (dish.length > 1)){

                let beastEnd = beast.length -1;
                let dishEnd = dish.length -1;
          
                return ((beast[0] === dish[0]) && (beast[beastEnd] === dish[dishEnd])) ? true : false;
        
        }      
}
      
console.log(feast("chickadee", "chocolate cake")) // true
console.log(feast("brown bear", "bear claw")) // false
      