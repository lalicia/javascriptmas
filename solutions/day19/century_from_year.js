/*Give a year return the century it's in. The first century spans from the year 1 upto and including the year 100, the second from the year 101 upto and including 200, and so on.*/

function centuryFromYear(num) {
    if(num <= 100) {
        return 1
    }
    
    if(num > 100 && num < 1000) {
        let arr = num.toString().split("");
        let cent = num.toString().slice(0, 1);
        
        if(Number(arr.slice(-1)) === 0) {
        return Number(Math.floor(cent))
        }
        
        if(Number(arr.slice(-1)) > 0) {
            return Number(Math.floor(cent) + 1);
        }     
    }
    
    if(num > 1000) {
        let arr = num.toString().split("");
        let cent2 = num.toString().slice(0, 2);
        //console.log(cent)
        
        if(Number(arr.slice(-1)) === 0) {
            return Number(Math.floor(cent2))
        }
        
        if(Number(arr.slice(-1)) > 0) {
            return Number(Math.floor(cent2) + 1);
        }
    }
}

/**
* Test Suite 

describe('centuryFromYear()', () => {
    it('returns current century', () => {
        // arrange
        const year = 1905;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(20);
    });
    
    it('returns current century for edge case of start of century', () => {
        // arrange
        const year = 1700;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(17);
    });
    
    it('returns current century', () => {
        // arrange
        const year = 701;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(8);
    });    
    
    it('returns current century', () => {
        // arrange
        const year = 25;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(1);
    });   
}); */