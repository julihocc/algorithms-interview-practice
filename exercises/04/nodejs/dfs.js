// DFS subroutine to mark connected components
function dfs(matrix, visited, row, col) {
    // Define the directions: up, down, left, right
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

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

module.exports = dfs;
