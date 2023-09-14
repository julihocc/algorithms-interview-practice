const rotateMatrix = require('./rotateMatrix'); // Adjust the path as needed

// Test case for a 3x2 matrix (non-square)
test('Rotate a 3x2 matrix', () => {
    const matrix = [
        [1, 2],
        [3, 4],
        [5, 6]
    ];
    const rotated = rotateMatrix(matrix);
    expect(rotated).toEqual([
        [5, 3, 1],
        [6, 4, 2]
    ]);
});

// Test case for a 2x4 matrix (non-square)
test('Rotate a 2x4 matrix', () => {
    const matrix = [
        [1, 2, 3, 4],
        [5, 6, 7, 8]
    ];
    const rotated = rotateMatrix(matrix);
    expect(rotated).toEqual([
        [5, 1],
        [6, 2],
        [7, 3],
        [8, 4]
    ]);
});

// Test case for a 3x3 matrix (square)
test('Rotate a 3x3 matrix', () => {
    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    const rotated = rotateMatrix(matrix);
    expect(rotated).toEqual([
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3]
    ]);
});

// Test case for a 2x2 matrix (square)
test('Rotate a 2x2 matrix', () => {
    const matrix = [
        [1, 2],
        [3, 4]
    ];
    const rotated = rotateMatrix(matrix);
    expect(rotated).toEqual([
        [3, 1],
        [4, 2]
    ]);
});

// Test case for a 1x1 matrix (edge case)
test('Rotate a 1x1 matrix', () => {
    const matrix = [
        [1]
    ];
    const rotated = rotateMatrix(matrix);
    expect(rotated).toEqual([
        [1]
    ]);
});

// Test case for an empty matrix (edge case)
test('Rotate an empty matrix', () => {
    const matrix = [];
    const rotated = rotateMatrix(matrix);
    expect(rotated).toEqual([]);
});
