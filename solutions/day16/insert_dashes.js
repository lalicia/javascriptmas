/* Transform a given sentence into a new one with dashes between each two consecutive letters.

Example: for inputString = "aba caba" the output should be "a-b-a c-a-b-a".*/

function insertDashes(arr) {
    arr = arr.split(" ");
    console.log(arr);
    
    for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split("")
        arr[i] = arr[i].join("-")
    }
    console.log(arr)
    
    return arr.join(" ");
}

/**
* Test Suite 
describe('insertDashes()', () => {
    it('insert dashes in between chars', () => {
        // arrange
        const value = "aba caba";
        
        // act
        const result = insertDashes(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe("a-b-a c-a-b-a");
    });
});*/