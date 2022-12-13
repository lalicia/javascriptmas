/*  Emojify!

Popular services like Slack and Github allow for emoji shortscodes, meaning 
they will detect when a word in a sentence begins and ends with a colon (:)
and automatically replace that word with an emoji. 

These shortcodes allow users to add an emoji to their messages by typing a 
code rather than searching for an emoji from a list. 

For example, typing :smile: will replace that text with 😊 

*/

const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat":   "🐱",
    "dog":   "🐕"
}

/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, remove the colons and
look up the word in the emoji object. If the word is in the 
emojis object, return the corresponding emoji.
If it isn't, return the original word.

Example input: ":party:"
Example output: 🎉

Example input: ":flower:"
Example output: "flower"

Example input: "elephant"
Example output: "elephant"
*/ 

function emojifyWord(word){
    //console.log(word.charAt(0))
    if (word.charAt(0) !== ":") {
        return word
    }
    
    if (word.endsWith(":") && word.startsWith(":")) {
        word = word.slice(1, -1)
        
        // console.log(emojis)
        // console.log("the word is now: ", word)
    
        if (word in emojis) {
            return emojis[word]
        } else {
            return word
        }
    }
}

/* 2. Write a function to find any emoji shortcodes in a phrase.
Your function should map over each word in the phrase, emojify any word
that begins and ends with a colon, then return the emojified phrase. 
Feel free to use your emojify function from the previous exercise!

Example input: "I :heart: my :cat:"
Example output: "I 💜 my 🐱"

Example input: "I :heart: my elephant"
Example output: "I 💜 my elephant"
*/ 

function emojifyPhrase(phrase){
    phrase = phrase.split(" ");
    
    for (let i = 0; i < phrase.length; i++) {
        phrase[i] = emojifyWord(phrase[i]);
    }
    
    return phrase.join(" ");
}

// console.log(emojifyWord(":heart:"));
// console.log(emojifyWord(":flower:"));
// console.log(emojifyWord("elephant"));

// console.log(emojifyPhrase("I :heart: my :cat:"));
// console.log(emojifyPhrase("I :heart: my :elephant:"));

const para1 = document.createElement("p");
const node1 = document.createTextNode(emojifyPhrase("I :heart: my :cat:"))

para1.appendChild(node1);
document.body.appendChild(para1);

const para2 = document.createElement("p");
const node2 = document.createTextNode(emojifyPhrase("I :heart: my :elephant:"))

para2.appendChild(node2);
document.body.appendChild(para2);