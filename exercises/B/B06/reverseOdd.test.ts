import { expect } from 'chai';
import { reverseOddPositionedWords } from './reverseOdd';

describe('reverseOddPositionedWords', () => {
    it('should reverse even positioned words (0-indexed)', () => {
        const input = "This is a test string";
        const output = reverseOddPositionedWords(input);
        expect(output).to.equal("This si a tset string");
    });

    it('should return an empty string for empty input', () => {
        const input = "";
        const output = reverseOddPositionedWords(input);
        expect(output).to.equal("");
    });

    it('should handle single word input', () => {
        const input = "Hello";
        const output = reverseOddPositionedWords(input);
        expect(output).to.equal("Hello");
    });
});
