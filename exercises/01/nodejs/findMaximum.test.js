const {findMaximum} = require('./findMaximum');  // Adjust the path as needed

// Test case 1: Normal array
test('finds the maximum value in [1, 5, 3, 9, 2]', () => {
    expect(findMaximum([1, 5, 3, 9, 2], 0, 4)).toBe(9);
});

// Test case 2: Array with negative numbers
test('finds the maximum value in [-1, -5, -3, -9, -2]', () => {
    expect(findMaximum([-1, -5, -3, -9, -2], 0, 4)).toBe(-1);
});

// Test case 3: Array with one element
test('finds the maximum value in [42]', () => {
    expect(findMaximum([42], 0, 0)).toBe(42);
});

// Test case 4: Empty array
test('returns undefined for an empty array', () => {
    expect(findMaximum([], 0, -1)).toBeUndefined();
});
