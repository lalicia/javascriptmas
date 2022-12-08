/*Check if the given string is a correct time representation of the 24-hr clock.*/

function validTime(str) {
    let array = str.split(":");
    //console.log(array)
    
    
        const hours = parseInt(array[0]);
        const mins = parseInt(array[1]);
        
        //console.log(hours, mins)
        
        if (hours <= 23 && mins <=59) {
            return true;
        } else {
            return false;
        }
    
}

/*Test Suite 
describe('validTime()', () => {
    it('returns true for valid time', () => {
        // arrange
        const str = '13:58';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(true);
    });

    it('returns false when invalid hours', () => {
        // arrange
        const str = '25:51';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(false);
    });

    it('returns false when invalid minutes', () => {
        // arrange
        const str = '02:76';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 3: ", result);
        
        // assert
        expect(result).toBe(false);
    });
});*/