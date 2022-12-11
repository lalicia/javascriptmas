/* We Come in Peace!  
We've received what (we assume) is a message of peace and brotherhood from 
an alien planet. They almost got it right, but the messages are 
backward. Write functions to reverse the backward messages so we can 
read what they have to say! 
*/ 

const title = ":htraE no od ot ffutS";
const messages = [
            "maerc eci yrT",
            "rewoT leffiE tisiV",
            "noom eht ot snamuh etacoleR",
            "egrahc ni stac tuP", 
        ]

/* Step 1: Reverse a string
Write a function that takes in a string and returns the reverse 
of that string. An interviewer may want to check if you know your
string methods, or may want to know if you can reverse a string manually. 
Practice both ways! 

Example input: !htrae ot emocleW
Example output: Welcome to earth!
*/  

function reverseString(string){
    let arr = string.split("");
    
    let revArr = arr.reverse();
    
    return revArr.join("");
}

/*
Step 2: Now we'll reverse all strings in an array. Write a function that takes in
an array of strings and returns a new array with all strings reversed.

You can use reuse your reverseString() function, use string methods, or 
reverse the strings manually. 
*/ 

function reverseStringsInArray(arr){
    let newArr = arr.map((word) => {
        let splitWord = word.split("");
        let revSplit = splitWord.reverse();
        return revSplit.join("")
    });
    
    return newArr;
}

// console.log(reverseString(title));
// console.log(reverseStringsInArray(messages));


const para = document.createElement("p");
const node = document.createTextNode(`${reverseString(title)}`);

const toUse = reverseStringsInArray(messages);
console.log("to use: ", toUse)

function makeList(toUse) {
    console.log("in function array", toUse)
    // Create the list element:
    const list = document.createElement("ol");

    for (let i = 0; i < toUse.length; i++) {
        // Create the list item:
        let item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(toUse[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}


para.appendChild(node);
document.body.appendChild(para);

document.body.appendChild(makeList(toUse));