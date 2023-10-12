// test/findBalanceIndex.test.ts

import { expect } from 'chai';
import { findBalanceIndex } from '../src/findBalanceIndex';

describe('findBalanceIndex', () => {

    it('should return 3 for array [1, 2, 3, 4, 6]', () => {
        const result = findBalanceIndex([1, 2, 3, 4, 6]);
        expect(result).to.equal(3);
    });

    it('should return -1 for array [1, 2, 3]', () => {
        const result = findBalanceIndex([1, 2, 3]);
        expect(result).to.equal(-1);
    });

    it('should return -1 for an empty array', () => {
        const result = findBalanceIndex([]);
        expect(result).to.equal(-1);
    });

});
