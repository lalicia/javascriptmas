/*You're given a string that consists of only lowercase English letters. If vowels are given, a value of 1, and consonant are given a value of 2, return the sum of all the letters in the input string.*/

function countVowelConsonant(str) {
    str = str.split("");
    //console.log(str)

    //function that runs a function against all characters and adds their value to accumulator (0) then returns the full value
    const sum = str.reduce((accumulator, ch) => accumulator + charValue(ch), 0);

    function charValue(ch) {
        if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
            return 1
        } else {
            return 2
        }
    }
  
    return sum;
  
}



/**
* Test Suite 

describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'abcde';
        
        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});*/