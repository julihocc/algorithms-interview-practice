const dfs = require('./dfs');

// Main function to find groups of 1's
function findGroups(matrix) {
    const rows = matrix.length;
    if (!rows) return 0;
    const cols = matrix[0].length;
    if (!cols) return 0;

    // Initialize visited matrix
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    let count = 0;

    // Loop through each cell in the matrix
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

module.exports = findGroups;
