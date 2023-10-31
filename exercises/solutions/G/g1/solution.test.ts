/**
 * 
 * const arr = [1,2,2,3,3,3,4,4,4,4,5,5,5,5,5]
 * );  
 */

import {findNumbersWithOddOccurrences} from './solution';
import {expect} from 'chai';

describe('findNumbersWithOddOccurrences', () => {
    test("generica case", () => {
        const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5];
        const result = findNumbersWithOddOccurrences(arr);
        expect(result).to.deep.equal([1, 3, 5]);
    })
})