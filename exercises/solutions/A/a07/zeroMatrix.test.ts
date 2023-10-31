

import {zeroMatrix} from './zeroMatrix';
import {expect, test} from '@jest/globals';


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


test('should handle an empty matrix', () => {
    const matrix: number[][] = [];
    zeroMatrix(matrix);
    expect(matrix).toEqual([]);
});


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
