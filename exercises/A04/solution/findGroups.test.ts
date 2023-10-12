import findGroups from './findGroups';

/**
 * Jest test suite for findGroups function.
 */
describe('findGroups Function', () => {
    /**
     * Test case: Find groups in a matrix.
     */
    test('Find groups in a matrix', () => {
        const matrix1: number[][] = [
            [1, 0, 0, 1],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [1, 0, 0, 1]
        ];
        expect(findGroups(matrix1)).toBe(5);
    });

    /**
     * Test case: Find groups in a matrix with a large group.
     */
    test('Find groups in a matrix with a large group', () => {
        const matrix2: number[][] = [
            [1, 0, 0, 0, 1],
            [1, 1, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 1, 1, 1],
            [1, 0, 0, 0, 1]
        ];
        expect(findGroups(matrix2)).toBe(3);
    });

    /**
     * Test case: Find groups in an empty matrix.
     */
    test('Find groups in an empty matrix', () => {
        const matrix3: number[][] = [];
        expect(findGroups(matrix3)).toBe(0);
    });

    /**
     * Test case: Find groups in a matrix with only zeros.
     */
    test('Find groups in a matrix with only zeros', () => {
        const matrix4: number[][] = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        expect(findGroups(matrix4)).toBe(0);
    });

    /**
     * Test case: Find groups in a matrix with only ones.
     */
    test('Find groups in a matrix with only ones', () => {
        const matrix5: number[][] = [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
        ];
        expect(findGroups(matrix5)).toBe(1);
    });

    /**
     * Test case: Find groups in a single-row matrix.
     */
    test('Find groups in a single-row matrix', () => {
        const matrix6: number[][] = [
            [1, 0, 1, 0, 1]
        ];
        expect(findGroups(matrix6)).toBe(3);
    });

    /**
     * Test case: Find groups in a single-column matrix.
     */
    test('Find groups in a single-column matrix', () => {
        const matrix7: number[][] = [
            [1],
            [0],
            [1],
            [0],
            [1]
        ];
        expect(findGroups(matrix7)).toBe(3);
    });
});
