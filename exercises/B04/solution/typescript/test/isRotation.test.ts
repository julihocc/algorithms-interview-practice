import { isRotation } from '../src/isRotation';
import { expect } from 'chai';

describe('isRotation', () => {
    it('should return true for valid rotations', () => {
        const s1 = 'waterbottle';
        const s2 = 'erbottlewat';
        expect(isRotation(s1, s2)).to.be.true;
    });

    it('should return false for non-rotations', () => {
        const s1 = 'hello';
        const s2 = 'world';
        expect(isRotation(s1, s2)).to.be.false;
    });

    it('should return false for strings of different lengths', () => {
        const s1 = 'short';
        const s2 = 'longerstring';
        expect(isRotation(s1, s2)).to.be.false;
    });

    it('should return true for empty strings', () => {
        const s1 = '';
        const s2 = '';
        expect(isRotation(s1, s2)).to.be.true;
    });
});
