/**
 * );  
 * );   
 * );    
 */

import {countDifferentBits} from './solution';
import {expect} from 'chai';

describe("countDifferentBits", () => {
    test('countDifferentBits(10, 20) should be 4', () => {
        expect(countDifferentBits(10, 20)).to.equal(4);
    })
    test('countDifferentBits(7, 10) should be 3', () => {
        expect(countDifferentBits(7, 10)).to.equal(3);
    })
    test('countDifferentBits(9, 9) should be 0', () => {
        expect(countDifferentBits(9, 9)).to.equal(0);
    })
})