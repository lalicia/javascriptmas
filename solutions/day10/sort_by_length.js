/*Given an array of strings, sort them in order of increasing lengths. If two strings have the same length, their relative order must be the same as the initial array.*/

function sortByLength(strs) {
    return strs.sort((a, b) => a.length - b.length);
}

/*Test Suite
describe('sortByLength()', () => {
    it('sorts the strings from shortest to longest', () => {
        // arrange
        const strs = ["abc", "", "aaa", "a", "zz"];
        
        // act
        const result = sortByLength(strs);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual(["", "a", "zz", "abc", "aaa"]);
    });
});*/