/**
 * DFS subroutine to mark connected components in a 2D matrix.
 *
 * @param {number[][]} matrix - The 2D matrix representing the grid.
 * @param {boolean[][]} visited - The 2D matrix to keep track of visited cells.
 * @param {number} row - The current row index.
 * @param {number} col - The current column index.
 */
function dfs(matrix: number[][], visited: boolean[][], row: number, col: number): void {
    // Define the directions: up, down, left, right
    const directions: [number, number][] = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    // Mark the current cell as visited
    visited[row][col] = true;

    // Explore the neighbors
    for (const [dx, dy] of directions) {
        const newRow = row + dx;
        const newCol = col + dy;

        // Check if the neighbor is valid and is a 1
        if (
            newRow >= 0 &&
            newRow < matrix.length &&
            newCol >= 0 &&
            newCol < matrix[0].length &&
            !visited[newRow][newCol] &&
            matrix[newRow][newCol] === 1
        ) {
            dfs(matrix, visited, newRow, newCol);
        }
    }
}

export default dfs;
