/* toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/

function capitalizeWord(word){
    let first = word.slice(0,1).toUpperCase();
    let rest = word.slice(1);
    
    word = first + rest;
    return word;
}

/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/ 

function toTitleCase(str){
    let array = str.split(" ");
    
    for (let i = 0; i < array.length; i++) {
        array[i] = capitalizeWord(array[i])
    }
    return array.join(" ");
}

// Test your functions
//console.log(capitalizeWord("pumpkin"));
//console.log(toTitleCase("pumpkin pranced purposefully across the pond"));

const paragraph = document.createElement("p");
const node = document.createTextNode(`${toTitleCase("pumpkin pranced purposefully across the pond")}`);

paragraph.appendChild(node);
document.body.appendChild(paragraph);