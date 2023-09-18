// zeroMatrix.test.ts

import { zeroMatrix } from './zeroMatrix';
import { test, expect } from '@jest/globals';

// Test Case 1: Standard Matrix with Zeroes
test('should zero out rows and columns containing zero', () => {
    const matrix: number[][] = [
        [1, 2, 3],
        [4, 0, 6],
        [7, 8, 9]
    ];
    zeroMatrix(matrix);
    expect(matrix).toEqual([
        [1, 0, 3],
        [0, 0, 0],
        [7, 0, 9]
    ]);
});

// Test Case 2: Edge Case - Empty Matrix
test('should handle an empty matrix', () => {
    const matrix: number[][] = [];
    zeroMatrix(matrix);
    expect(matrix).toEqual([]);
});

// Test Case 3: Matrix with All Zeroes
test('should handle a matrix with all zeroes', () => {
    const matrix: number[][] = [
        [0, 0],
        [0, 0]
    ];
    zeroMatrix(matrix);
    expect(matrix).toEqual([
        [0, 0],
        [0, 0]
    ]);
});

// Test Case 4: Matrix with No Zeroes
test('should leave a matrix with no zeroes unchanged', () => {
    const matrix: number[][] = [
        [1, 2],
        [3, 4]
    ];
    zeroMatrix(matrix);
    expect(matrix).toEqual([
        [1, 2],
        [3, 4]
    ]);
});

// Test Case 5: Matrix with Zeroes Only in First Row and Column
test('should zero out entire matrix if zeroes are only in the first row and column', () => {
    const matrix: number[][] = [
        [0, 0, 0],
        [0, 1, 2],
        [0, 3, 4]
    ];
    zeroMatrix(matrix);
    expect(matrix).toEqual([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]);
});

// Test Case 6: Matrix with Multiple Zeroes in Different Rows and Columns
test('should handle multiple zeroes in different rows and columns', () => {
    const matrix: number[][] = [
        [1, 2, 0],
        [4, 0, 6],
        [7, 8, 9]
    ];
    zeroMatrix(matrix);
    expect(matrix).toEqual([
        [0, 0, 0],
        [0, 0, 0],
        [7, 0, 0]
    ]);
});
