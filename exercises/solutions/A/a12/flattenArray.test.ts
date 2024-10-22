

import {flattenArrayRecursive} from './flattenArrayRecursive';
import {flattenArrayIterative} from './flattenArrayIterative';

describe('Flatten Array', () => {
    const testCases = [
        {input: [1, [2, [3, 4]], 5], output: [1, 2, 3, 4, 5]},
        {input: [], output: []},
        {input: [1, 2, 3], output: [1, 2, 3]},
    ];

    testCases.forEach((testCase, index) => {
        test(`Test Case ${index + 1} (Recursive)`, () => {
            expect(flattenArrayRecursive(testCase.input)).toEqual(testCase.output);
        });

        test(`Test Case ${index + 1} (Iterative)`, () => {
            expect(flattenArrayIterative(testCase.input)).toEqual(testCase.output);
        });
    });
});
