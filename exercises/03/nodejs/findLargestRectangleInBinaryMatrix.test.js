const { findLargestRectangleInBinaryMatrix } = require('./findLargestRectangleInBinaryMatrix');

// Test case 1: General case
test('General case', () => {
    const matrix = [
        [1, 0, 1, 0, 0],
        [1, 0, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 0, 0, 1, 0]
    ];
    expect(findLargestRectangleInBinaryMatrix(matrix)).toBe(6);
});

// Test case 2: All zeros
test('All zeros', () => {
    const matrix = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    expect(findLargestRectangleInBinaryMatrix(matrix)).toBe(0);
});

// Test case 3: All ones
test('All ones', () => {
    const matrix = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ];
    expect(findLargestRectangleInBinaryMatrix(matrix)).toBe(9);
});

// Test case 4: Single row
test('Single row', () => {
    const matrix = [
        [1, 0, 1, 1, 0]
    ];
    expect(findLargestRectangleInBinaryMatrix(matrix)).toBe(2);
});

// Test case 5: Single column
test('Single column', () => {
    const matrix = [
        [1],
        [0],
        [1],
        [1]
    ];
    expect(findLargestRectangleInBinaryMatrix(matrix)).toBe(2);
});

// Test case 6: Empty matrix
test('Empty matrix', () => {
    const matrix = [];
    expect(findLargestRectangleInBinaryMatrix(matrix)).toBe(0);
});

// Test case 7: Matrix with one element
test('Matrix with one element', () => {
    const matrix = [[1]];
    expect(findLargestRectangleInBinaryMatrix(matrix)).toBe(1);
});

// Test case 8: Non-square matrix
test('Non-square matrix', () => {
    const matrix = [
        [1, 0, 1],
        [1, 1, 1]
    ];
    expect(findLargestRectangleInBinaryMatrix(matrix)).toBe(3);
});
