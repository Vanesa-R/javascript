/* Task
Write a function that returns true if a given point (x,y) is inside of a unit circle (that is, a "normal" circle with a radius of one) centered at the origin (0,0) and returns false if the point is outside.

Input
x: The first coordinate of the given point.
y: The second coordinate of the given point. */



const pointInCircle = (x,y) => {

        return (Math.pow(x, 2) + Math.pow(y, 2) < 1) ? true : false;
        
      }

/* Math.pow eleva el número a una potencia, en este caso, x e y al cuadrado*/