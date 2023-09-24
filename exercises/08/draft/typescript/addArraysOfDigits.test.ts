import { addArraysOfDigits } from './addArraysOfDigits';  // Adjust the import based on your file structure
import { test, expect } from '@jest/globals';

// Test case for adding [9, 9] and [1]
test('addArraysOfDigits with [9, 9] and [1]', () => {
    expect(addArraysOfDigits([9, 9], [1])).toEqual([1, 0, 0]);
});

// Test case for adding [1, 2, 3] and [4, 5, 6]
test('addArraysOfDigits with [1, 2, 3] and [4, 5, 6]', () => {
    expect(addArraysOfDigits([1, 2, 3], [4, 5, 6])).toEqual([5, 7, 9]);
});

// Test case for adding [1] and [9]
test('addArraysOfDigits with [1] and [9]', () => {
    expect(addArraysOfDigits([1], [9])).toEqual([1, 0]);
});
