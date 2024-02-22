/* Instructions: https://cutt.ly/lWWhIe2

true if string passed in ends with the ending

*/

/* My first solution with method "substring" */
const solution = (str, ending) => {        

        let sub = str.substring(str.length - ending.length);

        return (sub === ending) ? true : false;

}

/* Refactor solution with method "endsWith"*/

const solution = (str, ending) => str.endsWith(ending);


solution("abcde", "cde"); // True
solution("abcde", "dfe"); // False
solution("samurai", "ai") // True
