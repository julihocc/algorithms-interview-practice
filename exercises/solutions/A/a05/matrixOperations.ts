/**
 * Transposes a given matrix.
 * @param matrix - The input matrix to be transposed.
 * @returns The transposed matrix.
 */
const transpose = (matrix: number[][]): number[][] => {
    const rows = matrix.length;
    if (!rows) return matrix;
    const cols = matrix[0].length;
    if (!cols) return matrix;

    const transposed: number[][] = Array.from({length: cols}, () => Array(rows).fill(0));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            transposed[j][i] = matrix[i][j];
        }
    }
    return transposed;
};

/**
 * Reverses the rows of a given matrix.
 * @param matrix - The input matrix whose rows are to be reversed.
 */
const reverseRows = (matrix: number[][]): void => {
    matrix.forEach((row) => row.reverse());
};

/**
 * Rotates a given matrix 90 degrees clockwise.
 * @param matrix - The input matrix to be rotated.
 * @returns The rotated matrix.
 */
const rotateMatrix = (matrix: number[][]): number[][] => {
    const transposed = transpose(matrix);
    reverseRows(transposed);
    return transposed;
};

export {rotateMatrix};
