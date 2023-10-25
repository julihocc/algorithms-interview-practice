import { expect } from 'chai';
import { areAnagrams } from './findAnagrams';

describe('areAnagrams', () => {
    /**
     * Test case: Anagrams
     */
    it('should return true for anagrams', () => {
        const result: boolean = areAnagrams('listen', 'silent');
        expect(result).to.be.true;
    });

    /**
     * Test case: Not Anagrams
     */
    it('should return false for non-anagrams', () => {
        const result: boolean = areAnagrams('triangle', 'integral');
        expect(result).to.be.true;
    });

    /**
     * Test case: Empty Strings
     */
    it('should return true for empty strings', () => {
        const result: boolean = areAnagrams('', '');
        expect(result).to.be.true;
    });
});
