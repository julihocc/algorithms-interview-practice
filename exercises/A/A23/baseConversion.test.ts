/**
 * @file baseConversion.test.ts
 */

import { baseConversion } from './baseConversion';
import { expect } from 'chai';

describe('Base Conversion', () => {
    it('should convert 10 to base 2', () => {
        const result = baseConversion(10, 2);
        expect(result).to.equal('1010');
    });

    it('should convert 10 to base 16', () => {
        const result = baseConversion(10, 16);
        expect(result).to.equal('A');
    });

    it('should return "Base out of range" for base less than 2', () => {
        const result = baseConversion(10, 1);
        expect(result).to.equal('Base out of range');
    });

    it('should return "Base out of range" for base greater than 36', () => {
        const result = baseConversion(10, 37);
        expect(result).to.equal('Base out of range');
    });
});
