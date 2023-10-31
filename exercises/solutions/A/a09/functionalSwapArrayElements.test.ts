/**
 * @file functionalSwapArrayElements.test.ts
 * @path /tests/functionalSwapArrayElements.test.ts
 *
 * This file contains the unit tests for the functionalSwapArrayElements function.
 */

import {functionalSwapArrayElements} from './functionalSwapArrayElements';

/**
 * Unit tests for functionalSwapArrayElements function
 */
describe('functionalSwapArrayElements', () => {
    it('should swap elements correctly for an array of length 4', () => {
        const input: number[] = [0, 1, 2, 3];
        const expectedOutput: number[] = [0, 1, 2, 3];
        expect(functionalSwapArrayElements(input)).toEqual(expectedOutput);
    });

    it('should handle an empty array', () => {
        const input: number[] = [];
        const expectedOutput: number[] = [];
        expect(functionalSwapArrayElements(input)).toEqual(expectedOutput);
    });

    it('should handle an array with a single element', () => {
        const input: number[] = [0];
        const expectedOutput: number[] = [0];
        expect(functionalSwapArrayElements(input)).toEqual(expectedOutput);
    });

    it('should handle an array with all identical elements', () => {
        const input: number[] = [1, 1, 1, 1];
        const expectedOutput: number[] = [1, 1, 1, 1];
        expect(functionalSwapArrayElements(input)).toEqual(expectedOutput);
    });

    it('should swap elements correctly for an array of length 3', () => {
        const input: number[] = [2, 0, 1];
        const expectedOutput: number[] = [1, 2, 0];
        expect(functionalSwapArrayElements(input)).toEqual(expectedOutput);
    });
});
