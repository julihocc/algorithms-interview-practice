import {expect} from 'chai';
import {checkBalancedParentheses} from './BalancedParentheses';

describe('checkBalancedParentheses', () => {
    it('should return "Balanced" for a balanced series', () => {
        expect(checkBalancedParentheses('()()')).to.equal(0);
    });

    it('should return 1 for a series missing one closing parenthesis', () => {
        expect(checkBalancedParentheses('(()')).to.equal(1);
    });

    it('should return 1 for a series missing one opening parenthesis', () => {
        expect(checkBalancedParentheses('())')).to.equal(1);
    });

    it('should return 0 for an empty series', () => {
        expect(checkBalancedParentheses('')).to.equal(0);
    });
});
