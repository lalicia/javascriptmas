/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/

function whisper(string) {
    if (string.endsWith("!")) {
        string = string.slice(0, -1);
    }
    //console.log(string)
    
    return "shhh... " + string.toLowerCase();
}

const paragraph = document.createElement("p");
const node = document.createTextNode(whisper("WOAH imagine if this actually works!"));

paragraph.appendChild(node);
document.body.appendChild(paragraph);

//console.log(whisper("PLEASE STOP SHOUTING."));
//console.log(whisper("MA'AM, this is a Wendy's!"));