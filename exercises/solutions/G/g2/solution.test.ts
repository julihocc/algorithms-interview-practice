/**
 * );  
 * );   
 */

import {closestNumberWithSameSetBits} from './solution';
import {expect} from 'chai';

describe("closestNumberWithSameSetBits", () => {
    test('closestNumberWithSameSetBits(10) should be 12', () => {
        expect(closestNumberWithSameSetBits(10)).to.equal(12);
    });
    test('closestNumberWithSameSetBits(7) should be 11', () => {
        expect(closestNumberWithSameSetBits(7)).to.equal(11);
    });
})
