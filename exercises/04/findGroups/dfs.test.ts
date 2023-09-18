// dfs.test.ts

import dfs from './dfs';

/**
 * Jest test suite for DFS function.
 */
describe('DFS Function', () => {
    /**
     * Test case: DFS should mark connected components correctly.
     */
    test('DFS should mark connected components correctly', () => {
        // Initialize the matrix and visited array
        const matrix: number[][] = [
            [1, 0, 1],
            [0, 1, 0],
            [1, 0, 1]
        ];
        const visited: boolean[][] = [
            [false, false, false],
            [false, false, false],
            [false, false, false]
        ];

        // Run DFS starting from (0, 0)
        dfs(matrix, visited, 0, 0);

        // Expected a visited array after DFS
        const expectedVisited: boolean[][] = [
            [true, false, false],
            [false, false, false],
            [false, false, false]
        ];

        // Assert that the visited array matches the expected array
        expect(visited).toEqual(expectedVisited);
    });
});
