import dfs from './dfs';

/**
 * Main function to find groups of 1's in a 2D matrix.
 *
 * @param {number[][]} matrix - The 2D matrix representing the grid.
 * @returns {number} - The number of groups of 1's.
 */
function findGroups(matrix: number[][]): number {
    const rows = matrix.length;
    if (!rows) return 0;
    const cols = matrix[0].length;
    if (!cols) return 0;

    
    const visited: boolean[][] = Array.from({length: rows}, () => Array(cols).fill(false));

    let count = 0;

    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 1 && !visited[i][j]) {
                dfs(matrix, visited, i, j);
                count++;
            }
        }
    }

    return count;
}

export default findGroups;
