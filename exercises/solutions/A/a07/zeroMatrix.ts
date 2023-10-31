

/**
 * Zero out rows and columns in a matrix if any element is zero.
 * @param {number[][]} matrix - The MxN matrix.
 * @returns {number[][]} - The modified matrix with zeroed rows and columns.
 */
function zeroMatrix(matrix: number[][]): number[][] {
    const rows: number = matrix.length;
    if (!rows) return matrix;
    const cols: number = matrix[0].length;
    if (!cols) return matrix;

    const rowFlags: boolean[] = new Array(rows).fill(false);
    const colFlags: boolean[] = new Array(cols).fill(false);

    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                rowFlags[i] = true;
                colFlags[j] = true;
            }
        }
    }

    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (rowFlags[i] || colFlags[j]) {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
}

export {zeroMatrix};
