import {findLargestRectangle} from './findLargestRectangle';


test('General case', () => {
    const matrix: number[][] = [
        [1, 0, 1, 0, 0],
        [1, 0, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 0, 0, 1, 0]
    ];
    expect(findLargestRectangle(matrix)).toBe(6);
});


test('All zeros', () => {
    const matrix: number[][] = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    expect(findLargestRectangle(matrix)).toBe(0);
});


test('All ones', () => {
    const matrix: number[][] = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ];
    expect(findLargestRectangle(matrix)).toBe(9);
});


test('Single row', () => {
    const matrix: number[][] = [
        [1, 0, 1, 1, 0]
    ];
    expect(findLargestRectangle(matrix)).toBe(2);
});


test('Single column', () => {
    const matrix: number[][] = [
        [1],
        [0],
        [1],
        [1]
    ];
    expect(findLargestRectangle(matrix)).toBe(2);
});


test('Empty matrix', () => {
    const matrix: number[][] = [];
    expect(findLargestRectangle(matrix)).toBe(0);
});


test('Matrix with one element', () => {
    const matrix: number[][] = [[1]];
    expect(findLargestRectangle(matrix)).toBe(1);
});


test('Non-square matrix', () => {
    const matrix: number[][] = [
        [1, 0, 1],
        [1, 1, 1]
    ];
    expect(findLargestRectangle(matrix)).toBe(3);
});
