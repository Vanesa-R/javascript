/* Instructions:
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.*/


const removeDuplicateWords  = s => {

        let arr = new Set(s.split(" "));
        return [... arr].join(" ")
}


/*  Creamos un objeto Set ( arr) que tiene un argumento (el string convertido en array mediante split())

Los objetos Set son colecciones de valores.
Se puede iterar sus elementos en el orden de su inserción.
Un valor en un Set sólo puede estar una vez

Devolvemos el contenido del arr utilizando join para convertirlo de nuevo en un string.
*/