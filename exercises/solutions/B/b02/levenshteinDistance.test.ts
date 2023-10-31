import {expect} from 'chai';
import {levenshteinDistance} from './levenshteinDistance';

/**
 * @file levenshteinDistance.test.ts
 * @description Unit tests for the Levenshtein distance algorithm.
 */

describe('Levenshtein Distance', () => {
    it('should return 0 for identical strings', () => {
        const result: number = levenshteinDistance('apple', 'apple');
        expect(result).to.equal(0);
    });

    it('should return the correct distance for different strings', () => {
        const result: number = levenshteinDistance('apple', 'orange');
        expect(result).to.equal(5);
    });

    it('should return the length of the other string if one is empty', () => {
        const result: number = levenshteinDistance('', 'apple');
        expect(result).to.equal(5);
    });
});
