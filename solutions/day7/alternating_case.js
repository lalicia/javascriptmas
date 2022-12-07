/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str){
    return str.split("")
       .map((item, index) => 
           index % 2 == 0 ? item.toUpperCase() 
           : item.toLowerCase())
           .join("");
}

//alternative
// function altCaps(str){
//     let newStr = str.toLowerCase().split("");
//     //console.log(newStr);

//     for (let i = 0; i < newStr.length; i+=2) {
//        newStr[i] = newStr[i].toUpperCase();
//     }

//     //console.log(newStr)
//     return newStr.join("");
// }

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));

const result = altCaps("When you visit Portland you have to go to VooDoo Donuts");
//console.log(result);

const paragraph = document.createElement("p")
const text = document.createTextNode(`${result}`);
//console.log(text);

paragraph.appendChild(text);
document.body.appendChild(paragraph);