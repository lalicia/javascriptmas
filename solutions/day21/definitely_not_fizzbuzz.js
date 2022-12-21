/* Totally Not Another FizzBuzz 

Scrimba CEO Per Borgen wants you to write a program to grant special bonuses to all his employees based on their employee ID numbers! 

Scrimba has 100 employees and their employee ID numbers range from 1 - 100. If the employee's ID number is: 

Divisible by 3 - Vacation! 
Divisible by 5 - $100,000 bonus! 
Divisible by both 3 and 5 - JACKPOT! 1 Million and a Yacht!
Not divisible by 3 or 5 - :(
    
Write a program to loop through all the ID numbers and print their prize. 
Your function's output should look something like this: 

1 - :(
2 - :(
3 - Vacation! 
4 - :(
5 - $100,000 bonus!

Hint: Remainder operator, modulo 
 */

let array = [1, 2, 3, 4, 5]

function awardBonuses(array){
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 3 !== 0 && array[i] % 5 !== 0) {
            array[i] = `${array[i]}: - :(`
        }
        
        if(array[i] % 3 === 0 && array[i] % 5 === 0) {
            array[i] = `${array[i]}: - JACKPOT! 1 Million and a Yacht!`
        }
        
        if(array[i] % 3 === 0) {
            array[i] = `${array[i]}: - Vacation!`
        }
        
        if(array[i] % 5 === 0) {
            array[i] = `${array[i]}: - $100,000 bonus!`
        }
    }
    return array;
}

console.log(awardBonuses(array));