import {searchMatrix} from './MatrixSearch';

test('Test Case 1: Element exists', () => {
    const matrix = [
        [1, 4, 7, 11, 15],
        [2, 5, 8, 12, 19],
        [3, 6, 9, 16, 22]
    ];
    const target = 5;
    expect(searchMatrix(matrix, target)).toBe(true);
});

test('Test Case 2: Element does not exist', () => {
    const matrix = [
        [1, 4, 7, 11, 15],
        [2, 5, 8, 12, 19],
        [3, 6, 9, 16, 22]
    ];
    const target = 20;
    expect(searchMatrix(matrix, target)).toBe(false);
});
