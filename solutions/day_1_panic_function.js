/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
*/


function panic(input) {
    input = input + "!";
    
    if (!input.includes(" ")) {
        return input.toUpperCase();
    }
    
    let array = input.split(" ");
    //console.log(array);
    
    array = array.map((word) => word.toUpperCase());
    //console.log(array);
    
    //array.toString("");
    let string = array.toString();
    string = string.replace(/,/g, " 😱 ");
    
    return string;
}


// Test your function
// console.log(panic("hello"))
// console.log(panic("I'm almost out of coffee")); 
// console.log(panic("winter is coming"))
