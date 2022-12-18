/* n children have got m pieces of candy - they want to eat as much as they can, but each child must eat exactly the same amount of candy.

Determine how many pieces of candy will be eaten by all the children together. Individual pieces of candy CANNOT be split. */

function candies(children, candy) {
    let each = Math.floor(candy / children);
    return each * children;
}

/**
* Test Suite 
describe('candies()', () => {
    it('returns ammount of total equal candy to be eaten', () => {
        // arrange
        const children = 3;
        const candy = 10;
        
        // act
        const result = candies(children, candy);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(9);
    });
});*/