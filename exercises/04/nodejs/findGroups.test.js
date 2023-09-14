const findGroups = require('./findGroups');

// Existing test
test('Find groups in a matrix', () => {
    const matrix1 = [
        [1, 0, 0, 1],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [1, 0, 0, 1]
    ];
    expect(findGroups(matrix1)).toBe(5);
});

// Additional test
test('Find groups in a matrix with a large group', () => {
    const matrix2 = [
        [1, 0, 0, 0, 1],
        [1, 1, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 1, 1, 1],
        [1, 0, 0, 0, 1]
    ];
    expect(findGroups(matrix2)).toBe(3);
});

// Edge case: Empty matrix
test('Find groups in an empty matrix', () => {
    const matrix3 = [];
    expect(findGroups(matrix3)).toBe(0);
});

// Edge case: Matrix with only zeros
test('Find groups in a matrix with only zeros', () => {
    const matrix4 = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    expect(findGroups(matrix4)).toBe(0);
});

// Edge case: Matrix with only ones
test('Find groups in a matrix with only ones', () => {
    const matrix5 = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ];
    expect(findGroups(matrix5)).toBe(1);
});

// Edge case: Single-row matrix
test('Find groups in a single-row matrix', () => {
    const matrix6 = [
        [1, 0, 1, 0, 1]
    ];
    expect(findGroups(matrix6)).toBe(3);
});

// Edge case: Single-column matrix
test('Find groups in a single-column matrix', () => {
    const matrix7 = [
        [1],
        [0],
        [1],
        [0],
        [1]
    ];
    expect(findGroups(matrix7)).toBe(3);
});
