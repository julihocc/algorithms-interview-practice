import { findLargestRectangle } from './findLargestRectangle';

// Test case 1: General case
test('General case', () => {
    const matrix: number[][] = [
        [1, 0, 1, 0, 0],
        [1, 0, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 0, 0, 1, 0]
    ];
    expect(findLargestRectangle(matrix)).toBe(6);
});

// Test case 2: All zeros
test('All zeros', () => {
    const matrix: number[][] = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    expect(findLargestRectangle(matrix)).toBe(0);
});

// Test case 3: All ones
test('All ones', () => {
    const matrix: number[][] = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ];
    expect(findLargestRectangle(matrix)).toBe(9);
});

// Test case 4: Single row
test('Single row', () => {
    const matrix: number[][] = [
        [1, 0, 1, 1, 0]
    ];
    expect(findLargestRectangle(matrix)).toBe(2);
});

// Test case 5: Single column
test('Single column', () => {
    const matrix: number[][] = [
        [1],
        [0],
        [1],
        [1]
    ];
    expect(findLargestRectangle(matrix)).toBe(2);
});

// Test case 6: Empty matrix
test('Empty matrix', () => {
    const matrix: number[][] = [];
    expect(findLargestRectangle(matrix)).toBe(0);
});

// Test case 7: Matrix with one element
test('Matrix with one element', () => {
    const matrix: number[][] = [[1]];
    expect(findLargestRectangle(matrix)).toBe(1);
});

// Test case 8: Non-square matrix
test('Non-square matrix', () => {
    const matrix: number[][] = [
        [1, 0, 1],
        [1, 1, 1]
    ];
    expect(findLargestRectangle(matrix)).toBe(3);
});
