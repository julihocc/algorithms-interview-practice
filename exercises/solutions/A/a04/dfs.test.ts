

import dfs from './dfs';

/**
 * Jest test suite for DFS function.
 */
describe('DFS Function', () => {
    /**
     * Test case: DFS should mark connected components correctly.
     */
    test('DFS should mark connected components correctly', () => {
        
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

        
        dfs(matrix, visited, 0, 0);

        
        const expectedVisited: boolean[][] = [
            [true, false, false],
            [false, false, false],
            [false, false, false]
        ];

        
        expect(visited).toEqual(expectedVisited);
    });
});
