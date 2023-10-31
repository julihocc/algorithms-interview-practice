/**
 * 
 * const translations = [['c', 't'], ['i', 'r'], ['k', 'p'], ['o', 'c'], ['r', 'o'], ['t', 'e'], ['t', 'f'], ['u', 'h'], ['w', 'p']];
 * const wordPairs = [['we', 'we'], ['can', 'the'], ['work', 'people'], ['it', 'of'], ['out', 'the']];
 * );  
 */

import {expect} from 'chai';
import {decipherWords} from './solution';

describe('decipherWords', () => {
    it('should correctly decipher words for the first example', () => {
        const translations = [['c', 't'], ['i', 'r'], ['k', 'p'], ['o', 'c'], ['r', 'o'], ['t', 'e'], ['t', 'f'], ['u', 'h'], ['w', 'p']];
        const wordPairs = [['we', 'we'], ['can', 'the'], ['work', 'people'], ['it', 'of'], ['out', 'the']];
        const result = decipherWords(translations, wordPairs);
        expect(result).to.deep.equal(['yes', 'no', 'no', 'yes', 'yes']);
    });

    it('should correctly decipher words for the second example', () => {
        const translations = [['a', 'c'], ['b', 'a'], ['a', 'b']];
        const wordPairs = [['aaa', 'abc'], ['abc', 'aaa'], ['acm', 'bcm']];
        const result = decipherWords(translations, wordPairs);
        expect(result).to.deep.equal(['yes', 'no', 'yes']);
    });
});
