import { expect } from 'chai';
import { arePermutations } from '../src/arePermutations';  // Update with the actual path

describe('arePermutations', () => {
    it('should return true for permutations', () => {
        expect(arePermutations('listen', 'silent')).to.be.true;
        expect(arePermutations('abc', 'cab')).to.be.true;
    });

    it('should return false for non-permutations', () => {
        expect(arePermutations('hello', 'world')).to.be.false;
        expect(arePermutations('abc', 'abcd')).to.be.false;
    });

    it('should return false for different lengths', () => {
        expect(arePermutations('a', 'aa')).to.be.false;
    });

    it('should handle empty strings', () => {
        expect(arePermutations('', '')).to.be.true;
        expect(arePermutations('a', '')).to.be.false;
    });
});
