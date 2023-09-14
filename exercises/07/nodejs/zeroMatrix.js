// zeroMatrix.js

/**
 * Zero out rows and columns in a matrix if any element is zero.
 * @param {Array<Array<number>>} matrix - The MxN matrix.
 */
function zeroMatrix(matrix) {
    const rows = matrix.length;
    if (!rows) return matrix;
    const cols = matrix[0].length;
    if (!cols) return matrix;
    const rowFlags = new Array(rows).fill(false);
    const colFlags = new Array(cols).fill(false);

    // First pass to identify rows and columns to be zeroed
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                rowFlags[i] = true;
                colFlags[j] = true;
            }
        }
    }

    // Second pass to zero out identified rows and columns
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (rowFlags[i] || colFlags[j]) {
                matrix[i][j] = 0;
            }
        }
    }
}

module.exports = zeroMatrix;
