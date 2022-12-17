
/* 
Scrimba mascot Pumpkin has won the grand prize at an international 
cat show. Below are Pumpkin's scores from the judges, as well as all the 
prizes he's won. In all the excitement of victory,
they've become a jumbled mess of nested arrays. Let's 
help Pumpkin by sorting it out. 

Write a function to flatten nested arrays of strings or
numbers into a single array. There's a method
for this, but pratice both doing it manually and using the method. 

Example input: [1, [4,5], [4,7,6,4], 3, 5]
Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
*/

const kittyScores = [
    [39, 99, 76], 89, 98, [87, 56, 90], 
    [96, 95], 40, 78, 50, [63]
];

const kittyPrizes = [
    ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
    ["🐟","💐", "💐"], "💵", "💵", ["🐟"], "🐟"
];

function flatten(arr){
    const flat = [];
    
    function handleFlat(array) {
        let i = 0
        
        while (i < array.length) {
            //if the item it's looking at is an array, calls the function on itself recursively
            //not sure why Array is capitalised but putting array makes it not a function ie array.isArray
            if (Array.isArray(array[i])) {
                handleFlat(array[i]);
            } else {
                //pushes items into a new array (flat)
                flat.push(array[i])
            }
            i++;
        }
    }
    
    handleFlat(arr);
    return flat;
    
    // //this is the built-in method
    // return arr.flat();
}

//console.log(flatten(kittyPrizes));
//console.log(flatten(kittyScores));

const para = document.createElement("p");
const para2 = document.createElement("p");

const node = document.createTextNode(flatten(kittyPrizes));
const node2 = document.createTextNode(flatten(kittyScores));

para.appendChild(node);
para2.appendChild(node2);

document.body.appendChild(para);
document.body.appendChild(para2);