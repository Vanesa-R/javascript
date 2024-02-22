/* Instructions: Have a look at the following numbers.

 n | score
---+-------
 1 |  50
 2 |  150
 3 |  300
 4 |  500
 5 |  750
Can you find a pattern in it?
*/

const getScore = n => {
 
        let score = 0;
        
        for (let i = 1; i <= n; i++){  
           score += 50 * i
        }
        
        return score;        
}