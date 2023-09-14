// Function to transpose a matrix
const transpose = (matrix) => {
    const rows = matrix.length;
    if (!rows) return matrix;
    const cols = matrix[0].length;
    if (!cols) return matrix;
    const transposed = Array.from({ length: cols }, () => Array(rows).fill(0));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            transposed[j][i] = matrix[i][j];
        }
    }
    return transposed;
};

// Function to reverse rows of a matrix
const reverseRows = (matrix) => {
    matrix.forEach((row) => row.reverse());
};

// Function to rotate a matrix 90 degrees clockwise
const rotateMatrix = (matrix) => {
    const transposed = transpose(matrix);
    reverseRows(transposed);
    return transposed;
};

module.exports = rotateMatrix;
